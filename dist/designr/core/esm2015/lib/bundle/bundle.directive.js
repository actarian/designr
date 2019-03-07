/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Inject, Injector, Input, NgModuleFactoryLoader, ViewContainerRef } from '@angular/core';
import { BUNDLES } from './bundle';
export class BundleDirective {
    /**
     * @param {?} bundles
     * @param {?} injector
     * @param {?} loader
     * @param {?} container
     */
    constructor(bundles, injector, loader, container) {
        this.bundles = bundles;
        this.injector = injector;
        this.loader = loader;
        this.container = container;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loader.load(this.bundles[this.bundle]).then((/**
         * @param {?} moduleFactory
         * @return {?}
         */
        (moduleFactory) => {
            this.moduleRef = moduleFactory.create(this.injector);
            /** @type {?} */
            const rootComponentType = this.moduleRef.injector.get('LAZY_ROOT_COMPONENT');
            console.log(rootComponentType);
            /** @type {?} */
            const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponentType);
            this.container.createComponent(factory);
        }));
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
BundleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bundle]'
            },] }
];
/** @nocollapse */
BundleDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [BUNDLES,] }] },
    { type: Injector },
    { type: NgModuleFactoryLoader },
    { type: ViewContainerRef }
];
BundleDirective.propDecorators = {
    bundle: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BundleDirective.prototype.bundle;
    /**
     * @type {?}
     * @private
     */
    BundleDirective.prototype.moduleRef;
    /**
     * @type {?}
     * @private
     */
    BundleDirective.prototype.bundles;
    /**
     * @type {?}
     * @private
     */
    BundleDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    BundleDirective.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    BundleDirective.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnVuZGxlL2J1bmRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQW1CLHFCQUFxQixFQUF3QyxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSyxPQUFPLEVBQVcsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBTzVDLE1BQU0sT0FBTyxlQUFlOzs7Ozs7O0lBSzNCLFlBQzBCLE9BQU8sRUFDeEIsUUFBa0IsRUFDbEIsTUFBNkIsRUFDN0IsU0FBMkI7UUFIVixZQUFPLEdBQVAsT0FBTyxDQUFBO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7UUFDN0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFFcEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLGFBQW1DLEVBQUUsRUFBRTtZQUN4RixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztrQkFDL0MsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1lBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7a0JBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDO1lBQ2xHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJQUNGLENBQUM7OztZQTlCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7YUFDcEI7Ozs7NENBT0UsTUFBTSxTQUFDLE9BQU87WUFkVyxRQUFRO1lBQTBCLHFCQUFxQjtZQUF3QyxnQkFBZ0I7OztxQkFVekksS0FBSzs7OztJQUFOLGlDQUErQjs7Ozs7SUFDL0Isb0NBQW9DOzs7OztJQUduQyxrQ0FBZ0M7Ozs7O0lBQ2hDLG1DQUEwQjs7Ozs7SUFDMUIsaUNBQXFDOzs7OztJQUNyQyxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdCwgSW5qZWN0b3IsIElucHV0LCBOZ01vZHVsZUZhY3RvcnksIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTmdNb2R1bGVSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdW5kbGVzLCBCVU5ETEVTIH0gZnJvbSAnLi9idW5kbGUnO1xuXG5leHBvcnQgdHlwZSBNb2R1bGVXaXRoUm9vdCA9IFR5cGU8YW55PiAmIHsgcm9vdENvbXBvbmVudDogVHlwZTxhbnk+IH07XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tidW5kbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBCdW5kbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KCkgYnVuZGxlOiBrZXlvZiBCdW5kbGVzO1xuXHRwcml2YXRlIG1vZHVsZVJlZjogTmdNb2R1bGVSZWY8YW55PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KEJVTkRMRVMpIHByaXZhdGUgYnVuZGxlcyxcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRwcml2YXRlIGxvYWRlcjogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLFxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuXHQpIHtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubG9hZGVyLmxvYWQodGhpcy5idW5kbGVzW3RoaXMuYnVuZGxlXSkudGhlbigobW9kdWxlRmFjdG9yeTogTmdNb2R1bGVGYWN0b3J5PGFueT4pID0+IHtcblx0XHRcdHRoaXMubW9kdWxlUmVmID0gbW9kdWxlRmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG5cdFx0XHRjb25zdCByb290Q29tcG9uZW50VHlwZSA9IHRoaXMubW9kdWxlUmVmLmluamVjdG9yLmdldCgnTEFaWV9ST09UX0NPTVBPTkVOVCcpO1xuXHRcdFx0Y29uc29sZS5sb2cocm9vdENvbXBvbmVudFR5cGUpO1xuXHRcdFx0Y29uc3QgZmFjdG9yeSA9IHRoaXMubW9kdWxlUmVmLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShyb290Q29tcG9uZW50VHlwZSk7XG5cdFx0XHR0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5tb2R1bGVSZWYpIHtcblx0XHRcdHRoaXMubW9kdWxlUmVmLmRlc3Ryb3koKTtcblx0XHR9XG5cdH1cblxufVxuIl19