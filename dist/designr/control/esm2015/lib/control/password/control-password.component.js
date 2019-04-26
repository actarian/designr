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
                template: "<ng-container [formGroup]=\"form\">\r\n\t<div class=\"form-input\" [ngClass]=\"classes\">\r\n\t\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<input class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" type=\"password\" #password>\r\n\t\t\t<input class=\"form-control--addon\" type=\"checkbox\" [attr.aria-label]=\"option.label | label\" (input)=\"password.setAttribute('type', reveal.checked ? 'text' : 'password')\" #reveal>\r\n\t\t</div>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: option.minlength } }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: option.maxlength } }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvcGFzc3dvcmQvY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1yRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQWdCO0lBSjlEOztRQU1DLFdBQU0sR0FBeUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFJbkQsQ0FBQzs7O1lBVkEsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLDR2Q0FBOEM7YUFDOUM7OztxQkFLQyxLQUFLOzs7O0lBRk4sMENBQWtEOztJQUVsRCwwQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFBhc3N3b3JkIH0gZnJvbSAnLi9jb250cm9sLXBhc3N3b3JkJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1wYXNzd29yZC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sUGFzc3dvcmRDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IHtcblxuXHRyZXZlYWw6IHsgY2hlY2tlZDogYm9vbGVhbiB9ID0geyBjaGVja2VkOiBmYWxzZSB9O1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbFBhc3N3b3JkO1xuXG59XG4iXX0=