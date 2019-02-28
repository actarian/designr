/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlText } from './control-text';
export class ControlTextComponent extends ControlBaseComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        super(renderer);
        this.renderer = renderer;
    }
}
ControlTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-text-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t<input class=\"form-control\" placeholder=\"{{ control.placeholder | label }}\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t<div class=\"alert alert--danger\" *ngIf=\"controlRef.invalid && (controlRef.dirty || controlRef.touched)\">\r\n\t\t<div *ngIf=\"controlRef.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: control.minlength } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: control.maxlength } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t</div>\r\n</ng-container>\r\n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ControlTextComponent),
                        multi: true,
                    }]
            }] }
];
/** @nocollapse */
ControlTextComponent.ctorParameters = () => [
    { type: Renderer2 }
];
ControlTextComponent.propDecorators = {
    control: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlTextComponent.prototype.control;
    /**
     * @type {?}
     * @protected
     */
    ControlTextComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC10ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC90ZXh0L2NvbnRyb2wtdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVc3QyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsb0JBQW9COzs7O0lBSTdELFlBQ1csUUFBbUI7UUFFN0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRk4sYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUc5QixDQUFDOzs7WUFqQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLDQ4QkFBNEM7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDO3dCQUNYLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7d0JBQ25ELEtBQUssRUFBRSxJQUFJO3FCQUNYLENBQUM7YUFDRjs7OztZQWJzQyxTQUFTOzs7c0JBZ0I5QyxLQUFLOzs7O0lBQU4sdUNBQThCOzs7OztJQUc3Qix3Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9jb250cm9sLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xUZXh0IH0gZnJvbSAnLi9jb250cm9sLXRleHQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLXRleHQtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2NvbnRyb2wtdGV4dC5jb21wb25lbnQuaHRtbCcsXG5cdHByb3ZpZGVyczogW3tcblx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDb250cm9sVGV4dENvbXBvbmVudCksXG5cdFx0bXVsdGk6IHRydWUsXG5cdH1dLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sVGV4dENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG5cdEBJbnB1dCgpIGNvbnRyb2w6IENvbnRyb2xUZXh0O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyXG5cdCkge1xuXHRcdHN1cGVyKHJlbmRlcmVyKTtcblx0fVxuXG59XG4iXX0=