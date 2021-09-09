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
        this.status = 'disconnected';
        this.enabled = args.enabled;
        this.deviceId = args.deviceId;
        this.controller = null;

        this.update();
    }

    async update() {
        setInterval(() => {
            this.controller = modbus(this.ip, this.port, 0);

            this.values.reduce((promise, o) => promise.then(async () => {
                var deferred = Q.defer();

                var register = null;
                for (let i = 0; i < this.io.length; i++) {
                    if (this.io[i].inputId == o.inputId) {
                        register = this.io[i].register;
                    };
                };

                if (register) {
                    try {
                        await this.wait(100);
                        if (typeof (o.value) != 'undefined' && o.value !== null) {
                            this.controller = await modbus(this.ip, this.port, 0);
                            await this.controller.write(register, o.value);
                        };
                        deferred.resolve();
                    } catch (error) {
                        console.log(error);
                        console.error(`error writing to ${this.ip} register: ${register}`);
                        deferred.resolve();
                    }
                } else {
                    deferred.resolve();
                }

                return deferred.promise;
            }), Promise.resolve());
        }, this.txtime * 1000);
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