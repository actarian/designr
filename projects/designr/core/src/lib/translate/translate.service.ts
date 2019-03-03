import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { Translate } from './translate';

@Injectable({
	providedIn: 'root'
})
export class TranslateService<T extends Translate> extends ApiService<T> {

	get collection(): string {
		return '/api/translate';
	}

	// private cache: { [key: string]: string; } = {};
	public events: EventEmitter<any> = new EventEmitter();
	public missingHandler?: Function;
	public cache: {} = {};

	private _language: any = new BehaviorSubject({});
	public readonly language: Observable<any> = this._language.asObservable();
	private _languages: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
	public readonly languages: Observable<any[]> = this._languages.asObservable();

	private _lang: string;
	public get lang(): string {
		return this._lang;
	}
	public set lang(lang: string) {
		if (lang !== this._lang) {
			this._lang = lang;
			const language = this._languages.getValue().find(x => x.lang === lang);
			this._language.next(language);
		}
	}

	constructor(
		protected injector: Injector
	) {
		super(injector);
		this._languages.next(this.config.languages);
		this._lang = this.config.defaultLanguage;
		this.getTranslation(this.lang).subscribe(x => {
			// console.log(x);
		});
	}

	public getTranslation(lang: string): Observable<{}> {
		if (!lang || !lang.trim()) {
			return of(null);
		}
		this.lang = lang;
		if (this.cache[lang]) {
			return of(this.cache[lang]);
		} else {
			return this.get({ lang }).pipe(
				take(1),
				map((x: Translate[]) => {
					if (x[0]) {
						const labels = x[0].labels;
						this.cache[lang] = labels;
						this.events.emit(labels);
						return labels;
					} else {
						return of(null);
					}
				}),
				/*
				tap(x => {
					// this.logger.log(`found label matching "${lang}"`);
				})
				*/
			);
		}
	}

	public getTranslate(key: string, defaultValue?: string, params?: any): string | any {
		let value: string | null = null;
		let labels: any = this.cache[this.lang];
		if (labels) {
			const keys: string[] = key.split('.');
			let k = keys.shift();
			while (keys.length > 0 && labels[k]) {
				labels = labels[k];
				k = keys.shift();
			}
			value = labels[k] || `{${k}}`;
		}
		return this.parseTranslate(value, key, defaultValue, params);
	}

	private parseTranslate(value: string | null, key: string, defaultValue?: string, params?: any): string | any {
		if (value == null) {
			value = defaultValue;
		}
		if (value == null) {
			return this.missingTranslate(key);
		} else if (params) {
			return this.parseParams(value, params);
		}
		return value;
	}

	private missingTranslate(key: string): string {
		console.log('missingTranslate', key, this.missingHandler);
		if (this.missingHandler) {
			return typeof this.missingHandler === 'function' ?
				this.missingHandler(key) :
				this.missingHandler;
		}
		console.log('missingTranslate', key);
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
		return 'it';
	}
}

// !!!
export function CustomTranslateLoader(injector: Injector) {
	return new TranslateService(injector);
}
