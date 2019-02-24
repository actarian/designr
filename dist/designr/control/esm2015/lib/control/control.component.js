/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBase } from './control-base';
export class ControlComponent {
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
    // ControlValueAccessor
    /**
     * @return {?}
     */
    getFormattedValue() {
        // console.log('ControlComponent.getFormattedValue', this.controlRef.value);
        return this.controlRef.value;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInput($event) {
        this.element = $event.target;
        this.onChange(this.element.value);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFocus($event) {
        this.blurred = false;
        this.element = $event.target;
        // this.element.value = this.controlRef.value;
        this.renderer.setProperty(this.element, 'value', this.controlRef.value);
        // console.log('ControlComponent.onFocus', this.controlRef);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onBlur($event) {
        this.blurred = true;
        this.element = $event.target;
        // this.element.value = this.controlRef.value;
        this.renderer.setProperty(this.element, 'value', this.controlRef.value);
        // console.log('ControlComponent.onBlur', this.controlRef);
        /*
        if (this.innervalue) {
            this.control.patchValue(this.innervalue + ' H', { emitEvent: false });
        }
        */
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    formatValue(value) {
        // console.log('ControlComponent.formatValue', value);
        this.renderer.setProperty(this.element, 'value', value);
        // console.log('ControlEditableComponent.writeValue', value);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    parseValue(value) {
        // console.log('ControlComponent.parseValue', value);
        /** @type {?} */
        const parsed = this.innervalue;
        this.onChange(parsed);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.formatValue(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
        // console.log('ControlEditableComponent.registerOnChange');
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
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
ControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-control',
                template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-container [ngSwitch]=\"control.schema\">\r\n\t\t<ng-container *ngSwitchCase=\"'checkbox'\">\r\n\t\t\t<!-- CHECKBOX -->\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t\t<span>{{ control.label | label }}</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'email'\">\r\n\t\t\t<!-- EMAIL -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'number'\">\r\n\t\t\t<!-- NUMBER -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [type]=\"control.type\" [attr.step]=\"control.step\" (input)=\"onInput($event)\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [value]=\"getFormattedValue()\">\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'password'\">\r\n\t\t\t<!-- PASSWORD -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<input placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\" #password>\r\n\t\t\t\t<div class=\"input-group-append\" *ngIf=\"control.type === 'password'\">\r\n\t\t\t\t\t<div class=\"input-group-text\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" [attr.aria-label]=\"control.label | label\" (input)=\"password.type = reveal.checked ? 'text' : control.type\" #password>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'radio'\">\r\n\t\t\t<!-- RADIO -->\r\n\t\t\t<div class=\"radio\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"radio\" class=\"form-radio-input\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t\t<span>{{ control.label | label }}</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'select'\">\r\n\t\t\t<!-- SELECT -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<select class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t<option *ngFor=\"let opt of control.options\" [value]=\"opt.key\">{{opt.value}}</option>\r\n\t\t\t</select>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'markdown'\">\r\n\t\t\t<!-- MARKDOWN -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<textarea placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" rows=\"4\"></textarea>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'text'\">\r\n\t\t\t<!-- TEXT -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\t<div *ngIf=\"controlRef.invalid && (controlRef.dirty || controlRef.touched)\" class=\"alert alert--danger\">\r\n\t\t<div *ngIf=\"controlRef.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.requiredTrue\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.min\">{{ 'errors.min' | label : null : { min: control.min } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.max\">{{ 'errors.max' | label : null : { max: control.max } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.email\">{{ 'errors.email' | label }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.minLength\">{{ 'errors.minLength' | label : null : { minLength: control.minLength } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.maxLength\">{{ 'errors.maxLength' | label : null : { maxLength: control.maxLength } }}</div>\r\n\t\t<!-- <div *ngIf=\"controlRef.errors.pattern\">{{ 'errors.pattern' | label }}</div> -->\r\n\t\t<div *ngIf=\"controlRef.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t</div>\r\n</ng-container>\r\n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ControlComponent),
                        multi: true,
                    }]
            }] }
];
/** @nocollapse */
ControlComponent.ctorParameters = () => [
    { type: Renderer2 }
];
ControlComponent.propDecorators = {
    control: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlComponent.prototype.control;
    /** @type {?} */
    ControlComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype.blurred;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype.innervalue;
    /** @type {?} */
    ControlComponent.prototype.reveal;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUF5QyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFXN0MsTUFBTSxPQUFPLGdCQUFnQjs7OztJQVU1QixZQUNTLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFINUIsV0FBTSxHQUF5QixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztRQThDMUMsYUFBUSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFL0IsY0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQTVDMUIsQ0FBQzs7OztJQUVMLElBQUksVUFBVTtRQUNiLG1FQUFtRTtRQUNuRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7OztJQUkvQyxpQkFBaUI7UUFDaEIsNEVBQTRFO1FBQzVFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBTTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBTTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3Qiw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RSw0REFBNEQ7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBTTtRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3Qiw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RSwyREFBMkQ7UUFDM0Q7Ozs7VUFJRTtJQUNILENBQUM7Ozs7OztJQU1PLFdBQVcsQ0FBQyxLQUFVO1FBQzdCLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RCw2REFBNkQ7SUFDOUQsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLEtBQVU7OztjQUV0QixNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVU7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLDREQUE0RDtJQUM3RCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsNkRBQTZEO0lBQzlELENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbkMsNENBQTRDO1FBQzVDOzs7Ozs7O1VBT0U7SUFDSCxDQUFDOzs7WUF2R0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixzNklBQXVDO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQzt3QkFDWCxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3dCQUMvQyxLQUFLLEVBQUUsSUFBSTtxQkFDWCxDQUFDO2FBQ0Y7Ozs7WUFac0MsU0FBUzs7O3NCQWM5QyxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixtQ0FBbUM7O0lBQ25DLGdDQUF5Qjs7Ozs7SUFFekIsbUNBQXFCOzs7OztJQUNyQixtQ0FBeUI7Ozs7O0lBQ3pCLHNDQUF3Qjs7SUFFeEIsa0NBQWtEOzs7OztJQThDbEQsb0NBQXVDOzs7OztJQUV2QyxxQ0FBOEI7Ozs7O0lBN0M3QixvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Hcm91cCwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sQmFzZSB9IGZyb20gJy4vY29udHJvbC1iYXNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29yZS1jb250cm9sJyxcblx0dGVtcGxhdGVVcmw6ICcuL2NvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuXHRwcm92aWRlcnM6IFt7XG5cdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29udHJvbENvbXBvbmVudCksXG5cdFx0bXVsdGk6IHRydWUsXG5cdH1dLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXHRASW5wdXQoKSBjb250cm9sOiBDb250cm9sQmFzZTxhbnk+O1xuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG5cblx0cHJpdmF0ZSBlbGVtZW50OiBhbnk7XG5cdHByaXZhdGUgYmx1cnJlZDogYm9vbGVhbjtcblx0cHJpdmF0ZSBpbm5lcnZhbHVlOiBhbnk7XG5cblx0cmV2ZWFsOiB7IGNoZWNrZWQ6IGJvb2xlYW4gfSA9IHsgY2hlY2tlZDogZmFsc2UgfTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcblx0KSB7IH1cblxuXHRnZXQgY29udHJvbFJlZigpOiBBYnN0cmFjdENvbnRyb2wge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdjb250cm9sUmVmJywgdGhpcy5jb250cm9sLmtleSwgdGhpcy5mb3JtLmNvbnRyb2xzKTtcblx0XHRyZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldO1xuXHR9XG5cblx0Z2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmNvbnRyb2xSZWYudmFsaWQ7IH1cblxuXHQvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxuXG5cdGdldEZvcm1hdHRlZFZhbHVlKCk6IGFueSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xDb21wb25lbnQuZ2V0Rm9ybWF0dGVkVmFsdWUnLCB0aGlzLmNvbnRyb2xSZWYudmFsdWUpO1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xSZWYudmFsdWU7XG5cdH1cblxuXHRvbklucHV0KCRldmVudCk6IHZvaWQge1xuXHRcdHRoaXMuZWxlbWVudCA9ICRldmVudC50YXJnZXQ7XG5cdFx0dGhpcy5vbkNoYW5nZSh0aGlzLmVsZW1lbnQudmFsdWUpO1xuXHR9XG5cblx0b25Gb2N1cygkZXZlbnQpOiB2b2lkIHtcblx0XHR0aGlzLmJsdXJyZWQgPSBmYWxzZTtcblx0XHR0aGlzLmVsZW1lbnQgPSAkZXZlbnQudGFyZ2V0O1xuXHRcdC8vIHRoaXMuZWxlbWVudC52YWx1ZSA9IHRoaXMuY29udHJvbFJlZi52YWx1ZTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudCwgJ3ZhbHVlJywgdGhpcy5jb250cm9sUmVmLnZhbHVlKTtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbENvbXBvbmVudC5vbkZvY3VzJywgdGhpcy5jb250cm9sUmVmKTtcblx0fVxuXG5cdG9uQmx1cigkZXZlbnQpOiB2b2lkIHtcblx0XHR0aGlzLmJsdXJyZWQgPSB0cnVlO1xuXHRcdHRoaXMuZWxlbWVudCA9ICRldmVudC50YXJnZXQ7XG5cdFx0Ly8gdGhpcy5lbGVtZW50LnZhbHVlID0gdGhpcy5jb250cm9sUmVmLnZhbHVlO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50LCAndmFsdWUnLCB0aGlzLmNvbnRyb2xSZWYudmFsdWUpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQ29tcG9uZW50Lm9uQmx1cicsIHRoaXMuY29udHJvbFJlZik7XG5cdFx0Lypcblx0XHRpZiAodGhpcy5pbm5lcnZhbHVlKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2wucGF0Y2hWYWx1ZSh0aGlzLmlubmVydmFsdWUgKyAnIEgnLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cdFx0fVxuXHRcdCovXG5cdH1cblxuXHRwcml2YXRlIG9uQ2hhbmdlID0gKHZhbHVlOiBhbnkpID0+IHsgfTtcblxuXHRwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuXHRwcml2YXRlIGZvcm1hdFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbENvbXBvbmVudC5mb3JtYXRWYWx1ZScsIHZhbHVlKTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sRWRpdGFibGVDb21wb25lbnQud3JpdGVWYWx1ZScsIHZhbHVlKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VWYWx1ZSh2YWx1ZTogYW55KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xDb21wb25lbnQucGFyc2VWYWx1ZScsIHZhbHVlKTtcblx0XHRjb25zdCBwYXJzZWQgPSB0aGlzLmlubmVydmFsdWU7XG5cdFx0dGhpcy5vbkNoYW5nZShwYXJzZWQpO1xuXHR9XG5cblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSk7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xFZGl0YWJsZUNvbXBvbmVudC5yZWdpc3Rlck9uQ2hhbmdlJyk7XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEVkaXRhYmxlQ29tcG9uZW50LnJlZ2lzdGVyT25Ub3VjaGVkJyk7XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHQvLyBjb25zdCBub2RlID0gdGhpcy50ZXh0YXJlYS5uYXRpdmVFbGVtZW50O1xuXHRcdC8qXG5cdFx0aWYgKGlzRGlzYWJsZWQpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlZCcpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEVkaXRhYmxlQ29tcG9uZW50LnNldERpc2FibGVkU3RhdGUnLCBpc0Rpc2FibGVkKTtcblx0XHQqL1xuXHR9XG5cbn1cbiJdfQ==