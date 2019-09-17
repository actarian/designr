import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ControlComponent } from '../control.component';
import { ControlInfo } from './control-info';

@Component({
	selector: 'control-info-component',
	templateUrl: 'control-info.component.html',
})
export class ControlInfoComponent extends ControlComponent {

	@Input() option: ControlInfo;

	get control(): AbstractControl {
		return null;
	}

	get isValid() {
		return true;
	}

	get classes(): {
		valid?: boolean,
		invalid?: boolean,
		dirty?: boolean,
		empty?: boolean,
		required?: boolean,
		disabled?: boolean
	} {
		return {};
	}
}
