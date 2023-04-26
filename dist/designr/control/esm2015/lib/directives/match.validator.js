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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLGNBQWMsQ0FBQyxRQUFnQixFQUFFLFVBQW1CLEtBQUssRUFBRSxLQUFnQjtJQUMxRjs7OztJQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTs7Y0FDdEQsWUFBWSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDOztjQUN2QyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7UUFDM0Isa0JBQWtCO1FBQ2xCLElBQUksWUFBWSxJQUFJLEtBQUssS0FBSyxZQUFZLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzdELE9BQU87Z0JBQ04sS0FBSyxFQUFFLElBQUk7YUFDWCxDQUFDO1NBQ0Y7UUFDRCwwQkFBMEI7UUFDMUIsSUFBSSxZQUFZLElBQUksS0FBSyxLQUFLLFlBQVksQ0FBQyxLQUFLLElBQUksT0FBTyxFQUFFO1lBQzVELElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTtnQkFDeEIsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUM3QyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QjthQUNEO1NBQ0Q7UUFDRCw4QkFBOEI7UUFDOUIsSUFBSSxZQUFZLElBQUksS0FBSyxLQUFLLFlBQVksQ0FBQyxLQUFLLElBQUksT0FBTyxFQUFFO1lBQzVELFlBQVksQ0FBQyxTQUFTLENBQUM7Z0JBQ3RCLEtBQUssRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUMsRUFBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hWYWxpZGF0b3Iob3RoZXJLZXk6IHN0cmluZywgcmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlLCBncm91cDogRm9ybUdyb3VwKTogVmFsaWRhdG9yRm4ge1xyXG5cdHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG5cdFx0Y29uc3Qgb3RoZXJDb250cm9sID0gZ3JvdXAuY29udHJvbHNbb3RoZXJLZXldO1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xyXG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsXHJcblx0XHRpZiAob3RoZXJDb250cm9sICYmIHZhbHVlICE9PSBvdGhlckNvbnRyb2wudmFsdWUgJiYgIXJldmVyc2UpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRtYXRjaDogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdC8vIHZhbHVlIGVxdWFsIGFuZCByZXZlcnNlXHJcblx0XHRpZiAob3RoZXJDb250cm9sICYmIHZhbHVlID09PSBvdGhlckNvbnRyb2wudmFsdWUgJiYgcmV2ZXJzZSkge1xyXG5cdFx0XHRpZiAob3RoZXJDb250cm9sLmVycm9ycykge1xyXG5cdFx0XHRcdGRlbGV0ZSBvdGhlckNvbnRyb2wuZXJyb3JzWydtYXRjaCddO1xyXG5cdFx0XHRcdGlmICghT2JqZWN0LmtleXMob3RoZXJDb250cm9sLmVycm9ycykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRvdGhlckNvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsIGFuZCByZXZlcnNlXHJcblx0XHRpZiAob3RoZXJDb250cm9sICYmIHZhbHVlICE9PSBvdGhlckNvbnRyb2wudmFsdWUgJiYgcmV2ZXJzZSkge1xyXG5cdFx0XHRvdGhlckNvbnRyb2wuc2V0RXJyb3JzKHtcclxuXHRcdFx0XHRtYXRjaDogdHJ1ZSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9O1xyXG59XHJcbiJdfQ==