/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { LocalStorageService } from '../storage/storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../storage/storage.service";
/** @enum {number} */
var AuthStrategy = {
    Bearer: 0,
    Cookie: 1,
};
export { AuthStrategy };
AuthStrategy[AuthStrategy.Bearer] = 'Bearer';
AuthStrategy[AuthStrategy.Cookie] = 'Cookie';
var AuthToken = /** @class */ (function () {
    function AuthToken(accessToken, expiresIn) {
        if (expiresIn === void 0) { expiresIn = 0; }
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
    }
    return AuthToken;
}());
export { AuthToken };
if (false) {
    /** @type {?} */
    AuthToken.prototype.accessToken;
    /** @type {?} */
    AuthToken.prototype.expiresIn;
}
var AuthService = /** @class */ (function () {
    function AuthService(platformId, injector, localStorageService) {
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
    AuthService.prototype.setToken = /**
     * @param {?} authToken
     * @return {?}
     */
    function (authToken) {
        this.localStorageService.set('authToken', authToken);
        this.retryFailedRequests();
    };
    /**
     * @return {?}
     */
    AuthService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.localStorageService.get('authToken')));
    };
    /**
     * @return {?}
     */
    AuthService.prototype.getFakeToken = /**
     * @return {?}
     */
    function () {
        return new AuthToken('fakeToken');
    };
    /**
     * @param {?} authToken
     * @return {?}
     */
    AuthService.prototype.isValid = /**
     * @param {?} authToken
     * @return {?}
     */
    function (authToken) {
        // return a boolean reflecting whether or not the token is expired
        return authToken && (authToken.expiresIn > Date.now() || authToken.expiresIn === 0);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.isAuthenticated = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var authToken = this.getToken();
        return this.isValid(authToken);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    AuthService.prototype.collectFailedRequest = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        this.cachedRequests.push(request);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.retryFailedRequests = /**
     * @return {?}
     */
    function () {
        // this method can be called after the token is refreshed
        // console.log('AuthService.retryFailedRequests');
        // retry the requests.
    };
    AuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: Injector },
        { type: LocalStorageService }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i0.PLATFORM_ID), i0.inject(i0.INJECTOR), i0.inject(i1.LocalStorageService)); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());
