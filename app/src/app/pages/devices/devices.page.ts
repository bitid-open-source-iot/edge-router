import { Device } from 'src/app/classes/device';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ConfirmService } from 'src/app/libs/confirm/confirm.service';
import { DevicesService } from 'src/app/services/devices/devices.service';
import { OptionsService } from 'src/app/libs/options/options.service';
import { MatTableDataSource } from '@angular/material/table';
import { OnInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'devices-page',
    styleUrls: ['./devices.page.scss'],
    templateUrl: './devices.page.html'
})

export class DevicesPage implements OnInit, OnDestroy {

    @ViewChild(MatSort, { static: true }) private sort: MatSort = new MatSort();

    constructor(private toast: ToastService, private sheet: OptionsService, private router: Router, private confirm: ConfirmService, private service: DevicesService) { }

    public table: MatTableDataSource<Device> = new MatTableDataSource<Device>();
    public columns?: string[] = ['description', 'type', 'enabled'];
    public loading?: boolean;

    private async list() {
        this.loading = true;

        const response = await this.service.list({});

        if (response.ok) {
            this.table.data = response.result.map((o: any) => new Device(o));
        } else {
            this.table.data = [];
        };

        this.loading = false;
    }

    public async options(device: Device) {
        this.sheet.show({
            role: 0,
            title: device.description,
            options: [
                {
                    icon: 'file_copy',
                    title: 'Copy',
                    handler: () => {
                        this.router.navigate(['/devices', 'editor'], {
                            queryParams: {
                                mode: 'copy',
                                deviceId: device.deviceId
                            }
                        });
                    },
                    disabled: []
                },
                {
                    icon: 'edit',
                    title: 'Edit',
                    handler: () => {
                        this.router.navigate(['/devices', 'editor'], {
                            queryParams: {
                                mode: 'update',
                                deviceId: device.deviceId
                            }
                        });
                    },
                    disabled: []
                },
                {
                    icon: 'delete',
                    title: 'Delete',
                    danger: true,
                    handler: () => {
                        this.confirm.show({
                            message: 'Are you sure you want to delete ' + device.description + '?',
                            handler: async () => {
                                this.loading = true;

                                const response = await this.service.delete({
                                    deviceId: device.deviceId
                                });

                                if (response.ok) {
                                    for (let i = 0; i < this.table.data.length; i++) {
                                        if (this.table.data[i].deviceId == device.deviceId) {
                                            this.table.data.splice(i, 1);
                                            break;
                                        };
                                    };
                                    this.table.data = this.table.data.map(o => new Device(o));
                                } else {
                                    this.toast.error(response.result.message);
                                };

                                this.loading = false;
                            }
                        });
                    },
                    disabled: []
                }
            ]
        });
    }

    ngOnInit(): void {
        this.table.sort = this.sort;

        this.list();
    }

    ngOnDestroy(): void { }

}
