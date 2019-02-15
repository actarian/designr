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
import { AppUI } from './app.ui';
import { ContentComponent } from './common/content/content.component';
import { CookieComponent } from './common/cookie/cookie.component';
import { DebugComponent } from './common/debug/debug.component';
import { FeatureComponent } from './common/feature/feature.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { HeroComponent } from './common/hero/hero.component';
import { PictureComponent } from './common/picture/picture.component';
import { RelatedComponent } from './common/related/related.component';

const modules = [
	CommonModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	AppCore,
	AppDatas,
	AppRouting, // first
	AppPages,
	AppEditor,
	AppPlugins,
	AppUI,
];

const services = [
];

const sections: Type<DisposableComponent>[] = [
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

const components = [
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
		...sections,
		...pages,
	],
	entryComponents: [
		...pages,
	]
})

export class AppModule { }
