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
            /** @type {?} */
            const moduleRef = moduleFactory.create(this.injector);
            this.moduleRef_ = moduleRef;
            /** @type {?} */
            const rootComponentType = moduleRef.injector.get('LAZY_ROOT_COMPONENT');
            // console.log(rootComponentType);
            /** @type {?} */
            const factory = moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponentType);
            /** @type {?} */
            const componentRef = this.container.createComponent(factory);
            /** @type {?} */
            const instance = componentRef.instance;
            // instance.data = this.data; // !!!
            this.componentRef_ = componentRef;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.componentRef_) {
            this.componentRef_.destroy();
        }
        if (this.moduleRef_) {
            this.moduleRef_.destroy();
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
    bundle: [{ type: Input }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BundleDirective.prototype.bundle;
    /** @type {?} */
    BundleDirective.prototype.data;
    /**
     * @type {?}
     * @private
     */
    BundleDirective.prototype.moduleRef_;
    /**
     * @type {?}
     * @private
     */
    BundleDirective.prototype.componentRef_;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnVuZGxlL2J1bmRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFtQixxQkFBcUIsRUFBd0MsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakwsT0FBTyxFQUFXLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQU81QyxNQUFNLE9BQU8sZUFBZTs7Ozs7OztJQU8zQixZQUMwQixPQUFPLEVBQ3hCLFFBQWtCLEVBQ2xCLE1BQTZCLEVBQzdCLFNBQTJCO1FBSFYsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRXBDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxhQUFtQyxFQUFFLEVBQUU7O2tCQUNsRixTQUFTLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDOztrQkFDdEIsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7OztrQkFFakUsT0FBTyxHQUFHLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQzs7a0JBQ3ZGLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7O2tCQUN0RCxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVE7WUFDdEMsb0NBQW9DO1lBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFCO0lBQ0YsQ0FBQzs7O1lBdkNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsVUFBVTthQUNwQjs7Ozs0Q0FTRSxNQUFNLFNBQUMsT0FBTztZQWhCeUIsUUFBUTtZQUEwQixxQkFBcUI7WUFBd0MsZ0JBQWdCOzs7cUJBVXZKLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLGlDQUErQjs7SUFDL0IsK0JBQW9COzs7OztJQUNwQixxQ0FBcUM7Ozs7O0lBQ3JDLHdDQUF5Qzs7Ozs7SUFHeEMsa0NBQWdDOzs7OztJQUNoQyxtQ0FBMEI7Ozs7O0lBQzFCLGlDQUFxQzs7Ozs7SUFDckMsb0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIEluamVjdCwgSW5qZWN0b3IsIElucHV0LCBOZ01vZHVsZUZhY3RvcnksIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTmdNb2R1bGVSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJ1bmRsZXMsIEJVTkRMRVMgfSBmcm9tICcuL2J1bmRsZSc7XHJcblxyXG5leHBvcnQgdHlwZSBNb2R1bGVXaXRoUm9vdCA9IFR5cGU8YW55PiAmIHsgcm9vdENvbXBvbmVudDogVHlwZTxhbnk+IH07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1tidW5kbGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnVuZGxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuXHRASW5wdXQoKSBidW5kbGU6IGtleW9mIEJ1bmRsZXM7XHJcblx0QElucHV0KCkgZGF0YT86IGFueTtcclxuXHRwcml2YXRlIG1vZHVsZVJlZl86IE5nTW9kdWxlUmVmPGFueT47XHJcblx0cHJpdmF0ZSBjb21wb25lbnRSZWZfOiBDb21wb25lbnRSZWY8YW55PjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KEJVTkRMRVMpIHByaXZhdGUgYnVuZGxlcyxcclxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG5cdFx0cHJpdmF0ZSBsb2FkZXI6IE5nTW9kdWxlRmFjdG9yeUxvYWRlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG5cdCkge1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmxvYWRlci5sb2FkKHRoaXMuYnVuZGxlc1t0aGlzLmJ1bmRsZV0pLnRoZW4oKG1vZHVsZUZhY3Rvcnk6IE5nTW9kdWxlRmFjdG9yeTxhbnk+KSA9PiB7XHJcblx0XHRcdGNvbnN0IG1vZHVsZVJlZiA9IG1vZHVsZUZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG5cdFx0XHR0aGlzLm1vZHVsZVJlZl8gPSBtb2R1bGVSZWY7XHJcblx0XHRcdGNvbnN0IHJvb3RDb21wb25lbnRUeXBlID0gbW9kdWxlUmVmLmluamVjdG9yLmdldCgnTEFaWV9ST09UX0NPTVBPTkVOVCcpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyb290Q29tcG9uZW50VHlwZSk7XHJcblx0XHRcdGNvbnN0IGZhY3RvcnkgPSBtb2R1bGVSZWYuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHJvb3RDb21wb25lbnRUeXBlKTtcclxuXHRcdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG5cdFx0XHRjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuXHRcdFx0Ly8gaW5zdGFuY2UuZGF0YSA9IHRoaXMuZGF0YTsgLy8gISEhXHJcblx0XHRcdHRoaXMuY29tcG9uZW50UmVmXyA9IGNvbXBvbmVudFJlZjtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZiAodGhpcy5jb21wb25lbnRSZWZfKSB7XHJcblx0XHRcdHRoaXMuY29tcG9uZW50UmVmXy5kZXN0cm95KCk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5tb2R1bGVSZWZfKSB7XHJcblx0XHRcdHRoaXMubW9kdWxlUmVmXy5kZXN0cm95KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=