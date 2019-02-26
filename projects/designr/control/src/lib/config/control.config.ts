import { InjectionToken } from '@angular/core';
import { Controls } from '../control/controls';

export class ControlConfig {

	controls?: Controls = {};

	constructor(options?: ControlConfig) {
		// console.log('ControlConfig', options);
		if (options) {
			Object.assign(this, options);
			this.controls = options.controls || {};
		}
	}
}

export const CONTROL_CONFIG = new InjectionToken<ControlConfig>('control.config');
