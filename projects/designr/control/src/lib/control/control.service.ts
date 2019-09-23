import { Inject, Injectable, Type } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ControlConfig, CONTROL_CONFIG } from '../config/control.config';
import { existsValidator } from '../directives/exists.validator';
import { matchValidator } from '../directives/match.validator';
import { ControlOption, IControlOption } from './control-option';
import { ControlComponent } from './control.component';
import { ControlGroup } from './group/control-group';
import { ControlInfo } from './info/control-info';

export function noopValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		console.log(control);
		return null;
	};
}

@Injectable({
	providedIn: 'root'
})
export class ControlService {

	public options: ControlConfig;

	constructor(
		@Inject(CONTROL_CONFIG) options: ControlConfig
	) {
		// console.log('ControlService', options);
		this.options = new ControlConfig(options || {});
	}

	toFormGroup(options: IControlOption<any>[]): FormGroup {
		const controls: { [key: string]: FormControl | FormGroup } = {};
		options.forEach((option: ControlOption<any>) => {
			// group[x.key] = new FormControl(x.value, this.getValidators(x, group));
			if (option instanceof ControlGroup) {
				const group: FormGroup = this.toFormGroup(option.options);
				controls[option.key] = group;
			} else if (!(option instanceof ControlInfo)) {
				const validators = this.getValidators(option);
				const asyncValidators = this.getAsyncValidators(option);
				const control: FormControl = new FormControl(option.value, {
					validators: validators.length ? validators : undefined,
					asyncValidators: asyncValidators.length ? asyncValidators : undefined,
				});
				if (option.disabled) {
					control.disable();
				}
				controls[option.key] = control;
				// control.updateValueAndValidity();
				// x.setControl(control); // !!!
			}
		});
		const group: FormGroup = new FormGroup(controls);
		group.markAsDirty();
		// console.log(group);
		options.forEach((option: ControlOption<any>) => {
			if (!(option instanceof ControlInfo)) {
				const groupValidators = this.getGroupValidators(option, group);
				if (groupValidators.length) {
					// console.log(validators);
					group.controls[option.key].setValidators(groupValidators);
					// group.controls[option.key].updateValueAndValidity();
				}
			}
		});
		return group;
	}

	getValidators(option: IControlOption<any>): ValidatorFn[] {
		const validators: ValidatorFn[] = [];
		if (option.min) {
			validators.push(Validators.min(option.min));
		}
		if (option.max) {
			validators.push(Validators.max(option.max));
		}
		if (option.required) {
			validators.push(Validators.required);
		}
		if (option.requiredTrue) {
			validators.push(Validators.requiredTrue);
		}
		if (option.minlength) {
			validators.push(Validators.minLength(option.minlength));
		}
		if (option.maxlength) {
			validators.push(Validators.maxLength(option.maxlength));
		}
		if (option.pattern) {
			validators.push(Validators.pattern(option.pattern));
		}
		if (option.schema === 'email') {
			validators.push(Validators.email);
		}
		return validators;
	}

	getAsyncValidators(option: IControlOption<any>): AsyncValidatorFn[] {
		const validators: AsyncValidatorFn[] = [];
		if (option.exists) {
			validators.push(existsValidator(option.exists));
		}
		return validators;
	}

	getGroupValidators(option: IControlOption<any>, group: FormGroup): ValidatorFn[] {
		const validators: ValidatorFn[] = [];
		if (option.match) {
			validators.push(matchValidator(option.match, option.reverse, group));
		}
		return validators;
	}

	resolve(option: IControlOption<any>): Type<ControlComponent> {
		let component: Type<ControlComponent>;
		if (option) {
			component = this.options.controls[option.schema].component || ControlComponent;
		} else {
			component = ControlComponent;
		}
		return component;
	}

}
