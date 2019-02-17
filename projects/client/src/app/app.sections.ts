import { NgModule } from '@angular/core';
import { SectionModule, Sections } from '@designr/section';
import { TextCenterComponent } from './sections/text-center/text-center.component';
import { TextLeftComponent } from './sections/text-left/text-left.component';
import { TextRightComponent } from './sections/text-right/text-right.component';

export const sections = [
	TextCenterComponent,
	TextLeftComponent,
	TextRightComponent,
];

export const SECTIONS: Sections = {
	'TextCenterComponent': TextCenterComponent,
	'TextLeftComponent': TextLeftComponent,
	'TextRightComponent': TextRightComponent,
};

@NgModule({
	imports: [
		SectionModule.forRoot({
			sections: SECTIONS,
		}),
	],
	exports: [SectionModule]
})

export class AppSections { }
