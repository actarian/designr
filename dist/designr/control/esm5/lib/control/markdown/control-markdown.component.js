/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlMarkdown } from './control-markdown';
var ControlMarkdownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlMarkdownComponent, _super);
    function ControlMarkdownComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlMarkdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-markdown-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t<textarea class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" rows=\"4\"></textarea>\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: option.minlength } }}</div>\r\n\t\t<div *ngIf=\"control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: option.maxlength } }}</div>\r\n\t</div>\r\n</ng-container>\r\n"
                }] }
    ];
    ControlMarkdownComponent.propDecorators = {
        option: [{ type: Input }]
    };
    return ControlMarkdownComponent;
}(ControlComponent));
export { ControlMarkdownComponent };
if (false) {
    /** @type {?} */
    ControlMarkdownComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1tYXJrZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvbWFya2Rvd24vY29udHJvbC1tYXJrZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQ7SUFJOEMsb0RBQWdCO0lBSjlEOztJQVFBLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNEJBQTRCO29CQUN0Qyw4d0JBQThDO2lCQUM5Qzs7O3lCQUdDLEtBQUs7O0lBRVAsK0JBQUM7Q0FBQSxBQVJELENBSThDLGdCQUFnQixHQUk3RDtTQUpZLHdCQUF3Qjs7O0lBRXBDLDBDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sTWFya2Rvd24gfSBmcm9tICcuL2NvbnRyb2wtbWFya2Rvd24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLW1hcmtkb3duLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1tYXJrZG93bi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xNYXJrZG93bkNvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbE1hcmtkb3duO1xuXG59XG4iXX0=