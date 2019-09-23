import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchValidator(otherKey: string, reverse: boolean = false, group: FormGroup): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
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
