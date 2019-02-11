import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';

const TIMEOUT = 5 * 60 * 1000; // five minutes

/*
export class StorageEvent extends Event {}

export class CookieStorageEvent extends StorageEvent { }

export class SessionStorageEvent extends StorageEvent { }

export class LocalStorageEvent extends StorageEvent { }
*/

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	public delete(name: string): void { }
	public exist(name: string): boolean { return false; }
	public get(name: string): any { return null; }
	public set(name: string, value: any, days?: number): void { }
	public on(): Observable<any> { return of(null); }
	public tryGet(): StorageService {
		// console.log('no StorageService available...');
		return this;
	}
}

@Injectable({
	providedIn: 'root'
})
export class CookieStorageService implements StorageService {

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private storageService: StorageService,
	) { }

	public tryGet(): StorageService {
		if (this.isSupported()) {
			// console.log('CookieStorageService.supported');
			return this;
		} else {
			return this.storageService.tryGet();
		}
	}

	public delete(name: string): void {
		this.setter(name, '', -1);
	}

	public exist(name: string): boolean {
		return document.cookie.indexOf(';' + name + '=') !== -1 || document.cookie.indexOf(name + '=') === 0;
	}

	public get(name: string): any {
		const cookieName = name + '=';
		const ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === ' ') {
				c = c.substring(1, c.length);
			}
			if (c.indexOf(cookieName) === 0) {
				const value = c.substring(cookieName.length, c.length);
				let model = null;
				try {
					model = JSON.parse(decodeURIComponent(atob(value)));
				} catch (e) {
					console.log('Cookie.get.error parsing', name, e);
				}
				return model;
			}
		}
		return null;
	}

	public set(name: string, value: any, days?: number) {
		try {
			let cache = [];
			const json = JSON.stringify(value, function (key, value) {
				if (key === 'pool') {
					return;
				}
				if (typeof value === 'object' && value !== null) {
					if (cache.indexOf(value) !== -1) {
						// throw (new Error('circular reference found, discard key'));
						return;
					}
					cache.push(value);
				}
				return value;
			});
			cache = null;
			this.setter(name, btoa(encodeURIComponent(json)), days);
		} catch (e) {
			console.log('CookieSet.error serializing', name, value, e);
		}
	}

	public on(): Observable<any> {
		// todo
		const interval: number = 1000, timeout: number = TIMEOUT;
		let i, elapsed: number = 0;
		function checkCookie() {
			if (elapsed > timeout) {
				// promise.reject('timeout');
			} else {
				const c: any = this.get(name);
				if (c) {
					// promise.resolve(c);
				} else {
					elapsed += interval;
					i = setTimeout(checkCookie, interval);
				}
			}
		}
		checkCookie();
		return of(null);
	}

	private setter(name: string, value: any, days?: number) {
		let expires;
		if (days) {
			const date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = '; expires=' + date.toUTCString();
		} else {
			expires = '';
		}
		document.cookie = name + '=' + value + expires + '; path=/';
	}

	private isSupported(): boolean {
		return isPlatformBrowser(this.platformId);
	}

}

