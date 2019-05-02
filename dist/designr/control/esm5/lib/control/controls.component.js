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
                    template: "<ng-container *ngFor=\"let option of options\">\n\t<control-outlet class=\"fieldset__field\" [option]=\"option\" [form]=\"form\">\n\t<!--\n\t<ng-template #errorRef let-context>\n\t\t<div class=\"control__error control__error--{{context.option.schema}}\">\n\t\t\tAAA\n\t\t</div>\n\t</ng-template>\n\t-->\n\t</control-outlet>\n</ng-container>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2xzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEQ7SUFjdUMsNkNBQW1CO0lBZDFEOztJQWlCQSxDQUFDOztnQkFqQkEsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxzVkFVSztpQkFDZjs7OzBCQUVDLEtBQUs7dUJBQ0wsS0FBSzs7SUFDUCx3QkFBQztDQUFBLEFBakJELENBY3VDLG1CQUFtQixHQUd6RDtTQUhZLGlCQUFpQjs7O0lBQzdCLG9DQUF3Qzs7SUFDeEMsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBJQ29udHJvbE9wdGlvbiB9IGZyb20gJy4vY29udHJvbC1vcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9scy1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+XG5cdDxjb250cm9sLW91dGxldCBjbGFzcz1cImZpZWxkc2V0X19maWVsZFwiIFtvcHRpb25dPVwib3B0aW9uXCIgW2Zvcm1dPVwiZm9ybVwiPlxuXHQ8IS0tXG5cdDxuZy10ZW1wbGF0ZSAjZXJyb3JSZWYgbGV0LWNvbnRleHQ+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRyb2xfX2Vycm9yIGNvbnRyb2xfX2Vycm9yLS17e2NvbnRleHQub3B0aW9uLnNjaGVtYX19XCI+XG5cdFx0XHRBQUFcblx0XHQ8L2Rpdj5cblx0PC9uZy10ZW1wbGF0ZT5cblx0LS0+XG5cdDwvY29udHJvbC1vdXRsZXQ+XG48L25nLWNvbnRhaW5lcj5gLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sc0NvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXHRASW5wdXQoKSBvcHRpb25zOiBJQ29udHJvbE9wdGlvbjxhbnk+W107XG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbn1cbiJdfQ==