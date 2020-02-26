import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, Component, PLATFORM_ID, NgZone, ɵɵelement, ɵɵpipe, ɵɵnextContext, ɵɵproperty, ɵɵpipeBind1, ɵɵsanitizeResourceUrl, EventEmitter, ɵɵdirectiveInject, ɵɵInheritDefinitionFeature, ɵɵtemplate, Output, Input, ElementRef, KeyValueDiffers, ɵɵdefineDirective, ɵɵNgOnChangesFeature, Directive, Optional, ChangeDetectorRef, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵprojectionDef, ɵɵprojection, ɵɵlistener, ɵɵclassProp, ɵɵattribute, ViewEncapsulation, ViewChild, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵpropertyInterpolate1, ɵɵsanitizeUrl, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, SkipSelf } from '@angular/core';
import { isPlatformBrowser, NgIf, NgSwitch, NgSwitchCase, CommonModule } from '@angular/common';
import { LocalStorageService, OnceService, RouteService, Logger, DisposableComponent, SafeUrlPipe, CoreModule } from '@designr/core';
import { PageService } from '@designr/page';
import { of, from, Observable } from 'rxjs';
import { concatMap, filter, map, first, takeUntil, mergeMap } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import * as Swiper from 'swiper/dist/js/swiper.js';

class PluginsConfig {
    constructor(options) {
        this.origin = '';
        // console.log('PluginsConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
const PLUGINS_CONFIG = new InjectionToken('plugin.config');

class PluginsService {
    constructor(options) {
        // console.log('PluginsService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new PluginsConfig(options);
    }
}
PluginsService.ɵfac = function PluginsService_Factory(t) { return new (t || PluginsService)(ɵɵinject(PLUGINS_CONFIG)); };
PluginsService.ɵprov = ɵɵdefineInjectable({ token: PluginsService, factory: PluginsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PluginsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: PluginsConfig, decorators: [{
                type: Inject,
                args: [PLUGINS_CONFIG]
            }] }]; }, null); })();

class PluginsModuleComponent {
    constructor() {
        this.version = '0.0.12';
    }
    ngOnInit() {
    }
}
PluginsModuleComponent.ɵfac = function PluginsModuleComponent_Factory(t) { return new (t || PluginsModuleComponent)(); };
PluginsModuleComponent.ɵcmp = ɵɵdefineComponent({ type: PluginsModuleComponent, selectors: [["plugins-module"]], decls: 2, vars: 1, consts: [[1, "plugins-module"]], template: function PluginsModuleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1("plugins ", ctx.version, "");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PluginsModuleComponent, [{
        type: Component,
        args: [{
                selector: 'plugins-module',
                template: `<span class="plugins-module">plugins {{version}}</span>`,
                styles: []
            }]
    }], function () { return []; }, null); })();

class FacebookConfig {
    constructor() {
        this.fields = 'id,name,first_name,last_name,email,gender,picture,cover,link';
        this.scope = 'public_profile, email'; // publish_stream
        this.version = 'v2.10';
    }
}
class FacebookAuthResponse {
}
class FacebookPictureData {
}
class FacebookPicture {
}
class FacebookUser {
}
class FacebookService {
    constructor(platformId, pluginsService, storageService, onceService, routeService, pageService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.routeService = routeService;
        this.pageService = pageService;
        this.init();
    }
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.facebook) {
            throw new Error('FacebookService.error missing config object in environment.plugins.facebook');
        }
        this.options = Object.assign(new FacebookConfig(), this.pluginsService.options.facebook);
        this.storage = this.storageService.tryGet();
        this.authResponse = this.storage.get('facebook');
        if (this.options.appId) {
            this.pageService.addOrUpdateMeta({ property: 'fb:app_id', content: this.options.appId.toString() });
        }
        // console.log('FacebookService.authResponse', this.authResponse);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call FacebookService.facebook on component OnInit to avoid popup blockers via asyncronous loading *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    facebook() {
        //  && window.location.protocol.indexOf('https') !== -1
        if (isPlatformBrowser(this.platformId)) {
            if (this.FB) {
                return of(this.FB);
            }
            else {
                return this.onceService.script('//connect.facebook.net/' + this.routeService.currentLang + '/sdk.js', 'fbAsyncInit').pipe(concatMap(x => {
                    // console.log(x);
                    const FB = window['FB'];
                    FB.init({
                        appId: this.options.appId,
                        // status: true,
                        cookie: true,
                        xfbml: true,
                        version: this.options.version,
                    });
                    this.FB = FB;
                    return of(FB);
                }));
            }
        }
        else {
            return of(null);
        }
    }
    status() {
        return this.facebook().pipe(filter(f => f !== null), concatMap(f => {
            return from(new Promise((resolve, reject) => {
                f.getLoginStatus((r) => {
                    this.authResponse = null;
                    if (r.status === 'connected') {
                        this.authResponse = r.authResponse;
                        this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    }
                    else if (r.status === 'not_authorized') {
                        this.storage.delete('facebook');
                        reject(r);
                    }
                    else {
                        reject(r);
                    }
                }, { scope: this.options.scope });
            }));
        }));
        /*
        return from(new Promise((resolve, reject) => {
            this.facebook().subscribe(x => {
                x.getLoginStatus((r) => {
                    this.authResponse = null;
                    if (r.status === 'connected') {
                        this.authResponse = r.authResponse;
                        this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    } else if (r.status === 'not_authorized') {
                        this.storage.delete('facebook');
                        reject(r);
                    } else {
                        reject(r);
                    }
                }, { scope: this.options.scope });
            });
        }));
        */
    }
    login() {
        return this.facebook().pipe(filter(f => f !== null), concatMap(f => {
            return from(new Promise((resolve, reject) => {
                f.login((r) => {
                    this.authResponse = null;
                    if (r.status === 'connected') {
                        this.authResponse = r.authResponse;
                        this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    }
                    else if (r.status === 'not_authorized') {
                        this.storage.delete('facebook');
                        reject(r);
                    }
                    else {
                        reject(r);
                    }
                }, { scope: this.options.scope });
            }));
        }));
        /*
        return from(new Promise((resolve, reject) => {
            this.facebook().subscribe(x => {
                x.login((r) => {
                    this.authResponse = null;
                    if (r.status === 'connected') {
                        this.authResponse = r.authResponse;
                        this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    } else if (r.status === 'not_authorized') {
                        this.storage.delete('facebook');
                        reject(r);
                    } else {
                        reject(r);
                    }
                }, { scope: this.options.scope });
            });
        }));
        */
    }
    logout() {
        return this.facebook().pipe(filter(f => f !== null), concatMap(f => {
            return from(new Promise((resolve, reject) => {
                // console.log('f', f);
                f.logout(r => {
                    resolve(r);
                    this.storage.delete('facebook');
                });
            }));
        }));
        /*
        return from(new Promise((resolve, reject) => {
            this.facebook().subscribe(x => {
                x.logout(r => {
                    resolve(r);
                    this.storage.delete('facebook');
                });
            });
        }));
        */
    }
    getMe(fields) {
        return this.login().pipe(concatMap(l => {
            return from(new Promise((resolve, reject) => {
                fields = fields || this.options.fields;
                this.FB.api('/me', {
                    fields: fields,
                    accessToken: this.options.tokenClient,
                }, (r) => {
                    if (!r || r.error) {
                        const error = r ? r.error : 'error';
                        console.log('FacebookService.getMe.error', error);
                        reject(r.error);
                    }
                    else {
                        const user = r;
                        user.authResponse = this.authResponse;
                        user.facebookToken = this.authResponse.accessToken;
                        // console.log('FacebookService.getMe.success', user);
                        resolve(user);
                    }
                });
            }));
        }));
    }
}
FacebookService.ɵfac = function FacebookService_Factory(t) { return new (t || FacebookService)(ɵɵinject(PLATFORM_ID), ɵɵinject(PluginsService), ɵɵinject(LocalStorageService), ɵɵinject(OnceService), ɵɵinject(RouteService), ɵɵinject(PageService)); };
FacebookService.ɵprov = ɵɵdefineInjectable({ token: FacebookService, factory: FacebookService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FacebookService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PluginsService }, { type: LocalStorageService }, { type: OnceService }, { type: RouteService }, { type: PageService }]; }, null); })();

