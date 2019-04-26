/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
export class ControlComponent extends DisposableComponent {
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
            required: (this.option.required || this.option.requiredTrue)
        };
    }
}
ControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\t<div class=\"form-input\" [ngClass]=\"{\r\n\t\t\tvalid: control.valid,\r\n\t\t\tinvalid: control.invalid,\r\n\t\t\tdirty: control.dirty,\r\n\t\t\tempty: !control.value\r\n\t\t}\">\r\n\t\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t\t<input class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" type=\"text\">\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n"
            }] }
];
ControlComponent.propDecorators = {
    option: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlComponent.prototype.option;
    /** @type {?} */
    ControlComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBbUIsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3BELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxtQkFBbUI7Ozs7SUFLeEQsSUFBSSxPQUFPO1FBQ1YsK0RBQStEO1FBQy9ELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7SUFFNUMsSUFBSSxPQUFPO1FBQ1YsT0FBTztZQUNOLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztZQUM3QixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQ3pCLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUM1RCxDQUFDO0lBQ0gsQ0FBQzs7O1lBeEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixvdEJBQXFDO2FBQ3JDOzs7cUJBR0MsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sa0NBQXFDOztJQUNyQyxnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLW9wdGlvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogSUNvbnRyb2xPcHRpb248YW55Pjtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXG5cdGdldCBjb250cm9sKCk6IEFic3RyYWN0Q29udHJvbCB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2NvbnRyb2wnLCB0aGlzLm9wdGlvbi5rZXksIHRoaXMuZm9ybS5jb250cm9scyk7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLm9wdGlvbi5rZXldO1xuXHR9XG5cblx0Z2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wudmFsaWQ7IH1cblxuXHRnZXQgY2xhc3NlcygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsaWQ6IHRoaXMuY29udHJvbC52YWxpZCxcblx0XHRcdGludmFsaWQ6IHRoaXMuY29udHJvbC5pbnZhbGlkLFxuXHRcdFx0ZGlydHk6IHRoaXMuY29udHJvbC5kaXJ0eSxcblx0XHRcdGVtcHR5OiAodGhpcy5jb250cm9sLnZhbHVlID09IG51bGwpLFxuXHRcdFx0cmVxdWlyZWQ6ICh0aGlzLm9wdGlvbi5yZXF1aXJlZCB8fCB0aGlzLm9wdGlvbi5yZXF1aXJlZFRydWUpXG5cdFx0fTtcblx0fVxuXG59XG4iXX0=