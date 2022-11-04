export interface INPUT_OUTPUT {
    scaling?: {
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
    publish?: {
        bit: number;
        key: string;
        enabled: boolean;
        moduleId: number;
    };
    masking?: {
        bit: number;
        enabled: boolean;
    };
    mqtt?: {
        userName: string;
        password: string;
        subscribe: {
            data: string,
            control: string
        }
        enabled: boolean;
    };
    modbus?: {
        isCoil: boolean;
        isHoldingRegister: boolean;
    };
    key?: string;
    tagId?: string;
    value?: number;
    shift?: number;
    inputId?: string;
    register?: number;
    moduleId?: number;
    readable?: boolean;
    interface?: string;
    writeable?: boolean;
    description?: string;
    cofs?: number;
    command?: string;
}
