import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { AuthToken } from './auth';
import { LocalStorageService } from '../storage/storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../storage/storage.service";
var AuthService = /** @class */ (function () {
    function AuthService(platformId, injector, localStorageService) {
        this.platformId = platformId;
        this.injector = injector;
        this.localStorageService = localStorageService;
        this.cachedRequests = [];
        this.paths = [];
    }
    AuthService.prototype.setToken = function (authToken) {
        this.localStorageService.set('authToken', authToken);
        this.retryFailedRequests();
    };
    AuthService.prototype.getToken = function () {
        return this.localStorageService.get('authToken');
    };
    AuthService.prototype.getFakeToken = function () {
        return new AuthToken('fakeToken');
    };
    AuthService.prototype.isValid = function (authToken) {
        // return a boolean reflecting whether or not the token is expired
        return authToken && (authToken.expiresIn > Date.now() || authToken.expiresIn === 0);
    };
    AuthService.prototype.isAuthenticated = function () {
        var authToken = this.getToken();
        return this.isValid(authToken);
    };
    AuthService.prototype.collectFailedRequest = function (request) {
        this.cachedRequests.push(request);
    };
    AuthService.prototype.retryFailedRequests = function () {
        // this method can be called after the token is refreshed
        // console.log('AuthService.retryFailedRequests');
        // retry the requests.
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i1.LocalStorageService)); };
    AuthService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    return AuthService;
}());
export { AuthService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.Injector }, { type: i1.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUVqRTtJQVFDLHFCQUM4QixVQUFrQixFQUN2QyxRQUFrQixFQUNsQixtQkFBd0M7UUFGbkIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFOekMsbUJBQWMsR0FBNEIsRUFBRSxDQUFDO1FBQzdDLFVBQUssR0FBYSxFQUFFLENBQUM7SUFNekIsQ0FBQztJQUVMLDhCQUFRLEdBQVIsVUFBUyxTQUFvQjtRQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQWMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNDLE9BQU8sSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxTQUFvQjtRQUMzQixrRUFBa0U7UUFDbEUsT0FBTyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQ0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMENBQW9CLEdBQXBCLFVBQXFCLE9BQU87UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHlDQUFtQixHQUFuQjtRQUNDLHlEQUF5RDtRQUN6RCxrREFBa0Q7UUFDbEQsc0JBQXNCO0lBQ3ZCLENBQUM7MEVBMUNXLFdBQVcsY0FNZCxXQUFXO3VEQU5SLFdBQVcsV0FBWCxXQUFXLG1CQUZYLE1BQU07c0JBTm5CO0NBb0RDLEFBL0NELElBK0NDO1NBNUNZLFdBQVc7a0RBQVgsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O3NCQU9FLE1BQU07dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhUb2tlbiB9IGZyb20gJy4vYXV0aCc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cblx0cHJpdmF0ZSBjYWNoZWRSZXF1ZXN0czogQXJyYXk8SHR0cFJlcXVlc3Q8YW55Pj4gPSBbXTtcblx0cHJpdmF0ZSBwYXRoczogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG5cdCkgeyB9XG5cblx0c2V0VG9rZW4oYXV0aFRva2VuOiBBdXRoVG9rZW4pOiB2b2lkIHtcblx0XHR0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdhdXRoVG9rZW4nLCBhdXRoVG9rZW4pO1xuXHRcdHRoaXMucmV0cnlGYWlsZWRSZXF1ZXN0cygpO1xuXHR9XG5cblx0Z2V0VG9rZW4oKTogQXV0aFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnYXV0aFRva2VuJykgYXMgQXV0aFRva2VuO1xuXHR9XG5cblx0Z2V0RmFrZVRva2VuKCk6IEF1dGhUb2tlbiB7XG5cdFx0cmV0dXJuIG5ldyBBdXRoVG9rZW4oJ2Zha2VUb2tlbicpO1xuXHR9XG5cblx0aXNWYWxpZChhdXRoVG9rZW46IEF1dGhUb2tlbik6IGJvb2xlYW4ge1xuXHRcdC8vIHJldHVybiBhIGJvb2xlYW4gcmVmbGVjdGluZyB3aGV0aGVyIG9yIG5vdCB0aGUgdG9rZW4gaXMgZXhwaXJlZFxuXHRcdHJldHVybiBhdXRoVG9rZW4gJiYgKGF1dGhUb2tlbi5leHBpcmVzSW4gPiBEYXRlLm5vdygpIHx8IGF1dGhUb2tlbi5leHBpcmVzSW4gPT09IDApO1xuXHR9XG5cblx0aXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGF1dGhUb2tlbiA9IHRoaXMuZ2V0VG9rZW4oKTtcblx0XHRyZXR1cm4gdGhpcy5pc1ZhbGlkKGF1dGhUb2tlbik7XG5cdH1cblxuXHRjb2xsZWN0RmFpbGVkUmVxdWVzdChyZXF1ZXN0KTogdm9pZCB7XG5cdFx0dGhpcy5jYWNoZWRSZXF1ZXN0cy5wdXNoKHJlcXVlc3QpO1xuXHR9XG5cblx0cmV0cnlGYWlsZWRSZXF1ZXN0cygpOiB2b2lkIHtcblx0XHQvLyB0aGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIGFmdGVyIHRoZSB0b2tlbiBpcyByZWZyZXNoZWRcblx0XHQvLyBjb25zb2xlLmxvZygnQXV0aFNlcnZpY2UucmV0cnlGYWlsZWRSZXF1ZXN0cycpO1xuXHRcdC8vIHJldHJ5IHRoZSByZXF1ZXN0cy5cblx0fVxuXG59XG4iXX0=