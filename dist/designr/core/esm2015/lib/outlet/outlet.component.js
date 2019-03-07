/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '../disposable/disposable.component';
import { Outlet } from './outlet';
import { OutletResolverService } from './outlet-resolver.service';
export class OutletComponent extends DisposableComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} outletResolverService
     */
    constructor(componentFactoryResolver, outletResolverService) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.outletResolverService = outletResolverService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const component = this.outletResolverService.resolve(this.outlet);
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        /** @type {?} */
        const componentRef = this.viewContainerRef.createComponent(factory);
        /** @type {?} */
        const instance = componentRef.instance;
        instance.outlet = this.outlet;
        if (typeof instance['OutletInit'] === 'function') {
            instance['OutletInit']();
        }
        this.componentRef = componentRef;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
OutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'outlet-component',
                template: ''
            }] }
];
/** @nocollapse */
OutletComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: OutletResolverService }
];
OutletComponent.propDecorators = {
    outlet: [{ type: Input }],
    viewContainerRef: [{ type: ViewChild, args: ['outlet', { read: ViewContainerRef },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvb3V0bGV0L291dGxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLHdCQUF3QixFQUFnQixLQUFLLEVBQTJCLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBTWxFLE1BQU0sT0FBTyxlQUFnQixTQUFRLG1CQUFtQjs7Ozs7SUFPdkQsWUFDUyx3QkFBa0QsRUFDbEQscUJBQTRDO1FBRXBELEtBQUssRUFBRSxDQUFDO1FBSEEsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBR3JELENBQUM7Ozs7SUFFRCxRQUFROztjQUNELFNBQVMsR0FBaUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOztjQUN6RixPQUFPLEdBQTZDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFDMUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztjQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7O2NBQzdELFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUTtRQUN0QyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxPQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDakQsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7O1lBakNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsRUFBRTthQUNaOzs7O1lBVHFDLHdCQUF3QjtZQUlyRCxxQkFBcUI7OztxQkFRNUIsS0FBSzsrQkFFTCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzs7O0lBRi9DLGlDQUF3Qjs7SUFFeEIsMkNBQW9GOzs7OztJQUNwRix1Q0FBd0Q7Ozs7O0lBR3ZELG1EQUEwRDs7Ozs7SUFDMUQsZ0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBUeXBlLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE91dGxldCB9IGZyb20gJy4vb3V0bGV0JztcbmltcG9ydCB7IE91dGxldERlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL291dGxldC1kZWZhdWx0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPdXRsZXRSZXNvbHZlclNlcnZpY2UgfSBmcm9tICcuL291dGxldC1yZXNvbHZlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnb3V0bGV0LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKSBvdXRsZXQ6IE91dGxldDtcblxuXHRAVmlld0NoaWxkKCdvdXRsZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblx0cHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxEaXNwb3NhYmxlQ29tcG9uZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgb3V0bGV0UmVzb2x2ZXJTZXJ2aWNlOiBPdXRsZXRSZXNvbHZlclNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zdCBjb21wb25lbnQ6IFR5cGU8T3V0bGV0RGVmYXVsdENvbXBvbmVudD4gPSB0aGlzLm91dGxldFJlc29sdmVyU2VydmljZS5yZXNvbHZlKHRoaXMub3V0bGV0KTtcblx0XHRjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE91dGxldERlZmF1bHRDb21wb25lbnQ+ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuXHRcdGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXHRcdGluc3RhbmNlLm91dGxldCA9IHRoaXMub3V0bGV0O1xuXHRcdGlmICh0eXBlb2YgaW5zdGFuY2VbJ091dGxldEluaXQnXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aW5zdGFuY2VbJ091dGxldEluaXQnXSgpO1xuXHRcdH1cblx0XHR0aGlzLmNvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZjtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcblx0fVxuXG59XG4iXX0=