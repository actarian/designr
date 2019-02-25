import { InjectionToken } from '@angular/core';
export interface CoreModules {
    [key: string]: string;
}
export declare const CORE_MODULES: InjectionToken<CoreModules>;
