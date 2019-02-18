import { Inject, Injectable, Type } from '@angular/core';
import { SectionConfig, SECTION_CONFIG } from '../config/section.config';
import { Section } from './section';
import { SectionComponent } from './section.component';

@Injectable({
	providedIn: 'root'
})
export class SectionService {

	public options: SectionConfig;
	constructor(
		@Inject(SECTION_CONFIG) options: SectionConfig,
	) {
		// console.log('SectionService', options);
		options = options || {};
		this.options = new SectionConfig(options);
	}

	resolve(section: Section): Type<SectionComponent> {
		let component: Type<SectionComponent>;
		if (section) {
			component = this.options.sections[section.component] || SectionComponent;
		} else {
			component = SectionComponent;
			// component = this.pageService.options.notFoundPage || SectionComponent;
		}
		return component;
	}

}
