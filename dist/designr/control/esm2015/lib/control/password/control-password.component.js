/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlPassword } from './control-password';
export class ControlPasswordComponent extends ControlComponent {
    constructor() {
        super(...arguments);
        this.reveal = { checked: false };
    }
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
if (false) {
    /** @type {?} */
    ControlPasswordComponent.prototype.reveal;
    /** @type {?} */
    ControlPasswordComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvcGFzc3dvcmQvY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1yRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQWdCO0lBSjlEOztRQU1DLFdBQU0sR0FBeUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFJbkQsQ0FBQzs7O1lBVkEsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLHlwREFBOEM7YUFDOUM7OztxQkFLQyxLQUFLOzs7O0lBRk4sMENBQWtEOztJQUVsRCwwQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xQYXNzd29yZCB9IGZyb20gJy4vY29udHJvbC1wYXNzd29yZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2NvbnRyb2wtcGFzc3dvcmQtY29tcG9uZW50JyxcclxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFBhc3N3b3JkQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCB7XHJcblxyXG5cdHJldmVhbDogeyBjaGVja2VkOiBib29sZWFuIH0gPSB7IGNoZWNrZWQ6IGZhbHNlIH07XHJcblxyXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbFBhc3N3b3JkO1xyXG5cclxufVxyXG4iXX0=