
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { IControlOption } from './control-option';

@Component({
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
</ng-container>`,
})
export class ControlsComponent extends DisposableComponent {
	@Input() options: IControlOption<any>[];
	@Input() form: FormGroup;
}
