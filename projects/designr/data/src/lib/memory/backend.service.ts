import { BehaviorSubject, from, Observable, Observer, of } from 'rxjs';
import { concatMap, first } from 'rxjs/operators';
import { delayResponse } from './delay-response';
import { getStatusText, isSuccess, STATUS_CODE } from './http-status-codes';
import { HeadersCore, MemoryBackendConfig, MemoryDataService, ParsedRequestUrl, parseUri, PassThruBackend, removeTrailingSlash, RequestCore, RequestInfo, RequestInfoUtilities, ResponseOptions, UriInfo } from './memory';

/**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `MemoryDataService` service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 */
export abstract class BackendService {
	private passThruBackend: PassThruBackend;
	protected config: MemoryBackendConfig = new MemoryBackendConfig();
	protected database: Object;
	protected databaseReadySubject: BehaviorSubject<boolean>;
	protected requestInfoUtils = this.getRequestInfoUtils();

	constructor(
		protected dataService: MemoryDataService,
		config: MemoryBackendConfig = {}
	) {
		const location = this.getLocation('/');
		this.config.host = location.host; // default to app web server host
		this.config.rootPath = location.path; // default to path when app is served (e.g.'/')
		Object.assign(this.config, config);
	}

	protected get databaseReady(): Observable<boolean> {
		if (!this.databaseReadySubject) {
			// first time the service is called.
			this.databaseReadySubject = new BehaviorSubject(false);
			this.resetDb();
		}
		return this.databaseReadySubject.asObservable().pipe(
			first((ready: boolean) => ready)
		);
	}

	/**
	 * Process Request and return an Observable of Http Response object
	 * in the manner of a RESTy web api.
	 *
	 * Expect URI pattern in the form :base/:collectionName/:id?
	 * Examples:
	 *   // for store with a 'customers' collection
	 *   GET api/customers          // all customers
	 *   GET api/customers/42       // the character with id=42
	 *   GET api/customers?name=^j  // 'j' is a regex; returns customers whose name starts with 'j' or 'J'
	 *   GET api/customers.json/42  // ignores the ".json"
	 *
	 * Also accepts direct commands to the service in which the last segment of the apiBase is the word "commands"
	 * Examples:
	 *     POST commands/resetDb,
	 *     GET/POST commands/config - get or (re)set the config
	 *
	 *   HTTP overrides:
	 *     If the injected dataService defines an HTTP method (lowercase)
	 *     The request is forwarded to that method as in
	 *     `dataService.get(requestInfo)`
	 *     which must return either an Observable of the response type
	 *     for this http library or null|undefined (which means "keep processing").
	 */
	protected handleRequest(request: RequestCore): Observable<any> {
		//  handle the request when there is an in-memory database
		return this.databaseReady.pipe(concatMap(() => this.handleRequest_(request)));
	}

	protected handleRequest_(request: RequestCore): Observable<any> {
		const url = request.urlWithParams ? request.urlWithParams : request.url;
		// Try override parser
		// If no override parser or it returns nothing, use default parser
		const parser = this.bind('parseRequestUrl');
		const parsed: ParsedRequestUrl = (parser && parser(url, this.requestInfoUtils)) || this.parseRequestUrl(url);
		const collectionName = parsed.collectionName;
		const collection = this.database[collectionName];
		const requestInfo: RequestInfo = {
			request: request,
			apiBase: parsed.apiBase,
			collection: collection,
			collectionName: collectionName,
			headers: this.createHeaders({ 'Content-Type': 'application/json' }),
			id: this.parseId(collection, collectionName, parsed.id),
			method: this.getRequestMethod(request),
			query: parsed.query,
			resourceUrl: parsed.resourceUrl,
			url: url,
			utils: this.requestInfoUtils
		};
		let responseOptions: ResponseOptions;
		if (/commands\/?$/i.test(requestInfo.apiBase)) {
			return this.commands(requestInfo);
		}
		const methodInterceptor = this.bind(requestInfo.method);
		if (methodInterceptor) {
			// MemoryDataService intercepts this HTTP method.
			// if interceptor produced a response, return it.
			// else MemoryDataService chose not to intercept; continue processing.
			const interceptorResponse = methodInterceptor(requestInfo);
			if (interceptorResponse) {
				return interceptorResponse;
			}
		}
		if (this.database[collectionName]) {
			// request is for a known collection of the MemoryDataService
			return this.createResponse$(() => this.collectionHandler(requestInfo));
		}
		if (this.config.passThruUnknownUrl) {
			// unknown collection; pass request thru to a "real" backend.
			return this.getPassThruBackend().handle(request);
		}
		// 404 - can't handle this request
		responseOptions = this.createErrorResponseOptions(url, STATUS_CODE.NOT_FOUND, `Collection '${collectionName}' not found`);
		return this.createResponse$(() => responseOptions);
	}

