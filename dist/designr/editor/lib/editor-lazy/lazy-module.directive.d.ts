import { Injector, NgModuleFactoryLoader, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { Modules } from './editor-lazy';
export declare type ModuleWithRoot = Type<any> & {
    rootComponent: Type<any>;
};
export declare class LazyModuleDirective implements OnInit, OnDestroy {
    private modulesMap;
    private injector;
    private loader;
    private container;
    lazyModule: keyof Modules;
    private moduleRef;
    constructor(modulesMap: any, injector: Injector, loader: NgModuleFactoryLoader, container: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
