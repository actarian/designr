import { InjectionToken } from '@angular/core';

export class UIConfig {

	constructor(options?: UIConfig) {
		// console.log('UIConfig', options);
		if (options) {
			Object.assign(this, options);
		}
	}
}

export const UI_CONFIG = new InjectionToken<UIConfig>('ui.config');
