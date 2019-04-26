/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlRadio } from './control-radio';
var ControlRadioComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlRadioComponent, _super);
    function ControlRadioComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-radio-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<div class=\"form-radio\" [ngClass]=\"classes\">\r\n\t\t<label class=\"form-label\">\r\n\t\t\t<input class=\"form-radio__input\" type=\"radio\" [id]=\"option.key\" [formControlName]=\"option.key\">\r\n\t\t\t<span class=\"form-radio__label\">{{ option.label | label }}</span>\r\n\t\t</label>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n"
                }] }
    ];
    ControlRadioComponent.propDecorators = {
        option: [{ type: Input }]
    };
    return ControlRadioComponent;
}(ControlComponent));
export { ControlRadioComponent };
if (false) {
    /** @type {?} */
    ControlRadioComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1yYWRpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvcmFkaW8vY29udHJvbC1yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0M7SUFJMkMsaURBQWdCO0lBSjNEOztJQVFBLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO29CQUNuQyx5a0JBQTJDO2lCQUMzQzs7O3lCQUdDLEtBQUs7O0lBRVAsNEJBQUM7Q0FBQSxBQVJELENBSTJDLGdCQUFnQixHQUkxRDtTQUpZLHFCQUFxQjs7O0lBRWpDLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sUmFkaW8gfSBmcm9tICcuL2NvbnRyb2wtcmFkaW8nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLXJhZGlvLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1yYWRpby5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xSYWRpb0NvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbFJhZGlvO1xuXG59XG4iXX0=