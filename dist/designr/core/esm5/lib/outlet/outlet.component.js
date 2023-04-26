/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '../disposable/disposable.component';
import { Outlet } from './outlet';
import { OutletResolverService } from './outlet-resolver.service';
var OutletComponent = /** @class */ (function (_super) {
    tslib_1.__extends(OutletComponent, _super);
    function OutletComponent(componentFactoryResolver, outletResolverService) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.outletResolverService = outletResolverService;
        return _this;
    }
    /**
     * @return {?}
     */
    OutletComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var component = this.outletResolverService.resolve(this.outlet);
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        /** @type {?} */
        var componentRef = this.viewContainerRef.createComponent(factory);
        /** @type {?} */
        var instance = componentRef.instance;
        instance.outlet = this.outlet;
        if (typeof instance['OutletInit'] === 'function') {
            instance['OutletInit']();
        }
        this.componentRef = componentRef;
    };
    /**
     * @return {?}
     */
    OutletComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentRef.destroy();
    };
    OutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'outlet-component',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    OutletComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: OutletResolverService }
    ]; };
    OutletComponent.propDecorators = {
        outlet: [{ type: Input }],
        viewContainerRef: [{ type: ViewChild, args: ['outlet', { read: ViewContainerRef },] }]
    };
    return OutletComponent;
}(DisposableComponent));
export { OutletComponent };
if (false) {
    /** @type {?} */
    OutletComponent.prototype.outlet;
    /** @type {?} */
    OutletComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    OutletComponent.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    OutletComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    OutletComponent.prototype.outletResolverService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvb3V0bGV0L291dGxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQix3QkFBd0IsRUFBZ0IsS0FBSyxFQUEyQixTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakssT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQUlxQywyQ0FBbUI7SUFPdkQseUJBQ1Msd0JBQWtELEVBQ2xELHFCQUE0QztRQUZyRCxZQUlDLGlCQUFPLFNBQ1A7UUFKUSw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7O0lBR3JELENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7O1lBQ08sU0FBUyxHQUFpQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O1lBQ3pGLE9BQU8sR0FBNkMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztRQUMxSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7O1lBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzs7WUFDN0QsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRO1FBQ3RDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUNqRCxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQWpDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLEVBQUU7aUJBQ1o7Ozs7Z0JBVHFDLHdCQUF3QjtnQkFJckQscUJBQXFCOzs7eUJBUTVCLEtBQUs7bUNBRUwsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7SUEyQmhELHNCQUFDO0NBQUEsQUFuQ0QsQ0FJcUMsbUJBQW1CLEdBK0J2RDtTQS9CWSxlQUFlOzs7SUFFM0IsaUNBQXdCOztJQUV4QiwyQ0FBb0Y7Ozs7O0lBQ3BGLHVDQUF3RDs7Ozs7SUFHdkQsbURBQTBEOzs7OztJQUMxRCxnREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFR5cGUsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE91dGxldCB9IGZyb20gJy4vb3V0bGV0JztcclxuaW1wb3J0IHsgT3V0bGV0RGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vb3V0bGV0LWRlZmF1bHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3V0bGV0UmVzb2x2ZXJTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQtcmVzb2x2ZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ291dGxldC1jb21wb25lbnQnLFxyXG5cdHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE91dGxldENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG5cdEBJbnB1dCgpIG91dGxldDogT3V0bGV0O1xyXG5cclxuXHRAVmlld0NoaWxkKCdvdXRsZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcclxuXHRwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPERpc3Bvc2FibGVDb21wb25lbnQ+O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIG91dGxldFJlc29sdmVyU2VydmljZTogT3V0bGV0UmVzb2x2ZXJTZXJ2aWNlLFxyXG5cdCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Y29uc3QgY29tcG9uZW50OiBUeXBlPE91dGxldERlZmF1bHRDb21wb25lbnQ+ID0gdGhpcy5vdXRsZXRSZXNvbHZlclNlcnZpY2UucmVzb2x2ZSh0aGlzLm91dGxldCk7XHJcblx0XHRjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE91dGxldERlZmF1bHRDb21wb25lbnQ+ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcclxuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xyXG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcclxuXHRcdGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG5cdFx0aW5zdGFuY2Uub3V0bGV0ID0gdGhpcy5vdXRsZXQ7XHJcblx0XHRpZiAodHlwZW9mIGluc3RhbmNlWydPdXRsZXRJbml0J10gPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0aW5zdGFuY2VbJ091dGxldEluaXQnXSgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==