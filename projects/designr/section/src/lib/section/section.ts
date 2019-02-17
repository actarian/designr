import { Type } from '@angular/core';
import { PageIndex } from '@designr/page';
import { SectionComponent } from './section.component';

export interface Sections { [key: string]: Type<SectionComponent>; }

export class Section extends PageIndex {

	constructor(options?: Section) {
		super(options);
	}

}
