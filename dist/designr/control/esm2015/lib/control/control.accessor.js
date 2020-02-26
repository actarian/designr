import { Directive, ElementRef, forwardRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export const CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef(() => ControlAccessor),
    multi: true
};
// tslint:disable-next-line:directive-class-suffix
export class ControlAccessor {
    constructor(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.onChange = (value) => { };
        this.onTouched = () => { };
    }
    formatValue(value) {
        return value.toString();
    }
    parseValue(value) {
        return value && value !== '' ? value : null;
    }
    writeValue(value) {
        const formattedValue = this.formatValue(value);
        this.renderer.setProperty(this.element.nativeElement, 'value', formattedValue);
    }
    registerOnChange(callback) {
        this.onChange = (value) => {
            const parsedValue = this.parseValue(value);
            const formattedValue = this.formatValue(parsedValue);
            this.renderer.setProperty(this.element.nativeElement, 'value', formattedValue);
            callback(parsedValue);
        };
    }
    registerOnTouched(callback) {
        this.onTouched = callback;
    }
    setDisabledState(isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    }
}
ControlAccessor.ɵfac = function ControlAccessor_Factory(t) { return new (t || ControlAccessor)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
ControlAccessor.ɵdir = i0.ɵɵdefineDirective({ type: ControlAccessor, selectors: [["input", "designr-accessor", "", "formControlName", ""], ["input", "designr-accessor", "", "formControl", ""], ["input", "designr-accessor", "", "ngModel", ""]], hostBindings: function ControlAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("change", function ControlAccessor_change_HostBindingHandler($event) { return ctx.onChange($event.target.value); })("input", function ControlAccessor_input_HostBindingHandler($event) { return ctx.onChange($event.target.value); })("blur", function ControlAccessor_blur_HostBindingHandler($event) { return ctx.onTouched(); });
    } }, features: [i0.ɵɵProvidersFeature([CONTROL_VALUE_ACCESSOR])] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlAccessor, [{
        type: Directive,
        args: [{
                selector: 'input[designr-accessor][formControlName],input[designr-accessor][formControl],input[designr-accessor][ngModel]',
                // tslint:disable-next-line:use-host-property-decorator
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9jb250cm9sLmFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBUTtJQUMxQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLGlEQUFpRDtJQUNqRCxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUM5QyxLQUFLLEVBQUUsSUFBSTtDQUNYLENBQUM7QUFhRixrREFBa0Q7QUFDbEQsTUFBTSxPQUFPLGVBQWU7SUFFM0IsWUFDVyxRQUFtQixFQUNuQixPQUFtQjtRQURuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFXOUIsYUFBUSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0IsY0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQVhsQixDQUFDO0lBRUssV0FBVyxDQUFDLEtBQVE7UUFDN0IsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVTLFVBQVUsQ0FBQyxLQUFVO1FBQzlCLE9BQU8sS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdDLENBQUM7SUFLRCxVQUFVLENBQUMsS0FBUTtRQUNsQixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsUUFBK0I7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQzlCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0MsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDL0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztJQUNILENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxRQUFvQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7OzhFQXRDVyxlQUFlO29EQUFmLGVBQWU7OzBDQUhoQixDQUFDLHNCQUFzQixDQUFDO2tEQUd2QixlQUFlO2NBWjNCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQ1AsZ0hBQWdIO2dCQUNqSCx1REFBdUQ7Z0JBQ3ZELElBQUksRUFBRTtvQkFDTCxVQUFVLEVBQUUsK0JBQStCO29CQUMzQyxTQUFTLEVBQUUsK0JBQStCO29CQUMxQyxRQUFRLEVBQUUsYUFBYTtpQkFDdkI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBDT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG5cdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdXNlLWJlZm9yZS1kZWNsYXJlXG5cdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbnRyb2xBY2Nlc3NvciksXG5cdG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6XG5cdFx0J2lucHV0W2Rlc2lnbnItYWNjZXNzb3JdW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbZGVzaWduci1hY2Nlc3Nvcl1bZm9ybUNvbnRyb2xdLGlucHV0W2Rlc2lnbnItYWNjZXNzb3JdW25nTW9kZWxdJyxcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuXHRob3N0OiB7XG5cdFx0JyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJyxcblx0XHQnKGlucHV0KSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG5cdFx0JyhibHVyKSc6ICdvblRvdWNoZWQoKSdcblx0fSxcblx0cHJvdmlkZXJzOiBbQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIENvbnRyb2xBY2Nlc3NvcjxUPiBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRwcm90ZWN0ZWQgZWxlbWVudDogRWxlbWVudFJlZlxuXHQpIHsgfVxuXG5cdHByb3RlY3RlZCBmb3JtYXRWYWx1ZSh2YWx1ZTogVCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcGFyc2VWYWx1ZSh2YWx1ZTogYW55KTogVCB7XG5cdFx0cmV0dXJuIHZhbHVlICYmIHZhbHVlICE9PSAnJyA/IHZhbHVlIDogbnVsbDtcblx0fVxuXG5cdG9uQ2hhbmdlID0gKHZhbHVlOiBhbnkpID0+IHsgfTtcblx0b25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG5cdHdyaXRlVmFsdWUodmFsdWU6IFQpOiB2b2lkIHtcblx0XHRjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIGZvcm1hdHRlZFZhbHVlKTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoY2FsbGJhY2s6ICh4OiBUIHwgbnVsbCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0Y29uc3QgcGFyc2VkVmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUodmFsdWUpO1xuXHRcdFx0Y29uc3QgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdFZhbHVlKHBhcnNlZFZhbHVlKTtcblx0XHRcdHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIGZvcm1hdHRlZFZhbHVlKTtcblx0XHRcdGNhbGxiYWNrKHBhcnNlZFZhbHVlKTtcblx0XHR9O1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGNhbGxiYWNrO1xuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG5cdH1cblxufVxuIl19