	/**
	 * Add configured delay to response observable unless delay === 0
	 */
	protected addDelay(response: Observable<any>): Observable<any> {
		const delay = this.config.delay;
		return delay === 0 ? response : delayResponse(response, delay || 500);
	}

	/**
	 * Apply query/search parameters as a filter over the collection
	 * This impl only supports RegExp queries on string properties of the collection
	 * ANDs the conditions together
	 */
	protected applyQuery(collection: any[], query: Map<string, string[]>): any[] {
		// extract filtering conditions - {propertyName, RegExps) - from query/search parameters
		const conditions: { name: string, regexp: RegExp }[] = [];
		const caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
		query.forEach((value: string[], name: string) => {
			value.forEach(x => conditions.push({
				name,
				regexp: new RegExp(decodeURI(x), caseSensitive)
			}));
		});
		const length = conditions.length;
		if (!length) {
			return collection;
		}
		// AND the RegExp conditions
		return collection.filter(row => {
			let has = true;
			let i = length;
			while (has && i) {
				i -= 1;
				const cond = conditions[i];
				has = cond.regexp.test(row[cond.name]);
			}
			return has;
		});
	}

	/**
	 * Get a method from the `MemoryDataService` (if it exists), bound to that service
	 */
	protected bind<T extends Function>(methodName: string) {
		const method = this.dataService[methodName] as T;
		return method ? <T>method.bind(this.dataService) : undefined;
	}

	protected bodify(data: any) {
		return this.config.dataEncapsulation ? { data } : data;
	}

	protected clone(data: any) {
		return JSON.parse(JSON.stringify(data));
	}

	protected collectionHandler(requestInfo: RequestInfo): ResponseOptions {
		// const request = requestInfo.request;
		let responseOptions: ResponseOptions;
		switch (requestInfo.method) {
			case 'get':
				responseOptions = this.get(requestInfo);
				break;
			case 'post':
				responseOptions = this.post(requestInfo);
				break;
			case 'put':
				responseOptions = this.put(requestInfo);
				break;
			case 'delete':
				responseOptions = this.delete(requestInfo);
				break;
			default:
				responseOptions = this.createErrorResponseOptions(requestInfo.url, STATUS_CODE.METHOD_NOT_ALLOWED, 'Method not allowed');
				break;
		}
		// If `dataService.responseInterceptor` exists, let it morph the response options
		const interceptor = this.bind('responseInterceptor');
		return interceptor ? interceptor(responseOptions, requestInfo) : responseOptions;
	}

