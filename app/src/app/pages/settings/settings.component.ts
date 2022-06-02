import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * SERVICES
*/
import { ToastService } from 'src/app/services/toast/toast.service';
import { SettingsService } from 'src/app/services/settings/settings.service'

/**
 * CLASSES
*/
import { FormErrorService } from 'src/app/services/form-error/form-error.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private settingsService: SettingsService, private toast: ToastService, private formerror: FormErrorService) { }

  public form: FormGroup = new FormGroup({
    barcode: new FormControl('', [Validators.required]),
    deviceId: new FormControl('', [Validators.required]),
    apn: new FormControl(null),
    txtime: new FormControl(null),
  });

  public formCommand: FormGroup = new FormGroup({
    command: new FormControl(null),
    password: new FormControl(null),
  });

  public errors: any = {
    barcode: '',
    deviceId: '',
    apn: '',
    txtime: '',
  };

  public loading: boolean = false;
  private observers: any = {};


  ngOnInit(): void {
    this.observers.form = this.form.valueChanges.subscribe(data => {
      this.errors = this.formerror.validateForm(this.form, this.errors, true);
  });


    this.list()
  }

  public async list() {
    const response = await this.settingsService.list({
    });

    if (response.ok) {
      this.form.controls['barcode'].setValue(response.result[0].barcode);
      this.form.controls['deviceId'].setValue(response.result[0].deviceId);
      this.form.controls['apn'].setValue(response.result[0].apn);
      this.form.controls['txtime'].setValue(response.result[0].txtime);

    } else {
      this.toast.error(response.result.message);
    };

    this.loading = false;
  }

  public async submit() {
    this.loading = true;

    const response = await this.settingsService.update({
      barcode: this.form.value.barcode,
      deviceId: this.form.value.deviceId,
      apn: this.form.value.apn,
      txtime: this.form.value.txtime,
    });

    if (response.ok) {
      this.toast.success('Updated')
    } else {
      this.toast.error(response.result.message);
    };

    this.loading = false;


    this.loading = false;
  }

  public async submit_command() {
    this.loading = true;

    const response = await this.settingsService.command({
      command: this.formCommand.value.command,
      password: this.formCommand.value.password
    });

    if (response.ok) {
      console.log(response)
      this.toast.success('Updated')
    } else {
      this.toast.error(response.result.message);
    };

    this.loading = false;


    this.loading = false;
  }


}
