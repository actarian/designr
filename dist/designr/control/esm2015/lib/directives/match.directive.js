/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => MatchValidator)), multi: true }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hdGNoLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBbUIsYUFBYSxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0UsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBRTFCLFlBQzRCLEtBQWEsRUFDWCxPQUFlO1FBRGpCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDWCxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQ3pDLENBQUM7Ozs7O0lBRUwsSUFBWSxTQUFTO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxPQUF3Qjs7O2NBRTFCLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSzs7O2NBRXJCLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFDLGtCQUFrQjtRQUNsQixJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdEQsT0FBTztnQkFDTixLQUFLLEVBQUUsSUFBSTthQUNYLENBQUM7U0FDRjtRQUNELDBCQUEwQjtRQUMxQixJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUN0QyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Q7UUFDRCw4QkFBOEI7UUFDOUIsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyRCxLQUFLLENBQUMsU0FBUyxDQUFDO2dCQUNmLEtBQUssRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7OztZQTdDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGdFQUFnRTtnQkFDMUUsU0FBUyxFQUFFO29CQUNWLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsRUFBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQ3RGO2FBQ0Q7Ozs7eUNBSUUsU0FBUyxTQUFDLE9BQU87eUNBQ2pCLFNBQVMsU0FBQyxTQUFTOzs7O0lBRHBCLCtCQUF3Qzs7SUFDeEMsaUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXR0cmlidXRlLCBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1ttYXRjaF1bZm9ybUNvbnRyb2xOYW1lXSxbbWF0Y2hdW2Zvcm1Db250cm9sXSxbbWF0Y2hdW25nTW9kZWxdJyxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdHsgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF0Y2hWYWxpZGF0b3IpLCBtdWx0aTogdHJ1ZSB9XHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0Y2hWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBBdHRyaWJ1dGUoJ21hdGNoJykgcHVibGljIG1hdGNoOiBzdHJpbmcsXHJcblx0XHRAQXR0cmlidXRlKCdyZXZlcnNlJykgcHVibGljIHJldmVyc2U6IHN0cmluZ1xyXG5cdCkgeyB9XHJcblxyXG5cdHByaXZhdGUgZ2V0IGlzUmV2ZXJzZSgpIHtcclxuXHRcdGlmICghdGhpcy5yZXZlcnNlKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLnJldmVyc2UgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xyXG5cdFx0Ly8gc2VsZiB2YWx1ZVxyXG5cdFx0Y29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xyXG5cdFx0Ly8gY29udHJvbCB2YWx1ZVxyXG5cdFx0Y29uc3QgaW5wdXQgPSBjb250cm9sLnJvb3QuZ2V0KHRoaXMubWF0Y2gpO1xyXG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsXHJcblx0XHRpZiAoaW5wdXQgJiYgdmFsdWUgIT09IGlucHV0LnZhbHVlICYmICF0aGlzLmlzUmV2ZXJzZSkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1hdGNoOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Ly8gdmFsdWUgZXF1YWwgYW5kIHJldmVyc2VcclxuXHRcdGlmIChpbnB1dCAmJiB2YWx1ZSA9PT0gaW5wdXQudmFsdWUgJiYgdGhpcy5pc1JldmVyc2UpIHtcclxuXHRcdFx0ZGVsZXRlIGlucHV0LmVycm9yc1snbWF0Y2gnXTtcclxuXHRcdFx0aWYgKCFPYmplY3Qua2V5cyhpbnB1dC5lcnJvcnMpLmxlbmd0aCkge1xyXG5cdFx0XHRcdGlucHV0LnNldEVycm9ycyhudWxsKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsIGFuZCByZXZlcnNlXHJcblx0XHRpZiAoaW5wdXQgJiYgdmFsdWUgIT09IGlucHV0LnZhbHVlICYmIHRoaXMuaXNSZXZlcnNlKSB7XHJcblx0XHRcdGlucHV0LnNldEVycm9ycyh7XHJcblx0XHRcdFx0bWF0Y2g6IHRydWUsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=