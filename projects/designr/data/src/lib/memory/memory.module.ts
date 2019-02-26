import { HttpBackend, XhrFactory } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { httpClientBackendServiceFactory } from './http-client-memory.module';
import { MemoryBackendConfig, MemoryDataService } from './memory';

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
				{ provide: HttpBackend, useFactory: httpClientBackendServiceFactory, deps: [MemoryDataService, MemoryBackendConfig, XhrFactory] }
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
