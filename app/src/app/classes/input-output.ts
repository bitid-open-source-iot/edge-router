import { ObjectId } from './id';

export class InputOutput {

    public bit: number = 0;
    public key: string = '';
    public tagId: string = '';
    public value: number = 0;
    public inputId: string = ObjectId();
    public register: number = 0;
    public moduleId: number = 0;
    public readable: boolean = false;
    public interface: string = '';
    public writeable: boolean = false;
    public description: string = '';

    constructor(args?: INPUT_OUTPUT) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.bit) != 'undefined' && args.bit != null) {
                this.bit = args.bit;
            };
            if (typeof (args.key) != 'undefined' && args.key != null) {
                this.key = args.key;
            };
            if (typeof (args.tagId) != 'undefined' && args.tagId != null) {
                this.tagId = args.tagId;
            };
            if (typeof (args.value) != 'undefined' && args.value != null) {
                this.value = args.value;
            };
            if (typeof (args.inputId) != 'undefined' && args.inputId != null) {
                this.inputId = args.inputId;
            };
            if (typeof (args.register) != 'undefined' && args.register != null) {
                this.register = args.register;
            };
            if (typeof (args.moduleId) != 'undefined' && args.moduleId != null) {
                this.moduleId = args.moduleId;
            };
            if (typeof (args.readable) != 'undefined' && args.readable != null) {
                this.readable = args.readable;
            };
            if (typeof (args.interface) != 'undefined' && args.interface != null) {
                this.interface = args.interface;
            };
            if (typeof (args.writeable) != 'undefined' && args.writeable != null) {
                this.writeable = args.writeable;
            };
            if (typeof (args.description) != 'undefined' && args.description != null) {
                this.description = args.description;
            };
        }
    }

}

interface INPUT_OUTPUT {
    bit: number;
    key: string;
    tagId: string;
    value: number;
    inputId: string;
    register: number;
    moduleId: number;
    readable: boolean;
    interface: string;
    writeable: boolean;
    description: string;
}
