export function matchValidator(otherKey, reverse = false, group) {
    return (control) => {
        const otherControl = group.controls[otherKey];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLFVBQVUsY0FBYyxDQUFDLFFBQWdCLEVBQUUsVUFBbUIsS0FBSyxFQUFFLEtBQWdCO0lBQzFGLE9BQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQzVELE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM1QixrQkFBa0I7UUFDbEIsSUFBSSxZQUFZLElBQUksS0FBSyxLQUFLLFlBQVksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDN0QsT0FBTztnQkFDTixLQUFLLEVBQUUsSUFBSTthQUNYLENBQUM7U0FDRjtRQUNELDBCQUEwQjtRQUMxQixJQUFJLFlBQVksSUFBSSxLQUFLLEtBQUssWUFBWSxDQUFDLEtBQUssSUFBSSxPQUFPLEVBQUU7WUFDNUQsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO2dCQUN4QixPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQzdDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzdCO2FBQ0Q7U0FDRDtRQUNELDhCQUE4QjtRQUM5QixJQUFJLFlBQVksSUFBSSxLQUFLLEtBQUssWUFBWSxDQUFDLEtBQUssSUFBSSxPQUFPLEVBQUU7WUFDNUQsWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFDdEIsS0FBSyxFQUFFLElBQUk7YUFDWCxDQUFDLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoVmFsaWRhdG9yKG90aGVyS2V5OiBzdHJpbmcsIHJldmVyc2U6IGJvb2xlYW4gPSBmYWxzZSwgZ3JvdXA6IEZvcm1Hcm91cCk6IFZhbGlkYXRvckZuIHtcblx0cmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG5cdFx0Y29uc3Qgb3RoZXJDb250cm9sID0gZ3JvdXAuY29udHJvbHNbb3RoZXJLZXldO1xuXHRcdGNvbnN0IHZhbHVlID0gY29udHJvbC52YWx1ZTtcblx0XHQvLyB2YWx1ZSBub3QgZXF1YWxcblx0XHRpZiAob3RoZXJDb250cm9sICYmIHZhbHVlICE9PSBvdGhlckNvbnRyb2wudmFsdWUgJiYgIXJldmVyc2UpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG1hdGNoOiB0cnVlLFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0Ly8gdmFsdWUgZXF1YWwgYW5kIHJldmVyc2Vcblx0XHRpZiAob3RoZXJDb250cm9sICYmIHZhbHVlID09PSBvdGhlckNvbnRyb2wudmFsdWUgJiYgcmV2ZXJzZSkge1xuXHRcdFx0aWYgKG90aGVyQ29udHJvbC5lcnJvcnMpIHtcblx0XHRcdFx0ZGVsZXRlIG90aGVyQ29udHJvbC5lcnJvcnNbJ21hdGNoJ107XG5cdFx0XHRcdGlmICghT2JqZWN0LmtleXMob3RoZXJDb250cm9sLmVycm9ycykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0b3RoZXJDb250cm9sLnNldEVycm9ycyhudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyB2YWx1ZSBub3QgZXF1YWwgYW5kIHJldmVyc2Vcblx0XHRpZiAob3RoZXJDb250cm9sICYmIHZhbHVlICE9PSBvdGhlckNvbnRyb2wudmFsdWUgJiYgcmV2ZXJzZSkge1xuXHRcdFx0b3RoZXJDb250cm9sLnNldEVycm9ycyh7XG5cdFx0XHRcdG1hdGNoOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xufVxuIl19