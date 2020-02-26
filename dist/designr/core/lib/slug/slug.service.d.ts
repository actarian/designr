import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentIndex } from '../models/document';
import { EntityService } from '../models/entity.service';
import * as i0 from "@angular/core";
export declare class SlugKey {
    id?: number;
    mnemonic?: string;
    slug?: string;
}
export declare class SlugService extends EntityService<DocumentIndex> {
    protected injector: Injector;
    get collection(): string;
    private keys;
    private values$;
    private emitter$;
    missingHandler?: Function;
    constructor(injector: Injector);
    transform(key: string): string | undefined;
    transform$(key: string): Observable<string | undefined>;
    observe$(): Observable<{
        [key: string]: string;
    }>;
    collect$(): Observable<{
        [key: string]: string;
    }>;
    static ɵfac: i0.ɵɵFactoryDef<SlugService>;
    static ɵprov: i0.ɵɵInjectableDef<SlugService>;
}
