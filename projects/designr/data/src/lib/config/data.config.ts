import { InjectionToken } from '@angular/core';
import { InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';
import { Datas } from '../data/datas';

export const DATA_CONFIG = new InjectionToken<DataConfig>('data.config');

export class DataConfig {
	datas?: Datas = {};
	memory?: InMemoryBackendConfigArgs;

	constructor(options?: DataConfig) {
		console.log('DataConfig', options);
		if (options) {
			this.datas = options.datas || {};
		}
	}
}
