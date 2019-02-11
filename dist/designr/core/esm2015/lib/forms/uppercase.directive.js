/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBwZXJjYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvdXBwZXJjYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs5RSxNQUFNLE9BQU8sa0JBQWtCO0lBSC9CO1FBSVcsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVFqRSxDQUFDOzs7OztJQUxtQyxhQUFhLENBQUMsTUFBTTtRQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUFWRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjthQUNoQzs7OzRCQUVDLE1BQU07NEJBR04sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQUhqQywyQ0FBZ0U7O0lBQ2hFLG1DQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tuZ01vZGVsXVt1cHBlcmNhc2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBVcHBlcmNhc2VEaXJlY3RpdmUge1xuXHRAT3V0cHV0KCkgbmdNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHZhbHVlOiBhbnk7XG5cblx0QEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKSBvbklucHV0Q2hhbmdlKCRldmVudCkge1xuXHRcdHRoaXMudmFsdWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cdFx0dGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG5cdH1cblxufVxuIl19