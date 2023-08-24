import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Inject, OnInit, Component, OnDestroy } from '@angular/core';

/* --- SERVICES --- */
import { FormErrorService } from 'src/app/services/form-error/form-error.service';
import { InputOutput } from 'src/app/classes/input-output';

@Component({
    selector: 'input-output-dialog',
    styleUrls: ['./input-output.dialog.scss'],
    templateUrl: './input-output.dialog.html'
})

export class InputOutputDialog implements OnInit, OnDestroy {

    constructor(private dialog: MatDialogRef<InputOutputDialog>, @Inject(MAT_DIALOG_DATA) private config: { io: InputOutput, type: 'modbus' | 'external' | 'programmable-logic-controller' | 'kGateway' | 'hostAgent' }, private formerror: FormErrorService) { }

    public keys: string[] = [
        'AI1',
        'AI2',
        'AI3',
        'AI4',
        'TEXT1',
        'TEXT2',
        'TEXT3',
        'TEXT4',
        'AIExt1',
        'AIExt2',
        'AIExt3',
        'AIExt4',
        'AIExt5',
        'AIExt6',
        'AIExt7',
        'AIExt8',
        'BATT',
        'CI1',
        'CI2',
        'CI3',
        'CI4',
        'CI5',
        'CI6',
        'CI7',
        'CI8',
        'LAT',
        'LNG',
        'SIG',
        'txFlag',
        'digitalsIn',
        'rtuDate',
        'commsStatus'
    ];
    public type: string = this.config.type;
    public form: FormGroup = new FormGroup({
        scaling: new FormGroup({
            raw: new FormGroup({
                low: new FormControl(this.config.io?.scaling.raw.low),
                high: new FormControl(this.config.io?.scaling.raw.high)
            }),
            scaled: new FormGroup({
                low: new FormControl(this.config.io?.scaling.scaled.low),
                high: new FormControl(this.config.io?.scaling.scaled.high)
            }),
            type: new FormControl(this.config.io?.scaling.type, [Validators.required])
        }),
        publish: new FormGroup({
            bit: new FormControl(this.config.io?.publish?.bit),
            key: new FormControl(this.config.io?.publish?.key),
            enabled: new FormControl(this.config.io?.publish?.enabled, [Validators.required]),
            moduleId: new FormControl(this.config.io?.publish?.moduleId)
        }),
        masking: new FormGroup({
            bit: new FormControl(this.config.io?.masking?.bit, [Validators.required]),
            enabled: new FormControl(this.config.io?.masking?.enabled, [Validators.required]),
        }),
        mqtt: new FormGroup({
            // userName: new FormControl(this.config.io?.mqtt?.userName, [Validators.required]),
            // password: new FormControl(this.config.io?.mqtt?.password, [Validators.required]),
            subscribe: new FormGroup({
                data: new FormControl(this.config.io?.mqtt?.subscribe?.data, [Validators.required]),
                control: new FormControl(this.config.io?.mqtt?.subscribe?.control, [Validators.required])
            }),
            enabled: new FormControl(this.config.io?.mqtt?.enabled, [Validators.required]),
        }),
        modbus: new FormGroup({
            isCoil: new FormControl(this.config.io?.modbus?.isCoil),
            isHoldingRegister: new FormControl(this.config.io?.modbus?.isHoldingRegister),
        }),
        command: new FormControl(this.config.io?.command),
        key: new FormControl(this.config.io?.key),
        tagId: new FormControl(this.config.io?.tagId),
        shift: new FormControl(this.config.io?.shift),
        inputId: new FormControl(this.config.io?.inputId, [Validators.required]),
        register: new FormControl(this.config.io?.register),
        moduleId: new FormControl(this.config.io?.moduleId),
        readable: new FormControl(this.config.io?.readable),
        interface: new FormControl(this.config.io?.interface),
        writeable: new FormControl(this.config.io?.writeable),
        description: new FormControl(this.config.io?.description, [Validators.required]),
        cofs: new FormControl(this.config.io?.cofs),
        rtuId: new FormControl(this.config.io?.rtuId)
    });
    public errors: any = {
        scaling: {
            raw: {
                low: '',
                high: ''
            },
            scaled: {
                low: '',
                high: ''
            },
            type: ''
        },
        publish: {
            bit: '',
            key: '',
            enabled: '',
            moduleId: ''
        },
        masking: {
            bit: '',
            enabled: ''
        },
        mqtt: {
            // userName: '',
            // password: '',
            subscribe: {
                data: '',
                control: ''
            }
        },
        modbus: {
            isCoil: '',
            isHoldingRegister: ''
        },
        key: '',
        tagId: '',
        shift: '',
        inputId: '',
        register: '',
        moduleId: '',
        readable: '',
        interface: '',
        writeable: '',
        description: '',
        cofs: '',
        command: '',
        rtuId: ''
    };
    public registers: string[] = [
        'hr2',
        'hr3',
        'hr4',
        'hr5',
        'hr6',
        'hr7',
        'hr8',
        'hr9'
    ];
    public interfaces: string[] = [
        'BOOL',
        'SINT',
        'INT',
        'DINT',
        'LINT',
        'USINT',
        'UINT',
        'UDINT',
        'REAL',
        'LREAL',
        'STIME',
        'DATE',
        'TIME_AND_DAY',
        'DATE_AND_STRING',
        'STRING',
        'WORD',
        'DWORD',
        'BIT_STRING',
        'LWORD',
        'STRING2',
        'FTIME',
        'LTIME',
        'ITIME',
        'STRINGN',
        'SHORT_STRING',
        'TIME',
        'EPATH',
        'ENGUNIT',
        'STRINGI',
        'STRUCT'
    ];
    private observers: any = {};

