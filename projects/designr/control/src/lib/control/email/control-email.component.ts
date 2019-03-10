import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlEmail } from './control-email';

@Component({
	selector: 'control-email-component',
	templateUrl: 'control-email.component.html',
})
export class ControlEmailComponent extends ControlComponent {

	@Input() option: ControlEmail;

}
