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
                    template: "<ng-container [ngSwitch]=\"control.schema\">\r\n\t<ng-container *ngSwitchCase=\"'checkbox'\">\r\n\t\t<b>Checkbox</b><br>\r\n\t</ng-container>\r\n\t<ng-container *ngSwitchCase=\"'email'\">\r\n\t\t<b>Email</b><br>\r\n\t</ng-container>\r\n\t<ng-container *ngSwitchCase=\"'number'\">\r\n\t\t<b>Number</b><br>\r\n\t</ng-container>\r\n\t<ng-container *ngSwitchCase=\"'password'\">\r\n\t\t<b>Password</b><br>\r\n\t</ng-container>\r\n</ng-container>\r\n<div class=\"form-group\" [formGroup]=\"form\">\r\n\t<div [ngSwitch]=\"control.schema\">\r\n\t\t<div *ngSwitchCase=\"'checkbox'\" class=\"form-group\">\r\n\t\t\t<!-- CHECKBOX -->\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t\t<span>{{ control.label | translate }}</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'email'\">\r\n\t\t\t<!-- EMAIL -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'number'\">\r\n\t\t\t<!-- NUMBER -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [type]=\"control.type\" [attr.step]=\"control.step\" (input)=\"onInput($event)\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [value]=\"getFormattedValue()\">\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'password'\">\r\n\t\t\t<!-- PASSWORD -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\" #password>\r\n\t\t\t\t<div class=\"input-group-append\" *ngIf=\"control.type === 'password'\">\r\n\t\t\t\t\t<div class=\"input-group-text\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" [attr.aria-label]=\"control.label | translate\" (input)=\"password.type = reveal.checked ? 'text' : control.type\" #password>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'radio'\" class=\"form-group\">\r\n\t\t\t<!-- RADIO -->\r\n\t\t\t<div class=\"radio\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"radio\" class=\"form-radio-input\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t\t<span>{{ control.label | translate }}</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'select'\">\r\n\t\t\t<!-- SELECT -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<select class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t<option *ngFor=\"let opt of control.options\" [value]=\"opt.key\">{{opt.value}}</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'markdown'\">\r\n\t\t\t<!-- MARKDOWN -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<textarea placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" rows=\"4\"></textarea>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'text'\">\r\n\t\t\t<!-- TEXT -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"controlRef.invalid && (controlRef.dirty || controlRef.touched)\" class=\"alert alert-danger\">\r\n\t\t<div *ngIf=\"controlRef.errors.required\">{{ 'errors.required' | translate }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.requiredTrue\">{{ 'errors.required' | translate }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.min\">{{ 'errors.min' | translate : { value: control.min } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.max\">{{ 'errors.max' | translate : { value: control.max } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.email\">{{ 'errors.email' | translate }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.minLength\">{{ 'errors.minLength' | translate : { value: control.minLength } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.maxLength\">{{ 'errors.maxLength' | translate : { value: control.maxLength } }}</div>\r\n\t\t<!-- <div *ngIf=\"controlRef.errors.pattern\">{{ 'errors.pattern' | translate }}</div> -->\r\n\t\t<div *ngIf=\"controlRef.errors.match\">{{ 'errors.match' | translate }}</div>\r\n\t</div>\r\n</div>\r\n",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return ControlComponent; }),
                            multi: true,
                        }],
                    styles: ["label{color:#55555a;font-weight:700;font-size:12px}.form-control{border-radius:0;background:#fff;color:#55555a;border:1px solid rgba(85,85,90,.1);font-size:16px;border-left:2px solid rgba(85,85,90,.2);display:block;width:100%;padding:8px;box-sizing:border-box;margin-bottom:10px}.form-control:hover{border-left-color:rgba(85,85,90,.8)}.form-control:active,.form-control:focus{background:rgba(0,0,0,.15);border-left-color:rgba(85,85,90,.8);outline:0;box-shadow:none}textarea.form-control{resize:none;overflow-x:hidden;overflow-y:auto}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2Zvcm1zL2NvbnRyb2xzL2NvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBeUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDO0lBb0JDLDBCQUNTLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFINUIsV0FBTSxHQUF5QixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztRQThDMUMsYUFBUSxHQUFHLFVBQUMsS0FBVSxJQUFPLENBQUMsQ0FBQztRQUUvQixjQUFTLEdBQUcsY0FBUSxDQUFDLENBQUM7SUE1QzFCLENBQUM7SUFFTCxzQkFBSSx3Q0FBVTs7OztRQUFkO1lBQ0MsbUVBQW1FO1lBQ25FLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRS9DLHVCQUF1Qjs7Ozs7SUFFdkIsNENBQWlCOzs7OztJQUFqQjtRQUNDLDRFQUE0RTtRQUM1RSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsa0NBQU87Ozs7SUFBUCxVQUFRLE1BQU07UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsa0NBQU87Ozs7SUFBUCxVQUFRLE1BQU07UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsOENBQThDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsNERBQTREO0lBQzdELENBQUM7Ozs7O0lBRUQsaUNBQU07Ozs7SUFBTixVQUFPLE1BQU07UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsOENBQThDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsMkRBQTJEO1FBQzNEOzs7O1VBSUU7SUFDSCxDQUFDOzs7Ozs7SUFNTyxzQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsS0FBVTtRQUM3QixzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEQsNkRBQTZEO0lBQzlELENBQUM7Ozs7OztJQUVPLHFDQUFVOzs7OztJQUFsQixVQUFtQixLQUFVOzs7WUFFdEIsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxxQ0FBVTs7OztJQUFWLFVBQVcsS0FBVTtRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsMkNBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQU87UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsNERBQTREO0lBQzdELENBQUM7Ozs7O0lBRUQsNENBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU87UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsNkRBQTZEO0lBQzlELENBQUM7Ozs7O0lBRUQsMkNBQWdCOzs7O0lBQWhCLFVBQWlCLFVBQW1CO1FBQ25DLDRDQUE0QztRQUM1Qzs7Ozs7OztVQU9FO0lBQ0gsQ0FBQzs7Z0JBeEdELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsY0FBYztvQkFDeEIseXlKQUF1QztvQkFFdkMsU0FBUyxFQUFFLENBQUM7NEJBQ1gsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUM7NEJBQy9DLEtBQUssRUFBRSxJQUFJO3lCQUNYLENBQUM7O2lCQUNGOzs7O2dCQWJzQyxTQUFTOzs7MEJBZTlDLEtBQUs7dUJBQ0wsS0FBSzs7SUE4RlAsdUJBQUM7Q0FBQSxBQTFHRCxJQTBHQztTQWhHWSxnQkFBZ0I7OztJQUM1QixtQ0FBbUM7O0lBQ25DLGdDQUF5Qjs7Ozs7SUFFekIsbUNBQXFCOzs7OztJQUNyQixtQ0FBeUI7Ozs7O0lBQ3pCLHNDQUF3Qjs7SUFFeEIsa0NBQWtEOzs7OztJQThDbEQsb0NBQXVDOzs7OztJQUV2QyxxQ0FBOEI7Ozs7O0lBN0M3QixvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Hcm91cCwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sQmFzZSB9IGZyb20gJy4vY29udHJvbC1iYXNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29yZS1jb250cm9sJyxcblx0dGVtcGxhdGVVcmw6ICcuL2NvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9jb250cm9sLmNvbXBvbmVudC5zY3NzJ10sXG5cdHByb3ZpZGVyczogW3tcblx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDb250cm9sQ29tcG9uZW50KSxcblx0XHRtdWx0aTogdHJ1ZSxcblx0fV0sXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cdEBJbnB1dCgpIGNvbnRyb2w6IENvbnRyb2xCYXNlPGFueT47XG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcblxuXHRwcml2YXRlIGVsZW1lbnQ6IGFueTtcblx0cHJpdmF0ZSBibHVycmVkOiBib29sZWFuO1xuXHRwcml2YXRlIGlubmVydmFsdWU6IGFueTtcblxuXHRyZXZlYWw6IHsgY2hlY2tlZDogYm9vbGVhbiB9ID0geyBjaGVja2VkOiBmYWxzZSB9O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuXHQpIHsgfVxuXG5cdGdldCBjb250cm9sUmVmKCk6IEFic3RyYWN0Q29udHJvbCB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2NvbnRyb2xSZWYnLCB0aGlzLmNvbnRyb2wua2V5LCB0aGlzLmZvcm0uY29udHJvbHMpO1xuXHRcdHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV07XG5cdH1cblxuXHRnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuY29udHJvbFJlZi52YWxpZDsgfVxuXG5cdC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG5cblx0Z2V0Rm9ybWF0dGVkVmFsdWUoKTogYW55IHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbENvbXBvbmVudC5nZXRGb3JtYXR0ZWRWYWx1ZScsIHRoaXMuY29udHJvbFJlZi52YWx1ZSk7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbFJlZi52YWx1ZTtcblx0fVxuXG5cdG9uSW5wdXQoJGV2ZW50KTogdm9pZCB7XG5cdFx0dGhpcy5lbGVtZW50ID0gJGV2ZW50LnRhcmdldDtcblx0XHR0aGlzLm9uQ2hhbmdlKHRoaXMuZWxlbWVudC52YWx1ZSk7XG5cdH1cblxuXHRvbkZvY3VzKCRldmVudCk6IHZvaWQge1xuXHRcdHRoaXMuYmx1cnJlZCA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudCA9ICRldmVudC50YXJnZXQ7XG5cdFx0Ly8gdGhpcy5lbGVtZW50LnZhbHVlID0gdGhpcy5jb250cm9sUmVmLnZhbHVlO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50LCAndmFsdWUnLCB0aGlzLmNvbnRyb2xSZWYudmFsdWUpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQ29tcG9uZW50Lm9uRm9jdXMnLCB0aGlzLmNvbnRyb2xSZWYpO1xuXHR9XG5cblx0b25CbHVyKCRldmVudCk6IHZvaWQge1xuXHRcdHRoaXMuYmx1cnJlZCA9IHRydWU7XG5cdFx0dGhpcy5lbGVtZW50ID0gJGV2ZW50LnRhcmdldDtcblx0XHQvLyB0aGlzLmVsZW1lbnQudmFsdWUgPSB0aGlzLmNvbnRyb2xSZWYudmFsdWU7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsICd2YWx1ZScsIHRoaXMuY29udHJvbFJlZi52YWx1ZSk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xDb21wb25lbnQub25CbHVyJywgdGhpcy5jb250cm9sUmVmKTtcblx0XHQvKlxuXHRcdGlmICh0aGlzLmlubmVydmFsdWUpIHtcblx0XHRcdHRoaXMuY29udHJvbC5wYXRjaFZhbHVlKHRoaXMuaW5uZXJ2YWx1ZSArICcgSCcsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblx0XHR9XG5cdFx0Ki9cblx0fVxuXG5cdHByaXZhdGUgb25DaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4geyB9O1xuXG5cdHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG5cdHByaXZhdGUgZm9ybWF0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQ29tcG9uZW50LmZvcm1hdFZhbHVlJywgdmFsdWUpO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50LCAndmFsdWUnLCB2YWx1ZSk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xFZGl0YWJsZUNvbXBvbmVudC53cml0ZVZhbHVlJywgdmFsdWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbENvbXBvbmVudC5wYXJzZVZhbHVlJywgdmFsdWUpO1xuXHRcdGNvbnN0IHBhcnNlZCA9IHRoaXMuaW5uZXJ2YWx1ZTtcblx0XHR0aGlzLm9uQ2hhbmdlKHBhcnNlZCk7XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEVkaXRhYmxlQ29tcG9uZW50LnJlZ2lzdGVyT25DaGFuZ2UnKTtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sRWRpdGFibGVDb21wb25lbnQucmVnaXN0ZXJPblRvdWNoZWQnKTtcblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdC8vIGNvbnN0IG5vZGUgPSB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0Lypcblx0XHRpZiAoaXNEaXNhYmxlZCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGVkJyk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sRWRpdGFibGVDb21wb25lbnQuc2V0RGlzYWJsZWRTdGF0ZScsIGlzRGlzYWJsZWQpO1xuXHRcdCovXG5cdH1cblxufVxuIl19