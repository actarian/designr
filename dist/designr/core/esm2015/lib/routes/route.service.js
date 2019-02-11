/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser, isPlatformServer, Location } from '@angular/common';
import { ComponentFactoryResolver, Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { concatMap, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
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
     * @param {?} componentFactoryResolver
     */
    constructor(platformId, configService, injector, translateService, location, route, router, segment, componentFactoryResolver) {
        this.platformId = platformId;
        this.configService = configService;
        this.injector = injector;
        this.translateService = translateService;
        this.location = location;
        this.route = route;
        this.router = router;
        this.segment = segment;
        this.componentFactoryResolver = componentFactoryResolver;
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
     * @return {?}
     */
    _unused_getPageComponentFactory() {
        return this.router.events.pipe(filter(event => event instanceof ActivationEnd), 
        /*
        tap((event) => {
            // console.log('ActivationEnd', event);
        }),
        */
        map(() => this.route), distinctUntilChanged(), map(route => route.firstChild), tap((route) => {
            this.params = route.params.pipe(concatMap(x => {
                return of(this.toData(x));
            }));
            this.queryParams = route.queryParams.pipe(
            // tap(x => console.log('queryParams', x)),
            concatMap(x => {
                return of(this.toData(x));
            }));
            // console.log('params', this.route.params);
        }), switchMap(route => route.data), map((data) => {
            if (data.pageResolver) {
                this.page = data.pageResolver.page;
                /** @type {?} */
                const factory = this.componentFactoryResolver.resolveComponentFactory(data.pageResolver.component);
                return factory;
            }
            else {
                return null;
            }
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
    { type: SegmentPipe },
    { type: ComponentFactoryResolver }
];
/** @nocollapse */ RouteService.ngInjectableDef = i0.defineInjectable({ factory: function RouteService_Factory() { return new RouteService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.ConfigService), i0.inject(i0.INJECTOR), i0.inject(i2.TranslateService), i0.inject(i3.Location), i0.inject(i4.ActivatedRoute), i0.inject(i4.Router), i0.inject(i5.SegmentPipe), i0.inject(i0.ComponentFactoryResolver)); }, token: RouteService, providedIn: "root" });
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
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype.busy;
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
    /**
     * @type {?}
     * @private
     */
    RouteService.prototype.componentFactoryResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGVzL3JvdXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRixPQUFPLEVBQW9CLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQVUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakcsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7OztBQVNsRSxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7Ozs7O0lBaUJ4QixZQUM4QixVQUFrQixFQUN2QyxhQUE0QixFQUM1QixRQUFrQixFQUNsQixnQkFBa0MsRUFDbEMsUUFBa0IsRUFDbEIsS0FBcUIsRUFDckIsTUFBYyxFQUNkLE9BQW9CLEVBQ3BCLHdCQUFrRDtRQVI3QixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ3BCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFyQm5ELGNBQVMsR0FBUSxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxhQUFRLEdBQW9CLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEUsZUFBVSxHQUFnQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRCxjQUFTLEdBQXNCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUEwRHZFLGdCQUFXLEdBQTRCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBdENyRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUM5RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQy9FLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxJQUFZLElBQUk7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsSUFBWSxJQUFJLENBQUMsSUFBWTtRQUM1QixJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOztrQkFDWixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztZQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLGtGQUFrRjtZQUNsRixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTs7c0JBQ2pDLEtBQUssR0FBVyxJQUFJLENBQUMsS0FBSzs7b0JBQzVCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3BDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QztxQkFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDMUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO2lCQUN6QjtnQkFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsa0VBQWtFO2FBQ2xFO1NBQ0Q7SUFDRixDQUFDOzs7O0lBRUQsSUFBVyxXQUFXO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBR00sYUFBYTtRQUNuQiw4REFBOEQ7UUFDOUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ2pDLG9CQUFvQixFQUFFLEVBQ3RCLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTs7O2tCQUVaLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FFRixDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsTUFBVzs7Y0FDdkIsTUFBTSxHQUFHLEVBQUU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFOzs7Ozs7OztVQVFFO1FBQ0YsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxNQUFXOztjQUMzQixVQUFVLEdBQUcsRUFBRTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTSxLQUFLLENBQUMsTUFBTTtRQUNsQixJQUFJO1lBQ0gsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDdkM7aUJBQU07Z0JBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ25FO1NBQ0Q7UUFBQyxXQUFNO1lBQ1AsT0FBTyxJQUFJLENBQUM7U0FDWjtJQUNGLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLE1BQU07UUFDdEIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ04sT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0YsQ0FBQzs7OztJQUVNLEtBQUs7UUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRU0sT0FBTztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVNLE9BQU8sQ0FBQyxJQUFvQjs7Y0FDNUIsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTs7a0JBQ25DLE1BQU0sR0FBVyxJQUFJLENBQUMsYUFBYTs7a0JBQ25DLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2xFLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFOztrQkFDakMsSUFBSSxHQUFXLElBQUksQ0FBQyxLQUFLOztrQkFDekIsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDOUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsaURBQWlEO1FBQ2pELE9BQU8sUUFBUSxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLElBQW9COztjQUMzQixRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDOztZQUN6QyxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQztRQUM5QixDQUFDLENBQUM7O2NBQ0ksS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakMsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7UUFDOUIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7O2tCQUNuQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNsRSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxFQUFFO2dCQUMvQixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQ3pCO1NBQ0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTs7a0JBQ2pDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQzlELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7Z0JBQzdCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDdkI7U0FDRDtRQUNELEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELG1EQUFtRDtRQUNuRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTSxRQUFRLENBQUMsSUFBUztRQUN4QixPQUFPO1lBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QyxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsTUFBVztRQUN4QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzVDO0lBQ0YsQ0FBQzs7OztJQUVNLFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxZQUFZLGFBQWEsQ0FBQyxFQUMvQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUNyQixvQkFBb0IsRUFBRSxFQUN0QixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQzlCLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDaEM7Ozs7VUFJRTtRQUNGLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVNLCtCQUErQjtRQUNyQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxZQUFZLGFBQWEsQ0FBQztRQUMvQzs7OztVQUlFO1FBQ0YsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFDckIsb0JBQW9CLEVBQUUsRUFDdEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUM5QixHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzlCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDYixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQ0YsQ0FBQztZQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJO1lBQ3hDLDJDQUEyQztZQUMzQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUNGLENBQUM7WUFDRiw0Q0FBNEM7UUFDN0MsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUM5QixHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQW1DLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDOztzQkFDN0IsT0FBTyxHQUFvQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7Z0JBQ25JLE9BQU8sT0FBTyxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ04sT0FBTyxJQUFJLENBQUM7YUFDWjtRQUNGLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFTSxXQUFXLENBQUMsSUFBWSxFQUFFLE1BQWdCO1FBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDcEQsZ0ZBQWdGO1lBQ2hGLElBQUksTUFBTSxFQUFFO2dCQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QztpQkFBTTtnQkFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Q7SUFDRixDQUFDOzs7Ozs7SUFJTyxZQUFZO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2pGLGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRTs7OztVQUlFO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFlBQVksZUFBZSxDQUFDLENBQ2pELENBQUMsU0FBUyxDQUFDLENBQUMsS0FBc0IsRUFBRSxFQUFFOztrQkFDaEMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQzlELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFOztzQkFDbkMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7O3NCQUM1RCxNQUFNLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztnQkFDcEMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7b0JBQzVCLDREQUE0RDtpQkFDNUQ7YUFDRDtZQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFOztzQkFDakMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7O3NCQUN4RCxJQUFJLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztnQkFDaEMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTs7MEJBQ2xCLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO29CQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEMseUZBQXlGO2lCQUN6RjthQUNEO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLGNBQWM7O1lBQ2pCLGNBQWMsR0FBVyxJQUFJO1FBQ2pDLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7a0JBV2hDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDNUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1osY0FBYyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7c0JBQzlDLFNBQVMsR0FBYSxjQUFjLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRTtnQkFDM0UsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDekIsY0FBYyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVDO3FCQUFNO29CQUNOLGNBQWMsR0FBRyxJQUFJLENBQUM7aUJBQ3RCO2dCQUNELHFFQUFxRTthQUNyRTtZQUNELGlGQUFpRjtTQUNqRjthQUFNLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzlDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDeEQsa0ZBQWtGO1NBQ2xGOztZQUNHLGdCQUFnQixHQUFXLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWU7O2NBQ25FLE1BQU0sR0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQzs7Y0FDckosS0FBSyxHQUFHLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDbEQsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZELGdFQUFnRTtRQUNoRSxPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTSxPQUFPO1FBQ2IsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNuQzthQUFNOztrQkFDQSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUM3QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDdkM7SUFDRixDQUFDOzs7WUFsVkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O3lDQW1CRSxNQUFNLFNBQUMsV0FBVztZQS9CWixhQUFhO1lBSm1ELFFBQVE7WUFReEUsZ0JBQWdCO1lBVHFCLFFBQVE7WUFFN0MsY0FBYztZQUEwQyxNQUFNO1lBTTlELFdBQVc7WUFQTyx3QkFBd0I7Ozs7O0lBbUJsRCx1QkFBeUI7O0lBQ3pCLHFCQUF1Qjs7Ozs7SUFDdkIsbUNBQTRCOzs7OztJQUM1QixpQ0FBaUQ7O0lBQ2pELGdDQUEwRTs7Ozs7SUFDMUUsa0NBQTBFOztJQUMxRSxpQ0FBOEU7Ozs7O0lBQzlFLDZCQUFzQjs7Ozs7SUFDdEIsNEJBQXFCOztJQUNyQiw0QkFBa0I7O0lBQ2xCLDhCQUFrQzs7SUFDbEMsbUNBQXVDOzs7OztJQUN2Qyw0QkFBc0I7O0lBQ3RCLHFDQUE2Qjs7SUFtRDdCLG1DQUFzRTs7Ozs7SUFoRHJFLGtDQUErQzs7Ozs7SUFDL0MscUNBQW9DOzs7OztJQUNwQyxnQ0FBMEI7Ozs7O0lBQzFCLHdDQUEwQzs7Ozs7SUFDMUMsZ0NBQTBCOzs7OztJQUMxQiw2QkFBNkI7Ozs7O0lBQzdCLDhCQUFzQjs7Ozs7SUFDdEIsK0JBQTRCOzs7OztJQUM1QixnREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIsIExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBBY3RpdmF0aW9uRW5kLCBOYXZpZ2F0aW9uU3RhcnQsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvbmNhdE1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3BhZ2UnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL3BhZ2VzL3BhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNlZ21lbnRQaXBlIH0gZnJvbSAnLi4vcGlwZXMvc2VnbWVudC5waXBlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGUvdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5kZWNsYXJlIGNvbnN0IEJ1ZmZlcjtcbmRlY2xhcmUgY29uc3QgcHJvY2VzcztcblxuLy8gQGR5bmFtaWNcbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRlU2VydmljZSB7XG5cblx0c3RhdGljIHN0YXJ0VGltZTogbnVtYmVyO1xuXHRzdGF0aWMgZW5kVGltZTogbnVtYmVyO1xuXHRwcml2YXRlIHVybFN0cmF0ZWd5OiBzdHJpbmc7XG5cdHByaXZhdGUgX2xhbmd1YWdlOiBhbnkgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcblx0cHVibGljIHJlYWRvbmx5IGxhbmd1YWdlOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLl9sYW5ndWFnZS5hc09ic2VydmFibGUoKTtcblx0cHJpdmF0ZSBfbGFuZ3VhZ2VzOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8YW55Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblx0cHVibGljIHJlYWRvbmx5IGxhbmd1YWdlczogT2JzZXJ2YWJsZTxhbnlbXT4gPSB0aGlzLl9sYW5ndWFnZXMuYXNPYnNlcnZhYmxlKCk7XG5cdHByaXZhdGUgX2xhbmc6IHN0cmluZztcblx0cHJpdmF0ZSBwYXRoOiBzdHJpbmc7XG5cdHB1YmxpYyBwYWdlOiBQYWdlO1xuXHRwdWJsaWMgcGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz47XG5cdHB1YmxpYyBxdWVyeVBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuXHRwcml2YXRlIGJ1c3k6IGJvb2xlYW47XG5cdHB1YmxpYyBjdXJyZW50TWFya2V0OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcblx0XHRwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgc2VnbWVudDogU2VnbWVudFBpcGUsXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHQpIHtcblx0XHR0aGlzLnVybFN0cmF0ZWd5ID0gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMudXJsU3RyYXRlZ3k7XG5cdFx0dGhpcy5fbGFuZ3VhZ2VzLm5leHQodGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMubGFuZ3VhZ2VzKTtcblx0XHR0aGlzLmN1cnJlbnRNYXJrZXQgPSB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5kZWZhdWx0TWFya2V0O1xuXHRcdHRoaXMuc2V0TGFuZ3VhZ2VzKCk7XG5cdFx0aWYgKHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnVzZUxhbmcgfHwgdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMudXNlTWFya2V0KSB7XG5cdFx0XHR0aGlzLnN1YnNjcmliZVRvUm91dGVyKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXQgbGFuZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLl9sYW5nO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXQgbGFuZyhsYW5nOiBzdHJpbmcpIHtcblx0XHRpZiAobGFuZyAhPT0gdGhpcy5fbGFuZykge1xuXHRcdFx0dGhpcy5fbGFuZyA9IGxhbmc7XG5cdFx0XHRjb25zdCBsYW5ndWFnZSA9IHRoaXMuX2xhbmd1YWdlcy5nZXRWYWx1ZSgpLmZpbmQoeCA9PiB4LmxhbmcgPT09IGxhbmcpO1xuXHRcdFx0dGhpcy5fbGFuZ3VhZ2UubmV4dChsYW5ndWFnZSk7XG5cdFx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKGxhbmcpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5zZXQgbGFuZycsIGxhbmcsIHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnVzZUxhbmcpO1xuXHRcdFx0aWYgKHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnVzZUxhbmcpIHtcblx0XHRcdFx0Y29uc3QgX2xhbmc6IHN0cmluZyA9IHRoaXMuX2xhbmc7XG5cdFx0XHRcdGxldCBwYXRoID0gdGhpcy5sb2NhdGlvbi5wYXRoKCk7XG5cdFx0XHRcdGlmIChwYXRoLmluZGV4T2YoYC8ke19sYW5nfWApID09PSAwKSB7XG5cdFx0XHRcdFx0cGF0aCA9IHBhdGgucmVwbGFjZShgLyR7X2xhbmd9YCwgYC8ke2xhbmd9YCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAocGF0aC5pbmRleE9mKGAvJHtsYW5nfWApICE9PSAwKSB7XG5cdFx0XHRcdFx0cGF0aCA9IGAvJHtsYW5nfWAgKyBwYXRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucGF0aCA9IHBhdGg7XG5cdFx0XHRcdC8vIGNvbnN0IGxhbmdJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bGFuZycpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXQgY3VycmVudExhbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5fbGFuZztcblx0fVxuXG5cdHB1YmxpYyBwYWdlUGFyYW1zJDogQmVoYXZpb3JTdWJqZWN0PFBhcmFtcz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcblx0cHVibGljIGdldFBhZ2VQYXJhbXMoKTogT2JzZXJ2YWJsZTxQYXJhbXM+IHtcblx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmdldFBhZ2VQYXJhbXMnLCB0aGlzLnJvdXRlci51cmwpO1xuXHRcdHJldHVybiB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG5cdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0c3dpdGNoTWFwKHBhcmFtcyA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHBhcmFtcyk7XG5cdFx0XHRcdGNvbnN0IHBhcnNlZCA9IHRoaXMucGFyc2VQYXJhbXMocGFyYW1zKTtcblx0XHRcdFx0dGhpcy5wYWdlUGFyYW1zJC5uZXh0KHBhcnNlZCk7XG5cdFx0XHRcdHJldHVybiBvZihwYXJzZWQpO1xuXHRcdFx0fSksXG5cdFx0XHQvLyB0YXAocGFyYW1zID0+IGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuZ2V0UGFnZVBhcmFtcycsIHBhcmFtcykpLFxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgcGFyc2VQYXJhbXMocGFyYW1zOiBhbnkpOiBhbnkge1xuXHRcdGNvbnN0IHBhcnNlZCA9IHt9O1xuXHRcdE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrID0+IHBhcnNlZFtrXSA9IHRoaXMucGFyc2UocGFyYW1zW2tdKSk7XG5cdFx0Lypcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBwYXJhbXMpIHtcblx0XHRcdGlmICh0eXBlb2YgKHBhcmFtc1trZXldKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0cGFyc2VkW2tleV0gPSB0aGlzLnBhcnNlKHBhcmFtc1trZXldKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhcnNlZFtrZXldID0gcGFyYW1zW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCovXG5cdFx0cmV0dXJuIHBhcnNlZDtcblx0fVxuXG5cdHB1YmxpYyBzZXJpYWxpemVQYXJhbXMocGFyYW1zOiBhbnkpIHtcblx0XHRjb25zdCBzZXJpYWxpemVkID0ge307XG5cdFx0T2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGsgPT4gc2VyaWFsaXplZFtrXSA9IHRoaXMuc2VyaWFsaXplKHBhcmFtc1trXSkpO1xuXHRcdHJldHVybiBzZXJpYWxpemVkO1xuXHR9XG5cblx0cHVibGljIHBhcnNlKGJhc2U2NCkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihiYXNlNjQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKEJ1ZmZlci5mcm9tKGJhc2U2NCwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCdhc2NpaScpKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzZXJpYWxpemUob2JqZWN0KSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybiB3aW5kb3cuYnRvYShKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIEJ1ZmZlci5mcm9tKEpTT04uc3RyaW5naWZ5KG9iamVjdCksICdhc2NpaScpLnRvU3RyaW5nKCdiYXNlNjQnKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0SWQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xuXHR9XG5cblx0cHVibGljIGdldFNsdWcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NsdWcnKTtcblx0fVxuXG5cdHB1YmxpYyB0b1JvdXRlKGRhdGE6IGFueVtdIHwgc3RyaW5nKTogYW55W10ge1xuXHRcdGNvbnN0IHNlZ21lbnRzID0gdGhpcy5zZWdtZW50LnRyYW5zZm9ybShkYXRhKTtcblx0XHRpZiAodGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMudXNlTWFya2V0KSB7XG5cdFx0XHRjb25zdCBtYXJrZXQ6IHN0cmluZyA9IHRoaXMuY3VycmVudE1hcmtldDtcblx0XHRcdGNvbnN0IG1hcmtldEluZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzptYXJrZXQnKTtcblx0XHRcdHNlZ21lbnRzLnNwbGljZShtYXJrZXRJbmRleCwgMCwgbWFya2V0KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnVzZUxhbmcpIHtcblx0XHRcdGNvbnN0IGxhbmc6IHN0cmluZyA9IHRoaXMuX2xhbmc7XG5cdFx0XHRjb25zdCBsYW5nSW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOmxhbmcnKTtcblx0XHRcdHNlZ21lbnRzLnNwbGljZShsYW5nSW5kZXgsIDAsIGxhbmcpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLnRvUm91dGUnLCBzZWdtZW50cyk7XG5cdFx0cmV0dXJuIHNlZ21lbnRzO1xuXHR9XG5cblx0cHVibGljIHRvU2x1ZyhkYXRhOiBhbnlbXSB8IHN0cmluZyk6IGFueVtdIHtcblx0XHRjb25zdCBzZWdtZW50cyA9IHRoaXMuc2VnbWVudC50cmFuc2Zvcm0oZGF0YSk7XG5cdFx0bGV0IHBhdGhzID0gc2VnbWVudHMuZmlsdGVyKHggPT4ge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJztcblx0XHR9KTtcblx0XHRjb25zdCBkYXRhcyA9IHNlZ21lbnRzLmZpbHRlcih4ID0+IHtcblx0XHRcdHJldHVybiB0eXBlb2YgeCAhPT0gJ3N0cmluZyc7XG5cdFx0fSk7XG5cdFx0aWYgKHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnVzZU1hcmtldCkge1xuXHRcdFx0Y29uc3QgbWFya2V0SW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOm1hcmtldCcpO1xuXHRcdFx0aWYgKHBhdGhzLmxlbmd0aCA+IG1hcmtldEluZGV4KSB7XG5cdFx0XHRcdHBhdGhzW21hcmtldEluZGV4XSA9ICcqJztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnVzZUxhbmcpIHtcblx0XHRcdGNvbnN0IGxhbmdJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bGFuZycpO1xuXHRcdFx0aWYgKHBhdGhzLmxlbmd0aCA+IGxhbmdJbmRleCkge1xuXHRcdFx0XHRwYXRoc1tsYW5nSW5kZXhdID0gJyonO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwYXRocyA9IHBhdGhzLmpvaW4oJy8nKS5yZXBsYWNlKC9cXC9cXCovZ2ksICcnKS5zcGxpdCgnLycpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UudG9TbHVnJywgZGF0YSwgcGF0aHMpO1xuXHRcdHJldHVybiBwYXRocy5jb25jYXQoZGF0YXMpO1xuXHR9XG5cblx0cHVibGljIHRvUGFyYW1zKGRhdGE6IGFueSk6IGFueSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGE6IHdpbmRvdy5idG9hKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXHRcdH07XG5cdH1cblxuXHRwdWJsaWMgdG9EYXRhKHBhcmFtczogYW55KTogYW55IHtcblx0XHRpZiAocGFyYW1zICYmIHBhcmFtcy5kYXRhKSB7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihwYXJhbXMuZGF0YSkpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXRQYXJhbXMoKTogT2JzZXJ2YWJsZTxDb21wb25lbnRGYWN0b3J5PFBhZ2VDb21wb25lbnQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuXHRcdFx0ZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgQWN0aXZhdGlvbkVuZCksXG5cdFx0XHRtYXAoKCkgPT4gdGhpcy5yb3V0ZSksXG5cdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0bWFwKHJvdXRlID0+IHJvdXRlLmZpcnN0Q2hpbGQpLFxuXHRcdFx0c3dpdGNoTWFwKHJvdXRlID0+IHJvdXRlLnBhcmFtcyksXG5cdFx0XHQvKlxuXHRcdFx0dGFwKChwYXJhbXMpID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2dldFBhcmFtcycsIHBhcmFtcyk7XG5cdFx0XHR9KSxcblx0XHRcdCovXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLnRvRGF0YSh4KSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgX3VudXNlZF9nZXRQYWdlQ29tcG9uZW50RmFjdG9yeSgpOiBPYnNlcnZhYmxlPENvbXBvbmVudEZhY3Rvcnk8UGFnZUNvbXBvbmVudD4+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG5cdFx0XHRmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBBY3RpdmF0aW9uRW5kKSxcblx0XHRcdC8qXG5cdFx0XHR0YXAoKGV2ZW50KSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdBY3RpdmF0aW9uRW5kJywgZXZlbnQpO1xuXHRcdFx0fSksXG5cdFx0XHQqL1xuXHRcdFx0bWFwKCgpID0+IHRoaXMucm91dGUpLFxuXHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdG1hcChyb3V0ZSA9PiByb3V0ZS5maXJzdENoaWxkKSxcblx0XHRcdHRhcCgocm91dGUpID0+IHtcblx0XHRcdFx0dGhpcy5wYXJhbXMgPSByb3V0ZS5wYXJhbXMucGlwZShcblx0XHRcdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YodGhpcy50b0RhdGEoeCkpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRoaXMucXVlcnlQYXJhbXMgPSByb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuXHRcdFx0XHRcdC8vIHRhcCh4ID0+IGNvbnNvbGUubG9nKCdxdWVyeVBhcmFtcycsIHgpKSxcblx0XHRcdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YodGhpcy50b0RhdGEoeCkpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdwYXJhbXMnLCB0aGlzLnJvdXRlLnBhcmFtcyk7XG5cdFx0XHR9KSxcblx0XHRcdHN3aXRjaE1hcChyb3V0ZSA9PiByb3V0ZS5kYXRhKSxcblx0XHRcdG1hcCgoZGF0YSk6IENvbXBvbmVudEZhY3Rvcnk8UGFnZUNvbXBvbmVudD4gPT4ge1xuXHRcdFx0XHRpZiAoZGF0YS5wYWdlUmVzb2x2ZXIpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2UgPSBkYXRhLnBhZ2VSZXNvbHZlci5wYWdlO1xuXHRcdFx0XHRcdGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8UGFnZUNvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShkYXRhLnBhZ2VSZXNvbHZlci5jb21wb25lbnQpO1xuXHRcdFx0XHRcdHJldHVybiBmYWN0b3J5O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgc2V0TGFuZ3VhZ2UobGFuZzogc3RyaW5nLCBzaWxlbnQ/OiBib29sZWFuKSB7XG5cdFx0dGhpcy5sYW5nID0gbGFuZztcblx0XHRpZiAodGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZyAmJiB0aGlzLnBhdGgpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2Uuc2V0TGFuZ3VhZ2UnLCB0aGlzLnBhdGgsIHRoaXMuX2xhbmcsIGxhbmcsIHNpbGVudCk7XG5cdFx0XHRpZiAoc2lsZW50KSB7XG5cdFx0XHRcdHRoaXMubG9jYXRpb24ucmVwbGFjZVN0YXRlKHRoaXMucGF0aCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5wYXRoXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUFJJVkFURSBNRVRIT0RTXG5cblx0cHJpdmF0ZSBzZXRMYW5ndWFnZXMoKSB7XG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLmFkZExhbmdzKHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLmxhbmd1YWdlcyA/IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLmxhbmd1YWdlcy5tYXAoeCA9PiB4LmxhbmcpIDogW10pO1xuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXREZWZhdWx0TGFuZyh0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5kZWZhdWx0TGFuZ3VhZ2UpO1xuXHRcdC8vIHRoaXMuc2V0TGFuZ3VhZ2UodGhpcy5kZXRlY3RMYW5ndWFnZSgpLCB0cnVlKTtcblx0XHR0aGlzLnNldExhbmd1YWdlKHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLmRlZmF1bHRMYW5ndWFnZSwgdHJ1ZSk7XG5cdFx0Lypcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZTogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZScsIGUpO1xuXHRcdH0pO1xuXHRcdCovXG5cdH1cblxuXHRwcml2YXRlIHN1YnNjcmliZVRvUm91dGVyKCkge1xuXHRcdHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuXHRcdFx0ZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KVxuXHRcdCkuc3Vic2NyaWJlKChldmVudDogTmF2aWdhdGlvblN0YXJ0KSA9PiB7XG5cdFx0XHRjb25zdCBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb24ubm9ybWFsaXplKGV2ZW50LnVybCkuc3BsaXQoJy8nKTtcblx0XHRcdGlmICh0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy51c2VNYXJrZXQpIHtcblx0XHRcdFx0Y29uc3QgbWFya2V0SW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOm1hcmtldCcpO1xuXHRcdFx0XHRjb25zdCBtYXJrZXQgPSBsb2NhdGlvblttYXJrZXRJbmRleF07XG5cdFx0XHRcdGlmIChtYXJrZXQgIT09IHRoaXMuY3VycmVudE1hcmtldCkge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudE1hcmtldCA9IG1hcmtldDtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLnNldE1hcmtldCcsIG1hcmtldCwgZXZlbnQudXJsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnVzZUxhbmcpIHtcblx0XHRcdFx0Y29uc3QgbGFuZ0luZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzpsYW5nJyk7XG5cdFx0XHRcdGNvbnN0IGxhbmcgPSBsb2NhdGlvbltsYW5nSW5kZXhdO1xuXHRcdFx0XHRpZiAobGFuZyAhPT0gdGhpcy5fbGFuZykge1xuXHRcdFx0XHRcdGNvbnN0IGxhbmd1YWdlID0gdGhpcy5fbGFuZ3VhZ2VzLmdldFZhbHVlKCkuZmluZCh4ID0+IHgubGFuZyA9PT0gbGFuZyk7XG5cdFx0XHRcdFx0dGhpcy5fbGFuZ3VhZ2UubmV4dChsYW5ndWFnZSk7XG5cdFx0XHRcdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLnNldExhbmcnLCBsYW5nLCB0aGlzLl9sYW5nLCBsYW5nSW5kZXgsIGxvY2F0aW9uLCBldmVudC51cmwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGRldGVjdExhbmd1YWdlKCk6IHN0cmluZyB7XG5cdFx0bGV0IGFjY2VwdExhbmd1YWdlOiBzdHJpbmcgPSBudWxsO1xuXHRcdGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdC8qXG5cdFx0XHQvLyBzZXJ2ZXIgc2lkZSBleHByZXNzIGVuZ2luZVxuXHRcdFx0YXBwLmVuZ2luZSgnaHRtbCcsICAoXywgb3B0aW9ucywgY2FsbGJhY2spID0+IHtcblx0XHRcdFx0bGV0IGVuZ2luZSA9IG5nRXhwcmVzc0VuZ2luZSh7XG5cdFx0XHRcdFx0Ym9vdHN0cmFwOiBTZXJ2ZXJBcHBNb2R1bGUsXG5cdFx0XHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogJ3JlcXVlc3QnLCB1c2VGYWN0b3J5OiAoKSA9PiBvcHRpb25zLnJlcSB9IF1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGVuZ2luZShfLCBvcHRpb25zLCBjYWxsYmFjaylcblx0XHRcdH0pXG5cdFx0XHQqL1xuXHRcdFx0Y29uc3QgcmVxdWVzdCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdyZXF1ZXN0Jyk7XG5cdFx0XHRpZiAocmVxdWVzdCkge1xuXHRcdFx0XHRhY2NlcHRMYW5ndWFnZSA9IHJlcXVlc3QuaGVhZGVyc1snYWNjZXB0LWxhbmd1YWdlJ107XG5cdFx0XHRcdGNvbnN0IGxhbmd1YWdlczogc3RyaW5nW10gPSBhY2NlcHRMYW5ndWFnZS5tYXRjaCgvW2EtekEtWlxcLV17MiwxMH0vZykgfHwgW107XG5cdFx0XHRcdGlmIChsYW5ndWFnZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGFjY2VwdExhbmd1YWdlID0gbGFuZ3VhZ2VzWzBdLnNwbGl0KCctJylbMF07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWNjZXB0TGFuZ3VhZ2UgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0JywgcmVxdWVzdCwgJ2FjY2VwdExhbmd1YWdlJywgYWNjZXB0TGFuZ3VhZ2UpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5pc1BsYXRmb3JtU2VydmVyJywgdGhpcy5wbGF0Zm9ybUlkLCBhY2NlcHRMYW5ndWFnZSk7XG5cdFx0fSBlbHNlIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRhY2NlcHRMYW5ndWFnZSA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRCcm93c2VyTGFuZygpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5pc1BsYXRmb3JtQnJvd3NlcicsIHRoaXMucGxhdGZvcm1JZCwgYWNjZXB0TGFuZ3VhZ2UpO1xuXHRcdH1cblx0XHRsZXQgZGV0ZWN0ZWRMYW5ndWFnZTogc3RyaW5nID0gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMuZGVmYXVsdExhbmd1YWdlO1xuXHRcdGNvbnN0IHJlZ2V4cDogUmVnRXhwID0gbmV3IFJlZ0V4cChgKCR7dGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMubGFuZ3VhZ2VzID8gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMubGFuZ3VhZ2VzLm1hcCh4ID0+IHgubGFuZykuam9pbignfCcpIDogJyd9KWAsICdnaScpO1xuXHRcdGNvbnN0IG1hdGNoID0gKGFjY2VwdExhbmd1YWdlIHx8ICcnKS5tYXRjaChyZWdleHApO1xuXHRcdGRldGVjdGVkTGFuZ3VhZ2UgPSBtYXRjaCA/IG1hdGNoWzBdIDogZGV0ZWN0ZWRMYW5ndWFnZTtcblx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmRldGVjdExhbmd1YWdlJywgZGV0ZWN0ZWRMYW5ndWFnZSk7XG5cdFx0cmV0dXJuIGRldGVjdGVkTGFuZ3VhZ2U7XG5cdH1cblxuXHRwdWJsaWMgZ2V0VGltZSgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0cmV0dXJuIChwZXJmb3JtYW5jZSB8fCBEYXRlKS5ub3coKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG5cdFx0XHRyZXR1cm4gKHRpbWVbMF0gKiAxZTkgKyB0aW1lWzFdKSAvIDFlNjtcblx0XHR9XG5cdH1cblxufVxuIl19