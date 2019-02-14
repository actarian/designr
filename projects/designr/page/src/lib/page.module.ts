import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { PageConfig, PAGE_CONFIG } from './config/page.config';
import { PageModuleComponent } from './page-module.component';
import { PageRouting } from './page.routing';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { PageOutletComponent } from './pages/page-outlet.component';
import { PageComponent } from './pages/page.component';
import { PageGuard } from './pages/page.guard';
import { PageService } from './pages/page.service';
import { StaticGuard } from './pages/static.guard';

const modules = [
	CoreModule,
	PageRouting,
];

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
		...modules,
	],
	providers: [
		...services,
		...guards,
	],
	declarations: [
		...components,
	],
	exports: [
		...modules,
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