	/**
	 * Commands reconfigure the in-memory web api service or extract information from it.
	 * Commands ignore the latency delay and respond ASAP.
	 *
	 * When the last segment of the `apiBase` path is "commands",
	 * the `collectionName` is the command.
	 *
	 * Example URLs:
	 *   commands/resetdb (POST) // Reset the "database" to its original state
	 *   commands/config (GET)   // Return this service's config object
	 *   commands/config (POST)  // Update the config (e.g. the delay)
	 *
	 * Usage:
	 *   http.post('commands/resetdb', undefined);
	 *   http.get('commands/config');
	 *   http.post('commands/config', '{"delay":1000}');
	 */
	protected commands(requestInfo: RequestInfo): Observable<any> {
		const command = requestInfo.collectionName.toLowerCase();
		const method = requestInfo.method;
		let responseOptions: ResponseOptions = {
			url: requestInfo.url
		};
		switch (command) {
			case 'resetdb':
				responseOptions.status = STATUS_CODE.NO_CONTENT;
				return this.resetDb(requestInfo).pipe(
					concatMap(() => this.createResponse$(() => responseOptions, false /* no latency delay */))
				);

			case 'config':
				if (method === 'get') {
					responseOptions.status = STATUS_CODE.OK;
					responseOptions.body = this.clone(this.config);

					// any other HTTP method is assumed to be a config update
				} else {
					const body = this.getJsonBody(requestInfo.request);
					Object.assign(this.config, body);
					this.passThruBackend = undefined; // re-create when needed
					responseOptions.status = STATUS_CODE.NO_CONTENT;
				}
				break;

			default:
				responseOptions = this.createErrorResponseOptions(
					requestInfo.url,
					STATUS_CODE.INTERNAL_SERVER_ERROR,
					`Unknown command "${command}"`
				);
		}

		return this.createResponse$(() => responseOptions, false /* no latency delay */);
	}

	protected createErrorResponseOptions(url: string, status: number, message: string): ResponseOptions {
		return {
			body: {
				error: `${message}`,
			},
			url: url,
			headers: this.createHeaders({
				'Content-Type': 'application/json'
			}),
			status: status
		};
	}

	/**
	 * Create standard HTTP headers object from hash map of header strings
	 * @param headers
	 */
	protected abstract createHeaders(headers: { [index: string]: string }): HeadersCore;

	/**
	 * create the function that passes unhandled requests through to the "real" backend.
	 */
	protected abstract createPassThruBackend(): PassThruBackend;

	/**
	 * return a search map from a location query/search string
	 */
	protected abstract createQueryMap(search: string): Map<string, string[]>;

	/**
	 * Create a cold response Observable from a factory for ResponseOptions
	 * @param responseOptionsFactory - creates ResponseOptions when observable is subscribed
	 * @param withDelay - if true (default), add simulated latency delay from configuration
	 */
	protected createResponse$(responseOptionsFactory: () => ResponseOptions, withDelay = true): Observable<any> {
		const responseOptions$ = this.createResponseOptions$(responseOptionsFactory);
		const response$ = this.createResponse$fromResponseOptions$(responseOptions$);
		return withDelay ? this.addDelay(response$) : response$;
	}

	/**
	 * Create a Response observable from ResponseOptions observable.
	 */
	protected abstract createResponse$fromResponseOptions$(responseOptions$: Observable<ResponseOptions>): Observable<any>;

	/**
	 * Create a cold Observable of ResponseOptions.
	 * @param responseOptionsFactory - creates ResponseOptions when observable is subscribed
	 */
	protected createResponseOptions$(responseOptionsFactory: () => ResponseOptions): Observable<ResponseOptions> {
		return new Observable<ResponseOptions>((responseObserver: Observer<ResponseOptions>) => {
			let responseOptions: ResponseOptions;
			try {
				responseOptions = responseOptionsFactory();
			} catch (error) {
				error = error.message || error;
				responseOptions = this.createErrorResponseOptions('', STATUS_CODE.INTERNAL_SERVER_ERROR, `${error}`);
			}

			const status = responseOptions.status;
			try {
				responseOptions.statusText = getStatusText(status);
			} catch (error) { /* ignore failure */ }
			if (isSuccess(status)) {
				responseObserver.next(responseOptions);
				responseObserver.complete();
			} else {
				responseObserver.error(responseOptions);
			}
			return () => { }; // unsubscribe function
		});
	}

