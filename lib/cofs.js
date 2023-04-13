const { async } = require('q');
const Q = require('q')

class COFS {


    constructor() {
        this.fixedTxTmr
        this.rateLimitTmrSP = __settings?.rateLimits?.rateLimitTmrSP || 60 //seconds
        this.rateLimitTmr
        this.rateLimitTxCountSP = __settings?.rateLimits?.rateLimitTxCountSP || 4
        this.rateLimitTxCount = this.rateLimitTxCountSP

        if (!__settings.rateLimits) {
            __settings.rateLimits = {
                rateLimitTmrSP: this.rateLimitTmrSP,
                rateLimitTxCountSP: this.rateLimitTxCountSP
            }
        }

        this.dataIn = {
            'AI1': 0,
            'AI2': 0,
            'AI3': 0,
            'AI4': 0,
            'AIExt1': 0,
            'AIExt2': 0,
            'AIExt3': 0,
            'AIExt4': 0,
            'AIExt5': 0,
            'AIExt6': 0,
            'AIExt7': 0,
            'AIExt8': 0,
            'BATT': 0,
            'CI1': 0,
            'CI2': 0,
            'CI3': 0,
            'CI4': 0,
            'CI5': 0,
            'CI6': 0,
            'CI7': 0,
            'CI8': 0,
            'LAT': 0,
            'LNG': 0,
            'SIG': 0,
            'TEXT1': 0,
            'TEXT2': 0,
            'TEXT3': 0,
            'TEXT4': 0,
            'txFlag': 0,
            'digitalsIn': 0
        }

        this.init()
    }

    init() {
        clearInterval(this.fixedTxTmr)
        this.fixedTxTmr = setInterval(() => {
            __logger.info('FIXED TXTIME REACHED');
            this.send()
        }, __settings.txtime * 60000);
        __logger.info('Will do initial publish in 1 minute');
        setTimeout(async () => {
            await this.applyCOFSServer()
            this.send()
        }, 60000)

        clearInterval(this.rateLimitTmr)
        this.rateLimitTmr = setInterval(() => {
            this.rateLimitTxCount = this.rateLimitTxCountSP
        }, this.rateLimitTmrSP * 1000)

    }

    applyCOFSServer() {
        var deferred = Q.defer()
        let change = false

        __devices.reduce((promise, device) => {
            return promise.then(() => {
                if (device.enabled == true && device.publish == true) {
                    device.io.reduce((promise, io) => {
                        return promise.then(async () => {

                            if (io.publish.enabled == true) {
                                let moduleFound = __routerStatus.find(o => o.moduleId == io.publish.moduleId)
                                if (!moduleFound) {
                                    for (let index = 0; index <= io.publish.moduleId; index++) {
                                        if (!__routerStatus[index]) {
                                            __routerStatus.push({ device: device, moduleId: __routerStatus.length, dataIn: { ...this.dataIn } })
                                        }
                                    }
                                } else {
                                    __routerStatus[io.publish.moduleId].device = device
                                }



                                if (io.publish.key == 'digitalsIn' && (parseFloat(io.publish.bit) != -1)) {
                                    let digitalsIn = __routerStatus[io.publish.moduleId].dataIn[io.publish.key]
                                    if ((digitalsIn & Math.pow(2, io.publish.bit)) > 0) {
                                        digitalsIn = digitalsIn - Math.pow(2, io.publish.bit)
                                    }
                                    if (io.value == 1) {
                                        digitalsIn = digitalsIn + Math.pow(2, io.publish.bit)
                                    }

                                    if (__routerStatus[io.publish.moduleId].dataIn[io.publish.key] != digitalsIn) {
                                        change = true
                                    }
                                    __routerStatus[io.publish.moduleId].dataIn[io.publish.key] = digitalsIn
                                } else {
                                    if (typeof (io.publish.lastCOFSValue) == 'undefined') {
                                        io.publish.lastCOFSValue = io.value
                                    } else {
                                        // console.log(`${io.description} cofs check value is ${io.value}`, Math.abs(io.publish.lastCOFSValue - io.value))

                                        if (Math.abs(io.publish.lastCOFSValue - io.value) > parseFloat(io.cofs)) {
                                            console.log(`COFS Detected ${io.description} module ${io.publish.moduleId} cofs check value is ${io.value} lastCOFSValue ${io.publish.lastCOFSValue}`)
                                            io.publish.lastCOFSValue = io.value
                                            change = true
                                        }
                                    }

                                    // if(__routerStatus[io.publish.moduleId].dataIn[io.publish.key] != io.value){
                                    //     io.publish.lastCOFSValue = io.value
                                    //     change = true
                                    // }
                                    try {
                                        __routerStatus[io.publish.moduleId].dataIn[io.publish.key] = io.value
                                        if (io.publish.key == 'digitalsIn' && (parseFloat(io.publish.bit) == -1) && io.publish.moduleId == 2) {
                                            console.log(` Router status ${io.publish.key} ${__routerStatus[io.publish.moduleId].dataIn[io.publish.key]}`)
                                            // console.log(`${io.description} module ${io.publish.moduleId} cofs check value is ${io.value} lastCOFSValue ${io.publish.lastCOFSValue} publishkey ${io.publish.key} bit ${parseFloat(io.publish.bit)}`)
                                        }
                                    } catch (e) {
                                        console.error(e)
                                    }

                                }
                            }


                        })
                    }, Promise.resolve())
                }
            })
        }, Promise.resolve())
            .then(() => {
                deferred.resolve()
            })
            .then(async () => {
                if (change) {
                    await this.send()
                }
            })

        return deferred.promise
    }

    QWait(val) {
        var deferred = Q.defer()

        setTimeout(() => {
            deferred.resolve()
        }, val);

        return deferred.promise
        // return new Promise(resolve => {
        //     setTimeout(() => {
        //         resolve(val);
        //     }, val);
        // });
    }

    send() {
        var deferred = Q.defer()
        this.rateLimitTxCount -= 1
        if (this.rateLimitTxCount < 0) {
            __logger.warn(`!!!! RATE LIMMITING INTRODUCED !!!!`);
            __logger.warn(`RATE LIMIT IS ${this.rateLimitTxCountSP} TRANSMITS EVERY ${this.rateLimitTmrSP} SECONDS`);
        } else {
            console.timeEnd('fixedTxTime')
            console.time('fixedTxTime')
            __routerStatus.reduce((promise, o) => {
                return promise.then(async () => {
                    
                    console.log('PUBLISHING')
                    if (__settings.overideDeviceBarcode != 'true') {
                        await __router.publish({
                            'rtuId': o.device.deviceId,
                            'dataIn': o.dataIn,
                            'barcode': o.device.barcode,
                            'rtuDate': new Date().getTime(),
                            'moduleId': o.moduleId
                        });
                    } else {
                        await __router.publish({
                            'rtuId': __settings.deviceId,
                            'dataIn': o.dataIn,
                            'barcode': __settings.barcode,
                            'rtuDate': new Date().getTime(),
                            'moduleId': o.moduleId
                        });
                    }
                })
            }
            , Promise.resolve())
                .then(async () => {
                    await this.QWait(10000);
                    deferred.resolve()
                })
        }


        return deferred.promise
    }
}
module.exports = COFS