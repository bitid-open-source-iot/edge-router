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

        this.fixedTransmit
        this.tmrPublish

        this.sendOnce = true

        this.connect();

        this.init()
    }

    init() {
        this.fixedTransmit = setInterval(() => {
            try {
                // __devices.map(d => d.forceCOFS())
                this.cofs.applyCOFSServer()
            } catch (e) {
                console.error('fixedTransmit Error', e)
            }
        }, this.txtime * 60000)

        this.tmrPublish = setInterval(() => {
            try {
                this.publishOnInterval()
            } catch (e) {
                console.error('tmrPublish Error', e)
            }
        }, 500)


    }

    // updateExternalCommsStatus(deviceId, inputs) {
    //     let allInputs = []
    //     allInputs.push(inputs[0])
    //     __devices.reduce((promise, device) => {
    //         return promise.then(() => {
    //             if (device.deviceId == deviceId) {
    //                 device.io.reduce((promise, io) => {
    //                     return promise.then(() => {
    //                         //     var deferred = Q.defer()

    //                         //     if(io.key == 'commsStatus'){
    //                         //         io.value = inputs[0].value
    //                         //     }

    //                         //     allInputs.push({inputId: io.inputId, value: io.value})

    //                         //     deferred.resolve()
    //                         //     return deferred.promise
    //                         if (io.inputId != inputs[0].inputId) {
    //                             allInputs.push({ inputId: io.inputId, value: io.value })
    //                         } else {
    //                             inputs.reduce((promise, ip) => {
    //                                 return promise.then(() => {
    //                                     if (io.inputId == ip.inputId) {
    //                                         io.value = ip.value
    //                                     }
    //                                 })
    //                             }, Promise.resolve())
    //                         }

    //                     })
    //                 }, Promise.resolve()
    //                     .then(() => {
    //                         __socket.send('devices:data', {
    //                             data: device.io,
    //                             deviceId: device.deviceId
    //                         });

    //                     })
    //                 )
    //             }
    //         })
    //     }, Promise.resolve())
    //         .then(() => {
    //             __router.mapping(deviceId, allInputs)
    //         })
    // }

    updateDeviceInputsThenActionMapping(id, inputs) {
        let deviceItem = null
        return __devices.reduce((promise, device) => { // add return here
            deviceItem = device
            return promise.then(() => {
                if (device.id == id) {
                    // add return here
                    return device.io.reduce((promise, io) => {
                        return promise.then(() => {
                            // add return here
                            return inputs.reduce((promise, ip) => {
                                return promise.then(() => {
                                    if (io.inputId == ip.inputId) {
                                        if(io?.masking?.enabled == true){
                                            io.value = (ip.value & Math.pow(2, io.masking.bit)) >> io.masking.bit
                                        }else{
                                            io.value = ip.value
                                        }
                                        
                                    }
                                })
                            }, Promise.resolve())
                        })
                    }, Promise.resolve())
                        .then(() => {
                            __socket.send('devices:data', {
                                data: deviceItem.io,
                                deviceId: deviceItem.deviceId
                            });
                        })
                }
            })
        }, Promise.resolve())
            .then(async () => {
                try {
                    await __router.mapping(deviceItem.deviceId, inputs)
                } catch (e) {
                    console.error(e)
                }

            })
    }


    async mapping(deviceId, inputs) {
        return new Promise(async (resolve, reject) => {
            let index = 0;
            try {
                // Use a for..of loop to iterate through the array and simplify the code
                for (const item of __settings.mapping) {
                    index++;

                    // Use continue to skip to the next iteration if the deviceId doesn't match
                    // if (item.source.deviceId != deviceId) {
                    //     continue;
                    // }

                    // Use try..catch to handle errors and simplify the code
                    try {
                        for (const input of inputs) {
                            if (item.source.inputId != input.inputId) {
                                continue;
                            }

                            let maskSourceValue = null;

                            if (item.source.mask != -1) {
                                maskSourceValue = input.value & item.source.mask;
                            } else {
                                maskSourceValue = input.value;
                            }

                            // Use find() to simplify the code and avoid unnecessary iterations
                            const device = __devices.find(d => d.deviceId === item.destination.deviceId);

                            if (!device) {
                                continue;
                            }

                            let deviceCurrentState = null;
                            let maskDestinationValue = null;

                            if (item.destination.mask != -1) {
                                for (const dv of device.values) {
                                    if (dv.inputId == item.destination.inputId) {
                                        deviceCurrentState = (dv.value & Math.pow(2,item.destination.mask))>> item.destination.mask
                                    }
                                }

                                let dontTouchVal = 0;
                                maskDestinationValue = maskSourceValue & item.destination.mask;

                                if (deviceCurrentState & item.destination.mask > 0 && deviceCurrentState != -1) {
                                    dontTouchVal = deviceCurrentState - (deviceCurrentState & item.destination.mask);
                                }

                                

                                maskDestinationValue = dontTouchVal + maskDestinationValue;
                            } else {
                                maskDestinationValue = maskSourceValue;
                            }

                            // Use find() to simplify the code and avoid unnecessary iterations
                            const io = device.io.find(io => io.inputId === item.destination.inputId);

                            if (!io) {
                                continue;
                            }

                            __logger.info(io.description + ': ' + maskDestinationValue);
                            try {
                                await device.write(item.destination.inputId, maskDestinationValue);
                            } catch (e) {
                                console.error(e)
                            }

                        }
                    } catch (err) {
                        // Handle errors
                        console.error(err);
                        reject(err);
                    }
                }

                // Use await to wait for the COFS server to apply
                try {
                    await this.cofs.applyCOFSServer();
                    resolve();
                } catch (err) {
                    reject(err);
                }
            } catch (e) {
                reject(e)
            }


        });
    }

    async wait(args) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({});
            }, args);
        });
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
            // this.removeIntervals()
            this.status = 'disconnected';
            __logger.error('Edge Router - Socket closed!');
        });

        this.mqtt.on('connect', async () => {
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


            // if(this.fixedTransmit){
            //     clearInterval(this.fixedTransmit)
            //     this.fixedTransmit = null
            // }
            // this.fixedTransmit = setInterval(() => {
            //     // this.transmit()
            //     __devices.map(d=> d.forceCOFS())
            // }, this.txtime * 60000)
        });

        this.mqtt.on('message', async (topic, message) => {
            // console.log('topic', topic)
            __byteLen += message.byteLength
            // console.log('__byteLen', __byteLen)
            switch (topic) {
                // case ('/rock/v1.1/data'):
                case (__settings.server.subscribe.data):
                    this.emit('data', JSON.parse(message.toString()));
                    break;
                // case ('/rock/v1.1/control'):
                case (__settings.server.subscribe.control):
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
            this.cofs.send()
        } else {
            // __logger.warn('Edge Router - Trying to transmit even though socket not connected!');
        };
    }



    publish(data) {
        __arrPublisher.push(data)
    }

    publishOnInterval() {
        if (__arrPublisher.length > 0) {
            this.publishArrFromTimer(__arrPublisher.shift())
        }
    }

    async publishArrFromTimer(data) {
        try {
            if (this.mqtt?.connected) {
                __logger.info(`publish ${this.server.subscribe.data} : ${JSON.stringify(data)}`);
                __logger.info(`keeping an eye on the arrPublisher ${__arrPublisher.length}`)
                await this.mqtt.publish(this.server.subscribe.data, JSON.stringify(data));
            } else {
                __logger.warn('Edge Router - Trying to transmit even though socket not connected!');
            }
        } catch (err) {
            // Handle errors
            console.error(err);
        }
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
