import { EventEmitter, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { Translate } from './translate';
export declare class TranslateService<T extends Translate> extends ApiService<T> {
    protected injector: Injector;
    readonly collection: string;
    events: EventEmitter<any>;
    missingHandler?: Function;
    cache: {};
    private _language;
    readonly language: Observable<any>;
    private _languages;
    readonly languages: Observable<any[]>;
    private _lang;
    lang: string;
    constructor(injector: Injector);
    getTranslation(lang: string): Observable<{}>;
    getTranslate(key: string, defaultValue?: string, params?: any): string | any;
    private parseTranslate;
    private missingTranslate;
    private parseParams;
    use(lang: string): void;
    setDefaultLang(lang: string): void;
    addLangs(lang: string[]): void;
    getBrowserLang(): string;
}
export declare function CustomTranslateLoader(injector: Injector): TranslateService<Translate>;
