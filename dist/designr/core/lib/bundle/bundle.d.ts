import { InjectionToken } from '@angular/core';
export interface Bundles {
    [key: string]: string;
}
export declare const BUNDLES: InjectionToken<Bundles>;
