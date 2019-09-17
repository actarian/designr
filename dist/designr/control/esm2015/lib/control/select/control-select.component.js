/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isObservable, of } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ControlComponent } from '../control.component';
import { ControlSelect } from './control-select';
export class ControlSelectComponent extends ControlComponent {
    constructor() {
        super();
        this.options = [];
        this.getValue = this.getValue_.bind(this);
        this.compareWith = this.compareWith_.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.options$().pipe(takeUntil(this.unsubscribe), tap((/**
         * @param {?} options
         * @return {?}
         */
        options => {
            if (this.option.asObject && this.control.value === null) {
                /** @type {?} */
                const firstNullOptions = options.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.id === null));
                if (firstNullOptions !== undefined) {
                    this.control.setValue(firstNullOptions);
                }
            }
        }))).subscribe((/**
         * @param {?} options
         * @return {?}
         */
        options => this.options = options));
    }
    /**
     * @return {?}
     */
    options$() {
        /** @type {?} */
        const options = this.option.options;
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
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getValue_(item) {
        return this.option.asObject ? item : item.id;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    compareWith_(a, b) {
        if (this.option.asObject) {
            a = (/** @type {?} */ (a));
            b = (/** @type {?} */ (b));
            return (b && b.id !== undefined) ? a.id === b.id : a.id === b;
        }
        else {
            return b ? a === b : a === null;
        }
    }
}
ControlSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-select-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-template #inputDef let-context>\r\n\t\t<div class=\"control__input control__input--select\">\r\n\t\t\t<select [id]=\"context.option.key\" [formControlName]=\"context.option.key\" [compareWith]=\"context.compareWith\">\r\n\t\t\t\t<option *ngFor=\"let item of options\" [ngValue]=\"context.getValue(item)\">{{item?.name}}</option>\r\n\t\t\t</select>\r\n\t\t\t<!-- control__accessory -->\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"control__error control__error--select\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n</ng-container>\r\n"
            }] }
];
/** @nocollapse */
ControlSelectComponent.ctorParameters = () => [];
ControlSelectComponent.propDecorators = {
    option: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBdUIsTUFBTSxrQkFBa0IsQ0FBQztBQU10RSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCO0lBTzNEO1FBRUMsS0FBSyxFQUFFLENBQUM7UUFOVCxZQUFPLEdBQTBCLEVBQUUsQ0FBQztRQUNwQyxhQUFRLEdBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsZ0JBQVcsR0FBYSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUtyRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzNCLEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFOztzQkFDbEQsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLElBQUk7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksRUFBQztnQkFDekQsSUFBSSxnQkFBZ0IsS0FBSyxTQUFTLEVBQUU7b0JBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQ3hDO2FBQ0Q7UUFDRixDQUFDLEVBQUMsQ0FDRixDQUFDLFNBQVM7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNuQyxJQUFJLE9BQU8sRUFBRTtZQUNaLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMxQixPQUFPLE9BQU8sQ0FBQzthQUNmO2lCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDbEMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkI7aUJBQU07Z0JBQ04sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDZDtTQUNEO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNkO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxDQUF3QyxFQUFFLENBQXdDO1FBQzlGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDekIsQ0FBQyxHQUFHLG1CQUFBLENBQUMsRUFBdUIsQ0FBQztZQUM3QixDQUFDLEdBQUcsbUJBQUEsQ0FBQyxFQUF1QixDQUFDO1lBQzdCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5RDthQUFNO1lBQ04sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUM7U0FDaEM7SUFDRixDQUFDOzs7WUF6REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLDhoQ0FBNEM7YUFDNUM7Ozs7O3FCQUdDLEtBQUs7Ozs7SUFBTix3Q0FBK0I7O0lBQy9CLHlDQUFvQzs7SUFDcEMsMENBQStDOztJQUMvQyw2Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xTZWxlY3QsIENvbnRyb2xTZWxlY3RPcHRpb24gfSBmcm9tICcuL2NvbnRyb2wtc2VsZWN0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1zZWxlY3QtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xTZWxlY3Q7XG5cdG9wdGlvbnM6IENvbnRyb2xTZWxlY3RPcHRpb25bXSA9IFtdO1xuXHRnZXRWYWx1ZTogRnVuY3Rpb24gPSB0aGlzLmdldFZhbHVlXy5iaW5kKHRoaXMpO1xuXHRjb21wYXJlV2l0aDogRnVuY3Rpb24gPSB0aGlzLmNvbXBhcmVXaXRoXy5iaW5kKHRoaXMpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vcHRpb25zJCgpLnBpcGUoXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXG5cdFx0XHR0YXAob3B0aW9ucyA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbi5hc09iamVjdCAmJiB0aGlzLmNvbnRyb2wudmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb25zdCBmaXJzdE51bGxPcHRpb25zID0gb3B0aW9ucy5maW5kKHggPT4geC5pZCA9PT0gbnVsbCk7XG5cdFx0XHRcdFx0aWYgKGZpcnN0TnVsbE9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy5jb250cm9sLnNldFZhbHVlKGZpcnN0TnVsbE9wdGlvbnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0KS5zdWJzY3JpYmUob3B0aW9ucyA9PiB0aGlzLm9wdGlvbnMgPSBvcHRpb25zKTtcblx0fVxuXG5cdG9wdGlvbnMkKCk6IE9ic2VydmFibGU8Q29udHJvbFNlbGVjdE9wdGlvbltdPiB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9uLm9wdGlvbnM7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdGlmIChpc09ic2VydmFibGUob3B0aW9ucykpIHtcblx0XHRcdFx0cmV0dXJuIG9wdGlvbnM7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcblx0XHRcdFx0cmV0dXJuIG9mKG9wdGlvbnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG9mKFtdKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKFtdKTtcblx0XHR9XG5cdH1cblxuXHRnZXRWYWx1ZV8oaXRlbTogQ29udHJvbFNlbGVjdE9wdGlvbik6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uLmFzT2JqZWN0ID8gaXRlbSA6IGl0ZW0uaWQ7XG5cdH1cblxuXHRjb21wYXJlV2l0aF8oYTogQ29udHJvbFNlbGVjdE9wdGlvbiB8IHN0cmluZyB8IG51bWJlciwgYjogQ29udHJvbFNlbGVjdE9wdGlvbiB8IHN0cmluZyB8IG51bWJlcikge1xuXHRcdGlmICh0aGlzLm9wdGlvbi5hc09iamVjdCkge1xuXHRcdFx0YSA9IGEgYXMgQ29udHJvbFNlbGVjdE9wdGlvbjtcblx0XHRcdGIgPSBiIGFzIENvbnRyb2xTZWxlY3RPcHRpb247XG5cdFx0XHRyZXR1cm4gKGIgJiYgYi5pZCAhPT0gdW5kZWZpbmVkKSA/IGEuaWQgPT09IGIuaWQgOiBhLmlkID09PSBiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gYiA/IGEgPT09IGIgOiBhID09PSBudWxsO1xuXHRcdH1cblx0fVxufVxuIl19