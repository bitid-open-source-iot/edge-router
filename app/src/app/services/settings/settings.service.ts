import { Device } from 'src/app/classes/device';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class SettingsService {

	public data: Device[] = [];

	constructor(private api: ApiService) { }

	public async list(params: any) {
		return await this.api.post(environment.server, '/edge-router/settings/list', params);
	}

	public async update(params: any) {
		return await this.api.post(environment.server, '/edge-router/settings/update', params);
	}

	public async command(params: any) {
		return await this.api.post(environment.server, '/edge-router/settings/command', params);
	}

}
