////// HttpClient-Only version ////

import { HttpBackend, XhrFactory } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { BackendService } from './backend.service';
import { MemoryBackendConfig, MemoryDataService } from './memory';

// Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported
export function BackendServiceFactory(
	dataService: MemoryDataService,
	config: MemoryBackendConfig,
	factory: XhrFactory,
): HttpBackend {
	const backend: any = new BackendService(dataService, config, factory);
	return backend;
}

@NgModule({})
export class MemoryModule {

	static forRoot(
		dataService: Type<MemoryDataService>,
		config?: MemoryBackendConfig
	): ModuleWithProviders {
		return {
			ngModule: MemoryModule,
			providers: [
				{ provide: MemoryDataService, useClass: dataService },
				{ provide: MemoryBackendConfig, useValue: config },
				{ provide: HttpBackend, useFactory: BackendServiceFactory, deps: [MemoryDataService, MemoryBackendConfig, XhrFactory] }
			]
		};
	}

	static forFeature(
		dataService: Type<MemoryDataService>,
		config?: MemoryBackendConfig
	): ModuleWithProviders {
		return MemoryModule.forRoot(dataService, config);
	}

}
