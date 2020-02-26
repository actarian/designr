import { InjectionToken } from '@angular/core';
export interface Bundles {
    [key: string]: () => any;
}
export declare const BUNDLES: InjectionToken<Bundles>;
