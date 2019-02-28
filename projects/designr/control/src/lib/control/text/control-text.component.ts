import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlText } from './control-text';

@Component({
	selector: 'control-text-component',
	templateUrl: './control-text.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => ControlTextComponent),
		multi: true,
	}],
})
export class ControlTextComponent extends ControlBaseComponent implements ControlValueAccessor {

	@Input() control: ControlText;

	constructor(
		protected renderer: Renderer2
	) {
		super(renderer);
	}

}
