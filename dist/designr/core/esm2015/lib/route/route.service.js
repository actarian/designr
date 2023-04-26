/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser, isPlatformServer, Location } from '@angular/common';
import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { CoreService } from '../config/core.service';
import { SegmentPipe } from '../pipes/segment.pipe';
import { TranslateService } from '../translate/translate.service';
import * as i0 from "@angular/core";
import * as i1 from "../config/core.service";
import * as i2 from "../translate/translate.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "../pipes/segment.pipe";
// @dynamic
export class RouteService {
    /**
     * @param {?} platformId
     * @param {?} coreService
     * @param {?} injector
     * @param {?} translateService
     * @param {?} location
     * @param {?} route
     * @param {?} router
     * @param {?} segment
     */
    constructor(platformId, coreService, injector, translateService, location, route, router, segment) {
        this.platformId = platformId;
        this.coreService = coreService;
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
        this.urlStrategy = this.coreService.options.urlStrategy;
        this._languages.next(this.coreService.options.languages);
        this.currentMarket = this.coreService.options.defaultMarket;
        this.setLanguages();
        if (this.coreService.options.useLang || this.coreService.options.useMarket) {
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
            const language = this._languages.getValue().find((/**
             * @param {?} x
             * @return {?}
             */
            x => x.lang === lang));
            this._language.next(language);
            this.translateService.use(lang);
            // console.log('RouteService.set lang', lang, this.coreService.options.useLang);
            if (this.coreService.options.useLang) {
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
        return this.route.queryParams.pipe(distinctUntilChanged(), switchMap((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            // console.log(params);
            /** @type {?} */
            const parsed = this.parseParams(params);
            this.pageParams$.next(parsed);
            return of(parsed);
        })));
    }
    /**
     * @param {?} params
     * @return {?}
     */
    parseParams(params) {
        /** @type {?} */
        const parsed = {};
        Object.keys(params).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => parsed[k] = this.parse(params[k])));
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
        Object.keys(params).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => serialized[k] = this.serialize(params[k])));
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
        if (this.coreService.options.useMarket) {
            /** @type {?} */
            const market = this.currentMarket;
            /** @type {?} */
            const marketIndex = this.urlStrategy.split('/').indexOf(':market');
            segments.splice(marketIndex, 0, market);
        }
        if (this.coreService.options.useLang) {
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
        let paths = segments.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            return typeof x === 'string';
        }));
        /** @type {?} */
        const datas = segments.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            return typeof x !== 'string';
        }));
        if (this.coreService.options.useMarket) {
            /** @type {?} */
            const marketIndex = this.urlStrategy.split('/').indexOf(':market');
            if (paths.length > marketIndex) {
                paths[marketIndex] = '*';
            }
        }
        if (this.coreService.options.useLang) {
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
    /*
        public getParams(): Observable<ComponentFactory<PageComponent>> {
            return this.router.events.pipe(
                filter(event => event instanceof ActivationEnd),
                map(() => this.route),
                distinctUntilChanged(),
                map(route => route.firstChild),
                switchMap(route => route.params),
                concatMap(x => {
                    return of(this.toData(x));
                })
            );
        }
        */
    /**
     * @param {?} lang
     * @param {?=} silent
     * @return {?}
     */
    setLanguage(lang, silent) {
        this.lang = lang;
        if (this.coreService.options.useLang && this.path) {
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
        this.translateService.addLangs(this.coreService.options.languages ? this.coreService.options.languages.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.lang)) : []);
        this.translateService.setDefaultLang(this.coreService.options.defaultLanguage);
        // this.setLanguage(this.detectLanguage(), true);
        this.setLanguage(this.coreService.options.defaultLanguage, true);
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
        this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationStart))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const location = this.location.normalize(event.url).split('/');
            if (this.coreService.options.useMarket) {
                /** @type {?} */
                const marketIndex = this.urlStrategy.split('/').indexOf(':market');
                /** @type {?} */
                const market = location[marketIndex];
                if (market !== this.currentMarket) {
                    this.currentMarket = market;
                    // console.log('RouteService.setMarket', market, event.url);
                }
            }
            if (this.coreService.options.useLang) {
                /** @type {?} */
                const langIndex = this.urlStrategy.split('/').indexOf(':lang');
                /** @type {?} */
                const lang = location[langIndex];
                if (lang !== this._lang) {
                    /** @type {?} */
                    const language = this._languages.getValue().find((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.lang === lang));
                    this._language.next(language);
                    this.translateService.use(lang);
                    // console.log('RouteService.setLang', lang, this._lang, langIndex, location, event.url);
                }
            }
        }));
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
        let detectedLanguage = this.coreService.options.defaultLanguage;
        /** @type {?} */
        const regexp = new RegExp(`(${this.coreService.options.languages ? this.coreService.options.languages.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.lang)).join('|') : ''})`, 'gi');
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
    /**
     * @return {?}
     */
    start() {
        RouteService.startTime = this.getTime();
    }
    /**
     * @return {?}
     */
    end() {
        RouteService.endTime = this.getTime();
        console.log('RouteService.end', RouteService.endTime - RouteService.startTime);
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
    { type: CoreService },
    { type: Injector },
    { type: TranslateService },
    { type: Location },
    { type: ActivatedRoute },
    { type: Router },
    { type: SegmentPipe }
];
/** @nocollapse */ RouteService.ngInjectableDef = i0.defineInjectable({ factory: function RouteService_Factory() { return new RouteService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.CoreService), i0.inject(i0.INJECTOR), i0.inject(i2.TranslateService), i0.inject(i3.Location), i0.inject(i4.ActivatedRoute), i0.inject(i4.Router), i0.inject(i5.SegmentPipe)); }, token: RouteService, providedIn: "root" });
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
    RouteService.prototype.coreService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGUvcm91dGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQVUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7OztBQVNsRSxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7Ozs7SUFleEIsWUFDOEIsVUFBa0IsRUFDdkMsV0FBd0IsRUFDeEIsUUFBa0IsRUFDbEIsZ0JBQTZDLEVBQzdDLFFBQWtCLEVBQ2xCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxPQUFvQjtRQVBDLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTZCO1FBQzdDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FB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QUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN2QztJQUNGLENBQUM7Ozs7SUFFTSxLQUFLO1FBQ1gsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVNLEdBQUc7UUFDVCxZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7OztZQS9TRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7eUNBaUJFLE1BQU0sU0FBQyxXQUFXO1lBNUJaLFdBQVc7WUFKUyxRQUFRO1lBTzVCLGdCQUFnQjtZQVJxQixRQUFRO1lBRTdDLGNBQWM7WUFBMkIsTUFBTTtZQUkvQyxXQUFXOzs7OztJQWFuQix1QkFBeUI7O0lBQ3pCLHFCQUF1Qjs7Ozs7SUFDdkIsbUNBQTRCOzs7OztJQUM1QixpQ0FBaUQ7O0lBQ2pELGdDQUEwRTs7Ozs7SUFDMUUsa0NBQTBFOztJQUMxRSxpQ0FBOEU7Ozs7O0lBQzlFLDZCQUFzQjs7Ozs7SUFDdEIsNEJBQXFCOztJQUNyQiw4QkFBa0M7O0lBQ2xDLG1DQUF1Qzs7SUFDdkMscUNBQTZCOztJQWtEN0IsbUNBQXNFOzs7OztJQS9DckUsa0NBQStDOzs7OztJQUMvQyxtQ0FBZ0M7Ozs7O0lBQ2hDLGdDQUEwQjs7Ozs7SUFDMUIsd0NBQXFEOzs7OztJQUNyRCxnQ0FBMEI7Ozs7O0lBQzFCLDZCQUE2Qjs7Ozs7SUFDN0IsOEJBQXNCOzs7OztJQUN0QiwrQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyLCBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uU3RhcnQsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IFNlZ21lbnRQaXBlIH0gZnJvbSAnLi4vcGlwZXMvc2VnbWVudC5waXBlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSAnLi4vdHJhbnNsYXRlL3RyYW5zbGF0ZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGUvdHJhbnNsYXRlLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBCdWZmZXI7XHJcbmRlY2xhcmUgY29uc3QgcHJvY2VzcztcclxuXHJcbi8vIEBkeW5hbWljXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvdXRlU2VydmljZSB7XHJcblxyXG5cdHN0YXRpYyBzdGFydFRpbWU6IG51bWJlcjtcclxuXHRzdGF0aWMgZW5kVGltZTogbnVtYmVyO1xyXG5cdHByaXZhdGUgdXJsU3RyYXRlZ3k6IHN0cmluZztcclxuXHRwcml2YXRlIF9sYW5ndWFnZTogYW55ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XHJcblx0cHVibGljIHJlYWRvbmx5IGxhbmd1YWdlOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLl9sYW5ndWFnZS5hc09ic2VydmFibGUoKTtcclxuXHRwcml2YXRlIF9sYW5ndWFnZXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxhbnk+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xyXG5cdHB1YmxpYyByZWFkb25seSBsYW5ndWFnZXM6IE9ic2VydmFibGU8YW55W10+ID0gdGhpcy5fbGFuZ3VhZ2VzLmFzT2JzZXJ2YWJsZSgpO1xyXG5cdHByaXZhdGUgX2xhbmc6IHN0cmluZztcclxuXHRwcml2YXRlIHBhdGg6IHN0cmluZztcclxuXHRwdWJsaWMgcGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz47XHJcblx0cHVibGljIHF1ZXJ5UGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz47XHJcblx0cHVibGljIGN1cnJlbnRNYXJrZXQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdHByaXZhdGUgY29yZVNlcnZpY2U6IENvcmVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcblx0XHRwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2U8VHJhbnNsYXRlPixcclxuXHRcdHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBzZWdtZW50OiBTZWdtZW50UGlwZSxcclxuXHQpIHtcclxuXHRcdHRoaXMudXJsU3RyYXRlZ3kgPSB0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXJsU3RyYXRlZ3k7XHJcblx0XHR0aGlzLl9sYW5ndWFnZXMubmV4dCh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMubGFuZ3VhZ2VzKTtcclxuXHRcdHRoaXMuY3VycmVudE1hcmtldCA9IHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5kZWZhdWx0TWFya2V0O1xyXG5cdFx0dGhpcy5zZXRMYW5ndWFnZXMoKTtcclxuXHRcdGlmICh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZyB8fCB0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTWFya2V0KSB7XHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlVG9Sb3V0ZXIoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0IGxhbmcoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9sYW5nO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzZXQgbGFuZyhsYW5nOiBzdHJpbmcpIHtcclxuXHRcdGlmIChsYW5nICE9PSB0aGlzLl9sYW5nKSB7XHJcblx0XHRcdHRoaXMuX2xhbmcgPSBsYW5nO1xyXG5cdFx0XHRjb25zdCBsYW5ndWFnZSA9IHRoaXMuX2xhbmd1YWdlcy5nZXRWYWx1ZSgpLmZpbmQoeCA9PiB4LmxhbmcgPT09IGxhbmcpO1xyXG5cdFx0XHR0aGlzLl9sYW5ndWFnZS5uZXh0KGxhbmd1YWdlKTtcclxuXHRcdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5zZXQgbGFuZycsIGxhbmcsIHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VMYW5nKTtcclxuXHRcdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VMYW5nKSB7XHJcblx0XHRcdFx0Y29uc3QgX2xhbmc6IHN0cmluZyA9IHRoaXMuX2xhbmc7XHJcblx0XHRcdFx0bGV0IHBhdGggPSB0aGlzLmxvY2F0aW9uLnBhdGgoKTtcclxuXHRcdFx0XHRpZiAocGF0aC5pbmRleE9mKGAvJHtfbGFuZ31gKSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0cGF0aCA9IHBhdGgucmVwbGFjZShgLyR7X2xhbmd9YCwgYC8ke2xhbmd9YCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChwYXRoLmluZGV4T2YoYC8ke2xhbmd9YCkgIT09IDApIHtcclxuXHRcdFx0XHRcdHBhdGggPSBgLyR7bGFuZ31gICsgcGF0aDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5wYXRoID0gcGF0aDtcclxuXHRcdFx0XHQvLyBjb25zdCBsYW5nSW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOmxhbmcnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBjdXJyZW50TGFuZygpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xhbmc7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGFnZVBhcmFtcyQ6IEJlaGF2aW9yU3ViamVjdDxQYXJhbXM+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XHJcblx0cHVibGljIGdldFBhZ2VQYXJhbXMoKTogT2JzZXJ2YWJsZTxQYXJhbXM+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuZ2V0UGFnZVBhcmFtcycsIHRoaXMucm91dGVyLnVybCk7XHJcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxyXG5cdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG5cdFx0XHRzd2l0Y2hNYXAocGFyYW1zID0+IHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG5cdFx0XHRcdGNvbnN0IHBhcnNlZCA9IHRoaXMucGFyc2VQYXJhbXMocGFyYW1zKTtcclxuXHRcdFx0XHR0aGlzLnBhZ2VQYXJhbXMkLm5leHQocGFyc2VkKTtcclxuXHRcdFx0XHRyZXR1cm4gb2YocGFyc2VkKTtcclxuXHRcdFx0fSksXHJcblx0XHRcdC8vIHRhcChwYXJhbXMgPT4gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5nZXRQYWdlUGFyYW1zJywgcGFyYW1zKSksXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlUGFyYW1zKHBhcmFtczogYW55KTogYW55IHtcclxuXHRcdGNvbnN0IHBhcnNlZCA9IHt9O1xyXG5cdFx0T2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGsgPT4gcGFyc2VkW2tdID0gdGhpcy5wYXJzZShwYXJhbXNba10pKTtcclxuXHRcdC8qXHJcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBwYXJhbXMpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiAocGFyYW1zW2tleV0pID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdHBhcnNlZFtrZXldID0gdGhpcy5wYXJzZShwYXJhbXNba2V5XSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cGFyc2VkW2tleV0gPSBwYXJhbXNba2V5XTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ki9cclxuXHRcdHJldHVybiBwYXJzZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VyaWFsaXplUGFyYW1zKHBhcmFtczogYW55KSB7XHJcblx0XHRjb25zdCBzZXJpYWxpemVkID0ge307XHJcblx0XHRPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goayA9PiBzZXJpYWxpemVkW2tdID0gdGhpcy5zZXJpYWxpemUocGFyYW1zW2tdKSk7XHJcblx0XHRyZXR1cm4gc2VyaWFsaXplZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwYXJzZShiYXNlNjQpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmF0b2IoYmFzZTY0KSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoQnVmZmVyLmZyb20oYmFzZTY0LCAnYmFzZTY0JykudG9TdHJpbmcoJ2FzY2lpJykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VyaWFsaXplKG9iamVjdCkge1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0cmV0dXJuIHdpbmRvdy5idG9hKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIEJ1ZmZlci5mcm9tKEpTT04uc3RyaW5naWZ5KG9iamVjdCksICdhc2NpaScpLnRvU3RyaW5nKCdiYXNlNjQnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRJZCgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRTbHVnKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NsdWcnKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0b1JvdXRlKGRhdGE6IGFueVtdIHwgc3RyaW5nKTogYW55W10ge1xyXG5cdFx0Y29uc3Qgc2VnbWVudHMgPSB0aGlzLnNlZ21lbnQudHJhbnNmb3JtKGRhdGEpO1xyXG5cdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VNYXJrZXQpIHtcclxuXHRcdFx0Y29uc3QgbWFya2V0OiBzdHJpbmcgPSB0aGlzLmN1cnJlbnRNYXJrZXQ7XHJcblx0XHRcdGNvbnN0IG1hcmtldEluZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzptYXJrZXQnKTtcclxuXHRcdFx0c2VnbWVudHMuc3BsaWNlKG1hcmtldEluZGV4LCAwLCBtYXJrZXQpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VMYW5nKSB7XHJcblx0XHRcdGNvbnN0IGxhbmc6IHN0cmluZyA9IHRoaXMuX2xhbmc7XHJcblx0XHRcdGNvbnN0IGxhbmdJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bGFuZycpO1xyXG5cdFx0XHRzZWdtZW50cy5zcGxpY2UobGFuZ0luZGV4LCAwLCBsYW5nKTtcclxuXHRcdH1cclxuXHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UudG9Sb3V0ZScsIHNlZ21lbnRzKTtcclxuXHRcdHJldHVybiBzZWdtZW50cztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0b1NsdWcoZGF0YTogYW55W10gfCBzdHJpbmcpOiBhbnlbXSB7XHJcblx0XHRjb25zdCBzZWdtZW50cyA9IHRoaXMuc2VnbWVudC50cmFuc2Zvcm0oZGF0YSk7XHJcblx0XHRsZXQgcGF0aHMgPSBzZWdtZW50cy5maWx0ZXIoeCA9PiB7XHJcblx0XHRcdHJldHVybiB0eXBlb2YgeCA9PT0gJ3N0cmluZyc7XHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IGRhdGFzID0gc2VnbWVudHMuZmlsdGVyKHggPT4ge1xyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIHggIT09ICdzdHJpbmcnO1xyXG5cdFx0fSk7XHJcblx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZU1hcmtldCkge1xyXG5cdFx0XHRjb25zdCBtYXJrZXRJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bWFya2V0Jyk7XHJcblx0XHRcdGlmIChwYXRocy5sZW5ndGggPiBtYXJrZXRJbmRleCkge1xyXG5cdFx0XHRcdHBhdGhzW21hcmtldEluZGV4XSA9ICcqJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VMYW5nKSB7XHJcblx0XHRcdGNvbnN0IGxhbmdJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bGFuZycpO1xyXG5cdFx0XHRpZiAocGF0aHMubGVuZ3RoID4gbGFuZ0luZGV4KSB7XHJcblx0XHRcdFx0cGF0aHNbbGFuZ0luZGV4XSA9ICcqJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cGF0aHMgPSBwYXRocy5qb2luKCcvJykucmVwbGFjZSgvXFwvXFwqL2dpLCAnJykuc3BsaXQoJy8nKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UudG9TbHVnJywgZGF0YSwgcGF0aHMpO1xyXG5cdFx0cmV0dXJuIHBhdGhzLmNvbmNhdChkYXRhcyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdG9QYXJhbXMoZGF0YTogYW55KTogYW55IHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRhdGE6IHdpbmRvdy5idG9hKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0b0RhdGEocGFyYW1zOiBhbnkpOiBhbnkge1xyXG5cdFx0aWYgKHBhcmFtcyAmJiBwYXJhbXMuZGF0YSkge1xyXG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihwYXJhbXMuZGF0YSkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LypcclxuXHRwdWJsaWMgZ2V0UGFyYW1zKCk6IE9ic2VydmFibGU8Q29tcG9uZW50RmFjdG9yeTxQYWdlQ29tcG9uZW50Pj4ge1xyXG5cdFx0cmV0dXJuIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBBY3RpdmF0aW9uRW5kKSxcclxuXHRcdFx0bWFwKCgpID0+IHRoaXMucm91dGUpLFxyXG5cdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG5cdFx0XHRtYXAocm91dGUgPT4gcm91dGUuZmlyc3RDaGlsZCksXHJcblx0XHRcdHN3aXRjaE1hcChyb3V0ZSA9PiByb3V0ZS5wYXJhbXMpLFxyXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMudG9EYXRhKHgpKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdCovXHJcblxyXG5cdHB1YmxpYyBzZXRMYW5ndWFnZShsYW5nOiBzdHJpbmcsIHNpbGVudD86IGJvb2xlYW4pIHtcclxuXHRcdHRoaXMubGFuZyA9IGxhbmc7XHJcblx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZUxhbmcgJiYgdGhpcy5wYXRoKSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2Uuc2V0TGFuZ3VhZ2UnLCB0aGlzLnBhdGgsIHRoaXMuX2xhbmcsIGxhbmcsIHNpbGVudCk7XHJcblx0XHRcdGlmIChzaWxlbnQpIHtcclxuXHRcdFx0XHR0aGlzLmxvY2F0aW9uLnJlcGxhY2VTdGF0ZSh0aGlzLnBhdGgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnBhdGhdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gUFJJVkFURSBNRVRIT0RTXHJcblxyXG5cdHByaXZhdGUgc2V0TGFuZ3VhZ2VzKCkge1xyXG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLmFkZExhbmdzKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5sYW5ndWFnZXMgPyB0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMubGFuZ3VhZ2VzLm1hcCh4ID0+IHgubGFuZykgOiBbXSk7XHJcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc2V0RGVmYXVsdExhbmcodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmRlZmF1bHRMYW5ndWFnZSk7XHJcblx0XHQvLyB0aGlzLnNldExhbmd1YWdlKHRoaXMuZGV0ZWN0TGFuZ3VhZ2UoKSwgdHJ1ZSk7XHJcblx0XHR0aGlzLnNldExhbmd1YWdlKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5kZWZhdWx0TGFuZ3VhZ2UsIHRydWUpO1xyXG5cdFx0LypcclxuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChlOiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5vbkxhbmdDaGFuZ2UnLCBlKTtcclxuXHRcdH0pO1xyXG5cdFx0Ki9cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3Vic2NyaWJlVG9Sb3V0ZXIoKSB7XHJcblx0XHR0aGlzLnJvdXRlci5ldmVudHMucGlwZShcclxuXHRcdFx0ZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KVxyXG5cdFx0KS5zdWJzY3JpYmUoKGV2ZW50OiBOYXZpZ2F0aW9uU3RhcnQpID0+IHtcclxuXHRcdFx0Y29uc3QgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uLm5vcm1hbGl6ZShldmVudC51cmwpLnNwbGl0KCcvJyk7XHJcblx0XHRcdGlmICh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTWFya2V0KSB7XHJcblx0XHRcdFx0Y29uc3QgbWFya2V0SW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOm1hcmtldCcpO1xyXG5cdFx0XHRcdGNvbnN0IG1hcmtldCA9IGxvY2F0aW9uW21hcmtldEluZGV4XTtcclxuXHRcdFx0XHRpZiAobWFya2V0ICE9PSB0aGlzLmN1cnJlbnRNYXJrZXQpIHtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudE1hcmtldCA9IG1hcmtldDtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2Uuc2V0TWFya2V0JywgbWFya2V0LCBldmVudC51cmwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZUxhbmcpIHtcclxuXHRcdFx0XHRjb25zdCBsYW5nSW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOmxhbmcnKTtcclxuXHRcdFx0XHRjb25zdCBsYW5nID0gbG9jYXRpb25bbGFuZ0luZGV4XTtcclxuXHRcdFx0XHRpZiAobGFuZyAhPT0gdGhpcy5fbGFuZykge1xyXG5cdFx0XHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSB0aGlzLl9sYW5ndWFnZXMuZ2V0VmFsdWUoKS5maW5kKHggPT4geC5sYW5nID09PSBsYW5nKTtcclxuXHRcdFx0XHRcdHRoaXMuX2xhbmd1YWdlLm5leHQobGFuZ3VhZ2UpO1xyXG5cdFx0XHRcdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2Uuc2V0TGFuZycsIGxhbmcsIHRoaXMuX2xhbmcsIGxhbmdJbmRleCwgbG9jYXRpb24sIGV2ZW50LnVybCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZGV0ZWN0TGFuZ3VhZ2UoKTogc3RyaW5nIHtcclxuXHRcdGxldCBhY2NlcHRMYW5ndWFnZTogc3RyaW5nID0gbnVsbDtcclxuXHRcdGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0LypcclxuXHRcdFx0Ly8gc2VydmVyIHNpZGUgZXhwcmVzcyBlbmdpbmVcclxuXHRcdFx0YXBwLmVuZ2luZSgnaHRtbCcsICAoXywgb3B0aW9ucywgY2FsbGJhY2spID0+IHtcclxuXHRcdFx0XHRsZXQgZW5naW5lID0gbmdFeHByZXNzRW5naW5lKHtcclxuXHRcdFx0XHRcdGJvb3RzdHJhcDogU2VydmVyQXBwTW9kdWxlLFxyXG5cdFx0XHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogJ3JlcXVlc3QnLCB1c2VGYWN0b3J5OiAoKSA9PiBvcHRpb25zLnJlcSB9IF1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRlbmdpbmUoXywgb3B0aW9ucywgY2FsbGJhY2spXHJcblx0XHRcdH0pXHJcblx0XHRcdCovXHJcblx0XHRcdGNvbnN0IHJlcXVlc3QgPSB0aGlzLmluamVjdG9yLmdldCgncmVxdWVzdCcpO1xyXG5cdFx0XHRpZiAocmVxdWVzdCkge1xyXG5cdFx0XHRcdGFjY2VwdExhbmd1YWdlID0gcmVxdWVzdC5oZWFkZXJzWydhY2NlcHQtbGFuZ3VhZ2UnXTtcclxuXHRcdFx0XHRjb25zdCBsYW5ndWFnZXM6IHN0cmluZ1tdID0gYWNjZXB0TGFuZ3VhZ2UubWF0Y2goL1thLXpBLVpcXC1dezIsMTB9L2cpIHx8IFtdO1xyXG5cdFx0XHRcdGlmIChsYW5ndWFnZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0YWNjZXB0TGFuZ3VhZ2UgPSBsYW5ndWFnZXNbMF0uc3BsaXQoJy0nKVswXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWNjZXB0TGFuZ3VhZ2UgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygncmVxdWVzdCcsIHJlcXVlc3QsICdhY2NlcHRMYW5ndWFnZScsIGFjY2VwdExhbmd1YWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmlzUGxhdGZvcm1TZXJ2ZXInLCB0aGlzLnBsYXRmb3JtSWQsIGFjY2VwdExhbmd1YWdlKTtcclxuXHRcdH0gZWxzZSBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRhY2NlcHRMYW5ndWFnZSA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRCcm93c2VyTGFuZygpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmlzUGxhdGZvcm1Ccm93c2VyJywgdGhpcy5wbGF0Zm9ybUlkLCBhY2NlcHRMYW5ndWFnZSk7XHJcblx0XHR9XHJcblx0XHRsZXQgZGV0ZWN0ZWRMYW5ndWFnZTogc3RyaW5nID0gdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmRlZmF1bHRMYW5ndWFnZTtcclxuXHRcdGNvbnN0IHJlZ2V4cDogUmVnRXhwID0gbmV3IFJlZ0V4cChgKCR7dGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmxhbmd1YWdlcyA/IHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5sYW5ndWFnZXMubWFwKHggPT4geC5sYW5nKS5qb2luKCd8JykgOiAnJ30pYCwgJ2dpJyk7XHJcblx0XHRjb25zdCBtYXRjaCA9IChhY2NlcHRMYW5ndWFnZSB8fCAnJykubWF0Y2gocmVnZXhwKTtcclxuXHRcdGRldGVjdGVkTGFuZ3VhZ2UgPSBtYXRjaCA/IG1hdGNoWzBdIDogZGV0ZWN0ZWRMYW5ndWFnZTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuZGV0ZWN0TGFuZ3VhZ2UnLCBkZXRlY3RlZExhbmd1YWdlKTtcclxuXHRcdHJldHVybiBkZXRlY3RlZExhbmd1YWdlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFRpbWUoKSB7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRyZXR1cm4gKHBlcmZvcm1hbmNlIHx8IERhdGUpLm5vdygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XHJcblx0XHRcdHJldHVybiAodGltZVswXSAqIDFlOSArIHRpbWVbMV0pIC8gMWU2O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXJ0KCkge1xyXG5cdFx0Um91dGVTZXJ2aWNlLnN0YXJ0VGltZSA9IHRoaXMuZ2V0VGltZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGVuZCgpIHtcclxuXHRcdFJvdXRlU2VydmljZS5lbmRUaW1lID0gdGhpcy5nZXRUaW1lKCk7XHJcblx0XHRjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmVuZCcsIFJvdXRlU2VydmljZS5lbmRUaW1lIC0gUm91dGVTZXJ2aWNlLnN0YXJ0VGltZSk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=