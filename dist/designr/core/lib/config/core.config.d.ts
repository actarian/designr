import { InjectionToken, Type } from '@angular/core';
import { PageComponent } from '../pages/page.component';
import { Pages } from '../pages/pages';
export declare enum AuthStrategy {
    Bearer = 0,
    Cookie = 1
}
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
    defaultPage?: Type<PageComponent>;
    editor?: boolean;
    enableTracing?: boolean;
    languages?: Language[];
    notFoundPage?: Type<PageComponent>;
    origin?: string;
    pages?: Pages;
    preboot?: CorePrebootConfig;
    production?: boolean;
    public?: string;
    transition?: CoreTransitionConfig;
    urlStrategy?: string;
    useHash?: boolean;
    useLang?: boolean;
    useMarket?: boolean;
    useServiceWorker?: boolean;
    constructor(options?: CoreConfig);
}
export declare const CORE_CONFIG: InjectionToken<CoreConfig>;
