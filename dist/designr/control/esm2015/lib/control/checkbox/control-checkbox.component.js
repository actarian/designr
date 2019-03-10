/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlCheckbox } from './control-checkbox';
export class ControlCheckboxComponent extends ControlComponent {
}
ControlCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-checkbox-component',
                template: "<div class=\"form-checkbox\" [formGroup]=\"form\">\r\n\t<label class=\"form-label\">\r\n\t\t<input class=\"form-checkbox__input\" type=\"checkbox\" [id]=\"option.key\" [formControlName]=\"option.key\">\r\n\t\t<span class=\"form-checkbox__label\">{{ option.label | label }}</span>\r\n\t</label>\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.requiredTrue\">{{ 'errors.required' | label }}</div>\r\n\t</div>\r\n</div>\r\n"
            }] }
];
ControlCheckboxComponent.propDecorators = {
    option: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlCheckboxComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY2hlY2tib3gvY29udHJvbC1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1yRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQWdCOzs7WUFKN0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLGdtQkFBOEM7YUFDOUM7OztxQkFHQyxLQUFLOzs7O0lBQU4sMENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xDaGVja2JveCB9IGZyb20gJy4vY29udHJvbC1jaGVja2JveCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtY2hlY2tib3gtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbENoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCB7XG5cblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sQ2hlY2tib3g7XG5cbn1cbiJdfQ==