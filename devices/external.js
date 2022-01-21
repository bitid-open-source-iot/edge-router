const interval = require('rxjs').interval;
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
        this.timeout = 10;
        this.timeout = args.timeout || 60;
        this.barcode = args.barcode;
        this.enabled = args.enabled;
        this.deviceId = args.deviceId;
        this.lastConnection = new Date();

        this.on('data', () => {
            this.status = 'connected';
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

        interval(1000).subscribe(count => {
            const now = new Date().getTime();
            const lastPlusTimeout = this.lastConnection?.getTime() + (this.timeout * 1000);
            if (now > lastPlusTimeout) {
                this.status = 'disconnected';
                this.emit('timeout', true);
            } else {
                this.status = 'connected';
                this.emit('timeout', false);
            };
        });
    }

}