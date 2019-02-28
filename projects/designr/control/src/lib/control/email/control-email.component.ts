import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlEmail } from './control-email';

@Component({
	selector: 'control-email-component',
	templateUrl: './control-email.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => ControlEmailComponent),
		multi: true,
	}],
})
export class ControlEmailComponent extends ControlBaseComponent implements ControlValueAccessor {

	@Input() control: ControlEmail;

	constructor(
		protected renderer: Renderer2
	) {
		super(renderer);
	}

}
