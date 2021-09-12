import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from '../session-storage/session-storage.service';

@Injectable()

export class ApiService {

	constructor(private http: HttpClient, private router: Router, private storage: SessionStorageService) { }

	public async put(url: string, endpoint: string, payload: any) {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		};

		payload.header = {
			email: this.storage.get('email'),
			password: this.storage.get('password')
		};

		return await this.http.put(url + endpoint, payload, options)
			.toPromise()
			.then(response => {
				return {
					ok: true,
					result: response
				};
			})
			.catch(error => {
				return this.error(error);
			});
	}

	public async post(url: string, endpoint: string, payload: any) {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		};

		payload.header = {
			email: this.storage.get('email'),
			password: this.storage.get('password')
		};

		return await this.http.post(url + endpoint, payload, options)
			.toPromise()
			.then(response => {
				return {
					ok: true,
					result: response
				};
			})
			.catch(error => {
				return this.error(error);
			});
	}

	private async error(error: any) {
		if (error.error) {
			if (error.error.errors) {
				if (error.error.code == 401) {
					this.storage.clear();
					this.router.navigate(['/sign-in']);
				};
				return {
					ok: false,
					result: error.error.errors[0]
				};
			} else {
				return {
					ok: false,
					result: error
				};
			}
		} else {
			return {
				ok: false,
				result: error
			};
		}
	}
}
