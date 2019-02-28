import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlNumber } from './control-number';

@Component({
	selector: 'control-number-component',
	templateUrl: './control-number.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => ControlNumberComponent),
		multi: true,
	}],
})
export class ControlNumberComponent extends ControlBaseComponent implements ControlValueAccessor {

	@Input() control: ControlNumber;

	constructor(
		protected renderer: Renderer2
	) {
		super(renderer);
	}

}
