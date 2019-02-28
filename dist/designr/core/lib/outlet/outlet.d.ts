import { InjectionToken, Type } from '@angular/core';
import { OutletDefaultComponent } from './outlet-default.component';
export interface OutletInit {
    OutletInit(): void;
}
export interface Outlets {
    [key: string]: Type<OutletDefaultComponent>;
}
export declare const OUTLETS: InjectionToken<Outlets>;
export declare class Outlet {
    name?: string;
    component?: number | string;
}
