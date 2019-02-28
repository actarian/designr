/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlSelect } from './control-select';
export class ControlSelectComponent extends ControlBaseComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        super(renderer);
        this.renderer = renderer;
    }
}
ControlSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-select-component',
                template: "<div class=\"form-select\" [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t<select class=\"form-select__select\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t<option *ngFor=\"let opt of control.options\" [value]=\"opt.key\">{{opt.value}}</option>\r\n\t</select>\r\n\t<div class=\"alert alert--danger\" *ngIf=\"controlRef.invalid && (controlRef.dirty || controlRef.touched)\">\r\n\t\t<div *ngIf=\"controlRef.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t</div>\r\n</div>\r\n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ControlSelectComponent),
                        multi: true,
                    }]
            }] }
];
/** @nocollapse */
ControlSelectComponent.ctorParameters = () => [
    { type: Renderer2 }
];
ControlSelectComponent.propDecorators = {
    control: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlSelectComponent.prototype.control;
    /**
     * @type {?}
     * @protected
     */
    ControlSelectComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVdqRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsb0JBQW9COzs7O0lBSS9ELFlBQ1csUUFBbUI7UUFFN0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRk4sYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUc5QixDQUFDOzs7WUFqQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLGlsQkFBOEM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDO3dCQUNYLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUM7d0JBQ3JELEtBQUssRUFBRSxJQUFJO3FCQUNYLENBQUM7YUFDRjs7OztZQWJzQyxTQUFTOzs7c0JBZ0I5QyxLQUFLOzs7O0lBQU4seUNBQWdDOzs7OztJQUcvQiwwQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9jb250cm9sLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xTZWxlY3QgfSBmcm9tICcuL2NvbnRyb2wtc2VsZWN0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1zZWxlY3QtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2NvbnRyb2wtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbnRyb2xTZWxlY3RDb21wb25lbnQpLFxuXHRcdG11bHRpOiB0cnVlLFxuXHR9XSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFNlbGVjdENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG5cdEBJbnB1dCgpIGNvbnRyb2w6IENvbnRyb2xTZWxlY3Q7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjJcblx0KSB7XG5cdFx0c3VwZXIocmVuZGVyZXIpO1xuXHR9XG5cbn1cbiJdfQ==