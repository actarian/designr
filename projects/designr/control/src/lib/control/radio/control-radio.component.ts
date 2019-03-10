import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlRadio } from './control-radio';

@Component({
	selector: 'control-radio-component',
	templateUrl: 'control-radio.component.html',
})
export class ControlRadioComponent extends ControlComponent {

	@Input() option: ControlRadio;

}
