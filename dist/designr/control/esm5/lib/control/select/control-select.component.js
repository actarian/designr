/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { isObservable, of } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ControlComponent } from '../control.component';
import { ControlSelect } from './control-select';
var ControlSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlSelectComponent, _super);
    function ControlSelectComponent() {
        var _this = _super.call(this) || this;
        _this.options = [];
        _this.getValue = _this.getValue_.bind(_this);
        _this.compareWith = _this.compareWith_.bind(_this);
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
        this.options$().pipe(takeUntil(this.unsubscribe), tap((/**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            if (_this.option.asObject && _this.control.value === null) {
                /** @type {?} */
                var firstNullOptions = options.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.id === null; }));
                if (firstNullOptions !== undefined) {
                    _this.control.setValue(firstNullOptions);
                }
            }
        }))).subscribe((/**
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
    /**
     * @param {?} item
     * @return {?}
     */
    ControlSelectComponent.prototype.getValue_ = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return this.option.asObject ? item : item.id;
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    ControlSelectComponent.prototype.compareWith_ = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (this.option.asObject) {
            a = (/** @type {?} */ (a));
            b = (/** @type {?} */ (b));
            return (b && b.id !== undefined) ? a.id === b.id : a.id === b;
        }
        else {
            return b ? a === b : a === null;
        }
    };
    ControlSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-select-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-template #inputDef let-context>\r\n\t\t<div class=\"control__input control__input--select\">\r\n\t\t\t<select [id]=\"context.option.key\" [formControlName]=\"context.option.key\" [compareWith]=\"context.compareWith\">\r\n\t\t\t\t<option *ngFor=\"let item of options\" [ngValue]=\"context.getValue(item)\">{{item?.name}}</option>\r\n\t\t\t</select>\r\n\t\t\t<!-- control__accessory -->\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"control__error control__error--select\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n</ng-container>\r\n"
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
    /** @type {?} */
    ControlSelectComponent.prototype.getValue;
    /** @type {?} */
    ControlSelectComponent.prototype.compareWith;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQXVCLE1BQU0sa0JBQWtCLENBQUM7QUFFdEU7SUFJNEMsa0RBQWdCO0lBTzNEO1FBQUEsWUFFQyxpQkFBTyxTQUNQO1FBUEQsYUFBTyxHQUEwQixFQUFFLENBQUM7UUFDcEMsY0FBUSxHQUFhLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQy9DLGlCQUFXLEdBQWEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7O0lBS3JELENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzNCLEdBQUc7Ozs7UUFBQyxVQUFBLE9BQU87WUFDVixJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTs7b0JBQ2xELGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQWIsQ0FBYSxFQUFDO2dCQUN6RCxJQUFJLGdCQUFnQixLQUFLLFNBQVMsRUFBRTtvQkFDbkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDeEM7YUFDRDtRQUNGLENBQUMsRUFBQyxDQUNGLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLEVBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSOztZQUNPLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDbkMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxPQUFPLENBQUM7YUFDZjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2Q7U0FDRDthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDZDtJQUNGLENBQUM7Ozs7O0lBRUQsMENBQVM7Ozs7SUFBVCxVQUFVLElBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFRCw2Q0FBWTs7Ozs7SUFBWixVQUFhLENBQXdDLEVBQUUsQ0FBd0M7UUFDOUYsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN6QixDQUFDLEdBQUcsbUJBQUEsQ0FBQyxFQUF1QixDQUFDO1lBQzdCLENBQUMsR0FBRyxtQkFBQSxDQUFDLEVBQXVCLENBQUM7WUFDN0IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlEO2FBQU07WUFDTixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztTQUNoQztJQUNGLENBQUM7O2dCQXpERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsOGhDQUE0QztpQkFDNUM7Ozs7O3lCQUdDLEtBQUs7O0lBb0RQLDZCQUFDO0NBQUEsQUExREQsQ0FJNEMsZ0JBQWdCLEdBc0QzRDtTQXREWSxzQkFBc0I7OztJQUVsQyx3Q0FBK0I7O0lBQy9CLHlDQUFvQzs7SUFDcEMsMENBQStDOztJQUMvQyw2Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xTZWxlY3QsIENvbnRyb2xTZWxlY3RPcHRpb24gfSBmcm9tICcuL2NvbnRyb2wtc2VsZWN0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1zZWxlY3QtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xTZWxlY3Q7XG5cdG9wdGlvbnM6IENvbnRyb2xTZWxlY3RPcHRpb25bXSA9IFtdO1xuXHRnZXRWYWx1ZTogRnVuY3Rpb24gPSB0aGlzLmdldFZhbHVlXy5iaW5kKHRoaXMpO1xuXHRjb21wYXJlV2l0aDogRnVuY3Rpb24gPSB0aGlzLmNvbXBhcmVXaXRoXy5iaW5kKHRoaXMpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vcHRpb25zJCgpLnBpcGUoXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXG5cdFx0XHR0YXAob3B0aW9ucyA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbi5hc09iamVjdCAmJiB0aGlzLmNvbnRyb2wudmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb25zdCBmaXJzdE51bGxPcHRpb25zID0gb3B0aW9ucy5maW5kKHggPT4geC5pZCA9PT0gbnVsbCk7XG5cdFx0XHRcdFx0aWYgKGZpcnN0TnVsbE9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy5jb250cm9sLnNldFZhbHVlKGZpcnN0TnVsbE9wdGlvbnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0KS5zdWJzY3JpYmUob3B0aW9ucyA9PiB0aGlzLm9wdGlvbnMgPSBvcHRpb25zKTtcblx0fVxuXG5cdG9wdGlvbnMkKCk6IE9ic2VydmFibGU8Q29udHJvbFNlbGVjdE9wdGlvbltdPiB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9uLm9wdGlvbnM7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdGlmIChpc09ic2VydmFibGUob3B0aW9ucykpIHtcblx0XHRcdFx0cmV0dXJuIG9wdGlvbnM7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcblx0XHRcdFx0cmV0dXJuIG9mKG9wdGlvbnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG9mKFtdKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKFtdKTtcblx0XHR9XG5cdH1cblxuXHRnZXRWYWx1ZV8oaXRlbTogQ29udHJvbFNlbGVjdE9wdGlvbik6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uLmFzT2JqZWN0ID8gaXRlbSA6IGl0ZW0uaWQ7XG5cdH1cblxuXHRjb21wYXJlV2l0aF8oYTogQ29udHJvbFNlbGVjdE9wdGlvbiB8IHN0cmluZyB8IG51bWJlciwgYjogQ29udHJvbFNlbGVjdE9wdGlvbiB8IHN0cmluZyB8IG51bWJlcikge1xuXHRcdGlmICh0aGlzLm9wdGlvbi5hc09iamVjdCkge1xuXHRcdFx0YSA9IGEgYXMgQ29udHJvbFNlbGVjdE9wdGlvbjtcblx0XHRcdGIgPSBiIGFzIENvbnRyb2xTZWxlY3RPcHRpb247XG5cdFx0XHRyZXR1cm4gKGIgJiYgYi5pZCAhPT0gdW5kZWZpbmVkKSA/IGEuaWQgPT09IGIuaWQgOiBhLmlkID09PSBiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gYiA/IGEgPT09IGIgOiBhID09PSBudWxsO1xuXHRcdH1cblx0fVxufVxuIl19