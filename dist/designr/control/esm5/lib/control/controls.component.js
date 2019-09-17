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
                    template: "<ng-container *ngFor=\"let option of options\">\r\n\t<control-outlet class=\"fieldset__field fieldset__field--{{option.schema}}\" [option]=\"option\" [form]=\"form\">\r\n\t\t<!--\r\n\t\t<ng-template #errorRef let-context>\r\n\t\t\t<div class=\"control__error control__error--{{context.option.schema}}\">\r\n\t\t\t\tAAA\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t\t-->\r\n\t</control-outlet>\r\n</ng-container>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2xzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEQ7SUFJdUMsNkNBQW1CO0lBSjFEOztJQU9BLENBQUM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qix5YUFBc0M7aUJBQ3RDOzs7MEJBRUMsS0FBSzt1QkFDTCxLQUFLOztJQUNQLHdCQUFDO0NBQUEsQUFQRCxDQUl1QyxtQkFBbUIsR0FHekQ7U0FIWSxpQkFBaUI7OztJQUM3QixvQ0FBd0M7O0lBQ3hDLGlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgSUNvbnRyb2xPcHRpb24gfSBmcm9tICcuL2NvbnRyb2wtb3B0aW9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbHMtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9scy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xzQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIG9wdGlvbnM6IElDb250cm9sT3B0aW9uPGFueT5bXTtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xufVxuIl19