/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlCheckbox } from './control-checkbox';
var ControlCheckboxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlCheckboxComponent, _super);
    function ControlCheckboxComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-checkbox-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-template #inputDef let-context>\r\n\t\t<label class=\"control__group control__group--checkbox\">\r\n\t\t\t<input class=\"control__checkbox\" type=\"checkbox\" [id]=\"context.option.key\" [formControlName]=\"context.option.key\">\r\n\t\t\t<span class=\"control__info\">{{ context.option.info | label }}</span>\r\n\t\t</label>\r\n\t</ng-template>\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"control__error control__error--checkbox\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.requiredTrue\">{{ 'errors.required' | label }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n</ng-container>\r\n"
                }] }
    ];
    ControlCheckboxComponent.propDecorators = {
        option: [{ type: Input }]
    };
    return ControlCheckboxComponent;
}(ControlComponent));
export { ControlCheckboxComponent };
if (false) {
    /** @type {?} */
    ControlCheckboxComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY2hlY2tib3gvY29udHJvbC1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQ7SUFJOEMsb0RBQWdCO0lBSjlEOztJQVFBLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNEJBQTRCO29CQUN0Qyx3akNBQThDO2lCQUM5Qzs7O3lCQUdDLEtBQUs7O0lBRVAsK0JBQUM7Q0FBQSxBQVJELENBSThDLGdCQUFnQixHQUk3RDtTQUpZLHdCQUF3Qjs7O0lBRXBDLDBDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sQ2hlY2tib3ggfSBmcm9tICcuL2NvbnRyb2wtY2hlY2tib3gnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLWNoZWNrYm94LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xDaGVja2JveENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbENoZWNrYm94O1xuXG59XG4iXX0=