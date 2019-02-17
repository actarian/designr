import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { PageConfig, PAGE_CONFIG } from './config/page.config';
import { PageModuleComponent } from './page-module.component';
import { PageRouting } from './page.routing';
import { PageNotFoundComponent } from './page/page-not-found.component';
import { PageOutletComponent } from './page/page-outlet.component';
import { PageComponent } from './page/page.component';
import { PageGuard } from './page/page.guard';
import { PageService } from './page/page.service';
import { StaticGuard } from './page/static.guard';

const services = [
	PageService,
];

const components = [
	PageModuleComponent,
	PageComponent,
	PageNotFoundComponent,
	PageOutletComponent,
];

const directives = [
];

const pipes = [
];

const validators = [
];

const guards = [
	PageGuard,
	StaticGuard,
];

@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		PageRouting,
	],
	providers: [
		...services,
		...guards,
	],
	declarations: [
		...components,
	],
	entryComponents: [
		...components,
	],
	exports: [
		CoreModule,
		PageRouting,
		...components,
	],
})

export class PageModule {

	constructor(
		@Optional() @SkipSelf() parentModule: PageModule
	) {
		if (parentModule) {
			throw new Error('PageModule is already loaded. Import it in the AppModule only');
		}
	}

	public static forRoot(
		config?: PageConfig,
	): ModuleWithProviders {
		return {
			ngModule: PageModule,
			providers: [{
				provide: PAGE_CONFIG, useValue: config
			}]
		};
	}

}
