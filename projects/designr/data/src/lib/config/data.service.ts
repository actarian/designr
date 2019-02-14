
import { Inject, Injectable } from '@angular/core';
import { DataConfig, DATA_CONFIG } from './data.config';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	public options: DataConfig;

	constructor(
		@Inject(DATA_CONFIG) options: DataConfig
	) {
		console.log('DataService', options);
		options = options || {};
		this.options = new DataConfig(options);
	}

}
