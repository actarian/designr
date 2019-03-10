/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlRadio } from './control-radio';
export class ControlRadioComponent extends ControlComponent {
}
ControlRadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-radio-component',
                template: "<div class=\"form-radio\" [formGroup]=\"form\">\r\n\t<label class=\"form-label\">\r\n\t\t<input class=\"form-radio__input\" type=\"radio\" [id]=\"option.key\" [formControlName]=\"option.key\">\r\n\t\t<span class=\"form-radio__label\">{{ option.label | label }}</span>\r\n\t</label>\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t</div>\r\n</div>\r\n"
            }] }
];
ControlRadioComponent.propDecorators = {
    option: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlRadioComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1yYWRpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvcmFkaW8vY29udHJvbC1yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0vQyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZ0JBQWdCOzs7WUFKMUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLDRmQUEyQzthQUMzQzs7O3FCQUdDLEtBQUs7Ozs7SUFBTix1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFJhZGlvIH0gZnJvbSAnLi9jb250cm9sLXJhZGlvJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1yYWRpby1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sUmFkaW9Db21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xSYWRpbztcblxufVxuIl19