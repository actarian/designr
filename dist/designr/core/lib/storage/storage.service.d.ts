import { Observable } from 'rxjs';
export declare class StorageService {
    delete(name: string): void;
    exist(name: string): boolean;
    get(name: string): any;
    set(name: string, value: any, days?: number): void;
    on(): Observable<any>;
    tryGet(): StorageService;
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
}
