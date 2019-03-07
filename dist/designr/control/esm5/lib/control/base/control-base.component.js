/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBase } from './control-base';
var ControlBaseComponent = /** @class */ (function () {
    function ControlBaseComponent(renderer) {
        this.renderer = renderer;
        this.reveal = { checked: false };
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
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
        console.log('ControlBaseComponent.formatValue', value);
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
        console.log('ControlBaseComponent.parseValue', value);
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
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return ControlBaseComponent; })),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9iYXNlL2NvbnRyb2wtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUF5QyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFvQkMsOEJBQ1csUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUg5QixXQUFNLEdBQXlCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBYXhDLGFBQVE7Ozs7UUFBRyxVQUFDLEtBQVUsSUFBTyxDQUFDLEVBQUM7UUFFL0IsY0FBUzs7O1FBQUcsY0FBUSxDQUFDLEVBQUM7SUFYNUIsQ0FBQztJQUVMLHNCQUFJLDRDQUFVOzs7O1FBQWQ7WUFDQyxtRUFBbUU7WUFDbkUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQU87Ozs7UUFBWCxjQUFnQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7Ozs7OztJQU1yQywwQ0FBVzs7Ozs7SUFBckIsVUFBc0IsS0FBVTtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUss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b25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Hcm91cCwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sQmFzZSB9IGZyb20gJy4vY29udHJvbC1iYXNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1iYXNlLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9jb250cm9sLWJhc2UuY29tcG9uZW50Lmh0bWwnLFxuXHRwcm92aWRlcnM6IFt7XG5cdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29udHJvbEJhc2VDb21wb25lbnQpLFxuXHRcdG11bHRpOiB0cnVlLFxuXHR9XSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cblx0QElucHV0KCkgY29udHJvbDogQ29udHJvbEJhc2U8YW55Pjtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXG5cdHByb3RlY3RlZCBlbGVtZW50OiBhbnk7XG5cdHByb3RlY3RlZCBibHVycmVkOiBib29sZWFuO1xuXHRwcm90ZWN0ZWQgaW5uZXJ2YWx1ZTogYW55O1xuXG5cdHJldmVhbDogeyBjaGVja2VkOiBib29sZWFuIH0gPSB7IGNoZWNrZWQ6IGZhbHNlIH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjJcblx0KSB7IH1cblxuXHRnZXQgY29udHJvbFJlZigpOiBBYnN0cmFjdENvbnRyb2wge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdjb250cm9sUmVmJywgdGhpcy5jb250cm9sLmtleSwgdGhpcy5mb3JtLmNvbnRyb2xzKTtcblx0XHRyZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldO1xuXHR9XG5cblx0Z2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmNvbnRyb2xSZWYudmFsaWQ7IH1cblxuXHRwcm90ZWN0ZWQgb25DaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4geyB9O1xuXG5cdHByb3RlY3RlZCBvblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cblx0cHJvdGVjdGVkIGZvcm1hdFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZygnQ29udHJvbEJhc2VDb21wb25lbnQuZm9ybWF0VmFsdWUnLCB2YWx1ZSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsICd2YWx1ZScsIHZhbHVlKTtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEVkaXRhYmxlQ29tcG9uZW50LndyaXRlVmFsdWUnLCB2YWx1ZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcGFyc2VWYWx1ZSh2YWx1ZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coJ0NvbnRyb2xCYXNlQ29tcG9uZW50LnBhcnNlVmFsdWUnLCB2YWx1ZSk7XG5cdFx0Y29uc3QgcGFyc2VkID0gdGhpcy5pbm5lcnZhbHVlO1xuXHRcdHRoaXMub25DaGFuZ2UocGFyc2VkKTtcblx0fVxuXG5cdG9uSW5wdXQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXHRcdHRoaXMub25DaGFuZ2UodGhpcy5lbGVtZW50LnZhbHVlKTtcblx0fVxuXG5cdG9uRm9jdXMoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG5cdFx0dGhpcy5ibHVycmVkID0gZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXHRcdC8vIHRoaXMuZWxlbWVudC52YWx1ZSA9IHRoaXMuY29udHJvbFJlZi52YWx1ZTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudCwgJ3ZhbHVlJywgdGhpcy5jb250cm9sUmVmLnZhbHVlKTtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2VDb21wb25lbnQub25Gb2N1cycsIHRoaXMuY29udHJvbFJlZik7XG5cdH1cblxuXHRvbkJsdXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG5cdFx0dGhpcy5ibHVycmVkID0gdHJ1ZTtcblx0XHR0aGlzLmVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cdFx0Ly8gdGhpcy5lbGVtZW50LnZhbHVlID0gdGhpcy5jb250cm9sUmVmLnZhbHVlO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50LCAndmFsdWUnLCB0aGlzLmNvbnRyb2xSZWYudmFsdWUpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZUNvbXBvbmVudC5vbkJsdXInLCB0aGlzLmNvbnRyb2xSZWYpO1xuXHRcdC8qXG5cdFx0aWYgKHRoaXMuaW5uZXJ2YWx1ZSkge1xuXHRcdFx0dGhpcy5jb250cm9sLnBhdGNoVmFsdWUodGhpcy5pbm5lcnZhbHVlICsgJyBIJywgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuXHRcdH1cblx0XHQqL1xuXHR9XG5cblx0Z2V0Rm9ybWF0dGVkVmFsdWUoKTogYW55IHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2VDb21wb25lbnQuZ2V0Rm9ybWF0dGVkVmFsdWUnLCB0aGlzLmNvbnRyb2xSZWYudmFsdWUpO1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xSZWYudmFsdWU7XG5cdH1cblxuXHQvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShtZXRob2Q6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UgPSBtZXRob2Q7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xFZGl0YWJsZUNvbXBvbmVudC5yZWdpc3Rlck9uQ2hhbmdlJyk7XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChtZXRob2Q6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gbWV0aG9kO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sRWRpdGFibGVDb21wb25lbnQucmVnaXN0ZXJPblRvdWNoZWQnKTtcblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdC8vIGNvbnN0IG5vZGUgPSB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0Lypcblx0XHRpZiAoaXNEaXNhYmxlZCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGVkJyk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sRWRpdGFibGVDb21wb25lbnQuc2V0RGlzYWJsZWRTdGF0ZScsIGlzRGlzYWJsZWQpO1xuXHRcdCovXG5cdH1cblxufVxuIl19