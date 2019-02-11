import { Type } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Page } from './page';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageComponent } from './page.component';

export class PageResolver {

	public component: Type<PageComponent> = PageComponent;

	constructor(
		private configService: ConfigService,
		public page: Page,
	) {
		if (page && this.configService.options.pages) {
			this.component = this.configService.options.pages[page.component] || this.configService.options.defaultPage;
		} else {
			this.component = this.configService.options.notFoundPage || PageNotFoundComponent;
		}
	}
}
