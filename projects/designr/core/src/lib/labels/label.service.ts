import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, filter, first, map, take, tap } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { Label } from './label';

export class LabelKey {
	id?: string;
	value?: string;
	defaultValue?: string;
}

@Injectable({
	providedIn: 'root'
})
export class LabelService<T extends Label> extends ApiService<T> {

	get collection(): string {
		return '/api/label';
	}

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

	public events: EventEmitter<any> = new EventEmitter();
	public missingHandler?: Function;
	public cache: {} = {};

	// !!! new async pipe
	private collectedKeys: { [key: string]: LabelKey; } = {};
	// private cache: { [key: string]: string; } = {};
	private labels$: Subject<{ [key: string]: string; }> = new Subject();
	private emitter: EventEmitter<any> = new EventEmitter();

	constructor(
		protected injector: Injector,
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
				map((x: Label[]) => {
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

	public getLabel(key: string, defaultValue?: string, params?: any): string | any {
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
		return this.parseLabel(value, key, defaultValue, params);
	}

	private parseLabel(value: string | null, key: string, defaultValue?: string, params?: any): string | any {
		if (value == null) {
			value = defaultValue;
		}
		if (value == null) {
			return this.missingLabel(key);
		} else if (params) {
			return this.parseParams(value, params);
		}
		return value;
	}

	private missingLabel(key: string): string {
		if (this.missingHandler) {
			return typeof this.missingHandler === 'function' ?
				this.missingHandler(key) :
				this.missingHandler;
		}
		return key;
	}

	private parseParams(value: string, params: any): string {
		const TEMPLATE_REGEXP: RegExp = /@\s?([^{}\s]*)\s?/g; // /{{\s?([^{}\s]*)\s?}}/g;
		return value.replace(TEMPLATE_REGEXP, (text: string, key: string) => {
			const replacer: string = params[key] as string;
			return typeof replacer !== 'undefined' ? replacer : text;
		});
	}

	//

	getKey(key: string, defaultValue?: string, params?: any): Observable<string> {
		if (this.cache.hasOwnProperty(key)) {
			return of(this.cache[key]);
		} else {
			Object.defineProperty(this.collectedKeys, key, {
				value: { id: key, defaultValue: defaultValue },
				enumerable: true,
				writable: false,
			});
			this.cache[key] = null;
		}
		return this.labels$.pipe(
			map(items => items[key] || null),
			filter(label => label !== null),
			// tap(label => console.log('getKey', key, label)),
			map(label => this.parseLabel(label, key, defaultValue, params)),
		);
	}

	register(): Observable<any> {
		return this.emitter.pipe(
			// throttleTime(500),
			tap(() => {
				this.collectKeys().pipe(
					first(),
				).subscribe((keys) => {
					// console.log('LabelService.collected', keys);
				});
			})
		);
	}

	collect(): void {
		if (Object.keys(this.collectedKeys).length) {
			this.emitter.emit();
		}
	}

	private collectKeys(): Observable<{ [key: string]: string; }> {
		const keys = Object.keys(this.collectedKeys).map(x => this.collectedKeys[x]);
		this.collectedKeys = {};
		if (keys.length) {
			// console.log('LabelService.collectKeys', JSON.stringify(keys));
			return this.statePost(`/api/i18n/labels`, keys).pipe(
				map((keys: LabelKey[]) => {
					const items = {};
					keys.forEach(x => items[x.id] = x.value || x.defaultValue);
					return items;
				}),
				tap((items: { [key: string]: string; }) => {
					Object.assign(this.cache, items);
					this.labels$.next(this.cache);
					// console.log('collectKeys', this.cache);
				}),
				catchError(error => {
					console.log('LabelService.collectKeys.error', error);
					return of({});
				}),
			);
			/*
			return this.post(`/api/i18n/labels`, keys).pipe(
				map((keys: LabelKey[]) => {
					const items = {};
					keys.forEach(x => items[x.id] = x.value || x.defaultValue);
					return items;
				}),
				tap((items: { [key: string]: string; }) => {
					Object.assign(this.cache, items);
					this.labels$.next(this.cache);
					// console.log('collectKeys', this.cache);
				}),
			);
			*/
		} else {
			return of({});
		}
	}

}

export function CustomTranslateLoader(injector: Injector) {
	return new LabelService(injector);
}

