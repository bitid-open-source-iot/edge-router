import { saveAs } from 'file-saver';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { OnInit, Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'import-export-page',
    styleUrls: ['./import-export.page.scss'],
    templateUrl: './import-export.page.html'
})

export class ImportExportPage implements OnInit, OnDestroy {

    constructor(private toast: ToastService, private service: ConfigService) { }

    public loading: boolean = false;

    public async import() {
        this.toast.error("This feature is not available!");
    }

    public async export() {
        this.loading = true;

        const response = await this.service.export({});

        if (response.ok) {
            saveAs(new Blob([JSON.stringify(response.result, null, 4)], {type: 'application/json;charset=utf-8'}), 'config.json');
        } else {
            this.toast.error(response.result.message);
        }

        this.loading = false;
    }

    ngOnInit(): void { }

    ngOnDestroy(): void { }

}
