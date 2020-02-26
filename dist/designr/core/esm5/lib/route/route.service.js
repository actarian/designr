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
        get: function () {
            return this._lang;
        },
        set: function (lang) {
            if (lang !== this._lang) {
                this._lang = lang;
                var language = this._languages.getValue().find(function (x) { return x.lang === lang; });
                this._language.next(language);
                this.translateService.use(lang);
                // console.log('RouteService.set lang', lang, this.coreService.options.useLang);
                if (this.coreService.options.useLang) {
                    var _lang = this._lang;
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
        get: function () {
            return this._lang;
        },
        enumerable: true,
        configurable: true
    });
    RouteService.prototype.getPageParams = function () {
        var _this = this;
        // console.log('RouteService.getPageParams', this.router.url);
        return this.route.queryParams.pipe(distinctUntilChanged(), switchMap(function (params) {
            // console.log(params);
            var parsed = _this.parseParams(params);
            _this.pageParams$.next(parsed);
            return of(parsed);
        }));
    };
    RouteService.prototype.parseParams = function (params) {
        var _this = this;
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
    RouteService.prototype.serializeParams = function (params) {
        var _this = this;
        var serialized = {};
        Object.keys(params).forEach(function (k) { return serialized[k] = _this.serialize(params[k]); });
        return serialized;
    };
    RouteService.prototype.parse = function (base64) {
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
    RouteService.prototype.serialize = function (object) {
        if (isPlatformBrowser(this.platformId)) {
            return window.btoa(JSON.stringify(object));
        }
        else {
            return Buffer.from(JSON.stringify(object), 'ascii').toString('base64');
        }
    };
    RouteService.prototype.getId = function () {
        return +this.route.snapshot.paramMap.get('id');
    };
    RouteService.prototype.getSlug = function () {
        return this.route.snapshot.paramMap.get('slug');
    };
    RouteService.prototype.toRoute = function (data) {
        var segments = this.segment.transform(data);
        if (this.coreService.options.useMarket) {
            var market = this.currentMarket;
            var marketIndex = this.urlStrategy.split('/').indexOf(':market');
            segments.splice(marketIndex, 0, market);
        }
        if (this.coreService.options.useLang) {
            var lang = this._lang;
            var langIndex = this.urlStrategy.split('/').indexOf(':lang');
            segments.splice(langIndex, 0, lang);
        }
        // console.log('RouteService.toRoute', segments);
        return segments;
    };
    RouteService.prototype.toSlug = function (data) {
        var segments = this.segment.transform(data);
        var paths = segments.filter(function (x) {
            return typeof x === 'string';
        });
        var datas = segments.filter(function (x) {
            return typeof x !== 'string';
        });
        if (this.coreService.options.useMarket) {
            var marketIndex = this.urlStrategy.split('/').indexOf(':market');
            if (paths.length > marketIndex) {
                paths[marketIndex] = '*';
            }
        }
        if (this.coreService.options.useLang) {
            var langIndex = this.urlStrategy.split('/').indexOf(':lang');
            if (paths.length > langIndex) {
                paths[langIndex] = '*';
            }
        }
        paths = paths.join('/').replace(/\/\*/gi, '').split('/');
        // console.log('RouteService.toSlug', data, paths);
        return paths.concat(datas);
    };
    RouteService.prototype.toParams = function (data) {
        return {
            data: window.btoa(JSON.stringify(data))
        };
    };
    RouteService.prototype.toData = function (params) {
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
    RouteService.prototype.setLanguage = function (lang, silent) {
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
    RouteService.prototype.setLanguages = function () {
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
    RouteService.prototype.subscribeToRouter = function () {
        var _this = this;
        this.router.events.pipe(filter(function (event) { return event instanceof NavigationStart; })).subscribe(function (event) {
            var location = _this.location.normalize(event.url).split('/');
            if (_this.coreService.options.useMarket) {
                var marketIndex = _this.urlStrategy.split('/').indexOf(':market');
                var market = location[marketIndex];
                if (market !== _this.currentMarket) {
                    _this.currentMarket = market;
                    // console.log('RouteService.setMarket', market, event.url);
                }
            }
            if (_this.coreService.options.useLang) {
                var langIndex = _this.urlStrategy.split('/').indexOf(':lang');
                var lang_1 = location[langIndex];
                if (lang_1 !== _this._lang) {
                    var language = _this._languages.getValue().find(function (x) { return x.lang === lang_1; });
                    _this._language.next(language);
                    _this.translateService.use(lang_1);
                    // console.log('RouteService.setLang', lang, this._lang, langIndex, location, event.url);
                }
            }
        });
    };
    RouteService.prototype.detectLanguage = function () {
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
            var request = this.injector.get('request');
            if (request) {
                acceptLanguage = request.headers['accept-language'];
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
        var detectedLanguage = this.coreService.options.defaultLanguage;
        var regexp = new RegExp("(" + (this.coreService.options.languages ? this.coreService.options.languages.map(function (x) { return x.lang; }).join('|') : '') + ")", 'gi');
        var match = (acceptLanguage || '').match(regexp);
        detectedLanguage = match ? match[0] : detectedLanguage;
        // console.log('RouteService.detectLanguage', detectedLanguage);
        return detectedLanguage;
    };
    RouteService.prototype.getTime = function () {
        if (isPlatformBrowser(this.platformId)) {
            return (performance || Date).now();
        }
        else {
            var time = process.hrtime();
            return (time[0] * 1e9 + time[1]) / 1e6;
        }
    };
    RouteService.prototype.start = function () {
        RouteService.startTime = this.getTime();
    };
    RouteService.prototype.end = function () {
        RouteService.endTime = this.getTime();
        console.log('RouteService.end', RouteService.endTime - RouteService.startTime);
    };
    RouteService.ɵfac = function RouteService_Factory(t) { return new (t || RouteService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i1.CoreService), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i2.TranslateService), i0.ɵɵinject(i3.Location), i0.ɵɵinject(i4.ActivatedRoute), i0.ɵɵinject(i4.Router), i0.ɵɵinject(i5.SegmentPipe)); };
    RouteService.ɵprov = i0.ɵɵdefineInjectable({ token: RouteService, factory: RouteService.ɵfac, providedIn: 'root' });
    return RouteService;
}());
export { RouteService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RouteService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.CoreService }, { type: i0.Injector }, { type: i2.TranslateService }, { type: i3.Location }, { type: i4.ActivatedRoute }, { type: i4.Router }, { type: i5.SegmentPipe }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGUvcm91dGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBVSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7QUFLbEUsV0FBVztBQUNYO0lBa0JDLHNCQUM4QixVQUFrQixFQUN2QyxXQUF3QixFQUN4QixRQUFrQixFQUNsQixnQkFBNkMsRUFDN0MsUUFBa0IsRUFDbEIsS0FBcUIsRUFDckIsTUFBYyxFQUNkLE9BQW9CO1FBUEMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkI7UUFDN0MsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FB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c1BsYXRmb3JtQnJvd3NlciwgaXNQbGF0Zm9ybVNlcnZlciwgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uU3RhcnQsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBTZWdtZW50UGlwZSB9IGZyb20gJy4uL3BpcGVzL3NlZ21lbnQucGlwZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGUgfSBmcm9tICcuLi90cmFuc2xhdGUvdHJhbnNsYXRlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGUvdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5kZWNsYXJlIGNvbnN0IEJ1ZmZlcjtcbmRlY2xhcmUgY29uc3QgcHJvY2VzcztcblxuLy8gQGR5bmFtaWNcbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRlU2VydmljZSB7XG5cblx0c3RhdGljIHN0YXJ0VGltZTogbnVtYmVyO1xuXHRzdGF0aWMgZW5kVGltZTogbnVtYmVyO1xuXHRwcml2YXRlIHVybFN0cmF0ZWd5OiBzdHJpbmc7XG5cdHByaXZhdGUgX2xhbmd1YWdlOiBhbnkgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcblx0cHVibGljIHJlYWRvbmx5IGxhbmd1YWdlOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLl9sYW5ndWFnZS5hc09ic2VydmFibGUoKTtcblx0cHJpdmF0ZSBfbGFuZ3VhZ2VzOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8YW55Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblx0cHVibGljIHJlYWRvbmx5IGxhbmd1YWdlczogT2JzZXJ2YWJsZTxhbnlbXT4gPSB0aGlzLl9sYW5ndWFnZXMuYXNPYnNlcnZhYmxlKCk7XG5cdHByaXZhdGUgX2xhbmc6IHN0cmluZztcblx0cHJpdmF0ZSBwYXRoOiBzdHJpbmc7XG5cdHB1YmxpYyBwYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPjtcblx0cHVibGljIHF1ZXJ5UGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz47XG5cdHB1YmxpYyBjdXJyZW50TWFya2V0OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBjb3JlU2VydmljZTogQ29yZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0cHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlPFRyYW5zbGF0ZT4sXG5cdFx0cHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIHNlZ21lbnQ6IFNlZ21lbnRQaXBlLFxuXHQpIHtcblx0XHR0aGlzLnVybFN0cmF0ZWd5ID0gdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVybFN0cmF0ZWd5O1xuXHRcdHRoaXMuX2xhbmd1YWdlcy5uZXh0KHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5sYW5ndWFnZXMpO1xuXHRcdHRoaXMuY3VycmVudE1hcmtldCA9IHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5kZWZhdWx0TWFya2V0O1xuXHRcdHRoaXMuc2V0TGFuZ3VhZ2VzKCk7XG5cdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VMYW5nIHx8IHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VNYXJrZXQpIHtcblx0XHRcdHRoaXMuc3Vic2NyaWJlVG9Sb3V0ZXIoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldCBsYW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuX2xhbmc7XG5cdH1cblxuXHRwcml2YXRlIHNldCBsYW5nKGxhbmc6IHN0cmluZykge1xuXHRcdGlmIChsYW5nICE9PSB0aGlzLl9sYW5nKSB7XG5cdFx0XHR0aGlzLl9sYW5nID0gbGFuZztcblx0XHRcdGNvbnN0IGxhbmd1YWdlID0gdGhpcy5fbGFuZ3VhZ2VzLmdldFZhbHVlKCkuZmluZCh4ID0+IHgubGFuZyA9PT0gbGFuZyk7XG5cdFx0XHR0aGlzLl9sYW5ndWFnZS5uZXh0KGxhbmd1YWdlKTtcblx0XHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLnNldCBsYW5nJywgbGFuZywgdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZUxhbmcpO1xuXHRcdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VMYW5nKSB7XG5cdFx0XHRcdGNvbnN0IF9sYW5nOiBzdHJpbmcgPSB0aGlzLl9sYW5nO1xuXHRcdFx0XHRsZXQgcGF0aCA9IHRoaXMubG9jYXRpb24ucGF0aCgpO1xuXHRcdFx0XHRpZiAocGF0aC5pbmRleE9mKGAvJHtfbGFuZ31gKSA9PT0gMCkge1xuXHRcdFx0XHRcdHBhdGggPSBwYXRoLnJlcGxhY2UoYC8ke19sYW5nfWAsIGAvJHtsYW5nfWApO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHBhdGguaW5kZXhPZihgLyR7bGFuZ31gKSAhPT0gMCkge1xuXHRcdFx0XHRcdHBhdGggPSBgLyR7bGFuZ31gICsgcGF0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnBhdGggPSBwYXRoO1xuXHRcdFx0XHQvLyBjb25zdCBsYW5nSW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOmxhbmcnKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0IGN1cnJlbnRMYW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuX2xhbmc7XG5cdH1cblxuXHRwdWJsaWMgcGFnZVBhcmFtcyQ6IEJlaGF2aW9yU3ViamVjdDxQYXJhbXM+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG5cdHB1YmxpYyBnZXRQYWdlUGFyYW1zKCk6IE9ic2VydmFibGU8UGFyYW1zPiB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5nZXRQYWdlUGFyYW1zJywgdGhpcy5yb3V0ZXIudXJsKTtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuXHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdHN3aXRjaE1hcChwYXJhbXMgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhwYXJhbXMpO1xuXHRcdFx0XHRjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlUGFyYW1zKHBhcmFtcyk7XG5cdFx0XHRcdHRoaXMucGFnZVBhcmFtcyQubmV4dChwYXJzZWQpO1xuXHRcdFx0XHRyZXR1cm4gb2YocGFyc2VkKTtcblx0XHRcdH0pLFxuXHRcdFx0Ly8gdGFwKHBhcmFtcyA9PiBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmdldFBhZ2VQYXJhbXMnLCBwYXJhbXMpKSxcblx0XHQpO1xuXHR9XG5cblx0cHVibGljIHBhcnNlUGFyYW1zKHBhcmFtczogYW55KTogYW55IHtcblx0XHRjb25zdCBwYXJzZWQgPSB7fTtcblx0XHRPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goayA9PiBwYXJzZWRba10gPSB0aGlzLnBhcnNlKHBhcmFtc1trXSkpO1xuXHRcdC8qXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XG5cdFx0XHRpZiAodHlwZW9mIChwYXJhbXNba2V5XSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHBhcnNlZFtrZXldID0gdGhpcy5wYXJzZShwYXJhbXNba2V5XSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXJzZWRba2V5XSA9IHBhcmFtc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQqL1xuXHRcdHJldHVybiBwYXJzZWQ7XG5cdH1cblxuXHRwdWJsaWMgc2VyaWFsaXplUGFyYW1zKHBhcmFtczogYW55KSB7XG5cdFx0Y29uc3Qgc2VyaWFsaXplZCA9IHt9O1xuXHRcdE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrID0+IHNlcmlhbGl6ZWRba10gPSB0aGlzLnNlcmlhbGl6ZShwYXJhbXNba10pKTtcblx0XHRyZXR1cm4gc2VyaWFsaXplZDtcblx0fVxuXG5cdHB1YmxpYyBwYXJzZShiYXNlNjQpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmF0b2IoYmFzZTY0KSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShCdWZmZXIuZnJvbShiYXNlNjQsICdiYXNlNjQnKS50b1N0cmluZygnYXNjaWknKSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc2VyaWFsaXplKG9iamVjdCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93LmJ0b2EoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBCdWZmZXIuZnJvbShKU09OLnN0cmluZ2lmeShvYmplY3QpLCAnYXNjaWknKS50b1N0cmluZygnYmFzZTY0Jyk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldElkKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcblx0fVxuXG5cdHB1YmxpYyBnZXRTbHVnKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzbHVnJyk7XG5cdH1cblxuXHRwdWJsaWMgdG9Sb3V0ZShkYXRhOiBhbnlbXSB8IHN0cmluZyk6IGFueVtdIHtcblx0XHRjb25zdCBzZWdtZW50cyA9IHRoaXMuc2VnbWVudC50cmFuc2Zvcm0oZGF0YSk7XG5cdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VNYXJrZXQpIHtcblx0XHRcdGNvbnN0IG1hcmtldDogc3RyaW5nID0gdGhpcy5jdXJyZW50TWFya2V0O1xuXHRcdFx0Y29uc3QgbWFya2V0SW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOm1hcmtldCcpO1xuXHRcdFx0c2VnbWVudHMuc3BsaWNlKG1hcmtldEluZGV4LCAwLCBtYXJrZXQpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZUxhbmcpIHtcblx0XHRcdGNvbnN0IGxhbmc6IHN0cmluZyA9IHRoaXMuX2xhbmc7XG5cdFx0XHRjb25zdCBsYW5nSW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOmxhbmcnKTtcblx0XHRcdHNlZ21lbnRzLnNwbGljZShsYW5nSW5kZXgsIDAsIGxhbmcpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLnRvUm91dGUnLCBzZWdtZW50cyk7XG5cdFx0cmV0dXJuIHNlZ21lbnRzO1xuXHR9XG5cblx0cHVibGljIHRvU2x1ZyhkYXRhOiBhbnlbXSB8IHN0cmluZyk6IGFueVtdIHtcblx0XHRjb25zdCBzZWdtZW50cyA9IHRoaXMuc2VnbWVudC50cmFuc2Zvcm0oZGF0YSk7XG5cdFx0bGV0IHBhdGhzID0gc2VnbWVudHMuZmlsdGVyKHggPT4ge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJztcblx0XHR9KTtcblx0XHRjb25zdCBkYXRhcyA9IHNlZ21lbnRzLmZpbHRlcih4ID0+IHtcblx0XHRcdHJldHVybiB0eXBlb2YgeCAhPT0gJ3N0cmluZyc7XG5cdFx0fSk7XG5cdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VNYXJrZXQpIHtcblx0XHRcdGNvbnN0IG1hcmtldEluZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzptYXJrZXQnKTtcblx0XHRcdGlmIChwYXRocy5sZW5ndGggPiBtYXJrZXRJbmRleCkge1xuXHRcdFx0XHRwYXRoc1ttYXJrZXRJbmRleF0gPSAnKic7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZykge1xuXHRcdFx0Y29uc3QgbGFuZ0luZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzpsYW5nJyk7XG5cdFx0XHRpZiAocGF0aHMubGVuZ3RoID4gbGFuZ0luZGV4KSB7XG5cdFx0XHRcdHBhdGhzW2xhbmdJbmRleF0gPSAnKic7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHBhdGhzID0gcGF0aHMuam9pbignLycpLnJlcGxhY2UoL1xcL1xcKi9naSwgJycpLnNwbGl0KCcvJyk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS50b1NsdWcnLCBkYXRhLCBwYXRocyk7XG5cdFx0cmV0dXJuIHBhdGhzLmNvbmNhdChkYXRhcyk7XG5cdH1cblxuXHRwdWJsaWMgdG9QYXJhbXMoZGF0YTogYW55KTogYW55IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0YTogd2luZG93LmJ0b2EoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG5cdFx0fTtcblx0fVxuXG5cdHB1YmxpYyB0b0RhdGEocGFyYW1zOiBhbnkpOiBhbnkge1xuXHRcdGlmIChwYXJhbXMgJiYgcGFyYW1zLmRhdGEpIHtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5hdG9iKHBhcmFtcy5kYXRhKSk7XG5cdFx0fVxuXHR9XG5cblx0Lypcblx0cHVibGljIGdldFBhcmFtcygpOiBPYnNlcnZhYmxlPENvbXBvbmVudEZhY3Rvcnk8UGFnZUNvbXBvbmVudD4+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG5cdFx0XHRmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBBY3RpdmF0aW9uRW5kKSxcblx0XHRcdG1hcCgoKSA9PiB0aGlzLnJvdXRlKSxcblx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRtYXAocm91dGUgPT4gcm91dGUuZmlyc3RDaGlsZCksXG5cdFx0XHRzd2l0Y2hNYXAocm91dGUgPT4gcm91dGUucGFyYW1zKSxcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMudG9EYXRhKHgpKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXHQqL1xuXG5cdHB1YmxpYyBzZXRMYW5ndWFnZShsYW5nOiBzdHJpbmcsIHNpbGVudD86IGJvb2xlYW4pIHtcblx0XHR0aGlzLmxhbmcgPSBsYW5nO1xuXHRcdGlmICh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZyAmJiB0aGlzLnBhdGgpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2Uuc2V0TGFuZ3VhZ2UnLCB0aGlzLnBhdGgsIHRoaXMuX2xhbmcsIGxhbmcsIHNpbGVudCk7XG5cdFx0XHRpZiAoc2lsZW50KSB7XG5cdFx0XHRcdHRoaXMubG9jYXRpb24ucmVwbGFjZVN0YXRlKHRoaXMucGF0aCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5wYXRoXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUFJJVkFURSBNRVRIT0RTXG5cblx0cHJpdmF0ZSBzZXRMYW5ndWFnZXMoKSB7XG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLmFkZExhbmdzKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5sYW5ndWFnZXMgPyB0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMubGFuZ3VhZ2VzLm1hcCh4ID0+IHgubGFuZykgOiBbXSk7XG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5kZWZhdWx0TGFuZ3VhZ2UpO1xuXHRcdC8vIHRoaXMuc2V0TGFuZ3VhZ2UodGhpcy5kZXRlY3RMYW5ndWFnZSgpLCB0cnVlKTtcblx0XHR0aGlzLnNldExhbmd1YWdlKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5kZWZhdWx0TGFuZ3VhZ2UsIHRydWUpO1xuXHRcdC8qXG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGU6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5vbkxhbmdDaGFuZ2UnLCBlKTtcblx0XHR9KTtcblx0XHQqL1xuXHR9XG5cblx0cHJpdmF0ZSBzdWJzY3JpYmVUb1JvdXRlcigpIHtcblx0XHR0aGlzLnJvdXRlci5ldmVudHMucGlwZShcblx0XHRcdGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydClcblx0XHQpLnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25TdGFydCkgPT4ge1xuXHRcdFx0Y29uc3QgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uLm5vcm1hbGl6ZShldmVudC51cmwpLnNwbGl0KCcvJyk7XG5cdFx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZU1hcmtldCkge1xuXHRcdFx0XHRjb25zdCBtYXJrZXRJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bWFya2V0Jyk7XG5cdFx0XHRcdGNvbnN0IG1hcmtldCA9IGxvY2F0aW9uW21hcmtldEluZGV4XTtcblx0XHRcdFx0aWYgKG1hcmtldCAhPT0gdGhpcy5jdXJyZW50TWFya2V0KSB7XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50TWFya2V0ID0gbWFya2V0O1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2Uuc2V0TWFya2V0JywgbWFya2V0LCBldmVudC51cmwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZUxhbmcpIHtcblx0XHRcdFx0Y29uc3QgbGFuZ0luZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzpsYW5nJyk7XG5cdFx0XHRcdGNvbnN0IGxhbmcgPSBsb2NhdGlvbltsYW5nSW5kZXhdO1xuXHRcdFx0XHRpZiAobGFuZyAhPT0gdGhpcy5fbGFuZykge1xuXHRcdFx0XHRcdGNvbnN0IGxhbmd1YWdlID0gdGhpcy5fbGFuZ3VhZ2VzLmdldFZhbHVlKCkuZmluZCh4ID0+IHgubGFuZyA9PT0gbGFuZyk7XG5cdFx0XHRcdFx0dGhpcy5fbGFuZ3VhZ2UubmV4dChsYW5ndWFnZSk7XG5cdFx0XHRcdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLnNldExhbmcnLCBsYW5nLCB0aGlzLl9sYW5nLCBsYW5nSW5kZXgsIGxvY2F0aW9uLCBldmVudC51cmwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGRldGVjdExhbmd1YWdlKCk6IHN0cmluZyB7XG5cdFx0bGV0IGFjY2VwdExhbmd1YWdlOiBzdHJpbmcgPSBudWxsO1xuXHRcdGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdC8qXG5cdFx0XHQvLyBzZXJ2ZXIgc2lkZSBleHByZXNzIGVuZ2luZVxuXHRcdFx0YXBwLmVuZ2luZSgnaHRtbCcsICAoXywgb3B0aW9ucywgY2FsbGJhY2spID0+IHtcblx0XHRcdFx0bGV0IGVuZ2luZSA9IG5nRXhwcmVzc0VuZ2luZSh7XG5cdFx0XHRcdFx0Ym9vdHN0cmFwOiBTZXJ2ZXJBcHBNb2R1bGUsXG5cdFx0XHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogJ3JlcXVlc3QnLCB1c2VGYWN0b3J5OiAoKSA9PiBvcHRpb25zLnJlcSB9IF1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGVuZ2luZShfLCBvcHRpb25zLCBjYWxsYmFjaylcblx0XHRcdH0pXG5cdFx0XHQqL1xuXHRcdFx0Y29uc3QgcmVxdWVzdCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdyZXF1ZXN0Jyk7XG5cdFx0XHRpZiAocmVxdWVzdCkge1xuXHRcdFx0XHRhY2NlcHRMYW5ndWFnZSA9IHJlcXVlc3QuaGVhZGVyc1snYWNjZXB0LWxhbmd1YWdlJ107XG5cdFx0XHRcdGNvbnN0IGxhbmd1YWdlczogc3RyaW5nW10gPSBhY2NlcHRMYW5ndWFnZS5tYXRjaCgvW2EtekEtWlxcLV17MiwxMH0vZykgfHwgW107XG5cdFx0XHRcdGlmIChsYW5ndWFnZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGFjY2VwdExhbmd1YWdlID0gbGFuZ3VhZ2VzWzBdLnNwbGl0KCctJylbMF07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWNjZXB0TGFuZ3VhZ2UgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0JywgcmVxdWVzdCwgJ2FjY2VwdExhbmd1YWdlJywgYWNjZXB0TGFuZ3VhZ2UpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5pc1BsYXRmb3JtU2VydmVyJywgdGhpcy5wbGF0Zm9ybUlkLCBhY2NlcHRMYW5ndWFnZSk7XG5cdFx0fSBlbHNlIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRhY2NlcHRMYW5ndWFnZSA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRCcm93c2VyTGFuZygpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5pc1BsYXRmb3JtQnJvd3NlcicsIHRoaXMucGxhdGZvcm1JZCwgYWNjZXB0TGFuZ3VhZ2UpO1xuXHRcdH1cblx0XHRsZXQgZGV0ZWN0ZWRMYW5ndWFnZTogc3RyaW5nID0gdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmRlZmF1bHRMYW5ndWFnZTtcblx0XHRjb25zdCByZWdleHA6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCgke3RoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5sYW5ndWFnZXMgPyB0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMubGFuZ3VhZ2VzLm1hcCh4ID0+IHgubGFuZykuam9pbignfCcpIDogJyd9KWAsICdnaScpO1xuXHRcdGNvbnN0IG1hdGNoID0gKGFjY2VwdExhbmd1YWdlIHx8ICcnKS5tYXRjaChyZWdleHApO1xuXHRcdGRldGVjdGVkTGFuZ3VhZ2UgPSBtYXRjaCA/IG1hdGNoWzBdIDogZGV0ZWN0ZWRMYW5ndWFnZTtcblx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmRldGVjdExhbmd1YWdlJywgZGV0ZWN0ZWRMYW5ndWFnZSk7XG5cdFx0cmV0dXJuIGRldGVjdGVkTGFuZ3VhZ2U7XG5cdH1cblxuXHRwdWJsaWMgZ2V0VGltZSgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0cmV0dXJuIChwZXJmb3JtYW5jZSB8fCBEYXRlKS5ub3coKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG5cdFx0XHRyZXR1cm4gKHRpbWVbMF0gKiAxZTkgKyB0aW1lWzFdKSAvIDFlNjtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc3RhcnQoKSB7XG5cdFx0Um91dGVTZXJ2aWNlLnN0YXJ0VGltZSA9IHRoaXMuZ2V0VGltZSgpO1xuXHR9XG5cblx0cHVibGljIGVuZCgpIHtcblx0XHRSb3V0ZVNlcnZpY2UuZW5kVGltZSA9IHRoaXMuZ2V0VGltZSgpO1xuXHRcdGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuZW5kJywgUm91dGVTZXJ2aWNlLmVuZFRpbWUgLSBSb3V0ZVNlcnZpY2Uuc3RhcnRUaW1lKTtcblx0fVxuXG59XG4iXX0=