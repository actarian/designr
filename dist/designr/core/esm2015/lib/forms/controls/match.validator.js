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
    return (control) => {
        // const control = group.controls[key];
        /** @type {?} */
        const otherControl = group.controls[otherKey];
        // console.log(control.touched, otherControl.touched);
        if (control.touched && otherControl.touched) {
            /** @type {?} */
            const match = control.value === otherControl.value;
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
export function matchValidator(otherKey, reverse = false, group) {
    return (control) => {
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
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9jb250cm9scy9tYXRjaC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsUUFBZ0IsRUFBRSxLQUFnQjtJQUMvRSxPQUFPLENBQUMsT0FBb0IsRUFBRSxFQUFFOzs7Y0FHekIsWUFBWSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRTdDLHNEQUFzRDtRQUV0RCxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRTs7a0JBQ3RDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxLQUFLLFlBQVksQ0FBQyxLQUFLO1lBQ2xELElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFO2dCQUNsRCxPQUFPLENBQUMsU0FBUyxDQUFDO29CQUNqQixLQUFLLEVBQUUsUUFBUTtpQkFDZixDQUFDLENBQUM7Z0JBQ0gsT0FBTztvQkFDTixLQUFLLEVBQUUsUUFBUSxHQUFHLE1BQU0sR0FBRyxHQUFHO2lCQUM5QixDQUFDO2FBQ0Y7WUFDRCxJQUFJLEtBQUssSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN2QyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Q7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUMsQ0FBQztBQUNILENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLFFBQWdCLEVBQUUsVUFBbUIsS0FBSyxFQUFFLEtBQWdCO0lBQzFGLE9BQU8sQ0FBQyxPQUFvQixFQUFFLEVBQUU7O2NBQ3pCLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQzs7Y0FFdkMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLO1FBRTNCLGtCQUFrQjtRQUNsQixJQUFJLFlBQVksSUFBSSxLQUFLLEtBQUssWUFBWSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3RCxPQUFPO2dCQUNOLEtBQUssRUFBRSxJQUFJO2FBQ1gsQ0FBQztTQUNGO1FBRUQsMEJBQTBCO1FBQzFCLElBQUksWUFBWSxJQUFJLEtBQUssS0FBSyxZQUFZLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUM1RCxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hCLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRTtvQkFDN0MsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDN0I7YUFDRDtTQUNEO1FBQ0QsOEJBQThCO1FBQzlCLElBQUksWUFBWSxJQUFJLEtBQUssS0FBSyxZQUFZLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUM1RCxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUN0QixLQUFLLEVBQUUsSUFBSTthQUNYLENBQUMsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21hdGNoVmFsaWRhdG9yKGtleTogc3RyaW5nLCBvdGhlcktleTogc3RyaW5nLCBncm91cDogRm9ybUdyb3VwKTogVmFsaWRhdG9yRm4ge1xuXHRyZXR1cm4gKGNvbnRyb2w6IEZvcm1Db250cm9sKSA9PiB7XG5cblx0XHQvLyBjb25zdCBjb250cm9sID0gZ3JvdXAuY29udHJvbHNba2V5XTtcblx0XHRjb25zdCBvdGhlckNvbnRyb2wgPSBncm91cC5jb250cm9sc1tvdGhlcktleV07XG5cblx0XHQvLyBjb25zb2xlLmxvZyhjb250cm9sLnRvdWNoZWQsIG90aGVyQ29udHJvbC50b3VjaGVkKTtcblxuXHRcdGlmIChjb250cm9sLnRvdWNoZWQgJiYgb3RoZXJDb250cm9sLnRvdWNoZWQpIHtcblx0XHRcdGNvbnN0IG1hdGNoID0gY29udHJvbC52YWx1ZSA9PT0gb3RoZXJDb250cm9sLnZhbHVlO1xuXHRcdFx0aWYgKCFtYXRjaCAmJiBjb250cm9sLnZhbGlkICYmIG90aGVyQ29udHJvbC52YWxpZCkge1xuXHRcdFx0XHRjb250cm9sLnNldEVycm9ycyh7XG5cdFx0XHRcdFx0bWF0Y2g6IG90aGVyS2V5XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG1hdGNoOiBvdGhlcktleSArICcgIT0gJyArIGtleVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1hdGNoICYmIGNvbnRyb2wuaGFzRXJyb3IoJ21hdGNoJykpIHtcblx0XHRcdFx0Y29udHJvbC5zZXRFcnJvcnMobnVsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFZhbGlkYXRvcihvdGhlcktleTogc3RyaW5nLCByZXZlcnNlOiBib29sZWFuID0gZmFsc2UsIGdyb3VwOiBGb3JtR3JvdXApOiBWYWxpZGF0b3JGbiB7XG5cdHJldHVybiAoY29udHJvbDogRm9ybUNvbnRyb2wpID0+IHtcblx0XHRjb25zdCBvdGhlckNvbnRyb2wgPSBncm91cC5jb250cm9sc1tvdGhlcktleV07XG5cblx0XHRjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG5cblx0XHQvLyB2YWx1ZSBub3QgZXF1YWxcblx0XHRpZiAob3RoZXJDb250cm9sICYmIHZhbHVlICE9PSBvdGhlckNvbnRyb2wudmFsdWUgJiYgIXJldmVyc2UpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG1hdGNoOiB0cnVlLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyB2YWx1ZSBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdGlmIChvdGhlckNvbnRyb2wgJiYgdmFsdWUgPT09IG90aGVyQ29udHJvbC52YWx1ZSAmJiByZXZlcnNlKSB7XG5cdFx0XHRpZiAob3RoZXJDb250cm9sLmVycm9ycykge1xuXHRcdFx0XHRkZWxldGUgb3RoZXJDb250cm9sLmVycm9yc1snbWF0Y2gnXTtcblx0XHRcdFx0aWYgKCFPYmplY3Qua2V5cyhvdGhlckNvbnRyb2wuZXJyb3JzKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRvdGhlckNvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHZhbHVlIG5vdCBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdGlmIChvdGhlckNvbnRyb2wgJiYgdmFsdWUgIT09IG90aGVyQ29udHJvbC52YWx1ZSAmJiByZXZlcnNlKSB7XG5cdFx0XHRvdGhlckNvbnRyb2wuc2V0RXJyb3JzKHtcblx0XHRcdFx0bWF0Y2g6IHRydWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcbn1cblxuLypcbnZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuXHRcdC8vIHNlbGYgdmFsdWVcblx0XHRjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG5cblx0XHQvLyBjb250cm9sIHZhbHVlXG5cdFx0Y29uc3QgaW5wdXQgPSBjb250cm9sLnJvb3QuZ2V0KHRoaXMubWF0Y2gpO1xuXG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsXG5cdFx0aWYgKGlucHV0ICYmIHZhbHVlICE9PSBpbnB1dC52YWx1ZSAmJiAhdGhpcy5pc1JldmVyc2UpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG1hdGNoOiB0cnVlLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyB2YWx1ZSBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdGlmIChpbnB1dCAmJiB2YWx1ZSA9PT0gaW5wdXQudmFsdWUgJiYgdGhpcy5pc1JldmVyc2UpIHtcblx0XHRcdGRlbGV0ZSBpbnB1dC5lcnJvcnNbJ21hdGNoJ107XG5cdFx0XHRpZiAoIU9iamVjdC5rZXlzKGlucHV0LmVycm9ycykubGVuZ3RoKSB7XG5cdFx0XHRcdGlucHV0LnNldEVycm9ycyhudWxsKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsIGFuZCByZXZlcnNlXG5cdFx0aWYgKGlucHV0ICYmIHZhbHVlICE9PSBpbnB1dC52YWx1ZSAmJiB0aGlzLmlzUmV2ZXJzZSkge1xuXHRcdFx0aW5wdXQuc2V0RXJyb3JzKHtcblx0XHRcdFx0bWF0Y2g6IHRydWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuKi9cbi8qXG5zdGF0aWMgaXNWYWxpZFN0cmluZyhjb250cm9sOiBGb3JtQ29udHJvbCkge1xuXHRpZiAoIWNvbnRyb2wudmFsdWUgfHwgdHlwZW9mIGNvbnRyb2wudmFsdWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHtpc05vdFZhbGlkU3RyaW5nOiB0cnVlfTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn1cblxuc3RhdGljIGlzVmFsaWROYW1lKGNvbnRyb2w6IEZvcm1Db250cm9sKSB7XG5cdGlmIChjb250cm9sLnZhbGlkICYmIGNvbnRyb2wudmFsdWUgIT09ICdKb2huIERvZScpIHtcblx0XHRyZXR1cm4ge2lzTm90VmFsaWROYW1lOiB0cnVlfTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn1cbiovXG4iXX0=