import { InjectionToken } from '@angular/core';
import { MemoryBackendConfig } from '../memory/memory';

export const DATA_CONFIG = new InjectionToken<DataConfig>('data.config');

export interface Datas { [key: string]: any[]; }

export class DataConfig {
	datas?: Datas = {};
	memory?: MemoryBackendConfig;

	constructor(options?: DataConfig) {
		// console.log('DataConfig', options);
		if (options) {
			this.datas = options.datas || {};
		}
	}
}
