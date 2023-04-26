/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
export class ControlsComponent extends DisposableComponent {
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
if (false) {
    /** @type {?} */
    ControlsComponent.prototype.options;
    /** @type {?} */
    ControlsComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2xzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9wRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsbUJBQW1COzs7WUFKekQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLHlhQUFzQzthQUN0Qzs7O3NCQUVDLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLG9DQUF3Qzs7SUFDeEMsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLW9wdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2NvbnRyb2xzLWNvbXBvbmVudCcsXHJcblx0dGVtcGxhdGVVcmw6ICdjb250cm9scy5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sc0NvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpIG9wdGlvbnM6IElDb250cm9sT3B0aW9uPGFueT5bXTtcclxuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcbn1cclxuIl19