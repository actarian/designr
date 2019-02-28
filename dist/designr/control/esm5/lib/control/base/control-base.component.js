/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBase } from './control-base';
var ControlBaseComponent = /** @class */ (function () {
    function ControlBaseComponent(renderer) {
        this.renderer = renderer;
        this.reveal = { checked: false };
        this.onChange = function (value) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(ControlBaseComponent.prototype, "controlRef", {
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
    Object.defineProperty(ControlBaseComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.controlRef.valid; },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    ControlBaseComponent.prototype.formatValue = /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // console.log('ControlBaseComponent.formatValue', value);
        this.renderer.setProperty(this.element, 'value', value);
        // console.log('ControlEditableComponent.writeValue', value);
    };
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    ControlBaseComponent.prototype.parseValue = /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // console.log('ControlBaseComponent.parseValue', value);
        /** @type {?} */
        var parsed = this.innervalue;
        this.onChange(parsed);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ControlBaseComponent.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.element = event.target;
        this.onChange(this.element.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ControlBaseComponent.prototype.onFocus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.blurred = false;
        this.element = event.target;
        // this.element.value = this.controlRef.value;
        this.renderer.setProperty(this.element, 'value', this.controlRef.value);
        // console.log('ControlBaseComponent.onFocus', this.controlRef);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ControlBaseComponent.prototype.onBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @return {?}
     */
    ControlBaseComponent.prototype.getFormattedValue = /**
     * @return {?}
     */
    function () {
        // console.log('ControlBaseComponent.getFormattedValue', this.controlRef.value);
        return this.controlRef.value;
    };
    // ControlValueAccessor
    // ControlValueAccessor
    /**
     * @param {?} value
     * @return {?}
     */
    ControlBaseComponent.prototype.writeValue = 
    // ControlValueAccessor
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.formatValue(value);
    };
    /**
     * @param {?} method
     * @return {?}
     */
    ControlBaseComponent.prototype.registerOnChange = /**
     * @param {?} method
     * @return {?}
     */
    function (method) {
        this.onChange = method;
        // console.log('ControlEditableComponent.registerOnChange');
    };
    /**
     * @param {?} method
     * @return {?}
     */
    ControlBaseComponent.prototype.registerOnTouched = /**
     * @param {?} method
     * @return {?}
     */
    function (method) {
        this.onTouched = method;
        // console.log('ControlEditableComponent.registerOnTouched');
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ControlBaseComponent.prototype.setDisabledState = /**
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
    ControlBaseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-base-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t<input class=\"form-control\" placeholder=\"{{ control.placeholder | label }}\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t<div class=\"alert alert--danger\" *ngIf=\"controlRef.invalid && (controlRef.dirty || controlRef.touched)\">\r\n\t\t<div *ngIf=\"controlRef.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t</div>\r\n</ng-container>\r\n",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return ControlBaseComponent; }),
                            multi: true,
                        }]
                }] }
    ];
    /** @nocollapse */
    ControlBaseComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    ControlBaseComponent.propDecorators = {
        control: [{ type: Input }],
        form: [{ type: Input }]
    };
    return ControlBaseComponent;
}());
export { ControlBaseComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9iYXNlL2NvbnRyb2wtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUF5QyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFvQkMsOEJBQ1csUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUg5QixXQUFNLEdBQXlCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBYXhDLGFBQVEsR0FBRyxVQUFDLEtBQVUsSUFBTyxDQUFDLENBQUM7UUFFL0IsY0FBUyxHQUFHLGNBQVEsQ0FBQyxDQUFDO0lBWDVCLENBQUM7SUFFTCxzQkFBSSw0Q0FBVTs7OztRQUFkO1lBQ0MsbUVBQW1FO1lBQ25FLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBOzs7Ozs7SUFNckMsMENBQVc7Ozs7O0lBQXJCLFVBQXNCLEtBQVU7UUFDL0IsMERBQTBEO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hELDZEQUE2RDtJQUM5RCxDQUFDOzs7Ozs7SUFFUyx5Q0FBVTs7Ozs7SUFBcEIsVUFBcUIsS0FBVTs7O1lBRXhCLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVTtRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsc0NBQU87Ozs7SUFBUCxVQUFRLEtBQVk7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELHNDQUFPOzs7O0lBQVAsVUFBUSxLQUFZO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM1Qiw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RSxnRUFBZ0U7SUFDakUsQ0FBQzs7Ozs7SUFFRCxxQ0FBTTs7OztJQUFOLFVBQU8sS0FBWTtRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDNUIsOENBQThDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsK0RBQStEO1FBQy9EOzs7O1VBSUU7SUFDSCxDQUFDOzs7O0lBRUQsZ0RBQWlCOzs7SUFBakI7UUFDQyxnRkFBZ0Y7UUFDaEYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQsdUJBQXVCOzs7Ozs7SUFFdkIseUNBQVU7Ozs7OztJQUFWLFVBQVcsS0FBVTtRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsK0NBQWdCOzs7O0lBQWhCLFVBQWlCLE1BQVc7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsNERBQTREO0lBQzdELENBQUM7Ozs7O0lBRUQsZ0RBQWlCOzs7O0lBQWpCLFVBQWtCLE1BQVc7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsNkRBQTZEO0lBQzlELENBQUM7Ozs7O0lBRUQsK0NBQWdCOzs7O0lBQWhCLFVBQWlCLFVBQW1CO1FBQ25DLDRDQUE0QztRQUM1Qzs7Ozs7OztVQU9FO0lBQ0gsQ0FBQzs7Z0JBeEdELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxnaUJBQTRDO29CQUM1QyxTQUFTLEVBQUUsQ0FBQzs0QkFDWCxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQzs0QkFDbkQsS0FBSyxFQUFFLElBQUk7eUJBQ1gsQ0FBQztpQkFDRjs7OztnQkFac0MsU0FBUzs7OzBCQWU5QyxLQUFLO3VCQUNMLEtBQUs7O0lBOEZQLDJCQUFDO0NBQUEsQUExR0QsSUEwR0M7U0FqR1ksb0JBQW9COzs7SUFFaEMsdUNBQW1DOztJQUNuQyxvQ0FBeUI7Ozs7O0lBRXpCLHVDQUF1Qjs7Ozs7SUFDdkIsdUNBQTJCOzs7OztJQUMzQiwwQ0FBMEI7O0lBRTFCLHNDQUFrRDs7Ozs7SUFhbEQsd0NBQXlDOzs7OztJQUV6Qyx5Q0FBZ0M7Ozs7O0lBWi9CLHdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUdyb3VwLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xCYXNlIH0gZnJvbSAnLi9jb250cm9sLWJhc2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLWJhc2UtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2NvbnRyb2wtYmFzZS5jb21wb25lbnQuaHRtbCcsXG5cdHByb3ZpZGVyczogW3tcblx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDb250cm9sQmFzZUNvbXBvbmVudCksXG5cdFx0bXVsdGk6IHRydWUsXG5cdH1dLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuXHRASW5wdXQoKSBjb250cm9sOiBDb250cm9sQmFzZTxhbnk+O1xuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG5cblx0cHJvdGVjdGVkIGVsZW1lbnQ6IGFueTtcblx0cHJvdGVjdGVkIGJsdXJyZWQ6IGJvb2xlYW47XG5cdHByb3RlY3RlZCBpbm5lcnZhbHVlOiBhbnk7XG5cblx0cmV2ZWFsOiB7IGNoZWNrZWQ6IGJvb2xlYW4gfSA9IHsgY2hlY2tlZDogZmFsc2UgfTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMlxuXHQpIHsgfVxuXG5cdGdldCBjb250cm9sUmVmKCk6IEFic3RyYWN0Q29udHJvbCB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2NvbnRyb2xSZWYnLCB0aGlzLmNvbnRyb2wua2V5LCB0aGlzLmZvcm0uY29udHJvbHMpO1xuXHRcdHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV07XG5cdH1cblxuXHRnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuY29udHJvbFJlZi52YWxpZDsgfVxuXG5cdHByb3RlY3RlZCBvbkNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7IH07XG5cblx0cHJvdGVjdGVkIG9uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuXHRwcm90ZWN0ZWQgZm9ybWF0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZUNvbXBvbmVudC5mb3JtYXRWYWx1ZScsIHZhbHVlKTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sRWRpdGFibGVDb21wb25lbnQud3JpdGVWYWx1ZScsIHZhbHVlKTtcblx0fVxuXG5cdHByb3RlY3RlZCBwYXJzZVZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2VDb21wb25lbnQucGFyc2VWYWx1ZScsIHZhbHVlKTtcblx0XHRjb25zdCBwYXJzZWQgPSB0aGlzLmlubmVydmFsdWU7XG5cdFx0dGhpcy5vbkNoYW5nZShwYXJzZWQpO1xuXHR9XG5cblx0b25JbnB1dChldmVudDogRXZlbnQpOiB2b2lkIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cdFx0dGhpcy5vbkNoYW5nZSh0aGlzLmVsZW1lbnQudmFsdWUpO1xuXHR9XG5cblx0b25Gb2N1cyhldmVudDogRXZlbnQpOiB2b2lkIHtcblx0XHR0aGlzLmJsdXJyZWQgPSBmYWxzZTtcblx0XHR0aGlzLmVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cdFx0Ly8gdGhpcy5lbGVtZW50LnZhbHVlID0gdGhpcy5jb250cm9sUmVmLnZhbHVlO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50LCAndmFsdWUnLCB0aGlzLmNvbnRyb2xSZWYudmFsdWUpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZUNvbXBvbmVudC5vbkZvY3VzJywgdGhpcy5jb250cm9sUmVmKTtcblx0fVxuXG5cdG9uQmx1cihldmVudDogRXZlbnQpOiB2b2lkIHtcblx0XHR0aGlzLmJsdXJyZWQgPSB0cnVlO1xuXHRcdHRoaXMuZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblx0XHQvLyB0aGlzLmVsZW1lbnQudmFsdWUgPSB0aGlzLmNvbnRyb2xSZWYudmFsdWU7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsICd2YWx1ZScsIHRoaXMuY29udHJvbFJlZi52YWx1ZSk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xCYXNlQ29tcG9uZW50Lm9uQmx1cicsIHRoaXMuY29udHJvbFJlZik7XG5cdFx0Lypcblx0XHRpZiAodGhpcy5pbm5lcnZhbHVlKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2wucGF0Y2hWYWx1ZSh0aGlzLmlubmVydmFsdWUgKyAnIEgnLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cdFx0fVxuXHRcdCovXG5cdH1cblxuXHRnZXRGb3JtYXR0ZWRWYWx1ZSgpOiBhbnkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZUNvbXBvbmVudC5nZXRGb3JtYXR0ZWRWYWx1ZScsIHRoaXMuY29udHJvbFJlZi52YWx1ZSk7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbFJlZi52YWx1ZTtcblx0fVxuXG5cdC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG5cblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSk7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKG1ldGhvZDogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IG1ldGhvZDtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEVkaXRhYmxlQ29tcG9uZW50LnJlZ2lzdGVyT25DaGFuZ2UnKTtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKG1ldGhvZDogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBtZXRob2Q7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xFZGl0YWJsZUNvbXBvbmVudC5yZWdpc3Rlck9uVG91Y2hlZCcpO1xuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0Ly8gY29uc3Qgbm9kZSA9IHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudDtcblx0XHQvKlxuXHRcdGlmIChpc0Rpc2FibGVkKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZWQnKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xFZGl0YWJsZUNvbXBvbmVudC5zZXREaXNhYmxlZFN0YXRlJywgaXNEaXNhYmxlZCk7XG5cdFx0Ki9cblx0fVxuXG59XG4iXX0=