import * as path from 'object-path';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterBy',
	pure: false
})

export class FilterPipe implements PipeTransform {

	transform(array: any[], params: any, revert?: any[]): any[] {
		const filters = Object.keys(params).filter(key => (typeof (params[key]) != 'undefined' && params[key] != null));
		if (filters.length > 0) {
			return array.filter(item => {
				let found: any[] = [];
				filters.map(key => {
					if (path.has(item, key)) {
						if (typeof (path.get(item, key)) == 'string') {
							if (typeof (params[key]) == 'string') {
								found.push((path.get(item, key).trim().toLowerCase().indexOf(params[key].trim().toLowerCase()) > -1));
							} else if (Array.isArray(params[key])) {
								found.push((params[key].filter((o: any) => path.get(item, key).trim().toLowerCase().indexOf(o) > -1).length > 0));
							} else if (typeof (params[key]) == 'number') {
								found.push((path.get(item, key).trim().toLowerCase().indexOf(params[key]) > -1));
							}
						} else if (Array.isArray(path.get(item, key))) {
							if (typeof (params[key]) == 'string') {
								found.push((path.get(item, key).includes(params[key].trim().toLowerCase()) > -1));
							} else if (Array.isArray(params[key])) {
								found.push((params[key].filter((o: any) => path.get(item, key).includes(o)).length > 0));
							} else if (typeof (params[key]) == 'number') {
								found.push((path.get(item, key).includes(params[key]) > -1));
							}
						} else if (typeof (path.get(item, key)) == 'number') {
							if (typeof (params[key]) == 'string') {
								found.push((path.get(item, key).toString().trim().toLowerCase().indexOf(params[key].trim().toLowerCase()) > -1));
							} else if (Array.isArray(params[key])) {
								found.push((params[key].includes(path.get(item, key)).length > -1));
							} else if (typeof (params[key]) == 'number') {
								found.push((path.get(item, key) == params[key]));
							}
						} else if (typeof (path.get(item, key)) == 'boolean') {
							if (typeof (params[key]) == 'boolean') {
								found.push((path.get(item, key) == params[key]));
							} else if (Array.isArray(params[key])) {
								found.push((params[key].filter((o: any) => path.get(item, key).indexOf(o) > -1).length > 0));
							} else if (typeof (params[key]) == 'number') {
								found.push((path.get(item, key).indexOf(new Boolean(params[key])) > -1));
							}
						}
					}
				});
				return !found.includes(false);
			});
		} else {
			if (Array.isArray(revert)) {
				return revert;
			} else {
				return array;
			}
		}
	}

}
