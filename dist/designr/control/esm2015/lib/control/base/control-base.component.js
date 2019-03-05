/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBase } from './control-base';
export class ControlBaseComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.reveal = { checked: false };
        this.onChange = (value) => { };
        this.onTouched = () => { };
    }
    /**
     * @return {?}
     */
    get controlRef() {
        // console.log('controlRef', this.control.key, this.form.controls);
        return this.form.controls[this.control.key];
    }
    /**
     * @return {?}
     */
    get isValid() { return this.controlRef.valid; }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    formatValue(value) {
        console.log('ControlBaseComponent.formatValue', value);
        this.renderer.setProperty(this.element, 'value', value);
        // console.log('ControlEditableComponent.writeValue', value);
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    parseValue(value) {
        console.log('ControlBaseComponent.parseValue', value);
        /** @type {?} */
        const parsed = this.innervalue;
        this.onChange(parsed);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        this.element = event.target;
        this.onChange(this.element.value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.blurred = false;
        this.element = event.target;
        // this.element.value = this.controlRef.value;
        this.renderer.setProperty(this.element, 'value', this.controlRef.value);
        // console.log('ControlBaseComponent.onFocus', this.controlRef);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.blurred = true;
        this.element = event.target;
        // this.element.value = this.controlRef.value;
        this.renderer.setProperty(this.element, 'value', this.controlRef.value);
        // console.log('ControlBaseComponent.onBlur', this.controlRef);
        /*
        if (this.innervalue) {
            this.control.patchValue(this.innervalue + ' H', { emitEvent: false });
        }
        */
    }
    /**
     * @return {?}
     */
    getFormattedValue() {
        // console.log('ControlBaseComponent.getFormattedValue', this.controlRef.value);
        return this.controlRef.value;
    }
    // ControlValueAccessor
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.formatValue(value);
    }
    /**
     * @param {?} method
     * @return {?}
     */
    registerOnChange(method) {
        this.onChange = method;
        // console.log('ControlEditableComponent.registerOnChange');
    }
    /**
     * @param {?} method
     * @return {?}
     */
    registerOnTouched(method) {
        this.onTouched = method;
        // console.log('ControlEditableComponent.registerOnTouched');
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        // const node = this.textarea.nativeElement;
        /*
        if (isDisabled) {
            this.renderer.addClass(this.element, 'disabled');
        } else {
            this.renderer.removeClass(this.element, 'disabled');
        }
        // console.log('ControlEditableComponent.setDisabledState', isDisabled);
        */
    }
}
ControlBaseComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-base-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t<input class=\"form-control\" placeholder=\"{{ control.placeholder | label }}\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t<div class=\"alert alert--danger\" *ngIf=\"controlRef.invalid && (controlRef.dirty || controlRef.touched)\">\r\n\t\t<div *ngIf=\"controlRef.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t</div>\r\n</ng-container>\r\n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ControlBaseComponent),
                        multi: true,
                    }]
            }] }
];
/** @nocollapse */
ControlBaseComponent.ctorParameters = () => [
    { type: Renderer2 }
];
ControlBaseComponent.propDecorators = {
    control: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlBaseComponent.prototype.control;
    /** @type {?} */
    ControlBaseComponent.prototype.form;
    /**
     * @type {?}
     * @protected
     */
    ControlBaseComponent.prototype.element;
    /**
     * @type {?}
     * @protected
     */
    ControlBaseComponent.prototype.blurred;
    /**
     * @type {?}
     * @protected
     */
    ControlBaseComponent.prototype.innervalue;
    /** @type {?} */
    ControlBaseComponent.prototype.reveal;
    /**
     * @type {?}
     * @protected
     */
    ControlBaseComponent.prototype.onChange;
    /**
     * @type {?}
     * @protected
     */
    ControlBaseComponent.prototype.onTouched;
    /**
     * @type {?}
     * @protected
     */
    ControlBaseComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9iYXNlL2NvbnRyb2wtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUF5QyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFXN0MsTUFBTSxPQUFPLG9CQUFvQjs7OztJQVdoQyxZQUNXLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFIOUIsV0FBTSxHQUF5QixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztRQWF4QyxhQUFRLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUUvQixjQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBWDVCLENBQUM7Ozs7SUFFTCxJQUFJLFVBQVU7UUFDYixtRUFBbUU7UUFDbkUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBTXJDLFdBQVcsQ0FBQyxLQUFVO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEQsNkRBQTZEO0lBQzlELENBQUM7Ozs7OztJQUVTLFVBQVUsQ0FBQyxLQUFVO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsS0FBSyxDQUFDLENBQUM7O2NBQ2hELE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVTtRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQVk7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFZO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM1Qiw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RSxnRUFBZ0U7SUFDakUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBWTtRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDNUIsOENBQThDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsK0RBQStEO1FBQy9EOzs7O1VBSUU7SUFDSCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2hCLGdGQUFnRjtRQUNoRixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUlELFVBQVUsQ0FBQyxLQUFVO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFXO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLDREQUE0RDtJQUM3RCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLE1BQVc7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsNkRBQTZEO0lBQzlELENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbkMsNENBQTRDO1FBQzVDOzs7Ozs7O1VBT0U7SUFDSCxDQUFDOzs7WUF4R0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLGdpQkFBNEM7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDO3dCQUNYLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7d0JBQ25ELEtBQUssRUFBRSxJQUFJO3FCQUNYLENBQUM7YUFDRjs7OztZQVpzQyxTQUFTOzs7c0JBZTlDLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLHVDQUFtQzs7SUFDbkMsb0NBQXlCOzs7OztJQUV6Qix1Q0FBdUI7Ozs7O0lBQ3ZCLHVDQUEyQjs7Ozs7SUFDM0IsMENBQTBCOztJQUUxQixzQ0FBa0Q7Ozs7O0lBYWxELHdDQUF5Qzs7Ozs7SUFFekMseUNBQWdDOzs7OztJQVovQix3Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Hcm91cCwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sQmFzZSB9IGZyb20gJy4vY29udHJvbC1iYXNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1iYXNlLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9jb250cm9sLWJhc2UuY29tcG9uZW50Lmh0bWwnLFxuXHRwcm92aWRlcnM6IFt7XG5cdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29udHJvbEJhc2VDb21wb25lbnQpLFxuXHRcdG11bHRpOiB0cnVlLFxuXHR9XSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cblx0QElucHV0KCkgY29udHJvbDogQ29udHJvbEJhc2U8YW55Pjtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXG5cdHByb3RlY3RlZCBlbGVtZW50OiBhbnk7XG5cdHByb3RlY3RlZCBibHVycmVkOiBib29sZWFuO1xuXHRwcm90ZWN0ZWQgaW5uZXJ2YWx1ZTogYW55O1xuXG5cdHJldmVhbDogeyBjaGVja2VkOiBib29sZWFuIH0gPSB7IGNoZWNrZWQ6IGZhbHNlIH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjJcblx0KSB7IH1cblxuXHRnZXQgY29udHJvbFJlZigpOiBBYnN0cmFjdENvbnRyb2wge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdjb250cm9sUmVmJywgdGhpcy5jb250cm9sLmtleSwgdGhpcy5mb3JtLmNvbnRyb2xzKTtcblx0XHRyZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldO1xuXHR9XG5cblx0Z2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmNvbnRyb2xSZWYudmFsaWQ7IH1cblxuXHRwcm90ZWN0ZWQgb25DaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4geyB9O1xuXG5cdHByb3RlY3RlZCBvblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cblx0cHJvdGVjdGVkIGZvcm1hdFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZygnQ29udHJvbEJhc2VDb21wb25lbnQuZm9ybWF0VmFsdWUnLCB2YWx1ZSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsICd2YWx1ZScsIHZhbHVlKTtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEVkaXRhYmxlQ29tcG9uZW50LndyaXRlVmFsdWUnLCB2YWx1ZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcGFyc2VWYWx1ZSh2YWx1ZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coJ0NvbnRyb2xCYXNlQ29tcG9uZW50LnBhcnNlVmFsdWUnLCB2YWx1ZSk7XG5cdFx0Y29uc3QgcGFyc2VkID0gdGhpcy5pbm5lcnZhbHVlO1xuXHRcdHRoaXMub25DaGFuZ2UocGFyc2VkKTtcblx0fVxuXG5cdG9uSW5wdXQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXHRcdHRoaXMub25DaGFuZ2UodGhpcy5lbGVtZW50LnZhbHVlKTtcblx0fVxuXG5cdG9uRm9jdXMoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG5cdFx0dGhpcy5ibHVycmVkID0gZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXHRcdC8vIHRoaXMuZWxlbWVudC52YWx1ZSA9IHRoaXMuY29udHJvbFJlZi52YWx1ZTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudCwgJ3ZhbHVlJywgdGhpcy5jb250cm9sUmVmLnZhbHVlKTtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2VDb21wb25lbnQub25Gb2N1cycsIHRoaXMuY29udHJvbFJlZik7XG5cdH1cblxuXHRvbkJsdXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG5cdFx0dGhpcy5ibHVycmVkID0gdHJ1ZTtcblx0XHR0aGlzLmVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cdFx0Ly8gdGhpcy5lbGVtZW50LnZhbHVlID0gdGhpcy5jb250cm9sUmVmLnZhbHVlO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50LCAndmFsdWUnLCB0aGlzLmNvbnRyb2xSZWYudmFsdWUpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZUNvbXBvbmVudC5vbkJsdXInLCB0aGlzLmNvbnRyb2xSZWYpO1xuXHRcdC8qXG5cdFx0aWYgKHRoaXMuaW5uZXJ2YWx1ZSkge1xuXHRcdFx0dGhpcy5jb250cm9sLnBhdGNoVmFsdWUodGhpcy5pbm5lcnZhbHVlICsgJyBIJywgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuXHRcdH1cblx0XHQqL1xuXHR9XG5cblx0Z2V0Rm9ybWF0dGVkVmFsdWUoKTogYW55IHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2VDb21wb25lbnQuZ2V0Rm9ybWF0dGVkVmFsdWUnLCB0aGlzLmNvbnRyb2xSZWYudmFsdWUpO1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xSZWYudmFsdWU7XG5cdH1cblxuXHQvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShtZXRob2Q6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UgPSBtZXRob2Q7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xFZGl0YWJsZUNvbXBvbmVudC5yZWdpc3Rlck9uQ2hhbmdlJyk7XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChtZXRob2Q6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gbWV0aG9kO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sRWRpdGFibGVDb21wb25lbnQucmVnaXN0ZXJPblRvdWNoZWQnKTtcblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdC8vIGNvbnN0IG5vZGUgPSB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0Lypcblx0XHRpZiAoaXNEaXNhYmxlZCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGVkJyk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sRWRpdGFibGVDb21wb25lbnQuc2V0RGlzYWJsZWRTdGF0ZScsIGlzRGlzYWJsZWQpO1xuXHRcdCovXG5cdH1cblxufVxuIl19