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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTBCLFdBQVcsRUFBRSxVQUFVLEVBQWUsWUFBWSxFQUFvQixjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEssT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQVksRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQW1ELFFBQVEsRUFBbUIsbUJBQW1CLEVBQVcsTUFBTSxVQUFVLENBQUM7QUFDNUssT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkU7SUFRQyx3QkFDVyxXQUE4QixFQUN4QyxNQUFnQyxFQUN4QixPQUFtQjtRQUQzQix1QkFBQSxFQUFBLFdBQWdDO1FBRHRCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUVoQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBUGxCLFdBQU0sR0FBd0IsSUFBSSxtQkFBbUIsRUFBRSxDQUFDOztZQVMzRCxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLGlDQUFpQztRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEs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QUcsSUFBSSxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDckQsUUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDOzs7Ozs7SUFFUywyREFBa0M7Ozs7O0lBQTVDLFVBQTZDLFNBQXFDO1FBQ2pGLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FDcEIsR0FBRzs7OztRQUFDLFVBQUMsT0FBeUIsSUFBSyxPQUFBLElBQUksWUFBWSxDQUFNLE9BQU8sQ0FBQyxFQUE5QixDQUE4QixFQUFDLENBQ2xFLENBQUM7SUFDSCxDQUFDOzs7OztJQUVTLDhDQUFxQjs7OztJQUEvQjtRQUNDLElBQUk7WUFDSCxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2YsS0FBSyxDQUFDLE9BQU8sR0FBRyxxQ0FBcUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7WUFDOUUsTUFBTSxLQUFLLENBQUM7U0FDWjtJQUNGLENBQUM7O2dCQWxtQkQsVUFBVTs7OztnQkFIbUIsaUJBQWlCO2dCQUF0QyxtQkFBbUI7Z0JBTDJGLFVBQVU7O0lBNG1CakkscUJBQUM7Q0FBQSxBQXBtQkQsSUFvbUJDO1NBbm1CWSxjQUFjOzs7Ozs7SUFFMUIseUNBQXlDOzs7OztJQUN6QyxnQ0FBa0U7Ozs7O0lBQ2xFLGtDQUEyQjs7Ozs7SUFDM0IsOENBQXlEOzs7OztJQUd4RCxxQ0FBd0M7Ozs7O0lBRXhDLGlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBCYWNrZW5kLCBIdHRwRXZlbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlLCBIdHRwUmVzcG9uc2VCYXNlLCBIdHRwWGhyQmFja2VuZCwgWGhyRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZnJvbSwgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAsIGZpcnN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWxheVJlc3BvbnNlIH0gZnJvbSAnLi9kZWxheS1yZXNwb25zZSc7XG5pbXBvcnQgeyBNZW1vcnlCYWNrZW5kQ29uZmlnLCBNZW1vcnlEYXRhU2VydmljZSwgTWVtb3J5UmVxdWVzdCwgTWVtb3J5UmVzcG9uc2UsIFBhcnNlZFJlcXVlc3RVcmwsIHBhcnNlVXJpLCBQYXNzVGhydUJhY2tlbmQsIHJlbW92ZVRyYWlsaW5nU2xhc2gsIFVyaUluZm8gfSBmcm9tICcuL21lbW9yeSc7XG5pbXBvcnQgeyBnZXRTdGF0dXNUZXh0LCBpc1N1Y2Nlc3MsIFNUQVRVU19DT0RFIH0gZnJvbSAnLi9zdGF0dXMtY29kZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2UgaW1wbGVtZW50cyBIdHRwQmFja2VuZCB7XG5cblx0cHJpdmF0ZSBwYXNzVGhydUJhY2tlbmQ6IFBhc3NUaHJ1QmFja2VuZDtcblx0cHJvdGVjdGVkIGNvbmZpZzogTWVtb3J5QmFja2VuZENvbmZpZyA9IG5ldyBNZW1vcnlCYWNrZW5kQ29uZmlnKCk7XG5cdHByb3RlY3RlZCBkYXRhYmFzZTogT2JqZWN0O1xuXHRwcm90ZWN0ZWQgZGF0YWJhc2VSZWFkeVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgZGF0YVNlcnZpY2U6IE1lbW9yeURhdGFTZXJ2aWNlLFxuXHRcdGNvbmZpZzogTWVtb3J5QmFja2VuZENvbmZpZyA9IHt9LFxuXHRcdHByaXZhdGUgZmFjdG9yeTogWGhyRmFjdG9yeSxcblx0KSB7XG5cdFx0Y29uc3QgbG9jYXRpb24gPSB0aGlzLmdldExvY2F0aW9uKCcvJyk7XG5cdFx0dGhpcy5jb25maWcuaG9zdCA9IGxvY2F0aW9uLmhvc3Q7IC8vIGRlZmF1bHQgdG8gYXBwIHdlYiBzZXJ2ZXIgaG9zdFxuXHRcdHRoaXMuY29uZmlnLnJvb3RQYXRoID0gbG9jYXRpb24ucGF0aDsgLy8gZGVmYXVsdCB0byBwYXRoIHdoZW4gYXBwIGlzIHNlcnZlZCAoZS5nLicvJylcblx0XHRPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBjb25maWcpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldCBkYXRhYmFzZVJlYWR5KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdGlmICghdGhpcy5kYXRhYmFzZVJlYWR5U3ViamVjdCkge1xuXHRcdFx0Ly8gZmlyc3QgdGltZSB0aGUgc2VydmljZSBpcyBjYWxsZWQuXG5cdFx0XHR0aGlzLmRhdGFiYXNlUmVhZHlTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cdFx0XHR0aGlzLnJlc2V0RGIoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZGF0YWJhc2VSZWFkeVN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcblx0XHRcdGZpcnN0KChyZWFkeTogYm9vbGVhbikgPT4gcmVhZHkpXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm9jZXNzIFJlcXVlc3QgYW5kIHJldHVybiBhbiBPYnNlcnZhYmxlIG9mIEh0dHAgUmVzcG9uc2Ugb2JqZWN0XG5cdCAqIGluIHRoZSBtYW5uZXIgb2YgYSBSRVNUeSB3ZWIgYXBpLlxuXHQgKlxuXHQgKiBFeHBlY3QgVVJJIHBhdHRlcm4gaW4gdGhlIGZvcm0gOmJhc2UvOmNvbGxlY3Rpb25OYW1lLzppZD9cblx0ICogRXhhbXBsZXM6XG5cdCAqICAgLy8gZm9yIHN0b3JlIHdpdGggYSAnY3VzdG9tZXJzJyBjb2xsZWN0aW9uXG5cdCAqICAgR0VUIGFwaS9jdXN0b21lcnMgICAgICAgICAgLy8gYWxsIGN1c3RvbWVyc1xuXHQgKiAgIEdFVCBhcGkvY3VzdG9tZXJzLzQyICAgICAgIC8vIHRoZSBjaGFyYWN0ZXIgd2l0aCBpZD00MlxuXHQgKiAgIEdFVCBhcGkvY3VzdG9tZXJzP25hbWU9XmogIC8vICdqJyBpcyBhIHJlZ2V4OyByZXR1cm5zIGN1c3RvbWVycyB3aG9zZSBuYW1lIHN0YXJ0cyB3aXRoICdqJyBvciAnSidcblx0ICogICBHRVQgYXBpL2N1c3RvbWVycy5qc29uLzQyICAvLyBpZ25vcmVzIHRoZSBcIi5qc29uXCJcblx0ICpcblx0ICogQWxzbyBhY2NlcHRzIGRpcmVjdCBjb21tYW5kcyB0byB0aGUgc2VydmljZSBpbiB3aGljaCB0aGUgbGFzdCBzZWdtZW50IG9mIHRoZSBhcGlCYXNlIGlzIHRoZSB3b3JkIFwiY29tbWFuZHNcIlxuXHQgKiBFeGFtcGxlczpcblx0ICogICAgIFBPU1QgY29tbWFuZHMvcmVzZXREYixcblx0ICogICAgIEdFVC9QT1NUIGNvbW1hbmRzL2NvbmZpZyAtIGdldCBvciAocmUpc2V0IHRoZSBjb25maWdcblx0ICpcblx0ICogICBIVFRQIG92ZXJyaWRlczpcblx0ICogICAgIElmIHRoZSBpbmplY3RlZCBkYXRhU2VydmljZSBkZWZpbmVzIGFuIEhUVFAgbWV0aG9kIChsb3dlcmNhc2UpXG5cdCAqICAgICBUaGUgcmVxdWVzdCBpcyBmb3J3YXJkZWQgdG8gdGhhdCBtZXRob2QgYXMgaW5cblx0ICogICAgIGBkYXRhU2VydmljZS5nZXQobWVtb3J5UmVxdWVzdClgXG5cdCAqICAgICB3aGljaCBtdXN0IHJldHVybiBlaXRoZXIgYW4gT2JzZXJ2YWJsZSBvZiB0aGUgcmVzcG9uc2UgdHlwZVxuXHQgKiAgICAgZm9yIHRoaXMgaHR0cCBsaWJyYXJ5IG9yIG51bGx8dW5kZWZpbmVkICh3aGljaCBtZWFucyBcImtlZXAgcHJvY2Vzc2luZ1wiKS5cblx0ICovXG5cdHByb3RlY3RlZCBoYW5kbGVSZXF1ZXN0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdC8vICBoYW5kbGUgdGhlIHJlcXVlc3Qgd2hlbiB0aGVyZSBpcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2Vcblx0XHRyZXR1cm4gdGhpcy5kYXRhYmFzZVJlYWR5LnBpcGUoY29uY2F0TWFwKCgpID0+IHRoaXMuaGFuZGxlUmVxdWVzdF8ocmVxdWVzdCkpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBoYW5kbGVSZXF1ZXN0XyhyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCB1cmwgPSByZXF1ZXN0LnVybFdpdGhQYXJhbXMgPyByZXF1ZXN0LnVybFdpdGhQYXJhbXMgOiByZXF1ZXN0LnVybDtcblx0XHQvLyBUcnkgb3ZlcnJpZGUgcGFyc2VyXG5cdFx0Ly8gSWYgbm8gb3ZlcnJpZGUgcGFyc2VyIG9yIGl0IHJldHVybnMgbm90aGluZywgdXNlIGRlZmF1bHQgcGFyc2VyXG5cdFx0Ly8gY29uc3QgcGFyc2VyID0gdGhpcy5iaW5kKCdwYXJzZVJlcXVlc3RVcmwnKTtcblx0XHQvLyBjb25zdCBwYXJzZWQ6IFBhcnNlZFJlcXVlc3RVcmwgPSAocGFyc2VyICYmIHBhcnNlcih1cmwsIHRoaXMpKSB8fCB0aGlzLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xuXHRcdGNvbnN0IHBhcnNlZDogUGFyc2VkUmVxdWVzdFVybCA9IHRoaXMucGFyc2VSZXF1ZXN0VXJsKHVybCk7XG5cdFx0Y29uc3QgY29sbGVjdGlvbk5hbWUgPSBwYXJzZWQuY29sbGVjdGlvbk5hbWU7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IHRoaXMuZGF0YWJhc2VbY29sbGVjdGlvbk5hbWVdO1xuXHRcdGNvbnN0IG1lbW9yeVJlcXVlc3Q6IE1lbW9yeVJlcXVlc3QgPSB7XG5cdFx0XHRyZXF1ZXN0OiByZXF1ZXN0LFxuXHRcdFx0Ym9keTogcmVxdWVzdC5ib2R5LFxuXHRcdFx0YXBpQmFzZTogcGFyc2VkLmFwaUJhc2UsXG5cdFx0XHRjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuXHRcdFx0Y29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lLFxuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcblx0XHRcdGlkOiB0aGlzLnBhcnNlSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIHBhcnNlZC5pZCksXG5cdFx0XHRtZXRob2Q6IChyZXF1ZXN0Lm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKSxcblx0XHRcdHF1ZXJ5OiBwYXJzZWQucXVlcnksXG5cdFx0XHRyZXNvdXJjZVVybDogcGFyc2VkLnJlc291cmNlVXJsLFxuXHRcdFx0dXJsOiB1cmwsXG5cdFx0fTtcblx0XHQvLyBJZiBgZGF0YVNlcnZpY2UucmVxdWVzdEludGVyY2VwdG9yYCBleGlzdHMsIGxldCBpdCBtb3JwaCB0aGUgcmVzcG9uc2Ugb3B0aW9uc1xuXHRcdGNvbnN0IGludGVyY2VwdG9yID0gdGhpcy5iaW5kKCdyZXF1ZXN0SW50ZXJjZXB0b3InKTtcblx0XHRpZiAoL2NvbW1hbmRzXFwvPyQvaS50ZXN0KG1lbW9yeVJlcXVlc3QuYXBpQmFzZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbW1hbmRzKG1lbW9yeVJlcXVlc3QpO1xuXHRcdH1cblx0XHRjb25zdCBtZXRob2RJbnRlcmNlcHRvciA9IHRoaXMuYmluZChtZW1vcnlSZXF1ZXN0Lm1ldGhvZCk7XG5cdFx0aWYgKG1ldGhvZEludGVyY2VwdG9yKSB7XG5cdFx0XHQvLyBNZW1vcnlEYXRhU2VydmljZSBpbnRlcmNlcHRzIHRoaXMgSFRUUCBtZXRob2QuXG5cdFx0XHQvLyBpZiBpbnRlcmNlcHRvciBwcm9kdWNlZCBhIHJlc3BvbnNlLCByZXR1cm4gaXQuXG5cdFx0XHQvLyBlbHNlIE1lbW9yeURhdGFTZXJ2aWNlIGNob3NlIG5vdCB0byBpbnRlcmNlcHQ7IGNvbnRpbnVlIHByb2Nlc3NpbmcuXG5cdFx0XHRjb25zdCBpbnRlcmNlcHRvclJlc3BvbnNlID0gbWV0aG9kSW50ZXJjZXB0b3IobWVtb3J5UmVxdWVzdCk7XG5cdFx0XHRpZiAoaW50ZXJjZXB0b3JSZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gaW50ZXJjZXB0b3JSZXNwb25zZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gISEhXG5cdFx0bGV0IHJlc3BvbnNlOiBNZW1vcnlSZXNwb25zZSA9IGludGVyY2VwdG9yID8gaW50ZXJjZXB0b3IobWVtb3J5UmVxdWVzdCwgdGhpcykgOiBudWxsO1xuXHRcdGlmIChyZXNwb25zZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHJlc3BvbnNlKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZGF0YWJhc2VbY29sbGVjdGlvbk5hbWVdKSB7XG5cdFx0XHQvLyByZXF1ZXN0IGlzIGZvciBhIGtub3duIGNvbGxlY3Rpb24gb2YgdGhlIE1lbW9yeURhdGFTZXJ2aWNlXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gdGhpcy5jb2xsZWN0aW9uSGFuZGxlcihtZW1vcnlSZXF1ZXN0KSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNvbmZpZy5wYXNzVGhydVVua25vd25VcmwpIHtcblx0XHRcdC8vIHVua25vd24gY29sbGVjdGlvbjsgcGFzcyByZXF1ZXN0IHRocnUgdG8gYSBcInJlYWxcIiBiYWNrZW5kLlxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFzc1RocnVCYWNrZW5kKCkuaGFuZGxlKHJlcXVlc3QpO1xuXHRcdH1cblx0XHQvLyA0MDQgLSBjYW4ndCBoYW5kbGUgdGhpcyByZXF1ZXN0XG5cdFx0cmVzcG9uc2UgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5OT1RfRk9VTkQsIGBDb2xsZWN0aW9uICcke2NvbGxlY3Rpb25OYW1lfScgbm90IGZvdW5kYCk7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHJlc3BvbnNlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXJzZXMgdGhlIHJlcXVlc3QgVVJMIGludG8gYSBgUGFyc2VkUmVxdWVzdFVybGAgb2JqZWN0LlxuXHQgKiBQYXJzaW5nIGRlcGVuZHMgdXBvbiBjZXJ0YWluIHZhbHVlcyBvZiBgY29uZmlnYDogYGFwaUJhc2VgLCBgaG9zdGAsIGFuZCBgdXJsUm9vdGAuXG5cdCAqXG5cdCAqIENvbmZpZ3VyaW5nIHRoZSBgYXBpQmFzZWAgeWllbGRzIHRoZSBtb3N0IGludGVyZXN0aW5nIGNoYW5nZXMgdG8gYHBhcnNlUmVxdWVzdFVybGAgYmVoYXZpb3I6XG5cdCAqICAgV2hlbiBhcGlCYXNlPXVuZGVmaW5lZCBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L2FwaS9jb2xsZWN0aW9uLzQyJ1xuXHQgKiAgICAge2Jhc2U6ICdhcGkvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6ICc0MicsIC4uLn1cblx0ICogICBXaGVuIGFwaUJhc2U9J3NvbWUvYXBpL3Jvb3QvJyBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L3NvbWUvYXBpL3Jvb3QvY29sbGVjdGlvbidcblx0ICogICAgIHtiYXNlOiAnc29tZS9hcGkvcm9vdC8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogdW5kZWZpbmVkLCAuLi59XG5cdCAqICAgV2hlbiBhcGlCYXNlPScvJyBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L2NvbGxlY3Rpb24nXG5cdCAqICAgICB7YmFzZTogJy8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogdW5kZWZpbmVkLCAuLi59XG5cdCAqXG5cdCAqIFRoZSBhY3R1YWwgYXBpIGJhc2Ugc2VnbWVudCB2YWx1ZXMgYXJlIGlnbm9yZWQuIE9ubHkgdGhlIG51bWJlciBvZiBzZWdtZW50cyBtYXR0ZXJzLlxuXHQgKiBUaGUgZm9sbG93aW5nIGFwaSBiYXNlIHN0cmluZ3MgYXJlIGNvbnNpZGVyZWQgaWRlbnRpY2FsOiAnYS9iJyB+ICdzb21lL2FwaS8nIH4gYHR3by9zZWdtZW50cydcblx0ICpcblx0ICogVG8gcmVwbGFjZSB0aGlzIGRlZmF1bHQgbWV0aG9kLCBhc3NpZ24geW91ciBhbHRlcm5hdGl2ZSB0byB5b3VyIE1lbW9yeURhdGFTZXJ2aWNlWydwYXJzZVJlcXVlc3RVcmwnXVxuXHQgKi9cblx0cHJvdGVjdGVkIHBhcnNlUmVxdWVzdFVybCh1cmw6IHN0cmluZyk6IFBhcnNlZFJlcXVlc3RVcmwge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBsb2NhdGlvbiA9IHRoaXMuZ2V0TG9jYXRpb24odXJsKTtcblx0XHRcdGxldCBkcm9wID0gdGhpcy5jb25maWcucm9vdFBhdGgubGVuZ3RoO1xuXHRcdFx0bGV0IHVybFJvb3QgPSAnJztcblx0XHRcdGlmIChsb2NhdGlvbi5ob3N0ICE9PSB0aGlzLmNvbmZpZy5ob3N0KSB7XG5cdFx0XHRcdC8vIHVybCBmb3IgYSBzZXJ2ZXIgb24gYSBkaWZmZXJlbnQgaG9zdCFcblx0XHRcdFx0Ly8gYXNzdW1lIGl0J3MgY29sbGVjdGlvbiBpcyBhY3R1YWxseSBoZXJlIHRvby5cblx0XHRcdFx0ZHJvcCA9IDE7IC8vIHRoZSBsZWFkaW5nIHNsYXNoXG5cdFx0XHRcdHVybFJvb3QgPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy8nO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGguc3Vic3RyaW5nKGRyb3ApO1xuXHRcdFx0Y29uc3QgcGF0aFNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpO1xuXHRcdFx0bGV0IHNlZ21lbnRJeCA9IDA7XG5cdFx0XHQvLyBhcGlCYXNlOiB0aGUgZnJvbnQgcGFydCBvZiB0aGUgcGF0aCBkZXZvdGVkIHRvIGdldHRpbmcgdG8gdGhlIGFwaSByb3V0ZVxuXHRcdFx0Ly8gQXNzdW1lcyBmaXJzdCBwYXRoIHNlZ21lbnQgaWYgbm8gY29uZmlnLmFwaUJhc2Vcblx0XHRcdC8vIGVsc2UgaWdub3JlcyBhcyBtYW55IHBhdGggc2VnbWVudHMgYXMgYXJlIGluIGNvbmZpZy5hcGlCYXNlXG5cdFx0XHQvLyBEb2VzIE5PVCBjYXJlIHdoYXQgdGhlIGFwaSBiYXNlIGNoYXJzIGFjdHVhbGx5IGFyZS5cblx0XHRcdGxldCBhcGlCYXNlOiBzdHJpbmc7XG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuXHRcdFx0aWYgKHRoaXMuY29uZmlnLmFwaUJhc2UgPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGFwaUJhc2UgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXBpQmFzZSA9IHJlbW92ZVRyYWlsaW5nU2xhc2godGhpcy5jb25maWcuYXBpQmFzZS50cmltKCkpO1xuXHRcdFx0XHRpZiAoYXBpQmFzZSkge1xuXHRcdFx0XHRcdHNlZ21lbnRJeCA9IGFwaUJhc2Uuc3BsaXQoJy8nKS5sZW5ndGg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2VnbWVudEl4ID0gMDsgLy8gbm8gYXBpIGJhc2UgYXQgYWxsOyB1bndpc2UgYnV0IGFsbG93ZWQuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGFwaUJhc2UgKz0gJy8nO1xuXHRcdFx0bGV0IGNvbGxlY3Rpb25OYW1lID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcblx0XHRcdC8vIGlnbm9yZSBhbnl0aGluZyBhZnRlciBhICcuJyAoZS5nLix0aGUgXCJqc29uXCIgaW4gXCJjdXN0b21lcnMuanNvblwiKVxuXHRcdFx0Y29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZSAmJiBjb2xsZWN0aW9uTmFtZS5zcGxpdCgnLicpWzBdO1xuXHRcdFx0Y29uc3QgaWQgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB0aGlzLmNyZWF0ZVF1ZXJ5TWFwKGxvY2F0aW9uLnF1ZXJ5KTtcblx0XHRcdGNvbnN0IHJlc291cmNlVXJsID0gdXJsUm9vdCArIGFwaUJhc2UgKyBjb2xsZWN0aW9uTmFtZSArICcvJztcblx0XHRcdHJldHVybiB7IGFwaUJhc2UsIGNvbGxlY3Rpb25OYW1lLCBpZCwgcXVlcnksIHJlc291cmNlVXJsIH07XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnN0IG1lc3NhZ2UgPSBgdW5hYmxlIHRvIHBhcnNlIHVybCAnJHt1cmx9Jzsgb3JpZ2luYWwgZXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBQYXJzZSB0aGUgaWQgYXMgYSBudW1iZXIuIFJldHVybiBvcmlnaW5hbCB2YWx1ZSBpZiBub3QgYSBudW1iZXIuICovXG5cdHByb3RlY3RlZCBwYXJzZUlkKGNvbGxlY3Rpb246IGFueVtdLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nKTogYW55IHtcblx0XHRpZiAoIXRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSkge1xuXHRcdFx0Ly8gQ2FuJ3QgY29uZmlybSB0aGF0IGBpZGAgaXMgYSBudW1lcmljIHR5cGU7IGRvbid0IHBhcnNlIGFzIGEgbnVtYmVyXG5cdFx0XHQvLyBvciBlbHNlIGAnNDInYCAtPiBgNDJgIGFuZCBfZ2V0IGJ5IGlkXyBmYWlscy5cblx0XHRcdHJldHVybiBpZDtcblx0XHR9XG5cdFx0Y29uc3QgaWROdW0gPSBwYXJzZUZsb2F0KGlkKTtcblx0XHRyZXR1cm4gaXNOYU4oaWROdW0pID8gaWQgOiBpZE51bTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGQgY29uZmlndXJlZCBkZWxheSB0byByZXNwb25zZSBvYnNlcnZhYmxlIHVubGVzcyBkZWxheSA9PT0gMFxuXHQgKi9cblx0cHJvdGVjdGVkIGFkZERlbGF5KHJlc3BvbnNlOiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGRlbGF5ID0gdGhpcy5jb25maWcuZGVsYXk7XG5cdFx0cmV0dXJuIGRlbGF5ID09PSAwID8gcmVzcG9uc2UgOiBkZWxheVJlc3BvbnNlKHJlc3BvbnNlLCBkZWxheSB8fCA1MDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFwcGx5IHF1ZXJ5L3NlYXJjaCBwYXJhbWV0ZXJzIGFzIGEgZmlsdGVyIG92ZXIgdGhlIGNvbGxlY3Rpb25cblx0ICogVGhpcyBpbXBsIG9ubHkgc3VwcG9ydHMgUmVnRXhwIHF1ZXJpZXMgb24gc3RyaW5nIHByb3BlcnRpZXMgb2YgdGhlIGNvbGxlY3Rpb25cblx0ICogQU5EcyB0aGUgY29uZGl0aW9ucyB0b2dldGhlclxuXHQgKi9cblx0cHJvdGVjdGVkIGFwcGx5UXVlcnkoY29sbGVjdGlvbjogYW55W10sIHF1ZXJ5OiBNYXA8c3RyaW5nLCBzdHJpbmdbXT4pOiBhbnlbXSB7XG5cdFx0Ly8gZXh0cmFjdCBmaWx0ZXJpbmcgY29uZGl0aW9ucyAtIHtwcm9wZXJ0eU5hbWUsIFJlZ0V4cHMpIC0gZnJvbSBxdWVyeS9zZWFyY2ggcGFyYW1ldGVyc1xuXHRcdGNvbnN0IGNvbmRpdGlvbnM6IHsgbmFtZTogc3RyaW5nLCByZWdleHA6IFJlZ0V4cCB9W10gPSBbXTtcblx0XHRjb25zdCBjYXNlU2Vuc2l0aXZlID0gdGhpcy5jb25maWcuY2FzZVNlbnNpdGl2ZVNlYXJjaCA/IHVuZGVmaW5lZCA6ICdpJztcblx0XHRxdWVyeS5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nW10sIG5hbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0dmFsdWUuZm9yRWFjaCh4ID0+IGNvbmRpdGlvbnMucHVzaCh7XG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdHJlZ2V4cDogbmV3IFJlZ0V4cChkZWNvZGVVUkkoeCksIGNhc2VTZW5zaXRpdmUpXG5cdFx0XHR9KSk7XG5cdFx0fSk7XG5cdFx0Y29uc3QgbGVuZ3RoID0gY29uZGl0aW9ucy5sZW5ndGg7XG5cdFx0aWYgKCFsZW5ndGgpIHtcblx0XHRcdHJldHVybiBjb2xsZWN0aW9uO1xuXHRcdH1cblx0XHQvLyBBTkQgdGhlIFJlZ0V4cCBjb25kaXRpb25zXG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uZmlsdGVyKHJvdyA9PiB7XG5cdFx0XHRsZXQgaGFzID0gdHJ1ZTtcblx0XHRcdGxldCBpID0gbGVuZ3RoO1xuXHRcdFx0d2hpbGUgKGhhcyAmJiBpKSB7XG5cdFx0XHRcdGkgLT0gMTtcblx0XHRcdFx0Y29uc3QgY29uZCA9IGNvbmRpdGlvbnNbaV07XG5cdFx0XHRcdGhhcyA9IGNvbmQucmVnZXhwLnRlc3Qocm93W2NvbmQubmFtZV0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGhhcztcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBtZXRob2QgZnJvbSB0aGUgYE1lbW9yeURhdGFTZXJ2aWNlYCAoaWYgaXQgZXhpc3RzKSwgYm91bmQgdG8gdGhhdCBzZXJ2aWNlXG5cdCAqL1xuXHRwcm90ZWN0ZWQgYmluZDxUIGV4dGVuZHMgRnVuY3Rpb24+KG1ldGhvZE5hbWU6IHN0cmluZykge1xuXHRcdGNvbnN0IG1ldGhvZCA9IHRoaXMuZGF0YVNlcnZpY2VbbWV0aG9kTmFtZV0gYXMgVDtcblx0XHRyZXR1cm4gbWV0aG9kID8gPFQ+bWV0aG9kLmJpbmQodGhpcy5kYXRhU2VydmljZSkgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHRwdWJsaWMgYm9kaWZ5KGRhdGE6IGFueSkge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5kYXRhRW5jYXBzdWxhdGlvbiA/IHsgZGF0YSB9IDogZGF0YTtcblx0fVxuXG5cdHByb3RlY3RlZCBjbG9uZShkYXRhOiBhbnkpIHtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY29sbGVjdGlvbkhhbmRsZXIocmVxdWVzdDogTWVtb3J5UmVxdWVzdCk6IE1lbW9yeVJlc3BvbnNlIHtcblx0XHQvLyBjb25zdCByZXF1ZXN0ID0gcmVxdWVzdC5yZXF1ZXN0O1xuXHRcdGxldCByZXNwb25zZTogTWVtb3J5UmVzcG9uc2U7XG5cdFx0c3dpdGNoIChyZXF1ZXN0Lm1ldGhvZCkge1xuXHRcdFx0Y2FzZSAnZ2V0Jzpcblx0XHRcdFx0cmVzcG9uc2UgPSB0aGlzLmdldChyZXF1ZXN0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdwb3N0Jzpcblx0XHRcdFx0cmVzcG9uc2UgPSB0aGlzLnBvc3QocmVxdWVzdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncHV0Jzpcblx0XHRcdFx0cmVzcG9uc2UgPSB0aGlzLnB1dChyZXF1ZXN0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkZWxldGUnOlxuXHRcdFx0XHRyZXNwb25zZSA9IHRoaXMuZGVsZXRlKHJlcXVlc3QpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJlc3BvbnNlID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHJlcXVlc3QudXJsLCBTVEFUVVNfQ09ERS5NRVRIT0RfTk9UX0FMTE9XRUQsICdNZXRob2Qgbm90IGFsbG93ZWQnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdC8vIElmIGBkYXRhU2VydmljZS5yZXNwb25zZUludGVyY2VwdG9yYCBleGlzdHMsIGxldCBpdCBtb3JwaCB0aGUgcmVzcG9uc2Ugb3B0aW9uc1xuXHRcdGNvbnN0IGludGVyY2VwdG9yID0gdGhpcy5iaW5kKCdyZXNwb25zZUludGVyY2VwdG9yJyk7XG5cdFx0Ly8gISEhXG5cdFx0cmV0dXJuIGludGVyY2VwdG9yID8gaW50ZXJjZXB0b3IocmVzcG9uc2UsIHJlcXVlc3QpIDogcmVzcG9uc2U7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlRXJyb3JSZXNwb25zZSh1cmw6IHN0cmluZywgc3RhdHVzOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZyk6IE1lbW9yeVJlc3BvbnNlIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRlcnJvcjogYCR7bWVzc2FnZX1gLFxuXHRcdFx0fSxcblx0XHRcdHVybDogdXJsLFxuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSksXG5cdFx0XHRzdGF0dXM6IHN0YXR1c1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgY29sZCByZXNwb25zZSBPYnNlcnZhYmxlIGZyb20gYSBmYWN0b3J5IGZvciBNZW1vcnlSZXNwb25zZVxuXHQgKiBAcGFyYW0gbWVtb3J5UmVzcG9uc2VGYWN0b3J5IC0gY3JlYXRlcyBNZW1vcnlSZXNwb25zZSB3aGVuIG9ic2VydmFibGUgaXMgc3Vic2NyaWJlZFxuXHQgKiBAcGFyYW0gd2l0aERlbGF5IC0gaWYgdHJ1ZSAoZGVmYXVsdCksIGFkZCBzaW11bGF0ZWQgbGF0ZW5jeSBkZWxheSBmcm9tIGNvbmZpZ3VyYXRpb25cblx0ICovXG5cdHByb3RlY3RlZCBjcmVhdGVSZXNwb25zZSQobWVtb3J5UmVzcG9uc2VGYWN0b3J5OiAoKSA9PiBNZW1vcnlSZXNwb25zZSwgd2l0aERlbGF5ID0gdHJ1ZSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgbWVtb3J5UmVzcG9uc2UkID0gdGhpcy5jcmVhdGVNZW1vcnlSZXNwb25zZSQobWVtb3J5UmVzcG9uc2VGYWN0b3J5KTtcblx0XHRjb25zdCByZXNwb25zZSQgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlJGZyb21NZW1vcnlSZXNwb25zZSQobWVtb3J5UmVzcG9uc2UkKTtcblx0XHRyZXR1cm4gd2l0aERlbGF5ID8gdGhpcy5hZGREZWxheShyZXNwb25zZSQpIDogcmVzcG9uc2UkO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIGNvbGQgT2JzZXJ2YWJsZSBvZiBNZW1vcnlSZXNwb25zZS5cblx0ICogQHBhcmFtIG1lbW9yeVJlc3BvbnNlRmFjdG9yeSAtIGNyZWF0ZXMgTWVtb3J5UmVzcG9uc2Ugd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcblx0ICovXG5cdHByb3RlY3RlZCBjcmVhdGVNZW1vcnlSZXNwb25zZSQobWVtb3J5UmVzcG9uc2VGYWN0b3J5OiAoKSA9PiBNZW1vcnlSZXNwb25zZSk6IE9ic2VydmFibGU8TWVtb3J5UmVzcG9uc2U+IHtcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGU8TWVtb3J5UmVzcG9uc2U+KChvYnNlcnZlcjogT2JzZXJ2ZXI8TWVtb3J5UmVzcG9uc2U+KSA9PiB7XG5cdFx0XHRsZXQgcmVzcG9uc2U6IE1lbW9yeVJlc3BvbnNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzcG9uc2UgPSBtZW1vcnlSZXNwb25zZUZhY3RvcnkoKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGVycm9yID0gZXJyb3IubWVzc2FnZSB8fCBlcnJvcjtcblx0XHRcdFx0cmVzcG9uc2UgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UoJycsIFNUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgYCR7ZXJyb3J9YCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXNwb25zZS5zdGF0dXNUZXh0ID0gZ2V0U3RhdHVzVGV4dChzdGF0dXMpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlIGZhaWx1cmUgKi8gfVxuXHRcdFx0aWYgKGlzU3VjY2VzcyhzdGF0dXMpKSB7XG5cdFx0XHRcdG9ic2VydmVyLm5leHQocmVzcG9uc2UpO1xuXHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2JzZXJ2ZXIuZXJyb3IocmVzcG9uc2UpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICgpID0+IHsgfTsgLy8gdW5zdWJzY3JpYmUgZnVuY3Rpb25cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaW5kIGZpcnN0IGluc3RhbmNlIG9mIGl0ZW0gaW4gY29sbGVjdGlvbiBieSBgaXRlbS5pZGBcblx0ICogQHBhcmFtIGNvbGxlY3Rpb25cblx0ICogQHBhcmFtIGlkXG5cdCAqL1xuXHRwcm90ZWN0ZWQgZmluZEJ5SWQ8VCBleHRlbmRzIHsgaWQ6IGFueSB9Pihjb2xsZWN0aW9uOiBUW10sIGlkOiBhbnkpOiBUIHtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5maW5kKChpdGVtOiBUKSA9PiBpdGVtLmlkID09PSBpZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2VuZXJhdGUgdGhlIG5leHQgYXZhaWxhYmxlIGlkIGZvciBpdGVtIGluIHRoaXMgY29sbGVjdGlvblxuXHQgKiBVc2UgbWV0aG9kIGZyb20gYGRhdGFTZXJ2aWNlYCBpZiBpdCBleGlzdHMgYW5kIHJldHVybnMgYSB2YWx1ZSxcblx0ICogZWxzZSBkZWxlZ2F0ZXMgdG8gYGdlbklkRGVmYXVsdGAuXG5cdCAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gY29sbGVjdGlvbiBvZiBpdGVtcyB3aXRoIGBpZGAga2V5IHByb3BlcnR5XG5cdCAqL1xuXHRwcm90ZWN0ZWQgZ2VuSWQ8VCBleHRlbmRzIHsgaWQ6IGFueSB9Pihjb2xsZWN0aW9uOiBUW10sIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBhbnkge1xuXHRcdGNvbnN0IGdlbklkID0gdGhpcy5iaW5kKCdnZW5JZCcpO1xuXHRcdGlmIChnZW5JZCkge1xuXHRcdFx0Y29uc3QgaWQgPSBnZW5JZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuXHRcdFx0aWYgKGlkICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4gaWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmdlbklkRGVmYXVsdChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XG5cdH1cblxuXHQvKipcblx0ICogRGVmYXVsdCBnZW5lcmF0b3Igb2YgdGhlIG5leHQgYXZhaWxhYmxlIGlkIGZvciBpdGVtIGluIHRoaXMgY29sbGVjdGlvblxuXHQgKiBUaGlzIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gd29ya3Mgb25seSBmb3IgbnVtZXJpYyBpZHMuXG5cdCAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gY29sbGVjdGlvbiBvZiBpdGVtcyB3aXRoIGBpZGAga2V5IHByb3BlcnR5XG5cdCAqIEBwYXJhbSBjb2xsZWN0aW9uTmFtZSAtIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cblx0ICovXG5cdHByb3RlY3RlZCBnZW5JZERlZmF1bHQ8VCBleHRlbmRzIHsgaWQ6IGFueSB9Pihjb2xsZWN0aW9uOiBUW10sIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBhbnkge1xuXHRcdGlmICghdGhpcy5pc0NvbGxlY3Rpb25JZE51bWVyaWMoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbGxlY3Rpb24gJyR7Y29sbGVjdGlvbk5hbWV9JyBpZCB0eXBlIGlzIG5vbi1udW1lcmljIG9yIHVua25vd24uIENhbiBvbmx5IGdlbmVyYXRlIG51bWVyaWMgaWRzLmApO1xuXHRcdH1cblx0XHRsZXQgbWF4SWQgPSAwO1xuXHRcdGNvbGxlY3Rpb24ucmVkdWNlKChwcmV2OiBhbnksIGl0ZW06IGFueSkgPT4ge1xuXHRcdFx0bWF4SWQgPSBNYXRoLm1heChtYXhJZCwgdHlwZW9mIGl0ZW0uaWQgPT09ICdudW1iZXInID8gaXRlbS5pZCA6IG1heElkKTtcblx0XHR9LCB1bmRlZmluZWQpO1xuXHRcdHJldHVybiBtYXhJZCArIDE7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGxvY2F0aW9uIGluZm8gZnJvbSBhIHVybCwgZXZlbiBvbiBzZXJ2ZXIgd2hlcmUgYGRvY3VtZW50YCBpcyBub3QgZGVmaW5lZFxuXHQgKi9cblx0cHJvdGVjdGVkIGdldExvY2F0aW9uKHVybDogc3RyaW5nKTogVXJpSW5mbyB7XG5cdFx0aWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG5cdFx0XHQvLyBnZXQgdGhlIGRvY3VtZW50IGlmIHJ1bm5pbmcgaW4gYnJvd3NlclxuXHRcdFx0Y29uc3QgZG9jdW1lbnRfOiBEb2N1bWVudCA9ICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSA/IHVuZGVmaW5lZCA6IGRvY3VtZW50O1xuXHRcdFx0Ly8gYWRkIGhvc3QgaW5mbyB0byB1cmwgYmVmb3JlIHBhcnNpbmcuICBVc2UgYSBmYWtlIGhvc3Qgd2hlbiBub3QgaW4gYnJvd3Nlci5cblx0XHRcdGNvbnN0IGJhc2UgPSBkb2N1bWVudF8gPyBkb2N1bWVudF8ubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgZG9jdW1lbnRfLmxvY2F0aW9uLmhvc3QgOiAnaHR0cDovL2Zha2UnO1xuXHRcdFx0dXJsID0gdXJsLnN0YXJ0c1dpdGgoJy8nKSA/IGJhc2UgKyB1cmwgOiBiYXNlICsgJy8nICsgdXJsO1xuXHRcdH1cblx0XHRyZXR1cm4gcGFyc2VVcmkodXJsKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBnZXQgb3IgY3JlYXRlIHRoZSBmdW5jdGlvbiB0aGF0IHBhc3NlcyB1bmhhbmRsZWQgcmVxdWVzdHNcblx0ICogdGhyb3VnaCB0byB0aGUgXCJyZWFsXCIgYmFja2VuZC5cblx0ICovXG5cdHByb3RlY3RlZCBnZXRQYXNzVGhydUJhY2tlbmQoKTogUGFzc1RocnVCYWNrZW5kIHtcblx0XHRyZXR1cm4gdGhpcy5wYXNzVGhydUJhY2tlbmQgPyB0aGlzLnBhc3NUaHJ1QmFja2VuZCA6IHRoaXMucGFzc1RocnVCYWNrZW5kID0gdGhpcy5jcmVhdGVQYXNzVGhydUJhY2tlbmQoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBpbmRleE9mKGNvbGxlY3Rpb246IGFueVtdLCBpZDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uZmluZEluZGV4KChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgPT09IGlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiByZXR1cm4gdHJ1ZSBpZiBjYW4gZGV0ZXJtaW5lIHRoYXQgdGhlIGNvbGxlY3Rpb24ncyBgaXRlbS5pZGAgaXMgYSBudW1iZXJcblx0ICogVGhpcyBpbXBsZW1lbnRhdGlvbiBjYW4ndCB0ZWxsIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5IHNvIGl0IGFzc3VtZXMgTk9cblx0ICogKi9cblx0cHJvdGVjdGVkIGlzQ29sbGVjdGlvbklkTnVtZXJpYzxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdC8vIGNvbGxlY3Rpb25OYW1lIG5vdCB1c2VkIG5vdyBidXQgb3ZlcnJpZGUgbWlnaHQgbWFpbnRhaW4gY29sbGVjdGlvbiB0eXBlIGluZm9ybWF0aW9uXG5cdFx0Ly8gc28gdGhhdCBpdCBjb3VsZCBrbm93IHRoZSB0eXBlIG9mIHRoZSBgaWRgIGV2ZW4gd2hlbiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cblx0XHQvLyByZXR1cm4gISEoY29sbGVjdGlvbiAmJiBjb2xsZWN0aW9uWzBdKSAmJiB0eXBlb2YgY29sbGVjdGlvblswXS5pZCA9PT0gJ251bWJlcic7XG5cdFx0cmV0dXJuICEhKGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvblswXSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcmVtb3ZlQnlJZChjb2xsZWN0aW9uOiBhbnlbXSwgaWQ6IG51bWJlcikge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0Y29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUZWxsIHlvdXIgaW4tbWVtIFwiZGF0YWJhc2VcIiB0byByZXNldC5cblx0ICogcmV0dXJucyBPYnNlcnZhYmxlIG9mIHRoZSBkYXRhYmFzZSBiZWNhdXNlIHJlc2V0dGluZyBpdCBjb3VsZCBiZSBhc3luY1xuXHQgKi9cblx0cHJvdGVjdGVkIHJlc2V0RGIocmVxdWVzdD86IE1lbW9yeVJlcXVlc3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHR0aGlzLmRhdGFiYXNlUmVhZHlTdWJqZWN0Lm5leHQoZmFsc2UpO1xuXHRcdGNvbnN0IGRhdGFiYXNlID0gdGhpcy5kYXRhU2VydmljZS5jcmVhdGVEYihyZXF1ZXN0KTtcblx0XHRjb25zdCBkYXRhYmFzZSQgPSBkYXRhYmFzZSBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBkYXRhYmFzZSA6XG5cdFx0XHR0eXBlb2YgKGRhdGFiYXNlIGFzIGFueSkudGhlbiA9PT0gJ2Z1bmN0aW9uJyA/IGZyb20oZGF0YWJhc2UgYXMgUHJvbWlzZTxhbnk+KSA6XG5cdFx0XHRcdG9mKGRhdGFiYXNlKTtcblx0XHRkYXRhYmFzZSQucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoKGRhdGFiYXNlOiB7fSkgPT4ge1xuXHRcdFx0dGhpcy5kYXRhYmFzZSA9IGRhdGFiYXNlO1xuXHRcdFx0dGhpcy5kYXRhYmFzZVJlYWR5U3ViamVjdC5uZXh0KHRydWUpO1xuXHRcdH0pO1xuXHRcdHJldHVybiB0aGlzLmRhdGFiYXNlUmVhZHk7XG5cdH1cblxuXHQvKipcblx0ICogQ29tbWFuZHMgcmVjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIHNlcnZpY2Ugb3IgZXh0cmFjdCBpbmZvcm1hdGlvbiBmcm9tIGl0LlxuXHQgKiBDb21tYW5kcyBpZ25vcmUgdGhlIGxhdGVuY3kgZGVsYXkgYW5kIHJlc3BvbmQgQVNBUC5cblx0ICpcblx0ICogV2hlbiB0aGUgbGFzdCBzZWdtZW50IG9mIHRoZSBgYXBpQmFzZWAgcGF0aCBpcyBcImNvbW1hbmRzXCIsXG5cdCAqIHRoZSBgY29sbGVjdGlvbk5hbWVgIGlzIHRoZSBjb21tYW5kLlxuXHQgKlxuXHQgKiBFeGFtcGxlIFVSTHM6XG5cdCAqICAgY29tbWFuZHMvcmVzZXRkYiAoUE9TVCkgLy8gUmVzZXQgdGhlIFwiZGF0YWJhc2VcIiB0byBpdHMgb3JpZ2luYWwgc3RhdGVcblx0ICogICBjb21tYW5kcy9jb25maWcgKEdFVCkgICAvLyBSZXR1cm4gdGhpcyBzZXJ2aWNlJ3MgY29uZmlnIG9iamVjdFxuXHQgKiAgIGNvbW1hbmRzL2NvbmZpZyAoUE9TVCkgIC8vIFVwZGF0ZSB0aGUgY29uZmlnIChlLmcuIHRoZSBkZWxheSlcblx0ICpcblx0ICogVXNhZ2U6XG5cdCAqICAgaHR0cC5wb3N0KCdjb21tYW5kcy9yZXNldGRiJywgdW5kZWZpbmVkKTtcblx0ICogICBodHRwLmdldCgnY29tbWFuZHMvY29uZmlnJyk7XG5cdCAqICAgaHR0cC5wb3N0KCdjb21tYW5kcy9jb25maWcnLCAne1wiZGVsYXlcIjoxMDAwfScpO1xuXHQgKi9cblx0cHJvdGVjdGVkIGNvbW1hbmRzKHJlcXVlc3Q6IE1lbW9yeVJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGNvbW1hbmQgPSByZXF1ZXN0LmNvbGxlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgbWV0aG9kID0gcmVxdWVzdC5tZXRob2Q7XG5cdFx0bGV0IHJlc3BvbnNlOiBNZW1vcnlSZXNwb25zZSA9IHtcblx0XHRcdHVybDogcmVxdWVzdC51cmxcblx0XHR9O1xuXHRcdHN3aXRjaCAoY29tbWFuZCkge1xuXHRcdFx0Y2FzZSAncmVzZXRkYic6XG5cdFx0XHRcdHJlc3BvbnNlLnN0YXR1cyA9IFNUQVRVU19DT0RFLk5PX0NPTlRFTlQ7XG5cdFx0XHRcdHJldHVybiB0aGlzLnJlc2V0RGIocmVxdWVzdCkucGlwZShcblx0XHRcdFx0XHRjb25jYXRNYXAoKCkgPT4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gcmVzcG9uc2UsIGZhbHNlIC8qIG5vIGxhdGVuY3kgZGVsYXkgKi8pKVxuXHRcdFx0XHQpO1xuXHRcdFx0Y2FzZSAnY29uZmlnJzpcblx0XHRcdFx0aWYgKG1ldGhvZCA9PT0gJ2dldCcpIHtcblx0XHRcdFx0XHRyZXNwb25zZS5zdGF0dXMgPSBTVEFUVVNfQ09ERS5PSztcblx0XHRcdFx0XHRyZXNwb25zZS5ib2R5ID0gdGhpcy5jbG9uZSh0aGlzLmNvbmZpZyk7XG5cdFx0XHRcdFx0Ly8gYW55IG90aGVyIEhUVFAgbWV0aG9kIGlzIGFzc3VtZWQgdG8gYmUgYSBjb25maWcgdXBkYXRlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgYm9keSA9IHJlcXVlc3QucmVxdWVzdC5ib2R5O1xuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGJvZHkpO1xuXHRcdFx0XHRcdHRoaXMucGFzc1RocnVCYWNrZW5kID0gdW5kZWZpbmVkOyAvLyByZS1jcmVhdGUgd2hlbiBuZWVkZWRcblx0XHRcdFx0XHRyZXNwb25zZS5zdGF0dXMgPSBTVEFUVVNfQ09ERS5OT19DT05URU5UO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmVzcG9uc2UgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UocmVxdWVzdC51cmwsIFNUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgYFVua25vd24gY29tbWFuZCBcIiR7Y29tbWFuZH1cImApO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gcmVzcG9uc2UsIGZhbHNlIC8qIG5vIGxhdGVuY3kgZGVsYXkgKi8pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldCh7IGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzLCBpZCwgcXVlcnksIHVybCB9OiBNZW1vcnlSZXF1ZXN0KTogTWVtb3J5UmVzcG9uc2Uge1xuXHRcdGxldCBkYXRhID0gY29sbGVjdGlvbjtcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuXHRcdGlmIChpZCAhPSB1bmRlZmluZWQgJiYgaWQgIT09ICcnKSB7XG5cdFx0XHRkYXRhID0gdGhpcy5maW5kQnlJZChjb2xsZWN0aW9uLCBpZCk7XG5cdFx0XHRpZiAoIWRhdGEpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLk5PVF9GT1VORCwgYCcke2NvbGxlY3Rpb25OYW1lfScgd2l0aCBpZD0nJHtpZH0nIG5vdCBmb3VuZGApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAocXVlcnkpIHtcblx0XHRcdGRhdGEgPSB0aGlzLmFwcGx5UXVlcnkoY29sbGVjdGlvbiwgcXVlcnkpO1xuXHRcdFx0aWYgKCFkYXRhLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgJyR7Y29sbGVjdGlvbk5hbWV9JyB3aXRoIGlkPScke2lkfScgbm90IGZvdW5kYCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRib2R5OiB0aGlzLmJvZGlmeSh0aGlzLmNsb25lKGRhdGEpKSxcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXG5cdFx0XHRzdGF0dXM6IFNUQVRVU19DT0RFLk9LXG5cdFx0fTtcblx0fVxuXG5cdC8vIENyZWF0ZSBlbnRpdHlcblx0Ly8gQ2FuIHVwZGF0ZSBhbiBleGlzdGluZyBlbnRpdHkgdG9vIGlmIHBvc3Q0MDkgaXMgZmFsc2UuXG5cdHByb3RlY3RlZCBwb3N0KHsgY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMsIGlkLCByZXF1ZXN0LCByZXNvdXJjZVVybCwgdXJsIH06IE1lbW9yeVJlcXVlc3QpOiBNZW1vcnlSZXNwb25zZSB7XG5cdFx0Y29uc3QgcmVxdWVzdEJvZHkgPSByZXF1ZXN0LmJvZHk7XG5cdFx0Y29uc3QgaXRlbTogYW55ID0gdGhpcy5jbG9uZShyZXF1ZXN0Qm9keSk7XG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcblx0XHRpZiAoaXRlbS5pZCA9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGl0ZW0uaWQgPSBpZCB8fCB0aGlzLmdlbklkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnN0IG1lc3NhZ2U6IHN0cmluZyA9IGVycm9yLm1lc3NhZ2UgfHwgJyc7XG5cdFx0XHRcdGlmICgvaWQgdHlwZSBpcyBub24tbnVtZXJpYy8udGVzdChtZXNzYWdlKSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5VTlBST0NFU1NBQkxFX0VOVFJZLCBtZXNzYWdlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBgRmFpbGVkIHRvIGdlbmVyYXRlIG5ldyBpZCBmb3IgJyR7Y29sbGVjdGlvbk5hbWV9J2ApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChpZCAmJiBpZCAhPT0gaXRlbS5pZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLkJBRF9SRVFVRVNULCBgUmVxdWVzdCBpZCBkb2VzIG5vdCBtYXRjaCBpdGVtLmlkYCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlkID0gaXRlbS5pZDtcblx0XHR9XG5cdFx0Y29uc3QgZXhpc3RpbmdJeCA9IHRoaXMuaW5kZXhPZihjb2xsZWN0aW9uLCBpZCk7XG5cdFx0Y29uc3QgYm9keSA9IHRoaXMuYm9kaWZ5KGl0ZW0pO1xuXHRcdGlmIChleGlzdGluZ0l4ID09PSAtMSkge1xuXHRcdFx0Y29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xuXHRcdFx0aGVhZGVycy5zZXQoJ0xvY2F0aW9uJywgcmVzb3VyY2VVcmwgKyAnLycgKyBpZCk7XG5cdFx0XHRyZXR1cm4geyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVU19DT0RFLkNSRUFURUQgfTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuY29uZmlnLnBvc3Q0MDkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2UodXJsLCBTVEFUVVNfQ09ERS5DT05GTElDVCwgYCcke2NvbGxlY3Rpb25OYW1lfScgaXRlbSB3aXRoIGlkPScke2lkfSBleGlzdHMgYW5kIG1heSBub3QgYmUgdXBkYXRlZCB3aXRoIFBPU1Q7IHVzZSBQVVQgaW5zdGVhZC5gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29sbGVjdGlvbltleGlzdGluZ0l4XSA9IGl0ZW07XG5cdFx0XHRyZXR1cm4gdGhpcy5jb25maWcucG9zdDIwNCA/XG5cdFx0XHRcdHsgaGVhZGVycywgc3RhdHVzOiBTVEFUVVNfQ09ERS5OT19DT05URU5UIH0gOiAvLyBzdWNjZXNzZnVsOyBubyBjb250ZW50XG5cdFx0XHRcdHsgaGVhZGVycywgYm9keSwgc3RhdHVzOiBTVEFUVVNfQ09ERS5PSyB9OyAvLyBzdWNjZXNzZnVsOyByZXR1cm4gZW50aXR5XG5cdFx0fVxuXHR9XG5cblx0Ly8gVXBkYXRlIGV4aXN0aW5nIGVudGl0eVxuXHQvLyBDYW4gY3JlYXRlIGFuIGVudGl0eSB0b28gaWYgcHV0NDA0IGlzIGZhbHNlLlxuXHRwcm90ZWN0ZWQgcHV0KHsgY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMsIGlkLCByZXF1ZXN0LCB1cmwgfTogTWVtb3J5UmVxdWVzdCk6IE1lbW9yeVJlc3BvbnNlIHtcblx0XHRjb25zdCBpdGVtID0gdGhpcy5jbG9uZShyZXF1ZXN0LmJvZHkpO1xuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG5cdFx0aWYgKGl0ZW0uaWQgPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgTWlzc2luZyAnJHtjb2xsZWN0aW9uTmFtZX0nIGlkYCk7XG5cdFx0fVxuXHRcdGlmIChpZCAmJiBpZCAhPT0gaXRlbS5pZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLkJBRF9SRVFVRVNULCBgUmVxdWVzdCBmb3IgJyR7Y29sbGVjdGlvbk5hbWV9JyBpZCBkb2VzIG5vdCBtYXRjaCBpdGVtLmlkYCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlkID0gaXRlbS5pZDtcblx0XHR9XG5cdFx0Y29uc3QgZXhpc3RpbmdJeCA9IHRoaXMuaW5kZXhPZihjb2xsZWN0aW9uLCBpZCk7XG5cdFx0Y29uc3QgYm9keSA9IHRoaXMuYm9kaWZ5KGl0ZW0pO1xuXHRcdGlmIChleGlzdGluZ0l4ID4gLTEpIHtcblx0XHRcdGNvbGxlY3Rpb25bZXhpc3RpbmdJeF0gPSBpdGVtO1xuXHRcdFx0cmV0dXJuIHRoaXMuY29uZmlnLnB1dDIwNCA/XG5cdFx0XHRcdHsgaGVhZGVycywgc3RhdHVzOiBTVEFUVVNfQ09ERS5OT19DT05URU5UIH0gOiAvLyBzdWNjZXNzZnVsOyBubyBjb250ZW50XG5cdFx0XHRcdHsgaGVhZGVycywgYm9keSwgc3RhdHVzOiBTVEFUVVNfQ09ERS5PSyB9OyAvLyBzdWNjZXNzZnVsOyByZXR1cm4gZW50aXR5XG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvbmZpZy5wdXQ0MDQpIHtcblx0XHRcdC8vIGl0ZW0gdG8gdXBkYXRlIG5vdCBmb3VuZDsgdXNlIFBPU1QgdG8gY3JlYXRlIG5ldyBpdGVtIGZvciB0aGlzIGlkLlxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLk5PVF9GT1VORCwgYCcke2NvbGxlY3Rpb25OYW1lfScgaXRlbSB3aXRoIGlkPScke2lkfSBub3QgZm91bmQgYW5kIG1heSBub3QgYmUgY3JlYXRlZCB3aXRoIFBVVDsgdXNlIFBPU1QgaW5zdGVhZC5gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gY3JlYXRlIG5ldyBpdGVtIGZvciBpZCBub3QgZm91bmRcblx0XHRcdGNvbGxlY3Rpb24ucHVzaChpdGVtKTtcblx0XHRcdHJldHVybiB7IGhlYWRlcnMsIGJvZHksIHN0YXR1czogU1RBVFVTX0NPREUuQ1JFQVRFRCB9O1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBkZWxldGUoeyBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaGVhZGVycywgaWQsIHVybCB9OiBNZW1vcnlSZXF1ZXN0KTogTWVtb3J5UmVzcG9uc2Uge1xuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG5cdFx0aWYgKGlkID09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIFNUQVRVU19DT0RFLk5PVF9GT1VORCwgYE1pc3NpbmcgXCIke2NvbGxlY3Rpb25OYW1lfVwiIGlkYCk7XG5cdFx0fVxuXHRcdGNvbnN0IGV4aXN0cyA9IHRoaXMucmVtb3ZlQnlJZChjb2xsZWN0aW9uLCBpZCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXG5cdFx0XHRzdGF0dXM6IChleGlzdHMgfHwgIXRoaXMuY29uZmlnLmRlbGV0ZTQwNCkgPyBTVEFUVVNfQ09ERS5OT19DT05URU5UIDogU1RBVFVTX0NPREUuTk9UX0ZPVU5EXG5cdFx0fTtcblx0fVxuXG5cdC8vLy8vLy9cblxuXG5cdGhhbmRsZShyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYW5kbGVSZXF1ZXN0KHJlcXVlc3QpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZShyZXF1ZXN0LnVybCwgU1RBVFVTX0NPREUuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBgJHtlcnJvci5tZXNzYWdlIHx8IGVycm9yfWApO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHJlc3BvbnNlKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlUXVlcnlNYXAoc2VhcmNoOiBzdHJpbmcpOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT4ge1xuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcblx0XHRpZiAoc2VhcmNoKSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGZyb21TdHJpbmc6IHNlYXJjaCB9KTtcblx0XHRcdHBhcmFtcy5rZXlzKCkuZm9yRWFjaChwID0+IG1hcC5zZXQocCwgcGFyYW1zLmdldEFsbChwKSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbWFwO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZVJlc3BvbnNlJGZyb21NZW1vcnlSZXNwb25zZSQocmVzcG9uc2UkOiBPYnNlcnZhYmxlPE1lbW9yeVJlc3BvbnNlPik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcblx0XHRyZXR1cm4gcmVzcG9uc2UkLnBpcGUoXG5cdFx0XHRtYXAoKG9wdGlvbnM6IEh0dHBSZXNwb25zZUJhc2UpID0+IG5ldyBIdHRwUmVzcG9uc2U8YW55PihvcHRpb25zKSksXG5cdFx0KTtcblx0fVxuXG5cdHByb3RlY3RlZCBjcmVhdGVQYXNzVGhydUJhY2tlbmQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBuZXcgSHR0cFhockJhY2tlbmQodGhpcy5mYWN0b3J5KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdDYW5ub3QgY3JlYXRlIHBhc3NUaHJ1NDA0IGJhY2tlbmQ7ICcgKyAoZXJyb3IubWVzc2FnZSB8fCAnJyk7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH1cblxufVxuIl19