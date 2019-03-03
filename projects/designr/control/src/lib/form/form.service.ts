import { Injectable, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase, ControlBaseOptions } from '../control/base/control-base';
import { ControlService } from '../control/control.service';
import { ControlInterface } from '../control/controls';

@Injectable({
	providedIn: 'root'
})
export class FormService {

	constructor(
		private controlService: ControlService
	) { }

	getControlsFromOptions(options: ControlBaseOptions<any>[]): ControlBase<any>[] {
		const controls: ControlBase<any>[] = options.map(o => {
			const control: ControlInterface = this.controlService.options.controls[o.schema];
			if (control) {
				const controlBase: Type<ControlBase<any>> = control.model;
				return new controlBase(o);
			} else {
				console.error(`missing control for key ${o.schema}`);
				return null;
			}
		}).filter(x => x);
		controls.sort((a, b) => a.order - b.order);
		return controls;
	}

	getGroupFromOptions(options: ControlBaseOptions<any>[]): FormGroup {
		const controls: ControlBase<any>[] = this.getControlsFromOptions(options);
		const group = this.controlService.toFormGroup(controls);
		return group;
	}

	getGroupFromControls(controls: ControlBase<any>[]): FormGroup {
		const group = this.controlService.toFormGroup(controls);
		return group;
	}

}
