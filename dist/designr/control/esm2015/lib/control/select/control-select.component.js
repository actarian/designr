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
}
ControlSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-select-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\t<div class=\"form-select\" [ngClass]=\"classes\">\r\n\t\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t\t<div class=\"form-select__select\">\r\n\t\t\t<select [id]=\"option.key\" [formControlName]=\"option.key\">\r\n\t\t\t\t<option *ngFor=\"let item of options\" [ngValue]=\"item?.value\">{{item?.label}}</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n"
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUF1QixNQUFNLGtCQUFrQixDQUFDO0FBTXRFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxnQkFBZ0I7SUFLM0Q7UUFFQyxLQUFLLEVBQUUsQ0FBQztRQUpULFlBQU8sR0FBMEIsRUFBRSxDQUFDO0lBS3BDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDbkIsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxRQUFROztjQUNELE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDbkMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxPQUFPLENBQUM7YUFDZjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2Q7U0FDRDthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDZDtJQUNGLENBQUM7OztZQWpDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsZ3JCQUE0QzthQUM1Qzs7Ozs7cUJBR0MsS0FBSzs7OztJQUFOLHdDQUErQjs7SUFDL0IseUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFNlbGVjdCwgQ29udHJvbFNlbGVjdE9wdGlvbiB9IGZyb20gJy4vY29udHJvbC1zZWxlY3QnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLXNlbGVjdC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFNlbGVjdENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbFNlbGVjdDtcblx0b3B0aW9uczogQ29udHJvbFNlbGVjdE9wdGlvbltdID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9wdGlvbnMkKCkucGlwZShcblx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxuXHRcdCkuc3Vic2NyaWJlKG9wdGlvbnMgPT4gdGhpcy5vcHRpb25zID0gb3B0aW9ucyk7XG5cdH1cblxuXHRvcHRpb25zJCgpOiBPYnNlcnZhYmxlPENvbnRyb2xTZWxlY3RPcHRpb25bXT4ge1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbi5vcHRpb25zO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRpZiAoaXNPYnNlcnZhYmxlKG9wdGlvbnMpKSB7XG5cdFx0XHRcdHJldHVybiBvcHRpb25zO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG5cdFx0XHRcdHJldHVybiBvZihvcHRpb25zKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBvZihbXSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihbXSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==