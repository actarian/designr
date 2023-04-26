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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvb3V0bGV0L291dGxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLHdCQUF3QixFQUFnQixLQUFLLEVBQTJCLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBTWxFLE1BQU0sT0FBTyxlQUFnQixTQUFRLG1CQUFtQjs7Ozs7SUFPdkQsWUFDUyx3QkFBa0QsRUFDbEQscUJBQTRDO1FBRXBELEtBQUssRUFBRSxDQUFDO1FBSEEsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBR3JELENBQUM7Ozs7SUFFRCxRQUFROztjQUNELFNBQVMsR0FBaUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOztjQUN6RixPQUFPLEdBQTZDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFDMUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztjQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7O2NBQzdELFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUTtRQUN0QyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxPQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDakQsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7O1lBakNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsRUFBRTthQUNaOzs7O1lBVHFDLHdCQUF3QjtZQUlyRCxxQkFBcUI7OztxQkFRNUIsS0FBSzsrQkFFTCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzs7O0lBRi9DLGlDQUF3Qjs7SUFFeEIsMkNBQW9GOzs7OztJQUNwRix1Q0FBd0Q7Ozs7O0lBR3ZELG1EQUEwRDs7Ozs7SUFDMUQsZ0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBUeXBlLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICcuL291dGxldCc7XHJcbmltcG9ydCB7IE91dGxldERlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL291dGxldC1kZWZhdWx0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE91dGxldFJlc29sdmVyU2VydmljZSB9IGZyb20gJy4vb3V0bGV0LXJlc29sdmVyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdvdXRsZXQtY29tcG9uZW50JyxcclxuXHR0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPdXRsZXRDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuXHRASW5wdXQoKSBvdXRsZXQ6IE91dGxldDtcclxuXHJcblx0QFZpZXdDaGlsZCgnb3V0bGV0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblx0cHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxEaXNwb3NhYmxlQ29tcG9uZW50PjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBvdXRsZXRSZXNvbHZlclNlcnZpY2U6IE91dGxldFJlc29sdmVyU2VydmljZSxcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGNvbnN0IGNvbXBvbmVudDogVHlwZTxPdXRsZXREZWZhdWx0Q29tcG9uZW50PiA9IHRoaXMub3V0bGV0UmVzb2x2ZXJTZXJ2aWNlLnJlc29sdmUodGhpcy5vdXRsZXQpO1xyXG5cdFx0Y29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxPdXRsZXREZWZhdWx0Q29tcG9uZW50PiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XHJcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcclxuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XHJcblx0XHRjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuXHRcdGluc3RhbmNlLm91dGxldCA9IHRoaXMub3V0bGV0O1xyXG5cdFx0aWYgKHR5cGVvZiBpbnN0YW5jZVsnT3V0bGV0SW5pdCddID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdGluc3RhbmNlWydPdXRsZXRJbml0J10oKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=