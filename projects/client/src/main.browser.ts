import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { AppModuleBrowser } from './app/app.module.browser';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
	platformBrowserDynamic().bootstrapModule(AppModuleBrowser, {
		providers: [
			{ provide: ORIGIN_URL, useValue: '' }
		]
	})
		.then(success => {
			// console.log('main.browser.ts Bootstrap success');
		})
		.catch(err => console.log('main.browser.ts ', err));
});
