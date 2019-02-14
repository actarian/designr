import { InjectionToken } from '@angular/core';

export const EDITOR_CONFIG = new InjectionToken<EditorConfig>('editor.config');

export class EditorConfig {
	enabled?: boolean;

	constructor(options?: EditorConfig) {
		console.log('EditorConfig', options);
		if (options) {
			this.enabled = options.enabled || false;
		}
	}

}
