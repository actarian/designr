/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { AuthToken } from './auth';
import { LocalStorageService } from '../storage/storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../storage/storage.service";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFLakUsTUFBTSxPQUFPLFdBQVc7Ozs7OztJQUt2QixZQUM4QixVQUFrQixFQUN2QyxRQUFrQixFQUNsQixtQkFBd0M7UUFGbkIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFOekMsbUJBQWMsR0FBNEIsRUFBRSxDQUFDO1FBQzdDLFVBQUssR0FBYSxFQUFFLENBQUM7SUFNekIsQ0FBQzs7Ozs7SUFFTCxRQUFRLENBQUMsU0FBb0I7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLG1CQUFBLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQWEsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsU0FBb0I7UUFDM0Isa0VBQWtFO1FBQ2xFLE9BQU8sU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDOzs7O0lBRUQsZUFBZTs7Y0FDUixTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxPQUFPO1FBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIseURBQXlEO1FBQ3pELGtEQUFrRDtRQUNsRCxzQkFBc0I7SUFDdkIsQ0FBQzs7O1lBN0NELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7Ozt5Q0FPRSxNQUFNLFNBQUMsV0FBVztZQWJRLFFBQVE7WUFFNUIsbUJBQW1COzs7Ozs7OztJQU8zQixxQ0FBcUQ7Ozs7O0lBQ3JELDRCQUE2Qjs7Ozs7SUFHNUIsaUNBQStDOzs7OztJQUMvQywrQkFBMEI7Ozs7O0lBQzFCLDBDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdXRoVG9rZW4gfSBmcm9tICcuL2F1dGgnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cclxuXHRwcml2YXRlIGNhY2hlZFJlcXVlc3RzOiBBcnJheTxIdHRwUmVxdWVzdDxhbnk+PiA9IFtdO1xyXG5cdHByaXZhdGUgcGF0aHM6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuXHRcdHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcclxuXHQpIHsgfVxyXG5cclxuXHRzZXRUb2tlbihhdXRoVG9rZW46IEF1dGhUb2tlbik6IHZvaWQge1xyXG5cdFx0dGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnYXV0aFRva2VuJywgYXV0aFRva2VuKTtcclxuXHRcdHRoaXMucmV0cnlGYWlsZWRSZXF1ZXN0cygpO1xyXG5cdH1cclxuXHJcblx0Z2V0VG9rZW4oKTogQXV0aFRva2VuIHtcclxuXHRcdHJldHVybiB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdhdXRoVG9rZW4nKSBhcyBBdXRoVG9rZW47XHJcblx0fVxyXG5cclxuXHRnZXRGYWtlVG9rZW4oKTogQXV0aFRva2VuIHtcclxuXHRcdHJldHVybiBuZXcgQXV0aFRva2VuKCdmYWtlVG9rZW4nKTtcclxuXHR9XHJcblxyXG5cdGlzVmFsaWQoYXV0aFRva2VuOiBBdXRoVG9rZW4pOiBib29sZWFuIHtcclxuXHRcdC8vIHJldHVybiBhIGJvb2xlYW4gcmVmbGVjdGluZyB3aGV0aGVyIG9yIG5vdCB0aGUgdG9rZW4gaXMgZXhwaXJlZFxyXG5cdFx0cmV0dXJuIGF1dGhUb2tlbiAmJiAoYXV0aFRva2VuLmV4cGlyZXNJbiA+IERhdGUubm93KCkgfHwgYXV0aFRva2VuLmV4cGlyZXNJbiA9PT0gMCk7XHJcblx0fVxyXG5cclxuXHRpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBhdXRoVG9rZW4gPSB0aGlzLmdldFRva2VuKCk7XHJcblx0XHRyZXR1cm4gdGhpcy5pc1ZhbGlkKGF1dGhUb2tlbik7XHJcblx0fVxyXG5cclxuXHRjb2xsZWN0RmFpbGVkUmVxdWVzdChyZXF1ZXN0KTogdm9pZCB7XHJcblx0XHR0aGlzLmNhY2hlZFJlcXVlc3RzLnB1c2gocmVxdWVzdCk7XHJcblx0fVxyXG5cclxuXHRyZXRyeUZhaWxlZFJlcXVlc3RzKCk6IHZvaWQge1xyXG5cdFx0Ly8gdGhpcyBtZXRob2QgY2FuIGJlIGNhbGxlZCBhZnRlciB0aGUgdG9rZW4gaXMgcmVmcmVzaGVkXHJcblx0XHQvLyBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2UucmV0cnlGYWlsZWRSZXF1ZXN0cycpO1xyXG5cdFx0Ly8gcmV0cnkgdGhlIHJlcXVlc3RzLlxyXG5cdH1cclxuXHJcbn1cclxuIl19