import { ObjectId } from './id';
import { InputOutput } from './input-output';

export class Device {

    public io: InputOutput[] = [];
    public ip: string = '';
    public port: number = 0;
    public type: string = '';
    public txtime: number = 5;
    public pxtime: number = 5;
    public barcode: string = '';
    public publish: boolean = false;
    public timeout: number = 60;
    public enabled: boolean = false;
    public deviceId: string = ObjectId();
    public isConnected: boolean = false;
    public description: string = '';
    public lastConnection?: Date;

    constructor(args?: DEVICE) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.io) != 'undefined' && args.io != null) {
                this.io = args.io.map(o => new InputOutput(o));
            }
            if (typeof (args.ip) != 'undefined' && args.ip != null) {
                this.ip = args.ip;
            }
            if (typeof (args.port) != 'undefined' && args.port != null) {
                this.port = args.port;
            }
            if (typeof (args.type) != 'undefined' && args.type != null) {
                this.type = args.type;
            }
            if (typeof (args.txtime) != 'undefined' && args.txtime != null) {
                this.txtime = args.txtime;
            }
            if (typeof (args.pxtime) != 'undefined' && args.pxtime != null) {
                this.pxtime = args.pxtime;
            }
            if (typeof (args.barcode) != 'undefined' && args.barcode != null) {
                this.barcode = args.barcode;
            }
            if (typeof (args.publish) != 'undefined' && args.publish != null) {
                this.publish = args.publish;
            }
            if (typeof (args.timeout) != 'undefined' && args.timeout != null) {
                this.timeout = args.timeout;
            }
            if (typeof (args.enabled) != 'undefined' && args.enabled != null) {
                this.enabled = args.enabled;
            }
            if (typeof (args.deviceId) != 'undefined' && args.deviceId != null) {
                this.deviceId = args.deviceId;
            }
            if (typeof (args.isConnected) != 'undefined' && args.isConnected != null) {
                this.isConnected = args.isConnected;
            }
            if (typeof (args.description) != 'undefined' && args.description != null) {
                this.description = args.description;
            }
            if (typeof (args.lastConnection) != 'undefined' && args.lastConnection != null) {
                this.lastConnection = new Date(args.lastConnection);
            }
        }
    }

}

interface DEVICE {
    io: InputOutput[];
    ip: string;
    port: number;
    type: string;
    txtime: number;
    pxtime: number;
    barcode: string;
    publish: boolean;
    timeout: number;
    enabled: boolean;
    deviceId: string;
    isConnected: boolean;
    description: string;
    lastConnection?: Date;
}
