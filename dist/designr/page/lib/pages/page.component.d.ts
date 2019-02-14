import { Injector } from '@angular/core';
import { Params, Router } from '@angular/router';
import { DisposableComponent, RouteService } from '@designr/core';
import { Observable } from 'rxjs';
import { Page } from './page';
export interface PageInit {
    PageInit(): void;
}
export declare class PageComponent extends DisposableComponent {
    protected injector: Injector;
    page: Page;
    params: Observable<Params>;
    queryParams: Observable<Params>;
    readonly platformId: string;
    readonly routeService: RouteService;
    readonly router: Router;
    constructor(injector: Injector);
    private scrollToTop;
    getId(): number | string;
    getSlug(): string;
}
