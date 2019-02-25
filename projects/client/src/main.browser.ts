import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { environment } from './environments/environment';
import { ModuleBrowser } from './module.browser';

if (environment.core.production) {
	enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
	platformBrowserDynamic().bootstrapModule(ModuleBrowser, {
		providers: [
			{ provide: ORIGIN_URL, useValue: '' }
		]
	}).then(success => {
		// console.log('main.browser.ts Bootstrap success');
	}).catch(err => console.log('main.browser.ts ', err));
});
