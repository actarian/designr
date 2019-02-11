import { HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { LocalStorageService } from '../storage/storage.service';

export class AuthToken {
	constructor(
		public accessToken: string,
		public expiresIn: number = 0
	) { }
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private cachedRequests: Array<HttpRequest<any>> = [];
	private paths: string[] = [];

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private injector: Injector,
		private localStorageService: LocalStorageService,
	) { }

	setToken(authToken: AuthToken): void {
		this.localStorageService.set('authToken', authToken);
		this.retryFailedRequests();
	}

	getToken(): AuthToken {
		return this.localStorageService.get('authToken') as AuthToken;
	}

	getFakeToken(): AuthToken {
		return new AuthToken('fakeToken');
	}

	isValid(authToken: AuthToken): boolean {
		// return a boolean reflecting whether or not the token is expired
		return authToken && (authToken.expiresIn > Date.now() || authToken.expiresIn === 0);
	}

	isAuthenticated(): boolean {
		const authToken = this.getToken();
		return this.isValid(authToken);
	}

	collectFailedRequest(request): void {
		this.cachedRequests.push(request);
	}

	retryFailedRequests(): void {
		// this method can be called after the token is refreshed
		// console.log('AuthService.retryFailedRequests');
		// retry the requests.
	}

}
