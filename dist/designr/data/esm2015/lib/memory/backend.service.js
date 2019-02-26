/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { concatMap, first } from 'rxjs/operators';
import { delayResponse } from './delay-response';
import { getStatusText, isSuccess, STATUS_CODE } from './http-status-codes';
import { MemoryBackendConfig, parseUri, removeTrailingSlash } from './memory';
/**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `MemoryDataService` service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 * @abstract
 */
export class BackendService {
    /**
     * @param {?} dataService
     * @param {?=} config
     */
    constructor(dataService, config = {}) {
        this.dataService = dataService;
        this.config = new MemoryBackendConfig();
        this.requestInfoUtils = this.getRequestInfoUtils();
        /** @type {?} */
        const location = this.getLocation('/');
        this.config.host = location.host; // default to app web server host
        this.config.rootPath = location.path; // default to path when app is served (e.g.'/')
        Object.assign(this.config, config);
    }
    /**
     * @protected
     * @return {?}
     */
    get databaseReady() {
        if (!this.databaseReadySubject) {
            // first time the service is called.
            this.databaseReadySubject = new BehaviorSubject(false);
            this.resetDb();
        }
        return this.databaseReadySubject.asObservable().pipe(first((r) => r));
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
     * @protected
     * @param {?} request
     * @return {?}
     */
    handleRequest(request) {
        //  handle the request when there is an in-memory database
        return this.databaseReady.pipe(concatMap(() => this.handleRequest_(request)));
    }
    /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    handleRequest_(request) {
        /** @type {?} */
        const url = request.urlWithParams ? request.urlWithParams : request.url;
        // Try override parser
        // If no override parser or it returns nothing, use default parser
        /** @type {?} */
        const parser = this.bind('parseRequestUrl');
        /** @type {?} */
        const parsed = (parser && parser(url, this.requestInfoUtils)) || this.parseRequestUrl(url);
        /** @type {?} */
        const collectionName = parsed.collectionName;
        /** @type {?} */
        const collection = this.database[collectionName];
        /** @type {?} */
        const requestInfo = {
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
        /** @type {?} */
        let responseOptions;
        if (/commands\/?$/i.test(requestInfo.apiBase)) {
            return this.commands(requestInfo);
        }
        /** @type {?} */
        const methodInterceptor = this.bind(requestInfo.method);
        if (methodInterceptor) {
            // MemoryDataService intercepts this HTTP method.
            // if interceptor produced a response, return it.
            // else MemoryDataService chose not to intercept; continue processing.
            /** @type {?} */
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
     * @protected
     * @param {?} response
     * @return {?}
     */
    addDelay(response) {
        /** @type {?} */
        const delay = this.config.delay;
        return delay === 0 ? response : delayResponse(response, delay || 500);
    }
    /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     * @protected
     * @param {?} collection
     * @param {?} query
     * @return {?}
     */
    applyQuery(collection, query) {
        // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
        /** @type {?} */
        const conditions = [];
        /** @type {?} */
        const caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
        query.forEach((value, name) => {
            value.forEach(x => conditions.push({
                name,
                regexp: new RegExp(decodeURI(x), caseSensitive)
            }));
        });
        /** @type {?} */
        const length = conditions.length;
        if (!length) {
            return collection;
        }
        // AND the RegExp conditions
        return collection.filter(row => {
            /** @type {?} */
            let has = true;
            /** @type {?} */
            let i = length;
            while (has && i) {
                i -= 1;
                /** @type {?} */
                const cond = conditions[i];
                has = cond.regexp.test(row[cond.name]);
            }
            return has;
        });
    }
    /**
     * Get a method from the `MemoryDataService` (if it exists), bound to that service
     * @protected
     * @template T
     * @param {?} methodName
     * @return {?}
     */
    bind(methodName) {
        /** @type {?} */
        const method = (/** @type {?} */ (this.dataService[methodName]));
        return method ? (/** @type {?} */ (method.bind(this.dataService))) : undefined;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    bodify(data) {
        return this.config.dataEncapsulation ? { data } : data;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    clone(data) {
        return JSON.parse(JSON.stringify(data));
    }
    /**
     * @protected
     * @param {?} requestInfo
     * @return {?}
     */
    collectionHandler(requestInfo) {
        // const request = requestInfo.request;
        /** @type {?} */
        let responseOptions;
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
        /** @type {?} */
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
     * @protected
     * @param {?} requestInfo
     * @return {?}
     */
    commands(requestInfo) {
        /** @type {?} */
        const command = requestInfo.collectionName.toLowerCase();
        /** @type {?} */
        const method = requestInfo.method;
        /** @type {?} */
        let responseOptions = {
            url: requestInfo.url
        };
        switch (command) {
            case 'resetdb':
                responseOptions.status = STATUS_CODE.NO_CONTENT;
                return this.resetDb(requestInfo).pipe(concatMap(() => this.createResponse$(() => responseOptions, false /* no latency delay */)));
            case 'config':
                if (method === 'get') {
                    responseOptions.status = STATUS_CODE.OK;
                    responseOptions.body = this.clone(this.config);
                    // any other HTTP method is assumed to be a config update
                }
                else {
                    /** @type {?} */
                    const body = this.getJsonBody(requestInfo.request);
                    Object.assign(this.config, body);
                    this.passThruBackend = undefined; // re-create when needed
                    responseOptions.status = STATUS_CODE.NO_CONTENT;
                }
                break;
            default:
                responseOptions = this.createErrorResponseOptions(requestInfo.url, STATUS_CODE.INTERNAL_SERVER_ERROR, `Unknown command "${command}"`);
        }
        return this.createResponse$(() => responseOptions, false /* no latency delay */);
    }
    /**
     * @protected
     * @param {?} url
     * @param {?} status
     * @param {?} message
     * @return {?}
     */
    createErrorResponseOptions(url, status, message) {
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
     * Create a cold response Observable from a factory for ResponseOptions
     * @protected
     * @param {?} responseOptionsFactory - creates ResponseOptions when observable is subscribed
     * @param {?=} withDelay - if true (default), add simulated latency delay from configuration
     * @return {?}
     */
    createResponse$(responseOptionsFactory, withDelay = true) {
        /** @type {?} */
        const responseOptions$ = this.createResponseOptions$(responseOptionsFactory);
        /** @type {?} */
        const response$ = this.createResponse$fromResponseOptions$(responseOptions$);
        return withDelay ? this.addDelay(response$) : response$;
    }
    /**
     * Create a cold Observable of ResponseOptions.
     * @protected
     * @param {?} responseOptionsFactory - creates ResponseOptions when observable is subscribed
     * @return {?}
     */
    createResponseOptions$(responseOptionsFactory) {
        return new Observable((responseObserver) => {
            /** @type {?} */
            let responseOptions;
            try {
                responseOptions = responseOptionsFactory();
            }
            catch (error) {
                error = error.message || error;
                responseOptions = this.createErrorResponseOptions('', STATUS_CODE.INTERNAL_SERVER_ERROR, `${error}`);
            }
            /** @type {?} */
            const status = responseOptions.status;
            try {
                responseOptions.statusText = getStatusText(status);
            }
            catch (error) { /* ignore failure */ }
            if (isSuccess(status)) {
                responseObserver.next(responseOptions);
                responseObserver.complete();
            }
            else {
                responseObserver.error(responseOptions);
            }
            return () => { }; // unsubscribe function
        });
    }
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    delete({ collection, collectionName, headers, id, url }) {
        // tslint:disable-next-line:triple-equals
        if (id == undefined) {
            return this.createErrorResponseOptions(url, STATUS_CODE.NOT_FOUND, `Missing "${collectionName}" id`);
        }
        /** @type {?} */
        const exists = this.removeById(collection, id);
        return {
            headers: headers,
            status: (exists || !this.config.delete404) ? STATUS_CODE.NO_CONTENT : STATUS_CODE.NOT_FOUND
        };
    }
    /**
     * Find first instance of item in collection by `item.id`
     * @protected
     * @template T
     * @param {?} collection
     * @param {?} id
     * @return {?}
     */
    findById(collection, id) {
        return collection.find((item) => item.id === id);
    }
    /**
     * Generate the next available id for item in this collection
     * Use method from `dataService` if it exists and returns a value,
     * else delegates to `genIdDefault`.
     * @protected
     * @template T
     * @param {?} collection - collection of items with `id` key property
     * @param {?} collectionName
     * @return {?}
     */
    genId(collection, collectionName) {
        /** @type {?} */
        const genId = this.bind('genId');
        if (genId) {
            /** @type {?} */
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
     * @protected
     * @template T
     * @param {?} collection - collection of items with `id` key property
     * @param {?} collectionName - name of the collection
     * @return {?}
     */
    genIdDefault(collection, collectionName) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
            throw new Error(`Collection '${collectionName}' id type is non-numeric or unknown. Can only generate numeric ids.`);
        }
        /** @type {?} */
        let maxId = 0;
        collection.reduce((prev, item) => {
            maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
        }, undefined);
        return maxId + 1;
    }
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    get({ collection, collectionName, headers, id, query, url }) {
        /** @type {?} */
        let data = collection;
        // tslint:disable-next-line:triple-equals
        if (id != undefined && id !== '') {
            data = this.findById(collection, id);
        }
        else if (query) {
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
    /**
     * Get location info from a url, even on server where `document` is not defined
     * @protected
     * @param {?} url
     * @return {?}
     */
    getLocation(url) {
        if (!url.startsWith('http')) {
            // get the document if running in browser
            /** @type {?} */
            const document_ = (typeof document === 'undefined') ? undefined : document;
            // add host info to url before parsing.  Use a fake host when not in browser.
            /** @type {?} */
            const base = document_ ? document_.location.protocol + '//' + document_.location.host : 'http://fake';
            url = url.startsWith('/') ? base + url : base + '/' + url;
        }
        return parseUri(url);
    }
    /**
     * get or create the function that passes unhandled requests
     * through to the "real" backend.
     * @protected
     * @return {?}
     */
    getPassThruBackend() {
        return this.passThruBackend ? this.passThruBackend : this.passThruBackend = this.createPassThruBackend();
    }
    /**
     * Get utility methods from this service instance.
     * Useful within an HTTP method override
     * @protected
     * @return {?}
     */
    getRequestInfoUtils() {
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
     * @protected
     * @param {?} collection
     * @param {?} id
     * @return {?}
     */
    indexOf(collection, id) {
        return collection.findIndex((item) => item.id === id);
    }
    /**
     * Parse the id as a number. Return original value if not a number.
     * @protected
     * @param {?} collection
     * @param {?} collectionName
     * @param {?} id
     * @return {?}
     */
    parseId(collection, collectionName, id) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
            // Can't confirm that `id` is a numeric type; don't parse as a number
            // or else `'42'` -> `42` and _get by id_ fails.
            return id;
        }
        /** @type {?} */
        const idNum = parseFloat(id);
        return isNaN(idNum) ? id : idNum;
    }
    /**
     * return true if can determine that the collection's `item.id` is a number
     * This implementation can't tell if the collection is empty so it assumes NO
     *
     * @protected
     * @template T
     * @param {?} collection
     * @param {?} collectionName
     * @return {?}
     */
    isCollectionIdNumeric(collection, collectionName) {
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
     * @protected
     * @param {?} url
     * @return {?}
     */
    parseRequestUrl(url) {
        try {
            /** @type {?} */
            const location = this.getLocation(url);
            /** @type {?} */
            let drop = this.config.rootPath.length;
            /** @type {?} */
            let urlRoot = '';
            if (location.host !== this.config.host) {
                // url for a server on a different host!
                // assume it's collection is actually here too.
                drop = 1; // the leading slash
                urlRoot = location.protocol + '//' + location.host + '/';
            }
            /** @type {?} */
            const path = location.path.substring(drop);
            /** @type {?} */
            const pathSegments = path.split('/');
            /** @type {?} */
            let segmentIx = 0;
            // apiBase: the front part of the path devoted to getting to the api route
            // Assumes first path segment if no config.apiBase
            // else ignores as many path segments as are in config.apiBase
            // Does NOT care what the api base chars actually are.
            /** @type {?} */
            let apiBase;
            // tslint:disable-next-line:triple-equals
            if (this.config.apiBase == undefined) {
                apiBase = pathSegments[segmentIx++];
            }
            else {
                apiBase = removeTrailingSlash(this.config.apiBase.trim());
                if (apiBase) {
                    segmentIx = apiBase.split('/').length;
                }
                else {
                    segmentIx = 0; // no api base at all; unwise but allowed.
                }
            }
            apiBase += '/';
            /** @type {?} */
            let collectionName = pathSegments[segmentIx++];
            // ignore anything after a '.' (e.g.,the "json" in "customers.json")
            collectionName = collectionName && collectionName.split('.')[0];
            /** @type {?} */
            const id = pathSegments[segmentIx++];
            /** @type {?} */
            const query = this.createQueryMap(location.query);
            /** @type {?} */
            const resourceUrl = urlRoot + apiBase + collectionName + '/';
            return { apiBase, collectionName, id, query, resourceUrl };
        }
        catch (error) {
            /** @type {?} */
            const message = `unable to parse url '${url}'; original error: ${error.message}`;
            throw new Error(message);
        }
    }
    // Create entity
    // Can update an existing entity too if post409 is false.
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    post({ collection, collectionName, headers, id, request, resourceUrl, url }) {
        /** @type {?} */
        const item = this.clone(this.getJsonBody(request));
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            try {
                item.id = id || this.genId(collection, collectionName);
            }
            catch (error) {
                /** @type {?} */
                const message = error.message || '';
                if (/id type is non-numeric/.test(message)) {
                    return this.createErrorResponseOptions(url, STATUS_CODE.UNPROCESSABLE_ENTRY, message);
                }
                else {
                    console.error(error);
                    return this.createErrorResponseOptions(url, STATUS_CODE.INTERNAL_SERVER_ERROR, `Failed to generate new id for '${collectionName}'`);
                }
            }
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, STATUS_CODE.BAD_REQUEST, `Request id does not match item.id`);
        }
        else {
            id = item.id;
        }
        /** @type {?} */
        const existingIx = this.indexOf(collection, id);
        /** @type {?} */
        const body = this.bodify(item);
        if (existingIx === -1) {
            collection.push(item);
            headers.set('Location', resourceUrl + '/' + id);
            return { headers, body, status: STATUS_CODE.CREATED };
        }
        else if (this.config.post409) {
            return this.createErrorResponseOptions(url, STATUS_CODE.CONFLICT, `'${collectionName}' item with id='${id} exists and may not be updated with POST; use PUT instead.`);
        }
        else {
            collection[existingIx] = item;
            return this.config.post204 ?
                { headers, status: STATUS_CODE.NO_CONTENT } : // successful; no content
                { headers, body, status: STATUS_CODE.OK }; // successful; return entity
        }
    }
    // Update existing entity
    // Can create an entity too if put404 is false.
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    put({ collection, collectionName, headers, id, request, url }) {
        /** @type {?} */
        const item = this.clone(this.getJsonBody(request));
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            return this.createErrorResponseOptions(url, STATUS_CODE.NOT_FOUND, `Missing '${collectionName}' id`);
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, STATUS_CODE.BAD_REQUEST, `Request for '${collectionName}' id does not match item.id`);
        }
        else {
            id = item.id;
        }
        /** @type {?} */
        const existingIx = this.indexOf(collection, id);
        /** @type {?} */
        const body = this.bodify(item);
        if (existingIx > -1) {
            collection[existingIx] = item;
            return this.config.put204 ?
                { headers, status: STATUS_CODE.NO_CONTENT } : // successful; no content
                { headers, body, status: STATUS_CODE.OK }; // successful; return entity
        }
        else if (this.config.put404) {
            // item to update not found; use POST to create new item for this id.
            return this.createErrorResponseOptions(url, STATUS_CODE.NOT_FOUND, `'${collectionName}' item with id='${id} not found and may not be created with PUT; use POST instead.`);
        }
        else {
            // create new item for id not found
            collection.push(item);
            return { headers, body, status: STATUS_CODE.CREATED };
        }
    }
    /**
     * @protected
     * @param {?} collection
     * @param {?} id
     * @return {?}
     */
    removeById(collection, id) {
        /** @type {?} */
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
     * @protected
     * @param {?=} requestInfo
     * @return {?}
     */
    resetDb(requestInfo) {
        this.databaseReadySubject.next(false);
        /** @type {?} */
        const database = this.dataService.createDb(requestInfo);
        /** @type {?} */
        const database$ = database instanceof Observable ? database :
            typeof ((/** @type {?} */ (database))).then === 'function' ? from((/** @type {?} */ (database))) :
                of(database);
        database$.pipe(first()).subscribe((database) => {
            this.database = database;
            this.databaseReadySubject.next(true);
        });
        return this.databaseReady;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    BackendService.prototype.passThruBackend;
    /**
     * @type {?}
     * @protected
     */
    BackendService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    BackendService.prototype.database;
    /**
     * @type {?}
     * @protected
     */
    BackendService.prototype.databaseReadySubject;
    /**
     * @type {?}
     * @protected
     */
    BackendService.prototype.requestInfoUtils;
    /**
     * @type {?}
     * @protected
     */
    BackendService.prototype.dataService;
    /**
     * Create standard HTTP headers object from hash map of header strings
     * @abstract
     * @protected
     * @param {?} headers
     * @return {?}
     */
    BackendService.prototype.createHeaders = function (headers) { };
    /**
     * create the function that passes unhandled requests through to the "real" backend.
     * @abstract
     * @protected
     * @return {?}
     */
    BackendService.prototype.createPassThruBackend = function () { };
    /**
     * return a search map from a location query/search string
     * @abstract
     * @protected
     * @param {?} search
     * @return {?}
     */
    BackendService.prototype.createQueryMap = function (search) { };
    /**
     * Create a Response observable from ResponseOptions observable.
     * @abstract
     * @protected
     * @param {?} responseOptions$
     * @return {?}
     */
    BackendService.prototype.createResponse$fromResponseOptions$ = function (responseOptions$) { };
    /**
     * Get JSON body from the request object
     * @abstract
     * @protected
     * @param {?} request
     * @return {?}
     */
    BackendService.prototype.getJsonBody = function (request) { };
    /**
     * return canonical HTTP method name (lowercase) from the request object
     * e.g. (req.method || 'get').toLowerCase();
     * @abstract
     * @protected
     * @param {?} request - request object from the http call
     *
     * @return {?}
     */
    BackendService.prototype.getRequestMethod = function (request) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQVksRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVFLE9BQU8sRUFBZSxtQkFBbUIsRUFBdUMsUUFBUSxFQUFtQixtQkFBbUIsRUFBNEUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7OztBQVMzTixNQUFNLE9BQWdCLGNBQWM7Ozs7O0lBT25DLFlBQ1csV0FBOEIsRUFDeEMsU0FBOEIsRUFBRTtRQUR0QixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFOL0IsV0FBTSxHQUF3QixJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFHeEQscUJBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7O2NBTWpELFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsaUNBQWlDO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQywrQ0FBK0M7UUFDckYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsSUFBYyxhQUFhO1FB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bGUsIE9ic2VydmVyLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uY2F0TWFwLCBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlbGF5UmVzcG9uc2UgfSBmcm9tICcuL2RlbGF5LXJlc3BvbnNlJztcbmltcG9ydCB7IGdldFN0YXR1c1RleHQsIGlzU3VjY2VzcywgU1RBVFVTX0NPREUgfSBmcm9tICcuL2h0dHAtc3RhdHVzLWNvZGVzJztcbmltcG9ydCB7IEhlYWRlcnNDb3JlLCBNZW1vcnlCYWNrZW5kQ29uZmlnLCBNZW1vcnlEYXRhU2VydmljZSwgUGFyc2VkUmVxdWVzdFVybCwgcGFyc2VVcmksIFBhc3NUaHJ1QmFja2VuZCwgcmVtb3ZlVHJhaWxpbmdTbGFzaCwgUmVxdWVzdENvcmUsIFJlcXVlc3RJbmZvLCBSZXF1ZXN0SW5mb1V0aWxpdGllcywgUmVzcG9uc2VPcHRpb25zLCBVcmlJbmZvIH0gZnJvbSAnLi9tZW1vcnknO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGluLW1lbW9yeSB3ZWIgYXBpIGJhY2stZW5kc1xuICogU2ltdWxhdGUgdGhlIGJlaGF2aW9yIG9mIGEgUkVTVHkgd2ViIGFwaVxuICogYmFja2VkIGJ5IHRoZSBzaW1wbGUgaW4tbWVtb3J5IGRhdGEgc3RvcmUgcHJvdmlkZWQgYnkgdGhlIGluamVjdGVkIGBNZW1vcnlEYXRhU2VydmljZWAgc2VydmljZS5cbiAqIENvbmZvcm1zIG1vc3RseSB0byBiZWhhdmlvciBkZXNjcmliZWQgaGVyZTpcbiAqIGh0dHA6Ly93d3cucmVzdGFwaXR1dG9yaWFsLmNvbS9sZXNzb25zL2h0dHBtZXRob2RzLmh0bWxcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcblx0cHJpdmF0ZSBwYXNzVGhydUJhY2tlbmQ6IFBhc3NUaHJ1QmFja2VuZDtcblx0cHJvdGVjdGVkIGNvbmZpZzogTWVtb3J5QmFja2VuZENvbmZpZyA9IG5ldyBNZW1vcnlCYWNrZW5kQ29uZmlnKCk7XG5cdHByb3RlY3RlZCBkYXRhYmFzZTogT2JqZWN0O1xuXHRwcm90ZWN0ZWQgZGF0YWJhc2VSZWFkeVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcblx0cHJvdGVjdGVkIHJlcXVlc3RJbmZvVXRpbHMgPSB0aGlzLmdldFJlcXVlc3RJbmZvVXRpbHMoKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgZGF0YVNlcnZpY2U6IE1lbW9yeURhdGFTZXJ2aWNlLFxuXHRcdGNvbmZpZzogTWVtb3J5QmFja2VuZENvbmZpZyA9IHt9XG5cdCkge1xuXHRcdGNvbnN0IGxvY2F0aW9uID0gdGhpcy5nZXRMb2NhdGlvbignLycpO1xuXHRcdHRoaXMuY29uZmlnLmhvc3QgPSBsb2NhdGlvbi5ob3N0OyAvLyBkZWZhdWx0IHRvIGFwcCB3ZWIgc2VydmVyIGhvc3Rcblx0XHR0aGlzLmNvbmZpZy5yb290UGF0aCA9IGxvY2F0aW9uLnBhdGg7IC8vIGRlZmF1bHQgdG8gcGF0aCB3aGVuIGFwcCBpcyBzZXJ2ZWQgKGUuZy4nLycpXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgY29uZmlnKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXQgZGF0YWJhc2VSZWFkeSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRpZiAoIXRoaXMuZGF0YWJhc2VSZWFkeVN1YmplY3QpIHtcblx0XHRcdC8vIGZpcnN0IHRpbWUgdGhlIHNlcnZpY2UgaXMgY2FsbGVkLlxuXHRcdFx0dGhpcy5kYXRhYmFzZVJlYWR5U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXHRcdFx0dGhpcy5yZXNldERiKCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmRhdGFiYXNlUmVhZHlTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG5cdFx0XHRmaXJzdCgocjogYm9vbGVhbikgPT4gcilcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb2Nlc3MgUmVxdWVzdCBhbmQgcmV0dXJuIGFuIE9ic2VydmFibGUgb2YgSHR0cCBSZXNwb25zZSBvYmplY3Rcblx0ICogaW4gdGhlIG1hbm5lciBvZiBhIFJFU1R5IHdlYiBhcGkuXG5cdCAqXG5cdCAqIEV4cGVjdCBVUkkgcGF0dGVybiBpbiB0aGUgZm9ybSA6YmFzZS86Y29sbGVjdGlvbk5hbWUvOmlkP1xuXHQgKiBFeGFtcGxlczpcblx0ICogICAvLyBmb3Igc3RvcmUgd2l0aCBhICdjdXN0b21lcnMnIGNvbGxlY3Rpb25cblx0ICogICBHRVQgYXBpL2N1c3RvbWVycyAgICAgICAgICAvLyBhbGwgY3VzdG9tZXJzXG5cdCAqICAgR0VUIGFwaS9jdXN0b21lcnMvNDIgICAgICAgLy8gdGhlIGNoYXJhY3RlciB3aXRoIGlkPTQyXG5cdCAqICAgR0VUIGFwaS9jdXN0b21lcnM/bmFtZT1eaiAgLy8gJ2onIGlzIGEgcmVnZXg7IHJldHVybnMgY3VzdG9tZXJzIHdob3NlIG5hbWUgc3RhcnRzIHdpdGggJ2onIG9yICdKJ1xuXHQgKiAgIEdFVCBhcGkvY3VzdG9tZXJzLmpzb24vNDIgIC8vIGlnbm9yZXMgdGhlIFwiLmpzb25cIlxuXHQgKlxuXHQgKiBBbHNvIGFjY2VwdHMgZGlyZWN0IGNvbW1hbmRzIHRvIHRoZSBzZXJ2aWNlIGluIHdoaWNoIHRoZSBsYXN0IHNlZ21lbnQgb2YgdGhlIGFwaUJhc2UgaXMgdGhlIHdvcmQgXCJjb21tYW5kc1wiXG5cdCAqIEV4YW1wbGVzOlxuXHQgKiAgICAgUE9TVCBjb21tYW5kcy9yZXNldERiLFxuXHQgKiAgICAgR0VUL1BPU1QgY29tbWFuZHMvY29uZmlnIC0gZ2V0IG9yIChyZSlzZXQgdGhlIGNvbmZpZ1xuXHQgKlxuXHQgKiAgIEhUVFAgb3ZlcnJpZGVzOlxuXHQgKiAgICAgSWYgdGhlIGluamVjdGVkIGRhdGFTZXJ2aWNlIGRlZmluZXMgYW4gSFRUUCBtZXRob2QgKGxvd2VyY2FzZSlcblx0ICogICAgIFRoZSByZXF1ZXN0IGlzIGZvcndhcmRlZCB0byB0aGF0IG1ldGhvZCBhcyBpblxuXHQgKiAgICAgYGRhdGFTZXJ2aWNlLmdldChyZXF1ZXN0SW5mbylgXG5cdCAqICAgICB3aGljaCBtdXN0IHJldHVybiBlaXRoZXIgYW4gT2JzZXJ2YWJsZSBvZiB0aGUgcmVzcG9uc2UgdHlwZVxuXHQgKiAgICAgZm9yIHRoaXMgaHR0cCBsaWJyYXJ5IG9yIG51bGx8dW5kZWZpbmVkICh3aGljaCBtZWFucyBcImtlZXAgcHJvY2Vzc2luZ1wiKS5cblx0ICovXG5cdHByb3RlY3RlZCBoYW5kbGVSZXF1ZXN0KHJlcXVlc3Q6IFJlcXVlc3RDb3JlKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHQvLyAgaGFuZGxlIHRoZSByZXF1ZXN0IHdoZW4gdGhlcmUgaXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlXG5cdFx0cmV0dXJuIHRoaXMuZGF0YWJhc2VSZWFkeS5waXBlKGNvbmNhdE1hcCgoKSA9PiB0aGlzLmhhbmRsZVJlcXVlc3RfKHJlcXVlc3QpKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGFuZGxlUmVxdWVzdF8ocmVxdWVzdDogUmVxdWVzdENvcmUpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IHVybCA9IHJlcXVlc3QudXJsV2l0aFBhcmFtcyA/IHJlcXVlc3QudXJsV2l0aFBhcmFtcyA6IHJlcXVlc3QudXJsO1xuXHRcdC8vIFRyeSBvdmVycmlkZSBwYXJzZXJcblx0XHQvLyBJZiBubyBvdmVycmlkZSBwYXJzZXIgb3IgaXQgcmV0dXJucyBub3RoaW5nLCB1c2UgZGVmYXVsdCBwYXJzZXJcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLmJpbmQoJ3BhcnNlUmVxdWVzdFVybCcpO1xuXHRcdGNvbnN0IHBhcnNlZDogUGFyc2VkUmVxdWVzdFVybCA9IChwYXJzZXIgJiYgcGFyc2VyKHVybCwgdGhpcy5yZXF1ZXN0SW5mb1V0aWxzKSkgfHwgdGhpcy5wYXJzZVJlcXVlc3RVcmwodXJsKTtcblx0XHRjb25zdCBjb2xsZWN0aW9uTmFtZSA9IHBhcnNlZC5jb2xsZWN0aW9uTmFtZTtcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5kYXRhYmFzZVtjb2xsZWN0aW9uTmFtZV07XG5cdFx0Y29uc3QgcmVxdWVzdEluZm86IFJlcXVlc3RJbmZvID0ge1xuXHRcdFx0cmVxdWVzdDogcmVxdWVzdCxcblx0XHRcdGFwaUJhc2U6IHBhcnNlZC5hcGlCYXNlLFxuXHRcdFx0Y29sbGVjdGlvbjogY29sbGVjdGlvbixcblx0XHRcdGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZSxcblx0XHRcdGhlYWRlcnM6IHRoaXMuY3JlYXRlSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXG5cdFx0XHRpZDogdGhpcy5wYXJzZUlkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBwYXJzZWQuaWQpLFxuXHRcdFx0bWV0aG9kOiB0aGlzLmdldFJlcXVlc3RNZXRob2QocmVxdWVzdCksXG5cdFx0XHRxdWVyeTogcGFyc2VkLnF1ZXJ5LFxuXHRcdFx0cmVzb3VyY2VVcmw6IHBhcnNlZC5yZXNvdXJjZVVybCxcblx0XHRcdHVybDogdXJsLFxuXHRcdFx0dXRpbHM6IHRoaXMucmVxdWVzdEluZm9VdGlsc1xuXHRcdH07XG5cdFx0bGV0IHJlc3BvbnNlT3B0aW9uczogUmVzcG9uc2VPcHRpb25zO1xuXHRcdGlmICgvY29tbWFuZHNcXC8/JC9pLnRlc3QocmVxdWVzdEluZm8uYXBpQmFzZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbW1hbmRzKHJlcXVlc3RJbmZvKTtcblx0XHR9XG5cdFx0Y29uc3QgbWV0aG9kSW50ZXJjZXB0b3IgPSB0aGlzLmJpbmQocmVxdWVzdEluZm8ubWV0aG9kKTtcblx0XHRpZiAobWV0aG9kSW50ZXJjZXB0b3IpIHtcblx0XHRcdC8vIE1lbW9yeURhdGFTZXJ2aWNlIGludGVyY2VwdHMgdGhpcyBIVFRQIG1ldGhvZC5cblx0XHRcdC8vIGlmIGludGVyY2VwdG9yIHByb2R1Y2VkIGEgcmVzcG9uc2UsIHJldHVybiBpdC5cblx0XHRcdC8vIGVsc2UgTWVtb3J5RGF0YVNlcnZpY2UgY2hvc2Ugbm90IHRvIGludGVyY2VwdDsgY29udGludWUgcHJvY2Vzc2luZy5cblx0XHRcdGNvbnN0IGludGVyY2VwdG9yUmVzcG9uc2UgPSBtZXRob2RJbnRlcmNlcHRvcihyZXF1ZXN0SW5mbyk7XG5cdFx0XHRpZiAoaW50ZXJjZXB0b3JSZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gaW50ZXJjZXB0b3JSZXNwb25zZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRoaXMuZGF0YWJhc2VbY29sbGVjdGlvbk5hbWVdKSB7XG5cdFx0XHQvLyByZXF1ZXN0IGlzIGZvciBhIGtub3duIGNvbGxlY3Rpb24gb2YgdGhlIE1lbW9yeURhdGFTZXJ2aWNlXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gdGhpcy5jb2xsZWN0aW9uSGFuZGxlcihyZXF1ZXN0SW5mbykpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jb25maWcucGFzc1RocnVVbmtub3duVXJsKSB7XG5cdFx0XHQvLyB1bmtub3duIGNvbGxlY3Rpb247IHBhc3MgcmVxdWVzdCB0aHJ1IHRvIGEgXCJyZWFsXCIgYmFja2VuZC5cblx0XHRcdHJldHVybiB0aGlzLmdldFBhc3NUaHJ1QmFja2VuZCgpLmhhbmRsZShyZXF1ZXN0KTtcblx0XHR9XG5cdFx0Ly8gNDA0IC0gY2FuJ3QgaGFuZGxlIHRoaXMgcmVxdWVzdFxuXHRcdHJlc3BvbnNlT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVNfQ09ERS5OT1RfRk9VTkQsIGBDb2xsZWN0aW9uICcke2NvbGxlY3Rpb25OYW1lfScgbm90IGZvdW5kYCk7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHJlc3BvbnNlT3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQWRkIGNvbmZpZ3VyZWQgZGVsYXkgdG8gcmVzcG9uc2Ugb2JzZXJ2YWJsZSB1bmxlc3MgZGVsYXkgPT09IDBcblx0ICovXG5cdHByb3RlY3RlZCBhZGREZWxheShyZXNwb25zZTogT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBkZWxheSA9IHRoaXMuY29uZmlnLmRlbGF5O1xuXHRcdHJldHVybiBkZWxheSA9PT0gMCA/IHJlc3BvbnNlIDogZGVsYXlSZXNwb25zZShyZXNwb25zZSwgZGVsYXkgfHwgNTAwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBcHBseSBxdWVyeS9zZWFyY2ggcGFyYW1ldGVycyBhcyBhIGZpbHRlciBvdmVyIHRoZSBjb2xsZWN0aW9uXG5cdCAqIFRoaXMgaW1wbCBvbmx5IHN1cHBvcnRzIFJlZ0V4cCBxdWVyaWVzIG9uIHN0cmluZyBwcm9wZXJ0aWVzIG9mIHRoZSBjb2xsZWN0aW9uXG5cdCAqIEFORHMgdGhlIGNvbmRpdGlvbnMgdG9nZXRoZXJcblx0ICovXG5cdHByb3RlY3RlZCBhcHBseVF1ZXJ5KGNvbGxlY3Rpb246IGFueVtdLCBxdWVyeTogTWFwPHN0cmluZywgc3RyaW5nW10+KTogYW55W10ge1xuXHRcdC8vIGV4dHJhY3QgZmlsdGVyaW5nIGNvbmRpdGlvbnMgLSB7cHJvcGVydHlOYW1lLCBSZWdFeHBzKSAtIGZyb20gcXVlcnkvc2VhcmNoIHBhcmFtZXRlcnNcblx0XHRjb25zdCBjb25kaXRpb25zOiB7IG5hbWU6IHN0cmluZywgcmVnZXhwOiBSZWdFeHAgfVtdID0gW107XG5cdFx0Y29uc3QgY2FzZVNlbnNpdGl2ZSA9IHRoaXMuY29uZmlnLmNhc2VTZW5zaXRpdmVTZWFyY2ggPyB1bmRlZmluZWQgOiAnaSc7XG5cdFx0cXVlcnkuZm9yRWFjaCgodmFsdWU6IHN0cmluZ1tdLCBuYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdHZhbHVlLmZvckVhY2goeCA9PiBjb25kaXRpb25zLnB1c2goe1xuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRyZWdleHA6IG5ldyBSZWdFeHAoZGVjb2RlVVJJKHgpLCBjYXNlU2Vuc2l0aXZlKVxuXHRcdFx0fSkpO1xuXHRcdH0pO1xuXHRcdGNvbnN0IGxlbmd0aCA9IGNvbmRpdGlvbnMubGVuZ3RoO1xuXHRcdGlmICghbGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gY29sbGVjdGlvbjtcblx0XHR9XG5cdFx0Ly8gQU5EIHRoZSBSZWdFeHAgY29uZGl0aW9uc1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmZpbHRlcihyb3cgPT4ge1xuXHRcdFx0bGV0IGhhcyA9IHRydWU7XG5cdFx0XHRsZXQgaSA9IGxlbmd0aDtcblx0XHRcdHdoaWxlIChoYXMgJiYgaSkge1xuXHRcdFx0XHRpIC09IDE7XG5cdFx0XHRcdGNvbnN0IGNvbmQgPSBjb25kaXRpb25zW2ldO1xuXHRcdFx0XHRoYXMgPSBjb25kLnJlZ2V4cC50ZXN0KHJvd1tjb25kLm5hbWVdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBoYXM7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgbWV0aG9kIGZyb20gdGhlIGBNZW1vcnlEYXRhU2VydmljZWAgKGlmIGl0IGV4aXN0cyksIGJvdW5kIHRvIHRoYXQgc2VydmljZVxuXHQgKi9cblx0cHJvdGVjdGVkIGJpbmQ8VCBleHRlbmRzIEZ1bmN0aW9uPihtZXRob2ROYW1lOiBzdHJpbmcpIHtcblx0XHRjb25zdCBtZXRob2QgPSB0aGlzLmRhdGFTZXJ2aWNlW21ldGhvZE5hbWVdIGFzIFQ7XG5cdFx0cmV0dXJuIG1ldGhvZCA/IDxUPm1ldGhvZC5iaW5kKHRoaXMuZGF0YVNlcnZpY2UpIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0cHJvdGVjdGVkIGJvZGlmeShkYXRhOiBhbnkpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuZGF0YUVuY2Fwc3VsYXRpb24gPyB7IGRhdGEgfSA6IGRhdGE7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY2xvbmUoZGF0YTogYW55KSB7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNvbGxlY3Rpb25IYW5kbGVyKHJlcXVlc3RJbmZvOiBSZXF1ZXN0SW5mbyk6IFJlc3BvbnNlT3B0aW9ucyB7XG5cdFx0Ly8gY29uc3QgcmVxdWVzdCA9IHJlcXVlc3RJbmZvLnJlcXVlc3Q7XG5cdFx0bGV0IHJlc3BvbnNlT3B0aW9uczogUmVzcG9uc2VPcHRpb25zO1xuXHRcdHN3aXRjaCAocmVxdWVzdEluZm8ubWV0aG9kKSB7XG5cdFx0XHRjYXNlICdnZXQnOlxuXHRcdFx0XHRyZXNwb25zZU9wdGlvbnMgPSB0aGlzLmdldChyZXF1ZXN0SW5mbyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncG9zdCc6XG5cdFx0XHRcdHJlc3BvbnNlT3B0aW9ucyA9IHRoaXMucG9zdChyZXF1ZXN0SW5mbyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncHV0Jzpcblx0XHRcdFx0cmVzcG9uc2VPcHRpb25zID0gdGhpcy5wdXQocmVxdWVzdEluZm8pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2RlbGV0ZSc6XG5cdFx0XHRcdHJlc3BvbnNlT3B0aW9ucyA9IHRoaXMuZGVsZXRlKHJlcXVlc3RJbmZvKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXNwb25zZU9wdGlvbnMgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHJlcXVlc3RJbmZvLnVybCwgU1RBVFVTX0NPREUuTUVUSE9EX05PVF9BTExPV0VELCAnTWV0aG9kIG5vdCBhbGxvd2VkJyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHQvLyBJZiBgZGF0YVNlcnZpY2UucmVzcG9uc2VJbnRlcmNlcHRvcmAgZXhpc3RzLCBsZXQgaXQgbW9ycGggdGhlIHJlc3BvbnNlIG9wdGlvbnNcblx0XHRjb25zdCBpbnRlcmNlcHRvciA9IHRoaXMuYmluZCgncmVzcG9uc2VJbnRlcmNlcHRvcicpO1xuXHRcdHJldHVybiBpbnRlcmNlcHRvciA/IGludGVyY2VwdG9yKHJlc3BvbnNlT3B0aW9ucywgcmVxdWVzdEluZm8pIDogcmVzcG9uc2VPcHRpb25zO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbW1hbmRzIHJlY29uZmlndXJlIHRoZSBpbi1tZW1vcnkgd2ViIGFwaSBzZXJ2aWNlIG9yIGV4dHJhY3QgaW5mb3JtYXRpb24gZnJvbSBpdC5cblx0ICogQ29tbWFuZHMgaWdub3JlIHRoZSBsYXRlbmN5IGRlbGF5IGFuZCByZXNwb25kIEFTQVAuXG5cdCAqXG5cdCAqIFdoZW4gdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYGFwaUJhc2VgIHBhdGggaXMgXCJjb21tYW5kc1wiLFxuXHQgKiB0aGUgYGNvbGxlY3Rpb25OYW1lYCBpcyB0aGUgY29tbWFuZC5cblx0ICpcblx0ICogRXhhbXBsZSBVUkxzOlxuXHQgKiAgIGNvbW1hbmRzL3Jlc2V0ZGIgKFBPU1QpIC8vIFJlc2V0IHRoZSBcImRhdGFiYXNlXCIgdG8gaXRzIG9yaWdpbmFsIHN0YXRlXG5cdCAqICAgY29tbWFuZHMvY29uZmlnIChHRVQpICAgLy8gUmV0dXJuIHRoaXMgc2VydmljZSdzIGNvbmZpZyBvYmplY3Rcblx0ICogICBjb21tYW5kcy9jb25maWcgKFBPU1QpICAvLyBVcGRhdGUgdGhlIGNvbmZpZyAoZS5nLiB0aGUgZGVsYXkpXG5cdCAqXG5cdCAqIFVzYWdlOlxuXHQgKiAgIGh0dHAucG9zdCgnY29tbWFuZHMvcmVzZXRkYicsIHVuZGVmaW5lZCk7XG5cdCAqICAgaHR0cC5nZXQoJ2NvbW1hbmRzL2NvbmZpZycpO1xuXHQgKiAgIGh0dHAucG9zdCgnY29tbWFuZHMvY29uZmlnJywgJ3tcImRlbGF5XCI6MTAwMH0nKTtcblx0ICovXG5cdHByb3RlY3RlZCBjb21tYW5kcyhyZXF1ZXN0SW5mbzogUmVxdWVzdEluZm8pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGNvbW1hbmQgPSByZXF1ZXN0SW5mby5jb2xsZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGNvbnN0IG1ldGhvZCA9IHJlcXVlc3RJbmZvLm1ldGhvZDtcblx0XHRsZXQgcmVzcG9uc2VPcHRpb25zOiBSZXNwb25zZU9wdGlvbnMgPSB7XG5cdFx0XHR1cmw6IHJlcXVlc3RJbmZvLnVybFxuXHRcdH07XG5cdFx0c3dpdGNoIChjb21tYW5kKSB7XG5cdFx0XHRjYXNlICdyZXNldGRiJzpcblx0XHRcdFx0cmVzcG9uc2VPcHRpb25zLnN0YXR1cyA9IFNUQVRVU19DT0RFLk5PX0NPTlRFTlQ7XG5cdFx0XHRcdHJldHVybiB0aGlzLnJlc2V0RGIocmVxdWVzdEluZm8pLnBpcGUoXG5cdFx0XHRcdFx0Y29uY2F0TWFwKCgpID0+IHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHJlc3BvbnNlT3B0aW9ucywgZmFsc2UgLyogbm8gbGF0ZW5jeSBkZWxheSAqLykpXG5cdFx0XHRcdCk7XG5cblx0XHRcdGNhc2UgJ2NvbmZpZyc6XG5cdFx0XHRcdGlmIChtZXRob2QgPT09ICdnZXQnKSB7XG5cdFx0XHRcdFx0cmVzcG9uc2VPcHRpb25zLnN0YXR1cyA9IFNUQVRVU19DT0RFLk9LO1xuXHRcdFx0XHRcdHJlc3BvbnNlT3B0aW9ucy5ib2R5ID0gdGhpcy5jbG9uZSh0aGlzLmNvbmZpZyk7XG5cblx0XHRcdFx0XHQvLyBhbnkgb3RoZXIgSFRUUCBtZXRob2QgaXMgYXNzdW1lZCB0byBiZSBhIGNvbmZpZyB1cGRhdGVcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCBib2R5ID0gdGhpcy5nZXRKc29uQm9keShyZXF1ZXN0SW5mby5yZXF1ZXN0KTtcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBib2R5KTtcblx0XHRcdFx0XHR0aGlzLnBhc3NUaHJ1QmFja2VuZCA9IHVuZGVmaW5lZDsgLy8gcmUtY3JlYXRlIHdoZW4gbmVlZGVkXG5cdFx0XHRcdFx0cmVzcG9uc2VPcHRpb25zLnN0YXR1cyA9IFNUQVRVU19DT0RFLk5PX0NPTlRFTlQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJlc3BvbnNlT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMoXG5cdFx0XHRcdFx0cmVxdWVzdEluZm8udXJsLFxuXHRcdFx0XHRcdFNUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcblx0XHRcdFx0XHRgVW5rbm93biBjb21tYW5kIFwiJHtjb21tYW5kfVwiYFxuXHRcdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNwb25zZU9wdGlvbnMsIGZhbHNlIC8qIG5vIGxhdGVuY3kgZGVsYXkgKi8pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybDogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKTogUmVzcG9uc2VPcHRpb25zIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRlcnJvcjogYCR7bWVzc2FnZX1gLFxuXHRcdFx0fSxcblx0XHRcdHVybDogdXJsLFxuXHRcdFx0aGVhZGVyczogdGhpcy5jcmVhdGVIZWFkZXJzKHtcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSksXG5cdFx0XHRzdGF0dXM6IHN0YXR1c1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIHN0YW5kYXJkIEhUVFAgaGVhZGVycyBvYmplY3QgZnJvbSBoYXNoIG1hcCBvZiBoZWFkZXIgc3RyaW5nc1xuXHQgKiBAcGFyYW0gaGVhZGVyc1xuXHQgKi9cblx0cHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUhlYWRlcnMoaGVhZGVyczogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9KTogSGVhZGVyc0NvcmU7XG5cblx0LyoqXG5cdCAqIGNyZWF0ZSB0aGUgZnVuY3Rpb24gdGhhdCBwYXNzZXMgdW5oYW5kbGVkIHJlcXVlc3RzIHRocm91Z2ggdG8gdGhlIFwicmVhbFwiIGJhY2tlbmQuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlUGFzc1RocnVCYWNrZW5kKCk6IFBhc3NUaHJ1QmFja2VuZDtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgc2VhcmNoIG1hcCBmcm9tIGEgbG9jYXRpb24gcXVlcnkvc2VhcmNoIHN0cmluZ1xuXHQgKi9cblx0cHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZVF1ZXJ5TWFwKHNlYXJjaDogc3RyaW5nKTogTWFwPHN0cmluZywgc3RyaW5nW10+O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBjb2xkIHJlc3BvbnNlIE9ic2VydmFibGUgZnJvbSBhIGZhY3RvcnkgZm9yIFJlc3BvbnNlT3B0aW9uc1xuXHQgKiBAcGFyYW0gcmVzcG9uc2VPcHRpb25zRmFjdG9yeSAtIGNyZWF0ZXMgUmVzcG9uc2VPcHRpb25zIHdoZW4gb2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkXG5cdCAqIEBwYXJhbSB3aXRoRGVsYXkgLSBpZiB0cnVlIChkZWZhdWx0KSwgYWRkIHNpbXVsYXRlZCBsYXRlbmN5IGRlbGF5IGZyb20gY29uZmlndXJhdGlvblxuXHQgKi9cblx0cHJvdGVjdGVkIGNyZWF0ZVJlc3BvbnNlJChyZXNwb25zZU9wdGlvbnNGYWN0b3J5OiAoKSA9PiBSZXNwb25zZU9wdGlvbnMsIHdpdGhEZWxheSA9IHRydWUpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IHJlc3BvbnNlT3B0aW9ucyQgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlT3B0aW9ucyQocmVzcG9uc2VPcHRpb25zRmFjdG9yeSk7XG5cdFx0Y29uc3QgcmVzcG9uc2UkID0gdGhpcy5jcmVhdGVSZXNwb25zZSRmcm9tUmVzcG9uc2VPcHRpb25zJChyZXNwb25zZU9wdGlvbnMkKTtcblx0XHRyZXR1cm4gd2l0aERlbGF5ID8gdGhpcy5hZGREZWxheShyZXNwb25zZSQpIDogcmVzcG9uc2UkO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIFJlc3BvbnNlIG9ic2VydmFibGUgZnJvbSBSZXNwb25zZU9wdGlvbnMgb2JzZXJ2YWJsZS5cblx0ICovXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVSZXNwb25zZSRmcm9tUmVzcG9uc2VPcHRpb25zJChyZXNwb25zZU9wdGlvbnMkOiBPYnNlcnZhYmxlPFJlc3BvbnNlT3B0aW9ucz4pOiBPYnNlcnZhYmxlPGFueT47XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIGNvbGQgT2JzZXJ2YWJsZSBvZiBSZXNwb25zZU9wdGlvbnMuXG5cdCAqIEBwYXJhbSByZXNwb25zZU9wdGlvbnNGYWN0b3J5IC0gY3JlYXRlcyBSZXNwb25zZU9wdGlvbnMgd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcblx0ICovXG5cdHByb3RlY3RlZCBjcmVhdGVSZXNwb25zZU9wdGlvbnMkKHJlc3BvbnNlT3B0aW9uc0ZhY3Rvcnk6ICgpID0+IFJlc3BvbnNlT3B0aW9ucyk6IE9ic2VydmFibGU8UmVzcG9uc2VPcHRpb25zPiB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlPFJlc3BvbnNlT3B0aW9ucz4oKHJlc3BvbnNlT2JzZXJ2ZXI6IE9ic2VydmVyPFJlc3BvbnNlT3B0aW9ucz4pID0+IHtcblx0XHRcdGxldCByZXNwb25zZU9wdGlvbnM6IFJlc3BvbnNlT3B0aW9ucztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlc3BvbnNlT3B0aW9ucyA9IHJlc3BvbnNlT3B0aW9uc0ZhY3RvcnkoKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGVycm9yID0gZXJyb3IubWVzc2FnZSB8fCBlcnJvcjtcblx0XHRcdFx0cmVzcG9uc2VPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucygnJywgU1RBVFVTX0NPREUuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBgJHtlcnJvcn1gKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3RhdHVzID0gcmVzcG9uc2VPcHRpb25zLnN0YXR1cztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlc3BvbnNlT3B0aW9ucy5zdGF0dXNUZXh0ID0gZ2V0U3RhdHVzVGV4dChzdGF0dXMpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlIGZhaWx1cmUgKi8gfVxuXHRcdFx0aWYgKGlzU3VjY2VzcyhzdGF0dXMpKSB7XG5cdFx0XHRcdHJlc3BvbnNlT2JzZXJ2ZXIubmV4dChyZXNwb25zZU9wdGlvbnMpO1xuXHRcdFx0XHRyZXNwb25zZU9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNwb25zZU9ic2VydmVyLmVycm9yKHJlc3BvbnNlT3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKCkgPT4geyB9OyAvLyB1bnN1YnNjcmliZSBmdW5jdGlvblxuXHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGRlbGV0ZSh7IGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzLCBpZCwgdXJsIH06IFJlcXVlc3RJbmZvKTogUmVzcG9uc2VPcHRpb25zIHtcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuXHRcdGlmIChpZCA9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgTWlzc2luZyBcIiR7Y29sbGVjdGlvbk5hbWV9XCIgaWRgKTtcblx0XHR9XG5cdFx0Y29uc3QgZXhpc3RzID0gdGhpcy5yZW1vdmVCeUlkKGNvbGxlY3Rpb24sIGlkKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcblx0XHRcdHN0YXR1czogKGV4aXN0cyB8fCAhdGhpcy5jb25maWcuZGVsZXRlNDA0KSA/IFNUQVRVU19DT0RFLk5PX0NPTlRFTlQgOiBTVEFUVVNfQ09ERS5OT1RfRk9VTkRcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmQgZmlyc3QgaW5zdGFuY2Ugb2YgaXRlbSBpbiBjb2xsZWN0aW9uIGJ5IGBpdGVtLmlkYFxuXHQgKiBAcGFyYW0gY29sbGVjdGlvblxuXHQgKiBAcGFyYW0gaWRcblx0ICovXG5cdHByb3RlY3RlZCBmaW5kQnlJZDxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgaWQ6IGFueSk6IFQge1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmZpbmQoKGl0ZW06IFQpID0+IGl0ZW0uaWQgPT09IGlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSB0aGUgbmV4dCBhdmFpbGFibGUgaWQgZm9yIGl0ZW0gaW4gdGhpcyBjb2xsZWN0aW9uXG5cdCAqIFVzZSBtZXRob2QgZnJvbSBgZGF0YVNlcnZpY2VgIGlmIGl0IGV4aXN0cyBhbmQgcmV0dXJucyBhIHZhbHVlLFxuXHQgKiBlbHNlIGRlbGVnYXRlcyB0byBgZ2VuSWREZWZhdWx0YC5cblx0ICogQHBhcmFtIGNvbGxlY3Rpb24gLSBjb2xsZWN0aW9uIG9mIGl0ZW1zIHdpdGggYGlkYCBrZXkgcHJvcGVydHlcblx0ICovXG5cdHByb3RlY3RlZCBnZW5JZDxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0Y29uc3QgZ2VuSWQgPSB0aGlzLmJpbmQoJ2dlbklkJyk7XG5cdFx0aWYgKGdlbklkKSB7XG5cdFx0XHRjb25zdCBpZCA9IGdlbklkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG5cdFx0XHRpZiAoaWQgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybiBpZDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZ2VuSWREZWZhdWx0KGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IGdlbmVyYXRvciBvZiB0aGUgbmV4dCBhdmFpbGFibGUgaWQgZm9yIGl0ZW0gaW4gdGhpcyBjb2xsZWN0aW9uXG5cdCAqIFRoaXMgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiB3b3JrcyBvbmx5IGZvciBudW1lcmljIGlkcy5cblx0ICogQHBhcmFtIGNvbGxlY3Rpb24gLSBjb2xsZWN0aW9uIG9mIGl0ZW1zIHdpdGggYGlkYCBrZXkgcHJvcGVydHlcblx0ICogQHBhcmFtIGNvbGxlY3Rpb25OYW1lIC0gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuXHQgKi9cblx0cHJvdGVjdGVkIGdlbklkRGVmYXVsdDxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0aWYgKCF0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYyhjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgQ29sbGVjdGlvbiAnJHtjb2xsZWN0aW9uTmFtZX0nIGlkIHR5cGUgaXMgbm9uLW51bWVyaWMgb3IgdW5rbm93bi4gQ2FuIG9ubHkgZ2VuZXJhdGUgbnVtZXJpYyBpZHMuYCk7XG5cdFx0fVxuXHRcdGxldCBtYXhJZCA9IDA7XG5cdFx0Y29sbGVjdGlvbi5yZWR1Y2UoKHByZXY6IGFueSwgaXRlbTogYW55KSA9PiB7XG5cdFx0XHRtYXhJZCA9IE1hdGgubWF4KG1heElkLCB0eXBlb2YgaXRlbS5pZCA9PT0gJ251bWJlcicgPyBpdGVtLmlkIDogbWF4SWQpO1xuXHRcdH0sIHVuZGVmaW5lZCk7XG5cdFx0cmV0dXJuIG1heElkICsgMTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXQoeyBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaGVhZGVycywgaWQsIHF1ZXJ5LCB1cmwgfTogUmVxdWVzdEluZm8pOiBSZXNwb25zZU9wdGlvbnMge1xuXHRcdGxldCBkYXRhID0gY29sbGVjdGlvbjtcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuXHRcdGlmIChpZCAhPSB1bmRlZmluZWQgJiYgaWQgIT09ICcnKSB7XG5cdFx0XHRkYXRhID0gdGhpcy5maW5kQnlJZChjb2xsZWN0aW9uLCBpZCk7XG5cdFx0fSBlbHNlIGlmIChxdWVyeSkge1xuXHRcdFx0ZGF0YSA9IHRoaXMuYXBwbHlRdWVyeShjb2xsZWN0aW9uLCBxdWVyeSk7XG5cdFx0fVxuXHRcdGlmICghZGF0YSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVNfQ09ERS5OT1RfRk9VTkQsIGAnJHtjb2xsZWN0aW9uTmFtZX0nIHdpdGggaWQ9JyR7aWR9JyBub3QgZm91bmRgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGJvZHk6IHRoaXMuYm9kaWZ5KHRoaXMuY2xvbmUoZGF0YSkpLFxuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcblx0XHRcdHN0YXR1czogU1RBVFVTX0NPREUuT0tcblx0XHR9O1xuXHR9XG5cblx0LyoqIEdldCBKU09OIGJvZHkgZnJvbSB0aGUgcmVxdWVzdCBvYmplY3QgKi9cblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldEpzb25Cb2R5KHJlcXVlc3Q6IGFueSk6IGFueTtcblxuXHQvKipcblx0ICogR2V0IGxvY2F0aW9uIGluZm8gZnJvbSBhIHVybCwgZXZlbiBvbiBzZXJ2ZXIgd2hlcmUgYGRvY3VtZW50YCBpcyBub3QgZGVmaW5lZFxuXHQgKi9cblx0cHJvdGVjdGVkIGdldExvY2F0aW9uKHVybDogc3RyaW5nKTogVXJpSW5mbyB7XG5cdFx0aWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG5cdFx0XHQvLyBnZXQgdGhlIGRvY3VtZW50IGlmIHJ1bm5pbmcgaW4gYnJvd3NlclxuXHRcdFx0Y29uc3QgZG9jdW1lbnRfOiBEb2N1bWVudCA9ICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSA/IHVuZGVmaW5lZCA6IGRvY3VtZW50O1xuXHRcdFx0Ly8gYWRkIGhvc3QgaW5mbyB0byB1cmwgYmVmb3JlIHBhcnNpbmcuICBVc2UgYSBmYWtlIGhvc3Qgd2hlbiBub3QgaW4gYnJvd3Nlci5cblx0XHRcdGNvbnN0IGJhc2UgPSBkb2N1bWVudF8gPyBkb2N1bWVudF8ubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgZG9jdW1lbnRfLmxvY2F0aW9uLmhvc3QgOiAnaHR0cDovL2Zha2UnO1xuXHRcdFx0dXJsID0gdXJsLnN0YXJ0c1dpdGgoJy8nKSA/IGJhc2UgKyB1cmwgOiBiYXNlICsgJy8nICsgdXJsO1xuXHRcdH1cblx0XHRyZXR1cm4gcGFyc2VVcmkodXJsKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBnZXQgb3IgY3JlYXRlIHRoZSBmdW5jdGlvbiB0aGF0IHBhc3NlcyB1bmhhbmRsZWQgcmVxdWVzdHNcblx0ICogdGhyb3VnaCB0byB0aGUgXCJyZWFsXCIgYmFja2VuZC5cblx0ICovXG5cdHByb3RlY3RlZCBnZXRQYXNzVGhydUJhY2tlbmQoKTogUGFzc1RocnVCYWNrZW5kIHtcblx0XHRyZXR1cm4gdGhpcy5wYXNzVGhydUJhY2tlbmQgPyB0aGlzLnBhc3NUaHJ1QmFja2VuZCA6IHRoaXMucGFzc1RocnVCYWNrZW5kID0gdGhpcy5jcmVhdGVQYXNzVGhydUJhY2tlbmQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdXRpbGl0eSBtZXRob2RzIGZyb20gdGhpcyBzZXJ2aWNlIGluc3RhbmNlLlxuXHQgKiBVc2VmdWwgd2l0aGluIGFuIEhUVFAgbWV0aG9kIG92ZXJyaWRlXG5cdCAqL1xuXHRwcm90ZWN0ZWQgZ2V0UmVxdWVzdEluZm9VdGlscygpOiBSZXF1ZXN0SW5mb1V0aWxpdGllcyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNyZWF0ZVJlc3BvbnNlJDogdGhpcy5jcmVhdGVSZXNwb25zZSQuYmluZCh0aGlzKSxcblx0XHRcdGZpbmRCeUlkOiB0aGlzLmZpbmRCeUlkLmJpbmQodGhpcyksXG5cdFx0XHRpc0NvbGxlY3Rpb25JZE51bWVyaWM6IHRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljLmJpbmQodGhpcyksXG5cdFx0XHRnZXRDb25maWc6ICgpID0+IHRoaXMuY29uZmlnLFxuXHRcdFx0Z2V0RGI6ICgpID0+IHRoaXMuZGF0YWJhc2UsXG5cdFx0XHRnZXRKc29uQm9keTogdGhpcy5nZXRKc29uQm9keS5iaW5kKHRoaXMpLFxuXHRcdFx0Z2V0TG9jYXRpb246IHRoaXMuZ2V0TG9jYXRpb24uYmluZCh0aGlzKSxcblx0XHRcdGdldFBhc3NUaHJ1QmFja2VuZDogdGhpcy5nZXRQYXNzVGhydUJhY2tlbmQuYmluZCh0aGlzKSxcblx0XHRcdHBhcnNlUmVxdWVzdFVybDogdGhpcy5wYXJzZVJlcXVlc3RVcmwuYmluZCh0aGlzKSxcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIHJldHVybiBjYW5vbmljYWwgSFRUUCBtZXRob2QgbmFtZSAobG93ZXJjYXNlKSBmcm9tIHRoZSByZXF1ZXN0IG9iamVjdFxuXHQgKiBlLmcuIChyZXEubWV0aG9kIHx8ICdnZXQnKS50b0xvd2VyQ2FzZSgpO1xuXHQgKiBAcGFyYW0gcmVxdWVzdCAtIHJlcXVlc3Qgb2JqZWN0IGZyb20gdGhlIGh0dHAgY2FsbFxuXHQgKlxuXHQgKi9cblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldFJlcXVlc3RNZXRob2QocmVxdWVzdDogYW55KTogc3RyaW5nO1xuXG5cdHByb3RlY3RlZCBpbmRleE9mKGNvbGxlY3Rpb246IGFueVtdLCBpZDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uZmluZEluZGV4KChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgPT09IGlkKTtcblx0fVxuXG5cdC8qKiBQYXJzZSB0aGUgaWQgYXMgYSBudW1iZXIuIFJldHVybiBvcmlnaW5hbCB2YWx1ZSBpZiBub3QgYSBudW1iZXIuICovXG5cdHByb3RlY3RlZCBwYXJzZUlkKGNvbGxlY3Rpb246IGFueVtdLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nKTogYW55IHtcblx0XHRpZiAoIXRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSkge1xuXHRcdFx0Ly8gQ2FuJ3QgY29uZmlybSB0aGF0IGBpZGAgaXMgYSBudW1lcmljIHR5cGU7IGRvbid0IHBhcnNlIGFzIGEgbnVtYmVyXG5cdFx0XHQvLyBvciBlbHNlIGAnNDInYCAtPiBgNDJgIGFuZCBfZ2V0IGJ5IGlkXyBmYWlscy5cblx0XHRcdHJldHVybiBpZDtcblx0XHR9XG5cdFx0Y29uc3QgaWROdW0gPSBwYXJzZUZsb2F0KGlkKTtcblx0XHRyZXR1cm4gaXNOYU4oaWROdW0pID8gaWQgOiBpZE51bTtcblx0fVxuXG5cdC8qKlxuXHQgKiByZXR1cm4gdHJ1ZSBpZiBjYW4gZGV0ZXJtaW5lIHRoYXQgdGhlIGNvbGxlY3Rpb24ncyBgaXRlbS5pZGAgaXMgYSBudW1iZXJcblx0ICogVGhpcyBpbXBsZW1lbnRhdGlvbiBjYW4ndCB0ZWxsIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5IHNvIGl0IGFzc3VtZXMgTk9cblx0ICogKi9cblx0cHJvdGVjdGVkIGlzQ29sbGVjdGlvbklkTnVtZXJpYzxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdC8vIGNvbGxlY3Rpb25OYW1lIG5vdCB1c2VkIG5vdyBidXQgb3ZlcnJpZGUgbWlnaHQgbWFpbnRhaW4gY29sbGVjdGlvbiB0eXBlIGluZm9ybWF0aW9uXG5cdFx0Ly8gc28gdGhhdCBpdCBjb3VsZCBrbm93IHRoZSB0eXBlIG9mIHRoZSBgaWRgIGV2ZW4gd2hlbiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cblx0XHQvLyByZXR1cm4gISEoY29sbGVjdGlvbiAmJiBjb2xsZWN0aW9uWzBdKSAmJiB0eXBlb2YgY29sbGVjdGlvblswXS5pZCA9PT0gJ251bWJlcic7XG5cdFx0cmV0dXJuICEhKGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvblswXSk7XG5cdH1cblxuXHQvKipcblx0ICogUGFyc2VzIHRoZSByZXF1ZXN0IFVSTCBpbnRvIGEgYFBhcnNlZFJlcXVlc3RVcmxgIG9iamVjdC5cblx0ICogUGFyc2luZyBkZXBlbmRzIHVwb24gY2VydGFpbiB2YWx1ZXMgb2YgYGNvbmZpZ2A6IGBhcGlCYXNlYCwgYGhvc3RgLCBhbmQgYHVybFJvb3RgLlxuXHQgKlxuXHQgKiBDb25maWd1cmluZyB0aGUgYGFwaUJhc2VgIHlpZWxkcyB0aGUgbW9zdCBpbnRlcmVzdGluZyBjaGFuZ2VzIHRvIGBwYXJzZVJlcXVlc3RVcmxgIGJlaGF2aW9yOlxuXHQgKiAgIFdoZW4gYXBpQmFzZT11bmRlZmluZWQgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9hcGkvY29sbGVjdGlvbi80Midcblx0ICogICAgIHtiYXNlOiAnYXBpLycsIGNvbGxlY3Rpb25OYW1lOiAnY29sbGVjdGlvbicsIGlkOiAnNDInLCAuLi59XG5cdCAqICAgV2hlbiBhcGlCYXNlPSdzb21lL2FwaS9yb290LycgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9zb21lL2FwaS9yb290L2NvbGxlY3Rpb24nXG5cdCAqICAgICB7YmFzZTogJ3NvbWUvYXBpL3Jvb3QvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6IHVuZGVmaW5lZCwgLi4ufVxuXHQgKiAgIFdoZW4gYXBpQmFzZT0nLycgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9jb2xsZWN0aW9uJ1xuXHQgKiAgICAge2Jhc2U6ICcvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6IHVuZGVmaW5lZCwgLi4ufVxuXHQgKlxuXHQgKiBUaGUgYWN0dWFsIGFwaSBiYXNlIHNlZ21lbnQgdmFsdWVzIGFyZSBpZ25vcmVkLiBPbmx5IHRoZSBudW1iZXIgb2Ygc2VnbWVudHMgbWF0dGVycy5cblx0ICogVGhlIGZvbGxvd2luZyBhcGkgYmFzZSBzdHJpbmdzIGFyZSBjb25zaWRlcmVkIGlkZW50aWNhbDogJ2EvYicgfiAnc29tZS9hcGkvJyB+IGB0d28vc2VnbWVudHMnXG5cdCAqXG5cdCAqIFRvIHJlcGxhY2UgdGhpcyBkZWZhdWx0IG1ldGhvZCwgYXNzaWduIHlvdXIgYWx0ZXJuYXRpdmUgdG8geW91ciBNZW1vcnlEYXRhU2VydmljZVsncGFyc2VSZXF1ZXN0VXJsJ11cblx0ICovXG5cdHByb3RlY3RlZCBwYXJzZVJlcXVlc3RVcmwodXJsOiBzdHJpbmcpOiBQYXJzZWRSZXF1ZXN0VXJsIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgbG9jYXRpb24gPSB0aGlzLmdldExvY2F0aW9uKHVybCk7XG5cdFx0XHRsZXQgZHJvcCA9IHRoaXMuY29uZmlnLnJvb3RQYXRoLmxlbmd0aDtcblx0XHRcdGxldCB1cmxSb290ID0gJyc7XG5cdFx0XHRpZiAobG9jYXRpb24uaG9zdCAhPT0gdGhpcy5jb25maWcuaG9zdCkge1xuXHRcdFx0XHQvLyB1cmwgZm9yIGEgc2VydmVyIG9uIGEgZGlmZmVyZW50IGhvc3QhXG5cdFx0XHRcdC8vIGFzc3VtZSBpdCdzIGNvbGxlY3Rpb24gaXMgYWN0dWFsbHkgaGVyZSB0b28uXG5cdFx0XHRcdGRyb3AgPSAxOyAvLyB0aGUgbGVhZGluZyBzbGFzaFxuXHRcdFx0XHR1cmxSb290ID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvJztcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRoLnN1YnN0cmluZyhkcm9wKTtcblx0XHRcdGNvbnN0IHBhdGhTZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKTtcblx0XHRcdGxldCBzZWdtZW50SXggPSAwO1xuXHRcdFx0Ly8gYXBpQmFzZTogdGhlIGZyb250IHBhcnQgb2YgdGhlIHBhdGggZGV2b3RlZCB0byBnZXR0aW5nIHRvIHRoZSBhcGkgcm91dGVcblx0XHRcdC8vIEFzc3VtZXMgZmlyc3QgcGF0aCBzZWdtZW50IGlmIG5vIGNvbmZpZy5hcGlCYXNlXG5cdFx0XHQvLyBlbHNlIGlnbm9yZXMgYXMgbWFueSBwYXRoIHNlZ21lbnRzIGFzIGFyZSBpbiBjb25maWcuYXBpQmFzZVxuXHRcdFx0Ly8gRG9lcyBOT1QgY2FyZSB3aGF0IHRoZSBhcGkgYmFzZSBjaGFycyBhY3R1YWxseSBhcmUuXG5cdFx0XHRsZXQgYXBpQmFzZTogc3RyaW5nO1xuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5hcGlCYXNlID09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRhcGlCYXNlID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFwaUJhc2UgPSByZW1vdmVUcmFpbGluZ1NsYXNoKHRoaXMuY29uZmlnLmFwaUJhc2UudHJpbSgpKTtcblx0XHRcdFx0aWYgKGFwaUJhc2UpIHtcblx0XHRcdFx0XHRzZWdtZW50SXggPSBhcGlCYXNlLnNwbGl0KCcvJykubGVuZ3RoO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNlZ21lbnRJeCA9IDA7IC8vIG5vIGFwaSBiYXNlIGF0IGFsbDsgdW53aXNlIGJ1dCBhbGxvd2VkLlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRhcGlCYXNlICs9ICcvJztcblx0XHRcdGxldCBjb2xsZWN0aW9uTmFtZSA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG5cdFx0XHQvLyBpZ25vcmUgYW55dGhpbmcgYWZ0ZXIgYSAnLicgKGUuZy4sdGhlIFwianNvblwiIGluIFwiY3VzdG9tZXJzLmpzb25cIilcblx0XHRcdGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWUgJiYgY29sbGVjdGlvbk5hbWUuc3BsaXQoJy4nKVswXTtcblx0XHRcdGNvbnN0IGlkID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gdGhpcy5jcmVhdGVRdWVyeU1hcChsb2NhdGlvbi5xdWVyeSk7XG5cdFx0XHRjb25zdCByZXNvdXJjZVVybCA9IHVybFJvb3QgKyBhcGlCYXNlICsgY29sbGVjdGlvbk5hbWUgKyAnLyc7XG5cdFx0XHRyZXR1cm4geyBhcGlCYXNlLCBjb2xsZWN0aW9uTmFtZSwgaWQsIHF1ZXJ5LCByZXNvdXJjZVVybCB9O1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zdCBtZXNzYWdlID0gYHVuYWJsZSB0byBwYXJzZSB1cmwgJyR7dXJsfSc7IG9yaWdpbmFsIGVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YDtcblx0XHRcdHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDcmVhdGUgZW50aXR5XG5cdC8vIENhbiB1cGRhdGUgYW4gZXhpc3RpbmcgZW50aXR5IHRvbyBpZiBwb3N0NDA5IGlzIGZhbHNlLlxuXHRwcm90ZWN0ZWQgcG9zdCh7IGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzLCBpZCwgcmVxdWVzdCwgcmVzb3VyY2VVcmwsIHVybCB9OiBSZXF1ZXN0SW5mbyk6IFJlc3BvbnNlT3B0aW9ucyB7XG5cdFx0Y29uc3QgaXRlbSA9IHRoaXMuY2xvbmUodGhpcy5nZXRKc29uQm9keShyZXF1ZXN0KSk7XG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcblx0XHRpZiAoaXRlbS5pZCA9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGl0ZW0uaWQgPSBpZCB8fCB0aGlzLmdlbklkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnN0IG1lc3NhZ2U6IHN0cmluZyA9IGVycm9yLm1lc3NhZ2UgfHwgJyc7XG5cdFx0XHRcdGlmICgvaWQgdHlwZSBpcyBub24tbnVtZXJpYy8udGVzdChtZXNzYWdlKSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTX0NPREUuVU5QUk9DRVNTQUJMRV9FTlRSWSwgbWVzc2FnZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGBGYWlsZWQgdG8gZ2VuZXJhdGUgbmV3IGlkIGZvciAnJHtjb2xsZWN0aW9uTmFtZX0nYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVU19DT0RFLkJBRF9SRVFVRVNULCBgUmVxdWVzdCBpZCBkb2VzIG5vdCBtYXRjaCBpdGVtLmlkYCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlkID0gaXRlbS5pZDtcblx0XHR9XG5cdFx0Y29uc3QgZXhpc3RpbmdJeCA9IHRoaXMuaW5kZXhPZihjb2xsZWN0aW9uLCBpZCk7XG5cdFx0Y29uc3QgYm9keSA9IHRoaXMuYm9kaWZ5KGl0ZW0pO1xuXHRcdGlmIChleGlzdGluZ0l4ID09PSAtMSkge1xuXHRcdFx0Y29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xuXHRcdFx0aGVhZGVycy5zZXQoJ0xvY2F0aW9uJywgcmVzb3VyY2VVcmwgKyAnLycgKyBpZCk7XG5cdFx0XHRyZXR1cm4geyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVU19DT0RFLkNSRUFURUQgfTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuY29uZmlnLnBvc3Q0MDkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTX0NPREUuQ09ORkxJQ1QsIGAnJHtjb2xsZWN0aW9uTmFtZX0nIGl0ZW0gd2l0aCBpZD0nJHtpZH0gZXhpc3RzIGFuZCBtYXkgbm90IGJlIHVwZGF0ZWQgd2l0aCBQT1NUOyB1c2UgUFVUIGluc3RlYWQuYCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbGxlY3Rpb25bZXhpc3RpbmdJeF0gPSBpdGVtO1xuXHRcdFx0cmV0dXJuIHRoaXMuY29uZmlnLnBvc3QyMDQgP1xuXHRcdFx0XHR7IGhlYWRlcnMsIHN0YXR1czogU1RBVFVTX0NPREUuTk9fQ09OVEVOVCB9IDogLy8gc3VjY2Vzc2Z1bDsgbm8gY29udGVudFxuXHRcdFx0XHR7IGhlYWRlcnMsIGJvZHksIHN0YXR1czogU1RBVFVTX0NPREUuT0sgfTsgLy8gc3VjY2Vzc2Z1bDsgcmV0dXJuIGVudGl0eVxuXHRcdH1cblx0fVxuXG5cdC8vIFVwZGF0ZSBleGlzdGluZyBlbnRpdHlcblx0Ly8gQ2FuIGNyZWF0ZSBhbiBlbnRpdHkgdG9vIGlmIHB1dDQwNCBpcyBmYWxzZS5cblx0cHJvdGVjdGVkIHB1dCh7IGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzLCBpZCwgcmVxdWVzdCwgdXJsIH06IFJlcXVlc3RJbmZvKTogUmVzcG9uc2VPcHRpb25zIHtcblx0XHRjb25zdCBpdGVtID0gdGhpcy5jbG9uZSh0aGlzLmdldEpzb25Cb2R5KHJlcXVlc3QpKTtcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuXHRcdGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVNfQ09ERS5OT1RfRk9VTkQsIGBNaXNzaW5nICcke2NvbGxlY3Rpb25OYW1lfScgaWRgKTtcblx0XHR9XG5cdFx0aWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVU19DT0RFLkJBRF9SRVFVRVNULCBgUmVxdWVzdCBmb3IgJyR7Y29sbGVjdGlvbk5hbWV9JyBpZCBkb2VzIG5vdCBtYXRjaCBpdGVtLmlkYCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlkID0gaXRlbS5pZDtcblx0XHR9XG5cdFx0Y29uc3QgZXhpc3RpbmdJeCA9IHRoaXMuaW5kZXhPZihjb2xsZWN0aW9uLCBpZCk7XG5cdFx0Y29uc3QgYm9keSA9IHRoaXMuYm9kaWZ5KGl0ZW0pO1xuXHRcdGlmIChleGlzdGluZ0l4ID4gLTEpIHtcblx0XHRcdGNvbGxlY3Rpb25bZXhpc3RpbmdJeF0gPSBpdGVtO1xuXHRcdFx0cmV0dXJuIHRoaXMuY29uZmlnLnB1dDIwNCA/XG5cdFx0XHRcdHsgaGVhZGVycywgc3RhdHVzOiBTVEFUVVNfQ09ERS5OT19DT05URU5UIH0gOiAvLyBzdWNjZXNzZnVsOyBubyBjb250ZW50XG5cdFx0XHRcdHsgaGVhZGVycywgYm9keSwgc3RhdHVzOiBTVEFUVVNfQ09ERS5PSyB9OyAvLyBzdWNjZXNzZnVsOyByZXR1cm4gZW50aXR5XG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvbmZpZy5wdXQ0MDQpIHtcblx0XHRcdC8vIGl0ZW0gdG8gdXBkYXRlIG5vdCBmb3VuZDsgdXNlIFBPU1QgdG8gY3JlYXRlIG5ldyBpdGVtIGZvciB0aGlzIGlkLlxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVNfQ09ERS5OT1RfRk9VTkQsIGAnJHtjb2xsZWN0aW9uTmFtZX0nIGl0ZW0gd2l0aCBpZD0nJHtpZH0gbm90IGZvdW5kIGFuZCBtYXkgbm90IGJlIGNyZWF0ZWQgd2l0aCBQVVQ7IHVzZSBQT1NUIGluc3RlYWQuYCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGNyZWF0ZSBuZXcgaXRlbSBmb3IgaWQgbm90IGZvdW5kXG5cdFx0XHRjb2xsZWN0aW9uLnB1c2goaXRlbSk7XG5cdFx0XHRyZXR1cm4geyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVU19DT0RFLkNSRUFURUQgfTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgcmVtb3ZlQnlJZChjb2xsZWN0aW9uOiBhbnlbXSwgaWQ6IG51bWJlcikge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0Y29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUZWxsIHlvdXIgaW4tbWVtIFwiZGF0YWJhc2VcIiB0byByZXNldC5cblx0ICogcmV0dXJucyBPYnNlcnZhYmxlIG9mIHRoZSBkYXRhYmFzZSBiZWNhdXNlIHJlc2V0dGluZyBpdCBjb3VsZCBiZSBhc3luY1xuXHQgKi9cblx0cHJvdGVjdGVkIHJlc2V0RGIocmVxdWVzdEluZm8/OiBSZXF1ZXN0SW5mbyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHRoaXMuZGF0YWJhc2VSZWFkeVN1YmplY3QubmV4dChmYWxzZSk7XG5cdFx0Y29uc3QgZGF0YWJhc2UgPSB0aGlzLmRhdGFTZXJ2aWNlLmNyZWF0ZURiKHJlcXVlc3RJbmZvKTtcblx0XHRjb25zdCBkYXRhYmFzZSQgPSBkYXRhYmFzZSBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBkYXRhYmFzZSA6XG5cdFx0XHR0eXBlb2YgKGRhdGFiYXNlIGFzIGFueSkudGhlbiA9PT0gJ2Z1bmN0aW9uJyA/IGZyb20oZGF0YWJhc2UgYXMgUHJvbWlzZTxhbnk+KSA6XG5cdFx0XHRcdG9mKGRhdGFiYXNlKTtcblx0XHRkYXRhYmFzZSQucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoKGRhdGFiYXNlOiB7fSkgPT4ge1xuXHRcdFx0dGhpcy5kYXRhYmFzZSA9IGRhdGFiYXNlO1xuXHRcdFx0dGhpcy5kYXRhYmFzZVJlYWR5U3ViamVjdC5uZXh0KHRydWUpO1xuXHRcdH0pO1xuXHRcdHJldHVybiB0aGlzLmRhdGFiYXNlUmVhZHk7XG5cdH1cblxufVxuIl19