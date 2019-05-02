/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isObservable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
        this.options$().pipe(takeUntil(this.unsubscribe)).subscribe((/**
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
            // b = (b as ControlSelectOption) || { id: null, name: 'Any' };
            // console.log(a, b);
            return b ? a.id === b.id : a.id === null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUF1QixNQUFNLGtCQUFrQixDQUFDO0FBTXRFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxnQkFBZ0I7SUFPM0Q7UUFFQyxLQUFLLEVBQUUsQ0FBQztRQU5ULFlBQU8sR0FBMEIsRUFBRSxDQUFDO1FBQ3BDLGFBQVEsR0FBYSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxnQkFBVyxHQUFhLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBS3JELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDbkIsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxRQUFROztjQUNELE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDbkMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxPQUFPLENBQUM7YUFDZjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2Q7U0FDRDthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDZDtJQUNGLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsQ0FBK0IsRUFBRSxDQUErQjtRQUM1RSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3pCLENBQUMsR0FBRyxtQkFBQSxDQUFDLEVBQXVCLENBQUM7WUFDN0IsQ0FBQyxHQUFHLG1CQUFBLENBQUMsRUFBdUIsQ0FBQztZQUM3QiwrREFBK0Q7WUFDL0QscUJBQXFCO1lBQ3JCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDO1NBQ3pDO2FBQU07WUFDTixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztTQUNoQztJQUNGLENBQUM7OztZQW5ERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsOGhDQUE0QzthQUM1Qzs7Ozs7cUJBR0MsS0FBSzs7OztJQUFOLHdDQUErQjs7SUFDL0IseUNBQW9DOztJQUNwQywwQ0FBK0M7O0lBQy9DLDZDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xTZWxlY3QsIENvbnRyb2xTZWxlY3RPcHRpb24gfSBmcm9tICcuL2NvbnRyb2wtc2VsZWN0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1zZWxlY3QtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xTZWxlY3Q7XG5cdG9wdGlvbnM6IENvbnRyb2xTZWxlY3RPcHRpb25bXSA9IFtdO1xuXHRnZXRWYWx1ZTogRnVuY3Rpb24gPSB0aGlzLmdldFZhbHVlXy5iaW5kKHRoaXMpO1xuXHRjb21wYXJlV2l0aDogRnVuY3Rpb24gPSB0aGlzLmNvbXBhcmVXaXRoXy5iaW5kKHRoaXMpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vcHRpb25zJCgpLnBpcGUoXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcblx0XHQpLnN1YnNjcmliZShvcHRpb25zID0+IHRoaXMub3B0aW9ucyA9IG9wdGlvbnMpO1xuXHR9XG5cblx0b3B0aW9ucyQoKTogT2JzZXJ2YWJsZTxDb250cm9sU2VsZWN0T3B0aW9uW10+IHtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb24ub3B0aW9ucztcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0aWYgKGlzT2JzZXJ2YWJsZShvcHRpb25zKSkge1xuXHRcdFx0XHRyZXR1cm4gb3B0aW9ucztcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuXHRcdFx0XHRyZXR1cm4gb2Yob3B0aW9ucyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gb2YoW10pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YoW10pO1xuXHRcdH1cblx0fVxuXG5cdGdldFZhbHVlXyhpdGVtOiBDb250cm9sU2VsZWN0T3B0aW9uKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24uYXNPYmplY3QgPyBpdGVtIDogaXRlbS5pZDtcblx0fVxuXG5cdGNvbXBhcmVXaXRoXyhhOiBDb250cm9sU2VsZWN0T3B0aW9uIHwgbnVtYmVyLCBiOiBDb250cm9sU2VsZWN0T3B0aW9uIHwgbnVtYmVyKSB7XG5cdFx0aWYgKHRoaXMub3B0aW9uLmFzT2JqZWN0KSB7XG5cdFx0XHRhID0gYSBhcyBDb250cm9sU2VsZWN0T3B0aW9uO1xuXHRcdFx0YiA9IGIgYXMgQ29udHJvbFNlbGVjdE9wdGlvbjtcblx0XHRcdC8vIGIgPSAoYiBhcyBDb250cm9sU2VsZWN0T3B0aW9uKSB8fCB7IGlkOiBudWxsLCBuYW1lOiAnQW55JyB9O1xuXHRcdFx0Ly8gY29uc29sZS5sb2coYSwgYik7XG5cdFx0XHRyZXR1cm4gYiA/IGEuaWQgPT09IGIuaWQgOiBhLmlkID09PSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gYiA/IGEgPT09IGIgOiBhID09PSBudWxsO1xuXHRcdH1cblx0fVxufVxuIl19