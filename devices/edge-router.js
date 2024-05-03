const MQTT = require('mqtt');
const TCPCLIENT = require('../lib/tcpClient')
const EventEmitter = require('events').EventEmitter;
const dates = require('../lib/dates');

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
        this.cofs = args.cofs;


        this.arrInterval = []
        this.arrTimeouts = []

        this.fixedTransmit
        this.tmrPublish

        this.sendOnce = true

        if (__settings.commsOption) {
            if (__settings.commsOption == 0) {
                this.connectMQTT();
                this.init()
            }else if (__settings.commsOption == 1) {
                this.connectTCPClient();    
                this.init()
            } else {
                console.log('commsOption set to none')
            }
        } else {
            console.log('commsOption not set')
        }
    }

    init() {
        this.fixedTransmit = setInterval(() => {
            try {
                console.log('shane fixedTransmit', new Date())
                this.cofs.applyCOFSServer()
            } catch (e) {
                console.error('fixedTransmit Error', e)
            }
        }, this.pxTime * 1000)

        /**
         * This timer keeps the __arrPublisher empty
         */
        this.tmrPublish = setInterval(() => {
            try {
                this.publishOnInterval()
            } catch (e) {
                console.error('tmrPublish Error', e)
            }
        }, 5000)


    }


    updateDeviceInputsThenActionMapping(id, inputs) {
        try {
            let deviceItem = null
            return __devices.reduce((promise, device) => {
                deviceItem = device
                return promise.then(() => {
                    if (device.id == id) {
                        return device.io.reduce((promise, io) => {
                            return promise.then(() => {
                                return inputs.reduce((promise, ip) => {
                                    return promise.then(() => {
                                        if (io.inputId == ip.inputId) {
                                            if (io?.masking?.enabled == true) {
                                                io.value = (ip.value & Math.pow(2, io.masking.bit)) >> io.masking.bit
                                            } else {
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
                        await __router.mapping(inputs)
                    } catch (e) {
                        console.error(e)
                    }

                })
        } catch (e) {
            console.error(e)
        }

    }


    async mapping(inputs) {
        return new Promise(async (resolve, reject) => {
            let index = 0;
            try {
                for (const item of __settings.mapping) {
                    index++;

                    try {
                        for (const input of inputs) {
                            if (item.source.inputId == input.inputId) {

                                let maskSourceValue = null;

                                if (item.source.mask != -1) {
                                    maskSourceValue = input.value & item.source.mask;
                                } else {
                                    maskSourceValue = input.value;
                                }

                                const deviceSource = __devices.find(d => d.io.find(io => io.inputId === item.source.inputId));
                                const deviceDestination = __devices.find(d => d.io.find(io => io.inputId === item.destination.inputId));

                                if (!deviceSource || !deviceDestination) {
                                    continue;
                                }

                                let deviceCurrentState = null;
                                let maskDestinationValue = null;

                                if (item.destination.mask != -1) {
                                    for (const dvSource of deviceSource.values) {
                                        if (dvSource.inputId == item.destination.inputId) {
                                            deviceCurrentState = (dvSource.value & Math.pow(2, item.destination.mask)) >> item.destination.mask
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

                                const io = deviceDestination.io.find(io => io.inputId === item.destination.inputId);

                                if (!io) {
                                    continue;
                                }

                                // __logger.info(io.description + ': ' + maskDestinationValue);
                                try {
                                    io.value = maskDestinationValue
                                    await deviceDestination.write(item.destination.inputId, maskDestinationValue);
                                } catch (e) {
                                    console.error(e)
                                }
                            }

                        }
                    } catch (err) {
                        console.error(err);
                        reject(err);
                    }
                }

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

    async connectTCPClient() {
        console.log('connectTCPClient')
        try {
            this.status = 'connecting';
            this.tcpClient = new TCPCLIENT()
            this.tcpClient.init(__settings.tcpClient.host, __settings.tcpClient.port, 1)

            this.tcpClient.on('data', async (data) => {
                try {
                    console.log('tcpClient data', data.toString())
                } catch (e) {
                    console.error(e)
                }
            })

            this.tcpClient.on('connection', async (data) => {
                try {
                    console.log('tcpClient connection', data)
                    if (data == 'CONNECTED') {
                        this.status = 'connected';
                        setTimeout(() => {
                            if (__settings.overideDeviceBarcode == 'false' || __settings.overideDeviceBarcode == false) {
                                __devices.forEach(device => {
                                    if (device.enabled == true && device.publish == true) {
                                        console.log('tcpClient sending Device Logon', `%S ${device.barcode} *`)
                                        this.tcpClient.SendData(`%S ${device.barcode} *`)
                                    }
                                })
                            } else {
                                console.log('tcpClient sending Device Logon', `%S ${__settings.barcode} *`)
                                this.tcpClient.SendData(`%S ${__settings.barcode} *`)
                            }
                        }, 2000)

                    }
                } catch (e) {
                    console.error(e)
                }
            })

        } catch (e) {
            console.error(e)
        }
    }

    async connectMQTT() {
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

        });

        this.mqtt.on('message', async (topic, message) => {
            __byteLen += message.byteLength
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
                    console.error('unhandled switch mqtt topic', topic);
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
        console.log('__arrPublisher getting bigger', __arrPublisher.length)
    }

    publishOnInterval() {
        try{
            if (__arrPublisher.length > 0) {
                let arrToSend = __arrPublisher
    
                return arrToSend.reduce((promise, message) => {
                    return promise.then(async () => {
                        this.publishArrFromTimer(message)
                        await this.wait(200)
                        return
                    })
                }, Promise.resolve())
                    .then(() => {
                        __arrPublisher = []
                    })
                    .finally(() => {                     
                        __arrPublisher = []
                    })
            }
        }catch(e){
            console.error('error in publishOnInterval',e)
            __arrPublisher = []
        }
    }

    async publishArrFromTimer(data) {
        try {
            console.log('shane publish time', new Date())
            if (this.mqtt?.connected) {
                __logger.info(`publish ${this.server.subscribe.data} : ${JSON.stringify(data)}`);
                __logger.info(`keeping an eye on the arrPublisher ${__arrPublisher.length}`)
                await this.mqtt.publish(this.server.subscribe.data, JSON.stringify(data));
            } else {
                // __logger.warn('Edge Router - Trying to transmit even though socket not connected!');
            }

            if (this.tcpClient?.RMCSocket.Status == 'CONNECTED') {
                data.dataIn.time = dates.compressDateGlog(new Date(data.rtuDate), 2)
                // if (data.moduleId == 0) {
                //     data.dataIn.AI1 = 10
                // } else if (data.moduleId == 1) {
                //     data.dataIn.AI2 = 20
                // }
                if (data.barcode) {
                    let strData = '%1 0210.069 ' + data.barcode + '.' + data.moduleId.toString() + ' 69 ' + data.dataIn.time + ' ' + data.dataIn.txFlag + ' ' + data.dataIn.digitalsIn + ' 0 ' + data.dataIn.AI1 + ' ' + data.dataIn.AI2 + ' ' + data.dataIn.AI3 + ' ' + data.dataIn.AI4 + ' ' + data.dataIn.AIExt1 + ' ' + data.dataIn.AIExt2 + ' ' + data.dataIn.AIExt3 + ' ' + data.dataIn.AIExt4 + ' ' + data.dataIn.AIExt5 + ' ' + data.dataIn.AIExt6 + ' ' + data.dataIn.AIExt7 + ' ' + data.dataIn.AIExt8 + ' ' + data.dataIn.CI1 + ' ' + data.dataIn.CI2 + ' ' + data.dataIn.CI3 + ' ' + data.dataIn.CI4 + ' ' + data.dataIn.CI5 + ' ' + data.dataIn.CI6 + ' ' + data.dataIn.CI7 + ' ' + data.dataIn.CI8 + ' ' + data.dataIn.BATT + ' ' + data.dataIn.SIG + ' 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 > 8220 *';
                    __logger.info(`publish tcpClient data to ${__settings.tcpClient.host}:${__settings.tcpClient.port} > ${strData}`);
                    console.log(`publish tcpClient data to ${__settings.tcpClient.host}:${__settings.tcpClient.port} > ${strData}`)
                    this.tcpClient.SendData(strData)
                } else {
                    console.error('no barcode for sending tcpClient data', JSON.stringify(data))
                }
            }

        } catch (err) {
            console.error(err);
        }

        return

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
