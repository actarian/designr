import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { AuthToken } from './auth';
import { LocalStorageService } from '../storage/storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../storage/storage.service";
export class AuthService {
    constructor(platformId, injector, localStorageService) {
        this.platformId = platformId;
        this.injector = injector;
        this.localStorageService = localStorageService;
        this.cachedRequests = [];
        this.paths = [];
    }
    setToken(authToken) {
        this.localStorageService.set('authToken', authToken);
        this.retryFailedRequests();
    }
    getToken() {
        return this.localStorageService.get('authToken');
    }
    getFakeToken() {
        return new AuthToken('fakeToken');
    }
    isValid(authToken) {
        // return a boolean reflecting whether or not the token is expired
        return authToken && (authToken.expiresIn > Date.now() || authToken.expiresIn === 0);
    }
    isAuthenticated() {
        const authToken = this.getToken();
        return this.isValid(authToken);
    }
    collectFailedRequest(request) {
        this.cachedRequests.push(request);
    }
    retryFailedRequests() {
        // this method can be called after the token is refreshed
        // console.log('AuthService.retryFailedRequests');
        // retry the requests.
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i1.LocalStorageService)); };
AuthService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.Injector }, { type: i1.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUtqRSxNQUFNLE9BQU8sV0FBVztJQUt2QixZQUM4QixVQUFrQixFQUN2QyxRQUFrQixFQUNsQixtQkFBd0M7UUFGbkIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFOekMsbUJBQWMsR0FBNEIsRUFBRSxDQUFDO1FBQzdDLFVBQUssR0FBYSxFQUFFLENBQUM7SUFNekIsQ0FBQztJQUVMLFFBQVEsQ0FBQyxTQUFvQjtRQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQWMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUFvQjtRQUMzQixrRUFBa0U7UUFDbEUsT0FBTyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxlQUFlO1FBQ2QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0JBQW9CLENBQUMsT0FBTztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsbUJBQW1CO1FBQ2xCLHlEQUF5RDtRQUN6RCxrREFBa0Q7UUFDbEQsc0JBQXNCO0lBQ3ZCLENBQUM7O3NFQTFDVyxXQUFXLGNBTWQsV0FBVzttREFOUixXQUFXLFdBQVgsV0FBVyxtQkFGWCxNQUFNO2tEQUVOLFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOztzQkFPRSxNQUFNO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoVG9rZW4gfSBmcm9tICcuL2F1dGgnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG5cdHByaXZhdGUgY2FjaGVkUmVxdWVzdHM6IEFycmF5PEh0dHBSZXF1ZXN0PGFueT4+ID0gW107XG5cdHByaXZhdGUgcGF0aHM6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0cHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuXHQpIHsgfVxuXG5cdHNldFRva2VuKGF1dGhUb2tlbjogQXV0aFRva2VuKTogdm9pZCB7XG5cdFx0dGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnYXV0aFRva2VuJywgYXV0aFRva2VuKTtcblx0XHR0aGlzLnJldHJ5RmFpbGVkUmVxdWVzdHMoKTtcblx0fVxuXG5cdGdldFRva2VuKCk6IEF1dGhUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2F1dGhUb2tlbicpIGFzIEF1dGhUb2tlbjtcblx0fVxuXG5cdGdldEZha2VUb2tlbigpOiBBdXRoVG9rZW4ge1xuXHRcdHJldHVybiBuZXcgQXV0aFRva2VuKCdmYWtlVG9rZW4nKTtcblx0fVxuXG5cdGlzVmFsaWQoYXV0aFRva2VuOiBBdXRoVG9rZW4pOiBib29sZWFuIHtcblx0XHQvLyByZXR1cm4gYSBib29sZWFuIHJlZmxlY3Rpbmcgd2hldGhlciBvciBub3QgdGhlIHRva2VuIGlzIGV4cGlyZWRcblx0XHRyZXR1cm4gYXV0aFRva2VuICYmIChhdXRoVG9rZW4uZXhwaXJlc0luID4gRGF0ZS5ub3coKSB8fCBhdXRoVG9rZW4uZXhwaXJlc0luID09PSAwKTtcblx0fVxuXG5cdGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcblx0XHRjb25zdCBhdXRoVG9rZW4gPSB0aGlzLmdldFRva2VuKCk7XG5cdFx0cmV0dXJuIHRoaXMuaXNWYWxpZChhdXRoVG9rZW4pO1xuXHR9XG5cblx0Y29sbGVjdEZhaWxlZFJlcXVlc3QocmVxdWVzdCk6IHZvaWQge1xuXHRcdHRoaXMuY2FjaGVkUmVxdWVzdHMucHVzaChyZXF1ZXN0KTtcblx0fVxuXG5cdHJldHJ5RmFpbGVkUmVxdWVzdHMoKTogdm9pZCB7XG5cdFx0Ly8gdGhpcyBtZXRob2QgY2FuIGJlIGNhbGxlZCBhZnRlciB0aGUgdG9rZW4gaXMgcmVmcmVzaGVkXG5cdFx0Ly8gY29uc29sZS5sb2coJ0F1dGhTZXJ2aWNlLnJldHJ5RmFpbGVkUmVxdWVzdHMnKTtcblx0XHQvLyByZXRyeSB0aGUgcmVxdWVzdHMuXG5cdH1cblxufVxuIl19