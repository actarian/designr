import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlPassword } from './control-password';

@Component({
	selector: 'control-password-component',
	templateUrl: 'control-password.component.html',
})
export class ControlPasswordComponent extends ControlComponent {

	reveal: { checked: boolean } = { checked: false };

	@Input() option: ControlPassword;

}
