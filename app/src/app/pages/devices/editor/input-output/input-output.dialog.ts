import { FormErrorService } from 'src/app/services/form-error/form-error.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Inject, OnInit, Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'input-output-dialog',
    styleUrls: ['./input-output.dialog.scss'],
    templateUrl: './input-output.dialog.html'
})

export class InputOutputDialog implements OnInit, OnDestroy {

    constructor(private dialog: MatDialogRef<InputOutputDialog>, @Inject(MAT_DIALOG_DATA) private config: any, private formerror: FormErrorService) { }

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
        'txFlag'
    ];
    public type: string = this.config.type;
    public form: FormGroup = new FormGroup({
        key: new FormControl(this.config.io.key),
        tagId: new FormControl(this.config.io.tagId),
        inputId: new FormControl(this.config.io.inputId, [Validators.required]),
        register: new FormControl(this.config.io.register),
        moduleId: new FormControl(this.config.io.moduleId),
        readable: new FormControl(this.config.io.readable),
        interface: new FormControl(this.config.io.interface),
        writeable: new FormControl(this.config.io.writeable),
        description: new FormControl(this.config.io.description, [Validators.required])
    });
    public errors: any = {
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
                this.form.controls.register.setValidators([Validators.required]);
                this.form.controls.register.updateValueAndValidity();
                break;
            case ('external'):
                this.form.controls.key.setValidators([Validators.required]);
                this.form.controls.key.updateValueAndValidity();
                this.form.controls.moduleId.setValidators([Validators.required]);
                this.form.controls.moduleId.updateValueAndValidity();
                break;
            case ('programmable-logic-controller'):
                this.form.controls.tagId.setValidators([Validators.required]);
                this.form.controls.tagId.updateValueAndValidity();
                this.form.controls.readable.setValidators([Validators.required]);
                this.form.controls.readable.updateValueAndValidity();
                this.form.controls.interface.setValidators([Validators.required]);
                this.form.controls.interface.updateValueAndValidity();
                this.form.controls.writeable.setValidators([Validators.required]);
                this.form.controls.writeable.updateValueAndValidity();
                break;
        };

        this.observers.form = this.form.valueChanges.subscribe(data => {
            this.errors = this.formerror.validateForm(this.form, this.errors, true);
        });
    }

    ngOnDestroy(): void {
        this.observers.form.unsubscribe();
    }

}
