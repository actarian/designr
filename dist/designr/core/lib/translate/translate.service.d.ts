import { Injector } from '@angular/core';
import { ApiService } from '../api/api.service';
export declare class Translate {
    id: string;
    value?: string;
    defaultValue?: string;
}
export declare class TranslateService extends ApiService<Translate> {
    protected injector: Injector;
    readonly collection: string;
    constructor(injector: Injector);
    use(lang: string): void;
    setDefaultLang(lang: string): void;
    addLangs(lang: string[]): void;
    getBrowserLang(): string;
}
