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
var RouteService = /** @class */ (function () {
    function RouteService(platformId, configService, injector, translateService, location, route, router, segment) {
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
                // console.log('RouteService.set lang', lang, this.configService.options.useLang);
                if (this.configService.options.useLang) {
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
        if (this.configService.options.useMarket) {
            /** @type {?} */
            var market = this.currentMarket;
            /** @type {?} */
            var marketIndex = this.urlStrategy.split('/').indexOf(':market');
            segments.splice(marketIndex, 0, market);
        }
        if (this.configService.options.useLang) {
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
        if (this.configService.options.useMarket) {
            /** @type {?} */
            var marketIndex = this.urlStrategy.split('/').indexOf(':market');
            if (paths.length > marketIndex) {
                paths[marketIndex] = '*';
            }
        }
        if (this.configService.options.useLang) {
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
    /**
     * @return {?}
     */
    RouteService.prototype.getParams = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.router.events.pipe(filter(function (event) { return event instanceof ActivationEnd; }), map(function () { return _this.route; }), distinctUntilChanged(), map(function (route) { return route.firstChild; }), switchMap(function (route) { return route.params; }), 
        /*
        tap((params) => {
            // console.log('getParams', params);
        }),
        */
        concatMap(function (x) {
            return of(_this.toData(x));
        }));
    };
    /**
     * @param {?} lang
     * @param {?=} silent
     * @return {?}
     */
    RouteService.prototype.setLanguage = /**
     * @param {?} lang
     * @param {?=} silent
     * @return {?}
     */
    function (lang, silent) {
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
        this.translateService.addLangs(this.configService.options.languages ? this.configService.options.languages.map(function (x) { return x.lang; }) : []);
        this.translateService.setDefaultLang(this.configService.options.defaultLanguage);
        // this.setLanguage(this.detectLanguage(), true);
        this.setLanguage(this.configService.options.defaultLanguage, true);
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
            if (_this.configService.options.useMarket) {
                /** @type {?} */
                var marketIndex = _this.urlStrategy.split('/').indexOf(':market');
                /** @type {?} */
                var market = location[marketIndex];
                if (market !== _this.currentMarket) {
                    _this.currentMarket = market;
                    // console.log('RouteService.setMarket', market, event.url);
                }
            }
            if (_this.configService.options.useLang) {
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
        var detectedLanguage = this.configService.options.defaultLanguage;
        /** @type {?} */
        var regexp = new RegExp("(" + (this.configService.options.languages ? this.configService.options.languages.map(function (x) { return x.lang; }).join('|') : '') + ")", 'gi');
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
    RouteService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    RouteService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ConfigService },
        { type: Injector },
        { type: TranslateService },
        { type: Location },
        { type: ActivatedRoute },
        { type: Router },
        { type: SegmentPipe }
    ]; };
    /** @nocollapse */ RouteService.ngInjectableDef = i0.defineInjectable({ factory: function RouteService_Factory() { return new RouteService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.ConfigService), i0.inject(i0.INJECTOR), i0.inject(i2.TranslateService), i0.inject(i3.Location), i0.inject(i4.ActivatedRoute), i0.inject(i4.Router), i0.inject(i5.SegmentPipe)); }, token: RouteService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGVzL3JvdXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRixPQUFPLEVBQW9CLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQVUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakcsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUd6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7O0FBTWxFO0lBbUJDLHNCQUM4QixVQUFrQixFQUN2QyxhQUE0QixFQUM1QixRQUFrQixFQUNsQixnQkFBa0MsRUFDbEMsUUFBa0IsRUFDbEIsS0FBcUIsRUFDckIsTUFBYyxFQUNkLE9BQW9CO1FBUEMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtR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UTlDLGdCQUFnQjtnQkFUcUIsUUFBUTtnQkFFN0MsY0FBYztnQkFBMEMsTUFBTTtnQkFNOUQsV0FBVzs7O3VCQVZwQjtDQTZUQyxBQTVTRCxJQTRTQztTQXpTWSxZQUFZOzs7SUFFeEIsdUJBQXlCOztJQUN6QixxQkFBdUI7Ozs7O0lBQ3ZCLG1DQUE0Qjs7Ozs7SUFDNUIsaUNBQWlEOztJQUNqRCxnQ0FBMEU7Ozs7O0lBQzFFLGtDQUEwRTs7SUFDMUUsaUNBQThFOzs7OztJQUM5RSw2QkFBc0I7Ozs7O0lBQ3RCLDRCQUFxQjs7SUFDckIsNEJBQWtCOztJQUNsQiw4QkFBa0M7O0lBQ2xDLG1DQUF1Qzs7SUFDdkMscUNBQTZCOztJQWtEN0IsbUNBQXNFOzs7OztJQS9DckUsa0NBQStDOzs7OztJQUMvQyxxQ0FBb0M7Ozs7O0lBQ3BDLGdDQUEwQjs7Ozs7SUFDMUIsd0NBQTBDOzs7OztJQUMxQyxnQ0FBMEI7Ozs7O0lBQzFCLDZCQUE2Qjs7Ozs7SUFDN0IsOEJBQXNCOzs7OztJQUN0QiwrQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIsIExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnksIEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgQWN0aXZhdGlvbkVuZCwgTmF2aWdhdGlvblN0YXJ0LCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vcGFnZXMvcGFnZSc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vcGFnZXMvcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuLi9waXBlcy9zZWdtZW50LnBpcGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZSc7XG5cbmRlY2xhcmUgY29uc3QgQnVmZmVyO1xuZGVjbGFyZSBjb25zdCBwcm9jZXNzO1xuXG4vLyBAZHluYW1pY1xuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVTZXJ2aWNlIHtcblxuXHRzdGF0aWMgc3RhcnRUaW1lOiBudW1iZXI7XG5cdHN0YXRpYyBlbmRUaW1lOiBudW1iZXI7XG5cdHByaXZhdGUgdXJsU3RyYXRlZ3k6IHN0cmluZztcblx0cHJpdmF0ZSBfbGFuZ3VhZ2U6IGFueSA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuXHRwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2U6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuX2xhbmd1YWdlLmFzT2JzZXJ2YWJsZSgpO1xuXHRwcml2YXRlIF9sYW5ndWFnZXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxhbnk+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXHRwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2VzOiBPYnNlcnZhYmxlPGFueVtdPiA9IHRoaXMuX2xhbmd1YWdlcy5hc09ic2VydmFibGUoKTtcblx0cHJpdmF0ZSBfbGFuZzogc3RyaW5nO1xuXHRwcml2YXRlIHBhdGg6IHN0cmluZztcblx0cHVibGljIHBhZ2U6IFBhZ2U7XG5cdHB1YmxpYyBwYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPjtcblx0cHVibGljIHF1ZXJ5UGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz47XG5cdHB1YmxpYyBjdXJyZW50TWFya2V0OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcblx0XHRwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgc2VnbWVudDogU2VnbWVudFBpcGUsXG5cdCkge1xuXHRcdHRoaXMudXJsU3RyYXRlZ3kgPSB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy51cmxTdHJhdGVneTtcblx0XHR0aGlzLl9sYW5ndWFnZXMubmV4dCh0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5sYW5ndWFnZXMpO1xuXHRcdHRoaXMuY3VycmVudE1hcmtldCA9IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLmRlZmF1bHRNYXJrZXQ7XG5cdFx0dGhpcy5zZXRMYW5ndWFnZXMoKTtcblx0XHRpZiAodGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZyB8fCB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy51c2VNYXJrZXQpIHtcblx0XHRcdHRoaXMuc3Vic2NyaWJlVG9Sb3V0ZXIoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldCBsYW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuX2xhbmc7XG5cdH1cblxuXHRwcml2YXRlIHNldCBsYW5nKGxhbmc6IHN0cmluZykge1xuXHRcdGlmIChsYW5nICE9PSB0aGlzLl9sYW5nKSB7XG5cdFx0XHR0aGlzLl9sYW5nID0gbGFuZztcblx0XHRcdGNvbnN0IGxhbmd1YWdlID0gdGhpcy5fbGFuZ3VhZ2VzLmdldFZhbHVlKCkuZmluZCh4ID0+IHgubGFuZyA9PT0gbGFuZyk7XG5cdFx0XHR0aGlzLl9sYW5ndWFnZS5uZXh0KGxhbmd1YWdlKTtcblx0XHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLnNldCBsYW5nJywgbGFuZywgdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZyk7XG5cdFx0XHRpZiAodGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZykge1xuXHRcdFx0XHRjb25zdCBfbGFuZzogc3RyaW5nID0gdGhpcy5fbGFuZztcblx0XHRcdFx0bGV0IHBhdGggPSB0aGlzLmxvY2F0aW9uLnBhdGgoKTtcblx0XHRcdFx0aWYgKHBhdGguaW5kZXhPZihgLyR7X2xhbmd9YCkgPT09IDApIHtcblx0XHRcdFx0XHRwYXRoID0gcGF0aC5yZXBsYWNlKGAvJHtfbGFuZ31gLCBgLyR7bGFuZ31gKTtcblx0XHRcdFx0fSBlbHNlIGlmIChwYXRoLmluZGV4T2YoYC8ke2xhbmd9YCkgIT09IDApIHtcblx0XHRcdFx0XHRwYXRoID0gYC8ke2xhbmd9YCArIHBhdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5wYXRoID0gcGF0aDtcblx0XHRcdFx0Ly8gY29uc3QgbGFuZ0luZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzpsYW5nJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldCBjdXJyZW50TGFuZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLl9sYW5nO1xuXHR9XG5cblx0cHVibGljIHBhZ2VQYXJhbXMkOiBCZWhhdmlvclN1YmplY3Q8UGFyYW1zPiA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuXHRwdWJsaWMgZ2V0UGFnZVBhcmFtcygpOiBPYnNlcnZhYmxlPFBhcmFtcz4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuZ2V0UGFnZVBhcmFtcycsIHRoaXMucm91dGVyLnVybCk7XG5cdFx0cmV0dXJuIHRoaXMucm91dGUucXVlcnlQYXJhbXMucGlwZShcblx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRzd2l0Y2hNYXAocGFyYW1zID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocGFyYW1zKTtcblx0XHRcdFx0Y29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVBhcmFtcyhwYXJhbXMpO1xuXHRcdFx0XHR0aGlzLnBhZ2VQYXJhbXMkLm5leHQocGFyc2VkKTtcblx0XHRcdFx0cmV0dXJuIG9mKHBhcnNlZCk7XG5cdFx0XHR9KSxcblx0XHRcdC8vIHRhcChwYXJhbXMgPT4gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5nZXRQYWdlUGFyYW1zJywgcGFyYW1zKSksXG5cdFx0KTtcblx0fVxuXG5cdHB1YmxpYyBwYXJzZVBhcmFtcyhwYXJhbXM6IGFueSk6IGFueSB7XG5cdFx0Y29uc3QgcGFyc2VkID0ge307XG5cdFx0T2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGsgPT4gcGFyc2VkW2tdID0gdGhpcy5wYXJzZShwYXJhbXNba10pKTtcblx0XHQvKlxuXHRcdGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xuXHRcdFx0aWYgKHR5cGVvZiAocGFyYW1zW2tleV0pID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRwYXJzZWRba2V5XSA9IHRoaXMucGFyc2UocGFyYW1zW2tleV0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFyc2VkW2tleV0gPSBwYXJhbXNba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ki9cblx0XHRyZXR1cm4gcGFyc2VkO1xuXHR9XG5cblx0cHVibGljIHNlcmlhbGl6ZVBhcmFtcyhwYXJhbXM6IGFueSkge1xuXHRcdGNvbnN0IHNlcmlhbGl6ZWQgPSB7fTtcblx0XHRPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goayA9PiBzZXJpYWxpemVkW2tdID0gdGhpcy5zZXJpYWxpemUocGFyYW1zW2tdKSk7XG5cdFx0cmV0dXJuIHNlcmlhbGl6ZWQ7XG5cdH1cblxuXHRwdWJsaWMgcGFyc2UoYmFzZTY0KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5hdG9iKGJhc2U2NCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoQnVmZmVyLmZyb20oYmFzZTY0LCAnYmFzZTY0JykudG9TdHJpbmcoJ2FzY2lpJykpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNlcmlhbGl6ZShvYmplY3QpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy5idG9hKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkob2JqZWN0KSwgJ2FzY2lpJykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXRJZCgpOiBudW1iZXIge1xuXHRcdHJldHVybiArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0U2x1ZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc2x1ZycpO1xuXHR9XG5cblx0cHVibGljIHRvUm91dGUoZGF0YTogYW55W10gfCBzdHJpbmcpOiBhbnlbXSB7XG5cdFx0Y29uc3Qgc2VnbWVudHMgPSB0aGlzLnNlZ21lbnQudHJhbnNmb3JtKGRhdGEpO1xuXHRcdGlmICh0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy51c2VNYXJrZXQpIHtcblx0XHRcdGNvbnN0IG1hcmtldDogc3RyaW5nID0gdGhpcy5jdXJyZW50TWFya2V0O1xuXHRcdFx0Y29uc3QgbWFya2V0SW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOm1hcmtldCcpO1xuXHRcdFx0c2VnbWVudHMuc3BsaWNlKG1hcmtldEluZGV4LCAwLCBtYXJrZXQpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZykge1xuXHRcdFx0Y29uc3QgbGFuZzogc3RyaW5nID0gdGhpcy5fbGFuZztcblx0XHRcdGNvbnN0IGxhbmdJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bGFuZycpO1xuXHRcdFx0c2VnbWVudHMuc3BsaWNlKGxhbmdJbmRleCwgMCwgbGFuZyk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UudG9Sb3V0ZScsIHNlZ21lbnRzKTtcblx0XHRyZXR1cm4gc2VnbWVudHM7XG5cdH1cblxuXHRwdWJsaWMgdG9TbHVnKGRhdGE6IGFueVtdIHwgc3RyaW5nKTogYW55W10ge1xuXHRcdGNvbnN0IHNlZ21lbnRzID0gdGhpcy5zZWdtZW50LnRyYW5zZm9ybShkYXRhKTtcblx0XHRsZXQgcGF0aHMgPSBzZWdtZW50cy5maWx0ZXIoeCA9PiB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHggPT09ICdzdHJpbmcnO1xuXHRcdH0pO1xuXHRcdGNvbnN0IGRhdGFzID0gc2VnbWVudHMuZmlsdGVyKHggPT4ge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB4ICE9PSAnc3RyaW5nJztcblx0XHR9KTtcblx0XHRpZiAodGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMudXNlTWFya2V0KSB7XG5cdFx0XHRjb25zdCBtYXJrZXRJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bWFya2V0Jyk7XG5cdFx0XHRpZiAocGF0aHMubGVuZ3RoID4gbWFya2V0SW5kZXgpIHtcblx0XHRcdFx0cGF0aHNbbWFya2V0SW5kZXhdID0gJyonO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZykge1xuXHRcdFx0Y29uc3QgbGFuZ0luZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzpsYW5nJyk7XG5cdFx0XHRpZiAocGF0aHMubGVuZ3RoID4gbGFuZ0luZGV4KSB7XG5cdFx0XHRcdHBhdGhzW2xhbmdJbmRleF0gPSAnKic7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHBhdGhzID0gcGF0aHMuam9pbignLycpLnJlcGxhY2UoL1xcL1xcKi9naSwgJycpLnNwbGl0KCcvJyk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS50b1NsdWcnLCBkYXRhLCBwYXRocyk7XG5cdFx0cmV0dXJuIHBhdGhzLmNvbmNhdChkYXRhcyk7XG5cdH1cblxuXHRwdWJsaWMgdG9QYXJhbXMoZGF0YTogYW55KTogYW55IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0YTogd2luZG93LmJ0b2EoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG5cdFx0fTtcblx0fVxuXG5cdHB1YmxpYyB0b0RhdGEocGFyYW1zOiBhbnkpOiBhbnkge1xuXHRcdGlmIChwYXJhbXMgJiYgcGFyYW1zLmRhdGEpIHtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5hdG9iKHBhcmFtcy5kYXRhKSk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldFBhcmFtcygpOiBPYnNlcnZhYmxlPENvbXBvbmVudEZhY3Rvcnk8UGFnZUNvbXBvbmVudD4+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG5cdFx0XHRmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBBY3RpdmF0aW9uRW5kKSxcblx0XHRcdG1hcCgoKSA9PiB0aGlzLnJvdXRlKSxcblx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRtYXAocm91dGUgPT4gcm91dGUuZmlyc3RDaGlsZCksXG5cdFx0XHRzd2l0Y2hNYXAocm91dGUgPT4gcm91dGUucGFyYW1zKSxcblx0XHRcdC8qXG5cdFx0XHR0YXAoKHBhcmFtcykgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZ2V0UGFyYW1zJywgcGFyYW1zKTtcblx0XHRcdH0pLFxuXHRcdFx0Ki9cblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMudG9EYXRhKHgpKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdHB1YmxpYyBzZXRMYW5ndWFnZShsYW5nOiBzdHJpbmcsIHNpbGVudD86IGJvb2xlYW4pIHtcblx0XHR0aGlzLmxhbmcgPSBsYW5nO1xuXHRcdGlmICh0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy51c2VMYW5nICYmIHRoaXMucGF0aCkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5zZXRMYW5ndWFnZScsIHRoaXMucGF0aCwgdGhpcy5fbGFuZywgbGFuZywgc2lsZW50KTtcblx0XHRcdGlmIChzaWxlbnQpIHtcblx0XHRcdFx0dGhpcy5sb2NhdGlvbi5yZXBsYWNlU3RhdGUodGhpcy5wYXRoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnBhdGhdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBQUklWQVRFIE1FVEhPRFNcblxuXHRwcml2YXRlIHNldExhbmd1YWdlcygpIHtcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuYWRkTGFuZ3ModGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMubGFuZ3VhZ2VzID8gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMubGFuZ3VhZ2VzLm1hcCh4ID0+IHgubGFuZykgOiBbXSk7XG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLmRlZmF1bHRMYW5ndWFnZSk7XG5cdFx0Ly8gdGhpcy5zZXRMYW5ndWFnZSh0aGlzLmRldGVjdExhbmd1YWdlKCksIHRydWUpO1xuXHRcdHRoaXMuc2V0TGFuZ3VhZ2UodGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMuZGVmYXVsdExhbmd1YWdlLCB0cnVlKTtcblx0XHQvKlxuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChlOiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlJywgZSk7XG5cdFx0fSk7XG5cdFx0Ki9cblx0fVxuXG5cdHByaXZhdGUgc3Vic2NyaWJlVG9Sb3V0ZXIoKSB7XG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG5cdFx0XHRmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpXG5cdFx0KS5zdWJzY3JpYmUoKGV2ZW50OiBOYXZpZ2F0aW9uU3RhcnQpID0+IHtcblx0XHRcdGNvbnN0IGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbi5ub3JtYWxpemUoZXZlbnQudXJsKS5zcGxpdCgnLycpO1xuXHRcdFx0aWYgKHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnVzZU1hcmtldCkge1xuXHRcdFx0XHRjb25zdCBtYXJrZXRJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bWFya2V0Jyk7XG5cdFx0XHRcdGNvbnN0IG1hcmtldCA9IGxvY2F0aW9uW21hcmtldEluZGV4XTtcblx0XHRcdFx0aWYgKG1hcmtldCAhPT0gdGhpcy5jdXJyZW50TWFya2V0KSB7XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50TWFya2V0ID0gbWFya2V0O1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2Uuc2V0TWFya2V0JywgbWFya2V0LCBldmVudC51cmwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZykge1xuXHRcdFx0XHRjb25zdCBsYW5nSW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOmxhbmcnKTtcblx0XHRcdFx0Y29uc3QgbGFuZyA9IGxvY2F0aW9uW2xhbmdJbmRleF07XG5cdFx0XHRcdGlmIChsYW5nICE9PSB0aGlzLl9sYW5nKSB7XG5cdFx0XHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSB0aGlzLl9sYW5ndWFnZXMuZ2V0VmFsdWUoKS5maW5kKHggPT4geC5sYW5nID09PSBsYW5nKTtcblx0XHRcdFx0XHR0aGlzLl9sYW5ndWFnZS5uZXh0KGxhbmd1YWdlKTtcblx0XHRcdFx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKGxhbmcpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2Uuc2V0TGFuZycsIGxhbmcsIHRoaXMuX2xhbmcsIGxhbmdJbmRleCwgbG9jYXRpb24sIGV2ZW50LnVybCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZGV0ZWN0TGFuZ3VhZ2UoKTogc3RyaW5nIHtcblx0XHRsZXQgYWNjZXB0TGFuZ3VhZ2U6IHN0cmluZyA9IG51bGw7XG5cdFx0aWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0Lypcblx0XHRcdC8vIHNlcnZlciBzaWRlIGV4cHJlc3MgZW5naW5lXG5cdFx0XHRhcHAuZW5naW5lKCdodG1sJywgIChfLCBvcHRpb25zLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0XHRsZXQgZW5naW5lID0gbmdFeHByZXNzRW5naW5lKHtcblx0XHRcdFx0XHRib290c3RyYXA6IFNlcnZlckFwcE1vZHVsZSxcblx0XHRcdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiAncmVxdWVzdCcsIHVzZUZhY3Rvcnk6ICgpID0+IG9wdGlvbnMucmVxIH0gXVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZW5naW5lKF8sIG9wdGlvbnMsIGNhbGxiYWNrKVxuXHRcdFx0fSlcblx0XHRcdCovXG5cdFx0XHRjb25zdCByZXF1ZXN0ID0gdGhpcy5pbmplY3Rvci5nZXQoJ3JlcXVlc3QnKTtcblx0XHRcdGlmIChyZXF1ZXN0KSB7XG5cdFx0XHRcdGFjY2VwdExhbmd1YWdlID0gcmVxdWVzdC5oZWFkZXJzWydhY2NlcHQtbGFuZ3VhZ2UnXTtcblx0XHRcdFx0Y29uc3QgbGFuZ3VhZ2VzOiBzdHJpbmdbXSA9IGFjY2VwdExhbmd1YWdlLm1hdGNoKC9bYS16QS1aXFwtXXsyLDEwfS9nKSB8fCBbXTtcblx0XHRcdFx0aWYgKGxhbmd1YWdlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0YWNjZXB0TGFuZ3VhZ2UgPSBsYW5ndWFnZXNbMF0uc3BsaXQoJy0nKVswXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhY2NlcHRMYW5ndWFnZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3JlcXVlc3QnLCByZXF1ZXN0LCAnYWNjZXB0TGFuZ3VhZ2UnLCBhY2NlcHRMYW5ndWFnZSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmlzUGxhdGZvcm1TZXJ2ZXInLCB0aGlzLnBsYXRmb3JtSWQsIGFjY2VwdExhbmd1YWdlKTtcblx0XHR9IGVsc2UgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGFjY2VwdExhbmd1YWdlID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldEJyb3dzZXJMYW5nKCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmlzUGxhdGZvcm1Ccm93c2VyJywgdGhpcy5wbGF0Zm9ybUlkLCBhY2NlcHRMYW5ndWFnZSk7XG5cdFx0fVxuXHRcdGxldCBkZXRlY3RlZExhbmd1YWdlOiBzdHJpbmcgPSB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5kZWZhdWx0TGFuZ3VhZ2U7XG5cdFx0Y29uc3QgcmVnZXhwOiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAoJHt0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5sYW5ndWFnZXMgPyB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5sYW5ndWFnZXMubWFwKHggPT4geC5sYW5nKS5qb2luKCd8JykgOiAnJ30pYCwgJ2dpJyk7XG5cdFx0Y29uc3QgbWF0Y2ggPSAoYWNjZXB0TGFuZ3VhZ2UgfHwgJycpLm1hdGNoKHJlZ2V4cCk7XG5cdFx0ZGV0ZWN0ZWRMYW5ndWFnZSA9IG1hdGNoID8gbWF0Y2hbMF0gOiBkZXRlY3RlZExhbmd1YWdlO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuZGV0ZWN0TGFuZ3VhZ2UnLCBkZXRlY3RlZExhbmd1YWdlKTtcblx0XHRyZXR1cm4gZGV0ZWN0ZWRMYW5ndWFnZTtcblx0fVxuXG5cdHB1YmxpYyBnZXRUaW1lKCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRyZXR1cm4gKHBlcmZvcm1hbmNlIHx8IERhdGUpLm5vdygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCB0aW1lID0gcHJvY2Vzcy5ocnRpbWUoKTtcblx0XHRcdHJldHVybiAodGltZVswXSAqIDFlOSArIHRpbWVbMV0pIC8gMWU2O1xuXHRcdH1cblx0fVxuXG59XG4iXX0=