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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hdGNoLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBbUIsYUFBYSxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0U7SUFRQyx3QkFDNEIsS0FBYSxFQUNYLE9BQWU7UUFEakIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNYLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDekMsQ0FBQztJQUVMLHNCQUFZLHFDQUFTOzs7OztRQUFyQjtZQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNsQixPQUFPLEtBQUssQ0FBQzthQUNiO1lBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsaUNBQVE7Ozs7SUFBUixVQUFTLE9BQXdCOzs7WUFFMUIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLOzs7WUFFckIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUMsa0JBQWtCO1FBQ2xCLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN0RCxPQUFPO2dCQUNOLEtBQUssRUFBRSxJQUFJO2FBQ1gsQ0FBQztTQUNGO1FBQ0QsMEJBQTBCO1FBQzFCLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDckQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7U0FDRDtRQUNELDhCQUE4QjtRQUM5QixJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JELEtBQUssQ0FBQyxTQUFTLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLElBQUk7YUFDWCxDQUFDLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7Z0JBN0NELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZ0VBQWdFO29CQUMxRSxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGNBQWMsRUFBZCxDQUFjLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3FCQUN0RjtpQkFDRDs7Ozs2Q0FJRSxTQUFTLFNBQUMsT0FBTzs2Q0FDakIsU0FBUyxTQUFDLFNBQVM7O0lBcUN0QixxQkFBQztDQUFBLEFBL0NELElBK0NDO1NBekNZLGNBQWM7OztJQUd6QiwrQkFBd0M7O0lBQ3hDLGlDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbbWF0Y2hdW2Zvcm1Db250cm9sTmFtZV0sW21hdGNoXVtmb3JtQ29udHJvbF0sW21hdGNoXVtuZ01vZGVsXScsXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHR7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdGNoVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGNoVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAQXR0cmlidXRlKCdtYXRjaCcpIHB1YmxpYyBtYXRjaDogc3RyaW5nLFxyXG5cdFx0QEF0dHJpYnV0ZSgncmV2ZXJzZScpIHB1YmxpYyByZXZlcnNlOiBzdHJpbmdcclxuXHQpIHsgfVxyXG5cclxuXHRwcml2YXRlIGdldCBpc1JldmVyc2UoKSB7XHJcblx0XHRpZiAoIXRoaXMucmV2ZXJzZSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5yZXZlcnNlID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcclxuXHRcdC8vIHNlbGYgdmFsdWVcclxuXHRcdGNvbnN0IHZhbHVlID0gY29udHJvbC52YWx1ZTtcclxuXHRcdC8vIGNvbnRyb2wgdmFsdWVcclxuXHRcdGNvbnN0IGlucHV0ID0gY29udHJvbC5yb290LmdldCh0aGlzLm1hdGNoKTtcclxuXHRcdC8vIHZhbHVlIG5vdCBlcXVhbFxyXG5cdFx0aWYgKGlucHV0ICYmIHZhbHVlICE9PSBpbnB1dC52YWx1ZSAmJiAhdGhpcy5pc1JldmVyc2UpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRtYXRjaDogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdC8vIHZhbHVlIGVxdWFsIGFuZCByZXZlcnNlXHJcblx0XHRpZiAoaW5wdXQgJiYgdmFsdWUgPT09IGlucHV0LnZhbHVlICYmIHRoaXMuaXNSZXZlcnNlKSB7XHJcblx0XHRcdGRlbGV0ZSBpbnB1dC5lcnJvcnNbJ21hdGNoJ107XHJcblx0XHRcdGlmICghT2JqZWN0LmtleXMoaW5wdXQuZXJyb3JzKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRpbnB1dC5zZXRFcnJvcnMobnVsbCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vIHZhbHVlIG5vdCBlcXVhbCBhbmQgcmV2ZXJzZVxyXG5cdFx0aWYgKGlucHV0ICYmIHZhbHVlICE9PSBpbnB1dC52YWx1ZSAmJiB0aGlzLmlzUmV2ZXJzZSkge1xyXG5cdFx0XHRpbnB1dC5zZXRFcnJvcnMoe1xyXG5cdFx0XHRcdG1hdGNoOiB0cnVlLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcbn1cclxuIl19