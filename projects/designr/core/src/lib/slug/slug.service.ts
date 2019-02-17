import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { DocumentIndex } from '../models/document';
import { EntityService } from '../models/entity.service';

@Injectable({
	providedIn: 'root'
})
export class SlugService extends EntityService<DocumentIndex> {

	private collectedKeys: { [key: string]: string; } = {};
	private cache: { [key: string]: string[]; } = {};
	private slugs$: Subject<{ [key: string]: string[]; }> = new Subject();
	private emitter: EventEmitter<any> = new EventEmitter();

	get collection(): string {
		return `/api/slug`;
	}

	getKey(key: string): Observable<string[]> {
		if (this.cache.hasOwnProperty(key)) {
			return of(this.cache[key]);
		} else {
			// console.log('SlugService.getKey', key);
			Object.defineProperty(this.collectedKeys, key, {
				value: key,
				enumerable: true,
				writable: false,
			});
			this.cache[key] = null;
		}
		// return observable of key
		return this.slugs$.pipe(
			map(items => items[key]),
			filter(item => item !== null),
		);
	}

	register(): Observable<any> {
		return this.emitter.pipe(
			// throttleTime(500),
			tap(() => {
				this.collectKeys().pipe(
					first(),
				).subscribe((keys) => {
					// console.log('SlugService.collected', keys);
				});
			})
		);
	}

	collect(): void {
		if (Object.keys(this.collectedKeys).length) {
			this.emitter.emit();
		}
	}

	private getSlugs(keys: string[]): Observable<DocumentIndex[]> {
		keys = keys || [];
		return this.statePost(keys).pipe(
			// tap(items => console.log(items)),
		);
	}

	private collectKeys(): Observable<{ [key: string]: string; }> {
		this.slugs$.next(this.cache);
		const keys = Object.keys(this.collectedKeys);
		this.collectedKeys = {};
		return this.getSlugs(keys).pipe(
			map((items: DocumentIndex[]) => {
				const dictionary = {};
				items.forEach(x => dictionary[x.mnemonic] = [x.slug]);
				return dictionary;
			}),
			tap((dictionary: { [key: string]: string; }) => {
				Object.assign(this.cache, dictionary);
				this.slugs$.next(this.cache);
			})
		);
	}

}