class GoogleTagManagerPageViewEvent {
}
class GoogleTagManagerConfig {
}
class GoogleTagManagerService {
    constructor(platformId, pluginsService, zone, onceService, logger) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.zone = zone;
        this.onceService = onceService;
        this.logger = logger;
        this.init();
    }
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.googleTagManager) {
            throw new Error('GoogleTagManagerService.error missing config object in environment.plugins.googleTagManager');
        }
        this.options = Object.assign(new GoogleTagManagerConfig(), this.pluginsService.options.googleTagManager);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call GoogleTagManagerConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    once() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.dataLayer) {
                return of(this.dataLayer);
            }
            else if (this.dataLayer$) {
                return this.dataLayer$;
            }
            else {
                window['dataLayer'] = window['dataLayer'] || [];
                const id = this.options.id;
                const src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
                const dataLayer = window['dataLayer'];
                dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                // console.log('GoogleTagManagerConfig.once', src, dataLayer);
                this.dataLayer$ = this.onceService.script(src).pipe(map(x => {
                    // console.log('dataLayer', dataLayer, x);
                    this.dataLayer = dataLayer;
                    return dataLayer;
                }));
                return this.dataLayer$;
            }
        }
        else {
            return of(null);
        }
    }
    push(payload) {
        this.zone.runOutsideAngular(() => {
            if (this.dataLayer) {
                this.dataLayer.push(payload);
                this.logger.log('GoogleTagManagerConfig.push', payload);
            }
            else {
                this.once().pipe(first()).subscribe(dataLayer => {
                    if (this.dataLayer) {
                        this.dataLayer.push(payload);
                        this.logger.log('GoogleTagManagerConfig.push', payload);
                    }
                });
            }
        });
    }
}
GoogleTagManagerService.ɵfac = function GoogleTagManagerService_Factory(t) { return new (t || GoogleTagManagerService)(ɵɵinject(PLATFORM_ID), ɵɵinject(PluginsService), ɵɵinject(NgZone), ɵɵinject(OnceService), ɵɵinject(Logger)); };
GoogleTagManagerService.ɵprov = ɵɵdefineInjectable({ token: GoogleTagManagerService, factory: GoogleTagManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GoogleTagManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PluginsService }, { type: NgZone }, { type: OnceService }, { type: Logger }]; }, null); })();

function GoogleTagManagerComponent_noscript_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "noscript");
    ɵɵelement(1, "iframe", 1);
    ɵɵpipe(2, "safeUrl");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("src", ɵɵpipeBind1(2, 1, ctx_r0.iframeUrl), ɵɵsanitizeResourceUrl);
} }
class GoogleTagManagerComponent extends DisposableComponent {
    constructor(platformId, pluginsService, router, googleTagManager) {
        super();
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.router = router;
        this.googleTagManager = googleTagManager;
        this.useIframe = true;
        this.pageView = new EventEmitter();
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.router.events.pipe(takeUntil(this.unsubscribe), filter(e => e instanceof NavigationEnd)).subscribe((e) => {
                const url = `${this.pluginsService.options.origin}${e.urlAfterRedirects}`;
                // console.log('GoogleTagManagerComponent.NavigationEnd', e.id, e.url, e.urlAfterRedirects, url);
                if (this.dataLayer) {
                    this.pageView.emit({ dataLayer: this.dataLayer, url });
                }
                else {
                    this.googleTagManager.once().pipe(takeUntil(this.unsubscribe)).subscribe(dataLayer => {
                        // console.log('dataLayer', dataLayer);
                        this.id = this.googleTagManager.options.id;
                        this.iframeUrl = `https://www.googletagmanager.com/ns.html?id=${this.id}`;
                        this.dataLayer = dataLayer;
                        this.pageView.emit({ dataLayer: this.dataLayer, url });
                    });
                }
            });
        }
    }
}
GoogleTagManagerComponent.ɵfac = function GoogleTagManagerComponent_Factory(t) { return new (t || GoogleTagManagerComponent)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(PluginsService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(GoogleTagManagerService)); };
GoogleTagManagerComponent.ɵcmp = ɵɵdefineComponent({ type: GoogleTagManagerComponent, selectors: [["core-google-tag-manager"]], outputs: { pageView: "pageView" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], ["height", "0", "width", "0", 2, "display", "none", "visibility", "hidden", 3, "src"]], template: function GoogleTagManagerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, GoogleTagManagerComponent_noscript_0_Template, 3, 3, "noscript", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.useIframe && ctx.dataLayer);
    } }, directives: [NgIf], pipes: [SafeUrlPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GoogleTagManagerComponent, [{
        type: Component,
        args: [{
                selector: 'core-google-tag-manager',
                template: `
	<!-- Google Tag Manager (noscript) -->
		<noscript *ngIf="useIframe && dataLayer">
			<iframe [src]="iframeUrl | safeUrl" height="0" width="0" style="display:none;visibility:hidden"></iframe>
		</noscript>
	<!-- End Google Tag Manager (noscript) -->`,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PluginsService }, { type: Router }, { type: GoogleTagManagerService }]; }, { pageView: [{
            type: Output
        }] }); })();

