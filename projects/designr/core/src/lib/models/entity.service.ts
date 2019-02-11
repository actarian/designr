import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Entity } from './entity';
import { IdentityService } from './identity.service';

@Injectable({
	providedIn: 'root'
})
export class EntityService<T extends Entity> extends IdentityService<T> {

	get collection(): string {
		return '/api/entity';
	}

	getDetailByName(name: string): Observable<T[]> {
		if (!name.trim()) {
			return of([]);
		}
		return this.get({ name });
	}

}
