import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { Label } from './label';
import * as i0 from "@angular/core";
export declare class LabelKey {
    id?: string;
    value?: string;
    defaultValue?: string;
}
export declare class LabelService<T extends Label> extends ApiService<T> {
    protected injector: Injector;
    get collection(): string;
    private keys;
    private values$;
    private emitter$;
    missingHandler?: Function;
    constructor(injector: Injector);
    transform(key: string, defaultValue?: string, params?: any): string | undefined;
    transform$(key: string, defaultValue?: string, params?: any): Observable<string | undefined>;
    observe$(): Observable<{
        [key: string]: string;
    }>;
    collect$(): Observable<{
        [key: string]: string;
    }>;
    parseLabel(value: string, params: any): string;
    private getLabel;
    private getMissingLabel;
    static ɵfac: i0.ɵɵFactoryDef<LabelService<any>>;
    static ɵprov: i0.ɵɵInjectableDef<LabelService<any>>;
}
