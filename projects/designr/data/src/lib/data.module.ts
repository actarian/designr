import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataConfig, DATA_CONFIG } from './config/data.config';
import { DataService } from './config/data.service';
import { DataModuleComponent } from './data-module.component';
import { MemoryService } from './memory/memory.service';

const modules = [
	HttpClientModule,
	HttpClientInMemoryWebApiModule,
	CoreModule,
];

const services = [
	DataService,
];

const components = [
	DataModuleComponent,
];

const directives = [
];

const pipes = [
];

const validators = [
];

const guards = [
];

@NgModule({
	imports: [
		...modules,
	],
	providers: [
		...services,
	],
	declarations: [
		...components,
	],
	exports: [
		...modules,
		...components,
	],
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
