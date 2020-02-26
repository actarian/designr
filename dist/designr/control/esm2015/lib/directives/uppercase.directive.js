import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class UppercaseDirective {
    constructor() {
        this.ngModelChange = new EventEmitter();
    }
    onInputChange($event) {
        this.value = $event.target.value.toUpperCase();
        this.ngModelChange.emit(this.value);
    }
}
UppercaseDirective.ɵfac = function UppercaseDirective_Factory(t) { return new (t || UppercaseDirective)(); };
UppercaseDirective.ɵdir = i0.ɵɵdefineDirective({ type: UppercaseDirective, selectors: [["", "ngModel", "", "uppercase", ""]], hostBindings: function UppercaseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("input", function UppercaseDirective_input_HostBindingHandler($event) { return ctx.onInputChange($event); });
    } }, outputs: { ngModelChange: "ngModelChange" } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBwZXJjYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy91cHBlcmNhc2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzlFLE1BQU0sT0FBTyxrQkFBa0I7SUFIL0I7UUFLVyxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBUWhFO0lBTG1DLGFBQWEsQ0FBQyxNQUFNO1FBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O29GQVJXLGtCQUFrQjt1REFBbEIsa0JBQWtCOzs7a0RBQWxCLGtCQUFrQjtjQUg5QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjthQUNoQzs7a0JBR0MsTUFBTTs7a0JBR04sWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW25nTW9kZWxdW3VwcGVyY2FzZV0nXG59KVxuZXhwb3J0IGNsYXNzIFVwcGVyY2FzZURpcmVjdGl2ZSB7XG5cblx0QE91dHB1dCgpIG5nTW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHR2YWx1ZTogYW55O1xuXG5cdEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgb25JbnB1dENoYW5nZSgkZXZlbnQpIHtcblx0XHR0aGlzLnZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXHRcdHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuXHR9XG5cbn1cbiJdfQ==