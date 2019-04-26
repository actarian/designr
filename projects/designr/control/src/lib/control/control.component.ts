import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { IControlOption } from './control-option';

@Component({
	selector: 'control-component',
	templateUrl: 'control.component.html',
})
export class ControlComponent extends DisposableComponent {

	@Input() option: IControlOption<any>;
	@Input() form: FormGroup;

	get control(): AbstractControl {
		// console.log('control', this.option.key, this.form.controls);
		return this.form.controls[this.option.key];
	}

	get isValid() { return this.control.valid; }

	get classes() {
		return {
			valid: this.control.valid,
			invalid: this.control.invalid,
			dirty: this.control.dirty,
			empty: (this.control.value == null),
			required: (this.option.required || this.option.requiredTrue)
		};
	}

}
