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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9jb250cm9sLmFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsTUFBTSxLQUFPLHNCQUFzQixHQUFRO0lBQzFDLE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsZUFBZSxFQUFmLENBQWUsRUFBQztJQUM5QyxLQUFLLEVBQUUsSUFBSTtDQUNYOzs7O0FBRUQ7SUFjQyx5QkFDVyxRQUFtQixFQUNuQixPQUFtQjtRQURuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFXOUIsYUFBUTs7OztRQUFHLFVBQUMsS0FBVSxJQUFPLENBQUMsRUFBQztRQUMvQixjQUFTOzs7UUFBRyxjQUFRLENBQUMsRUFBQztJQVhsQixDQUFDOzs7Ozs7SUFFSyxxQ0FBVzs7Ozs7SUFBckIsVUFBc0IsS0FBUTtRQUM3QixPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFUyxvQ0FBVTs7Ozs7SUFBcEIsVUFBcUIsS0FBVTtRQUM5QixPQUFPLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3QyxDQUFDOzs7OztJQUtELG9DQUFVOzs7O0lBQVYsVUFBVyxLQUFROztZQUNaLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7Ozs7SUFFRCwwQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsUUFBK0I7UUFBaEQsaUJBT0M7UUFOQSxJQUFJLENBQUMsUUFBUTs7OztRQUFHLFVBQUMsS0FBVTs7Z0JBQ3BCLFdBQVcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzs7Z0JBQ3BDLGNBQWMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUNwRCxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDL0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQSxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwyQ0FBaUI7Ozs7SUFBakIsVUFBa0IsUUFBb0I7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCwwQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7O2dCQWxERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUNQLGdIQUFnSDs7b0JBRWpILElBQUksRUFBRTt3QkFDTCxVQUFVLEVBQUUsK0JBQStCO3dCQUMzQyxTQUFTLEVBQUUsK0JBQStCO3dCQUMxQyxRQUFRLEVBQUUsYUFBYTtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ25DOzs7O2dCQXBCMkMsU0FBUztnQkFBakMsVUFBVTs7SUE4RDlCLHNCQUFDO0NBQUEsQUFwREQsSUFvREM7U0F4Q1ksZUFBZTs7O0lBZTNCLG1DQUErQjs7SUFDL0Isb0NBQXNCOzs7OztJQWJyQixtQ0FBNkI7Ozs7O0lBQzdCLGtDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG5cdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11c2UtYmVmb3JlLWRlY2xhcmVcclxuXHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDb250cm9sQWNjZXNzb3IpLFxyXG5cdG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjpcclxuXHRcdCdpbnB1dFtkZXNpZ25yLWFjY2Vzc29yXVtmb3JtQ29udHJvbE5hbWVdLGlucHV0W2Rlc2lnbnItYWNjZXNzb3JdW2Zvcm1Db250cm9sXSxpbnB1dFtkZXNpZ25yLWFjY2Vzc29yXVtuZ01vZGVsXScsXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxyXG5cdGhvc3Q6IHtcclxuXHRcdCcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXHJcblx0XHQnKGlucHV0KSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXHJcblx0XHQnKGJsdXIpJzogJ29uVG91Y2hlZCgpJ1xyXG5cdH0sXHJcblx0cHJvdmlkZXJzOiBbQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xBY2Nlc3NvcjxUPiBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuXHRcdHByb3RlY3RlZCBlbGVtZW50OiBFbGVtZW50UmVmXHJcblx0KSB7IH1cclxuXHJcblx0cHJvdGVjdGVkIGZvcm1hdFZhbHVlKHZhbHVlOiBUKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHBhcnNlVmFsdWUodmFsdWU6IGFueSk6IFQge1xyXG5cdFx0cmV0dXJuIHZhbHVlICYmIHZhbHVlICE9PSAnJyA/IHZhbHVlIDogbnVsbDtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlID0gKHZhbHVlOiBhbnkpID0+IHsgfTtcclxuXHRvblRvdWNoZWQgPSAoKSA9PiB7IH07XHJcblxyXG5cdHdyaXRlVmFsdWUodmFsdWU6IFQpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBmb3JtYXR0ZWRWYWx1ZSk7XHJcblx0fVxyXG5cclxuXHRyZWdpc3Rlck9uQ2hhbmdlKGNhbGxiYWNrOiAoeDogVCB8IG51bGwpID0+IHZvaWQpOiB2b2lkIHtcclxuXHRcdHRoaXMub25DaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRjb25zdCBwYXJzZWRWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZSk7XHJcblx0XHRcdGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZShwYXJzZWRWYWx1ZSk7XHJcblx0XHRcdHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIGZvcm1hdHRlZFZhbHVlKTtcclxuXHRcdFx0Y2FsbGJhY2socGFyc2VkVmFsdWUpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGNhbGxiYWNrO1xyXG5cdH1cclxuXHJcblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==