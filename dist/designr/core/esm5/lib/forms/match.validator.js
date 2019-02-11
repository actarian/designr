/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return MatchValidator; }), multi: true }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9tYXRjaC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQW1CLGFBQWEsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRTNFO0lBUUMsd0JBQzRCLEtBQWEsRUFDWCxPQUFlO1FBRGpCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDWCxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQ3pDLENBQUM7SUFFTCxzQkFBWSxxQ0FBUzs7Ozs7UUFBckI7WUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsT0FBTyxLQUFLLENBQUM7YUFDYjtZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9DLENBQUM7OztPQUFBOzs7OztJQUVELGlDQUFROzs7O0lBQVIsVUFBUyxPQUF3Qjs7O1lBRTFCLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSzs7O1lBR3JCLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTFDLGtCQUFrQjtRQUNsQixJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdEQsT0FBTztnQkFDTixLQUFLLEVBQUUsSUFBSTthQUNYLENBQUM7U0FDRjtRQUVELDBCQUEwQjtRQUMxQixJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUN0QyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Q7UUFDRCw4QkFBOEI7UUFDOUIsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyRCxLQUFLLENBQUMsU0FBUyxDQUFDO2dCQUNmLEtBQUssRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFDO1NBQ0g7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7O2dCQWpERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdFQUFnRTtvQkFDMUUsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxjQUFjLEVBQWQsQ0FBYyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtxQkFDdEY7aUJBQ0Q7Ozs7NkNBSUUsU0FBUyxTQUFDLE9BQU87NkNBQ2pCLFNBQVMsU0FBQyxTQUFTOztJQXlDdEIscUJBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQTdDWSxjQUFjOzs7SUFHekIsK0JBQXdDOztJQUN4QyxpQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHRyaWJ1dGUsIERpcmVjdGl2ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1ttYXRjaF1bZm9ybUNvbnRyb2xOYW1lXSxbbWF0Y2hdW2Zvcm1Db250cm9sXSxbbWF0Y2hdW25nTW9kZWxdJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXRjaFZhbGlkYXRvciksIG11bHRpOiB0cnVlIH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBNYXRjaFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEF0dHJpYnV0ZSgnbWF0Y2gnKSBwdWJsaWMgbWF0Y2g6IHN0cmluZyxcblx0XHRAQXR0cmlidXRlKCdyZXZlcnNlJykgcHVibGljIHJldmVyc2U6IHN0cmluZ1xuXHQpIHsgfVxuXG5cdHByaXZhdGUgZ2V0IGlzUmV2ZXJzZSgpIHtcblx0XHRpZiAoIXRoaXMucmV2ZXJzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5yZXZlcnNlID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XG5cdH1cblxuXHR2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcblx0XHQvLyBzZWxmIHZhbHVlXG5cdFx0Y29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xuXG5cdFx0Ly8gY29udHJvbCB2YWx1ZVxuXHRcdGNvbnN0IGlucHV0ID0gY29udHJvbC5yb290LmdldCh0aGlzLm1hdGNoKTtcblxuXHRcdC8vIHZhbHVlIG5vdCBlcXVhbFxuXHRcdGlmIChpbnB1dCAmJiB2YWx1ZSAhPT0gaW5wdXQudmFsdWUgJiYgIXRoaXMuaXNSZXZlcnNlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRtYXRjaDogdHJ1ZSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gdmFsdWUgZXF1YWwgYW5kIHJldmVyc2Vcblx0XHRpZiAoaW5wdXQgJiYgdmFsdWUgPT09IGlucHV0LnZhbHVlICYmIHRoaXMuaXNSZXZlcnNlKSB7XG5cdFx0XHRkZWxldGUgaW5wdXQuZXJyb3JzWydtYXRjaCddO1xuXHRcdFx0aWYgKCFPYmplY3Qua2V5cyhpbnB1dC5lcnJvcnMpLmxlbmd0aCkge1xuXHRcdFx0XHRpbnB1dC5zZXRFcnJvcnMobnVsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHZhbHVlIG5vdCBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdGlmIChpbnB1dCAmJiB2YWx1ZSAhPT0gaW5wdXQudmFsdWUgJiYgdGhpcy5pc1JldmVyc2UpIHtcblx0XHRcdGlucHV0LnNldEVycm9ycyh7XG5cdFx0XHRcdG1hdGNoOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxufVxuIl19