/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, forwardRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export var CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return ControlAccessor; })),
    multi: true
};
/**
 * @template T
 */
var ControlAccessor = /** @class */ (function () {
    function ControlAccessor(renderer, element) {
        this.renderer = renderer;
        this.element = element;
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
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    ControlAccessor.prototype.formatValue = /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.toString();
    };
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    ControlAccessor.prototype.parseValue = /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value && value !== '' ? value : null;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ControlAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var formattedValue = this.formatValue(value);
        this.renderer.setProperty(this.element.nativeElement, 'value', formattedValue);
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    ControlAccessor.prototype.registerOnChange = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var parsedValue = _this.parseValue(value);
            /** @type {?} */
            var formattedValue = _this.formatValue(parsedValue);
            _this.renderer.setProperty(_this.element.nativeElement, 'value', formattedValue);
            callback(parsedValue);
        });
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    ControlAccessor.prototype.registerOnTouched = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.onTouched = callback;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ControlAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    };
    ControlAccessor.decorators = [
        { type: Directive, args: [{
                    selector: 'input[designr-accessor][formControlName],input[designr-accessor][formControl],input[designr-accessor][ngModel]',
                    // tslint:disable-next-line:use-host-property-decorator
                    host: {
                        '(change)': 'onChange($event.target.value)',
                        '(input)': 'onChange($event.target.value)',
                        '(blur)': 'onTouched()'
                    },
                    providers: [CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    ControlAccessor.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    return ControlAccessor;
}());
export { ControlAccessor };
if (false) {
    /** @type {?} */
    ControlAccessor.prototype.onChange;
    /** @type {?} */
    ControlAccessor.prototype.onTouched;
    /**
     * @type {?}
     * @protected
     */
    ControlAccessor.prototype.renderer;
    /**
     * @type {?}
     * @protected
     */
    ControlAccessor.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9jb250cm9sLmFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsTUFBTSxLQUFPLHNCQUFzQixHQUFRO0lBQzFDLE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsZUFBZSxFQUFmLENBQWUsRUFBQztJQUM5QyxLQUFLLEVBQUUsSUFBSTtDQUNYOzs7O0FBRUQ7SUFjQyx5QkFDVyxRQUFtQixFQUNuQixPQUFtQjtRQURuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFXOUIsYUFBUTs7OztRQUFHLFVBQUMsS0FBVSxJQUFPLENBQUMsRUFBQztRQUMvQixjQUFTOzs7UUFBRyxjQUFRLENBQUMsRUFBQztJQVhsQixDQUFDOzs7Ozs7SUFFSyxxQ0FBVzs7Ozs7SUFBckIsVUFBc0IsS0FBUTtRQUM3QixPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFUyxvQ0FBVTs7Ozs7SUFBcEIsVUFBcUIsS0FBVTtRQUM5QixPQUFPLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3QyxDQUFDOzs7OztJQUtELG9DQUFVOzs7O0lBQVYsVUFBVyxLQUFROztZQUNaLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7Ozs7SUFFRCwwQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsUUFBK0I7UUFBaEQsaUJBT0M7UUFOQSxJQUFJLENBQUMsUUFBUTs7OztRQUFHLFVBQUMsS0FBVTs7Z0JBQ3BCLFdBQVcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzs7Z0JBQ3BDLGNBQWMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUNwRCxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDL0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQSxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwyQ0FBaUI7Ozs7SUFBakIsVUFBa0IsUUFBb0I7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCwwQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7O2dCQWxERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUNQLGdIQUFnSDs7b0JBRWpILElBQUksRUFBRTt3QkFDTCxVQUFVLEVBQUUsK0JBQStCO3dCQUMzQyxTQUFTLEVBQUUsK0JBQStCO3dCQUMxQyxRQUFRLEVBQUUsYUFBYTtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ25DOzs7O2dCQXBCMkMsU0FBUztnQkFBakMsVUFBVTs7SUE4RDlCLHNCQUFDO0NBQUEsQUFwREQsSUFvREM7U0F4Q1ksZUFBZTs7O0lBZTNCLG1DQUErQjs7SUFDL0Isb0NBQXNCOzs7OztJQWJyQixtQ0FBNkI7Ozs7O0lBQzdCLGtDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IENPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcblx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11c2UtYmVmb3JlLWRlY2xhcmVcblx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29udHJvbEFjY2Vzc29yKSxcblx0bXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3Rvcjpcblx0XHQnaW5wdXRbZGVzaWduci1hY2Nlc3Nvcl1bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFtkZXNpZ25yLWFjY2Vzc29yXVtmb3JtQ29udHJvbF0saW5wdXRbZGVzaWduci1hY2Nlc3Nvcl1bbmdNb2RlbF0nLFxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG5cdGhvc3Q6IHtcblx0XHQnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuXHRcdCcoaW5wdXQpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJyxcblx0XHQnKGJsdXIpJzogJ29uVG91Y2hlZCgpJ1xuXHR9LFxuXHRwcm92aWRlcnM6IFtDT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgQ29udHJvbEFjY2Vzc29yPFQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdHByb3RlY3RlZCBlbGVtZW50OiBFbGVtZW50UmVmXG5cdCkgeyB9XG5cblx0cHJvdGVjdGVkIGZvcm1hdFZhbHVlKHZhbHVlOiBUKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBwYXJzZVZhbHVlKHZhbHVlOiBhbnkpOiBUIHtcblx0XHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUgIT09ICcnID8gdmFsdWUgOiBudWxsO1xuXHR9XG5cblx0b25DaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4geyB9O1xuXHRvblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cblx0d3JpdGVWYWx1ZSh2YWx1ZTogVCk6IHZvaWQge1xuXHRcdGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgZm9ybWF0dGVkVmFsdWUpO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShjYWxsYmFjazogKHg6IFQgfCBudWxsKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRjb25zdCBwYXJzZWRWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZSk7XG5cdFx0XHRjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0VmFsdWUocGFyc2VkVmFsdWUpO1xuXHRcdFx0dGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgZm9ybWF0dGVkVmFsdWUpO1xuXHRcdFx0Y2FsbGJhY2socGFyc2VkVmFsdWUpO1xuXHRcdH07XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gY2FsbGJhY2s7XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcblx0fVxuXG59XG4iXX0=