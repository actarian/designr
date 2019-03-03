import { Inject, Injectable } from '@angular/core';
import { DataConfig, DATA_CONFIG } from '../config/data.config';
import { BackendService } from '../memory/backend.service';
import { MemoryDataService, MemoryRequest, MemoryResponse, ParsedRequestUrl } from '../memory/memory';
import { STATUS_CODE } from '../memory/status-codes';

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

	requestInterceptor(request: MemoryRequest, service: BackendService): MemoryResponse {
		// console.log('requestInterceptor', request);
		let body: any;
		if (request.method === 'post') {
			switch (request.collectionName) {
				case 'slug':
					const mnemonics = request.body;
					body = request.body.map(x => request.collection.find(c => c.mnemonic === x) || null).filter(x => x);
					// console.log(item);
					return { headers: request.headers, body: service.bodify(body), status: STATUS_CODE.OK };
					break;
				case 'label':
					const ids = request.body.map(x => x.id);
					body = request.body.map(x => request.collection.find(c => c.id === x.id) || x);
					// console.log(item);
					return { headers: request.headers, body: service.bodify(body), status: STATUS_CODE.OK };
					break;
			}
		}
		return null;
	}

	/*
	responseInterceptor(response: MemoryResponse, request: MemoryRequest): MemoryResponse {
		console.log('responseInterceptor', response, request);
		return response;
	}
	*/

}
