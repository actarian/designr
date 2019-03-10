import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlNumber } from './control-number';

@Component({
	selector: 'control-number-component',
	templateUrl: 'control-number.component.html',
})
export class ControlNumberComponent extends ControlComponent {

	@Input() option: ControlNumber;

}
