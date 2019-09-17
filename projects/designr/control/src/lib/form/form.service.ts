import { Injectable, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlInterface } from '../config/control.config';
import { ControlOption, IControlOption } from '../control/control-option';
import { ControlService } from '../control/control.service';
import { ControlGroup } from '../control/group/control-group';

@Injectable({
	providedIn: 'root'
})
export class FormService {

	constructor(
		private controlService: ControlService
	) { }

	getOptions(data: IControlOption<any>[]): ControlOption<any>[] {
		const options: ControlOption<any>[] = data.map((option: IControlOption<any>) => {
			const control: ControlInterface = this.controlService.options.controls[option.schema];
			if (control) {
				const optionModel: Type<ControlOption<any>> = control.model;
				const optionModelInstance: ControlOption<any> = new optionModel(option);
				if (optionModelInstance instanceof ControlGroup) {
					const options = this.getOptions(optionModelInstance.options);
					options.sort((a, b) => a.order - b.order);
					optionModelInstance.options = options;
				}
				return optionModelInstance;
			} else {
				console.error(`missing option for key ${option.schema}`);
				return null;
			}
		}).filter(x => x);
		options.sort((a, b) => a.order - b.order);
		return options;
	}

	getFormGroup(options: ControlOption<any>[]): FormGroup {
		return this.controlService.toFormGroup(options);
	}

	getFormGroupFromOptions(options: IControlOption<any>[]): FormGroup {
		return this.getFormGroup(this.getOptions(options));
	}

}
