/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { LocalStorageService } from '../storage/storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../storage/storage.service";
/** @enum {number} */
const AuthStrategy = {
    Bearer: 0,
    Cookie: 1,
};
export { AuthStrategy };
AuthStrategy[AuthStrategy.Bearer] = 'Bearer';
AuthStrategy[AuthStrategy.Cookie] = 'Cookie';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7SUFHaEUsU0FBVTtJQUNWLFNBQVU7Ozs7O0FBR1gsTUFBTSxPQUFPLFNBQVM7Ozs7O0lBQ3JCLFlBQ1EsV0FBbUIsRUFDbkIsWUFBb0IsQ0FBQztRQURyQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFZO0lBQ3pCLENBQUM7Q0FDTDs7O0lBSEMsZ0NBQTBCOztJQUMxQiw4QkFBNEI7O0FBTzlCLE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFLdkIsWUFDOEIsVUFBa0IsRUFDdkMsUUFBa0IsRUFDbEIsbUJBQXdDO1FBRm5CLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBTnpDLG1CQUFjLEdBQTRCLEVBQUUsQ0FBQztRQUM3QyxVQUFLLEdBQWEsRUFBRSxDQUFDO0lBTXpCLENBQUM7Ozs7O0lBRUwsUUFBUSxDQUFDLFNBQW9CO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxtQkFBQSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFhLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFNBQW9CO1FBQzNCLGtFQUFrRTtRQUNsRSxPQUFPLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLFNBQVMsQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQzs7OztJQUVELGVBQWU7O2NBQ1IsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDakMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsT0FBTztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLHlEQUF5RDtRQUN6RCxrREFBa0Q7UUFDbEQsc0JBQXNCO0lBQ3ZCLENBQUM7OztZQTdDRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7eUNBT0UsTUFBTSxTQUFDLFdBQVc7WUF4QlEsUUFBUTtZQUM1QixtQkFBbUI7Ozs7Ozs7O0lBbUIzQixxQ0FBcUQ7Ozs7O0lBQ3JELDRCQUE2Qjs7Ozs7SUFHNUIsaUNBQStDOzs7OztJQUMvQywrQkFBMEI7Ozs7O0lBQzFCLDBDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XG5cbmV4cG9ydCBlbnVtIEF1dGhTdHJhdGVneSB7XG5cdEJlYXJlciA9IDAsXG5cdENvb2tpZSA9IDEsXG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoVG9rZW4ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgYWNjZXNzVG9rZW46IHN0cmluZyxcblx0XHRwdWJsaWMgZXhwaXJlc0luOiBudW1iZXIgPSAwXG5cdCkgeyB9XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuXHRwcml2YXRlIGNhY2hlZFJlcXVlc3RzOiBBcnJheTxIdHRwUmVxdWVzdDxhbnk+PiA9IFtdO1xuXHRwcml2YXRlIHBhdGhzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcblx0KSB7IH1cblxuXHRzZXRUb2tlbihhdXRoVG9rZW46IEF1dGhUb2tlbik6IHZvaWQge1xuXHRcdHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2F1dGhUb2tlbicsIGF1dGhUb2tlbik7XG5cdFx0dGhpcy5yZXRyeUZhaWxlZFJlcXVlc3RzKCk7XG5cdH1cblxuXHRnZXRUb2tlbigpOiBBdXRoVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdhdXRoVG9rZW4nKSBhcyBBdXRoVG9rZW47XG5cdH1cblxuXHRnZXRGYWtlVG9rZW4oKTogQXV0aFRva2VuIHtcblx0XHRyZXR1cm4gbmV3IEF1dGhUb2tlbignZmFrZVRva2VuJyk7XG5cdH1cblxuXHRpc1ZhbGlkKGF1dGhUb2tlbjogQXV0aFRva2VuKTogYm9vbGVhbiB7XG5cdFx0Ly8gcmV0dXJuIGEgYm9vbGVhbiByZWZsZWN0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSB0b2tlbiBpcyBleHBpcmVkXG5cdFx0cmV0dXJuIGF1dGhUb2tlbiAmJiAoYXV0aFRva2VuLmV4cGlyZXNJbiA+IERhdGUubm93KCkgfHwgYXV0aFRva2VuLmV4cGlyZXNJbiA9PT0gMCk7XG5cdH1cblxuXHRpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgYXV0aFRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xuXHRcdHJldHVybiB0aGlzLmlzVmFsaWQoYXV0aFRva2VuKTtcblx0fVxuXG5cdGNvbGxlY3RGYWlsZWRSZXF1ZXN0KHJlcXVlc3QpOiB2b2lkIHtcblx0XHR0aGlzLmNhY2hlZFJlcXVlc3RzLnB1c2gocmVxdWVzdCk7XG5cdH1cblxuXHRyZXRyeUZhaWxlZFJlcXVlc3RzKCk6IHZvaWQge1xuXHRcdC8vIHRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHRva2VuIGlzIHJlZnJlc2hlZFxuXHRcdC8vIGNvbnNvbGUubG9nKCdBdXRoU2VydmljZS5yZXRyeUZhaWxlZFJlcXVlc3RzJyk7XG5cdFx0Ly8gcmV0cnkgdGhlIHJlcXVlc3RzLlxuXHR9XG5cbn1cbiJdfQ==