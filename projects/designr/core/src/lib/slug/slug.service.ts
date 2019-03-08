import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, debounceTime, filter, first, map, switchMap, tap } from 'rxjs/operators';
import { DocumentIndex } from '../models/document';
import { EntityService } from '../models/entity.service';

export class SlugKey {
	id?: number;
	mnemonic?: string;
	slug?: string;
}

@Injectable({
	providedIn: 'root'
})
export class SlugService extends EntityService<DocumentIndex> {

	get collection(): string {
		return `/api/slug`;
	}

	private keys: { [key: string]: SlugKey; } = {};
	private values$: BehaviorSubject<{ [key: string]: string; }> = new BehaviorSubject({});
	private emitter$: EventEmitter<any> = new EventEmitter();

	public missingHandler?: Function;

	constructor(
		protected injector: Injector,
	) {
		super(injector);
	}

	transform(key: string): string | undefined {
		const values = this.values$.getValue();
		if (values.hasOwnProperty(key)) {
			return values[key];
		} else if (!this.keys.hasOwnProperty(key)) {
			values[key] = null;
			Object.defineProperty(this.keys, key, {
				value: { mnemonic: key },
				enumerable: true,
				writable: false,
			});
			this.emitter$.emit();
			return null;
		}
	}

	transform$(key: string): Observable<string | undefined> {
		const values = this.values$.getValue();
		if (values.hasOwnProperty(key)) {
			return of(values[key]);
		} else if (!this.keys.hasOwnProperty(key)) {
			Object.defineProperty(this.keys, key, {
				value: { mnemonic: key },
				enumerable: true,
				writable: false,
			});
			this.emitter$.emit();
		}
		return this.values$.pipe(
			map(values => values[key])
		);
	}

	observe$(): Observable<{ [key: string]: string; }> {
		return this.emitter$.pipe(
			debounceTime(1),
			switchMap(x => this.collect$()),
			filter(x => x !== null),
			first(), //
		);
	}

	collect$(): Observable<{ [key: string]: string; }> {
		if (Object.keys(this.keys).length) {
			const keys = Object.keys(this.keys).map(x => this.keys[x]);
			this.keys = {};
			return this.statePost(keys).pipe(
				map((items: DocumentIndex[]) => {
					return items.reduce((values, x) => {
						values[x.mnemonic] = [x.slug];
						return values;
					}, {});
				}),
				tap((slugs: { [key: string]: string; }) => {
					const values = this.values$.getValue();
					Object.assign(values, slugs);
					this.values$.next(values);
				}),
				catchError(error => {
					console.log(error);
					const labels = keys.reduce((values, x) => {
						values[x.mnemonic] = null;
						return values;
					}, {});
					const values = this.values$.getValue();
					Object.assign(values, labels);
					return of(null);
				}),
			);
		} else {
			return of(null);
		}
	}

}
