/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLGNBQWMsQ0FBQyxRQUFnQixFQUFFLE9BQXdCLEVBQUUsS0FBZ0I7SUFBMUMsd0JBQUEsRUFBQSxlQUF3QjtJQUN4RSxPQUFPLFVBQUMsT0FBb0I7O1lBQ3JCLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQzs7WUFFdkMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLO1FBRTNCLGtCQUFrQjtRQUNsQixJQUFJLFlBQVksSUFBSSxLQUFLLEtBQUssWUFBWSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3RCxPQUFPO2dCQUNOLEtBQUssRUFBRSxJQUFJO2FBQ1gsQ0FBQztTQUNGO1FBRUQsMEJBQTBCO1FBQzFCLElBQUksWUFBWSxJQUFJLEtBQUssS0FBSyxZQUFZLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUM1RCxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hCLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRTtvQkFDN0MsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDN0I7YUFDRDtTQUNEO1FBQ0QsOEJBQThCO1FBQzlCLElBQUksWUFBWSxJQUFJLEtBQUssS0FBSyxZQUFZLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUM1RCxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUN0QixLQUFLLEVBQUUsSUFBSTthQUNYLENBQUMsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFZhbGlkYXRvcihvdGhlcktleTogc3RyaW5nLCByZXZlcnNlOiBib29sZWFuID0gZmFsc2UsIGdyb3VwOiBGb3JtR3JvdXApOiBWYWxpZGF0b3JGbiB7XG5cdHJldHVybiAoY29udHJvbDogRm9ybUNvbnRyb2wpID0+IHtcblx0XHRjb25zdCBvdGhlckNvbnRyb2wgPSBncm91cC5jb250cm9sc1tvdGhlcktleV07XG5cblx0XHRjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG5cblx0XHQvLyB2YWx1ZSBub3QgZXF1YWxcblx0XHRpZiAob3RoZXJDb250cm9sICYmIHZhbHVlICE9PSBvdGhlckNvbnRyb2wudmFsdWUgJiYgIXJldmVyc2UpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG1hdGNoOiB0cnVlLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyB2YWx1ZSBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdGlmIChvdGhlckNvbnRyb2wgJiYgdmFsdWUgPT09IG90aGVyQ29udHJvbC52YWx1ZSAmJiByZXZlcnNlKSB7XG5cdFx0XHRpZiAob3RoZXJDb250cm9sLmVycm9ycykge1xuXHRcdFx0XHRkZWxldGUgb3RoZXJDb250cm9sLmVycm9yc1snbWF0Y2gnXTtcblx0XHRcdFx0aWYgKCFPYmplY3Qua2V5cyhvdGhlckNvbnRyb2wuZXJyb3JzKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRvdGhlckNvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHZhbHVlIG5vdCBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdGlmIChvdGhlckNvbnRyb2wgJiYgdmFsdWUgIT09IG90aGVyQ29udHJvbC52YWx1ZSAmJiByZXZlcnNlKSB7XG5cdFx0XHRvdGhlckNvbnRyb2wuc2V0RXJyb3JzKHtcblx0XHRcdFx0bWF0Y2g6IHRydWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcbn1cblxuLypcbmV4cG9ydCBmdW5jdGlvbiBfX21hdGNoVmFsaWRhdG9yKGtleTogc3RyaW5nLCBvdGhlcktleTogc3RyaW5nLCBncm91cDogRm9ybUdyb3VwKTogVmFsaWRhdG9yRm4ge1xuXHRyZXR1cm4gKGNvbnRyb2w6IEZvcm1Db250cm9sKSA9PiB7XG5cblx0XHQvLyBjb25zdCBjb250cm9sID0gZ3JvdXAuY29udHJvbHNba2V5XTtcblx0XHRjb25zdCBvdGhlckNvbnRyb2wgPSBncm91cC5jb250cm9sc1tvdGhlcktleV07XG5cblx0XHQvLyBjb25zb2xlLmxvZyhjb250cm9sLnRvdWNoZWQsIG90aGVyQ29udHJvbC50b3VjaGVkKTtcblxuXHRcdGlmIChjb250cm9sLnRvdWNoZWQgJiYgb3RoZXJDb250cm9sLnRvdWNoZWQpIHtcblx0XHRcdGNvbnN0IG1hdGNoID0gY29udHJvbC52YWx1ZSA9PT0gb3RoZXJDb250cm9sLnZhbHVlO1xuXHRcdFx0aWYgKCFtYXRjaCAmJiBjb250cm9sLnZhbGlkICYmIG90aGVyQ29udHJvbC52YWxpZCkge1xuXHRcdFx0XHRjb250cm9sLnNldEVycm9ycyh7XG5cdFx0XHRcdFx0bWF0Y2g6IG90aGVyS2V5XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG1hdGNoOiBvdGhlcktleSArICcgIT0gJyArIGtleVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1hdGNoICYmIGNvbnRyb2wuaGFzRXJyb3IoJ21hdGNoJykpIHtcblx0XHRcdFx0Y29udHJvbC5zZXRFcnJvcnMobnVsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG59XG4qL1xuXG4vKlxudmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG5cdFx0Ly8gc2VsZiB2YWx1ZVxuXHRcdGNvbnN0IHZhbHVlID0gY29udHJvbC52YWx1ZTtcblxuXHRcdC8vIGNvbnRyb2wgdmFsdWVcblx0XHRjb25zdCBpbnB1dCA9IGNvbnRyb2wucm9vdC5nZXQodGhpcy5tYXRjaCk7XG5cblx0XHQvLyB2YWx1ZSBub3QgZXF1YWxcblx0XHRpZiAoaW5wdXQgJiYgdmFsdWUgIT09IGlucHV0LnZhbHVlICYmICF0aGlzLmlzUmV2ZXJzZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bWF0Y2g6IHRydWUsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIHZhbHVlIGVxdWFsIGFuZCByZXZlcnNlXG5cdFx0aWYgKGlucHV0ICYmIHZhbHVlID09PSBpbnB1dC52YWx1ZSAmJiB0aGlzLmlzUmV2ZXJzZSkge1xuXHRcdFx0ZGVsZXRlIGlucHV0LmVycm9yc1snbWF0Y2gnXTtcblx0XHRcdGlmICghT2JqZWN0LmtleXMoaW5wdXQuZXJyb3JzKS5sZW5ndGgpIHtcblx0XHRcdFx0aW5wdXQuc2V0RXJyb3JzKG51bGwpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyB2YWx1ZSBub3QgZXF1YWwgYW5kIHJldmVyc2Vcblx0XHRpZiAoaW5wdXQgJiYgdmFsdWUgIT09IGlucHV0LnZhbHVlICYmIHRoaXMuaXNSZXZlcnNlKSB7XG5cdFx0XHRpbnB1dC5zZXRFcnJvcnMoe1xuXHRcdFx0XHRtYXRjaDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG4qL1xuLypcbnN0YXRpYyBpc1ZhbGlkU3RyaW5nKGNvbnRyb2w6IEZvcm1Db250cm9sKSB7XG5cdGlmICghY29udHJvbC52YWx1ZSB8fCB0eXBlb2YgY29udHJvbC52YWx1ZSAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4ge2lzTm90VmFsaWRTdHJpbmc6IHRydWV9O1xuXHR9XG5cdHJldHVybiBudWxsO1xufVxuXG5zdGF0aWMgaXNWYWxpZE5hbWUoY29udHJvbDogRm9ybUNvbnRyb2wpIHtcblx0aWYgKGNvbnRyb2wudmFsaWQgJiYgY29udHJvbC52YWx1ZSAhPT0gJ0pvaG4gRG9lJykge1xuXHRcdHJldHVybiB7aXNOb3RWYWxpZE5hbWU6IHRydWV9O1xuXHR9XG5cdHJldHVybiBudWxsO1xufVxuKi9cbiJdfQ==