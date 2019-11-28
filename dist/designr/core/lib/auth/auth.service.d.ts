import { Injector } from '@angular/core';
import { AuthToken } from './auth';
import { LocalStorageService } from '../storage/storage.service';
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
