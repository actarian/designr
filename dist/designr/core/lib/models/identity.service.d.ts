import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { Identity } from './identity';
export declare class IdentityService<T extends Identity> extends ApiService<T> {
    protected injector: Injector;
    constructor(injector: Injector);
    readonly collection: string;
    getDetailById(id: number | string): Observable<T>;
}
