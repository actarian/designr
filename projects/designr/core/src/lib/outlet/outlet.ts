import { InjectionToken, Type } from '@angular/core';
import { OutletDefaultComponent } from './outlet-default.component';

export interface OutletInit {
	OutletInit(): void;
}

export interface Outlets { [key: string]: Type<OutletDefaultComponent>; }

export const OUTLETS = new InjectionToken<Outlets>('core.outlets');

export class Outlet {
	// id: number | string;
	name?: string;
	component?: number | string;
}
