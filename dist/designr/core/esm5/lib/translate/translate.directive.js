/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DisposableComponent } from '../disposable/disposable.component';
import { TranslateService } from './translate.service';
var TranslateDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TranslateDirective, _super);
    function TranslateDirective(element, translateService) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.translateService = translateService;
        return _this;
    }
    /**
     * @return {?}
     */
    TranslateDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('TranslateDirective.ngOnInit', this.element.nativeElement.innerHTML);
        this.translateService.getTranslate(this.translate, this.element.nativeElement.innerHTML, this.translateParams).pipe(takeUntil(this.unsubscribe)).subscribe((/**
         * @param {?} translate
         * @return {?}
         */
        function (translate) {
            _this.element.nativeElement.innerHTML = translate;
            // console.log('TranslateDirective.ngOnInit', translate);
        }));
        // console.log('TranslateDirective.ngOnInit', this.translate, this.translateParams, this.template, this.view);
    };
    TranslateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[translate]'
                },] }
    ];
    /** @nocollapse */
    TranslateDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TranslateService }
    ]; };
    TranslateDirective.propDecorators = {
        translate: [{ type: Input }],
        translateParams: [{ type: Input }]
    };
    return TranslateDirective;
}(DisposableComponent));
export { TranslateDirective };
if (false) {
    /** @type {?} */
    TranslateDirective.prototype.key;
    /** @type {?} */
    TranslateDirective.prototype.innerHTML;
    /** @type {?} */
    TranslateDirective.prototype.translate;
    /** @type {?} */
    TranslateDirective.prototype.translateParams;
    /**
     * @type {?}
     * @private
     */
    TranslateDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TranslateDirective.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJhbnNsYXRlL3RyYW5zbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZEO0lBR3dDLDhDQUFtQjtJQWExRCw0QkFDUyxPQUFtQixFQUNuQixnQkFBNkM7UUFGdEQsWUFJQyxpQkFBTyxTQUNQO1FBSlEsYUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTZCOztJQUd0RCxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQUEsaUJBU0M7UUFSQSxvRkFBb0Y7UUFDcEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUNsSCxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFNBQVM7WUFDcEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUNqRCx5REFBeUQ7UUFDMUQsQ0FBQyxFQUFDLENBQUM7UUFDSCw4R0FBOEc7SUFDL0csQ0FBQzs7Z0JBaENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsYUFBYTtpQkFDdkI7Ozs7Z0JBUm1CLFVBQVU7Z0JBSXJCLGdCQUFnQjs7OzRCQWV2QixLQUFLO2tDQUNMLEtBQUs7O0lBbUJQLHlCQUFDO0NBQUEsQUFqQ0QsQ0FHd0MsbUJBQW1CLEdBOEIxRDtTQTlCWSxrQkFBa0I7OztJQUU5QixpQ0FBWTs7SUFDWix1Q0FBa0I7O0lBT2xCLHVDQUEyQjs7SUFDM0IsNkNBQThCOzs7OztJQUc3QixxQ0FBMkI7Ozs7O0lBQzNCLDhDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSAnLi90cmFuc2xhdGUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1t0cmFuc2xhdGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlRGlyZWN0aXZlIGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGtleTogc3RyaW5nO1xyXG5cdGlubmVySFRNTDogc3RyaW5nO1xyXG5cclxuXHQvKlxyXG5cdEBJbnB1dCgpIHNldCB0cmFuc2xhdGUoa2V5OiBzdHJpbmcpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdUcmFuc2xhdGVEaXJlY3RpdmUudHJhbnNsYXRlJywgdGhpcy5rZXksIHRoaXMudHJhbnNsYXRlUGFyYW1zLCB0aGlzLnRlbXBsYXRlLCB0aGlzLnZpZXcpO1xyXG5cdH1cclxuXHQqL1xyXG5cdEBJbnB1dCgpIHRyYW5zbGF0ZTogc3RyaW5nO1xyXG5cdEBJbnB1dCgpIHRyYW5zbGF0ZVBhcmFtczogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuXHRcdHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZTxUcmFuc2xhdGU+LFxyXG5cdCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1RyYW5zbGF0ZURpcmVjdGl2ZS5uZ09uSW5pdCcsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCk7XHJcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRlKHRoaXMudHJhbnNsYXRlLCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwsIHRoaXMudHJhbnNsYXRlUGFyYW1zKS5waXBlKFxyXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcclxuXHRcdCkuc3Vic2NyaWJlKHRyYW5zbGF0ZSA9PiB7XHJcblx0XHRcdHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRyYW5zbGF0ZTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1RyYW5zbGF0ZURpcmVjdGl2ZS5uZ09uSW5pdCcsIHRyYW5zbGF0ZSk7XHJcblx0XHR9KTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdUcmFuc2xhdGVEaXJlY3RpdmUubmdPbkluaXQnLCB0aGlzLnRyYW5zbGF0ZSwgdGhpcy50cmFuc2xhdGVQYXJhbXMsIHRoaXMudGVtcGxhdGUsIHRoaXMudmlldyk7XHJcblx0fVxyXG59XHJcbiJdfQ==