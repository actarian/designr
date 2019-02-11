/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} key
 * @param {?} otherKey
 * @param {?} group
 * @return {?}
 */
export function __matchValidator(key, otherKey, group) {
    return function (control) {
        // const control = group.controls[key];
        /** @type {?} */
        var otherControl = group.controls[otherKey];
        // console.log(control.touched, otherControl.touched);
        if (control.touched && otherControl.touched) {
            /** @type {?} */
            var match = control.value === otherControl.value;
            if (!match && control.valid && otherControl.valid) {
                control.setErrors({
                    match: otherKey
                });
                return {
                    match: otherKey + ' != ' + key
                };
            }
            if (match && control.hasError('match')) {
                control.setErrors(null);
            }
        }
        return null;
    };
}
/**
 * @param {?} otherKey
 * @param {?=} reverse
 * @param {?=} group
 * @return {?}
 */
export function matchValidator(otherKey, reverse, group) {
    if (reverse === void 0) { reverse = false; }
    return function (control) {
        /** @type {?} */
        var otherControl = group.controls[otherKey];
        /** @type {?} */
        var value = control.value;
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
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9jb250cm9scy9tYXRjaC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsUUFBZ0IsRUFBRSxLQUFnQjtJQUMvRSxPQUFPLFVBQUMsT0FBb0I7OztZQUdyQixZQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFFN0Msc0RBQXNEO1FBRXRELElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFOztnQkFDdEMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEtBQUssWUFBWSxDQUFDLEtBQUs7WUFDbEQsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xELE9BQU8sQ0FBQyxTQUFTLENBQUM7b0JBQ2pCLEtBQUssRUFBRSxRQUFRO2lCQUNmLENBQUMsQ0FBQztnQkFDSCxPQUFPO29CQUNOLEtBQUssRUFBRSxRQUFRLEdBQUcsTUFBTSxHQUFHLEdBQUc7aUJBQzlCLENBQUM7YUFDRjtZQUNELElBQUksS0FBSyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3ZDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEI7U0FDRDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0FBQ0gsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsUUFBZ0IsRUFBRSxPQUF3QixFQUFFLEtBQWdCO0lBQTFDLHdCQUFBLEVBQUEsZUFBd0I7SUFDeEUsT0FBTyxVQUFDLE9BQW9COztZQUNyQixZQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7O1lBRXZDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSztRQUUzQixrQkFBa0I7UUFDbEIsSUFBSSxZQUFZLElBQUksS0FBSyxLQUFLLFlBQVksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDN0QsT0FBTztnQkFDTixLQUFLLEVBQUUsSUFBSTthQUNYLENBQUM7U0FDRjtRQUVELDBCQUEwQjtRQUMxQixJQUFJLFlBQVksSUFBSSxLQUFLLEtBQUssWUFBWSxDQUFDLEtBQUssSUFBSSxPQUFPLEVBQUU7WUFDNUQsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO2dCQUN4QixPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQzdDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzdCO2FBQ0Q7U0FDRDtRQUNELDhCQUE4QjtRQUM5QixJQUFJLFlBQVksSUFBSSxLQUFLLEtBQUssWUFBWSxDQUFDLEtBQUssSUFBSSxPQUFPLEVBQUU7WUFDNUQsWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFDdEIsS0FBSyxFQUFFLElBQUk7YUFDWCxDQUFDLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gX19tYXRjaFZhbGlkYXRvcihrZXk6IHN0cmluZywgb3RoZXJLZXk6IHN0cmluZywgZ3JvdXA6IEZvcm1Hcm91cCk6IFZhbGlkYXRvckZuIHtcblx0cmV0dXJuIChjb250cm9sOiBGb3JtQ29udHJvbCkgPT4ge1xuXG5cdFx0Ly8gY29uc3QgY29udHJvbCA9IGdyb3VwLmNvbnRyb2xzW2tleV07XG5cdFx0Y29uc3Qgb3RoZXJDb250cm9sID0gZ3JvdXAuY29udHJvbHNbb3RoZXJLZXldO1xuXG5cdFx0Ly8gY29uc29sZS5sb2coY29udHJvbC50b3VjaGVkLCBvdGhlckNvbnRyb2wudG91Y2hlZCk7XG5cblx0XHRpZiAoY29udHJvbC50b3VjaGVkICYmIG90aGVyQ29udHJvbC50b3VjaGVkKSB7XG5cdFx0XHRjb25zdCBtYXRjaCA9IGNvbnRyb2wudmFsdWUgPT09IG90aGVyQ29udHJvbC52YWx1ZTtcblx0XHRcdGlmICghbWF0Y2ggJiYgY29udHJvbC52YWxpZCAmJiBvdGhlckNvbnRyb2wudmFsaWQpIHtcblx0XHRcdFx0Y29udHJvbC5zZXRFcnJvcnMoe1xuXHRcdFx0XHRcdG1hdGNoOiBvdGhlcktleVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRtYXRjaDogb3RoZXJLZXkgKyAnICE9ICcgKyBrZXlcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtYXRjaCAmJiBjb250cm9sLmhhc0Vycm9yKCdtYXRjaCcpKSB7XG5cdFx0XHRcdGNvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hWYWxpZGF0b3Iob3RoZXJLZXk6IHN0cmluZywgcmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlLCBncm91cDogRm9ybUdyb3VwKTogVmFsaWRhdG9yRm4ge1xuXHRyZXR1cm4gKGNvbnRyb2w6IEZvcm1Db250cm9sKSA9PiB7XG5cdFx0Y29uc3Qgb3RoZXJDb250cm9sID0gZ3JvdXAuY29udHJvbHNbb3RoZXJLZXldO1xuXG5cdFx0Y29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xuXG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsXG5cdFx0aWYgKG90aGVyQ29udHJvbCAmJiB2YWx1ZSAhPT0gb3RoZXJDb250cm9sLnZhbHVlICYmICFyZXZlcnNlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRtYXRjaDogdHJ1ZSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gdmFsdWUgZXF1YWwgYW5kIHJldmVyc2Vcblx0XHRpZiAob3RoZXJDb250cm9sICYmIHZhbHVlID09PSBvdGhlckNvbnRyb2wudmFsdWUgJiYgcmV2ZXJzZSkge1xuXHRcdFx0aWYgKG90aGVyQ29udHJvbC5lcnJvcnMpIHtcblx0XHRcdFx0ZGVsZXRlIG90aGVyQ29udHJvbC5lcnJvcnNbJ21hdGNoJ107XG5cdFx0XHRcdGlmICghT2JqZWN0LmtleXMob3RoZXJDb250cm9sLmVycm9ycykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0b3RoZXJDb250cm9sLnNldEVycm9ycyhudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyB2YWx1ZSBub3QgZXF1YWwgYW5kIHJldmVyc2Vcblx0XHRpZiAob3RoZXJDb250cm9sICYmIHZhbHVlICE9PSBvdGhlckNvbnRyb2wudmFsdWUgJiYgcmV2ZXJzZSkge1xuXHRcdFx0b3RoZXJDb250cm9sLnNldEVycm9ycyh7XG5cdFx0XHRcdG1hdGNoOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG59XG5cbi8qXG52YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcblx0XHQvLyBzZWxmIHZhbHVlXG5cdFx0Y29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xuXG5cdFx0Ly8gY29udHJvbCB2YWx1ZVxuXHRcdGNvbnN0IGlucHV0ID0gY29udHJvbC5yb290LmdldCh0aGlzLm1hdGNoKTtcblxuXHRcdC8vIHZhbHVlIG5vdCBlcXVhbFxuXHRcdGlmIChpbnB1dCAmJiB2YWx1ZSAhPT0gaW5wdXQudmFsdWUgJiYgIXRoaXMuaXNSZXZlcnNlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRtYXRjaDogdHJ1ZSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gdmFsdWUgZXF1YWwgYW5kIHJldmVyc2Vcblx0XHRpZiAoaW5wdXQgJiYgdmFsdWUgPT09IGlucHV0LnZhbHVlICYmIHRoaXMuaXNSZXZlcnNlKSB7XG5cdFx0XHRkZWxldGUgaW5wdXQuZXJyb3JzWydtYXRjaCddO1xuXHRcdFx0aWYgKCFPYmplY3Qua2V5cyhpbnB1dC5lcnJvcnMpLmxlbmd0aCkge1xuXHRcdFx0XHRpbnB1dC5zZXRFcnJvcnMobnVsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHZhbHVlIG5vdCBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdGlmIChpbnB1dCAmJiB2YWx1ZSAhPT0gaW5wdXQudmFsdWUgJiYgdGhpcy5pc1JldmVyc2UpIHtcblx0XHRcdGlucHV0LnNldEVycm9ycyh7XG5cdFx0XHRcdG1hdGNoOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbiovXG4vKlxuc3RhdGljIGlzVmFsaWRTdHJpbmcoY29udHJvbDogRm9ybUNvbnRyb2wpIHtcblx0aWYgKCFjb250cm9sLnZhbHVlIHx8IHR5cGVvZiBjb250cm9sLnZhbHVlICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiB7aXNOb3RWYWxpZFN0cmluZzogdHJ1ZX07XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbnN0YXRpYyBpc1ZhbGlkTmFtZShjb250cm9sOiBGb3JtQ29udHJvbCkge1xuXHRpZiAoY29udHJvbC52YWxpZCAmJiBjb250cm9sLnZhbHVlICE9PSAnSm9obiBEb2UnKSB7XG5cdFx0cmV0dXJuIHtpc05vdFZhbGlkTmFtZTogdHJ1ZX07XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG4qL1xuIl19