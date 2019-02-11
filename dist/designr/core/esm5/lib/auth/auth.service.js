/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { LocalStorageService } from '../storage/storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../storage/storage.service";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBRWpFO0lBQ0MsbUJBQ1EsV0FBbUIsRUFDbkIsU0FBcUI7UUFBckIsMEJBQUEsRUFBQSxhQUFxQjtRQURyQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFZO0lBQ3pCLENBQUM7SUFDTixnQkFBQztBQUFELENBQUMsQUFMRCxJQUtDOzs7O0lBSEMsZ0NBQTBCOztJQUMxQiw4QkFBNEI7O0FBSTlCO0lBUUMscUJBQzhCLFVBQWtCLEVBQ3ZDLFFBQWtCLEVBQ2xCLG1CQUF3QztRQUZuQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQU56QyxtQkFBYyxHQUE0QixFQUFFLENBQUM7UUFDN0MsVUFBSyxHQUFhLEVBQUUsQ0FBQztJQU16QixDQUFDOzs7OztJQUVMLDhCQUFROzs7O0lBQVIsVUFBUyxTQUFvQjtRQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQ0MsT0FBTyxtQkFBQSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFhLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVELGtDQUFZOzs7SUFBWjtRQUNDLE9BQU8sSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCw2QkFBTzs7OztJQUFQLFVBQVEsU0FBb0I7UUFDM0Isa0VBQWtFO1FBQ2xFLE9BQU8sU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDOzs7O0lBRUQscUNBQWU7OztJQUFmOztZQUNPLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELDBDQUFvQjs7OztJQUFwQixVQUFxQixPQUFPO1FBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCx5Q0FBbUI7OztJQUFuQjtRQUNDLHlEQUF5RDtRQUN6RCxrREFBa0Q7UUFDbEQsc0JBQXNCO0lBQ3ZCLENBQUM7O2dCQTdDRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7OzZDQU9FLE1BQU0sU0FBQyxXQUFXO2dCQW5CUSxRQUFRO2dCQUM1QixtQkFBbUI7OztzQkFGNUI7Q0EwREMsQUEvQ0QsSUErQ0M7U0E1Q1ksV0FBVzs7Ozs7O0lBRXZCLHFDQUFxRDs7Ozs7SUFDckQsNEJBQTZCOzs7OztJQUc1QixpQ0FBK0M7Ozs7O0lBQy9DLCtCQUEwQjs7Ozs7SUFDMUIsMENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEF1dGhUb2tlbiB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBhY2Nlc3NUb2tlbjogc3RyaW5nLFxuXHRcdHB1YmxpYyBleHBpcmVzSW46IG51bWJlciA9IDBcblx0KSB7IH1cbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG5cdHByaXZhdGUgY2FjaGVkUmVxdWVzdHM6IEFycmF5PEh0dHBSZXF1ZXN0PGFueT4+ID0gW107XG5cdHByaXZhdGUgcGF0aHM6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0cHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuXHQpIHsgfVxuXG5cdHNldFRva2VuKGF1dGhUb2tlbjogQXV0aFRva2VuKTogdm9pZCB7XG5cdFx0dGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnYXV0aFRva2VuJywgYXV0aFRva2VuKTtcblx0XHR0aGlzLnJldHJ5RmFpbGVkUmVxdWVzdHMoKTtcblx0fVxuXG5cdGdldFRva2VuKCk6IEF1dGhUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2F1dGhUb2tlbicpIGFzIEF1dGhUb2tlbjtcblx0fVxuXG5cdGdldEZha2VUb2tlbigpOiBBdXRoVG9rZW4ge1xuXHRcdHJldHVybiBuZXcgQXV0aFRva2VuKCdmYWtlVG9rZW4nKTtcblx0fVxuXG5cdGlzVmFsaWQoYXV0aFRva2VuOiBBdXRoVG9rZW4pOiBib29sZWFuIHtcblx0XHQvLyByZXR1cm4gYSBib29sZWFuIHJlZmxlY3Rpbmcgd2hldGhlciBvciBub3QgdGhlIHRva2VuIGlzIGV4cGlyZWRcblx0XHRyZXR1cm4gYXV0aFRva2VuICYmIChhdXRoVG9rZW4uZXhwaXJlc0luID4gRGF0ZS5ub3coKSB8fCBhdXRoVG9rZW4uZXhwaXJlc0luID09PSAwKTtcblx0fVxuXG5cdGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcblx0XHRjb25zdCBhdXRoVG9rZW4gPSB0aGlzLmdldFRva2VuKCk7XG5cdFx0cmV0dXJuIHRoaXMuaXNWYWxpZChhdXRoVG9rZW4pO1xuXHR9XG5cblx0Y29sbGVjdEZhaWxlZFJlcXVlc3QocmVxdWVzdCk6IHZvaWQge1xuXHRcdHRoaXMuY2FjaGVkUmVxdWVzdHMucHVzaChyZXF1ZXN0KTtcblx0fVxuXG5cdHJldHJ5RmFpbGVkUmVxdWVzdHMoKTogdm9pZCB7XG5cdFx0Ly8gdGhpcyBtZXRob2QgY2FuIGJlIGNhbGxlZCBhZnRlciB0aGUgdG9rZW4gaXMgcmVmcmVzaGVkXG5cdFx0Ly8gY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlLnJldHJ5RmFpbGVkUmVxdWVzdHMnKTtcblx0XHQvLyByZXRyeSB0aGUgcmVxdWVzdHMuXG5cdH1cblxufVxuIl19