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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFLakUsTUFBTSxPQUFPLFdBQVc7Ozs7OztJQUt2QixZQUM4QixVQUFrQixFQUN2QyxRQUFrQixFQUNsQixtQkFBd0M7UUFGbkIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFOekMsbUJBQWMsR0FBNEIsRUFBRSxDQUFDO1FBQzdDLFVBQUssR0FBYSxFQUFFLENBQUM7SUFNekIsQ0FBQzs7Ozs7SUFFTCxRQUFRLENBQUMsU0FBb0I7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLG1CQUFBLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQWEsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsU0FBb0I7UUFDM0Isa0VBQWtFO1FBQ2xFLE9BQU8sU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDOzs7O0lBRUQsZUFBZTs7Y0FDUixTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxPQUFPO1FBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIseURBQXlEO1FBQ3pELGtEQUFrRDtRQUNsRCxzQkFBc0I7SUFDdkIsQ0FBQzs7O1lBN0NELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7Ozt5Q0FPRSxNQUFNLFNBQUMsV0FBVztZQWJRLFFBQVE7WUFFNUIsbUJBQW1COzs7Ozs7OztJQU8zQixxQ0FBcUQ7Ozs7O0lBQ3JELDRCQUE2Qjs7Ozs7SUFHNUIsaUNBQStDOzs7OztJQUMvQywrQkFBMEI7Ozs7O0lBQzFCLDBDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhUb2tlbiB9IGZyb20gJy4vYXV0aCc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cblx0cHJpdmF0ZSBjYWNoZWRSZXF1ZXN0czogQXJyYXk8SHR0cFJlcXVlc3Q8YW55Pj4gPSBbXTtcblx0cHJpdmF0ZSBwYXRoczogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG5cdCkgeyB9XG5cblx0c2V0VG9rZW4oYXV0aFRva2VuOiBBdXRoVG9rZW4pOiB2b2lkIHtcblx0XHR0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdhdXRoVG9rZW4nLCBhdXRoVG9rZW4pO1xuXHRcdHRoaXMucmV0cnlGYWlsZWRSZXF1ZXN0cygpO1xuXHR9XG5cblx0Z2V0VG9rZW4oKTogQXV0aFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnYXV0aFRva2VuJykgYXMgQXV0aFRva2VuO1xuXHR9XG5cblx0Z2V0RmFrZVRva2VuKCk6IEF1dGhUb2tlbiB7XG5cdFx0cmV0dXJuIG5ldyBBdXRoVG9rZW4oJ2Zha2VUb2tlbicpO1xuXHR9XG5cblx0aXNWYWxpZChhdXRoVG9rZW46IEF1dGhUb2tlbik6IGJvb2xlYW4ge1xuXHRcdC8vIHJldHVybiBhIGJvb2xlYW4gcmVmbGVjdGluZyB3aGV0aGVyIG9yIG5vdCB0aGUgdG9rZW4gaXMgZXhwaXJlZFxuXHRcdHJldHVybiBhdXRoVG9rZW4gJiYgKGF1dGhUb2tlbi5leHBpcmVzSW4gPiBEYXRlLm5vdygpIHx8IGF1dGhUb2tlbi5leHBpcmVzSW4gPT09IDApO1xuXHR9XG5cblx0aXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGF1dGhUb2tlbiA9IHRoaXMuZ2V0VG9rZW4oKTtcblx0XHRyZXR1cm4gdGhpcy5pc1ZhbGlkKGF1dGhUb2tlbik7XG5cdH1cblxuXHRjb2xsZWN0RmFpbGVkUmVxdWVzdChyZXF1ZXN0KTogdm9pZCB7XG5cdFx0dGhpcy5jYWNoZWRSZXF1ZXN0cy5wdXNoKHJlcXVlc3QpO1xuXHR9XG5cblx0cmV0cnlGYWlsZWRSZXF1ZXN0cygpOiB2b2lkIHtcblx0XHQvLyB0aGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIGFmdGVyIHRoZSB0b2tlbiBpcyByZWZyZXNoZWRcblx0XHQvLyBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2UucmV0cnlGYWlsZWRSZXF1ZXN0cycpO1xuXHRcdC8vIHJldHJ5IHRoZSByZXF1ZXN0cy5cblx0fVxuXG59XG4iXX0=