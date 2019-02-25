import { Injector, NgModuleFactoryLoader, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { CoreModules } from './core.modules';
export declare type ModuleWithRoot = Type<any> & {
    rootComponent: Type<any>;
};
export declare class LazyModuleDirective implements OnInit, OnDestroy {
    private modules;
    private injector;
    private loader;
    private container;
    lazyModule: keyof CoreModules;
    private moduleRef;
    constructor(modules: any, injector: Injector, loader: NgModuleFactoryLoader, container: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
