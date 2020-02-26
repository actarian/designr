import { ComponentFactoryResolver, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DisposableComponent, RouteService } from '@designr/core';
import { PageService } from './page.service';
import * as i0 from "@angular/core";
export declare class PageOutletComponent extends DisposableComponent implements OnInit, OnDestroy {
    private router;
    private route;
    private componentFactoryResolver;
    private routeService;
    private pageService;
    viewContainerRef: ViewContainerRef;
    private componentRef;
    constructor(router: Router, route: ActivatedRoute, componentFactoryResolver: ComponentFactoryResolver, routeService: RouteService, pageService: PageService);
    ngOnInit(): void;
    setSnapshot(snapshot: ActivatedRouteSnapshot): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<PageOutletComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PageOutletComponent, "page-outlet", never, {}, {}, never>;
}
