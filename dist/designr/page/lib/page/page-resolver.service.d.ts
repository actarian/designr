import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { RouteService } from '@designr/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Page } from './page';
import { PageResolver } from './page-resolver';
import { PageService } from './page.service';
export declare class PageResolverService implements Resolve<PageResolver> {
    private pageService;
    private routeService;
    events$: BehaviorSubject<PageResolver>;
    constructor(pageService: PageService, routeService: RouteService);
    pageToPageResolver(page: Page): PageResolver;
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PageResolver>;
    getPageById(id: number | string): Observable<PageResolver>;
    getPageBySlug(slug: string): Observable<PageResolver>;
}
