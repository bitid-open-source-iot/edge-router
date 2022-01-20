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
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';
        input.multiple = true;

        input.onchange = async (event: any) => {
            let reader = new FileReader();
            reader.onload = async (data: any) => {
                let params = JSON.parse(data.currentTarget.result);

                this.loading = true;
        
                const response = await this.service.import(params);
        
                if (response.ok) {
                    this.toast.success('Config was uploaded!');
                } else {
                    this.toast.error(response.result.message);
                };
        
                this.loading = false;

            };
            reader.readAsText(event.target.files[0]);
        };

        input.click();
    }

    public async export() {
        this.loading = true;

        const response = await this.service.export({});

        if (response.ok) {
            saveAs(new Blob([JSON.stringify(response.result, null, 4)], { type: 'application/json;charset=utf-8' }), 'config.json');
        } else {
            this.toast.error(response.result.message);
        }

        this.loading = false;
    }

    ngOnInit(): void { }

    ngOnDestroy(): void { }

}
