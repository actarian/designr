import { CoreModule, NgModule, Pages } from '@designr/core';
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

@NgModule({
	imports: [
		CoreModule.forRoot({
			pages: PAGES,
			defaultPage: DefaultComponent,
			notFoundPage: NotFoundComponent,
		}),
	],
	exports: [CoreModule]
})

export class AppPages { }
