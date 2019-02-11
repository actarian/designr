import { Inject, Injectable, InjectionToken } from '@angular/core';
import { InMemoryDbService, ParsedRequestUrl } from 'angular-in-memory-web-api';

export const MEMORY_DATA = new InjectionToken<{ [key: string]: any[] }>('core.datas');

@Injectable({
	providedIn: 'root',
})
export class MemoryService implements InMemoryDbService {

	constructor(
		@Inject(MEMORY_DATA) private datas: { [key: string]: any[] },
		// @Inject(forwardRef(() => ConfigService)) public configService: ConfigService
		// private configService: ConfigService,
	) {
		console.log('DatasService', datas);
	}

	createDb() {
		console.log('DATAS', this.datas);
		return this.datas || {};
	}

	parseRequestUrl(url: string, service): ParsedRequestUrl {
		// !!! REMAPPING
		/*
		if (this.configService.options.memoryApi && this.configService.options.memoryApi.remap) {
			Object.keys(this.configService.options.memoryApi.remap).forEach((k: string) => {
				url = url.replace(k, this.configService.options.memoryApi.remap[k]);
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
