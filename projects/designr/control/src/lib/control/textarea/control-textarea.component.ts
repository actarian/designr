import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlTextarea } from './control-textarea';

@Component({
	selector: 'control-textarea-component',
	templateUrl: './control-textarea.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => ControlTextareaComponent),
		multi: true,
	}],
})
export class ControlTextareaComponent extends ControlBaseComponent implements ControlValueAccessor {

	@Input() control: ControlTextarea;

	constructor(
		protected renderer: Renderer2
	) {
		super(renderer);
	}

}
