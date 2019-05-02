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
            // b = (b as ControlSelectOption) || { id: null, name: 'Any' };
            // console.log(a, b);
            return b ? a.id === b.id : a.id === null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBdUIsTUFBTSxrQkFBa0IsQ0FBQztBQUV0RTtJQUk0QyxrREFBZ0I7SUFPM0Q7UUFBQSxZQUVDLGlCQUFPLFNBQ1A7UUFQRCxhQUFPLEdBQTBCLEVBQUUsQ0FBQztRQUNwQyxjQUFRLEdBQWEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDL0MsaUJBQVcsR0FBYSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFLckQsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDbkIsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7O1lBQ08sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNuQyxJQUFJLE9BQU8sRUFBRTtZQUNaLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMxQixPQUFPLE9BQU8sQ0FBQzthQUNmO2lCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDbEMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkI7aUJBQU07Z0JBQ04sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDZDtTQUNEO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNkO0lBQ0YsQ0FBQzs7Ozs7SUFFRCwwQ0FBUzs7OztJQUFULFVBQVUsSUFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVELDZDQUFZOzs7OztJQUFaLFVBQWEsQ0FBK0IsRUFBRSxDQUErQjtRQUM1RSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3pCLENBQUMsR0FBRyxtQkFBQSxDQUFDLEVBQXVCLENBQUM7WUFDN0IsQ0FBQyxHQUFHLG1CQUFBLENBQUMsRUFBdUIsQ0FBQztZQUM3QiwrREFBK0Q7WUFDL0QscUJBQXFCO1lBQ3JCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDO1NBQ3pDO2FBQU07WUFDTixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztTQUNoQztJQUNGLENBQUM7O2dCQW5ERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsOGhDQUE0QztpQkFDNUM7Ozs7O3lCQUdDLEtBQUs7O0lBOENQLDZCQUFDO0NBQUEsQUFwREQsQ0FJNEMsZ0JBQWdCLEdBZ0QzRDtTQWhEWSxzQkFBc0I7OztJQUVsQyx3Q0FBK0I7O0lBQy9CLHlDQUFvQzs7SUFDcEMsMENBQStDOztJQUMvQyw2Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sU2VsZWN0LCBDb250cm9sU2VsZWN0T3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLXNlbGVjdCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtc2VsZWN0LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sU2VsZWN0O1xuXHRvcHRpb25zOiBDb250cm9sU2VsZWN0T3B0aW9uW10gPSBbXTtcblx0Z2V0VmFsdWU6IEZ1bmN0aW9uID0gdGhpcy5nZXRWYWx1ZV8uYmluZCh0aGlzKTtcblx0Y29tcGFyZVdpdGg6IEZ1bmN0aW9uID0gdGhpcy5jb21wYXJlV2l0aF8uYmluZCh0aGlzKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub3B0aW9ucyQoKS5waXBlKFxuXHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0KS5zdWJzY3JpYmUob3B0aW9ucyA9PiB0aGlzLm9wdGlvbnMgPSBvcHRpb25zKTtcblx0fVxuXG5cdG9wdGlvbnMkKCk6IE9ic2VydmFibGU8Q29udHJvbFNlbGVjdE9wdGlvbltdPiB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9uLm9wdGlvbnM7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdGlmIChpc09ic2VydmFibGUob3B0aW9ucykpIHtcblx0XHRcdFx0cmV0dXJuIG9wdGlvbnM7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcblx0XHRcdFx0cmV0dXJuIG9mKG9wdGlvbnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG9mKFtdKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKFtdKTtcblx0XHR9XG5cdH1cblxuXHRnZXRWYWx1ZV8oaXRlbTogQ29udHJvbFNlbGVjdE9wdGlvbik6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uLmFzT2JqZWN0ID8gaXRlbSA6IGl0ZW0uaWQ7XG5cdH1cblxuXHRjb21wYXJlV2l0aF8oYTogQ29udHJvbFNlbGVjdE9wdGlvbiB8IG51bWJlciwgYjogQ29udHJvbFNlbGVjdE9wdGlvbiB8IG51bWJlcikge1xuXHRcdGlmICh0aGlzLm9wdGlvbi5hc09iamVjdCkge1xuXHRcdFx0YSA9IGEgYXMgQ29udHJvbFNlbGVjdE9wdGlvbjtcblx0XHRcdGIgPSBiIGFzIENvbnRyb2xTZWxlY3RPcHRpb247XG5cdFx0XHQvLyBiID0gKGIgYXMgQ29udHJvbFNlbGVjdE9wdGlvbikgfHwgeyBpZDogbnVsbCwgbmFtZTogJ0FueScgfTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGEsIGIpO1xuXHRcdFx0cmV0dXJuIGIgPyBhLmlkID09PSBiLmlkIDogYS5pZCA9PT0gbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGIgPyBhID09PSBiIDogYSA9PT0gbnVsbDtcblx0XHR9XG5cdH1cbn1cbiJdfQ==