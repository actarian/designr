import { Type } from '@angular/core';
import { Outlet, Outlets } from './outlet';
import { OutletDefaultComponent } from './outlet-default.component';
import * as i0 from "@angular/core";
export declare class OutletResolverService {
    outlets: Outlets;
    constructor(outlets: Outlets);
    resolve(outlet: Outlet): Type<OutletDefaultComponent>;
    static ɵfac: i0.ɵɵFactoryDef<OutletResolverService>;
    static ɵprov: i0.ɵɵInjectableDef<OutletResolverService>;
}
