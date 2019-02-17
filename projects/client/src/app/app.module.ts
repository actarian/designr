import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { DisposableComponent } from '@designr/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppCore } from './app.core';
import { AppDatas } from './app.datas';
import { AppEditor } from './app.editor';
import { AppPages, pages } from './app.pages';
import { AppPlugins } from './app.plugins';
import { AppRouting } from './app.routing';
import { AppSections, sections } from './app.sections';
import { AppUI } from './app.ui';
import { ContentComponent } from './shared/content/content.component';
import { CookieComponent } from './shared/cookie/cookie.component';
import { DebugComponent } from './shared/debug/debug.component';
import { FeatureComponent } from './shared/feature/feature.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeroComponent } from './shared/hero/hero.component';
import { PictureComponent } from './shared/picture/picture.component';
import { RelatedComponent } from './shared/related/related.component';

const modules = [
	CommonModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	AppCore,
	AppDatas,
	AppRouting, // first
	AppSections,
	AppPages,
	AppEditor,
	AppPlugins,
	AppUI,
];

const services = [
];

const shared: Type<DisposableComponent>[] = [
	ContentComponent,
	CookieComponent,
	DebugComponent,
	FeatureComponent,
	FooterComponent,
	HeaderComponent,
	HeroComponent,
	PictureComponent,
	RelatedComponent,
];

const directives = [
];

const pipes = [
];

const validators = [
];

const guards = [
];

@NgModule({
	imports: [
		BrowserModule.withServerTransition(environment.core.transition),
		BrowserTransferStateModule,
		...modules,
	],
	providers: [],
	declarations: [
		AppComponent,
		...pages,
		...sections,
		...shared,
	],
	entryComponents: [
		...pages,
		...sections,
	]
})

export class AppModule { }
