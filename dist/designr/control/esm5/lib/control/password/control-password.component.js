/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlPassword } from './control-password';
var ControlPasswordComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlPasswordComponent, _super);
    function ControlPasswordComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.reveal = { checked: false };
        return _this;
    }
    ControlPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-password-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t<div class=\"input-group\">\r\n\t\t<input class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" [type]=\"option.type\" #password>\r\n\t\t<input class=\"form-control--addon\" type=\"checkbox\" [attr.aria-label]=\"option.label | label\" (input)=\"password.setAttribute('type', reveal.checked ? 'text' : option.type)\" #reveal>\r\n\t</div>\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: option.minlength } }}</div>\r\n\t\t<div *ngIf=\"control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: option.maxlength } }}</div>\r\n\t\t<div *ngIf=\"control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t</div>\r\n</ng-container>\r\n"
                }] }
    ];
    ControlPasswordComponent.propDecorators = {
        option: [{ type: Input }]
    };
    return ControlPasswordComponent;
}(ControlComponent));
export { ControlPasswordComponent };
if (false) {
    /** @type {?} */
    ControlPasswordComponent.prototype.reveal;
    /** @type {?} */
    ControlPasswordComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvcGFzc3dvcmQvY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQ7SUFJOEMsb0RBQWdCO0lBSjlEO1FBQUEscUVBVUM7UUFKQSxZQUFNLEdBQXlCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDOztJQUluRCxDQUFDOztnQkFWQSxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsd3FDQUE4QztpQkFDOUM7Ozt5QkFLQyxLQUFLOztJQUVQLCtCQUFDO0NBQUEsQUFWRCxDQUk4QyxnQkFBZ0IsR0FNN0Q7U0FOWSx3QkFBd0I7OztJQUVwQywwQ0FBa0Q7O0lBRWxELDBDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sUGFzc3dvcmQgfSBmcm9tICcuL2NvbnRyb2wtcGFzc3dvcmQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLXBhc3N3b3JkLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xQYXNzd29yZENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xuXG5cdHJldmVhbDogeyBjaGVja2VkOiBib29sZWFuIH0gPSB7IGNoZWNrZWQ6IGZhbHNlIH07XG5cblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sUGFzc3dvcmQ7XG5cbn1cbiJdfQ==