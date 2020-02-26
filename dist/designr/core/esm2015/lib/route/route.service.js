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
    get lang() {
        return this._lang;
    }
    set lang(lang) {
        if (lang !== this._lang) {
            this._lang = lang;
            const language = this._languages.getValue().find(x => x.lang === lang);
            this._language.next(language);
            this.translateService.use(lang);
            // console.log('RouteService.set lang', lang, this.coreService.options.useLang);
            if (this.coreService.options.useLang) {
                const _lang = this._lang;
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
    get currentLang() {
        return this._lang;
    }
    getPageParams() {
        // console.log('RouteService.getPageParams', this.router.url);
        return this.route.queryParams.pipe(distinctUntilChanged(), switchMap(params => {
            // console.log(params);
            const parsed = this.parseParams(params);
            this.pageParams$.next(parsed);
            return of(parsed);
        }));
    }
    parseParams(params) {
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
    serializeParams(params) {
        const serialized = {};
        Object.keys(params).forEach(k => serialized[k] = this.serialize(params[k]));
        return serialized;
    }
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
    serialize(object) {
        if (isPlatformBrowser(this.platformId)) {
            return window.btoa(JSON.stringify(object));
        }
        else {
            return Buffer.from(JSON.stringify(object), 'ascii').toString('base64');
        }
    }
    getId() {
        return +this.route.snapshot.paramMap.get('id');
    }
    getSlug() {
        return this.route.snapshot.paramMap.get('slug');
    }
    toRoute(data) {
        const segments = this.segment.transform(data);
        if (this.coreService.options.useMarket) {
            const market = this.currentMarket;
            const marketIndex = this.urlStrategy.split('/').indexOf(':market');
            segments.splice(marketIndex, 0, market);
        }
        if (this.coreService.options.useLang) {
            const lang = this._lang;
            const langIndex = this.urlStrategy.split('/').indexOf(':lang');
            segments.splice(langIndex, 0, lang);
        }
        // console.log('RouteService.toRoute', segments);
        return segments;
    }
    toSlug(data) {
        const segments = this.segment.transform(data);
        let paths = segments.filter(x => {
            return typeof x === 'string';
        });
        const datas = segments.filter(x => {
            return typeof x !== 'string';
        });
        if (this.coreService.options.useMarket) {
            const marketIndex = this.urlStrategy.split('/').indexOf(':market');
            if (paths.length > marketIndex) {
                paths[marketIndex] = '*';
            }
        }
        if (this.coreService.options.useLang) {
            const langIndex = this.urlStrategy.split('/').indexOf(':lang');
            if (paths.length > langIndex) {
                paths[langIndex] = '*';
            }
        }
        paths = paths.join('/').replace(/\/\*/gi, '').split('/');
        // console.log('RouteService.toSlug', data, paths);
        return paths.concat(datas);
    }
    toParams(data) {
        return {
            data: window.btoa(JSON.stringify(data))
        };
    }
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
    setLanguages() {
        this.translateService.addLangs(this.coreService.options.languages ? this.coreService.options.languages.map(x => x.lang) : []);
        this.translateService.setDefaultLang(this.coreService.options.defaultLanguage);
        // this.setLanguage(this.detectLanguage(), true);
        this.setLanguage(this.coreService.options.defaultLanguage, true);
        /*
        this.translateService.onLangChange.subscribe((e: LangChangeEvent) => {
            // console.log('RouteService.onLangChange', e);
        });
        */
    }
    subscribeToRouter() {
        this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((event) => {
            const location = this.location.normalize(event.url).split('/');
            if (this.coreService.options.useMarket) {
                const marketIndex = this.urlStrategy.split('/').indexOf(':market');
                const market = location[marketIndex];
                if (market !== this.currentMarket) {
                    this.currentMarket = market;
                    // console.log('RouteService.setMarket', market, event.url);
                }
            }
            if (this.coreService.options.useLang) {
                const langIndex = this.urlStrategy.split('/').indexOf(':lang');
                const lang = location[langIndex];
                if (lang !== this._lang) {
                    const language = this._languages.getValue().find(x => x.lang === lang);
                    this._language.next(language);
                    this.translateService.use(lang);
                    // console.log('RouteService.setLang', lang, this._lang, langIndex, location, event.url);
                }
            }
        });
    }
    detectLanguage() {
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
            const request = this.injector.get('request');
            if (request) {
                acceptLanguage = request.headers['accept-language'];
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
        let detectedLanguage = this.coreService.options.defaultLanguage;
        const regexp = new RegExp(`(${this.coreService.options.languages ? this.coreService.options.languages.map(x => x.lang).join('|') : ''})`, 'gi');
        const match = (acceptLanguage || '').match(regexp);
        detectedLanguage = match ? match[0] : detectedLanguage;
        // console.log('RouteService.detectLanguage', detectedLanguage);
        return detectedLanguage;
    }
    getTime() {
        if (isPlatformBrowser(this.platformId)) {
            return (performance || Date).now();
        }
        else {
            const time = process.hrtime();
            return (time[0] * 1e9 + time[1]) / 1e6;
        }
    }
    start() {
        RouteService.startTime = this.getTime();
    }
    end() {
        RouteService.endTime = this.getTime();
        console.log('RouteService.end', RouteService.endTime - RouteService.startTime);
    }
}
RouteService.ɵfac = function RouteService_Factory(t) { return new (t || RouteService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i1.CoreService), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i2.TranslateService), i0.ɵɵinject(i3.Location), i0.ɵɵinject(i4.ActivatedRoute), i0.ɵɵinject(i4.Router), i0.ɵɵinject(i5.SegmentPipe)); };
RouteService.ɵprov = i0.ɵɵdefineInjectable({ token: RouteService, factory: RouteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RouteService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.CoreService }, { type: i0.Injector }, { type: i2.TranslateService }, { type: i3.Location }, { type: i4.ActivatedRoute }, { type: i4.Router }, { type: i5.SegmentPipe }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGUvcm91dGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBVSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7QUFLbEUsV0FBVztBQUlYLE1BQU0sT0FBTyxZQUFZO0lBZXhCLFlBQzhCLFVBQWtCLEVBQ3ZDLFdBQXdCLEVBQ3hCLFFBQWtCLEVBQ2xCLGdCQUE2QyxFQUM3QyxRQUFrQixFQUNsQixLQUFxQixFQUNyQixNQUFjLEVBQ2QsT0FBb0I7UUFQQyxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUE2QjtRQUM3QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FB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TztRQUNiLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDbkM7YUFBTTtZQUNOLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDdkM7SUFDRixDQUFDO0lBRU0sS0FBSztRQUNYLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFTSxHQUFHO1FBQ1QsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRixDQUFDOzt3RUE1U1csWUFBWSxjQWdCZixXQUFXO29EQWhCUixZQUFZLFdBQVosWUFBWSxtQkFGWixNQUFNO2tEQUVOLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOztzQkFpQkUsTUFBTTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyLCBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25TdGFydCwgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29yZVNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29yZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNlZ21lbnRQaXBlIH0gZnJvbSAnLi4vcGlwZXMvc2VnbWVudC5waXBlJztcbmltcG9ydCB7IFRyYW5zbGF0ZSB9IGZyb20gJy4uL3RyYW5zbGF0ZS90cmFuc2xhdGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZSc7XG5cbmRlY2xhcmUgY29uc3QgQnVmZmVyO1xuZGVjbGFyZSBjb25zdCBwcm9jZXNzO1xuXG4vLyBAZHluYW1pY1xuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVTZXJ2aWNlIHtcblxuXHRzdGF0aWMgc3RhcnRUaW1lOiBudW1iZXI7XG5cdHN0YXRpYyBlbmRUaW1lOiBudW1iZXI7XG5cdHByaXZhdGUgdXJsU3RyYXRlZ3k6IHN0cmluZztcblx0cHJpdmF0ZSBfbGFuZ3VhZ2U6IGFueSA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuXHRwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2U6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuX2xhbmd1YWdlLmFzT2JzZXJ2YWJsZSgpO1xuXHRwcml2YXRlIF9sYW5ndWFnZXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxhbnk+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXHRwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2VzOiBPYnNlcnZhYmxlPGFueVtdPiA9IHRoaXMuX2xhbmd1YWdlcy5hc09ic2VydmFibGUoKTtcblx0cHJpdmF0ZSBfbGFuZzogc3RyaW5nO1xuXHRwcml2YXRlIHBhdGg6IHN0cmluZztcblx0cHVibGljIHBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuXHRwdWJsaWMgcXVlcnlQYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPjtcblx0cHVibGljIGN1cnJlbnRNYXJrZXQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIGNvcmVTZXJ2aWNlOiBDb3JlU2VydmljZSxcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2U8VHJhbnNsYXRlPixcblx0XHRwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgc2VnbWVudDogU2VnbWVudFBpcGUsXG5cdCkge1xuXHRcdHRoaXMudXJsU3RyYXRlZ3kgPSB0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXJsU3RyYXRlZ3k7XG5cdFx0dGhpcy5fbGFuZ3VhZ2VzLm5leHQodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmxhbmd1YWdlcyk7XG5cdFx0dGhpcy5jdXJyZW50TWFya2V0ID0gdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmRlZmF1bHRNYXJrZXQ7XG5cdFx0dGhpcy5zZXRMYW5ndWFnZXMoKTtcblx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZUxhbmcgfHwgdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZU1hcmtldCkge1xuXHRcdFx0dGhpcy5zdWJzY3JpYmVUb1JvdXRlcigpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0IGxhbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5fbGFuZztcblx0fVxuXG5cdHByaXZhdGUgc2V0IGxhbmcobGFuZzogc3RyaW5nKSB7XG5cdFx0aWYgKGxhbmcgIT09IHRoaXMuX2xhbmcpIHtcblx0XHRcdHRoaXMuX2xhbmcgPSBsYW5nO1xuXHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSB0aGlzLl9sYW5ndWFnZXMuZ2V0VmFsdWUoKS5maW5kKHggPT4geC5sYW5nID09PSBsYW5nKTtcblx0XHRcdHRoaXMuX2xhbmd1YWdlLm5leHQobGFuZ3VhZ2UpO1xuXHRcdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2Uuc2V0IGxhbmcnLCBsYW5nLCB0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZyk7XG5cdFx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZUxhbmcpIHtcblx0XHRcdFx0Y29uc3QgX2xhbmc6IHN0cmluZyA9IHRoaXMuX2xhbmc7XG5cdFx0XHRcdGxldCBwYXRoID0gdGhpcy5sb2NhdGlvbi5wYXRoKCk7XG5cdFx0XHRcdGlmIChwYXRoLmluZGV4T2YoYC8ke19sYW5nfWApID09PSAwKSB7XG5cdFx0XHRcdFx0cGF0aCA9IHBhdGgucmVwbGFjZShgLyR7X2xhbmd9YCwgYC8ke2xhbmd9YCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAocGF0aC5pbmRleE9mKGAvJHtsYW5nfWApICE9PSAwKSB7XG5cdFx0XHRcdFx0cGF0aCA9IGAvJHtsYW5nfWAgKyBwYXRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucGF0aCA9IHBhdGg7XG5cdFx0XHRcdC8vIGNvbnN0IGxhbmdJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bGFuZycpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXQgY3VycmVudExhbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5fbGFuZztcblx0fVxuXG5cdHB1YmxpYyBwYWdlUGFyYW1zJDogQmVoYXZpb3JTdWJqZWN0PFBhcmFtcz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcblx0cHVibGljIGdldFBhZ2VQYXJhbXMoKTogT2JzZXJ2YWJsZTxQYXJhbXM+IHtcblx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmdldFBhZ2VQYXJhbXMnLCB0aGlzLnJvdXRlci51cmwpO1xuXHRcdHJldHVybiB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG5cdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0c3dpdGNoTWFwKHBhcmFtcyA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHBhcmFtcyk7XG5cdFx0XHRcdGNvbnN0IHBhcnNlZCA9IHRoaXMucGFyc2VQYXJhbXMocGFyYW1zKTtcblx0XHRcdFx0dGhpcy5wYWdlUGFyYW1zJC5uZXh0KHBhcnNlZCk7XG5cdFx0XHRcdHJldHVybiBvZihwYXJzZWQpO1xuXHRcdFx0fSksXG5cdFx0XHQvLyB0YXAocGFyYW1zID0+IGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuZ2V0UGFnZVBhcmFtcycsIHBhcmFtcykpLFxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgcGFyc2VQYXJhbXMocGFyYW1zOiBhbnkpOiBhbnkge1xuXHRcdGNvbnN0IHBhcnNlZCA9IHt9O1xuXHRcdE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrID0+IHBhcnNlZFtrXSA9IHRoaXMucGFyc2UocGFyYW1zW2tdKSk7XG5cdFx0Lypcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBwYXJhbXMpIHtcblx0XHRcdGlmICh0eXBlb2YgKHBhcmFtc1trZXldKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0cGFyc2VkW2tleV0gPSB0aGlzLnBhcnNlKHBhcmFtc1trZXldKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhcnNlZFtrZXldID0gcGFyYW1zW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCovXG5cdFx0cmV0dXJuIHBhcnNlZDtcblx0fVxuXG5cdHB1YmxpYyBzZXJpYWxpemVQYXJhbXMocGFyYW1zOiBhbnkpIHtcblx0XHRjb25zdCBzZXJpYWxpemVkID0ge307XG5cdFx0T2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGsgPT4gc2VyaWFsaXplZFtrXSA9IHRoaXMuc2VyaWFsaXplKHBhcmFtc1trXSkpO1xuXHRcdHJldHVybiBzZXJpYWxpemVkO1xuXHR9XG5cblx0cHVibGljIHBhcnNlKGJhc2U2NCkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihiYXNlNjQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKEJ1ZmZlci5mcm9tKGJhc2U2NCwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCdhc2NpaScpKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzZXJpYWxpemUob2JqZWN0KSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybiB3aW5kb3cuYnRvYShKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIEJ1ZmZlci5mcm9tKEpTT04uc3RyaW5naWZ5KG9iamVjdCksICdhc2NpaScpLnRvU3RyaW5nKCdiYXNlNjQnKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0SWQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xuXHR9XG5cblx0cHVibGljIGdldFNsdWcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NsdWcnKTtcblx0fVxuXG5cdHB1YmxpYyB0b1JvdXRlKGRhdGE6IGFueVtdIHwgc3RyaW5nKTogYW55W10ge1xuXHRcdGNvbnN0IHNlZ21lbnRzID0gdGhpcy5zZWdtZW50LnRyYW5zZm9ybShkYXRhKTtcblx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZU1hcmtldCkge1xuXHRcdFx0Y29uc3QgbWFya2V0OiBzdHJpbmcgPSB0aGlzLmN1cnJlbnRNYXJrZXQ7XG5cdFx0XHRjb25zdCBtYXJrZXRJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bWFya2V0Jyk7XG5cdFx0XHRzZWdtZW50cy5zcGxpY2UobWFya2V0SW5kZXgsIDAsIG1hcmtldCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZykge1xuXHRcdFx0Y29uc3QgbGFuZzogc3RyaW5nID0gdGhpcy5fbGFuZztcblx0XHRcdGNvbnN0IGxhbmdJbmRleCA9IHRoaXMudXJsU3RyYXRlZ3kuc3BsaXQoJy8nKS5pbmRleE9mKCc6bGFuZycpO1xuXHRcdFx0c2VnbWVudHMuc3BsaWNlKGxhbmdJbmRleCwgMCwgbGFuZyk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UudG9Sb3V0ZScsIHNlZ21lbnRzKTtcblx0XHRyZXR1cm4gc2VnbWVudHM7XG5cdH1cblxuXHRwdWJsaWMgdG9TbHVnKGRhdGE6IGFueVtdIHwgc3RyaW5nKTogYW55W10ge1xuXHRcdGNvbnN0IHNlZ21lbnRzID0gdGhpcy5zZWdtZW50LnRyYW5zZm9ybShkYXRhKTtcblx0XHRsZXQgcGF0aHMgPSBzZWdtZW50cy5maWx0ZXIoeCA9PiB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHggPT09ICdzdHJpbmcnO1xuXHRcdH0pO1xuXHRcdGNvbnN0IGRhdGFzID0gc2VnbWVudHMuZmlsdGVyKHggPT4ge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB4ICE9PSAnc3RyaW5nJztcblx0XHR9KTtcblx0XHRpZiAodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnVzZU1hcmtldCkge1xuXHRcdFx0Y29uc3QgbWFya2V0SW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOm1hcmtldCcpO1xuXHRcdFx0aWYgKHBhdGhzLmxlbmd0aCA+IG1hcmtldEluZGV4KSB7XG5cdFx0XHRcdHBhdGhzW21hcmtldEluZGV4XSA9ICcqJztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VMYW5nKSB7XG5cdFx0XHRjb25zdCBsYW5nSW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOmxhbmcnKTtcblx0XHRcdGlmIChwYXRocy5sZW5ndGggPiBsYW5nSW5kZXgpIHtcblx0XHRcdFx0cGF0aHNbbGFuZ0luZGV4XSA9ICcqJztcblx0XHRcdH1cblx0XHR9XG5cdFx0cGF0aHMgPSBwYXRocy5qb2luKCcvJykucmVwbGFjZSgvXFwvXFwqL2dpLCAnJykuc3BsaXQoJy8nKTtcblx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLnRvU2x1ZycsIGRhdGEsIHBhdGhzKTtcblx0XHRyZXR1cm4gcGF0aHMuY29uY2F0KGRhdGFzKTtcblx0fVxuXG5cdHB1YmxpYyB0b1BhcmFtcyhkYXRhOiBhbnkpOiBhbnkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRhOiB3aW5kb3cuYnRvYShKU09OLnN0cmluZ2lmeShkYXRhKSlcblx0XHR9O1xuXHR9XG5cblx0cHVibGljIHRvRGF0YShwYXJhbXM6IGFueSk6IGFueSB7XG5cdFx0aWYgKHBhcmFtcyAmJiBwYXJhbXMuZGF0YSkge1xuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmF0b2IocGFyYW1zLmRhdGEpKTtcblx0XHR9XG5cdH1cblxuXHQvKlxuXHRwdWJsaWMgZ2V0UGFyYW1zKCk6IE9ic2VydmFibGU8Q29tcG9uZW50RmFjdG9yeTxQYWdlQ29tcG9uZW50Pj4ge1xuXHRcdHJldHVybiB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcblx0XHRcdGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIEFjdGl2YXRpb25FbmQpLFxuXHRcdFx0bWFwKCgpID0+IHRoaXMucm91dGUpLFxuXHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdG1hcChyb3V0ZSA9PiByb3V0ZS5maXJzdENoaWxkKSxcblx0XHRcdHN3aXRjaE1hcChyb3V0ZSA9PiByb3V0ZS5wYXJhbXMpLFxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy50b0RhdGEoeCkpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cdCovXG5cblx0cHVibGljIHNldExhbmd1YWdlKGxhbmc6IHN0cmluZywgc2lsZW50PzogYm9vbGVhbikge1xuXHRcdHRoaXMubGFuZyA9IGxhbmc7XG5cdFx0aWYgKHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy51c2VMYW5nICYmIHRoaXMucGF0aCkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5zZXRMYW5ndWFnZScsIHRoaXMucGF0aCwgdGhpcy5fbGFuZywgbGFuZywgc2lsZW50KTtcblx0XHRcdGlmIChzaWxlbnQpIHtcblx0XHRcdFx0dGhpcy5sb2NhdGlvbi5yZXBsYWNlU3RhdGUodGhpcy5wYXRoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnBhdGhdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBQUklWQVRFIE1FVEhPRFNcblxuXHRwcml2YXRlIHNldExhbmd1YWdlcygpIHtcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuYWRkTGFuZ3ModGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmxhbmd1YWdlcyA/IHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5sYW5ndWFnZXMubWFwKHggPT4geC5sYW5nKSA6IFtdKTtcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc2V0RGVmYXVsdExhbmcodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmRlZmF1bHRMYW5ndWFnZSk7XG5cdFx0Ly8gdGhpcy5zZXRMYW5ndWFnZSh0aGlzLmRldGVjdExhbmd1YWdlKCksIHRydWUpO1xuXHRcdHRoaXMuc2V0TGFuZ3VhZ2UodGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmRlZmF1bHRMYW5ndWFnZSwgdHJ1ZSk7XG5cdFx0Lypcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZTogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZScsIGUpO1xuXHRcdH0pO1xuXHRcdCovXG5cdH1cblxuXHRwcml2YXRlIHN1YnNjcmliZVRvUm91dGVyKCkge1xuXHRcdHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuXHRcdFx0ZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KVxuXHRcdCkuc3Vic2NyaWJlKChldmVudDogTmF2aWdhdGlvblN0YXJ0KSA9PiB7XG5cdFx0XHRjb25zdCBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb24ubm9ybWFsaXplKGV2ZW50LnVybCkuc3BsaXQoJy8nKTtcblx0XHRcdGlmICh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTWFya2V0KSB7XG5cdFx0XHRcdGNvbnN0IG1hcmtldEluZGV4ID0gdGhpcy51cmxTdHJhdGVneS5zcGxpdCgnLycpLmluZGV4T2YoJzptYXJrZXQnKTtcblx0XHRcdFx0Y29uc3QgbWFya2V0ID0gbG9jYXRpb25bbWFya2V0SW5kZXhdO1xuXHRcdFx0XHRpZiAobWFya2V0ICE9PSB0aGlzLmN1cnJlbnRNYXJrZXQpIHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRNYXJrZXQgPSBtYXJrZXQ7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5zZXRNYXJrZXQnLCBtYXJrZXQsIGV2ZW50LnVybCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMudXNlTGFuZykge1xuXHRcdFx0XHRjb25zdCBsYW5nSW5kZXggPSB0aGlzLnVybFN0cmF0ZWd5LnNwbGl0KCcvJykuaW5kZXhPZignOmxhbmcnKTtcblx0XHRcdFx0Y29uc3QgbGFuZyA9IGxvY2F0aW9uW2xhbmdJbmRleF07XG5cdFx0XHRcdGlmIChsYW5nICE9PSB0aGlzLl9sYW5nKSB7XG5cdFx0XHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSB0aGlzLl9sYW5ndWFnZXMuZ2V0VmFsdWUoKS5maW5kKHggPT4geC5sYW5nID09PSBsYW5nKTtcblx0XHRcdFx0XHR0aGlzLl9sYW5ndWFnZS5uZXh0KGxhbmd1YWdlKTtcblx0XHRcdFx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKGxhbmcpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2Uuc2V0TGFuZycsIGxhbmcsIHRoaXMuX2xhbmcsIGxhbmdJbmRleCwgbG9jYXRpb24sIGV2ZW50LnVybCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZGV0ZWN0TGFuZ3VhZ2UoKTogc3RyaW5nIHtcblx0XHRsZXQgYWNjZXB0TGFuZ3VhZ2U6IHN0cmluZyA9IG51bGw7XG5cdFx0aWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0Lypcblx0XHRcdC8vIHNlcnZlciBzaWRlIGV4cHJlc3MgZW5naW5lXG5cdFx0XHRhcHAuZW5naW5lKCdodG1sJywgIChfLCBvcHRpb25zLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0XHRsZXQgZW5naW5lID0gbmdFeHByZXNzRW5naW5lKHtcblx0XHRcdFx0XHRib290c3RyYXA6IFNlcnZlckFwcE1vZHVsZSxcblx0XHRcdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiAncmVxdWVzdCcsIHVzZUZhY3Rvcnk6ICgpID0+IG9wdGlvbnMucmVxIH0gXVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZW5naW5lKF8sIG9wdGlvbnMsIGNhbGxiYWNrKVxuXHRcdFx0fSlcblx0XHRcdCovXG5cdFx0XHRjb25zdCByZXF1ZXN0ID0gdGhpcy5pbmplY3Rvci5nZXQoJ3JlcXVlc3QnKTtcblx0XHRcdGlmIChyZXF1ZXN0KSB7XG5cdFx0XHRcdGFjY2VwdExhbmd1YWdlID0gcmVxdWVzdC5oZWFkZXJzWydhY2NlcHQtbGFuZ3VhZ2UnXTtcblx0XHRcdFx0Y29uc3QgbGFuZ3VhZ2VzOiBzdHJpbmdbXSA9IGFjY2VwdExhbmd1YWdlLm1hdGNoKC9bYS16QS1aXFwtXXsyLDEwfS9nKSB8fCBbXTtcblx0XHRcdFx0aWYgKGxhbmd1YWdlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0YWNjZXB0TGFuZ3VhZ2UgPSBsYW5ndWFnZXNbMF0uc3BsaXQoJy0nKVswXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhY2NlcHRMYW5ndWFnZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3JlcXVlc3QnLCByZXF1ZXN0LCAnYWNjZXB0TGFuZ3VhZ2UnLCBhY2NlcHRMYW5ndWFnZSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmlzUGxhdGZvcm1TZXJ2ZXInLCB0aGlzLnBsYXRmb3JtSWQsIGFjY2VwdExhbmd1YWdlKTtcblx0XHR9IGVsc2UgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGFjY2VwdExhbmd1YWdlID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldEJyb3dzZXJMYW5nKCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUm91dGVTZXJ2aWNlLmlzUGxhdGZvcm1Ccm93c2VyJywgdGhpcy5wbGF0Zm9ybUlkLCBhY2NlcHRMYW5ndWFnZSk7XG5cdFx0fVxuXHRcdGxldCBkZXRlY3RlZExhbmd1YWdlOiBzdHJpbmcgPSB0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMuZGVmYXVsdExhbmd1YWdlO1xuXHRcdGNvbnN0IHJlZ2V4cDogUmVnRXhwID0gbmV3IFJlZ0V4cChgKCR7dGhpcy5jb3JlU2VydmljZS5vcHRpb25zLmxhbmd1YWdlcyA/IHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5sYW5ndWFnZXMubWFwKHggPT4geC5sYW5nKS5qb2luKCd8JykgOiAnJ30pYCwgJ2dpJyk7XG5cdFx0Y29uc3QgbWF0Y2ggPSAoYWNjZXB0TGFuZ3VhZ2UgfHwgJycpLm1hdGNoKHJlZ2V4cCk7XG5cdFx0ZGV0ZWN0ZWRMYW5ndWFnZSA9IG1hdGNoID8gbWF0Y2hbMF0gOiBkZXRlY3RlZExhbmd1YWdlO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdSb3V0ZVNlcnZpY2UuZGV0ZWN0TGFuZ3VhZ2UnLCBkZXRlY3RlZExhbmd1YWdlKTtcblx0XHRyZXR1cm4gZGV0ZWN0ZWRMYW5ndWFnZTtcblx0fVxuXG5cdHB1YmxpYyBnZXRUaW1lKCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRyZXR1cm4gKHBlcmZvcm1hbmNlIHx8IERhdGUpLm5vdygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCB0aW1lID0gcHJvY2Vzcy5ocnRpbWUoKTtcblx0XHRcdHJldHVybiAodGltZVswXSAqIDFlOSArIHRpbWVbMV0pIC8gMWU2O1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzdGFydCgpIHtcblx0XHRSb3V0ZVNlcnZpY2Uuc3RhcnRUaW1lID0gdGhpcy5nZXRUaW1lKCk7XG5cdH1cblxuXHRwdWJsaWMgZW5kKCkge1xuXHRcdFJvdXRlU2VydmljZS5lbmRUaW1lID0gdGhpcy5nZXRUaW1lKCk7XG5cdFx0Y29uc29sZS5sb2coJ1JvdXRlU2VydmljZS5lbmQnLCBSb3V0ZVNlcnZpY2UuZW5kVGltZSAtIFJvdXRlU2VydmljZS5zdGFydFRpbWUpO1xuXHR9XG5cbn1cbiJdfQ==