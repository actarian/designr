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
        this.labelService.transform$(this.label, this.element.nativeElement.innerHTML, this.labelParams).pipe(takeUntil(this.unsubscribe)).subscribe((/**
         * @param {?} label
         * @return {?}
         */
        function (label) {
            _this.element.nativeElement.innerHTML = label;
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYWJlbC9sYWJlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQztJQUdvQywwQ0FBbUI7SUFPdEQsd0JBQ1MsT0FBbUIsRUFDbkIsWUFBaUM7UUFGMUMsWUFJQyxpQkFBTyxTQUNQO1FBSlEsYUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixrQkFBWSxHQUFaLFlBQVksQ0FBcUI7O0lBRzFDLENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3BHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBdkJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsU0FBUztpQkFDbkI7Ozs7Z0JBUm1CLFVBQVU7Z0JBSXJCLFlBQVk7Ozt3QkFTbkIsS0FBSzs4QkFDTCxLQUFLOztJQWlCUCxxQkFBQztDQUFBLEFBekJELENBR29DLG1CQUFtQixHQXNCdEQ7U0F0QlksY0FBYzs7O0lBSTFCLCtCQUF1Qjs7SUFDdkIscUNBQTBCOzs7OztJQUd6QixpQ0FBMkI7Ozs7O0lBQzNCLHNDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuL2xhYmVsJztcclxuaW1wb3J0IHsgTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi9sYWJlbC5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW2xhYmVsXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIExhYmVsRGlyZWN0aXZlIGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdC8vIGtleTogc3RyaW5nO1xyXG5cdC8vIGlubmVySFRNTDogc3RyaW5nO1xyXG5cdEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcblx0QElucHV0KCkgbGFiZWxQYXJhbXM6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcblx0XHRwcml2YXRlIGxhYmVsU2VydmljZTogTGFiZWxTZXJ2aWNlPExhYmVsPixcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMubGFiZWxTZXJ2aWNlLnRyYW5zZm9ybSQodGhpcy5sYWJlbCwgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MLCB0aGlzLmxhYmVsUGFyYW1zKS5waXBlKFxyXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcclxuXHRcdCkuc3Vic2NyaWJlKGxhYmVsID0+IHtcclxuXHRcdFx0dGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gbGFiZWw7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==