import { Injector } from '@angular/core';
import { Params, Router } from '@angular/router';
import { DisposableComponent, RouteService } from '@designr/core';
import { Observable } from 'rxjs';
import { Page } from './page';
import * as i0 from "@angular/core";
export interface PageInit {
    PageInit(): void;
}
export declare class PageComponent extends DisposableComponent {
    protected injector: Injector;
    page: Page;
    params: Observable<Params>;
    queryParams: Observable<Params>;
    get platformId(): string;
    get routeService(): RouteService;
    get router(): Router;
    constructor(injector: Injector);
    private scrollToTop;
    getId(): number | string;
    getSlug(): string;
    static ɵfac: i0.ɵɵFactoryDef<PageComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PageComponent, "core-page", never, { "page": "page"; "params": "params"; "queryParams": "queryParams"; }, {}, never>;
}
