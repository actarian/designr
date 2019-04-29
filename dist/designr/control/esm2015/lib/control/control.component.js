/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
export class ControlComponent extends DisposableComponent {
    /**
     * @return {?}
     */
    get context() {
        return this;
    }
    /**
     * @return {?}
     */
    get control() {
        // console.log('control', this.option.key, this.form.controls);
        return this.form.controls[this.option.key];
    }
    /**
     * @return {?}
     */
    get isValid() { return this.control.valid; }
    /**
     * @return {?}
     */
    get classes() {
        return {
            valid: this.control.valid,
            invalid: this.control.invalid,
            dirty: this.control.dirty,
            empty: (this.control.value == null),
            required: Boolean(this.option.required || this.option.requiredTrue),
            disabled: this.option.disabled,
        };
    }
}
ControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\r\n\t<ng-template #controlDef let-context>\r\n\t\t<div class=\"control\" [ngClass]=\"context.classes\">\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.labelRef || labelDef; context: { $implicit: context }\"></ng-container>\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-template #labelDef let-context>\r\n\t\t<label class=\"form-label\" [attr.for]=\"context.option.key\">{{ context.option.label | label }}</label>\r\n\t</ng-template>\r\n\r\n\t<ng-template #inputDef let-context>\r\n\t\t<input class=\"form-control\" placeholder=\"{{ context.option.placeholder | label }}\" [id]=\"context.option.key\" [formControlName]=\"context.option.key\" type=\"text\">\r\n\t</ng-template>\r\n\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: context.option.minlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: context.option.maxlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-container *ngTemplateOutlet=\"controlRef || controlDef; context: { $implicit: context }\"></ng-container>\r\n\r\n</ng-container>\r\n"
            }] }
];
ControlComponent.propDecorators = {
    controlRef: [{ type: ContentChild, args: ['controlRef',] }],
    labelRef: [{ type: ContentChild, args: ['labelRef',] }],
    inputRef: [{ type: ContentChild, args: ['inputRef',] }],
    errorRef: [{ type: ContentChild, args: ['errorRef',] }],
    option: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlComponent.prototype.controlRef;
    /** @type {?} */
    ControlComponent.prototype.labelRef;
    /** @type {?} */
    ControlComponent.prototype.inputRef;
    /** @type {?} */
    ControlComponent.prototype.errorRef;
    /** @type {?} */
    ControlComponent.prototype.option;
    /** @type {?} */
    ControlComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFtQixTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPcEQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLG1CQUFtQjs7OztJQVV4RCxJQUFJLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDViwrREFBK0Q7UUFDL0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7OztJQUU1QyxJQUFJLE9BQU87UUFDVixPQUFPO1lBQ04sS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDekIsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDbkUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtTQUM5QixDQUFDO0lBQ0gsQ0FBQzs7O1lBbENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QiwwMkRBQXFDO2FBQ3JDOzs7eUJBR0MsWUFBWSxTQUFDLFlBQVk7dUJBQ3pCLFlBQVksU0FBQyxVQUFVO3VCQUN2QixZQUFZLFNBQUMsVUFBVTt1QkFDdkIsWUFBWSxTQUFDLFVBQVU7cUJBRXZCLEtBQUs7bUJBQ0wsS0FBSzs7OztJQU5OLHNDQUFzRjs7SUFDdEYsb0NBQWtGOztJQUNsRixvQ0FBa0Y7O0lBQ2xGLG9DQUFrRjs7SUFFbEYsa0NBQXFDOztJQUNyQyxnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0Zvck9mQ29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLW9wdGlvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXG5cdEBDb250ZW50Q2hpbGQoJ2NvbnRyb2xSZWYnKSBjb250cm9sUmVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XG5cdEBDb250ZW50Q2hpbGQoJ2xhYmVsUmVmJykgbGFiZWxSZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+Pjtcblx0QENvbnRlbnRDaGlsZCgnaW5wdXRSZWYnKSBpbnB1dFJlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xuXHRAQ29udGVudENoaWxkKCdlcnJvclJlZicpIGVycm9yUmVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XG5cblx0QElucHV0KCkgb3B0aW9uOiBJQ29udHJvbE9wdGlvbjxhbnk+O1xuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG5cblx0Z2V0IGNvbnRleHQoKTogQ29udHJvbENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQgY29udHJvbCgpOiBBYnN0cmFjdENvbnRyb2wge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdjb250cm9sJywgdGhpcy5vcHRpb24ua2V5LCB0aGlzLmZvcm0uY29udHJvbHMpO1xuXHRcdHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5vcHRpb24ua2V5XTtcblx0fVxuXG5cdGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5jb250cm9sLnZhbGlkOyB9XG5cblx0Z2V0IGNsYXNzZXMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbGlkOiB0aGlzLmNvbnRyb2wudmFsaWQsXG5cdFx0XHRpbnZhbGlkOiB0aGlzLmNvbnRyb2wuaW52YWxpZCxcblx0XHRcdGRpcnR5OiB0aGlzLmNvbnRyb2wuZGlydHksXG5cdFx0XHRlbXB0eTogKHRoaXMuY29udHJvbC52YWx1ZSA9PSBudWxsKSxcblx0XHRcdHJlcXVpcmVkOiBCb29sZWFuKHRoaXMub3B0aW9uLnJlcXVpcmVkIHx8IHRoaXMub3B0aW9uLnJlcXVpcmVkVHJ1ZSksXG5cdFx0XHRkaXNhYmxlZDogdGhpcy5vcHRpb24uZGlzYWJsZWQsXG5cdFx0fTtcblx0fVxuXG59XG4iXX0=