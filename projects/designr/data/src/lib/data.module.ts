import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataConfig, DATA_CONFIG } from './config/data.config';
import { DataModuleComponent } from './data-module.component';
import { MemoryService } from './memory/memory.service';

@NgModule({
	imports: [
		HttpClientModule,
		HttpClientInMemoryWebApiModule,
	],
	exports: [
		DataModuleComponent,
		HttpClientInMemoryWebApiModule,
	],
	declarations: [
		DataModuleComponent,
	],
	providers: [],
})

export class DataModule {

	constructor(
		@Optional() @SkipSelf() parentModule: DataModule
	) {
		if (parentModule) {
			throw new Error('DataModule is already loaded. Import it in the AppModule only');
		}
	}

	public static forRoot(
		config?: DataConfig,
	): ModuleWithProviders {
		return {
			ngModule: DataModule,
			providers: [
				{ provide: DATA_CONFIG, useValue: config },
				...HttpClientInMemoryWebApiModule.forRoot(
					MemoryService, config.memory
				).providers
			]
		};
	}

}
