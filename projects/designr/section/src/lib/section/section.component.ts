
import { Component, Input } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';

export interface SectionInit {
	SectionInit(): void;
}

@Component({
	selector: 'core-section',
	template: `<section class="section">Section not found!</section>`,
})
export class SectionComponent extends DisposableComponent {
	@Input() section: Section;
}
