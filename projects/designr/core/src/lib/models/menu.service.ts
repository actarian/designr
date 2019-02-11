import { Injectable, Injector } from '@angular/core';
import { EntityService } from './entity.service';
import { MenuItem } from './menu-item';

@Injectable({
	providedIn: 'root'
})
export class MenuService extends EntityService<MenuItem> {

	get collection(): string {
		return '/api/menu';
	}

	constructor(
		protected injector: Injector,
	) {
		super(injector);
	}

}
