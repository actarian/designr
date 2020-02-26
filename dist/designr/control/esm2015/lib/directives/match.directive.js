import { Attribute, Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import * as i0 from "@angular/core";
export class MatchValidator {
    constructor(match, reverse) {
        this.match = match;
        this.reverse = reverse;
    }
    get isReverse() {
        if (!this.reverse) {
            return false;
        }
        return this.reverse === 'true' ? true : false;
    }
    validate(control) {
        // self value
        const value = control.value;
        // control value
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
MatchValidator.ɵfac = function MatchValidator_Factory(t) { return new (t || MatchValidator)(i0.ɵɵinjectAttribute('match'), i0.ɵɵinjectAttribute('reverse')); };
MatchValidator.ɵdir = i0.ɵɵdefineDirective({ type: MatchValidator, selectors: [["", "match", "", "formControlName", ""], ["", "match", "", "formControl", ""], ["", "match", "", "ngModel", ""]], features: [i0.ɵɵProvidersFeature([
            { provide: NG_VALIDATORS, useExisting: forwardRef(() => MatchValidator), multi: true }
        ])] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatchValidator, [{
        type: Directive,
        args: [{
                selector: '[match][formControlName],[match][formControl],[match][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => MatchValidator), multi: true }
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Attribute,
                args: ['match']
            }] }, { type: undefined, decorators: [{
                type: Attribute,
                args: ['reverse']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hdGNoLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFtQixhQUFhLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFRM0UsTUFBTSxPQUFPLGNBQWM7SUFFMUIsWUFDNEIsS0FBYSxFQUNYLE9BQWU7UUFEakIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNYLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDekMsQ0FBQztJQUVMLElBQVksU0FBUztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixPQUFPLEtBQUssQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUF3QjtRQUNoQyxhQUFhO1FBQ2IsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM1QixnQkFBZ0I7UUFDaEIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLGtCQUFrQjtRQUNsQixJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdEQsT0FBTztnQkFDTixLQUFLLEVBQUUsSUFBSTthQUNYLENBQUM7U0FDRjtRQUNELDBCQUEwQjtRQUMxQixJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUN0QyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Q7UUFDRCw4QkFBOEI7UUFDOUIsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyRCxLQUFLLENBQUMsU0FBUyxDQUFDO2dCQUNmLEtBQUssRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7OzRFQXZDVyxjQUFjLHVCQUdkLE9BQU8sd0JBQ1AsU0FBUzttREFKVCxjQUFjLGtLQUpmO1lBQ1YsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtTQUN0RjtrREFFVyxjQUFjO2NBTjFCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsZ0VBQWdFO2dCQUMxRSxTQUFTLEVBQUU7b0JBQ1YsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtpQkFDdEY7YUFDRDs7c0JBSUUsU0FBUzt1QkFBQyxPQUFPOztzQkFDakIsU0FBUzt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXR0cmlidXRlLCBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbbWF0Y2hdW2Zvcm1Db250cm9sTmFtZV0sW21hdGNoXVtmb3JtQ29udHJvbF0sW21hdGNoXVtuZ01vZGVsXScsXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF0Y2hWYWxpZGF0b3IpLCBtdWx0aTogdHJ1ZSB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0Y2hWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBBdHRyaWJ1dGUoJ21hdGNoJykgcHVibGljIG1hdGNoOiBzdHJpbmcsXG5cdFx0QEF0dHJpYnV0ZSgncmV2ZXJzZScpIHB1YmxpYyByZXZlcnNlOiBzdHJpbmdcblx0KSB7IH1cblxuXHRwcml2YXRlIGdldCBpc1JldmVyc2UoKSB7XG5cdFx0aWYgKCF0aGlzLnJldmVyc2UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucmV2ZXJzZSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xuXHR9XG5cblx0dmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG5cdFx0Ly8gc2VsZiB2YWx1ZVxuXHRcdGNvbnN0IHZhbHVlID0gY29udHJvbC52YWx1ZTtcblx0XHQvLyBjb250cm9sIHZhbHVlXG5cdFx0Y29uc3QgaW5wdXQgPSBjb250cm9sLnJvb3QuZ2V0KHRoaXMubWF0Y2gpO1xuXHRcdC8vIHZhbHVlIG5vdCBlcXVhbFxuXHRcdGlmIChpbnB1dCAmJiB2YWx1ZSAhPT0gaW5wdXQudmFsdWUgJiYgIXRoaXMuaXNSZXZlcnNlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRtYXRjaDogdHJ1ZSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdC8vIHZhbHVlIGVxdWFsIGFuZCByZXZlcnNlXG5cdFx0aWYgKGlucHV0ICYmIHZhbHVlID09PSBpbnB1dC52YWx1ZSAmJiB0aGlzLmlzUmV2ZXJzZSkge1xuXHRcdFx0ZGVsZXRlIGlucHV0LmVycm9yc1snbWF0Y2gnXTtcblx0XHRcdGlmICghT2JqZWN0LmtleXMoaW5wdXQuZXJyb3JzKS5sZW5ndGgpIHtcblx0XHRcdFx0aW5wdXQuc2V0RXJyb3JzKG51bGwpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyB2YWx1ZSBub3QgZXF1YWwgYW5kIHJldmVyc2Vcblx0XHRpZiAoaW5wdXQgJiYgdmFsdWUgIT09IGlucHV0LnZhbHVlICYmIHRoaXMuaXNSZXZlcnNlKSB7XG5cdFx0XHRpbnB1dC5zZXRFcnJvcnMoe1xuXHRcdFx0XHRtYXRjaDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG59XG4iXX0=