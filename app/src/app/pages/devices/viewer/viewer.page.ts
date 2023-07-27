import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

/* --- CLASSES --- */
import { Device } from 'src/app/classes/device';
import { Socket } from 'src/app/classes/socket';
import { InputOutput } from 'src/app/classes/input-output';

/* --- SERVICES --- */
import { ToastService } from 'src/app/services/toast/toast.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { DevicesService } from 'src/app/services/devices/devices.service';

/* --- ENVIRONMENT --- */
import { environment } from 'src/environments/environment';


@Component({
    selector: 'devices-viewer-page',
    styleUrls: ['./viewer.page.scss'],
    templateUrl: './viewer.page.html'
})

export class ViewerPage implements OnInit, OnDestroy {

    constructor(private service: DevicesService, private config: ConfigService, private route: ActivatedRoute, private router: Router, private toast: ToastService) { }

    public device: Device = new Device();
    public loading: boolean = false;
    public id?: number;
    private observers: any = {};

    private async get() {
        this.loading = true;

        const response = await this.service.get({
            filter: [
                'id',
                'io',
                'ip',
                'port',
                'softwareIp',
                'softwarePort',
                'type',
                'pxtime',
                'txtime',
                'barcode',
                'publish',
                'enabled',
                'deviceId',
                'isConnected',
                'description'
            ],
            id: this.id
        });
        if (response.ok) {
            this.device = new Device(response.result);
        } else {
            this.toast.error(response.result.message);
            this.router.navigate(['/devices']);
        }
        this.loading = false;
    }

    ngOnInit(): void {
        (async () => {
            const params = this.route.snapshot.queryParams;
            this.id = params['id'];

            await this.get();

            const socket = new Socket(environment.socket, 'devices');

            this.observers.data = socket.data.subscribe((event: any) => {
                switch (event.process) {
                    case ('data'):
                        if (this.id == event.result.id) {
                            this.device.lastConnection = new Date();
                            this.device.isConnected = true;
                            this.device.io.map((io: InputOutput) => {
                                event.result.data.map((data: { value: number; inputId: string }) => {
                                    if (io.inputId == data.inputId) {
                                        io.value = data.value;
                                        if(io.key == 'rtuDate'){
                                            io.description = `${new Date(data.value).toUTCString()}`
                                        }
                                    };
                                });
                            });
                        };
                        break;
                    case ('timeout'):
                        if (this.id == event.result.id) {
                            if (event.result.timeout) {
                                delete this.device.lastConnection;
                                this.device.isConnected = false;
                            } else {
                                this.device.isConnected = true;
                            };
                        };
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
