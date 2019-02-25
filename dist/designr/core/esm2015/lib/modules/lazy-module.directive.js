/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Inject, Injector, Input, NgModuleFactoryLoader, ViewContainerRef } from '@angular/core';
import { CORE_MODULES } from './core.modules';
export class LazyModuleDirective {
    /**
     * @param {?} modules
     * @param {?} injector
     * @param {?} loader
     * @param {?} container
     */
    constructor(modules, injector, loader, container) {
        this.modules = modules;
        this.injector = injector;
        this.loader = loader;
        this.container = container;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loader.load(this.modules[this.lazyModule]).then((moduleFactory) => {
            this.moduleRef = moduleFactory.create(this.injector);
            /** @type {?} */
            const rootComponentType = this.moduleRef.injector.get('LAZY_ROOT_COMPONENT');
            console.log(rootComponentType);
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
    { type: undefined, decorators: [{ type: Inject, args: [CORE_MODULES,] }] },
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
    LazyModuleDirective.prototype.modules;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1tb2R1bGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2xhenktbW9kdWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBbUIscUJBQXFCLEVBQXdDLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25LLE9BQU8sRUFBZSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBSy9CLFlBQytCLE9BQU8sRUFDN0IsUUFBa0IsRUFDbEIsTUFBNkIsRUFDN0IsU0FBMkI7UUFITCxZQUFPLEdBQVAsT0FBTyxDQUFBO1FBQzdCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7UUFDN0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFFcEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQW1DLEVBQUUsRUFBRTtZQUM1RixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztrQkFDL0MsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1lBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7a0JBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDO1lBQ2xHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJQUNGLENBQUM7OztZQTlCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGNBQWM7YUFDeEI7Ozs7NENBT0UsTUFBTSxTQUFDLFlBQVk7WUFkTSxRQUFRO1lBQTBCLHFCQUFxQjtZQUF3QyxnQkFBZ0I7Ozt5QkFVekksS0FBSzs7OztJQUFOLHlDQUF1Qzs7Ozs7SUFDdkMsd0NBQW9DOzs7OztJQUduQyxzQ0FBcUM7Ozs7O0lBQ3JDLHVDQUEwQjs7Ozs7SUFDMUIscUNBQXFDOzs7OztJQUNyQyx3Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdCwgSW5qZWN0b3IsIElucHV0LCBOZ01vZHVsZUZhY3RvcnksIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTmdNb2R1bGVSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlcywgQ09SRV9NT0RVTEVTIH0gZnJvbSAnLi9jb3JlLm1vZHVsZXMnO1xuXG5leHBvcnQgdHlwZSBNb2R1bGVXaXRoUm9vdCA9IFR5cGU8YW55PiAmIHsgcm9vdENvbXBvbmVudDogVHlwZTxhbnk+IH07XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tsYXp5TW9kdWxlXSdcbn0pXG5leHBvcnQgY2xhc3MgTGF6eU1vZHVsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKSBsYXp5TW9kdWxlOiBrZXlvZiBDb3JlTW9kdWxlcztcblx0cHJpdmF0ZSBtb2R1bGVSZWY6IE5nTW9kdWxlUmVmPGFueT47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDT1JFX01PRFVMRVMpIHByaXZhdGUgbW9kdWxlcyxcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRwcml2YXRlIGxvYWRlcjogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLFxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuXHQpIHtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubG9hZGVyLmxvYWQodGhpcy5tb2R1bGVzW3RoaXMubGF6eU1vZHVsZV0pLnRoZW4oKG1vZHVsZUZhY3Rvcnk6IE5nTW9kdWxlRmFjdG9yeTxhbnk+KSA9PiB7XG5cdFx0XHR0aGlzLm1vZHVsZVJlZiA9IG1vZHVsZUZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXHRcdFx0Y29uc3Qgcm9vdENvbXBvbmVudFR5cGUgPSB0aGlzLm1vZHVsZVJlZi5pbmplY3Rvci5nZXQoJ0xBWllfUk9PVF9DT01QT05FTlQnKTtcblx0XHRcdGNvbnNvbGUubG9nKHJvb3RDb21wb25lbnRUeXBlKTtcblx0XHRcdGNvbnN0IGZhY3RvcnkgPSB0aGlzLm1vZHVsZVJlZi5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnkocm9vdENvbXBvbmVudFR5cGUpO1xuXHRcdFx0dGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMubW9kdWxlUmVmKSB7XG5cdFx0XHR0aGlzLm1vZHVsZVJlZi5kZXN0cm95KCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==