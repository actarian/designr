import { Injectable, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlInterface } from '../config/control.config';
import { ControlOption } from '../control/control-option';
import { ControlService } from '../control/control.service';

@Injectable({
	providedIn: 'root'
})
export class FormService {

	constructor(
		private controlService: ControlService
	) { }

	getFormGroup(options: ControlOption<any>[]): FormGroup {
		return this.controlService.toFormGroup(options);
	}

	getOptions(data: ControlOption<any>[]): ControlOption<any>[] {
		const options: ControlOption<any>[] = data.map(o => {
			const control: ControlInterface = this.controlService.options.controls[o.schema];
			if (control) {
				const optionModel: Type<ControlOption<any>> = control.model;
				return new optionModel(o);
			} else {
				console.error(`missing option for key ${o.schema}`);
				return null;
			}
		}).filter(x => x);
		options.sort((a, b) => a.order - b.order);
		return options;
	}

	getFormGroupFromOptions(options: ControlOption<any>[]): FormGroup {
		return this.getFormGroup(this.getOptions(options));
	}

}
