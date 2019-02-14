import { NgModule, Type } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { DisposableComponent } from '@designr/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppDatas } from './app.datas';
import { AppEditor } from './app.editor';
import { AppPages, pages } from './app.pages';
import { AppPlugins } from './app.plugins';
import { AppRouting } from './app.routing';
import { AppUI } from './app.ui';
import { ContentComponent } from './sections/content/content.component';
import { CookieComponent } from './sections/cookie/cookie.component';
import { DebugComponent } from './sections/debug/debug.component';
import { FeatureComponent } from './sections/feature/feature.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';

const modules = [
	AppRouting, // first
	AppDatas,
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
		BrowserModule.withServerTransition(environment.transition),
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
