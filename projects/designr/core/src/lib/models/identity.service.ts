import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
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

	getDetailById(id: number | string): Observable<T> {
		return this.get({ id });
	}

}
