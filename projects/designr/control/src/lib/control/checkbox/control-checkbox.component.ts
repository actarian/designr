import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlCheckbox } from './control-checkbox';

@Component({
	selector: 'control-checkbox-component',
	templateUrl: 'control-checkbox.component.html',
})
export class ControlCheckboxComponent extends ControlComponent {

	@Input() option: ControlCheckbox;

}
