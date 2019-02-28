/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvb3V0bGV0L291dGxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQix3QkFBd0IsRUFBZ0IsS0FBSyxFQUEyQixTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakssT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQUlxQywyQ0FBbUI7SUFPdkQseUJBQ1Msd0JBQWtELEVBQ2xELHFCQUE0QztRQUZyRCxZQUlDLGlCQUFPLFNBQ1A7UUFKUSw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7O0lBR3JELENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7O1lBQ08sU0FBUyxHQUFpQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O1lBQ3pGLE9BQU8sR0FBNkMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztRQUMxSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7O1lBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzs7WUFDN0QsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRO1FBQ3RDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUNqRCxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQWpDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLEVBQUU7aUJBQ1o7Ozs7Z0JBVHFDLHdCQUF3QjtnQkFJckQscUJBQXFCOzs7eUJBUTVCLEtBQUs7bUNBRUwsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7SUEyQmhELHNCQUFDO0NBQUEsQUFuQ0QsQ0FJcUMsbUJBQW1CLEdBK0J2RDtTQS9CWSxlQUFlOzs7SUFFM0IsaUNBQXdCOztJQUV4QiwyQ0FBb0Y7Ozs7O0lBQ3BGLHVDQUF3RDs7Ozs7SUFHdkQsbURBQTBEOzs7OztJQUMxRCxnREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFR5cGUsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAnLi9vdXRsZXQnO1xuaW1wb3J0IHsgT3V0bGV0RGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vb3V0bGV0LWRlZmF1bHQuY29tcG9uZW50JztcbmltcG9ydCB7IE91dGxldFJlc29sdmVyU2VydmljZSB9IGZyb20gJy4vb3V0bGV0LXJlc29sdmVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdvdXRsZXQtY29tcG9uZW50Jyxcblx0dGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXRDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpIG91dGxldDogT3V0bGV0O1xuXG5cdEBWaWV3Q2hpbGQoJ291dGxldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXHRwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPERpc3Bvc2FibGVDb21wb25lbnQ+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0cHJpdmF0ZSBvdXRsZXRSZXNvbHZlclNlcnZpY2U6IE91dGxldFJlc29sdmVyU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnN0IGNvbXBvbmVudDogVHlwZTxPdXRsZXREZWZhdWx0Q29tcG9uZW50PiA9IHRoaXMub3V0bGV0UmVzb2x2ZXJTZXJ2aWNlLnJlc29sdmUodGhpcy5vdXRsZXQpO1xuXHRcdGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8T3V0bGV0RGVmYXVsdENvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG5cdFx0Y29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cdFx0aW5zdGFuY2Uub3V0bGV0ID0gdGhpcy5vdXRsZXQ7XG5cdFx0aWYgKHR5cGVvZiBpbnN0YW5jZVsnT3V0bGV0SW5pdCddID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpbnN0YW5jZVsnT3V0bGV0SW5pdCddKCk7XG5cdFx0fVxuXHRcdHRoaXMuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuXHR9XG5cbn1cbiJdfQ==