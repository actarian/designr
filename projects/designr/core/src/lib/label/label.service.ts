import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, debounceTime, filter, map, switchMap, tap } from 'rxjs/operators';
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

	private keys: { [key: string]: LabelKey; } = {};
	private values$: BehaviorSubject<{ [key: string]: string; }> = new BehaviorSubject({});
	private emitter$: EventEmitter<any> = new EventEmitter();

	public missingHandler?: Function;

	constructor(
		protected injector: Injector,
	) {
		super(injector);
	}

	transform(key: string, defaultValue?: string, params?: any): string | undefined {
		const values = this.values$.getValue();
		if (values.hasOwnProperty(key)) {
			return this.parseLabel(values[key], params);
		} else if (!this.keys.hasOwnProperty(key)) {
			values[key] = null;
			Object.defineProperty(this.keys, key, {
				value: { id: key, defaultValue: defaultValue },
				enumerable: true,
				writable: false,
			});
			this.emitter$.emit();
			return null;
		}
	}

	transform$(key: string, defaultValue?: string, params?: any): Observable<string | undefined> {
		const values = this.values$.getValue();
		if (values.hasOwnProperty(key)) {
			return of(this.parseLabel(values[key], params));
		} else if (!this.keys.hasOwnProperty(key)) {
			values[key] = null;
			Object.defineProperty(this.keys, key, {
				value: { id: key, defaultValue: defaultValue },
				enumerable: true,
				writable: false,
			});
			this.emitter$.emit();
		}
		return this.values$.pipe(
			map(values => this.parseLabel(values[key], params))
		);
	}

	observe$(): Observable<{ [key: string]: string; }> {
		return this.emitter$.pipe(
			debounceTime(1),
			switchMap(x => this.collect$()),
			filter(x => x !== null),
		);
	}

	collect$(): Observable<{ [key: string]: string; }> {
		if (Object.keys(this.keys).length) {
			const keys = Object.keys(this.keys).map(x => this.keys[x]);
			this.keys = {};
			return this.statePost(keys).pipe(
				map((labels: LabelKey[]) => {
					return labels.reduce((values, x) => {
						values[x.id] = this.getLabel(x);
						return values;
					}, {});
				}),
				tap((labels: { [key: string]: string; }) => {
					const values = this.values$.getValue();
					Object.assign(values, labels);
					this.values$.next(values);
				}),
				catchError(error => {
					console.log(error);
					const labels = keys.reduce((values, x) => {
						values[x.id] = this.getLabel(x);
						return values;
					}, {});
					const values = this.values$.getValue();
					Object.assign(values, labels);
					// return this.values$.next(values);
					return of(null);
				}),
			);
		} else {
			return of(null);
		}
	}

	public parseLabel(value: string, params: any): string {
		if (value && params) {
			const TEMPLATE_REGEXP: RegExp = /@([^{}\s]*)/g;
			return value.replace(TEMPLATE_REGEXP, (text: string, key: string) => {
				const replacer: string = params[key] as string;
				return typeof replacer !== 'undefined' ? replacer : text;
			});
		} else {
			return value;
		}
	}

	private getLabel(label: LabelKey): string | undefined {
		return label.value || label.defaultValue || this.getMissingLabel(label);
	}

	private getMissingLabel(label: LabelKey): string | undefined {
		if (typeof this.missingHandler === 'function') {
			return this.missingHandler(label);
		}
		return label.id;
	}

}
