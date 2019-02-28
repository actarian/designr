import { Type } from '@angular/core';
import { Outlet, Outlets } from './outlet';
import { OutletDefaultComponent } from './outlet-default.component';
export declare class OutletResolverService {
    outlets: Outlets;
    constructor(outlets: Outlets);
    resolve(outlet: Outlet): Type<OutletDefaultComponent>;
}
