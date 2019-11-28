import { InjectionToken } from '@angular/core';
import { AuthStrategy } from '../auth/auth';
import { LoggerErrorStrategy } from '../logger/logger';
export declare class Language {
    id?: number;
    name?: string;
    lang?: string;
}
export declare class CoreTransitionConfig {
    appId: string;
    constructor(options?: CoreTransitionConfig);
}
export declare class CoreConfig {
    assets?: string;
    authStrategy?: AuthStrategy;
    defaultLanguage?: string;
    defaultMarket?: string;
    httpErrorLogStrategy?: LoggerErrorStrategy;
    languages?: Language[];
    origin?: string;
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
