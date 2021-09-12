import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class SessionStorageService {

	constructor() { }

	public clear() {
		window.sessionStorage.clear();
	}

	public remove(key: string) {
		window.sessionStorage.removeItem(key);
	}

	public set(key: string, value: any) {
		window.sessionStorage.setItem(key, value);
	}

	public get(key: string, value?: any) {
		const result = window.sessionStorage.getItem(key);
		if (typeof (result) != 'undefined' && result !== null) {
			return result;
		} else {
			return value;
		}
	}

	public setObject(key: string, value: any) {
		window.sessionStorage.setItem(key, JSON.stringify(value || {}));
	}

	public getObject(key: string, value?: any) {
		if (!value) {
			value = {};
		}
		const kayvalue = window.sessionStorage.getItem(key);
		if (typeof (kayvalue) == 'undefined' || kayvalue == null) {
			return value;
		} else {
			return JSON.parse(kayvalue);
		}
	}

}
