import { InjectionToken } from '@angular/core';
import { Sections } from '../section/section';

export class SectionConfig {
	sections?: Sections = {};

	constructor(options?: SectionConfig) {
		console.log('SectionConfig', options);
		if (options) {
			this.sections = options.sections || {};
		}
	}
}

export const SECTION_CONFIG = new InjectionToken<SectionConfig>('section.config');
