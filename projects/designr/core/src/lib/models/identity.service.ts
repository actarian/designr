import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { Identity } from './identity';

@Injectable({
	providedIn: 'root'
})
export class IdentityService<T extends Identity> extends ApiService<T> {

	constructor(
		protected injector: Injector
	) {
		super(injector);
	}

	get collection(): string {
		return '/api/identity';
	}

	getList(): Observable<T[]> {
		return this.get();
	}

	getDetailByIdNo404<Data>(id: number | string): Observable<T> {
		return this.get({ id }).pipe(
			map((identities: T[]) => identities[0]),
		);
	}

	getDetailById(id: number | string): Observable<T> {
		return this.get({ id });
	}

	add(identity: T) {
		return this.post(identity);
	}

	update(identity: T) {
		return this.put(identity);
	}

}
