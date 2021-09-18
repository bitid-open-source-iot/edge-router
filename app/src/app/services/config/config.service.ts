import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class ConfigService {

	constructor(private api: ApiService) { }

	public async get(params: any) {
		return this.api.post(environment.server, '/edge-router/config/get', params);
	}

	public async import(params: any) {
		return this.api.post(environment.server, '/edge-router/config/import', params);
	}

	public async export(params: any) {
		return this.api.post(environment.server, '/edge-router/config/export', params);
	}

	public async update(params: any) {
		return this.api.post(environment.server, '/edge-router/config/update', params);
	}

}
