
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { RouteService } from '../routes/route.service';
import { Page } from './page';
import { PageResolver } from './page-resolver';
import { PageService } from './page.service';

@Injectable({
	providedIn: 'root'
})
export class PageResolverService implements Resolve<PageResolver> {

	public events$: BehaviorSubject<PageResolver> = new BehaviorSubject<PageResolver>(null);

	constructor(
		private configService: ConfigService,
		private pageService: PageService,
		private routeService: RouteService,
	) { }

	pageToPageResolver(page: Page): PageResolver {
		const pageResolver = new PageResolver(this.configService, page);
		this.events$.next(pageResolver);
		return pageResolver;
	}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PageResolver> {
		if (route.params && route.params.id) {
			return this.getPageById(route.params.id);
		} else {
			const paths = route.url.filter(x => {
				return x.path;
			}).map(x => {
				return x.path;
			});
			const slug = this.routeService.toSlug(paths).join('/');
			return this.getPageBySlug(slug);
		}
	}

	getPageById(id: number | string): Observable<PageResolver> {
		// console.log('PageResolverService.getPageById', id);
		return this.pageService.getPageById(id).pipe(
			map(page => this.pageToPageResolver(page))
		);
	}

	getPageBySlug(slug: string): Observable<PageResolver> {
		// console.log('PageResolverService.getPageBySlug', slug);
		return this.pageService.getStatePageBySlug(slug).pipe(
			map(page => this.pageToPageResolver(page))
		);
	}

}