class GoogleConfig {
    constructor() {
        this.cookiepolicy = 'single_host_origin';
        this.scope = 'profile email';
        this.fetch_basic_profile = true;
        this.ux_mode = 'popup';
    }
}
class GoogleAuthResponse {
}
class GoogleUser {
}
class GoogleService {
    constructor(platformId, pluginsService, storageService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.init();
    }
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.google) {
            throw new Error('GoogleService.error missing config object in environment.plugins.google');
        }
        this.options = Object.assign(new GoogleConfig(), this.pluginsService.options.google);
        this.storage = this.storageService.tryGet();
        this.authResponse = this.storage.get('google');
        // console.log('GoogleService.authResponse', this.authResponse);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call GoogleService.google on component OnInit to avoid popup blockers via asyncronous loading *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    google() {
        if (isPlatformBrowser(this.platformId)) {
            return new Observable().pipe(x => {
                if (this.gapi) {
                    return of(this.gapi);
                }
                else {
                    return this.once();
                }
            });
        }
        else {
            return of(null);
        }
    }
    getMe() {
        return this.login().pipe(concatMap(x => {
            const profile = this.instance.currentUser.get().getBasicProfile();
            const user = {
                id: profile.getId(),
                name: profile.getName(),
                firstName: profile.getGivenName(),
                lastName: profile.getFamilyName(),
                picture: profile.getImageUrl(),
                email: profile.getEmail(),
                authResponse: this.authResponse,
                googleToken: this.authResponse.access_token,
            };
            return of(user);
        }));
    }
    login() {
        return this.auth2Instance().pipe(concatMap(x => {
            return this.signin();
        }));
    }
    logout() {
        return this.auth2Instance().pipe(concatMap(x => {
            return from(new Promise((resolve, reject) => {
                if (this.instance.isSignedIn && this.instance.isSignedIn.get()) {
                    this.instance.signOut().then((signed) => {
                        resolve();
                    }, reject);
                }
                else {
                    resolve();
                }
            }));
        }));
    }
    once() {
        return this.onceService.script('https://apis.google.com/js/api:client.js?onload={{callback}}', true).pipe(concatMap(x => {
            this.gapi = window['gapi'];
            return of(this.gapi);
        }));
    }
    getAuth2() {
        return new Observable().pipe(x => {
            if (this.auth2) {
                return of(this.auth2);
            }
            else {
                return this.google().pipe(concatMap(x => {
                    if (this.gapi.auth2) {
                        return this.auth2init();
                    }
                    else {
                        return from(new Promise((resolve, reject) => {
                            this.gapi.load('auth2', () => {
                                setTimeout(() => {
                                    resolve();
                                }, 200);
                            }, reject);
                        })).pipe(concatMap(x => {
                            return this.auth2init();
                        }));
                    }
                }));
            }
        });
    }
    signin() {
        return from(new Promise((resolve, reject) => {
            const readAccessToken = () => {
                // console.log('GoogleLogin.readAccessToken');
                try {
                    const user = this.instance.currentUser.get().getAuthResponse(true);
                    // console.log('GoogleLogin.readAccessToken.success', user);
                    this.authResponse = user;
                    this.storage.set('google', user);
                    resolve({
                        code: user.access_token,
                    });
                }
                catch (error) {
                    console.log('GoogleLogin.readAccessToken.error', error);
                    this.storage.delete('google');
                    reject(error);
                }
            };
            if (this.instance.isSignedIn && this.instance.isSignedIn.get()) {
                readAccessToken();
            }
            else {
                this.instance.signIn({
                    scope: 'profile email',
                }).then((signed) => {
                    readAccessToken();
                }, (error) => {
                    this.storage.delete('google');
                    reject(error);
                });
            }
        }));
    }
    auth2init() {
        return from(new Promise((resolve, reject) => {
            this.gapi.auth2.init({
                client_id: this.options.clientId,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email',
                fetch_basic_profile: true,
                ux_mode: 'popup',
            }).then(() => {
                this.auth2 = this.gapi.auth2;
                // console.log('Auth2Init.success', this.auth2);
                resolve(this.auth2);
            }, reject);
        }));
    }
    auth2Instance() {
        if (this.instance) {
            return of(this.instance);
        }
        else {
            return this.getAuth2().pipe(concatMap(x => {
                this.instance = this.auth2.getAuthInstance();
                return of(this.instance);
            }));
        }
    }
}
GoogleService.ɵfac = function GoogleService_Factory(t) { return new (t || GoogleService)(ɵɵinject(PLATFORM_ID), ɵɵinject(PluginsService), ɵɵinject(LocalStorageService), ɵɵinject(OnceService)); };
GoogleService.ɵprov = ɵɵdefineInjectable({ token: GoogleService, factory: GoogleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GoogleService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PluginsService }, { type: LocalStorageService }, { type: OnceService }]; }, null); })();

/*
import { isPlatformBrowser } from '@angular/common';
import { ElementRef, Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { fromEvent, Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
*/
class MapboxConfig {
}
class MapboxMapOptions {
}
class MapboxService {
}
MapboxService.ɵfac = function MapboxService_Factory(t) { return new (t || MapboxService)(); };
MapboxService.ɵprov = ɵɵdefineInjectable({ token: MapboxService, factory: MapboxService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MapboxService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

class PayPalConfigStyle {
}
class PayPalConfigClient {
}
class PayPalConfig {
}
class PayPalService {
    constructor(platformId, pluginsService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.onceService = onceService;
        this.init();
    }
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.paypal) {
            throw new Error('PayPalService.error missing config object in environment.plugins.paypal');
        }
        this.options = Object.assign(new PayPalConfig(), this.pluginsService.options.paypal);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call PayPalConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    once() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.paypal) {
                return of(this.paypal);
            }
            else if (this.paypal$) {
                return this.paypal$;
            }
            else {
                const src = `https://www.paypalobjects.com/api/checkout.js`;
                // console.log('PayPalConfig.once', src);
                this.paypal$ = this.onceService.script(src).pipe(map(x => {
                    this.paypal = window['paypal'];
                    return this.paypal;
                }));
                return this.paypal$;
            }
        }
        else {
            return of(null);
        }
    }
    render(options, selector) {
        selector = selector || '#paypal-button';
        return this.once().pipe(mergeMap(paypal => {
            paypal.Button.render(this.getOptions(paypal, options), selector);
            return of(paypal);
        }));
    }
    getOptions(paypal, options) {
        const payload = Object.assign(this.options, options);
        payload.payment = (data, actions) => {
            return new paypal.Promise((resolve, reject) => {
                if (options.payment) {
                    options.payment().pipe(first(), mergeMap(payload => {
                        return from(actions.payment.create(payload));
                    })).subscribe(success => resolve(success), // actions.payment.create(success)
                    // actions.payment.create(success)
                    error => reject(error));
                }
                else {
                    console.log('PayPalService.payment callback not setted');
                    reject(null);
                }
                // Make an ajax call to get the Payment ID. This should call your back-end,
                // which should invoke the PayPal Payment Create api to retrieve the Payment ID.
                // When you have a Payment ID, you need to call the `resolve` method, e.g `resolve(data.paymentID)`
                // Or, if you have an error from your server side, you need to call `reject`, e.g. `reject(err)`
                // jQuery.post('/my-api/create-payment')
                // .done(function(data) { resolve(data.paymentID); })
                // .fail(function(err)  { reject(err); });
            });
        };
        payload.onAuthorize = (data, actions) => {
            if (options.onAuthorize) {
                return actions.payment.execute().then(payment => options.onAuthorize(payment, null), error => options.onAuthorize(null, error));
            }
            else {
                console.log('PayPalService.onAuthorize callback not setted');
            }
        };
        return payload;
    }
}
PayPalService.ɵfac = function PayPalService_Factory(t) { return new (t || PayPalService)(ɵɵinject(PLATFORM_ID), ɵɵinject(PluginsService), ɵɵinject(OnceService)); };
PayPalService.ɵprov = ɵɵdefineInjectable({ token: PayPalService, factory: PayPalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PayPalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PluginsService }, { type: OnceService }]; }, null); })();

