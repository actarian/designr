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
	<control-outlet class="fieldset__field" [option]="option" [form]="form">
	<!--
	<ng-template #errorRef let-context>
		<div class="control__error control__error--{{context.option.schema}}">
			AAA
		</div>
	</ng-template>
	-->
	</control-outlet>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2xzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWlCcEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLG1CQUFtQjs7O1lBZHpELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Z0JBVUs7YUFDZjs7O3NCQUVDLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLG9DQUF3Qzs7SUFDeEMsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBJQ29udHJvbE9wdGlvbiB9IGZyb20gJy4vY29udHJvbC1vcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9scy1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+XG5cdDxjb250cm9sLW91dGxldCBjbGFzcz1cImZpZWxkc2V0X19maWVsZFwiIFtvcHRpb25dPVwib3B0aW9uXCIgW2Zvcm1dPVwiZm9ybVwiPlxuXHQ8IS0tXG5cdDxuZy10ZW1wbGF0ZSAjZXJyb3JSZWYgbGV0LWNvbnRleHQ+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRyb2xfX2Vycm9yIGNvbnRyb2xfX2Vycm9yLS17e2NvbnRleHQub3B0aW9uLnNjaGVtYX19XCI+XG5cdFx0XHRBQUFcblx0XHQ8L2Rpdj5cblx0PC9uZy10ZW1wbGF0ZT5cblx0LS0+XG5cdDwvY29udHJvbC1vdXRsZXQ+XG48L25nLWNvbnRhaW5lcj5gLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sc0NvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXHRASW5wdXQoKSBvcHRpb25zOiBJQ29udHJvbE9wdGlvbjxhbnk+W107XG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbn1cbiJdfQ==