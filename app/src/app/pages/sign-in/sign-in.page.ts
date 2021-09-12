import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast/toast.service';
import { AdminService } from 'src/app/services/admin/admin.service';
import { FormErrorService } from 'src/app/services/form-error/form-error.service';
import { OnInit, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'sign-in-page',
    styleUrls: ['./sign-in.page.scss'],
    templateUrl: './sign-in.page.html'
})

export class SignInPage implements OnInit, OnDestroy {

    constructor(private toast: ToastService, private router: Router, private service: AdminService, private formerror: FormErrorService) { }

    public form: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
    });
    public errors: any = {
        email: '',
        password: ''
    };
    public loading: boolean = false;
    private observers: any = {};

    public async submit() {
        this.loading = true;

        const response = await this.service.authenticate(this.form.value);

        if (response.ok) {
            if (response.result.authenticated) {
                this.router.navigate(['/devices'], {
                    replaceUrl: true
                });
                this.toast.success('Sign in successful!');
            } else {
                this.toast.error('Invalid Credentials!');
            };
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
