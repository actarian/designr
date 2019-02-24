/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBase } from './control-base';
var ControlComponent = /** @class */ (function () {
    function ControlComponent(renderer) {
        this.renderer = renderer;
        this.reveal = { checked: false };
        this.onChange = function (value) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(ControlComponent.prototype, "controlRef", {
        get: /**
         * @return {?}
         */
        function () {
            // console.log('controlRef', this.control.key, this.form.controls);
            return this.form.controls[this.control.key];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.controlRef.valid; },
        enumerable: true,
        configurable: true
    });
    // ControlValueAccessor
    // ControlValueAccessor
    /**
     * @return {?}
     */
    ControlComponent.prototype.getFormattedValue = 
    // ControlValueAccessor
    /**
     * @return {?}
     */
    function () {
        // console.log('ControlComponent.getFormattedValue', this.controlRef.value);
        return this.controlRef.value;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ControlComponent.prototype.onInput = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.element = $event.target;
        this.onChange(this.element.value);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ControlComponent.prototype.onFocus = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.blurred = false;
        this.element = $event.target;
        // this.element.value = this.controlRef.value;
        this.renderer.setProperty(this.element, 'value', this.controlRef.value);
        // console.log('ControlComponent.onFocus', this.controlRef);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ControlComponent.prototype.onBlur = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
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
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ControlComponent.prototype.formatValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // console.log('ControlComponent.formatValue', value);
        this.renderer.setProperty(this.element, 'value', value);
        // console.log('ControlEditableComponent.writeValue', value);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ControlComponent.prototype.parseValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // console.log('ControlComponent.parseValue', value);
        /** @type {?} */
        var parsed = this.innervalue;
        this.onChange(parsed);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ControlComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.formatValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ControlComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
        // console.log('ControlEditableComponent.registerOnChange');
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ControlComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
        // console.log('ControlEditableComponent.registerOnTouched');
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ControlComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        // const node = this.textarea.nativeElement;
        /*
        if (isDisabled) {
            this.renderer.addClass(this.element, 'disabled');
        } else {
            this.renderer.removeClass(this.element, 'disabled');
        }
        // console.log('ControlEditableComponent.setDisabledState', isDisabled);
        */
    };
    ControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'core-control',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-container [ngSwitch]=\"control.schema\">\r\n\t\t<ng-container *ngSwitchCase=\"'checkbox'\">\r\n\t\t\t<!-- CHECKBOX -->\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t\t<span>{{ control.label | label }}</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'email'\">\r\n\t\t\t<!-- EMAIL -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'number'\">\r\n\t\t\t<!-- NUMBER -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [type]=\"control.type\" [attr.step]=\"control.step\" (input)=\"onInput($event)\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [value]=\"getFormattedValue()\">\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'password'\">\r\n\t\t\t<!-- PASSWORD -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<input placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\" #password>\r\n\t\t\t\t<div class=\"input-group-append\" *ngIf=\"control.type === 'password'\">\r\n\t\t\t\t\t<div class=\"input-group-text\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" [attr.aria-label]=\"control.label | label\" (input)=\"password.type = reveal.checked ? 'text' : control.type\" #password>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'radio'\">\r\n\t\t\t<!-- RADIO -->\r\n\t\t\t<div class=\"radio\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"radio\" class=\"form-radio-input\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t\t<span>{{ control.label | label }}</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'select'\">\r\n\t\t\t<!-- SELECT -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<select class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t<option *ngFor=\"let opt of control.options\" [value]=\"opt.key\">{{opt.value}}</option>\r\n\t\t\t</select>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'markdown'\">\r\n\t\t\t<!-- MARKDOWN -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<textarea placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" rows=\"4\"></textarea>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'text'\">\r\n\t\t\t<!-- TEXT -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\t<div *ngIf=\"controlRef.invalid && (controlRef.dirty || controlRef.touched)\" class=\"alert alert--danger\">\r\n\t\t<div *ngIf=\"controlRef.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.requiredTrue\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.min\">{{ 'errors.min' | label : null : { min: control.min } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.max\">{{ 'errors.max' | label : null : { max: control.max } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.email\">{{ 'errors.email' | label }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.minLength\">{{ 'errors.minLength' | label : null : { minLength: control.minLength } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.maxLength\">{{ 'errors.maxLength' | label : null : { maxLength: control.maxLength } }}</div>\r\n\t\t<!-- <div *ngIf=\"controlRef.errors.pattern\">{{ 'errors.pattern' | label }}</div> -->\r\n\t\t<div *ngIf=\"controlRef.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t</div>\r\n</ng-container>\r\n",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return ControlComponent; }),
                            multi: true,
                        }]
                }] }
    ];
    /** @nocollapse */
    ControlComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    ControlComponent.propDecorators = {
        control: [{ type: Input }],
        form: [{ type: Input }]
    };
    return ControlComponent;
}());
export { ControlComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUF5QyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFtQkMsMEJBQ1MsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUg1QixXQUFNLEdBQXlCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBOEMxQyxhQUFRLEdBQUcsVUFBQyxLQUFVLElBQU8sQ0FBQyxDQUFDO1FBRS9CLGNBQVMsR0FBRyxjQUFRLENBQUMsQ0FBQztJQTVDMUIsQ0FBQztJQUVMLHNCQUFJLHdDQUFVOzs7O1FBQWQ7WUFDQyxtRUFBbUU7WUFDbkUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQU87Ozs7UUFBWCxjQUFnQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFL0MsdUJBQXVCOzs7OztJQUV2Qiw0Q0FBaUI7Ozs7O0lBQWpCO1FBQ0MsNEVBQTRFO1FBQzVFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxrQ0FBTzs7OztJQUFQLFVBQVEsTUFBTTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxrQ0FBTzs7OztJQUFQLFVBQVEsTUFBTTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3Qiw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RSw0REFBNEQ7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxpQ0FBTTs7OztJQUFOLFVBQU8sTUFBTTtRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3Qiw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RSwyREFBMkQ7UUFDM0Q7Ozs7VUFJRTtJQUNILENBQUM7Ozs7OztJQU1PLHNDQUFXOzs7OztJQUFuQixVQUFvQixLQUFVO1FBQzdCLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RCw2REFBNkQ7SUFDOUQsQ0FBQzs7Ozs7O0lBRU8scUNBQVU7Ozs7O0lBQWxCLFVBQW1CLEtBQVU7OztZQUV0QixNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVU7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHFDQUFVOzs7O0lBQVYsVUFBVyxLQUFVO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCwyQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQiw0REFBNEQ7SUFDN0QsQ0FBQzs7Ozs7SUFFRCw0Q0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQiw2REFBNkQ7SUFDOUQsQ0FBQzs7Ozs7SUFFRCwyQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbkMsNENBQTRDO1FBQzVDOzs7Ozs7O1VBT0U7SUFDSCxDQUFDOztnQkF2R0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxjQUFjO29CQUN4QixzNklBQXVDO29CQUN2QyxTQUFTLEVBQUUsQ0FBQzs0QkFDWCxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsQ0FBQzs0QkFDL0MsS0FBSyxFQUFFLElBQUk7eUJBQ1gsQ0FBQztpQkFDRjs7OztnQkFac0MsU0FBUzs7OzBCQWM5QyxLQUFLO3VCQUNMLEtBQUs7O0lBOEZQLHVCQUFDO0NBQUEsQUF6R0QsSUF5R0M7U0FoR1ksZ0JBQWdCOzs7SUFDNUIsbUNBQW1DOztJQUNuQyxnQ0FBeUI7Ozs7O0lBRXpCLG1DQUFxQjs7Ozs7SUFDckIsbUNBQXlCOzs7OztJQUN6QixzQ0FBd0I7O0lBRXhCLGtDQUFrRDs7Ozs7SUE4Q2xELG9DQUF1Qzs7Ozs7SUFFdkMscUNBQThCOzs7OztJQTdDN0Isb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtR3JvdXAsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29udHJvbEJhc2UgfSBmcm9tICcuL2NvbnRyb2wtYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtY29udHJvbCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9jb250cm9sLmNvbXBvbmVudC5odG1sJyxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbnRyb2xDb21wb25lbnQpLFxuXHRcdG11bHRpOiB0cnVlLFxuXHR9XSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QElucHV0KCkgY29udHJvbDogQ29udHJvbEJhc2U8YW55Pjtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXG5cdHByaXZhdGUgZWxlbWVudDogYW55O1xuXHRwcml2YXRlIGJsdXJyZWQ6IGJvb2xlYW47XG5cdHByaXZhdGUgaW5uZXJ2YWx1ZTogYW55O1xuXG5cdHJldmVhbDogeyBjaGVja2VkOiBib29sZWFuIH0gPSB7IGNoZWNrZWQ6IGZhbHNlIH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG5cdCkgeyB9XG5cblx0Z2V0IGNvbnRyb2xSZWYoKTogQWJzdHJhY3RDb250cm9sIHtcblx0XHQvLyBjb25zb2xlLmxvZygnY29udHJvbFJlZicsIHRoaXMuY29udHJvbC5rZXksIHRoaXMuZm9ybS5jb250cm9scyk7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XTtcblx0fVxuXG5cdGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5jb250cm9sUmVmLnZhbGlkOyB9XG5cblx0Ly8gQ29udHJvbFZhbHVlQWNjZXNzb3JcblxuXHRnZXRGb3JtYXR0ZWRWYWx1ZSgpOiBhbnkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQ29tcG9uZW50LmdldEZvcm1hdHRlZFZhbHVlJywgdGhpcy5jb250cm9sUmVmLnZhbHVlKTtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9sUmVmLnZhbHVlO1xuXHR9XG5cblx0b25JbnB1dCgkZXZlbnQpOiB2b2lkIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkZXZlbnQudGFyZ2V0O1xuXHRcdHRoaXMub25DaGFuZ2UodGhpcy5lbGVtZW50LnZhbHVlKTtcblx0fVxuXG5cdG9uRm9jdXMoJGV2ZW50KTogdm9pZCB7XG5cdFx0dGhpcy5ibHVycmVkID0gZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50ID0gJGV2ZW50LnRhcmdldDtcblx0XHQvLyB0aGlzLmVsZW1lbnQudmFsdWUgPSB0aGlzLmNvbnRyb2xSZWYudmFsdWU7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsICd2YWx1ZScsIHRoaXMuY29udHJvbFJlZi52YWx1ZSk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xDb21wb25lbnQub25Gb2N1cycsIHRoaXMuY29udHJvbFJlZik7XG5cdH1cblxuXHRvbkJsdXIoJGV2ZW50KTogdm9pZCB7XG5cdFx0dGhpcy5ibHVycmVkID0gdHJ1ZTtcblx0XHR0aGlzLmVsZW1lbnQgPSAkZXZlbnQudGFyZ2V0O1xuXHRcdC8vIHRoaXMuZWxlbWVudC52YWx1ZSA9IHRoaXMuY29udHJvbFJlZi52YWx1ZTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudCwgJ3ZhbHVlJywgdGhpcy5jb250cm9sUmVmLnZhbHVlKTtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbENvbXBvbmVudC5vbkJsdXInLCB0aGlzLmNvbnRyb2xSZWYpO1xuXHRcdC8qXG5cdFx0aWYgKHRoaXMuaW5uZXJ2YWx1ZSkge1xuXHRcdFx0dGhpcy5jb250cm9sLnBhdGNoVmFsdWUodGhpcy5pbm5lcnZhbHVlICsgJyBIJywgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuXHRcdH1cblx0XHQqL1xuXHR9XG5cblx0cHJpdmF0ZSBvbkNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7IH07XG5cblx0cHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cblx0cHJpdmF0ZSBmb3JtYXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xDb21wb25lbnQuZm9ybWF0VmFsdWUnLCB2YWx1ZSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsICd2YWx1ZScsIHZhbHVlKTtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEVkaXRhYmxlQ29tcG9uZW50LndyaXRlVmFsdWUnLCB2YWx1ZSk7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlVmFsdWUodmFsdWU6IGFueSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQ29tcG9uZW50LnBhcnNlVmFsdWUnLCB2YWx1ZSk7XG5cdFx0Y29uc3QgcGFyc2VkID0gdGhpcy5pbm5lcnZhbHVlO1xuXHRcdHRoaXMub25DaGFuZ2UocGFyc2VkKTtcblx0fVxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sRWRpdGFibGVDb21wb25lbnQucmVnaXN0ZXJPbkNoYW5nZScpO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xFZGl0YWJsZUNvbXBvbmVudC5yZWdpc3Rlck9uVG91Y2hlZCcpO1xuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0Ly8gY29uc3Qgbm9kZSA9IHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudDtcblx0XHQvKlxuXHRcdGlmIChpc0Rpc2FibGVkKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZWQnKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xFZGl0YWJsZUNvbXBvbmVudC5zZXREaXNhYmxlZFN0YXRlJywgaXNEaXNhYmxlZCk7XG5cdFx0Ki9cblx0fVxuXG59XG4iXX0=