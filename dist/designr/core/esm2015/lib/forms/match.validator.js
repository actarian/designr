/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Attribute, Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
export class MatchValidator {
    /**
     * @param {?} match
     * @param {?} reverse
     */
    constructor(match, reverse) {
        this.match = match;
        this.reverse = reverse;
    }
    /**
     * @private
     * @return {?}
     */
    get isReverse() {
        if (!this.reverse) {
            return false;
        }
        return this.reverse === 'true' ? true : false;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        // self value
        /** @type {?} */
        const value = control.value;
        // control value
        /** @type {?} */
        const input = control.root.get(this.match);
        // value not equal
        if (input && value !== input.value && !this.isReverse) {
            return {
                match: true,
            };
        }
        // value equal and reverse
        if (input && value === input.value && this.isReverse) {
            delete input.errors['match'];
            if (!Object.keys(input.errors).length) {
                input.setErrors(null);
            }
        }
        // value not equal and reverse
        if (input && value !== input.value && this.isReverse) {
            input.setErrors({
                match: true,
            });
        }
        return null;
    }
}
MatchValidator.decorators = [
    { type: Directive, args: [{
                selector: '[match][formControlName],[match][formControl],[match][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => MatchValidator), multi: true }
                ]
            },] }
];
/** @nocollapse */
MatchValidator.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['match',] }] },
    { type: String, decorators: [{ type: Attribute, args: ['reverse',] }] }
];
if (false) {
    /** @type {?} */
    MatchValidator.prototype.match;
    /** @type {?} */
    MatchValidator.prototype.reverse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9tYXRjaC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQW1CLGFBQWEsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBUTNFLE1BQU0sT0FBTyxjQUFjOzs7OztJQUUxQixZQUM0QixLQUFhLEVBQ1gsT0FBZTtRQURqQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ1gsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUN6QyxDQUFDOzs7OztJQUVMLElBQVksU0FBUztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixPQUFPLEtBQUssQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBd0I7OztjQUUxQixLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7OztjQUdyQixLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUxQyxrQkFBa0I7UUFDbEIsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3RELE9BQU87Z0JBQ04sS0FBSyxFQUFFLElBQUk7YUFDWCxDQUFDO1NBQ0Y7UUFFRCwwQkFBMEI7UUFDMUIsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDdEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QjtTQUNEO1FBQ0QsOEJBQThCO1FBQzlCLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDckQsS0FBSyxDQUFDLFNBQVMsQ0FBQztnQkFDZixLQUFLLEVBQUUsSUFBSTthQUNYLENBQUMsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7WUFqREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnRUFBZ0U7Z0JBQzFFLFNBQVMsRUFBRTtvQkFDVixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2lCQUN0RjthQUNEOzs7O3lDQUlFLFNBQVMsU0FBQyxPQUFPO3lDQUNqQixTQUFTLFNBQUMsU0FBUzs7OztJQURwQiwrQkFBd0M7O0lBQ3hDLGlDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW21hdGNoXVtmb3JtQ29udHJvbE5hbWVdLFttYXRjaF1bZm9ybUNvbnRyb2xdLFttYXRjaF1bbmdNb2RlbF0nLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdGNoVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGNoVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRAQXR0cmlidXRlKCdtYXRjaCcpIHB1YmxpYyBtYXRjaDogc3RyaW5nLFxuXHRcdEBBdHRyaWJ1dGUoJ3JldmVyc2UnKSBwdWJsaWMgcmV2ZXJzZTogc3RyaW5nXG5cdCkgeyB9XG5cblx0cHJpdmF0ZSBnZXQgaXNSZXZlcnNlKCkge1xuXHRcdGlmICghdGhpcy5yZXZlcnNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnJldmVyc2UgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcblx0fVxuXG5cdHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuXHRcdC8vIHNlbGYgdmFsdWVcblx0XHRjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG5cblx0XHQvLyBjb250cm9sIHZhbHVlXG5cdFx0Y29uc3QgaW5wdXQgPSBjb250cm9sLnJvb3QuZ2V0KHRoaXMubWF0Y2gpO1xuXG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsXG5cdFx0aWYgKGlucHV0ICYmIHZhbHVlICE9PSBpbnB1dC52YWx1ZSAmJiAhdGhpcy5pc1JldmVyc2UpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG1hdGNoOiB0cnVlLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyB2YWx1ZSBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdGlmIChpbnB1dCAmJiB2YWx1ZSA9PT0gaW5wdXQudmFsdWUgJiYgdGhpcy5pc1JldmVyc2UpIHtcblx0XHRcdGRlbGV0ZSBpbnB1dC5lcnJvcnNbJ21hdGNoJ107XG5cdFx0XHRpZiAoIU9iamVjdC5rZXlzKGlucHV0LmVycm9ycykubGVuZ3RoKSB7XG5cdFx0XHRcdGlucHV0LnNldEVycm9ycyhudWxsKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsIGFuZCByZXZlcnNlXG5cdFx0aWYgKGlucHV0ICYmIHZhbHVlICE9PSBpbnB1dC52YWx1ZSAmJiB0aGlzLmlzUmV2ZXJzZSkge1xuXHRcdFx0aW5wdXQuc2V0RXJyb3JzKHtcblx0XHRcdFx0bWF0Y2g6IHRydWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG59XG4iXX0=