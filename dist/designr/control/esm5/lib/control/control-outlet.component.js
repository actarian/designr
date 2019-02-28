/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { ControlBase } from './base/control-base';
import { ControlService } from './control.service';
var ControlOutletComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlOutletComponent, _super);
    function ControlOutletComponent(componentFactoryResolver, controlService) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.controlService = controlService;
        return _this;
    }
    /**
     * @return {?}
     */
    ControlOutletComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var component = this.controlService.resolve(this.control);
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        /** @type {?} */
        var componentRef = this.viewContainerRef.createComponent(factory);
        /** @type {?} */
        var instance = componentRef.instance;
        instance.control = this.control;
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
        control: [{ type: Input }],
        form: [{ type: Input }],
        viewContainerRef: [{ type: ViewChild, args: ['outlet', { read: ViewContainerRef },] }]
    };
    return ControlOutletComponent;
}(DisposableComponent));
export { ControlOutletComponent };
if (false) {
    /** @type {?} */
    ControlOutletComponent.prototype.control;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLHdCQUF3QixFQUFnQixLQUFLLEVBQTJCLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFJNEMsa0RBQW1CO0lBUTlELGdDQUNTLHdCQUFrRCxFQUNsRCxjQUE4QjtRQUZ2QyxZQUlDLGlCQUFPLFNBQ1A7UUFKUSw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG9CQUFjLEdBQWQsY0FBYyxDQUFnQjs7SUFHdkMsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjs7WUFDTyxTQUFTLEdBQStCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7O1lBQ2pGLE9BQU8sR0FBMkMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztRQUN4SCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7O1lBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzs7WUFDN0QsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRO1FBQ3RDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNoQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDbEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDOztnQkFuQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxxQ0FBcUM7aUJBQy9DOzs7O2dCQVZxQyx3QkFBd0I7Z0JBS3JELGNBQWM7OzswQkFRckIsS0FBSzt1QkFDTCxLQUFLO21DQUVMLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7O0lBNEJoRCw2QkFBQztDQUFBLEFBckNELENBSTRDLG1CQUFtQixHQWlDOUQ7U0FqQ1ksc0JBQXNCOzs7SUFFbEMseUNBQW1DOztJQUNuQyxzQ0FBeUI7O0lBRXpCLGtEQUFvRjs7Ozs7SUFDcEYsOENBQXlEOzs7OztJQUd4RCwwREFBMEQ7Ozs7O0lBQzFELGdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVHlwZSwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sQmFzZSB9IGZyb20gJy4vYmFzZS9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHsgQ29udHJvbEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UvY29udHJvbC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4vY29udHJvbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1vdXRsZXQnLFxuXHR0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjb3V0bGV0PjwvbmctdGVtcGxhdGU+Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbE91dGxldENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KCkgY29udHJvbDogQ29udHJvbEJhc2U8YW55Pjtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXG5cdEBWaWV3Q2hpbGQoJ291dGxldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXHRwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPENvbnRyb2xCYXNlQ29tcG9uZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgY29udHJvbFNlcnZpY2U6IENvbnRyb2xTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3QgY29tcG9uZW50OiBUeXBlPENvbnRyb2xCYXNlQ29tcG9uZW50PiA9IHRoaXMuY29udHJvbFNlcnZpY2UucmVzb2x2ZSh0aGlzLmNvbnRyb2wpO1xuXHRcdGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8Q29udHJvbEJhc2VDb21wb25lbnQ+ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuXHRcdGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXHRcdGluc3RhbmNlLmNvbnRyb2wgPSB0aGlzLmNvbnRyb2w7XG5cdFx0aW5zdGFuY2UuZm9ybSA9IHRoaXMuZm9ybTtcblx0XHRpZiAodHlwZW9mIGluc3RhbmNlWydDb250cm9sSW5pdCddID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpbnN0YW5jZVsnQ29udHJvbEluaXQnXSgpO1xuXHRcdH1cblx0XHR0aGlzLmNvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZjtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcblx0fVxuXG59XG4iXX0=