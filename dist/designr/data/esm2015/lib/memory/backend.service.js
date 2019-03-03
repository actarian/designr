/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpHeaders, HttpParams, HttpResponse, HttpXhrBackend, XhrFactory } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { concatMap, first, map } from 'rxjs/operators';
import { delayResponse } from './delay-response';
import { MemoryBackendConfig, MemoryDataService, parseUri, removeTrailingSlash } from './memory';
import { getStatusText, isSuccess, STATUS_CODE } from './status-codes';
export class BackendService {
    /**
     * @param {?} dataService
     * @param {?=} config
     * @param {?=} factory
     */
    constructor(dataService, config = {}, factory) {
        this.dataService = dataService;
        this.factory = factory;
        this.config = new MemoryBackendConfig();
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
        return this.databaseReadySubject.asObservable().pipe(first((ready) => ready));
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
     *     `dataService.get(memoryRequest)`
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
        // const parser = this.bind('parseRequestUrl');
        // const parsed: ParsedRequestUrl = (parser && parser(url, this)) || this.parseRequestUrl(url);
        /** @type {?} */
        const parsed = this.parseRequestUrl(url);
        /** @type {?} */
        const collectionName = parsed.collectionName;
        /** @type {?} */
        const collection = this.database[collectionName];
        /** @type {?} */
        const memoryRequest = {
            request: request,
            body: request.body,
            apiBase: parsed.apiBase,
            collection: collection,
            collectionName: collectionName,
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            id: this.parseId(collection, collectionName, parsed.id),
            method: (request.method || 'get').toLowerCase(),
            query: parsed.query,
            resourceUrl: parsed.resourceUrl,
            url: url,
        };
        // If `dataService.requestInterceptor` exists, let it morph the response options
        /** @type {?} */
        const interceptor = this.bind('requestInterceptor');
        if (/commands\/?$/i.test(memoryRequest.apiBase)) {
            return this.commands(memoryRequest);
        }
        /** @type {?} */
        const methodInterceptor = this.bind(memoryRequest.method);
        if (methodInterceptor) {
            // MemoryDataService intercepts this HTTP method.
            // if interceptor produced a response, return it.
            // else MemoryDataService chose not to intercept; continue processing.
            /** @type {?} */
            const interceptorResponse = methodInterceptor(memoryRequest);
            if (interceptorResponse) {
                return interceptorResponse;
            }
        }
        // !!!
        /** @type {?} */
        let response = interceptor ? interceptor(memoryRequest, this) : null;
        if (response) {
            return this.createResponse$(() => response);
        }
        if (this.database[collectionName]) {
            // request is for a known collection of the MemoryDataService
            return this.createResponse$(() => this.collectionHandler(memoryRequest));
        }
        if (this.config.passThruUnknownUrl) {
            // unknown collection; pass request thru to a "real" backend.
            return this.getPassThruBackend().handle(request);
        }
        // 404 - can't handle this request
        response = this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, `Collection '${collectionName}' not found`);
        return this.createResponse$(() => response);
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
     * @param {?} request
     * @return {?}
     */
    collectionHandler(request) {
        // const request = request.request;
        /** @type {?} */
        let response;
        switch (request.method) {
            case 'get':
                response = this.get(request);
                break;
            case 'post':
                response = this.post(request);
                break;
            case 'put':
                response = this.put(request);
                break;
            case 'delete':
                response = this.delete(request);
                break;
            default:
                response = this.createErrorResponse(request.url, STATUS_CODE.METHOD_NOT_ALLOWED, 'Method not allowed');
                break;
        }
        // If `dataService.responseInterceptor` exists, let it morph the response options
        /** @type {?} */
        const interceptor = this.bind('responseInterceptor');
        // !!!
        return interceptor ? interceptor(response, request) : response;
    }
    /**
     * @param {?} url
     * @param {?} status
     * @param {?} message
     * @return {?}
     */
    createErrorResponse(url, status, message) {
        return {
            body: {
                error: `${message}`,
            },
            url: url,
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            status: status
        };
    }
    /**
     * Create a cold response Observable from a factory for MemoryResponse
     * @protected
     * @param {?} memoryResponseFactory - creates MemoryResponse when observable is subscribed
     * @param {?=} withDelay - if true (default), add simulated latency delay from configuration
     * @return {?}
     */
    createResponse$(memoryResponseFactory, withDelay = true) {
        /** @type {?} */
        const memoryResponse$ = this.createMemoryResponse$(memoryResponseFactory);
        /** @type {?} */
        const response$ = this.createResponse$fromMemoryResponse$(memoryResponse$);
        return withDelay ? this.addDelay(response$) : response$;
    }
    /**
     * Create a cold Observable of MemoryResponse.
     * @protected
     * @param {?} memoryResponseFactory - creates MemoryResponse when observable is subscribed
     * @return {?}
     */
    createMemoryResponse$(memoryResponseFactory) {
        return new Observable((observer) => {
            /** @type {?} */
            let response;
            try {
                response = memoryResponseFactory();
            }
            catch (error) {
                error = error.message || error;
                response = this.createErrorResponse('', STATUS_CODE.INTERNAL_SERVER_ERROR, `${error}`);
            }
            /** @type {?} */
            const status = response.status;
            try {
                response.statusText = getStatusText(status);
            }
            catch (error) { /* ignore failure */ }
            if (isSuccess(status)) {
                observer.next(response);
                observer.complete();
            }
            else {
                observer.error(response);
            }
            return () => { }; // unsubscribe function
        });
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
     * @protected
     * @param {?} collection
     * @param {?} id
     * @return {?}
     */
    indexOf(collection, id) {
        return collection.findIndex((item) => item.id === id);
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
     * @param {?=} request
     * @return {?}
     */
    resetDb(request) {
        this.databaseReadySubject.next(false);
        /** @type {?} */
        const database = this.dataService.createDb(request);
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
     * @param {?} request
     * @return {?}
     */
    commands(request) {
        /** @type {?} */
        const command = request.collectionName.toLowerCase();
        /** @type {?} */
        const method = request.method;
        /** @type {?} */
        let response = {
            url: request.url
        };
        switch (command) {
            case 'resetdb':
                response.status = STATUS_CODE.NO_CONTENT;
                return this.resetDb(request).pipe(concatMap(() => this.createResponse$(() => response, false /* no latency delay */)));
            case 'config':
                if (method === 'get') {
                    response.status = STATUS_CODE.OK;
                    response.body = this.clone(this.config);
                    // any other HTTP method is assumed to be a config update
                }
                else {
                    /** @type {?} */
                    const body = request.request.body;
                    Object.assign(this.config, body);
                    this.passThruBackend = undefined; // re-create when needed
                    response.status = STATUS_CODE.NO_CONTENT;
                }
                break;
            default:
                response = this.createErrorResponse(request.url, STATUS_CODE.INTERNAL_SERVER_ERROR, `Unknown command "${command}"`);
        }
        return this.createResponse$(() => response, false /* no latency delay */);
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
            if (!data) {
                return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, `'${collectionName}' with id='${id}' not found`);
            }
        }
        else if (query) {
            data = this.applyQuery(collection, query);
            if (!data.length) {
                return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, `'${collectionName}' with id='${id}' not found`);
            }
        }
        return {
            body: this.bodify(this.clone(data)),
            headers: headers,
            status: STATUS_CODE.OK
        };
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
        const requestBody = request.body;
        /** @type {?} */
        const item = this.clone(requestBody);
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            try {
                item.id = id || this.genId(collection, collectionName);
            }
            catch (error) {
                /** @type {?} */
                const message = error.message || '';
                if (/id type is non-numeric/.test(message)) {
                    return this.createErrorResponse(url, STATUS_CODE.UNPROCESSABLE_ENTRY, message);
                }
                else {
                    console.error(error);
                    return this.createErrorResponse(url, STATUS_CODE.INTERNAL_SERVER_ERROR, `Failed to generate new id for '${collectionName}'`);
                }
            }
        }
        if (id && id !== item.id) {
            return this.createErrorResponse(url, STATUS_CODE.BAD_REQUEST, `Request id does not match item.id`);
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
            return this.createErrorResponse(url, STATUS_CODE.CONFLICT, `'${collectionName}' item with id='${id} exists and may not be updated with POST; use PUT instead.`);
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
        const item = this.clone(request.body);
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, `Missing '${collectionName}' id`);
        }
        if (id && id !== item.id) {
            return this.createErrorResponse(url, STATUS_CODE.BAD_REQUEST, `Request for '${collectionName}' id does not match item.id`);
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
            return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, `'${collectionName}' item with id='${id} not found and may not be created with PUT; use POST instead.`);
        }
        else {
            // create new item for id not found
            collection.push(item);
            return { headers, body, status: STATUS_CODE.CREATED };
        }
    }
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    delete({ collection, collectionName, headers, id, url }) {
        // tslint:disable-next-line:triple-equals
        if (id == undefined) {
            return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, `Missing "${collectionName}" id`);
        }
        /** @type {?} */
        const exists = this.removeById(collection, id);
        return {
            headers: headers,
            status: (exists || !this.config.delete404) ? STATUS_CODE.NO_CONTENT : STATUS_CODE.NOT_FOUND
        };
    }
    ///////
    /**
     * @param {?} request
     * @return {?}
     */
    handle(request) {
        try {
            return this.handleRequest(request);
        }
        catch (error) {
            /** @type {?} */
            const response = this.createErrorResponse(request.url, STATUS_CODE.INTERNAL_SERVER_ERROR, `${error.message || error}`);
            return this.createResponse$(() => response);
        }
    }
    /**
     * @protected
     * @param {?} search
     * @return {?}
     */
    createQueryMap(search) {
        /** @type {?} */
        const map = new Map();
        if (search) {
            /** @type {?} */
            const params = new HttpParams({ fromString: search });
            params.keys().forEach(p => map.set(p, params.getAll(p)));
        }
        return map;
    }
    /**
     * @protected
     * @param {?} response$
     * @return {?}
     */
    createResponse$fromMemoryResponse$(response$) {
        return response$.pipe(map((options) => new HttpResponse(options)));
    }
    /**
     * @protected
     * @return {?}
     */
    createPassThruBackend() {
        try {
            return new HttpXhrBackend(this.factory);
        }
        catch (error) {
            error.message = 'Cannot create passThru404 backend; ' + (error.message || '');
            throw error;
        }
    }
}
BackendService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BackendService.ctorParameters = () => [
    { type: MemoryDataService },
    { type: MemoryBackendConfig },
    { type: XhrFactory }
];
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
    BackendService.prototype.dataService;
    /**
     * @type {?}
     * @private
     */
    BackendService.prototype.factory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTBCLFdBQVcsRUFBRSxVQUFVLEVBQWUsWUFBWSxFQUFvQixjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEssT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQVksRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQW1ELFFBQVEsRUFBbUIsbUJBQW1CLEVBQVcsTUFBTSxVQUFVLENBQUM7QUFDNUssT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdkUsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQU8xQixZQUNXLFdBQThCLEVBQ3hDLFNBQThCLEVBQUUsRUFDeEIsT0FBbUI7UUFGakIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBRWhDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFQbEIsV0FBTSxHQUF3QixJQUFJLG1CQUFtQixFQUFFLENBQUM7O2NBUzNELFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsaUNBQWlDO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsUUFB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Q0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDOzs7Ozs7SUFFUyxrQ0FBa0MsQ0FBQyxTQUFxQztRQUNqRixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQ3BCLEdBQUcsQ0FBQyxDQUFDLE9BQXlCLEVBQUUsRUFBRSxDQUFDLElBQUksWUFBWSxDQUFNLE9BQU8sQ0FBQyxDQUFDLENBQ2xFLENBQUM7SUFDSCxDQUFDOzs7OztJQUVTLHFCQUFxQjtRQUM5QixJQUFJO1lBQ0gsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNmLEtBQUssQ0FBQyxPQUFPLEdBQUcscUNBQXFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLE1BQU0sS0FBSyxDQUFDO1NBQ1o7SUFDRixDQUFDOzs7WUFsbUJELFVBQVU7Ozs7WUFIbUIsaUJBQWlCO1lBQXRDLG1CQUFtQjtZQUwyRixVQUFVOzs7Ozs7O0lBV2hJLHlDQUF5Qzs7Ozs7SUFDekMsZ0NBQWtFOzs7OztJQUNsRSxrQ0FBMkI7Ozs7O0lBQzNCLDhDQUF5RDs7Ozs7SUFHeEQscUNBQXdDOzs7OztJQUV4QyxpQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQmFja2VuZCwgSHR0cEV2ZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcywgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSwgSHR0cFJlc3BvbnNlQmFzZSwgSHR0cFhockJhY2tlbmQsIFhockZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGZyb20sIE9ic2VydmFibGUsIE9ic2VydmVyLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uY2F0TWFwLCBmaXJzdCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZGVsYXlSZXNwb25zZSB9IGZyb20gJy4vZGVsYXktcmVzcG9uc2UnO1xuaW1wb3J0IHsgTWVtb3J5QmFja2VuZENvbmZpZywgTWVtb3J5RGF0YVNlcnZpY2UsIE1lbW9yeVJlcXVlc3QsIE1lbW9yeVJlc3BvbnNlLCBQYXJzZWRSZXF1ZXN0VXJsLCBwYXJzZVVyaSwgUGFzc1RocnVCYWNrZW5kLCByZW1vdmVUcmFpbGluZ1NsYXNoLCBVcmlJbmZvIH0gZnJvbSAnLi9tZW1vcnknO1xuaW1wb3J0IHsgZ2V0U3RhdHVzVGV4dCwgaXNTdWNjZXNzLCBTVEFUVVNfQ09ERSB9IGZyb20gJy4vc3RhdHVzLWNvZGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIGltcGxlbWVudHMgSHR0cEJhY2tlbmQge1xuXG5cdHByaXZhdGUgcGFzc1RocnVCYWNrZW5kOiBQYXNzVGhydUJhY2tlbmQ7XG5cdHByb3RlY3RlZCBjb25maWc6IE1lbW9yeUJhY2tlbmRDb25maWcgPSBuZXcgTWVtb3J5QmFja2VuZENvbmZpZygpO1xuXHRwcm90ZWN0ZWQgZGF0YWJhc2U6IE9iamVjdDtcblx0cHJvdGVjdGVkIGRhdGFiYXNlUmVhZHlTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGRhdGFTZXJ2aWNlOiBNZW1vcnlEYXRhU2VydmljZSxcblx0XHRjb25maWc6IE1lbW9yeUJhY2tlbmRDb25maWcgPSB7fSxcblx0XHRwcml2YXRlIGZhY3Rvcnk6IFhockZhY3RvcnksXG5cdCkge1xuXHRcdGNvbnN0IGxvY2F0aW9uID0gdGhpcy5nZXRMb2NhdGlvbignLycpO1xuXHRcdHRoaXMuY29uZmlnLmhvc3QgPSBsb2NhdGlvbi5ob3N0OyAvLyBkZWZhdWx0IHRvIGFwcCB3ZWIgc2VydmVyIGhvc3Rcblx0XHR0aGlzLmNvbmZpZy5yb290UGF0aCA9IGxvY2F0aW9uLnBhdGg7IC8vIGRlZmF1bHQgdG8gcGF0aCB3aGVuIGFwcCBpcyBzZXJ2ZWQgKGUuZy4nLycpXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgY29uZmlnKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXQgZGF0YWJhc2VSZWFkeSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRpZiAoIXRoaXMuZGF0YWJhc2VSZWFkeVN1YmplY3QpIHtcblx0XHRcdC8vIGZpcnN0IHRpbWUgdGhlIHNlcnZpY2UgaXMgY2FsbGVkLlxuXHRcdFx0dGhpcy5kYXRhYmFzZVJlYWR5U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXHRcdFx0dGhpcy5yZXNldERiKCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmRhdGFiYXNlUmVhZHlTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG5cdFx0XHRmaXJzdCgocmVhZHk6IGJvb2xlYW4pID0+IHJlYWR5KVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogUHJvY2VzcyBSZXF1ZXN0IGFuZCByZXR1cm4gYW4gT2JzZXJ2YWJsZSBvZiBIdHRwIFJlc3BvbnNlIG9iamVjdFxuXHQgKiBpbiB0aGUgbWFubmVyIG9mIGEgUkVTVHkgd2ViIGFwaS5cblx0ICpcblx0ICogRXhwZWN0IFVSSSBwYXR0ZXJuIGluIHRoZSBmb3JtIDpiYXNlLzpjb2xsZWN0aW9uTmFtZS86aWQ/XG5cdCAqIEV4YW1wbGVzOlxuXHQgKiAgIC8vIGZvciBzdG9yZSB3aXRoIGEgJ2N1c3RvbWVycycgY29sbGVjdGlvblxuXHQgKiAgIEdFVCBhcGkvY3VzdG9tZXJzICAgICAgICAgIC8vIGFsbCBjdXN0b21lcnNcblx0ICogICBHRVQgYXBpL2N1c3RvbWVycy80MiAgICAgICAvLyB0aGUgY2hhcmFjdGVyIHdpdGggaWQ9NDJcblx0ICogICBHRVQgYXBpL2N1c3RvbWVycz9uYW1lPV5qICAvLyAnaicgaXMgYSByZWdleDsgcmV0dXJucyBjdXN0b21lcnMgd2hvc2UgbmFtZSBzdGFydHMgd2l0aCAnaicgb3IgJ0onXG5cdCAqICAgR0VUIGFwaS9jdXN0b21lcnMuanNvbi80MiAgLy8gaWdub3JlcyB0aGUgXCIuanNvblwiXG5cdCAqXG5cdCAqIEFsc28gYWNjZXB0cyBkaXJlY3QgY29tbWFuZHMgdG8gdGhlIHNlcnZpY2UgaW4gd2hpY2ggdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYXBpQmFzZSBpcyB0aGUgd29yZCBcImNvbW1hbmRzXCJcblx0ICogRXhhbXBsZXM6XG5cdCAqICAgICBQT1NUIGNvbW1hbmRzL3Jlc2V0RGIsXG5cdCAqICAgICBHRVQvUE9TVCBjb21tYW5kcy9jb25maWcgLSBnZXQgb3IgKHJlKXNldCB0aGUgY29uZmlnXG5cdCAqXG5cdCAqICAgSFRUUCBvdmVycmlkZXM6XG5cdCAqICAgICBJZiB0aGUgaW5qZWN0ZWQgZGF0YVNlcnZpY2UgZGVmaW5lcyBhbiBIVFRQIG1ldGhvZCAobG93ZXJjYXNlKVxuXHQgKiAgICAgVGhlIHJlcXVlc3QgaXMgZm9yd2FyZGVkIHRvIHRoYXQgbWV0aG9kIGFzIGluXG5cdCAqICAgICBgZGF0YVNlcnZpY2UuZ2V0KG1lbW9yeVJlcXVlc3QpYFxuXHQgKiAgICAgd2hpY2ggbXVzdCByZXR1cm4gZWl0aGVyIGFuIE9ic2VydmFibGUgb2YgdGhlIHJlc3BvbnNlIHR5cGVcblx0ICogICAgIGZvciB0aGlzIGh0dHAgbGlicmFyeSBvciBudWxsfHVuZGVmaW5lZCAod2hpY2ggbWVhbnMgXCJrZWVwIHByb2Nlc3NpbmdcIikuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgaGFuZGxlUmVxdWVzdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHQvLyAgaGFuZGxlIHRoZSByZXF1ZXN0IHdoZW4gdGhlcmUgaXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlXG5cdFx0cmV0dXJuIHRoaXMuZGF0YWJhc2VSZWFkeS5waXBlKGNvbmNhdE1hcCgoKSA9PiB0aGlzLmhhbmRsZVJlcXVlc3RfKHJlcXVlc3QpKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGFuZGxlUmVxdWVzdF8ocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgdXJsID0gcmVxdWVzdC51cmxXaXRoUGFyYW1zID8gcmVxdWVzdC51cmxXaXRoUGFyYW1zIDogcmVxdWVzdC51cmw7XG5cdFx0Ly8gVHJ5IG92ZXJyaWRlIHBhcnNlclxuXHRcdC8vIElmIG5vIG92ZXJyaWRlIHBhcnNlciBvciBpdCByZXR1cm5zIG5vdGhpbmcsIHVzZSBkZWZhdWx0IHBhcnNlclxuXHRcdC8vIGNvbnN0IHBhcnNlciA9IHRoaXMuYmluZCgncGFyc2VSZXF1ZXN0VXJsJyk7XG5cdFx0Ly8gY29uc3QgcGFyc2VkOiBQYXJzZWRSZXF1ZXN0VXJsID0gKHBhcnNlciAmJiBwYXJzZXIodXJsLCB0aGlzKSkgfHwgdGhpcy5wYXJzZVJlcXVlc3RVcmwodXJsKTtcblx0XHRjb25zdCBwYXJzZWQ6IFBhcnNlZFJlcXVlc3RVcmwgPSB0aGlzLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xuXHRcdGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gcGFyc2VkLmNvbGxlY3Rpb25OYW1lO1xuXHRcdGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLmRhdGFiYXNlW2NvbGxlY3Rpb25OYW1lXTtcblx0XHRjb25zdCBtZW1vcnlSZXF1ZXN0OiBNZW1vcnlSZXF1ZXN0ID0ge1xuXHRcdFx0cmVxdWVzdDogcmVxdWVzdCxcblx0XHRcdGJvZHk6IHJlcXVlc3QuYm9keSxcblx0XHRcdGFwaUJhc2U6IHBhcnNlZC5hcGlCYXNlLFxuXHRcdFx0Y29sbGVjdGlvbjogY29sbGVjdGlvbixcblx0XHRcdGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZSxcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXG5cdFx0XHRpZDogdGhpcy5wYXJzZUlkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBwYXJzZWQuaWQpLFxuXHRcdFx0bWV0aG9kOiAocmVxdWVzdC5tZXRob2QgfHwgJ2dldCcpLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRxdWVyeTogcGFyc2VkLnF1ZXJ5LFxuXHRcdFx0cmVzb3VyY2VVcmw6IHBhcnNlZC5yZXNvdXJjZVVybCxcblx0XHRcdHVybDogdXJsLFxuXHRcdH07XG5cdFx0Ly8gSWYgYGRhdGFTZXJ2aWNlLnJlcXVlc3RJbnRlcmNlcHRvcmAgZXhpc3RzLCBsZXQgaXQgbW9ycGggdGhlIHJlc3BvbnNlIG9wdGlvbnNcblx0XHRjb25zdCBpbnRlcmNlcHRvciA9IHRoaXMuYmluZCgncmVxdWVzdEludGVyY2VwdG9yJyk7XG5cdFx0aWYgKC9jb21tYW5kc1xcLz8kL2kudGVzdChtZW1vcnlSZXF1ZXN0LmFwaUJhc2UpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb21tYW5kcyhtZW1vcnlSZXF1ZXN0KTtcblx0XHR9XG5cdFx0Y29uc3QgbWV0aG9kSW50ZXJjZXB0b3IgPSB0aGlzLmJpbmQobWVtb3J5UmVxdWVzdC5tZXRob2QpO1xuXHRcdGlmIChtZXRob2RJbnRlcmNlcHRvcikge1xuXHRcdFx0Ly8gTWVtb3J5RGF0YVNlcnZpY2UgaW50ZXJjZXB0cyB0aGlzIEhUVFAgbWV0aG9kLlxuXHRcdFx0Ly8gaWYgaW50ZXJjZXB0b3IgcHJvZHVjZWQgYSByZXNwb25zZSwgcmV0dXJuIGl0LlxuXHRcdFx0Ly8gZWxzZSBNZW1vcnlEYXRhU2VydmljZSBjaG9zZSBub3QgdG8gaW50ZXJjZXB0OyBjb250aW51ZSBwcm9jZXNzaW5nLlxuXHRcdFx0Y29uc3QgaW50ZXJjZXB0b3JSZXNwb25zZSA9IG1ldGhvZEludGVyY2VwdG9yKG1lbW9yeVJlcXVlc3QpO1xuXHRcdFx0aWYgKGludGVyY2VwdG9yUmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIGludGVyY2VwdG9yUmVzcG9uc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vICEhIVxuXHRcdGxldCByZXNwb25zZTogTWVtb3J5UmVzcG9uc2UgPSBpbnRlcmNlcHRvciA/IGludGVyY2VwdG9yKG1lbW9yeVJlcXVlc3QsIHRoaXMpIDogbnVsbDtcblx0XHRpZiAocmVzcG9uc2UpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNwb25zZSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmRhdGFiYXNlW2NvbGxlY3Rpb25OYW1lXSkge1xuXHRcdFx0Ly8gcmVxdWVzdCBpcyBmb3IgYSBrbm93biBjb2xsZWN0aW9uIG9mIHRoZSBNZW1vcnlEYXRhU2VydmljZVxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHRoaXMuY29sbGVjdGlvbkhhbmRsZXIobWVtb3J5UmVxdWVzdCkpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jb25maWcucGFzc1RocnVVbmtub3duVXJsKSB7XG5cdFx0XHQvLyB1bmtub3duIGNvbGxlY3Rpb247IHBhc3MgcmVxdWVzdCB0aHJ1IHRvIGEgXCJyZWFsXCIgYmFja2VuZC5cblx0XHRcdHJldHVybiB0aGlzLmdldFBhc3NUaHJ1QmFja2VuZCgpLmhhbmRsZShyZXF1ZXN0KTtcblx0XHR9XG5cdFx0Ly8gNDA0IC0gY2FuJ3QgaGFuZGxlIHRoaXMgcmVxdWVzdFxuXHRcdHJlc3BvbnNlID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgQ29sbGVjdGlvbiAnJHtjb2xsZWN0aW9uTmFtZX0nIG5vdCBmb3VuZGApO1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNwb25zZSk7XG5cdH1cblxuXHQvKipcblx0ICogUGFyc2VzIHRoZSByZXF1ZXN0IFVSTCBpbnRvIGEgYFBhcnNlZFJlcXVlc3RVcmxgIG9iamVjdC5cblx0ICogUGFyc2luZyBkZXBlbmRzIHVwb24gY2VydGFpbiB2YWx1ZXMgb2YgYGNvbmZpZ2A6IGBhcGlCYXNlYCwgYGhvc3RgLCBhbmQgYHVybFJvb3RgLlxuXHQgKlxuXHQgKiBDb25maWd1cmluZyB0aGUgYGFwaUJhc2VgIHlpZWxkcyB0aGUgbW9zdCBpbnRlcmVzdGluZyBjaGFuZ2VzIHRvIGBwYXJzZVJlcXVlc3RVcmxgIGJlaGF2aW9yOlxuXHQgKiAgIFdoZW4gYXBpQmFzZT11bmRlZmluZWQgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9hcGkvY29sbGVjdGlvbi80Midcblx0ICogICAgIHtiYXNlOiAnYXBpLycsIGNvbGxlY3Rpb25OYW1lOiAnY29sbGVjdGlvbicsIGlkOiAnNDInLCAuLi59XG5cdCAqICAgV2hlbiBhcGlCYXNlPSdzb21lL2FwaS9yb290LycgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9zb21lL2FwaS9yb290L2NvbGxlY3Rpb24nXG5cdCAqICAgICB7YmFzZTogJ3NvbWUvYXBpL3Jvb3QvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6IHVuZGVmaW5lZCwgLi4ufVxuXHQgKiAgIFdoZW4gYXBpQmFzZT0nLycgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9jb2xsZWN0aW9uJ1xuXHQgKiAgICAge2Jhc2U6ICcvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6IHVuZGVmaW5lZCwgLi4ufVxuXHQgKlxuXHQgKiBUaGUgYWN0dWFsIGFwaSBiYXNlIHNlZ21lbnQgdmFsdWVzIGFyZSBpZ25vcmVkLiBPbmx5IHRoZSBudW1iZXIgb2Ygc2VnbWVudHMgbWF0dGVycy5cblx0ICogVGhlIGZvbGxvd2luZyBhcGkgYmFzZSBzdHJpbmdzIGFyZSBjb25zaWRlcmVkIGlkZW50aWNhbDogJ2EvYicgfiAnc29tZS9hcGkvJyB+IGB0d28vc2VnbWVudHMnXG5cdCAqXG5cdCAqIFRvIHJlcGxhY2UgdGhpcyBkZWZhdWx0IG1ldGhvZCwgYXNzaWduIHlvdXIgYWx0ZXJuYXRpdmUgdG8geW91ciBNZW1vcnlEYXRhU2VydmljZVsncGFyc2VSZXF1ZXN0VXJsJ11cblx0ICovXG5cdHByb3RlY3RlZCBwYXJzZVJlcXVlc3RVcmwodXJsOiBzdHJpbmcpOiBQYXJzZWRSZXF1ZXN0VXJsIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgbG9jYXRpb24gPSB0aGlzLmdldExvY2F0aW9uKHVybCk7XG5cdFx0XHRsZXQgZHJvcCA9IHRoaXMuY29uZmlnLnJvb3RQYXRoLmxlbmd0aDtcblx0XHRcdGxldCB1cmxSb290ID0gJyc7XG5cdFx0XHRpZiAobG9jYXRpb24uaG9zdCAhPT0gdGhpcy5jb25maWcuaG9zdCkge1xuXHRcdFx0XHQvLyB1cmwgZm9yIGEgc2VydmVyIG9uIGEgZGlmZmVyZW50IGhvc3QhXG5cdFx0XHRcdC8vIGFzc3VtZSBpdCdzIGNvbGxlY3Rpb24gaXMgYWN0dWFsbHkgaGVyZSB0b28uXG5cdFx0XHRcdGRyb3AgPSAxOyAvLyB0aGUgbGVhZGluZyBzbGFzaFxuXHRcdFx0XHR1cmxSb290ID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvJztcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRoLnN1YnN0cmluZyhkcm9wKTtcblx0XHRcdGNvbnN0IHBhdGhTZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKTtcblx0XHRcdGxldCBzZWdtZW50SXggPSAwO1xuXHRcdFx0Ly8gYXBpQmFzZTogdGhlIGZyb250IHBhcnQgb2YgdGhlIHBhdGggZGV2b3RlZCB0byBnZXR0aW5nIHRvIHRoZSBhcGkgcm91dGVcblx0XHRcdC8vIEFzc3VtZXMgZmlyc3QgcGF0aCBzZWdtZW50IGlmIG5vIGNvbmZpZy5hcGlCYXNlXG5cdFx0XHQvLyBlbHNlIGlnbm9yZXMgYXMgbWFueSBwYXRoIHNlZ21lbnRzIGFzIGFyZSBpbiBjb25maWcuYXBpQmFzZVxuXHRcdFx0Ly8gRG9lcyBOT1QgY2FyZSB3aGF0IHRoZSBhcGkgYmFzZSBjaGFycyBhY3R1YWxseSBhcmUuXG5cdFx0XHRsZXQgYXBpQmFzZTogc3RyaW5nO1xuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5hcGlCYXNlID09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRhcGlCYXNlID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFwaUJhc2UgPSByZW1vdmVUcmFpbGluZ1NsYXNoKHRoaXMuY29uZmlnLmFwaUJhc2UudHJpbSgpKTtcblx0XHRcdFx0aWYgKGFwaUJhc2UpIHtcblx0XHRcdFx0XHRzZWdtZW50SXggPSBhcGlCYXNlLnNwbGl0KCcvJykubGVuZ3RoO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNlZ21lbnRJeCA9IDA7IC8vIG5vIGFwaSBiYXNlIGF0IGFsbDsgdW53aXNlIGJ1dCBhbGxvd2VkLlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRhcGlCYXNlICs9ICcvJztcblx0XHRcdGxldCBjb2xsZWN0aW9uTmFtZSA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG5cdFx0XHQvLyBpZ25vcmUgYW55dGhpbmcgYWZ0ZXIgYSAnLicgKGUuZy4sdGhlIFwianNvblwiIGluIFwiY3VzdG9tZXJzLmpzb25cIilcblx0XHRcdGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWUgJiYgY29sbGVjdGlvbk5hbWUuc3BsaXQoJy4nKVswXTtcblx0XHRcdGNvbnN0IGlkID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gdGhpcy5jcmVhdGVRdWVyeU1hcChsb2NhdGlvbi5xdWVyeSk7XG5cdFx0XHRjb25zdCByZXNvdXJjZVVybCA9IHVybFJvb3QgKyBhcGlCYXNlICsgY29sbGVjdGlvbk5hbWUgKyAnLyc7XG5cdFx0XHRyZXR1cm4geyBhcGlCYXNlLCBjb2xsZWN0aW9uTmFtZSwgaWQsIHF1ZXJ5LCByZXNvdXJjZVVybCB9O1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zdCBtZXNzYWdlID0gYHVuYWJsZSB0byBwYXJzZSB1cmwgJyR7dXJsfSc7IG9yaWdpbmFsIGVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YDtcblx0XHRcdHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHQvKiogUGFyc2UgdGhlIGlkIGFzIGEgbnVtYmVyLiBSZXR1cm4gb3JpZ2luYWwgdmFsdWUgaWYgbm90IGEgbnVtYmVyLiAqL1xuXHRwcm90ZWN0ZWQgcGFyc2VJZChjb2xsZWN0aW9uOiBhbnlbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZywgaWQ6IHN0cmluZyk6IGFueSB7XG5cdFx0aWYgKCF0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYyhjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkpIHtcblx0XHRcdC8vIENhbid0IGNvbmZpcm0gdGhhdCBgaWRgIGlzIGEgbnVtZXJpYyB0eXBlOyBkb24ndCBwYXJzZSBhcyBhIG51bWJlclxuXHRcdFx0Ly8gb3IgZWxzZSBgJzQyJ2AgLT4gYDQyYCBhbmQgX2dldCBieSBpZF8gZmFpbHMuXG5cdFx0XHRyZXR1cm4gaWQ7XG5cdFx0fVxuXHRcdGNvbnN0IGlkTnVtID0gcGFyc2VGbG9hdChpZCk7XG5cdFx0cmV0dXJuIGlzTmFOKGlkTnVtKSA/IGlkIDogaWROdW07XG5cdH1cblxuXHQvKipcblx0ICogQWRkIGNvbmZpZ3VyZWQgZGVsYXkgdG8gcmVzcG9uc2Ugb2JzZXJ2YWJsZSB1bmxlc3MgZGVsYXkgPT09IDBcblx0ICovXG5cdHByb3RlY3RlZCBhZGREZWxheShyZXNwb25zZTogT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBkZWxheSA9IHRoaXMuY29uZmlnLmRlbGF5O1xuXHRcdHJldHVybiBkZWxheSA9PT0gMCA/IHJlc3BvbnNlIDogZGVsYXlSZXNwb25zZShyZXNwb25zZSwgZGVsYXkgfHwgNTAwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBcHBseSBxdWVyeS9zZWFyY2ggcGFyYW1ldGVycyBhcyBhIGZpbHRlciBvdmVyIHRoZSBjb2xsZWN0aW9uXG5cdCAqIFRoaXMgaW1wbCBvbmx5IHN1cHBvcnRzIFJlZ0V4cCBxdWVyaWVzIG9uIHN0cmluZyBwcm9wZXJ0aWVzIG9mIHRoZSBjb2xsZWN0aW9uXG5cdCAqIEFORHMgdGhlIGNvbmRpdGlvbnMgdG9nZXRoZXJcblx0ICovXG5cdHByb3RlY3RlZCBhcHBseVF1ZXJ5KGNvbGxlY3Rpb246IGFueVtdLCBxdWVyeTogTWFwPHN0cmluZywgc3RyaW5nW10+KTogYW55W10ge1xuXHRcdC8vIGV4dHJhY3QgZmlsdGVyaW5nIGNvbmRpdGlvbnMgLSB7cHJvcGVydHlOYW1lLCBSZWdFeHBzKSAtIGZyb20gcXVlcnkvc2VhcmNoIHBhcmFtZXRlcnNcblx0XHRjb25zdCBjb25kaXRpb25zOiB7IG5hbWU6IHN0cmluZywgcmVnZXhwOiBSZWdFeHAgfVtdID0gW107XG5cdFx0Y29uc3QgY2FzZVNlbnNpdGl2ZSA9IHRoaXMuY29uZmlnLmNhc2VTZW5zaXRpdmVTZWFyY2ggPyB1bmRlZmluZWQgOiAnaSc7XG5cdFx0cXVlcnkuZm9yRWFjaCgodmFsdWU6IHN0cmluZ1tdLCBuYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdHZhbHVlLmZvckVhY2goeCA9PiBjb25kaXRpb25zLnB1c2goe1xuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRyZWdleHA6IG5ldyBSZWdFeHAoZGVjb2RlVVJJKHgpLCBjYXNlU2Vuc2l0aXZlKVxuXHRcdFx0fSkpO1xuXHRcdH0pO1xuXHRcdGNvbnN0IGxlbmd0aCA9IGNvbmRpdGlvbnMubGVuZ3RoO1xuXHRcdGlmICghbGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gY29sbGVjdGlvbjtcblx0XHR9XG5cdFx0Ly8gQU5EIHRoZSBSZWdFeHAgY29uZGl0aW9uc1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmZpbHRlcihyb3cgPT4ge1xuXHRcdFx0bGV0IGhhcyA9IHRydWU7XG5cdFx0XHRsZXQgaSA9IGxlbmd0aDtcblx0XHRcdHdoaWxlIChoYXMgJiYgaSkge1xuXHRcdFx0XHRpIC09IDE7XG5cdFx0XHRcdGNvbnN0IGNvbmQgPSBjb25kaXRpb25zW2ldO1xuXHRcdFx0XHRoYXMgPSBjb25kLnJlZ2V4cC50ZXN0KHJvd1tjb25kLm5hbWVdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBoYXM7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgbWV0aG9kIGZyb20gdGhlIGBNZW1vcnlEYXRhU2VydmljZWAgKGlmIGl0IGV4aXN0cyksIGJvdW5kIHRvIHRoYXQgc2VydmljZVxuXHQgKi9cblx0cHJvdGVjdGVkIGJpbmQ8VCBleHRlbmRzIEZ1bmN0aW9uPihtZXRob2ROYW1lOiBzdHJpbmcpIHtcblx0XHRjb25zdCBtZXRob2QgPSB0aGlzLmRhdGFTZXJ2aWNlW21ldGhvZE5hbWVdIGFzIFQ7XG5cdFx0cmV0dXJuIG1ldGhvZCA/IDxUPm1ldGhvZC5iaW5kKHRoaXMuZGF0YVNlcnZpY2UpIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0cHVibGljIGJvZGlmeShkYXRhOiBhbnkpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuZGF0YUVuY2Fwc3VsYXRpb24gPyB7IGRhdGEgfSA6IGRhdGE7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY2xvbmUoZGF0YTogYW55KSB7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNvbGxlY3Rpb25IYW5kbGVyKHJlcXVlc3Q6IE1lbW9yeVJlcXVlc3QpOiBNZW1vcnlSZXNwb25zZSB7XG5cdFx0Ly8gY29uc3QgcmVxdWVzdCA9IHJlcXVlc3QucmVxdWVzdDtcblx0XHRsZXQgcmVzcG9uc2U6IE1lbW9yeVJlc3BvbnNlO1xuXHRcdHN3aXRjaCAocmVxdWVzdC5tZXRob2QpIHtcblx0XHRcdGNhc2UgJ2dldCc6XG5cdFx0XHRcdHJlc3BvbnNlID0gdGhpcy5nZXQocmVxdWVzdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncG9zdCc6XG5cdFx0XHRcdHJlc3BvbnNlID0gdGhpcy5wb3N0KHJlcXVlc3QpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3B1dCc6XG5cdFx0XHRcdHJlc3BvbnNlID0gdGhpcy5wdXQocmVxdWVzdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZGVsZXRlJzpcblx0XHRcdFx0cmVzcG9uc2UgPSB0aGlzLmRlbGV0ZShyZXF1ZXN0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXNwb25zZSA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZShyZXF1ZXN0LnVybCwgU1RBVFVTX0NPREUuTUVUSE9EX05PVF9BTExPV0VELCAnTWV0aG9kIG5vdCBhbGxvd2VkJyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHQvLyBJZiBgZGF0YVNlcnZpY2UucmVzcG9uc2VJbnRlcmNlcHRvcmAgZXhpc3RzLCBsZXQgaXQgbW9ycGggdGhlIHJlc3BvbnNlIG9wdGlvbnNcblx0XHRjb25zdCBpbnRlcmNlcHRvciA9IHRoaXMuYmluZCgncmVzcG9uc2VJbnRlcmNlcHRvcicpO1xuXHRcdC8vICEhIVxuXHRcdHJldHVybiBpbnRlcmNlcHRvciA/IGludGVyY2VwdG9yKHJlc3BvbnNlLCByZXF1ZXN0KSA6IHJlc3BvbnNlO1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZUVycm9yUmVzcG9uc2UodXJsOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpOiBNZW1vcnlSZXNwb25zZSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0ZXJyb3I6IGAke21lc3NhZ2V9YCxcblx0XHRcdH0sXG5cdFx0XHR1cmw6IHVybCxcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0pLFxuXHRcdFx0c3RhdHVzOiBzdGF0dXNcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIGNvbGQgcmVzcG9uc2UgT2JzZXJ2YWJsZSBmcm9tIGEgZmFjdG9yeSBmb3IgTWVtb3J5UmVzcG9uc2Vcblx0ICogQHBhcmFtIG1lbW9yeVJlc3BvbnNlRmFjdG9yeSAtIGNyZWF0ZXMgTWVtb3J5UmVzcG9uc2Ugd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcblx0ICogQHBhcmFtIHdpdGhEZWxheSAtIGlmIHRydWUgKGRlZmF1bHQpLCBhZGQgc2ltdWxhdGVkIGxhdGVuY3kgZGVsYXkgZnJvbSBjb25maWd1cmF0aW9uXG5cdCAqL1xuXHRwcm90ZWN0ZWQgY3JlYXRlUmVzcG9uc2UkKG1lbW9yeVJlc3BvbnNlRmFjdG9yeTogKCkgPT4gTWVtb3J5UmVzcG9uc2UsIHdpdGhEZWxheSA9IHRydWUpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IG1lbW9yeVJlc3BvbnNlJCA9IHRoaXMuY3JlYXRlTWVtb3J5UmVzcG9uc2UkKG1lbW9yeVJlc3BvbnNlRmFjdG9yeSk7XG5cdFx0Y29uc3QgcmVzcG9uc2UkID0gdGhpcy5jcmVhdGVSZXNwb25zZSRmcm9tTWVtb3J5UmVzcG9uc2UkKG1lbW9yeVJlc3BvbnNlJCk7XG5cdFx0cmV0dXJuIHdpdGhEZWxheSA/IHRoaXMuYWRkRGVsYXkocmVzcG9uc2UkKSA6IHJlc3BvbnNlJDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBjb2xkIE9ic2VydmFibGUgb2YgTWVtb3J5UmVzcG9uc2UuXG5cdCAqIEBwYXJhbSBtZW1vcnlSZXNwb25zZUZhY3RvcnkgLSBjcmVhdGVzIE1lbW9yeVJlc3BvbnNlIHdoZW4gb2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkXG5cdCAqL1xuXHRwcm90ZWN0ZWQgY3JlYXRlTWVtb3J5UmVzcG9uc2UkKG1lbW9yeVJlc3BvbnNlRmFjdG9yeTogKCkgPT4gTWVtb3J5UmVzcG9uc2UpOiBPYnNlcnZhYmxlPE1lbW9yeVJlc3BvbnNlPiB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlPE1lbW9yeVJlc3BvbnNlPigob2JzZXJ2ZXI6IE9ic2VydmVyPE1lbW9yeVJlc3BvbnNlPikgPT4ge1xuXHRcdFx0bGV0IHJlc3BvbnNlOiBNZW1vcnlSZXNwb25zZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlc3BvbnNlID0gbWVtb3J5UmVzcG9uc2VGYWN0b3J5KCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRlcnJvciA9IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3I7XG5cdFx0XHRcdHJlc3BvbnNlID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKCcnLCBTVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGAke2Vycm9yfWApO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzcG9uc2Uuc3RhdHVzVGV4dCA9IGdldFN0YXR1c1RleHQoc3RhdHVzKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSBmYWlsdXJlICovIH1cblx0XHRcdGlmIChpc1N1Y2Nlc3Moc3RhdHVzKSkge1xuXHRcdFx0XHRvYnNlcnZlci5uZXh0KHJlc3BvbnNlKTtcblx0XHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9ic2VydmVyLmVycm9yKHJlc3BvbnNlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoKSA9PiB7IH07IC8vIHVuc3Vic2NyaWJlIGZ1bmN0aW9uXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogRmluZCBmaXJzdCBpbnN0YW5jZSBvZiBpdGVtIGluIGNvbGxlY3Rpb24gYnkgYGl0ZW0uaWRgXG5cdCAqIEBwYXJhbSBjb2xsZWN0aW9uXG5cdCAqIEBwYXJhbSBpZFxuXHQgKi9cblx0cHJvdGVjdGVkIGZpbmRCeUlkPFQgZXh0ZW5kcyB7IGlkOiBhbnkgfT4oY29sbGVjdGlvbjogVFtdLCBpZDogYW55KTogVCB7XG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uZmluZCgoaXRlbTogVCkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdlbmVyYXRlIHRoZSBuZXh0IGF2YWlsYWJsZSBpZCBmb3IgaXRlbSBpbiB0aGlzIGNvbGxlY3Rpb25cblx0ICogVXNlIG1ldGhvZCBmcm9tIGBkYXRhU2VydmljZWAgaWYgaXQgZXhpc3RzIGFuZCByZXR1cm5zIGEgdmFsdWUsXG5cdCAqIGVsc2UgZGVsZWdhdGVzIHRvIGBnZW5JZERlZmF1bHRgLlxuXHQgKiBAcGFyYW0gY29sbGVjdGlvbiAtIGNvbGxlY3Rpb24gb2YgaXRlbXMgd2l0aCBgaWRgIGtleSBwcm9wZXJ0eVxuXHQgKi9cblx0cHJvdGVjdGVkIGdlbklkPFQgZXh0ZW5kcyB7IGlkOiBhbnkgfT4oY29sbGVjdGlvbjogVFtdLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRjb25zdCBnZW5JZCA9IHRoaXMuYmluZCgnZ2VuSWQnKTtcblx0XHRpZiAoZ2VuSWQpIHtcblx0XHRcdGNvbnN0IGlkID0gZ2VuSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcblx0XHRcdGlmIChpZCAhPSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIGlkO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5nZW5JZERlZmF1bHQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgZ2VuZXJhdG9yIG9mIHRoZSBuZXh0IGF2YWlsYWJsZSBpZCBmb3IgaXRlbSBpbiB0aGlzIGNvbGxlY3Rpb25cblx0ICogVGhpcyBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHdvcmtzIG9ubHkgZm9yIG51bWVyaWMgaWRzLlxuXHQgKiBAcGFyYW0gY29sbGVjdGlvbiAtIGNvbGxlY3Rpb24gb2YgaXRlbXMgd2l0aCBgaWRgIGtleSBwcm9wZXJ0eVxuXHQgKiBAcGFyYW0gY29sbGVjdGlvbk5hbWUgLSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG5cdCAqL1xuXHRwcm90ZWN0ZWQgZ2VuSWREZWZhdWx0PFQgZXh0ZW5kcyB7IGlkOiBhbnkgfT4oY29sbGVjdGlvbjogVFtdLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRpZiAoIXRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDb2xsZWN0aW9uICcke2NvbGxlY3Rpb25OYW1lfScgaWQgdHlwZSBpcyBub24tbnVtZXJpYyBvciB1bmtub3duLiBDYW4gb25seSBnZW5lcmF0ZSBudW1lcmljIGlkcy5gKTtcblx0XHR9XG5cdFx0bGV0IG1heElkID0gMDtcblx0XHRjb2xsZWN0aW9uLnJlZHVjZSgocHJldjogYW55LCBpdGVtOiBhbnkpID0+IHtcblx0XHRcdG1heElkID0gTWF0aC5tYXgobWF4SWQsIHR5cGVvZiBpdGVtLmlkID09PSAnbnVtYmVyJyA/IGl0ZW0uaWQgOiBtYXhJZCk7XG5cdFx0fSwgdW5kZWZpbmVkKTtcblx0XHRyZXR1cm4gbWF4SWQgKyAxO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBsb2NhdGlvbiBpbmZvIGZyb20gYSB1cmwsIGV2ZW4gb24gc2VydmVyIHdoZXJlIGBkb2N1bWVudGAgaXMgbm90IGRlZmluZWRcblx0ICovXG5cdHByb3RlY3RlZCBnZXRMb2NhdGlvbih1cmw6IHN0cmluZyk6IFVyaUluZm8ge1xuXHRcdGlmICghdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuXHRcdFx0Ly8gZ2V0IHRoZSBkb2N1bWVudCBpZiBydW5uaW5nIGluIGJyb3dzZXJcblx0XHRcdGNvbnN0IGRvY3VtZW50XzogRG9jdW1lbnQgPSAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcblx0XHRcdC8vIGFkZCBob3N0IGluZm8gdG8gdXJsIGJlZm9yZSBwYXJzaW5nLiAgVXNlIGEgZmFrZSBob3N0IHdoZW4gbm90IGluIGJyb3dzZXIuXG5cdFx0XHRjb25zdCBiYXNlID0gZG9jdW1lbnRfID8gZG9jdW1lbnRfLmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGRvY3VtZW50Xy5sb2NhdGlvbi5ob3N0IDogJ2h0dHA6Ly9mYWtlJztcblx0XHRcdHVybCA9IHVybC5zdGFydHNXaXRoKCcvJykgPyBiYXNlICsgdXJsIDogYmFzZSArICcvJyArIHVybDtcblx0XHR9XG5cdFx0cmV0dXJuIHBhcnNlVXJpKHVybCk7XG5cdH1cblxuXHQvKipcblx0ICogZ2V0IG9yIGNyZWF0ZSB0aGUgZnVuY3Rpb24gdGhhdCBwYXNzZXMgdW5oYW5kbGVkIHJlcXVlc3RzXG5cdCAqIHRocm91Z2ggdG8gdGhlIFwicmVhbFwiIGJhY2tlbmQuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgZ2V0UGFzc1RocnVCYWNrZW5kKCk6IFBhc3NUaHJ1QmFja2VuZCB7XG5cdFx0cmV0dXJuIHRoaXMucGFzc1RocnVCYWNrZW5kID8gdGhpcy5wYXNzVGhydUJhY2tlbmQgOiB0aGlzLnBhc3NUaHJ1QmFja2VuZCA9IHRoaXMuY3JlYXRlUGFzc1RocnVCYWNrZW5kKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaW5kZXhPZihjb2xsZWN0aW9uOiBhbnlbXSwgaWQ6IG51bWJlcikge1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmZpbmRJbmRleCgoaXRlbTogYW55KSA9PiBpdGVtLmlkID09PSBpZCk7XG5cdH1cblxuXHQvKipcblx0ICogcmV0dXJuIHRydWUgaWYgY2FuIGRldGVybWluZSB0aGF0IHRoZSBjb2xsZWN0aW9uJ3MgYGl0ZW0uaWRgIGlzIGEgbnVtYmVyXG5cdCAqIFRoaXMgaW1wbGVtZW50YXRpb24gY2FuJ3QgdGVsbCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eSBzbyBpdCBhc3N1bWVzIE5PXG5cdCAqICovXG5cdHByb3RlY3RlZCBpc0NvbGxlY3Rpb25JZE51bWVyaWM8VCBleHRlbmRzIHsgaWQ6IGFueSB9Pihjb2xsZWN0aW9uOiBUW10sIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHQvLyBjb2xsZWN0aW9uTmFtZSBub3QgdXNlZCBub3cgYnV0IG92ZXJyaWRlIG1pZ2h0IG1haW50YWluIGNvbGxlY3Rpb24gdHlwZSBpbmZvcm1hdGlvblxuXHRcdC8vIHNvIHRoYXQgaXQgY291bGQga25vdyB0aGUgdHlwZSBvZiB0aGUgYGlkYCBldmVuIHdoZW4gdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkuXG5cdFx0Ly8gcmV0dXJuICEhKGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvblswXSkgJiYgdHlwZW9mIGNvbGxlY3Rpb25bMF0uaWQgPT09ICdudW1iZXInO1xuXHRcdHJldHVybiAhIShjb2xsZWN0aW9uICYmIGNvbGxlY3Rpb25bMF0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIHJlbW92ZUJ5SWQoY29sbGVjdGlvbjogYW55W10sIGlkOiBudW1iZXIpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuaW5kZXhPZihjb2xsZWN0aW9uLCBpZCk7XG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdGNvbGxlY3Rpb24uc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogVGVsbCB5b3VyIGluLW1lbSBcImRhdGFiYXNlXCIgdG8gcmVzZXQuXG5cdCAqIHJldHVybnMgT2JzZXJ2YWJsZSBvZiB0aGUgZGF0YWJhc2UgYmVjYXVzZSByZXNldHRpbmcgaXQgY291bGQgYmUgYXN5bmNcblx0ICovXG5cdHByb3RlY3RlZCByZXNldERiKHJlcXVlc3Q/OiBNZW1vcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0dGhpcy5kYXRhYmFzZVJlYWR5U3ViamVjdC5uZXh0KGZhbHNlKTtcblx0XHRjb25zdCBkYXRhYmFzZSA9IHRoaXMuZGF0YVNlcnZpY2UuY3JlYXRlRGIocmVxdWVzdCk7XG5cdFx0Y29uc3QgZGF0YWJhc2UkID0gZGF0YWJhc2UgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZGF0YWJhc2UgOlxuXHRcdFx0dHlwZW9mIChkYXRhYmFzZSBhcyBhbnkpLnRoZW4gPT09ICdmdW5jdGlvbicgPyBmcm9tKGRhdGFiYXNlIGFzIFByb21pc2U8YW55PikgOlxuXHRcdFx0XHRvZihkYXRhYmFzZSk7XG5cdFx0ZGF0YWJhc2UkLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKChkYXRhYmFzZToge30pID0+IHtcblx0XHRcdHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcblx0XHRcdHRoaXMuZGF0YWJhc2VSZWFkeVN1YmplY3QubmV4dCh0cnVlKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcy5kYXRhYmFzZVJlYWR5O1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbW1hbmRzIHJlY29uZmlndXJlIHRoZSBpbi1tZW1vcnkgd2ViIGFwaSBzZXJ2aWNlIG9yIGV4dHJhY3QgaW5mb3JtYXRpb24gZnJvbSBpdC5cblx0ICogQ29tbWFuZHMgaWdub3JlIHRoZSBsYXRlbmN5IGRlbGF5IGFuZCByZXNwb25kIEFTQVAuXG5cdCAqXG5cdCAqIFdoZW4gdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYGFwaUJhc2VgIHBhdGggaXMgXCJjb21tYW5kc1wiLFxuXHQgKiB0aGUgYGNvbGxlY3Rpb25OYW1lYCBpcyB0aGUgY29tbWFuZC5cblx0ICpcblx0ICogRXhhbXBsZSBVUkxzOlxuXHQgKiAgIGNvbW1hbmRzL3Jlc2V0ZGIgKFBPU1QpIC8vIFJlc2V0IHRoZSBcImRhdGFiYXNlXCIgdG8gaXRzIG9yaWdpbmFsIHN0YXRlXG5cdCAqICAgY29tbWFuZHMvY29uZmlnIChHRVQpICAgLy8gUmV0dXJuIHRoaXMgc2VydmljZSdzIGNvbmZpZyBvYmplY3Rcblx0ICogICBjb21tYW5kcy9jb25maWcgKFBPU1QpICAvLyBVcGRhdGUgdGhlIGNvbmZpZyAoZS5nLiB0aGUgZGVsYXkpXG5cdCAqXG5cdCAqIFVzYWdlOlxuXHQgKiAgIGh0dHAucG9zdCgnY29tbWFuZHMvcmVzZXRkYicsIHVuZGVmaW5lZCk7XG5cdCAqICAgaHR0cC5nZXQoJ2NvbW1hbmRzL2NvbmZpZycpO1xuXHQgKiAgIGh0dHAucG9zdCgnY29tbWFuZHMvY29uZmlnJywgJ3tcImRlbGF5XCI6MTAwMH0nKTtcblx0ICovXG5cdHByb3RlY3RlZCBjb21tYW5kcyhyZXF1ZXN0OiBNZW1vcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBjb21tYW5kID0gcmVxdWVzdC5jb2xsZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGNvbnN0IG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kO1xuXHRcdGxldCByZXNwb25zZTogTWVtb3J5UmVzcG9uc2UgPSB7XG5cdFx0XHR1cmw6IHJlcXVlc3QudXJsXG5cdFx0fTtcblx0XHRzd2l0Y2ggKGNvbW1hbmQpIHtcblx0XHRcdGNhc2UgJ3Jlc2V0ZGInOlxuXHRcdFx0XHRyZXNwb25zZS5zdGF0dXMgPSBTVEFUVVNfQ09ERS5OT19DT05URU5UO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5yZXNldERiKHJlcXVlc3QpLnBpcGUoXG5cdFx0XHRcdFx0Y29uY2F0TWFwKCgpID0+IHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHJlc3BvbnNlLCBmYWxzZSAvKiBubyBsYXRlbmN5IGRlbGF5ICovKSlcblx0XHRcdFx0KTtcblx0XHRcdGNhc2UgJ2NvbmZpZyc6XG5cdFx0XHRcdGlmIChtZXRob2QgPT09ICdnZXQnKSB7XG5cdFx0XHRcdFx0cmVzcG9uc2Uuc3RhdHVzID0gU1RBVFVTX0NPREUuT0s7XG5cdFx0XHRcdFx0cmVzcG9uc2UuYm9keSA9IHRoaXMuY2xvbmUodGhpcy5jb25maWcpO1xuXHRcdFx0XHRcdC8vIGFueSBvdGhlciBIVFRQIG1ldGhvZCBpcyBhc3N1bWVkIHRvIGJlIGEgY29uZmlnIHVwZGF0ZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnN0IGJvZHkgPSByZXF1ZXN0LnJlcXVlc3QuYm9keTtcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBib2R5KTtcblx0XHRcdFx0XHR0aGlzLnBhc3NUaHJ1QmFja2VuZCA9IHVuZGVmaW5lZDsgLy8gcmUtY3JlYXRlIHdoZW4gbmVlZGVkXG5cdFx0XHRcdFx0cmVzcG9uc2Uuc3RhdHVzID0gU1RBVFVTX0NPREUuTk9fQ09OVEVOVDtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJlc3BvbnNlID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHJlcXVlc3QudXJsLCBTVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGBVbmtub3duIGNvbW1hbmQgXCIke2NvbW1hbmR9XCJgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHJlc3BvbnNlLCBmYWxzZSAvKiBubyBsYXRlbmN5IGRlbGF5ICovKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXQoeyBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaGVhZGVycywgaWQsIHF1ZXJ5LCB1cmwgfTogTWVtb3J5UmVxdWVzdCk6IE1lbW9yeVJlc3BvbnNlIHtcblx0XHRsZXQgZGF0YSA9IGNvbGxlY3Rpb247XG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcblx0XHRpZiAoaWQgIT0gdW5kZWZpbmVkICYmIGlkICE9PSAnJykge1xuXHRcdFx0ZGF0YSA9IHRoaXMuZmluZEJ5SWQoY29sbGVjdGlvbiwgaWQpO1xuXHRcdFx0aWYgKCFkYXRhKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5OT1RfRk9VTkQsIGAnJHtjb2xsZWN0aW9uTmFtZX0nIHdpdGggaWQ9JyR7aWR9JyBub3QgZm91bmRgKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHF1ZXJ5KSB7XG5cdFx0XHRkYXRhID0gdGhpcy5hcHBseVF1ZXJ5KGNvbGxlY3Rpb24sIHF1ZXJ5KTtcblx0XHRcdGlmICghZGF0YS5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLk5PVF9GT1VORCwgYCcke2NvbGxlY3Rpb25OYW1lfScgd2l0aCBpZD0nJHtpZH0nIG5vdCBmb3VuZGApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0Ym9keTogdGhpcy5ib2RpZnkodGhpcy5jbG9uZShkYXRhKSksXG5cdFx0XHRoZWFkZXJzOiBoZWFkZXJzLFxuXHRcdFx0c3RhdHVzOiBTVEFUVVNfQ09ERS5PS1xuXHRcdH07XG5cdH1cblxuXHQvLyBDcmVhdGUgZW50aXR5XG5cdC8vIENhbiB1cGRhdGUgYW4gZXhpc3RpbmcgZW50aXR5IHRvbyBpZiBwb3N0NDA5IGlzIGZhbHNlLlxuXHRwcm90ZWN0ZWQgcG9zdCh7IGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzLCBpZCwgcmVxdWVzdCwgcmVzb3VyY2VVcmwsIHVybCB9OiBNZW1vcnlSZXF1ZXN0KTogTWVtb3J5UmVzcG9uc2Uge1xuXHRcdGNvbnN0IHJlcXVlc3RCb2R5ID0gcmVxdWVzdC5ib2R5O1xuXHRcdGNvbnN0IGl0ZW06IGFueSA9IHRoaXMuY2xvbmUocmVxdWVzdEJvZHkpO1xuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG5cdFx0aWYgKGl0ZW0uaWQgPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpdGVtLmlkID0gaWQgfHwgdGhpcy5nZW5JZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zdCBtZXNzYWdlOiBzdHJpbmcgPSBlcnJvci5tZXNzYWdlIHx8ICcnO1xuXHRcdFx0XHRpZiAoL2lkIHR5cGUgaXMgbm9uLW51bWVyaWMvLnRlc3QobWVzc2FnZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuVU5QUk9DRVNTQUJMRV9FTlRSWSwgbWVzc2FnZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgYEZhaWxlZCB0byBnZW5lcmF0ZSBuZXcgaWQgZm9yICcke2NvbGxlY3Rpb25OYW1lfSdgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoaWQgJiYgaWQgIT09IGl0ZW0uaWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5CQURfUkVRVUVTVCwgYFJlcXVlc3QgaWQgZG9lcyBub3QgbWF0Y2ggaXRlbS5pZGApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZCA9IGl0ZW0uaWQ7XG5cdFx0fVxuXHRcdGNvbnN0IGV4aXN0aW5nSXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuXHRcdGNvbnN0IGJvZHkgPSB0aGlzLmJvZGlmeShpdGVtKTtcblx0XHRpZiAoZXhpc3RpbmdJeCA9PT0gLTEpIHtcblx0XHRcdGNvbGxlY3Rpb24ucHVzaChpdGVtKTtcblx0XHRcdGhlYWRlcnMuc2V0KCdMb2NhdGlvbicsIHJlc291cmNlVXJsICsgJy8nICsgaWQpO1xuXHRcdFx0cmV0dXJuIHsgaGVhZGVycywgYm9keSwgc3RhdHVzOiBTVEFUVVNfQ09ERS5DUkVBVEVEIH07XG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvbmZpZy5wb3N0NDA5KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuQ09ORkxJQ1QsIGAnJHtjb2xsZWN0aW9uTmFtZX0nIGl0ZW0gd2l0aCBpZD0nJHtpZH0gZXhpc3RzIGFuZCBtYXkgbm90IGJlIHVwZGF0ZWQgd2l0aCBQT1NUOyB1c2UgUFVUIGluc3RlYWQuYCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbGxlY3Rpb25bZXhpc3RpbmdJeF0gPSBpdGVtO1xuXHRcdFx0cmV0dXJuIHRoaXMuY29uZmlnLnBvc3QyMDQgP1xuXHRcdFx0XHR7IGhlYWRlcnMsIHN0YXR1czogU1RBVFVTX0NPREUuTk9fQ09OVEVOVCB9IDogLy8gc3VjY2Vzc2Z1bDsgbm8gY29udGVudFxuXHRcdFx0XHR7IGhlYWRlcnMsIGJvZHksIHN0YXR1czogU1RBVFVTX0NPREUuT0sgfTsgLy8gc3VjY2Vzc2Z1bDsgcmV0dXJuIGVudGl0eVxuXHRcdH1cblx0fVxuXG5cdC8vIFVwZGF0ZSBleGlzdGluZyBlbnRpdHlcblx0Ly8gQ2FuIGNyZWF0ZSBhbiBlbnRpdHkgdG9vIGlmIHB1dDQwNCBpcyBmYWxzZS5cblx0cHJvdGVjdGVkIHB1dCh7IGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzLCBpZCwgcmVxdWVzdCwgdXJsIH06IE1lbW9yeVJlcXVlc3QpOiBNZW1vcnlSZXNwb25zZSB7XG5cdFx0Y29uc3QgaXRlbSA9IHRoaXMuY2xvbmUocmVxdWVzdC5ib2R5KTtcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuXHRcdGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLk5PVF9GT1VORCwgYE1pc3NpbmcgJyR7Y29sbGVjdGlvbk5hbWV9JyBpZGApO1xuXHRcdH1cblx0XHRpZiAoaWQgJiYgaWQgIT09IGl0ZW0uaWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5CQURfUkVRVUVTVCwgYFJlcXVlc3QgZm9yICcke2NvbGxlY3Rpb25OYW1lfScgaWQgZG9lcyBub3QgbWF0Y2ggaXRlbS5pZGApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZCA9IGl0ZW0uaWQ7XG5cdFx0fVxuXHRcdGNvbnN0IGV4aXN0aW5nSXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuXHRcdGNvbnN0IGJvZHkgPSB0aGlzLmJvZGlmeShpdGVtKTtcblx0XHRpZiAoZXhpc3RpbmdJeCA+IC0xKSB7XG5cdFx0XHRjb2xsZWN0aW9uW2V4aXN0aW5nSXhdID0gaXRlbTtcblx0XHRcdHJldHVybiB0aGlzLmNvbmZpZy5wdXQyMDQgP1xuXHRcdFx0XHR7IGhlYWRlcnMsIHN0YXR1czogU1RBVFVTX0NPREUuTk9fQ09OVEVOVCB9IDogLy8gc3VjY2Vzc2Z1bDsgbm8gY29udGVudFxuXHRcdFx0XHR7IGhlYWRlcnMsIGJvZHksIHN0YXR1czogU1RBVFVTX0NPREUuT0sgfTsgLy8gc3VjY2Vzc2Z1bDsgcmV0dXJuIGVudGl0eVxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb25maWcucHV0NDA0KSB7XG5cdFx0XHQvLyBpdGVtIHRvIHVwZGF0ZSBub3QgZm91bmQ7IHVzZSBQT1NUIHRvIGNyZWF0ZSBuZXcgaXRlbSBmb3IgdGhpcyBpZC5cblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5OT1RfRk9VTkQsIGAnJHtjb2xsZWN0aW9uTmFtZX0nIGl0ZW0gd2l0aCBpZD0nJHtpZH0gbm90IGZvdW5kIGFuZCBtYXkgbm90IGJlIGNyZWF0ZWQgd2l0aCBQVVQ7IHVzZSBQT1NUIGluc3RlYWQuYCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGNyZWF0ZSBuZXcgaXRlbSBmb3IgaWQgbm90IGZvdW5kXG5cdFx0XHRjb2xsZWN0aW9uLnB1c2goaXRlbSk7XG5cdFx0XHRyZXR1cm4geyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVU19DT0RFLkNSRUFURUQgfTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZGVsZXRlKHsgY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMsIGlkLCB1cmwgfTogTWVtb3J5UmVxdWVzdCk6IE1lbW9yeVJlc3BvbnNlIHtcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuXHRcdGlmIChpZCA9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5OT1RfRk9VTkQsIGBNaXNzaW5nIFwiJHtjb2xsZWN0aW9uTmFtZX1cIiBpZGApO1xuXHRcdH1cblx0XHRjb25zdCBleGlzdHMgPSB0aGlzLnJlbW92ZUJ5SWQoY29sbGVjdGlvbiwgaWQpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRoZWFkZXJzOiBoZWFkZXJzLFxuXHRcdFx0c3RhdHVzOiAoZXhpc3RzIHx8ICF0aGlzLmNvbmZpZy5kZWxldGU0MDQpID8gU1RBVFVTX0NPREUuTk9fQ09OVEVOVCA6IFNUQVRVU19DT0RFLk5PVF9GT1VORFxuXHRcdH07XG5cdH1cblxuXHQvLy8vLy8vXG5cblxuXHRoYW5kbGUocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdChyZXF1ZXN0KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UocmVxdWVzdC51cmwsIFNUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgYCR7ZXJyb3IubWVzc2FnZSB8fCBlcnJvcn1gKTtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNwb25zZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZVF1ZXJ5TWFwKHNlYXJjaDogc3RyaW5nKTogTWFwPHN0cmluZywgc3RyaW5nW10+IHtcblx0XHRjb25zdCBtYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG5cdFx0aWYgKHNlYXJjaCkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tU3RyaW5nOiBzZWFyY2ggfSk7XG5cdFx0XHRwYXJhbXMua2V5cygpLmZvckVhY2gocCA9PiBtYXAuc2V0KHAsIHBhcmFtcy5nZXRBbGwocCkpKTtcblx0XHR9XG5cdFx0cmV0dXJuIG1hcDtcblx0fVxuXG5cdHByb3RlY3RlZCBjcmVhdGVSZXNwb25zZSRmcm9tTWVtb3J5UmVzcG9uc2UkKHJlc3BvbnNlJDogT2JzZXJ2YWJsZTxNZW1vcnlSZXNwb25zZT4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PiB7XG5cdFx0cmV0dXJuIHJlc3BvbnNlJC5waXBlKFxuXHRcdFx0bWFwKChvcHRpb25zOiBIdHRwUmVzcG9uc2VCYXNlKSA9PiBuZXcgSHR0cFJlc3BvbnNlPGFueT4ob3B0aW9ucykpLFxuXHRcdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlUGFzc1RocnVCYWNrZW5kKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gbmV3IEh0dHBYaHJCYWNrZW5kKHRoaXMuZmFjdG9yeSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnQ2Fubm90IGNyZWF0ZSBwYXNzVGhydTQwNCBiYWNrZW5kOyAnICsgKGVycm9yLm1lc3NhZ2UgfHwgJycpO1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==