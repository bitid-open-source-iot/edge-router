import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { environment } from 'src/environments/environment';
import { SessionStorageService } from '../session-storage/session-storage.service';

@Injectable({
	providedIn: 'root'
})

export class AdminService {

	constructor(private api: ApiService, private storage: SessionStorageService) { }

	public async changeEmail(params: any) {
		const response = await this.api.post(environment.server, '/edge-router/admin/change-email', params);
		if (response.ok) {
			this.storage.set('email', params.email);
		};
		return response;
	}

	public async authenticate(params: any) {
		this.storage.set('email', params.email);
		this.storage.set('password', params.password);
		return await this.api.put(environment.server, '/edge-router/admin/authenticate', {});
	}

	public async changePassword(params: any) {
		const response = await this.api.post(environment.server, '/edge-router/admin/change-password', params);
		if (response.ok) {
			this.storage.set('password', params.password);
		};
		return response;
	}

}
