const Q = require('q');
const MQTT = require('mqtt');
const { async } = require('q');
const COFS = require('../lib/cofs')
const GetPublicIp = require('public-ip').v4;
const EventEmitter = require('events').EventEmitter;

module.exports = class extends EventEmitter {

    constructor(args) {
        super();
        this.data = {
            'dataIn': {
                'IP': '0.0.0.0',
                'AI1': 0,
                'AI2': 0,
                'AI3': 0,
                'AI4': 0,
                'CI1': 0,
                'CI2': 0,
                'CI3': 0,
                'CI4': 0,
                'CI5': 0,
                'CI6': 0,
                'CI7': 0,
                'CI8': 0,
                'SIG': 0,
                'BATT': 0,
                'AIExt1': 0,
                'AIExt2': 0,
                'AIExt3': 0,
                'AIExt4': 0,
                'AIExt5': 0,
                'AIExt6': 0,
                'AIExt7': 0,
                'AIExt8': 0,
                'digitalsIn': 0
            },
            'rtuId': this.deviceId,
            'barcode': this.barcode,
            'rtuDate': new Date().getTime(),
            'moduleId': 0
        };
        this.ip = '0.0.0.0';
        this.mqtt = null;
        this.status = 'disconnected';
        this.server = args.server;
        this.txtime = args.txtime;
        this.pxTime = args.pxTime || 120;
        this.publishEnabled = args.publishEnabled || false;
        this.timeout = args.timeout;
        this.barcode = args.barcode;
        this.deviceId = args.deviceId;

        this.cofs = new COFS()
        this.arrInterval = []
        this.arrTimeouts = []

        this.fixedTransmit =
            setInterval(() => {
                this.transmit()
            }, this.txtime * 60000)

        this.sendOnce // = setTimeout(()=>this.cofs.send(), 5000)

        // this.clearArrTimeouts()

        this.connect();
    }

    // async tmrSendOnce(self){
    //             return null
    // }

    removeIntervals() {
        this.arrInterval.map(o => {
            clearInterval(o)
        })
        this.arrInterval = []
    }

    updateDeviceInputsThenActionMapping(deviceId, inputs) {
        __devices.reduce((promise, device) => {
            return promise.then(() => {
                if (device.deviceId == deviceId) {
                    device.io.reduce((promise, io) => {
                        return promise.then(() => {
                            inputs.reduce((promise, ip) => {
                                return promise.then(() => {
                                    if (io.inputId == ip.inputId) {
                                        io.value = ip.value
                                    }

                                })
                            }, Promise.resolve())
                        })
                    }, Promise.resolve())
                }
            })
        }, Promise.resolve())
            .then(() => {
                __router.mapping(deviceId, inputs)
            })

    }


    async mapping(deviceId, inputs) {
        var deferred = Q.defer()
        let index = 0

        await __settings.mapping.reduce((promise, item) => {
            return promise.then(async () => {
                var deferred = Q.defer()

                index++
                if (item.source.deviceId == deviceId) {

                    await inputs.reduce((promise, input) => {
                        return promise.then(async () => {
                            var deferred = Q.defer()
                            if (item.source.inputId == input.inputId) {
                                var maskSourceValue = null;
                                if (item.source.mask != -1) {
                                    maskSourceValue = input.value & item.source.mask;
                                } else {
                                    maskSourceValue = input.value;
                                };


                                await __devices.reduce((promise, device) => {
                                    return promise.then(async () => {
                                        var deferred = Q.defer()
                                        if (item.destination.deviceId == device.deviceId) {
                                            let deviceCurrentState = null;
                                            let maskDestinationValue = null;
                                            if (item.destination.mask != -1) {


                                                await device.values.reduce((promise, dv) => {
                                                    return promise.then(async () => {
                                                        var deferred = Q.defer()
                                                        if (dv.inputId == item.destination.inputId) {
                                                            deviceCurrentState = dv.value;
                                                        };
                                                        deferred.resolve({})
                                                        return deferred.promise

                                                    })
                                                }, Promise.resolve())
                                                    .then(() => {
                                                        deferred.resolve({})
                                                    })

                                                let dontTouchVal = 0
                                                maskDestinationValue = maskSourceValue & item.destination.mask;
                                                if ((deviceCurrentState & item.destination.mask > 0) && deviceCurrentState != -1) {
                                                    dontTouchVal = deviceCurrentState - (deviceCurrentState & item.destination.mask)
                                                };
                                                maskDestinationValue = dontTouchVal + maskDestinationValue;
                                            } else {
                                                // __settings.mapping
                                                maskDestinationValue = maskSourceValue;
                                            };
                                            for (let i = 0; i < device.io.length; i++) {
                                                if (device.io[i].inputId == item.destination.inputId) {
                                                    __logger.info(device.io[i].description + ': ' + maskDestinationValue);
                                                    break;
                                                };
                                            };
                                            // await this.wait(100)
                                            await device.write(item.destination.inputId, maskDestinationValue);
                                            deferred.resolve({})
                                        } else {
                                            deferred.resolve({})
                                        }
                                        return deferred.promise
                                    })
                                }, Promise.resolve())
                                    .then(() => {
                                        deferred.resolve({})
                                    })

                            } else {
                                deferred.resolve({})
                            }

                            return deferred.promise

                        }, Promise.resolve())
                            .then(() => {
                                deferred.resolve({})
                            })

                    }, Promise.resolve())
                        .then(() => {
                            deferred.resolve({})
                        })


                };
                deferred.resolve({})

                return deferred.promise
            })
        }, Promise.resolve())
            .then(async () => {
                await this.cofs.applyCOFSServer()
                // await this.cofs.send()
                // await this.clearArrTimeouts()
                // this.arrTimeouts.push(this.sendOnce())
                if(this.sendOnce){
                    clearTimeout(this.sendOnce)
                    this.sendOnce = null
                }
                this.sendOnce = setTimeout(()=>this.cofs.send(), 5000)
                deferred.resolve({})
            })

        return deferred.promise
    }

    // clearArrTimeouts() {
    //     var deferred = Q.defer()
    //     this.arrTimeouts.reduce((promise, o) => {
    //         return promise.then(() => {
    //             clearTimeout(o)
    //         })
    //     }, Promise.resolve())
    //         .then(() => {
    //             this.arrTimeouts = []
    //             deferred.resolve()
    //         })
    //     return deferred.promise
    // }



    async wait(args) {
        var deferred = Q.defer();
        setTimeout(() => {
            deferred.resolve({});
        }, args);
        return deferred.promise;
    }

    async connect() {
        let self = this
        this.status = 'connecting';

        __logger.info('Edge Router - Connecting to socket!');

        this.mqtt = MQTT.connect([this.server.host, ':', this.server.port].join(''), {
            'host': this.server.host,
            'port': this.server.port,
            'clean': true,
            'username': this.server.username,
            'password': this.server.password,
            'keepalive': 5,
            'reconnectPeriod': 5000
        });

        this.mqtt.on('error', (error) => {
            __logger.error(error);
        });

        this.mqtt.on('close', () => {
            this.removeIntervals()
            this.status = 'disconnected';
            __logger.error('Edge Router - Socket closed!');
        });

        this.mqtt.on('connect', () => {
            this.emit('connected');

            this.status = 'connected';

            __logger.info('Edge Router - Socket connected & subscribing to topics!');


            this.mqtt.subscribe(this.server.subscribe.data, (error) => {
                if (error) {
                    __logger.error(error);
                } else {
                    __logger.info('Edge Router - Subscribed to data');
                };
            });

            this.mqtt.subscribe(this.server.subscribe.control, (error) => {
                if (error) {
                    __logger.error(error);
                } else {
                    __logger.info('Edge Router - Subscribed to control');
                };
            });

            this.mqtt.subscribe('/edgerouter/control', (error) => {
                if (error) {
                    __logger.error(error);
                } else {
                    __logger.info('Edge Router - Subscribed to /edgerouter/control');
                };
            });


            __logger.info('Edge Router - Starting transmit loop!');

            // setTimeout(() => {
            //     this.transmit();
            // }, 10000)

            this.removeIntervals()
            this.arrInterval.push(this.fixedTransmit)
        });

        this.mqtt.on('message', async (topic, message) => {
            console.log('topic', topic)
            switch (topic) {
                case ('/rock/v1.1/data'):
                    this.emit('data', JSON.parse(message.toString()));
                    break;
                case ('/rock/v1.1/control'):
                    await this.emit('control', JSON.parse(message.toString()));
                    break;
                case ('/edgerouter/control'):
                    this.emit('edge-router-control', JSON.parse(message.toString()))
                    break
                // case ('/kGateway/edge/data'):
                //     break;
                default:
                    // if (topic.includes('kbeacon/publish/')) {
                    //     this.emit('data', { topic, message })
                    // } else {
                    console.error('unhandled switch mqtt topic', topic);
                // };
                // break;
            };
        });

        this.mqtt.on('reconnect', () => {
            this.status = 'connecting';
            __logger.error('Edge Router - Socket reconnecting!');
        });

        this.mqtt.on('disconnect', () => {
            this.status = 'disconnected';
            __logger.error('Edge Router - Socket was disconnected!');
        });
    }

    async transmit() {
        if (this.mqtt?.connected && this.publishEnabled) {
            __logger.info('Edge Router - Transmitting data to socket!')
            // this.data.rtuId = this.deviceId;
            // this.data.barcode = this.barcode;
            // this.data.dataIn.IP = this.ip;
            this.cofs.send()
            // this.publish(this.data);
        } else {
            // __logger.warn('Edge Router - Trying to transmit even though socket not connected!');
        };
    }

    async publish(data) {
        if (this.mqtt?.connected) {
            __logger.info(`publish ${this.server.subscribe.data} : ${JSON.stringify(data)}`)
            this.mqtt.publish(this.server.subscribe.data, JSON.stringify(data));
        } else {
            __logger.warn('Edge Router - Trying to transmit even though socket not connected!');
        };
    }


    async publishToTopic(topic, data) {
        if (this.mqtt?.connected) {
            __logger.info(`publishToTopic ${topic} : ${JSON.stringify(data)}`)
            this.mqtt.publish(topic, JSON.stringify(data));
        } else {
            __logger.warn('Edge Router - Trying to transmit even though socket not connected!');
        };
    }

}
