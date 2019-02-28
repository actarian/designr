import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlSelect } from './control-select';

@Component({
	selector: 'control-select-component',
	templateUrl: './control-select.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => ControlSelectComponent),
		multi: true,
	}],
})
export class ControlSelectComponent extends ControlBaseComponent implements ControlValueAccessor {

	@Input() control: ControlSelect;

	constructor(
		protected renderer: Renderer2
	) {
		super(renderer);
	}

}
