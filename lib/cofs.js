const { async } = require('q');
const Q = require('q')

class COFS {
    constructor() {
        this.fixedTxTmr
        this.init()
    }

    init() {
        clearInterval(this.fixedTxTmr)
        this.fixedTxTmr = setInterval(() => {
            __logger.info('FIXED TXTIME REACHED');
            this.send()
        }, __settings.txtime * 60000);
        __logger.info('Will do initial publish in 1 minute');
        setTimeout(async()=>{
            await this.applyCOFSServer()
            this.send()
        }, 60000)
    }

    applyCOFSServer() {
        var deferred = Q.defer()
        let change = false

        __devices.reduce((promise, device) => {
            return promise.then(() => {
                if (device.enabled == true && device.publish == true) {
                    device.io.reduce((promise, io) => {
                        return promise.then(() => {

                            if (io.publish.enabled == true) {
                                let moduleFound = __routerStatus.find(o => o.moduleId == io.publish.moduleId)
                                if (!moduleFound) {
                                    __routerStatus.push({ moduleId: __routerStatus.length, dataIn: { ...dataIn } })
                                }

                                if (io.publish.key == 'digitalsIn' && (parseFloat(io.publish.bit) != -1)) {
                                    let digitalsIn = __routerStatus[io.publish.moduleId].dataIn[io.publish.key]
                                    if ((digitalsIn & Math.pow(2, io.publish.bit)) > 0) {
                                        digitalsIn = digitalsIn - Math.pow(2, io.publish.bit)
                                    }
                                    if (io.value == 1) {
                                        digitalsIn = digitalsIn + Math.pow(2, io.publish.bit)
                                    }

                                    if(__routerStatus[io.publish.moduleId].dataIn[io.publish.key] != digitalsIn){
                                        change = true
                                    }
                                    __routerStatus[io.publish.moduleId].dataIn[io.publish.key] = digitalsIn
                                } else {
                                    if(__routerStatus[io.publish.moduleId].dataIn[io.publish.key] != io.value){
                                        change = true
                                    }
                                    __routerStatus[io.publish.moduleId].dataIn[io.publish.key] = io.value
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
            .then(()=>{
                if(change){
                    this.send()
                }
            })

        return deferred.promise
    }

    send() {
        console.timeEnd('fixedTxTime')
        console.time('fixedTxTime')
        __routerStatus.map(o => {
            console.log('PUBLISHING')
            __router.publish({
                'rtuId': __settings.deviceId,
                'dataIn': o.dataIn,
                'barcode': __settings.barcode,
                'rtuDate': new Date().getTime(),
                'moduleId': o.moduleId
            });
        })
    }
}
module.exports = COFS