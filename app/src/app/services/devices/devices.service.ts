import { Device } from 'src/app/classes/device';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class DevicesService {

	public data: Device[] = [];

	constructor(private api: ApiService) { }

	public async add(params: any) {
		return await this.api.post(environment.server, '/edge-router/devices/add', params);
	}

	public async get(params: any) {
		return await this.api.post(environment.server, '/edge-router/devices/get', params);
	}

	public async list(params: any) {
		return await this.api.post(environment.server, '/edge-router/devices/list', params);
	}

	public async update(params: any) {
		return await this.api.post(environment.server, '/edge-router/devices/update', params);
	}

	public async delete(params: any) {
		return await this.api.post(environment.server, '/edge-router/devices/delete', params);
	}

}
