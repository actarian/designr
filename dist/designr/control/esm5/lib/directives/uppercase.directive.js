import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import * as i0 from "@angular/core";
var UppercaseDirective = /** @class */ (function () {
    function UppercaseDirective() {
        this.ngModelChange = new EventEmitter();
    }
    UppercaseDirective.prototype.onInputChange = function ($event) {
        this.value = $event.target.value.toUpperCase();
        this.ngModelChange.emit(this.value);
    };
    UppercaseDirective.ɵfac = function UppercaseDirective_Factory(t) { return new (t || UppercaseDirective)(); };
    UppercaseDirective.ɵdir = i0.ɵɵdefineDirective({ type: UppercaseDirective, selectors: [["", "ngModel", "", "uppercase", ""]], hostBindings: function UppercaseDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("input", function UppercaseDirective_input_HostBindingHandler($event) { return ctx.onInputChange($event); });
        } }, outputs: { ngModelChange: "ngModelChange" } });
    return UppercaseDirective;
}());
export { UppercaseDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UppercaseDirective, [{
        type: Directive,
        args: [{
                selector: '[ngModel][uppercase]'
            }]
    }], null, { ngModelChange: [{
            type: Output
        }], onInputChange: [{
            type: HostListener,
            args: ['input', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBwZXJjYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy91cHBlcmNhc2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTlFO0lBQUE7UUFLVyxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBUWhFO0lBTG1DLDBDQUFhLEdBQWhELFVBQWlELE1BQU07UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzt3RkFSVyxrQkFBa0I7MkRBQWxCLGtCQUFrQjs7OzZCQUwvQjtDQWVDLEFBYkQsSUFhQztTQVZZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBSDlCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2FBQ2hDOztrQkFHQyxNQUFNOztrQkFHTixZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbbmdNb2RlbF1bdXBwZXJjYXNlXSdcbn0pXG5leHBvcnQgY2xhc3MgVXBwZXJjYXNlRGlyZWN0aXZlIHtcblxuXHRAT3V0cHV0KCkgbmdNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHZhbHVlOiBhbnk7XG5cblx0QEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKSBvbklucHV0Q2hhbmdlKCRldmVudCkge1xuXHRcdHRoaXMudmFsdWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cdFx0dGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG5cdH1cblxufVxuIl19