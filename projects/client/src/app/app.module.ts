import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { DisposableComponent } from '@designr/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppControls } from './app.controls';
import { AppCore } from './app.core';
import { AppDatas } from './app.datas';
import { AppEditor } from './app.editor';
import { AppPages, pages } from './app.pages';
import { AppPlugins } from './app.plugins';
import { AppRouting } from './app.routing';
import { AppSections, sections } from './app.sections';
import { AppUI } from './app.ui';
import { AuthForgottenComponent } from './modals/auth/auth-forgotten.component';
import { AuthSignInComponent } from './modals/auth/auth-sign-in.component';
import { AuthSignUpComponent } from './modals/auth/auth-sign-up.component';
import { AuthComponent } from './modals/auth/auth.component';
import { CookieComponent } from './shared/cookie/cookie.component';
import { DebugComponent } from './shared/debug/debug.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { PictureComponent } from './shared/picture/picture.component';
import { SpritesComponent } from './shared/sprites/sprites.component';
import { UserService } from './shared/user/user.service';

const modules = [
	CommonModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	AppRouting, // first
	AppCore,
	AppDatas,
	AppControls,
	AppEditor,
	AppPages,
	AppPlugins,
	AppSections,
	AppUI,
];

const services = [
	UserService,
];

const shared: Type<DisposableComponent>[] = [
	CookieComponent,
	DebugComponent,
	FooterComponent,
	HeaderComponent,
	LoaderComponent,
	PictureComponent,
	SpritesComponent,
];

const auth = [
	AuthForgottenComponent,
	AuthSignInComponent,
	AuthSignUpComponent,
	AuthComponent,
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
		...auth,
	],
	entryComponents: [
		...pages,
		...sections,
		...auth,
	]
})

export class AppModule { }
