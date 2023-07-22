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

  public commsOptionSelected: string = '0';
  public form: FormGroup = new FormGroup({
    commsOption: new FormControl('0'),
    overideDeviceBarcode: new FormControl('', [Validators.required]),
    barcode: new FormControl('', [Validators.required]),
    deviceId: new FormControl('', [Validators.required]),
    apn: new FormControl(null),
    txtime: new FormControl(null),
    publishEnabled: new FormControl(true),
    server: new FormGroup({
      host: new FormControl('', [Validators.required]),
      port: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      subscribe: new FormGroup({
        dataTopic: new FormControl('', [Validators.required]),
        controlTopic: new FormControl('', [Validators.required]),
      })
    }),
    tcpClient: new FormGroup({
      host: new FormControl('', [Validators.required]),
      port: new FormControl('', [Validators.required]),
    }),
    rateLimits: new FormGroup({
      rateLimitTmrSP: new FormControl('60', [Validators.required]),
      rateLimitTxCountSP: new FormControl('4', [Validators.required]),
    })  
  });

  public formCommand: FormGroup = new FormGroup({
    command: new FormControl(null),
    password: new FormControl(null),
  });

  public errors: any = {
    commsOptions: '',
    overideDeviceBarcode: '',
    barcode: '',
    deviceId: '',
    apn: '',
    txtime: '',
    publishEnabled: '',
    server:{
      host: '',
      port: '',
      userName: '',
      password: '',
      subscribe: {
        data: '',
        control: ''
      }
    },
    tcpClient: {
      host: '',
      port: ''
    },
    rateLimits: {
      rateLimitTmrSP: '',
      rateLimitTxCountSP: ''
    }
  };

  public loading: boolean = false;
  private observers: any = {};


  ngOnInit(): void {
    this.observers.form = this.form.valueChanges.subscribe(data => {
      this.commsOptionSelected = this.form.value.commsOption;
      this.errors = this.formerror.validateForm(this.form, this.errors, true);
  });


    this.list()
  }

  public async list() {
    const response = await this.settingsService.list({
    });

    if (response.ok) {
      this.commsOptionSelected = response.result[0]?.commsOption || '0'; 
      this.form.controls['commsOption'].setValue(response.result[0]?.commsOption || '0');
      this.form.controls['overideDeviceBarcode'].setValue(response.result[0].overideDeviceBarcode);
      this.form.controls['barcode'].setValue(response.result[0].barcode);
      this.form.controls['deviceId'].setValue(response.result[0].deviceId);
      this.form.controls['apn'].setValue(response.result[0].apn);
      this.form.controls['txtime'].setValue(response.result[0].txtime);
      this.form.controls['publishEnabled'].setValue(response.result[0].publishEnabled);

      (this.form.controls['server'] as FormGroup).controls['host'].setValue(response.result[0].host);
      (this.form.controls['server'] as FormGroup).controls['port'].setValue(response.result[0].port);
      (this.form.controls['server'] as FormGroup).controls['username'].setValue(response.result[0].username);
      (this.form.controls['server'] as FormGroup).controls['password'].setValue(response.result[0].password);

      ((this.form.controls['server'] as FormGroup).controls['subscribe'] as FormGroup).controls['dataTopic'].setValue(response.result[0].dataTopic);
      ((this.form.controls['server'] as FormGroup).controls['subscribe'] as FormGroup).controls['controlTopic'].setValue(response.result[0].controlTopic);

      (this.form.controls['rateLimits'] as FormGroup).controls['rateLimitTmrSP'].setValue(response.result[0].rateLimitTmrSP);
      (this.form.controls['rateLimits'] as FormGroup).controls['rateLimitTxCountSP'].setValue(response.result[0].rateLimitTxCountSP);

      (this.form.controls['tcpClient'] as FormGroup).controls['host'].setValue(response.result[0]?.tcpClientHost);
      (this.form.controls['tcpClient'] as FormGroup).controls['port'].setValue(response.result[0]?.tcpClientPort);

    } else {
      this.toast.error(response.result.message);
    };

    this.loading = false;
  }

  public async submit() {
    this.loading = true;

    const response = await this.settingsService.update({
      commsOption: this.form.value.commsOption,
      overideDeviceBarcode: this.form.value.overideDeviceBarcode,
      barcode: this.form.value.barcode,
      deviceId: this.form.value.deviceId,
      apn: this.form.value.apn,
      txtime: this.form.value.txtime,
      publishEnabled: this.form.value.publishEnabled,
      host: this.form.controls['server'].value.host,
      port: this.form.controls['server'].value.port,

      tcpClientHost: this.form.controls['tcpClient'].value.host,
      tcpClientPort: this.form.controls['tcpClient'].value.port,

      username: this.form.controls['server'].value.username,
      password: this.form.controls['server'].value.password,
      dataTopic: ((this.form.controls['server'] as FormGroup).controls['subscribe'] as FormGroup).controls['dataTopic'].value,
      controlTopic: ((this.form.controls['server'] as FormGroup).controls['subscribe'] as FormGroup).controls['controlTopic'].value,
      rateLimitTmrSP: this.form.controls['rateLimits'].value.rateLimitTmrSP,
      rateLimitTxCountSP: this.form.controls['rateLimits'].value.rateLimitTxCountSP
    });

    if (response.ok) {
      this.toast.success('Updated')
    } else {
      this.toast.error(response.result.message);
    };
    this.loading = false;
  }
}
