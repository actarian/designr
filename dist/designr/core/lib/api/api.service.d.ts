import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injector } from '@angular/core';
import { StateKey, TransferState } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { CoreConfig } from '../config/core.config';
import { Logger } from '../logger/logger.service';
export declare class ApiRequestOptions {
    headers?: HttpHeaders;
    params?: HttpParams;
    constructor(params?: {});
}
export declare class ApiService<T> {
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
    getStateKey(url: string, model: {}): StateKey<any>;
    stateGet(first?: string | {}, second?: {}): Observable<any>;
    statePost(first: string | {}, second?: {}, third?: {}): Observable<any>;
}
