import { Inject, Injectable, Type } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ControlConfig, CONTROL_CONFIG } from '../config/control.config';
import { matchValidator } from '../directives/match.validator';
import { ControlBase } from './base/control-base';
import { ControlBaseComponent } from './base/control-base.component';

@Injectable({
	providedIn: 'root'
})
export class ControlService {

	public options: ControlConfig;

	constructor(
		@Inject(CONTROL_CONFIG) options: ControlConfig
	) {
		// console.log('ControlService', options);
		options = options || {};
		this.options = new ControlConfig(options);
	}

	resolve(control: ControlBase<any>): Type<ControlBaseComponent> {
		let component: Type<ControlBaseComponent>;
		if (control) {
			component = this.options.controls[control.schema].component || ControlBaseComponent;
		} else {
			component = ControlBaseComponent;
		}
		return component;
	}

	getValidators(control: ControlBase<any>, group: FormGroup): ValidatorFn[] {
		const validators: ValidatorFn[] = [];
		if (control.min) {
			validators.push(Validators.min(control.min));
		}
		if (control.max) {
			validators.push(Validators.max(control.max));
		}
		if (control.required) {
			validators.push(Validators.required);
		}
		if (control.requiredTrue) {
			validators.push(Validators.requiredTrue);
		}
		if (control.email) {
			validators.push(Validators.email);
		}
		if (control.minlength) {
			validators.push(Validators.minLength(control.minlength));
		}
		if (control.maxlength) {
			validators.push(Validators.maxLength(control.maxlength));
		}
		if (control.pattern) {
			validators.push(Validators.pattern(control.pattern));
		}
		if (control.match) {
			validators.push(matchValidator(control.match, control.reverse, group));
		}
		// console.log(control.key, validators);
		return validators;
	}

	toFormGroup(controls: ControlBase<any>[]): FormGroup {
		const options: any = {};
		controls.forEach(x => {
			// group[x.key] = new FormControl(x.value, this.getValidators(x, group));
			const formControl: FormControl = new FormControl(x.value);
			if (x.disabled) {
				formControl.disable();
			}
			options[x.key] = formControl;
			// x.setControl(formControl); // !!!
		});
		const group: FormGroup = new FormGroup(options);
		// console.log(group);
		controls.forEach(x => {
			const validators = this.getValidators(x, group);
			// console.log(validators);
			group.controls[x.key].setValidators(validators);
		});
		return group;
	}

}
