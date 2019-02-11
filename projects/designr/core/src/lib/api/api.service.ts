import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { CoreConfig } from '../config/core.config';
import { Logger } from '../logger/logger';
import { Identity } from '../models/identity';

export class ApiRequestOptions {
	headers?: HttpHeaders;
	params?: HttpParams;
	constructor(options?: {}) {
		this.headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		this.params = options ? new HttpParams(options) : null;
	}
}

@Injectable({
	providedIn: 'root'
})
export class ApiService<T extends Identity> {

	get collection(): string {
		return '/api';
	}

	private _logger: Logger;
	get logger(): Logger {
		if (!this._logger) {
			this._logger = this.injector.get(Logger);
		}
		return this._logger;
	}

	private _http: HttpClient;
	get http(): HttpClient {
		if (!this._http) {
			this._http = this.injector.get(HttpClient);
		}
		return this._http;
	}

	private _state: TransferState;
	get state(): TransferState {
		if (!this._state) {
			this._state = this.injector.get(TransferState);
		}
		return this._state;
	}

	private _platformId: string;
	get platformId(): string {
		if (!this._platformId) {
			this._platformId = this.injector.get<string>(PLATFORM_ID);
		}
		return this._platformId;
	}

	private _config: CoreConfig;
	get config(): CoreConfig {
		if (!this._config) {
			this._config = this.injector.get(ConfigService).options;
		}
		return this._config;
	}

	private _origin: string;
	get origin(): string {
		if (!this._origin) {
			this._origin = this.config.origin;
		}
		return this._origin;
	}

	get url(): string {
		let base: string = this.origin;
		const collection = this.collection.toLowerCase();
		if (collection.indexOf('http') === 0) {
			base = '';
		}
		return `${base}${collection}`;
	}

	constructor(
		protected injector: Injector
	) { }

	getUrl(method: string = ''): string {
		return `${this.url}${method}`;
	}

	get(first?: string | {}, second?: {}): Observable<any> {
		const method: string = (typeof first === 'string' ? first : '');
		const params: {} = (typeof first === 'object' ? first : second);
		const url: string = this.getUrl(method);
		const options = new ApiRequestOptions(params);
		return this.http.get<T>(url, options).pipe(
			tap(x => this.logger.request(url)),
		);
	}

	post(first: string | {}, second?: {}, third?: {}): Observable<any> {
		const method: string = (typeof first === 'string' ? first : '');
		const model: {} = (typeof first === 'object' ? first : second);
		const params: {} = (typeof second === 'object' ? second : third);
		const url: string = this.getUrl(method);
		const options = new ApiRequestOptions(params);
		return this.http.post<T>(url, model, options).pipe(
			tap(x => this.logger.request(url)),
		);
	}

	put(first: string | T, second?: T | {}, third?: {}): Observable<any> {
		const method: string = (typeof first === 'string' ? first : '');
		const model: T = (typeof first === 'object' ? first : second) as T;
		const params: {} = (typeof second === 'object' ? second : third);
		const url: string = this.getUrl(method);
		const options = new ApiRequestOptions(params);
		return this.http.put<T>(url, model, options).pipe(
			tap(x => this.logger.request(url)),
		);
	}

	patch(first: string | T, second?: T | {}, third?: {}): Observable<any> {
		const method: string = (typeof first === 'string' ? first : '');
		const model: T = (typeof first === 'object' ? first : second) as T;
		const params: {} = (typeof second === 'object' ? second : third);
		const url: string = this.getUrl(method);
		const options = new ApiRequestOptions(params);
		return this.http.patch<T>(url, model, options).pipe(
			tap(x => this.logger.request(url)),
		);
	}

	delete(first: string | T | number, second?: T | number | {}, third?: {}): Observable<any> {
		const method: string = (typeof first === 'string' ? first : '');
		const identity: T | number = (typeof first !== 'string' ? first : second) as T | number;
		const id = identity ? (typeof identity === 'number' ? identity : identity.id) : null;
		const params: {} = (typeof second === 'object' ? second : third);
		const url: string = id !== null ? this.getUrl(`${method}/${id}`) : this.getUrl(method);
		const options = new ApiRequestOptions(params);
		return this.http.delete<T[]>(url, options).pipe(
			tap(x => this.logger.request(url)),
		);
	}

	toCamelCase(input: any): any {
		let output, key, keyCamelCase, value;
		if (input instanceof Array) {
			return input.map((value: any) => {
				if (typeof value === 'object') {
					value = this.toCamelCase(value);
				}
				return value;
			});
		} else {
			output = {};
			for (key in input) {
				if (input.hasOwnProperty(key)) {
					keyCamelCase = (key.charAt(0).toLowerCase() + key.slice(1) || key).toString();
					value = input[key];
					if (value instanceof Array || (value !== null && value.constructor === Object)) {
						value = this.toCamelCase(value);
					}
					output[keyCamelCase] = value;
				}
			}
		}
		return output;
	}

	// TRANSFER STATE

	getStateKey(url: string, model: {}): StateKey<T> {
		const flatMap = (s: string, x: any) => {
			if (typeof x === 'number') {
				s += x.toString();
			} else if (typeof x === 'string') {
				s += x.substr(0, 10);
			} else if (x && typeof x === 'object') {
				s += '_' + Object.keys(x).map(k => k + '_' + flatMap('', x[k])).join('_');
			}
			return s;
		};
		url = flatMap(url, model);
		// console.log('ApiService.getStateKey.url', url);
		const key: string = url.replace(/(\W)/gm, '_');
		// this.logger.log('ApiService.getStateKey.key', key);
		return makeStateKey(key);
	}

	stateGet(first?: string | {}, second?: {}): Observable<any> {
		const method: string = (typeof first === 'string' ? first : '');
		const params: {} = (typeof first === 'object' ? first : second);
		const url: string = this.getUrl(method);
		const options = new ApiRequestOptions(params);
		const stateKey = this.getStateKey(url, params);
		if (isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
			const cached = this.state.get(stateKey, null);
			this.state.remove(stateKey);
			return of(cached);
		} else {
			return this.http.get<T>(url, options).pipe(
				tap(x => {
					if (isPlatformServer(this.platformId)) {
						this.state.onSerialize(stateKey, () => x);
					}
				}),
			);
		}
	}

	statePost(first: string | {}, second?: {}, third?: {}): Observable<any> {
		const method: string = (typeof first === 'string' ? first : '');
		const model: {} = (typeof first === 'object' ? first : second);
		const params: {} = (typeof second === 'object' ? second : third);
		const url: string = this.getUrl(method);
		const options = new ApiRequestOptions(params);
		const stateKey = this.getStateKey(url, model);
		if (isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
			const cached = this.state.get(stateKey, null);
			this.state.remove(stateKey);
			return of(cached);
		} else {
			return this.http.post<T>(url, model, options).pipe(
				tap(x => {
					if (isPlatformServer(this.platformId)) {
						this.state.onSerialize(stateKey, () => x);
					}
				})
			);
		}
	}

}
