import { InjectionToken, Type } from '@angular/core';
import { Layouts } from '../layout/layout';
import { LayoutComponent } from '../layout/layout.component';
import { Pages } from '../page/page';
import { PageComponent } from '../page/page.component';

export class PageConfig {
	defaultPage?: Type<PageComponent>;
	notFoundPage?: Type<PageComponent>;
	defaultLayout?: Type<LayoutComponent>;
	pages?: Pages = {};
	layouts?: Layouts = {};

	constructor(options?: PageConfig) {
		// console.log('PageConfig', options);
		if (options) {
			this.layouts = options.layouts || {};
			this.defaultLayout = options.defaultLayout;
			this.pages = options.pages || {};
			this.defaultPage = options.defaultPage;
			this.notFoundPage = options.notFoundPage;
		}
	}
}

export const PAGE_CONFIG = new InjectionToken<PageConfig>('page.config');
