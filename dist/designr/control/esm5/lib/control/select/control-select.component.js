/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { isObservable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ControlComponent } from '../control.component';
import { ControlSelect } from './control-select';
var ControlSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlSelectComponent, _super);
    function ControlSelectComponent() {
        var _this = _super.call(this) || this;
        _this.options = [];
        return _this;
    }
    /**
     * @return {?}
     */
    ControlSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.options$().pipe(takeUntil(this.unsubscribe)).subscribe((/**
         * @param {?} options
         * @return {?}
         */
        function (options) { return _this.options = options; }));
    };
    /**
     * @return {?}
     */
    ControlSelectComponent.prototype.options$ = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = this.option.options;
        if (options) {
            if (isObservable(options)) {
                return options;
            }
            else if (Array.isArray(options)) {
                return of(options);
            }
            else {
                return of([]);
            }
        }
        else {
            return of([]);
        }
    };
    ControlSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-select-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<div class=\"form-select\" [ngClass]=\"classes\">\r\n\t\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t\t<div class=\"form-select__select\">\r\n\t\t\t<select [id]=\"option.key\" [formControlName]=\"option.key\">\r\n\t\t\t\t<option *ngFor=\"let item of options\" [ngValue]=\"item?.value\">{{item?.label}}</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n"
                }] }
    ];
    /** @nocollapse */
    ControlSelectComponent.ctorParameters = function () { return []; };
    ControlSelectComponent.propDecorators = {
        option: [{ type: Input }]
    };
    return ControlSelectComponent;
}(ControlComponent));
export { ControlSelectComponent };
if (false) {
    /** @type {?} */
    ControlSelectComponent.prototype.option;
    /** @type {?} */
    ControlSelectComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBdUIsTUFBTSxrQkFBa0IsQ0FBQztBQUV0RTtJQUk0QyxrREFBZ0I7SUFLM0Q7UUFBQSxZQUVDLGlCQUFPLFNBQ1A7UUFMRCxhQUFPLEdBQTBCLEVBQUUsQ0FBQzs7SUFLcEMsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDbkIsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7O1lBQ08sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNuQyxJQUFJLE9BQU8sRUFBRTtZQUNaLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMxQixPQUFPLE9BQU8sQ0FBQzthQUNmO2lCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDbEMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkI7aUJBQU07Z0JBQ04sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDZDtTQUNEO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNkO0lBQ0YsQ0FBQzs7Z0JBakNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxnckJBQTRDO2lCQUM1Qzs7Ozs7eUJBR0MsS0FBSzs7SUE2QlAsNkJBQUM7Q0FBQSxBQW5DRCxDQUk0QyxnQkFBZ0IsR0ErQjNEO1NBL0JZLHNCQUFzQjs7O0lBRWxDLHdDQUErQjs7SUFDL0IseUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFNlbGVjdCwgQ29udHJvbFNlbGVjdE9wdGlvbiB9IGZyb20gJy4vY29udHJvbC1zZWxlY3QnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLXNlbGVjdC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFNlbGVjdENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbFNlbGVjdDtcblx0b3B0aW9uczogQ29udHJvbFNlbGVjdE9wdGlvbltdID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9wdGlvbnMkKCkucGlwZShcblx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxuXHRcdCkuc3Vic2NyaWJlKG9wdGlvbnMgPT4gdGhpcy5vcHRpb25zID0gb3B0aW9ucyk7XG5cdH1cblxuXHRvcHRpb25zJCgpOiBPYnNlcnZhYmxlPENvbnRyb2xTZWxlY3RPcHRpb25bXT4ge1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbi5vcHRpb25zO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRpZiAoaXNPYnNlcnZhYmxlKG9wdGlvbnMpKSB7XG5cdFx0XHRcdHJldHVybiBvcHRpb25zO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG5cdFx0XHRcdHJldHVybiBvZihvcHRpb25zKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBvZihbXSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihbXSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==