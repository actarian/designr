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
var RouteService = /** @class */ (function () {
    function RouteService(platformId, coreService, injector, translateService, location, route, router, segment) {
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
    Object.defineProperty(RouteService.prototype, "lang", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this._lang;
        },
        set: /**
         * @private
         * @param {?} lang
         * @return {?}
         */
        function (lang) {
            if (lang !== this._lang) {
                this._lang = lang;
                /** @type {?} */
                var language = this._languages.getValue().find((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.lang === lang; }));
                this._language.next(language);
                this.translateService.use(lang);
                // console.log('RouteService.set lang', lang, this.coreService.options.useLang);
                if (this.coreService.options.useLang) {
                    /** @type {?} */
                    var _lang = this._lang;
                    /** @type {?} */
                    var path = this.location.path();
                    if (path.indexOf("/" + _lang) === 0) {
                        path = path.replace("/" + _lang, "/" + lang);
                    }
                    else if (path.indexOf("/" + lang) !== 0) {
                        path = "/" + lang + path;
                    }
                    this.path = path;
                    // const langIndex = this.urlStrategy.split('/').indexOf(':lang');
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteService.prototype, "currentLang", {
        get: /**
         * @return {?}
         */
        function () {
            return this._lang;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RouteService.prototype.getPageParams = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('RouteService.getPageParams', this.router.url);
        return this.route.queryParams.pipe(distinctUntilChanged(), switchMap((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            // console.log(params);
            /** @type {?} */
            var parsed = _this.parseParams(params);
            _this.pageParams$.next(parsed);
            return of(parsed);
        })));
    };
    /**
     * @param {?} params
     * @return {?}
     */
    RouteService.prototype.parseParams = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var _this = this;
        /** @type {?} */
        var parsed = {};
        Object.keys(params).forEach((/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return parsed[k] = _this.parse(params[k]); }));
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
    };
    /**
     * @param {?} params
     * @return {?}
     */
    RouteService.prototype.serializeParams = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var _this = this;
        /** @type {?} */
        var serialized = {};
        Object.keys(params).forEach((/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return serialized[k] = _this.serialize(params[k]); }));
        return serialized;
    };
    /**
     * @param {?} base64
     * @return {?}
     */
    RouteService.prototype.parse = /**
     * @param {?} base64
     * @return {?}
     */
    function (base64) {
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
    };
    /**
     * @param {?} object
     * @return {?}
     */
    RouteService.prototype.serialize = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        if (isPlatformBrowser(this.platformId)) {
            return window.btoa(JSON.stringify(object));
        }
        else {
            return Buffer.from(JSON.stringify(object), 'ascii').toString('base64');
        }
    };
    /**
     * @return {?}
     */
    RouteService.prototype.getId = /**
     * @return {?}
     */
    function () {
        return +this.route.snapshot.paramMap.get('id');
    };
    /**
     * @return {?}
     */
    RouteService.prototype.getSlug = /**
     * @return {?}
     */
    function () {
        return this.route.snapshot.paramMap.get('slug');
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RouteService.prototype.toRoute = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var segments = this.segment.transform(data);
        if (this.coreService.options.useMarket) {
            /** @type {?} */
            var market = this.currentMarket;
            /** @type {?} */
            var marketIndex = this.urlStrategy.split('/').indexOf(':market');
            segments.splice(marketIndex, 0, market);
        }
        if (this.coreService.options.useLang) {
            /** @type {?} */
            var lang = this._lang;
            /** @type {?} */
            var langIndex = this.urlStrategy.split('/').indexOf(':lang');
            segments.splice(langIndex, 0, lang);
        }
        // console.log('RouteService.toRoute', segments);
        return segments;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RouteService.prototype.toSlug = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var segments = this.segment.transform(data);
        /** @type {?} */
        var paths = segments.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            return typeof x === 'string';
        }));
        /** @type {?} */
        var datas = segments.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            return typeof x !== 'string';
        }));
        if (this.coreService.options.useMarket) {
            /** @type {?} */
            var marketIndex = this.urlStrategy.split('/').indexOf(':market');
            if (paths.length > marketIndex) {
                paths[marketIndex] = '*';
            }
        }
        if (this.coreService.options.useLang) {
            /** @type {?} */
            var langIndex = this.urlStrategy.split('/').indexOf(':lang');
            if (paths.length > langIndex) {
                paths[langIndex] = '*';
            }
        }
        paths = paths.join('/').replace(/\/\*/gi, '').split('/');
        // console.log('RouteService.toSlug', data, paths);
        return paths.concat(datas);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RouteService.prototype.toParams = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return {
            data: window.btoa(JSON.stringify(data))
        };
    };
    /**
     * @param {?} params
     * @return {?}
     */
    RouteService.prototype.toData = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        if (params && params.data) {
            return JSON.parse(window.atob(params.data));
        }
    };
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
    RouteService.prototype.setLanguage = /*
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
    function (lang, silent) {
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
    };
    // PRIVATE METHODS
    // PRIVATE METHODS
    /**
     * @private
     * @return {?}
     */
    RouteService.prototype.setLanguages = 
    // PRIVATE METHODS
    /**
     * @private
     * @return {?}
     */
    function () {
        this.translateService.addLangs(this.coreService.options.languages ? this.coreService.options.languages.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.lang; })) : []);
        this.translateService.setDefaultLang(this.coreService.options.defaultLanguage);
        // this.setLanguage(this.detectLanguage(), true);
        this.setLanguage(this.coreService.options.defaultLanguage, true);
        /*
        this.translateService.onLangChange.subscribe((e: LangChangeEvent) => {
            // console.log('RouteService.onLangChange', e);
        });
        */
    };
    /**
     * @private
     * @return {?}
     */
    RouteService.prototype.subscribeToRouter = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationStart; }))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var location = _this.location.normalize(event.url).split('/');
            if (_this.coreService.options.useMarket) {
                /** @type {?} */
                var marketIndex = _this.urlStrategy.split('/').indexOf(':market');
                /** @type {?} */
                var market = location[marketIndex];
                if (market !== _this.currentMarket) {
                    _this.currentMarket = market;
                    // console.log('RouteService.setMarket', market, event.url);
                }
            }
            if (_this.coreService.options.useLang) {
                /** @type {?} */
                var langIndex = _this.urlStrategy.split('/').indexOf(':lang');
                /** @type {?} */
                var lang_1 = location[langIndex];
                if (lang_1 !== _this._lang) {
                    /** @type {?} */
                    var language = _this._languages.getValue().find((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x.lang === lang_1; }));
                    _this._language.next(language);
                    _this.translateService.use(lang_1);
                    // console.log('RouteService.setLang', lang, this._lang, langIndex, location, event.url);
                }
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    RouteService.prototype.detectLanguage = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var acceptLanguage = null;
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
            var request = this.injector.get('request');
            if (request) {
                acceptLanguage = request.headers['accept-language'];
                /** @type {?} */
                var languages = acceptLanguage.match(/[a-zA-Z\-]{2,10}/g) || [];
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
        var detectedLanguage = this.coreService.options.defaultLanguage;
        /** @type {?} */
        var regexp = new RegExp("(" + (this.coreService.options.languages ? this.coreService.options.languages.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.lang; })).join('|') : '') + ")", 'gi');
        /** @type {?} */
        var match = (acceptLanguage || '').match(regexp);
        detectedLanguage = match ? match[0] : detectedLanguage;
        // console.log('RouteService.detectLanguage', detectedLanguage);
        return detectedLanguage;
    };
    /**
     * @return {?}
     */
    RouteService.prototype.getTime = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            return (performance || Date).now();
        }
        else {
            /** @type {?} */
            var time = process.hrtime();
            return (time[0] * 1e9 + time[1]) / 1e6;
        }
    };
    /**
     * @return {?}
     */
    RouteService.prototype.start = /**
     * @return {?}
     */
    function () {
        RouteService.startTime = this.getTime();
    };
    /**
     * @return {?}
     */
    RouteService.prototype.end = /**
     * @return {?}
     */
    function () {
        RouteService.endTime = this.getTime();
        console.log('RouteService.end', RouteService.endTime - RouteService.startTime);
    };
    RouteService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    RouteService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: CoreService },
        { type: Injector },
        { type: TranslateService },
        { type: Location },
        { type: ActivatedRoute },
        { type: Router },
        { type: SegmentPipe }
    ]; };
    /** @nocollapse */ RouteService.ngInjectableDef = i0.defineInjectable({ factory: function RouteService_Factory() { return new RouteService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.CoreService), i0.inject(i0.INJECTOR), i0.inject(i2.TranslateService), i0.inject(i3.Location), i0.inject(i4.ActivatedRoute), i0.inject(i4.Router), i0.inject(i5.SegmentPipe)); }, token: RouteService, providedIn: "root" });
    return RouteService;
}());
export { RouteService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGUvcm91dGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQVUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7OztBQU1sRTtJQWtCQyxzQkFDOEIsVUFBa0IsRUFDdkMsV0FBd0IsRUFDeEIsUUFBa0IsRUFDbEIsZ0JBQTZDLEVBQzdDLFFBQWtCLEVBQ2xCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxPQUFvQjtRQVBDLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTZCO1FBQzdDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFlB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O0lBQzFFLGlDQUE4RTs7Ozs7SUFDOUUsNkJBQXNCOzs7OztJQUN0Qiw0QkFBcUI7O0lBQ3JCLDhCQUFrQzs7SUFDbEMsbUNBQXVDOztJQUN2QyxxQ0FBNkI7O0lBa0Q3QixtQ0FBc0U7Ozs7O0lBL0NyRSxrQ0FBK0M7Ozs7O0lBQy9DLG1DQUFnQzs7Ozs7SUFDaEMsZ0NBQTBCOzs7OztJQUMxQix3Q0FBcUQ7Ozs7O0lBQ3JELGdDQUEwQjs7Ozs7SUFDMUIsNkJBQTZCOzs7OztJQUM3Qiw4QkFBc0I7Ozs7O0lBQ3RCLCtCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIsIExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25TdGFydCwgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29yZVNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuLi9waXBlcy9zZWdtZW50LnBpcGUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGUgfSBmcm9tICcuLi90cmFuc2xhdGUvdHJhbnNsYXRlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IEJ1ZmZlcjtcclxuZGVjbGFyZSBjb25zdCBwcm9jZXNzO1xyXG5cclxuLy8gQGR5bmFtaWNcclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUm91dGVTZXJ2aWNlIHtcclxuXHJcblx0c3RhdGljIHN0YXJ0VGltZTogbnVtYmVyO1xyXG5cdHN0YXRpYyBlbmRUaW1lOiBudW1iZXI7XHJcblx0cHJpdmF0ZSB1cmxTdHJhdGVneTogc3RyaW5nO1xyXG5cdHByaXZhdGUgX2xhbmd1YWdlOiBhbnkgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcclxuXHRwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2U6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuX2xhbmd1YWdlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cdHByaXZhdGUgX2xhbmd1YWdlczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PGFueT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcblx0cHVibGljIHJlYWRvbmx5IGxhbmd1YWdlczogT2JzZXJ2YWJsZTxhbnlbXT4gPSB0aGlzLl9sYW5ndWFnZXMuYXNPYnNlcnZhYmxlKCk7XHJcblx0cHJpdmF0ZSBfbGFuZzogc3RyaW5nO1xyXG5cdHByaXZhdGUgcGF0aDogc3RyaW5nO1xyXG5cdHB1YmxpYyBwYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPjtcclxuXHRwdWJsaWMgcXVlcnlQYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPjtcclxuXHRwdWJsaWMgY3VycmVudE1hcmtldDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxyXG5cdFx0cHJpdmF0ZSBjb3JlU2VydmljZTogQ29yZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuXHRcdHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZTxUcmFuc2xhdGU+LFxyXG5cdFx0cHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwcml2YXRlIHNlZ21lbnQ6IFNlZ21lbnRQaXBlLFxyXG5cdCkge1xyXG5cdFx0dGhpcy51cmxTdHJhdGVneSA9IHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51cmxTdHJhdGVneTtcclxuXHRcdHRoaXMuX2xhbmd1YWdlcy5uZXh0KHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5sYW5ndWFnZXMpO1xyXG5cdFx0dGhpcy5jdXJyZW50TWFya2V0ID0gdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmRlZmF1bHRNYXJrZXQ7XHJcblx0XHR0aGlzLnNldExhbmd1YWdlcygpO1xyXG5cdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VMYW5nIHx8IHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VNYXJrZXQpIHtcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVUb1JvdXRlcigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXQgbGFuZygpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xhbmc7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNldCBsYW5nKGxhbmc6IHN0cmluZykge1xyXG5cdFx0aWYgKGxhbmcgIT09IHRoaXMuX2xhbmcpIHtcclxuXHRcdFx0dGhpcy5fbGFuZyA9IGxhbmc7XHJcblx0XHRcdGNvbnN0IGxhbmd1YWdlID0gdGhpcy5fbGFuZ3VhZ2VzLmdldFZhbHVlKCkuZmluZCh4ID0+IHgubGFuZyA9PT0gbGFuZyk7XHJcblx0XHRcdHRoaXMuX2xhbmd1YWdlLm5leHQobGFuZ3VhZ2UpO1xyXG5cdFx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKGxhbmcpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLnNldCBsYW5nJywgbGFuZywgdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZUxhbmcpO1xyXG5cdFx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZUxhbmcpIHtcclxuXHRcdFx0XHRjb25zdCBfbGFuZzogc3RyaW5nID0gdGhpcy5fbGFuZztcclxuXHRcdFx0XHRsZXQgcGF0aCA9IHRoaXMubG9jYXRpb24ucGF0aCgpO1xyXG5cdFx0XHRcdGlmIChwYXRoLmluZGV4T2YoYC8ke19sYW5nfWApID09PSAwKSB7XHJcblx0XHRcdFx0XHRwYXRoID0gcGF0aC5yZXBsYWNlKGAvJHtfbGFuZ31gLCBgLyR7bGFuZ31gKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHBhdGguaW5kZXhPZihgLyR7bGFuZ31gKSAhPT0gMCkge1xyXG5cdFx0XHRcdFx0cGF0aCA9IGAvJHtsYW5nfWAgKyBwYXRoO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnBhdGggPSBwYXRoO1xyXG5cdFx0XHRcdC8vIGNvbnN0IGxhbmdJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bGFuZycpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGN1cnJlbnRMYW5nKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbGFuZztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwYWdlUGFyYW1zJDogQmVoYXZpb3JTdWJqZWN0PFBhcmFtcz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcclxuXHRwdWJsaWMgZ2V0UGFnZVBhcmFtcygpOiBPYnNlcnZhYmxlPFBhcmFtcz4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5nZXRQYWdlUGFyYW1zJywgdGhpcy5yb3V0ZXIudXJsKTtcclxuXHRcdHJldHVybiB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXHJcblx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcblx0XHRcdHN3aXRjaE1hcChwYXJhbXMgPT4ge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcblx0XHRcdFx0Y29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVBhcmFtcyhwYXJhbXMpO1xyXG5cdFx0XHRcdHRoaXMucGFnZVBhcmFtcyQubmV4dChwYXJzZWQpO1xyXG5cdFx0XHRcdHJldHVybiBvZihwYXJzZWQpO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0Ly8gdGFwKHBhcmFtcyA9PiBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmdldFBhZ2VQYXJhbXMnLCBwYXJhbXMpKSxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGFyc2VQYXJhbXMocGFyYW1zOiBhbnkpOiBhbnkge1xyXG5cdFx0Y29uc3QgcGFyc2VkID0ge307XHJcblx0XHRPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goayA9PiBwYXJzZWRba10gPSB0aGlzLnBhcnNlKHBhcmFtc1trXSkpO1xyXG5cdFx0LypcclxuXHRcdGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xyXG5cdFx0XHRpZiAodHlwZW9mIChwYXJhbXNba2V5XSkgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0cGFyc2VkW2tleV0gPSB0aGlzLnBhcnNlKHBhcmFtc1trZXldKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXJzZWRba2V5XSA9IHBhcmFtc1trZXldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQqL1xyXG5cdFx0cmV0dXJuIHBhcnNlZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXJpYWxpemVQYXJhbXMocGFyYW1zOiBhbnkpIHtcclxuXHRcdGNvbnN0IHNlcmlhbGl6ZWQgPSB7fTtcclxuXHRcdE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrID0+IHNlcmlhbGl6ZWRba10gPSB0aGlzLnNlcmlhbGl6ZShwYXJhbXNba10pKTtcclxuXHRcdHJldHVybiBzZXJpYWxpemVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBhcnNlKGJhc2U2NCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihiYXNlNjQpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShCdWZmZXIuZnJvbShiYXNlNjQsICdiYXNlNjQnKS50b1N0cmluZygnYXNjaWknKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2gge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXJpYWxpemUob2JqZWN0KSB7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRyZXR1cm4gd2luZG93LmJ0b2EoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkob2JqZWN0KSwgJ2FzY2lpJykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldElkKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFNsdWcoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc2x1ZycpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHRvUm91dGUoZGF0YTogYW55W10gfCBzdHJpbmcpOiBhbnlbXSB7XHJcblx0XHRjb25zdCBzZWdtZW50cyA9IHRoaXMuc2VnbWVudC50cmFuc2Zvcm0oZGF0YSk7XHJcblx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZU1hcmtldCkge1xyXG5cdFx0XHRjb25zdCBtYXJrZXQ6IHN0cmluZyA9IHRoaXMuY3VycmVudE1hcmtldDtcclxuXHRcdFx0Y29uc3QgbWFya2V0SW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOm1hcmtldCcpO1xyXG5cdFx0XHRzZWdtZW50cy5zcGxpY2UobWFya2V0SW5kZXgsIDAsIG1hcmtldCk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZUxhbmcpIHtcclxuXHRcdFx0Y29uc3QgbGFuZzogc3RyaW5nID0gdGhpcy5fbGFuZztcclxuXHRcdFx0Y29uc3QgbGFuZ0luZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzpsYW5nJyk7XHJcblx0XHRcdHNlZ21lbnRzLnNwbGljZShsYW5nSW5kZXgsIDAsIGxhbmcpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS50b1JvdXRlJywgc2VnbWVudHMpO1xyXG5cdFx0cmV0dXJuIHNlZ21lbnRzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHRvU2x1ZyhkYXRhOiBhbnlbXSB8IHN0cmluZyk6IGFueVtdIHtcclxuXHRcdGNvbnN0IHNlZ21lbnRzID0gdGhpcy5zZWdtZW50LnRyYW5zZm9ybShkYXRhKTtcclxuXHRcdGxldCBwYXRocyA9IHNlZ21lbnRzLmZpbHRlcih4ID0+IHtcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJztcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgZGF0YXMgPSBzZWdtZW50cy5maWx0ZXIoeCA9PiB7XHJcblx0XHRcdHJldHVybiB0eXBlb2YgeCAhPT0gJ3N0cmluZyc7XHJcblx0XHR9KTtcclxuXHRcdGlmICh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTWFya2V0KSB7XHJcblx0XHRcdGNvbnN0IG1hcmtldEluZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzptYXJrZXQnKTtcclxuXHRcdFx0aWYgKHBhdGhzLmxlbmd0aCA+IG1hcmtldEluZGV4KSB7XHJcblx0XHRcdFx0cGF0aHNbbWFya2V0SW5kZXhdID0gJyonO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZUxhbmcpIHtcclxuXHRcdFx0Y29uc3QgbGFuZ0luZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzpsYW5nJyk7XHJcblx0XHRcdGlmIChwYXRocy5sZW5ndGggPiBsYW5nSW5kZXgpIHtcclxuXHRcdFx0XHRwYXRoc1tsYW5nSW5kZXhdID0gJyonO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRwYXRocyA9IHBhdGhzLmpvaW4oJy8nKS5yZXBsYWNlKC9cXC9cXCovZ2ksICcnKS5zcGxpdCgnLycpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS50b1NsdWcnLCBkYXRhLCBwYXRocyk7XHJcblx0XHRyZXR1cm4gcGF0aHMuY29uY2F0KGRhdGFzKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0b1BhcmFtcyhkYXRhOiBhbnkpOiBhbnkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZGF0YTogd2luZG93LmJ0b2EoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHRvRGF0YShwYXJhbXM6IGFueSk6IGFueSB7XHJcblx0XHRpZiAocGFyYW1zICYmIHBhcmFtcy5kYXRhKSB7XHJcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5hdG9iKHBhcmFtcy5kYXRhKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKlxyXG5cdHB1YmxpYyBnZXRQYXJhbXMoKTogT2JzZXJ2YWJsZTxDb21wb25lbnRGYWN0b3J5PFBhZ2VDb21wb25lbnQ+PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXHJcblx0XHRcdGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIEFjdGl2YXRpb25FbmQpLFxyXG5cdFx0XHRtYXAoKCkgPT4gdGhpcy5yb3V0ZSksXHJcblx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcblx0XHRcdG1hcChyb3V0ZSA9PiByb3V0ZS5maXJzdENoaWxkKSxcclxuXHRcdFx0c3dpdGNoTWFwKHJvdXRlID0+IHJvdXRlLnBhcmFtcyksXHJcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy50b0RhdGEoeCkpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0Ki9cclxuXHJcblx0cHVibGljIHNldExhbmd1YWdlKGxhbmc6IHN0cmluZywgc2lsZW50PzogYm9vbGVhbikge1xyXG5cdFx0dGhpcy5sYW5nID0gbGFuZztcclxuXHRcdGlmICh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZyAmJiB0aGlzLnBhdGgpIHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5zZXRMYW5ndWFnZScsIHRoaXMucGF0aCwgdGhpcy5fbGFuZywgbGFuZywgc2lsZW50KTtcclxuXHRcdFx0aWYgKHNpbGVudCkge1xyXG5cdFx0XHRcdHRoaXMubG9jYXRpb24ucmVwbGFjZVN0YXRlKHRoaXMucGF0aCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucGF0aF0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBQUklWQVRFIE1FVEhPRFNcclxuXHJcblx0cHJpdmF0ZSBzZXRMYW5ndWFnZXMoKSB7XHJcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuYWRkTGFuZ3ModGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmxhbmd1YWdlcyA/IHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5sYW5ndWFnZXMubWFwKHggPT4geC5sYW5nKSA6IFtdKTtcclxuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXREZWZhdWx0TGFuZyh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMuZGVmYXVsdExhbmd1YWdlKTtcclxuXHRcdC8vIHRoaXMuc2V0TGFuZ3VhZ2UodGhpcy5kZXRlY3RMYW5ndWFnZSgpLCB0cnVlKTtcclxuXHRcdHRoaXMuc2V0TGFuZ3VhZ2UodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmRlZmF1bHRMYW5ndWFnZSwgdHJ1ZSk7XHJcblx0XHQvKlxyXG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGU6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZScsIGUpO1xyXG5cdFx0fSk7XHJcblx0XHQqL1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdWJzY3JpYmVUb1JvdXRlcigpIHtcclxuXHRcdHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpXHJcblx0XHQpLnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25TdGFydCkgPT4ge1xyXG5cdFx0XHRjb25zdCBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb24ubm9ybWFsaXplKGV2ZW50LnVybCkuc3BsaXQoJy8nKTtcclxuXHRcdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VNYXJrZXQpIHtcclxuXHRcdFx0XHRjb25zdCBtYXJrZXRJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bWFya2V0Jyk7XHJcblx0XHRcdFx0Y29uc3QgbWFya2V0ID0gbG9jYXRpb25bbWFya2V0SW5kZXhdO1xyXG5cdFx0XHRcdGlmIChtYXJrZXQgIT09IHRoaXMuY3VycmVudE1hcmtldCkge1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50TWFya2V0ID0gbWFya2V0O1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5zZXRNYXJrZXQnLCBtYXJrZXQsIGV2ZW50LnVybCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZykge1xyXG5cdFx0XHRcdGNvbnN0IGxhbmdJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bGFuZycpO1xyXG5cdFx0XHRcdGNvbnN0IGxhbmcgPSBsb2NhdGlvbltsYW5nSW5kZXhdO1xyXG5cdFx0XHRcdGlmIChsYW5nICE9PSB0aGlzLl9sYW5nKSB7XHJcblx0XHRcdFx0XHRjb25zdCBsYW5ndWFnZSA9IHRoaXMuX2xhbmd1YWdlcy5nZXRWYWx1ZSgpLmZpbmQoeCA9PiB4LmxhbmcgPT09IGxhbmcpO1xyXG5cdFx0XHRcdFx0dGhpcy5fbGFuZ3VhZ2UubmV4dChsYW5ndWFnZSk7XHJcblx0XHRcdFx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKGxhbmcpO1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5zZXRMYW5nJywgbGFuZywgdGhpcy5fbGFuZywgbGFuZ0luZGV4LCBsb2NhdGlvbiwgZXZlbnQudXJsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkZXRlY3RMYW5ndWFnZSgpOiBzdHJpbmcge1xyXG5cdFx0bGV0IGFjY2VwdExhbmd1YWdlOiBzdHJpbmcgPSBudWxsO1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHQvKlxyXG5cdFx0XHQvLyBzZXJ2ZXIgc2lkZSBleHByZXNzIGVuZ2luZVxyXG5cdFx0XHRhcHAuZW5naW5lKCdodG1sJywgIChfLCBvcHRpb25zLCBjYWxsYmFjaykgPT4ge1xyXG5cdFx0XHRcdGxldCBlbmdpbmUgPSBuZ0V4cHJlc3NFbmdpbmUoe1xyXG5cdFx0XHRcdFx0Ym9vdHN0cmFwOiBTZXJ2ZXJBcHBNb2R1bGUsXHJcblx0XHRcdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiAncmVxdWVzdCcsIHVzZUZhY3Rvcnk6ICgpID0+IG9wdGlvbnMucmVxIH0gXVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGVuZ2luZShfLCBvcHRpb25zLCBjYWxsYmFjaylcclxuXHRcdFx0fSlcclxuXHRcdFx0Ki9cclxuXHRcdFx0Y29uc3QgcmVxdWVzdCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdyZXF1ZXN0Jyk7XHJcblx0XHRcdGlmIChyZXF1ZXN0KSB7XHJcblx0XHRcdFx0YWNjZXB0TGFuZ3VhZ2UgPSByZXF1ZXN0LmhlYWRlcnNbJ2FjY2VwdC1sYW5ndWFnZSddO1xyXG5cdFx0XHRcdGNvbnN0IGxhbmd1YWdlczogc3RyaW5nW10gPSBhY2NlcHRMYW5ndWFnZS5tYXRjaCgvW2EtekEtWlxcLV17MiwxMH0vZykgfHwgW107XHJcblx0XHRcdFx0aWYgKGxhbmd1YWdlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRhY2NlcHRMYW5ndWFnZSA9IGxhbmd1YWdlc1swXS5zcGxpdCgnLScpWzBdO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRhY2NlcHRMYW5ndWFnZSA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0JywgcmVxdWVzdCwgJ2FjY2VwdExhbmd1YWdlJywgYWNjZXB0TGFuZ3VhZ2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuaXNQbGF0Zm9ybVNlcnZlcicsIHRoaXMucGxhdGZvcm1JZCwgYWNjZXB0TGFuZ3VhZ2UpO1xyXG5cdFx0fSBlbHNlIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdGFjY2VwdExhbmd1YWdlID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldEJyb3dzZXJMYW5nKCk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuaXNQbGF0Zm9ybUJyb3dzZXInLCB0aGlzLnBsYXRmb3JtSWQsIGFjY2VwdExhbmd1YWdlKTtcclxuXHRcdH1cclxuXHRcdGxldCBkZXRlY3RlZExhbmd1YWdlOiBzdHJpbmcgPSB0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMuZGVmYXVsdExhbmd1YWdlO1xyXG5cdFx0Y29uc3QgcmVnZXhwOiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAoJHt0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMubGFuZ3VhZ2VzID8gdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmxhbmd1YWdlcy5tYXAoeCA9PiB4LmxhbmcpLmpvaW4oJ3wnKSA6ICcnfSlgLCAnZ2knKTtcclxuXHRcdGNvbnN0IG1hdGNoID0gKGFjY2VwdExhbmd1YWdlIHx8ICcnKS5tYXRjaChyZWdleHApO1xyXG5cdFx0ZGV0ZWN0ZWRMYW5ndWFnZSA9IG1hdGNoID8gbWF0Y2hbMF0gOiBkZXRlY3RlZExhbmd1YWdlO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5kZXRlY3RMYW5ndWFnZScsIGRldGVjdGVkTGFuZ3VhZ2UpO1xyXG5cdFx0cmV0dXJuIGRldGVjdGVkTGFuZ3VhZ2U7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0VGltZSgpIHtcclxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdHJldHVybiAocGVyZm9ybWFuY2UgfHwgRGF0ZSkubm93KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCB0aW1lID0gcHJvY2Vzcy5ocnRpbWUoKTtcclxuXHRcdFx0cmV0dXJuICh0aW1lWzBdICogMWU5ICsgdGltZVsxXSkgLyAxZTY7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhcnQoKSB7XHJcblx0XHRSb3V0ZVNlcnZpY2Uuc3RhcnRUaW1lID0gdGhpcy5nZXRUaW1lKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZW5kKCkge1xyXG5cdFx0Um91dGVTZXJ2aWNlLmVuZFRpbWUgPSB0aGlzLmdldFRpbWUoKTtcclxuXHRcdGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuZW5kJywgUm91dGVTZXJ2aWNlLmVuZFRpbWUgLSBSb3V0ZVNlcnZpY2Uuc3RhcnRUaW1lKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==