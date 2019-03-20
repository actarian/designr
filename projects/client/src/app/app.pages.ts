import { NgModule, Type } from '@angular/core';
import { ILayoutComponent, PageModule, Pages } from '@designr/page';
import { MainLayoutComponent } from './layouts/main/main-layout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const pages = [
	ContactComponent,
	DefaultComponent,
	HomeComponent,
	NotFoundComponent,
];

export const PAGES: Pages = {
	'ContactComponent': ContactComponent,
	'DefaultComponent': DefaultComponent,
	'HomeComponent': HomeComponent,
	'NotFoundComponent': NotFoundComponent,
};

export const layouts = [
	MainLayoutComponent,
];

export const LAYOUTS: { [key: string]: Type<ILayoutComponent> } = {
	'MainLayoutComponent': MainLayoutComponent,
};

@NgModule({
	imports: [
		PageModule.forRoot({
			layouts: LAYOUTS,
			defaultLayout: MainLayoutComponent,
			pages: PAGES,
			defaultPage: DefaultComponent,
			notFoundPage: NotFoundComponent,
		}),
	],
	exports: [
		PageModule,
	],
})

export class AppPages { }
