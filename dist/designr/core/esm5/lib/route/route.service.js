/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                var language = this._languages.getValue().find(function (x) { return x.lang === lang; });
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
        return this.route.queryParams.pipe(distinctUntilChanged(), switchMap(function (params) {
            // console.log(params);
            /** @type {?} */
            var parsed = _this.parseParams(params);
            _this.pageParams$.next(parsed);
            return of(parsed);
        }));
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
        Object.keys(params).forEach(function (k) { return parsed[k] = _this.parse(params[k]); });
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
        Object.keys(params).forEach(function (k) { return serialized[k] = _this.serialize(params[k]); });
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
        var paths = segments.filter(function (x) {
            return typeof x === 'string';
        });
        /** @type {?} */
        var datas = segments.filter(function (x) {
            return typeof x !== 'string';
        });
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
        this.translateService.addLangs(this.coreService.options.languages ? this.coreService.options.languages.map(function (x) { return x.lang; }) : []);
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
        this.router.events.pipe(filter(function (event) { return event instanceof NavigationStart; })).subscribe(function (event) {
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
                    var language = _this._languages.getValue().find(function (x) { return x.lang === lang_1; });
                    _this._language.next(language);
                    _this.translateService.use(lang_1);
                    // console.log('RouteService.setLang', lang, this._lang, langIndex, location, event.url);
                }
            }
        });
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
        var regexp = new RegExp("(" + (this.coreService.options.languages ? this.coreService.options.languages.map(function (x) { return x.lang; }).join('|') : '') + ")", 'gi');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGUvcm91dGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQVUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7OztBQU1sRTtJQWtCQyxzQkFDOEIsVUFBa0IsRUFDdkMsV0FBd0IsRUFDeEIsUUFBa0IsRUFDbEIsZ0JBQTZDLEVBQzdDLFFBQWtCLEVBQ2xCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxPQUFvQjtRQVBDLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTZCO1FBQzdDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFlB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SUFDdEIsNEJBQXFCOztJQUNyQiw4QkFBa0M7O0lBQ2xDLG1DQUF1Qzs7SUFDdkMscUNBQTZCOztJQWtEN0IsbUNBQXNFOzs7OztJQS9DckUsa0NBQStDOzs7OztJQUMvQyxtQ0FBZ0M7Ozs7O0lBQ2hDLGdDQUEwQjs7Ozs7SUFDMUIsd0NBQXFEOzs7OztJQUNyRCxnQ0FBMEI7Ozs7O0lBQzFCLDZCQUE2Qjs7Ozs7SUFDN0IsOEJBQXNCOzs7OztJQUN0QiwrQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIsIExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvblN0YXJ0LCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3JlU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuLi9waXBlcy9zZWdtZW50LnBpcGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSAnLi4vdHJhbnNsYXRlL3RyYW5zbGF0ZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vdHJhbnNsYXRlL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuZGVjbGFyZSBjb25zdCBCdWZmZXI7XG5kZWNsYXJlIGNvbnN0IHByb2Nlc3M7XG5cbi8vIEBkeW5hbWljXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZVNlcnZpY2Uge1xuXG5cdHN0YXRpYyBzdGFydFRpbWU6IG51bWJlcjtcblx0c3RhdGljIGVuZFRpbWU6IG51bWJlcjtcblx0cHJpdmF0ZSB1cmxTdHJhdGVneTogc3RyaW5nO1xuXHRwcml2YXRlIF9sYW5ndWFnZTogYW55ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG5cdHB1YmxpYyByZWFkb25seSBsYW5ndWFnZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5fbGFuZ3VhZ2UuYXNPYnNlcnZhYmxlKCk7XG5cdHByaXZhdGUgX2xhbmd1YWdlczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PGFueT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cdHB1YmxpYyByZWFkb25seSBsYW5ndWFnZXM6IE9ic2VydmFibGU8YW55W10+ID0gdGhpcy5fbGFuZ3VhZ2VzLmFzT2JzZXJ2YWJsZSgpO1xuXHRwcml2YXRlIF9sYW5nOiBzdHJpbmc7XG5cdHByaXZhdGUgcGF0aDogc3RyaW5nO1xuXHRwdWJsaWMgcGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz47XG5cdHB1YmxpYyBxdWVyeVBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuXHRwdWJsaWMgY3VycmVudE1hcmtldDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgY29yZVNlcnZpY2U6IENvcmVTZXJ2aWNlLFxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZTxUcmFuc2xhdGU+LFxuXHRcdHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBzZWdtZW50OiBTZWdtZW50UGlwZSxcblx0KSB7XG5cdFx0dGhpcy51cmxTdHJhdGVneSA9IHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51cmxTdHJhdGVneTtcblx0XHR0aGlzLl9sYW5ndWFnZXMubmV4dCh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMubGFuZ3VhZ2VzKTtcblx0XHR0aGlzLmN1cnJlbnRNYXJrZXQgPSB0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMuZGVmYXVsdE1hcmtldDtcblx0XHR0aGlzLnNldExhbmd1YWdlcygpO1xuXHRcdGlmICh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZyB8fCB0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTWFya2V0KSB7XG5cdFx0XHR0aGlzLnN1YnNjcmliZVRvUm91dGVyKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXQgbGFuZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLl9sYW5nO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXQgbGFuZyhsYW5nOiBzdHJpbmcpIHtcblx0XHRpZiAobGFuZyAhPT0gdGhpcy5fbGFuZykge1xuXHRcdFx0dGhpcy5fbGFuZyA9IGxhbmc7XG5cdFx0XHRjb25zdCBsYW5ndWFnZSA9IHRoaXMuX2xhbmd1YWdlcy5nZXRWYWx1ZSgpLmZpbmQoeCA9PiB4LmxhbmcgPT09IGxhbmcpO1xuXHRcdFx0dGhpcy5fbGFuZ3VhZ2UubmV4dChsYW5ndWFnZSk7XG5cdFx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKGxhbmcpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5zZXQgbGFuZycsIGxhbmcsIHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VMYW5nKTtcblx0XHRcdGlmICh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZykge1xuXHRcdFx0XHRjb25zdCBfbGFuZzogc3RyaW5nID0gdGhpcy5fbGFuZztcblx0XHRcdFx0bGV0IHBhdGggPSB0aGlzLmxvY2F0aW9uLnBhdGgoKTtcblx0XHRcdFx0aWYgKHBhdGguaW5kZXhPZihgLyR7X2xhbmd9YCkgPT09IDApIHtcblx0XHRcdFx0XHRwYXRoID0gcGF0aC5yZXBsYWNlKGAvJHtfbGFuZ31gLCBgLyR7bGFuZ31gKTtcblx0XHRcdFx0fSBlbHNlIGlmIChwYXRoLmluZGV4T2YoYC8ke2xhbmd9YCkgIT09IDApIHtcblx0XHRcdFx0XHRwYXRoID0gYC8ke2xhbmd9YCArIHBhdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5wYXRoID0gcGF0aDtcblx0XHRcdFx0Ly8gY29uc3QgbGFuZ0luZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzpsYW5nJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldCBjdXJyZW50TGFuZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLl9sYW5nO1xuXHR9XG5cblx0cHVibGljIHBhZ2VQYXJhbXMkOiBCZWhhdmlvclN1YmplY3Q8UGFyYW1zPiA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuXHRwdWJsaWMgZ2V0UGFnZVBhcmFtcygpOiBPYnNlcnZhYmxlPFBhcmFtcz4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuZ2V0UGFnZVBhcmFtcycsIHRoaXMucm91dGVyLnVybCk7XG5cdFx0cmV0dXJuIHRoaXMucm91dGUucXVlcnlQYXJhbXMucGlwZShcblx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRzd2l0Y2hNYXAocGFyYW1zID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocGFyYW1zKTtcblx0XHRcdFx0Y29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVBhcmFtcyhwYXJhbXMpO1xuXHRcdFx0XHR0aGlzLnBhZ2VQYXJhbXMkLm5leHQocGFyc2VkKTtcblx0XHRcdFx0cmV0dXJuIG9mKHBhcnNlZCk7XG5cdFx0XHR9KSxcblx0XHRcdC8vIHRhcChwYXJhbXMgPT4gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5nZXRQYWdlUGFyYW1zJywgcGFyYW1zKSksXG5cdFx0KTtcblx0fVxuXG5cdHB1YmxpYyBwYXJzZVBhcmFtcyhwYXJhbXM6IGFueSk6IGFueSB7XG5cdFx0Y29uc3QgcGFyc2VkID0ge307XG5cdFx0T2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGsgPT4gcGFyc2VkW2tdID0gdGhpcy5wYXJzZShwYXJhbXNba10pKTtcblx0XHQvKlxuXHRcdGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xuXHRcdFx0aWYgKHR5cGVvZiAocGFyYW1zW2tleV0pID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRwYXJzZWRba2V5XSA9IHRoaXMucGFyc2UocGFyYW1zW2tleV0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFyc2VkW2tleV0gPSBwYXJhbXNba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ki9cblx0XHRyZXR1cm4gcGFyc2VkO1xuXHR9XG5cblx0cHVibGljIHNlcmlhbGl6ZVBhcmFtcyhwYXJhbXM6IGFueSkge1xuXHRcdGNvbnN0IHNlcmlhbGl6ZWQgPSB7fTtcblx0XHRPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goayA9PiBzZXJpYWxpemVkW2tdID0gdGhpcy5zZXJpYWxpemUocGFyYW1zW2tdKSk7XG5cdFx0cmV0dXJuIHNlcmlhbGl6ZWQ7XG5cdH1cblxuXHRwdWJsaWMgcGFyc2UoYmFzZTY0KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5hdG9iKGJhc2U2NCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoQnVmZmVyLmZyb20oYmFzZTY0LCAnYmFzZTY0JykudG9TdHJpbmcoJ2FzY2lpJykpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNlcmlhbGl6ZShvYmplY3QpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy5idG9hKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkob2JqZWN0KSwgJ2FzY2lpJykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXRJZCgpOiBudW1iZXIge1xuXHRcdHJldHVybiArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0U2x1ZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc2x1ZycpO1xuXHR9XG5cblx0cHVibGljIHRvUm91dGUoZGF0YTogYW55W10gfCBzdHJpbmcpOiBhbnlbXSB7XG5cdFx0Y29uc3Qgc2VnbWVudHMgPSB0aGlzLnNlZ21lbnQudHJhbnNmb3JtKGRhdGEpO1xuXHRcdGlmICh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTWFya2V0KSB7XG5cdFx0XHRjb25zdCBtYXJrZXQ6IHN0cmluZyA9IHRoaXMuY3VycmVudE1hcmtldDtcblx0XHRcdGNvbnN0IG1hcmtldEluZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzptYXJrZXQnKTtcblx0XHRcdHNlZ21lbnRzLnNwbGljZShtYXJrZXRJbmRleCwgMCwgbWFya2V0KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VMYW5nKSB7XG5cdFx0XHRjb25zdCBsYW5nOiBzdHJpbmcgPSB0aGlzLl9sYW5nO1xuXHRcdFx0Y29uc3QgbGFuZ0luZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzpsYW5nJyk7XG5cdFx0XHRzZWdtZW50cy5zcGxpY2UobGFuZ0luZGV4LCAwLCBsYW5nKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS50b1JvdXRlJywgc2VnbWVudHMpO1xuXHRcdHJldHVybiBzZWdtZW50cztcblx0fVxuXG5cdHB1YmxpYyB0b1NsdWcoZGF0YTogYW55W10gfCBzdHJpbmcpOiBhbnlbXSB7XG5cdFx0Y29uc3Qgc2VnbWVudHMgPSB0aGlzLnNlZ21lbnQudHJhbnNmb3JtKGRhdGEpO1xuXHRcdGxldCBwYXRocyA9IHNlZ21lbnRzLmZpbHRlcih4ID0+IHtcblx0XHRcdHJldHVybiB0eXBlb2YgeCA9PT0gJ3N0cmluZyc7XG5cdFx0fSk7XG5cdFx0Y29uc3QgZGF0YXMgPSBzZWdtZW50cy5maWx0ZXIoeCA9PiB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHggIT09ICdzdHJpbmcnO1xuXHRcdH0pO1xuXHRcdGlmICh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTWFya2V0KSB7XG5cdFx0XHRjb25zdCBtYXJrZXRJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bWFya2V0Jyk7XG5cdFx0XHRpZiAocGF0aHMubGVuZ3RoID4gbWFya2V0SW5kZXgpIHtcblx0XHRcdFx0cGF0aHNbbWFya2V0SW5kZXhdID0gJyonO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZUxhbmcpIHtcblx0XHRcdGNvbnN0IGxhbmdJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bGFuZycpO1xuXHRcdFx0aWYgKHBhdGhzLmxlbmd0aCA+IGxhbmdJbmRleCkge1xuXHRcdFx0XHRwYXRoc1tsYW5nSW5kZXhdID0gJyonO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwYXRocyA9IHBhdGhzLmpvaW4oJy8nKS5yZXBsYWNlKC9cXC9cXCovZ2ksICcnKS5zcGxpdCgnLycpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UudG9TbHVnJywgZGF0YSwgcGF0aHMpO1xuXHRcdHJldHVybiBwYXRocy5jb25jYXQoZGF0YXMpO1xuXHR9XG5cblx0cHVibGljIHRvUGFyYW1zKGRhdGE6IGFueSk6IGFueSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGE6IHdpbmRvdy5idG9hKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXHRcdH07XG5cdH1cblxuXHRwdWJsaWMgdG9EYXRhKHBhcmFtczogYW55KTogYW55IHtcblx0XHRpZiAocGFyYW1zICYmIHBhcmFtcy5kYXRhKSB7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihwYXJhbXMuZGF0YSkpO1xuXHRcdH1cblx0fVxuXG5cdC8qXG5cdHB1YmxpYyBnZXRQYXJhbXMoKTogT2JzZXJ2YWJsZTxDb21wb25lbnRGYWN0b3J5PFBhZ2VDb21wb25lbnQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuXHRcdFx0ZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgQWN0aXZhdGlvbkVuZCksXG5cdFx0XHRtYXAoKCkgPT4gdGhpcy5yb3V0ZSksXG5cdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0bWFwKHJvdXRlID0+IHJvdXRlLmZpcnN0Q2hpbGQpLFxuXHRcdFx0c3dpdGNoTWFwKHJvdXRlID0+IHJvdXRlLnBhcmFtcyksXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLnRvRGF0YSh4KSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblx0Ki9cblxuXHRwdWJsaWMgc2V0TGFuZ3VhZ2UobGFuZzogc3RyaW5nLCBzaWxlbnQ/OiBib29sZWFuKSB7XG5cdFx0dGhpcy5sYW5nID0gbGFuZztcblx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZUxhbmcgJiYgdGhpcy5wYXRoKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLnNldExhbmd1YWdlJywgdGhpcy5wYXRoLCB0aGlzLl9sYW5nLCBsYW5nLCBzaWxlbnQpO1xuXHRcdFx0aWYgKHNpbGVudCkge1xuXHRcdFx0XHR0aGlzLmxvY2F0aW9uLnJlcGxhY2VTdGF0ZSh0aGlzLnBhdGgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucGF0aF0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFBSSVZBVEUgTUVUSE9EU1xuXG5cdHByaXZhdGUgc2V0TGFuZ3VhZ2VzKCkge1xuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5hZGRMYW5ncyh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMubGFuZ3VhZ2VzID8gdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmxhbmd1YWdlcy5tYXAoeCA9PiB4LmxhbmcpIDogW10pO1xuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXREZWZhdWx0TGFuZyh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMuZGVmYXVsdExhbmd1YWdlKTtcblx0XHQvLyB0aGlzLnNldExhbmd1YWdlKHRoaXMuZGV0ZWN0TGFuZ3VhZ2UoKSwgdHJ1ZSk7XG5cdFx0dGhpcy5zZXRMYW5ndWFnZSh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMuZGVmYXVsdExhbmd1YWdlLCB0cnVlKTtcblx0XHQvKlxuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChlOiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlJywgZSk7XG5cdFx0fSk7XG5cdFx0Ki9cblx0fVxuXG5cdHByaXZhdGUgc3Vic2NyaWJlVG9Sb3V0ZXIoKSB7XG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG5cdFx0XHRmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpXG5cdFx0KS5zdWJzY3JpYmUoKGV2ZW50OiBOYXZpZ2F0aW9uU3RhcnQpID0+IHtcblx0XHRcdGNvbnN0IGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbi5ub3JtYWxpemUoZXZlbnQudXJsKS5zcGxpdCgnLycpO1xuXHRcdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VNYXJrZXQpIHtcblx0XHRcdFx0Y29uc3QgbWFya2V0SW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOm1hcmtldCcpO1xuXHRcdFx0XHRjb25zdCBtYXJrZXQgPSBsb2NhdGlvblttYXJrZXRJbmRleF07XG5cdFx0XHRcdGlmIChtYXJrZXQgIT09IHRoaXMuY3VycmVudE1hcmtldCkge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudE1hcmtldCA9IG1hcmtldDtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLnNldE1hcmtldCcsIG1hcmtldCwgZXZlbnQudXJsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VMYW5nKSB7XG5cdFx0XHRcdGNvbnN0IGxhbmdJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bGFuZycpO1xuXHRcdFx0XHRjb25zdCBsYW5nID0gbG9jYXRpb25bbGFuZ0luZGV4XTtcblx0XHRcdFx0aWYgKGxhbmcgIT09IHRoaXMuX2xhbmcpIHtcblx0XHRcdFx0XHRjb25zdCBsYW5ndWFnZSA9IHRoaXMuX2xhbmd1YWdlcy5nZXRWYWx1ZSgpLmZpbmQoeCA9PiB4LmxhbmcgPT09IGxhbmcpO1xuXHRcdFx0XHRcdHRoaXMuX2xhbmd1YWdlLm5leHQobGFuZ3VhZ2UpO1xuXHRcdFx0XHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5zZXRMYW5nJywgbGFuZywgdGhpcy5fbGFuZywgbGFuZ0luZGV4LCBsb2NhdGlvbiwgZXZlbnQudXJsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBkZXRlY3RMYW5ndWFnZSgpOiBzdHJpbmcge1xuXHRcdGxldCBhY2NlcHRMYW5ndWFnZTogc3RyaW5nID0gbnVsbDtcblx0XHRpZiAoaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHQvKlxuXHRcdFx0Ly8gc2VydmVyIHNpZGUgZXhwcmVzcyBlbmdpbmVcblx0XHRcdGFwcC5lbmdpbmUoJ2h0bWwnLCAgKF8sIG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRcdGxldCBlbmdpbmUgPSBuZ0V4cHJlc3NFbmdpbmUoe1xuXHRcdFx0XHRcdGJvb3RzdHJhcDogU2VydmVyQXBwTW9kdWxlLFxuXHRcdFx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6ICdyZXF1ZXN0JywgdXNlRmFjdG9yeTogKCkgPT4gb3B0aW9ucy5yZXEgfSBdXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRlbmdpbmUoXywgb3B0aW9ucywgY2FsbGJhY2spXG5cdFx0XHR9KVxuXHRcdFx0Ki9cblx0XHRcdGNvbnN0IHJlcXVlc3QgPSB0aGlzLmluamVjdG9yLmdldCgncmVxdWVzdCcpO1xuXHRcdFx0aWYgKHJlcXVlc3QpIHtcblx0XHRcdFx0YWNjZXB0TGFuZ3VhZ2UgPSByZXF1ZXN0LmhlYWRlcnNbJ2FjY2VwdC1sYW5ndWFnZSddO1xuXHRcdFx0XHRjb25zdCBsYW5ndWFnZXM6IHN0cmluZ1tdID0gYWNjZXB0TGFuZ3VhZ2UubWF0Y2goL1thLXpBLVpcXC1dezIsMTB9L2cpIHx8IFtdO1xuXHRcdFx0XHRpZiAobGFuZ3VhZ2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRhY2NlcHRMYW5ndWFnZSA9IGxhbmd1YWdlc1swXS5zcGxpdCgnLScpWzBdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFjY2VwdExhbmd1YWdlID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygncmVxdWVzdCcsIHJlcXVlc3QsICdhY2NlcHRMYW5ndWFnZScsIGFjY2VwdExhbmd1YWdlKTtcblx0XHRcdH1cblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuaXNQbGF0Zm9ybVNlcnZlcicsIHRoaXMucGxhdGZvcm1JZCwgYWNjZXB0TGFuZ3VhZ2UpO1xuXHRcdH0gZWxzZSBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0YWNjZXB0TGFuZ3VhZ2UgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0QnJvd3NlckxhbmcoKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuaXNQbGF0Zm9ybUJyb3dzZXInLCB0aGlzLnBsYXRmb3JtSWQsIGFjY2VwdExhbmd1YWdlKTtcblx0XHR9XG5cdFx0bGV0IGRldGVjdGVkTGFuZ3VhZ2U6IHN0cmluZyA9IHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5kZWZhdWx0TGFuZ3VhZ2U7XG5cdFx0Y29uc3QgcmVnZXhwOiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAoJHt0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMubGFuZ3VhZ2VzID8gdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmxhbmd1YWdlcy5tYXAoeCA9PiB4LmxhbmcpLmpvaW4oJ3wnKSA6ICcnfSlgLCAnZ2knKTtcblx0XHRjb25zdCBtYXRjaCA9IChhY2NlcHRMYW5ndWFnZSB8fCAnJykubWF0Y2gocmVnZXhwKTtcblx0XHRkZXRlY3RlZExhbmd1YWdlID0gbWF0Y2ggPyBtYXRjaFswXSA6IGRldGVjdGVkTGFuZ3VhZ2U7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5kZXRlY3RMYW5ndWFnZScsIGRldGVjdGVkTGFuZ3VhZ2UpO1xuXHRcdHJldHVybiBkZXRlY3RlZExhbmd1YWdlO1xuXHR9XG5cblx0cHVibGljIGdldFRpbWUoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybiAocGVyZm9ybWFuY2UgfHwgRGF0ZSkubm93KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHRpbWUgPSBwcm9jZXNzLmhydGltZSgpO1xuXHRcdFx0cmV0dXJuICh0aW1lWzBdICogMWU5ICsgdGltZVsxXSkgLyAxZTY7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHN0YXJ0KCkge1xuXHRcdFJvdXRlU2VydmljZS5zdGFydFRpbWUgPSB0aGlzLmdldFRpbWUoKTtcblx0fVxuXG5cdHB1YmxpYyBlbmQoKSB7XG5cdFx0Um91dGVTZXJ2aWNlLmVuZFRpbWUgPSB0aGlzLmdldFRpbWUoKTtcblx0XHRjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmVuZCcsIFJvdXRlU2VydmljZS5lbmRUaW1lIC0gUm91dGVTZXJ2aWNlLnN0YXJ0VGltZSk7XG5cdH1cblxufVxuIl19