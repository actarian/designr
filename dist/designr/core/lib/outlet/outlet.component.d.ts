import { ComponentFactoryResolver, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '../disposable/disposable.component';
import { Outlet } from './outlet';
import { OutletResolverService } from './outlet-resolver.service';
import * as i0 from "@angular/core";
export declare class OutletComponent extends DisposableComponent implements OnInit, OnDestroy {
    private componentFactoryResolver;
    private outletResolverService;
    outlet: Outlet;
    viewContainerRef: ViewContainerRef;
    private componentRef;
    constructor(componentFactoryResolver: ComponentFactoryResolver, outletResolverService: OutletResolverService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<OutletComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OutletComponent, "outlet-component", never, { "outlet": "outlet"; }, {}, never>;
}
