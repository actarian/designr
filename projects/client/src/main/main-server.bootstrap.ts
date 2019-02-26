import { APP_BASE_HREF } from '@angular/common';
import { ApplicationRef, enableProdMode, NgModuleRef, NgZone, PlatformRef, StaticProvider } from '@angular/core';
import { ɵTRANSITION_ID } from '@angular/platform-browser';
import { BEFORE_APP_SERIALIZED, INITIAL_CONFIG, platformDynamicServer, PlatformState, renderModule } from '@angular/platform-server';
import { HttpStatusCodeService } from '@designr/core';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { BootFuncParams, createServerRenderer, RedirectResult, RenderResult, RenderToStringResult } from 'aspnet-prerendering';
import 'reflect-metadata';
import { first } from 'rxjs/operators';
import 'zone.js/dist/zone-node';
import { environment } from '../environments/environment';
import { MainServerModule } from './main-server.module';

if (environment.core.production) {
	enableProdMode();
}

class RenderOutput {
	html: string;
	globals?: any;
	statusCode: number;
	redirectUrl?: string;
}

function createServerRendererModeA(params: BootFuncParams): Promise<RenderToStringResult | RedirectResult> {

	const providers: StaticProvider[] = [
		{ provide: INITIAL_CONFIG, useValue: { document: params.data.originalHtml, url: params.url } },
		{ provide: APP_BASE_HREF, useValue: params.baseUrl },
		{ provide: ORIGIN_URL, useValue: params.origin },
	];

	return new Promise<RenderResult>((resolve, reject) => {
		platformDynamicServer(
			providers
		).bootstrapModule(
			MainServerModule
		).then((module: NgModuleRef<MainServerModule>) => {
			// console.log('main-server.bootstrap.ts success');
			const zone = module.injector.get(NgZone);
			const application = module.injector.get(ApplicationRef);
			zone.onError.subscribe((error) => {
				reject(error);
			});
			application.isStable.pipe(
				first(isStable => isStable)
			).subscribe(() => {
				const platformState: PlatformState = module.injector.get(PlatformState);
				let globals = null;
				const methods = module.injector.get(BEFORE_APP_SERIALIZED, null);
				if (methods) {
					methods.forEach(x => {
						try {
							globals = x();
						} catch (e) {
							// Ignore exceptions.
							console.warn('Ignoring BEFORE_APP_SERIALIZED Exception: ', e);
						}
					});
				}
				const statusCodeService = module.injector.get(HttpStatusCodeService);
				const html = platformState.renderToString();
				resolve({
					html: html,
					globals: globals,
					statusCode: statusCodeService.getStatusCode(),
					redirectUrl: statusCodeService.getRedirectUrl(),
				});
			});
		}).catch(error => console.log('main-server.bootstrap.ts ', error));
	});
}

/** CANCELLABILE **/

function renderModuleWithPlatform<T>(
	platform: PlatformRef,
	promise: Promise<NgModuleRef<T>>
): Promise<RenderOutput> {
	return promise.then((module) => {
		const transitionId = module.injector.get(ɵTRANSITION_ID, null);
		if (!transitionId) {
			throw new Error(`renderModule[Factory]() requires the use of BrowserModule.withServerTransition() to ensure the server-rendered app can be properly bootstrapped into a client app.`);
		}
		const application: ApplicationRef = module.injector.get(ApplicationRef);
		return application.isStable.pipe(
			first((isStable: boolean) => isStable),
		).toPromise().then(() => {
			const platformState = platform.injector.get(PlatformState);
			// Run any BEFORE_APP_SERIALIZED callbacks just before rendering to string.
			let globals = null;
			const methods = module.injector.get(BEFORE_APP_SERIALIZED, null);
			if (methods) {
				methods.forEach(x => {
					try {
						globals = x();
					} catch (e) {
						// Ignore exceptions.
						console.warn('Ignoring BEFORE_APP_SERIALIZED Exception: ', e);
					}
				});
			}
			const statusCodeService = module.injector.get(HttpStatusCodeService);
			const html = platformState.renderToString();
			platform.destroy();
			return {
				html: html,
				globals: globals,
				statusCode: statusCodeService.getStatusCode(),
				redirectUrl: statusCodeService.getRedirectUrl(),
			};
		});
	});
}

function createServerRendererModeB_(params: BootFuncParams): Promise<RenderToStringResult | RedirectResult> {

	const providers: StaticProvider[] = [
		{ provide: INITIAL_CONFIG, useValue: { document: params.data.originalHtml, url: params.url } },
		{ provide: APP_BASE_HREF, useValue: params.baseUrl },
		{ provide: ORIGIN_URL, useValue: params.origin },
	];

	return new Promise<RenderResult>((resolve, reject) => {
		const platform = platformDynamicServer(providers);
		const promise = platform.bootstrapModule(MainServerModule);
		return promise.then(
			(module: NgModuleRef<MainServerModule>) => {
				const zone = module.injector.get(NgZone);
				zone.onError.subscribe((error) => {
					console.log('NgZone.error', error);
					reject(error);
				});
				return renderModuleWithPlatform(platform, promise).then(
					response => {
						console.log('createServerRenderer.success', response.html);
						resolve({
							html: response.html,
							globals: response.globals,
							statusCode: response.statusCode,
							redirectUrl: response.redirectUrl,
						});
					},
					error => {
						console.log('createServerRenderer.error', error);
						reject({
							html: null,
							globals: error,
							statusCode: 500,
							redirectUrl: null,
						});
					}
				);
			});
	});
}

function createServerRendererModeC_(params: BootFuncParams): Promise<RenderToStringResult | RedirectResult> {

	const providers: StaticProvider[] = [
		{ provide: INITIAL_CONFIG, useValue: { document: params.data.originalHtml, url: params.url } },
		{ provide: APP_BASE_HREF, useValue: params.baseUrl },
		{ provide: ORIGIN_URL, useValue: params.origin },
	];

	return new Promise<RenderResult>((resolve, reject) => {
		renderModule(MainServerModule, {
			document: params.data.originalHtml,
			url: params.url,
			extraProviders: [
				{ provide: INITIAL_CONFIG, useValue: { document: params.data.originalHtml, url: params.url } },
				{ provide: APP_BASE_HREF, useValue: params.baseUrl },
				{ provide: ORIGIN_URL, useValue: params.origin },
			]
		}).then(
			html => {
				console.log(html);
				resolve({
					html: html,
					statusCode: 200,
					redirectUrl: null,
				});
			},
			error => {
				console.log(error);
				reject({
					html: null,
					statusCode: 500,
					redirectUrl: null,
				});
			}
		);

	});
}

/** CANCELLABILE **/

export default createServerRenderer((params: BootFuncParams) => {
	return createServerRendererModeA(params);
});
