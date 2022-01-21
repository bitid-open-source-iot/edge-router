const Q = require('q');
const modbus = require('../lib/modbus');
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
        this.timeout = args.timeout;
        this.barcode = args.barcode;
        this.enabled = args.enabled;
        this.deviceId = args.deviceId;
        this.controller = null;

        // this.update();

        setInterval(async () => {
            if (this.status == 'connected') {
                await this.update();
            } else if (this.status == 'connecting') {
                // do nothing
            } else if (this.status == 'disconnected') {
                await this.connect();
            };
        }, this.txtime * 1000);

        this.connect();
    }

    async connect() {
        this.status = 'connecting';

        __logger.info('ModBus - Connecting!');

        this.controller = modbus(this.ip, this.port, 0);

        await this.wait(1000);

        if (this.controller.stream.online) {
            __logger.info('ModBus - Connected!');
            this.status = 'connected';
        } else {
            __logger.error('ModBus - Disconnected!');
            this.status = 'disconnected';
        };
    }

    async update() {
        this.values.reduce((promise, o) => promise.then(async () => {
            var deferred = Q.defer();

            var register = null;
            for (let i = 0; i < this.io.length; i++) {
                if (this.io[i].inputId == o.inputId) {
                    register = this.io[i].register;
                };
            };

            if (typeof (register) != 'undefined' && register !== null) {
                try {
                    await this.wait(100);
                    if (typeof (o.value) != 'undefined' && o.value !== null) {
                        await this.controller.write(['hr', register].join(''), o.value);
                    };
                    deferred.resolve();
                } catch (error) {
                    console.log(error);
                    console.error(`error writing to ${this.ip} register: ${['hr', register].join('')}`);
                    deferred.resolve();
                };
            } else {
                deferred.resolve();
            };

            return deferred.promise;
        }), Promise.resolve());
    }

    async wait(args) {
        var deferred = Q.defer();

        setTimeout(() => {
            deferred.resolve();
        }, args);

        return deferred.promise;
    }

    async write(inputId, value) {
        if (this.io.map(o => o.inputId).includes(inputId)) {
            if (this.values.map(o => o.inputId).includes(inputId)) {
                this.values.map(o => {
                    if (o.inputId == inputId) {
                        o.value = value;
                    };
                });
            } else {
                this.values.push({
                    value: value,
                    inputId: inputId
                });
            };
        };
    }

}