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
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-template #inputDef let-context>\r\n\t\t<div class=\"control__group control__group--password\">\r\n\t\t\t<input class=\"control__input control__input--password\" placeholder=\"{{ context.option.placeholder | label }}\" [formControlName]=\"context.option.key\" type=\"password\" #password>\r\n\t\t\t<div class=\"control__addon\">\r\n\t\t\t\t<input class=\"control__checkbox\" type=\"checkbox\" [attr.aria-label]=\"context.option.label | label\" (input)=\"password.setAttribute('type', reveal.checked ? 'text' : 'password')\" #reveal>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"control__error control__error--password\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: context.option.minlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: context.option.maxlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n</ng-container>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvcGFzc3dvcmQvY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQ7SUFJOEMsb0RBQWdCO0lBSjlEO1FBQUEscUVBVUM7UUFKQSxZQUFNLEdBQXlCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDOztJQUluRCxDQUFDOztnQkFWQSxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMseXBEQUE4QztpQkFDOUM7Ozt5QkFLQyxLQUFLOztJQUVQLCtCQUFDO0NBQUEsQUFWRCxDQUk4QyxnQkFBZ0IsR0FNN0Q7U0FOWSx3QkFBd0I7OztJQUVwQywwQ0FBa0Q7O0lBRWxELDBDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFBhc3N3b3JkIH0gZnJvbSAnLi9jb250cm9sLXBhc3N3b3JkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnY29udHJvbC1wYXNzd29yZC1jb21wb25lbnQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sUGFzc3dvcmRDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IHtcclxuXHJcblx0cmV2ZWFsOiB7IGNoZWNrZWQ6IGJvb2xlYW4gfSA9IHsgY2hlY2tlZDogZmFsc2UgfTtcclxuXHJcblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sUGFzc3dvcmQ7XHJcblxyXG59XHJcbiJdfQ==