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
                template: `<ng-container *ngFor="let option of options">
	<control-outlet class="form-group" [option]="option" [form]="form"></control-outlet>
</ng-container>`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2xzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNwRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsbUJBQW1COzs7WUFOekQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Z0JBRUs7YUFDZjs7O3NCQUVDLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLG9DQUF3Qzs7SUFDeEMsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBJQ29udHJvbE9wdGlvbiB9IGZyb20gJy4vY29udHJvbC1vcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9scy1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+XG5cdDxjb250cm9sLW91dGxldCBjbGFzcz1cImZvcm0tZ3JvdXBcIiBbb3B0aW9uXT1cIm9wdGlvblwiIFtmb3JtXT1cImZvcm1cIj48L2NvbnRyb2wtb3V0bGV0PlxuPC9uZy1jb250YWluZXI+YCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbHNDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IHtcblx0QElucHV0KCkgb3B0aW9uczogSUNvbnRyb2xPcHRpb248YW55PltdO1xuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG59XG4iXX0=