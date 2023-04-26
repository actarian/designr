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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLGNBQWMsQ0FBQyxRQUFnQixFQUFFLE9BQXdCLEVBQUUsS0FBZ0I7SUFBMUMsd0JBQUEsRUFBQSxlQUF3QjtJQUN4RTs7OztJQUFPLFVBQUMsT0FBd0I7O1lBQ3pCLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQzs7WUFDdkMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLO1FBQzNCLGtCQUFrQjtRQUNsQixJQUFJLFlBQVksSUFBSSxLQUFLLEtBQUssWUFBWSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3RCxPQUFPO2dCQUNOLEtBQUssRUFBRSxJQUFJO2FBQ1gsQ0FBQztTQUNGO1FBQ0QsMEJBQTBCO1FBQzFCLElBQUksWUFBWSxJQUFJLEtBQUssS0FBSyxZQUFZLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUM1RCxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hCLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRTtvQkFDN0MsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDN0I7YUFDRDtTQUNEO1FBQ0QsOEJBQThCO1FBQzlCLElBQUksWUFBWSxJQUFJLEtBQUssS0FBSyxZQUFZLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUM1RCxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUN0QixLQUFLLEVBQUUsSUFBSTthQUNYLENBQUMsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDLEVBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoVmFsaWRhdG9yKG90aGVyS2V5OiBzdHJpbmcsIHJldmVyc2U6IGJvb2xlYW4gPSBmYWxzZSwgZ3JvdXA6IEZvcm1Hcm91cCk6IFZhbGlkYXRvckZuIHtcclxuXHRyZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuXHRcdGNvbnN0IG90aGVyQ29udHJvbCA9IGdyb3VwLmNvbnRyb2xzW290aGVyS2V5XTtcclxuXHRcdGNvbnN0IHZhbHVlID0gY29udHJvbC52YWx1ZTtcclxuXHRcdC8vIHZhbHVlIG5vdCBlcXVhbFxyXG5cdFx0aWYgKG90aGVyQ29udHJvbCAmJiB2YWx1ZSAhPT0gb3RoZXJDb250cm9sLnZhbHVlICYmICFyZXZlcnNlKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bWF0Y2g6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHQvLyB2YWx1ZSBlcXVhbCBhbmQgcmV2ZXJzZVxyXG5cdFx0aWYgKG90aGVyQ29udHJvbCAmJiB2YWx1ZSA9PT0gb3RoZXJDb250cm9sLnZhbHVlICYmIHJldmVyc2UpIHtcclxuXHRcdFx0aWYgKG90aGVyQ29udHJvbC5lcnJvcnMpIHtcclxuXHRcdFx0XHRkZWxldGUgb3RoZXJDb250cm9sLmVycm9yc1snbWF0Y2gnXTtcclxuXHRcdFx0XHRpZiAoIU9iamVjdC5rZXlzKG90aGVyQ29udHJvbC5lcnJvcnMpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0b3RoZXJDb250cm9sLnNldEVycm9ycyhudWxsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vIHZhbHVlIG5vdCBlcXVhbCBhbmQgcmV2ZXJzZVxyXG5cdFx0aWYgKG90aGVyQ29udHJvbCAmJiB2YWx1ZSAhPT0gb3RoZXJDb250cm9sLnZhbHVlICYmIHJldmVyc2UpIHtcclxuXHRcdFx0b3RoZXJDb250cm9sLnNldEVycm9ycyh7XHJcblx0XHRcdFx0bWF0Y2g6IHRydWUsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fTtcclxufVxyXG4iXX0=