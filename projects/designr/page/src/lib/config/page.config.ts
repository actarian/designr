import { InjectionToken, Type } from '@angular/core';
import { Pages } from '../page/page';
import { PageComponent } from '../page/page.component';

export class PageConfig {
	defaultPage?: Type<PageComponent>;
	notFoundPage?: Type<PageComponent>;
	pages?: Pages = {};

	constructor(options?: PageConfig) {
		// console.log('PageConfig', options);
		if (options) {
			this.pages = options.pages || {};
			this.defaultPage = options.defaultPage;
			this.notFoundPage = options.notFoundPage;
		}
	}
}

export const PAGE_CONFIG = new InjectionToken<PageConfig>('page.config');
