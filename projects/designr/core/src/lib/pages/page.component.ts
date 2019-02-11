
import { isPlatformBrowser } from '@angular/common';
import { Component, Injector, Input, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DisposableComponent } from '../disposable/disposable.component';
import { RouteService } from '../routes/route.service';
import { Page } from './page';

export interface PageInit {
	PageInit(): void;
}

@Component({
	selector: 'core-page',
	template: `<h1>I'm a default view!</h1>`,
})

export class PageComponent extends DisposableComponent {

	@Input() page: Page;
	@Input() params: Observable<Params>;
	@Input() queryParams: Observable<Params>;

	get platformId(): string {
		return this.injector.get(PLATFORM_ID) as string;
	}

	get routeService(): RouteService {
		return this.injector.get(RouteService);
	}

	get router(): Router {
		return this.injector.get(Router);
	}

	constructor(
		protected injector: Injector,
	) {
		super();
		this.scrollToTop();
	}

	// !!! Scroll to top on page change
	private scrollToTop(): void {
		// !!! PLATFORM_ID dependancy manually activated
		// const platformId: string = RouteService.injector.get(PLATFORM_ID) as string;
		if (isPlatformBrowser(this.platformId)) {
			// !!! Router dependancy manually activated
			// const router = RouteService.injector.get(Router);
			this.router.events.subscribe((e) => {
				if (!(e instanceof NavigationEnd)) {
					return;
				}
				window.scrollTo(0, 0);
			});
		}
	}

	getId(): number | string {
		return this.routeService.getId() || (this.page ? this.page.id : 0);
	}

	getSlug(): string {
		return this.routeService.getSlug() || (this.page ? this.page.slug : '');
	}

}
