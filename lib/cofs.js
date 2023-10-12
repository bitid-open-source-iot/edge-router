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
        // setTimeout(async () => {
        //     // await this.applyCOFSServer()
        //     // this.send()
        // }, 60000)

        clearInterval(this.rateLimitTmr)
        this.rateLimitTmr = setInterval(() => {
            this.rateLimitTxCount = this.rateLimitTxCountSP
        }, this.rateLimitTmrSP * 1000)

    }

    async applyCOFSServer() {
        let change = false;

        for (const device of __devices) {
            if (device.enabled == true && device.publish == true) {
                for (const io of device.io) {
                    if (io.publish.enabled == true) {
                        let moduleFound = __routerStatus.find(o => (o.moduleId == io.publish.moduleId && o.device.id == device.id));
                        if (!moduleFound) {
                            moduleFound = { device, moduleId: io.publish.moduleId, dataIn: { ...this.dataIn } }
                            __routerStatus.push(moduleFound);
                            change = true;
                        }

                        if (io.publish.key == 'digitalsIn' && (parseFloat(io.publish.bit) != -1)) {
                            let digitalsIn = moduleFound.dataIn[io.publish.key];
                            if ((digitalsIn & Math.pow(2, io.publish.bit)) > 0) {
                                digitalsIn = digitalsIn - Math.pow(2, io.publish.bit);
                            }
                            if (io.value == 1) {
                                digitalsIn = digitalsIn + Math.pow(2, io.publish.bit);
                            }

                            if (moduleFound.dataIn[io.publish.key] != digitalsIn) {
                                change = true;
                            }
                            moduleFound.dataIn[io.publish.key] = digitalsIn;
                        } else {
                            try {
                                if(!change){
                                    change = await this.checkCOFSMain(io);
                                }
                                moduleFound.dataIn[io.publish.key] = io.value;
                                if (io.publish.key == 'digitalsIn' && (parseFloat(io.publish.bit) == -1) && io.publish.moduleId == 2) {
                                    console.log(`Router status ${io.publish.key} ${moduleFound.dataIn[io.publish.key]}`);
                                }
                            } catch (e) {
                                console.error(e);
                            }
                        }
                    }
                }
            }
        }

        // Use await to wait for the send() function to resolve
        if (change) {
            await this.send();
        }
    }

    async checkCOFS(io) {
        return new Promise(async (resolve, reject) => {
            if (typeof (io.publish.lastCOFSValue) == 'undefined') {
                io.publish.lastCOFSValue = io.value;
                resolve(false);
            } else {
                if (Math.abs(io.publish.lastCOFSValue - io.value) >= Math.abs(parseFloat(io.cofs)) && parseFloat(io.cofs) != -1) {
                    console.log(`COFS Detected ${io.description} module ${io.publish.moduleId} cofs check value is ${io.value} lastCOFSValue ${io.publish.lastCOFSValue} cofs ${io.cofs}`);
                    io.publish.lastCOFSValue = io.value;
                    resolve(true);
                }else{
                    resolve(false);
                }
            }
        })
    }

    async checkCOFSMain(io) {
        return new Promise(async (resolve, reject) => {
            if (typeof (io.publish.lastCOFSMainValue) == 'undefined') {
                io.publish.lastCOFSMainValue = io.value;
                resolve(false);
            } else {
                if (Math.abs(io.publish.lastCOFSMainValue - io.value) >= Math.abs(parseFloat(io.cofs)) && parseFloat(io.cofs) != -1) {
                    console.log(`COFS Detected ${io.description} module ${io.publish.moduleId} cofs check value is ${io.value} lastCOFSMainValue ${io.publish.lastCOFSMainValue} cofs ${io.cofs}`);
                    io.publish.lastCOFSMainValue = io.value;
                    resolve(true);
                }else{
                    resolve(false);
                }
            }
        })
    }

    wait(args) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({});
            }, args);
        });
    }

    async send() {
        return new Promise(async (resolve, reject) => {
            try {
                this.rateLimitTxCount -= 1;

                if (this.rateLimitTxCount < 0) {
                    __logger.warn(`!!!! RATE LIMITING INTRODUCED !!!!`);
                    __logger.warn(`RATE LIMIT IS ${this.rateLimitTxCountSP} TRANSMITS EVERY ${this.rateLimitTmrSP} SECONDS`);
                } else {
                    for (const o of __routerStatus) {
                        if (o.moduleId > -1) {
                            console.log('PUBLISHING');

                            const rtuId = __settings.overideDeviceBarcode != 'true' ? o.device.deviceId : __settings.deviceId;
                            const barcode = __settings.overideDeviceBarcode != 'true' ? o.device.barcode : __settings.barcode;

                            __router.publish({
                                rtuId,
                                dataIn: o.dataIn,
                                barcode,
                                rtuDate: new Date().getTime(),
                                moduleId: o.moduleId
                            });

                        }
                    }
                    resolve({});

                }
            } catch (err) {
                console.error(err);
                reject(err);
            }

        });
    }


}
module.exports = COFS