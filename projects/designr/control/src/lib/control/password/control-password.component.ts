import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlPassword } from './control-password';

@Component({
	selector: 'control-password-component',
	templateUrl: './control-password.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => ControlPasswordComponent),
		multi: true,
	}],
})
export class ControlPasswordComponent extends ControlBaseComponent implements ControlValueAccessor {

	@Input() control: ControlPassword;

	constructor(
		protected renderer: Renderer2
	) {
		super(renderer);
	}

}
