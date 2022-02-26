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

    constructor(private dialog: MatDialogRef<InputOutputDialog>, @Inject(MAT_DIALOG_DATA) private config: { io: InputOutput, type: 'modbus' | 'external' | 'programmable-logic-controller' }, private formerror: FormErrorService) { }

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
        'digitalsIn'
    ];
    public type: string = this.config.type;
    public form: FormGroup = new FormGroup({
        publish: new FormGroup({
            bit: new FormControl(this.config.io?.publish?.bit),
            key: new FormControl(this.config.io?.publish?.key),
            enabled: new FormControl(this.config.io?.publish?.enabled, [Validators.required]),
            moduleId: new FormControl(this.config.io?.publish?.moduleId)
        }),
        masking: new FormGroup({
            bit: new FormControl(this.config.io?.masking?.bit, [Validators.required]),
            enabled: new FormControl(this.config.io?.masking?.enabled, [Validators.required])
        }),
        key: new FormControl(this.config.io?.key),
        tagId: new FormControl(this.config.io?.tagId),
        inputId: new FormControl(this.config.io?.inputId, [Validators.required]),
        register: new FormControl(this.config.io?.register),
        moduleId: new FormControl(this.config.io?.moduleId),
        readable: new FormControl(this.config.io?.readable),
        interface: new FormControl(this.config.io?.interface),
        writeable: new FormControl(this.config.io?.writeable),
        description: new FormControl(this.config.io?.description, [Validators.required])
    });
    public errors: any = {
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
        key: '',
        tagId: '',
        inputId: '',
        register: '',
        moduleId: '',
        readable: '',
        interface: '',
        writeable: '',
        description: ''
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
            case ('modbus'):
                this.form.controls['register'].setValidators([Validators.required]);
                this.form.controls['register'].updateValueAndValidity();
                break;
            case ('external'):
                this.form.controls['key'].setValidators([Validators.required]);
                this.form.controls['key'].updateValueAndValidity();
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
                this.form.controls['bit'].setValidators([Validators.required, Validators.min(0)]);
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
                (this.form.controls['publish'] as FormGroup).controls['bit'].setValidators([Validators.required, Validators.min(0)]);
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

        this.observers.masking = (this.form.controls['masking'] as FormGroup).controls['enabled'].valueChanges.subscribe((enabled: boolean) => {
            if (enabled) {
                (this.form.controls['masking'] as FormGroup).controls['bit'].enable();
                (this.form.controls['masking'] as FormGroup).controls['bit'].setValidators([Validators.required, Validators.min(0)]);
            } else {
                (this.form.controls['masking'] as FormGroup).controls['bit'].disable();
                (this.form.controls['masking'] as FormGroup).controls['bit'].setValidators(null);
            };
            (this.form.controls['masking'] as FormGroup).controls['bit'].updateValueAndValidity();
        });

        (this.form.controls['masking'] as FormGroup).controls['enabled'].setValue(this.config.io?.masking?.enabled);
    }

    ngOnDestroy(): void {
        this.observers.key?.unsubscribe();
        this.observers.form?.unsubscribe();
        this.observers.publish?.unsubscribe();
        this.observers.masking?.unsubscribe();
    }

}
