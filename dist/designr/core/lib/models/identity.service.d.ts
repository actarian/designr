import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { Identity } from './identity';
import * as i0 from "@angular/core";
export declare class IdentityService<T extends Identity> extends ApiService<T> {
    protected injector: Injector;
    constructor(injector: Injector);
    get collection(): string;
    getDetailById(id: number | string): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDef<IdentityService<any>>;
    static ɵprov: i0.ɵɵInjectableDef<IdentityService<any>>;
}
