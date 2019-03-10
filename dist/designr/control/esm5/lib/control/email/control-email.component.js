/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlEmail } from './control-email';
var ControlEmailComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlEmailComponent, _super);
    function ControlEmailComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlEmailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-email-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t<input class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" [type]=\"option.type\">\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.email\">{{ 'errors.email' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: option.minlength } }}</div>\r\n\t\t<div *ngIf=\"control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: option.maxlength } }}</div>\r\n\t\t<div *ngIf=\"control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t</div>\r\n</ng-container>\r\n"
                }] }
    ];
    ControlEmailComponent.propDecorators = {
        option: [{ type: Input }]
    };
    return ControlEmailComponent;
}(ControlComponent));
export { ControlEmailComponent };
if (false) {
    /** @type {?} */
    ControlEmailComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1lbWFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvZW1haWwvY29udHJvbC1lbWFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0M7SUFJMkMsaURBQWdCO0lBSjNEOztJQVFBLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO29CQUNuQywwL0JBQTJDO2lCQUMzQzs7O3lCQUdDLEtBQUs7O0lBRVAsNEJBQUM7Q0FBQSxBQVJELENBSTJDLGdCQUFnQixHQUkxRDtTQUpZLHFCQUFxQjs7O0lBRWpDLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sRW1haWwgfSBmcm9tICcuL2NvbnRyb2wtZW1haWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLWVtYWlsLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1lbWFpbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xFbWFpbENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbEVtYWlsO1xuXG59XG4iXX0=