export function matchValidator(otherKey, reverse, group) {
    if (reverse === void 0) { reverse = false; }
    return function (control) {
        var otherControl = group.controls[otherKey];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLFVBQVUsY0FBYyxDQUFDLFFBQWdCLEVBQUUsT0FBd0IsRUFBRSxLQUFnQjtJQUExQyx3QkFBQSxFQUFBLGVBQXdCO0lBQ3hFLE9BQU8sVUFBQyxPQUF3QjtRQUMvQixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDNUIsa0JBQWtCO1FBQ2xCLElBQUksWUFBWSxJQUFJLEtBQUssS0FBSyxZQUFZLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzdELE9BQU87Z0JBQ04sS0FBSyxFQUFFLElBQUk7YUFDWCxDQUFDO1NBQ0Y7UUFDRCwwQkFBMEI7UUFDMUIsSUFBSSxZQUFZLElBQUksS0FBSyxLQUFLLFlBQVksQ0FBQyxLQUFLLElBQUksT0FBTyxFQUFFO1lBQzVELElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTtnQkFDeEIsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUM3QyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QjthQUNEO1NBQ0Q7UUFDRCw4QkFBOEI7UUFDOUIsSUFBSSxZQUFZLElBQUksS0FBSyxLQUFLLFlBQVksQ0FBQyxLQUFLLElBQUksT0FBTyxFQUFFO1lBQzVELFlBQVksQ0FBQyxTQUFTLENBQUM7Z0JBQ3RCLEtBQUssRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFZhbGlkYXRvcihvdGhlcktleTogc3RyaW5nLCByZXZlcnNlOiBib29sZWFuID0gZmFsc2UsIGdyb3VwOiBGb3JtR3JvdXApOiBWYWxpZGF0b3JGbiB7XG5cdHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuXHRcdGNvbnN0IG90aGVyQ29udHJvbCA9IGdyb3VwLmNvbnRyb2xzW290aGVyS2V5XTtcblx0XHRjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsXG5cdFx0aWYgKG90aGVyQ29udHJvbCAmJiB2YWx1ZSAhPT0gb3RoZXJDb250cm9sLnZhbHVlICYmICFyZXZlcnNlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRtYXRjaDogdHJ1ZSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdC8vIHZhbHVlIGVxdWFsIGFuZCByZXZlcnNlXG5cdFx0aWYgKG90aGVyQ29udHJvbCAmJiB2YWx1ZSA9PT0gb3RoZXJDb250cm9sLnZhbHVlICYmIHJldmVyc2UpIHtcblx0XHRcdGlmIChvdGhlckNvbnRyb2wuZXJyb3JzKSB7XG5cdFx0XHRcdGRlbGV0ZSBvdGhlckNvbnRyb2wuZXJyb3JzWydtYXRjaCddO1xuXHRcdFx0XHRpZiAoIU9iamVjdC5rZXlzKG90aGVyQ29udHJvbC5lcnJvcnMpLmxlbmd0aCkge1xuXHRcdFx0XHRcdG90aGVyQ29udHJvbC5zZXRFcnJvcnMobnVsbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gdmFsdWUgbm90IGVxdWFsIGFuZCByZXZlcnNlXG5cdFx0aWYgKG90aGVyQ29udHJvbCAmJiB2YWx1ZSAhPT0gb3RoZXJDb250cm9sLnZhbHVlICYmIHJldmVyc2UpIHtcblx0XHRcdG90aGVyQ29udHJvbC5zZXRFcnJvcnMoe1xuXHRcdFx0XHRtYXRjaDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcbn1cbiJdfQ==