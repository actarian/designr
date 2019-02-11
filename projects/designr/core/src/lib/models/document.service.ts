import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Document } from './document'; // !!! Document class conflict?
import { EntityService } from './entity.service';

@Injectable({
	providedIn: 'root'
})
export class DocumentService<T extends Document> extends EntityService<T> {

	get collection(): string {
		return '/api/document';
	}

	getDetailBySlug(slug: string): Observable<T> {
		if (!slug.trim()) {
			// if not search term, return empty identity array.
			return of();
		}
		return this.get({ slug }).pipe(
			// tap(x => this.logger.log(`found identities matching "${slug}"`)),
			switchMap(x => x[0])
		);
	}

}
