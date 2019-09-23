/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Attribute, Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var MatchValidator = /** @class */ (function () {
    function MatchValidator(match, reverse) {
        this.match = match;
        this.reverse = reverse;
    }
    Object.defineProperty(MatchValidator.prototype, "isReverse", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} control
     * @return {?}
     */
    MatchValidator.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        // self value
        /** @type {?} */
        var value = control.value;
        // control value
        /** @type {?} */
        var input = control.root.get(this.match);
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
    };
    MatchValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[match][formControlName],[match][formControl],[match][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return MatchValidator; })), multi: true }
                    ]
                },] }
    ];
    /** @nocollapse */
    MatchValidator.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['match',] }] },
        { type: String, decorators: [{ type: Attribute, args: ['reverse',] }] }
    ]; };
    return MatchValidator;
}());
export { MatchValidator };
if (false) {
    /** @type {?} */
    MatchValidator.prototype.match;
    /** @type {?} */
    MatchValidator.prototype.reverse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hdGNoLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBbUIsYUFBYSxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0U7SUFRQyx3QkFDNEIsS0FBYSxFQUNYLE9BQWU7UUFEakIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNYLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDekMsQ0FBQztJQUVMLHNCQUFZLHFDQUFTOzs7OztRQUFyQjtZQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNsQixPQUFPLEtBQUssQ0FBQzthQUNiO1lBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsaUNBQVE7Ozs7SUFBUixVQUFTLE9BQXdCOzs7WUFFMUIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLOzs7WUFFckIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUMsa0JBQWtCO1FBQ2xCLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN0RCxPQUFPO2dCQUNOLEtBQUssRUFBRSxJQUFJO2FBQ1gsQ0FBQztTQUNGO1FBQ0QsMEJBQTBCO1FBQzFCLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDckQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7U0FDRDtRQUNELDhCQUE4QjtRQUM5QixJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JELEtBQUssQ0FBQyxTQUFTLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLElBQUk7YUFDWCxDQUFDLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7Z0JBN0NELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZ0VBQWdFO29CQUMxRSxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGNBQWMsRUFBZCxDQUFjLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3FCQUN0RjtpQkFDRDs7Ozs2Q0FJRSxTQUFTLFNBQUMsT0FBTzs2Q0FDakIsU0FBUyxTQUFDLFNBQVM7O0lBcUN0QixxQkFBQztDQUFBLEFBL0NELElBK0NDO1NBekNZLGNBQWM7OztJQUd6QiwrQkFBd0M7O0lBQ3hDLGlDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW21hdGNoXVtmb3JtQ29udHJvbE5hbWVdLFttYXRjaF1bZm9ybUNvbnRyb2xdLFttYXRjaF1bbmdNb2RlbF0nLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdGNoVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGNoVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRAQXR0cmlidXRlKCdtYXRjaCcpIHB1YmxpYyBtYXRjaDogc3RyaW5nLFxuXHRcdEBBdHRyaWJ1dGUoJ3JldmVyc2UnKSBwdWJsaWMgcmV2ZXJzZTogc3RyaW5nXG5cdCkgeyB9XG5cblx0cHJpdmF0ZSBnZXQgaXNSZXZlcnNlKCkge1xuXHRcdGlmICghdGhpcy5yZXZlcnNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnJldmVyc2UgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcblx0fVxuXG5cdHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuXHRcdC8vIHNlbGYgdmFsdWVcblx0XHRjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG5cdFx0Ly8gY29udHJvbCB2YWx1ZVxuXHRcdGNvbnN0IGlucHV0ID0gY29udHJvbC5yb290LmdldCh0aGlzLm1hdGNoKTtcblx0XHQvLyB2YWx1ZSBub3QgZXF1YWxcblx0XHRpZiAoaW5wdXQgJiYgdmFsdWUgIT09IGlucHV0LnZhbHVlICYmICF0aGlzLmlzUmV2ZXJzZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bWF0Y2g6IHRydWUsXG5cdFx0XHR9O1xuXHRcdH1cblx0XHQvLyB2YWx1ZSBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdGlmIChpbnB1dCAmJiB2YWx1ZSA9PT0gaW5wdXQudmFsdWUgJiYgdGhpcy5pc1JldmVyc2UpIHtcblx0XHRcdGRlbGV0ZSBpbnB1dC5lcnJvcnNbJ21hdGNoJ107XG5cdFx0XHRpZiAoIU9iamVjdC5rZXlzKGlucHV0LmVycm9ycykubGVuZ3RoKSB7XG5cdFx0XHRcdGlucHV0LnNldEVycm9ycyhudWxsKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsIGFuZCByZXZlcnNlXG5cdFx0aWYgKGlucHV0ICYmIHZhbHVlICE9PSBpbnB1dC52YWx1ZSAmJiB0aGlzLmlzUmV2ZXJzZSkge1xuXHRcdFx0aW5wdXQuc2V0RXJyb3JzKHtcblx0XHRcdFx0bWF0Y2g6IHRydWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxufVxuIl19