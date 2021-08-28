import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class ApiService {

	constructor(private http: HttpClient) { }

	public async put(url: string, endpoint: string, payload: any) {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
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
