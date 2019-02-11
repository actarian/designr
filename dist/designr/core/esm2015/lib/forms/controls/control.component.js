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
                template: "<ng-container [ngSwitch]=\"control.schema\">\r\n\t<ng-container *ngSwitchCase=\"'checkbox'\">\r\n\t\t<b>Checkbox</b><br>\r\n\t</ng-container>\r\n\t<ng-container *ngSwitchCase=\"'email'\">\r\n\t\t<b>Email</b><br>\r\n\t</ng-container>\r\n\t<ng-container *ngSwitchCase=\"'number'\">\r\n\t\t<b>Number</b><br>\r\n\t</ng-container>\r\n\t<ng-container *ngSwitchCase=\"'password'\">\r\n\t\t<b>Password</b><br>\r\n\t</ng-container>\r\n</ng-container>\r\n<div class=\"form-group\" [formGroup]=\"form\">\r\n\t<div [ngSwitch]=\"control.schema\">\r\n\t\t<div *ngSwitchCase=\"'checkbox'\" class=\"form-group\">\r\n\t\t\t<!-- CHECKBOX -->\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t\t<span>{{ control.label | translate }}</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'email'\">\r\n\t\t\t<!-- EMAIL -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'number'\">\r\n\t\t\t<!-- NUMBER -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [type]=\"control.type\" [attr.step]=\"control.step\" (input)=\"onInput($event)\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [value]=\"getFormattedValue()\">\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'password'\">\r\n\t\t\t<!-- PASSWORD -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\" #password>\r\n\t\t\t\t<div class=\"input-group-append\" *ngIf=\"control.type === 'password'\">\r\n\t\t\t\t\t<div class=\"input-group-text\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" [attr.aria-label]=\"control.label | translate\" (input)=\"password.type = reveal.checked ? 'text' : control.type\" #password>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'radio'\" class=\"form-group\">\r\n\t\t\t<!-- RADIO -->\r\n\t\t\t<div class=\"radio\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"radio\" class=\"form-radio-input\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t\t<span>{{ control.label | translate }}</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'select'\">\r\n\t\t\t<!-- SELECT -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<select class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t<option *ngFor=\"let opt of control.options\" [value]=\"opt.key\">{{opt.value}}</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'markdown'\">\r\n\t\t\t<!-- MARKDOWN -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<textarea placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" rows=\"4\"></textarea>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'text'\">\r\n\t\t\t<!-- TEXT -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"controlRef.invalid && (controlRef.dirty || controlRef.touched)\" class=\"alert alert-danger\">\r\n\t\t<div *ngIf=\"controlRef.errors.required\">{{ 'errors.required' | translate }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.requiredTrue\">{{ 'errors.required' | translate }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.min\">{{ 'errors.min' | translate : { value: control.min } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.max\">{{ 'errors.max' | translate : { value: control.max } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.email\">{{ 'errors.email' | translate }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.minLength\">{{ 'errors.minLength' | translate : { value: control.minLength } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.maxLength\">{{ 'errors.maxLength' | translate : { value: control.maxLength } }}</div>\r\n\t\t<!-- <div *ngIf=\"controlRef.errors.pattern\">{{ 'errors.pattern' | translate }}</div> -->\r\n\t\t<div *ngIf=\"controlRef.errors.match\">{{ 'errors.match' | translate }}</div>\r\n\t</div>\r\n</div>\r\n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ControlComponent),
                        multi: true,
                    }],
                styles: ["label{color:#55555a;font-weight:700;font-size:12px}.form-control{border-radius:0;background:#fff;color:#55555a;border:1px solid rgba(85,85,90,.1);font-size:16px;border-left:2px solid rgba(85,85,90,.2);display:block;width:100%;padding:8px;box-sizing:border-box;margin-bottom:10px}.form-control:hover{border-left-color:rgba(85,85,90,.8)}.form-control:active,.form-control:focus{background:rgba(0,0,0,.15);border-left-color:rgba(85,85,90,.8);outline:0;box-shadow:none}textarea.form-control{resize:none;overflow-x:hidden;overflow-y:auto}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2Zvcm1zL2NvbnRyb2xzL2NvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBeUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBWTdDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFVNUIsWUFDUyxRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSDVCLFdBQU0sR0FBeUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7UUE4QzFDLGFBQVEsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLGNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUE1QzFCLENBQUM7Ozs7SUFFTCxJQUFJLFVBQVU7UUFDYixtRUFBbUU7UUFDbkUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFJL0MsaUJBQWlCO1FBQ2hCLDRFQUE0RTtRQUM1RSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQU07UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQU07UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsOENBQThDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsNERBQTREO0lBQzdELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQU07UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsOENBQThDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsMkRBQTJEO1FBQzNEOzs7O1VBSUU7SUFDSCxDQUFDOzs7Ozs7SUFNTyxXQUFXLENBQUMsS0FBVTtRQUM3QixzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEQsNkRBQTZEO0lBQzlELENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxLQUFVOzs7Y0FFdEIsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQiw0REFBNEQ7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLDZEQUE2RDtJQUM5RCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ25DLDRDQUE0QztRQUM1Qzs7Ozs7OztVQU9FO0lBQ0gsQ0FBQzs7O1lBeEdELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsY0FBYztnQkFDeEIseXlKQUF1QztnQkFFdkMsU0FBUyxFQUFFLENBQUM7d0JBQ1gsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDL0MsS0FBSyxFQUFFLElBQUk7cUJBQ1gsQ0FBQzs7YUFDRjs7OztZQWJzQyxTQUFTOzs7c0JBZTlDLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLG1DQUFtQzs7SUFDbkMsZ0NBQXlCOzs7OztJQUV6QixtQ0FBcUI7Ozs7O0lBQ3JCLG1DQUF5Qjs7Ozs7SUFDekIsc0NBQXdCOztJQUV4QixrQ0FBa0Q7Ozs7O0lBOENsRCxvQ0FBdUM7Ozs7O0lBRXZDLHFDQUE4Qjs7Ozs7SUE3QzdCLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUdyb3VwLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xCYXNlIH0gZnJvbSAnLi9jb250cm9sLWJhc2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb3JlLWNvbnRyb2wnLFxuXHR0ZW1wbGF0ZVVybDogJy4vY29udHJvbC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2NvbnRyb2wuY29tcG9uZW50LnNjc3MnXSxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbnRyb2xDb21wb25lbnQpLFxuXHRcdG11bHRpOiB0cnVlLFxuXHR9XSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QElucHV0KCkgY29udHJvbDogQ29udHJvbEJhc2U8YW55Pjtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXG5cdHByaXZhdGUgZWxlbWVudDogYW55O1xuXHRwcml2YXRlIGJsdXJyZWQ6IGJvb2xlYW47XG5cdHByaXZhdGUgaW5uZXJ2YWx1ZTogYW55O1xuXG5cdHJldmVhbDogeyBjaGVja2VkOiBib29sZWFuIH0gPSB7IGNoZWNrZWQ6IGZhbHNlIH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG5cdCkgeyB9XG5cblx0Z2V0IGNvbnRyb2xSZWYoKTogQWJzdHJhY3RDb250cm9sIHtcblx0XHQvLyBjb25zb2xlLmxvZygnY29udHJvbFJlZicsIHRoaXMuY29udHJvbC5rZXksIHRoaXMuZm9ybS5jb250cm9scyk7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XTtcblx0fVxuXG5cdGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5jb250cm9sUmVmLnZhbGlkOyB9XG5cblx0Ly8gQ29udHJvbFZhbHVlQWNjZXNzb3JcblxuXHRnZXRGb3JtYXR0ZWRWYWx1ZSgpOiBhbnkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQ29tcG9uZW50LmdldEZvcm1hdHRlZFZhbHVlJywgdGhpcy5jb250cm9sUmVmLnZhbHVlKTtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9sUmVmLnZhbHVlO1xuXHR9XG5cblx0b25JbnB1dCgkZXZlbnQpOiB2b2lkIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkZXZlbnQudGFyZ2V0O1xuXHRcdHRoaXMub25DaGFuZ2UodGhpcy5lbGVtZW50LnZhbHVlKTtcblx0fVxuXG5cdG9uRm9jdXMoJGV2ZW50KTogdm9pZCB7XG5cdFx0dGhpcy5ibHVycmVkID0gZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50ID0gJGV2ZW50LnRhcmdldDtcblx0XHQvLyB0aGlzLmVsZW1lbnQudmFsdWUgPSB0aGlzLmNvbnRyb2xSZWYudmFsdWU7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsICd2YWx1ZScsIHRoaXMuY29udHJvbFJlZi52YWx1ZSk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xDb21wb25lbnQub25Gb2N1cycsIHRoaXMuY29udHJvbFJlZik7XG5cdH1cblxuXHRvbkJsdXIoJGV2ZW50KTogdm9pZCB7XG5cdFx0dGhpcy5ibHVycmVkID0gdHJ1ZTtcblx0XHR0aGlzLmVsZW1lbnQgPSAkZXZlbnQudGFyZ2V0O1xuXHRcdC8vIHRoaXMuZWxlbWVudC52YWx1ZSA9IHRoaXMuY29udHJvbFJlZi52YWx1ZTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudCwgJ3ZhbHVlJywgdGhpcy5jb250cm9sUmVmLnZhbHVlKTtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbENvbXBvbmVudC5vbkJsdXInLCB0aGlzLmNvbnRyb2xSZWYpO1xuXHRcdC8qXG5cdFx0aWYgKHRoaXMuaW5uZXJ2YWx1ZSkge1xuXHRcdFx0dGhpcy5jb250cm9sLnBhdGNoVmFsdWUodGhpcy5pbm5lcnZhbHVlICsgJyBIJywgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuXHRcdH1cblx0XHQqL1xuXHR9XG5cblx0cHJpdmF0ZSBvbkNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7IH07XG5cblx0cHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cblx0cHJpdmF0ZSBmb3JtYXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xDb21wb25lbnQuZm9ybWF0VmFsdWUnLCB2YWx1ZSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsICd2YWx1ZScsIHZhbHVlKTtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEVkaXRhYmxlQ29tcG9uZW50LndyaXRlVmFsdWUnLCB2YWx1ZSk7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlVmFsdWUodmFsdWU6IGFueSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQ29tcG9uZW50LnBhcnNlVmFsdWUnLCB2YWx1ZSk7XG5cdFx0Y29uc3QgcGFyc2VkID0gdGhpcy5pbm5lcnZhbHVlO1xuXHRcdHRoaXMub25DaGFuZ2UocGFyc2VkKTtcblx0fVxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sRWRpdGFibGVDb21wb25lbnQucmVnaXN0ZXJPbkNoYW5nZScpO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xFZGl0YWJsZUNvbXBvbmVudC5yZWdpc3Rlck9uVG91Y2hlZCcpO1xuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0Ly8gY29uc3Qgbm9kZSA9IHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudDtcblx0XHQvKlxuXHRcdGlmIChpc0Rpc2FibGVkKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZWQnKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xFZGl0YWJsZUNvbXBvbmVudC5zZXREaXNhYmxlZFN0YXRlJywgaXNEaXNhYmxlZCk7XG5cdFx0Ki9cblx0fVxuXG59XG4iXX0=