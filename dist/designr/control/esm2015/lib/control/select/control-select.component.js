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
        super(...arguments);
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
                template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-template #inputDef let-context>\r\n\t\t<div class=\"control__input control__input--select\">\r\n\t\t\t<select [id]=\"context.option.key\" [formControlName]=\"context.option.key\" [compareWith]=\"context.compareWith\">\r\n\t\t\t\t<option *ngFor=\"let item of options\" [ngValue]=\"context.getValue(item)\">{{item?.name | label}}</option>\r\n\t\t\t</select>\r\n\t\t\t<!-- control__accessory -->\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"control__error control__error--select\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n</ng-container>\r\n"
            }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBdUIsTUFBTSxrQkFBa0IsQ0FBQztBQU10RSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCO0lBSjVEOztRQU9DLFlBQU8sR0FBMEIsRUFBRSxDQUFDO1FBQ3BDLGFBQVEsR0FBYSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxnQkFBVyxHQUFhLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBNEN0RCxDQUFDOzs7O0lBMUNBLFFBQVE7UUFDUCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUNuQixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUMzQixHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDYixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTs7c0JBQ2xELGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUM7Z0JBQ3pELElBQUksZ0JBQWdCLEtBQUssU0FBUyxFQUFFO29CQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUN4QzthQUNEO1FBQ0YsQ0FBQyxFQUFDLENBQ0YsQ0FBQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxRQUFROztjQUNELE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDbkMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxPQUFPLENBQUM7YUFDZjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2Q7U0FDRDthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDZDtJQUNGLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsQ0FBd0MsRUFBRSxDQUF3QztRQUM5RixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3pCLENBQUMsR0FBRyxtQkFBQSxDQUFDLEVBQXVCLENBQUM7WUFDN0IsQ0FBQyxHQUFHLG1CQUFBLENBQUMsRUFBdUIsQ0FBQztZQUM3QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNOLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQzs7O1lBcERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxzaUNBQTRDO2FBQzVDOzs7cUJBR0MsS0FBSzs7OztJQUFOLHdDQUErQjs7SUFDL0IseUNBQW9DOztJQUNwQywwQ0FBK0M7O0lBQy9DLDZDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFNlbGVjdCwgQ29udHJvbFNlbGVjdE9wdGlvbiB9IGZyb20gJy4vY29udHJvbC1zZWxlY3QnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLXNlbGVjdC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFNlbGVjdENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbFNlbGVjdDtcblx0b3B0aW9uczogQ29udHJvbFNlbGVjdE9wdGlvbltdID0gW107XG5cdGdldFZhbHVlOiBGdW5jdGlvbiA9IHRoaXMuZ2V0VmFsdWVfLmJpbmQodGhpcyk7XG5cdGNvbXBhcmVXaXRoOiBGdW5jdGlvbiA9IHRoaXMuY29tcGFyZVdpdGhfLmJpbmQodGhpcyk7XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vcHRpb25zJCgpLnBpcGUoXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXG5cdFx0XHR0YXAob3B0aW9ucyA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbi5hc09iamVjdCAmJiB0aGlzLmNvbnRyb2wudmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb25zdCBmaXJzdE51bGxPcHRpb25zID0gb3B0aW9ucy5maW5kKHggPT4geC5pZCA9PT0gbnVsbCk7XG5cdFx0XHRcdFx0aWYgKGZpcnN0TnVsbE9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy5jb250cm9sLnNldFZhbHVlKGZpcnN0TnVsbE9wdGlvbnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0KS5zdWJzY3JpYmUob3B0aW9ucyA9PiB0aGlzLm9wdGlvbnMgPSBvcHRpb25zKTtcblx0fVxuXG5cdG9wdGlvbnMkKCk6IE9ic2VydmFibGU8Q29udHJvbFNlbGVjdE9wdGlvbltdPiB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9uLm9wdGlvbnM7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdGlmIChpc09ic2VydmFibGUob3B0aW9ucykpIHtcblx0XHRcdFx0cmV0dXJuIG9wdGlvbnM7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcblx0XHRcdFx0cmV0dXJuIG9mKG9wdGlvbnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG9mKFtdKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKFtdKTtcblx0XHR9XG5cdH1cblxuXHRnZXRWYWx1ZV8oaXRlbTogQ29udHJvbFNlbGVjdE9wdGlvbik6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uLmFzT2JqZWN0ID8gaXRlbSA6IGl0ZW0uaWQ7XG5cdH1cblxuXHRjb21wYXJlV2l0aF8oYTogQ29udHJvbFNlbGVjdE9wdGlvbiB8IHN0cmluZyB8IG51bWJlciwgYjogQ29udHJvbFNlbGVjdE9wdGlvbiB8IHN0cmluZyB8IG51bWJlcikge1xuXHRcdGlmICh0aGlzLm9wdGlvbi5hc09iamVjdCkge1xuXHRcdFx0YSA9IGEgYXMgQ29udHJvbFNlbGVjdE9wdGlvbjtcblx0XHRcdGIgPSBiIGFzIENvbnRyb2xTZWxlY3RPcHRpb247XG5cdFx0XHRyZXR1cm4gKGIgJiYgYi5pZCAhPT0gdW5kZWZpbmVkKSA/IGEuaWQgPT09IGIuaWQgOiBhLmlkID09PSBiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gYiA/IGEgPT09IGIgOiBhID09PSBudWxsO1xuXHRcdH1cblx0fVxufVxuIl19