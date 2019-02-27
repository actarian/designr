import { Inject, Injectable, Type } from '@angular/core';
import { Outlet, OUTLETS, Outlets } from './outlet';
import { OutletDefaultComponent } from './outlet-default.component';

@Injectable({
	providedIn: 'root'
})
export class OutletResolverService {

	public outlets: Outlets;

	constructor(
		@Inject(OUTLETS) outlets: Outlets,
	) {
		outlets = outlets || {};
	}

	resolve(outlet: Outlet): Type<OutletDefaultComponent> {
		let component: Type<OutletDefaultComponent>;
		if (outlet) {
			component = this.outlets[outlet.component] || OutletDefaultComponent;
		} else {
			component = OutletDefaultComponent;
		}
		return component;
	}

}
