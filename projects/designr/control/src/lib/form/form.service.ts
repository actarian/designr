import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase, ControlBaseOptions } from '../control/base/control-base';
import { ControlCheckbox } from '../control/checkbox/control-checkbox';
import { ControlService } from '../control/control.service';
import { ControlEmail } from '../control/email/control-email';
import { ControlMarkdown } from '../control/markdown/control-markdown';
import { ControlNumber } from '../control/number/control-number';
import { ControlPassword } from '../control/password/control-password';
import { ControlRadio } from '../control/radio/control-radio';
import { ControlSelect } from '../control/select/control-select';
import { ControlText } from '../control/text/control-text';

@Injectable({
	providedIn: 'root'
})
export class FormService {

	constructor(
		private controlService: ControlService
	) { }

	getControlsFromOptions(options: ControlBaseOptions<any>[]): ControlBase<any>[] {
		const controls: ControlBase<any>[] = options.map(o => {
			switch (o.schema) {
				case 'checkbox':
					return new ControlCheckbox(o);
				case 'email':
					return new ControlEmail(o);
				case 'number':
					return new ControlNumber(o);
				case 'password':
					return new ControlPassword(o);
				case 'radio':
					return new ControlRadio(o);
				case 'select':
					return new ControlSelect(o);
				case 'markdown':
					return new ControlMarkdown(o);
				case 'text':
					return new ControlText(o);
				default:
					return new ControlText(o);
			}
		});
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
