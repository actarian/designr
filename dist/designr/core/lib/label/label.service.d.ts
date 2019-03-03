import { Injector } from '@angular/core';
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
    private collectedKeys;
    missingHandler?: Function;
    cache: {};
    parsers: {};
    private labels$;
    private emitter;
    constructor(injector: Injector);
    private parseLabel;
    private missingLabel;
    private parseParams;
    getKey(key: string, defaultValue?: string, params?: any): Observable<string>;
    register(): Observable<any>;
    collect(): void;
    private collectKeys;
}