class PayPalWidgetComponent extends DisposableComponent {
    constructor(platformId, paypalService) {
        super();
        this.platformId = platformId;
        this.paypalService = paypalService;
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.paypalService.render(this.paypalOptions, '#paypal-widget-button').pipe(takeUntil(this.unsubscribe)).subscribe(paypal => {
                // console.log('PayPalWidgetComponent.rendered', paypal)
            });
        }
    }
}
PayPalWidgetComponent.ɵfac = function PayPalWidgetComponent_Factory(t) { return new (t || PayPalWidgetComponent)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(PayPalService)); };
PayPalWidgetComponent.ɵcmp = ɵɵdefineComponent({ type: PayPalWidgetComponent, selectors: [["plugins-paypal-widget-component"]], inputs: { paypalOptions: "paypalOptions" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["id", "#paypal-widget-button"]], template: function PayPalWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PayPalWidgetComponent, [{
        type: Component,
        args: [{
                selector: 'plugins-paypal-widget-component',
                template: `<div id="#paypal-widget-button"></div>`,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PayPalService }]; }, { paypalOptions: [{
            type: Input
        }] }); })();

const SWIPER_CONFIG = new InjectionToken('SWIPER_CONFIG');
const SwiperEvents = [
    'init',
    'beforeDestroy',
    'scroll',
    'progress',
    'keyPress',
    'beforeResize',
    'afterResize',
    'resize',
    'breakpoint',
    'beforeResize',
    'sliderMove',
    'slideChange',
    'setTranslate',
    'setTransition',
    'fromEdge',
    'reachEnd',
    'reachBeginning',
    'autoplay',
    'autoplayStop',
    'autoplayStart',
    'imagesReady',
    'lazyImageLoad',
    'lazyImageReady',
    'scrollDragEnd',
    'scrollDragMove',
    'scrollDragStart',
    'swiperTap',
    'swiperClick',
    'swiperDoubleTap',
    'swiperTouchEnd',
    'swiperTouchMove',
    'swiperTouchStart',
    'swiperTouchMoveOpposite',
    'swiperTransitionEnd',
    'swiperTransitionStart',
    'slideNextTransitionEnd',
    'slideNextTransitionStart',
    'slidePrevTransitionEnd',
    'slidePrevTransitionStart',
    'slideChangeTransitionEnd',
    'slideChangeTransitionStart'
];
class SwiperConfig {
    constructor(config = {}) {
        this.assign(config);
    }
    assign(config = {}, target) {
        target = target || this;
        for (const key in config) {
            if (config[key] != null && !Array.isArray(config[key]) && typeof config[key] === 'object' &&
                (typeof HTMLElement === 'undefined' || !(config[key] instanceof HTMLElement))) {
                target[key] = {};
                this.assign(config[key], target[key]);
            }
            else {
                target[key] = config[key];
            }
        }
    }
}