	protected delete({ collection, collectionName, headers, id, url }: RequestInfo): ResponseOptions {
		// tslint:disable-next-line:triple-equals
		if (id == undefined) {
			return this.createErrorResponseOptions(url, STATUS_CODE.NOT_FOUND, `Missing "${collectionName}" id`);
		}
		const exists = this.removeById(collection, id);
		return {
			headers: headers,
			status: (exists || !this.config.delete404) ? STATUS_CODE.NO_CONTENT : STATUS_CODE.NOT_FOUND
		};
	}

	/**
	 * Find first instance of item in collection by `item.id`
	 * @param collection
	 * @param id
	 */
	protected findById<T extends { id: any }>(collection: T[], id: any): T {
		return collection.find((item: T) => item.id === id);
	}

	/**
	 * Generate the next available id for item in this collection
	 * Use method from `dataService` if it exists and returns a value,
	 * else delegates to `genIdDefault`.
	 * @param collection - collection of items with `id` key property
	 */
	protected genId<T extends { id: any }>(collection: T[], collectionName: string): any {
		const genId = this.bind('genId');
		if (genId) {
			const id = genId(collection, collectionName);
			// tslint:disable-next-line:triple-equals
			if (id != undefined) {
				return id;
			}
		}
		return this.genIdDefault(collection, collectionName);
	}

	/**
	 * Default generator of the next available id for item in this collection
	 * This default implementation works only for numeric ids.
	 * @param collection - collection of items with `id` key property
	 * @param collectionName - name of the collection
	 */
	protected genIdDefault<T extends { id: any }>(collection: T[], collectionName: string): any {
		if (!this.isCollectionIdNumeric(collection, collectionName)) {
			throw new Error(`Collection '${collectionName}' id type is non-numeric or unknown. Can only generate numeric ids.`);
		}
		let maxId = 0;
		collection.reduce((prev: any, item: any) => {
			maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
		}, undefined);
		return maxId + 1;
	}

	protected get({ collection, collectionName, headers, id, query, url }: RequestInfo): ResponseOptions {
		let data = collection;
		// tslint:disable-next-line:triple-equals
		if (id != undefined && id !== '') {
			data = this.findById(collection, id);
		} else if (query) {
			data = this.applyQuery(collection, query);
		}
		if (!data) {
			return this.createErrorResponseOptions(url, STATUS_CODE.NOT_FOUND, `'${collectionName}' with id='${id}' not found`);
		}
		return {
			body: this.bodify(this.clone(data)),
			headers: headers,
			status: STATUS_CODE.OK
		};
	}

	/** Get JSON body from the request object */
	protected abstract getJsonBody(request: any): any;

	/**
	 * Get location info from a url, even on server where `document` is not defined
	 */
	protected getLocation(url: string): UriInfo {
		if (!url.startsWith('http')) {
			// get the document if running in browser
			const document_: Document = (typeof document === 'undefined') ? undefined : document;
			// add host info to url before parsing.  Use a fake host when not in browser.
			const base = document_ ? document_.location.protocol + '//' + document_.location.host : 'http://fake';
			url = url.startsWith('/') ? base + url : base + '/' + url;
		}
		return parseUri(url);
	}

	/**
	 * get or create the function that passes unhandled requests
	 * through to the "real" backend.
	 */
	protected getPassThruBackend(): PassThruBackend {
		return this.passThruBackend ? this.passThruBackend : this.passThruBackend = this.createPassThruBackend();
	}

	/**
	 * Get utility methods from this service instance.
	 * Useful within an HTTP method override
	 */
	protected getRequestInfoUtils(): RequestInfoUtilities {
		return {
			createResponse$: this.createResponse$.bind(this),
			findById: this.findById.bind(this),
			isCollectionIdNumeric: this.isCollectionIdNumeric.bind(this),
			getConfig: () => this.config,
			getDb: () => this.database,
			getJsonBody: this.getJsonBody.bind(this),
			getLocation: this.getLocation.bind(this),
			getPassThruBackend: this.getPassThruBackend.bind(this),
			parseRequestUrl: this.parseRequestUrl.bind(this),
		};
	}

