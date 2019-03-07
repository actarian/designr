/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DisposableComponent } from '../disposable/disposable.component';
import { LabelService } from './label.service';
var LabelDirective = /** @class */ (function (_super) {
    tslib_1.__extends(LabelDirective, _super);
    function LabelDirective(element, labelService) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.labelService = labelService;
        return _this;
    }
    /**
     * @return {?}
     */
    LabelDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('LabelDirective.ngOnInit', this.element.nativeElement.innerHTML);
        this.labelService.getKey(this.label, this.element.nativeElement.innerHTML, this.labelParams).pipe(takeUntil(this.unsubscribe)).subscribe((/**
         * @param {?} label
         * @return {?}
         */
        function (label) {
            _this.element.nativeElement.innerHTML = label;
            // console.log('LabelDirective.ngOnInit', label);
        }));
        // console.log('LabelDirective.ngOnInit', this.label, this.labelParams, this.template, this.view);
    };
    LabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[label]'
                },] }
    ];
    /** @nocollapse */
    LabelDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LabelService }
    ]; };
    LabelDirective.propDecorators = {
        label: [{ type: Input }],
        labelParams: [{ type: Input }]
    };
    return LabelDirective;
}(DisposableComponent));
export { LabelDirective };
if (false) {
    /** @type {?} */
    LabelDirective.prototype.key;
    /** @type {?} */
    LabelDirective.prototype.innerHTML;
    /** @type {?} */
    LabelDirective.prototype.label;
    /** @type {?} */
    LabelDirective.prototype.labelParams;
    /**
     * @type {?}
     * @private
     */
    LabelDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    LabelDirective.prototype.labelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYWJlbC9sYWJlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQztJQUdvQywwQ0FBbUI7SUFhdEQsd0JBQ1MsT0FBbUIsRUFDbkIsWUFBaUM7UUFGMUMsWUFJQyxpQkFBTyxTQUNQO1FBSlEsYUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixrQkFBWSxHQUFaLFlBQVksQ0FBcUI7O0lBRzFDLENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFBQSxpQkFTQztRQVJBLGdGQUFnRjtRQUNoRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNoRyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDaEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUM3QyxpREFBaUQ7UUFDbEQsQ0FBQyxFQUFDLENBQUM7UUFDSCxrR0FBa0c7SUFDbkcsQ0FBQzs7Z0JBaENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsU0FBUztpQkFDbkI7Ozs7Z0JBUm1CLFVBQVU7Z0JBSXJCLFlBQVk7Ozt3QkFlbkIsS0FBSzs4QkFDTCxLQUFLOztJQW1CUCxxQkFBQztDQUFBLEFBakNELENBR29DLG1CQUFtQixHQThCdEQ7U0E5QlksY0FBYzs7O0lBRTFCLDZCQUFZOztJQUNaLG1DQUFrQjs7SUFPbEIsK0JBQXVCOztJQUN2QixxQ0FBMEI7Ozs7O0lBR3pCLGlDQUEyQjs7Ozs7SUFDM0Isc0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi9sYWJlbC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2xhYmVsXSdcbn0pXG5leHBvcnQgY2xhc3MgTGFiZWxEaXJlY3RpdmUgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRrZXk6IHN0cmluZztcblx0aW5uZXJIVE1MOiBzdHJpbmc7XG5cblx0Lypcblx0QElucHV0KCkgc2V0IGxhYmVsKGtleTogc3RyaW5nKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0xhYmVsRGlyZWN0aXZlLmxhYmVsJywgdGhpcy5rZXksIHRoaXMubGFiZWxQYXJhbXMsIHRoaXMudGVtcGxhdGUsIHRoaXMudmlldyk7XG5cdH1cblx0Ki9cblx0QElucHV0KCkgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgbGFiZWxQYXJhbXM6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSBsYWJlbFNlcnZpY2U6IExhYmVsU2VydmljZTxMYWJlbD4sXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnTGFiZWxEaXJlY3RpdmUubmdPbkluaXQnLCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwpO1xuXHRcdHRoaXMubGFiZWxTZXJ2aWNlLmdldEtleSh0aGlzLmxhYmVsLCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwsIHRoaXMubGFiZWxQYXJhbXMpLnBpcGUoXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcblx0XHQpLnN1YnNjcmliZShsYWJlbCA9PiB7XG5cdFx0XHR0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBsYWJlbDtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdMYWJlbERpcmVjdGl2ZS5uZ09uSW5pdCcsIGxhYmVsKTtcblx0XHR9KTtcblx0XHQvLyBjb25zb2xlLmxvZygnTGFiZWxEaXJlY3RpdmUubmdPbkluaXQnLCB0aGlzLmxhYmVsLCB0aGlzLmxhYmVsUGFyYW1zLCB0aGlzLnRlbXBsYXRlLCB0aGlzLnZpZXcpO1xuXHR9XG59XG4iXX0=