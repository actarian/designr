import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DisposableComponent, RouteService } from '@designr/core';
import { PageService } from './page.service';
export declare class PageOutletComponent extends DisposableComponent {
    private viewContainerRef;
    private router;
    private route;
    private componentFactoryResolver;
    private routeService;
    private pageService;
    constructor(viewContainerRef: ViewContainerRef, router: Router, route: ActivatedRoute, componentFactoryResolver: ComponentFactoryResolver, routeService: RouteService, pageService: PageService);
    setSnapshot(snapshot: ActivatedRouteSnapshot): void;
}