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
export function matchValidator(otherKey, reverse, group) {
    if (reverse === void 0) { reverse = false; }
    return (/**
     * @param {?} control
     * @return {?}
     */
    function (control) {
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
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLGNBQWMsQ0FBQyxRQUFnQixFQUFFLE9BQXdCLEVBQUUsS0FBZ0I7SUFBMUMsd0JBQUEsRUFBQSxlQUF3QjtJQUN4RTs7OztJQUFPLFVBQUMsT0FBd0I7O1lBQ3pCLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQzs7WUFDdkMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLO1FBQzNCLGtCQUFrQjtRQUNsQixJQUFJLFlBQVksSUFBSSxLQUFLLEtBQUssWUFBWSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3RCxPQUFPO2dCQUNOLEtBQUssRUFBRSxJQUFJO2FBQ1gsQ0FBQztTQUNGO1FBQ0QsMEJBQTBCO1FBQzFCLElBQUksWUFBWSxJQUFJLEtBQUssS0FBSyxZQUFZLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUM1RCxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hCLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRTtvQkFDN0MsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDN0I7YUFDRDtTQUNEO1FBQ0QsOEJBQThCO1FBQzlCLElBQUksWUFBWSxJQUFJLEtBQUssS0FBSyxZQUFZLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUM1RCxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUN0QixLQUFLLEVBQUUsSUFBSTthQUNYLENBQUMsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDLEVBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hWYWxpZGF0b3Iob3RoZXJLZXk6IHN0cmluZywgcmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlLCBncm91cDogRm9ybUdyb3VwKTogVmFsaWRhdG9yRm4ge1xuXHRyZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcblx0XHRjb25zdCBvdGhlckNvbnRyb2wgPSBncm91cC5jb250cm9sc1tvdGhlcktleV07XG5cdFx0Y29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xuXHRcdC8vIHZhbHVlIG5vdCBlcXVhbFxuXHRcdGlmIChvdGhlckNvbnRyb2wgJiYgdmFsdWUgIT09IG90aGVyQ29udHJvbC52YWx1ZSAmJiAhcmV2ZXJzZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bWF0Y2g6IHRydWUsXG5cdFx0XHR9O1xuXHRcdH1cblx0XHQvLyB2YWx1ZSBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdGlmIChvdGhlckNvbnRyb2wgJiYgdmFsdWUgPT09IG90aGVyQ29udHJvbC52YWx1ZSAmJiByZXZlcnNlKSB7XG5cdFx0XHRpZiAob3RoZXJDb250cm9sLmVycm9ycykge1xuXHRcdFx0XHRkZWxldGUgb3RoZXJDb250cm9sLmVycm9yc1snbWF0Y2gnXTtcblx0XHRcdFx0aWYgKCFPYmplY3Qua2V5cyhvdGhlckNvbnRyb2wuZXJyb3JzKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRvdGhlckNvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHZhbHVlIG5vdCBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdGlmIChvdGhlckNvbnRyb2wgJiYgdmFsdWUgIT09IG90aGVyQ29udHJvbC52YWx1ZSAmJiByZXZlcnNlKSB7XG5cdFx0XHRvdGhlckNvbnRyb2wuc2V0RXJyb3JzKHtcblx0XHRcdFx0bWF0Y2g6IHRydWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG59XG4iXX0=