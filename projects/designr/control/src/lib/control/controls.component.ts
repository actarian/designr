
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { IControlOption } from './control-option';

@Component({
	selector: 'controls-component',
	template: `<ng-container *ngFor="let option of options">
	<control-outlet class="form-group" [option]="option" [form]="form"></control-outlet>
</ng-container>`,
})
export class ControlsComponent extends DisposableComponent {
	@Input() options: IControlOption<any>[];
	@Input() form: FormGroup;
}