    public close() {
        this.dialog.close(null);
    }

    public submit() {
        this.dialog.close(this.form.value);
    }

    ngOnInit(): void {
        this.keys = this.keys.sort();

        switch (this.type) {
            case ('tcpClient'):
            case ('modbus'):
                this.form.controls['register'].setValidators([Validators.required]);
                this.form.controls['register'].updateValueAndValidity();
                break;
            case ('hostAgent'):
                this.form.controls['command'].setValidators([Validators.required]);
                this.form.controls['command'].updateValueAndValidity();
                break;
            case ('external'):
                this.form.controls['key'].setValidators([Validators.required]);
                this.form.controls['key'].updateValueAndValidity();
                this.form.controls['shift'].setValidators([Validators.required]);
                this.form.controls['shift'].updateValueAndValidity();
                this.form.controls['moduleId'].setValidators([Validators.required]);
                this.form.controls['moduleId'].updateValueAndValidity();
                break;
            case ('programmable-logic-controller'):
                this.form.controls['tagId'].setValidators([Validators.required]);
                this.form.controls['tagId'].updateValueAndValidity();
                this.form.controls['readable'].setValidators([Validators.required]);
                this.form.controls['readable'].updateValueAndValidity();
                this.form.controls['interface'].setValidators([Validators.required]);
                this.form.controls['interface'].updateValueAndValidity();
                this.form.controls['writeable'].setValidators([Validators.required]);
                this.form.controls['writeable'].updateValueAndValidity();
                break;
        };

        this.observers.key = this.form.controls['key'].valueChanges.subscribe(key => {
            if (key == 'digitalsIn') {
                this.form.controls['bit'].setValidators([Validators.required, Validators.min(-1)]);
            } else {
                this.form.controls['bit'].setValidators(null);
            };
            this.form.controls['bit'].updateValueAndValidity();
        });

        this.observers.form = this.form.valueChanges.subscribe(data => {
            this.errors = this.formerror.validateForm(this.form, this.errors, true);
        });

        this.observers.publish = (this.form.controls['publish'] as FormGroup).controls['enabled'].valueChanges.subscribe((enabled: boolean) => {
            if (enabled) {
                (this.form.controls['publish'] as FormGroup).controls['bit'].enable();
                (this.form.controls['publish'] as FormGroup).controls['key'].enable();
                (this.form.controls['publish'] as FormGroup).controls['moduleId'].enable();
                (this.form.controls['publish'] as FormGroup).controls['bit'].setValidators([Validators.required, Validators.min(-1)]);
                (this.form.controls['publish'] as FormGroup).controls['key'].setValidators([Validators.required]);
                (this.form.controls['publish'] as FormGroup).controls['moduleId'].setValidators([Validators.required, Validators.min(0)]);
            } else {
                (this.form.controls['publish'] as FormGroup).controls['bit'].disable();
                (this.form.controls['publish'] as FormGroup).controls['key'].disable();
                (this.form.controls['publish'] as FormGroup).controls['moduleId'].disable();
                (this.form.controls['publish'] as FormGroup).controls['bit'].setValidators(null);
                (this.form.controls['publish'] as FormGroup).controls['key'].setValidators(null);
                (this.form.controls['publish'] as FormGroup).controls['moduleId'].setValidators(null);
            };
            (this.form.controls['publish'] as FormGroup).controls['bit'].updateValueAndValidity();
            (this.form.controls['publish'] as FormGroup).controls['key'].updateValueAndValidity();
            (this.form.controls['publish'] as FormGroup).controls['moduleId'].updateValueAndValidity();
        });

        (this.form.controls['publish'] as FormGroup).controls['enabled'].setValue(this.config.io?.publish?.enabled);

        this.observers.mqtt = (this.form.controls['mqtt'] as FormGroup).controls['enabled'].valueChanges.subscribe((enabled: boolean) => {
            // let subscribe = (this.form.controls['mqtt'] as FormGroup).controls['subscribe'] as FormGroup;
            if (enabled) {
                // (this.form.controls['mqtt'] as FormGroup).controls['userName'].enable();
                // (this.form.controls['mqtt'] as FormGroup).controls['password'].enable();
                (this.form.controls['mqtt'] as FormGroup).controls['subscribe'].enable();
                ((this.form.controls['mqtt'] as FormGroup).controls['subscribe'] as FormGroup).controls['data'].enable();
                ((this.form.controls['mqtt'] as FormGroup).controls['subscribe'] as FormGroup).controls['control'].enable();

            } else {
                // (this.form.controls['mqtt'] as FormGroup).controls['userName'].disable();
                // (this.form.controls['mqtt'] as FormGroup).controls['password'].disable();

                ((this.form.controls['mqtt'] as FormGroup).controls['subscribe'] as FormGroup).controls['data'].disable();
                ((this.form.controls['mqtt'] as FormGroup).controls['subscribe'] as FormGroup).controls['control'].disable();


                // (this.form.controls['mqtt'] as FormGroup).controls['userName'].setValidators(null);
                // (this.form.controls['mqtt'] as FormGroup).controls['password'].setValidators(null);

                ((this.form.controls['mqtt'] as FormGroup).controls['subscribe'] as FormGroup).controls['data'].setValidators(null);
                ((this.form.controls['mqtt'] as FormGroup).controls['subscribe'] as FormGroup).controls['control'].setValidators(null);
            };
            // (this.form.controls['mqtt'] as FormGroup).controls['userName'].updateValueAndValidity();
            // (this.form.controls['mqtt'] as FormGroup).controls['password'].updateValueAndValidity();


            ((this.form.controls['mqtt'] as FormGroup).controls['subscribe'] as FormGroup).controls['data'].updateValueAndValidity();
            ((this.form.controls['mqtt'] as FormGroup).controls['subscribe'] as FormGroup).controls['control'].updateValueAndValidity();
        });

        (this.form.controls['mqtt'] as FormGroup).controls['enabled'].setValue(this.config.io?.mqtt?.enabled);




        this.observers.masking = (this.form.controls['masking'] as FormGroup).controls['enabled'].valueChanges.subscribe((enabled: boolean) => {
            if (enabled) {
                (this.form.controls['masking'] as FormGroup).controls['bit'].enable();
                (this.form.controls['masking'] as FormGroup).controls['bit'].setValidators([Validators.required, Validators.min(-1)]);
            } else {
                (this.form.controls['masking'] as FormGroup).controls['bit'].disable();
                (this.form.controls['masking'] as FormGroup).controls['bit'].setValidators(null);
            };
            (this.form.controls['masking'] as FormGroup).controls['bit'].updateValueAndValidity();
        });

        (this.form.controls['masking'] as FormGroup).controls['enabled'].setValue(this.config.io?.masking?.enabled);





        this.observers.scaling = (this.form.controls['scaling'] as FormGroup).controls['type'].valueChanges.subscribe((type: 'ntc' | 'none' | 'linear' | 'invert') => {
            switch (type) {
                case ('linear'):
                case ('invert'):
                    ((this.form.controls['scaling'] as FormGroup).controls['raw'] as FormGroup).controls['low'].setValidators([Validators.required]);
                    ((this.form.controls['scaling'] as FormGroup).controls['raw'] as FormGroup).controls['high'].setValidators([Validators.required]);
                    ((this.form.controls['scaling'] as FormGroup).controls['scaled'] as FormGroup).controls['low'].setValidators([Validators.required]);
                    ((this.form.controls['scaling'] as FormGroup).controls['scaled'] as FormGroup).controls['high'].setValidators([Validators.required]);
                    break;
                case ('ntc'):
                case ('none'):
                    ((this.form.controls['scaling'] as FormGroup).controls['raw'] as FormGroup).controls['low'].setValidators(null);
                    ((this.form.controls['scaling'] as FormGroup).controls['raw'] as FormGroup).controls['high'].setValidators(null);
                    ((this.form.controls['scaling'] as FormGroup).controls['scaled'] as FormGroup).controls['low'].setValidators(null);
                    ((this.form.controls['scaling'] as FormGroup).controls['scaled'] as FormGroup).controls['high'].setValidators(null);
                    break;
            };
            ((this.form.controls['scaling'] as FormGroup).controls['raw'] as FormGroup).controls['low'].updateValueAndValidity();
            ((this.form.controls['scaling'] as FormGroup).controls['raw'] as FormGroup).controls['high'].updateValueAndValidity();
            ((this.form.controls['scaling'] as FormGroup).controls['scaled'] as FormGroup).controls['low'].updateValueAndValidity();
            ((this.form.controls['scaling'] as FormGroup).controls['scaled'] as FormGroup).controls['high'].updateValueAndValidity();
        });

        (this.form.controls['scaling'] as FormGroup).controls['type'].setValue(this.config.io?.scaling?.type);


        (this.form.controls['modbus'] as FormGroup).controls['isCoil'].setValue(this.config.io?.modbus?.isCoil);
        (this.form.controls['modbus'] as FormGroup).controls['isHoldingRegister'].setValue(this.config.io?.modbus?.isHoldingRegister);

    }

    ngOnDestroy(): void {
        this.observers.key?.unsubscribe();
        this.observers.form?.unsubscribe();
        this.observers.publish?.unsubscribe();
        this.observers.mqtt?.unsubscribe();
        this.observers.masking?.unsubscribe();
        this.observers.scaling?.unsubscribe();
    }

}