	/**
	 * return canonical HTTP method name (lowercase) from the request object
	 * e.g. (req.method || 'get').toLowerCase();
	 * @param request - request object from the http call
	 *
	 */
	protected abstract getRequestMethod(request: any): string;

	protected indexOf(collection: any[], id: number) {
		return collection.findIndex((item: any) => item.id === id);
	}

	/** Parse the id as a number. Return original value if not a number. */
	protected parseId(collection: any[], collectionName: string, id: string): any {
		if (!this.isCollectionIdNumeric(collection, collectionName)) {
			// Can't confirm that `id` is a numeric type; don't parse as a number
			// or else `'42'` -> `42` and _get by id_ fails.
			return id;
		}
		const idNum = parseFloat(id);
		return isNaN(idNum) ? id : idNum;
	}

	/**
	 * return true if can determine that the collection's `item.id` is a number
	 * This implementation can't tell if the collection is empty so it assumes NO
	 * */
	protected isCollectionIdNumeric<T extends { id: any }>(collection: T[], collectionName: string): boolean {
		// collectionName not used now but override might maintain collection type information
		// so that it could know the type of the `id` even when the collection is empty.
		// return !!(collection && collection[0]) && typeof collection[0].id === 'number';
		return !!(collection && collection[0]);
	}

	/**
	 * Parses the request URL into a `ParsedRequestUrl` object.
	 * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
	 *
	 * Configuring the `apiBase` yields the most interesting changes to `parseRequestUrl` behavior:
	 *   When apiBase=undefined and url='http://localhost/api/collection/42'
	 *     {base: 'api/', collectionName: 'collection', id: '42', ...}
	 *   When apiBase='some/api/root/' and url='http://localhost/some/api/root/collection'
	 *     {base: 'some/api/root/', collectionName: 'collection', id: undefined, ...}
	 *   When apiBase='/' and url='http://localhost/collection'
	 *     {base: '/', collectionName: 'collection', id: undefined, ...}
	 *
	 * The actual api base segment values are ignored. Only the number of segments matters.
	 * The following api base strings are considered identical: 'a/b' ~ 'some/api/' ~ `two/segments'
	 *
	 * To replace this default method, assign your alternative to your MemoryDataService['parseRequestUrl']
	 */
	protected parseRequestUrl(url: string): ParsedRequestUrl {
		try {
			const location = this.getLocation(url);
			let drop = this.config.rootPath.length;
			let urlRoot = '';
			if (location.host !== this.config.host) {
				// url for a server on a different host!
				// assume it's collection is actually here too.
				drop = 1; // the leading slash
				urlRoot = location.protocol + '//' + location.host + '/';
			}
			const path = location.path.substring(drop);
			const pathSegments = path.split('/');
			let segmentIx = 0;
			// apiBase: the front part of the path devoted to getting to the api route
			// Assumes first path segment if no config.apiBase
			// else ignores as many path segments as are in config.apiBase
			// Does NOT care what the api base chars actually are.
			let apiBase: string;
			// tslint:disable-next-line:triple-equals
			if (this.config.apiBase == undefined) {
				apiBase = pathSegments[segmentIx++];
			} else {
				apiBase = removeTrailingSlash(this.config.apiBase.trim());
				if (apiBase) {
					segmentIx = apiBase.split('/').length;
				} else {
					segmentIx = 0; // no api base at all; unwise but allowed.
				}
			}
			apiBase += '/';
			let collectionName = pathSegments[segmentIx++];
			// ignore anything after a '.' (e.g.,the "json" in "customers.json")
			collectionName = collectionName && collectionName.split('.')[0];
			const id = pathSegments[segmentIx++];
			const query = this.createQueryMap(location.query);
			const resourceUrl = urlRoot + apiBase + collectionName + '/';
			return { apiBase, collectionName, id, query, resourceUrl };
		} catch (error) {
			const message = `unable to parse url '${url}'; original error: ${error.message}`;
			throw new Error(message);
		}
	}

