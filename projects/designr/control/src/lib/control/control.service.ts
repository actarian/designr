import { Inject, Injectable, Type } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ControlConfig, CONTROL_CONFIG } from '../config/control.config';
import { matchValidator } from '../directives/match.validator';
import { IControlOption } from './control-option';
import { ControlComponent } from './control.component';

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

	resolve(options: IControlOption<any>): Type<ControlComponent> {
		let component: Type<ControlComponent>;
		if (options) {
			component = this.options.controls[options.schema].component || ControlComponent;
		} else {
			component = ControlComponent;
		}
		return component;
	}

	getValidators(options: IControlOption<any>, group: FormGroup): ValidatorFn[] {
		const validators: ValidatorFn[] = [];
		if (options.min) {
			validators.push(Validators.min(options.min));
		}
		if (options.max) {
			validators.push(Validators.max(options.max));
		}
		if (options.required) {
			validators.push(Validators.required);
		}
		if (options.requiredTrue) {
			validators.push(Validators.requiredTrue);
		}
		if (options.minlength) {
			validators.push(Validators.minLength(options.minlength));
		}
		if (options.maxlength) {
			validators.push(Validators.maxLength(options.maxlength));
		}
		if (options.pattern) {
			validators.push(Validators.pattern(options.pattern));
		}
		if (options.match) {
			validators.push(matchValidator(options.match, options.reverse, group));
		}
		if (options.schema === 'email') {
			validators.push(Validators.email);
		}
		// console.log(options.key, validators);
		return validators;
	}

	toFormGroup(options: IControlOption<any>[]): FormGroup {
		const controls: { [key: string]: FormControl } = {};
		options.forEach(x => {
			// group[x.key] = new FormControl(x.value, this.getValidators(x, group));
			const control: FormControl = new FormControl(x.value);
			if (x.disabled) {
				control.disable();
			}
			controls[x.key] = control;
			// x.setControl(control); // !!!
		});
		const group: FormGroup = new FormGroup(controls);
		// console.log(group);
		options.forEach(x => {
			const validators = this.getValidators(x, group);
			// console.log(validators);
			group.controls[x.key].setValidators(validators);
		});
		return group;
	}

}
