import { Type } from '@angular/core';
import { Page } from './page';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageComponent } from './page.component';
import { PageService } from './page.service';

export class PageResolver {

	public component: Type<PageComponent> = PageComponent;

	constructor(
		private pageService: PageService,
		public page: Page,
	) {
		if (page && this.pageService.options.pages) {
			this.component = this.pageService.options.pages[page.component] || this.pageService.options.defaultPage;
		} else {
			this.component = this.pageService.options.notFoundPage || PageNotFoundComponent;
		}
	}
}
