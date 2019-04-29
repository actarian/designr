/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlText } from './control-text';
var ControlTextComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlTextComponent, _super);
    function ControlTextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-text-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\r\n\t<ng-template #controlDef let-context>\r\n\t\t<div class=\"control\" [ngClass]=\"context.classes\">\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.labelRef || labelDef; context: { $implicit: context }\"></ng-container>\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-template #labelDef let-context>\r\n\t\t<label class=\"form-label\" [attr.for]=\"context.option.key\">{{ context.option.label | label }}</label>\r\n\t</ng-template>\r\n\r\n\t<ng-template #inputDef let-context>\r\n\t\t<input class=\"form-control\" placeholder=\"{{ context.option.placeholder | label }}\" [id]=\"context.option.key\" [formControlName]=\"context.option.key\" type=\"text\">\r\n\t</ng-template>\r\n\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: context.option.minlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: context.option.maxlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-container *ngTemplateOutlet=\"controlRef || controlDef; context: { $implicit: context }\"></ng-container>\r\n\r\n</ng-container>\r\n"
                }] }
    ];
    ControlTextComponent.propDecorators = {
        option: [{ type: Input }]
    };
    return ControlTextComponent;
}(ControlComponent));
export { ControlTextComponent };
if (false) {
    /** @type {?} */
    ControlTextComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC10ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC90ZXh0L2NvbnRyb2wtdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFJMEMsZ0RBQWdCO0lBSjFEOztJQVFBLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsd0JBQXdCO29CQUNsQywwMkRBQTBDO2lCQUMxQzs7O3lCQUdDLEtBQUs7O0lBRVAsMkJBQUM7Q0FBQSxBQVJELENBSTBDLGdCQUFnQixHQUl6RDtTQUpZLG9CQUFvQjs7O0lBRWhDLHNDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sVGV4dCB9IGZyb20gJy4vY29udHJvbC10ZXh0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC10ZXh0LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC10ZXh0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFRleHRDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xUZXh0O1xuXG59XG4iXX0=