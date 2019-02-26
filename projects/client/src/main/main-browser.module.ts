import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ORIGIN_URL, REQUEST } from '@nguniversal/aspnetcore-engine/tokens';
import { AppComponent } from '../app/app.component';
import { AppModule } from '../app/app.module';
import { environment } from '../environments/environment';

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
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.core.production && environment.core.useServiceWorker }),
	],
	providers: [
		// We need this for our Http calls since they'll be using an ORIGIN_URL provided in main.server
		// (Also remember the Server requires Absolute URLs)
		{ provide: ORIGIN_URL, useFactory: (getOriginUrl) },
		// The server provides these in main.server
		{ provide: REQUEST, useFactory: (getRequest) }
	],
	bootstrap: [AppComponent]
})

export class MainBrowserModule { }
