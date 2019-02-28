import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlCheckbox } from './control-checkbox';

@Component({
	selector: 'control-checkbox-component',
	templateUrl: './control-checkbox.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => ControlCheckboxComponent),
		multi: true,
	}],
})
export class ControlCheckboxComponent extends ControlBaseComponent implements ControlValueAccessor {

	@Input() control: ControlCheckbox;

	constructor(
		protected renderer: Renderer2
	) {
		super(renderer);
	}

}