export { AuthService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7SUFHaEUsU0FBVTtJQUNWLFNBQVU7Ozs7O0FBR1g7SUFDQyxtQkFDUSxXQUFtQixFQUNuQixTQUFxQjtRQUFyQiwwQkFBQSxFQUFBLGFBQXFCO1FBRHJCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQVk7SUFDekIsQ0FBQztJQUNOLGdCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7Ozs7SUFIQyxnQ0FBMEI7O0lBQzFCLDhCQUE0Qjs7QUFJOUI7SUFRQyxxQkFDOEIsVUFBa0IsRUFDdkMsUUFBa0IsRUFDbEIsbUJBQXdDO1FBRm5CLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBTnpDLG1CQUFjLEdBQTRCLEVBQUUsQ0FBQztRQUM3QyxVQUFLLEdBQWEsRUFBRSxDQUFDO0lBTXpCLENBQUM7Ozs7O0lBRUwsOEJBQVE7Ozs7SUFBUixVQUFTLFNBQW9CO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFDQyxPQUFPLG1CQUFBLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQWEsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRUQsa0NBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELDZCQUFPOzs7O0lBQVAsVUFBUSxTQUFvQjtRQUMzQixrRUFBa0U7UUFDbEUsT0FBTyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7SUFFRCxxQ0FBZTs7O0lBQWY7O1lBQ08sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDakMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsMENBQW9COzs7O0lBQXBCLFVBQXFCLE9BQU87UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELHlDQUFtQjs7O0lBQW5CO1FBQ0MseURBQXlEO1FBQ3pELGtEQUFrRDtRQUNsRCxzQkFBc0I7SUFDdkIsQ0FBQzs7Z0JBN0NELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7NkNBT0UsTUFBTSxTQUFDLFdBQVc7Z0JBeEJRLFFBQVE7Z0JBQzVCLG1CQUFtQjs7O3NCQUY1QjtDQStEQyxBQS9DRCxJQStDQztTQTVDWSxXQUFXOzs7Ozs7SUFFdkIscUNBQXFEOzs7OztJQUNyRCw0QkFBNkI7Ozs7O0lBRzVCLGlDQUErQzs7Ozs7SUFDL0MsK0JBQTBCOzs7OztJQUMxQiwwQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLnNlcnZpY2UnO1xuXG5leHBvcnQgZW51bSBBdXRoU3RyYXRlZ3kge1xuXHRCZWFyZXIgPSAwLFxuXHRDb29raWUgPSAxLFxufVxuXG5leHBvcnQgY2xhc3MgQXV0aFRva2VuIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIGFjY2Vzc1Rva2VuOiBzdHJpbmcsXG5cdFx0cHVibGljIGV4cGlyZXNJbjogbnVtYmVyID0gMFxuXHQpIHsgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cblx0cHJpdmF0ZSBjYWNoZWRSZXF1ZXN0czogQXJyYXk8SHR0cFJlcXVlc3Q8YW55Pj4gPSBbXTtcblx0cHJpdmF0ZSBwYXRoczogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG5cdCkgeyB9XG5cblx0c2V0VG9rZW4oYXV0aFRva2VuOiBBdXRoVG9rZW4pOiB2b2lkIHtcblx0XHR0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdhdXRoVG9rZW4nLCBhdXRoVG9rZW4pO1xuXHRcdHRoaXMucmV0cnlGYWlsZWRSZXF1ZXN0cygpO1xuXHR9XG5cblx0Z2V0VG9rZW4oKTogQXV0aFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnYXV0aFRva2VuJykgYXMgQXV0aFRva2VuO1xuXHR9XG5cblx0Z2V0RmFrZVRva2VuKCk6IEF1dGhUb2tlbiB7XG5cdFx0cmV0dXJuIG5ldyBBdXRoVG9rZW4oJ2Zha2VUb2tlbicpO1xuXHR9XG5cblx0aXNWYWxpZChhdXRoVG9rZW46IEF1dGhUb2tlbik6IGJvb2xlYW4ge1xuXHRcdC8vIHJldHVybiBhIGJvb2xlYW4gcmVmbGVjdGluZyB3aGV0aGVyIG9yIG5vdCB0aGUgdG9rZW4gaXMgZXhwaXJlZFxuXHRcdHJldHVybiBhdXRoVG9rZW4gJiYgKGF1dGhUb2tlbi5leHBpcmVzSW4gPiBEYXRlLm5vdygpIHx8IGF1dGhUb2tlbi5leHBpcmVzSW4gPT09IDApO1xuXHR9XG5cblx0aXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGF1dGhUb2tlbiA9IHRoaXMuZ2V0VG9rZW4oKTtcblx0XHRyZXR1cm4gdGhpcy5pc1ZhbGlkKGF1dGhUb2tlbik7XG5cdH1cblxuXHRjb2xsZWN0RmFpbGVkUmVxdWVzdChyZXF1ZXN0KTogdm9pZCB7XG5cdFx0dGhpcy5jYWNoZWRSZXF1ZXN0cy5wdXNoKHJlcXVlc3QpO1xuXHR9XG5cblx0cmV0cnlGYWlsZWRSZXF1ZXN0cygpOiB2b2lkIHtcblx0XHQvLyB0aGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIGFmdGVyIHRoZSB0b2tlbiBpcyByZWZyZXNoZWRcblx0XHQvLyBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2UucmV0cnlGYWlsZWRSZXF1ZXN0cycpO1xuXHRcdC8vIHJldHJ5IHRoZSByZXF1ZXN0cy5cblx0fVxuXG59XG4iXX0=