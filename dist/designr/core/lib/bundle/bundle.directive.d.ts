import { Injector, NgModuleFactoryLoader, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { Bundles } from './bundle';
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
}
