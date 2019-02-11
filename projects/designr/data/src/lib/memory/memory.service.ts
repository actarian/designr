import { Inject, Injectable } from '@angular/core';
import { InMemoryDbService, ParsedRequestUrl } from 'angular-in-memory-web-api';
import { DataConfig, DATA_CONFIG } from '../config/data.config';

@Injectable({
	providedIn: 'root',
})
export class MemoryService implements InMemoryDbService {

	constructor(
		@Inject(DATA_CONFIG) private config: DataConfig,
		// @Inject(forwardRef(() => ConfigService)) public configService: ConfigService
		// private configService: ConfigService,
	) {
		console.log('DatasService', config);
	}

	createDb() {
		console.log('MemoryService.createDb', this.config.datas);
		return this.config.datas || {};
	}

	parseRequestUrl(url: string, service): ParsedRequestUrl {
		// !!! REMAPPING
		/*
		if (this.configService.options.memory && this.configService.options.memory.remap) {
			Object.keys(this.configService.options.memory.remap).forEach((k: string) => {
				url = url.replace(k, this.configService.options.memory.remap[k]);
			});
		}
		*/
		const parsed: ParsedRequestUrl = service.parseRequestUrl(url);
		return parsed;
	}

}

/*
export class MemoryApiConfig extends InMemoryBackendConfig implements InMemoryBackendConfigArgs {

	apiBase?: string;
	caseSensitiveSearch?: boolean;
	dataEncapsulation?: boolean;
	delay?: number;
	delete404?: boolean;
	host?: string;
	passThruUnknownUrl?: boolean;
	post204?: boolean;
	post409?: boolean;
	put204?: boolean;
	put404?: boolean;
	rootPath?: string;

	remap?: { [key: string]: string };
	dataBase?: { [key: string]: any[] };

	constructor(options?: MemoryApiConfig) {
		super(options);
		console.log('MemoryApiConfig', options);
		if (options) {
			Object.assign(this, options);
		}
	}
}
*/
