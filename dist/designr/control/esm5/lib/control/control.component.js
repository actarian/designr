/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { ControlOption } from './control-option';
var ControlComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlComponent, _super);
    function ControlComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            // console.log('control', this.option.key, this.form.controls);
            return this.form.controls[this.option.key];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.control.valid; },
        enumerable: true,
        configurable: true
    });
    ControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t<input class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" [type]=\"option.type\">\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t</div>\r\n</ng-container>\r\n"
                }] }
    ];
    ControlComponent.propDecorators = {
        option: [{ type: Input }],
        form: [{ type: Input }]
    };
    return ControlComponent;
}(DisposableComponent));
export { ControlComponent };
if (false) {
    /** @type {?} */
    ControlComponent.prototype.option;
    /** @type {?} */
    ControlComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQW1CLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFJc0MsNENBQW1CO0lBSnpEOztJQWdCQSxDQUFDO0lBUEEsc0JBQUkscUNBQU87Ozs7UUFBWDtZQUNDLCtEQUErRDtZQUMvRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTs7Z0JBZDVDLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qiw4Z0JBQXFDO2lCQUNyQzs7O3lCQUdDLEtBQUs7dUJBQ0wsS0FBSzs7SUFTUCx1QkFBQztDQUFBLEFBaEJELENBSXNDLG1CQUFtQixHQVl4RDtTQVpZLGdCQUFnQjs7O0lBRTVCLGtDQUFvQzs7SUFDcEMsZ0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sT3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLW9wdGlvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbE9wdGlvbjxhbnk+O1xuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG5cblx0Z2V0IGNvbnRyb2woKTogQWJzdHJhY3RDb250cm9sIHtcblx0XHQvLyBjb25zb2xlLmxvZygnY29udHJvbCcsIHRoaXMub3B0aW9uLmtleSwgdGhpcy5mb3JtLmNvbnRyb2xzKTtcblx0XHRyZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMub3B0aW9uLmtleV07XG5cdH1cblxuXHRnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuY29udHJvbC52YWxpZDsgfVxuXG59XG4iXX0=