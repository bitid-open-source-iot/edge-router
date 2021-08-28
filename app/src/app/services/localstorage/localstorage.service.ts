import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class LocalstorageService {

	constructor() { }

	public clear() {
		window.localStorage.clear();
	}

	public remove(key: string) {
		window.localStorage.removeItem(key);
	}

	public set(key: string, value: any) {
		window.localStorage.setItem(key, value);
	}

	public get(key: string, value?: any) {
		const result = window.localStorage.getItem(key);
		if (typeof (result) != 'undefined' && result !== null) {
			return result;
		} else {
			return value;
		}
	}

	public setObject(key: string, value: any) {
		window.localStorage.setItem(key, JSON.stringify(value || {}));
	}

	public getObject(key: string, value?: any) {
		if (!value) {
			value = {};
		}
		const kayvalue = window.localStorage.getItem(key);
		if (typeof (kayvalue) == 'undefined' || kayvalue == null) {
			return value;
		} else {
			return JSON.parse(kayvalue);
		}
	}

}
