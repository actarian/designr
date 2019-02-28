
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { ControlBase } from './base/control-base';

@Component({
	selector: 'controls-component',
	template: `<ng-container *ngFor="let control of controls">
	<control-outlet class="form-group" [control]="control" [form]="form"></control-outlet>
</ng-container>`,
})
export class ControlsComponent extends DisposableComponent {

	@Input() controls: ControlBase<any>[];
	@Input() form: FormGroup;

}
