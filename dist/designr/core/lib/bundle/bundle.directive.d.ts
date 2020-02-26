import { Injector, NgModuleFactoryLoader, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { Bundles } from './bundle';
import * as i0 from "@angular/core";
export declare type ModuleWithRoot = Type<any> & {
    rootComponent: Type<any>;
};
export declare class BundleDirective implements OnInit, OnDestroy {
    private bundles;
    private injector;
    private loader;
    private container;
    bundle: keyof Bundles;
    data?: any;
    private moduleRef_;
    private componentRef_;
    constructor(bundles: any, injector: Injector, loader: NgModuleFactoryLoader, container: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<BundleDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BundleDirective, "[bundle]", never, { "bundle": "bundle"; "data": "data"; }, {}, never>;
}
