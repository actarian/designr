/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlService } from './control.service';
var ControlOutletComponent = /** @class */ (function () {
    function ControlOutletComponent(componentFactoryResolver, controlService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.controlService = controlService;
    }
    Object.defineProperty(ControlOutletComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            // console.log('control', this.option.key, this.form.controls);
            return this.componentRef ? this.componentRef.instance.classes : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlOutletComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            // console.log('control', this.option.key, this.form.controls);
            return this.componentRef ? this.componentRef.instance.control : null;
        },
        enumerable: true,
        configurable: true
    });
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
                    template: "\n\t<!--\n\t<div class=\"control\" [ngClass]=\"classes\">\n\t\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\n\t\t<input class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" type=\"text\">\n\t</div>\n\t-->\n\t<!-- [formControlName]=\"option.key\" -->\n\t<ng-template #outlet></ng-template>\n\t"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0Isd0JBQXdCLEVBQWdCLEtBQUssRUFBMkIsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pLLE9BQU8sRUFBbUIsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5EO0lBK0JDLGdDQUNTLHdCQUFrRCxFQUNsRCxjQUE4QjtRQUQ5Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNuQyxDQUFDO0lBYkwsc0JBQUksMkNBQU87Ozs7UUFBWDtZQUNDLCtEQUErRDtZQUMvRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQU87Ozs7UUFBWDtZQUNDLCtEQUErRDtZQUMvRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLENBQUM7OztPQUFBOzs7O0lBT0QseUNBQVE7OztJQUFSOztZQUNPLFNBQVMsR0FBMkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7WUFDNUUsT0FBTyxHQUF1QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO1FBQ3BILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDOztZQUM3RCxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVE7UUFDdEMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUNsRCxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQXBERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLHlYQVNUO2lCQUNEOzs7O2dCQWxCcUMsd0JBQXdCO2dCQUlyRCxjQUFjOzs7eUJBaUJyQixLQUFLO3VCQUNMLEtBQUs7bUNBRUwsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7SUFvQ2hELDZCQUFDO0NBQUEsQUF0REQsSUFzREM7U0F6Q1ksc0JBQXNCOzs7SUFFbEMsd0NBQXFDOztJQUNyQyxzQ0FBeUI7O0lBRXpCLGtEQUFvRjs7Ozs7SUFDcEYsOENBQXFEOzs7OztJQWFwRCwwREFBMEQ7Ozs7O0lBQzFELGdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVHlwZSwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLW9wdGlvbic7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4vY29udHJvbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1vdXRsZXQnLFxuXHR0ZW1wbGF0ZTogYFxuXHQ8IS0tXG5cdDxkaXYgY2xhc3M9XCJjb250cm9sXCIgW25nQ2xhc3NdPVwiY2xhc3Nlc1wiPlxuXHRcdDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIiBbYXR0ci5mb3JdPVwib3B0aW9uLmtleVwiPnt7IG9wdGlvbi5sYWJlbCB8IGxhYmVsIH19PC9sYWJlbD5cblx0XHQ8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cInt7IG9wdGlvbi5wbGFjZWhvbGRlciB8IGxhYmVsIH19XCIgW2lkXT1cIm9wdGlvbi5rZXlcIiB0eXBlPVwidGV4dFwiPlxuXHQ8L2Rpdj5cblx0LS0+XG5cdDwhLS0gW2Zvcm1Db250cm9sTmFtZV09XCJvcHRpb24ua2V5XCIgLS0+XG5cdDxuZy10ZW1wbGF0ZSAjb3V0bGV0PjwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xPdXRsZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KCkgb3B0aW9uOiBJQ29udHJvbE9wdGlvbjxhbnk+O1xuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG5cblx0QFZpZXdDaGlsZCgnb3V0bGV0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cdHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8Q29udHJvbENvbXBvbmVudD47XG5cblx0Z2V0IGNsYXNzZXMoKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0ge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdjb250cm9sJywgdGhpcy5vcHRpb24ua2V5LCB0aGlzLmZvcm0uY29udHJvbHMpO1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudFJlZiA/IHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmNsYXNzZXMgOiBudWxsO1xuXHR9XG5cblx0Z2V0IGNvbnRyb2woKTogQWJzdHJhY3RDb250cm9sIHtcblx0XHQvLyBjb25zb2xlLmxvZygnY29udHJvbCcsIHRoaXMub3B0aW9uLmtleSwgdGhpcy5mb3JtLmNvbnRyb2xzKTtcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnRSZWYgPyB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250cm9sIDogbnVsbDtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0cHJpdmF0ZSBjb250cm9sU2VydmljZTogQ29udHJvbFNlcnZpY2UsXG5cdCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3QgY29tcG9uZW50OiBUeXBlPENvbnRyb2xDb21wb25lbnQ+ID0gdGhpcy5jb250cm9sU2VydmljZS5yZXNvbHZlKHRoaXMub3B0aW9uKTtcblx0XHRjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PENvbnRyb2xDb21wb25lbnQ+ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuXHRcdGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXHRcdGluc3RhbmNlLm9wdGlvbiA9IHRoaXMub3B0aW9uO1xuXHRcdGluc3RhbmNlLmZvcm0gPSB0aGlzLmZvcm07XG5cdFx0aWYgKHR5cGVvZiBpbnN0YW5jZVsnQ29udHJvbEluaXQnXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aW5zdGFuY2VbJ0NvbnRyb2xJbml0J10oKTtcblx0XHR9XG5cdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG5cdH1cblxufVxuIl19