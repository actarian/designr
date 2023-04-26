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
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-template #inputDef let-context>\r\n\t\t<div class=\"control__input control__input--select\">\r\n\t\t\t<select [id]=\"context.option.key\" [formControlName]=\"context.option.key\" [compareWith]=\"context.compareWith\">\r\n\t\t\t\t<option *ngFor=\"let item of options\" [ngValue]=\"context.getValue(item)\">{{item?.name | label}}</option>\r\n\t\t\t</select>\r\n\t\t\t<!-- control__accessory -->\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"control__error control__error--select\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n</ng-container>\r\n"
                }] }
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQXVCLE1BQU0sa0JBQWtCLENBQUM7QUFFdEU7SUFJNEMsa0RBQWdCO0lBSjVEO1FBQUEscUVBcURDO1FBOUNBLGFBQU8sR0FBMEIsRUFBRSxDQUFDO1FBQ3BDLGNBQVEsR0FBYSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUMvQyxpQkFBVyxHQUFhLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQTRDdEQsQ0FBQzs7OztJQTFDQSx5Q0FBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzNCLEdBQUc7Ozs7UUFBQyxVQUFBLE9BQU87WUFDVixJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTs7b0JBQ2xELGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQWIsQ0FBYSxFQUFDO2dCQUN6RCxJQUFJLGdCQUFnQixLQUFLLFNBQVMsRUFBRTtvQkFDbkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDeEM7YUFDRDtRQUNGLENBQUMsRUFBQyxDQUNGLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLEVBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSOztZQUNPLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDbkMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxPQUFPLENBQUM7YUFDZjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2Q7U0FDRDthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDZDtJQUNGLENBQUM7Ozs7O0lBRUQsMENBQVM7Ozs7SUFBVCxVQUFVLElBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFRCw2Q0FBWTs7Ozs7SUFBWixVQUFhLENBQXdDLEVBQUUsQ0FBd0M7UUFDOUYsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN6QixDQUFDLEdBQUcsbUJBQUEsQ0FBQyxFQUF1QixDQUFDO1lBQzdCLENBQUMsR0FBRyxtQkFBQSxDQUFDLEVBQXVCLENBQUM7WUFDN0IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlEO2FBQU07WUFDTixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztTQUNoQztJQUNGLENBQUM7O2dCQXBERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsc2lDQUE0QztpQkFDNUM7Ozt5QkFHQyxLQUFLOztJQStDUCw2QkFBQztDQUFBLEFBckRELENBSTRDLGdCQUFnQixHQWlEM0Q7U0FqRFksc0JBQXNCOzs7SUFFbEMsd0NBQStCOztJQUMvQix5Q0FBb0M7O0lBQ3BDLDBDQUErQzs7SUFDL0MsNkNBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xTZWxlY3QsIENvbnRyb2xTZWxlY3RPcHRpb24gfSBmcm9tICcuL2NvbnRyb2wtc2VsZWN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnY29udHJvbC1zZWxlY3QtY29tcG9uZW50JyxcclxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sU2VsZWN0O1xyXG5cdG9wdGlvbnM6IENvbnRyb2xTZWxlY3RPcHRpb25bXSA9IFtdO1xyXG5cdGdldFZhbHVlOiBGdW5jdGlvbiA9IHRoaXMuZ2V0VmFsdWVfLmJpbmQodGhpcyk7XHJcblx0Y29tcGFyZVdpdGg6IEZ1bmN0aW9uID0gdGhpcy5jb21wYXJlV2l0aF8uYmluZCh0aGlzKTtcclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMkKCkucGlwZShcclxuXHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLFxyXG5cdFx0XHR0YXAob3B0aW9ucyA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9uLmFzT2JqZWN0ICYmIHRoaXMuY29udHJvbC52YWx1ZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Y29uc3QgZmlyc3ROdWxsT3B0aW9ucyA9IG9wdGlvbnMuZmluZCh4ID0+IHguaWQgPT09IG51bGwpO1xyXG5cdFx0XHRcdFx0aWYgKGZpcnN0TnVsbE9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRyb2wuc2V0VmFsdWUoZmlyc3ROdWxsT3B0aW9ucyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KSxcclxuXHRcdCkuc3Vic2NyaWJlKG9wdGlvbnMgPT4gdGhpcy5vcHRpb25zID0gb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zJCgpOiBPYnNlcnZhYmxlPENvbnRyb2xTZWxlY3RPcHRpb25bXT4ge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9uLm9wdGlvbnM7XHJcblx0XHRpZiAob3B0aW9ucykge1xyXG5cdFx0XHRpZiAoaXNPYnNlcnZhYmxlKG9wdGlvbnMpKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9wdGlvbnM7XHJcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xyXG5cdFx0XHRcdHJldHVybiBvZihvcHRpb25zKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gb2YoW10pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gb2YoW10pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0VmFsdWVfKGl0ZW06IENvbnRyb2xTZWxlY3RPcHRpb24pOiBhbnkge1xyXG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uLmFzT2JqZWN0ID8gaXRlbSA6IGl0ZW0uaWQ7XHJcblx0fVxyXG5cclxuXHRjb21wYXJlV2l0aF8oYTogQ29udHJvbFNlbGVjdE9wdGlvbiB8IHN0cmluZyB8IG51bWJlciwgYjogQ29udHJvbFNlbGVjdE9wdGlvbiB8IHN0cmluZyB8IG51bWJlcikge1xyXG5cdFx0aWYgKHRoaXMub3B0aW9uLmFzT2JqZWN0KSB7XHJcblx0XHRcdGEgPSBhIGFzIENvbnRyb2xTZWxlY3RPcHRpb247XHJcblx0XHRcdGIgPSBiIGFzIENvbnRyb2xTZWxlY3RPcHRpb247XHJcblx0XHRcdHJldHVybiAoYiAmJiBiLmlkICE9PSB1bmRlZmluZWQpID8gYS5pZCA9PT0gYi5pZCA6IGEuaWQgPT09IGI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gYiA/IGEgPT09IGIgOiBhID09PSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=