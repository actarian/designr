import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DisposableComponent } from '../disposable/disposable.component';
import { RouteService } from '../routes/route.service';
import { PageService } from './page.service';
export declare class PageOutletComponent extends DisposableComponent {
    private viewContainerRef;
    private router;
    private route;
    private componentFactoryResolver;
    private routeService;
    private pageService;
    private factory;
    constructor(viewContainerRef: ViewContainerRef, router: Router, route: ActivatedRoute, componentFactoryResolver: ComponentFactoryResolver, routeService: RouteService, pageService: PageService);
    setSnapshot(snapshot: ActivatedRouteSnapshot): void;
}
