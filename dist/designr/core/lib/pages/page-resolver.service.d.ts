import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { RouteService } from '../routes/route.service';
import { Page } from './page';
import { PageResolver } from './page-resolver';
import { PageService } from './page.service';
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
}
