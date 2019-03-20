/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} otherKey
 * @param {?=} reverse
 * @param {?=} group
 * @return {?}
 */
export function matchValidator(otherKey, reverse = false, group) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        /** @type {?} */
        const otherControl = group.controls[otherKey];
        /** @type {?} */
        const value = control.value;
        // value not equal
        if (otherControl && value !== otherControl.value && !reverse) {
            return {
                match: true,
            };
        }
        // value equal and reverse
        if (otherControl && value === otherControl.value && reverse) {
            if (otherControl.errors) {
                delete otherControl.errors['match'];
                if (!Object.keys(otherControl.errors).length) {
                    otherControl.setErrors(null);
                }
            }
        }
        // value not equal and reverse
        if (otherControl && value !== otherControl.value && reverse) {
            otherControl.setErrors({
                match: true,
            });
        }
        return null;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLGNBQWMsQ0FBQyxRQUFnQixFQUFFLFVBQW1CLEtBQUssRUFBRSxLQUFnQjtJQUMxRjs7OztJQUFPLENBQUMsT0FBb0IsRUFBRSxFQUFFOztjQUN6QixZQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7O2NBRXZDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSztRQUUzQixrQkFBa0I7UUFDbEIsSUFBSSxZQUFZLElBQUksS0FBSyxLQUFLLFlBQVksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDN0QsT0FBTztnQkFDTixLQUFLLEVBQUUsSUFBSTthQUNYLENBQUM7U0FDRjtRQUVELDBCQUEwQjtRQUMxQixJQUFJLFlBQVksSUFBSSxLQUFLLEtBQUssWUFBWSxDQUFDLEtBQUssSUFBSSxPQUFPLEVBQUU7WUFDNUQsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO2dCQUN4QixPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQzdDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzdCO2FBQ0Q7U0FDRDtRQUNELDhCQUE4QjtRQUM5QixJQUFJLFlBQVksSUFBSSxLQUFLLEtBQUssWUFBWSxDQUFDLEtBQUssSUFBSSxPQUFPLEVBQUU7WUFDNUQsWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFDdEIsS0FBSyxFQUFFLElBQUk7YUFDWCxDQUFDLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQyxFQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hWYWxpZGF0b3Iob3RoZXJLZXk6IHN0cmluZywgcmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlLCBncm91cDogRm9ybUdyb3VwKTogVmFsaWRhdG9yRm4ge1xuXHRyZXR1cm4gKGNvbnRyb2w6IEZvcm1Db250cm9sKSA9PiB7XG5cdFx0Y29uc3Qgb3RoZXJDb250cm9sID0gZ3JvdXAuY29udHJvbHNbb3RoZXJLZXldO1xuXG5cdFx0Y29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xuXG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsXG5cdFx0aWYgKG90aGVyQ29udHJvbCAmJiB2YWx1ZSAhPT0gb3RoZXJDb250cm9sLnZhbHVlICYmICFyZXZlcnNlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRtYXRjaDogdHJ1ZSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gdmFsdWUgZXF1YWwgYW5kIHJldmVyc2Vcblx0XHRpZiAob3RoZXJDb250cm9sICYmIHZhbHVlID09PSBvdGhlckNvbnRyb2wudmFsdWUgJiYgcmV2ZXJzZSkge1xuXHRcdFx0aWYgKG90aGVyQ29udHJvbC5lcnJvcnMpIHtcblx0XHRcdFx0ZGVsZXRlIG90aGVyQ29udHJvbC5lcnJvcnNbJ21hdGNoJ107XG5cdFx0XHRcdGlmICghT2JqZWN0LmtleXMob3RoZXJDb250cm9sLmVycm9ycykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0b3RoZXJDb250cm9sLnNldEVycm9ycyhudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyB2YWx1ZSBub3QgZXF1YWwgYW5kIHJldmVyc2Vcblx0XHRpZiAob3RoZXJDb250cm9sICYmIHZhbHVlICE9PSBvdGhlckNvbnRyb2wudmFsdWUgJiYgcmV2ZXJzZSkge1xuXHRcdFx0b3RoZXJDb250cm9sLnNldEVycm9ycyh7XG5cdFx0XHRcdG1hdGNoOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG59XG5cbi8qXG5leHBvcnQgZnVuY3Rpb24gX19tYXRjaFZhbGlkYXRvcihrZXk6IHN0cmluZywgb3RoZXJLZXk6IHN0cmluZywgZ3JvdXA6IEZvcm1Hcm91cCk6IFZhbGlkYXRvckZuIHtcblx0cmV0dXJuIChjb250cm9sOiBGb3JtQ29udHJvbCkgPT4ge1xuXG5cdFx0Ly8gY29uc3QgY29udHJvbCA9IGdyb3VwLmNvbnRyb2xzW2tleV07XG5cdFx0Y29uc3Qgb3RoZXJDb250cm9sID0gZ3JvdXAuY29udHJvbHNbb3RoZXJLZXldO1xuXG5cdFx0Ly8gY29uc29sZS5sb2coY29udHJvbC50b3VjaGVkLCBvdGhlckNvbnRyb2wudG91Y2hlZCk7XG5cblx0XHRpZiAoY29udHJvbC50b3VjaGVkICYmIG90aGVyQ29udHJvbC50b3VjaGVkKSB7XG5cdFx0XHRjb25zdCBtYXRjaCA9IGNvbnRyb2wudmFsdWUgPT09IG90aGVyQ29udHJvbC52YWx1ZTtcblx0XHRcdGlmICghbWF0Y2ggJiYgY29udHJvbC52YWxpZCAmJiBvdGhlckNvbnRyb2wudmFsaWQpIHtcblx0XHRcdFx0Y29udHJvbC5zZXRFcnJvcnMoe1xuXHRcdFx0XHRcdG1hdGNoOiBvdGhlcktleVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRtYXRjaDogb3RoZXJLZXkgKyAnICE9ICcgKyBrZXlcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtYXRjaCAmJiBjb250cm9sLmhhc0Vycm9yKCdtYXRjaCcpKSB7XG5cdFx0XHRcdGNvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xufVxuKi9cblxuLypcbnZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuXHRcdC8vIHNlbGYgdmFsdWVcblx0XHRjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG5cblx0XHQvLyBjb250cm9sIHZhbHVlXG5cdFx0Y29uc3QgaW5wdXQgPSBjb250cm9sLnJvb3QuZ2V0KHRoaXMubWF0Y2gpO1xuXG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsXG5cdFx0aWYgKGlucHV0ICYmIHZhbHVlICE9PSBpbnB1dC52YWx1ZSAmJiAhdGhpcy5pc1JldmVyc2UpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG1hdGNoOiB0cnVlLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyB2YWx1ZSBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdGlmIChpbnB1dCAmJiB2YWx1ZSA9PT0gaW5wdXQudmFsdWUgJiYgdGhpcy5pc1JldmVyc2UpIHtcblx0XHRcdGRlbGV0ZSBpbnB1dC5lcnJvcnNbJ21hdGNoJ107XG5cdFx0XHRpZiAoIU9iamVjdC5rZXlzKGlucHV0LmVycm9ycykubGVuZ3RoKSB7XG5cdFx0XHRcdGlucHV0LnNldEVycm9ycyhudWxsKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsIGFuZCByZXZlcnNlXG5cdFx0aWYgKGlucHV0ICYmIHZhbHVlICE9PSBpbnB1dC52YWx1ZSAmJiB0aGlzLmlzUmV2ZXJzZSkge1xuXHRcdFx0aW5wdXQuc2V0RXJyb3JzKHtcblx0XHRcdFx0bWF0Y2g6IHRydWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuKi9cbi8qXG5zdGF0aWMgaXNWYWxpZFN0cmluZyhjb250cm9sOiBGb3JtQ29udHJvbCkge1xuXHRpZiAoIWNvbnRyb2wudmFsdWUgfHwgdHlwZW9mIGNvbnRyb2wudmFsdWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHtpc05vdFZhbGlkU3RyaW5nOiB0cnVlfTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn1cblxuc3RhdGljIGlzVmFsaWROYW1lKGNvbnRyb2w6IEZvcm1Db250cm9sKSB7XG5cdGlmIChjb250cm9sLnZhbGlkICYmIGNvbnRyb2wudmFsdWUgIT09ICdKb2huIERvZScpIHtcblx0XHRyZXR1cm4ge2lzTm90VmFsaWROYW1lOiB0cnVlfTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn1cbiovXG4iXX0=