import { interval } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

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

export class ViewerPage implements OnInit, OnDestroy {

    constructor(private service: DevicesService, private config: ConfigService, private route: ActivatedRoute, private router: Router, private toast: ToastService) { }

    public device: Device = new Device();
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

        this.observers.interval = interval(1000).subscribe(() => {
            this.get();
        })
    }
    
    ngOnDestroy(): void {
        this.observers.interval.unsubscribe()
    }
}
