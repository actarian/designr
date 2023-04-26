/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, forwardRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export const CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => ControlAccessor)),
    multi: true
};
/**
 * @template T
 */
// tslint:disable-next-line:directive-class-suffix
export class ControlAccessor {
    /**
     * @param {?} renderer
     * @param {?} element
     */
    constructor(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    formatValue(value) {
        return value.toString();
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    parseValue(value) {
        return value && value !== '' ? value : null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        /** @type {?} */
        const formattedValue = this.formatValue(value);
        this.renderer.setProperty(this.element.nativeElement, 'value', formattedValue);
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerOnChange(callback) {
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            /** @type {?} */
            const parsedValue = this.parseValue(value);
            /** @type {?} */
            const formattedValue = this.formatValue(parsedValue);
            this.renderer.setProperty(this.element.nativeElement, 'value', formattedValue);
            callback(parsedValue);
        });
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerOnTouched(callback) {
        this.onTouched = callback;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    }
}
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
ControlAccessor.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9jb250cm9sLmFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsTUFBTSxPQUFPLHNCQUFzQixHQUFRO0lBQzFDLE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLEVBQUM7SUFDOUMsS0FBSyxFQUFFLElBQUk7Q0FDWDs7OztBQWFELGtEQUFrRDtBQUNsRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFFM0IsWUFDVyxRQUFtQixFQUNuQixPQUFtQjtRQURuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFXOUIsYUFBUTs7OztRQUFHLENBQUMsS0FBVSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUM7UUFDL0IsY0FBUzs7O1FBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDO0lBWGxCLENBQUM7Ozs7OztJQUVLLFdBQVcsQ0FBQyxLQUFRO1FBQzdCLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVTLFVBQVUsQ0FBQyxLQUFVO1FBQzlCLE9BQU8sS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBS0QsVUFBVSxDQUFDLEtBQVE7O2NBQ1osY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFFBQStCO1FBQy9DLElBQUksQ0FBQyxRQUFROzs7O1FBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTs7a0JBQ3hCLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzs7a0JBQ3BDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDL0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQSxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxRQUFvQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7WUFsREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFDUCxnSEFBZ0g7O2dCQUVqSCxJQUFJLEVBQUU7b0JBQ0wsVUFBVSxFQUFFLCtCQUErQjtvQkFDM0MsU0FBUyxFQUFFLCtCQUErQjtvQkFDMUMsUUFBUSxFQUFFLGFBQWE7aUJBQ3ZCO2dCQUNELFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ25DOzs7O1lBcEIyQyxTQUFTO1lBQWpDLFVBQVU7Ozs7SUFxQzdCLG1DQUErQjs7SUFDL0Isb0NBQXNCOzs7OztJQWJyQixtQ0FBNkI7Ozs7O0lBQzdCLGtDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG5cdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11c2UtYmVmb3JlLWRlY2xhcmVcclxuXHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDb250cm9sQWNjZXNzb3IpLFxyXG5cdG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjpcclxuXHRcdCdpbnB1dFtkZXNpZ25yLWFjY2Vzc29yXVtmb3JtQ29udHJvbE5hbWVdLGlucHV0W2Rlc2lnbnItYWNjZXNzb3JdW2Zvcm1Db250cm9sXSxpbnB1dFtkZXNpZ25yLWFjY2Vzc29yXVtuZ01vZGVsXScsXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxyXG5cdGhvc3Q6IHtcclxuXHRcdCcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXHJcblx0XHQnKGlucHV0KSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXHJcblx0XHQnKGJsdXIpJzogJ29uVG91Y2hlZCgpJ1xyXG5cdH0sXHJcblx0cHJvdmlkZXJzOiBbQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xBY2Nlc3NvcjxUPiBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuXHRcdHByb3RlY3RlZCBlbGVtZW50OiBFbGVtZW50UmVmXHJcblx0KSB7IH1cclxuXHJcblx0cHJvdGVjdGVkIGZvcm1hdFZhbHVlKHZhbHVlOiBUKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHBhcnNlVmFsdWUodmFsdWU6IGFueSk6IFQge1xyXG5cdFx0cmV0dXJuIHZhbHVlICYmIHZhbHVlICE9PSAnJyA/IHZhbHVlIDogbnVsbDtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlID0gKHZhbHVlOiBhbnkpID0+IHsgfTtcclxuXHRvblRvdWNoZWQgPSAoKSA9PiB7IH07XHJcblxyXG5cdHdyaXRlVmFsdWUodmFsdWU6IFQpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBmb3JtYXR0ZWRWYWx1ZSk7XHJcblx0fVxyXG5cclxuXHRyZWdpc3Rlck9uQ2hhbmdlKGNhbGxiYWNrOiAoeDogVCB8IG51bGwpID0+IHZvaWQpOiB2b2lkIHtcclxuXHRcdHRoaXMub25DaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRjb25zdCBwYXJzZWRWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZSk7XHJcblx0XHRcdGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZShwYXJzZWRWYWx1ZSk7XHJcblx0XHRcdHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIGZvcm1hdHRlZFZhbHVlKTtcclxuXHRcdFx0Y2FsbGJhY2socGFyc2VkVmFsdWUpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGNhbGxiYWNrO1xyXG5cdH1cclxuXHJcblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==