import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast/toast.service';
import { AdminService } from 'src/app/services/admin/admin.service';
import { FormErrorService } from 'src/app/services/form-error/form-error.service';
import { OnInit, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'change-password-page',
    styleUrls: ['./change-password.page.scss'],
    templateUrl: './change-password.page.html'
})

export class ChangePasswordPage implements OnInit, OnDestroy {

    constructor(private toast: ToastService, private router: Router, private service: AdminService, private formerror: FormErrorService) { }

    public form: FormGroup = new FormGroup({
        confirm: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
    });
    public errors: any = {
        confirm: '',
        password: ''
    };
    public loading: boolean = false;
    private observers: any = {};

    public async submit() {
        this.loading = true;

        const response = await this.service.changePassword(this.form.value);

        if (response.ok) {
            this.router.navigate(['/devices']);
            this.toast.success('Password was changed!');
        } else {
            this.toast.error(response.result.message);
        };

        this.loading = false;
    }

    ngOnInit(): void {
        this.observers.form = this.form.valueChanges.subscribe(() => {
            this.errors = this.formerror.validateForm(this.form, this.errors, true);
        });
    }

    ngOnDestroy(): void {
        this.observers.form.unsubscribe();
    }

}