@Injectable({
	providedIn: 'root'
})
export class SessionStorageService implements StorageService {

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private cookieStorageService: CookieStorageService,
	) { }

	public tryGet(): StorageService {
		if (this.isSupported()) {
			// console.log('SessionStorageService.supported');
			return this;
		} else {
			return this.cookieStorageService.tryGet();
		}
	}

	public delete(name: string): void {
		window.sessionStorage.removeItem(name);
	}

	public exist(name: string): boolean {
		return window.sessionStorage[name] !== undefined;
	}

	public get(name: string): any {
		let value = null;
		if (window.sessionStorage[name] !== undefined) {
			try {
				value = JSON.parse(window.sessionStorage[name]);
			} catch (e) {
				console.log('SessionStorage.get.error parsing', name, e);
			}
		}
		return value;
	}

	public on(): Observable<any> {
		/*
		return $promise(function (promise) {
			const timeout = TIMEOUT;
			let i;
			function storageEvent(e) {
				if (i) {
					clearTimeout(i);
				}
				if (e.originalEvent.key === name) {
					try {
						let value = JSON.parse(e.originalEvent.newValue);
						promise.resolve(value);
					} catch (error) {
						console.log('SessionStorage.on.error parsing', name, error);
						promise.reject('error parsing ' + name);
					}
				}
			}
			// return fromEvent(window, 'storage');
			angular.element(window).on('storage', storageEvent);
			i = setTimeout(function () {
				promise.reject('timeout');
			}, timeout);
		});
		*/
		return of(null);
	}

	public set(name: string, value: any, days?: number): void {
		try {
			let cache = [];
			const json = JSON.stringify(value, function (key, value) {
				if (key === 'pool') {
					return;
				}
				if (typeof value === 'object' && value !== null) {
					if (cache.indexOf(value) !== -1) {
						// throw (new Error('circular reference found, discard key'));
						return;
					}
					cache.push(value);
				}
				return value;
			});
			cache = null;
			window.sessionStorage.setItem(name, json);
		} catch (e) {
			console.log('SessionStorage.set.error serializing', name, value, e);
		}
	}

	private isSupported(): boolean {
		let supported: boolean = false;
		if (isPlatformBrowser(this.platformId)) {
			try {
				supported = 'sessionStorage' in window && window.sessionStorage !== null;
				if (supported) {
					window.sessionStorage.setItem('test', '1');
					window.sessionStorage.removeItem('test');
				} else {
					supported = false;
				}
			} catch (e) {
				supported = false;
			}
		}
		return supported;
	}

}

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService implements StorageService {

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private cookieStorageService: CookieStorageService,
	) { }

	public tryGet(): StorageService {
		if (this.isSupported()) {
			// console.log('LocalStorageService.supported');
			return this;
		} else {
			return this.cookieStorageService.tryGet();
		}
	}

	public delete(name: string): void {
		window.localStorage.removeItem(name);
	}

	public exist(name: string): boolean {
		return window.localStorage[name] !== undefined;
	}

	public get(name: string): any {
		let value = null;
		if (window.localStorage[name] !== undefined) {
			try {
				value = JSON.parse(window.localStorage[name]);
			} catch (e) {
				console.log('LocalStorage.get.error parsing', name, e);
			}
		}
		return value;
	}

	public on(): Observable<any> {
		/*
		return $promise(function (promise) {
			const timeout = TIMEOUT;
			let i;
			function storageEvent(e) {
				if (i) {
					clearTimeout(i);
				}
				if (e.originalEvent.key === name) {
					try {
						let value = JSON.parse(e.originalEvent.newValue);
						promise.resolve(value);
					} catch (error) {
						console.log('LocalStorage.on.error parsing', name, error);
						promise.reject('error parsing ' + name);
					}
				}
			}
			// return fromEvent(window, 'storage');
			angular.element(window).on('storage', storageEvent);
			i = setTimeout(function () {
				promise.reject('timeout');
			}, timeout);
		});
		*/
		return of(null);
	}

	public set(name: string, value: any, days?: number): void {
		try {
			let cache = [];
			const json = JSON.stringify(value, function (key, value) {
				if (key === 'pool') {
					return;
				}
				if (typeof value === 'object' && value !== null) {
					if (cache.indexOf(value) !== -1) {
						// throw (new Error('circular reference found, discard key'));
						return;
					}
					cache.push(value);
				}
				return value;
			});
			cache = null;
			window.localStorage.setItem(name, json);
		} catch (e) {
			console.log('LocalStorage.set.error serializing', name, value, e);
		}
	}

	private isSupported(): boolean {
		let supported: boolean = false;
		if (isPlatformBrowser(this.platformId)) {
			try {
				supported = 'localStorage' in window && window.localStorage !== null;
				if (supported) {
					window.localStorage.setItem('test', '1');
					window.localStorage.removeItem('test');
				} else {
					supported = false;
				}
			} catch (e) {
				supported = false;
			}
		}
		return supported;
	}

}
