import { InjectionToken } from '@angular/core';
import { ControlCheckboxComponent } from '../control/checkbox/control-checkbox.component';
import { Controls } from '../control/controls';
import { ControlEmailComponent } from '../control/email/control-email.component';
import { ControlMarkdownComponent } from '../control/markdown/control-markdown.component';
import { ControlNumberComponent } from '../control/number/control-number.component';
import { ControlPasswordComponent } from '../control/password/control-password.component';
import { ControlRadioComponent } from '../control/radio/control-radio.component';
import { ControlSelectComponent } from '../control/select/control-select.component';
import { ControlTextComponent } from '../control/text/control-text.component';
import { ControlTextareaComponent } from '../control/textarea/control-textarea.component';

export const BaseControls = {
	'checkbox': ControlCheckboxComponent,
	'email': ControlEmailComponent,
	'markdown': ControlMarkdownComponent,
	'number': ControlNumberComponent,
	'password': ControlPasswordComponent,
	'radio': ControlRadioComponent,
	'select': ControlSelectComponent,
	'text': ControlTextComponent,
	'textarea': ControlTextareaComponent,
};

export class ControlConfig {

	controls?: Controls = {};

	constructor(options?: ControlConfig) {
		// console.log('ControlConfig', options);
		if (options) {
			Object.assign(this, options);
			this.controls = {
				...BaseControls,
				...(options.controls || {})
			};
		}
	}
}

export const CONTROL_CONFIG = new InjectionToken<ControlConfig>('control.config');
