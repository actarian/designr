import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EditorModule } from '@designr/editor';
import { PluginsModule } from '@designr/plugins';
import { UIModule } from '@designr/ui';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppDatas } from './app.datas';
import { AppPages } from './app.pages';
import { AppRouting } from './app.routing';
import { ContactComponent } from './pages/contact/contact.component';
import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';

@NgModule({
	imports: [
		BrowserModule.withServerTransition(environment.transition),
		BrowserTransferStateModule,
		AppRouting,
		AppDatas,
		AppPages,
		EditorModule,
		PluginsModule,
		UIModule,
	],
	providers: [],
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		DefaultComponent,
		NotFoundComponent,
		HomeComponent,
		ContactComponent,
	],
	entryComponents: [
		DefaultComponent,
		NotFoundComponent,
		HomeComponent,
		ContactComponent,
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
