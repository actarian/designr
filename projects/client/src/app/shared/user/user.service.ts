import { isPlatformBrowser } from '@angular/common';
import { Injectable, Injector } from '@angular/core';
import { AuthStrategy, EntityService, EventDispatcherService, LocalStorageService, StorageService } from '@designr/core';
import { FacebookUser, GoogleUser } from '@designr/plugins';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, first, map, switchMap, tap } from 'rxjs/operators';
import { User, UserAuth, UserRegister, UserSignForgotten } from './user';

@Injectable({
	providedIn: 'root',
})
export class UserService extends EntityService<User> {

	public user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
	storage: StorageService;

	get collection(): string {
		return '/api/user';
	}

	get user(): User {
		return this.user$.getValue();
	}

	set user(user: User) {
		if (this.config.authStrategy === AuthStrategy.Bearer) {
			this.storage.set('user', user);
		}
		const wasUser = this.user$.getValue();
		this.user$.next(user);
		if (user || wasUser) {
			this.dispatcher.emit({
				type: 'onUser',
				data: { user }
			});
		}
	}

	constructor(
		protected injector: Injector,
		private storageService: LocalStorageService,
		private dispatcher: EventDispatcherService,
	) {
		super(injector);
		this.storage = this.storageService.tryGet();
		if (isPlatformBrowser(this.platformId)) {
			if (this.config.authStrategy === AuthStrategy.Bearer) {
				const user = this.storage.get('user');
				if (user) {
					this.user = user;
				}
			}/* else {
				// initWithCookie
				this.get(`/me`).pipe(
					first(),
					map(user => (user && user.isLogged) ? new User(user) : null),
					tap(user => this.user = user)
				).subscribe(user => console.log(user));
			}
			*/
		}
	}

	public observe(): Observable<User> {
		if (isPlatformBrowser(this.platformId)) {
			return this.me().pipe(
				first(),
				switchMap(user => this.user$)
			);
		} else {
			return of(null);
		}
	}

	public me(): Observable<User> {
		const user: User = this.user$.getValue();
		if (user) {
			return of(user);
		} else {
			return this.get(`/me`).pipe(
				map(user => user ? new User(user) : null),
				tap(user => this.user = user)
			);
		}
	}

	public edit(user: UserRegister): Observable<User> {
		// console.log('UserService.update', user);
		return this.post(`/edit`, user).pipe(
			map(user => new User(user)),
			tap(user => this.user = user)
		);
	}

	public isLoggedIn(): boolean {
		const user: User = this.user$.getValue();
		return Boolean(user);
		// return this.getDetailById(1) as Observable<User>;
	}

	public tryLogin(user: UserAuth): Observable<User> {
		return this.post(`/login`, {
			masterRecordCode: user.email,
			password: user.password,
		}).pipe(
			map(user => new User(user)),
			tap(user => {
				if (user) {
					this.user = user;
					// console.log('UserService.tryLogin.success', user);
				}
			})
		);
	}

	public signForgotten(userSignForgotten: UserSignForgotten): Observable<any> {
		if (!userSignForgotten.email.trim()) {
			return of(null);
		}
		return this.post(`/notifyCredential`, userSignForgotten);
		/*.pipe(
			tap(x => this.log(`tryLogin "${user.email}"`))
		);*/
	}

	public exists(email: string): Observable<boolean> {
		// console.log('UserService.exists', email);
		return this.post(`/exists`, {
			email: email
		}).pipe(
			map(x => {
				// console.log('UserService.exists.success', x);
				return false;
			}),
			catchError(response => {
				// console.log('UserService.exists.error', response);
				return response.status === 409 ? of(true) : of(false);
			}),
		);
	}

	public signUp(user: UserAuth): Observable<User> {
		console.log('UserService.signUp', user);
		return this.post(`/register`, user).pipe(
			map(user => new User(user)),
			tap(user => {
				this.dispatcher.emit({
					type: 'onEvent',
					data: { event: 'onSignUp', }
				});
			})
		);
	}

	public signOut(): Observable<User> {
		return this.get(`/logout`).pipe(
			switchMap(response => {
				this.user = null;
				return of(null);
			})
		);
	}

	public tryFacebook(user: FacebookUser): Observable<User> {
		if (!user.facebookToken.trim()) {
			return of(null);
		}
		return this.post(`/loginFacebook`, `"${user.facebookToken}"`).pipe(
			map(user => new User(user)),
			switchMap(user => {
				this.user = user;
				return of(user);
			})
		);
	}

	public tryGoogle(user: GoogleUser): Observable<User> {
		if (!user.authResponse || !user.authResponse.id_token.trim()) {
			return of(null);
		}
		return this.post(`/loginGoogle`, `"${user.authResponse.id_token}"`).pipe(
			map(user => new User(user)),
			switchMap(user => {
				this.user = user;
				return of(user);
			})
		);
	}

	private mapUser(user): any {
		user = new User(user);
		return user;
	}

}

