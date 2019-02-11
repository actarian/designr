import { Attribute, Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
	selector: '[match][formControlName],[match][formControl],[match][ngModel]',
	providers: [
		{ provide: NG_VALIDATORS, useExisting: forwardRef(() => MatchValidator), multi: true }
	]
})
export class MatchValidator implements Validator {

	constructor(
		@Attribute('match') public match: string,
		@Attribute('reverse') public reverse: string
	) { }

	private get isReverse() {
		if (!this.reverse) {
			return false;
		}
		return this.reverse === 'true' ? true : false;
	}

	validate(control: AbstractControl): { [key: string]: any } {
		// self value
		const value = control.value;

		// control value
		const input = control.root.get(this.match);

		// value not equal
		if (input && value !== input.value && !this.isReverse) {
			return {
				match: true,
			};
		}

		// value equal and reverse
		if (input && value === input.value && this.isReverse) {
			delete input.errors['match'];
			if (!Object.keys(input.errors).length) {
				input.setErrors(null);
			}
		}
		// value not equal and reverse
		if (input && value !== input.value && this.isReverse) {
			input.setErrors({
				match: true,
			});
		}

		return null;
	}

}
