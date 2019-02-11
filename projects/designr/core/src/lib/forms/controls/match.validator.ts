import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export function __matchValidator(key: string, otherKey: string, group: FormGroup): ValidatorFn {
	return (control: FormControl) => {

		// const control = group.controls[key];
		const otherControl = group.controls[otherKey];

		// console.log(control.touched, otherControl.touched);

		if (control.touched && otherControl.touched) {
			const match = control.value === otherControl.value;
			if (!match && control.valid && otherControl.valid) {
				control.setErrors({
					match: otherKey
				});
				return {
					match: otherKey + ' != ' + key
				};
			}
			if (match && control.hasError('match')) {
				control.setErrors(null);
			}
		}

		return null;
	};
}

export function matchValidator(otherKey: string, reverse: boolean = false, group: FormGroup): ValidatorFn {
	return (control: FormControl) => {
		const otherControl = group.controls[otherKey];

		const value = control.value;

		// value not equal
		if (otherControl && value !== otherControl.value && !reverse) {
			return {
				match: true,
			};
		}

		// value equal and reverse
		if (otherControl && value === otherControl.value && reverse) {
			if (otherControl.errors) {
				delete otherControl.errors['match'];
				if (!Object.keys(otherControl.errors).length) {
					otherControl.setErrors(null);
				}
			}
		}
		// value not equal and reverse
		if (otherControl && value !== otherControl.value && reverse) {
			otherControl.setErrors({
				match: true,
			});
		}

		return null;
	};
}

/*
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
*/
/*
static isValidString(control: FormControl) {
	if (!control.value || typeof control.value !== 'string') {
		return {isNotValidString: true};
	}
	return null;
}

static isValidName(control: FormControl) {
	if (control.valid && control.value !== 'John Doe') {
		return {isNotValidName: true};
	}
	return null;
}
*/
