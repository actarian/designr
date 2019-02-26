////// HttpClient-Only version ////

import { HttpBackend, XhrFactory } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { HttpClientBackendService } from './http-client-backend.service';
import { MemoryBackendConfig, MemoryDataService } from './memory';

// Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported
export function httpClientBackendServiceFactory(
	dataService: MemoryDataService,
	config: MemoryBackendConfig,
	factory: XhrFactory,
): HttpBackend {
	const backend: any = new HttpClientBackendService(dataService, config, factory);
	return backend;
}

@NgModule({})
export class HttpClientMemoryModule {

	static forRoot(
		dataService: Type<MemoryDataService>,
		config?: MemoryBackendConfig
	): ModuleWithProviders {
		return {
			ngModule: HttpClientMemoryModule,
			providers: [
				{ provide: MemoryDataService, useClass: dataService },
				{ provide: MemoryBackendConfig, useValue: config },
				{ provide: HttpBackend, useFactory: httpClientBackendServiceFactory, deps: [MemoryDataService, MemoryBackendConfig, XhrFactory] }
			]
		};
	}

	static forFeature(
		dataService: Type<MemoryDataService>,
		config?: MemoryBackendConfig
	): ModuleWithProviders {
		return HttpClientMemoryModule.forRoot(dataService, config);
	}
}
