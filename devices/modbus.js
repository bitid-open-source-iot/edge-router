const { resolve } = require('path');
const { fin } = require('q');
const { async } = require('q');
const Q = require('q');
const modbus = require('../lib/modbus');
const COFS = require('../lib/cofs');
const EventEmitter = require('events').EventEmitter;

module.exports = class extends EventEmitter {

    constructor(args) {
        super();

        if (args !== null) {
            this.io = args.io;
            this.commsStatus = 0
            this.ip = args.ip;
            this.port = args.port;
            this.type = args.type;
            this.values = [];
            this.txtime = args.txtime;
            this.status = 'disconnected';
            this.barcode = args.barcode;
            this.enabled = args.enabled;
            this.publish = args.publish || false
            this.deviceId = args.deviceId;
            this.cofs = args.cofs;
            this.id = args.id;
            this.controller = null;
            this.description = args.description;
            this.unitId = args.unitId || 0

            this.forceChange = true
            this.busy = false

            this.test = 0

            setInterval(() => {
                this.test += 1
            }, 30000);


            this.io.map((o) => {
                if (o.readable == true) {
                    this.values.push({
                        value: 0,
                        inputId: o.inputId
                    });
                }
            })


            setInterval(async () => {
                if (this.controller.stream.online == false) {
                    console.error('caught offline')
                    this.status = 'disconnected'
                }
                if (this.status == 'connected') {
                    await this.read()
                } else if (this.status == 'connecting') {
                    // do nothing
                    this.busy = false
                } else if (this.status == 'disconnected') {
                    this.busy = false
                    await this.connect();
                };
            }, this.txtime * 1000);

            this.connect();
        } else {
            console.log('Args is Null')
            __logger.error(`Modbus Error. Args is NULL`)
        }

    }

    async connect() {
        this.status = 'connecting';

        __logger.info('ModBus - Connecting!');

        this.controller = modbus(this.ip, this.port, this.unitId);

        await this.wait(1000);

        if (this.controller.stream.online) {
            __logger.info(`ModBus - Connected! ${this.description} - ${this.ip}`);
            this.status = 'connected';
            this.commsStatus = 1
        } else {
            __logger.error(`ModBus - Disconnected! ${this.ip}, ${this.port}, ${this.unitId} `);
            this.status = 'disconnected';
            this.commsStatus = 0
        };
    }


    async read() {
        var change = false;

        await this.io.reduce((promise, item) => {
            return promise.then(async () => {
                var deferred = Q.defer();

                try {
                    if (item.writeable) {
                        await this.writeModbus(item.inputId, item.value)
                    }
                    if (item.readable || (item.description == 'comms')) {
                        let regValue
                        if (item.description != 'comms') {
                            if (item.modbus?.isCoil == true) {
                                regValue = await this.controller.read(['c', item.register].join(''))
                            } else {
                                regValue = await this.controller.read(['hr', item.register].join(''))
                                // console.log(`<<<<<<<<<<<<<<<<<<<<<<item.register ${item.register} regValue: ${regValue}`)
                            }
                            if(regValue < 0){
                                //convert 16 bit signed int to 16 bit unsigned int
                                regValue = regValue + 65536
                            }

                            if(item.masking.enabled == true){
                                regValue = (regValue & Math.pow(2, item.masking.bit)) >> item.masking.bit
                            }
                        } else {
                            await this.wait(200);
                            regValue = this.commsStatus
                        }

                        let io = this.values.find(o => o.inputId == item.inputId)
                        if(io){
                            if (this.forceChange == true) {
                                change = true;
                                io.value = regValue;
                            }else{
                                item.value = regValue
                                if(!change){
                                    change = await this.cofs.checkCOFS(item);
                                }
                                io.value = regValue;
                            }
                        }else{
                            change = true;
                            this.values.push({
                                value: regValue,
                                inputId: item.inputId
                            });
                        }

                    } else {
                        if (this.values.map(o => o.inputId).includes(item.inputId)) {
                            this.values.map(o => {
                                if (o.inputId == item.inputId) {
                                    o.value = 0;
                                };
                            });
                        } else {
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
                    this.forceChange = false
                    this.emit('change', this.values);
                };
            });
    }

    async forceCOFS() {
        this.forceChange = true
    }


    async wait(args) {
        var deferred = Q.defer();
        setTimeout(() => {
            deferred.resolve({});
        }, args);
        return deferred.promise;
    }

    async waitForBusyFalse() {
        var deferred = Q.defer()

        do {
            await this.wait(50)
        } while (this.busy == true);
        if (this.busy == false) {
            this.busy = true
            deferred.resolve({})
        }

        return deferred.promise
    }

    async write(inputId, value) {
        var deferred = Q.defer()

        let io = this.io.find(o => o.inputId == inputId)
        if (io) {
            io.value = value
        }
        deferred.resolve()

        return deferred.promise
    }

    async writeModbus(inputId, value) {
        var deferred = Q.defer()


        // console.log(`writeModbus inputId: ${inputId} value: ${value}`)
        try {
            if (this.status == 'connected') {
                let io = this.io.find(o => o.inputId == inputId)
                if (io) {
                    if (io.modbus?.isCoil == true) {
                        await this.controller.write(['c', io.register].join(''), value);
                    } else {
                        // console.log(`>>>>>>>>>>>>>>writing modbus hr ${io.register} value: ${value}`)
                        await this.controller.write(['hr', io.register].join(''), value);
                    }
                    this.busy = false
                    deferred.resolve({})
                } else {
                    console.error('error writing to modbus')
                    __logger.error(`Modbus - write Error! ${this.description} - ${this.ip}`);
                    deferred.resolve({})
                }
            } else {
                __logger.error(`Modbus - write Error. Device not connected! ${this.description} - ${this.ip}`);
                deferred.resolve({})
            }
        } catch (e) {
            this.busy = false
            __logger.error(`modbus error ${this.description}`)
            deferred.resolve({})
        }
        return deferred.promise
    }
}