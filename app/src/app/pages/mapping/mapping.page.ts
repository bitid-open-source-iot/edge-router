import { MatTableDataSource } from '@angular/material/table';
import { OnInit, Component, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { Map } from 'src/app/classes/map';
import { Device } from 'src/app/classes/device';
import { ToastService } from 'src/app/services/toast/toast.service';
import { DevicesService } from 'src/app/services/devices/devices.service';
import { MappingService } from 'src/app/services/mapping/mapping.service';

@Component({
    selector: 'mapping-page',
    styleUrls: ['./mapping.page.scss'],
    templateUrl: './mapping.page.html'
})

export class MappingPage implements OnInit, OnDestroy {

    constructor(private toast: ToastService, public devices: DevicesService, private service: MappingService) { }

    public map: FormGroup = new FormGroup({
        source: new FormGroup({
            mask: new FormControl(null, [Validators.required]),
            inputId: new FormControl(null, [Validators.required]),
            deviceId: new FormControl(null, [Validators.required])
        }),
        destination: new FormGroup({
            mask: new FormControl(null, [Validators.required]),
            inputId: new FormControl(null, [Validators.required]),
            deviceId: new FormControl(null, [Validators.required])
        })
    });
    public table: MatTableDataSource<Map> = new MatTableDataSource<Map>();
    public inputs: any[] = [];
    public columns: string[] = ['source.deviceId', 'source.inputId', 'source.mask', 'route', 'destination.deviceId', 'destination.inputId', 'destination.mask', 'options'];
    public loading: boolean = false;

    public async add() {
        this.loading = true;

        const response = await this.service.add(this.map.value);

        if (response.ok) {
            let map = new Map(this.map.value);
            map.mapId = response.result.mapId;
            this.table.data.push(map);
            this.map.reset();
            this.map.markAsPristine();
            this.map.markAsUntouched();
            this.table.data = this.table.data.map(o => new Map(o));
        } else {
            this.toast.error(response.result.message);
        };

        this.loading = false;
    }

    private async load() {
        this.loading = true;

        const devices = await this.devices.list({});

        if (devices.ok) {
            this.devices.data = devices.result.map((o: any) => new Device(o));
            this.devices.data.map((device: any) => {
                device.io.map((input: any) => {
                    input.deviceId = device.deviceId;
                    this.inputs.push(input);
                });
            });
        } else {
            this.devices.data = [];
        };

        this.loading = false;
    }

    private async list() {
        this.loading = true;

        const response = await this.service.list({});

        if (response.ok) {
            this.table.data = response.result.map((o: any) => new Map(o));
        } else {
            this.table.data = [];
        };

        this.loading = false;
    }

    public async delete(map: Map) {
        this.loading = true;

        const response = await this.service.delete({
            mapId: map.mapId
        });

        if (response.ok == true) {
            for (let i = 0; i < this.table.data.length; i++) {
                if (this.table.data[i].mapId == map.mapId) {
                    this.table.data.splice(i, 1);
                    break;
                };
            };
            this.table.data = this.table.data.map(o => new Map(o));
            this.toast.success('Mapping deleted!');
        } else {
            this.toast.error(response.result.message);
        };

        this.loading = false;
    }

    public async update(map: Map) {
        this.loading = true;

        const response = await this.service.update(map);

        if (response.ok) {
            for (let i = 0; i < this.table.data.length; i++) {
                if (this.table.data[i].mapId == map.mapId) {
                    Object.keys(map).map((key: string) => {
                        (this.table.data[i] as any)[key] = (map as any)[key];
                    });
                    break;
                };
            };
            this.table.data = this.table.data.map(o => new Map(o));
        } else {
            this.toast.error(response.result.message);
        };

        this.loading = false;
    }

    ngOnInit(): void {
        (async () => {
            await this.load();
            await this.list();
        })();
    }

    ngOnDestroy(): void { }

}
