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
var BackendService = /** @class */ (function () {
    function BackendService(dataService, config, factory) {
        if (config === void 0) { config = {}; }
        this.dataService = dataService;
        this.factory = factory;
        this.config = new MemoryBackendConfig();
        /** @type {?} */
        var location = this.getLocation('/');
        this.config.host = location.host; // default to app web server host
        this.config.rootPath = location.path; // default to path when app is served (e.g.'/')
        Object.assign(this.config, config);
    }
    Object.defineProperty(BackendService.prototype, "databaseReady", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            if (!this.databaseReadySubject) {
                // first time the service is called.
                this.databaseReadySubject = new BehaviorSubject(false);
                this.resetDb();
            }
            return this.databaseReadySubject.asObservable().pipe(first(function (ready) { return ready; }));
        },
        enumerable: true,
        configurable: true
    });
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
     */
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
    BackendService.prototype.handleRequest = /**
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
    function (request) {
        var _this = this;
        //  handle the request when there is an in-memory database
        return this.databaseReady.pipe(concatMap(function () { return _this.handleRequest_(request); }));
    };
    /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    BackendService.prototype.handleRequest_ = /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    function (request) {
        var _this = this;
        /** @type {?} */
        var url = request.urlWithParams ? request.urlWithParams : request.url;
        // Try override parser
        // If no override parser or it returns nothing, use default parser
        // const parser = this.bind('parseRequestUrl');
        // const parsed: ParsedRequestUrl = (parser && parser(url, this)) || this.parseRequestUrl(url);
        /** @type {?} */
        var parsed = this.parseRequestUrl(url);
        /** @type {?} */
        var collectionName = parsed.collectionName;
        /** @type {?} */
        var collection = this.database[collectionName];
        /** @type {?} */
        var memoryRequest = {
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
        var interceptor = this.bind('requestInterceptor');
        if (/commands\/?$/i.test(memoryRequest.apiBase)) {
            return this.commands(memoryRequest);
        }
        /** @type {?} */
        var methodInterceptor = this.bind(memoryRequest.method);
        if (methodInterceptor) {
            // MemoryDataService intercepts this HTTP method.
            // if interceptor produced a response, return it.
            // else MemoryDataService chose not to intercept; continue processing.
            /** @type {?} */
            var interceptorResponse = methodInterceptor(memoryRequest);
            if (interceptorResponse) {
                return interceptorResponse;
            }
        }
        // !!!
        /** @type {?} */
        var response = interceptor ? interceptor(memoryRequest, this) : null;
        if (response) {
            return this.createResponse$(function () { return response; });
        }
        if (this.database[collectionName]) {
            // request is for a known collection of the MemoryDataService
            return this.createResponse$(function () { return _this.collectionHandler(memoryRequest); });
        }
        if (this.config.passThruUnknownUrl) {
            // unknown collection; pass request thru to a "real" backend.
            return this.getPassThruBackend().handle(request);
        }
        // 404 - can't handle this request
        response = this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, "Collection '" + collectionName + "' not found");
        return this.createResponse$(function () { return response; });
    };
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
    BackendService.prototype.parseRequestUrl = /**
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
    function (url) {
        try {
            /** @type {?} */
            var location_1 = this.getLocation(url);
            /** @type {?} */
            var drop = this.config.rootPath.length;
            /** @type {?} */
            var urlRoot = '';
            if (location_1.host !== this.config.host) {
                // url for a server on a different host!
                // assume it's collection is actually here too.
                drop = 1; // the leading slash
                urlRoot = location_1.protocol + '//' + location_1.host + '/';
            }
            /** @type {?} */
            var path = location_1.path.substring(drop);
            /** @type {?} */
            var pathSegments = path.split('/');
            /** @type {?} */
            var segmentIx = 0;
            // apiBase: the front part of the path devoted to getting to the api route
            // Assumes first path segment if no config.apiBase
            // else ignores as many path segments as are in config.apiBase
            // Does NOT care what the api base chars actually are.
            /** @type {?} */
            var apiBase = void 0;
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
            var collectionName = pathSegments[segmentIx++];
            // ignore anything after a '.' (e.g.,the "json" in "customers.json")
            collectionName = collectionName && collectionName.split('.')[0];
            /** @type {?} */
            var id = pathSegments[segmentIx++];
            /** @type {?} */
            var query = this.createQueryMap(location_1.query);
            /** @type {?} */
            var resourceUrl = urlRoot + apiBase + collectionName + '/';
            return { apiBase: apiBase, collectionName: collectionName, id: id, query: query, resourceUrl: resourceUrl };
        }
        catch (error) {
            /** @type {?} */
            var message = "unable to parse url '" + url + "'; original error: " + error.message;
            throw new Error(message);
        }
    };
    /** Parse the id as a number. Return original value if not a number. */
    /**
     * Parse the id as a number. Return original value if not a number.
     * @protected
     * @param {?} collection
     * @param {?} collectionName
     * @param {?} id
     * @return {?}
     */
    BackendService.prototype.parseId = /**
     * Parse the id as a number. Return original value if not a number.
     * @protected
     * @param {?} collection
     * @param {?} collectionName
     * @param {?} id
     * @return {?}
     */
    function (collection, collectionName, id) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
            // Can't confirm that `id` is a numeric type; don't parse as a number
            // or else `'42'` -> `42` and _get by id_ fails.
            return id;
        }
        /** @type {?} */
        var idNum = parseFloat(id);
        return isNaN(idNum) ? id : idNum;
    };
    /**
     * Add configured delay to response observable unless delay === 0
     */
    /**
     * Add configured delay to response observable unless delay === 0
     * @protected
     * @param {?} response
     * @return {?}
     */
    BackendService.prototype.addDelay = /**
     * Add configured delay to response observable unless delay === 0
     * @protected
     * @param {?} response
     * @return {?}
     */
    function (response) {
        /** @type {?} */
        var delay = this.config.delay;
        return delay === 0 ? response : delayResponse(response, delay || 500);
    };
    /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     */
    /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     * @protected
     * @param {?} collection
     * @param {?} query
     * @return {?}
     */
    BackendService.prototype.applyQuery = /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     * @protected
     * @param {?} collection
     * @param {?} query
     * @return {?}
     */
    function (collection, query) {
        // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
        /** @type {?} */
        var conditions = [];
        /** @type {?} */
        var caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
        query.forEach(function (value, name) {
            value.forEach(function (x) { return conditions.push({
                name: name,
                regexp: new RegExp(decodeURI(x), caseSensitive)
            }); });
        });
        /** @type {?} */
        var length = conditions.length;
        if (!length) {
            return collection;
        }
        // AND the RegExp conditions
        return collection.filter(function (row) {
            /** @type {?} */
            var has = true;
            /** @type {?} */
            var i = length;
            while (has && i) {
                i -= 1;
                /** @type {?} */
                var cond = conditions[i];
                has = cond.regexp.test(row[cond.name]);
            }
            return has;
        });
    };
    /**
     * Get a method from the `MemoryDataService` (if it exists), bound to that service
     */
    /**
     * Get a method from the `MemoryDataService` (if it exists), bound to that service
     * @protected
     * @template T
     * @param {?} methodName
     * @return {?}
     */
    BackendService.prototype.bind = /**
     * Get a method from the `MemoryDataService` (if it exists), bound to that service
     * @protected
     * @template T
     * @param {?} methodName
     * @return {?}
     */
    function (methodName) {
        /** @type {?} */
        var method = (/** @type {?} */ (this.dataService[methodName]));
        return method ? (/** @type {?} */ (method.bind(this.dataService))) : undefined;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    BackendService.prototype.bodify = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.config.dataEncapsulation ? { data: data } : data;
    };
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    BackendService.prototype.clone = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return JSON.parse(JSON.stringify(data));
    };
    /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    BackendService.prototype.collectionHandler = /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    function (request) {
        // const request = request.request;
        /** @type {?} */
        var response;
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
        var interceptor = this.bind('responseInterceptor');
        // !!!
        return interceptor ? interceptor(response, request) : response;
    };
    /**
     * @param {?} url
     * @param {?} status
     * @param {?} message
     * @return {?}
     */
    BackendService.prototype.createErrorResponse = /**
     * @param {?} url
     * @param {?} status
     * @param {?} message
     * @return {?}
     */
    function (url, status, message) {
        return {
            body: {
                error: "" + message,
            },
            url: url,
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            status: status
        };
    };
    /**
     * Create a cold response Observable from a factory for MemoryResponse
     * @param memoryResponseFactory - creates MemoryResponse when observable is subscribed
     * @param withDelay - if true (default), add simulated latency delay from configuration
     */
    /**
     * Create a cold response Observable from a factory for MemoryResponse
     * @protected
     * @param {?} memoryResponseFactory - creates MemoryResponse when observable is subscribed
     * @param {?=} withDelay - if true (default), add simulated latency delay from configuration
     * @return {?}
     */
    BackendService.prototype.createResponse$ = /**
     * Create a cold response Observable from a factory for MemoryResponse
     * @protected
     * @param {?} memoryResponseFactory - creates MemoryResponse when observable is subscribed
     * @param {?=} withDelay - if true (default), add simulated latency delay from configuration
     * @return {?}
     */
    function (memoryResponseFactory, withDelay) {
        if (withDelay === void 0) { withDelay = true; }
        /** @type {?} */
        var memoryResponse$ = this.createMemoryResponse$(memoryResponseFactory);
        /** @type {?} */
        var response$ = this.createResponse$fromMemoryResponse$(memoryResponse$);
        return withDelay ? this.addDelay(response$) : response$;
    };
    /**
     * Create a cold Observable of MemoryResponse.
     * @param memoryResponseFactory - creates MemoryResponse when observable is subscribed
     */
    /**
     * Create a cold Observable of MemoryResponse.
     * @protected
     * @param {?} memoryResponseFactory - creates MemoryResponse when observable is subscribed
     * @return {?}
     */
    BackendService.prototype.createMemoryResponse$ = /**
     * Create a cold Observable of MemoryResponse.
     * @protected
     * @param {?} memoryResponseFactory - creates MemoryResponse when observable is subscribed
     * @return {?}
     */
    function (memoryResponseFactory) {
        var _this = this;
        return new Observable(function (observer) {
            /** @type {?} */
            var response;
            try {
                response = memoryResponseFactory();
            }
            catch (error) {
                error = error.message || error;
                response = _this.createErrorResponse('', STATUS_CODE.INTERNAL_SERVER_ERROR, "" + error);
            }
            /** @type {?} */
            var status = response.status;
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
            return function () { }; // unsubscribe function
        });
    };
    /**
     * Find first instance of item in collection by `item.id`
     * @param collection
     * @param id
     */
    /**
     * Find first instance of item in collection by `item.id`
     * @protected
     * @template T
     * @param {?} collection
     * @param {?} id
     * @return {?}
     */
    BackendService.prototype.findById = /**
     * Find first instance of item in collection by `item.id`
     * @protected
     * @template T
     * @param {?} collection
     * @param {?} id
     * @return {?}
     */
    function (collection, id) {
        return collection.find(function (item) { return item.id === id; });
    };
    /**
     * Generate the next available id for item in this collection
     * Use method from `dataService` if it exists and returns a value,
     * else delegates to `genIdDefault`.
     * @param collection - collection of items with `id` key property
     */
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
    BackendService.prototype.genId = /**
     * Generate the next available id for item in this collection
     * Use method from `dataService` if it exists and returns a value,
     * else delegates to `genIdDefault`.
     * @protected
     * @template T
     * @param {?} collection - collection of items with `id` key property
     * @param {?} collectionName
     * @return {?}
     */
    function (collection, collectionName) {
        /** @type {?} */
        var genId = this.bind('genId');
        if (genId) {
            /** @type {?} */
            var id = genId(collection, collectionName);
            // tslint:disable-next-line:triple-equals
            if (id != undefined) {
                return id;
            }
        }
        return this.genIdDefault(collection, collectionName);
    };
    /**
     * Default generator of the next available id for item in this collection
     * This default implementation works only for numeric ids.
     * @param collection - collection of items with `id` key property
     * @param collectionName - name of the collection
     */
    /**
     * Default generator of the next available id for item in this collection
     * This default implementation works only for numeric ids.
     * @protected
     * @template T
     * @param {?} collection - collection of items with `id` key property
     * @param {?} collectionName - name of the collection
     * @return {?}
     */
    BackendService.prototype.genIdDefault = /**
     * Default generator of the next available id for item in this collection
     * This default implementation works only for numeric ids.
     * @protected
     * @template T
     * @param {?} collection - collection of items with `id` key property
     * @param {?} collectionName - name of the collection
     * @return {?}
     */
    function (collection, collectionName) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
            throw new Error("Collection '" + collectionName + "' id type is non-numeric or unknown. Can only generate numeric ids.");
        }
        /** @type {?} */
        var maxId = 0;
        collection.reduce(function (prev, item) {
            maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
        }, undefined);
        return maxId + 1;
    };
    /**
     * Get location info from a url, even on server where `document` is not defined
     */
    /**
     * Get location info from a url, even on server where `document` is not defined
     * @protected
     * @param {?} url
     * @return {?}
     */
    BackendService.prototype.getLocation = /**
     * Get location info from a url, even on server where `document` is not defined
     * @protected
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (!url.startsWith('http')) {
            // get the document if running in browser
            /** @type {?} */
            var document_ = (typeof document === 'undefined') ? undefined : document;
            // add host info to url before parsing.  Use a fake host when not in browser.
            /** @type {?} */
            var base = document_ ? document_.location.protocol + '//' + document_.location.host : 'http://fake';
            url = url.startsWith('/') ? base + url : base + '/' + url;
        }
        return parseUri(url);
    };
    /**
     * get or create the function that passes unhandled requests
     * through to the "real" backend.
     */
    /**
     * get or create the function that passes unhandled requests
     * through to the "real" backend.
     * @protected
     * @return {?}
     */
    BackendService.prototype.getPassThruBackend = /**
     * get or create the function that passes unhandled requests
     * through to the "real" backend.
     * @protected
     * @return {?}
     */
    function () {
        return this.passThruBackend ? this.passThruBackend : this.passThruBackend = this.createPassThruBackend();
    };
    /**
     * @protected
     * @param {?} collection
     * @param {?} id
     * @return {?}
     */
    BackendService.prototype.indexOf = /**
     * @protected
     * @param {?} collection
     * @param {?} id
     * @return {?}
     */
    function (collection, id) {
        return collection.findIndex(function (item) { return item.id === id; });
    };
    /**
     * return true if can determine that the collection's `item.id` is a number
     * This implementation can't tell if the collection is empty so it assumes NO
     * */
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
    BackendService.prototype.isCollectionIdNumeric = /**
     * return true if can determine that the collection's `item.id` is a number
     * This implementation can't tell if the collection is empty so it assumes NO
     *
     * @protected
     * @template T
     * @param {?} collection
     * @param {?} collectionName
     * @return {?}
     */
    function (collection, collectionName) {
        // collectionName not used now but override might maintain collection type information
        // so that it could know the type of the `id` even when the collection is empty.
        // return !!(collection && collection[0]) && typeof collection[0].id === 'number';
        return !!(collection && collection[0]);
    };
    /**
     * @protected
     * @param {?} collection
     * @param {?} id
     * @return {?}
     */
    BackendService.prototype.removeById = /**
     * @protected
     * @param {?} collection
     * @param {?} id
     * @return {?}
     */
    function (collection, id) {
        /** @type {?} */
        var index = this.indexOf(collection, id);
        if (index > -1) {
            collection.splice(index, 1);
            return true;
        }
        return false;
    };
    /**
     * Tell your in-mem "database" to reset.
     * returns Observable of the database because resetting it could be async
     */
    /**
     * Tell your in-mem "database" to reset.
     * returns Observable of the database because resetting it could be async
     * @protected
     * @param {?=} request
     * @return {?}
     */
    BackendService.prototype.resetDb = /**
     * Tell your in-mem "database" to reset.
     * returns Observable of the database because resetting it could be async
     * @protected
     * @param {?=} request
     * @return {?}
     */
    function (request) {
        var _this = this;
        this.databaseReadySubject.next(false);
        /** @type {?} */
        var database = this.dataService.createDb(request);
        /** @type {?} */
        var database$ = database instanceof Observable ? database :
            typeof ((/** @type {?} */ (database))).then === 'function' ? from((/** @type {?} */ (database))) :
                of(database);
        database$.pipe(first()).subscribe(function (database) {
            _this.database = database;
            _this.databaseReadySubject.next(true);
        });
        return this.databaseReady;
    };
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
    BackendService.prototype.commands = /**
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
    function (request) {
        var _this = this;
        /** @type {?} */
        var command = request.collectionName.toLowerCase();
        /** @type {?} */
        var method = request.method;
        /** @type {?} */
        var response = {
            url: request.url
        };
        switch (command) {
            case 'resetdb':
                response.status = STATUS_CODE.NO_CONTENT;
                return this.resetDb(request).pipe(concatMap(function () { return _this.createResponse$(function () { return response; }, false /* no latency delay */); }));
            case 'config':
                if (method === 'get') {
                    response.status = STATUS_CODE.OK;
                    response.body = this.clone(this.config);
                    // any other HTTP method is assumed to be a config update
                }
                else {
                    /** @type {?} */
                    var body = request.request.body;
                    Object.assign(this.config, body);
                    this.passThruBackend = undefined; // re-create when needed
                    response.status = STATUS_CODE.NO_CONTENT;
                }
                break;
            default:
                response = this.createErrorResponse(request.url, STATUS_CODE.INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
        }
        return this.createResponse$(function () { return response; }, false /* no latency delay */);
    };
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    BackendService.prototype.get = /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, query = _a.query, url = _a.url;
        /** @type {?} */
        var data = collection;
        // tslint:disable-next-line:triple-equals
        if (id != undefined && id !== '') {
            data = this.findById(collection, id);
            if (!data) {
                return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
            }
        }
        else if (query) {
            data = this.applyQuery(collection, query);
            if (!data.length) {
                return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
            }
        }
        return {
            body: this.bodify(this.clone(data)),
            headers: headers,
            status: STATUS_CODE.OK
        };
    };
    // Create entity
    // Can update an existing entity too if post409 is false.
    // Create entity
    // Can update an existing entity too if post409 is false.
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    BackendService.prototype.post = 
    // Create entity
    // Can update an existing entity too if post409 is false.
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, request = _a.request, resourceUrl = _a.resourceUrl, url = _a.url;
        /** @type {?} */
        var requestBody = request.body;
        /** @type {?} */
        var item = this.clone(requestBody);
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            try {
                item.id = id || this.genId(collection, collectionName);
            }
            catch (error) {
                /** @type {?} */
                var message = error.message || '';
                if (/id type is non-numeric/.test(message)) {
                    return this.createErrorResponse(url, STATUS_CODE.UNPROCESSABLE_ENTRY, message);
                }
                else {
                    console.error(error);
                    return this.createErrorResponse(url, STATUS_CODE.INTERNAL_SERVER_ERROR, "Failed to generate new id for '" + collectionName + "'");
                }
            }
        }
        if (id && id !== item.id) {
            return this.createErrorResponse(url, STATUS_CODE.BAD_REQUEST, "Request id does not match item.id");
        }
        else {
            id = item.id;
        }
        /** @type {?} */
        var existingIx = this.indexOf(collection, id);
        /** @type {?} */
        var body = this.bodify(item);
        if (existingIx === -1) {
            collection.push(item);
            headers.set('Location', resourceUrl + '/' + id);
            return { headers: headers, body: body, status: STATUS_CODE.CREATED };
        }
        else if (this.config.post409) {
            return this.createErrorResponse(url, STATUS_CODE.CONFLICT, "'" + collectionName + "' item with id='" + id + " exists and may not be updated with POST; use PUT instead.");
        }
        else {
            collection[existingIx] = item;
            return this.config.post204 ?
                { headers: headers, status: STATUS_CODE.NO_CONTENT } : // successful; no content
                { headers: headers, body: body, status: STATUS_CODE.OK }; // successful; return entity
        }
    };
    // Update existing entity
    // Can create an entity too if put404 is false.
    // Update existing entity
    // Can create an entity too if put404 is false.
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    BackendService.prototype.put = 
    // Update existing entity
    // Can create an entity too if put404 is false.
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, request = _a.request, url = _a.url;
        /** @type {?} */
        var item = this.clone(request.body);
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, "Missing '" + collectionName + "' id");
        }
        if (id && id !== item.id) {
            return this.createErrorResponse(url, STATUS_CODE.BAD_REQUEST, "Request for '" + collectionName + "' id does not match item.id");
        }
        else {
            id = item.id;
        }
        /** @type {?} */
        var existingIx = this.indexOf(collection, id);
        /** @type {?} */
        var body = this.bodify(item);
        if (existingIx > -1) {
            collection[existingIx] = item;
            return this.config.put204 ?
                { headers: headers, status: STATUS_CODE.NO_CONTENT } : // successful; no content
                { headers: headers, body: body, status: STATUS_CODE.OK }; // successful; return entity
        }
        else if (this.config.put404) {
            // item to update not found; use POST to create new item for this id.
            return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, "'" + collectionName + "' item with id='" + id + " not found and may not be created with PUT; use POST instead.");
        }
        else {
            // create new item for id not found
            collection.push(item);
            return { headers: headers, body: body, status: STATUS_CODE.CREATED };
        }
    };
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    BackendService.prototype.delete = /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, url = _a.url;
        // tslint:disable-next-line:triple-equals
        if (id == undefined) {
            return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, "Missing \"" + collectionName + "\" id");
        }
        /** @type {?} */
        var exists = this.removeById(collection, id);
        return {
            headers: headers,
            status: (exists || !this.config.delete404) ? STATUS_CODE.NO_CONTENT : STATUS_CODE.NOT_FOUND
        };
    };
    ///////
    ///////
    /**
     * @param {?} request
     * @return {?}
     */
    BackendService.prototype.handle = 
    ///////
    /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        try {
            return this.handleRequest(request);
        }
        catch (error) {
            /** @type {?} */
            var response_1 = this.createErrorResponse(request.url, STATUS_CODE.INTERNAL_SERVER_ERROR, "" + (error.message || error));
            return this.createResponse$(function () { return response_1; });
        }
    };
    /**
     * @protected
     * @param {?} search
     * @return {?}
     */
    BackendService.prototype.createQueryMap = /**
     * @protected
     * @param {?} search
     * @return {?}
     */
    function (search) {
        /** @type {?} */
        var map = new Map();
        if (search) {
            /** @type {?} */
            var params_1 = new HttpParams({ fromString: search });
            params_1.keys().forEach(function (p) { return map.set(p, params_1.getAll(p)); });
        }
        return map;
    };
    /**
     * @protected
     * @param {?} response$
     * @return {?}
     */
    BackendService.prototype.createResponse$fromMemoryResponse$ = /**
     * @protected
     * @param {?} response$
     * @return {?}
     */
    function (response$) {
        return response$.pipe(map(function (options) { return new HttpResponse(options); }));
    };
    /**
     * @protected
     * @return {?}
     */
    BackendService.prototype.createPassThruBackend = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            return new HttpXhrBackend(this.factory);
        }
        catch (error) {
            error.message = 'Cannot create passThru404 backend; ' + (error.message || '');
            throw error;
        }
    };
    BackendService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BackendService.ctorParameters = function () { return [
        { type: MemoryDataService },
        { type: MemoryBackendConfig },
        { type: XhrFactory }
    ]; };
    return BackendService;
}());
export { BackendService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTBCLFdBQVcsRUFBRSxVQUFVLEVBQWUsWUFBWSxFQUFvQixjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEssT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQVksRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQW1ELFFBQVEsRUFBbUIsbUJBQW1CLEVBQVcsTUFBTSxVQUFVLENBQUM7QUFDNUssT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkU7SUFRQyx3QkFDVyxXQUE4QixFQUN4QyxNQUFnQyxFQUN4QixPQUFtQjtRQUQzQix1QkFBQSxFQUFBLFdBQWdDO1FBRHRCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUVoQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBUGxCLFdBQU0sR0FBd0IsSUFBSSxtQkFBbUIsRUFBRSxDQUFDOztZQVMzRCxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLGlDQUFpQztRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEs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QUNyRCxRQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7U0FDekQ7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7Ozs7OztJQUVTLDJEQUFrQzs7Ozs7SUFBNUMsVUFBNkMsU0FBcUM7UUFDakYsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUNwQixHQUFHLENBQUMsVUFBQyxPQUF5QixJQUFLLE9BQUEsSUFBSSxZQUFZLENBQU0sT0FBTyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FDbEUsQ0FBQztJQUNILENBQUM7Ozs7O0lBRVMsOENBQXFCOzs7O0lBQS9CO1FBQ0MsSUFBSTtZQUNILE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZixLQUFLLENBQUMsT0FBTyxHQUFHLHFDQUFxQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM5RSxNQUFNLEtBQUssQ0FBQztTQUNaO0lBQ0YsQ0FBQzs7Z0JBbG1CRCxVQUFVOzs7O2dCQUhtQixpQkFBaUI7Z0JBQXRDLG1CQUFtQjtnQkFMMkYsVUFBVTs7SUE0bUJqSSxxQkFBQztDQUFBLEFBcG1CRCxJQW9tQkM7U0FubUJZLGNBQWM7Ozs7OztJQUUxQix5Q0FBeUM7Ozs7O0lBQ3pDLGdDQUFrRTs7Ozs7SUFDbEUsa0NBQTJCOzs7OztJQUMzQiw4Q0FBeUQ7Ozs7O0lBR3hELHFDQUF3Qzs7Ozs7SUFFeEMsaUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEJhY2tlbmQsIEh0dHBFdmVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UsIEh0dHBSZXNwb25zZUJhc2UsIEh0dHBYaHJCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tLCBPYnNlcnZhYmxlLCBPYnNlcnZlciwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvbmNhdE1hcCwgZmlyc3QsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlbGF5UmVzcG9uc2UgfSBmcm9tICcuL2RlbGF5LXJlc3BvbnNlJztcbmltcG9ydCB7IE1lbW9yeUJhY2tlbmRDb25maWcsIE1lbW9yeURhdGFTZXJ2aWNlLCBNZW1vcnlSZXF1ZXN0LCBNZW1vcnlSZXNwb25zZSwgUGFyc2VkUmVxdWVzdFVybCwgcGFyc2VVcmksIFBhc3NUaHJ1QmFja2VuZCwgcmVtb3ZlVHJhaWxpbmdTbGFzaCwgVXJpSW5mbyB9IGZyb20gJy4vbWVtb3J5JztcbmltcG9ydCB7IGdldFN0YXR1c1RleHQsIGlzU3VjY2VzcywgU1RBVFVTX0NPREUgfSBmcm9tICcuL3N0YXR1cy1jb2Rlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSBpbXBsZW1lbnRzIEh0dHBCYWNrZW5kIHtcblxuXHRwcml2YXRlIHBhc3NUaHJ1QmFja2VuZDogUGFzc1RocnVCYWNrZW5kO1xuXHRwcm90ZWN0ZWQgY29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnID0gbmV3IE1lbW9yeUJhY2tlbmRDb25maWcoKTtcblx0cHJvdGVjdGVkIGRhdGFiYXNlOiBPYmplY3Q7XG5cdHByb3RlY3RlZCBkYXRhYmFzZVJlYWR5U3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBkYXRhU2VydmljZTogTWVtb3J5RGF0YVNlcnZpY2UsXG5cdFx0Y29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnID0ge30sXG5cdFx0cHJpdmF0ZSBmYWN0b3J5OiBYaHJGYWN0b3J5LFxuXHQpIHtcblx0XHRjb25zdCBsb2NhdGlvbiA9IHRoaXMuZ2V0TG9jYXRpb24oJy8nKTtcblx0XHR0aGlzLmNvbmZpZy5ob3N0ID0gbG9jYXRpb24uaG9zdDsgLy8gZGVmYXVsdCB0byBhcHAgd2ViIHNlcnZlciBob3N0XG5cdFx0dGhpcy5jb25maWcucm9vdFBhdGggPSBsb2NhdGlvbi5wYXRoOyAvLyBkZWZhdWx0IHRvIHBhdGggd2hlbiBhcHAgaXMgc2VydmVkIChlLmcuJy8nKVxuXHRcdE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGNvbmZpZyk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0IGRhdGFiYXNlUmVhZHkoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0aWYgKCF0aGlzLmRhdGFiYXNlUmVhZHlTdWJqZWN0KSB7XG5cdFx0XHQvLyBmaXJzdCB0aW1lIHRoZSBzZXJ2aWNlIGlzIGNhbGxlZC5cblx0XHRcdHRoaXMuZGF0YWJhc2VSZWFkeVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblx0XHRcdHRoaXMucmVzZXREYigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5kYXRhYmFzZVJlYWR5U3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuXHRcdFx0Zmlyc3QoKHJlYWR5OiBib29sZWFuKSA9PiByZWFkeSlcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb2Nlc3MgUmVxdWVzdCBhbmQgcmV0dXJuIGFuIE9ic2VydmFibGUgb2YgSHR0cCBSZXNwb25zZSBvYmplY3Rcblx0ICogaW4gdGhlIG1hbm5lciBvZiBhIFJFU1R5IHdlYiBhcGkuXG5cdCAqXG5cdCAqIEV4cGVjdCBVUkkgcGF0dGVybiBpbiB0aGUgZm9ybSA6YmFzZS86Y29sbGVjdGlvbk5hbWUvOmlkP1xuXHQgKiBFeGFtcGxlczpcblx0ICogICAvLyBmb3Igc3RvcmUgd2l0aCBhICdjdXN0b21lcnMnIGNvbGxlY3Rpb25cblx0ICogICBHRVQgYXBpL2N1c3RvbWVycyAgICAgICAgICAvLyBhbGwgY3VzdG9tZXJzXG5cdCAqICAgR0VUIGFwaS9jdXN0b21lcnMvNDIgICAgICAgLy8gdGhlIGNoYXJhY3RlciB3aXRoIGlkPTQyXG5cdCAqICAgR0VUIGFwaS9jdXN0b21lcnM/bmFtZT1eaiAgLy8gJ2onIGlzIGEgcmVnZXg7IHJldHVybnMgY3VzdG9tZXJzIHdob3NlIG5hbWUgc3RhcnRzIHdpdGggJ2onIG9yICdKJ1xuXHQgKiAgIEdFVCBhcGkvY3VzdG9tZXJzLmpzb24vNDIgIC8vIGlnbm9yZXMgdGhlIFwiLmpzb25cIlxuXHQgKlxuXHQgKiBBbHNvIGFjY2VwdHMgZGlyZWN0IGNvbW1hbmRzIHRvIHRoZSBzZXJ2aWNlIGluIHdoaWNoIHRoZSBsYXN0IHNlZ21lbnQgb2YgdGhlIGFwaUJhc2UgaXMgdGhlIHdvcmQgXCJjb21tYW5kc1wiXG5cdCAqIEV4YW1wbGVzOlxuXHQgKiAgICAgUE9TVCBjb21tYW5kcy9yZXNldERiLFxuXHQgKiAgICAgR0VUL1BPU1QgY29tbWFuZHMvY29uZmlnIC0gZ2V0IG9yIChyZSlzZXQgdGhlIGNvbmZpZ1xuXHQgKlxuXHQgKiAgIEhUVFAgb3ZlcnJpZGVzOlxuXHQgKiAgICAgSWYgdGhlIGluamVjdGVkIGRhdGFTZXJ2aWNlIGRlZmluZXMgYW4gSFRUUCBtZXRob2QgKGxvd2VyY2FzZSlcblx0ICogICAgIFRoZSByZXF1ZXN0IGlzIGZvcndhcmRlZCB0byB0aGF0IG1ldGhvZCBhcyBpblxuXHQgKiAgICAgYGRhdGFTZXJ2aWNlLmdldChtZW1vcnlSZXF1ZXN0KWBcblx0ICogICAgIHdoaWNoIG11c3QgcmV0dXJuIGVpdGhlciBhbiBPYnNlcnZhYmxlIG9mIHRoZSByZXNwb25zZSB0eXBlXG5cdCAqICAgICBmb3IgdGhpcyBodHRwIGxpYnJhcnkgb3IgbnVsbHx1bmRlZmluZWQgKHdoaWNoIG1lYW5zIFwia2VlcCBwcm9jZXNzaW5nXCIpLlxuXHQgKi9cblx0cHJvdGVjdGVkIGhhbmRsZVJlcXVlc3QocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Ly8gIGhhbmRsZSB0aGUgcmVxdWVzdCB3aGVuIHRoZXJlIGlzIGFuIGluLW1lbW9yeSBkYXRhYmFzZVxuXHRcdHJldHVybiB0aGlzLmRhdGFiYXNlUmVhZHkucGlwZShjb25jYXRNYXAoKCkgPT4gdGhpcy5oYW5kbGVSZXF1ZXN0XyhyZXF1ZXN0KSkpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhhbmRsZVJlcXVlc3RfKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IHVybCA9IHJlcXVlc3QudXJsV2l0aFBhcmFtcyA/IHJlcXVlc3QudXJsV2l0aFBhcmFtcyA6IHJlcXVlc3QudXJsO1xuXHRcdC8vIFRyeSBvdmVycmlkZSBwYXJzZXJcblx0XHQvLyBJZiBubyBvdmVycmlkZSBwYXJzZXIgb3IgaXQgcmV0dXJucyBub3RoaW5nLCB1c2UgZGVmYXVsdCBwYXJzZXJcblx0XHQvLyBjb25zdCBwYXJzZXIgPSB0aGlzLmJpbmQoJ3BhcnNlUmVxdWVzdFVybCcpO1xuXHRcdC8vIGNvbnN0IHBhcnNlZDogUGFyc2VkUmVxdWVzdFVybCA9IChwYXJzZXIgJiYgcGFyc2VyKHVybCwgdGhpcykpIHx8IHRoaXMucGFyc2VSZXF1ZXN0VXJsKHVybCk7XG5cdFx0Y29uc3QgcGFyc2VkOiBQYXJzZWRSZXF1ZXN0VXJsID0gdGhpcy5wYXJzZVJlcXVlc3RVcmwodXJsKTtcblx0XHRjb25zdCBjb2xsZWN0aW9uTmFtZSA9IHBhcnNlZC5jb2xsZWN0aW9uTmFtZTtcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5kYXRhYmFzZVtjb2xsZWN0aW9uTmFtZV07XG5cdFx0Y29uc3QgbWVtb3J5UmVxdWVzdDogTWVtb3J5UmVxdWVzdCA9IHtcblx0XHRcdHJlcXVlc3Q6IHJlcXVlc3QsXG5cdFx0XHRib2R5OiByZXF1ZXN0LmJvZHksXG5cdFx0XHRhcGlCYXNlOiBwYXJzZWQuYXBpQmFzZSxcblx0XHRcdGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXG5cdFx0XHRjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWUsXG5cdFx0XHRoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxuXHRcdFx0aWQ6IHRoaXMucGFyc2VJZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgcGFyc2VkLmlkKSxcblx0XHRcdG1ldGhvZDogKHJlcXVlc3QubWV0aG9kIHx8ICdnZXQnKS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0cXVlcnk6IHBhcnNlZC5xdWVyeSxcblx0XHRcdHJlc291cmNlVXJsOiBwYXJzZWQucmVzb3VyY2VVcmwsXG5cdFx0XHR1cmw6IHVybCxcblx0XHR9O1xuXHRcdC8vIElmIGBkYXRhU2VydmljZS5yZXF1ZXN0SW50ZXJjZXB0b3JgIGV4aXN0cywgbGV0IGl0IG1vcnBoIHRoZSByZXNwb25zZSBvcHRpb25zXG5cdFx0Y29uc3QgaW50ZXJjZXB0b3IgPSB0aGlzLmJpbmQoJ3JlcXVlc3RJbnRlcmNlcHRvcicpO1xuXHRcdGlmICgvY29tbWFuZHNcXC8/JC9pLnRlc3QobWVtb3J5UmVxdWVzdC5hcGlCYXNlKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29tbWFuZHMobWVtb3J5UmVxdWVzdCk7XG5cdFx0fVxuXHRcdGNvbnN0IG1ldGhvZEludGVyY2VwdG9yID0gdGhpcy5iaW5kKG1lbW9yeVJlcXVlc3QubWV0aG9kKTtcblx0XHRpZiAobWV0aG9kSW50ZXJjZXB0b3IpIHtcblx0XHRcdC8vIE1lbW9yeURhdGFTZXJ2aWNlIGludGVyY2VwdHMgdGhpcyBIVFRQIG1ldGhvZC5cblx0XHRcdC8vIGlmIGludGVyY2VwdG9yIHByb2R1Y2VkIGEgcmVzcG9uc2UsIHJldHVybiBpdC5cblx0XHRcdC8vIGVsc2UgTWVtb3J5RGF0YVNlcnZpY2UgY2hvc2Ugbm90IHRvIGludGVyY2VwdDsgY29udGludWUgcHJvY2Vzc2luZy5cblx0XHRcdGNvbnN0IGludGVyY2VwdG9yUmVzcG9uc2UgPSBtZXRob2RJbnRlcmNlcHRvcihtZW1vcnlSZXF1ZXN0KTtcblx0XHRcdGlmIChpbnRlcmNlcHRvclJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiBpbnRlcmNlcHRvclJlc3BvbnNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyAhISFcblx0XHRsZXQgcmVzcG9uc2U6IE1lbW9yeVJlc3BvbnNlID0gaW50ZXJjZXB0b3IgPyBpbnRlcmNlcHRvcihtZW1vcnlSZXF1ZXN0LCB0aGlzKSA6IG51bGw7XG5cdFx0aWYgKHJlc3BvbnNlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gcmVzcG9uc2UpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5kYXRhYmFzZVtjb2xsZWN0aW9uTmFtZV0pIHtcblx0XHRcdC8vIHJlcXVlc3QgaXMgZm9yIGEga25vd24gY29sbGVjdGlvbiBvZiB0aGUgTWVtb3J5RGF0YVNlcnZpY2Vcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiB0aGlzLmNvbGxlY3Rpb25IYW5kbGVyKG1lbW9yeVJlcXVlc3QpKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY29uZmlnLnBhc3NUaHJ1VW5rbm93blVybCkge1xuXHRcdFx0Ly8gdW5rbm93biBjb2xsZWN0aW9uOyBwYXNzIHJlcXVlc3QgdGhydSB0byBhIFwicmVhbFwiIGJhY2tlbmQuXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRQYXNzVGhydUJhY2tlbmQoKS5oYW5kbGUocmVxdWVzdCk7XG5cdFx0fVxuXHRcdC8vIDQwNCAtIGNhbid0IGhhbmRsZSB0aGlzIHJlcXVlc3Rcblx0XHRyZXNwb25zZSA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLk5PVF9GT1VORCwgYENvbGxlY3Rpb24gJyR7Y29sbGVjdGlvbk5hbWV9JyBub3QgZm91bmRgKTtcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gcmVzcG9uc2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBhcnNlcyB0aGUgcmVxdWVzdCBVUkwgaW50byBhIGBQYXJzZWRSZXF1ZXN0VXJsYCBvYmplY3QuXG5cdCAqIFBhcnNpbmcgZGVwZW5kcyB1cG9uIGNlcnRhaW4gdmFsdWVzIG9mIGBjb25maWdgOiBgYXBpQmFzZWAsIGBob3N0YCwgYW5kIGB1cmxSb290YC5cblx0ICpcblx0ICogQ29uZmlndXJpbmcgdGhlIGBhcGlCYXNlYCB5aWVsZHMgdGhlIG1vc3QgaW50ZXJlc3RpbmcgY2hhbmdlcyB0byBgcGFyc2VSZXF1ZXN0VXJsYCBiZWhhdmlvcjpcblx0ICogICBXaGVuIGFwaUJhc2U9dW5kZWZpbmVkIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3QvYXBpL2NvbGxlY3Rpb24vNDInXG5cdCAqICAgICB7YmFzZTogJ2FwaS8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogJzQyJywgLi4ufVxuXHQgKiAgIFdoZW4gYXBpQmFzZT0nc29tZS9hcGkvcm9vdC8nIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3Qvc29tZS9hcGkvcm9vdC9jb2xsZWN0aW9uJ1xuXHQgKiAgICAge2Jhc2U6ICdzb21lL2FwaS9yb290LycsIGNvbGxlY3Rpb25OYW1lOiAnY29sbGVjdGlvbicsIGlkOiB1bmRlZmluZWQsIC4uLn1cblx0ICogICBXaGVuIGFwaUJhc2U9Jy8nIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3QvY29sbGVjdGlvbidcblx0ICogICAgIHtiYXNlOiAnLycsIGNvbGxlY3Rpb25OYW1lOiAnY29sbGVjdGlvbicsIGlkOiB1bmRlZmluZWQsIC4uLn1cblx0ICpcblx0ICogVGhlIGFjdHVhbCBhcGkgYmFzZSBzZWdtZW50IHZhbHVlcyBhcmUgaWdub3JlZC4gT25seSB0aGUgbnVtYmVyIG9mIHNlZ21lbnRzIG1hdHRlcnMuXG5cdCAqIFRoZSBmb2xsb3dpbmcgYXBpIGJhc2Ugc3RyaW5ncyBhcmUgY29uc2lkZXJlZCBpZGVudGljYWw6ICdhL2InIH4gJ3NvbWUvYXBpLycgfiBgdHdvL3NlZ21lbnRzJ1xuXHQgKlxuXHQgKiBUbyByZXBsYWNlIHRoaXMgZGVmYXVsdCBtZXRob2QsIGFzc2lnbiB5b3VyIGFsdGVybmF0aXZlIHRvIHlvdXIgTWVtb3J5RGF0YVNlcnZpY2VbJ3BhcnNlUmVxdWVzdFVybCddXG5cdCAqL1xuXHRwcm90ZWN0ZWQgcGFyc2VSZXF1ZXN0VXJsKHVybDogc3RyaW5nKTogUGFyc2VkUmVxdWVzdFVybCB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGxvY2F0aW9uID0gdGhpcy5nZXRMb2NhdGlvbih1cmwpO1xuXHRcdFx0bGV0IGRyb3AgPSB0aGlzLmNvbmZpZy5yb290UGF0aC5sZW5ndGg7XG5cdFx0XHRsZXQgdXJsUm9vdCA9ICcnO1xuXHRcdFx0aWYgKGxvY2F0aW9uLmhvc3QgIT09IHRoaXMuY29uZmlnLmhvc3QpIHtcblx0XHRcdFx0Ly8gdXJsIGZvciBhIHNlcnZlciBvbiBhIGRpZmZlcmVudCBob3N0IVxuXHRcdFx0XHQvLyBhc3N1bWUgaXQncyBjb2xsZWN0aW9uIGlzIGFjdHVhbGx5IGhlcmUgdG9vLlxuXHRcdFx0XHRkcm9wID0gMTsgLy8gdGhlIGxlYWRpbmcgc2xhc2hcblx0XHRcdFx0dXJsUm9vdCA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnLyc7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYXRoID0gbG9jYXRpb24ucGF0aC5zdWJzdHJpbmcoZHJvcCk7XG5cdFx0XHRjb25zdCBwYXRoU2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJyk7XG5cdFx0XHRsZXQgc2VnbWVudEl4ID0gMDtcblx0XHRcdC8vIGFwaUJhc2U6IHRoZSBmcm9udCBwYXJ0IG9mIHRoZSBwYXRoIGRldm90ZWQgdG8gZ2V0dGluZyB0byB0aGUgYXBpIHJvdXRlXG5cdFx0XHQvLyBBc3N1bWVzIGZpcnN0IHBhdGggc2VnbWVudCBpZiBubyBjb25maWcuYXBpQmFzZVxuXHRcdFx0Ly8gZWxzZSBpZ25vcmVzIGFzIG1hbnkgcGF0aCBzZWdtZW50cyBhcyBhcmUgaW4gY29uZmlnLmFwaUJhc2Vcblx0XHRcdC8vIERvZXMgTk9UIGNhcmUgd2hhdCB0aGUgYXBpIGJhc2UgY2hhcnMgYWN0dWFsbHkgYXJlLlxuXHRcdFx0bGV0IGFwaUJhc2U6IHN0cmluZztcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG5cdFx0XHRpZiAodGhpcy5jb25maWcuYXBpQmFzZSA9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0YXBpQmFzZSA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhcGlCYXNlID0gcmVtb3ZlVHJhaWxpbmdTbGFzaCh0aGlzLmNvbmZpZy5hcGlCYXNlLnRyaW0oKSk7XG5cdFx0XHRcdGlmIChhcGlCYXNlKSB7XG5cdFx0XHRcdFx0c2VnbWVudEl4ID0gYXBpQmFzZS5zcGxpdCgnLycpLmxlbmd0aDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZWdtZW50SXggPSAwOyAvLyBubyBhcGkgYmFzZSBhdCBhbGw7IHVud2lzZSBidXQgYWxsb3dlZC5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0YXBpQmFzZSArPSAnLyc7XG5cdFx0XHRsZXQgY29sbGVjdGlvbk5hbWUgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xuXHRcdFx0Ly8gaWdub3JlIGFueXRoaW5nIGFmdGVyIGEgJy4nIChlLmcuLHRoZSBcImpzb25cIiBpbiBcImN1c3RvbWVycy5qc29uXCIpXG5cdFx0XHRjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25OYW1lICYmIGNvbGxlY3Rpb25OYW1lLnNwbGl0KCcuJylbMF07XG5cdFx0XHRjb25zdCBpZCA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG5cdFx0XHRjb25zdCBxdWVyeSA9IHRoaXMuY3JlYXRlUXVlcnlNYXAobG9jYXRpb24ucXVlcnkpO1xuXHRcdFx0Y29uc3QgcmVzb3VyY2VVcmwgPSB1cmxSb290ICsgYXBpQmFzZSArIGNvbGxlY3Rpb25OYW1lICsgJy8nO1xuXHRcdFx0cmV0dXJuIHsgYXBpQmFzZSwgY29sbGVjdGlvbk5hbWUsIGlkLCBxdWVyeSwgcmVzb3VyY2VVcmwgfTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc3QgbWVzc2FnZSA9IGB1bmFibGUgdG8gcGFyc2UgdXJsICcke3VybH0nOyBvcmlnaW5hbCBlcnJvcjogJHtlcnJvci5tZXNzYWdlfWA7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqIFBhcnNlIHRoZSBpZCBhcyBhIG51bWJlci4gUmV0dXJuIG9yaWdpbmFsIHZhbHVlIGlmIG5vdCBhIG51bWJlci4gKi9cblx0cHJvdGVjdGVkIHBhcnNlSWQoY29sbGVjdGlvbjogYW55W10sIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiBhbnkge1xuXHRcdGlmICghdGhpcy5pc0NvbGxlY3Rpb25JZE51bWVyaWMoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpKSB7XG5cdFx0XHQvLyBDYW4ndCBjb25maXJtIHRoYXQgYGlkYCBpcyBhIG51bWVyaWMgdHlwZTsgZG9uJ3QgcGFyc2UgYXMgYSBudW1iZXJcblx0XHRcdC8vIG9yIGVsc2UgYCc0MidgIC0+IGA0MmAgYW5kIF9nZXQgYnkgaWRfIGZhaWxzLlxuXHRcdFx0cmV0dXJuIGlkO1xuXHRcdH1cblx0XHRjb25zdCBpZE51bSA9IHBhcnNlRmxvYXQoaWQpO1xuXHRcdHJldHVybiBpc05hTihpZE51bSkgPyBpZCA6IGlkTnVtO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZCBjb25maWd1cmVkIGRlbGF5IHRvIHJlc3BvbnNlIG9ic2VydmFibGUgdW5sZXNzIGRlbGF5ID09PSAwXG5cdCAqL1xuXHRwcm90ZWN0ZWQgYWRkRGVsYXkocmVzcG9uc2U6IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgZGVsYXkgPSB0aGlzLmNvbmZpZy5kZWxheTtcblx0XHRyZXR1cm4gZGVsYXkgPT09IDAgPyByZXNwb25zZSA6IGRlbGF5UmVzcG9uc2UocmVzcG9uc2UsIGRlbGF5IHx8IDUwMCk7XG5cdH1cblxuXHQvKipcblx0ICogQXBwbHkgcXVlcnkvc2VhcmNoIHBhcmFtZXRlcnMgYXMgYSBmaWx0ZXIgb3ZlciB0aGUgY29sbGVjdGlvblxuXHQgKiBUaGlzIGltcGwgb25seSBzdXBwb3J0cyBSZWdFeHAgcXVlcmllcyBvbiBzdHJpbmcgcHJvcGVydGllcyBvZiB0aGUgY29sbGVjdGlvblxuXHQgKiBBTkRzIHRoZSBjb25kaXRpb25zIHRvZ2V0aGVyXG5cdCAqL1xuXHRwcm90ZWN0ZWQgYXBwbHlRdWVyeShjb2xsZWN0aW9uOiBhbnlbXSwgcXVlcnk6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPik6IGFueVtdIHtcblx0XHQvLyBleHRyYWN0IGZpbHRlcmluZyBjb25kaXRpb25zIC0ge3Byb3BlcnR5TmFtZSwgUmVnRXhwcykgLSBmcm9tIHF1ZXJ5L3NlYXJjaCBwYXJhbWV0ZXJzXG5cdFx0Y29uc3QgY29uZGl0aW9uczogeyBuYW1lOiBzdHJpbmcsIHJlZ2V4cDogUmVnRXhwIH1bXSA9IFtdO1xuXHRcdGNvbnN0IGNhc2VTZW5zaXRpdmUgPSB0aGlzLmNvbmZpZy5jYXNlU2Vuc2l0aXZlU2VhcmNoID8gdW5kZWZpbmVkIDogJ2knO1xuXHRcdHF1ZXJ5LmZvckVhY2goKHZhbHVlOiBzdHJpbmdbXSwgbmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHR2YWx1ZS5mb3JFYWNoKHggPT4gY29uZGl0aW9ucy5wdXNoKHtcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0cmVnZXhwOiBuZXcgUmVnRXhwKGRlY29kZVVSSSh4KSwgY2FzZVNlbnNpdGl2ZSlcblx0XHRcdH0pKTtcblx0XHR9KTtcblx0XHRjb25zdCBsZW5ndGggPSBjb25kaXRpb25zLmxlbmd0aDtcblx0XHRpZiAoIWxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGNvbGxlY3Rpb247XG5cdFx0fVxuXHRcdC8vIEFORCB0aGUgUmVnRXhwIGNvbmRpdGlvbnNcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5maWx0ZXIocm93ID0+IHtcblx0XHRcdGxldCBoYXMgPSB0cnVlO1xuXHRcdFx0bGV0IGkgPSBsZW5ndGg7XG5cdFx0XHR3aGlsZSAoaGFzICYmIGkpIHtcblx0XHRcdFx0aSAtPSAxO1xuXHRcdFx0XHRjb25zdCBjb25kID0gY29uZGl0aW9uc1tpXTtcblx0XHRcdFx0aGFzID0gY29uZC5yZWdleHAudGVzdChyb3dbY29uZC5uYW1lXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaGFzO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIG1ldGhvZCBmcm9tIHRoZSBgTWVtb3J5RGF0YVNlcnZpY2VgIChpZiBpdCBleGlzdHMpLCBib3VuZCB0byB0aGF0IHNlcnZpY2Vcblx0ICovXG5cdHByb3RlY3RlZCBiaW5kPFQgZXh0ZW5kcyBGdW5jdGlvbj4obWV0aG9kTmFtZTogc3RyaW5nKSB7XG5cdFx0Y29uc3QgbWV0aG9kID0gdGhpcy5kYXRhU2VydmljZVttZXRob2ROYW1lXSBhcyBUO1xuXHRcdHJldHVybiBtZXRob2QgPyA8VD5tZXRob2QuYmluZCh0aGlzLmRhdGFTZXJ2aWNlKSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdHB1YmxpYyBib2RpZnkoZGF0YTogYW55KSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRhdGFFbmNhcHN1bGF0aW9uID8geyBkYXRhIH0gOiBkYXRhO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNsb25lKGRhdGE6IGFueSkge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBjb2xsZWN0aW9uSGFuZGxlcihyZXF1ZXN0OiBNZW1vcnlSZXF1ZXN0KTogTWVtb3J5UmVzcG9uc2Uge1xuXHRcdC8vIGNvbnN0IHJlcXVlc3QgPSByZXF1ZXN0LnJlcXVlc3Q7XG5cdFx0bGV0IHJlc3BvbnNlOiBNZW1vcnlSZXNwb25zZTtcblx0XHRzd2l0Y2ggKHJlcXVlc3QubWV0aG9kKSB7XG5cdFx0XHRjYXNlICdnZXQnOlxuXHRcdFx0XHRyZXNwb25zZSA9IHRoaXMuZ2V0KHJlcXVlc3QpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3Bvc3QnOlxuXHRcdFx0XHRyZXNwb25zZSA9IHRoaXMucG9zdChyZXF1ZXN0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdwdXQnOlxuXHRcdFx0XHRyZXNwb25zZSA9IHRoaXMucHV0KHJlcXVlc3QpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2RlbGV0ZSc6XG5cdFx0XHRcdHJlc3BvbnNlID0gdGhpcy5kZWxldGUocmVxdWVzdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmVzcG9uc2UgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UocmVxdWVzdC51cmwsIFNUQVRVU19DT0RFLk1FVEhPRF9OT1RfQUxMT1dFRCwgJ01ldGhvZCBub3QgYWxsb3dlZCcpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Ly8gSWYgYGRhdGFTZXJ2aWNlLnJlc3BvbnNlSW50ZXJjZXB0b3JgIGV4aXN0cywgbGV0IGl0IG1vcnBoIHRoZSByZXNwb25zZSBvcHRpb25zXG5cdFx0Y29uc3QgaW50ZXJjZXB0b3IgPSB0aGlzLmJpbmQoJ3Jlc3BvbnNlSW50ZXJjZXB0b3InKTtcblx0XHQvLyAhISFcblx0XHRyZXR1cm4gaW50ZXJjZXB0b3IgPyBpbnRlcmNlcHRvcihyZXNwb25zZSwgcmVxdWVzdCkgOiByZXNwb25zZTtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGVFcnJvclJlc3BvbnNlKHVybDogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKTogTWVtb3J5UmVzcG9uc2Uge1xuXHRcdHJldHVybiB7XG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGVycm9yOiBgJHttZXNzYWdlfWAsXG5cdFx0XHR9LFxuXHRcdFx0dXJsOiB1cmwsXG5cdFx0XHRoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9KSxcblx0XHRcdHN0YXR1czogc3RhdHVzXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBjb2xkIHJlc3BvbnNlIE9ic2VydmFibGUgZnJvbSBhIGZhY3RvcnkgZm9yIE1lbW9yeVJlc3BvbnNlXG5cdCAqIEBwYXJhbSBtZW1vcnlSZXNwb25zZUZhY3RvcnkgLSBjcmVhdGVzIE1lbW9yeVJlc3BvbnNlIHdoZW4gb2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkXG5cdCAqIEBwYXJhbSB3aXRoRGVsYXkgLSBpZiB0cnVlIChkZWZhdWx0KSwgYWRkIHNpbXVsYXRlZCBsYXRlbmN5IGRlbGF5IGZyb20gY29uZmlndXJhdGlvblxuXHQgKi9cblx0cHJvdGVjdGVkIGNyZWF0ZVJlc3BvbnNlJChtZW1vcnlSZXNwb25zZUZhY3Rvcnk6ICgpID0+IE1lbW9yeVJlc3BvbnNlLCB3aXRoRGVsYXkgPSB0cnVlKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBtZW1vcnlSZXNwb25zZSQgPSB0aGlzLmNyZWF0ZU1lbW9yeVJlc3BvbnNlJChtZW1vcnlSZXNwb25zZUZhY3RvcnkpO1xuXHRcdGNvbnN0IHJlc3BvbnNlJCA9IHRoaXMuY3JlYXRlUmVzcG9uc2UkZnJvbU1lbW9yeVJlc3BvbnNlJChtZW1vcnlSZXNwb25zZSQpO1xuXHRcdHJldHVybiB3aXRoRGVsYXkgPyB0aGlzLmFkZERlbGF5KHJlc3BvbnNlJCkgOiByZXNwb25zZSQ7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgY29sZCBPYnNlcnZhYmxlIG9mIE1lbW9yeVJlc3BvbnNlLlxuXHQgKiBAcGFyYW0gbWVtb3J5UmVzcG9uc2VGYWN0b3J5IC0gY3JlYXRlcyBNZW1vcnlSZXNwb25zZSB3aGVuIG9ic2VydmFibGUgaXMgc3Vic2NyaWJlZFxuXHQgKi9cblx0cHJvdGVjdGVkIGNyZWF0ZU1lbW9yeVJlc3BvbnNlJChtZW1vcnlSZXNwb25zZUZhY3Rvcnk6ICgpID0+IE1lbW9yeVJlc3BvbnNlKTogT2JzZXJ2YWJsZTxNZW1vcnlSZXNwb25zZT4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZTxNZW1vcnlSZXNwb25zZT4oKG9ic2VydmVyOiBPYnNlcnZlcjxNZW1vcnlSZXNwb25zZT4pID0+IHtcblx0XHRcdGxldCByZXNwb25zZTogTWVtb3J5UmVzcG9uc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXNwb25zZSA9IG1lbW9yeVJlc3BvbnNlRmFjdG9yeSgpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0ZXJyb3IgPSBlcnJvci5tZXNzYWdlIHx8IGVycm9yO1xuXHRcdFx0XHRyZXNwb25zZSA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSgnJywgU1RBVFVTX0NPREUuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBgJHtlcnJvcn1gKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlc3BvbnNlLnN0YXR1c1RleHQgPSBnZXRTdGF0dXNUZXh0KHN0YXR1cyk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgZmFpbHVyZSAqLyB9XG5cdFx0XHRpZiAoaXNTdWNjZXNzKHN0YXR1cykpIHtcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dChyZXNwb25zZSk7XG5cdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvYnNlcnZlci5lcnJvcihyZXNwb25zZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKCkgPT4geyB9OyAvLyB1bnN1YnNjcmliZSBmdW5jdGlvblxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmQgZmlyc3QgaW5zdGFuY2Ugb2YgaXRlbSBpbiBjb2xsZWN0aW9uIGJ5IGBpdGVtLmlkYFxuXHQgKiBAcGFyYW0gY29sbGVjdGlvblxuXHQgKiBAcGFyYW0gaWRcblx0ICovXG5cdHByb3RlY3RlZCBmaW5kQnlJZDxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgaWQ6IGFueSk6IFQge1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmZpbmQoKGl0ZW06IFQpID0+IGl0ZW0uaWQgPT09IGlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSB0aGUgbmV4dCBhdmFpbGFibGUgaWQgZm9yIGl0ZW0gaW4gdGhpcyBjb2xsZWN0aW9uXG5cdCAqIFVzZSBtZXRob2QgZnJvbSBgZGF0YVNlcnZpY2VgIGlmIGl0IGV4aXN0cyBhbmQgcmV0dXJucyBhIHZhbHVlLFxuXHQgKiBlbHNlIGRlbGVnYXRlcyB0byBgZ2VuSWREZWZhdWx0YC5cblx0ICogQHBhcmFtIGNvbGxlY3Rpb24gLSBjb2xsZWN0aW9uIG9mIGl0ZW1zIHdpdGggYGlkYCBrZXkgcHJvcGVydHlcblx0ICovXG5cdHByb3RlY3RlZCBnZW5JZDxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0Y29uc3QgZ2VuSWQgPSB0aGlzLmJpbmQoJ2dlbklkJyk7XG5cdFx0aWYgKGdlbklkKSB7XG5cdFx0XHRjb25zdCBpZCA9IGdlbklkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG5cdFx0XHRpZiAoaWQgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybiBpZDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZ2VuSWREZWZhdWx0KGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IGdlbmVyYXRvciBvZiB0aGUgbmV4dCBhdmFpbGFibGUgaWQgZm9yIGl0ZW0gaW4gdGhpcyBjb2xsZWN0aW9uXG5cdCAqIFRoaXMgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiB3b3JrcyBvbmx5IGZvciBudW1lcmljIGlkcy5cblx0ICogQHBhcmFtIGNvbGxlY3Rpb24gLSBjb2xsZWN0aW9uIG9mIGl0ZW1zIHdpdGggYGlkYCBrZXkgcHJvcGVydHlcblx0ICogQHBhcmFtIGNvbGxlY3Rpb25OYW1lIC0gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuXHQgKi9cblx0cHJvdGVjdGVkIGdlbklkRGVmYXVsdDxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0aWYgKCF0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYyhjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgQ29sbGVjdGlvbiAnJHtjb2xsZWN0aW9uTmFtZX0nIGlkIHR5cGUgaXMgbm9uLW51bWVyaWMgb3IgdW5rbm93bi4gQ2FuIG9ubHkgZ2VuZXJhdGUgbnVtZXJpYyBpZHMuYCk7XG5cdFx0fVxuXHRcdGxldCBtYXhJZCA9IDA7XG5cdFx0Y29sbGVjdGlvbi5yZWR1Y2UoKHByZXY6IGFueSwgaXRlbTogYW55KSA9PiB7XG5cdFx0XHRtYXhJZCA9IE1hdGgubWF4KG1heElkLCB0eXBlb2YgaXRlbS5pZCA9PT0gJ251bWJlcicgPyBpdGVtLmlkIDogbWF4SWQpO1xuXHRcdH0sIHVuZGVmaW5lZCk7XG5cdFx0cmV0dXJuIG1heElkICsgMTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgbG9jYXRpb24gaW5mbyBmcm9tIGEgdXJsLCBldmVuIG9uIHNlcnZlciB3aGVyZSBgZG9jdW1lbnRgIGlzIG5vdCBkZWZpbmVkXG5cdCAqL1xuXHRwcm90ZWN0ZWQgZ2V0TG9jYXRpb24odXJsOiBzdHJpbmcpOiBVcmlJbmZvIHtcblx0XHRpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwJykpIHtcblx0XHRcdC8vIGdldCB0aGUgZG9jdW1lbnQgaWYgcnVubmluZyBpbiBicm93c2VyXG5cdFx0XHRjb25zdCBkb2N1bWVudF86IERvY3VtZW50ID0gKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpID8gdW5kZWZpbmVkIDogZG9jdW1lbnQ7XG5cdFx0XHQvLyBhZGQgaG9zdCBpbmZvIHRvIHVybCBiZWZvcmUgcGFyc2luZy4gIFVzZSBhIGZha2UgaG9zdCB3aGVuIG5vdCBpbiBicm93c2VyLlxuXHRcdFx0Y29uc3QgYmFzZSA9IGRvY3VtZW50XyA/IGRvY3VtZW50Xy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBkb2N1bWVudF8ubG9jYXRpb24uaG9zdCA6ICdodHRwOi8vZmFrZSc7XG5cdFx0XHR1cmwgPSB1cmwuc3RhcnRzV2l0aCgnLycpID8gYmFzZSArIHVybCA6IGJhc2UgKyAnLycgKyB1cmw7XG5cdFx0fVxuXHRcdHJldHVybiBwYXJzZVVyaSh1cmwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIGdldCBvciBjcmVhdGUgdGhlIGZ1bmN0aW9uIHRoYXQgcGFzc2VzIHVuaGFuZGxlZCByZXF1ZXN0c1xuXHQgKiB0aHJvdWdoIHRvIHRoZSBcInJlYWxcIiBiYWNrZW5kLlxuXHQgKi9cblx0cHJvdGVjdGVkIGdldFBhc3NUaHJ1QmFja2VuZCgpOiBQYXNzVGhydUJhY2tlbmQge1xuXHRcdHJldHVybiB0aGlzLnBhc3NUaHJ1QmFja2VuZCA/IHRoaXMucGFzc1RocnVCYWNrZW5kIDogdGhpcy5wYXNzVGhydUJhY2tlbmQgPSB0aGlzLmNyZWF0ZVBhc3NUaHJ1QmFja2VuZCgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGluZGV4T2YoY29sbGVjdGlvbjogYW55W10sIGlkOiBudW1iZXIpIHtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5maW5kSW5kZXgoKGl0ZW06IGFueSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJldHVybiB0cnVlIGlmIGNhbiBkZXRlcm1pbmUgdGhhdCB0aGUgY29sbGVjdGlvbidzIGBpdGVtLmlkYCBpcyBhIG51bWJlclxuXHQgKiBUaGlzIGltcGxlbWVudGF0aW9uIGNhbid0IHRlbGwgaWYgdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkgc28gaXQgYXNzdW1lcyBOT1xuXHQgKiAqL1xuXHRwcm90ZWN0ZWQgaXNDb2xsZWN0aW9uSWROdW1lcmljPFQgZXh0ZW5kcyB7IGlkOiBhbnkgfT4oY29sbGVjdGlvbjogVFtdLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0Ly8gY29sbGVjdGlvbk5hbWUgbm90IHVzZWQgbm93IGJ1dCBvdmVycmlkZSBtaWdodCBtYWludGFpbiBjb2xsZWN0aW9uIHR5cGUgaW5mb3JtYXRpb25cblx0XHQvLyBzbyB0aGF0IGl0IGNvdWxkIGtub3cgdGhlIHR5cGUgb2YgdGhlIGBpZGAgZXZlbiB3aGVuIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5LlxuXHRcdC8vIHJldHVybiAhIShjb2xsZWN0aW9uICYmIGNvbGxlY3Rpb25bMF0pICYmIHR5cGVvZiBjb2xsZWN0aW9uWzBdLmlkID09PSAnbnVtYmVyJztcblx0XHRyZXR1cm4gISEoY29sbGVjdGlvbiAmJiBjb2xsZWN0aW9uWzBdKTtcblx0fVxuXG5cdHByb3RlY3RlZCByZW1vdmVCeUlkKGNvbGxlY3Rpb246IGFueVtdLCBpZDogbnVtYmVyKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuXHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRjb2xsZWN0aW9uLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRlbGwgeW91ciBpbi1tZW0gXCJkYXRhYmFzZVwiIHRvIHJlc2V0LlxuXHQgKiByZXR1cm5zIE9ic2VydmFibGUgb2YgdGhlIGRhdGFiYXNlIGJlY2F1c2UgcmVzZXR0aW5nIGl0IGNvdWxkIGJlIGFzeW5jXG5cdCAqL1xuXHRwcm90ZWN0ZWQgcmVzZXREYihyZXF1ZXN0PzogTWVtb3J5UmVxdWVzdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHRoaXMuZGF0YWJhc2VSZWFkeVN1YmplY3QubmV4dChmYWxzZSk7XG5cdFx0Y29uc3QgZGF0YWJhc2UgPSB0aGlzLmRhdGFTZXJ2aWNlLmNyZWF0ZURiKHJlcXVlc3QpO1xuXHRcdGNvbnN0IGRhdGFiYXNlJCA9IGRhdGFiYXNlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSA/IGRhdGFiYXNlIDpcblx0XHRcdHR5cGVvZiAoZGF0YWJhc2UgYXMgYW55KS50aGVuID09PSAnZnVuY3Rpb24nID8gZnJvbShkYXRhYmFzZSBhcyBQcm9taXNlPGFueT4pIDpcblx0XHRcdFx0b2YoZGF0YWJhc2UpO1xuXHRcdGRhdGFiYXNlJC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgoZGF0YWJhc2U6IHt9KSA9PiB7XG5cdFx0XHR0aGlzLmRhdGFiYXNlID0gZGF0YWJhc2U7XG5cdFx0XHR0aGlzLmRhdGFiYXNlUmVhZHlTdWJqZWN0Lm5leHQodHJ1ZSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YWJhc2VSZWFkeTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21tYW5kcyByZWNvbmZpZ3VyZSB0aGUgaW4tbWVtb3J5IHdlYiBhcGkgc2VydmljZSBvciBleHRyYWN0IGluZm9ybWF0aW9uIGZyb20gaXQuXG5cdCAqIENvbW1hbmRzIGlnbm9yZSB0aGUgbGF0ZW5jeSBkZWxheSBhbmQgcmVzcG9uZCBBU0FQLlxuXHQgKlxuXHQgKiBXaGVuIHRoZSBsYXN0IHNlZ21lbnQgb2YgdGhlIGBhcGlCYXNlYCBwYXRoIGlzIFwiY29tbWFuZHNcIixcblx0ICogdGhlIGBjb2xsZWN0aW9uTmFtZWAgaXMgdGhlIGNvbW1hbmQuXG5cdCAqXG5cdCAqIEV4YW1wbGUgVVJMczpcblx0ICogICBjb21tYW5kcy9yZXNldGRiIChQT1NUKSAvLyBSZXNldCB0aGUgXCJkYXRhYmFzZVwiIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZVxuXHQgKiAgIGNvbW1hbmRzL2NvbmZpZyAoR0VUKSAgIC8vIFJldHVybiB0aGlzIHNlcnZpY2UncyBjb25maWcgb2JqZWN0XG5cdCAqICAgY29tbWFuZHMvY29uZmlnIChQT1NUKSAgLy8gVXBkYXRlIHRoZSBjb25maWcgKGUuZy4gdGhlIGRlbGF5KVxuXHQgKlxuXHQgKiBVc2FnZTpcblx0ICogICBodHRwLnBvc3QoJ2NvbW1hbmRzL3Jlc2V0ZGInLCB1bmRlZmluZWQpO1xuXHQgKiAgIGh0dHAuZ2V0KCdjb21tYW5kcy9jb25maWcnKTtcblx0ICogICBodHRwLnBvc3QoJ2NvbW1hbmRzL2NvbmZpZycsICd7XCJkZWxheVwiOjEwMDB9Jyk7XG5cdCAqL1xuXHRwcm90ZWN0ZWQgY29tbWFuZHMocmVxdWVzdDogTWVtb3J5UmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgY29tbWFuZCA9IHJlcXVlc3QuY29sbGVjdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRjb25zdCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZDtcblx0XHRsZXQgcmVzcG9uc2U6IE1lbW9yeVJlc3BvbnNlID0ge1xuXHRcdFx0dXJsOiByZXF1ZXN0LnVybFxuXHRcdH07XG5cdFx0c3dpdGNoIChjb21tYW5kKSB7XG5cdFx0XHRjYXNlICdyZXNldGRiJzpcblx0XHRcdFx0cmVzcG9uc2Uuc3RhdHVzID0gU1RBVFVTX0NPREUuTk9fQ09OVEVOVDtcblx0XHRcdFx0cmV0dXJuIHRoaXMucmVzZXREYihyZXF1ZXN0KS5waXBlKFxuXHRcdFx0XHRcdGNvbmNhdE1hcCgoKSA9PiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNwb25zZSwgZmFsc2UgLyogbm8gbGF0ZW5jeSBkZWxheSAqLykpXG5cdFx0XHRcdCk7XG5cdFx0XHRjYXNlICdjb25maWcnOlxuXHRcdFx0XHRpZiAobWV0aG9kID09PSAnZ2V0Jykge1xuXHRcdFx0XHRcdHJlc3BvbnNlLnN0YXR1cyA9IFNUQVRVU19DT0RFLk9LO1xuXHRcdFx0XHRcdHJlc3BvbnNlLmJvZHkgPSB0aGlzLmNsb25lKHRoaXMuY29uZmlnKTtcblx0XHRcdFx0XHQvLyBhbnkgb3RoZXIgSFRUUCBtZXRob2QgaXMgYXNzdW1lZCB0byBiZSBhIGNvbmZpZyB1cGRhdGVcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCBib2R5ID0gcmVxdWVzdC5yZXF1ZXN0LmJvZHk7XG5cdFx0XHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgYm9keSk7XG5cdFx0XHRcdFx0dGhpcy5wYXNzVGhydUJhY2tlbmQgPSB1bmRlZmluZWQ7IC8vIHJlLWNyZWF0ZSB3aGVuIG5lZWRlZFxuXHRcdFx0XHRcdHJlc3BvbnNlLnN0YXR1cyA9IFNUQVRVU19DT0RFLk5PX0NPTlRFTlQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXNwb25zZSA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZShyZXF1ZXN0LnVybCwgU1RBVFVTX0NPREUuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBgVW5rbm93biBjb21tYW5kIFwiJHtjb21tYW5kfVwiYCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNwb25zZSwgZmFsc2UgLyogbm8gbGF0ZW5jeSBkZWxheSAqLyk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0KHsgY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMsIGlkLCBxdWVyeSwgdXJsIH06IE1lbW9yeVJlcXVlc3QpOiBNZW1vcnlSZXNwb25zZSB7XG5cdFx0bGV0IGRhdGEgPSBjb2xsZWN0aW9uO1xuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG5cdFx0aWYgKGlkICE9IHVuZGVmaW5lZCAmJiBpZCAhPT0gJycpIHtcblx0XHRcdGRhdGEgPSB0aGlzLmZpbmRCeUlkKGNvbGxlY3Rpb24sIGlkKTtcblx0XHRcdGlmICghZGF0YSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgJyR7Y29sbGVjdGlvbk5hbWV9JyB3aXRoIGlkPScke2lkfScgbm90IGZvdW5kYCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChxdWVyeSkge1xuXHRcdFx0ZGF0YSA9IHRoaXMuYXBwbHlRdWVyeShjb2xsZWN0aW9uLCBxdWVyeSk7XG5cdFx0XHRpZiAoIWRhdGEubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5OT1RfRk9VTkQsIGAnJHtjb2xsZWN0aW9uTmFtZX0nIHdpdGggaWQ9JyR7aWR9JyBub3QgZm91bmRgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGJvZHk6IHRoaXMuYm9kaWZ5KHRoaXMuY2xvbmUoZGF0YSkpLFxuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcblx0XHRcdHN0YXR1czogU1RBVFVTX0NPREUuT0tcblx0XHR9O1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGVudGl0eVxuXHQvLyBDYW4gdXBkYXRlIGFuIGV4aXN0aW5nIGVudGl0eSB0b28gaWYgcG9zdDQwOSBpcyBmYWxzZS5cblx0cHJvdGVjdGVkIHBvc3QoeyBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaGVhZGVycywgaWQsIHJlcXVlc3QsIHJlc291cmNlVXJsLCB1cmwgfTogTWVtb3J5UmVxdWVzdCk6IE1lbW9yeVJlc3BvbnNlIHtcblx0XHRjb25zdCByZXF1ZXN0Qm9keSA9IHJlcXVlc3QuYm9keTtcblx0XHRjb25zdCBpdGVtOiBhbnkgPSB0aGlzLmNsb25lKHJlcXVlc3RCb2R5KTtcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuXHRcdGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aXRlbS5pZCA9IGlkIHx8IHRoaXMuZ2VuSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc3QgbWVzc2FnZTogc3RyaW5nID0gZXJyb3IubWVzc2FnZSB8fCAnJztcblx0XHRcdFx0aWYgKC9pZCB0eXBlIGlzIG5vbi1udW1lcmljLy50ZXN0KG1lc3NhZ2UpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLlVOUFJPQ0VTU0FCTEVfRU5UUlksIG1lc3NhZ2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGBGYWlsZWQgdG8gZ2VuZXJhdGUgbmV3IGlkIGZvciAnJHtjb2xsZWN0aW9uTmFtZX0nYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuQkFEX1JFUVVFU1QsIGBSZXF1ZXN0IGlkIGRvZXMgbm90IG1hdGNoIGl0ZW0uaWRgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWQgPSBpdGVtLmlkO1xuXHRcdH1cblx0XHRjb25zdCBleGlzdGluZ0l4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcblx0XHRjb25zdCBib2R5ID0gdGhpcy5ib2RpZnkoaXRlbSk7XG5cdFx0aWYgKGV4aXN0aW5nSXggPT09IC0xKSB7XG5cdFx0XHRjb2xsZWN0aW9uLnB1c2goaXRlbSk7XG5cdFx0XHRoZWFkZXJzLnNldCgnTG9jYXRpb24nLCByZXNvdXJjZVVybCArICcvJyArIGlkKTtcblx0XHRcdHJldHVybiB7IGhlYWRlcnMsIGJvZHksIHN0YXR1czogU1RBVFVTX0NPREUuQ1JFQVRFRCB9O1xuXHRcdH0gZWxzZSBpZiAodGhpcy5jb25maWcucG9zdDQwOSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLkNPTkZMSUNULCBgJyR7Y29sbGVjdGlvbk5hbWV9JyBpdGVtIHdpdGggaWQ9JyR7aWR9IGV4aXN0cyBhbmQgbWF5IG5vdCBiZSB1cGRhdGVkIHdpdGggUE9TVDsgdXNlIFBVVCBpbnN0ZWFkLmApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2xsZWN0aW9uW2V4aXN0aW5nSXhdID0gaXRlbTtcblx0XHRcdHJldHVybiB0aGlzLmNvbmZpZy5wb3N0MjA0ID9cblx0XHRcdFx0eyBoZWFkZXJzLCBzdGF0dXM6IFNUQVRVU19DT0RFLk5PX0NPTlRFTlQgfSA6IC8vIHN1Y2Nlc3NmdWw7IG5vIGNvbnRlbnRcblx0XHRcdFx0eyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVU19DT0RFLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcblx0XHR9XG5cdH1cblxuXHQvLyBVcGRhdGUgZXhpc3RpbmcgZW50aXR5XG5cdC8vIENhbiBjcmVhdGUgYW4gZW50aXR5IHRvbyBpZiBwdXQ0MDQgaXMgZmFsc2UuXG5cdHByb3RlY3RlZCBwdXQoeyBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaGVhZGVycywgaWQsIHJlcXVlc3QsIHVybCB9OiBNZW1vcnlSZXF1ZXN0KTogTWVtb3J5UmVzcG9uc2Uge1xuXHRcdGNvbnN0IGl0ZW0gPSB0aGlzLmNsb25lKHJlcXVlc3QuYm9keSk7XG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcblx0XHRpZiAoaXRlbS5pZCA9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5OT1RfRk9VTkQsIGBNaXNzaW5nICcke2NvbGxlY3Rpb25OYW1lfScgaWRgKTtcblx0XHR9XG5cdFx0aWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuQkFEX1JFUVVFU1QsIGBSZXF1ZXN0IGZvciAnJHtjb2xsZWN0aW9uTmFtZX0nIGlkIGRvZXMgbm90IG1hdGNoIGl0ZW0uaWRgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWQgPSBpdGVtLmlkO1xuXHRcdH1cblx0XHRjb25zdCBleGlzdGluZ0l4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcblx0XHRjb25zdCBib2R5ID0gdGhpcy5ib2RpZnkoaXRlbSk7XG5cdFx0aWYgKGV4aXN0aW5nSXggPiAtMSkge1xuXHRcdFx0Y29sbGVjdGlvbltleGlzdGluZ0l4XSA9IGl0ZW07XG5cdFx0XHRyZXR1cm4gdGhpcy5jb25maWcucHV0MjA0ID9cblx0XHRcdFx0eyBoZWFkZXJzLCBzdGF0dXM6IFNUQVRVU19DT0RFLk5PX0NPTlRFTlQgfSA6IC8vIHN1Y2Nlc3NmdWw7IG5vIGNvbnRlbnRcblx0XHRcdFx0eyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVU19DT0RFLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcblx0XHR9IGVsc2UgaWYgKHRoaXMuY29uZmlnLnB1dDQwNCkge1xuXHRcdFx0Ly8gaXRlbSB0byB1cGRhdGUgbm90IGZvdW5kOyB1c2UgUE9TVCB0byBjcmVhdGUgbmV3IGl0ZW0gZm9yIHRoaXMgaWQuXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgJyR7Y29sbGVjdGlvbk5hbWV9JyBpdGVtIHdpdGggaWQ9JyR7aWR9IG5vdCBmb3VuZCBhbmQgbWF5IG5vdCBiZSBjcmVhdGVkIHdpdGggUFVUOyB1c2UgUE9TVCBpbnN0ZWFkLmApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBjcmVhdGUgbmV3IGl0ZW0gZm9yIGlkIG5vdCBmb3VuZFxuXHRcdFx0Y29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xuXHRcdFx0cmV0dXJuIHsgaGVhZGVycywgYm9keSwgc3RhdHVzOiBTVEFUVVNfQ09ERS5DUkVBVEVEIH07XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGRlbGV0ZSh7IGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzLCBpZCwgdXJsIH06IE1lbW9yeVJlcXVlc3QpOiBNZW1vcnlSZXNwb25zZSB7XG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcblx0XHRpZiAoaWQgPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgTWlzc2luZyBcIiR7Y29sbGVjdGlvbk5hbWV9XCIgaWRgKTtcblx0XHR9XG5cdFx0Y29uc3QgZXhpc3RzID0gdGhpcy5yZW1vdmVCeUlkKGNvbGxlY3Rpb24sIGlkKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcblx0XHRcdHN0YXR1czogKGV4aXN0cyB8fCAhdGhpcy5jb25maWcuZGVsZXRlNDA0KSA/IFNUQVRVU19DT0RFLk5PX0NPTlRFTlQgOiBTVEFUVVNfQ09ERS5OT1RfRk9VTkRcblx0XHR9O1xuXHR9XG5cblx0Ly8vLy8vL1xuXG5cblx0aGFuZGxlKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiB0aGlzLmhhbmRsZVJlcXVlc3QocmVxdWVzdCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHJlcXVlc3QudXJsLCBTVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGAke2Vycm9yLm1lc3NhZ2UgfHwgZXJyb3J9YCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gcmVzcG9uc2UpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBjcmVhdGVRdWVyeU1hcChzZWFyY2g6IHN0cmluZyk6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPiB7XG5cdFx0Y29uc3QgbWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPigpO1xuXHRcdGlmIChzZWFyY2gpIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZnJvbVN0cmluZzogc2VhcmNoIH0pO1xuXHRcdFx0cGFyYW1zLmtleXMoKS5mb3JFYWNoKHAgPT4gbWFwLnNldChwLCBwYXJhbXMuZ2V0QWxsKHApKSk7XG5cdFx0fVxuXHRcdHJldHVybiBtYXA7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlUmVzcG9uc2UkZnJvbU1lbW9yeVJlc3BvbnNlJChyZXNwb25zZSQ6IE9ic2VydmFibGU8TWVtb3J5UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4ge1xuXHRcdHJldHVybiByZXNwb25zZSQucGlwZShcblx0XHRcdG1hcCgob3B0aW9uczogSHR0cFJlc3BvbnNlQmFzZSkgPT4gbmV3IEh0dHBSZXNwb25zZTxhbnk+KG9wdGlvbnMpKSxcblx0XHQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZVBhc3NUaHJ1QmFja2VuZCgpIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIG5ldyBIdHRwWGhyQmFja2VuZCh0aGlzLmZhY3RvcnkpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRlcnJvci5tZXNzYWdlID0gJ0Nhbm5vdCBjcmVhdGUgcGFzc1RocnU0MDQgYmFja2VuZDsgJyArIChlcnJvci5tZXNzYWdlIHx8ICcnKTtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=