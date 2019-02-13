import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DebugComponent } from './sections/debug/debug.component';
import { FeatureComponent } from './sections/feature/feature.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';

const sections: Type<DisposableComponent>[] = [
	ContentComponent,
	DebugComponent,
	FeatureComponent,
	FooterComponent,
	HeaderComponent,
	HeroComponent,
];

@NgModule({
	imports: [
		BrowserModule.withServerTransition(environment.transition),
		BrowserTransferStateModule,
		FormsModule,
		ReactiveFormsModule,
		AppRouting, // first
		AppDatas,
		AppPages,
		AppEditor,
		AppPlugins,
		AppUI,
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
