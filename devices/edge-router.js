const mqtt = require('mqtt');
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
        this.pxtime = args.pxtime || 120;
        this.barcode = args.barcode;
        this.deviceId = args.deviceId;

        setInterval(() => {
            if (!this.mqtt?.connected) {
                this.connect();
            };
        }, 5000);

        this.connect();
    }

    async route(deviceId, inputs) {
        __settings.mapping.map(item => {
            if (item.source.deviceId == deviceId) {
                inputs.map(input => {
                    if (item.source.inputId == input.inputId) {
                        var maskSourceValue = null;
                        if (item.source.mask != -1) {
                            maskSourceValue = input.value & item.source.mask;
                        } else {
                            maskSourceValue = input.value;
                        };

                        __devices.map(device => {
                            if (item.destination.deviceId == device.deviceId) {
                                let deviceCurrentState = null;
                                let maskDestinationValue = null;
                                if (item.destination.mask != -1) {
                                    device.values.map(dv => {
                                        if (dv.inputId == item.destination.inputId) {
                                            deviceCurrentState = dv.value;
                                        };
                                    });
                                    let dontTouchVal = 0
                                    maskDestinationValue = maskSourceValue & item.destination.mask;
                                    if ((deviceCurrentState & item.destination.mask > 0) && deviceCurrentState != -1) {
                                        dontTouchVal = deviceCurrentState - (deviceCurrentState & item.destination.mask)
                                    };
                                    maskDestinationValue = dontTouchVal + maskDestinationValue;
                                } else {
                                    maskDestinationValue = maskSourceValue;
                                };
                                for (let i = 0; i < device.io.length; i++) {
                                    if (device.io[i].inputId == item.destination.inputId) {
                                        __logger.info(device.io[i].description + ': ' + maskDestinationValue);
                                        break;
                                    };
                                };
                                device.write(item.destination.inputId, maskDestinationValue);
                            };
                        });
                    };
                });
            };
        });
    }

    async connect() {
        this.status = 'connecting';

        __logger.info('Edge Router - Connecting to socket!');

        this.ip = await GetPublicIp();

        this.mqtt = mqtt.connect([this.server.host, ':', this.server.port].join(''), {
            'host': this.server.host,
            'port': this.server.port,
            'clean': true,
            'username': this.server.username,
            'password': this.server.password,
            'keepalive': 60
        });

        this.mqtt.on('error', error => {
            __logger.error(error);
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

            __logger.info('Edge Router - Starting transmit loop!');

            this.transmit();

            setInterval(() => this.transmit(), this.txtime * 1000);
        });

        this.mqtt.on('message', (topic, message) => {
            switch (topic) {
                case ('/rock/v1.1/data'):
                    this.emit('data', JSON.parse(message.toString()));
                    break;
                case ('/rock/v1.1/control'):
                    this.emit('control', JSON.parse(message.toString()));
                    break;
                case ('/kGateway/edge/data'):
                    break;
                default:
                    if (topic.includes('kbeacon/publish/')) {
                        this.emit('data', { topic, message })
                    } else {
                        console.error('unhandled switch mqtt topic', topic)
                    }
            };
        });

        this.mqtt.on('disconnect', () => {
            this.status = 'disconnected';
            __logger.error('Edge Router - Socket was disconnected!');
        });
    }

    async transmit() {
        if (this.mqtt?.connected) {
            __logger.info('Edge Router - Transmitting data to socket!')
            this.data.rtuId = this.deviceId;
            this.data.barcode = this.barcode;
            this.data.dataIn.IP = this.ip;
            this.mqtt.publish(this.server.subscribe.data, JSON.stringify(this.data));
        } else {
            __logger.warn('Edge Router - Trying to transmit even though socket not connected!');
        }
    }

    async publish(data) {
        if (this.mqtt?.connected) {
            __logger.info(this.server.subscribe.data + ': ' + JSON.stringify(data))
            this.mqtt.publish(this.server.subscribe.data, JSON.stringify(data));
        } else {
            __logger.warn('Edge Router - Trying to transmit even though socket not connected!');
        }
    }

}