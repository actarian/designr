/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
var ControlsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlsComponent, _super);
    function ControlsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'controls-component',
                    template: "<ng-container *ngFor=\"let option of options\">\n\t<control-outlet class=\"form-group\" [option]=\"option\" [form]=\"form\"></control-outlet>\n</ng-container>"
                }] }
    ];
    ControlsComponent.propDecorators = {
        options: [{ type: Input }],
        form: [{ type: Input }]
    };
    return ControlsComponent;
}(DisposableComponent));
export { ControlsComponent };
if (false) {
    /** @type {?} */
    ControlsComponent.prototype.options;
    /** @type {?} */
    ControlsComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2xzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEQ7SUFNdUMsNkNBQW1CO0lBTjFEOztJQVNBLENBQUM7O2dCQVRBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsZ0tBRUs7aUJBQ2Y7OzswQkFFQyxLQUFLO3VCQUNMLEtBQUs7O0lBQ1Asd0JBQUM7Q0FBQSxBQVRELENBTXVDLG1CQUFtQixHQUd6RDtTQUhZLGlCQUFpQjs7O0lBQzdCLG9DQUF3Qzs7SUFDeEMsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBJQ29udHJvbE9wdGlvbiB9IGZyb20gJy4vY29udHJvbC1vcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9scy1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+XG5cdDxjb250cm9sLW91dGxldCBjbGFzcz1cImZvcm0tZ3JvdXBcIiBbb3B0aW9uXT1cIm9wdGlvblwiIFtmb3JtXT1cImZvcm1cIj48L2NvbnRyb2wtb3V0bGV0PlxuPC9uZy1jb250YWluZXI+YCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbHNDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IHtcblx0QElucHV0KCkgb3B0aW9uczogSUNvbnRyb2xPcHRpb248YW55PltdO1xuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG59XG4iXX0=