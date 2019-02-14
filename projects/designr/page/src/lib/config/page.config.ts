import { InjectionToken, Type } from '@angular/core';
import { PageComponent } from '../pages/page.component';
import { Pages } from '../pages/pages';

export class PageConfig {
	defaultPage?: Type<PageComponent>;
	notFoundPage?: Type<PageComponent>;
	pages?: Pages = {};

	constructor(options?: PageConfig) {
		console.log('PageConfig', options);
		if (options) {
			this.pages = options.pages || {};
			this.defaultPage = options.defaultPage;
			this.notFoundPage = options.notFoundPage;
		}
	}
}

export const PAGE_CONFIG = new InjectionToken<PageConfig>('page.config');
