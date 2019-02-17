import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { SectionConfig, SECTION_CONFIG } from './config/section.config';
import { SectionModuleComponent } from './section-module.component';
import { SectionOutletComponent } from './section/section-outlet.component';
import { SectionComponent } from './section/section.component';
import { SectionService } from './section/section.service';
import { SectionsComponent } from './section/sections.component';

const services = [
	SectionService,
];

const components = [
	SectionModuleComponent,
	SectionOutletComponent,
	SectionComponent,
	SectionsComponent,
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
		CoreModule,
	],
	providers: [
		...services,
	],
	declarations: [
		...components,
	],
	entryComponents: [
		...components,
	],
	exports: [
		CoreModule,
		...components,
	],
})

export class SectionModule {

	constructor(
		@Optional() @SkipSelf() parentModule: SectionModule
	) {
		if (parentModule) {
			throw new Error('SectionModule is already loaded. Import it in the AppModule only');
		}
	}

	public static forRoot(
		config?: SectionConfig,
	): ModuleWithProviders {
		return {
			ngModule: SectionModule,
			providers: [{
				provide: SECTION_CONFIG, useValue: config
			}]
		};
	}

}
