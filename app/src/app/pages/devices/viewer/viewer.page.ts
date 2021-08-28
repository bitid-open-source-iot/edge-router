import { Device } from 'src/app/classes/device';
import { ToastService } from 'src/app/services/toast/toast.service';
import { DevicesService } from 'src/app/services/devices/devices.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'devices-viewer-page',
    styleUrls: ['./viewer.page.scss'],
    templateUrl: './viewer.page.html'
})

export class DevicesViewerPage implements OnInit, OnDestroy {

    constructor(private toast: ToastService, private route: ActivatedRoute, private router: Router, private service: DevicesService) { }

    public loading?: boolean;
    public deviceId?: string;

    private async get() {
        this.loading = true;

        const response = await this.service.get({
            filter: [
                'ip',
                'port',
                'type',
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
            const device = new Device(response.result);
        } else {
            this.toast.error(response.result.message);
            this.router.navigate(['/devices']);
        };

        this.loading = false;
    }

    ngOnInit(): void {
        const params = this.route.snapshot.queryParams;
        this.deviceId = params.deviceId;
        this.get();
    }

    ngOnDestroy(): void {
    }

}
