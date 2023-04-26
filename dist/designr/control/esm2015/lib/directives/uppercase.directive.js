/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
export class UppercaseDirective {
    constructor() {
        this.ngModelChange = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInputChange($event) {
        this.value = $event.target.value.toUpperCase();
        this.ngModelChange.emit(this.value);
    }
}
UppercaseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngModel][uppercase]'
            },] }
];
UppercaseDirective.propDecorators = {
    ngModelChange: [{ type: Output }],
    onInputChange: [{ type: HostListener, args: ['input', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    UppercaseDirective.prototype.ngModelChange;
    /** @type {?} */
    UppercaseDirective.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBwZXJjYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy91cHBlcmNhc2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlFLE1BQU0sT0FBTyxrQkFBa0I7SUFIL0I7UUFLVyxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBUWpFLENBQUM7Ozs7O0lBTG1DLGFBQWEsQ0FBQyxNQUFNO1FBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQVhELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2FBQ2hDOzs7NEJBR0MsTUFBTTs0QkFHTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBSGpDLDJDQUFnRTs7SUFDaEUsbUNBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW25nTW9kZWxdW3VwcGVyY2FzZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcHBlcmNhc2VEaXJlY3RpdmUge1xyXG5cclxuXHRAT3V0cHV0KCkgbmdNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0dmFsdWU6IGFueTtcclxuXHJcblx0QEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKSBvbklucHV0Q2hhbmdlKCRldmVudCkge1xyXG5cdFx0dGhpcy52YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKTtcclxuXHRcdHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19