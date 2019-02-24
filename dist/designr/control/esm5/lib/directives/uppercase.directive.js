/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
var UppercaseDirective = /** @class */ (function () {
    function UppercaseDirective() {
        this.ngModelChange = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    UppercaseDirective.prototype.onInputChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.value = $event.target.value.toUpperCase();
        this.ngModelChange.emit(this.value);
    };
    UppercaseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngModel][uppercase]'
                },] }
    ];
    UppercaseDirective.propDecorators = {
        ngModelChange: [{ type: Output }],
        onInputChange: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return UppercaseDirective;
}());
export { UppercaseDirective };
if (false) {
    /** @type {?} */
    UppercaseDirective.prototype.ngModelChange;
    /** @type {?} */
    UppercaseDirective.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBwZXJjYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy91cHBlcmNhc2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlFO0lBQUE7UUFLVyxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBUWpFLENBQUM7Ozs7O0lBTG1DLDBDQUFhOzs7O0lBQWhELFVBQWlELE1BQU07UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0JBWEQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2hDOzs7Z0NBR0MsTUFBTTtnQ0FHTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQUtsQyx5QkFBQztDQUFBLEFBYkQsSUFhQztTQVZZLGtCQUFrQjs7O0lBRTlCLDJDQUFnRTs7SUFDaEUsbUNBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW25nTW9kZWxdW3VwcGVyY2FzZV0nXG59KVxuZXhwb3J0IGNsYXNzIFVwcGVyY2FzZURpcmVjdGl2ZSB7XG5cblx0QE91dHB1dCgpIG5nTW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHR2YWx1ZTogYW55O1xuXG5cdEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgb25JbnB1dENoYW5nZSgkZXZlbnQpIHtcblx0XHR0aGlzLnZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXHRcdHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuXHR9XG5cbn1cbiJdfQ==