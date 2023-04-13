const Q = require('q');
const { Tag, Controller, EthernetIP } = require('ethernet-ip');
const interval = require('rxjs').interval;
const DATA_TYPES = EthernetIP.CIP.DataTypes.Types;
const EventEmitter = require('events').EventEmitter;

module.exports = class extends EventEmitter {

    constructor(args) {
        super();

        this.io = args.io.map(o => {
            o.tag = new Tag(o.tagId, null, DATA_TYPES[o.interface]);
            return o;
        });
        this.ip = args.ip;
        this.port = args.port;
        this.type = args.type;
        this.values = [];
        this.txtime = args.txtime;
        this.pxtime = args.pxtime || 120;
        this.status = 'disconnected';
        this.timeout = args.timeout || 60;
        this.enabled = args.enabled;
        this.barcode = args.barcode;
        this.deviceId = args.deviceId;
        this.id = args.id;
        this.controller = new Controller();
        this.lastConnection = new Date();

        this.on('data', () => {
            if (__socket) {
                __socket.send('devices:data', {
                    data: this.values,
                    deviceId: this.deviceId
                });
            };
            this.lastConnection = new Date();
        });

        this.on('timeout', (value) => {
            if (__socket) {
                __socket.send('devices:timeout', {
                    timeout: value,
                    deviceId: this.deviceId
                });
            };
        });

        setInterval(async () => {
            if (this.status == 'connected') {
                await this.read();
            } else if (this.status == 'connecting') {
                // do nothing
            } else if (this.status == 'disconnected') {
                await this.connect();
            };
        }, this.txtime * 1000);

        interval(1000).subscribe(count => {
            const now = new Date().getTime();
            const lastPlusTimeout = this.lastConnection?.getTime() + (this.timeout * 1000);
            if (now > lastPlusTimeout) {
                this.emit('timeout', true);
            } else {
                this.emit('timeout', false);
            };
        });

        this.connect();
    }

    async read() {
        var change = false;

        await this.io.reduce((promise, item) => {
            return promise.then(async () => {
                var deferred = Q.defer();

                try {
                    if (item.readable) {
                        await this.controller.readTag(item.tag);

                        if (this.values.map(o => o.inputId).includes(item.inputId)) {
                            this.values.map(o => {
                                if (o.inputId == item.inputId && o.value != item.tag.value) {
                                    change = true;
                                    o.value = item.tag.value;
                                };
                            });
                        } else {
                            change = true;
                            this.values.push({
                                value: item.tag.value,
                                inputId: item.inputId
                            });
                        };
                    } else {
                        if (this.values.map(o => o.inputId).includes(item.inputId)) {
                            this.values.map(o => {
                                if (o.inputId == item.inputId) {
                                    change = true;
                                    o.value = 0;
                                };
                            });
                        } else {
                            change = true;
                            this.values.push({
                                value: 0,
                                inputId: item.inputId
                            });
                        };
                    };
                    deferred.resolve();
                } catch (error) {
                    if (error.message.includes('TIMEOUT')) {
                        if (this.status != 'disconnected') {
                            __logger.error('Programmable Logic Controller - Disconnected!');
                        };
                        this.status = 'disconnected';
                    };
                    __logger.warn('Programmable Logic Controller - Issue Reading Tag!');
                    deferred.resolve();
                };

                return deferred.promise;
            });
        }, Promise.resolve())
            .then(() => {
                this.emit('data', this.values);
                if (change) {
                    this.emit('change', this.values);
                };
            });
    }

    async forceCOFS(){
        /**
         * All devices need to have this function to conform. Not used for this device.
         */
    }


    async connect() {
        this.status = 'connecting';

        __logger.info('Programmable Logic Controller - Connecting!');

        const timeout = setTimeout(() => {
            __logger.error('Programmable Logic Controller - Disconnected!');
            this.status = 'disconnected';
        }, 5000);

        this.controller.destroy();
        delete this.controller;

        this.controller = new Controller();

        this.controller.connect(this.ip, this.port)
            .then(() => {
                clearTimeout(timeout);
                __logger.info('Programmable Logic Controller - Connected!');
                this.status = 'connected';
            })
            .catch(error => {
                clearTimeout(timeout);
                __logger.error('Programmable Logic Controller - Disconnected!');
                this.status = 'disconnected';
            });
    }

    async write(inputId, value) {
        try {
            this.io.map(async item => {
                if (item.inputId == inputId && item.tag.value != value && item.writeable) {
                    item.tag.value = parseInt(value);
                    __logger.info('Writing a value of ' + item.tag.value + ' to ' + item.tagId);
                    await this.controller.writeTag(item.tag);
                };
            });
            this.emit('data', this.values);
        } catch (error) {
            __logger.warn('Programmable Logic Controller - Issue Writing Tag!');
        };
    }

}