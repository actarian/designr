import { EventEmitter, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { Label } from './label';
export declare class LabelKey {
    id?: string;
    value?: string;
    defaultValue?: string;
}
export declare class LabelService<T extends Label> extends ApiService<T> {
    protected injector: Injector;
    readonly collection: string;
    private _language;
    readonly language: Observable<any>;
    private _languages;
    readonly languages: Observable<any[]>;
    private _lang;
    lang: string;
    events: EventEmitter<any>;
    missingHandler?: Function;
    cache: {};
    private collectedKeys;
    private labels$;
    private emitter;
    constructor(injector: Injector);
    getTranslation(lang: string): Observable<{}>;
    getLabel(key: string, defaultValue?: string, params?: any): string | any;
    private parseLabel;
    private missingLabel;
    private parseParams;
    getKey(key: string, defaultValue?: string, params?: any): Observable<string>;
    register(): Observable<any>;
    collect(): void;
    private collectKeys;
}
export declare function CustomTranslateLoader(injector: Injector): LabelService<Label>;
