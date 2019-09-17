
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { IControlOption } from './control-option';

@Component({
	selector: 'controls-component',
	templateUrl: 'controls.component.html',
})
export class ControlsComponent extends DisposableComponent {
	@Input() options: IControlOption<any>[];
	@Input() form: FormGroup;
}