class SwiperDirective {
    constructor(platformId, zone, elementRef, differs, defaults) {
        this.platformId = platformId;
        this.zone = zone;
        this.elementRef = elementRef;
        this.differs = differs;
        this.defaults = defaults;
        this.index_ = null;
        this.config_ = null;
        this.disabled = false;
        this.performance = false;
        this.autoplay = new EventEmitter();
        this.autoplayStart = new EventEmitter();
        this.autoplayStop = new EventEmitter();
        this.beforeDestroy = new EventEmitter();
        this.beforeResize = new EventEmitter();
        this.breakpoint = new EventEmitter();
        this.click = new EventEmitter();
        this.doubleTap = new EventEmitter();
        this.fromEdge = new EventEmitter();
        this.imagesReady = new EventEmitter();
        this.indexChange = new EventEmitter();
        this.init = new EventEmitter();
        this.keyPress = new EventEmitter();
        this.lazyImageLoad = new EventEmitter();
        this.lazyImageReady = new EventEmitter();
        this.progress = new EventEmitter();
        this.reachBeginning = new EventEmitter();
        this.reachEnd = new EventEmitter();
        this.resize = new EventEmitter();
        this.scroll = new EventEmitter();
        this.scrollDragEnd = new EventEmitter();
        this.scrollDragMove = new EventEmitter();
        this.scrollDragStart = new EventEmitter();
        this.setTransition = new EventEmitter();
        this.setTranslate = new EventEmitter();
        this.slideChange = new EventEmitter();
        this.slideChangeTransitionEnd = new EventEmitter();
        this.slideChangeTransitionStart = new EventEmitter();
        this.slideNextTransitionEnd = new EventEmitter();
        this.slideNextTransitionStart = new EventEmitter();
        this.slidePrevTransitionEnd = new EventEmitter();
        this.slidePrevTransitionStart = new EventEmitter();
        this.sliderMove = new EventEmitter();
        this.tap = new EventEmitter();
        this.touchEnd = new EventEmitter();
        this.touchMove = new EventEmitter();
        this.touchMoveOpposite = new EventEmitter();
        this.touchStart = new EventEmitter();
        this.transitionEnd = new EventEmitter();
        this.transitionStart = new EventEmitter();
    }
    set index(index) {
        if (index != null) {
            this.setIndex(index);
        }
    }
    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const params = new SwiperConfig(this.defaults);
        params.assign(this.config); // Custom configuration
        if (params.scrollbar === true) {
            params.scrollbar = {
                el: '.swiper-scrollbar'
            };
        }
        if (params.pagination === true) {
            params.pagination = {
                el: '.swiper-pagination'
            };
        }
        if (params.navigation === true) {
            params.navigation = {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            };
        }
        if (this.disabled) {
            params.allowSlidePrev = false;
            params.allowSlideNext = false;
        }
        if (this.index_ != null) {
            params.initialSlide = this.index_;
            this.index_ = null;
        }
        params.on = {
            slideChange: () => {
                if (this.swiper_ && this.indexChange.observers.length) {
                    this.emit(this.indexChange, this.swiper_.realIndex);
                }
            }
        };
        this.zone.runOutsideAngular(() => {
            this.swiper_ = new Swiper(this.elementRef.nativeElement, params);
        });
        if (params.init !== false && this.init.observers.length) {
            this.emit(this.init, this.swiper_);
        }
        // Add native Swiper event handling
        SwiperEvents.forEach((eventName) => {
            let swiperEvent = eventName.replace('swiper', '');
            swiperEvent = swiperEvent.charAt(0).toLowerCase() + swiperEvent.slice(1);
            this.swiper_.on(swiperEvent, (...args) => {
                if (args.length === 1) {
                    args = args[0];
                }
                const emitter = this[swiperEvent];
                if (emitter.observers.length) {
                    this.emit(emitter, args);
                }
            });
        });
        if (!this.config_) {
            this.config_ = this.differs.find(this.config || {}).create();
            this.config_.diff(this.config || {});
        }
    }
    ngOnDestroy() {
        if (this.swiper_) {
            this.zone.runOutsideAngular(() => {
                this.swiper_.destroy(true, this.swiper_.initialized || false);
            });
            this.swiper_ = null;
        }
    }
    ngDoCheck() {
        if (this.config_) {
            const changes = this.config_.diff(this.config || {});
            if (changes) {
                this.index_ = this.getIndex(true);
                this.ngOnDestroy();
                this.ngAfterViewInit();
                this.update();
            }
        }
    }
    ngOnChanges(changes) {
        if (this.swiper_ && changes['disabled']) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.zone.runOutsideAngular(() => {
                        this.ngOnDestroy();
                        this.ngAfterViewInit();
                    });
                }
                else if (changes['disabled'].currentValue === false) {
                    this.zone.runOutsideAngular(() => {
                        this.ngOnDestroy();
                        this.ngAfterViewInit();
                    });
                }
            }
        }
    }
    emit(emitter, value) {
        if (this.performance) {
            emitter.emit(value);
        }
        else {
            this.zone.run(() => emitter.emit(value));
        }
    }
    swiper() {
        return this.swiper_;
    }
    initialize() {
        if (this.swiper_) {
            this.zone.runOutsideAngular(() => {
                this.swiper_.init();
            });
        }
    }
    update() {
        setTimeout(() => {
            if (this.swiper_) {
                this.zone.runOutsideAngular(() => {
                    this.swiper_.update();
                });
            }
        }, 0);
    }
    getIndex(real) {
        if (!this.swiper_) {
            return this.index_ || 0;
        }
        else {
            return real ? this.swiper_.realIndex : this.swiper_.activeIndex;
        }
    }
    setIndex(index, speed, silent) {
        if (!this.swiper_) {
            this.index_ = index;
        }
        else {
            let realIndex = index * this.swiper_.params.slidesPerGroup;
            if (this.swiper_.params.loop) {
                realIndex += this.swiper_.loopedSlides;
            }
            this.zone.runOutsideAngular(() => {
                this.swiper_.slideTo(realIndex, speed, !silent);
            });
        }
    }
    prevSlide(speed, silent) {
        if (this.swiper_) {
            this.zone.runOutsideAngular(() => {
                this.swiper_.slidePrev(speed, !silent);
            });
        }
    }
    nextSlide(speed, silent) {
        if (this.swiper_) {
            this.zone.runOutsideAngular(() => {
                this.swiper_.slideNext(speed, !silent);
            });
        }
    }
    stopAutoplay(reset) {
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper_ && this.swiper_.autoplay) {
            this.zone.runOutsideAngular(() => {
                this.swiper_.autoplay.stop();
            });
        }
    }
    startAutoplay(reset) {
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper_ && this.swiper_.autoplay) {
            this.zone.runOutsideAngular(() => {
                this.swiper_.autoplay.start();
            });
        }
    }
}
SwiperDirective.ɵfac = function SwiperDirective_Factory(t) { return new (t || SwiperDirective)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(SWIPER_CONFIG, 8)); };
SwiperDirective.ɵdir = ɵɵdefineDirective({ type: SwiperDirective, selectors: [["", "swiper", ""]], inputs: { index: "index", disabled: "disabled", performance: "performance", config: ["swiper", "config"] }, outputs: { autoplay: "autoplay", autoplayStart: "autoplayStart", autoplayStop: "autoplayStop", beforeDestroy: "beforeDestroy", beforeResize: "beforeResize", breakpoint: "breakpoint", click: "click", doubleTap: "doubleTap", fromEdge: "fromEdge", imagesReady: "imagesReady", indexChange: "indexChange", init: "init", keyPress: "keyPress", lazyImageLoad: "lazyImageLoad", lazyImageReady: "lazyImageReady", progress: "progress", reachBeginning: "reachBeginning", reachEnd: "reachEnd", resize: "resize", scroll: "scroll", scrollDragEnd: "scrollDragEnd", scrollDragMove: "scrollDragMove", scrollDragStart: "scrollDragStart", setTransition: "setTransition", setTranslate: "setTranslate", slideChange: "slideChange", slideChangeTransitionEnd: "slideChangeTransitionEnd", slideChangeTransitionStart: "slideChangeTransitionStart", slideNextTransitionEnd: "slideNextTransitionEnd", slideNextTransitionStart: "slideNextTransitionStart", slidePrevTransitionEnd: "slidePrevTransitionEnd", slidePrevTransitionStart: "slidePrevTransitionStart", sliderMove: "sliderMove", tap: "tap", touchEnd: "touchEnd", touchMove: "touchMove", touchMoveOpposite: "touchMoveOpposite", touchStart: "touchStart", transitionEnd: "transitionEnd", transitionStart: "transitionStart" }, exportAs: ["ngxSwiper"], features: [ɵɵNgOnChangesFeature()] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SwiperDirective, [{
        type: Directive,
        args: [{
                selector: '[swiper]',
                exportAs: 'ngxSwiper'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: NgZone }, { type: ElementRef }, { type: KeyValueDiffers }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [SWIPER_CONFIG]
            }] }]; }, { index: [{
            type: Input
        }], disabled: [{
            type: Input
        }], performance: [{
            type: Input
        }], config: [{
            type: Input,
            args: ['swiper']
        }], autoplay: [{
            type: Output
        }], autoplayStart: [{
            type: Output
        }], autoplayStop: [{
            type: Output
        }], beforeDestroy: [{
            type: Output
        }], beforeResize: [{
            type: Output
        }], breakpoint: [{
            type: Output
        }], click: [{
            type: Output
        }], doubleTap: [{
            type: Output
        }], fromEdge: [{
            type: Output
        }], imagesReady: [{
            type: Output
        }], indexChange: [{
            type: Output
        }], init: [{
            type: Output
        }], keyPress: [{
            type: Output
        }], lazyImageLoad: [{
            type: Output
        }], lazyImageReady: [{
            type: Output
        }], progress: [{
            type: Output
        }], reachBeginning: [{
            type: Output
        }], reachEnd: [{
            type: Output
        }], resize: [{
            type: Output
        }], scroll: [{
            type: Output
        }], scrollDragEnd: [{
            type: Output
        }], scrollDragMove: [{
            type: Output
        }], scrollDragStart: [{
            type: Output
        }], setTransition: [{
            type: Output
        }], setTranslate: [{
            type: Output
        }], slideChange: [{
            type: Output
        }], slideChangeTransitionEnd: [{
            type: Output
        }], slideChangeTransitionStart: [{
            type: Output
        }], slideNextTransitionEnd: [{
            type: Output
        }], slideNextTransitionStart: [{
            type: Output
        }], slidePrevTransitionEnd: [{
            type: Output
        }], slidePrevTransitionStart: [{
            type: Output
        }], sliderMove: [{
            type: Output
        }], tap: [{
            type: Output
        }], touchEnd: [{
            type: Output
        }], touchMove: [{
            type: Output
        }], touchMoveOpposite: [{
            type: Output
        }], touchStart: [{
            type: Output
        }], transitionEnd: [{
            type: Output
        }], transitionStart: [{
            type: Output
        }] }); })();

