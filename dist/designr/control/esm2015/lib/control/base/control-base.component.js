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
        // console.log('ControlBaseComponent.formatValue', value);
        this.renderer.setProperty(this.element, 'value', value);
        // console.log('ControlEditableComponent.writeValue', value);
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    parseValue(value) {
        // console.log('ControlBaseComponent.parseValue', value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9iYXNlL2NvbnRyb2wtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUF5QyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFXN0MsTUFBTSxPQUFPLG9CQUFvQjs7OztJQVdoQyxZQUNXLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFIOUIsV0FBTSxHQUF5QixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztRQWF4QyxhQUFRLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUUvQixjQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBWDVCLENBQUM7Ozs7SUFFTCxJQUFJLFVBQVU7UUFDYixtRUFBbUU7UUFDbkUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBTXJDLFdBQVcsQ0FBQyxLQUFVO1FBQy9CLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RCw2REFBNkQ7SUFDOUQsQ0FBQzs7Ozs7O0lBRVMsVUFBVSxDQUFDLEtBQVU7OztjQUV4QixNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVU7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFZO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBWTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDNUIsOENBQThDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsZ0VBQWdFO0lBQ2pFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQVk7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzVCLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLCtEQUErRDtRQUMvRDs7OztVQUlFO0lBQ0gsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixnRkFBZ0Y7UUFDaEYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFJRCxVQUFVLENBQUMsS0FBVTtRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsTUFBVztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN2Qiw0REFBNEQ7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxNQUFXO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLDZEQUE2RDtJQUM5RCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ25DLDRDQUE0QztRQUM1Qzs7Ozs7OztVQU9FO0lBQ0gsQ0FBQzs7O1lBeEdELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxnaUJBQTRDO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQzt3QkFDWCxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO3dCQUNuRCxLQUFLLEVBQUUsSUFBSTtxQkFDWCxDQUFDO2FBQ0Y7Ozs7WUFac0MsU0FBUzs7O3NCQWU5QyxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETix1Q0FBbUM7O0lBQ25DLG9DQUF5Qjs7Ozs7SUFFekIsdUNBQXVCOzs7OztJQUN2Qix1Q0FBMkI7Ozs7O0lBQzNCLDBDQUEwQjs7SUFFMUIsc0NBQWtEOzs7OztJQWFsRCx3Q0FBeUM7Ozs7O0lBRXpDLHlDQUFnQzs7Ozs7SUFaL0Isd0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtR3JvdXAsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29udHJvbEJhc2UgfSBmcm9tICcuL2NvbnRyb2wtYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtYmFzZS1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vY29udHJvbC1iYXNlLmNvbXBvbmVudC5odG1sJyxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbnRyb2xCYXNlQ29tcG9uZW50KSxcblx0XHRtdWx0aTogdHJ1ZSxcblx0fV0sXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG5cdEBJbnB1dCgpIGNvbnRyb2w6IENvbnRyb2xCYXNlPGFueT47XG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcblxuXHRwcm90ZWN0ZWQgZWxlbWVudDogYW55O1xuXHRwcm90ZWN0ZWQgYmx1cnJlZDogYm9vbGVhbjtcblx0cHJvdGVjdGVkIGlubmVydmFsdWU6IGFueTtcblxuXHRyZXZlYWw6IHsgY2hlY2tlZDogYm9vbGVhbiB9ID0geyBjaGVja2VkOiBmYWxzZSB9O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyXG5cdCkgeyB9XG5cblx0Z2V0IGNvbnRyb2xSZWYoKTogQWJzdHJhY3RDb250cm9sIHtcblx0XHQvLyBjb25zb2xlLmxvZygnY29udHJvbFJlZicsIHRoaXMuY29udHJvbC5rZXksIHRoaXMuZm9ybS5jb250cm9scyk7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XTtcblx0fVxuXG5cdGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5jb250cm9sUmVmLnZhbGlkOyB9XG5cblx0cHJvdGVjdGVkIG9uQ2hhbmdlID0gKHZhbHVlOiBhbnkpID0+IHsgfTtcblxuXHRwcm90ZWN0ZWQgb25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG5cdHByb3RlY3RlZCBmb3JtYXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xCYXNlQ29tcG9uZW50LmZvcm1hdFZhbHVlJywgdmFsdWUpO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50LCAndmFsdWUnLCB2YWx1ZSk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xFZGl0YWJsZUNvbXBvbmVudC53cml0ZVZhbHVlJywgdmFsdWUpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHBhcnNlVmFsdWUodmFsdWU6IGFueSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZUNvbXBvbmVudC5wYXJzZVZhbHVlJywgdmFsdWUpO1xuXHRcdGNvbnN0IHBhcnNlZCA9IHRoaXMuaW5uZXJ2YWx1ZTtcblx0XHR0aGlzLm9uQ2hhbmdlKHBhcnNlZCk7XG5cdH1cblxuXHRvbklucHV0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuXHRcdHRoaXMuZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblx0XHR0aGlzLm9uQ2hhbmdlKHRoaXMuZWxlbWVudC52YWx1ZSk7XG5cdH1cblxuXHRvbkZvY3VzKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuXHRcdHRoaXMuYmx1cnJlZCA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblx0XHQvLyB0aGlzLmVsZW1lbnQudmFsdWUgPSB0aGlzLmNvbnRyb2xSZWYudmFsdWU7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsICd2YWx1ZScsIHRoaXMuY29udHJvbFJlZi52YWx1ZSk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xCYXNlQ29tcG9uZW50Lm9uRm9jdXMnLCB0aGlzLmNvbnRyb2xSZWYpO1xuXHR9XG5cblx0b25CbHVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuXHRcdHRoaXMuYmx1cnJlZCA9IHRydWU7XG5cdFx0dGhpcy5lbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXHRcdC8vIHRoaXMuZWxlbWVudC52YWx1ZSA9IHRoaXMuY29udHJvbFJlZi52YWx1ZTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudCwgJ3ZhbHVlJywgdGhpcy5jb250cm9sUmVmLnZhbHVlKTtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2VDb21wb25lbnQub25CbHVyJywgdGhpcy5jb250cm9sUmVmKTtcblx0XHQvKlxuXHRcdGlmICh0aGlzLmlubmVydmFsdWUpIHtcblx0XHRcdHRoaXMuY29udHJvbC5wYXRjaFZhbHVlKHRoaXMuaW5uZXJ2YWx1ZSArICcgSCcsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblx0XHR9XG5cdFx0Ki9cblx0fVxuXG5cdGdldEZvcm1hdHRlZFZhbHVlKCk6IGFueSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xCYXNlQ29tcG9uZW50LmdldEZvcm1hdHRlZFZhbHVlJywgdGhpcy5jb250cm9sUmVmLnZhbHVlKTtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9sUmVmLnZhbHVlO1xuXHR9XG5cblx0Ly8gQ29udHJvbFZhbHVlQWNjZXNzb3JcblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UobWV0aG9kOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gbWV0aG9kO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sRWRpdGFibGVDb21wb25lbnQucmVnaXN0ZXJPbkNoYW5nZScpO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQobWV0aG9kOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IG1ldGhvZDtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEVkaXRhYmxlQ29tcG9uZW50LnJlZ2lzdGVyT25Ub3VjaGVkJyk7XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHQvLyBjb25zdCBub2RlID0gdGhpcy50ZXh0YXJlYS5uYXRpdmVFbGVtZW50O1xuXHRcdC8qXG5cdFx0aWYgKGlzRGlzYWJsZWQpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlZCcpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEVkaXRhYmxlQ29tcG9uZW50LnNldERpc2FibGVkU3RhdGUnLCBpc0Rpc2FibGVkKTtcblx0XHQqL1xuXHR9XG5cbn1cbiJdfQ==