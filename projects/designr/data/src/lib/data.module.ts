import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { DataConfig, DATA_CONFIG } from './config/data.config';
import { DataService } from './config/data.service';
import { DataModuleComponent } from './data-module.component';
import { MemoryModule } from './memory/memory.module';

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
		CommonModule,
		HttpClientModule,
		MemoryModule,
		CoreModule,
	],
	providers: [
		...services,
	],
	declarations: [
		...components,
	],
	exports: [
		MemoryModule,
		CoreModule,
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
				...MemoryModule.forRoot(DataService, config.memory).providers
			]
		};
	}

}
