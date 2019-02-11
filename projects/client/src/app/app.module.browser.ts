import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ORIGIN_URL, REQUEST } from '@nguniversal/aspnetcore-engine/tokens';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

export function getOriginUrl() {
	return window.location.origin;
}

export function getRequest() {
	// the Request object only lives on the server
	return { cookie: document.cookie };
}

@NgModule({
	imports: [
		BrowserAnimationsModule,
		AppModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production && environment.useServiceWorker }),
		// PrebootModule.withConfig(environment.preboot),
	],
	bootstrap: [AppComponent],
	providers: [
		// We need this for our Http calls since they'll be using an ORIGIN_URL provided in main.server
		// (Also remember the Server requires Absolute URLs)
		{ provide: ORIGIN_URL, useFactory: (getOriginUrl) },
		// The server provides these in main.server
		{ provide: REQUEST, useFactory: (getRequest) }
	]
})

export class AppModuleBrowser { }
