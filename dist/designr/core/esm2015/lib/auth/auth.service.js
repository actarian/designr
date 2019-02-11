/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { LocalStorageService } from '../storage/storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../storage/storage.service";
export class AuthToken {
    /**
     * @param {?} accessToken
     * @param {?=} expiresIn
     */
    constructor(accessToken, expiresIn = 0) {
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
    }
}
if (false) {
    /** @type {?} */
    AuthToken.prototype.accessToken;
    /** @type {?} */
    AuthToken.prototype.expiresIn;
}
export class AuthService {
    /**
     * @param {?} platformId
     * @param {?} injector
     * @param {?} localStorageService
     */
    constructor(platformId, injector, localStorageService) {
        this.platformId = platformId;
        this.injector = injector;
        this.localStorageService = localStorageService;
        this.cachedRequests = [];
        this.paths = [];
    }
    /**
     * @param {?} authToken
     * @return {?}
     */
    setToken(authToken) {
        this.localStorageService.set('authToken', authToken);
        this.retryFailedRequests();
    }
    /**
     * @return {?}
     */
    getToken() {
        return (/** @type {?} */ (this.localStorageService.get('authToken')));
    }
    /**
     * @return {?}
     */
    getFakeToken() {
        return new AuthToken('fakeToken');
    }
    /**
     * @param {?} authToken
     * @return {?}
     */
    isValid(authToken) {
        // return a boolean reflecting whether or not the token is expired
        return authToken && (authToken.expiresIn > Date.now() || authToken.expiresIn === 0);
    }
    /**
     * @return {?}
     */
    isAuthenticated() {
        /** @type {?} */
        const authToken = this.getToken();
        return this.isValid(authToken);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    collectFailedRequest(request) {
        this.cachedRequests.push(request);
    }
    /**
     * @return {?}
     */
    retryFailedRequests() {
        // this method can be called after the token is refreshed
        // console.log('AuthService.retryFailedRequests');
        // retry the requests.
    }
}
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Injector },
    { type: LocalStorageService }
];
/** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i0.PLATFORM_ID), i0.inject(i0.INJECTOR), i0.inject(i1.LocalStorageService)); }, token: AuthService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.cachedRequests;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.paths;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.localStorageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBRWpFLE1BQU0sT0FBTyxTQUFTOzs7OztJQUNyQixZQUNRLFdBQW1CLEVBQ25CLFlBQW9CLENBQUM7UUFEckIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUN6QixDQUFDO0NBQ0w7OztJQUhDLGdDQUEwQjs7SUFDMUIsOEJBQTRCOztBQU85QixNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBS3ZCLFlBQzhCLFVBQWtCLEVBQ3ZDLFFBQWtCLEVBQ2xCLG1CQUF3QztRQUZuQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQU56QyxtQkFBYyxHQUE0QixFQUFFLENBQUM7UUFDN0MsVUFBSyxHQUFhLEVBQUUsQ0FBQztJQU16QixDQUFDOzs7OztJQUVMLFFBQVEsQ0FBQyxTQUFvQjtRQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sbUJBQUEsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBYSxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxTQUFvQjtRQUMzQixrRUFBa0U7UUFDbEUsT0FBTyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7SUFFRCxlQUFlOztjQUNSLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLE9BQU87UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNsQix5REFBeUQ7UUFDekQsa0RBQWtEO1FBQ2xELHNCQUFzQjtJQUN2QixDQUFDOzs7WUE3Q0QsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O3lDQU9FLE1BQU0sU0FBQyxXQUFXO1lBbkJRLFFBQVE7WUFDNUIsbUJBQW1COzs7Ozs7OztJQWMzQixxQ0FBcUQ7Ozs7O0lBQ3JELDRCQUE2Qjs7Ozs7SUFHNUIsaUNBQStDOzs7OztJQUMvQywrQkFBMEI7Ozs7O0lBQzFCLDBDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBBdXRoVG9rZW4ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgYWNjZXNzVG9rZW46IHN0cmluZyxcblx0XHRwdWJsaWMgZXhwaXJlc0luOiBudW1iZXIgPSAwXG5cdCkgeyB9XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuXHRwcml2YXRlIGNhY2hlZFJlcXVlc3RzOiBBcnJheTxIdHRwUmVxdWVzdDxhbnk+PiA9IFtdO1xuXHRwcml2YXRlIHBhdGhzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcblx0KSB7IH1cblxuXHRzZXRUb2tlbihhdXRoVG9rZW46IEF1dGhUb2tlbik6IHZvaWQge1xuXHRcdHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2F1dGhUb2tlbicsIGF1dGhUb2tlbik7XG5cdFx0dGhpcy5yZXRyeUZhaWxlZFJlcXVlc3RzKCk7XG5cdH1cblxuXHRnZXRUb2tlbigpOiBBdXRoVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdhdXRoVG9rZW4nKSBhcyBBdXRoVG9rZW47XG5cdH1cblxuXHRnZXRGYWtlVG9rZW4oKTogQXV0aFRva2VuIHtcblx0XHRyZXR1cm4gbmV3IEF1dGhUb2tlbignZmFrZVRva2VuJyk7XG5cdH1cblxuXHRpc1ZhbGlkKGF1dGhUb2tlbjogQXV0aFRva2VuKTogYm9vbGVhbiB7XG5cdFx0Ly8gcmV0dXJuIGEgYm9vbGVhbiByZWZsZWN0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSB0b2tlbiBpcyBleHBpcmVkXG5cdFx0cmV0dXJuIGF1dGhUb2tlbiAmJiAoYXV0aFRva2VuLmV4cGlyZXNJbiA+IERhdGUubm93KCkgfHwgYXV0aFRva2VuLmV4cGlyZXNJbiA9PT0gMCk7XG5cdH1cblxuXHRpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgYXV0aFRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xuXHRcdHJldHVybiB0aGlzLmlzVmFsaWQoYXV0aFRva2VuKTtcblx0fVxuXG5cdGNvbGxlY3RGYWlsZWRSZXF1ZXN0KHJlcXVlc3QpOiB2b2lkIHtcblx0XHR0aGlzLmNhY2hlZFJlcXVlc3RzLnB1c2gocmVxdWVzdCk7XG5cdH1cblxuXHRyZXRyeUZhaWxlZFJlcXVlc3RzKCk6IHZvaWQge1xuXHRcdC8vIHRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHRva2VuIGlzIHJlZnJlc2hlZFxuXHRcdC8vIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZS5yZXRyeUZhaWxlZFJlcXVlc3RzJyk7XG5cdFx0Ly8gcmV0cnkgdGhlIHJlcXVlc3RzLlxuXHR9XG5cbn1cbiJdfQ==