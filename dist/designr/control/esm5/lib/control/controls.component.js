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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2xzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEQ7SUFNdUMsNkNBQW1CO0lBTjFEOztJQVNBLENBQUM7O2dCQVRBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsZ0tBRUs7aUJBQ2Y7OzswQkFFQyxLQUFLO3VCQUNMLEtBQUs7O0lBQ1Asd0JBQUM7Q0FBQSxBQVRELENBTXVDLG1CQUFtQixHQUd6RDtTQUhZLGlCQUFpQjs7O0lBQzdCLG9DQUF1Qzs7SUFDdkMsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sT3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLW9wdGlvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2xzLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIj5cblx0PGNvbnRyb2wtb3V0bGV0IGNsYXNzPVwiZm9ybS1ncm91cFwiIFtvcHRpb25dPVwib3B0aW9uXCIgW2Zvcm1dPVwiZm9ybVwiPjwvY29udHJvbC1vdXRsZXQ+XG48L25nLWNvbnRhaW5lcj5gLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sc0NvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXHRASW5wdXQoKSBvcHRpb25zOiBDb250cm9sT3B0aW9uPGFueT5bXTtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xufVxuIl19