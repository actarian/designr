/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlOption } from './control-option';
import { ControlService } from './control.service';
var ControlOutletComponent = /** @class */ (function () {
    function ControlOutletComponent(componentFactoryResolver, controlService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.controlService = controlService;
    }
    /**
     * @return {?}
     */
    ControlOutletComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var component = this.controlService.resolve(this.option);
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        /** @type {?} */
        var componentRef = this.viewContainerRef.createComponent(factory);
        /** @type {?} */
        var instance = componentRef.instance;
        instance.option = this.option;
        instance.form = this.form;
        if (typeof instance['ControlInit'] === 'function') {
            instance['ControlInit']();
        }
        this.componentRef = componentRef;
    };
    /**
     * @return {?}
     */
    ControlOutletComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentRef.destroy();
    };
    ControlOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-outlet',
                    template: '<ng-template #outlet></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ControlOutletComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ControlService }
    ]; };
    ControlOutletComponent.propDecorators = {
        option: [{ type: Input }],
        form: [{ type: Input }],
        viewContainerRef: [{ type: ViewChild, args: ['outlet', { read: ViewContainerRef },] }]
    };
    return ControlOutletComponent;
}());
export { ControlOutletComponent };
if (false) {
    /** @type {?} */
    ControlOutletComponent.prototype.option;
    /** @type {?} */
    ControlOutletComponent.prototype.form;
    /** @type {?} */
    ControlOutletComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    ControlOutletComponent.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    ControlOutletComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ControlOutletComponent.prototype.controlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0Isd0JBQXdCLEVBQWdCLEtBQUssRUFBMkIsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pLLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5EO0lBWUMsZ0NBQ1Msd0JBQWtELEVBQ2xELGNBQThCO1FBRDlCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ25DLENBQUM7Ozs7SUFFTCx5Q0FBUTs7O0lBQVI7O1lBQ08sU0FBUyxHQUEyQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOztZQUM1RSxPQUFPLEdBQXVDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFDcEgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztZQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7O1lBQzdELFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUTtRQUN0QyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssVUFBVSxFQUFFO1lBQ2xELFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBakNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUscUNBQXFDO2lCQUMvQzs7OztnQkFUcUMsd0JBQXdCO2dCQUlyRCxjQUFjOzs7eUJBUXJCLEtBQUs7dUJBQ0wsS0FBSzttQ0FFTCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOztJQTBCaEQsNkJBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQS9CWSxzQkFBc0I7OztJQUVsQyx3Q0FBb0M7O0lBQ3BDLHNDQUF5Qjs7SUFFekIsa0RBQW9GOzs7OztJQUNwRiw4Q0FBcUQ7Ozs7O0lBR3BELDBEQUEwRDs7Ozs7SUFDMUQsZ0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBUeXBlLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xPcHRpb24gfSBmcm9tICcuL2NvbnRyb2wtb3B0aW9uJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9jb250cm9sLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLW91dGxldCcsXG5cdHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNvdXRsZXQ+PC9uZy10ZW1wbGF0ZT4nLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sT3V0bGV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbE9wdGlvbjxhbnk+O1xuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG5cblx0QFZpZXdDaGlsZCgnb3V0bGV0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cdHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8Q29udHJvbENvbXBvbmVudD47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRwcml2YXRlIGNvbnRyb2xTZXJ2aWNlOiBDb250cm9sU2VydmljZSxcblx0KSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zdCBjb21wb25lbnQ6IFR5cGU8Q29udHJvbENvbXBvbmVudD4gPSB0aGlzLmNvbnRyb2xTZXJ2aWNlLnJlc29sdmUodGhpcy5vcHRpb24pO1xuXHRcdGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8Q29udHJvbENvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG5cdFx0Y29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cdFx0aW5zdGFuY2Uub3B0aW9uID0gdGhpcy5vcHRpb247XG5cdFx0aW5zdGFuY2UuZm9ybSA9IHRoaXMuZm9ybTtcblx0XHRpZiAodHlwZW9mIGluc3RhbmNlWydDb250cm9sSW5pdCddID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpbnN0YW5jZVsnQ29udHJvbEluaXQnXSgpO1xuXHRcdH1cblx0XHR0aGlzLmNvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZjtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcblx0fVxuXG59XG4iXX0=