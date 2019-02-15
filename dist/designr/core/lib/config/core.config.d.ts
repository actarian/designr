import { InjectionToken } from '@angular/core';
import { AuthStrategy } from '../auth/auth.service';
export declare class Language {
    id?: number;
    name?: string;
    lang?: string;
}
export declare class CoreTransitionConfig {
    appId?: string;
    constructor(options?: CoreTransitionConfig);
}
export declare class CorePrebootConfig {
    appRoot?: string;
    constructor(options?: CorePrebootConfig);
}
export declare class CoreConfig {
    assets?: string;
    authStrategy?: AuthStrategy;
    defaultLanguage?: string;
    defaultMarket?: string;
    languages?: Language[];
    origin?: string;
    preboot?: CorePrebootConfig;
    production?: boolean;
    public?: string;
    transition?: CoreTransitionConfig;
    urlStrategy?: string;
    useLang?: boolean;
    useMarket?: boolean;
    useServiceWorker?: boolean;
    routing?: any;
    constructor(options?: CoreConfig);
}
export declare const CORE_CONFIG: InjectionToken<CoreConfig>;
