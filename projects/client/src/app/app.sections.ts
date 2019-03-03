import { NgModule } from '@angular/core';
import { SectionModule, Sections } from '@designr/section';
import { CardsComponent } from './sections/cards/cards.component';
import { ContentComponent } from './sections/content/content.component';
import { CookieComponent } from './sections/cookie/cookie.component';
import { FeatureComponent } from './sections/feature/feature.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { RelatedComponent } from './sections/related/related.component';
import { TextCenterComponent } from './sections/text-center/text-center.component';
import { TextLeftComponent } from './sections/text-left/text-left.component';
import { TextRightComponent } from './sections/text-right/text-right.component';

export const sections = [
	CardsComponent,
	ContentComponent,
	CookieComponent,
	FeatureComponent,
	FooterComponent,
	HeaderComponent,
	HeroComponent,
	RelatedComponent,
	TextCenterComponent,
	TextLeftComponent,
	TextRightComponent,
];

export const SECTIONS: Sections = {
	'CardsComponent': CardsComponent,
	'HeroComponent': HeroComponent,
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
