import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/* --- DIALOGS --- */
import { InputOutputDialog } from './input-output/input-output.dialog';

/* --- CLASSES --- */
import { Device } from 'src/app/classes/device';
import { ObjectId } from 'src/app/classes/id';
import { InputOutput } from 'src/app/classes/input-output';
import { OptionsService } from 'src/app/libs/options/options.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { DevicesService } from 'src/app/services/devices/devices.service';
import { FormErrorService } from 'src/app/services/form-error/form-error.service';

/* --- SERVICES --- */

@Component({
    selector: 'devices-editor-page',
    styleUrls: ['./editor.page.scss'],
    templateUrl: './editor.page.html'
})

export class DevicesEditorPage implements OnInit, OnDestroy {

    constructor(private sheet: OptionsService, private dialog: MatDialog, private toast: ToastService, private route: ActivatedRoute, private router: Router, private service: DevicesService, private formerror: FormErrorService) { }

    public mode: string = 'add';
    public form: FormGroup = new FormGroup({
        ip: new FormControl('0.0.0.0', [Validators.required]),
        port: new FormControl(0, [Validators.required, Validators.min(0)]),
        type: new FormControl(null, [Validators.required]),
        txtime: new FormControl(5, [Validators.required, Validators.min(1)]),
        pxtime: new FormControl(120, [Validators.required, Validators.min(120)]),
        barcode: new FormControl(null, [Validators.required]),
        publish: new FormControl(false, [Validators.required]),
        timeout: new FormControl(60, [Validators.required]),
        enabled: new FormControl(false, [Validators.required]),
        deviceId: new FormControl(null, [Validators.required, Validators.minLength(24), Validators.maxLength(24)]),
        description: new FormControl(null, [Validators.required])
    });
    public table: MatTableDataSource<InputOutput> = new MatTableDataSource<InputOutput>();
    public errors: any = {
        ip: '',
        port: '',
        type: '',
        txtime: '',
        pxtime: '',
        barcode: '',
        publish: '',
        timeout: '',
        enabled: '',
        deviceId: '',
        description: ''
    };
    public columns: string[] = [];
    public loading: boolean = false;
    public deviceId?: string;
    private observers: any = {};

    private async get() {
        this.loading = true;

        const response = await this.service.get({
            filter: [
                'io',
                'ip',
                'port',
                'type',
                'pxtime',
                'txtime',
                'barcode',
                'publish',
                'timeout',
                'enabled',
                'deviceId',
                'description'
            ],
            deviceId: this.deviceId
        });

        if (response.ok) {
            const device = new Device(response.result);
            this.table.data = device.io.map((o: InputOutput) => new InputOutput(o));
            this.form.controls['ip'].setValue(device.ip);
            this.form.controls['port'].setValue(device.port);
            this.form.controls['type'].setValue(device.type);
            this.form.controls['pxtime'].setValue(device.pxtime);
            this.form.controls['txtime'].setValue(device.txtime);
            this.form.controls['barcode'].setValue(device.barcode);
            this.form.controls['timeout'].setValue(device.timeout);
            this.form.controls['publish'].setValue(device.publish);
            this.form.controls['enabled'].setValue(device.enabled);
            this.form.controls['deviceId'].setValue(device.deviceId);
            this.form.controls['description'].setValue(device.description);
        } else {
            this.toast.error(response.result.message);
            this.router.navigate(['/devices']);
        };

        this.loading = false;
    }

    public async submit() {
        this.loading = true;

        let mode = this.mode;
        if (mode == 'copy') {
            mode = 'add';
            delete this.deviceId;
        };

        const response = await (this.service as any)[mode]({
            io: this.table.data,
            ip: this.form.value.ip,
            port: this.form.value.port,
            type: this.form.value.type,
            txtime: this.form.value.txtime,
            pxtime: this.form.value.pxtime,
            barcode: this.form.value.barcode,
            timeout: this.form.value.timeout,
            publish: this.form.value.publish,
            enabled: this.form.value.enabled,
            deviceId: this.form.value.deviceId,
            description: this.form.value.description
        });

        if (response.ok) {
            this.router.navigate(['/devices']);
        } else {
            this.toast.error(response.result.message);
        };

        this.loading = false;
    }

    public async options(io: InputOutput) {
        this.sheet.show({
            role: 0,
            title: io.description,
            options: [
                {
                    icon: 'content_copy',
                    title: 'Copy',
                    handler: () => this.editor('copy', io),
                    disabled: []
                },
                {
                    icon: 'edit',
                    title: 'Update',
                    handler: () => this.editor('update', io),
                    disabled: []
                },
                {
                    icon: 'delete',
                    title: 'Delete',
                    danger: true,
                    handler: () => {
                        for (let i = 0; i < this.table.data.length; i++) {
                            if (this.table.data[i].inputId == io.inputId) {
                                this.table.data.splice(i, 1);
                                break;
                            };
                        };
                        this.table.data = this.table.data.map(o => new InputOutput(o));
                    },
                    disabled: []
                }
            ]
        });
    }

    public async editor(mode: string, io?: InputOutput) {
        const dialog = await this.dialog.open(InputOutputDialog, {
            data: {
                io: new InputOutput(io),
                type: this.form.value.type
            },
            panelClass: 'fullscreen-dialog'
        });

        await dialog.afterClosed().subscribe(async result => {
            if (result) {
                switch (mode) {
                    case ('add'):
                    case ('copy'):
                        result.inputId = ObjectId();
                        this.table.data.push(result);
                        break;
                    case ('update'):
                        this.table.data.map((o: any) => {
                            if (o.inputId == io?.inputId) {
                                Object.keys(result).map(key => {
                                    o[key] = result[key];
                                });
                            };
                        });
                        break;
                };
                this.table.data = this.table.data.map((o: InputOutput) => new InputOutput(o));
            };
        });
    }

    ngOnInit(): void {
        this.observers.form = this.form.valueChanges.subscribe(data => {
            this.errors = this.formerror.validateForm(this.form, this.errors, true);
        });

        this.observers.type = this.form.controls['type'].valueChanges.subscribe((type: 'modbus' | 'external' | 'programmable-logic-controller') => {
            switch (type) {
                case('modbus'):
                    this.columns = ['description', 'register', 'publish.enabled', 'publish.bit', 'publish.key', 'publish.moduleId'];
                    break;
                case('external'):
                    this.columns = ['description', 'key', 'moduleId', 'masking.enabled', 'masking.bit', 'publish.enabled', 'publish.bit', 'publish.key', 'publish.moduleId'];
                    break;
                case('programmable-logic-controller'):
                    this.columns = ['description', 'tagId', 'interface', 'readable', 'writeable', 'publish.enabled', 'publish.bit', 'publish.key', 'publish.moduleId'];
                    break;
            };
        });

        const params = this.route.snapshot.queryParams;
        this.mode = params['mode'];
        this.deviceId = params['deviceId'];
        if (this.mode != 'add') {
            this.get();
        };
    }

    ngOnDestroy(): void {
        this.observers.form?.unsubscribe();
        this.observers.type?.unsubscribe();
    }

}
