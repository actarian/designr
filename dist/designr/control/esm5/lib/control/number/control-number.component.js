/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlNumber } from './control-number';
var ControlNumberComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlNumberComponent, _super);
    function ControlNumberComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlNumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-number-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-template #inputDef let-context>\r\n\t\t<input class=\"control__input control__input--number\" placeholder=\"{{ context.option.placeholder | label }}\" [id]=\"context.option.key\" [formControlName]=\"context.option.key\" type=\"number\" [attr.step]=\"context.option.step\">\r\n\t</ng-template>\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"control__error control__error--number\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.min\">{{ 'errors.min' | label : null : { min: context.option.min } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.max\">{{ 'errors.max' | label : null : { max: context.option.max } }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n</ng-container>\r\n"
                }] }
    ];
    ControlNumberComponent.propDecorators = {
        option: [{ type: Input }]
    };
    return ControlNumberComponent;
}(ControlComponent));
export { ControlNumberComponent };
if (false) {
    /** @type {?} */
    ControlNumberComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1udW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL251bWJlci9jb250cm9sLW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFJNEMsa0RBQWdCO0lBSjVEOztJQVFBLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxrcENBQTRDO2lCQUM1Qzs7O3lCQUdDLEtBQUs7O0lBRVAsNkJBQUM7Q0FBQSxBQVJELENBSTRDLGdCQUFnQixHQUkzRDtTQUpZLHNCQUFzQjs7O0lBRWxDLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbE51bWJlciB9IGZyb20gJy4vY29udHJvbC1udW1iZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjb250cm9sLW51bWJlci1jb21wb25lbnQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbE51bWJlckNvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xyXG5cclxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xOdW1iZXI7XHJcblxyXG59XHJcbiJdfQ==