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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQXVCLE1BQU0sa0JBQWtCLENBQUM7QUFFdEU7SUFJNEMsa0RBQWdCO0lBSjVEO1FBQUEscUVBcURDO1FBOUNBLGFBQU8sR0FBMEIsRUFBRSxDQUFDO1FBQ3BDLGNBQVEsR0FBYSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUMvQyxpQkFBVyxHQUFhLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQTRDdEQsQ0FBQzs7OztJQTFDQSx5Q0FBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzNCLEdBQUc7Ozs7UUFBQyxVQUFBLE9BQU87WUFDVixJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTs7b0JBQ2xELGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQWIsQ0FBYSxFQUFDO2dCQUN6RCxJQUFJLGdCQUFnQixLQUFLLFNBQVMsRUFBRTtvQkFDbkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDeEM7YUFDRDtRQUNGLENBQUMsRUFBQyxDQUNGLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLEVBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSOztZQUNPLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDbkMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxPQUFPLENBQUM7YUFDZjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2Q7U0FDRDthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDZDtJQUNGLENBQUM7Ozs7O0lBRUQsMENBQVM7Ozs7SUFBVCxVQUFVLElBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFRCw2Q0FBWTs7Ozs7SUFBWixVQUFhLENBQXdDLEVBQUUsQ0FBd0M7UUFDOUYsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN6QixDQUFDLEdBQUcsbUJBQUEsQ0FBQyxFQUF1QixDQUFDO1lBQzdCLENBQUMsR0FBRyxtQkFBQSxDQUFDLEVBQXVCLENBQUM7WUFDN0IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlEO2FBQU07WUFDTixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztTQUNoQztJQUNGLENBQUM7O2dCQXBERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsc2lDQUE0QztpQkFDNUM7Ozt5QkFHQyxLQUFLOztJQStDUCw2QkFBQztDQUFBLEFBckRELENBSTRDLGdCQUFnQixHQWlEM0Q7U0FqRFksc0JBQXNCOzs7SUFFbEMsd0NBQStCOztJQUMvQix5Q0FBb0M7O0lBQ3BDLDBDQUErQzs7SUFDL0MsNkNBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sU2VsZWN0LCBDb250cm9sU2VsZWN0T3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLXNlbGVjdCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtc2VsZWN0LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sU2VsZWN0O1xuXHRvcHRpb25zOiBDb250cm9sU2VsZWN0T3B0aW9uW10gPSBbXTtcblx0Z2V0VmFsdWU6IEZ1bmN0aW9uID0gdGhpcy5nZXRWYWx1ZV8uYmluZCh0aGlzKTtcblx0Y29tcGFyZVdpdGg6IEZ1bmN0aW9uID0gdGhpcy5jb21wYXJlV2l0aF8uYmluZCh0aGlzKTtcblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9wdGlvbnMkKCkucGlwZShcblx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSxcblx0XHRcdHRhcChvcHRpb25zID0+IHtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9uLmFzT2JqZWN0ICYmIHRoaXMuY29udHJvbC52YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGZpcnN0TnVsbE9wdGlvbnMgPSBvcHRpb25zLmZpbmQoeCA9PiB4LmlkID09PSBudWxsKTtcblx0XHRcdFx0XHRpZiAoZmlyc3ROdWxsT3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRyb2wuc2V0VmFsdWUoZmlyc3ROdWxsT3B0aW9ucyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHQpLnN1YnNjcmliZShvcHRpb25zID0+IHRoaXMub3B0aW9ucyA9IG9wdGlvbnMpO1xuXHR9XG5cblx0b3B0aW9ucyQoKTogT2JzZXJ2YWJsZTxDb250cm9sU2VsZWN0T3B0aW9uW10+IHtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb24ub3B0aW9ucztcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0aWYgKGlzT2JzZXJ2YWJsZShvcHRpb25zKSkge1xuXHRcdFx0XHRyZXR1cm4gb3B0aW9ucztcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuXHRcdFx0XHRyZXR1cm4gb2Yob3B0aW9ucyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gb2YoW10pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YoW10pO1xuXHRcdH1cblx0fVxuXG5cdGdldFZhbHVlXyhpdGVtOiBDb250cm9sU2VsZWN0T3B0aW9uKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24uYXNPYmplY3QgPyBpdGVtIDogaXRlbS5pZDtcblx0fVxuXG5cdGNvbXBhcmVXaXRoXyhhOiBDb250cm9sU2VsZWN0T3B0aW9uIHwgc3RyaW5nIHwgbnVtYmVyLCBiOiBDb250cm9sU2VsZWN0T3B0aW9uIHwgc3RyaW5nIHwgbnVtYmVyKSB7XG5cdFx0aWYgKHRoaXMub3B0aW9uLmFzT2JqZWN0KSB7XG5cdFx0XHRhID0gYSBhcyBDb250cm9sU2VsZWN0T3B0aW9uO1xuXHRcdFx0YiA9IGIgYXMgQ29udHJvbFNlbGVjdE9wdGlvbjtcblx0XHRcdHJldHVybiAoYiAmJiBiLmlkICE9PSB1bmRlZmluZWQpID8gYS5pZCA9PT0gYi5pZCA6IGEuaWQgPT09IGI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBiID8gYSA9PT0gYiA6IGEgPT09IG51bGw7XG5cdFx0fVxuXHR9XG59XG4iXX0=