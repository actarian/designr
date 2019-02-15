import { Injector } from '@angular/core';
import { LocalStorageService } from '../storage/storage.service';
export declare enum AuthStrategy {
    Bearer = 0,
    Cookie = 1
}
export declare class AuthToken {
    accessToken: string;
    expiresIn: number;
    constructor(accessToken: string, expiresIn?: number);
}
export declare class AuthService {
    private platformId;
    private injector;
    private localStorageService;
    private cachedRequests;
    private paths;
    constructor(platformId: string, injector: Injector, localStorageService: LocalStorageService);
    setToken(authToken: AuthToken): void;
    getToken(): AuthToken;
    getFakeToken(): AuthToken;
    isValid(authToken: AuthToken): boolean;
    isAuthenticated(): boolean;
    collectFailedRequest(request: any): void;
    retryFailedRequests(): void;
}
