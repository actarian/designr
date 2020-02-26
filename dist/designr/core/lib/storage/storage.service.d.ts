import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class StorageService {
    delete(name: string): void;
    exist(name: string): boolean;
    get(name: string): any;
    set(name: string, value: any, days?: number): void;
    on(): Observable<any>;
    tryGet(): StorageService;
    static ɵfac: i0.ɵɵFactoryDef<StorageService>;
    static ɵprov: i0.ɵɵInjectableDef<StorageService>;
}
export declare class CookieStorageService implements StorageService {
    private platformId;
    private storageService;
    constructor(platformId: string, storageService: StorageService);
    tryGet(): StorageService;
    delete(name: string): void;
    exist(name: string): boolean;
    get(name: string): any;
    set(name: string, value: any, days?: number): void;
    on(): Observable<any>;
    private setter;
    private isSupported;
    static ɵfac: i0.ɵɵFactoryDef<CookieStorageService>;
    static ɵprov: i0.ɵɵInjectableDef<CookieStorageService>;
}
export declare class SessionStorageService implements StorageService {
    private platformId;
    private cookieStorageService;
    constructor(platformId: string, cookieStorageService: CookieStorageService);
    tryGet(): StorageService;
    delete(name: string): void;
    exist(name: string): boolean;
    get(name: string): any;
    on(): Observable<any>;
    set(name: string, value: any, days?: number): void;
    private isSupported;
    static ɵfac: i0.ɵɵFactoryDef<SessionStorageService>;
    static ɵprov: i0.ɵɵInjectableDef<SessionStorageService>;
}
export declare class LocalStorageService implements StorageService {
    private platformId;
    private cookieStorageService;
    constructor(platformId: string, cookieStorageService: CookieStorageService);
    tryGet(): StorageService;
    delete(name: string): void;
    exist(name: string): boolean;
    get(name: string): any;
    on(): Observable<any>;
    set(name: string, value: any, days?: number): void;
    private isSupported;
    static ɵfac: i0.ɵɵFactoryDef<LocalStorageService>;
    static ɵprov: i0.ɵɵInjectableDef<LocalStorageService>;
}
