import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SessionStorageService } from '../session-storage/session-storage.service';

@Injectable({
	providedIn: 'root'
})

export class AuthManager implements CanActivate {

	constructor(private router: Router, private sessionstorage: SessionStorageService) { }

	canActivate() {
		let email: string = this.sessionstorage.get('email');
		let valid: boolean = true;
		let password: string = this.sessionstorage.get('password');
		if (typeof (email) == 'undefined' || email == null) {
			valid = false;
		};
		if (typeof (password) == 'undefined' || password == null) {
			valid = false;
		};
		if (!valid) {
			this.router.navigate(['/sign-in'], {
				replaceUrl: true
			});
			this.sessionstorage.clear();
		};
		return valid;
	}

}
