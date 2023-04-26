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
            return this.databaseReadySubject.asObservable().pipe(first((/**
             * @param {?} ready
             * @return {?}
             */
            function (ready) { return ready; })));
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
        return this.databaseReady.pipe(concatMap((/**
         * @return {?}
         */
        function () { return _this.handleRequest_(request); })));
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
            return this.createResponse$((/**
             * @return {?}
             */
            function () { return response; }));
        }
        if (this.database[collectionName]) {
            // request is for a known collection of the MemoryDataService
            return this.createResponse$((/**
             * @return {?}
             */
            function () { return _this.collectionHandler(memoryRequest); }));
        }
        if (this.config.passThruUnknownUrl) {
            // unknown collection; pass request thru to a "real" backend.
            return this.getPassThruBackend().handle(request);
        }
        // 404 - can't handle this request
        response = this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, "Collection '" + collectionName + "' not found");
        return this.createResponse$((/**
         * @return {?}
         */
        function () { return response; }));
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
        query.forEach((/**
         * @param {?} value
         * @param {?} name
         * @return {?}
         */
        function (value, name) {
            value.forEach((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return conditions.push({
                name: name,
                regexp: new RegExp(decodeURI(x), caseSensitive)
            }); }));
        }));
        /** @type {?} */
        var length = conditions.length;
        if (!length) {
            return collection;
        }
        // AND the RegExp conditions
        return collection.filter((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
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
        }));
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
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
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
            return (/**
             * @return {?}
             */
            function () { }); // unsubscribe function
        }));
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
        return collection.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.id === id; }));
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
        collection.reduce((/**
         * @param {?} prev
         * @param {?} item
         * @return {?}
         */
        function (prev, item) {
            maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
        }), undefined);
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
        return collection.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.id === id; }));
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
        database$.pipe(first()).subscribe((/**
         * @param {?} database
         * @return {?}
         */
        function (database) {
            _this.database = database;
            _this.databaseReadySubject.next(true);
        }));
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
                return this.resetDb(request).pipe(concatMap((/**
                 * @return {?}
                 */
                function () { return _this.createResponse$((/**
                 * @return {?}
                 */
                function () { return response; }), false /* no latency delay */); })));
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
        return this.createResponse$((/**
         * @return {?}
         */
        function () { return response; }), false /* no latency delay */);
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
            return this.createResponse$((/**
             * @return {?}
             */
            function () { return response_1; }));
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
            params_1.keys().forEach((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return map.set(p, params_1.getAll(p)); }));
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
        return response$.pipe(map((/**
         * @param {?} options
         * @return {?}
         */
        function (options) { return new HttpResponse(options); })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTBCLFdBQVcsRUFBRSxVQUFVLEVBQWUsWUFBWSxFQUFvQixjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEssT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQVksRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQW1ELFFBQVEsRUFBbUIsbUJBQW1CLEVBQVcsTUFBTSxVQUFVLENBQUM7QUFDNUssT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkU7SUFRQyx3QkFDVyxXQUE4QixFQUN4QyxNQUFnQyxFQUN4QixPQUFtQjtRQUQzQix1QkFBQSxFQUFBLFdBQWdDO1FBRHRCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUVoQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBUGxCLFdBQU0sR0FBd0IsSUFBSSxtQkFBbUIsRUFBRSxDQUFDOztZQVMzRCxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLGlDQUFpQztRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsK0NBQStDO1FBQ3JGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0JBQWMseUNBQWE7Ozs7O1FBQTNCO1lBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDL0Isb0NBQW9DO2dCQUNwQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNmO1lBQ0QsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNuRCxLQUFLOzs7O1lBQUMsVUFBQyxLQUFjLElBQUssT0FBQSxLQUFLLEVBQUwsQ0FBSyxFQUFDLENBQ2hDLENBQUM7UUFDSCxDQUFDOzs7T0FBQTtJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXVCRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNPLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBdkIsVUFBd0IsT0FBeUI7UUFBakQsaUJBR0M7UUFGQSwwREFBMEQ7UUFDMUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7O0lBRVMsdUNBQWM7Ozs7O0lBQXhCLFVBQXlCLE9BQXlCO1FBQWxELGlCQXFEQzs7WUFwRE0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7Ozs7WUFLakUsTUFBTSxHQUFxQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQzs7WUFDcEQsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjOztZQUN0QyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7O1lBQzFDLGFBQWEsR0FBa0I7WUFDcEMsT0FBTyxFQUFFLE9BQU87WUFDaEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztZQUN2QixVQUFVLEVBQUUsVUFBVTtZQUN0QixjQUFjLEVBQUUsY0FBYztZQUM5QixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztZQUNoRSxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDdkQsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDL0MsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztZQUMvQixHQUFHLEVBQUUsR0FBRztTQUNSOzs7WUFFSyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNuRCxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2hELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNwQzs7WUFDSyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDekQsSUFBSSxpQkFBaUIsRUFBRTs7Ozs7Z0JBSWhCLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztZQUM1RCxJQUFJLG1CQUFtQixFQUFFO2dCQUN4QixPQUFPLG1CQUFtQixDQUFDO2FBQzNCO1NBQ0Q7OztZQUVHLFFBQVEsR0FBbUIsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3BGLElBQUksUUFBUSxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsZUFBZTs7O1lBQUMsY0FBTSxPQUFBLFFBQVEsRUFBUixDQUFRLEVBQUMsQ0FBQztTQUM1QztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNsQyw2REFBNkQ7WUFDN0QsT0FBTyxJQUFJLENBQUMsZUFBZTs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsRUFBckMsQ0FBcUMsRUFBQyxDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFO1lBQ25DLDZEQUE2RDtZQUM3RCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqRDtRQUNELGtDQUFrQztRQUNsQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsU0FBUyxFQUFFLGlCQUFlLGNBQWMsZ0JBQWEsQ0FBQyxDQUFDO1FBQzVHLE9BQU8sSUFBSSxDQUFDLGVBQWU7OztRQUFDLGNBQU0sT0FBQSxRQUFRLEVBQVIsQ0FBUSxFQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7O09BZ0JHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDTyx3Q0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBekIsVUFBMEIsR0FBVztRQUNwQyxJQUFJOztnQkFDRyxVQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7O2dCQUNsQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTTs7Z0JBQ2xDLE9BQU8sR0FBRyxFQUFFO1lBQ2hCLElBQUksVUFBUSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDdkMsd0NBQXdDO2dCQUN4QywrQ0FBK0M7Z0JBQy9DLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7Z0JBQzlCLE9BQU8sR0FBRyxVQUFRLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxVQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQzthQUN6RDs7Z0JBQ0ssSUFBSSxHQUFHLFVBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzs7Z0JBQ3BDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ2hDLFNBQVMsR0FBRyxDQUFDOzs7Ozs7Z0JBS2IsT0FBTyxTQUFRO1lBQ25CLHlDQUF5QztZQUN6QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLFNBQVMsRUFBRTtnQkFDckMsT0FBTyxHQUFHLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNOLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLE9BQU8sRUFBRTtvQkFDWixTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7aUJBQ3RDO3FCQUFNO29CQUNOLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQywwQ0FBMEM7aUJBQ3pEO2FBQ0Q7WUFDRCxPQUFPLElBQUksR0FBRyxDQUFDOztnQkFDWCxjQUFjLEdBQUcsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzlDLG9FQUFvRTtZQUNwRSxjQUFjLEdBQUcsY0FBYyxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUMxRCxFQUFFLEdBQUcsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDOztnQkFDOUIsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBUSxDQUFDLEtBQUssQ0FBQzs7Z0JBQzNDLFdBQVcsR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLGNBQWMsR0FBRyxHQUFHO1lBQzVELE9BQU8sRUFBRSxPQUFPLFNBQUEsRUFBRSxjQUFjLGdCQUFBLEVBQUUsRUFBRSxJQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQztTQUMzRDtRQUFDLE9BQU8sS0FBSyxFQUFFOztnQkFDVCxPQUFPLEdBQUcsMEJBQXdCLEdBQUcsMkJBQXNCLEtBQUssQ0FBQyxPQUFTO1lBQ2hGLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekI7SUFDRixDQUFDO0lBRUQsdUVBQXVFOzs7Ozs7Ozs7SUFDN0QsZ0NBQU87Ozs7Ozs7O0lBQWpCLFVBQWtCLFVBQWlCLEVBQUUsY0FBc0IsRUFBRSxFQUFVO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxFQUFFO1lBQzVELHFFQUFxRTtZQUNyRSxnREFBZ0Q7WUFDaEQsT0FBTyxFQUFFLENBQUM7U0FDVjs7WUFDSyxLQUFLLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUM1QixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ08saUNBQVE7Ozs7OztJQUFsQixVQUFtQixRQUF5Qjs7WUFDckMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztRQUMvQixPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksR0FBRyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7Ozs7SUFDTyxtQ0FBVTs7Ozs7Ozs7O0lBQXBCLFVBQXFCLFVBQWlCLEVBQUUsS0FBNEI7OztZQUU3RCxVQUFVLEdBQXVDLEVBQUU7O1lBQ25ELGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUc7UUFDdkUsS0FBSyxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxLQUFlLEVBQUUsSUFBWTtZQUMzQyxLQUFLLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDbEMsSUFBSSxNQUFBO2dCQUNKLE1BQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDO2FBQy9DLENBQUMsRUFIaUIsQ0FHakIsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7O1lBQ0csTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWixPQUFPLFVBQVUsQ0FBQztTQUNsQjtRQUNELDRCQUE0QjtRQUM1QixPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxHQUFHOztnQkFDdkIsR0FBRyxHQUFHLElBQUk7O2dCQUNWLENBQUMsR0FBRyxNQUFNO1lBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUNoQixDQUFDLElBQUksQ0FBQyxDQUFDOztvQkFDRCxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN2QztZQUNELE9BQU8sR0FBRyxDQUFDO1FBQ1osQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7O0lBQ08sNkJBQUk7Ozs7Ozs7SUFBZCxVQUFtQyxVQUFrQjs7WUFDOUMsTUFBTSxHQUFHLG1CQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUs7UUFDaEQsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLG1CQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFBLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVNLCtCQUFNOzs7O0lBQWIsVUFBYyxJQUFTO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRVMsOEJBQUs7Ozs7O0lBQWYsVUFBZ0IsSUFBUztRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVTLDBDQUFpQjs7Ozs7SUFBM0IsVUFBNEIsT0FBc0I7OztZQUU3QyxRQUF3QjtRQUM1QixRQUFRLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdkIsS0FBSyxLQUFLO2dCQUNULFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1lBQ1AsS0FBSyxNQUFNO2dCQUNWLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QixNQUFNO1lBQ1AsS0FBSyxLQUFLO2dCQUNULFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1lBQ1AsS0FBSyxRQUFRO2dCQUNaLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1A7Z0JBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO2dCQUN2RyxNQUFNO1NBQ1A7OztZQUVLLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3BELE1BQU07UUFDTixPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2hFLENBQUM7Ozs7Ozs7SUFFTSw0Q0FBbUI7Ozs7OztJQUExQixVQUEyQixHQUFXLEVBQUUsTUFBYyxFQUFFLE9BQWU7UUFDdEUsT0FBTztZQUNOLElBQUksRUFBRTtnQkFDTCxLQUFLLEVBQUUsS0FBRyxPQUFTO2FBQ25CO1lBQ0QsR0FBRyxFQUFFLEdBQUc7WUFDUixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3hCLGNBQWMsRUFBRSxrQkFBa0I7YUFDbEMsQ0FBQztZQUNGLE1BQU0sRUFBRSxNQUFNO1NBQ2QsQ0FBQztJQUNILENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7OztJQUNPLHdDQUFlOzs7Ozs7O0lBQXpCLFVBQTBCLHFCQUEyQyxFQUFFLFNBQWdCO1FBQWhCLDBCQUFBLEVBQUEsZ0JBQWdCOztZQUNoRixlQUFlLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDOztZQUNuRSxTQUFTLEdBQUcsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLGVBQWUsQ0FBQztRQUMxRSxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDTyw4Q0FBcUI7Ozs7OztJQUEvQixVQUFnQyxxQkFBMkM7UUFBM0UsaUJBcUJDO1FBcEJBLE9BQU8sSUFBSSxVQUFVOzs7O1FBQWlCLFVBQUMsUUFBa0M7O2dCQUNwRSxRQUF3QjtZQUM1QixJQUFJO2dCQUNILFFBQVEsR0FBRyxxQkFBcUIsRUFBRSxDQUFDO2FBQ25DO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2YsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO2dCQUMvQixRQUFRLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMscUJBQXFCLEVBQUUsS0FBRyxLQUFPLENBQUMsQ0FBQzthQUN2Rjs7Z0JBQ0ssTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNO1lBQzlCLElBQUk7Z0JBQ0gsUUFBUSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUM7WUFBQyxPQUFPLEtBQUssRUFBRSxFQUFFLG9CQUFvQixFQUFFO1lBQ3hDLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN4QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDcEI7aUJBQU07Z0JBQ04sUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN6QjtZQUNEOzs7WUFBTyxjQUFRLENBQUMsRUFBQyxDQUFDLHVCQUF1QjtRQUMxQyxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7Ozs7SUFDTyxpQ0FBUTs7Ozs7Ozs7SUFBbEIsVUFBMEMsVUFBZSxFQUFFLEVBQU87UUFDakUsT0FBTyxVQUFVLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsSUFBTyxJQUFLLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWQsQ0FBYyxFQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7Ozs7OztJQUNPLDhCQUFLOzs7Ozs7Ozs7O0lBQWYsVUFBdUMsVUFBZSxFQUFFLGNBQXNCOztZQUN2RSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxLQUFLLEVBQUU7O2dCQUNKLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQztZQUM1Qyx5Q0FBeUM7WUFDekMsSUFBSSxFQUFFLElBQUksU0FBUyxFQUFFO2dCQUNwQixPQUFPLEVBQUUsQ0FBQzthQUNWO1NBQ0Q7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7OztJQUNPLHFDQUFZOzs7Ozs7Ozs7SUFBdEIsVUFBOEMsVUFBZSxFQUFFLGNBQXNCO1FBQ3BGLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxFQUFFO1lBQzVELE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWUsY0FBYyx3RUFBcUUsQ0FBQyxDQUFDO1NBQ3BIOztZQUNHLEtBQUssR0FBRyxDQUFDO1FBQ2IsVUFBVSxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxJQUFTLEVBQUUsSUFBUztZQUN0QyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxHQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNPLG9DQUFXOzs7Ozs7SUFBckIsVUFBc0IsR0FBVztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTs7O2dCQUV0QixTQUFTLEdBQWEsQ0FBQyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFROzs7Z0JBRTlFLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYTtZQUNyRyxHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDMUQ7UUFDRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ08sMkNBQWtCOzs7Ozs7SUFBNUI7UUFDQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDMUcsQ0FBQzs7Ozs7OztJQUVTLGdDQUFPOzs7Ozs7SUFBakIsVUFBa0IsVUFBaUIsRUFBRSxFQUFVO1FBQzlDLE9BQU8sVUFBVSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVMsSUFBSyxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsRUFBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7O1NBR0s7Ozs7Ozs7Ozs7O0lBQ0ssOENBQXFCOzs7Ozs7Ozs7O0lBQS9CLFVBQXVELFVBQWUsRUFBRSxjQUFzQjtRQUM3RixzRkFBc0Y7UUFDdEYsZ0ZBQWdGO1FBQ2hGLGtGQUFrRjtRQUNsRixPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7O0lBRVMsbUNBQVU7Ozs7OztJQUFwQixVQUFxQixVQUFpQixFQUFFLEVBQVU7O1lBQzNDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZixVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLElBQUksQ0FBQztTQUNaO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNPLGdDQUFPOzs7Ozs7O0lBQWpCLFVBQWtCLE9BQXVCO1FBQXpDLGlCQVdDO1FBVkEsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFDaEMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs7WUFDN0MsU0FBUyxHQUFHLFFBQVEsWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVELE9BQU8sQ0FBQyxtQkFBQSxRQUFRLEVBQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBQSxRQUFRLEVBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUM5RSxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2QsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFFBQVk7WUFDOUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7T0FnQkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNPLGlDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFsQixVQUFtQixPQUFzQjtRQUF6QyxpQkE0QkM7O1lBM0JNLE9BQU8sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRTs7WUFDOUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNOztZQUN6QixRQUFRLEdBQW1CO1lBQzlCLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztTQUNoQjtRQUNELFFBQVEsT0FBTyxFQUFFO1lBQ2hCLEtBQUssU0FBUztnQkFDYixRQUFRLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUM7Z0JBQ3pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ2hDLFNBQVM7OztnQkFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWU7OztnQkFBQyxjQUFNLE9BQUEsUUFBUSxFQUFSLENBQVEsR0FBRSxLQUFLLENBQUMsc0JBQXNCLENBQUMsRUFBbEUsQ0FBa0UsRUFBQyxDQUNuRixDQUFDO1lBQ0gsS0FBSyxRQUFRO2dCQUNaLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtvQkFDckIsUUFBUSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDO29CQUNqQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4Qyx5REFBeUQ7aUJBQ3pEO3FCQUFNOzt3QkFDQSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJO29CQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLENBQUMsd0JBQXdCO29CQUMxRCxRQUFRLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUM7aUJBQ3pDO2dCQUNELE1BQU07WUFDUDtnQkFDQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLHFCQUFxQixFQUFFLHVCQUFvQixPQUFPLE9BQUcsQ0FBQyxDQUFDO1NBQ3JIO1FBQ0QsT0FBTyxJQUFJLENBQUMsZUFBZTs7O1FBQUMsY0FBTSxPQUFBLFFBQVEsRUFBUixDQUFRLEdBQUUsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7O0lBRVMsNEJBQUc7Ozs7O0lBQWIsVUFBYyxFQUFzRTtZQUFwRSwwQkFBVSxFQUFFLGtDQUFjLEVBQUUsb0JBQU8sRUFBRSxVQUFFLEVBQUUsZ0JBQUssRUFBRSxZQUFHOztZQUM5RCxJQUFJLEdBQUcsVUFBVTtRQUNyQix5Q0FBeUM7UUFDekMsSUFBSSxFQUFFLElBQUksU0FBUyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDakMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1YsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxTQUFTLEVBQUUsTUFBSSxjQUFjLG1CQUFjLEVBQUUsZ0JBQWEsQ0FBQyxDQUFDO2FBQzdHO1NBQ0Q7YUFBTSxJQUFJLEtBQUssRUFBRTtZQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsU0FBUyxFQUFFLE1BQUksY0FBYyxtQkFBYyxFQUFFLGdCQUFhLENBQUMsQ0FBQzthQUM3RztTQUNEO1FBQ0QsT0FBTztZQUNOLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsT0FBTyxFQUFFLE9BQU87WUFDaEIsTUFBTSxFQUFFLFdBQVcsQ0FBQyxFQUFFO1NBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLHlEQUF5RDs7Ozs7Ozs7SUFDL0MsNkJBQUk7Ozs7Ozs7O0lBQWQsVUFBZSxFQUFxRjtZQUFuRiwwQkFBVSxFQUFFLGtDQUFjLEVBQUUsb0JBQU8sRUFBRSxVQUFFLEVBQUUsb0JBQU8sRUFBRSw0QkFBVyxFQUFFLFlBQUc7O1lBQzVFLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSTs7WUFDMUIsSUFBSSxHQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3pDLHlDQUF5QztRQUN6QyxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksU0FBUyxFQUFFO1lBQ3pCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDdkQ7WUFBQyxPQUFPLEtBQUssRUFBRTs7b0JBQ1QsT0FBTyxHQUFXLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRTtnQkFDM0MsSUFBSSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQzNDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQy9FO3FCQUFNO29CQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMscUJBQXFCLEVBQUUsb0NBQWtDLGNBQWMsTUFBRyxDQUFDLENBQUM7aUJBQzdIO2FBQ0Q7U0FDRDtRQUNELElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsV0FBVyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7U0FDbkc7YUFBTTtZQUNOLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ2I7O1lBQ0ssVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQzs7WUFDekMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzlCLElBQUksVUFBVSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNoRCxPQUFPLEVBQUUsT0FBTyxTQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN0RDthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsTUFBSSxjQUFjLHdCQUFtQixFQUFFLCtEQUE0RCxDQUFDLENBQUM7U0FDaEs7YUFBTTtZQUNOLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQixFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtnQkFDdkUsRUFBRSxPQUFPLFNBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsNEJBQTRCO1NBQ3hFO0lBQ0YsQ0FBQztJQUVELHlCQUF5QjtJQUN6QiwrQ0FBK0M7Ozs7Ozs7O0lBQ3JDLDRCQUFHOzs7Ozs7OztJQUFiLFVBQWMsRUFBd0U7WUFBdEUsMEJBQVUsRUFBRSxrQ0FBYyxFQUFFLG9CQUFPLEVBQUUsVUFBRSxFQUFFLG9CQUFPLEVBQUUsWUFBRzs7WUFDOUQsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNyQyx5Q0FBeUM7UUFDekMsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLFNBQVMsRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLFNBQVMsRUFBRSxjQUFZLGNBQWMsU0FBTSxDQUFDLENBQUM7U0FDOUY7UUFDRCxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLFdBQVcsRUFBRSxrQkFBZ0IsY0FBYyxnQ0FBNkIsQ0FBQyxDQUFDO1NBQzNIO2FBQU07WUFDTixFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNiOztZQUNLLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7O1lBQ3pDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNwQixVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUIsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7Z0JBQ3ZFLEVBQUUsT0FBTyxTQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLDRCQUE0QjtTQUN4RTthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDOUIscUVBQXFFO1lBQ3JFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsU0FBUyxFQUFFLE1BQUksY0FBYyx3QkFBbUIsRUFBRSxrRUFBK0QsQ0FBQyxDQUFDO1NBQ3BLO2FBQU07WUFDTixtQ0FBbUM7WUFDbkMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixPQUFPLEVBQUUsT0FBTyxTQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN0RDtJQUNGLENBQUM7Ozs7OztJQUVTLCtCQUFNOzs7OztJQUFoQixVQUFpQixFQUErRDtZQUE3RCwwQkFBVSxFQUFFLGtDQUFjLEVBQUUsb0JBQU8sRUFBRSxVQUFFLEVBQUUsWUFBRztRQUM5RCx5Q0FBeUM7UUFDekMsSUFBSSxFQUFFLElBQUksU0FBUyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsU0FBUyxFQUFFLGVBQVksY0FBYyxVQUFNLENBQUMsQ0FBQztTQUM5Rjs7WUFDSyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1FBQzlDLE9BQU87WUFDTixPQUFPLEVBQUUsT0FBTztZQUNoQixNQUFNLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUztTQUMzRixDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU87Ozs7OztJQUdQLCtCQUFNOzs7Ozs7SUFBTixVQUFPLE9BQXlCO1FBQy9CLElBQUk7WUFDSCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkM7UUFBQyxPQUFPLEtBQUssRUFBRTs7Z0JBQ1QsVUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxNQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFFLENBQUM7WUFDdEgsT0FBTyxJQUFJLENBQUMsZUFBZTs7O1lBQUMsY0FBTSxPQUFBLFVBQVEsRUFBUixDQUFRLEVBQUMsQ0FBQztTQUM1QztJQUNGLENBQUM7Ozs7OztJQUVTLHVDQUFjOzs7OztJQUF4QixVQUF5QixNQUFjOztZQUNoQyxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQW9CO1FBQ3ZDLElBQUksTUFBTSxFQUFFOztnQkFDTCxRQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDckQsUUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDOzs7Ozs7SUFFUywyREFBa0M7Ozs7O0lBQTVDLFVBQTZDLFNBQXFDO1FBQ2pGLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FDcEIsR0FBRzs7OztRQUFDLFVBQUMsT0FBeUIsSUFBSyxPQUFBLElBQUksWUFBWSxDQUFNLE9BQU8sQ0FBQyxFQUE5QixDQUE4QixFQUFDLENBQ2xFLENBQUM7SUFDSCxDQUFDOzs7OztJQUVTLDhDQUFxQjs7OztJQUEvQjtRQUNDLElBQUk7WUFDSCxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2YsS0FBSyxDQUFDLE9BQU8sR0FBRyxxQ0FBcUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7WUFDOUUsTUFBTSxLQUFLLENBQUM7U0FDWjtJQUNGLENBQUM7O2dCQWxtQkQsVUFBVTs7OztnQkFIbUIsaUJBQWlCO2dCQUF0QyxtQkFBbUI7Z0JBTDJGLFVBQVU7O0lBNG1CakkscUJBQUM7Q0FBQSxBQXBtQkQsSUFvbUJDO1NBbm1CWSxjQUFjOzs7Ozs7SUFFMUIseUNBQXlDOzs7OztJQUN6QyxnQ0FBa0U7Ozs7O0lBQ2xFLGtDQUEyQjs7Ozs7SUFDM0IsOENBQXlEOzs7OztJQUd4RCxxQ0FBd0M7Ozs7O0lBRXhDLGlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBCYWNrZW5kLCBIdHRwRXZlbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlLCBIdHRwUmVzcG9uc2VCYXNlLCBIdHRwWGhyQmFja2VuZCwgWGhyRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGZyb20sIE9ic2VydmFibGUsIE9ic2VydmVyLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjb25jYXRNYXAsIGZpcnN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGRlbGF5UmVzcG9uc2UgfSBmcm9tICcuL2RlbGF5LXJlc3BvbnNlJztcclxuaW1wb3J0IHsgTWVtb3J5QmFja2VuZENvbmZpZywgTWVtb3J5RGF0YVNlcnZpY2UsIE1lbW9yeVJlcXVlc3QsIE1lbW9yeVJlc3BvbnNlLCBQYXJzZWRSZXF1ZXN0VXJsLCBwYXJzZVVyaSwgUGFzc1RocnVCYWNrZW5kLCByZW1vdmVUcmFpbGluZ1NsYXNoLCBVcmlJbmZvIH0gZnJvbSAnLi9tZW1vcnknO1xyXG5pbXBvcnQgeyBnZXRTdGF0dXNUZXh0LCBpc1N1Y2Nlc3MsIFNUQVRVU19DT0RFIH0gZnJvbSAnLi9zdGF0dXMtY29kZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2UgaW1wbGVtZW50cyBIdHRwQmFja2VuZCB7XHJcblxyXG5cdHByaXZhdGUgcGFzc1RocnVCYWNrZW5kOiBQYXNzVGhydUJhY2tlbmQ7XHJcblx0cHJvdGVjdGVkIGNvbmZpZzogTWVtb3J5QmFja2VuZENvbmZpZyA9IG5ldyBNZW1vcnlCYWNrZW5kQ29uZmlnKCk7XHJcblx0cHJvdGVjdGVkIGRhdGFiYXNlOiBPYmplY3Q7XHJcblx0cHJvdGVjdGVkIGRhdGFiYXNlUmVhZHlTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJvdGVjdGVkIGRhdGFTZXJ2aWNlOiBNZW1vcnlEYXRhU2VydmljZSxcclxuXHRcdGNvbmZpZzogTWVtb3J5QmFja2VuZENvbmZpZyA9IHt9LFxyXG5cdFx0cHJpdmF0ZSBmYWN0b3J5OiBYaHJGYWN0b3J5LFxyXG5cdCkge1xyXG5cdFx0Y29uc3QgbG9jYXRpb24gPSB0aGlzLmdldExvY2F0aW9uKCcvJyk7XHJcblx0XHR0aGlzLmNvbmZpZy5ob3N0ID0gbG9jYXRpb24uaG9zdDsgLy8gZGVmYXVsdCB0byBhcHAgd2ViIHNlcnZlciBob3N0XHJcblx0XHR0aGlzLmNvbmZpZy5yb290UGF0aCA9IGxvY2F0aW9uLnBhdGg7IC8vIGRlZmF1bHQgdG8gcGF0aCB3aGVuIGFwcCBpcyBzZXJ2ZWQgKGUuZy4nLycpXHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBjb25maWcpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGdldCBkYXRhYmFzZVJlYWR5KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG5cdFx0aWYgKCF0aGlzLmRhdGFiYXNlUmVhZHlTdWJqZWN0KSB7XHJcblx0XHRcdC8vIGZpcnN0IHRpbWUgdGhlIHNlcnZpY2UgaXMgY2FsbGVkLlxyXG5cdFx0XHR0aGlzLmRhdGFiYXNlUmVhZHlTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0XHRcdHRoaXMucmVzZXREYigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YWJhc2VSZWFkeVN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcclxuXHRcdFx0Zmlyc3QoKHJlYWR5OiBib29sZWFuKSA9PiByZWFkeSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQcm9jZXNzIFJlcXVlc3QgYW5kIHJldHVybiBhbiBPYnNlcnZhYmxlIG9mIEh0dHAgUmVzcG9uc2Ugb2JqZWN0XHJcblx0ICogaW4gdGhlIG1hbm5lciBvZiBhIFJFU1R5IHdlYiBhcGkuXHJcblx0ICpcclxuXHQgKiBFeHBlY3QgVVJJIHBhdHRlcm4gaW4gdGhlIGZvcm0gOmJhc2UvOmNvbGxlY3Rpb25OYW1lLzppZD9cclxuXHQgKiBFeGFtcGxlczpcclxuXHQgKiAgIC8vIGZvciBzdG9yZSB3aXRoIGEgJ2N1c3RvbWVycycgY29sbGVjdGlvblxyXG5cdCAqICAgR0VUIGFwaS9jdXN0b21lcnMgICAgICAgICAgLy8gYWxsIGN1c3RvbWVyc1xyXG5cdCAqICAgR0VUIGFwaS9jdXN0b21lcnMvNDIgICAgICAgLy8gdGhlIGNoYXJhY3RlciB3aXRoIGlkPTQyXHJcblx0ICogICBHRVQgYXBpL2N1c3RvbWVycz9uYW1lPV5qICAvLyAnaicgaXMgYSByZWdleDsgcmV0dXJucyBjdXN0b21lcnMgd2hvc2UgbmFtZSBzdGFydHMgd2l0aCAnaicgb3IgJ0onXHJcblx0ICogICBHRVQgYXBpL2N1c3RvbWVycy5qc29uLzQyICAvLyBpZ25vcmVzIHRoZSBcIi5qc29uXCJcclxuXHQgKlxyXG5cdCAqIEFsc28gYWNjZXB0cyBkaXJlY3QgY29tbWFuZHMgdG8gdGhlIHNlcnZpY2UgaW4gd2hpY2ggdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYXBpQmFzZSBpcyB0aGUgd29yZCBcImNvbW1hbmRzXCJcclxuXHQgKiBFeGFtcGxlczpcclxuXHQgKiAgICAgUE9TVCBjb21tYW5kcy9yZXNldERiLFxyXG5cdCAqICAgICBHRVQvUE9TVCBjb21tYW5kcy9jb25maWcgLSBnZXQgb3IgKHJlKXNldCB0aGUgY29uZmlnXHJcblx0ICpcclxuXHQgKiAgIEhUVFAgb3ZlcnJpZGVzOlxyXG5cdCAqICAgICBJZiB0aGUgaW5qZWN0ZWQgZGF0YVNlcnZpY2UgZGVmaW5lcyBhbiBIVFRQIG1ldGhvZCAobG93ZXJjYXNlKVxyXG5cdCAqICAgICBUaGUgcmVxdWVzdCBpcyBmb3J3YXJkZWQgdG8gdGhhdCBtZXRob2QgYXMgaW5cclxuXHQgKiAgICAgYGRhdGFTZXJ2aWNlLmdldChtZW1vcnlSZXF1ZXN0KWBcclxuXHQgKiAgICAgd2hpY2ggbXVzdCByZXR1cm4gZWl0aGVyIGFuIE9ic2VydmFibGUgb2YgdGhlIHJlc3BvbnNlIHR5cGVcclxuXHQgKiAgICAgZm9yIHRoaXMgaHR0cCBsaWJyYXJ5IG9yIG51bGx8dW5kZWZpbmVkICh3aGljaCBtZWFucyBcImtlZXAgcHJvY2Vzc2luZ1wiKS5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgaGFuZGxlUmVxdWVzdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdC8vICBoYW5kbGUgdGhlIHJlcXVlc3Qgd2hlbiB0aGVyZSBpcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2VcclxuXHRcdHJldHVybiB0aGlzLmRhdGFiYXNlUmVhZHkucGlwZShjb25jYXRNYXAoKCkgPT4gdGhpcy5oYW5kbGVSZXF1ZXN0XyhyZXF1ZXN0KSkpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGhhbmRsZVJlcXVlc3RfKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgdXJsID0gcmVxdWVzdC51cmxXaXRoUGFyYW1zID8gcmVxdWVzdC51cmxXaXRoUGFyYW1zIDogcmVxdWVzdC51cmw7XHJcblx0XHQvLyBUcnkgb3ZlcnJpZGUgcGFyc2VyXHJcblx0XHQvLyBJZiBubyBvdmVycmlkZSBwYXJzZXIgb3IgaXQgcmV0dXJucyBub3RoaW5nLCB1c2UgZGVmYXVsdCBwYXJzZXJcclxuXHRcdC8vIGNvbnN0IHBhcnNlciA9IHRoaXMuYmluZCgncGFyc2VSZXF1ZXN0VXJsJyk7XHJcblx0XHQvLyBjb25zdCBwYXJzZWQ6IFBhcnNlZFJlcXVlc3RVcmwgPSAocGFyc2VyICYmIHBhcnNlcih1cmwsIHRoaXMpKSB8fCB0aGlzLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xyXG5cdFx0Y29uc3QgcGFyc2VkOiBQYXJzZWRSZXF1ZXN0VXJsID0gdGhpcy5wYXJzZVJlcXVlc3RVcmwodXJsKTtcclxuXHRcdGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gcGFyc2VkLmNvbGxlY3Rpb25OYW1lO1xyXG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IHRoaXMuZGF0YWJhc2VbY29sbGVjdGlvbk5hbWVdO1xyXG5cdFx0Y29uc3QgbWVtb3J5UmVxdWVzdDogTWVtb3J5UmVxdWVzdCA9IHtcclxuXHRcdFx0cmVxdWVzdDogcmVxdWVzdCxcclxuXHRcdFx0Ym9keTogcmVxdWVzdC5ib2R5LFxyXG5cdFx0XHRhcGlCYXNlOiBwYXJzZWQuYXBpQmFzZSxcclxuXHRcdFx0Y29sbGVjdGlvbjogY29sbGVjdGlvbixcclxuXHRcdFx0Y29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lLFxyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxyXG5cdFx0XHRpZDogdGhpcy5wYXJzZUlkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBwYXJzZWQuaWQpLFxyXG5cdFx0XHRtZXRob2Q6IChyZXF1ZXN0Lm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKSxcclxuXHRcdFx0cXVlcnk6IHBhcnNlZC5xdWVyeSxcclxuXHRcdFx0cmVzb3VyY2VVcmw6IHBhcnNlZC5yZXNvdXJjZVVybCxcclxuXHRcdFx0dXJsOiB1cmwsXHJcblx0XHR9O1xyXG5cdFx0Ly8gSWYgYGRhdGFTZXJ2aWNlLnJlcXVlc3RJbnRlcmNlcHRvcmAgZXhpc3RzLCBsZXQgaXQgbW9ycGggdGhlIHJlc3BvbnNlIG9wdGlvbnNcclxuXHRcdGNvbnN0IGludGVyY2VwdG9yID0gdGhpcy5iaW5kKCdyZXF1ZXN0SW50ZXJjZXB0b3InKTtcclxuXHRcdGlmICgvY29tbWFuZHNcXC8/JC9pLnRlc3QobWVtb3J5UmVxdWVzdC5hcGlCYXNlKSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb21tYW5kcyhtZW1vcnlSZXF1ZXN0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IG1ldGhvZEludGVyY2VwdG9yID0gdGhpcy5iaW5kKG1lbW9yeVJlcXVlc3QubWV0aG9kKTtcclxuXHRcdGlmIChtZXRob2RJbnRlcmNlcHRvcikge1xyXG5cdFx0XHQvLyBNZW1vcnlEYXRhU2VydmljZSBpbnRlcmNlcHRzIHRoaXMgSFRUUCBtZXRob2QuXHJcblx0XHRcdC8vIGlmIGludGVyY2VwdG9yIHByb2R1Y2VkIGEgcmVzcG9uc2UsIHJldHVybiBpdC5cclxuXHRcdFx0Ly8gZWxzZSBNZW1vcnlEYXRhU2VydmljZSBjaG9zZSBub3QgdG8gaW50ZXJjZXB0OyBjb250aW51ZSBwcm9jZXNzaW5nLlxyXG5cdFx0XHRjb25zdCBpbnRlcmNlcHRvclJlc3BvbnNlID0gbWV0aG9kSW50ZXJjZXB0b3IobWVtb3J5UmVxdWVzdCk7XHJcblx0XHRcdGlmIChpbnRlcmNlcHRvclJlc3BvbnNlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGludGVyY2VwdG9yUmVzcG9uc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vICEhIVxyXG5cdFx0bGV0IHJlc3BvbnNlOiBNZW1vcnlSZXNwb25zZSA9IGludGVyY2VwdG9yID8gaW50ZXJjZXB0b3IobWVtb3J5UmVxdWVzdCwgdGhpcykgOiBudWxsO1xyXG5cdFx0aWYgKHJlc3BvbnNlKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNwb25zZSk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5kYXRhYmFzZVtjb2xsZWN0aW9uTmFtZV0pIHtcclxuXHRcdFx0Ly8gcmVxdWVzdCBpcyBmb3IgYSBrbm93biBjb2xsZWN0aW9uIG9mIHRoZSBNZW1vcnlEYXRhU2VydmljZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gdGhpcy5jb2xsZWN0aW9uSGFuZGxlcihtZW1vcnlSZXF1ZXN0KSk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5jb25maWcucGFzc1RocnVVbmtub3duVXJsKSB7XHJcblx0XHRcdC8vIHVua25vd24gY29sbGVjdGlvbjsgcGFzcyByZXF1ZXN0IHRocnUgdG8gYSBcInJlYWxcIiBiYWNrZW5kLlxyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRQYXNzVGhydUJhY2tlbmQoKS5oYW5kbGUocmVxdWVzdCk7XHJcblx0XHR9XHJcblx0XHQvLyA0MDQgLSBjYW4ndCBoYW5kbGUgdGhpcyByZXF1ZXN0XHJcblx0XHRyZXNwb25zZSA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLk5PVF9GT1VORCwgYENvbGxlY3Rpb24gJyR7Y29sbGVjdGlvbk5hbWV9JyBub3QgZm91bmRgKTtcclxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQYXJzZXMgdGhlIHJlcXVlc3QgVVJMIGludG8gYSBgUGFyc2VkUmVxdWVzdFVybGAgb2JqZWN0LlxyXG5cdCAqIFBhcnNpbmcgZGVwZW5kcyB1cG9uIGNlcnRhaW4gdmFsdWVzIG9mIGBjb25maWdgOiBgYXBpQmFzZWAsIGBob3N0YCwgYW5kIGB1cmxSb290YC5cclxuXHQgKlxyXG5cdCAqIENvbmZpZ3VyaW5nIHRoZSBgYXBpQmFzZWAgeWllbGRzIHRoZSBtb3N0IGludGVyZXN0aW5nIGNoYW5nZXMgdG8gYHBhcnNlUmVxdWVzdFVybGAgYmVoYXZpb3I6XHJcblx0ICogICBXaGVuIGFwaUJhc2U9dW5kZWZpbmVkIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3QvYXBpL2NvbGxlY3Rpb24vNDInXHJcblx0ICogICAgIHtiYXNlOiAnYXBpLycsIGNvbGxlY3Rpb25OYW1lOiAnY29sbGVjdGlvbicsIGlkOiAnNDInLCAuLi59XHJcblx0ICogICBXaGVuIGFwaUJhc2U9J3NvbWUvYXBpL3Jvb3QvJyBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L3NvbWUvYXBpL3Jvb3QvY29sbGVjdGlvbidcclxuXHQgKiAgICAge2Jhc2U6ICdzb21lL2FwaS9yb290LycsIGNvbGxlY3Rpb25OYW1lOiAnY29sbGVjdGlvbicsIGlkOiB1bmRlZmluZWQsIC4uLn1cclxuXHQgKiAgIFdoZW4gYXBpQmFzZT0nLycgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9jb2xsZWN0aW9uJ1xyXG5cdCAqICAgICB7YmFzZTogJy8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogdW5kZWZpbmVkLCAuLi59XHJcblx0ICpcclxuXHQgKiBUaGUgYWN0dWFsIGFwaSBiYXNlIHNlZ21lbnQgdmFsdWVzIGFyZSBpZ25vcmVkLiBPbmx5IHRoZSBudW1iZXIgb2Ygc2VnbWVudHMgbWF0dGVycy5cclxuXHQgKiBUaGUgZm9sbG93aW5nIGFwaSBiYXNlIHN0cmluZ3MgYXJlIGNvbnNpZGVyZWQgaWRlbnRpY2FsOiAnYS9iJyB+ICdzb21lL2FwaS8nIH4gYHR3by9zZWdtZW50cydcclxuXHQgKlxyXG5cdCAqIFRvIHJlcGxhY2UgdGhpcyBkZWZhdWx0IG1ldGhvZCwgYXNzaWduIHlvdXIgYWx0ZXJuYXRpdmUgdG8geW91ciBNZW1vcnlEYXRhU2VydmljZVsncGFyc2VSZXF1ZXN0VXJsJ11cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgcGFyc2VSZXF1ZXN0VXJsKHVybDogc3RyaW5nKTogUGFyc2VkUmVxdWVzdFVybCB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBsb2NhdGlvbiA9IHRoaXMuZ2V0TG9jYXRpb24odXJsKTtcclxuXHRcdFx0bGV0IGRyb3AgPSB0aGlzLmNvbmZpZy5yb290UGF0aC5sZW5ndGg7XHJcblx0XHRcdGxldCB1cmxSb290ID0gJyc7XHJcblx0XHRcdGlmIChsb2NhdGlvbi5ob3N0ICE9PSB0aGlzLmNvbmZpZy5ob3N0KSB7XHJcblx0XHRcdFx0Ly8gdXJsIGZvciBhIHNlcnZlciBvbiBhIGRpZmZlcmVudCBob3N0IVxyXG5cdFx0XHRcdC8vIGFzc3VtZSBpdCdzIGNvbGxlY3Rpb24gaXMgYWN0dWFsbHkgaGVyZSB0b28uXHJcblx0XHRcdFx0ZHJvcCA9IDE7IC8vIHRoZSBsZWFkaW5nIHNsYXNoXHJcblx0XHRcdFx0dXJsUm9vdCA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnLyc7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGguc3Vic3RyaW5nKGRyb3ApO1xyXG5cdFx0XHRjb25zdCBwYXRoU2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJyk7XHJcblx0XHRcdGxldCBzZWdtZW50SXggPSAwO1xyXG5cdFx0XHQvLyBhcGlCYXNlOiB0aGUgZnJvbnQgcGFydCBvZiB0aGUgcGF0aCBkZXZvdGVkIHRvIGdldHRpbmcgdG8gdGhlIGFwaSByb3V0ZVxyXG5cdFx0XHQvLyBBc3N1bWVzIGZpcnN0IHBhdGggc2VnbWVudCBpZiBubyBjb25maWcuYXBpQmFzZVxyXG5cdFx0XHQvLyBlbHNlIGlnbm9yZXMgYXMgbWFueSBwYXRoIHNlZ21lbnRzIGFzIGFyZSBpbiBjb25maWcuYXBpQmFzZVxyXG5cdFx0XHQvLyBEb2VzIE5PVCBjYXJlIHdoYXQgdGhlIGFwaSBiYXNlIGNoYXJzIGFjdHVhbGx5IGFyZS5cclxuXHRcdFx0bGV0IGFwaUJhc2U6IHN0cmluZztcclxuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuXHRcdFx0aWYgKHRoaXMuY29uZmlnLmFwaUJhc2UgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0YXBpQmFzZSA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YXBpQmFzZSA9IHJlbW92ZVRyYWlsaW5nU2xhc2godGhpcy5jb25maWcuYXBpQmFzZS50cmltKCkpO1xyXG5cdFx0XHRcdGlmIChhcGlCYXNlKSB7XHJcblx0XHRcdFx0XHRzZWdtZW50SXggPSBhcGlCYXNlLnNwbGl0KCcvJykubGVuZ3RoO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzZWdtZW50SXggPSAwOyAvLyBubyBhcGkgYmFzZSBhdCBhbGw7IHVud2lzZSBidXQgYWxsb3dlZC5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0YXBpQmFzZSArPSAnLyc7XHJcblx0XHRcdGxldCBjb2xsZWN0aW9uTmFtZSA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XHJcblx0XHRcdC8vIGlnbm9yZSBhbnl0aGluZyBhZnRlciBhICcuJyAoZS5nLix0aGUgXCJqc29uXCIgaW4gXCJjdXN0b21lcnMuanNvblwiKVxyXG5cdFx0XHRjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25OYW1lICYmIGNvbGxlY3Rpb25OYW1lLnNwbGl0KCcuJylbMF07XHJcblx0XHRcdGNvbnN0IGlkID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcclxuXHRcdFx0Y29uc3QgcXVlcnkgPSB0aGlzLmNyZWF0ZVF1ZXJ5TWFwKGxvY2F0aW9uLnF1ZXJ5KTtcclxuXHRcdFx0Y29uc3QgcmVzb3VyY2VVcmwgPSB1cmxSb290ICsgYXBpQmFzZSArIGNvbGxlY3Rpb25OYW1lICsgJy8nO1xyXG5cdFx0XHRyZXR1cm4geyBhcGlCYXNlLCBjb2xsZWN0aW9uTmFtZSwgaWQsIHF1ZXJ5LCByZXNvdXJjZVVybCB9O1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc3QgbWVzc2FnZSA9IGB1bmFibGUgdG8gcGFyc2UgdXJsICcke3VybH0nOyBvcmlnaW5hbCBlcnJvcjogJHtlcnJvci5tZXNzYWdlfWA7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKiBQYXJzZSB0aGUgaWQgYXMgYSBudW1iZXIuIFJldHVybiBvcmlnaW5hbCB2YWx1ZSBpZiBub3QgYSBudW1iZXIuICovXHJcblx0cHJvdGVjdGVkIHBhcnNlSWQoY29sbGVjdGlvbjogYW55W10sIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiBhbnkge1xyXG5cdFx0aWYgKCF0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYyhjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkpIHtcclxuXHRcdFx0Ly8gQ2FuJ3QgY29uZmlybSB0aGF0IGBpZGAgaXMgYSBudW1lcmljIHR5cGU7IGRvbid0IHBhcnNlIGFzIGEgbnVtYmVyXHJcblx0XHRcdC8vIG9yIGVsc2UgYCc0MidgIC0+IGA0MmAgYW5kIF9nZXQgYnkgaWRfIGZhaWxzLlxyXG5cdFx0XHRyZXR1cm4gaWQ7XHJcblx0XHR9XHJcblx0XHRjb25zdCBpZE51bSA9IHBhcnNlRmxvYXQoaWQpO1xyXG5cdFx0cmV0dXJuIGlzTmFOKGlkTnVtKSA/IGlkIDogaWROdW07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgY29uZmlndXJlZCBkZWxheSB0byByZXNwb25zZSBvYnNlcnZhYmxlIHVubGVzcyBkZWxheSA9PT0gMFxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBhZGREZWxheShyZXNwb25zZTogT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IGRlbGF5ID0gdGhpcy5jb25maWcuZGVsYXk7XHJcblx0XHRyZXR1cm4gZGVsYXkgPT09IDAgPyByZXNwb25zZSA6IGRlbGF5UmVzcG9uc2UocmVzcG9uc2UsIGRlbGF5IHx8IDUwMCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBcHBseSBxdWVyeS9zZWFyY2ggcGFyYW1ldGVycyBhcyBhIGZpbHRlciBvdmVyIHRoZSBjb2xsZWN0aW9uXHJcblx0ICogVGhpcyBpbXBsIG9ubHkgc3VwcG9ydHMgUmVnRXhwIHF1ZXJpZXMgb24gc3RyaW5nIHByb3BlcnRpZXMgb2YgdGhlIGNvbGxlY3Rpb25cclxuXHQgKiBBTkRzIHRoZSBjb25kaXRpb25zIHRvZ2V0aGVyXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGFwcGx5UXVlcnkoY29sbGVjdGlvbjogYW55W10sIHF1ZXJ5OiBNYXA8c3RyaW5nLCBzdHJpbmdbXT4pOiBhbnlbXSB7XHJcblx0XHQvLyBleHRyYWN0IGZpbHRlcmluZyBjb25kaXRpb25zIC0ge3Byb3BlcnR5TmFtZSwgUmVnRXhwcykgLSBmcm9tIHF1ZXJ5L3NlYXJjaCBwYXJhbWV0ZXJzXHJcblx0XHRjb25zdCBjb25kaXRpb25zOiB7IG5hbWU6IHN0cmluZywgcmVnZXhwOiBSZWdFeHAgfVtdID0gW107XHJcblx0XHRjb25zdCBjYXNlU2Vuc2l0aXZlID0gdGhpcy5jb25maWcuY2FzZVNlbnNpdGl2ZVNlYXJjaCA/IHVuZGVmaW5lZCA6ICdpJztcclxuXHRcdHF1ZXJ5LmZvckVhY2goKHZhbHVlOiBzdHJpbmdbXSwgbmFtZTogc3RyaW5nKSA9PiB7XHJcblx0XHRcdHZhbHVlLmZvckVhY2goeCA9PiBjb25kaXRpb25zLnB1c2goe1xyXG5cdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0cmVnZXhwOiBuZXcgUmVnRXhwKGRlY29kZVVSSSh4KSwgY2FzZVNlbnNpdGl2ZSlcclxuXHRcdFx0fSkpO1xyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBsZW5ndGggPSBjb25kaXRpb25zLmxlbmd0aDtcclxuXHRcdGlmICghbGVuZ3RoKSB7XHJcblx0XHRcdHJldHVybiBjb2xsZWN0aW9uO1xyXG5cdFx0fVxyXG5cdFx0Ly8gQU5EIHRoZSBSZWdFeHAgY29uZGl0aW9uc1xyXG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uZmlsdGVyKHJvdyA9PiB7XHJcblx0XHRcdGxldCBoYXMgPSB0cnVlO1xyXG5cdFx0XHRsZXQgaSA9IGxlbmd0aDtcclxuXHRcdFx0d2hpbGUgKGhhcyAmJiBpKSB7XHJcblx0XHRcdFx0aSAtPSAxO1xyXG5cdFx0XHRcdGNvbnN0IGNvbmQgPSBjb25kaXRpb25zW2ldO1xyXG5cdFx0XHRcdGhhcyA9IGNvbmQucmVnZXhwLnRlc3Qocm93W2NvbmQubmFtZV0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBoYXM7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhIG1ldGhvZCBmcm9tIHRoZSBgTWVtb3J5RGF0YVNlcnZpY2VgIChpZiBpdCBleGlzdHMpLCBib3VuZCB0byB0aGF0IHNlcnZpY2VcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgYmluZDxUIGV4dGVuZHMgRnVuY3Rpb24+KG1ldGhvZE5hbWU6IHN0cmluZykge1xyXG5cdFx0Y29uc3QgbWV0aG9kID0gdGhpcy5kYXRhU2VydmljZVttZXRob2ROYW1lXSBhcyBUO1xyXG5cdFx0cmV0dXJuIG1ldGhvZCA/IDxUPm1ldGhvZC5iaW5kKHRoaXMuZGF0YVNlcnZpY2UpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGJvZGlmeShkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5kYXRhRW5jYXBzdWxhdGlvbiA/IHsgZGF0YSB9IDogZGF0YTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBjbG9uZShkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBjb2xsZWN0aW9uSGFuZGxlcihyZXF1ZXN0OiBNZW1vcnlSZXF1ZXN0KTogTWVtb3J5UmVzcG9uc2Uge1xyXG5cdFx0Ly8gY29uc3QgcmVxdWVzdCA9IHJlcXVlc3QucmVxdWVzdDtcclxuXHRcdGxldCByZXNwb25zZTogTWVtb3J5UmVzcG9uc2U7XHJcblx0XHRzd2l0Y2ggKHJlcXVlc3QubWV0aG9kKSB7XHJcblx0XHRcdGNhc2UgJ2dldCc6XHJcblx0XHRcdFx0cmVzcG9uc2UgPSB0aGlzLmdldChyZXF1ZXN0KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAncG9zdCc6XHJcblx0XHRcdFx0cmVzcG9uc2UgPSB0aGlzLnBvc3QocmVxdWVzdCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ3B1dCc6XHJcblx0XHRcdFx0cmVzcG9uc2UgPSB0aGlzLnB1dChyZXF1ZXN0KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnZGVsZXRlJzpcclxuXHRcdFx0XHRyZXNwb25zZSA9IHRoaXMuZGVsZXRlKHJlcXVlc3QpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJlc3BvbnNlID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHJlcXVlc3QudXJsLCBTVEFUVVNfQ09ERS5NRVRIT0RfTk9UX0FMTE9XRUQsICdNZXRob2Qgbm90IGFsbG93ZWQnKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdC8vIElmIGBkYXRhU2VydmljZS5yZXNwb25zZUludGVyY2VwdG9yYCBleGlzdHMsIGxldCBpdCBtb3JwaCB0aGUgcmVzcG9uc2Ugb3B0aW9uc1xyXG5cdFx0Y29uc3QgaW50ZXJjZXB0b3IgPSB0aGlzLmJpbmQoJ3Jlc3BvbnNlSW50ZXJjZXB0b3InKTtcclxuXHRcdC8vICEhIVxyXG5cdFx0cmV0dXJuIGludGVyY2VwdG9yID8gaW50ZXJjZXB0b3IocmVzcG9uc2UsIHJlcXVlc3QpIDogcmVzcG9uc2U7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY3JlYXRlRXJyb3JSZXNwb25zZSh1cmw6IHN0cmluZywgc3RhdHVzOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZyk6IE1lbW9yeVJlc3BvbnNlIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHRlcnJvcjogYCR7bWVzc2FnZX1gLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRzdGF0dXM6IHN0YXR1c1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIGNvbGQgcmVzcG9uc2UgT2JzZXJ2YWJsZSBmcm9tIGEgZmFjdG9yeSBmb3IgTWVtb3J5UmVzcG9uc2VcclxuXHQgKiBAcGFyYW0gbWVtb3J5UmVzcG9uc2VGYWN0b3J5IC0gY3JlYXRlcyBNZW1vcnlSZXNwb25zZSB3aGVuIG9ic2VydmFibGUgaXMgc3Vic2NyaWJlZFxyXG5cdCAqIEBwYXJhbSB3aXRoRGVsYXkgLSBpZiB0cnVlIChkZWZhdWx0KSwgYWRkIHNpbXVsYXRlZCBsYXRlbmN5IGRlbGF5IGZyb20gY29uZmlndXJhdGlvblxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBjcmVhdGVSZXNwb25zZSQobWVtb3J5UmVzcG9uc2VGYWN0b3J5OiAoKSA9PiBNZW1vcnlSZXNwb25zZSwgd2l0aERlbGF5ID0gdHJ1ZSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBtZW1vcnlSZXNwb25zZSQgPSB0aGlzLmNyZWF0ZU1lbW9yeVJlc3BvbnNlJChtZW1vcnlSZXNwb25zZUZhY3RvcnkpO1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UkID0gdGhpcy5jcmVhdGVSZXNwb25zZSRmcm9tTWVtb3J5UmVzcG9uc2UkKG1lbW9yeVJlc3BvbnNlJCk7XHJcblx0XHRyZXR1cm4gd2l0aERlbGF5ID8gdGhpcy5hZGREZWxheShyZXNwb25zZSQpIDogcmVzcG9uc2UkO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGEgY29sZCBPYnNlcnZhYmxlIG9mIE1lbW9yeVJlc3BvbnNlLlxyXG5cdCAqIEBwYXJhbSBtZW1vcnlSZXNwb25zZUZhY3RvcnkgLSBjcmVhdGVzIE1lbW9yeVJlc3BvbnNlIHdoZW4gb2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNyZWF0ZU1lbW9yeVJlc3BvbnNlJChtZW1vcnlSZXNwb25zZUZhY3Rvcnk6ICgpID0+IE1lbW9yeVJlc3BvbnNlKTogT2JzZXJ2YWJsZTxNZW1vcnlSZXNwb25zZT4ge1xyXG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlPE1lbW9yeVJlc3BvbnNlPigob2JzZXJ2ZXI6IE9ic2VydmVyPE1lbW9yeVJlc3BvbnNlPikgPT4ge1xyXG5cdFx0XHRsZXQgcmVzcG9uc2U6IE1lbW9yeVJlc3BvbnNlO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJlc3BvbnNlID0gbWVtb3J5UmVzcG9uc2VGYWN0b3J5KCk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0ZXJyb3IgPSBlcnJvci5tZXNzYWdlIHx8IGVycm9yO1xyXG5cdFx0XHRcdHJlc3BvbnNlID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKCcnLCBTVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGAke2Vycm9yfWApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXNwb25zZS5zdGF0dXNUZXh0ID0gZ2V0U3RhdHVzVGV4dChzdGF0dXMpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgZmFpbHVyZSAqLyB9XHJcblx0XHRcdGlmIChpc1N1Y2Nlc3Moc3RhdHVzKSkge1xyXG5cdFx0XHRcdG9ic2VydmVyLm5leHQocmVzcG9uc2UpO1xyXG5cdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0b2JzZXJ2ZXIuZXJyb3IocmVzcG9uc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiAoKSA9PiB7IH07IC8vIHVuc3Vic2NyaWJlIGZ1bmN0aW9uXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZpbmQgZmlyc3QgaW5zdGFuY2Ugb2YgaXRlbSBpbiBjb2xsZWN0aW9uIGJ5IGBpdGVtLmlkYFxyXG5cdCAqIEBwYXJhbSBjb2xsZWN0aW9uXHJcblx0ICogQHBhcmFtIGlkXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGZpbmRCeUlkPFQgZXh0ZW5kcyB7IGlkOiBhbnkgfT4oY29sbGVjdGlvbjogVFtdLCBpZDogYW55KTogVCB7XHJcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5maW5kKChpdGVtOiBUKSA9PiBpdGVtLmlkID09PSBpZCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZW5lcmF0ZSB0aGUgbmV4dCBhdmFpbGFibGUgaWQgZm9yIGl0ZW0gaW4gdGhpcyBjb2xsZWN0aW9uXHJcblx0ICogVXNlIG1ldGhvZCBmcm9tIGBkYXRhU2VydmljZWAgaWYgaXQgZXhpc3RzIGFuZCByZXR1cm5zIGEgdmFsdWUsXHJcblx0ICogZWxzZSBkZWxlZ2F0ZXMgdG8gYGdlbklkRGVmYXVsdGAuXHJcblx0ICogQHBhcmFtIGNvbGxlY3Rpb24gLSBjb2xsZWN0aW9uIG9mIGl0ZW1zIHdpdGggYGlkYCBrZXkgcHJvcGVydHlcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgZ2VuSWQ8VCBleHRlbmRzIHsgaWQ6IGFueSB9Pihjb2xsZWN0aW9uOiBUW10sIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBhbnkge1xyXG5cdFx0Y29uc3QgZ2VuSWQgPSB0aGlzLmJpbmQoJ2dlbklkJyk7XHJcblx0XHRpZiAoZ2VuSWQpIHtcclxuXHRcdFx0Y29uc3QgaWQgPSBnZW5JZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XHJcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXHJcblx0XHRcdGlmIChpZCAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gaWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLmdlbklkRGVmYXVsdChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEZWZhdWx0IGdlbmVyYXRvciBvZiB0aGUgbmV4dCBhdmFpbGFibGUgaWQgZm9yIGl0ZW0gaW4gdGhpcyBjb2xsZWN0aW9uXHJcblx0ICogVGhpcyBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHdvcmtzIG9ubHkgZm9yIG51bWVyaWMgaWRzLlxyXG5cdCAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gY29sbGVjdGlvbiBvZiBpdGVtcyB3aXRoIGBpZGAga2V5IHByb3BlcnR5XHJcblx0ICogQHBhcmFtIGNvbGxlY3Rpb25OYW1lIC0gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBnZW5JZERlZmF1bHQ8VCBleHRlbmRzIHsgaWQ6IGFueSB9Pihjb2xsZWN0aW9uOiBUW10sIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBhbnkge1xyXG5cdFx0aWYgKCF0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYyhjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDb2xsZWN0aW9uICcke2NvbGxlY3Rpb25OYW1lfScgaWQgdHlwZSBpcyBub24tbnVtZXJpYyBvciB1bmtub3duLiBDYW4gb25seSBnZW5lcmF0ZSBudW1lcmljIGlkcy5gKTtcclxuXHRcdH1cclxuXHRcdGxldCBtYXhJZCA9IDA7XHJcblx0XHRjb2xsZWN0aW9uLnJlZHVjZSgocHJldjogYW55LCBpdGVtOiBhbnkpID0+IHtcclxuXHRcdFx0bWF4SWQgPSBNYXRoLm1heChtYXhJZCwgdHlwZW9mIGl0ZW0uaWQgPT09ICdudW1iZXInID8gaXRlbS5pZCA6IG1heElkKTtcclxuXHRcdH0sIHVuZGVmaW5lZCk7XHJcblx0XHRyZXR1cm4gbWF4SWQgKyAxO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGxvY2F0aW9uIGluZm8gZnJvbSBhIHVybCwgZXZlbiBvbiBzZXJ2ZXIgd2hlcmUgYGRvY3VtZW50YCBpcyBub3QgZGVmaW5lZFxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBnZXRMb2NhdGlvbih1cmw6IHN0cmluZyk6IFVyaUluZm8ge1xyXG5cdFx0aWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XHJcblx0XHRcdC8vIGdldCB0aGUgZG9jdW1lbnQgaWYgcnVubmluZyBpbiBicm93c2VyXHJcblx0XHRcdGNvbnN0IGRvY3VtZW50XzogRG9jdW1lbnQgPSAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcclxuXHRcdFx0Ly8gYWRkIGhvc3QgaW5mbyB0byB1cmwgYmVmb3JlIHBhcnNpbmcuICBVc2UgYSBmYWtlIGhvc3Qgd2hlbiBub3QgaW4gYnJvd3Nlci5cclxuXHRcdFx0Y29uc3QgYmFzZSA9IGRvY3VtZW50XyA/IGRvY3VtZW50Xy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBkb2N1bWVudF8ubG9jYXRpb24uaG9zdCA6ICdodHRwOi8vZmFrZSc7XHJcblx0XHRcdHVybCA9IHVybC5zdGFydHNXaXRoKCcvJykgPyBiYXNlICsgdXJsIDogYmFzZSArICcvJyArIHVybDtcclxuXHRcdH1cclxuXHRcdHJldHVybiBwYXJzZVVyaSh1cmwpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogZ2V0IG9yIGNyZWF0ZSB0aGUgZnVuY3Rpb24gdGhhdCBwYXNzZXMgdW5oYW5kbGVkIHJlcXVlc3RzXHJcblx0ICogdGhyb3VnaCB0byB0aGUgXCJyZWFsXCIgYmFja2VuZC5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgZ2V0UGFzc1RocnVCYWNrZW5kKCk6IFBhc3NUaHJ1QmFja2VuZCB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXNzVGhydUJhY2tlbmQgPyB0aGlzLnBhc3NUaHJ1QmFja2VuZCA6IHRoaXMucGFzc1RocnVCYWNrZW5kID0gdGhpcy5jcmVhdGVQYXNzVGhydUJhY2tlbmQoKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBpbmRleE9mKGNvbGxlY3Rpb246IGFueVtdLCBpZDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5maW5kSW5kZXgoKGl0ZW06IGFueSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcmV0dXJuIHRydWUgaWYgY2FuIGRldGVybWluZSB0aGF0IHRoZSBjb2xsZWN0aW9uJ3MgYGl0ZW0uaWRgIGlzIGEgbnVtYmVyXHJcblx0ICogVGhpcyBpbXBsZW1lbnRhdGlvbiBjYW4ndCB0ZWxsIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5IHNvIGl0IGFzc3VtZXMgTk9cclxuXHQgKiAqL1xyXG5cdHByb3RlY3RlZCBpc0NvbGxlY3Rpb25JZE51bWVyaWM8VCBleHRlbmRzIHsgaWQ6IGFueSB9Pihjb2xsZWN0aW9uOiBUW10sIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdC8vIGNvbGxlY3Rpb25OYW1lIG5vdCB1c2VkIG5vdyBidXQgb3ZlcnJpZGUgbWlnaHQgbWFpbnRhaW4gY29sbGVjdGlvbiB0eXBlIGluZm9ybWF0aW9uXHJcblx0XHQvLyBzbyB0aGF0IGl0IGNvdWxkIGtub3cgdGhlIHR5cGUgb2YgdGhlIGBpZGAgZXZlbiB3aGVuIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5LlxyXG5cdFx0Ly8gcmV0dXJuICEhKGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvblswXSkgJiYgdHlwZW9mIGNvbGxlY3Rpb25bMF0uaWQgPT09ICdudW1iZXInO1xyXG5cdFx0cmV0dXJuICEhKGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvblswXSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgcmVtb3ZlQnlJZChjb2xsZWN0aW9uOiBhbnlbXSwgaWQ6IG51bWJlcikge1xyXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xyXG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0Y29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRlbGwgeW91ciBpbi1tZW0gXCJkYXRhYmFzZVwiIHRvIHJlc2V0LlxyXG5cdCAqIHJldHVybnMgT2JzZXJ2YWJsZSBvZiB0aGUgZGF0YWJhc2UgYmVjYXVzZSByZXNldHRpbmcgaXQgY291bGQgYmUgYXN5bmNcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgcmVzZXREYihyZXF1ZXN0PzogTWVtb3J5UmVxdWVzdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG5cdFx0dGhpcy5kYXRhYmFzZVJlYWR5U3ViamVjdC5uZXh0KGZhbHNlKTtcclxuXHRcdGNvbnN0IGRhdGFiYXNlID0gdGhpcy5kYXRhU2VydmljZS5jcmVhdGVEYihyZXF1ZXN0KTtcclxuXHRcdGNvbnN0IGRhdGFiYXNlJCA9IGRhdGFiYXNlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSA/IGRhdGFiYXNlIDpcclxuXHRcdFx0dHlwZW9mIChkYXRhYmFzZSBhcyBhbnkpLnRoZW4gPT09ICdmdW5jdGlvbicgPyBmcm9tKGRhdGFiYXNlIGFzIFByb21pc2U8YW55PikgOlxyXG5cdFx0XHRcdG9mKGRhdGFiYXNlKTtcclxuXHRcdGRhdGFiYXNlJC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgoZGF0YWJhc2U6IHt9KSA9PiB7XHJcblx0XHRcdHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcclxuXHRcdFx0dGhpcy5kYXRhYmFzZVJlYWR5U3ViamVjdC5uZXh0KHRydWUpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhYmFzZVJlYWR5O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ29tbWFuZHMgcmVjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIHNlcnZpY2Ugb3IgZXh0cmFjdCBpbmZvcm1hdGlvbiBmcm9tIGl0LlxyXG5cdCAqIENvbW1hbmRzIGlnbm9yZSB0aGUgbGF0ZW5jeSBkZWxheSBhbmQgcmVzcG9uZCBBU0FQLlxyXG5cdCAqXHJcblx0ICogV2hlbiB0aGUgbGFzdCBzZWdtZW50IG9mIHRoZSBgYXBpQmFzZWAgcGF0aCBpcyBcImNvbW1hbmRzXCIsXHJcblx0ICogdGhlIGBjb2xsZWN0aW9uTmFtZWAgaXMgdGhlIGNvbW1hbmQuXHJcblx0ICpcclxuXHQgKiBFeGFtcGxlIFVSTHM6XHJcblx0ICogICBjb21tYW5kcy9yZXNldGRiIChQT1NUKSAvLyBSZXNldCB0aGUgXCJkYXRhYmFzZVwiIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZVxyXG5cdCAqICAgY29tbWFuZHMvY29uZmlnIChHRVQpICAgLy8gUmV0dXJuIHRoaXMgc2VydmljZSdzIGNvbmZpZyBvYmplY3RcclxuXHQgKiAgIGNvbW1hbmRzL2NvbmZpZyAoUE9TVCkgIC8vIFVwZGF0ZSB0aGUgY29uZmlnIChlLmcuIHRoZSBkZWxheSlcclxuXHQgKlxyXG5cdCAqIFVzYWdlOlxyXG5cdCAqICAgaHR0cC5wb3N0KCdjb21tYW5kcy9yZXNldGRiJywgdW5kZWZpbmVkKTtcclxuXHQgKiAgIGh0dHAuZ2V0KCdjb21tYW5kcy9jb25maWcnKTtcclxuXHQgKiAgIGh0dHAucG9zdCgnY29tbWFuZHMvY29uZmlnJywgJ3tcImRlbGF5XCI6MTAwMH0nKTtcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgY29tbWFuZHMocmVxdWVzdDogTWVtb3J5UmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBjb21tYW5kID0gcmVxdWVzdC5jb2xsZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0Y29uc3QgbWV0aG9kID0gcmVxdWVzdC5tZXRob2Q7XHJcblx0XHRsZXQgcmVzcG9uc2U6IE1lbW9yeVJlc3BvbnNlID0ge1xyXG5cdFx0XHR1cmw6IHJlcXVlc3QudXJsXHJcblx0XHR9O1xyXG5cdFx0c3dpdGNoIChjb21tYW5kKSB7XHJcblx0XHRcdGNhc2UgJ3Jlc2V0ZGInOlxyXG5cdFx0XHRcdHJlc3BvbnNlLnN0YXR1cyA9IFNUQVRVU19DT0RFLk5PX0NPTlRFTlQ7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMucmVzZXREYihyZXF1ZXN0KS5waXBlKFxyXG5cdFx0XHRcdFx0Y29uY2F0TWFwKCgpID0+IHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHJlc3BvbnNlLCBmYWxzZSAvKiBubyBsYXRlbmN5IGRlbGF5ICovKSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRjYXNlICdjb25maWcnOlxyXG5cdFx0XHRcdGlmIChtZXRob2QgPT09ICdnZXQnKSB7XHJcblx0XHRcdFx0XHRyZXNwb25zZS5zdGF0dXMgPSBTVEFUVVNfQ09ERS5PSztcclxuXHRcdFx0XHRcdHJlc3BvbnNlLmJvZHkgPSB0aGlzLmNsb25lKHRoaXMuY29uZmlnKTtcclxuXHRcdFx0XHRcdC8vIGFueSBvdGhlciBIVFRQIG1ldGhvZCBpcyBhc3N1bWVkIHRvIGJlIGEgY29uZmlnIHVwZGF0ZVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zdCBib2R5ID0gcmVxdWVzdC5yZXF1ZXN0LmJvZHk7XHJcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBib2R5KTtcclxuXHRcdFx0XHRcdHRoaXMucGFzc1RocnVCYWNrZW5kID0gdW5kZWZpbmVkOyAvLyByZS1jcmVhdGUgd2hlbiBuZWVkZWRcclxuXHRcdFx0XHRcdHJlc3BvbnNlLnN0YXR1cyA9IFNUQVRVU19DT0RFLk5PX0NPTlRFTlQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJlc3BvbnNlID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHJlcXVlc3QudXJsLCBTVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGBVbmtub3duIGNvbW1hbmQgXCIke2NvbW1hbmR9XCJgKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNwb25zZSwgZmFsc2UgLyogbm8gbGF0ZW5jeSBkZWxheSAqLyk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZ2V0KHsgY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMsIGlkLCBxdWVyeSwgdXJsIH06IE1lbW9yeVJlcXVlc3QpOiBNZW1vcnlSZXNwb25zZSB7XHJcblx0XHRsZXQgZGF0YSA9IGNvbGxlY3Rpb247XHJcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG5cdFx0aWYgKGlkICE9IHVuZGVmaW5lZCAmJiBpZCAhPT0gJycpIHtcclxuXHRcdFx0ZGF0YSA9IHRoaXMuZmluZEJ5SWQoY29sbGVjdGlvbiwgaWQpO1xyXG5cdFx0XHRpZiAoIWRhdGEpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgJyR7Y29sbGVjdGlvbk5hbWV9JyB3aXRoIGlkPScke2lkfScgbm90IGZvdW5kYCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAocXVlcnkpIHtcclxuXHRcdFx0ZGF0YSA9IHRoaXMuYXBwbHlRdWVyeShjb2xsZWN0aW9uLCBxdWVyeSk7XHJcblx0XHRcdGlmICghZGF0YS5sZW5ndGgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgJyR7Y29sbGVjdGlvbk5hbWV9JyB3aXRoIGlkPScke2lkfScgbm90IGZvdW5kYCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGJvZHk6IHRoaXMuYm9kaWZ5KHRoaXMuY2xvbmUoZGF0YSkpLFxyXG5cdFx0XHRoZWFkZXJzOiBoZWFkZXJzLFxyXG5cdFx0XHRzdGF0dXM6IFNUQVRVU19DT0RFLk9LXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlIGVudGl0eVxyXG5cdC8vIENhbiB1cGRhdGUgYW4gZXhpc3RpbmcgZW50aXR5IHRvbyBpZiBwb3N0NDA5IGlzIGZhbHNlLlxyXG5cdHByb3RlY3RlZCBwb3N0KHsgY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMsIGlkLCByZXF1ZXN0LCByZXNvdXJjZVVybCwgdXJsIH06IE1lbW9yeVJlcXVlc3QpOiBNZW1vcnlSZXNwb25zZSB7XHJcblx0XHRjb25zdCByZXF1ZXN0Qm9keSA9IHJlcXVlc3QuYm9keTtcclxuXHRcdGNvbnN0IGl0ZW06IGFueSA9IHRoaXMuY2xvbmUocmVxdWVzdEJvZHkpO1xyXG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuXHRcdGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGl0ZW0uaWQgPSBpZCB8fCB0aGlzLmdlbklkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zdCBtZXNzYWdlOiBzdHJpbmcgPSBlcnJvci5tZXNzYWdlIHx8ICcnO1xyXG5cdFx0XHRcdGlmICgvaWQgdHlwZSBpcyBub24tbnVtZXJpYy8udGVzdChtZXNzYWdlKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLlVOUFJPQ0VTU0FCTEVfRU5UUlksIG1lc3NhZ2UpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGBGYWlsZWQgdG8gZ2VuZXJhdGUgbmV3IGlkIGZvciAnJHtjb2xsZWN0aW9uTmFtZX0nYCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoaWQgJiYgaWQgIT09IGl0ZW0uaWQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLkJBRF9SRVFVRVNULCBgUmVxdWVzdCBpZCBkb2VzIG5vdCBtYXRjaCBpdGVtLmlkYCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZCA9IGl0ZW0uaWQ7XHJcblx0XHR9XHJcblx0XHRjb25zdCBleGlzdGluZ0l4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcclxuXHRcdGNvbnN0IGJvZHkgPSB0aGlzLmJvZGlmeShpdGVtKTtcclxuXHRcdGlmIChleGlzdGluZ0l4ID09PSAtMSkge1xyXG5cdFx0XHRjb2xsZWN0aW9uLnB1c2goaXRlbSk7XHJcblx0XHRcdGhlYWRlcnMuc2V0KCdMb2NhdGlvbicsIHJlc291cmNlVXJsICsgJy8nICsgaWQpO1xyXG5cdFx0XHRyZXR1cm4geyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVU19DT0RFLkNSRUFURUQgfTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb25maWcucG9zdDQwOSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuQ09ORkxJQ1QsIGAnJHtjb2xsZWN0aW9uTmFtZX0nIGl0ZW0gd2l0aCBpZD0nJHtpZH0gZXhpc3RzIGFuZCBtYXkgbm90IGJlIHVwZGF0ZWQgd2l0aCBQT1NUOyB1c2UgUFVUIGluc3RlYWQuYCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb2xsZWN0aW9uW2V4aXN0aW5nSXhdID0gaXRlbTtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY29uZmlnLnBvc3QyMDQgP1xyXG5cdFx0XHRcdHsgaGVhZGVycywgc3RhdHVzOiBTVEFUVVNfQ09ERS5OT19DT05URU5UIH0gOiAvLyBzdWNjZXNzZnVsOyBubyBjb250ZW50XHJcblx0XHRcdFx0eyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVU19DT0RFLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFVwZGF0ZSBleGlzdGluZyBlbnRpdHlcclxuXHQvLyBDYW4gY3JlYXRlIGFuIGVudGl0eSB0b28gaWYgcHV0NDA0IGlzIGZhbHNlLlxyXG5cdHByb3RlY3RlZCBwdXQoeyBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaGVhZGVycywgaWQsIHJlcXVlc3QsIHVybCB9OiBNZW1vcnlSZXF1ZXN0KTogTWVtb3J5UmVzcG9uc2Uge1xyXG5cdFx0Y29uc3QgaXRlbSA9IHRoaXMuY2xvbmUocmVxdWVzdC5ib2R5KTtcclxuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXHJcblx0XHRpZiAoaXRlbS5pZCA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLk5PVF9GT1VORCwgYE1pc3NpbmcgJyR7Y29sbGVjdGlvbk5hbWV9JyBpZGApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5CQURfUkVRVUVTVCwgYFJlcXVlc3QgZm9yICcke2NvbGxlY3Rpb25OYW1lfScgaWQgZG9lcyBub3QgbWF0Y2ggaXRlbS5pZGApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWQgPSBpdGVtLmlkO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgZXhpc3RpbmdJeCA9IHRoaXMuaW5kZXhPZihjb2xsZWN0aW9uLCBpZCk7XHJcblx0XHRjb25zdCBib2R5ID0gdGhpcy5ib2RpZnkoaXRlbSk7XHJcblx0XHRpZiAoZXhpc3RpbmdJeCA+IC0xKSB7XHJcblx0XHRcdGNvbGxlY3Rpb25bZXhpc3RpbmdJeF0gPSBpdGVtO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb25maWcucHV0MjA0ID9cclxuXHRcdFx0XHR7IGhlYWRlcnMsIHN0YXR1czogU1RBVFVTX0NPREUuTk9fQ09OVEVOVCB9IDogLy8gc3VjY2Vzc2Z1bDsgbm8gY29udGVudFxyXG5cdFx0XHRcdHsgaGVhZGVycywgYm9keSwgc3RhdHVzOiBTVEFUVVNfQ09ERS5PSyB9OyAvLyBzdWNjZXNzZnVsOyByZXR1cm4gZW50aXR5XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY29uZmlnLnB1dDQwNCkge1xyXG5cdFx0XHQvLyBpdGVtIHRvIHVwZGF0ZSBub3QgZm91bmQ7IHVzZSBQT1NUIHRvIGNyZWF0ZSBuZXcgaXRlbSBmb3IgdGhpcyBpZC5cclxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLk5PVF9GT1VORCwgYCcke2NvbGxlY3Rpb25OYW1lfScgaXRlbSB3aXRoIGlkPScke2lkfSBub3QgZm91bmQgYW5kIG1heSBub3QgYmUgY3JlYXRlZCB3aXRoIFBVVDsgdXNlIFBPU1QgaW5zdGVhZC5gKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIGNyZWF0ZSBuZXcgaXRlbSBmb3IgaWQgbm90IGZvdW5kXHJcblx0XHRcdGNvbGxlY3Rpb24ucHVzaChpdGVtKTtcclxuXHRcdFx0cmV0dXJuIHsgaGVhZGVycywgYm9keSwgc3RhdHVzOiBTVEFUVVNfQ09ERS5DUkVBVEVEIH07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZGVsZXRlKHsgY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMsIGlkLCB1cmwgfTogTWVtb3J5UmVxdWVzdCk6IE1lbW9yeVJlc3BvbnNlIHtcclxuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXHJcblx0XHRpZiAoaWQgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5OT1RfRk9VTkQsIGBNaXNzaW5nIFwiJHtjb2xsZWN0aW9uTmFtZX1cIiBpZGApO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgZXhpc3RzID0gdGhpcy5yZW1vdmVCeUlkKGNvbGxlY3Rpb24sIGlkKTtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXHJcblx0XHRcdHN0YXR1czogKGV4aXN0cyB8fCAhdGhpcy5jb25maWcuZGVsZXRlNDA0KSA/IFNUQVRVU19DT0RFLk5PX0NPTlRFTlQgOiBTVEFUVVNfQ09ERS5OT1RfRk9VTkRcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHQvLy8vLy8vXHJcblxyXG5cclxuXHRoYW5kbGUocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmhhbmRsZVJlcXVlc3QocmVxdWVzdCk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZShyZXF1ZXN0LnVybCwgU1RBVFVTX0NPREUuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBgJHtlcnJvci5tZXNzYWdlIHx8IGVycm9yfWApO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gcmVzcG9uc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGNyZWF0ZVF1ZXJ5TWFwKHNlYXJjaDogc3RyaW5nKTogTWFwPHN0cmluZywgc3RyaW5nW10+IHtcclxuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcclxuXHRcdGlmIChzZWFyY2gpIHtcclxuXHRcdFx0Y29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tU3RyaW5nOiBzZWFyY2ggfSk7XHJcblx0XHRcdHBhcmFtcy5rZXlzKCkuZm9yRWFjaChwID0+IG1hcC5zZXQocCwgcGFyYW1zLmdldEFsbChwKSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG1hcDtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBjcmVhdGVSZXNwb25zZSRmcm9tTWVtb3J5UmVzcG9uc2UkKHJlc3BvbnNlJDogT2JzZXJ2YWJsZTxNZW1vcnlSZXNwb25zZT4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PiB7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2UkLnBpcGUoXHJcblx0XHRcdG1hcCgob3B0aW9uczogSHR0cFJlc3BvbnNlQmFzZSkgPT4gbmV3IEh0dHBSZXNwb25zZTxhbnk+KG9wdGlvbnMpKSxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgY3JlYXRlUGFzc1RocnVCYWNrZW5kKCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0cmV0dXJuIG5ldyBIdHRwWGhyQmFja2VuZCh0aGlzLmZhY3RvcnkpO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdDYW5ub3QgY3JlYXRlIHBhc3NUaHJ1NDA0IGJhY2tlbmQ7ICcgKyAoZXJyb3IubWVzc2FnZSB8fCAnJyk7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19