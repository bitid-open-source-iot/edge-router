import { Router } from '@angular/router';
import { OnInit, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/* --- SERVICES --- */
import { ToastService } from 'src/app/services/toast/toast.service';
import { AdminService } from 'src/app/services/admin/admin.service';
import { FormErrorService } from 'src/app/services/form-error/form-error.service';

@Component({
    selector: 'change-email-page',
    styleUrls: ['./change-email.page.scss'],
    templateUrl: './change-email.page.html'
})

export class ChangeEmailPage implements OnInit, OnDestroy {

    constructor(private toast: ToastService, private router: Router, private service: AdminService, private formerror: FormErrorService) { }

    public form: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email])
    });
    public errors: any = {
        email: ''
    };
    public loading: boolean = false;
    private observers: any = {};

    public async submit() {
        this.loading = true;

        const response = await this.service.changeEmail(this.form.value);

        if (response.ok) {
            this.router.navigate(['/devices'], {
                replaceUrl: true
            });
            this.toast.success('Email was changed!');
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
