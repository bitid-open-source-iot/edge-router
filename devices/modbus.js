const { fin } = require('q');
const { async } = require('q');
const Q = require('q');
const modbus = require('../lib/modbus');
const EventEmitter = require('events').EventEmitter;

module.exports = class extends EventEmitter {

    constructor(args) {
        super();

        if (args !== null) {
            this.io = args.io;
            // this.mapping = __settings.mapping
            this.ip = args.ip;
            this.port = args.port;
            // this.type = args.type;
            this.values = [];
            this.txtime = args.txtime;
            // this.pxtime = args.pxtime || 120;
            this.status = 'disconnected';
            // this.timeout = args.timeout || 60;
            // this.barcode = args.barcode;
            // this.enabled = args.enabled;
            this.deviceId = args.deviceId;
            this.controller = null;
            // this.description = args.description;
            this.unitId = args.unitId || 0


            this.io.map((o) => {
                if (o.readable == true) {
                    this.values.push({
                        value: 0,
                        inputId: o.inputId
                    });
                }
            })


            setInterval(async () => {
                if (this.status == 'connected') {
                    await this.read();
                } else if (this.status == 'connecting') {
                    // do nothing
                } else if (this.status == 'disconnected') {
                    await this.connect();
                };
            }, this.txtime * 1000);

            this.connect();
        } else {
            console.log('Args is Null')
        }

    }

    async connect() {
        this.status = 'connecting';

        __logger.info('ModBus - Connecting!');

        this.controller = modbus(this.ip, this.port, this.unitId);

        await this.wait(1000);

        if (this.controller.stream.online) {
            __logger.info('ModBus - Connected!');
            this.status = 'connected';
            setInterval(()=>{
                this.write('62a4446900328648eb6af7d1', 4)
            },5000)
        } else {
            __logger.error(`ModBus - Disconnected! ${this.ip}, ${this.port}, ${this.unitId} `);
            this.status = 'disconnected';
        };
    }


    async read() {
        var change = false;

        await this.io.reduce((promise, item) => {
            return promise.then(async () => {
                var deferred = Q.defer();

                try {
                    if (item.readable) {
                        let regValue
                        if(item.modbus?.isCoil == true){
                            regValue = await this.controller.read(['c', item.register].join(''))
                        }else{
                            regValue = await this.controller.read(['hr', item.register].join(''))
                        }

                        // if(item.description == 'All Digital Ins'){
                        //     console.log(`item.description ${item.description}  ${regValue}`)
                        // }

                        if (this.values.map(o => o.inputId).includes(item.inputId)) {
                            this.values.map(o => {
                                if (o.inputId == item.inputId && o.value != regValue) {
                                    change = true;
                                    o.value = regValue;
                                };
                            });
                        } else {
                            change = true;
                            this.values.push({
                                value: regValue,
                                inputId: item.inputId
                            });
                        };
                    } else {
                        if (this.values.map(o => o.inputId).includes(item.inputId)) {
                            this.values.map(o => {
                                if (o.inputId == item.inputId) {
                                    // change = true;
                                    o.value = 0;
                                };
                            });
                        } else {
                            // change = true;
                            this.values.push({
                                value: 0,
                                inputId: item.inputId
                            });
                        };
                    };
                    deferred.resolve();
                } catch (error) {
                    __logger.error('Modbus - Issue Reading Register!');
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


    async readOld() {
        let change = false
        this.io.reduce((promise, o) => promise.then(async () => {
            var deferred = Q.defer();

            if (typeof (o.register) != 'undefined' && o.register !== null) {
                try {
                    await this.wait(100);
                    try {
                        let regValue = await this.controller.read(['hr', o.register].join(''))
                        if (o.register == 2) {
                            console.log('register', JSON.stringify(this.values))
                        }
                        if (regValue != o.value) {
                            change = true
                            o.value = regValue
                        }
                    } catch (e) {
                        console.error(e)
                    }

                    deferred.resolve();
                } catch (error) {
                    console.log(error);
                    console.error(`error writing to ${this.ip} register: ${['hr', o.register].join('')}`);
                    deferred.resolve();
                };
            } else {
                deferred.resolve();
            };

            return deferred.promise;
        }), Promise.resolve())
            .then(() => {
                this.emit('data', this.values);
                if (change) {
                    this.emit('change', this.values);
                };
            });

    }

    async wait(args) {
        var deferred = Q.defer();

        setTimeout(() => {
            deferred.resolve();
        }, args);

        return deferred.promise;
    }

    async write(inputId, value) {
        let io = this.io.find(o => o.inputId == inputId)
        if (io) {
            if(io.modbus?.isCoil == true){
                await this.controller.write(['c', io.register].join(''), value);
            }else{
                await this.controller.write(['hr', io.register].join(''), value);
            }
        } else {
            console.error('error writing to modbus')
        }
    }

}