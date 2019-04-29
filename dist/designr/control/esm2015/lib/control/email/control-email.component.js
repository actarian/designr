/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlEmail } from './control-email';
export class ControlEmailComponent extends ControlComponent {
}
ControlEmailComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-email-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\r\n\t<ng-template #controlDef let-context>\r\n\t\t<div class=\"control\" [ngClass]=\"context.classes\">\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.labelRef || labelDef; context: { $implicit: context }\"></ng-container>\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-template #labelDef let-context>\r\n\t\t<label class=\"form-label\" [attr.for]=\"context.option.key\">{{ context.option.label | label }}</label>\r\n\t</ng-template>\r\n\r\n\t<ng-template #inputDef let-context>\r\n\t\t<input class=\"form-control\" placeholder=\"{{ context.option.placeholder | label }}\" [id]=\"context.option.key\" [formControlName]=\"context.option.key\" type=\"email\">\r\n\t</ng-template>\r\n\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.email\">{{ 'errors.email' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: context.option.minlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: context.option.maxlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-container *ngTemplateOutlet=\"controlRef || controlDef; context: { $implicit: context }\"></ng-container>\r\n\r\n</ng-container>\r\n"
            }] }
];
ControlEmailComponent.propDecorators = {
    option: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlEmailComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1lbWFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvZW1haWwvY29udHJvbC1lbWFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0vQyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZ0JBQWdCOzs7WUFKMUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLG04REFBMkM7YUFDM0M7OztxQkFHQyxLQUFLOzs7O0lBQU4sdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xFbWFpbCB9IGZyb20gJy4vY29udHJvbC1lbWFpbCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtZW1haWwtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLWVtYWlsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbEVtYWlsQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCB7XG5cblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sRW1haWw7XG5cbn1cbiJdfQ==