import { Map } from 'src/app/classes/map';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class MappingService {

	public data: Map[] = [];

	constructor(private api: ApiService) { }

	public async add(params: any) {
		return await this.api.post(environment.server, '/edge-router/mapping/add', params);
	}

	public async get(params: any) {
		return await this.api.post(environment.server, '/edge-router/mapping/get', params);
	}

	public async list(params: any) {
		return await this.api.post(environment.server, '/edge-router/mapping/list', params);
	}

	public async update(params: any) {
		return await this.api.post(environment.server, '/edge-router/mapping/update', params);
	}

	public async delete(params: any) {
		return await this.api.post(environment.server, '/edge-router/mapping/delete', params);
	}

}
