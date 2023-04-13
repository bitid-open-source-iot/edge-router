import { Device } from 'src/app/classes/device';
import { Router } from '@angular/router';
import { Socket } from 'src/app/classes/socket';
import { MatSort } from '@angular/material/sort';
import { environment } from 'src/environments/environment';
import { InputOutput } from 'src/app/classes/input-output';
import { ToastService } from 'src/app/services/toast/toast.service';
import { OptionsService } from 'src/app/libs/options/options.service';
import { ConfirmService } from 'src/app/libs/confirm/confirm.service';
import { DevicesService } from 'src/app/services/devices/devices.service';
import { MatTableDataSource } from '@angular/material/table';
import { OnInit, Component, OnDestroy, ViewChild } from '@angular/core';

@Component({
    selector: 'devices-page',
    styleUrls: ['./devices.page.scss'],
    templateUrl: './devices.page.html'
})

export class DevicesPage implements OnInit, OnDestroy {

    @ViewChild(MatSort, { static: true }) private sort: MatSort = new MatSort();

    constructor(private toast: ToastService, private sheet: OptionsService, private router: Router, private confirm: ConfirmService, private service: DevicesService) { }

    public table: MatTableDataSource<Device> = new MatTableDataSource<Device>();
    public columns?: string[] = ['description', 'type', 'lastConnection', 'isConnected', 'publish', 'enabled'];
    public loading?: boolean;
    private observers: any = {};

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
                    icon: 'visibility',
                    title: 'View',
                    handler: () => {
                        this.router.navigate(['/devices', 'viewer'], {
                            queryParams: {
                                id: device.id
                            }
                        });
                    },
                    disabled: []
                },
                {
                    icon: 'content_copy',
                    title: 'Copy',
                    handler: () => {
                        this.router.navigate(['/devices', 'editor'], {
                            queryParams: {
                                mode: 'copy',
                                id: device.id
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
                                id: device.id
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
                                    id: device.id
                                });

                                if (response.ok) {
                                    for (let i = 0; i < this.table.data.length; i++) {
                                        if (this.table.data[i].id == device.id) {
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

        (async () => {
            await this.list();

            const socket = new Socket(environment.socket, 'devices');

            this.observers.data = socket.data.subscribe((event: any) => {
                switch (event.process) {
                    case ('data'):
                        for (let i = 0; i < this.table.data.length; i++) {
                            if (this.table.data[i].id == event.result.id) {
                                this.table.data[i].lastConnection = new Date();
                                this.table.data[i].isConnected = true;
                                this.table.data[i].io.map((io: InputOutput) => {
                                    event.result.data.map((data: { value: number; inputId: string }) => {
                                        if (io.inputId == data.inputId) {
                                            io.value = data.value;
                                        };
                                    });
                                });
                            };
                        };
                        this.table.data = this.table.data.map((o: Device) => new Device(o));
                        break;
                    case ('timeout'):
                        for (let i = 0; i < this.table.data.length; i++) {
                            if (this.table.data[i].id == event.result.id) {
                                if (event.result.timeout) {
                                    delete this.table.data[i].lastConnection;
                                    this.table.data[i].isConnected = false;
                                } else {
                                    this.table.data[i].isConnected = true;
                                };
                            };
                        };
                        this.table.data = this.table.data.map((o: Device) => new Device(o));
                        break;
                };
            });

            this.observers.status = socket.status.subscribe((status: any) => {
                if (status == 'disconnected') {
                    setTimeout(() => socket.reconnect(), 5000);
                };
            });
        })();
    }

    ngOnDestroy(): void {
        this.observers.data?.unsubscribe();
        this.observers.status?.unsubscribe();
    }

}
