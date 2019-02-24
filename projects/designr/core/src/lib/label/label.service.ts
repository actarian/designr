import { EventEmitter, Injectable, Injector } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, filter, first, map, tap } from 'rxjs/operators';
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

	// !!! new async pipe
	private collectedKeys: { [key: string]: LabelKey; } = {};
	// private cache: { [key: string]: string; } = {};

	public missingHandler?: Function;

	public cache: {} = {};
	private labels$: Subject<{ [key: string]: string; }> = new Subject();
	private emitter: EventEmitter<any> = new EventEmitter();

	constructor(
		protected injector: Injector,
	) {
		super(injector);
	}

	private parseLabel(value: string | null, key: string, defaultValue?: string, params?: any): string | any {
		console.log('parseLabel', value, key, defaultValue, params);
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
		console.log('missingLabel', key, this.missingHandler);
		if (this.missingHandler) {
			return typeof this.missingHandler === 'function' ?
				this.missingHandler(key) :
				this.missingHandler;
		}
		console.log('missingLabel', key);
		return key;
	}

	private parseParams(value: string, params: any): string {
		const TEMPLATE_REGEXP: RegExp = /@\s?([^{}\s]*)\s?/g; // /{{\s?([^{}\s]*)\s?}}/g;
		return value.replace(TEMPLATE_REGEXP, (text: string, key: string) => {
			const replacer: string = params[key] as string;
			return typeof replacer !== 'undefined' ? replacer : text;
		});
	}

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
			return this.statePost(keys).pipe(
				map((keys: LabelKey[]) => {
					// console.log('LabelService.collectKeys', JSON.stringify(keys));
					const items = {};
					keys.forEach(x => items[x.id] = x.value || x.defaultValue || x.id);
					return items;
				}),
				tap((items: { [key: string]: string; }) => {
					Object.assign(this.cache, items);
					this.labels$.next(this.cache);
					// console.log('collectKeys', this.cache);
				}),
				catchError(error => {
					// console.log('LabelService.collectKeys.error', error);
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
