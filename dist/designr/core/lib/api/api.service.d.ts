import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injector } from '@angular/core';
import { StateKey, TransferState } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { CoreConfig } from '../config/core.config';
import { Logger } from '../logger/logger.service';
import * as i0 from "@angular/core";
export declare class ApiRequestOptions {
    headers?: HttpHeaders;
    params?: HttpParams;
    constructor(params?: {});
}
export declare class ApiService<T> {
    protected injector: Injector;
    get collection(): string;
    private _logger;
    get logger(): Logger;
    private _http;
    get http(): HttpClient;
    private _state;
    get state(): TransferState;
    private _platformId;
    get platformId(): string;
    private _config;
    get config(): CoreConfig;
    private _origin;
    get origin(): string;
    get url(): string;
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
    static ɵfac: i0.ɵɵFactoryDef<ApiService<any>>;
    static ɵprov: i0.ɵɵInjectableDef<ApiService<any>>;
}
