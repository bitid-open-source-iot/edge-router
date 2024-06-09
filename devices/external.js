const Q = require('q');
const scaling = require('../lib/scaling');
const interval = require('rxjs').interval;
const EventEmitter = require('events').EventEmitter;

module.exports = class extends EventEmitter {

    constructor(args) {
        super();

        this.io = args.io;
        this.ip = args.ip;
        this.port = args.port;
        this.type = args.type;
        this.values = [];
        this.txtime = args.txtime;
        this.pxtime = args.pxtime || 120;
        this.status = 'disconnected';
        this.timeout = 10;
        this.timeout = args.timeout || 60;
        this.barcode = args.barcode;
        this.enabled = args.enabled;
        this.deviceId = args.deviceId;
        this.id = args.id;
        this.lastConnection = new Date();
        this.publish = args.publish || false;

        this.io.map(item => {
            if (item.key == 'commsStatus') {
                this.timeout = parseInt(item.cofs)
            }
        })


        this.on('data', () => {
            this.status = 'connected';
            this.lastConnection = new Date();
            this.io.map(ip => {
                if (ip.key == 'commsStatus') {
                    ip.value = 1
                }
            })
        });

        this.on('timeout', (value) => {
            if (__socket) {
                __socket.send('devices:timeout', {
                    timeout: value,
                    deviceId: this.deviceId
                });
            };
            if (value == true) {
                this.io.map(ip => {
                    if (ip.key == 'commsStatus') {
                        ip.value = 0
                    }
                })
            }

            let inputs = this.io.map(ip => {
                return { inputId: ip.inputId, value: ip.value }
            })
            this.emit('commsStatus', inputs)

        });

        interval(10000).subscribe(count => {
            const now = new Date().getTime();
            let lastConnection = this.lastConnection?.getTime()
            if (now - lastConnection > (this.timeout * 60000) && this.status != 'disconnected') {
                this.status = 'disconnected';
                this.emit('timeout', true);
            } else if (this.status != 'connected') {
                this.status = 'connected';
                this.emit('timeout', false);
            };
        });


    }

    async forceCOFS() {
        /**
         * All devices need to have this function to conform. Not used for this device.
         */
    }

    async processMqttControl(event) {
        var deferred = Q.defer()
        var device = this
        if (device.type == 'external' && device.deviceId == event?.rtuId) {
            device.emit('data', {});
            var data = [];
            var found = false;

            await device.io.reduce((promise, input) => {
                return promise.then(async () => {
                    var deferred = Q.defer()
                    if (input.moduleId == event.moduleId) {
                        found = true;
                        var tmp

                        if (input.key != 'rtuDate') {
                            tmp = {
                                value: 0,
                                inputId: input.inputId
                            }
                        } else {
                            tmp = {
                                value: new Date(event.rtuDate).getTime(),
                                inputId: input.inputId
                            }
                            input.value = tmp.value
                        }

                        if (input.key != 'rtuDate') {
                            if (input?.externalData?.key.indexOf('digitalsIn') > -1) {
                                tmp.value = parseFloat(event.dataIn[input?.externalData?.key])
                                input.value = tmp.value
                            } else if (input?.externalData?.key.indexOf('TEXT') == -1 && typeof (event.dataIn[input?.externalData?.key]) != 'undefined' && event.dataIn[input?.externalData?.key] != null) {
                                switch (input.scaling?.type) {
                                    case ('ntc'):
                                        tmp.value = new scaling.module().scaleNTC(parseInt(event.dataIn[input?.externalData?.key]));
                                        input.value = new scaling.module().scaleNTC(parseInt(event.dataIn[input?.externalData?.key]));
                                        break;
                                    case ('none'):
                                        tmp.value = parseInt(event.dataIn[input?.externalData?.key]);
                                        input.value = parseInt(event.dataIn[input?.externalData?.key]);
                                        break;
                                    case ('linear'):
                                        tmp.value = new scaling.module().scaleAnalog(parseInt(event.dataIn[input?.externalData?.key]), input.scaling?.raw?.low, input.scaling?.raw?.high, input.scaling?.scaled?.low, input.scaling?.scaled?.high);
                                        input.value = new scaling.module().scaleAnalog(parseInt(event.dataIn[input?.externalData?.key]), input.scaling?.raw?.low, input.scaling?.raw?.high, input.scaling?.scaled?.low, input.scaling?.scaled?.high);
                                        break;
                                    case ('invert'):
                                        tmp.value = new scaling.module().scaleAnalog(parseInt(event.dataIn[input?.externalData?.key]), input.scaling.raw.low, input.scaling.raw.high, input.scaling.scaled.low, input.scaling.scaled.high, true);
                                        input.value = new scaling.module().scaleAnalog(parseInt(event.dataIn[input?.externalData?.key]), input.scaling.raw.low, input.scaling.raw.high, input.scaling.scaled.low, input.scaling.scaled.high, true);
                                        break;
                                    default:
                                        tmp.value = parseInt(event.dataIn[input?.externalData?.key]);
                                        input.value = parseInt(event.dataIn[input?.externalData?.key]);
                                        break;
                                };
                            } else if (input.key == 'commsStatus') {
                                tmp.value = parseInt(input.value)
                            } else {
                                console.log('wtf')
                            }
                        }

                        data.push(tmp);
                        deferred.resolve(data)
                    } else {
                        deferred.resolve()
                    }

                    return deferred.promise
                })

            }, Promise.resolve())
                .then(async (data) => {
                    if (data) {
                        __socket.send('devices:data', {
                            data: data,
                            deviceId: device.deviceId
                        });
                    };
                    deferred.resolve({})
                })
                .then(async () => {
                    await __router.updateDeviceInputsThenActionMapping(device.id, data)
                })
        };

        deferred.resolve()
        return deferred.promise
    }



}