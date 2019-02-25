/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Inject, Injector, Input, NgModuleFactoryLoader, ViewContainerRef } from '@angular/core';
import { EDITOR_MODULES_FACTORY } from './editor-lazy';
export class LazyModuleDirective {
    /**
     * @param {?} modulesMap
     * @param {?} injector
     * @param {?} loader
     * @param {?} container
     */
    constructor(modulesMap, injector, loader, container) {
        this.modulesMap = modulesMap;
        this.injector = injector;
        this.loader = loader;
        this.container = container;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loader.load(this.modulesMap[this.lazyModule]).then((moduleFactory) => {
            this.moduleRef = moduleFactory.create(this.injector);
            /** @type {?} */
            const rootComponentType = this.moduleRef.injector.get('LAZY_ENTRY_COMPONENT');
            /** @type {?} */
            const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponentType);
            this.container.createComponent(factory);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.moduleRef) {
            this.moduleRef.destroy();
        }
    }
}
LazyModuleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lazyModule]'
            },] }
];
/** @nocollapse */
LazyModuleDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [EDITOR_MODULES_FACTORY,] }] },
    { type: Injector },
    { type: NgModuleFactoryLoader },
    { type: ViewContainerRef }
];
LazyModuleDirective.propDecorators = {
    lazyModule: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LazyModuleDirective.prototype.lazyModule;
    /**
     * @type {?}
     * @private
     */
    LazyModuleDirective.prototype.moduleRef;
    /**
     * @type {?}
     * @private
     */
    LazyModuleDirective.prototype.modulesMap;
    /**
     * @type {?}
     * @private
     */
    LazyModuleDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    LazyModuleDirective.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    LazyModuleDirective.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1tb2R1bGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1sYXp5L2xhenktbW9kdWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBbUIscUJBQXFCLEVBQXdDLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25LLE9BQU8sRUFBRSxzQkFBc0IsRUFBVyxNQUFNLGVBQWUsQ0FBQztBQU9oRSxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBSy9CLFlBQ3lDLFVBQVUsRUFDMUMsUUFBa0IsRUFDbEIsTUFBNkIsRUFDN0IsU0FBMkI7UUFISyxlQUFVLEdBQVYsVUFBVSxDQUFBO1FBQzFDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7UUFDN0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFFcEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQW1DLEVBQUUsRUFBRTtZQUMvRixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztrQkFDL0MsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDOztrQkFDdkUsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUM7WUFDbEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7O1lBN0JELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsY0FBYzthQUN4Qjs7Ozs0Q0FPRSxNQUFNLFNBQUMsc0JBQXNCO1lBZEosUUFBUTtZQUEwQixxQkFBcUI7WUFBd0MsZ0JBQWdCOzs7eUJBVXpJLEtBQUs7Ozs7SUFBTix5Q0FBbUM7Ozs7O0lBQ25DLHdDQUFvQzs7Ozs7SUFHbkMseUNBQWtEOzs7OztJQUNsRCx1Q0FBMEI7Ozs7O0lBQzFCLHFDQUFxQzs7Ozs7SUFDckMsd0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3QsIEluamVjdG9yLCBJbnB1dCwgTmdNb2R1bGVGYWN0b3J5LCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5nTW9kdWxlUmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVHlwZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRURJVE9SX01PRFVMRVNfRkFDVE9SWSwgTW9kdWxlcyB9IGZyb20gJy4vZWRpdG9yLWxhenknO1xuXG5leHBvcnQgdHlwZSBNb2R1bGVXaXRoUm9vdCA9IFR5cGU8YW55PiAmIHsgcm9vdENvbXBvbmVudDogVHlwZTxhbnk+IH07XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tsYXp5TW9kdWxlXSdcbn0pXG5leHBvcnQgY2xhc3MgTGF6eU1vZHVsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKSBsYXp5TW9kdWxlOiBrZXlvZiBNb2R1bGVzO1xuXHRwcml2YXRlIG1vZHVsZVJlZjogTmdNb2R1bGVSZWY8YW55PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KEVESVRPUl9NT0RVTEVTX0ZBQ1RPUlkpIHByaXZhdGUgbW9kdWxlc01hcCxcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRwcml2YXRlIGxvYWRlcjogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLFxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuXHQpIHtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubG9hZGVyLmxvYWQodGhpcy5tb2R1bGVzTWFwW3RoaXMubGF6eU1vZHVsZV0pLnRoZW4oKG1vZHVsZUZhY3Rvcnk6IE5nTW9kdWxlRmFjdG9yeTxhbnk+KSA9PiB7XG5cdFx0XHR0aGlzLm1vZHVsZVJlZiA9IG1vZHVsZUZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXHRcdFx0Y29uc3Qgcm9vdENvbXBvbmVudFR5cGUgPSB0aGlzLm1vZHVsZVJlZi5pbmplY3Rvci5nZXQoJ0xBWllfRU5UUllfQ09NUE9ORU5UJyk7XG5cdFx0XHRjb25zdCBmYWN0b3J5ID0gdGhpcy5tb2R1bGVSZWYuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHJvb3RDb21wb25lbnRUeXBlKTtcblx0XHRcdHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmICh0aGlzLm1vZHVsZVJlZikge1xuXHRcdFx0dGhpcy5tb2R1bGVSZWYuZGVzdHJveSgpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=