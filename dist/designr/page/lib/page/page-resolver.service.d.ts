import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { RouteService } from '@designr/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { Page } from './page';
import { PageResolver } from './page-resolver';
import { PageService } from './page.service';
import * as i0 from "@angular/core";
export declare class PageResolverService implements Resolve<PageResolver> {
    private configService;
    private pageService;
    private routeService;
    events$: BehaviorSubject<PageResolver>;
    constructor(configService: ConfigService, pageService: PageService, routeService: RouteService);
    pageToPageResolver(page: Page): PageResolver;
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PageResolver>;
    getPageById(id: number | string): Observable<PageResolver>;
    getPageBySlug(slug: string): Observable<PageResolver>;
    static ɵfac: i0.ɵɵFactoryDef<PageResolverService>;
    static ɵprov: i0.ɵɵInjectableDef<PageResolverService>;
}
