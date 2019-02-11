import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injector } from '@angular/core';
import { StateKey, TransferState } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { CoreConfig } from '../config/core.config';
import { Logger } from '../logger/logger';
import { Identity } from '../models/identity';
export declare class ApiRequestOptions {
    headers?: HttpHeaders;
    params?: HttpParams;
    constructor(options?: {});
}
export declare class ApiService<T extends Identity> {
    protected injector: Injector;
    readonly collection: string;
    private _logger;
    readonly logger: Logger;
    private _http;
    readonly http: HttpClient;
    private _state;
    readonly state: TransferState;
    private _platformId;
    readonly platformId: string;
    private _config;
    readonly config: CoreConfig;
    private _origin;
    readonly origin: string;
    readonly url: string;
    constructor(injector: Injector);
    getUrl(method?: string): string;
    get(first?: string | {}, second?: {}): Observable<any>;
    post(first: string | {}, second?: {}, third?: {}): Observable<any>;
    put(first: string | T, second?: T | {}, third?: {}): Observable<any>;
    patch(first: string | T, second?: T | {}, third?: {}): Observable<any>;
    delete(first: string | T | number, second?: T | number | {}, third?: {}): Observable<any>;
    toCamelCase(input: any): any;
    getStateKey(url: string, model: {}): StateKey<T>;
    stateGet(first?: string | {}, second?: {}): Observable<any>;
    statePost(first: string | {}, second?: {}, third?: {}): Observable<any>;
}
