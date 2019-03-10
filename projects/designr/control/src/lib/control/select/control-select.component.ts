import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlSelect } from './control-select';

@Component({
	selector: 'control-select-component',
	templateUrl: 'control-select.component.html',
})
export class ControlSelectComponent extends ControlComponent {

	@Input() option: ControlSelect;

}