	// Create entity
	// Can update an existing entity too if post409 is false.
	protected post({ collection, collectionName, headers, id, request, resourceUrl, url }: RequestInfo): ResponseOptions {
		const item = this.clone(this.getJsonBody(request));
		// tslint:disable-next-line:triple-equals
		if (item.id == undefined) {
			try {
				item.id = id || this.genId(collection, collectionName);
			} catch (error) {
				const message: string = error.message || '';
				if (/id type is non-numeric/.test(message)) {
					return this.createErrorResponseOptions(url, STATUS_CODE.UNPROCESSABLE_ENTRY, message);
				} else {
					console.error(error);
					return this.createErrorResponseOptions(url, STATUS_CODE.INTERNAL_SERVER_ERROR, `Failed to generate new id for '${collectionName}'`);
				}
			}
		}
		if (id && id !== item.id) {
			return this.createErrorResponseOptions(url, STATUS_CODE.BAD_REQUEST, `Request id does not match item.id`);
		} else {
			id = item.id;
		}
		const existingIx = this.indexOf(collection, id);
		const body = this.bodify(item);
		if (existingIx === -1) {
			collection.push(item);
			headers.set('Location', resourceUrl + '/' + id);
			return { headers, body, status: STATUS_CODE.CREATED };
		} else if (this.config.post409) {
			return this.createErrorResponseOptions(url, STATUS_CODE.CONFLICT, `'${collectionName}' item with id='${id} exists and may not be updated with POST; use PUT instead.`);
		} else {
			collection[existingIx] = item;
			return this.config.post204 ?
				{ headers, status: STATUS_CODE.NO_CONTENT } : // successful; no content
				{ headers, body, status: STATUS_CODE.OK }; // successful; return entity
		}
	}

	// Update existing entity
	// Can create an entity too if put404 is false.
	protected put({ collection, collectionName, headers, id, request, url }: RequestInfo): ResponseOptions {
		const item = this.clone(this.getJsonBody(request));
		// tslint:disable-next-line:triple-equals
		if (item.id == undefined) {
			return this.createErrorResponseOptions(url, STATUS_CODE.NOT_FOUND, `Missing '${collectionName}' id`);
		}
		if (id && id !== item.id) {
			return this.createErrorResponseOptions(url, STATUS_CODE.BAD_REQUEST, `Request for '${collectionName}' id does not match item.id`);
		} else {
			id = item.id;
		}
		const existingIx = this.indexOf(collection, id);
		const body = this.bodify(item);
		if (existingIx > -1) {
			collection[existingIx] = item;
			return this.config.put204 ?
				{ headers, status: STATUS_CODE.NO_CONTENT } : // successful; no content
				{ headers, body, status: STATUS_CODE.OK }; // successful; return entity
		} else if (this.config.put404) {
			// item to update not found; use POST to create new item for this id.
			return this.createErrorResponseOptions(url, STATUS_CODE.NOT_FOUND, `'${collectionName}' item with id='${id} not found and may not be created with PUT; use POST instead.`);
		} else {
			// create new item for id not found
			collection.push(item);
			return { headers, body, status: STATUS_CODE.CREATED };
		}
	}

	protected removeById(collection: any[], id: number) {
		const index = this.indexOf(collection, id);
		if (index > -1) {
			collection.splice(index, 1);
			return true;
		}
		return false;
	}

	/**
	 * Tell your in-mem "database" to reset.
	 * returns Observable of the database because resetting it could be async
	 */
	protected resetDb(requestInfo?: RequestInfo): Observable<boolean> {
		this.databaseReadySubject.next(false);
		const database = this.dataService.createDb(requestInfo);
		const database$ = database instanceof Observable ? database :
			typeof (database as any).then === 'function' ? from(database as Promise<any>) :
				of(database);
		database$.pipe(first()).subscribe((database: {}) => {
			this.database = database;
			this.databaseReadySubject.next(true);
		});
		return this.databaseReady;
	}

}