const _c0 = ["swiperSlides"];
const _c1 = ["*"];
class SwiperComponent {
    constructor(zone, cdRef, platformId, defaults) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.index = null;
        this.disabled = false;
        this.performance = false;
        this.useSwiperClass = true;
        this.autoplay = new EventEmitter();
        this.autoplayStart = new EventEmitter();
        this.autoplayStop = new EventEmitter();
        this.beforeDestroy = new EventEmitter();
        this.beforeResize = new EventEmitter();
        this.breakpoint = new EventEmitter();
        this.click = new EventEmitter();
        this.doubleTap = new EventEmitter();
        this.fromEdge = new EventEmitter();
        this.imagesReady = new EventEmitter();
        this.indexChange = new EventEmitter();
        this.init = new EventEmitter();
        this.keyPress = new EventEmitter();
        this.lazyImageLoad = new EventEmitter();
        this.lazyImageReady = new EventEmitter();
        this.progress = new EventEmitter();
        this.reachBeginning = new EventEmitter();
        this.reachEnd = new EventEmitter();
        this.resize = new EventEmitter();
        this.scroll = new EventEmitter();
        this.scrollDragEnd = new EventEmitter();
        this.scrollDragMove = new EventEmitter();
        this.scrollDragStart = new EventEmitter();
        this.setTransition = new EventEmitter();
        this.setTranslate = new EventEmitter();
        this.slideChange = new EventEmitter();
        this.slideChangeTransitionEnd = new EventEmitter();
        this.slideChangeTransitionStart = new EventEmitter();
        this.slideNextTransitionEnd = new EventEmitter();
        this.slideNextTransitionStart = new EventEmitter();
        this.slidePrevTransitionEnd = new EventEmitter();
        this.slidePrevTransitionStart = new EventEmitter();
        this.sliderMove = new EventEmitter();
        this.tap = new EventEmitter();
        this.touchEnd = new EventEmitter();
        this.touchMove = new EventEmitter();
        this.touchMoveOpposite = new EventEmitter();
        this.touchStart = new EventEmitter();
        this.transitionEnd = new EventEmitter();
        this.transitionStart = new EventEmitter();
        this.mo = null;
        this.swiperConfig = null;
        this.paginationBackup = null;
        this.paginationConfig = null;
    }
    get isAtLast() {
        return (!this.directiveRef || !this.directiveRef.swiper()) ?
            false : this.directiveRef.swiper()['isEnd'];
    }
    get isAtFirst() {
        return (!this.directiveRef || !this.directiveRef.swiper()) ?
            false : this.directiveRef.swiper()['isBeginning'];
    }
    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular(() => {
            this.updateClasses();
            if (this.swiperSlides && typeof MutationObserver !== 'undefined') {
                this.mo = new MutationObserver(() => {
                    this.updateClasses();
                });
                this.mo.observe(this.swiperSlides.nativeElement, { childList: true });
            }
        });
        window.setTimeout(() => {
            if (this.directiveRef) {
                this.init.emit();
                this.directiveRef.indexChange = this.indexChange;
                SwiperEvents.forEach((eventName) => {
                    if (this.directiveRef) {
                        const directiveOutput = eventName;
                        const componentOutput = eventName;
                        this.directiveRef[directiveOutput] = this[componentOutput];
                    }
                });
            }
        }, 0);
    }
    ngOnDestroy() {
        if (this.mo) {
            this.mo.disconnect();
        }
        if (this.config && this.paginationBackup) {
            this.config.pagination = this.paginationBackup;
        }
    }
    getConfig() {
        this.swiperConfig = new SwiperConfig(this.defaults);
        this.swiperConfig.assign(this.config); // Custom configuration
        if (this.swiperConfig.pagination === true ||
            (this.swiperConfig.pagination && typeof this.swiperConfig.pagination === 'object' &&
                (!this.swiperConfig.pagination.type || this.swiperConfig.pagination.type === 'bullets') &&
                !this.swiperConfig.pagination.renderBullet && this.swiperConfig.pagination.el === '.swiper-pagination')) {
            this.config = this.config || {};
            if (!this.paginationConfig) {
                this.paginationBackup = this.config.pagination;
                this.paginationConfig = {
                    el: '.swiper-pagination',
                    renderBullet: (index, className) => {
                        const children = this.swiperSlides ? this.swiperSlides.nativeElement.children : [];
                        let bullet = `<span class="${className} ${className}-middle" index="${index}"></span>`;
                        if (index === 0) {
                            bullet = `<span class="${className} ${className}-first" index="${index}"></span>`;
                        }
                        else if (index === (children.length - 1)) {
                            bullet = `<span class="${className} ${className}-last" index="${index}"></span>`;
                        }
                        return `<span class="swiper-pagination-handle" index="${index}">${bullet}</span>`;
                    }
                };
            }
            if (this.swiperConfig.pagination === true) {
                this.config.pagination = this.paginationConfig;
            }
            else {
                this.config.pagination = Object.assign({}, this.config.pagination, this.paginationConfig);
            }
        }
        return this.config;
    }
    updateClasses() {
        if (this.swiperSlides) {
            let updateNeeded = false;
            const children = this.swiperSlides.nativeElement.children;
            for (let i = 0; i < children.length; i++) {
                if (!children[i].classList.contains('swiper-slide')) {
                    updateNeeded = true;
                    children[i].classList.add('swiper-slide');
                }
            }
            if (updateNeeded && this.directiveRef) {
                this.directiveRef.update();
            }
        }
        this.cdRef.detectChanges();
    }
    onPaginationClick(index) {
        if (this.config && this.directiveRef && (this.config.pagination === true ||
            (this.config.pagination && typeof this.config.pagination === 'object' &&
                (!this.config.pagination.type || this.config.pagination.type === 'bullets') &&
                (this.config.pagination.clickable && this.config.pagination.el === '.swiper-pagination')))) {
            this.directiveRef.setIndex(index);
        }
    }
}
SwiperComponent.ɵfac = function SwiperComponent_Factory(t) { return new (t || SwiperComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(SWIPER_CONFIG, 8)); };
SwiperComponent.ɵcmp = ɵɵdefineComponent({ type: SwiperComponent, selectors: [["swiper"]], viewQuery: function SwiperComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
        ɵɵstaticViewQuery(SwiperDirective, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.swiperSlides = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.directiveRef = _t.first);
    } }, inputs: { index: "index", disabled: "disabled", performance: "performance", config: "config", useSwiperClass: "useSwiperClass" }, outputs: { autoplay: "autoplay", autoplayStart: "autoplayStart", autoplayStop: "autoplayStop", beforeDestroy: "beforeDestroy", beforeResize: "beforeResize", breakpoint: "breakpoint", click: "click", doubleTap: "doubleTap", fromEdge: "fromEdge", imagesReady: "imagesReady", indexChange: "indexChange", init: "init", keyPress: "keyPress", lazyImageLoad: "lazyImageLoad", lazyImageReady: "lazyImageReady", progress: "progress", reachBeginning: "reachBeginning", reachEnd: "reachEnd", resize: "resize", scroll: "scroll", scrollDragEnd: "scrollDragEnd", scrollDragMove: "scrollDragMove", scrollDragStart: "scrollDragStart", setTransition: "setTransition", setTranslate: "setTranslate", slideChange: "slideChange", slideChangeTransitionEnd: "slideChangeTransitionEnd", slideChangeTransitionStart: "slideChangeTransitionStart", slideNextTransitionEnd: "slideNextTransitionEnd", slideNextTransitionStart: "slideNextTransitionStart", slidePrevTransitionEnd: "slidePrevTransitionEnd", slidePrevTransitionStart: "slidePrevTransitionStart", sliderMove: "sliderMove", tap: "tap", touchEnd: "touchEnd", touchMove: "touchMove", touchMoveOpposite: "touchMoveOpposite", touchStart: "touchStart", transitionEnd: "transitionEnd", transitionStart: "transitionStart" }, exportAs: ["ngxSwiper"], ngContentSelectors: _c1, decls: 9, vars: 14, consts: [[1, "s-wrapper", 3, "swiper", "index", "disabled", "performance"], ["swiper", ""], [1, "swiper-wrapper"], ["swiperSlides", ""], [1, "swiper-scrollbar", 3, "hidden"], [1, "swiper-button-prev", 3, "hidden"], [1, "swiper-button-next", 3, "hidden"], [1, "swiper-pagination", 3, "hidden", "click", "keyup.enter"]], template: function SwiperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵprojection(4);
        ɵɵelementEnd();
        ɵɵelement(5, "div", 4);
        ɵɵelement(6, "div", 5);
        ɵɵelement(7, "div", 6);
        ɵɵelementStart(8, "div", 7);
        ɵɵlistener("click", function SwiperComponent_Template_div_click_8_listener($event) { return ctx.onPaginationClick($event.target.getAttribute("index")); })("keyup.enter", function SwiperComponent_Template_div_keyup_enter_8_listener($event) { return ctx.onPaginationClick($event.target.getAttribute("index")); });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("swiper", ctx.useSwiperClass)("swiper-container", ctx.useSwiperClass);
        ɵɵproperty("swiper", ctx.getConfig())("index", ctx.index)("disabled", ctx.disabled)("performance", ctx.performance);
        ɵɵadvance(5);
        ɵɵproperty("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar == null ? null : ctx.swiperConfig.scrollbar.el) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar == null ? null : ctx.swiperConfig.scrollbar.el) !== ".swiper-scrollbar");
        ɵɵadvance(1);
        ɵɵproperty("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.prevEl) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.prevEl) !== ".swiper-button-prev");
        ɵɵattribute("disabled", ctx.isAtFirst || null);
        ɵɵadvance(1);
        ɵɵproperty("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.nextEl) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.nextEl) !== ".swiper-button-next");
        ɵɵattribute("disabled", ctx.isAtLast || null);
        ɵɵadvance(1);
        ɵɵproperty("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination == null ? null : ctx.swiperConfig.pagination.el) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination == null ? null : ctx.swiperConfig.pagination.el) !== ".swiper-pagination");
    } }, directives: [SwiperDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SwiperComponent, [{
        type: Component,
        args: [{
                selector: 'swiper',
                exportAs: 'ngxSwiper',
                templateUrl: 'swiper.component.html',
                // styleUrls: ['~swiper/dist/css/swiper.min.css', 'swiper.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: NgZone }, { type: ChangeDetectorRef }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [SWIPER_CONFIG]
            }] }]; }, { swiperSlides: [{
            type: ViewChild,
            args: ['swiperSlides', { static: true }]
        }], directiveRef: [{
            type: ViewChild,
            args: [SwiperDirective, { static: true }]
        }], index: [{
            type: Input
        }], disabled: [{
            type: Input
        }], performance: [{
            type: Input
        }], config: [{
            type: Input
        }], useSwiperClass: [{
            type: Input
        }], autoplay: [{
            type: Output
        }], autoplayStart: [{
            type: Output
        }], autoplayStop: [{
            type: Output
        }], beforeDestroy: [{
            type: Output
        }], beforeResize: [{
            type: Output
        }], breakpoint: [{
            type: Output
        }], click: [{
            type: Output
        }], doubleTap: [{
            type: Output
        }], fromEdge: [{
            type: Output
        }], imagesReady: [{
            type: Output
        }], indexChange: [{
            type: Output
        }], init: [{
            type: Output
        }], keyPress: [{
            type: Output
        }], lazyImageLoad: [{
            type: Output
        }], lazyImageReady: [{
            type: Output
        }], progress: [{
            type: Output
        }], reachBeginning: [{
            type: Output
        }], reachEnd: [{
            type: Output
        }], resize: [{
            type: Output
        }], scroll: [{
            type: Output
        }], scrollDragEnd: [{
            type: Output
        }], scrollDragMove: [{
            type: Output
        }], scrollDragStart: [{
            type: Output
        }], setTransition: [{
            type: Output
        }], setTranslate: [{
            type: Output
        }], slideChange: [{
            type: Output
        }], slideChangeTransitionEnd: [{
            type: Output
        }], slideChangeTransitionStart: [{
            type: Output
        }], slideNextTransitionEnd: [{
            type: Output
        }], slideNextTransitionStart: [{
            type: Output
        }], slidePrevTransitionEnd: [{
            type: Output
        }], slidePrevTransitionStart: [{
            type: Output
        }], sliderMove: [{
            type: Output
        }], tap: [{
            type: Output
        }], touchEnd: [{
            type: Output
        }], touchMove: [{
            type: Output
        }], touchMoveOpposite: [{
            type: Output
        }], touchStart: [{
            type: Output
        }], transitionEnd: [{
            type: Output
        }], transitionStart: [{
            type: Output
        }] }); })();

