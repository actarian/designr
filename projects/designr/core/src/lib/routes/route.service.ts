

import { isPlatformBrowser, isPlatformServer, Location } from '@angular/common';
import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { CoreService } from '../config/core.service';
import { SegmentPipe } from '../pipes/segment.pipe';
import { TranslateService } from '../translate/translate.service';

declare const Buffer;
declare const process;

// @dynamic
@Injectable({
	providedIn: 'root'
})
export class RouteService {

	static startTime: number;
	static endTime: number;
	private urlStrategy: string;
	private _language: any = new BehaviorSubject({});
	public readonly language: Observable<any> = this._language.asObservable();
	private _languages: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
	public readonly languages: Observable<any[]> = this._languages.asObservable();
	private _lang: string;
	private path: string;
	public params: Observable<Params>;
	public queryParams: Observable<Params>;
	public currentMarket: string;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private coreService: CoreService,
		private injector: Injector,
		private translateService: TranslateService,
		private location: Location,
		private route: ActivatedRoute,
		private router: Router,
		private segment: SegmentPipe,
	) {
		this.urlStrategy = this.coreService.options.urlStrategy;
		this._languages.next(this.coreService.options.languages);
		this.currentMarket = this.coreService.options.defaultMarket;
		this.setLanguages();
		if (this.coreService.options.useLang || this.coreService.options.useMarket) {
			this.subscribeToRouter();
		}
	}

	private get lang(): string {
		return this._lang;
	}

	private set lang(lang: string) {
		if (lang !== this._lang) {
			this._lang = lang;
			const language = this._languages.getValue().find(x => x.lang === lang);
			this._language.next(language);
			this.translateService.use(lang);
			// console.log('RouteService.set lang', lang, this.coreService.options.useLang);
			if (this.coreService.options.useLang) {
				const _lang: string = this._lang;
				let path = this.location.path();
				if (path.indexOf(`/${_lang}`) === 0) {
					path = path.replace(`/${_lang}`, `/${lang}`);
				} else if (path.indexOf(`/${lang}`) !== 0) {
					path = `/${lang}` + path;
				}
				this.path = path;
				// const langIndex = this.urlStrategy.split('/').indexOf(':lang');
			}
		}
	}

	public get currentLang(): string {
		return this._lang;
	}

	public pageParams$: BehaviorSubject<Params> = new BehaviorSubject({});
	public getPageParams(): Observable<Params> {
		// console.log('RouteService.getPageParams', this.router.url);
		return this.route.queryParams.pipe(
			distinctUntilChanged(),
			switchMap(params => {
				// console.log(params);
				const parsed = this.parseParams(params);
				this.pageParams$.next(parsed);
				return of(parsed);
			}),
			// tap(params => console.log('RouteService.getPageParams', params)),
		);
	}

	public parseParams(params: any): any {
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

	public serializeParams(params: any) {
		const serialized = {};
		Object.keys(params).forEach(k => serialized[k] = this.serialize(params[k]));
		return serialized;
	}

	public parse(base64) {
		try {
			if (isPlatformBrowser(this.platformId)) {
				return JSON.parse(window.atob(base64));
			} else {
				return JSON.parse(Buffer.from(base64, 'base64').toString('ascii'));
			}
		} catch {
			return null;
		}
	}

	public serialize(object) {
		if (isPlatformBrowser(this.platformId)) {
			return window.btoa(JSON.stringify(object));
		} else {
			return Buffer.from(JSON.stringify(object), 'ascii').toString('base64');
		}
	}

	public getId(): number {
		return +this.route.snapshot.paramMap.get('id');
	}

	public getSlug(): string {
		return this.route.snapshot.paramMap.get('slug');
	}

	public toRoute(data: any[] | string): any[] {
		const segments = this.segment.transform(data);
		if (this.coreService.options.useMarket) {
			const market: string = this.currentMarket;
			const marketIndex = this.urlStrategy.split('/').indexOf(':market');
			segments.splice(marketIndex, 0, market);
		}
		if (this.coreService.options.useLang) {
			const lang: string = this._lang;
			const langIndex = this.urlStrategy.split('/').indexOf(':lang');
			segments.splice(langIndex, 0, lang);
		}
		// console.log('RouteService.toRoute', segments);
		return segments;
	}

	public toSlug(data: any[] | string): any[] {
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

	public toParams(data: any): any {
		return {
			data: window.btoa(JSON.stringify(data))
		};
	}

	public toData(params: any): any {
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

	public setLanguage(lang: string, silent?: boolean) {
		this.lang = lang;
		if (this.coreService.options.useLang && this.path) {
			// console.log('RouteService.setLanguage', this.path, this._lang, lang, silent);
			if (silent) {
				this.location.replaceState(this.path);
			} else {
				this.router.navigate([this.path]);
			}
		}
	}

	// PRIVATE METHODS

	private setLanguages() {
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

	private subscribeToRouter() {
		this.router.events.pipe(
			filter(event => event instanceof NavigationStart)
		).subscribe((event: NavigationStart) => {
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

	private detectLanguage(): string {
		let acceptLanguage: string = null;
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
				const languages: string[] = acceptLanguage.match(/[a-zA-Z\-]{2,10}/g) || [];
				if (languages.length > 0) {
					acceptLanguage = languages[0].split('-')[0];
				} else {
					acceptLanguage = null;
				}
				// console.log('request', request, 'acceptLanguage', acceptLanguage);
			}
			// console.log('RouteService.isPlatformServer', this.platformId, acceptLanguage);
		} else if (isPlatformBrowser(this.platformId)) {
			acceptLanguage = this.translateService.getBrowserLang();
			// console.log('RouteService.isPlatformBrowser', this.platformId, acceptLanguage);
		}
		let detectedLanguage: string = this.coreService.options.defaultLanguage;
		const regexp: RegExp = new RegExp(`(${this.coreService.options.languages ? this.coreService.options.languages.map(x => x.lang).join('|') : ''})`, 'gi');
		const match = (acceptLanguage || '').match(regexp);
		detectedLanguage = match ? match[0] : detectedLanguage;
		// console.log('RouteService.detectLanguage', detectedLanguage);
		return detectedLanguage;
	}

	public getTime() {
		if (isPlatformBrowser(this.platformId)) {
			return (performance || Date).now();
		} else {
			const time = process.hrtime();
			return (time[0] * 1e9 + time[1]) / 1e6;
		}
	}

}
