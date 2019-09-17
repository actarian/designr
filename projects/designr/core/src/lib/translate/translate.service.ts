import { isPlatformBrowser } from '@angular/common';
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { Translate } from './translate';

@Injectable({
	providedIn: 'root'
})
export class TranslateService<T extends Translate> extends ApiService<T> {

	get collection(): string {
		return '/api/translate';
	}

	public events: EventEmitter<any> = new EventEmitter();
	public missingHandler?: Function;

	private lang_: string;
	private language_: any = new BehaviorSubject<any>(undefined);
	private languages_: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
	private cache_: { [key: string]: string; } = {};

	public get lang(): string {
		return this.lang_;
	}

	public set lang(lang: string) {
		if (lang !== this.lang_) {
			this.lang_ = lang;
			const languages = this.languages_.getValue();
			if (languages.length) {
				const language = languages.find(x => x.lang === lang);
				this.language_.next(language);
			}
		}
	}

	public get language() {
		return this.language_.getValue();
	}

	public get languages() {
		return this.languages_.getValue();
	}

	constructor(
		protected injector: Injector
	) {
		super(injector);
		this.languages_.next(this.config.languages);
	}

	public observe$(): Observable<{}> {
		return this.language_.pipe(
			filter(x => x !== undefined),
			switchMap((language: any) => this.getTranslation(language.lang)),
		);
	}

	public getTranslation(lang: string): Observable<{}> {
		if (!lang || !lang.trim()) {
			return of(null);
		}
		this.lang_ = lang;
		if (this.cache_[lang]) {
			return of(this.cache_[lang]);
		} else {
			return this.get(`?lang=${lang}`, { lang }).pipe(
				// take(1),
				map((x: Translate[]) => {
					if (x.length && x[0]) {
						const labels = x[0].labels;
						this.cache_[lang] = labels;
						this.events.emit(labels);
						return labels;
					} else {
						return of(null);
					}
				}),
				// tap(x => this.logger.log(`found label matching "${lang}"`))
			);
		}
	}

	public getTranslate(key: string, defaultValue?: string, params?: any): string | any {
		// console.log('TranslateService.getTranslate', key, this.cache_, this.lang_);
		if (key) {
			let value: string | null = null;
			let labels: any = this.cache_[this.lang_];
			// console.log('labels', this.lang_, this.cache_, labels);
			if (labels) {
				const keys: string[] = key.split('.');
				let k = keys.shift();
				while (keys.length > 0 && labels[k]) {
					labels = labels[k];
					k = keys.shift();
				}
				value = labels[k]; // || `{${k}}`;
				if (typeof value !== 'string') {
					value = null;
				}
			}
			return this.parseTranslate(value, key, defaultValue, params);
		}
	}

	public transform(key: string, defaultValue?: string, params?: any): string | undefined {
		const value = this.getTranslate(key, defaultValue, params);
		return value;
	}

	private parseTranslate(value: string | null, key: string, defaultValue?: string, params?: any): string | any {
		if (value == null) {
			return defaultValue || this.missingTranslate(key);
		} else if (params) {
			return this.parseParams(value, params);
		}
		return value;
	}

	private missingTranslate(key: string): string {
		if (this.missingHandler) {
			return typeof this.missingHandler === 'function' ?
				this.missingHandler(key) :
				this.missingHandler;
		}
		return key;
	}

	private parseParams(value: string, params: any): string {
		const TEMPLATE_REGEXP: RegExp = /@([^{}\s]*)/g; // /{{\s?([^{}\s]*)\s?}}/g;
		return value.replace(TEMPLATE_REGEXP, (text: string, key: string) => {
			const replacer: string = params[key] as string;
			return typeof replacer !== 'undefined' ? replacer : text;
		});
	}

	public use(lang: string) {

	}

	public setDefaultLang(lang: string) {

	}

	public addLangs(lang: string[]) {

	}

	public getBrowserLang(): string {
		if (isPlatformBrowser(this.platformId)) {
			const lang = this.getFirstBrowserLang() || this.config.defaultLanguage; // navigator.languages ? navigator.languages[0] : (navigator.language || navigator['userLanguage'] || this.config.defaultLanguage);
			// console.log('getBrowserLang', lang, navigator.languages);
			return lang;
		} else {
			return this.config.defaultLanguage;
		}
	}

	public getFirstBrowserLang() {
		const lang = this.getFirstBrowserLocale();
		if (lang) {
			return lang.split('-')[0];
		}
	}

	public getFirstBrowserLocale() {
		const navigator = window.navigator;
		const properties = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
		let lang;
		if (Array.isArray(navigator.languages)) {
			lang = navigator.languages[0];
		}
		let i = 0;
		while (!lang && i < properties.length) {
			lang = navigator[properties[i]];
			i++;
		}
		return lang;
	}

}
