import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlRadio } from './control-radio';

@Component({
	selector: 'control-radio-component',
	templateUrl: './control-radio.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => ControlRadioComponent),
		multi: true,
	}],
})
export class ControlRadioComponent extends ControlBaseComponent implements ControlValueAccessor {

	@Input() control: ControlRadio;

	constructor(
		protected renderer: Renderer2
	) {
		super(renderer);
	}

}
