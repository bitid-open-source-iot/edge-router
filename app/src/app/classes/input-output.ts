import { ObjectId } from './id';

export class InputOutput {

    public scaling = <{
        raw: {
            low: number;
            high: number;
        };
        scaled: {
            low: number;
            high: number;
        };
        type: 'ntc' | 'none' | 'linear' | 'invert';
    }>{
            raw: {
                low: 0,
                high: 0
            },
            scaled: {
                low: 0,
                high: 0
            },
            type: 'none'
        };
    public publish = <{
        bit: number;
        key: string;
        enabled: boolean;
        moduleId: number;
    }>{
            bit: 0,
            key: '',
            enabled: false,
            moduleId: 0
        };
    public masking = <{
        bit: number;
        enabled: boolean;
    }>{
            bit: 0,
            enabled: false
        };
    public key: string = '';
    public tagId: string = '';
    public value: number = 0;
    public shift: number = -1;
    public inputId: string = ObjectId();
    public register: number = 0;
    public moduleId: number = 0;
    public readable: boolean = false;
    public interface: string = '';
    public writeable: boolean = false;
    public description: string = '';

    constructor(args?: INPUT_OUTPUT) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.scaling) != 'undefined' && args.scaling != null) {
                if (typeof (args.scaling.raw) != 'undefined' && args.scaling.raw != null) {
                    if (typeof (args.scaling.raw.low) != 'undefined' && args.scaling.raw.low != null) {
                        this.scaling.raw.low = args.scaling.raw.low;
                    };
                    if (typeof (args.scaling.raw.high) != 'undefined' && args.scaling.raw.high != null) {
                        this.scaling.raw.high = args.scaling.raw.high;
                    };
                };
                if (typeof (args.scaling.scaled) != 'undefined' && args.scaling.scaled != null) {
                    if (typeof (args.scaling.scaled.low) != 'undefined' && args.scaling.scaled.low != null) {
                        this.scaling.scaled.low = args.scaling.scaled.low;
                    };
                    if (typeof (args.scaling.scaled.high) != 'undefined' && args.scaling.scaled.high != null) {
                        this.scaling.scaled.high = args.scaling.scaled.high;
                    };
                };
                if (typeof (args.scaling.type) != 'undefined' && args.scaling.type != null) {
                    this.scaling.type = args.scaling.type;
                };
            };
            if (typeof (args.publish) != 'undefined' && args.publish != null) {
                if (typeof (args.publish.bit) != 'undefined' && args.publish.bit != null) {
                    this.publish.bit = args.publish.bit;
                };
                if (typeof (args.publish.key) != 'undefined' && args.publish.key != null) {
                    this.publish.key = args.publish.key;
                };
                if (typeof (args.publish.enabled) != 'undefined' && args.publish.enabled != null) {
                    this.publish.enabled = args.publish.enabled;
                };
                if (typeof (args.publish.moduleId) != 'undefined' && args.publish.moduleId != null) {
                    this.publish.moduleId = args.publish.moduleId;
                };
            };
            if (typeof (args.masking) != 'undefined' && args.masking != null) {
                if (typeof (args.masking.bit) != 'undefined' && args.masking.bit != null) {
                    this.masking.bit = args.masking.bit;
                };
                if (typeof (args.masking.enabled) != 'undefined' && args.masking.enabled != null) {
                    this.masking.enabled = args.masking.enabled;
                };
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
            if (typeof (args.shift) != 'undefined' && args.shift != null) {
                this.shift = args.shift;
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
    scaling: {
        raw: {
            low: number;
            high: number;
        };
        scaled: {
            low: number;
            high: number;
        };
        type: 'ntc' | 'none' | 'linear' | 'invert';
    };
    publish: {
        bit: number;
        key: string;
        enabled: boolean;
        moduleId: number;
    };
    masking: {
        bit: number;
        enabled: boolean;
    };
    key: string;
    tagId: string;
    value: number;
    shift: number;
    inputId: string;
    register: number;
    moduleId: number;
    readable: boolean;
    interface: string;
    writeable: boolean;
    description: string;
}
