/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser, isPlatformServer, Location } from '@angular/common';
import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { concatMap, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { SegmentPipe } from '../pipes/segment.pipe';
import { TranslateService } from '../translate/translate.service';
import * as i0 from "@angular/core";
import * as i1 from "../config/config.service";
import * as i2 from "../translate/translate.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "../pipes/segment.pipe";
// @dynamic
export class RouteService {
    /**
     * @param {?} platformId
     * @param {?} configService
     * @param {?} injector
     * @param {?} translateService
     * @param {?} location
     * @param {?} route
     * @param {?} router
     * @param {?} segment
     */
    constructor(platformId, configService, injector, translateService, location, route, router, segment) {
        this.platformId = platformId;
        this.configService = configService;
        this.injector = injector;
        this.translateService = translateService;
        this.location = location;
        this.route = route;
        this.router = router;
        this.segment = segment;
        this._language = new BehaviorSubject({});
        this.language = this._language.asObservable();
        this._languages = new BehaviorSubject([]);
        this.languages = this._languages.asObservable();
        this.pageParams$ = new BehaviorSubject({});
        this.urlStrategy = this.configService.options.urlStrategy;
        this._languages.next(this.configService.options.languages);
        this.currentMarket = this.configService.options.defaultMarket;
        this.setLanguages();
        if (this.configService.options.useLang || this.configService.options.useMarket) {
            this.subscribeToRouter();
        }
    }
    /**
     * @private
     * @return {?}
     */
    get lang() {
        return this._lang;
    }
    /**
     * @private
     * @param {?} lang
     * @return {?}
     */
    set lang(lang) {
        if (lang !== this._lang) {
            this._lang = lang;
            /** @type {?} */
            const language = this._languages.getValue().find(x => x.lang === lang);
            this._language.next(language);
            this.translateService.use(lang);
            // console.log('RouteService.set lang', lang, this.configService.options.useLang);
            if (this.configService.options.useLang) {
                /** @type {?} */
                const _lang = this._lang;
                /** @type {?} */
                let path = this.location.path();
                if (path.indexOf(`/${_lang}`) === 0) {
                    path = path.replace(`/${_lang}`, `/${lang}`);
                }
                else if (path.indexOf(`/${lang}`) !== 0) {
                    path = `/${lang}` + path;
                }
                this.path = path;
                // const langIndex = this.urlStrategy.split('/').indexOf(':lang');
            }
        }
    }
    /**
     * @return {?}
     */
    get currentLang() {
        return this._lang;
    }
    /**
     * @return {?}
     */
    getPageParams() {
        // console.log('RouteService.getPageParams', this.router.url);
        return this.route.queryParams.pipe(distinctUntilChanged(), switchMap(params => {
            // console.log(params);
            /** @type {?} */
            const parsed = this.parseParams(params);
            this.pageParams$.next(parsed);
            return of(parsed);
        }));
    }
    /**
     * @param {?} params
     * @return {?}
     */
    parseParams(params) {
        /** @type {?} */
        const parsed = {};
        Object.keys(params).forEach(k => parsed[k] = this.parse(params[k]));
        /*
        for (const key in params) {
            if (typeof (params[key]) === 'string') {
                parsed[key] = this.parse(params[key]);
            } else {
                parsed[key] = params[key];
            }
        }
        */
        return parsed;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    serializeParams(params) {
        /** @type {?} */
        const serialized = {};
        Object.keys(params).forEach(k => serialized[k] = this.serialize(params[k]));
        return serialized;
    }
    /**
     * @param {?} base64
     * @return {?}
     */
    parse(base64) {
        try {
            if (isPlatformBrowser(this.platformId)) {
                return JSON.parse(window.atob(base64));
            }
            else {
                return JSON.parse(Buffer.from(base64, 'base64').toString('ascii'));
            }
        }
        catch (_a) {
            return null;
        }
    }
    /**
     * @param {?} object
     * @return {?}
     */
    serialize(object) {
        if (isPlatformBrowser(this.platformId)) {
            return window.btoa(JSON.stringify(object));
        }
        else {
            return Buffer.from(JSON.stringify(object), 'ascii').toString('base64');
        }
    }
    /**
     * @return {?}
     */
    getId() {
        return +this.route.snapshot.paramMap.get('id');
    }
    /**
     * @return {?}
     */
    getSlug() {
        return this.route.snapshot.paramMap.get('slug');
    }
    /**
     * @param {?} data
     * @return {?}
     */
    toRoute(data) {
        /** @type {?} */
        const segments = this.segment.transform(data);
        if (this.configService.options.useMarket) {
            /** @type {?} */
            const market = this.currentMarket;
            /** @type {?} */
            const marketIndex = this.urlStrategy.split('/').indexOf(':market');
            segments.splice(marketIndex, 0, market);
        }
        if (this.configService.options.useLang) {
            /** @type {?} */
            const lang = this._lang;
            /** @type {?} */
            const langIndex = this.urlStrategy.split('/').indexOf(':lang');
            segments.splice(langIndex, 0, lang);
        }
        // console.log('RouteService.toRoute', segments);
        return segments;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    toSlug(data) {
        /** @type {?} */
        const segments = this.segment.transform(data);
        /** @type {?} */
        let paths = segments.filter(x => {
            return typeof x === 'string';
        });
        /** @type {?} */
        const datas = segments.filter(x => {
            return typeof x !== 'string';
        });
        if (this.configService.options.useMarket) {
            /** @type {?} */
            const marketIndex = this.urlStrategy.split('/').indexOf(':market');
            if (paths.length > marketIndex) {
                paths[marketIndex] = '*';
            }
        }
        if (this.configService.options.useLang) {
            /** @type {?} */
            const langIndex = this.urlStrategy.split('/').indexOf(':lang');
            if (paths.length > langIndex) {
                paths[langIndex] = '*';
            }
        }
        paths = paths.join('/').replace(/\/\*/gi, '').split('/');
        // console.log('RouteService.toSlug', data, paths);
        return paths.concat(datas);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    toParams(data) {
        return {
            data: window.btoa(JSON.stringify(data))
        };
    }
    /**
     * @param {?} params
     * @return {?}
     */
    toData(params) {
        if (params && params.data) {
            return JSON.parse(window.atob(params.data));
        }
    }
    /**
     * @return {?}
     */
    getParams() {
        return this.router.events.pipe(filter(event => event instanceof ActivationEnd), map(() => this.route), distinctUntilChanged(), map(route => route.firstChild), switchMap(route => route.params), 
        /*
        tap((params) => {
            // console.log('getParams', params);
        }),
        */
        concatMap(x => {
            return of(this.toData(x));
        }));
    }
    /**
     * @param {?} lang
     * @param {?=} silent
     * @return {?}
     */
    setLanguage(lang, silent) {
        this.lang = lang;
        if (this.configService.options.useLang && this.path) {
            // console.log('RouteService.setLanguage', this.path, this._lang, lang, silent);
            if (silent) {
                this.location.replaceState(this.path);
            }
            else {
                this.router.navigate([this.path]);
            }
        }
    }
    // PRIVATE METHODS
    /**
     * @private
     * @return {?}
     */
    setLanguages() {
        this.translateService.addLangs(this.configService.options.languages ? this.configService.options.languages.map(x => x.lang) : []);
        this.translateService.setDefaultLang(this.configService.options.defaultLanguage);
        // this.setLanguage(this.detectLanguage(), true);
        this.setLanguage(this.configService.options.defaultLanguage, true);
        /*
        this.translateService.onLangChange.subscribe((e: LangChangeEvent) => {
            // console.log('RouteService.onLangChange', e);
        });
        */
    }
    /**
     * @private
     * @return {?}
     */
    subscribeToRouter() {
        this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((event) => {
            /** @type {?} */
            const location = this.location.normalize(event.url).split('/');
            if (this.configService.options.useMarket) {
                /** @type {?} */
                const marketIndex = this.urlStrategy.split('/').indexOf(':market');
                /** @type {?} */
                const market = location[marketIndex];
                if (market !== this.currentMarket) {
                    this.currentMarket = market;
                    // console.log('RouteService.setMarket', market, event.url);
                }
            }
            if (this.configService.options.useLang) {
                /** @type {?} */
                const langIndex = this.urlStrategy.split('/').indexOf(':lang');
                /** @type {?} */
                const lang = location[langIndex];
                if (lang !== this._lang) {
                    /** @type {?} */
                    const language = this._languages.getValue().find(x => x.lang === lang);
                    this._language.next(language);
                    this.translateService.use(lang);
                    // console.log('RouteService.setLang', lang, this._lang, langIndex, location, event.url);
                }
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    detectLanguage() {
        /** @type {?} */
        let acceptLanguage = null;
        if (isPlatformServer(this.platformId)) {
            /*
                        // server side express engine
                        app.engine('html',  (_, options, callback) => {
                            let engine = ngExpressEngine({
                                bootstrap: ServerAppModule,
                                providers: [ { provide: 'request', useFactory: () => options.req } ]
                            });
                            engine(_, options, callback)
                        })
                        */
            /** @type {?} */
            const request = this.injector.get('request');
            if (request) {
                acceptLanguage = request.headers['accept-language'];
                /** @type {?} */
                const languages = acceptLanguage.match(/[a-zA-Z\-]{2,10}/g) || [];
                if (languages.length > 0) {
                    acceptLanguage = languages[0].split('-')[0];
                }
                else {
                    acceptLanguage = null;
                }
                // console.log('request', request, 'acceptLanguage', acceptLanguage);
            }
            // console.log('RouteService.isPlatformServer', this.platformId, acceptLanguage);
        }
        else if (isPlatformBrowser(this.platformId)) {
            acceptLanguage = this.translateService.getBrowserLang();
            // console.log('RouteService.isPlatformBrowser', this.platformId, acceptLanguage);
        }
        /** @type {?} */
        let detectedLanguage = this.configService.options.defaultLanguage;
        /** @type {?} */
        const regexp = new RegExp(`(${this.configService.options.languages ? this.configService.options.languages.map(x => x.lang).join('|') : ''})`, 'gi');
        /** @type {?} */
        const match = (acceptLanguage || '').match(regexp);
        detectedLanguage = match ? match[0] : detectedLanguage;
        // console.log('RouteService.detectLanguage', detectedLanguage);
        return detectedLanguage;
    }
    /**
     * @return {?}
     */
    getTime() {
        if (isPlatformBrowser(this.platformId)) {
            return (performance || Date).now();
        }
        else {
            /** @type {?} */
            const time = process.hrtime();
            return (time[0] * 1e9 + time[1]) / 1e6;
        }
    }
}
RouteService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RouteService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ConfigService },
    { type: Injector },
    { type: TranslateService },
    { type: Location },
    { type: ActivatedRoute },
    { type: Router },
    { type: SegmentPipe }
];
/** @nocollapse */ RouteService.ngInjectableDef = i0.defineInjectable({ factory: function RouteService_Factory() { return new RouteService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.ConfigService), i0.inject(i0.INJECTOR), i0.inject(i2.TranslateService), i0.inject(i3.Location), i0.inject(i4.ActivatedRoute), i0.inject(i4.Router), i0.inject(i5.SegmentPipe)); }, token: RouteService, providedIn: "root" });
if (false) {
    /** @type {?} */
    RouteService.startTime;
    /** @type {?} */
    RouteService.endTime;
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype.urlStrategy;
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype._language;
    /** @type {?} */
    RouteService.prototype.language;
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype._languages;
    /** @type {?} */
    RouteService.prototype.languages;
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype._lang;
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype.path;
    /** @type {?} */
    RouteService.prototype.page;
    /** @type {?} */
    RouteService.prototype.params;
    /** @type {?} */
    RouteService.prototype.queryParams;
    /** @type {?} */
    RouteService.prototype.currentMarket;
    /** @type {?} */
    RouteService.prototype.pageParams$;
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype.location;
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype.route;
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype.segment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGVzL3JvdXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRixPQUFPLEVBQW9CLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQVUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakcsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUd6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7O0FBU2xFLE1BQU0sT0FBTyxZQUFZOzs7Ozs7Ozs7OztJQWdCeEIsWUFDOEIsVUFBa0IsRUFDdkMsYUFBNEIsRUFDNUIsUUFBa0IsRUFDbEIsZ0JBQWtDLEVBQ2xDLFFBQWtCLEVBQ2xCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxPQUFvQjtRQVBDLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFD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LHFDQUFvQzs7Ozs7SUFDcEMsZ0NBQTBCOzs7OztJQUMxQix3Q0FBMEM7Ozs7O0lBQzFDLGdDQUEwQjs7Ozs7SUFDMUIsNkJBQTZCOzs7OztJQUM3Qiw4QkFBc0I7Ozs7O0lBQ3RCLCtCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgaXNQbGF0Zm9ybVNlcnZlciwgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeSwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBBY3RpdmF0aW9uRW5kLCBOYXZpZ2F0aW9uU3RhcnQsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvbmNhdE1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9wYWdlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9wYWdlcy9wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWdtZW50UGlwZSB9IGZyb20gJy4uL3BpcGVzL3NlZ21lbnQucGlwZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vdHJhbnNsYXRlL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuZGVjbGFyZSBjb25zdCBCdWZmZXI7XG5kZWNsYXJlIGNvbnN0IHByb2Nlc3M7XG5cbi8vIEBkeW5hbWljXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZVNlcnZpY2Uge1xuXG5cdHN0YXRpYyBzdGFydFRpbWU6IG51bWJlcjtcblx0c3RhdGljIGVuZFRpbWU6IG51bWJlcjtcblx0cHJpdmF0ZSB1cmxTdHJhdGVneTogc3RyaW5nO1xuXHRwcml2YXRlIF9sYW5ndWFnZTogYW55ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG5cdHB1YmxpYyByZWFkb25seSBsYW5ndWFnZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5fbGFuZ3VhZ2UuYXNPYnNlcnZhYmxlKCk7XG5cdHByaXZhdGUgX2xhbmd1YWdlczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PGFueT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cdHB1YmxpYyByZWFkb25seSBsYW5ndWFnZXM6IE9ic2VydmFibGU8YW55W10+ID0gdGhpcy5fbGFuZ3VhZ2VzLmFzT2JzZXJ2YWJsZSgpO1xuXHRwcml2YXRlIF9sYW5nOiBzdHJpbmc7XG5cdHByaXZhdGUgcGF0aDogc3RyaW5nO1xuXHRwdWJsaWMgcGFnZTogUGFnZTtcblx0cHVibGljIHBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuXHRwdWJsaWMgcXVlcnlQYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPjtcblx0cHVibGljIGN1cnJlbnRNYXJrZXQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0cHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuXHRcdHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBzZWdtZW50OiBTZWdtZW50UGlwZSxcblx0KSB7XG5cdFx0dGhpcy51cmxTdHJhdGVneSA9IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnVybFN0cmF0ZWd5O1xuXHRcdHRoaXMuX2xhbmd1YWdlcy5uZXh0KHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLmxhbmd1YWdlcyk7XG5cdFx0dGhpcy5jdXJyZW50TWFya2V0ID0gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMuZGVmYXVsdE1hcmtldDtcblx0XHR0aGlzLnNldExhbmd1YWdlcygpO1xuXHRcdGlmICh0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy51c2VMYW5nIHx8IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnVzZU1hcmtldCkge1xuXHRcdFx0dGhpcy5zdWJzY3JpYmVUb1JvdXRlcigpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0IGxhbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5fbGFuZztcblx0fVxuXG5cdHByaXZhdGUgc2V0IGxhbmcobGFuZzogc3RyaW5nKSB7XG5cdFx0aWYgKGxhbmcgIT09IHRoaXMuX2xhbmcpIHtcblx0XHRcdHRoaXMuX2xhbmcgPSBsYW5nO1xuXHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSB0aGlzLl9sYW5ndWFnZXMuZ2V0VmFsdWUoKS5maW5kKHggPT4geC5sYW5nID09PSBsYW5nKTtcblx0XHRcdHRoaXMuX2xhbmd1YWdlLm5leHQobGFuZ3VhZ2UpO1xuXHRcdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2Uuc2V0IGxhbmcnLCBsYW5nLCB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy51c2VMYW5nKTtcblx0XHRcdGlmICh0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy51c2VMYW5nKSB7XG5cdFx0XHRcdGNvbnN0IF9sYW5nOiBzdHJpbmcgPSB0aGlzLl9sYW5nO1xuXHRcdFx0XHRsZXQgcGF0aCA9IHRoaXMubG9jYXRpb24ucGF0aCgpO1xuXHRcdFx0XHRpZiAocGF0aC5pbmRleE9mKGAvJHtfbGFuZ31gKSA9PT0gMCkge1xuXHRcdFx0XHRcdHBhdGggPSBwYXRoLnJlcGxhY2UoYC8ke19sYW5nfWAsIGAvJHtsYW5nfWApO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHBhdGguaW5kZXhPZihgLyR7bGFuZ31gKSAhPT0gMCkge1xuXHRcdFx0XHRcdHBhdGggPSBgLyR7bGFuZ31gICsgcGF0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnBhdGggPSBwYXRoO1xuXHRcdFx0XHQvLyBjb25zdCBsYW5nSW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOmxhbmcnKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0IGN1cnJlbnRMYW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuX2xhbmc7XG5cdH1cblxuXHRwdWJsaWMgcGFnZVBhcmFtcyQ6IEJlaGF2aW9yU3ViamVjdDxQYXJhbXM+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG5cdHB1YmxpYyBnZXRQYWdlUGFyYW1zKCk6IE9ic2VydmFibGU8UGFyYW1zPiB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5nZXRQYWdlUGFyYW1zJywgdGhpcy5yb3V0ZXIudXJsKTtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuXHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdHN3aXRjaE1hcChwYXJhbXMgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhwYXJhbXMpO1xuXHRcdFx0XHRjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlUGFyYW1zKHBhcmFtcyk7XG5cdFx0XHRcdHRoaXMucGFnZVBhcmFtcyQubmV4dChwYXJzZWQpO1xuXHRcdFx0XHRyZXR1cm4gb2YocGFyc2VkKTtcblx0XHRcdH0pLFxuXHRcdFx0Ly8gdGFwKHBhcmFtcyA9PiBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmdldFBhZ2VQYXJhbXMnLCBwYXJhbXMpKSxcblx0XHQpO1xuXHR9XG5cblx0cHVibGljIHBhcnNlUGFyYW1zKHBhcmFtczogYW55KTogYW55IHtcblx0XHRjb25zdCBwYXJzZWQgPSB7fTtcblx0XHRPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goayA9PiBwYXJzZWRba10gPSB0aGlzLnBhcnNlKHBhcmFtc1trXSkpO1xuXHRcdC8qXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XG5cdFx0XHRpZiAodHlwZW9mIChwYXJhbXNba2V5XSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHBhcnNlZFtrZXldID0gdGhpcy5wYXJzZShwYXJhbXNba2V5XSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXJzZWRba2V5XSA9IHBhcmFtc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQqL1xuXHRcdHJldHVybiBwYXJzZWQ7XG5cdH1cblxuXHRwdWJsaWMgc2VyaWFsaXplUGFyYW1zKHBhcmFtczogYW55KSB7XG5cdFx0Y29uc3Qgc2VyaWFsaXplZCA9IHt9O1xuXHRcdE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrID0+IHNlcmlhbGl6ZWRba10gPSB0aGlzLnNlcmlhbGl6ZShwYXJhbXNba10pKTtcblx0XHRyZXR1cm4gc2VyaWFsaXplZDtcblx0fVxuXG5cdHB1YmxpYyBwYXJzZShiYXNlNjQpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmF0b2IoYmFzZTY0KSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShCdWZmZXIuZnJvbShiYXNlNjQsICdiYXNlNjQnKS50b1N0cmluZygnYXNjaWknKSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc2VyaWFsaXplKG9iamVjdCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93LmJ0b2EoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBCdWZmZXIuZnJvbShKU09OLnN0cmluZ2lmeShvYmplY3QpLCAnYXNjaWknKS50b1N0cmluZygnYmFzZTY0Jyk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldElkKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcblx0fVxuXG5cdHB1YmxpYyBnZXRTbHVnKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzbHVnJyk7XG5cdH1cblxuXHRwdWJsaWMgdG9Sb3V0ZShkYXRhOiBhbnlbXSB8IHN0cmluZyk6IGFueVtdIHtcblx0XHRjb25zdCBzZWdtZW50cyA9IHRoaXMuc2VnbWVudC50cmFuc2Zvcm0oZGF0YSk7XG5cdFx0aWYgKHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnVzZU1hcmtldCkge1xuXHRcdFx0Y29uc3QgbWFya2V0OiBzdHJpbmcgPSB0aGlzLmN1cnJlbnRNYXJrZXQ7XG5cdFx0XHRjb25zdCBtYXJrZXRJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bWFya2V0Jyk7XG5cdFx0XHRzZWdtZW50cy5zcGxpY2UobWFya2V0SW5kZXgsIDAsIG1hcmtldCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy51c2VMYW5nKSB7XG5cdFx0XHRjb25zdCBsYW5nOiBzdHJpbmcgPSB0aGlzLl9sYW5nO1xuXHRcdFx0Y29uc3QgbGFuZ0luZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzpsYW5nJyk7XG5cdFx0XHRzZWdtZW50cy5zcGxpY2UobGFuZ0luZGV4LCAwLCBsYW5nKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS50b1JvdXRlJywgc2VnbWVudHMpO1xuXHRcdHJldHVybiBzZWdtZW50cztcblx0fVxuXG5cdHB1YmxpYyB0b1NsdWcoZGF0YTogYW55W10gfCBzdHJpbmcpOiBhbnlbXSB7XG5cdFx0Y29uc3Qgc2VnbWVudHMgPSB0aGlzLnNlZ21lbnQudHJhbnNmb3JtKGRhdGEpO1xuXHRcdGxldCBwYXRocyA9IHNlZ21lbnRzLmZpbHRlcih4ID0+IHtcblx0XHRcdHJldHVybiB0eXBlb2YgeCA9PT0gJ3N0cmluZyc7XG5cdFx0fSk7XG5cdFx0Y29uc3QgZGF0YXMgPSBzZWdtZW50cy5maWx0ZXIoeCA9PiB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHggIT09ICdzdHJpbmcnO1xuXHRcdH0pO1xuXHRcdGlmICh0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy51c2VNYXJrZXQpIHtcblx0XHRcdGNvbnN0IG1hcmtldEluZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzptYXJrZXQnKTtcblx0XHRcdGlmIChwYXRocy5sZW5ndGggPiBtYXJrZXRJbmRleCkge1xuXHRcdFx0XHRwYXRoc1ttYXJrZXRJbmRleF0gPSAnKic7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy51c2VMYW5nKSB7XG5cdFx0XHRjb25zdCBsYW5nSW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOmxhbmcnKTtcblx0XHRcdGlmIChwYXRocy5sZW5ndGggPiBsYW5nSW5kZXgpIHtcblx0XHRcdFx0cGF0aHNbbGFuZ0luZGV4XSA9ICcqJztcblx0XHRcdH1cblx0XHR9XG5cdFx0cGF0aHMgPSBwYXRocy5qb2luKCcvJykucmVwbGFjZSgvXFwvXFwqL2dpLCAnJykuc3BsaXQoJy8nKTtcblx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLnRvU2x1ZycsIGRhdGEsIHBhdGhzKTtcblx0XHRyZXR1cm4gcGF0aHMuY29uY2F0KGRhdGFzKTtcblx0fVxuXG5cdHB1YmxpYyB0b1BhcmFtcyhkYXRhOiBhbnkpOiBhbnkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRhOiB3aW5kb3cuYnRvYShKU09OLnN0cmluZ2lmeShkYXRhKSlcblx0XHR9O1xuXHR9XG5cblx0cHVibGljIHRvRGF0YShwYXJhbXM6IGFueSk6IGFueSB7XG5cdFx0aWYgKHBhcmFtcyAmJiBwYXJhbXMuZGF0YSkge1xuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmF0b2IocGFyYW1zLmRhdGEpKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0UGFyYW1zKCk6IE9ic2VydmFibGU8Q29tcG9uZW50RmFjdG9yeTxQYWdlQ29tcG9uZW50Pj4ge1xuXHRcdHJldHVybiB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcblx0XHRcdGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIEFjdGl2YXRpb25FbmQpLFxuXHRcdFx0bWFwKCgpID0+IHRoaXMucm91dGUpLFxuXHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdG1hcChyb3V0ZSA9PiByb3V0ZS5maXJzdENoaWxkKSxcblx0XHRcdHN3aXRjaE1hcChyb3V0ZSA9PiByb3V0ZS5wYXJhbXMpLFxuXHRcdFx0Lypcblx0XHRcdHRhcCgocGFyYW1zKSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdnZXRQYXJhbXMnLCBwYXJhbXMpO1xuXHRcdFx0fSksXG5cdFx0XHQqL1xuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy50b0RhdGEoeCkpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0cHVibGljIHNldExhbmd1YWdlKGxhbmc6IHN0cmluZywgc2lsZW50PzogYm9vbGVhbikge1xuXHRcdHRoaXMubGFuZyA9IGxhbmc7XG5cdFx0aWYgKHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnVzZUxhbmcgJiYgdGhpcy5wYXRoKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLnNldExhbmd1YWdlJywgdGhpcy5wYXRoLCB0aGlzLl9sYW5nLCBsYW5nLCBzaWxlbnQpO1xuXHRcdFx0aWYgKHNpbGVudCkge1xuXHRcdFx0XHR0aGlzLmxvY2F0aW9uLnJlcGxhY2VTdGF0ZSh0aGlzLnBhdGgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucGF0aF0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFBSSVZBVEUgTUVUSE9EU1xuXG5cdHByaXZhdGUgc2V0TGFuZ3VhZ2VzKCkge1xuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5hZGRMYW5ncyh0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5sYW5ndWFnZXMgPyB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5sYW5ndWFnZXMubWFwKHggPT4geC5sYW5nKSA6IFtdKTtcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc2V0RGVmYXVsdExhbmcodGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMuZGVmYXVsdExhbmd1YWdlKTtcblx0XHQvLyB0aGlzLnNldExhbmd1YWdlKHRoaXMuZGV0ZWN0TGFuZ3VhZ2UoKSwgdHJ1ZSk7XG5cdFx0dGhpcy5zZXRMYW5ndWFnZSh0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5kZWZhdWx0TGFuZ3VhZ2UsIHRydWUpO1xuXHRcdC8qXG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGU6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5vbkxhbmdDaGFuZ2UnLCBlKTtcblx0XHR9KTtcblx0XHQqL1xuXHR9XG5cblx0cHJpdmF0ZSBzdWJzY3JpYmVUb1JvdXRlcigpIHtcblx0XHR0aGlzLnJvdXRlci5ldmVudHMucGlwZShcblx0XHRcdGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydClcblx0XHQpLnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25TdGFydCkgPT4ge1xuXHRcdFx0Y29uc3QgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uLm5vcm1hbGl6ZShldmVudC51cmwpLnNwbGl0KCcvJyk7XG5cdFx0XHRpZiAodGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMudXNlTWFya2V0KSB7XG5cdFx0XHRcdGNvbnN0IG1hcmtldEluZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzptYXJrZXQnKTtcblx0XHRcdFx0Y29uc3QgbWFya2V0ID0gbG9jYXRpb25bbWFya2V0SW5kZXhdO1xuXHRcdFx0XHRpZiAobWFya2V0ICE9PSB0aGlzLmN1cnJlbnRNYXJrZXQpIHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRNYXJrZXQgPSBtYXJrZXQ7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5zZXRNYXJrZXQnLCBtYXJrZXQsIGV2ZW50LnVybCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy51c2VMYW5nKSB7XG5cdFx0XHRcdGNvbnN0IGxhbmdJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bGFuZycpO1xuXHRcdFx0XHRjb25zdCBsYW5nID0gbG9jYXRpb25bbGFuZ0luZGV4XTtcblx0XHRcdFx0aWYgKGxhbmcgIT09IHRoaXMuX2xhbmcpIHtcblx0XHRcdFx0XHRjb25zdCBsYW5ndWFnZSA9IHRoaXMuX2xhbmd1YWdlcy5nZXRWYWx1ZSgpLmZpbmQoeCA9PiB4LmxhbmcgPT09IGxhbmcpO1xuXHRcdFx0XHRcdHRoaXMuX2xhbmd1YWdlLm5leHQobGFuZ3VhZ2UpO1xuXHRcdFx0XHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5zZXRMYW5nJywgbGFuZywgdGhpcy5fbGFuZywgbGFuZ0luZGV4LCBsb2NhdGlvbiwgZXZlbnQudXJsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBkZXRlY3RMYW5ndWFnZSgpOiBzdHJpbmcge1xuXHRcdGxldCBhY2NlcHRMYW5ndWFnZTogc3RyaW5nID0gbnVsbDtcblx0XHRpZiAoaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHQvKlxuXHRcdFx0Ly8gc2VydmVyIHNpZGUgZXhwcmVzcyBlbmdpbmVcblx0XHRcdGFwcC5lbmdpbmUoJ2h0bWwnLCAgKF8sIG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRcdGxldCBlbmdpbmUgPSBuZ0V4cHJlc3NFbmdpbmUoe1xuXHRcdFx0XHRcdGJvb3RzdHJhcDogU2VydmVyQXBwTW9kdWxlLFxuXHRcdFx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6ICdyZXF1ZXN0JywgdXNlRmFjdG9yeTogKCkgPT4gb3B0aW9ucy5yZXEgfSBdXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRlbmdpbmUoXywgb3B0aW9ucywgY2FsbGJhY2spXG5cdFx0XHR9KVxuXHRcdFx0Ki9cblx0XHRcdGNvbnN0IHJlcXVlc3QgPSB0aGlzLmluamVjdG9yLmdldCgncmVxdWVzdCcpO1xuXHRcdFx0aWYgKHJlcXVlc3QpIHtcblx0XHRcdFx0YWNjZXB0TGFuZ3VhZ2UgPSByZXF1ZXN0LmhlYWRlcnNbJ2FjY2VwdC1sYW5ndWFnZSddO1xuXHRcdFx0XHRjb25zdCBsYW5ndWFnZXM6IHN0cmluZ1tdID0gYWNjZXB0TGFuZ3VhZ2UubWF0Y2goL1thLXpBLVpcXC1dezIsMTB9L2cpIHx8IFtdO1xuXHRcdFx0XHRpZiAobGFuZ3VhZ2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRhY2NlcHRMYW5ndWFnZSA9IGxhbmd1YWdlc1swXS5zcGxpdCgnLScpWzBdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFjY2VwdExhbmd1YWdlID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygncmVxdWVzdCcsIHJlcXVlc3QsICdhY2NlcHRMYW5ndWFnZScsIGFjY2VwdExhbmd1YWdlKTtcblx0XHRcdH1cblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuaXNQbGF0Zm9ybVNlcnZlcicsIHRoaXMucGxhdGZvcm1JZCwgYWNjZXB0TGFuZ3VhZ2UpO1xuXHRcdH0gZWxzZSBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0YWNjZXB0TGFuZ3VhZ2UgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0QnJvd3NlckxhbmcoKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuaXNQbGF0Zm9ybUJyb3dzZXInLCB0aGlzLnBsYXRmb3JtSWQsIGFjY2VwdExhbmd1YWdlKTtcblx0XHR9XG5cdFx0bGV0IGRldGVjdGVkTGFuZ3VhZ2U6IHN0cmluZyA9IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLmRlZmF1bHRMYW5ndWFnZTtcblx0XHRjb25zdCByZWdleHA6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCgke3RoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLmxhbmd1YWdlcyA/IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLmxhbmd1YWdlcy5tYXAoeCA9PiB4LmxhbmcpLmpvaW4oJ3wnKSA6ICcnfSlgLCAnZ2knKTtcblx0XHRjb25zdCBtYXRjaCA9IChhY2NlcHRMYW5ndWFnZSB8fCAnJykubWF0Y2gocmVnZXhwKTtcblx0XHRkZXRlY3RlZExhbmd1YWdlID0gbWF0Y2ggPyBtYXRjaFswXSA6IGRldGVjdGVkTGFuZ3VhZ2U7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5kZXRlY3RMYW5ndWFnZScsIGRldGVjdGVkTGFuZ3VhZ2UpO1xuXHRcdHJldHVybiBkZXRlY3RlZExhbmd1YWdlO1xuXHR9XG5cblx0cHVibGljIGdldFRpbWUoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybiAocGVyZm9ybWFuY2UgfHwgRGF0ZSkubm93KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHRpbWUgPSBwcm9jZXNzLmhydGltZSgpO1xuXHRcdFx0cmV0dXJuICh0aW1lWzBdICogMWU5ICsgdGltZVsxXSkgLyAxZTY7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==