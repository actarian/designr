/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return this.databaseReadySubject.asObservable().pipe(first((/**
         * @param {?} ready
         * @return {?}
         */
        (ready) => ready)));
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
        return this.databaseReady.pipe(concatMap((/**
         * @return {?}
         */
        () => this.handleRequest_(request))));
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
            return this.createResponse$((/**
             * @return {?}
             */
            () => response));
        }
        if (this.database[collectionName]) {
            // request is for a known collection of the MemoryDataService
            return this.createResponse$((/**
             * @return {?}
             */
            () => this.collectionHandler(memoryRequest)));
        }
        if (this.config.passThruUnknownUrl) {
            // unknown collection; pass request thru to a "real" backend.
            return this.getPassThruBackend().handle(request);
        }
        // 404 - can't handle this request
        response = this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, `Collection '${collectionName}' not found`);
        return this.createResponse$((/**
         * @return {?}
         */
        () => response));
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
        query.forEach((/**
         * @param {?} value
         * @param {?} name
         * @return {?}
         */
        (value, name) => {
            value.forEach((/**
             * @param {?} x
             * @return {?}
             */
            x => conditions.push({
                name,
                regexp: new RegExp(decodeURI(x), caseSensitive)
            })));
        }));
        /** @type {?} */
        const length = conditions.length;
        if (!length) {
            return collection;
        }
        // AND the RegExp conditions
        return collection.filter((/**
         * @param {?} row
         * @return {?}
         */
        row => {
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
        }));
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
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
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
            return (/**
             * @return {?}
             */
            () => { }); // unsubscribe function
        }));
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
        return collection.find((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.id === id));
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
        collection.reduce((/**
         * @param {?} prev
         * @param {?} item
         * @return {?}
         */
        (prev, item) => {
            maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
        }), undefined);
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
        return collection.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.id === id));
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
        database$.pipe(first()).subscribe((/**
         * @param {?} database
         * @return {?}
         */
        (database) => {
            this.database = database;
            this.databaseReadySubject.next(true);
        }));
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
                return this.resetDb(request).pipe(concatMap((/**
                 * @return {?}
                 */
                () => this.createResponse$((/**
                 * @return {?}
                 */
                () => response), false /* no latency delay */))));
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
        return this.createResponse$((/**
         * @return {?}
         */
        () => response), false /* no latency delay */);
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
            return this.createResponse$((/**
             * @return {?}
             */
            () => response));
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
            params.keys().forEach((/**
             * @param {?} p
             * @return {?}
             */
            p => map.set(p, params.getAll(p))));
        }
        return map;
    }
    /**
     * @protected
     * @param {?} response$
     * @return {?}
     */
    createResponse$fromMemoryResponse$(response$) {
        return response$.pipe(map((/**
         * @param {?} options
         * @return {?}
         */
        (options) => new HttpResponse(options))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTBCLFdBQVcsRUFBRSxVQUFVLEVBQWUsWUFBWSxFQUFvQixjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEssT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQVksRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQW1ELFFBQVEsRUFBbUIsbUJBQW1CLEVBQVcsTUFBTSxVQUFVLENBQUM7QUFDNUssT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdkUsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQU8xQixZQUNXLFdBQThCLEVBQ3hDLFNBQThCLEVBQUUsRUFDeEIsT0FBbUI7UUFGakIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBRWhDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFQbEIsV0FBTSxHQUF3QixJQUFJLG1CQUFtQixFQUFFLENBQUM7O2NBUzNELFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsaUNBQWlDO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsUUFB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QU0sRUFBRSxDQUFDO1lBQ3JELE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQzs7Ozs7O0lBRVMsa0NBQWtDLENBQUMsU0FBcUM7UUFDakYsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUNwQixHQUFHOzs7O1FBQUMsQ0FBQyxPQUF5QixFQUFFLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBTSxPQUFPLENBQUMsRUFBQyxDQUNsRSxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFUyxxQkFBcUI7UUFDOUIsSUFBSTtZQUNILE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZixLQUFLLENBQUMsT0FBTyxHQUFHLHFDQUFxQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM5RSxNQUFNLEtBQUssQ0FBQztTQUNaO0lBQ0YsQ0FBQzs7O1lBbG1CRCxVQUFVOzs7O1lBSG1CLGlCQUFpQjtZQUF0QyxtQkFBbUI7WUFMMkYsVUFBVTs7Ozs7OztJQVdoSSx5Q0FBeUM7Ozs7O0lBQ3pDLGdDQUFrRTs7Ozs7SUFDbEUsa0NBQTJCOzs7OztJQUMzQiw4Q0FBeUQ7Ozs7O0lBR3hELHFDQUF3Qzs7Ozs7SUFFeEMsaUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEJhY2tlbmQsIEh0dHBFdmVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UsIEh0dHBSZXNwb25zZUJhc2UsIEh0dHBYaHJCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZnJvbSwgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNvbmNhdE1hcCwgZmlyc3QsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZGVsYXlSZXNwb25zZSB9IGZyb20gJy4vZGVsYXktcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBNZW1vcnlCYWNrZW5kQ29uZmlnLCBNZW1vcnlEYXRhU2VydmljZSwgTWVtb3J5UmVxdWVzdCwgTWVtb3J5UmVzcG9uc2UsIFBhcnNlZFJlcXVlc3RVcmwsIHBhcnNlVXJpLCBQYXNzVGhydUJhY2tlbmQsIHJlbW92ZVRyYWlsaW5nU2xhc2gsIFVyaUluZm8gfSBmcm9tICcuL21lbW9yeSc7XHJcbmltcG9ydCB7IGdldFN0YXR1c1RleHQsIGlzU3VjY2VzcywgU1RBVFVTX0NPREUgfSBmcm9tICcuL3N0YXR1cy1jb2Rlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSBpbXBsZW1lbnRzIEh0dHBCYWNrZW5kIHtcclxuXHJcblx0cHJpdmF0ZSBwYXNzVGhydUJhY2tlbmQ6IFBhc3NUaHJ1QmFja2VuZDtcclxuXHRwcm90ZWN0ZWQgY29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnID0gbmV3IE1lbW9yeUJhY2tlbmRDb25maWcoKTtcclxuXHRwcm90ZWN0ZWQgZGF0YWJhc2U6IE9iamVjdDtcclxuXHRwcm90ZWN0ZWQgZGF0YWJhc2VSZWFkeVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcm90ZWN0ZWQgZGF0YVNlcnZpY2U6IE1lbW9yeURhdGFTZXJ2aWNlLFxyXG5cdFx0Y29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnID0ge30sXHJcblx0XHRwcml2YXRlIGZhY3Rvcnk6IFhockZhY3RvcnksXHJcblx0KSB7XHJcblx0XHRjb25zdCBsb2NhdGlvbiA9IHRoaXMuZ2V0TG9jYXRpb24oJy8nKTtcclxuXHRcdHRoaXMuY29uZmlnLmhvc3QgPSBsb2NhdGlvbi5ob3N0OyAvLyBkZWZhdWx0IHRvIGFwcCB3ZWIgc2VydmVyIGhvc3RcclxuXHRcdHRoaXMuY29uZmlnLnJvb3RQYXRoID0gbG9jYXRpb24ucGF0aDsgLy8gZGVmYXVsdCB0byBwYXRoIHdoZW4gYXBwIGlzIHNlcnZlZCAoZS5nLicvJylcclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZ2V0IGRhdGFiYXNlUmVhZHkoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcblx0XHRpZiAoIXRoaXMuZGF0YWJhc2VSZWFkeVN1YmplY3QpIHtcclxuXHRcdFx0Ly8gZmlyc3QgdGltZSB0aGUgc2VydmljZSBpcyBjYWxsZWQuXHJcblx0XHRcdHRoaXMuZGF0YWJhc2VSZWFkeVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRcdFx0dGhpcy5yZXNldERiKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhYmFzZVJlYWR5U3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxyXG5cdFx0XHRmaXJzdCgocmVhZHk6IGJvb2xlYW4pID0+IHJlYWR5KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFByb2Nlc3MgUmVxdWVzdCBhbmQgcmV0dXJuIGFuIE9ic2VydmFibGUgb2YgSHR0cCBSZXNwb25zZSBvYmplY3RcclxuXHQgKiBpbiB0aGUgbWFubmVyIG9mIGEgUkVTVHkgd2ViIGFwaS5cclxuXHQgKlxyXG5cdCAqIEV4cGVjdCBVUkkgcGF0dGVybiBpbiB0aGUgZm9ybSA6YmFzZS86Y29sbGVjdGlvbk5hbWUvOmlkP1xyXG5cdCAqIEV4YW1wbGVzOlxyXG5cdCAqICAgLy8gZm9yIHN0b3JlIHdpdGggYSAnY3VzdG9tZXJzJyBjb2xsZWN0aW9uXHJcblx0ICogICBHRVQgYXBpL2N1c3RvbWVycyAgICAgICAgICAvLyBhbGwgY3VzdG9tZXJzXHJcblx0ICogICBHRVQgYXBpL2N1c3RvbWVycy80MiAgICAgICAvLyB0aGUgY2hhcmFjdGVyIHdpdGggaWQ9NDJcclxuXHQgKiAgIEdFVCBhcGkvY3VzdG9tZXJzP25hbWU9XmogIC8vICdqJyBpcyBhIHJlZ2V4OyByZXR1cm5zIGN1c3RvbWVycyB3aG9zZSBuYW1lIHN0YXJ0cyB3aXRoICdqJyBvciAnSidcclxuXHQgKiAgIEdFVCBhcGkvY3VzdG9tZXJzLmpzb24vNDIgIC8vIGlnbm9yZXMgdGhlIFwiLmpzb25cIlxyXG5cdCAqXHJcblx0ICogQWxzbyBhY2NlcHRzIGRpcmVjdCBjb21tYW5kcyB0byB0aGUgc2VydmljZSBpbiB3aGljaCB0aGUgbGFzdCBzZWdtZW50IG9mIHRoZSBhcGlCYXNlIGlzIHRoZSB3b3JkIFwiY29tbWFuZHNcIlxyXG5cdCAqIEV4YW1wbGVzOlxyXG5cdCAqICAgICBQT1NUIGNvbW1hbmRzL3Jlc2V0RGIsXHJcblx0ICogICAgIEdFVC9QT1NUIGNvbW1hbmRzL2NvbmZpZyAtIGdldCBvciAocmUpc2V0IHRoZSBjb25maWdcclxuXHQgKlxyXG5cdCAqICAgSFRUUCBvdmVycmlkZXM6XHJcblx0ICogICAgIElmIHRoZSBpbmplY3RlZCBkYXRhU2VydmljZSBkZWZpbmVzIGFuIEhUVFAgbWV0aG9kIChsb3dlcmNhc2UpXHJcblx0ICogICAgIFRoZSByZXF1ZXN0IGlzIGZvcndhcmRlZCB0byB0aGF0IG1ldGhvZCBhcyBpblxyXG5cdCAqICAgICBgZGF0YVNlcnZpY2UuZ2V0KG1lbW9yeVJlcXVlc3QpYFxyXG5cdCAqICAgICB3aGljaCBtdXN0IHJldHVybiBlaXRoZXIgYW4gT2JzZXJ2YWJsZSBvZiB0aGUgcmVzcG9uc2UgdHlwZVxyXG5cdCAqICAgICBmb3IgdGhpcyBodHRwIGxpYnJhcnkgb3IgbnVsbHx1bmRlZmluZWQgKHdoaWNoIG1lYW5zIFwia2VlcCBwcm9jZXNzaW5nXCIpLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBoYW5kbGVSZXF1ZXN0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Ly8gIGhhbmRsZSB0aGUgcmVxdWVzdCB3aGVuIHRoZXJlIGlzIGFuIGluLW1lbW9yeSBkYXRhYmFzZVxyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YWJhc2VSZWFkeS5waXBlKGNvbmNhdE1hcCgoKSA9PiB0aGlzLmhhbmRsZVJlcXVlc3RfKHJlcXVlc3QpKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgaGFuZGxlUmVxdWVzdF8ocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCB1cmwgPSByZXF1ZXN0LnVybFdpdGhQYXJhbXMgPyByZXF1ZXN0LnVybFdpdGhQYXJhbXMgOiByZXF1ZXN0LnVybDtcclxuXHRcdC8vIFRyeSBvdmVycmlkZSBwYXJzZXJcclxuXHRcdC8vIElmIG5vIG92ZXJyaWRlIHBhcnNlciBvciBpdCByZXR1cm5zIG5vdGhpbmcsIHVzZSBkZWZhdWx0IHBhcnNlclxyXG5cdFx0Ly8gY29uc3QgcGFyc2VyID0gdGhpcy5iaW5kKCdwYXJzZVJlcXVlc3RVcmwnKTtcclxuXHRcdC8vIGNvbnN0IHBhcnNlZDogUGFyc2VkUmVxdWVzdFVybCA9IChwYXJzZXIgJiYgcGFyc2VyKHVybCwgdGhpcykpIHx8IHRoaXMucGFyc2VSZXF1ZXN0VXJsKHVybCk7XHJcblx0XHRjb25zdCBwYXJzZWQ6IFBhcnNlZFJlcXVlc3RVcmwgPSB0aGlzLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xyXG5cdFx0Y29uc3QgY29sbGVjdGlvbk5hbWUgPSBwYXJzZWQuY29sbGVjdGlvbk5hbWU7XHJcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5kYXRhYmFzZVtjb2xsZWN0aW9uTmFtZV07XHJcblx0XHRjb25zdCBtZW1vcnlSZXF1ZXN0OiBNZW1vcnlSZXF1ZXN0ID0ge1xyXG5cdFx0XHRyZXF1ZXN0OiByZXF1ZXN0LFxyXG5cdFx0XHRib2R5OiByZXF1ZXN0LmJvZHksXHJcblx0XHRcdGFwaUJhc2U6IHBhcnNlZC5hcGlCYXNlLFxyXG5cdFx0XHRjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxyXG5cdFx0XHRjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWUsXHJcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXHJcblx0XHRcdGlkOiB0aGlzLnBhcnNlSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIHBhcnNlZC5pZCksXHJcblx0XHRcdG1ldGhvZDogKHJlcXVlc3QubWV0aG9kIHx8ICdnZXQnKS50b0xvd2VyQ2FzZSgpLFxyXG5cdFx0XHRxdWVyeTogcGFyc2VkLnF1ZXJ5LFxyXG5cdFx0XHRyZXNvdXJjZVVybDogcGFyc2VkLnJlc291cmNlVXJsLFxyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdH07XHJcblx0XHQvLyBJZiBgZGF0YVNlcnZpY2UucmVxdWVzdEludGVyY2VwdG9yYCBleGlzdHMsIGxldCBpdCBtb3JwaCB0aGUgcmVzcG9uc2Ugb3B0aW9uc1xyXG5cdFx0Y29uc3QgaW50ZXJjZXB0b3IgPSB0aGlzLmJpbmQoJ3JlcXVlc3RJbnRlcmNlcHRvcicpO1xyXG5cdFx0aWYgKC9jb21tYW5kc1xcLz8kL2kudGVzdChtZW1vcnlSZXF1ZXN0LmFwaUJhc2UpKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNvbW1hbmRzKG1lbW9yeVJlcXVlc3QpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgbWV0aG9kSW50ZXJjZXB0b3IgPSB0aGlzLmJpbmQobWVtb3J5UmVxdWVzdC5tZXRob2QpO1xyXG5cdFx0aWYgKG1ldGhvZEludGVyY2VwdG9yKSB7XHJcblx0XHRcdC8vIE1lbW9yeURhdGFTZXJ2aWNlIGludGVyY2VwdHMgdGhpcyBIVFRQIG1ldGhvZC5cclxuXHRcdFx0Ly8gaWYgaW50ZXJjZXB0b3IgcHJvZHVjZWQgYSByZXNwb25zZSwgcmV0dXJuIGl0LlxyXG5cdFx0XHQvLyBlbHNlIE1lbW9yeURhdGFTZXJ2aWNlIGNob3NlIG5vdCB0byBpbnRlcmNlcHQ7IGNvbnRpbnVlIHByb2Nlc3NpbmcuXHJcblx0XHRcdGNvbnN0IGludGVyY2VwdG9yUmVzcG9uc2UgPSBtZXRob2RJbnRlcmNlcHRvcihtZW1vcnlSZXF1ZXN0KTtcclxuXHRcdFx0aWYgKGludGVyY2VwdG9yUmVzcG9uc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gaW50ZXJjZXB0b3JSZXNwb25zZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gISEhXHJcblx0XHRsZXQgcmVzcG9uc2U6IE1lbW9yeVJlc3BvbnNlID0gaW50ZXJjZXB0b3IgPyBpbnRlcmNlcHRvcihtZW1vcnlSZXF1ZXN0LCB0aGlzKSA6IG51bGw7XHJcblx0XHRpZiAocmVzcG9uc2UpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHJlc3BvbnNlKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmRhdGFiYXNlW2NvbGxlY3Rpb25OYW1lXSkge1xyXG5cdFx0XHQvLyByZXF1ZXN0IGlzIGZvciBhIGtub3duIGNvbGxlY3Rpb24gb2YgdGhlIE1lbW9yeURhdGFTZXJ2aWNlXHJcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiB0aGlzLmNvbGxlY3Rpb25IYW5kbGVyKG1lbW9yeVJlcXVlc3QpKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmNvbmZpZy5wYXNzVGhydVVua25vd25VcmwpIHtcclxuXHRcdFx0Ly8gdW5rbm93biBjb2xsZWN0aW9uOyBwYXNzIHJlcXVlc3QgdGhydSB0byBhIFwicmVhbFwiIGJhY2tlbmQuXHJcblx0XHRcdHJldHVybiB0aGlzLmdldFBhc3NUaHJ1QmFja2VuZCgpLmhhbmRsZShyZXF1ZXN0KTtcclxuXHRcdH1cclxuXHRcdC8vIDQwNCAtIGNhbid0IGhhbmRsZSB0aGlzIHJlcXVlc3RcclxuXHRcdHJlc3BvbnNlID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgQ29sbGVjdGlvbiAnJHtjb2xsZWN0aW9uTmFtZX0nIG5vdCBmb3VuZGApO1xyXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHJlc3BvbnNlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBhcnNlcyB0aGUgcmVxdWVzdCBVUkwgaW50byBhIGBQYXJzZWRSZXF1ZXN0VXJsYCBvYmplY3QuXHJcblx0ICogUGFyc2luZyBkZXBlbmRzIHVwb24gY2VydGFpbiB2YWx1ZXMgb2YgYGNvbmZpZ2A6IGBhcGlCYXNlYCwgYGhvc3RgLCBhbmQgYHVybFJvb3RgLlxyXG5cdCAqXHJcblx0ICogQ29uZmlndXJpbmcgdGhlIGBhcGlCYXNlYCB5aWVsZHMgdGhlIG1vc3QgaW50ZXJlc3RpbmcgY2hhbmdlcyB0byBgcGFyc2VSZXF1ZXN0VXJsYCBiZWhhdmlvcjpcclxuXHQgKiAgIFdoZW4gYXBpQmFzZT11bmRlZmluZWQgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9hcGkvY29sbGVjdGlvbi80MidcclxuXHQgKiAgICAge2Jhc2U6ICdhcGkvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6ICc0MicsIC4uLn1cclxuXHQgKiAgIFdoZW4gYXBpQmFzZT0nc29tZS9hcGkvcm9vdC8nIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3Qvc29tZS9hcGkvcm9vdC9jb2xsZWN0aW9uJ1xyXG5cdCAqICAgICB7YmFzZTogJ3NvbWUvYXBpL3Jvb3QvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6IHVuZGVmaW5lZCwgLi4ufVxyXG5cdCAqICAgV2hlbiBhcGlCYXNlPScvJyBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L2NvbGxlY3Rpb24nXHJcblx0ICogICAgIHtiYXNlOiAnLycsIGNvbGxlY3Rpb25OYW1lOiAnY29sbGVjdGlvbicsIGlkOiB1bmRlZmluZWQsIC4uLn1cclxuXHQgKlxyXG5cdCAqIFRoZSBhY3R1YWwgYXBpIGJhc2Ugc2VnbWVudCB2YWx1ZXMgYXJlIGlnbm9yZWQuIE9ubHkgdGhlIG51bWJlciBvZiBzZWdtZW50cyBtYXR0ZXJzLlxyXG5cdCAqIFRoZSBmb2xsb3dpbmcgYXBpIGJhc2Ugc3RyaW5ncyBhcmUgY29uc2lkZXJlZCBpZGVudGljYWw6ICdhL2InIH4gJ3NvbWUvYXBpLycgfiBgdHdvL3NlZ21lbnRzJ1xyXG5cdCAqXHJcblx0ICogVG8gcmVwbGFjZSB0aGlzIGRlZmF1bHQgbWV0aG9kLCBhc3NpZ24geW91ciBhbHRlcm5hdGl2ZSB0byB5b3VyIE1lbW9yeURhdGFTZXJ2aWNlWydwYXJzZVJlcXVlc3RVcmwnXVxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBwYXJzZVJlcXVlc3RVcmwodXJsOiBzdHJpbmcpOiBQYXJzZWRSZXF1ZXN0VXJsIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGxvY2F0aW9uID0gdGhpcy5nZXRMb2NhdGlvbih1cmwpO1xyXG5cdFx0XHRsZXQgZHJvcCA9IHRoaXMuY29uZmlnLnJvb3RQYXRoLmxlbmd0aDtcclxuXHRcdFx0bGV0IHVybFJvb3QgPSAnJztcclxuXHRcdFx0aWYgKGxvY2F0aW9uLmhvc3QgIT09IHRoaXMuY29uZmlnLmhvc3QpIHtcclxuXHRcdFx0XHQvLyB1cmwgZm9yIGEgc2VydmVyIG9uIGEgZGlmZmVyZW50IGhvc3QhXHJcblx0XHRcdFx0Ly8gYXNzdW1lIGl0J3MgY29sbGVjdGlvbiBpcyBhY3R1YWxseSBoZXJlIHRvby5cclxuXHRcdFx0XHRkcm9wID0gMTsgLy8gdGhlIGxlYWRpbmcgc2xhc2hcclxuXHRcdFx0XHR1cmxSb290ID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvJztcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBwYXRoID0gbG9jYXRpb24ucGF0aC5zdWJzdHJpbmcoZHJvcCk7XHJcblx0XHRcdGNvbnN0IHBhdGhTZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKTtcclxuXHRcdFx0bGV0IHNlZ21lbnRJeCA9IDA7XHJcblx0XHRcdC8vIGFwaUJhc2U6IHRoZSBmcm9udCBwYXJ0IG9mIHRoZSBwYXRoIGRldm90ZWQgdG8gZ2V0dGluZyB0byB0aGUgYXBpIHJvdXRlXHJcblx0XHRcdC8vIEFzc3VtZXMgZmlyc3QgcGF0aCBzZWdtZW50IGlmIG5vIGNvbmZpZy5hcGlCYXNlXHJcblx0XHRcdC8vIGVsc2UgaWdub3JlcyBhcyBtYW55IHBhdGggc2VnbWVudHMgYXMgYXJlIGluIGNvbmZpZy5hcGlCYXNlXHJcblx0XHRcdC8vIERvZXMgTk9UIGNhcmUgd2hhdCB0aGUgYXBpIGJhc2UgY2hhcnMgYWN0dWFsbHkgYXJlLlxyXG5cdFx0XHRsZXQgYXBpQmFzZTogc3RyaW5nO1xyXG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG5cdFx0XHRpZiAodGhpcy5jb25maWcuYXBpQmFzZSA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRhcGlCYXNlID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhcGlCYXNlID0gcmVtb3ZlVHJhaWxpbmdTbGFzaCh0aGlzLmNvbmZpZy5hcGlCYXNlLnRyaW0oKSk7XHJcblx0XHRcdFx0aWYgKGFwaUJhc2UpIHtcclxuXHRcdFx0XHRcdHNlZ21lbnRJeCA9IGFwaUJhc2Uuc3BsaXQoJy8nKS5sZW5ndGg7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNlZ21lbnRJeCA9IDA7IC8vIG5vIGFwaSBiYXNlIGF0IGFsbDsgdW53aXNlIGJ1dCBhbGxvd2VkLlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRhcGlCYXNlICs9ICcvJztcclxuXHRcdFx0bGV0IGNvbGxlY3Rpb25OYW1lID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcclxuXHRcdFx0Ly8gaWdub3JlIGFueXRoaW5nIGFmdGVyIGEgJy4nIChlLmcuLHRoZSBcImpzb25cIiBpbiBcImN1c3RvbWVycy5qc29uXCIpXHJcblx0XHRcdGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWUgJiYgY29sbGVjdGlvbk5hbWUuc3BsaXQoJy4nKVswXTtcclxuXHRcdFx0Y29uc3QgaWQgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xyXG5cdFx0XHRjb25zdCBxdWVyeSA9IHRoaXMuY3JlYXRlUXVlcnlNYXAobG9jYXRpb24ucXVlcnkpO1xyXG5cdFx0XHRjb25zdCByZXNvdXJjZVVybCA9IHVybFJvb3QgKyBhcGlCYXNlICsgY29sbGVjdGlvbk5hbWUgKyAnLyc7XHJcblx0XHRcdHJldHVybiB7IGFwaUJhc2UsIGNvbGxlY3Rpb25OYW1lLCBpZCwgcXVlcnksIHJlc291cmNlVXJsIH07XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zdCBtZXNzYWdlID0gYHVuYWJsZSB0byBwYXJzZSB1cmwgJyR7dXJsfSc7IG9yaWdpbmFsIGVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YDtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqIFBhcnNlIHRoZSBpZCBhcyBhIG51bWJlci4gUmV0dXJuIG9yaWdpbmFsIHZhbHVlIGlmIG5vdCBhIG51bWJlci4gKi9cclxuXHRwcm90ZWN0ZWQgcGFyc2VJZChjb2xsZWN0aW9uOiBhbnlbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZywgaWQ6IHN0cmluZyk6IGFueSB7XHJcblx0XHRpZiAoIXRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSkge1xyXG5cdFx0XHQvLyBDYW4ndCBjb25maXJtIHRoYXQgYGlkYCBpcyBhIG51bWVyaWMgdHlwZTsgZG9uJ3QgcGFyc2UgYXMgYSBudW1iZXJcclxuXHRcdFx0Ly8gb3IgZWxzZSBgJzQyJ2AgLT4gYDQyYCBhbmQgX2dldCBieSBpZF8gZmFpbHMuXHJcblx0XHRcdHJldHVybiBpZDtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGlkTnVtID0gcGFyc2VGbG9hdChpZCk7XHJcblx0XHRyZXR1cm4gaXNOYU4oaWROdW0pID8gaWQgOiBpZE51bTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCBjb25maWd1cmVkIGRlbGF5IHRvIHJlc3BvbnNlIG9ic2VydmFibGUgdW5sZXNzIGRlbGF5ID09PSAwXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGFkZERlbGF5KHJlc3BvbnNlOiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgZGVsYXkgPSB0aGlzLmNvbmZpZy5kZWxheTtcclxuXHRcdHJldHVybiBkZWxheSA9PT0gMCA/IHJlc3BvbnNlIDogZGVsYXlSZXNwb25zZShyZXNwb25zZSwgZGVsYXkgfHwgNTAwKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFwcGx5IHF1ZXJ5L3NlYXJjaCBwYXJhbWV0ZXJzIGFzIGEgZmlsdGVyIG92ZXIgdGhlIGNvbGxlY3Rpb25cclxuXHQgKiBUaGlzIGltcGwgb25seSBzdXBwb3J0cyBSZWdFeHAgcXVlcmllcyBvbiBzdHJpbmcgcHJvcGVydGllcyBvZiB0aGUgY29sbGVjdGlvblxyXG5cdCAqIEFORHMgdGhlIGNvbmRpdGlvbnMgdG9nZXRoZXJcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgYXBwbHlRdWVyeShjb2xsZWN0aW9uOiBhbnlbXSwgcXVlcnk6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPik6IGFueVtdIHtcclxuXHRcdC8vIGV4dHJhY3QgZmlsdGVyaW5nIGNvbmRpdGlvbnMgLSB7cHJvcGVydHlOYW1lLCBSZWdFeHBzKSAtIGZyb20gcXVlcnkvc2VhcmNoIHBhcmFtZXRlcnNcclxuXHRcdGNvbnN0IGNvbmRpdGlvbnM6IHsgbmFtZTogc3RyaW5nLCByZWdleHA6IFJlZ0V4cCB9W10gPSBbXTtcclxuXHRcdGNvbnN0IGNhc2VTZW5zaXRpdmUgPSB0aGlzLmNvbmZpZy5jYXNlU2Vuc2l0aXZlU2VhcmNoID8gdW5kZWZpbmVkIDogJ2knO1xyXG5cdFx0cXVlcnkuZm9yRWFjaCgodmFsdWU6IHN0cmluZ1tdLCBuYW1lOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0dmFsdWUuZm9yRWFjaCh4ID0+IGNvbmRpdGlvbnMucHVzaCh7XHJcblx0XHRcdFx0bmFtZSxcclxuXHRcdFx0XHRyZWdleHA6IG5ldyBSZWdFeHAoZGVjb2RlVVJJKHgpLCBjYXNlU2Vuc2l0aXZlKVxyXG5cdFx0XHR9KSk7XHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IGxlbmd0aCA9IGNvbmRpdGlvbnMubGVuZ3RoO1xyXG5cdFx0aWYgKCFsZW5ndGgpIHtcclxuXHRcdFx0cmV0dXJuIGNvbGxlY3Rpb247XHJcblx0XHR9XHJcblx0XHQvLyBBTkQgdGhlIFJlZ0V4cCBjb25kaXRpb25zXHJcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5maWx0ZXIocm93ID0+IHtcclxuXHRcdFx0bGV0IGhhcyA9IHRydWU7XHJcblx0XHRcdGxldCBpID0gbGVuZ3RoO1xyXG5cdFx0XHR3aGlsZSAoaGFzICYmIGkpIHtcclxuXHRcdFx0XHRpIC09IDE7XHJcblx0XHRcdFx0Y29uc3QgY29uZCA9IGNvbmRpdGlvbnNbaV07XHJcblx0XHRcdFx0aGFzID0gY29uZC5yZWdleHAudGVzdChyb3dbY29uZC5uYW1lXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGhhcztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGEgbWV0aG9kIGZyb20gdGhlIGBNZW1vcnlEYXRhU2VydmljZWAgKGlmIGl0IGV4aXN0cyksIGJvdW5kIHRvIHRoYXQgc2VydmljZVxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBiaW5kPFQgZXh0ZW5kcyBGdW5jdGlvbj4obWV0aG9kTmFtZTogc3RyaW5nKSB7XHJcblx0XHRjb25zdCBtZXRob2QgPSB0aGlzLmRhdGFTZXJ2aWNlW21ldGhvZE5hbWVdIGFzIFQ7XHJcblx0XHRyZXR1cm4gbWV0aG9kID8gPFQ+bWV0aG9kLmJpbmQodGhpcy5kYXRhU2VydmljZSkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYm9kaWZ5KGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRhdGFFbmNhcHN1bGF0aW9uID8geyBkYXRhIH0gOiBkYXRhO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGNsb25lKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGNvbGxlY3Rpb25IYW5kbGVyKHJlcXVlc3Q6IE1lbW9yeVJlcXVlc3QpOiBNZW1vcnlSZXNwb25zZSB7XHJcblx0XHQvLyBjb25zdCByZXF1ZXN0ID0gcmVxdWVzdC5yZXF1ZXN0O1xyXG5cdFx0bGV0IHJlc3BvbnNlOiBNZW1vcnlSZXNwb25zZTtcclxuXHRcdHN3aXRjaCAocmVxdWVzdC5tZXRob2QpIHtcclxuXHRcdFx0Y2FzZSAnZ2V0JzpcclxuXHRcdFx0XHRyZXNwb25zZSA9IHRoaXMuZ2V0KHJlcXVlc3QpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdwb3N0JzpcclxuXHRcdFx0XHRyZXNwb25zZSA9IHRoaXMucG9zdChyZXF1ZXN0KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAncHV0JzpcclxuXHRcdFx0XHRyZXNwb25zZSA9IHRoaXMucHV0KHJlcXVlc3QpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdkZWxldGUnOlxyXG5cdFx0XHRcdHJlc3BvbnNlID0gdGhpcy5kZWxldGUocmVxdWVzdCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmVzcG9uc2UgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UocmVxdWVzdC51cmwsIFNUQVRVU19DT0RFLk1FVEhPRF9OT1RfQUxMT1dFRCwgJ01ldGhvZCBub3QgYWxsb3dlZCcpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Ly8gSWYgYGRhdGFTZXJ2aWNlLnJlc3BvbnNlSW50ZXJjZXB0b3JgIGV4aXN0cywgbGV0IGl0IG1vcnBoIHRoZSByZXNwb25zZSBvcHRpb25zXHJcblx0XHRjb25zdCBpbnRlcmNlcHRvciA9IHRoaXMuYmluZCgncmVzcG9uc2VJbnRlcmNlcHRvcicpO1xyXG5cdFx0Ly8gISEhXHJcblx0XHRyZXR1cm4gaW50ZXJjZXB0b3IgPyBpbnRlcmNlcHRvcihyZXNwb25zZSwgcmVxdWVzdCkgOiByZXNwb25zZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjcmVhdGVFcnJvclJlc3BvbnNlKHVybDogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKTogTWVtb3J5UmVzcG9uc2Uge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdGVycm9yOiBgJHttZXNzYWdlfWAsXHJcblx0XHRcdH0sXHJcblx0XHRcdHVybDogdXJsLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHRcdFx0fSksXHJcblx0XHRcdHN0YXR1czogc3RhdHVzXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGEgY29sZCByZXNwb25zZSBPYnNlcnZhYmxlIGZyb20gYSBmYWN0b3J5IGZvciBNZW1vcnlSZXNwb25zZVxyXG5cdCAqIEBwYXJhbSBtZW1vcnlSZXNwb25zZUZhY3RvcnkgLSBjcmVhdGVzIE1lbW9yeVJlc3BvbnNlIHdoZW4gb2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkXHJcblx0ICogQHBhcmFtIHdpdGhEZWxheSAtIGlmIHRydWUgKGRlZmF1bHQpLCBhZGQgc2ltdWxhdGVkIGxhdGVuY3kgZGVsYXkgZnJvbSBjb25maWd1cmF0aW9uXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNyZWF0ZVJlc3BvbnNlJChtZW1vcnlSZXNwb25zZUZhY3Rvcnk6ICgpID0+IE1lbW9yeVJlc3BvbnNlLCB3aXRoRGVsYXkgPSB0cnVlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IG1lbW9yeVJlc3BvbnNlJCA9IHRoaXMuY3JlYXRlTWVtb3J5UmVzcG9uc2UkKG1lbW9yeVJlc3BvbnNlRmFjdG9yeSk7XHJcblx0XHRjb25zdCByZXNwb25zZSQgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlJGZyb21NZW1vcnlSZXNwb25zZSQobWVtb3J5UmVzcG9uc2UkKTtcclxuXHRcdHJldHVybiB3aXRoRGVsYXkgPyB0aGlzLmFkZERlbGF5KHJlc3BvbnNlJCkgOiByZXNwb25zZSQ7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSBjb2xkIE9ic2VydmFibGUgb2YgTWVtb3J5UmVzcG9uc2UuXHJcblx0ICogQHBhcmFtIG1lbW9yeVJlc3BvbnNlRmFjdG9yeSAtIGNyZWF0ZXMgTWVtb3J5UmVzcG9uc2Ugd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgY3JlYXRlTWVtb3J5UmVzcG9uc2UkKG1lbW9yeVJlc3BvbnNlRmFjdG9yeTogKCkgPT4gTWVtb3J5UmVzcG9uc2UpOiBPYnNlcnZhYmxlPE1lbW9yeVJlc3BvbnNlPiB7XHJcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGU8TWVtb3J5UmVzcG9uc2U+KChvYnNlcnZlcjogT2JzZXJ2ZXI8TWVtb3J5UmVzcG9uc2U+KSA9PiB7XHJcblx0XHRcdGxldCByZXNwb25zZTogTWVtb3J5UmVzcG9uc2U7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmVzcG9uc2UgPSBtZW1vcnlSZXNwb25zZUZhY3RvcnkoKTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRlcnJvciA9IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3I7XHJcblx0XHRcdFx0cmVzcG9uc2UgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UoJycsIFNUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgYCR7ZXJyb3J9YCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3Qgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJlc3BvbnNlLnN0YXR1c1RleHQgPSBnZXRTdGF0dXNUZXh0KHN0YXR1cyk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSBmYWlsdXJlICovIH1cclxuXHRcdFx0aWYgKGlzU3VjY2VzcyhzdGF0dXMpKSB7XHJcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dChyZXNwb25zZSk7XHJcblx0XHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvYnNlcnZlci5lcnJvcihyZXNwb25zZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuICgpID0+IHsgfTsgLy8gdW5zdWJzY3JpYmUgZnVuY3Rpb25cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRmluZCBmaXJzdCBpbnN0YW5jZSBvZiBpdGVtIGluIGNvbGxlY3Rpb24gYnkgYGl0ZW0uaWRgXHJcblx0ICogQHBhcmFtIGNvbGxlY3Rpb25cclxuXHQgKiBAcGFyYW0gaWRcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgZmluZEJ5SWQ8VCBleHRlbmRzIHsgaWQ6IGFueSB9Pihjb2xsZWN0aW9uOiBUW10sIGlkOiBhbnkpOiBUIHtcclxuXHRcdHJldHVybiBjb2xsZWN0aW9uLmZpbmQoKGl0ZW06IFQpID0+IGl0ZW0uaWQgPT09IGlkKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdlbmVyYXRlIHRoZSBuZXh0IGF2YWlsYWJsZSBpZCBmb3IgaXRlbSBpbiB0aGlzIGNvbGxlY3Rpb25cclxuXHQgKiBVc2UgbWV0aG9kIGZyb20gYGRhdGFTZXJ2aWNlYCBpZiBpdCBleGlzdHMgYW5kIHJldHVybnMgYSB2YWx1ZSxcclxuXHQgKiBlbHNlIGRlbGVnYXRlcyB0byBgZ2VuSWREZWZhdWx0YC5cclxuXHQgKiBAcGFyYW0gY29sbGVjdGlvbiAtIGNvbGxlY3Rpb24gb2YgaXRlbXMgd2l0aCBgaWRgIGtleSBwcm9wZXJ0eVxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBnZW5JZDxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IGFueSB7XHJcblx0XHRjb25zdCBnZW5JZCA9IHRoaXMuYmluZCgnZ2VuSWQnKTtcclxuXHRcdGlmIChnZW5JZCkge1xyXG5cdFx0XHRjb25zdCBpZCA9IGdlbklkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcclxuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuXHRcdFx0aWYgKGlkICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHJldHVybiBpZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuZ2VuSWREZWZhdWx0KGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERlZmF1bHQgZ2VuZXJhdG9yIG9mIHRoZSBuZXh0IGF2YWlsYWJsZSBpZCBmb3IgaXRlbSBpbiB0aGlzIGNvbGxlY3Rpb25cclxuXHQgKiBUaGlzIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gd29ya3Mgb25seSBmb3IgbnVtZXJpYyBpZHMuXHJcblx0ICogQHBhcmFtIGNvbGxlY3Rpb24gLSBjb2xsZWN0aW9uIG9mIGl0ZW1zIHdpdGggYGlkYCBrZXkgcHJvcGVydHlcclxuXHQgKiBAcGFyYW0gY29sbGVjdGlvbk5hbWUgLSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGdlbklkRGVmYXVsdDxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IGFueSB7XHJcblx0XHRpZiAoIXRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbGxlY3Rpb24gJyR7Y29sbGVjdGlvbk5hbWV9JyBpZCB0eXBlIGlzIG5vbi1udW1lcmljIG9yIHVua25vd24uIENhbiBvbmx5IGdlbmVyYXRlIG51bWVyaWMgaWRzLmApO1xyXG5cdFx0fVxyXG5cdFx0bGV0IG1heElkID0gMDtcclxuXHRcdGNvbGxlY3Rpb24ucmVkdWNlKChwcmV2OiBhbnksIGl0ZW06IGFueSkgPT4ge1xyXG5cdFx0XHRtYXhJZCA9IE1hdGgubWF4KG1heElkLCB0eXBlb2YgaXRlbS5pZCA9PT0gJ251bWJlcicgPyBpdGVtLmlkIDogbWF4SWQpO1xyXG5cdFx0fSwgdW5kZWZpbmVkKTtcclxuXHRcdHJldHVybiBtYXhJZCArIDE7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgbG9jYXRpb24gaW5mbyBmcm9tIGEgdXJsLCBldmVuIG9uIHNlcnZlciB3aGVyZSBgZG9jdW1lbnRgIGlzIG5vdCBkZWZpbmVkXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGdldExvY2F0aW9uKHVybDogc3RyaW5nKTogVXJpSW5mbyB7XHJcblx0XHRpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwJykpIHtcclxuXHRcdFx0Ly8gZ2V0IHRoZSBkb2N1bWVudCBpZiBydW5uaW5nIGluIGJyb3dzZXJcclxuXHRcdFx0Y29uc3QgZG9jdW1lbnRfOiBEb2N1bWVudCA9ICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSA/IHVuZGVmaW5lZCA6IGRvY3VtZW50O1xyXG5cdFx0XHQvLyBhZGQgaG9zdCBpbmZvIHRvIHVybCBiZWZvcmUgcGFyc2luZy4gIFVzZSBhIGZha2UgaG9zdCB3aGVuIG5vdCBpbiBicm93c2VyLlxyXG5cdFx0XHRjb25zdCBiYXNlID0gZG9jdW1lbnRfID8gZG9jdW1lbnRfLmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGRvY3VtZW50Xy5sb2NhdGlvbi5ob3N0IDogJ2h0dHA6Ly9mYWtlJztcclxuXHRcdFx0dXJsID0gdXJsLnN0YXJ0c1dpdGgoJy8nKSA/IGJhc2UgKyB1cmwgOiBiYXNlICsgJy8nICsgdXJsO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBhcnNlVXJpKHVybCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBnZXQgb3IgY3JlYXRlIHRoZSBmdW5jdGlvbiB0aGF0IHBhc3NlcyB1bmhhbmRsZWQgcmVxdWVzdHNcclxuXHQgKiB0aHJvdWdoIHRvIHRoZSBcInJlYWxcIiBiYWNrZW5kLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBnZXRQYXNzVGhydUJhY2tlbmQoKTogUGFzc1RocnVCYWNrZW5kIHtcclxuXHRcdHJldHVybiB0aGlzLnBhc3NUaHJ1QmFja2VuZCA/IHRoaXMucGFzc1RocnVCYWNrZW5kIDogdGhpcy5wYXNzVGhydUJhY2tlbmQgPSB0aGlzLmNyZWF0ZVBhc3NUaHJ1QmFja2VuZCgpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGluZGV4T2YoY29sbGVjdGlvbjogYW55W10sIGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBjb2xsZWN0aW9uLmZpbmRJbmRleCgoaXRlbTogYW55KSA9PiBpdGVtLmlkID09PSBpZCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiByZXR1cm4gdHJ1ZSBpZiBjYW4gZGV0ZXJtaW5lIHRoYXQgdGhlIGNvbGxlY3Rpb24ncyBgaXRlbS5pZGAgaXMgYSBudW1iZXJcclxuXHQgKiBUaGlzIGltcGxlbWVudGF0aW9uIGNhbid0IHRlbGwgaWYgdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkgc28gaXQgYXNzdW1lcyBOT1xyXG5cdCAqICovXHJcblx0cHJvdGVjdGVkIGlzQ29sbGVjdGlvbklkTnVtZXJpYzxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0Ly8gY29sbGVjdGlvbk5hbWUgbm90IHVzZWQgbm93IGJ1dCBvdmVycmlkZSBtaWdodCBtYWludGFpbiBjb2xsZWN0aW9uIHR5cGUgaW5mb3JtYXRpb25cclxuXHRcdC8vIHNvIHRoYXQgaXQgY291bGQga25vdyB0aGUgdHlwZSBvZiB0aGUgYGlkYCBldmVuIHdoZW4gdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkuXHJcblx0XHQvLyByZXR1cm4gISEoY29sbGVjdGlvbiAmJiBjb2xsZWN0aW9uWzBdKSAmJiB0eXBlb2YgY29sbGVjdGlvblswXS5pZCA9PT0gJ251bWJlcic7XHJcblx0XHRyZXR1cm4gISEoY29sbGVjdGlvbiAmJiBjb2xsZWN0aW9uWzBdKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCByZW1vdmVCeUlkKGNvbGxlY3Rpb246IGFueVtdLCBpZDogbnVtYmVyKSB7XHJcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuaW5kZXhPZihjb2xsZWN0aW9uLCBpZCk7XHJcblx0XHRpZiAoaW5kZXggPiAtMSkge1xyXG5cdFx0XHRjb2xsZWN0aW9uLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGVsbCB5b3VyIGluLW1lbSBcImRhdGFiYXNlXCIgdG8gcmVzZXQuXHJcblx0ICogcmV0dXJucyBPYnNlcnZhYmxlIG9mIHRoZSBkYXRhYmFzZSBiZWNhdXNlIHJlc2V0dGluZyBpdCBjb3VsZCBiZSBhc3luY1xyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCByZXNldERiKHJlcXVlc3Q/OiBNZW1vcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcblx0XHR0aGlzLmRhdGFiYXNlUmVhZHlTdWJqZWN0Lm5leHQoZmFsc2UpO1xyXG5cdFx0Y29uc3QgZGF0YWJhc2UgPSB0aGlzLmRhdGFTZXJ2aWNlLmNyZWF0ZURiKHJlcXVlc3QpO1xyXG5cdFx0Y29uc3QgZGF0YWJhc2UkID0gZGF0YWJhc2UgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZGF0YWJhc2UgOlxyXG5cdFx0XHR0eXBlb2YgKGRhdGFiYXNlIGFzIGFueSkudGhlbiA9PT0gJ2Z1bmN0aW9uJyA/IGZyb20oZGF0YWJhc2UgYXMgUHJvbWlzZTxhbnk+KSA6XHJcblx0XHRcdFx0b2YoZGF0YWJhc2UpO1xyXG5cdFx0ZGF0YWJhc2UkLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKChkYXRhYmFzZToge30pID0+IHtcclxuXHRcdFx0dGhpcy5kYXRhYmFzZSA9IGRhdGFiYXNlO1xyXG5cdFx0XHR0aGlzLmRhdGFiYXNlUmVhZHlTdWJqZWN0Lm5leHQodHJ1ZSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiB0aGlzLmRhdGFiYXNlUmVhZHk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDb21tYW5kcyByZWNvbmZpZ3VyZSB0aGUgaW4tbWVtb3J5IHdlYiBhcGkgc2VydmljZSBvciBleHRyYWN0IGluZm9ybWF0aW9uIGZyb20gaXQuXHJcblx0ICogQ29tbWFuZHMgaWdub3JlIHRoZSBsYXRlbmN5IGRlbGF5IGFuZCByZXNwb25kIEFTQVAuXHJcblx0ICpcclxuXHQgKiBXaGVuIHRoZSBsYXN0IHNlZ21lbnQgb2YgdGhlIGBhcGlCYXNlYCBwYXRoIGlzIFwiY29tbWFuZHNcIixcclxuXHQgKiB0aGUgYGNvbGxlY3Rpb25OYW1lYCBpcyB0aGUgY29tbWFuZC5cclxuXHQgKlxyXG5cdCAqIEV4YW1wbGUgVVJMczpcclxuXHQgKiAgIGNvbW1hbmRzL3Jlc2V0ZGIgKFBPU1QpIC8vIFJlc2V0IHRoZSBcImRhdGFiYXNlXCIgdG8gaXRzIG9yaWdpbmFsIHN0YXRlXHJcblx0ICogICBjb21tYW5kcy9jb25maWcgKEdFVCkgICAvLyBSZXR1cm4gdGhpcyBzZXJ2aWNlJ3MgY29uZmlnIG9iamVjdFxyXG5cdCAqICAgY29tbWFuZHMvY29uZmlnIChQT1NUKSAgLy8gVXBkYXRlIHRoZSBjb25maWcgKGUuZy4gdGhlIGRlbGF5KVxyXG5cdCAqXHJcblx0ICogVXNhZ2U6XHJcblx0ICogICBodHRwLnBvc3QoJ2NvbW1hbmRzL3Jlc2V0ZGInLCB1bmRlZmluZWQpO1xyXG5cdCAqICAgaHR0cC5nZXQoJ2NvbW1hbmRzL2NvbmZpZycpO1xyXG5cdCAqICAgaHR0cC5wb3N0KCdjb21tYW5kcy9jb25maWcnLCAne1wiZGVsYXlcIjoxMDAwfScpO1xyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBjb21tYW5kcyhyZXF1ZXN0OiBNZW1vcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IGNvbW1hbmQgPSByZXF1ZXN0LmNvbGxlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRjb25zdCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZDtcclxuXHRcdGxldCByZXNwb25zZTogTWVtb3J5UmVzcG9uc2UgPSB7XHJcblx0XHRcdHVybDogcmVxdWVzdC51cmxcclxuXHRcdH07XHJcblx0XHRzd2l0Y2ggKGNvbW1hbmQpIHtcclxuXHRcdFx0Y2FzZSAncmVzZXRkYic6XHJcblx0XHRcdFx0cmVzcG9uc2Uuc3RhdHVzID0gU1RBVFVTX0NPREUuTk9fQ09OVEVOVDtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5yZXNldERiKHJlcXVlc3QpLnBpcGUoXHJcblx0XHRcdFx0XHRjb25jYXRNYXAoKCkgPT4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gcmVzcG9uc2UsIGZhbHNlIC8qIG5vIGxhdGVuY3kgZGVsYXkgKi8pKVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdGNhc2UgJ2NvbmZpZyc6XHJcblx0XHRcdFx0aWYgKG1ldGhvZCA9PT0gJ2dldCcpIHtcclxuXHRcdFx0XHRcdHJlc3BvbnNlLnN0YXR1cyA9IFNUQVRVU19DT0RFLk9LO1xyXG5cdFx0XHRcdFx0cmVzcG9uc2UuYm9keSA9IHRoaXMuY2xvbmUodGhpcy5jb25maWcpO1xyXG5cdFx0XHRcdFx0Ly8gYW55IG90aGVyIEhUVFAgbWV0aG9kIGlzIGFzc3VtZWQgdG8gYmUgYSBjb25maWcgdXBkYXRlXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnN0IGJvZHkgPSByZXF1ZXN0LnJlcXVlc3QuYm9keTtcclxuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGJvZHkpO1xyXG5cdFx0XHRcdFx0dGhpcy5wYXNzVGhydUJhY2tlbmQgPSB1bmRlZmluZWQ7IC8vIHJlLWNyZWF0ZSB3aGVuIG5lZWRlZFxyXG5cdFx0XHRcdFx0cmVzcG9uc2Uuc3RhdHVzID0gU1RBVFVTX0NPREUuTk9fQ09OVEVOVDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmVzcG9uc2UgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UocmVxdWVzdC51cmwsIFNUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgYFVua25vd24gY29tbWFuZCBcIiR7Y29tbWFuZH1cImApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHJlc3BvbnNlLCBmYWxzZSAvKiBubyBsYXRlbmN5IGRlbGF5ICovKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBnZXQoeyBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaGVhZGVycywgaWQsIHF1ZXJ5LCB1cmwgfTogTWVtb3J5UmVxdWVzdCk6IE1lbW9yeVJlc3BvbnNlIHtcclxuXHRcdGxldCBkYXRhID0gY29sbGVjdGlvbjtcclxuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXHJcblx0XHRpZiAoaWQgIT0gdW5kZWZpbmVkICYmIGlkICE9PSAnJykge1xyXG5cdFx0XHRkYXRhID0gdGhpcy5maW5kQnlJZChjb2xsZWN0aW9uLCBpZCk7XHJcblx0XHRcdGlmICghZGF0YSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5OT1RfRk9VTkQsIGAnJHtjb2xsZWN0aW9uTmFtZX0nIHdpdGggaWQ9JyR7aWR9JyBub3QgZm91bmRgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChxdWVyeSkge1xyXG5cdFx0XHRkYXRhID0gdGhpcy5hcHBseVF1ZXJ5KGNvbGxlY3Rpb24sIHF1ZXJ5KTtcclxuXHRcdFx0aWYgKCFkYXRhLmxlbmd0aCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5OT1RfRk9VTkQsIGAnJHtjb2xsZWN0aW9uTmFtZX0nIHdpdGggaWQ9JyR7aWR9JyBub3QgZm91bmRgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Ym9keTogdGhpcy5ib2RpZnkodGhpcy5jbG9uZShkYXRhKSksXHJcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXHJcblx0XHRcdHN0YXR1czogU1RBVFVTX0NPREUuT0tcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGUgZW50aXR5XHJcblx0Ly8gQ2FuIHVwZGF0ZSBhbiBleGlzdGluZyBlbnRpdHkgdG9vIGlmIHBvc3Q0MDkgaXMgZmFsc2UuXHJcblx0cHJvdGVjdGVkIHBvc3QoeyBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaGVhZGVycywgaWQsIHJlcXVlc3QsIHJlc291cmNlVXJsLCB1cmwgfTogTWVtb3J5UmVxdWVzdCk6IE1lbW9yeVJlc3BvbnNlIHtcclxuXHRcdGNvbnN0IHJlcXVlc3RCb2R5ID0gcmVxdWVzdC5ib2R5O1xyXG5cdFx0Y29uc3QgaXRlbTogYW55ID0gdGhpcy5jbG9uZShyZXF1ZXN0Qm9keSk7XHJcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG5cdFx0aWYgKGl0ZW0uaWQgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aXRlbS5pZCA9IGlkIHx8IHRoaXMuZ2VuSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdGNvbnN0IG1lc3NhZ2U6IHN0cmluZyA9IGVycm9yLm1lc3NhZ2UgfHwgJyc7XHJcblx0XHRcdFx0aWYgKC9pZCB0eXBlIGlzIG5vbi1udW1lcmljLy50ZXN0KG1lc3NhZ2UpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuVU5QUk9DRVNTQUJMRV9FTlRSWSwgbWVzc2FnZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgYEZhaWxlZCB0byBnZW5lcmF0ZSBuZXcgaWQgZm9yICcke2NvbGxlY3Rpb25OYW1lfSdgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChpZCAmJiBpZCAhPT0gaXRlbS5pZCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuQkFEX1JFUVVFU1QsIGBSZXF1ZXN0IGlkIGRvZXMgbm90IG1hdGNoIGl0ZW0uaWRgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlkID0gaXRlbS5pZDtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGV4aXN0aW5nSXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xyXG5cdFx0Y29uc3QgYm9keSA9IHRoaXMuYm9kaWZ5KGl0ZW0pO1xyXG5cdFx0aWYgKGV4aXN0aW5nSXggPT09IC0xKSB7XHJcblx0XHRcdGNvbGxlY3Rpb24ucHVzaChpdGVtKTtcclxuXHRcdFx0aGVhZGVycy5zZXQoJ0xvY2F0aW9uJywgcmVzb3VyY2VVcmwgKyAnLycgKyBpZCk7XHJcblx0XHRcdHJldHVybiB7IGhlYWRlcnMsIGJvZHksIHN0YXR1czogU1RBVFVTX0NPREUuQ1JFQVRFRCB9O1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvbmZpZy5wb3N0NDA5KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5DT05GTElDVCwgYCcke2NvbGxlY3Rpb25OYW1lfScgaXRlbSB3aXRoIGlkPScke2lkfSBleGlzdHMgYW5kIG1heSBub3QgYmUgdXBkYXRlZCB3aXRoIFBPU1Q7IHVzZSBQVVQgaW5zdGVhZC5gKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbGxlY3Rpb25bZXhpc3RpbmdJeF0gPSBpdGVtO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb25maWcucG9zdDIwNCA/XHJcblx0XHRcdFx0eyBoZWFkZXJzLCBzdGF0dXM6IFNUQVRVU19DT0RFLk5PX0NPTlRFTlQgfSA6IC8vIHN1Y2Nlc3NmdWw7IG5vIGNvbnRlbnRcclxuXHRcdFx0XHR7IGhlYWRlcnMsIGJvZHksIHN0YXR1czogU1RBVFVTX0NPREUuT0sgfTsgLy8gc3VjY2Vzc2Z1bDsgcmV0dXJuIGVudGl0eVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gVXBkYXRlIGV4aXN0aW5nIGVudGl0eVxyXG5cdC8vIENhbiBjcmVhdGUgYW4gZW50aXR5IHRvbyBpZiBwdXQ0MDQgaXMgZmFsc2UuXHJcblx0cHJvdGVjdGVkIHB1dCh7IGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzLCBpZCwgcmVxdWVzdCwgdXJsIH06IE1lbW9yeVJlcXVlc3QpOiBNZW1vcnlSZXNwb25zZSB7XHJcblx0XHRjb25zdCBpdGVtID0gdGhpcy5jbG9uZShyZXF1ZXN0LmJvZHkpO1xyXG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuXHRcdGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgTWlzc2luZyAnJHtjb2xsZWN0aW9uTmFtZX0nIGlkYCk7XHJcblx0XHR9XHJcblx0XHRpZiAoaWQgJiYgaWQgIT09IGl0ZW0uaWQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLkJBRF9SRVFVRVNULCBgUmVxdWVzdCBmb3IgJyR7Y29sbGVjdGlvbk5hbWV9JyBpZCBkb2VzIG5vdCBtYXRjaCBpdGVtLmlkYCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZCA9IGl0ZW0uaWQ7XHJcblx0XHR9XHJcblx0XHRjb25zdCBleGlzdGluZ0l4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcclxuXHRcdGNvbnN0IGJvZHkgPSB0aGlzLmJvZGlmeShpdGVtKTtcclxuXHRcdGlmIChleGlzdGluZ0l4ID4gLTEpIHtcclxuXHRcdFx0Y29sbGVjdGlvbltleGlzdGluZ0l4XSA9IGl0ZW07XHJcblx0XHRcdHJldHVybiB0aGlzLmNvbmZpZy5wdXQyMDQgP1xyXG5cdFx0XHRcdHsgaGVhZGVycywgc3RhdHVzOiBTVEFUVVNfQ09ERS5OT19DT05URU5UIH0gOiAvLyBzdWNjZXNzZnVsOyBubyBjb250ZW50XHJcblx0XHRcdFx0eyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVU19DT0RFLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb25maWcucHV0NDA0KSB7XHJcblx0XHRcdC8vIGl0ZW0gdG8gdXBkYXRlIG5vdCBmb3VuZDsgdXNlIFBPU1QgdG8gY3JlYXRlIG5ldyBpdGVtIGZvciB0aGlzIGlkLlxyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgJyR7Y29sbGVjdGlvbk5hbWV9JyBpdGVtIHdpdGggaWQ9JyR7aWR9IG5vdCBmb3VuZCBhbmQgbWF5IG5vdCBiZSBjcmVhdGVkIHdpdGggUFVUOyB1c2UgUE9TVCBpbnN0ZWFkLmApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gY3JlYXRlIG5ldyBpdGVtIGZvciBpZCBub3QgZm91bmRcclxuXHRcdFx0Y29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRyZXR1cm4geyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVU19DT0RFLkNSRUFURUQgfTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBkZWxldGUoeyBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaGVhZGVycywgaWQsIHVybCB9OiBNZW1vcnlSZXF1ZXN0KTogTWVtb3J5UmVzcG9uc2Uge1xyXG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuXHRcdGlmIChpZCA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLk5PVF9GT1VORCwgYE1pc3NpbmcgXCIke2NvbGxlY3Rpb25OYW1lfVwiIGlkYCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBleGlzdHMgPSB0aGlzLnJlbW92ZUJ5SWQoY29sbGVjdGlvbiwgaWQpO1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcclxuXHRcdFx0c3RhdHVzOiAoZXhpc3RzIHx8ICF0aGlzLmNvbmZpZy5kZWxldGU0MDQpID8gU1RBVFVTX0NPREUuTk9fQ09OVEVOVCA6IFNUQVRVU19DT0RFLk5PVF9GT1VORFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdC8vLy8vLy9cclxuXHJcblxyXG5cdGhhbmRsZShyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdChyZXF1ZXN0KTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHJlcXVlc3QudXJsLCBTVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGAke2Vycm9yLm1lc3NhZ2UgfHwgZXJyb3J9YCk7XHJcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNwb25zZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgY3JlYXRlUXVlcnlNYXAoc2VhcmNoOiBzdHJpbmcpOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT4ge1xyXG5cdFx0Y29uc3QgbWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPigpO1xyXG5cdFx0aWYgKHNlYXJjaCkge1xyXG5cdFx0XHRjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGZyb21TdHJpbmc6IHNlYXJjaCB9KTtcclxuXHRcdFx0cGFyYW1zLmtleXMoKS5mb3JFYWNoKHAgPT4gbWFwLnNldChwLCBwYXJhbXMuZ2V0QWxsKHApKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbWFwO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGNyZWF0ZVJlc3BvbnNlJGZyb21NZW1vcnlSZXNwb25zZSQocmVzcG9uc2UkOiBPYnNlcnZhYmxlPE1lbW9yeVJlc3BvbnNlPik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcclxuXHRcdHJldHVybiByZXNwb25zZSQucGlwZShcclxuXHRcdFx0bWFwKChvcHRpb25zOiBIdHRwUmVzcG9uc2VCYXNlKSA9PiBuZXcgSHR0cFJlc3BvbnNlPGFueT4ob3B0aW9ucykpLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBjcmVhdGVQYXNzVGhydUJhY2tlbmQoKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEh0dHBYaHJCYWNrZW5kKHRoaXMuZmFjdG9yeSk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRlcnJvci5tZXNzYWdlID0gJ0Nhbm5vdCBjcmVhdGUgcGFzc1RocnU0MDQgYmFja2VuZDsgJyArIChlcnJvci5tZXNzYWdlIHx8ICcnKTtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=