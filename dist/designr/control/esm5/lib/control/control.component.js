/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
var ControlComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlComponent, _super);
    function ControlComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlComponent.prototype, "context", {
        get: /**
         * @return {?}
         */
        function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            // console.log('control', this.option.key, this.form.controls);
            return this.form.controls[this.option.key];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                valid: this.control.valid,
                invalid: this.control.invalid,
                dirty: this.control.dirty,
                empty: Boolean(this.control.value == null),
                required: Boolean(this.option.required || this.option.requiredTrue),
                disabled: this.option.disabled,
            };
        },
        enumerable: true,
        configurable: true
    });
    ControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-template #inputDef let-context>\r\n\t\t<input class=\"control__input\" placeholder=\"{{ context.option.placeholder | label }}\" [id]=\"context.option.key\" [formControlName]=\"context.option.key\" type=\"text\">\r\n\t</ng-template>\r\n\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"control__error\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: context.option.minlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: context.option.maxlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n</ng-container>\r\n"
                }] }
    ];
    ControlComponent.propDecorators = {
        inputRef: [{ type: ContentChild, args: ['inputRef',] }],
        errorRef: [{ type: ContentChild, args: ['errorRef',] }],
        option: [{ type: Input }],
        form: [{ type: Input }]
    };
    return ControlComponent;
}(DisposableComponent));
export { ControlComponent };
if (false) {
    /** @type {?} */
    ControlComponent.prototype.inputRef;
    /** @type {?} */
    ControlComponent.prototype.errorRef;
    /** @type {?} */
    ControlComponent.prototype.option;
    /** @type {?} */
    ControlComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBbUIsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BEO0lBSXNDLDRDQUFtQjtJQUp6RDs7SUE2Q0EsQ0FBQztJQS9CQSxzQkFBSSxxQ0FBTzs7OztRQUFYO1lBQ0MsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFDQUFPOzs7O1FBQVg7WUFDQywrREFBK0Q7WUFDL0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQU87Ozs7UUFBWDtZQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxQ0FBTzs7OztRQUFYO1lBUUMsT0FBTztnQkFDTixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO2dCQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO2dCQUM3QixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO2dCQUN6QixLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztnQkFDMUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztnQkFDbkUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTthQUM5QixDQUFDO1FBQ0gsQ0FBQzs7O09BQUE7O2dCQTNDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isa3lDQUFxQztpQkFDckM7OzsyQkFLQyxZQUFZLFNBQUMsVUFBVTsyQkFDdkIsWUFBWSxTQUFDLFVBQVU7eUJBRXZCLEtBQUs7dUJBQ0wsS0FBSzs7SUFpQ1AsdUJBQUM7Q0FBQSxBQTdDRCxDQUlzQyxtQkFBbUIsR0F5Q3hEO1NBekNZLGdCQUFnQjs7O0lBSTVCLG9DQUFrRjs7SUFDbEYsb0NBQWtGOztJQUVsRixrQ0FBcUM7O0lBQ3JDLGdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nRm9yT2ZDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29udHJvbE9wdGlvbiB9IGZyb20gJy4vY29udHJvbC1vcHRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjb250cm9sLWNvbXBvbmVudCcsXHJcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IHtcclxuXHJcblx0Ly8gQENvbnRlbnRDaGlsZCgnY29udHJvbFJlZicpIGNvbnRyb2xSZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+PjtcclxuXHQvLyBAQ29udGVudENoaWxkKCdsYWJlbFJlZicpIGxhYmVsUmVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XHJcblx0QENvbnRlbnRDaGlsZCgnaW5wdXRSZWYnKSBpbnB1dFJlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xyXG5cdEBDb250ZW50Q2hpbGQoJ2Vycm9yUmVmJykgZXJyb3JSZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+PjtcclxuXHJcblx0QElucHV0KCkgb3B0aW9uOiBJQ29udHJvbE9wdGlvbjxhbnk+O1xyXG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcblx0Z2V0IGNvbnRleHQoKTogQ29udHJvbENvbXBvbmVudCB7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGdldCBjb250cm9sKCk6IEFic3RyYWN0Q29udHJvbCB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnY29udHJvbCcsIHRoaXMub3B0aW9uLmtleSwgdGhpcy5mb3JtLmNvbnRyb2xzKTtcclxuXHRcdHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5vcHRpb24ua2V5XTtcclxuXHR9XHJcblxyXG5cdGdldCBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbC52YWxpZDtcclxuXHR9XHJcblxyXG5cdGdldCBjbGFzc2VzKCk6IHtcclxuXHRcdHZhbGlkPzogYm9vbGVhbixcclxuXHRcdGludmFsaWQ/OiBib29sZWFuLFxyXG5cdFx0ZGlydHk/OiBib29sZWFuLFxyXG5cdFx0ZW1wdHk/OiBib29sZWFuLFxyXG5cdFx0cmVxdWlyZWQ/OiBib29sZWFuLFxyXG5cdFx0ZGlzYWJsZWQ/OiBib29sZWFuXHJcblx0fSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2YWxpZDogdGhpcy5jb250cm9sLnZhbGlkLFxyXG5cdFx0XHRpbnZhbGlkOiB0aGlzLmNvbnRyb2wuaW52YWxpZCxcclxuXHRcdFx0ZGlydHk6IHRoaXMuY29udHJvbC5kaXJ0eSxcclxuXHRcdFx0ZW1wdHk6IEJvb2xlYW4odGhpcy5jb250cm9sLnZhbHVlID09IG51bGwpLFxyXG5cdFx0XHRyZXF1aXJlZDogQm9vbGVhbih0aGlzLm9wdGlvbi5yZXF1aXJlZCB8fCB0aGlzLm9wdGlvbi5yZXF1aXJlZFRydWUpLFxyXG5cdFx0XHRkaXNhYmxlZDogdGhpcy5vcHRpb24uZGlzYWJsZWQsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19