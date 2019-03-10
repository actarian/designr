/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlOption } from './control-option';
import { ControlService } from './control.service';
export class ControlOutletComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} controlService
     */
    constructor(componentFactoryResolver, controlService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.controlService = controlService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const component = this.controlService.resolve(this.option);
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        /** @type {?} */
        const componentRef = this.viewContainerRef.createComponent(factory);
        /** @type {?} */
        const instance = componentRef.instance;
        instance.option = this.option;
        instance.form = this.form;
        if (typeof instance['ControlInit'] === 'function') {
            instance['ControlInit']();
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
ControlOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-outlet',
                template: '<ng-template #outlet></ng-template>'
            }] }
];
/** @nocollapse */
ControlOutletComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ControlService }
];
ControlOutletComponent.propDecorators = {
    option: [{ type: Input }],
    form: [{ type: Input }],
    viewContainerRef: [{ type: ViewChild, args: ['outlet', { read: ViewContainerRef },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0Isd0JBQXdCLEVBQWdCLEtBQUssRUFBMkIsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pLLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5ELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBUWxDLFlBQ1Msd0JBQWtELEVBQ2xELGNBQThCO1FBRDlCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ25DLENBQUM7Ozs7SUFFTCxRQUFROztjQUNELFNBQVMsR0FBMkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7Y0FDNUUsT0FBTyxHQUF1QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO1FBQ3BILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Y0FDeEIsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDOztjQUM3RCxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVE7UUFDdEMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUNsRCxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUFqQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxxQ0FBcUM7YUFDL0M7Ozs7WUFUcUMsd0JBQXdCO1lBSXJELGNBQWM7OztxQkFRckIsS0FBSzttQkFDTCxLQUFLOytCQUVMLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Ozs7SUFIL0Msd0NBQW9DOztJQUNwQyxzQ0FBeUI7O0lBRXpCLGtEQUFvRjs7Ozs7SUFDcEYsOENBQXFEOzs7OztJQUdwRCwwREFBMEQ7Ozs7O0lBQzFELGdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVHlwZSwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sT3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLW9wdGlvbic7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4vY29udHJvbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1vdXRsZXQnLFxuXHR0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjb3V0bGV0PjwvbmctdGVtcGxhdGU+Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbE91dGxldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xPcHRpb248YW55Pjtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXG5cdEBWaWV3Q2hpbGQoJ291dGxldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXHRwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPENvbnRyb2xDb21wb25lbnQ+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0cHJpdmF0ZSBjb250cm9sU2VydmljZTogQ29udHJvbFNlcnZpY2UsXG5cdCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3QgY29tcG9uZW50OiBUeXBlPENvbnRyb2xDb21wb25lbnQ+ID0gdGhpcy5jb250cm9sU2VydmljZS5yZXNvbHZlKHRoaXMub3B0aW9uKTtcblx0XHRjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PENvbnRyb2xDb21wb25lbnQ+ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuXHRcdGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXHRcdGluc3RhbmNlLm9wdGlvbiA9IHRoaXMub3B0aW9uO1xuXHRcdGluc3RhbmNlLmZvcm0gPSB0aGlzLmZvcm07XG5cdFx0aWYgKHR5cGVvZiBpbnN0YW5jZVsnQ29udHJvbEluaXQnXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aW5zdGFuY2VbJ0NvbnRyb2xJbml0J10oKTtcblx0XHR9XG5cdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG5cdH1cblxufVxuIl19