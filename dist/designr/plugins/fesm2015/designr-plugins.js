import { PageService } from '@designr/page';
import { NavigationEnd, Router } from '@angular/router';
import * as Swiper from 'swiper/dist/js/swiper.js';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { InjectionToken, Inject, Injectable, Component, NgModule, Optional, SkipSelf, defineInjectable, inject, PLATFORM_ID, NgZone, EventEmitter, Output, Input, ViewEncapsulation, ChangeDetectorRef, ViewChild, ElementRef, Directive, KeyValueDiffers } from '@angular/core';
import { LocalStorageService, OnceService, RouteService, CoreModule, Logger, DisposableComponent } from '@designr/core';
import { from, of, Observable } from 'rxjs';
import { concatMap, filter, first, map, switchMap, takeUntil, tap, mergeMap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PluginsConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.origin = '';
        // console.log('PluginsConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
/** @type {?} */
const PLUGINS_CONFIG = new InjectionToken('plugin.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PluginsService {
    /**
     * @param {?} options
     */
    constructor(options) {
        // console.log('PluginsService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new PluginsConfig(options);
    }
}
PluginsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PluginsService.ctorParameters = () => [
    { type: PluginsConfig, decorators: [{ type: Inject, args: [PLUGINS_CONFIG,] }] }
];
/** @nocollapse */ PluginsService.ngInjectableDef = defineInjectable({ factory: function PluginsService_Factory() { return new PluginsService(inject(PLUGINS_CONFIG)); }, token: PluginsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PluginsModuleComponent {
    constructor() {
        this.version = '0.0.13';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PluginsModuleComponent.decorators = [
    { type: Component, args: [{
                selector: 'plugins-module',
                template: `<span class="plugins-module">plugins {{version}}</span>`
            }] }
];
/** @nocollapse */
PluginsModuleComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} storageService
     * @param {?} onceService
     * @param {?} routeService
     * @param {?} pageService
     */
    constructor(platformId, pluginsService, storageService, onceService, routeService, pageService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.routeService = routeService;
        this.pageService = pageService;
        this.init();
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    facebook() {
        //  && window.location.protocol.indexOf('https') !== -1
        if (isPlatformBrowser(this.platformId)) {
            if (this.FB) {
                return of(this.FB);
            }
            else {
                return this.onceService.script('//connect.facebook.net/' + this.routeService.currentLang + '/sdk.js', 'fbAsyncInit').pipe(concatMap((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    // console.log(x);
                    /** @type {?} */
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
                })));
            }
        }
        else {
            return of(null);
        }
    }
    /**
     * @return {?}
     */
    status() {
        return this.facebook().pipe(filter((/**
         * @param {?} f
         * @return {?}
         */
        f => f !== null)), concatMap((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                f.getLoginStatus((/**
                 * @param {?} r
                 * @return {?}
                 */
                (r) => {
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
                }), { scope: this.options.scope });
            })));
        })));
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
    /**
     * @return {?}
     */
    login() {
        return this.facebook().pipe(filter((/**
         * @param {?} f
         * @return {?}
         */
        f => f !== null)), concatMap((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                f.login((/**
                 * @param {?} r
                 * @return {?}
                 */
                (r) => {
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
                }), { scope: this.options.scope });
            })));
        })));
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
    /**
     * @return {?}
     */
    logout() {
        return this.facebook().pipe(filter((/**
         * @param {?} f
         * @return {?}
         */
        f => f !== null)), concatMap((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                // console.log('f', f);
                f.logout((/**
                 * @param {?} r
                 * @return {?}
                 */
                r => {
                    resolve(r);
                    this.storage.delete('facebook');
                }));
            })));
        })));
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
    /**
     * @param {?=} fields
     * @return {?}
     */
    getMe(fields) {
        return this.login().pipe(concatMap((/**
         * @param {?} l
         * @return {?}
         */
        l => {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                fields = fields || this.options.fields;
                this.FB.api('/me', {
                    fields: fields,
                    accessToken: this.options.tokenClient,
                }, (/**
                 * @param {?} r
                 * @return {?}
                 */
                (r) => {
                    if (!r || r.error) {
                        /** @type {?} */
                        const error = r ? r.error : 'error';
                        console.log('FacebookService.getMe.error', error);
                        reject(r.error);
                    }
                    else {
                        /** @type {?} */
                        const user = (/** @type {?} */ (r));
                        user.authResponse = this.authResponse;
                        user.facebookToken = this.authResponse.accessToken;
                        // console.log('FacebookService.getMe.success', user);
                        resolve(user);
                    }
                }));
            })));
        })));
    }
}
FacebookService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FacebookService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: LocalStorageService },
    { type: OnceService },
    { type: RouteService },
    { type: PageService }
];
/** @nocollapse */ FacebookService.ngInjectableDef = defineInjectable({ factory: function FacebookService_Factory() { return new FacebookService(inject(PLATFORM_ID), inject(PluginsService), inject(LocalStorageService), inject(OnceService), inject(RouteService), inject(PageService)); }, token: FacebookService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleTagManagerPageViewEvent {
}
class GoogleTagManagerConfig {
}
class GoogleTagManagerService {
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} zone
     * @param {?} onceService
     * @param {?} logger
     */
    constructor(platformId, pluginsService, zone, onceService, logger) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.zone = zone;
        this.onceService = onceService;
        this.logger = logger;
        this.initialized = false;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.googleTagManager) {
            throw new Error('GoogleTagManagerService.error missing config object in environment.plugins.googleTagManager');
        }
        this.options = Object.assign(new GoogleTagManagerConfig(), this.pluginsService.options.googleTagManager);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleTagManagerConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    once() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.dataLayer && this.initialized) {
                return of(this.dataLayer);
            }
            else if (this.dataLayer$) {
                return this.dataLayer$;
            }
            else {
                window['dataLayer'] = window['dataLayer'] || [];
                /** @type {?} */
                const id = this.options.id;
                /** @type {?} */
                const src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
                /** @type {?} */
                const dataLayer = window['dataLayer'];
                dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                // console.log('GoogleTagManagerConfig.once', src, dataLayer);
                this.dataLayer$ = this.onceService.script(src).pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    // console.log('GoogleTagManagerConfig.dataLayer', dataLayer, x);
                    this.dataLayer = dataLayer;
                    this.initialized = true;
                    return dataLayer;
                })));
                return this.dataLayer$;
            }
        }
        else {
            return of(null);
        }
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    push(payload) {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (this.dataLayer) {
                this.dataLayer.push(payload);
                this.logger.log('GoogleTagManagerConfig.push', payload);
            }
            else {
                this.once().pipe(first()).subscribe((/**
                 * @param {?} dataLayer
                 * @return {?}
                 */
                dataLayer => {
                    if (this.dataLayer) {
                        this.dataLayer.push(payload);
                        this.logger.log('GoogleTagManagerConfig.push', payload);
                    }
                }));
            }
        }));
    }
}
GoogleTagManagerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GoogleTagManagerService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: NgZone },
    { type: OnceService },
    { type: Logger }
];
/** @nocollapse */ GoogleTagManagerService.ngInjectableDef = defineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(inject(PLATFORM_ID), inject(PluginsService), inject(NgZone), inject(OnceService), inject(Logger)); }, token: GoogleTagManagerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleTagManagerComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} router
     * @param {?} googleTagManager
     */
    constructor(platformId, pluginsService, router, googleTagManager) {
        super();
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.router = router;
        this.googleTagManager = googleTagManager;
        this.useIframe = true;
        this.pageView = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.router.events.pipe(filter((/**
             * @param {?} e
             * @return {?}
             */
            e => e instanceof NavigationEnd)), switchMap((/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                /** @type {?} */
                const url = `${this.pluginsService.options.origin}${e.urlAfterRedirects}`;
                // console.log('GoogleTagManagerComponent.NavigationEnd', e.id, e.url, e.urlAfterRedirects, url);
                if (this.dataLayer && this.iframeUrl) {
                    this.pageView.emit({ dataLayer: this.dataLayer, url });
                    return of(null);
                }
                else {
                    return this.googleTagManager.once().pipe(tap((/**
                     * @param {?} dataLayer
                     * @return {?}
                     */
                    dataLayer => {
                        // console.log('GoogleTagManagerComponent.dataLayer', dataLayer);
                        this.id = this.googleTagManager.options.id;
                        this.iframeUrl = `https://www.googletagmanager.com/ns.html?id=${this.id}`;
                        this.dataLayer = dataLayer;
                        this.pageView.emit({ dataLayer: this.dataLayer, url });
                    })));
                }
            })), takeUntil(this.unsubscribe)).subscribe();
        }
    }
}
GoogleTagManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-google-tag-manager',
                template: `
	<!-- Google Tag Manager (noscript) -->
		<noscript *ngIf="useIframe && dataLayer">
			<iframe [src]="iframeUrl | safeUrl" height="0" width="0" style="display:none;visibility:hidden"></iframe>
		</noscript>
	<!-- End Google Tag Manager (noscript) -->`
            }] }
];
/** @nocollapse */
GoogleTagManagerComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: Router },
    { type: GoogleTagManagerService }
];
GoogleTagManagerComponent.propDecorators = {
    pageView: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} storageService
     * @param {?} onceService
     */
    constructor(platformId, pluginsService, storageService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @return {?}
     */
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
    /**
     * @private
     * @return {?}
     */
    google() {
        if (isPlatformBrowser(this.platformId)) {
            return new Observable().pipe((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                if (this.gapi) {
                    return of(this.gapi);
                }
                else {
                    return this.once();
                }
            }));
        }
        else {
            return of(null);
        }
    }
    /**
     * @return {?}
     */
    getMe() {
        return this.login().pipe(concatMap((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            /** @type {?} */
            const profile = this.instance.currentUser.get().getBasicProfile();
            /** @type {?} */
            const user = (/** @type {?} */ ({
                id: profile.getId(),
                name: profile.getName(),
                firstName: profile.getGivenName(),
                lastName: profile.getFamilyName(),
                picture: profile.getImageUrl(),
                email: profile.getEmail(),
                authResponse: this.authResponse,
                googleToken: this.authResponse.access_token,
            }));
            return of(user);
        })));
    }
    /**
     * @return {?}
     */
    login() {
        return this.auth2Instance().pipe(concatMap((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            return this.signin();
        })));
    }
    /**
     * @return {?}
     */
    logout() {
        return this.auth2Instance().pipe(concatMap((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                if (this.instance.isSignedIn && this.instance.isSignedIn.get()) {
                    this.instance.signOut().then((/**
                     * @param {?} signed
                     * @return {?}
                     */
                    (signed) => {
                        resolve();
                    }), reject);
                }
                else {
                    resolve();
                }
            })));
        })));
    }
    /**
     * @private
     * @return {?}
     */
    once() {
        return this.onceService.script('https://apis.google.com/js/api:client.js?onload={{callback}}', true).pipe(concatMap((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.gapi = window['gapi'];
            return of(this.gapi);
        })));
    }
    /**
     * @private
     * @return {?}
     */
    getAuth2() {
        return new Observable().pipe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (this.auth2) {
                return of(this.auth2);
            }
            else {
                return this.google().pipe(concatMap((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    if (this.gapi.auth2) {
                        return this.auth2init();
                    }
                    else {
                        return from(new Promise((/**
                         * @param {?} resolve
                         * @param {?} reject
                         * @return {?}
                         */
                        (resolve, reject) => {
                            this.gapi.load('auth2', (/**
                             * @return {?}
                             */
                            () => {
                                setTimeout((/**
                                 * @return {?}
                                 */
                                () => {
                                    resolve();
                                }), 200);
                            }), reject);
                        }))).pipe(concatMap((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => {
                            return this.auth2init();
                        })));
                    }
                })));
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    signin() {
        return from(new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const readAccessToken = (/**
             * @return {?}
             */
            () => {
                // console.log('GoogleLogin.readAccessToken');
                try {
                    /** @type {?} */
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
            });
            if (this.instance.isSignedIn && this.instance.isSignedIn.get()) {
                readAccessToken();
            }
            else {
                this.instance.signIn({
                    scope: 'profile email',
                }).then((/**
                 * @param {?} signed
                 * @return {?}
                 */
                (signed) => {
                    readAccessToken();
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => {
                    this.storage.delete('google');
                    reject(error);
                }));
            }
        })));
    }
    /**
     * @private
     * @return {?}
     */
    auth2init() {
        return from(new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.gapi.auth2.init({
                client_id: this.options.clientId,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email',
                fetch_basic_profile: true,
                ux_mode: 'popup',
            }).then((/**
             * @return {?}
             */
            () => {
                this.auth2 = this.gapi.auth2;
                // console.log('Auth2Init.success', this.auth2);
                resolve(this.auth2);
            }), reject);
        })));
    }
    /**
     * @return {?}
     */
    auth2Instance() {
        if (this.instance) {
            return of(this.instance);
        }
        else {
            return this.getAuth2().pipe(concatMap((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                this.instance = this.auth2.getAuthInstance();
                return of(this.instance);
            })));
        }
    }
}
GoogleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GoogleService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: LocalStorageService },
    { type: OnceService }
];
/** @nocollapse */ GoogleService.ngInjectableDef = defineInjectable({ factory: function GoogleService_Factory() { return new GoogleService(inject(PLATFORM_ID), inject(PluginsService), inject(LocalStorageService), inject(OnceService)); }, token: GoogleService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MapboxService {
}
MapboxService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ MapboxService.ngInjectableDef = defineInjectable({ factory: function MapboxService_Factory() { return new MapboxService(); }, token: MapboxService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PayPalConfig {
}
class PayPalService {
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} onceService
     */
    constructor(platformId, pluginsService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.paypal) {
            throw new Error('PayPalService.error missing config object in environment.plugins.paypal');
        }
        this.options = Object.assign(new PayPalConfig(), this.pluginsService.options.paypal);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call PayPalConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    once() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.paypal) {
                return of(this.paypal);
            }
            else if (this.paypal$) {
                return this.paypal$;
            }
            else {
                /** @type {?} */
                const src = `https://www.paypalobjects.com/api/checkout.js`;
                // console.log('PayPalConfig.once', src);
                this.paypal$ = this.onceService.script(src).pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    this.paypal = window['paypal'];
                    return this.paypal;
                })));
                return this.paypal$;
            }
        }
        else {
            return of(null);
        }
    }
    /**
     * @param {?} options
     * @param {?=} selector
     * @return {?}
     */
    render(options, selector) {
        selector = selector || '#paypal-button';
        return this.once().pipe(mergeMap((/**
         * @param {?} paypal
         * @return {?}
         */
        paypal => {
            paypal.Button.render(this.getOptions(paypal, options), selector);
            return of(paypal);
        })));
    }
    /**
     * @private
     * @param {?} paypal
     * @param {?} options
     * @return {?}
     */
    getOptions(paypal, options) {
        /** @type {?} */
        const payload = Object.assign(this.options, options);
        payload.payment = (/**
         * @param {?} data
         * @param {?} actions
         * @return {?}
         */
        (data, actions) => {
            return new paypal.Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                if (options.payment) {
                    options.payment().pipe(first(), mergeMap((/**
                     * @param {?} payload
                     * @return {?}
                     */
                    payload => {
                        return from(actions.payment.create(payload));
                    }))).subscribe((/**
                     * @param {?} success
                     * @return {?}
                     */
                    success => resolve(success)), (
                    // actions.payment.create(success)
                    /**
                     * @param {?} error
                     * @return {?}
                     */
                    // actions.payment.create(success)
                    error => reject(error)));
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
            }));
        });
        payload.onAuthorize = (/**
         * @param {?} data
         * @param {?} actions
         * @return {?}
         */
        (data, actions) => {
            if (options.onAuthorize) {
                return actions.payment.execute().then((/**
                 * @param {?} payment
                 * @return {?}
                 */
                payment => options.onAuthorize(payment, null)), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => options.onAuthorize(null, error)));
            }
            else {
                console.log('PayPalService.onAuthorize callback not setted');
            }
        });
        return payload;
    }
}
PayPalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PayPalService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: OnceService }
];
/** @nocollapse */ PayPalService.ngInjectableDef = defineInjectable({ factory: function PayPalService_Factory() { return new PayPalService(inject(PLATFORM_ID), inject(PluginsService), inject(OnceService)); }, token: PayPalService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PayPalWidgetComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} paypalService
     */
    constructor(platformId, paypalService) {
        super();
        this.platformId = platformId;
        this.paypalService = paypalService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.paypalService.render(this.paypalOptions, '#paypal-widget-button').pipe(takeUntil(this.unsubscribe)).subscribe((/**
             * @param {?} paypal
             * @return {?}
             */
            paypal => {
                // console.log('PayPalWidgetComponent.rendered', paypal)
            }));
        }
    }
}
PayPalWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'plugins-paypal-widget-component',
                template: `<div id="#paypal-widget-button"></div>`
            }] }
];
/** @nocollapse */
PayPalWidgetComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PayPalService }
];
PayPalWidgetComponent.propDecorators = {
    paypalOptions: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SWIPER_CONFIG = new InjectionToken('SWIPER_CONFIG');
/** @type {?} */
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
    /**
     * @param {?=} config
     */
    constructor(config = {}) {
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @param {?=} target
     * @return {?}
     */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SwiperDirective {
    /**
     * @param {?} platformId
     * @param {?} zone
     * @param {?} elementRef
     * @param {?} differs
     * @param {?} defaults
     */
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
    /**
     * @param {?} index
     * @return {?}
     */
    set index(index) {
        if (index != null) {
            this.setIndex(index);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        /** @type {?} */
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
            slideChange: (/**
             * @return {?}
             */
            () => {
                if (this.swiper_ && this.indexChange.observers.length) {
                    this.emit(this.indexChange, this.swiper_.realIndex);
                }
            })
        };
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.swiper_ = new Swiper(this.elementRef.nativeElement, params);
        }));
        if (params.init !== false && this.init.observers.length) {
            this.emit(this.init, this.swiper_);
        }
        // Add native Swiper event handling
        SwiperEvents.forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        (eventName) => {
            /** @type {?} */
            let swiperEvent = eventName.replace('swiper', '');
            swiperEvent = swiperEvent.charAt(0).toLowerCase() + swiperEvent.slice(1);
            this.swiper_.on(swiperEvent, (/**
             * @param {...?} args
             * @return {?}
             */
            (...args) => {
                if (args.length === 1) {
                    args = args[0];
                }
                /** @type {?} */
                const emitter = (/** @type {?} */ (this[(/** @type {?} */ (swiperEvent))]));
                if (emitter.observers.length) {
                    this.emit(emitter, args);
                }
            }));
        }));
        if (!this.config_) {
            this.config_ = this.differs.find(this.config || {}).create();
            this.config_.diff(this.config || {});
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.swiper_) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.swiper_.destroy(true, this.swiper_.initialized || false);
            }));
            this.swiper_ = null;
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.config_) {
            /** @type {?} */
            const changes = this.config_.diff(this.config || {});
            if (changes) {
                this.index_ = this.getIndex(true);
                this.ngOnDestroy();
                this.ngAfterViewInit();
                this.update();
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.swiper_ && changes['disabled']) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    () => {
                        this.ngOnDestroy();
                        this.ngAfterViewInit();
                    }));
                }
                else if (changes['disabled'].currentValue === false) {
                    this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    () => {
                        this.ngOnDestroy();
                        this.ngAfterViewInit();
                    }));
                }
            }
        }
    }
    /**
     * @private
     * @param {?} emitter
     * @param {?} value
     * @return {?}
     */
    emit(emitter, value) {
        if (this.performance) {
            emitter.emit(value);
        }
        else {
            this.zone.run((/**
             * @return {?}
             */
            () => emitter.emit(value)));
        }
    }
    /**
     * @return {?}
     */
    swiper() {
        return this.swiper_;
    }
    /**
     * @return {?}
     */
    initialize() {
        if (this.swiper_) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.swiper_.init();
            }));
        }
    }
    /**
     * @return {?}
     */
    update() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.swiper_) {
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => {
                    this.swiper_.update();
                }));
            }
        }), 0);
    }
    /**
     * @param {?=} real
     * @return {?}
     */
    getIndex(real) {
        if (!this.swiper_) {
            return this.index_ || 0;
        }
        else {
            return real ? this.swiper_.realIndex : this.swiper_.activeIndex;
        }
    }
    /**
     * @param {?} index
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    setIndex(index, speed, silent) {
        if (!this.swiper_) {
            this.index_ = index;
        }
        else {
            /** @type {?} */
            let realIndex = index * this.swiper_.params.slidesPerGroup;
            if (this.swiper_.params.loop) {
                realIndex += this.swiper_.loopedSlides;
            }
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.swiper_.slideTo(realIndex, speed, !silent);
            }));
        }
    }
    /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    prevSlide(speed, silent) {
        if (this.swiper_) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.swiper_.slidePrev(speed, !silent);
            }));
        }
    }
    /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    nextSlide(speed, silent) {
        if (this.swiper_) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.swiper_.slideNext(speed, !silent);
            }));
        }
    }
    /**
     * @param {?=} reset
     * @return {?}
     */
    stopAutoplay(reset) {
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper_ && this.swiper_.autoplay) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.swiper_.autoplay.stop();
            }));
        }
    }
    /**
     * @param {?=} reset
     * @return {?}
     */
    startAutoplay(reset) {
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper_ && this.swiper_.autoplay) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.swiper_.autoplay.start();
            }));
        }
    }
}
SwiperDirective.decorators = [
    { type: Directive, args: [{
                selector: '[swiper]',
                exportAs: 'ngxSwiper'
            },] }
];
/** @nocollapse */
SwiperDirective.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone },
    { type: ElementRef },
    { type: KeyValueDiffers },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SWIPER_CONFIG,] }] }
];
SwiperDirective.propDecorators = {
    index: [{ type: Input }],
    disabled: [{ type: Input }],
    performance: [{ type: Input }],
    config: [{ type: Input, args: ['swiper',] }],
    autoplay: [{ type: Output }],
    autoplayStart: [{ type: Output }],
    autoplayStop: [{ type: Output }],
    beforeDestroy: [{ type: Output }],
    beforeResize: [{ type: Output }],
    breakpoint: [{ type: Output }],
    click: [{ type: Output }],
    doubleTap: [{ type: Output }],
    fromEdge: [{ type: Output }],
    imagesReady: [{ type: Output }],
    indexChange: [{ type: Output }],
    init: [{ type: Output }],
    keyPress: [{ type: Output }],
    lazyImageLoad: [{ type: Output }],
    lazyImageReady: [{ type: Output }],
    progress: [{ type: Output }],
    reachBeginning: [{ type: Output }],
    reachEnd: [{ type: Output }],
    resize: [{ type: Output }],
    scroll: [{ type: Output }],
    scrollDragEnd: [{ type: Output }],
    scrollDragMove: [{ type: Output }],
    scrollDragStart: [{ type: Output }],
    setTransition: [{ type: Output }],
    setTranslate: [{ type: Output }],
    slideChange: [{ type: Output }],
    slideChangeTransitionEnd: [{ type: Output }],
    slideChangeTransitionStart: [{ type: Output }],
    slideNextTransitionEnd: [{ type: Output }],
    slideNextTransitionStart: [{ type: Output }],
    slidePrevTransitionEnd: [{ type: Output }],
    slidePrevTransitionStart: [{ type: Output }],
    sliderMove: [{ type: Output }],
    tap: [{ type: Output }],
    touchEnd: [{ type: Output }],
    touchMove: [{ type: Output }],
    touchMoveOpposite: [{ type: Output }],
    touchStart: [{ type: Output }],
    transitionEnd: [{ type: Output }],
    transitionStart: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SwiperComponent {
    /**
     * @param {?} zone
     * @param {?} cdRef
     * @param {?} platformId
     * @param {?} defaults
     */
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
    /**
     * @return {?}
     */
    get isAtLast() {
        return (!this.directiveRef || !this.directiveRef.swiper()) ?
            false : this.directiveRef.swiper()['isEnd'];
    }
    /**
     * @return {?}
     */
    get isAtFirst() {
        return (!this.directiveRef || !this.directiveRef.swiper()) ?
            false : this.directiveRef.swiper()['isBeginning'];
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.updateClasses();
            if (this.swiperSlides && typeof MutationObserver !== 'undefined') {
                this.mo = new MutationObserver((/**
                 * @return {?}
                 */
                () => {
                    this.updateClasses();
                }));
                this.mo.observe(this.swiperSlides.nativeElement, { childList: true });
            }
        }));
        window.setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.directiveRef) {
                this.init.emit();
                this.directiveRef.indexChange = this.indexChange;
                SwiperEvents.forEach((/**
                 * @param {?} eventName
                 * @return {?}
                 */
                (eventName) => {
                    if (this.directiveRef) {
                        /** @type {?} */
                        const directiveOutput = (/** @type {?} */ (eventName));
                        /** @type {?} */
                        const componentOutput = (/** @type {?} */ (eventName));
                        this.directiveRef[directiveOutput] = (/** @type {?} */ (this[componentOutput]));
                    }
                }));
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.mo) {
            this.mo.disconnect();
        }
        if (this.config && this.paginationBackup) {
            this.config.pagination = this.paginationBackup;
        }
    }
    /**
     * @return {?}
     */
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
                    renderBullet: (/**
                     * @param {?} index
                     * @param {?} className
                     * @return {?}
                     */
                    (index, className) => {
                        /** @type {?} */
                        const children = this.swiperSlides ? this.swiperSlides.nativeElement.children : [];
                        /** @type {?} */
                        let bullet = `<span class="${className} ${className}-middle" index="${index}"></span>`;
                        if (index === 0) {
                            bullet = `<span class="${className} ${className}-first" index="${index}"></span>`;
                        }
                        else if (index === (children.length - 1)) {
                            bullet = `<span class="${className} ${className}-last" index="${index}"></span>`;
                        }
                        return `<span class="swiper-pagination-handle" index="${index}">${bullet}</span>`;
                    })
                };
            }
            if (this.swiperConfig.pagination === true) {
                this.config.pagination = this.paginationConfig;
            }
            else {
                this.config.pagination = Object.assign({}, this.config.pagination, this.paginationConfig);
            }
        }
        return (/** @type {?} */ (this.config));
    }
    /**
     * @private
     * @return {?}
     */
    updateClasses() {
        if (this.swiperSlides) {
            /** @type {?} */
            let updateNeeded = false;
            /** @type {?} */
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
    /**
     * @param {?} index
     * @return {?}
     */
    onPaginationClick(index) {
        if (this.config && this.directiveRef && (this.config.pagination === true ||
            (this.config.pagination && typeof this.config.pagination === 'object' &&
                (!this.config.pagination.type || this.config.pagination.type === 'bullets') &&
                (this.config.pagination.clickable && this.config.pagination.el === '.swiper-pagination')))) {
            this.directiveRef.setIndex(index);
        }
    }
}
SwiperComponent.decorators = [
    { type: Component, args: [{
                selector: 'swiper',
                exportAs: 'ngxSwiper',
                template: "<div #swiper class=\"s-wrapper\" [class.swiper]=\"useSwiperClass\" [class.swiper-container]=\"useSwiperClass\" [swiper]=\"getConfig()\" [index]=\"index\" [disabled]=\"disabled\" [performance]=\"performance\">\r\n\t<div #swiperSlides class=\"swiper-wrapper\">\r\n\t\t<ng-content></ng-content>\r\n\t</div>\r\n\t<div class=\"swiper-scrollbar\" [hidden]=\"!swiperConfig?.scrollbar || (swiperConfig?.scrollbar !== true && !!swiperConfig?.scrollbar?.el && swiperConfig?.scrollbar?.el !== '.swiper-scrollbar')\"></div>\r\n\t<div class=\"swiper-button-prev\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.prevEl && swiperConfig?.navigation?.prevEl !== '.swiper-button-prev')\" [attr.disabled]=\"isAtFirst ||\u00A0null\"></div>\r\n\t<div class=\"swiper-button-next\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.nextEl && swiperConfig?.navigation?.nextEl !== '.swiper-button-next')\" [attr.disabled]=\"isAtLast || null\"></div>\r\n\t<div class=\"swiper-pagination\" [hidden]=\"!swiperConfig?.pagination || (swiperConfig?.pagination !== true && !!swiperConfig?.pagination?.el && swiperConfig?.pagination?.el !== '.swiper-pagination')\" (click)=\"onPaginationClick($event.target.getAttribute('index'))\" (keyup.enter)=\"onPaginationClick($event.target.getAttribute('index'))\"></div>\r\n</div>\r\n",
                // styleUrls: ['~swiper/dist/css/swiper.min.css', 'swiper.component.scss'],
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
SwiperComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SWIPER_CONFIG,] }] }
];
SwiperComponent.propDecorators = {
    swiperSlides: [{ type: ViewChild, args: ['swiperSlides',] }],
    directiveRef: [{ type: ViewChild, args: [SwiperDirective,] }],
    index: [{ type: Input }],
    disabled: [{ type: Input }],
    performance: [{ type: Input }],
    config: [{ type: Input }],
    useSwiperClass: [{ type: Input }],
    autoplay: [{ type: Output }],
    autoplayStart: [{ type: Output }],
    autoplayStop: [{ type: Output }],
    beforeDestroy: [{ type: Output }],
    beforeResize: [{ type: Output }],
    breakpoint: [{ type: Output }],
    click: [{ type: Output }],
    doubleTap: [{ type: Output }],
    fromEdge: [{ type: Output }],
    imagesReady: [{ type: Output }],
    indexChange: [{ type: Output }],
    init: [{ type: Output }],
    keyPress: [{ type: Output }],
    lazyImageLoad: [{ type: Output }],
    lazyImageReady: [{ type: Output }],
    progress: [{ type: Output }],
    reachBeginning: [{ type: Output }],
    reachEnd: [{ type: Output }],
    resize: [{ type: Output }],
    scroll: [{ type: Output }],
    scrollDragEnd: [{ type: Output }],
    scrollDragMove: [{ type: Output }],
    scrollDragStart: [{ type: Output }],
    setTransition: [{ type: Output }],
    setTranslate: [{ type: Output }],
    slideChange: [{ type: Output }],
    slideChangeTransitionEnd: [{ type: Output }],
    slideChangeTransitionStart: [{ type: Output }],
    slideNextTransitionEnd: [{ type: Output }],
    slideNextTransitionStart: [{ type: Output }],
    slidePrevTransitionEnd: [{ type: Output }],
    slidePrevTransitionStart: [{ type: Output }],
    sliderMove: [{ type: Output }],
    tap: [{ type: Output }],
    touchEnd: [{ type: Output }],
    touchMove: [{ type: Output }],
    touchMoveOpposite: [{ type: Output }],
    touchStart: [{ type: Output }],
    transitionEnd: [{ type: Output }],
    transitionStart: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TrustPilotConfig {
    constructor() {
        this.businessunitId = '58e253ab0000ff00059fc0fe';
        this.businessunitName = 'www.eurospin-viaggi.it';
    }
}
class TrustPilotService {
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} onceService
     */
    constructor(platformId, pluginsService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.options = Object.assign(new TrustPilotConfig(), this.pluginsService.options.trustPilot);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call TrustPilotConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    once() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.Trustpilot) {
                return of(this.Trustpilot);
            }
            else if (this.Trustpilot$) {
                return this.Trustpilot$;
            }
            else {
                /** @type {?} */
                const src = `https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js`;
                // console.log('TrustPilotConfig.once', src);
                this.Trustpilot$ = this.onceService.script(src).pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    this.Trustpilot = window['Trustpilot'];
                    return this.Trustpilot;
                })));
                return this.Trustpilot$;
            }
        }
        else {
            return of(null);
        }
    }
}
TrustPilotService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TrustPilotService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: OnceService }
];
/** @nocollapse */ TrustPilotService.ngInjectableDef = defineInjectable({ factory: function TrustPilotService_Factory() { return new TrustPilotService(inject(PLATFORM_ID), inject(PluginsService), inject(OnceService)); }, token: TrustPilotService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TrustPilotWidgetOptions {
    /**
     * @param {?=} options
     */
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
    /**
     * @param {?=} options
     * @return {?}
     */
    static newFromConfig(options) {
        return new TrustPilotWidgetOptions(options);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    set(options) {
        if (options) {
            Object.assign(this, options);
        }
        return this;
    }
}
class TrustPilotWidgetComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} elementRef
     * @param {?} trustPilot
     */
    constructor(platformId, pluginsService, elementRef, trustPilot) {
        super();
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.elementRef = elementRef;
        this.trustPilot = trustPilot;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.trustPilotOptions = this.pluginsService.options.trustPilot;
        this.options = new TrustPilotWidgetOptions(this.trustPilotOptions);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // console.log('TrustPilotWidgetComponent.ngOnInit', this.options, this.loaded);
        if (isPlatformBrowser(this.platformId) && this.elementRef.nativeElement.children.length) { // && environment.production
            if (!this.loaded) {
                this.trustPilot.once().pipe(takeUntil(this.unsubscribe)).subscribe((/**
                 * @param {?} Trustpilot
                 * @return {?}
                 */
                Trustpilot => {
                    Trustpilot.loadFromElement(this.elementRef.nativeElement.firstElementChild);
                    this.loaded = true;
                }));
            }
        }
    }
}
TrustPilotWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'plugins-trustpilot-widget-component',
                template: "<ng-container>\r\n\t<ng-container [ngSwitch]=\"options.templateId\">\r\n\t\t<ng-container *ngSwitchCase=\"'544a426205dc0a09088833c6'\">\r\n\t\t\t<!-- PRODUCT REVIEWS -->\r\n\t\t\t<div class=\"trustpilot-comments\">\r\n\t\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-sku]=\"sku\" style=\"margin: 30px 0; max-width: 750px;\">\r\n\t\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'530d0eaf748a510e2093cf9b'\">\r\n\t\t\t<!-- EVALUATE -->\r\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-group]=\"options.group\" style=\"margin: 30px 0; max-width: 750px;\">\r\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'53aa8807dec7e10d38f59f32'\">\r\n\t\t\t<!-- MINI -->\r\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\r\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'5613c9cde69ddc09340c6beb'\">\r\n\t\t\t<!-- STARTER -->\r\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\r\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'53aa8912dec7e10d38f59f36'\">\r\n\t\t\t<!-- CAROUSEL -->\r\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-stars]=\"options.stars\" style=\"margin: 15px auto;\">\r\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n</ng-container>\r\n",
                encapsulation: ViewEncapsulation.Emulated,
                styles: [":host{width:100%}.trustpilot-widget{margin:15px auto!important}@media print{.trustpilot-comments{display:none!important}}"]
            }] }
];
/** @nocollapse */
TrustPilotWidgetComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: ElementRef },
    { type: TrustPilotService }
];
TrustPilotWidgetComponent.propDecorators = {
    options: [{ type: Input }],
    sku: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [
    PluginsService,
    FacebookService,
    GoogleService,
    GoogleTagManagerService,
    MapboxService,
    PayPalService,
    TrustPilotService,
];
/** @type {?} */
const components = [
    PluginsModuleComponent,
    GoogleTagManagerComponent,
    PayPalWidgetComponent,
    TrustPilotWidgetComponent,
    SwiperComponent,
    SwiperDirective,
];
class PluginsModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('PluginsModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: PluginsModule,
            providers: [
                { provide: PLUGINS_CONFIG, useValue: config },
            ]
        };
    }
}
PluginsModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
/** @nocollapse */
PluginsModule.ctorParameters = () => [
    { type: PluginsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PluginsConfig, PLUGINS_CONFIG, PluginsService, PluginsModuleComponent, PluginsModule, FacebookAuthResponse, FacebookConfig, FacebookPicture, FacebookPictureData, FacebookService, FacebookUser, GoogleTagManagerComponent, GoogleTagManagerPageViewEvent, GoogleTagManagerService, GoogleAuthResponse, GoogleConfig, GoogleService, GoogleUser, MapboxService, PayPalWidgetComponent, PayPalService, SwiperComponent, SwiperDirective, SwiperConfig, SwiperEvents, SWIPER_CONFIG, TrustPilotWidgetComponent, TrustPilotService };

//# sourceMappingURL=designr-plugins.js.map