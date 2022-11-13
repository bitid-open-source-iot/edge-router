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

        this.io.map(item=>{
            if(item.key == 'commsStatus'){
                this.timeout = parseInt(item.cofs)
            }
        })


        this.on('data', () => {
            this.status = 'connected';
            this.lastConnection = new Date();
            this.io.map(ip=>{
                if(ip.key == 'commsStatus'){
                    ip.value = 1
                }
            })
        });

        this.on('timeout', (value) => {
            if (__socket) {
                __socket.send('devices:timeout', {
                    timeout: value,
                    deviceId: this.deviceId
                });
            };
            if(value == true){
                this.io.map(ip=>{
                    if(ip.key == 'commsStatus'){
                        ip.value = 0
                    }
                })
            }

            let inputs = this.io.map(ip=>{
                return {inputId: ip.inputId, value: ip.value}
            })
            this.emit('commsStatus', inputs)

        });

        interval(10000).subscribe(count => {
            const now = new Date().getTime();
            let lastConnection = this.lastConnection?.getTime()
            if (now - lastConnection > (this.timeout * 60000) && this.status != 'disconnected') {
                this.status = 'disconnected';
                this.emit('timeout', true);
            } else if(this.status != 'connected') {
                this.status = 'connected';
                this.emit('timeout', false);
            };
        });

       
    }

    async forceCOFS(){
        /**
         * All devices need to have this function to conform. Not used for this device.
         */
    }

}