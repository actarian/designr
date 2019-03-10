import { InjectionToken, Type } from '@angular/core';
import { ControlCheckbox } from '../control/checkbox/control-checkbox';
import { ControlCheckboxComponent } from '../control/checkbox/control-checkbox.component';
import { ControlOption } from '../control/control-option';
import { ControlComponent } from '../control/control.component';
import { ControlEmail } from '../control/email/control-email';
import { ControlEmailComponent } from '../control/email/control-email.component';
import { ControlMarkdown } from '../control/markdown/control-markdown';
import { ControlMarkdownComponent } from '../control/markdown/control-markdown.component';
import { ControlNumber } from '../control/number/control-number';
import { ControlNumberComponent } from '../control/number/control-number.component';
import { ControlPassword } from '../control/password/control-password';
import { ControlPasswordComponent } from '../control/password/control-password.component';
import { ControlRadio } from '../control/radio/control-radio';
import { ControlRadioComponent } from '../control/radio/control-radio.component';
import { ControlSelect } from '../control/select/control-select';
import { ControlSelectComponent } from '../control/select/control-select.component';
import { ControlText } from '../control/text/control-text';
import { ControlTextComponent } from '../control/text/control-text.component';
import { ControlTextarea } from '../control/textarea/control-textarea';
import { ControlTextareaComponent } from '../control/textarea/control-textarea.component';

export interface ControlInterface {
	component: Type<ControlComponent>;
	model: Type<ControlOption<any>>;
}

export interface Controls { [key: string]: ControlInterface; }

export const entryComponents = [
	ControlCheckboxComponent,
	ControlEmailComponent,
	ControlMarkdownComponent,
	ControlNumberComponent,
	ControlPasswordComponent,
	ControlRadioComponent,
	ControlSelectComponent,
	ControlTextComponent,
	ControlTextareaComponent,
];

export const controls: Controls = {
	'checkbox': {
		component: ControlCheckboxComponent,
		model: ControlCheckbox
	},
	'email': {
		component: ControlEmailComponent,
		model: ControlEmail
	},
	'markdown': {
		component: ControlMarkdownComponent,
		model: ControlMarkdown
	},
	'number': {
		component: ControlNumberComponent,
		model: ControlNumber
	},
	'password': {
		component: ControlPasswordComponent,
		model: ControlPassword
	},
	'radio': {
		component: ControlRadioComponent,
		model: ControlRadio
	},
	'select': {
		component: ControlSelectComponent,
		model: ControlSelect
	},
	'text': {
		component: ControlTextComponent,
		model: ControlText
	},
	'textarea': {
		component: ControlTextareaComponent,
		model: ControlTextarea
	},
};

export class ControlConfig {

	controls?: Controls = {};

	constructor(options?: ControlConfig) {
		// console.log('ControlConfig', options);
		if (options) {
			Object.assign(this, options);
			this.controls = {
				...controls,
				...(options.controls || {})
			};
		}
	}
}

export const CONTROL_CONFIG = new InjectionToken<ControlConfig>('control.config');
