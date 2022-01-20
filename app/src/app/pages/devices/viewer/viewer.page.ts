import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/* --- CLASSES --- */
import { Device } from 'src/app/classes/device';

/* --- SERVICES --- */
import { ToastService } from 'src/app/services/toast/toast.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { DevicesService } from 'src/app/services/devices/devices.service';

@Component({
    selector: 'devices-viewer-page',
    styleUrls: ['./viewer.page.scss'],
    templateUrl: './viewer.page.html'
})

export class ViewerPage implements OnInit {

    constructor(private service: DevicesService, private config: ConfigService, private route: ActivatedRoute, private router: Router, private toast: ToastService) { }

    public device: Device = new Device();
    public loading: boolean = false;
    public deviceId?: string;

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
                'enabled',
                'deviceId',
                'description'
            ],
            deviceId: this.deviceId
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
        const params = this.route.snapshot.queryParams;
        this.deviceId = params.deviceId;

        this.get();
        setInterval(() => {
            this.get();
        }, 2000)
    }

}