class TrustPilotConfig {
    constructor() {
        this.businessunitId = '58e253ab0000ff00059fc0fe';
        this.businessunitName = 'www.eurospin-viaggi.it';
    }
}
class TrustPilotService {
    constructor(platformId, pluginsService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.onceService = onceService;
        this.init();
    }
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.options = Object.assign(new TrustPilotConfig(), this.pluginsService.options.trustPilot);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call TrustPilotConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    once() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.Trustpilot) {
                return of(this.Trustpilot);
            }
            else if (this.Trustpilot$) {
                return this.Trustpilot$;
            }
            else {
                const src = `https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js`;
                // console.log('TrustPilotConfig.once', src);
                this.Trustpilot$ = this.onceService.script(src).pipe(map(x => {
                    this.Trustpilot = window['Trustpilot'];
                    return this.Trustpilot;
                }));
                return this.Trustpilot$;
            }
        }
        else {
            return of(null);
        }
    }
}
TrustPilotService.ɵfac = function TrustPilotService_Factory(t) { return new (t || TrustPilotService)(ɵɵinject(PLATFORM_ID), ɵɵinject(PluginsService), ɵɵinject(OnceService)); };
TrustPilotService.ɵprov = ɵɵdefineInjectable({ token: TrustPilotService, factory: TrustPilotService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TrustPilotService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PluginsService }, { type: OnceService }]; }, null); })();

function TrustPilotWidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵelementStart(2, "div", 3);
    ɵɵelementStart(3, "a", 4);
    ɵɵtext(4, "Trustpilot");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵattribute("data-template-id", ctx_r3.options.templateId)("data-businessunit-id", ctx_r3.options.businessunitId)("data-locale", ctx_r3.options.locale)("data-style-height", ctx_r3.options.styleHeight)("data-style-width", ctx_r3.options.styleWidth)("data-theme", ctx_r3.options.theme)("data-sku", ctx_r3.sku);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r3.options.businessunitName, "", ɵɵsanitizeUrl);
} }
function TrustPilotWidgetComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵelementStart(2, "a", 4);
    ɵɵtext(3, "Trustpilot");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("data-template-id", ctx_r4.options.templateId)("data-businessunit-id", ctx_r4.options.businessunitId)("data-locale", ctx_r4.options.locale)("data-style-height", ctx_r4.options.styleHeight)("data-style-width", ctx_r4.options.styleWidth)("data-theme", ctx_r4.options.theme)("data-group", ctx_r4.options.group);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r4.options.businessunitName, "", ɵɵsanitizeUrl);
} }
function TrustPilotWidgetComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5);
    ɵɵelementStart(2, "a", 4);
    ɵɵtext(3, "Trustpilot");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("data-template-id", ctx_r5.options.templateId)("data-businessunit-id", ctx_r5.options.businessunitId)("data-locale", ctx_r5.options.locale)("data-style-height", ctx_r5.options.styleHeight)("data-style-width", ctx_r5.options.styleWidth)("data-theme", ctx_r5.options.theme);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r5.options.businessunitName, "", ɵɵsanitizeUrl);
} }
function TrustPilotWidgetComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5);
    ɵɵelementStart(2, "a", 4);
    ɵɵtext(3, "Trustpilot");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("data-template-id", ctx_r6.options.templateId)("data-businessunit-id", ctx_r6.options.businessunitId)("data-locale", ctx_r6.options.locale)("data-style-height", ctx_r6.options.styleHeight)("data-style-width", ctx_r6.options.styleWidth)("data-theme", ctx_r6.options.theme);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r6.options.businessunitName, "", ɵɵsanitizeUrl);
} }
function TrustPilotWidgetComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 6);
    ɵɵelementStart(2, "a", 4);
    ɵɵtext(3, "Trustpilot");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("data-template-id", ctx_r7.options.templateId)("data-businessunit-id", ctx_r7.options.businessunitId)("data-locale", ctx_r7.options.locale)("data-style-height", ctx_r7.options.styleHeight)("data-style-width", ctx_r7.options.styleWidth)("data-theme", ctx_r7.options.theme)("data-stars", ctx_r7.options.stars);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r7.options.businessunitName, "", ɵɵsanitizeUrl);
} }
class TrustPilotWidgetOptions {
    constructor(options) {
        this.locale = 'it-IT';
        this.styleHeight = '350px';
        this.styleWidth = '100%';
        this.theme = 'light';
        this.group = 'on';
        this.stars = '1,2,3,4,5';
        if (options) {
            Object.assign(this, options);
        }
    }
    static newFromConfig(options) {
        return new TrustPilotWidgetOptions(options);
    }
    set(options) {
        if (options) {
            Object.assign(this, options);
        }
        return this;
    }
}
class TrustPilotWidgetComponent extends DisposableComponent {
    constructor(platformId, pluginsService, elementRef, trustPilot) {
        super();
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.elementRef = elementRef;
        this.trustPilot = trustPilot;
        this.init();
    }
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.trustPilotOptions = this.pluginsService.options.trustPilot;
        this.options = new TrustPilotWidgetOptions(this.trustPilotOptions);
    }
    ngAfterViewInit() {
        // console.log('TrustPilotWidgetComponent.ngOnInit', this.options, this.loaded);
        if (isPlatformBrowser(this.platformId) && this.elementRef.nativeElement.children.length) { // && environment.production
            if (!this.loaded) {
                this.trustPilot.once().pipe(takeUntil(this.unsubscribe)).subscribe(Trustpilot => {
                    Trustpilot.loadFromElement(this.elementRef.nativeElement.firstElementChild);
                    this.loaded = true;
                });
            }
        }
    }
}
TrustPilotWidgetComponent.ɵfac = function TrustPilotWidgetComponent_Factory(t) { return new (t || TrustPilotWidgetComponent)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(PluginsService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TrustPilotService)); };
TrustPilotWidgetComponent.ɵcmp = ɵɵdefineComponent({ type: TrustPilotWidgetComponent, selectors: [["plugins-trustpilot-widget-component"]], inputs: { options: "options", sku: "sku" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 6, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "trustpilot-comments"], [1, "trustpilot-widget", 2, "margin", "30px 0", "max-width", "750px"], ["target", "_blank", 3, "href"], [1, "trustpilot-widget", 2, "margin", "15px auto", "max-width", "750px"], [1, "trustpilot-widget", 2, "margin", "15px auto"]], template: function TrustPilotWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0);
        ɵɵelementContainerStart(1, 0);
        ɵɵtemplate(2, TrustPilotWidgetComponent_ng_container_2_Template, 5, 8, "ng-container", 1);
        ɵɵtemplate(3, TrustPilotWidgetComponent_ng_container_3_Template, 4, 8, "ng-container", 1);
        ɵɵtemplate(4, TrustPilotWidgetComponent_ng_container_4_Template, 4, 7, "ng-container", 1);
        ɵɵtemplate(5, TrustPilotWidgetComponent_ng_container_5_Template, 4, 7, "ng-container", 1);
        ɵɵtemplate(6, TrustPilotWidgetComponent_ng_container_6_Template, 4, 8, "ng-container", 1);
        ɵɵelementContainerEnd();
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngSwitch", ctx.options.templateId);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "544a426205dc0a09088833c6");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "530d0eaf748a510e2093cf9b");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "53aa8807dec7e10d38f59f32");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "5613c9cde69ddc09340c6beb");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "53aa8912dec7e10d38f59f36");
    } }, directives: [NgSwitch, NgSwitchCase], styles: ["[_nghost-%COMP%]{width:100%}.trustpilot-widget[_ngcontent-%COMP%]{margin:15px auto!important}@media print{.trustpilot-comments[_ngcontent-%COMP%]{display:none!important}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TrustPilotWidgetComponent, [{
        type: Component,
        args: [{
                selector: 'plugins-trustpilot-widget-component',
                templateUrl: './trustpilot-widget.component.html',
                styleUrls: ['./trustpilot-widget.component.scss'],
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PluginsService }, { type: ElementRef }, { type: TrustPilotService }]; }, { options: [{
            type: Input
        }], sku: [{
            type: Input
        }] }); })();

const services = [
    PluginsService,
    FacebookService,
    GoogleService,
    GoogleTagManagerService,
    MapboxService,
    PayPalService,
    TrustPilotService,
];
const components = [
    PluginsModuleComponent,
    GoogleTagManagerComponent,
    PayPalWidgetComponent,
    TrustPilotWidgetComponent,
    SwiperComponent,
    SwiperDirective,
];
const directives = [];
const pipes = [];
const validators = [];
const guards = [];
class PluginsModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('PluginsModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: PluginsModule,
            providers: [
                { provide: PLUGINS_CONFIG, useValue: config },
            ]
        };
    }
}
PluginsModule.ɵmod = ɵɵdefineNgModule({ type: PluginsModule });
PluginsModule.ɵinj = ɵɵdefineInjector({ factory: function PluginsModule_Factory(t) { return new (t || PluginsModule)(ɵɵinject(PluginsModule, 12)); }, providers: [
        ...services
    ], imports: [[
            CommonModule,
            CoreModule,
        ],
        CoreModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PluginsModule, { declarations: [PluginsModuleComponent,
        GoogleTagManagerComponent,
        PayPalWidgetComponent,
        TrustPilotWidgetComponent,
        SwiperComponent,
        SwiperDirective], imports: [CommonModule,
        CoreModule], exports: [CoreModule,
        PluginsModuleComponent,
        GoogleTagManagerComponent,
        PayPalWidgetComponent,
        TrustPilotWidgetComponent,
        SwiperComponent,
        SwiperDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PluginsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                ],
                providers: [
                    ...services
                ],
                declarations: [
                    ...components
                ],
                exports: [
                    CoreModule,
                    ...components,
                ],
            }]
    }], function () { return [{ type: PluginsModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { FacebookAuthResponse, FacebookConfig, FacebookPicture, FacebookPictureData, FacebookService, FacebookUser, GoogleAuthResponse, GoogleConfig, GoogleService, GoogleTagManagerComponent, GoogleTagManagerPageViewEvent, GoogleTagManagerService, GoogleUser, MapboxService, PLUGINS_CONFIG, PayPalService, PayPalWidgetComponent, PluginsConfig, PluginsModule, PluginsModuleComponent, PluginsService, SWIPER_CONFIG, SwiperComponent, SwiperConfig, SwiperDirective, SwiperEvents, TrustPilotService, TrustPilotWidgetComponent };
//# sourceMappingURL=designr-plugins.js.map
