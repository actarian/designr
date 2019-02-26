import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { environment } from '../environments/environment';
import { MainBrowserModule } from './main-browser.module';

if (environment.core.production) {
	enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
	platformBrowserDynamic().bootstrapModule(MainBrowserModule, {
		providers: [
			{ provide: ORIGIN_URL, useValue: '' }
		]
	}).then(success => {
		// console.log('main-browser.bootstrap.ts success');
	}).catch(error => console.log('main-browser.bootstrap.ts', error));
});
