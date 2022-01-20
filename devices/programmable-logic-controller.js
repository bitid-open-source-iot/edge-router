const Q = require('q');
const { Tag, Controller, EthernetIP } = require('ethernet-ip');
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
        this.enabled = args.enabled;
        this.barcode = args.barcode;
        this.deviceId = args.deviceId;
        this.controller = new Controller();

        // setInterval(async () => {
        //     if (this.status == 'connected') {
        //         await this.read();
        //     } else if (this.status == 'connecting') {
        //         // do nothing
        //     } else if (this.status == 'disconnected') {
        //         await this.connect();
        //     };
        // }, this.txtime * 1000);

        setInterval(async () => await this.connect(), 10000);

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
                    __logger.warn('Programmable Logic Controller - Issue Reading Tag!');
                    deferred.resolve();
                };

                return deferred.promise;
            });
        }, Promise.resolve())
            .then(() => {
                if (change) {
                    this.emit('change', this.values);
                };
            });
    }

    async connect() {
        this.status = 'connecting';

        __logger.info('Programmable Logic Controller - Connecting!');

        this.controller.connect(this.ip, this.port)
            .then(() => {
                __logger.info('Programmable Logic Controller - Connected!');
                this.status = 'connected';
            })
            .catch(error => {
                __logger.error('Programmable Logic Controller - Disconnected!');
                this.status = 'disconnected';
            });
    }

    async write(inputId, value) {
        try {
            this.io.map(async item => {
                if (item.inputId == inputId && item.tag.value != value && item.writeable) {
                    item.tag.value = parseInt(value);
                    await this.controller.writeTag(item.tag);
                };
            });
        } catch (error) {
            __logger.warn('Programmable Logic Controller - Issue Writing Tag!');
        };
    }

}