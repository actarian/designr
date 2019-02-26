import { Inject, Injectable } from '@angular/core';
import { DataConfig, DATA_CONFIG } from '../config/data.config';
import { MemoryDataService, ParsedRequestUrl } from '../memory/memory';

@Injectable({
	providedIn: 'root',
})
export class DataService implements MemoryDataService {

	public config: DataConfig;

	constructor(
		@Inject(DATA_CONFIG) config: DataConfig
		// @Inject(forwardRef(() => DataService)) public dataService: DataService
		// private dataService: DataService,
	) {
		// console.log('DataService', config);
		config = config || {};
		this.config = new DataConfig(config);
	}

	createDb() {
		// console.log('DataService.createDb', this.config.datas);
		return this.config.datas || {};
	}

	parseRequestUrl(url: string, service): ParsedRequestUrl {
		// !!! REMAPPING
		/*
		if (this.dataService.config.memory && this.dataService.config.memory.remap) {
			Object.keys(this.dataService.config.memory.remap).forEach((k: string) => {
				url = url.replace(k, this.dataService.config.memory.remap[k]);
			});
		}
		*/
		const parsed: ParsedRequestUrl = service.parseRequestUrl(url);
		return parsed;
	}

}
