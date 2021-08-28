const Q = require('q');
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
    }

}