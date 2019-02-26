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
var /**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `MemoryDataService` service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 * @abstract
 */
BackendService = /** @class */ (function () {
    function BackendService(dataService, config) {
        if (config === void 0) { config = {}; }
        this.dataService = dataService;
        this.config = new MemoryBackendConfig();
        this.requestInfoUtils = this.getRequestInfoUtils();
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
            return this.databaseReadySubject.asObservable().pipe(first(function (r) { return r; }));
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
     *     `dataService.get(requestInfo)`
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
     *     `dataService.get(requestInfo)`
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
     *     `dataService.get(requestInfo)`
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
        /** @type {?} */
        var parser = this.bind('parseRequestUrl');
        /** @type {?} */
        var parsed = (parser && parser(url, this.requestInfoUtils)) || this.parseRequestUrl(url);
        /** @type {?} */
        var collectionName = parsed.collectionName;
        /** @type {?} */
        var collection = this.database[collectionName];
        /** @type {?} */
        var requestInfo = {
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
        var responseOptions;
        if (/commands\/?$/i.test(requestInfo.apiBase)) {
            return this.commands(requestInfo);
        }
        /** @type {?} */
        var methodInterceptor = this.bind(requestInfo.method);
        if (methodInterceptor) {
            // MemoryDataService intercepts this HTTP method.
            // if interceptor produced a response, return it.
            // else MemoryDataService chose not to intercept; continue processing.
            /** @type {?} */
            var interceptorResponse = methodInterceptor(requestInfo);
            if (interceptorResponse) {
                return interceptorResponse;
            }
        }
        if (this.database[collectionName]) {
            // request is for a known collection of the MemoryDataService
            return this.createResponse$(function () { return _this.collectionHandler(requestInfo); });
        }
        if (this.config.passThruUnknownUrl) {
            // unknown collection; pass request thru to a "real" backend.
            return this.getPassThruBackend().handle(request);
        }
        // 404 - can't handle this request
        responseOptions = this.createErrorResponseOptions(url, STATUS_CODE.NOT_FOUND, "Collection '" + collectionName + "' not found");
        return this.createResponse$(function () { return responseOptions; });
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
     * @protected
     * @param {?} data
     * @return {?}
     */
    BackendService.prototype.bodify = /**
     * @protected
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
     * @param {?} requestInfo
     * @return {?}
     */
    BackendService.prototype.collectionHandler = /**
     * @protected
     * @param {?} requestInfo
     * @return {?}
     */
    function (requestInfo) {
        // const request = requestInfo.request;
        /** @type {?} */
        var responseOptions;
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
        var interceptor = this.bind('responseInterceptor');
        return interceptor ? interceptor(responseOptions, requestInfo) : responseOptions;
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
     * @param {?} requestInfo
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
     * @param {?} requestInfo
     * @return {?}
     */
    function (requestInfo) {
        var _this = this;
        /** @type {?} */
        var command = requestInfo.collectionName.toLowerCase();
        /** @type {?} */
        var method = requestInfo.method;
        /** @type {?} */
        var responseOptions = {
            url: requestInfo.url
        };
        switch (command) {
            case 'resetdb':
                responseOptions.status = STATUS_CODE.NO_CONTENT;
                return this.resetDb(requestInfo).pipe(concatMap(function () { return _this.createResponse$(function () { return responseOptions; }, false /* no latency delay */); }));
            case 'config':
                if (method === 'get') {
                    responseOptions.status = STATUS_CODE.OK;
                    responseOptions.body = this.clone(this.config);
                    // any other HTTP method is assumed to be a config update
                }
                else {
                    /** @type {?} */
                    var body = this.getJsonBody(requestInfo.request);
                    Object.assign(this.config, body);
                    this.passThruBackend = undefined; // re-create when needed
                    responseOptions.status = STATUS_CODE.NO_CONTENT;
                }
                break;
            default:
                responseOptions = this.createErrorResponseOptions(requestInfo.url, STATUS_CODE.INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
        }
        return this.createResponse$(function () { return responseOptions; }, false /* no latency delay */);
    };
    /**
     * @protected
     * @param {?} url
     * @param {?} status
     * @param {?} message
     * @return {?}
     */
    BackendService.prototype.createErrorResponseOptions = /**
     * @protected
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
            headers: this.createHeaders({
                'Content-Type': 'application/json'
            }),
            status: status
        };
    };
    /**
     * Create a cold response Observable from a factory for ResponseOptions
     * @param responseOptionsFactory - creates ResponseOptions when observable is subscribed
     * @param withDelay - if true (default), add simulated latency delay from configuration
     */
    /**
     * Create a cold response Observable from a factory for ResponseOptions
     * @protected
     * @param {?} responseOptionsFactory - creates ResponseOptions when observable is subscribed
     * @param {?=} withDelay - if true (default), add simulated latency delay from configuration
     * @return {?}
     */
    BackendService.prototype.createResponse$ = /**
     * Create a cold response Observable from a factory for ResponseOptions
     * @protected
     * @param {?} responseOptionsFactory - creates ResponseOptions when observable is subscribed
     * @param {?=} withDelay - if true (default), add simulated latency delay from configuration
     * @return {?}
     */
    function (responseOptionsFactory, withDelay) {
        if (withDelay === void 0) { withDelay = true; }
        /** @type {?} */
        var responseOptions$ = this.createResponseOptions$(responseOptionsFactory);
        /** @type {?} */
        var response$ = this.createResponse$fromResponseOptions$(responseOptions$);
        return withDelay ? this.addDelay(response$) : response$;
    };
    /**
     * Create a cold Observable of ResponseOptions.
     * @param responseOptionsFactory - creates ResponseOptions when observable is subscribed
     */
    /**
     * Create a cold Observable of ResponseOptions.
     * @protected
     * @param {?} responseOptionsFactory - creates ResponseOptions when observable is subscribed
     * @return {?}
     */
    BackendService.prototype.createResponseOptions$ = /**
     * Create a cold Observable of ResponseOptions.
     * @protected
     * @param {?} responseOptionsFactory - creates ResponseOptions when observable is subscribed
     * @return {?}
     */
    function (responseOptionsFactory) {
        var _this = this;
        return new Observable(function (responseObserver) {
            /** @type {?} */
            var responseOptions;
            try {
                responseOptions = responseOptionsFactory();
            }
            catch (error) {
                error = error.message || error;
                responseOptions = _this.createErrorResponseOptions('', STATUS_CODE.INTERNAL_SERVER_ERROR, "" + error);
            }
            /** @type {?} */
            var status = responseOptions.status;
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
            return function () { }; // unsubscribe function
        });
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
            return this.createErrorResponseOptions(url, STATUS_CODE.NOT_FOUND, "Missing \"" + collectionName + "\" id");
        }
        /** @type {?} */
        var exists = this.removeById(collection, id);
        return {
            headers: headers,
            status: (exists || !this.config.delete404) ? STATUS_CODE.NO_CONTENT : STATUS_CODE.NOT_FOUND
        };
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
        }
        else if (query) {
            data = this.applyQuery(collection, query);
        }
        if (!data) {
            return this.createErrorResponseOptions(url, STATUS_CODE.NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
        }
        return {
            body: this.bodify(this.clone(data)),
            headers: headers,
            status: STATUS_CODE.OK
        };
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
     * Get utility methods from this service instance.
     * Useful within an HTTP method override
     */
    /**
     * Get utility methods from this service instance.
     * Useful within an HTTP method override
     * @protected
     * @return {?}
     */
    BackendService.prototype.getRequestInfoUtils = /**
     * Get utility methods from this service instance.
     * Useful within an HTTP method override
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        return {
            createResponse$: this.createResponse$.bind(this),
            findById: this.findById.bind(this),
            isCollectionIdNumeric: this.isCollectionIdNumeric.bind(this),
            getConfig: function () { return _this.config; },
            getDb: function () { return _this.database; },
            getJsonBody: this.getJsonBody.bind(this),
            getLocation: this.getLocation.bind(this),
            getPassThruBackend: this.getPassThruBackend.bind(this),
            parseRequestUrl: this.parseRequestUrl.bind(this),
        };
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
        var item = this.clone(this.getJsonBody(request));
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            try {
                item.id = id || this.genId(collection, collectionName);
            }
            catch (error) {
                /** @type {?} */
                var message = error.message || '';
                if (/id type is non-numeric/.test(message)) {
                    return this.createErrorResponseOptions(url, STATUS_CODE.UNPROCESSABLE_ENTRY, message);
                }
                else {
                    console.error(error);
                    return this.createErrorResponseOptions(url, STATUS_CODE.INTERNAL_SERVER_ERROR, "Failed to generate new id for '" + collectionName + "'");
                }
            }
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, STATUS_CODE.BAD_REQUEST, "Request id does not match item.id");
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
            return this.createErrorResponseOptions(url, STATUS_CODE.CONFLICT, "'" + collectionName + "' item with id='" + id + " exists and may not be updated with POST; use PUT instead.");
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
        var item = this.clone(this.getJsonBody(request));
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            return this.createErrorResponseOptions(url, STATUS_CODE.NOT_FOUND, "Missing '" + collectionName + "' id");
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, STATUS_CODE.BAD_REQUEST, "Request for '" + collectionName + "' id does not match item.id");
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
            return this.createErrorResponseOptions(url, STATUS_CODE.NOT_FOUND, "'" + collectionName + "' item with id='" + id + " not found and may not be created with PUT; use POST instead.");
        }
        else {
            // create new item for id not found
            collection.push(item);
            return { headers: headers, body: body, status: STATUS_CODE.CREATED };
        }
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
     * @param {?=} requestInfo
     * @return {?}
     */
    BackendService.prototype.resetDb = /**
     * Tell your in-mem "database" to reset.
     * returns Observable of the database because resetting it could be async
     * @protected
     * @param {?=} requestInfo
     * @return {?}
     */
    function (requestInfo) {
        var _this = this;
        this.databaseReadySubject.next(false);
        /** @type {?} */
        var database = this.dataService.createDb(requestInfo);
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
    return BackendService;
}());
/**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `MemoryDataService` service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 * @abstract
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQVksRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVFLE9BQU8sRUFBZSxtQkFBbUIsRUFBdUMsUUFBUSxFQUFtQixtQkFBbUIsRUFBNEUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7OztBQVMzTjs7Ozs7Ozs7O0lBT0Msd0JBQ1csV0FBOEIsRUFDeEMsTUFBZ0M7UUFBaEMsdUJBQUEsRUFBQSxXQUFnQztRQUR0QixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFOL0IsV0FBTSxHQUF3QixJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFHeEQscUJBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7O1lBTWpELFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsaUNBQWlDO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQywrQ0FBK0M7UUFDckYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQkFBYyx5Q0FB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QUFrRDs7Ozs7Ozs7OztJQWdEbEQsbUVBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tLCBPYnNlcnZhYmxlLCBPYnNlcnZlciwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvbmNhdE1hcCwgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWxheVJlc3BvbnNlIH0gZnJvbSAnLi9kZWxheS1yZXNwb25zZSc7XG5pbXBvcnQgeyBnZXRTdGF0dXNUZXh0LCBpc1N1Y2Nlc3MsIFNUQVRVU19DT0RFIH0gZnJvbSAnLi9odHRwLXN0YXR1cy1jb2Rlcyc7XG5pbXBvcnQgeyBIZWFkZXJzQ29yZSwgTWVtb3J5QmFja2VuZENvbmZpZywgTWVtb3J5RGF0YVNlcnZpY2UsIFBhcnNlZFJlcXVlc3RVcmwsIHBhcnNlVXJpLCBQYXNzVGhydUJhY2tlbmQsIHJlbW92ZVRyYWlsaW5nU2xhc2gsIFJlcXVlc3RDb3JlLCBSZXF1ZXN0SW5mbywgUmVxdWVzdEluZm9VdGlsaXRpZXMsIFJlc3BvbnNlT3B0aW9ucywgVXJpSW5mbyB9IGZyb20gJy4vbWVtb3J5JztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbi1tZW1vcnkgd2ViIGFwaSBiYWNrLWVuZHNcbiAqIFNpbXVsYXRlIHRoZSBiZWhhdmlvciBvZiBhIFJFU1R5IHdlYiBhcGlcbiAqIGJhY2tlZCBieSB0aGUgc2ltcGxlIGluLW1lbW9yeSBkYXRhIHN0b3JlIHByb3ZpZGVkIGJ5IHRoZSBpbmplY3RlZCBgTWVtb3J5RGF0YVNlcnZpY2VgIHNlcnZpY2UuXG4gKiBDb25mb3JtcyBtb3N0bHkgdG8gYmVoYXZpb3IgZGVzY3JpYmVkIGhlcmU6XG4gKiBodHRwOi8vd3d3LnJlc3RhcGl0dXRvcmlhbC5jb20vbGVzc29ucy9odHRwbWV0aG9kcy5odG1sXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG5cdHByaXZhdGUgcGFzc1RocnVCYWNrZW5kOiBQYXNzVGhydUJhY2tlbmQ7XG5cdHByb3RlY3RlZCBjb25maWc6IE1lbW9yeUJhY2tlbmRDb25maWcgPSBuZXcgTWVtb3J5QmFja2VuZENvbmZpZygpO1xuXHRwcm90ZWN0ZWQgZGF0YWJhc2U6IE9iamVjdDtcblx0cHJvdGVjdGVkIGRhdGFiYXNlUmVhZHlTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG5cdHByb3RlY3RlZCByZXF1ZXN0SW5mb1V0aWxzID0gdGhpcy5nZXRSZXF1ZXN0SW5mb1V0aWxzKCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGRhdGFTZXJ2aWNlOiBNZW1vcnlEYXRhU2VydmljZSxcblx0XHRjb25maWc6IE1lbW9yeUJhY2tlbmRDb25maWcgPSB7fVxuXHQpIHtcblx0XHRjb25zdCBsb2NhdGlvbiA9IHRoaXMuZ2V0TG9jYXRpb24oJy8nKTtcblx0XHR0aGlzLmNvbmZpZy5ob3N0ID0gbG9jYXRpb24uaG9zdDsgLy8gZGVmYXVsdCB0byBhcHAgd2ViIHNlcnZlciBob3N0XG5cdFx0dGhpcy5jb25maWcucm9vdFBhdGggPSBsb2NhdGlvbi5wYXRoOyAvLyBkZWZhdWx0IHRvIHBhdGggd2hlbiBhcHAgaXMgc2VydmVkIChlLmcuJy8nKVxuXHRcdE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGNvbmZpZyk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0IGRhdGFiYXNlUmVhZHkoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0aWYgKCF0aGlzLmRhdGFiYXNlUmVhZHlTdWJqZWN0KSB7XG5cdFx0XHQvLyBmaXJzdCB0aW1lIHRoZSBzZXJ2aWNlIGlzIGNhbGxlZC5cblx0XHRcdHRoaXMuZGF0YWJhc2VSZWFkeVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblx0XHRcdHRoaXMucmVzZXREYigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5kYXRhYmFzZVJlYWR5U3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuXHRcdFx0Zmlyc3QoKHI6IGJvb2xlYW4pID0+IHIpXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm9jZXNzIFJlcXVlc3QgYW5kIHJldHVybiBhbiBPYnNlcnZhYmxlIG9mIEh0dHAgUmVzcG9uc2Ugb2JqZWN0XG5cdCAqIGluIHRoZSBtYW5uZXIgb2YgYSBSRVNUeSB3ZWIgYXBpLlxuXHQgKlxuXHQgKiBFeHBlY3QgVVJJIHBhdHRlcm4gaW4gdGhlIGZvcm0gOmJhc2UvOmNvbGxlY3Rpb25OYW1lLzppZD9cblx0ICogRXhhbXBsZXM6XG5cdCAqICAgLy8gZm9yIHN0b3JlIHdpdGggYSAnY3VzdG9tZXJzJyBjb2xsZWN0aW9uXG5cdCAqICAgR0VUIGFwaS9jdXN0b21lcnMgICAgICAgICAgLy8gYWxsIGN1c3RvbWVyc1xuXHQgKiAgIEdFVCBhcGkvY3VzdG9tZXJzLzQyICAgICAgIC8vIHRoZSBjaGFyYWN0ZXIgd2l0aCBpZD00MlxuXHQgKiAgIEdFVCBhcGkvY3VzdG9tZXJzP25hbWU9XmogIC8vICdqJyBpcyBhIHJlZ2V4OyByZXR1cm5zIGN1c3RvbWVycyB3aG9zZSBuYW1lIHN0YXJ0cyB3aXRoICdqJyBvciAnSidcblx0ICogICBHRVQgYXBpL2N1c3RvbWVycy5qc29uLzQyICAvLyBpZ25vcmVzIHRoZSBcIi5qc29uXCJcblx0ICpcblx0ICogQWxzbyBhY2NlcHRzIGRpcmVjdCBjb21tYW5kcyB0byB0aGUgc2VydmljZSBpbiB3aGljaCB0aGUgbGFzdCBzZWdtZW50IG9mIHRoZSBhcGlCYXNlIGlzIHRoZSB3b3JkIFwiY29tbWFuZHNcIlxuXHQgKiBFeGFtcGxlczpcblx0ICogICAgIFBPU1QgY29tbWFuZHMvcmVzZXREYixcblx0ICogICAgIEdFVC9QT1NUIGNvbW1hbmRzL2NvbmZpZyAtIGdldCBvciAocmUpc2V0IHRoZSBjb25maWdcblx0ICpcblx0ICogICBIVFRQIG92ZXJyaWRlczpcblx0ICogICAgIElmIHRoZSBpbmplY3RlZCBkYXRhU2VydmljZSBkZWZpbmVzIGFuIEhUVFAgbWV0aG9kIChsb3dlcmNhc2UpXG5cdCAqICAgICBUaGUgcmVxdWVzdCBpcyBmb3J3YXJkZWQgdG8gdGhhdCBtZXRob2QgYXMgaW5cblx0ICogICAgIGBkYXRhU2VydmljZS5nZXQocmVxdWVzdEluZm8pYFxuXHQgKiAgICAgd2hpY2ggbXVzdCByZXR1cm4gZWl0aGVyIGFuIE9ic2VydmFibGUgb2YgdGhlIHJlc3BvbnNlIHR5cGVcblx0ICogICAgIGZvciB0aGlzIGh0dHAgbGlicmFyeSBvciBudWxsfHVuZGVmaW5lZCAod2hpY2ggbWVhbnMgXCJrZWVwIHByb2Nlc3NpbmdcIikuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgaGFuZGxlUmVxdWVzdChyZXF1ZXN0OiBSZXF1ZXN0Q29yZSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Ly8gIGhhbmRsZSB0aGUgcmVxdWVzdCB3aGVuIHRoZXJlIGlzIGFuIGluLW1lbW9yeSBkYXRhYmFzZVxuXHRcdHJldHVybiB0aGlzLmRhdGFiYXNlUmVhZHkucGlwZShjb25jYXRNYXAoKCkgPT4gdGhpcy5oYW5kbGVSZXF1ZXN0XyhyZXF1ZXN0KSkpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhhbmRsZVJlcXVlc3RfKHJlcXVlc3Q6IFJlcXVlc3RDb3JlKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCB1cmwgPSByZXF1ZXN0LnVybFdpdGhQYXJhbXMgPyByZXF1ZXN0LnVybFdpdGhQYXJhbXMgOiByZXF1ZXN0LnVybDtcblx0XHQvLyBUcnkgb3ZlcnJpZGUgcGFyc2VyXG5cdFx0Ly8gSWYgbm8gb3ZlcnJpZGUgcGFyc2VyIG9yIGl0IHJldHVybnMgbm90aGluZywgdXNlIGRlZmF1bHQgcGFyc2VyXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5iaW5kKCdwYXJzZVJlcXVlc3RVcmwnKTtcblx0XHRjb25zdCBwYXJzZWQ6IFBhcnNlZFJlcXVlc3RVcmwgPSAocGFyc2VyICYmIHBhcnNlcih1cmwsIHRoaXMucmVxdWVzdEluZm9VdGlscykpIHx8IHRoaXMucGFyc2VSZXF1ZXN0VXJsKHVybCk7XG5cdFx0Y29uc3QgY29sbGVjdGlvbk5hbWUgPSBwYXJzZWQuY29sbGVjdGlvbk5hbWU7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IHRoaXMuZGF0YWJhc2VbY29sbGVjdGlvbk5hbWVdO1xuXHRcdGNvbnN0IHJlcXVlc3RJbmZvOiBSZXF1ZXN0SW5mbyA9IHtcblx0XHRcdHJlcXVlc3Q6IHJlcXVlc3QsXG5cdFx0XHRhcGlCYXNlOiBwYXJzZWQuYXBpQmFzZSxcblx0XHRcdGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXG5cdFx0XHRjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWUsXG5cdFx0XHRoZWFkZXJzOiB0aGlzLmNyZWF0ZUhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxuXHRcdFx0aWQ6IHRoaXMucGFyc2VJZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgcGFyc2VkLmlkKSxcblx0XHRcdG1ldGhvZDogdGhpcy5nZXRSZXF1ZXN0TWV0aG9kKHJlcXVlc3QpLFxuXHRcdFx0cXVlcnk6IHBhcnNlZC5xdWVyeSxcblx0XHRcdHJlc291cmNlVXJsOiBwYXJzZWQucmVzb3VyY2VVcmwsXG5cdFx0XHR1cmw6IHVybCxcblx0XHRcdHV0aWxzOiB0aGlzLnJlcXVlc3RJbmZvVXRpbHNcblx0XHR9O1xuXHRcdGxldCByZXNwb25zZU9wdGlvbnM6IFJlc3BvbnNlT3B0aW9ucztcblx0XHRpZiAoL2NvbW1hbmRzXFwvPyQvaS50ZXN0KHJlcXVlc3RJbmZvLmFwaUJhc2UpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb21tYW5kcyhyZXF1ZXN0SW5mbyk7XG5cdFx0fVxuXHRcdGNvbnN0IG1ldGhvZEludGVyY2VwdG9yID0gdGhpcy5iaW5kKHJlcXVlc3RJbmZvLm1ldGhvZCk7XG5cdFx0aWYgKG1ldGhvZEludGVyY2VwdG9yKSB7XG5cdFx0XHQvLyBNZW1vcnlEYXRhU2VydmljZSBpbnRlcmNlcHRzIHRoaXMgSFRUUCBtZXRob2QuXG5cdFx0XHQvLyBpZiBpbnRlcmNlcHRvciBwcm9kdWNlZCBhIHJlc3BvbnNlLCByZXR1cm4gaXQuXG5cdFx0XHQvLyBlbHNlIE1lbW9yeURhdGFTZXJ2aWNlIGNob3NlIG5vdCB0byBpbnRlcmNlcHQ7IGNvbnRpbnVlIHByb2Nlc3NpbmcuXG5cdFx0XHRjb25zdCBpbnRlcmNlcHRvclJlc3BvbnNlID0gbWV0aG9kSW50ZXJjZXB0b3IocmVxdWVzdEluZm8pO1xuXHRcdFx0aWYgKGludGVyY2VwdG9yUmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIGludGVyY2VwdG9yUmVzcG9uc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aGlzLmRhdGFiYXNlW2NvbGxlY3Rpb25OYW1lXSkge1xuXHRcdFx0Ly8gcmVxdWVzdCBpcyBmb3IgYSBrbm93biBjb2xsZWN0aW9uIG9mIHRoZSBNZW1vcnlEYXRhU2VydmljZVxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHRoaXMuY29sbGVjdGlvbkhhbmRsZXIocmVxdWVzdEluZm8pKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY29uZmlnLnBhc3NUaHJ1VW5rbm93blVybCkge1xuXHRcdFx0Ly8gdW5rbm93biBjb2xsZWN0aW9uOyBwYXNzIHJlcXVlc3QgdGhydSB0byBhIFwicmVhbFwiIGJhY2tlbmQuXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRQYXNzVGhydUJhY2tlbmQoKS5oYW5kbGUocmVxdWVzdCk7XG5cdFx0fVxuXHRcdC8vIDQwNCAtIGNhbid0IGhhbmRsZSB0aGlzIHJlcXVlc3Rcblx0XHRyZXNwb25zZU9wdGlvbnMgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgQ29sbGVjdGlvbiAnJHtjb2xsZWN0aW9uTmFtZX0nIG5vdCBmb3VuZGApO1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNwb25zZU9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZCBjb25maWd1cmVkIGRlbGF5IHRvIHJlc3BvbnNlIG9ic2VydmFibGUgdW5sZXNzIGRlbGF5ID09PSAwXG5cdCAqL1xuXHRwcm90ZWN0ZWQgYWRkRGVsYXkocmVzcG9uc2U6IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgZGVsYXkgPSB0aGlzLmNvbmZpZy5kZWxheTtcblx0XHRyZXR1cm4gZGVsYXkgPT09IDAgPyByZXNwb25zZSA6IGRlbGF5UmVzcG9uc2UocmVzcG9uc2UsIGRlbGF5IHx8IDUwMCk7XG5cdH1cblxuXHQvKipcblx0ICogQXBwbHkgcXVlcnkvc2VhcmNoIHBhcmFtZXRlcnMgYXMgYSBmaWx0ZXIgb3ZlciB0aGUgY29sbGVjdGlvblxuXHQgKiBUaGlzIGltcGwgb25seSBzdXBwb3J0cyBSZWdFeHAgcXVlcmllcyBvbiBzdHJpbmcgcHJvcGVydGllcyBvZiB0aGUgY29sbGVjdGlvblxuXHQgKiBBTkRzIHRoZSBjb25kaXRpb25zIHRvZ2V0aGVyXG5cdCAqL1xuXHRwcm90ZWN0ZWQgYXBwbHlRdWVyeShjb2xsZWN0aW9uOiBhbnlbXSwgcXVlcnk6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPik6IGFueVtdIHtcblx0XHQvLyBleHRyYWN0IGZpbHRlcmluZyBjb25kaXRpb25zIC0ge3Byb3BlcnR5TmFtZSwgUmVnRXhwcykgLSBmcm9tIHF1ZXJ5L3NlYXJjaCBwYXJhbWV0ZXJzXG5cdFx0Y29uc3QgY29uZGl0aW9uczogeyBuYW1lOiBzdHJpbmcsIHJlZ2V4cDogUmVnRXhwIH1bXSA9IFtdO1xuXHRcdGNvbnN0IGNhc2VTZW5zaXRpdmUgPSB0aGlzLmNvbmZpZy5jYXNlU2Vuc2l0aXZlU2VhcmNoID8gdW5kZWZpbmVkIDogJ2knO1xuXHRcdHF1ZXJ5LmZvckVhY2goKHZhbHVlOiBzdHJpbmdbXSwgbmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHR2YWx1ZS5mb3JFYWNoKHggPT4gY29uZGl0aW9ucy5wdXNoKHtcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0cmVnZXhwOiBuZXcgUmVnRXhwKGRlY29kZVVSSSh4KSwgY2FzZVNlbnNpdGl2ZSlcblx0XHRcdH0pKTtcblx0XHR9KTtcblx0XHRjb25zdCBsZW5ndGggPSBjb25kaXRpb25zLmxlbmd0aDtcblx0XHRpZiAoIWxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGNvbGxlY3Rpb247XG5cdFx0fVxuXHRcdC8vIEFORCB0aGUgUmVnRXhwIGNvbmRpdGlvbnNcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5maWx0ZXIocm93ID0+IHtcblx0XHRcdGxldCBoYXMgPSB0cnVlO1xuXHRcdFx0bGV0IGkgPSBsZW5ndGg7XG5cdFx0XHR3aGlsZSAoaGFzICYmIGkpIHtcblx0XHRcdFx0aSAtPSAxO1xuXHRcdFx0XHRjb25zdCBjb25kID0gY29uZGl0aW9uc1tpXTtcblx0XHRcdFx0aGFzID0gY29uZC5yZWdleHAudGVzdChyb3dbY29uZC5uYW1lXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaGFzO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIG1ldGhvZCBmcm9tIHRoZSBgTWVtb3J5RGF0YVNlcnZpY2VgIChpZiBpdCBleGlzdHMpLCBib3VuZCB0byB0aGF0IHNlcnZpY2Vcblx0ICovXG5cdHByb3RlY3RlZCBiaW5kPFQgZXh0ZW5kcyBGdW5jdGlvbj4obWV0aG9kTmFtZTogc3RyaW5nKSB7XG5cdFx0Y29uc3QgbWV0aG9kID0gdGhpcy5kYXRhU2VydmljZVttZXRob2ROYW1lXSBhcyBUO1xuXHRcdHJldHVybiBtZXRob2QgPyA8VD5tZXRob2QuYmluZCh0aGlzLmRhdGFTZXJ2aWNlKSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdHByb3RlY3RlZCBib2RpZnkoZGF0YTogYW55KSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRhdGFFbmNhcHN1bGF0aW9uID8geyBkYXRhIH0gOiBkYXRhO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNsb25lKGRhdGE6IGFueSkge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBjb2xsZWN0aW9uSGFuZGxlcihyZXF1ZXN0SW5mbzogUmVxdWVzdEluZm8pOiBSZXNwb25zZU9wdGlvbnMge1xuXHRcdC8vIGNvbnN0IHJlcXVlc3QgPSByZXF1ZXN0SW5mby5yZXF1ZXN0O1xuXHRcdGxldCByZXNwb25zZU9wdGlvbnM6IFJlc3BvbnNlT3B0aW9ucztcblx0XHRzd2l0Y2ggKHJlcXVlc3RJbmZvLm1ldGhvZCkge1xuXHRcdFx0Y2FzZSAnZ2V0Jzpcblx0XHRcdFx0cmVzcG9uc2VPcHRpb25zID0gdGhpcy5nZXQocmVxdWVzdEluZm8pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3Bvc3QnOlxuXHRcdFx0XHRyZXNwb25zZU9wdGlvbnMgPSB0aGlzLnBvc3QocmVxdWVzdEluZm8pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3B1dCc6XG5cdFx0XHRcdHJlc3BvbnNlT3B0aW9ucyA9IHRoaXMucHV0KHJlcXVlc3RJbmZvKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkZWxldGUnOlxuXHRcdFx0XHRyZXNwb25zZU9wdGlvbnMgPSB0aGlzLmRlbGV0ZShyZXF1ZXN0SW5mbyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmVzcG9uc2VPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhyZXF1ZXN0SW5mby51cmwsIFNUQVRVU19DT0RFLk1FVEhPRF9OT1RfQUxMT1dFRCwgJ01ldGhvZCBub3QgYWxsb3dlZCcpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Ly8gSWYgYGRhdGFTZXJ2aWNlLnJlc3BvbnNlSW50ZXJjZXB0b3JgIGV4aXN0cywgbGV0IGl0IG1vcnBoIHRoZSByZXNwb25zZSBvcHRpb25zXG5cdFx0Y29uc3QgaW50ZXJjZXB0b3IgPSB0aGlzLmJpbmQoJ3Jlc3BvbnNlSW50ZXJjZXB0b3InKTtcblx0XHRyZXR1cm4gaW50ZXJjZXB0b3IgPyBpbnRlcmNlcHRvcihyZXNwb25zZU9wdGlvbnMsIHJlcXVlc3RJbmZvKSA6IHJlc3BvbnNlT3B0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21tYW5kcyByZWNvbmZpZ3VyZSB0aGUgaW4tbWVtb3J5IHdlYiBhcGkgc2VydmljZSBvciBleHRyYWN0IGluZm9ybWF0aW9uIGZyb20gaXQuXG5cdCAqIENvbW1hbmRzIGlnbm9yZSB0aGUgbGF0ZW5jeSBkZWxheSBhbmQgcmVzcG9uZCBBU0FQLlxuXHQgKlxuXHQgKiBXaGVuIHRoZSBsYXN0IHNlZ21lbnQgb2YgdGhlIGBhcGlCYXNlYCBwYXRoIGlzIFwiY29tbWFuZHNcIixcblx0ICogdGhlIGBjb2xsZWN0aW9uTmFtZWAgaXMgdGhlIGNvbW1hbmQuXG5cdCAqXG5cdCAqIEV4YW1wbGUgVVJMczpcblx0ICogICBjb21tYW5kcy9yZXNldGRiIChQT1NUKSAvLyBSZXNldCB0aGUgXCJkYXRhYmFzZVwiIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZVxuXHQgKiAgIGNvbW1hbmRzL2NvbmZpZyAoR0VUKSAgIC8vIFJldHVybiB0aGlzIHNlcnZpY2UncyBjb25maWcgb2JqZWN0XG5cdCAqICAgY29tbWFuZHMvY29uZmlnIChQT1NUKSAgLy8gVXBkYXRlIHRoZSBjb25maWcgKGUuZy4gdGhlIGRlbGF5KVxuXHQgKlxuXHQgKiBVc2FnZTpcblx0ICogICBodHRwLnBvc3QoJ2NvbW1hbmRzL3Jlc2V0ZGInLCB1bmRlZmluZWQpO1xuXHQgKiAgIGh0dHAuZ2V0KCdjb21tYW5kcy9jb25maWcnKTtcblx0ICogICBodHRwLnBvc3QoJ2NvbW1hbmRzL2NvbmZpZycsICd7XCJkZWxheVwiOjEwMDB9Jyk7XG5cdCAqL1xuXHRwcm90ZWN0ZWQgY29tbWFuZHMocmVxdWVzdEluZm86IFJlcXVlc3RJbmZvKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBjb21tYW5kID0gcmVxdWVzdEluZm8uY29sbGVjdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRjb25zdCBtZXRob2QgPSByZXF1ZXN0SW5mby5tZXRob2Q7XG5cdFx0bGV0IHJlc3BvbnNlT3B0aW9uczogUmVzcG9uc2VPcHRpb25zID0ge1xuXHRcdFx0dXJsOiByZXF1ZXN0SW5mby51cmxcblx0XHR9O1xuXHRcdHN3aXRjaCAoY29tbWFuZCkge1xuXHRcdFx0Y2FzZSAncmVzZXRkYic6XG5cdFx0XHRcdHJlc3BvbnNlT3B0aW9ucy5zdGF0dXMgPSBTVEFUVVNfQ09ERS5OT19DT05URU5UO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5yZXNldERiKHJlcXVlc3RJbmZvKS5waXBlKFxuXHRcdFx0XHRcdGNvbmNhdE1hcCgoKSA9PiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNwb25zZU9wdGlvbnMsIGZhbHNlIC8qIG5vIGxhdGVuY3kgZGVsYXkgKi8pKVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRjYXNlICdjb25maWcnOlxuXHRcdFx0XHRpZiAobWV0aG9kID09PSAnZ2V0Jykge1xuXHRcdFx0XHRcdHJlc3BvbnNlT3B0aW9ucy5zdGF0dXMgPSBTVEFUVVNfQ09ERS5PSztcblx0XHRcdFx0XHRyZXNwb25zZU9wdGlvbnMuYm9keSA9IHRoaXMuY2xvbmUodGhpcy5jb25maWcpO1xuXG5cdFx0XHRcdFx0Ly8gYW55IG90aGVyIEhUVFAgbWV0aG9kIGlzIGFzc3VtZWQgdG8gYmUgYSBjb25maWcgdXBkYXRlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgYm9keSA9IHRoaXMuZ2V0SnNvbkJvZHkocmVxdWVzdEluZm8ucmVxdWVzdCk7XG5cdFx0XHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgYm9keSk7XG5cdFx0XHRcdFx0dGhpcy5wYXNzVGhydUJhY2tlbmQgPSB1bmRlZmluZWQ7IC8vIHJlLWNyZWF0ZSB3aGVuIG5lZWRlZFxuXHRcdFx0XHRcdHJlc3BvbnNlT3B0aW9ucy5zdGF0dXMgPSBTVEFUVVNfQ09ERS5OT19DT05URU5UO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXNwb25zZU9wdGlvbnMgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKFxuXHRcdFx0XHRcdHJlcXVlc3RJbmZvLnVybCxcblx0XHRcdFx0XHRTVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG5cdFx0XHRcdFx0YFVua25vd24gY29tbWFuZCBcIiR7Y29tbWFuZH1cImBcblx0XHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gcmVzcG9uc2VPcHRpb25zLCBmYWxzZSAvKiBubyBsYXRlbmN5IGRlbGF5ICovKTtcblx0fVxuXG5cdHByb3RlY3RlZCBjcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmw6IHN0cmluZywgc3RhdHVzOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZyk6IFJlc3BvbnNlT3B0aW9ucyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0ZXJyb3I6IGAke21lc3NhZ2V9YCxcblx0XHRcdH0sXG5cdFx0XHR1cmw6IHVybCxcblx0XHRcdGhlYWRlcnM6IHRoaXMuY3JlYXRlSGVhZGVycyh7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0pLFxuXHRcdFx0c3RhdHVzOiBzdGF0dXNcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBzdGFuZGFyZCBIVFRQIGhlYWRlcnMgb2JqZWN0IGZyb20gaGFzaCBtYXAgb2YgaGVhZGVyIHN0cmluZ3Ncblx0ICogQHBhcmFtIGhlYWRlcnNcblx0ICovXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVIZWFkZXJzKGhlYWRlcnM6IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfSk6IEhlYWRlcnNDb3JlO1xuXG5cdC8qKlxuXHQgKiBjcmVhdGUgdGhlIGZ1bmN0aW9uIHRoYXQgcGFzc2VzIHVuaGFuZGxlZCByZXF1ZXN0cyB0aHJvdWdoIHRvIHRoZSBcInJlYWxcIiBiYWNrZW5kLlxuXHQgKi9cblx0cHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZVBhc3NUaHJ1QmFja2VuZCgpOiBQYXNzVGhydUJhY2tlbmQ7XG5cblx0LyoqXG5cdCAqIHJldHVybiBhIHNlYXJjaCBtYXAgZnJvbSBhIGxvY2F0aW9uIHF1ZXJ5L3NlYXJjaCBzdHJpbmdcblx0ICovXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVRdWVyeU1hcChzZWFyY2g6IHN0cmluZyk6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPjtcblxuXHQvKipcblx0ICogQ3JlYXRlIGEgY29sZCByZXNwb25zZSBPYnNlcnZhYmxlIGZyb20gYSBmYWN0b3J5IGZvciBSZXNwb25zZU9wdGlvbnNcblx0ICogQHBhcmFtIHJlc3BvbnNlT3B0aW9uc0ZhY3RvcnkgLSBjcmVhdGVzIFJlc3BvbnNlT3B0aW9ucyB3aGVuIG9ic2VydmFibGUgaXMgc3Vic2NyaWJlZFxuXHQgKiBAcGFyYW0gd2l0aERlbGF5IC0gaWYgdHJ1ZSAoZGVmYXVsdCksIGFkZCBzaW11bGF0ZWQgbGF0ZW5jeSBkZWxheSBmcm9tIGNvbmZpZ3VyYXRpb25cblx0ICovXG5cdHByb3RlY3RlZCBjcmVhdGVSZXNwb25zZSQocmVzcG9uc2VPcHRpb25zRmFjdG9yeTogKCkgPT4gUmVzcG9uc2VPcHRpb25zLCB3aXRoRGVsYXkgPSB0cnVlKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCByZXNwb25zZU9wdGlvbnMkID0gdGhpcy5jcmVhdGVSZXNwb25zZU9wdGlvbnMkKHJlc3BvbnNlT3B0aW9uc0ZhY3RvcnkpO1xuXHRcdGNvbnN0IHJlc3BvbnNlJCA9IHRoaXMuY3JlYXRlUmVzcG9uc2UkZnJvbVJlc3BvbnNlT3B0aW9ucyQocmVzcG9uc2VPcHRpb25zJCk7XG5cdFx0cmV0dXJuIHdpdGhEZWxheSA/IHRoaXMuYWRkRGVsYXkocmVzcG9uc2UkKSA6IHJlc3BvbnNlJDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBSZXNwb25zZSBvYnNlcnZhYmxlIGZyb20gUmVzcG9uc2VPcHRpb25zIG9ic2VydmFibGUuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlUmVzcG9uc2UkZnJvbVJlc3BvbnNlT3B0aW9ucyQocmVzcG9uc2VPcHRpb25zJDogT2JzZXJ2YWJsZTxSZXNwb25zZU9wdGlvbnM+KTogT2JzZXJ2YWJsZTxhbnk+O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBjb2xkIE9ic2VydmFibGUgb2YgUmVzcG9uc2VPcHRpb25zLlxuXHQgKiBAcGFyYW0gcmVzcG9uc2VPcHRpb25zRmFjdG9yeSAtIGNyZWF0ZXMgUmVzcG9uc2VPcHRpb25zIHdoZW4gb2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkXG5cdCAqL1xuXHRwcm90ZWN0ZWQgY3JlYXRlUmVzcG9uc2VPcHRpb25zJChyZXNwb25zZU9wdGlvbnNGYWN0b3J5OiAoKSA9PiBSZXNwb25zZU9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlT3B0aW9ucz4ge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZTxSZXNwb25zZU9wdGlvbnM+KChyZXNwb25zZU9ic2VydmVyOiBPYnNlcnZlcjxSZXNwb25zZU9wdGlvbnM+KSA9PiB7XG5cdFx0XHRsZXQgcmVzcG9uc2VPcHRpb25zOiBSZXNwb25zZU9wdGlvbnM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXNwb25zZU9wdGlvbnMgPSByZXNwb25zZU9wdGlvbnNGYWN0b3J5KCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRlcnJvciA9IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3I7XG5cdFx0XHRcdHJlc3BvbnNlT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMoJycsIFNUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgYCR7ZXJyb3J9YCk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlT3B0aW9ucy5zdGF0dXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXNwb25zZU9wdGlvbnMuc3RhdHVzVGV4dCA9IGdldFN0YXR1c1RleHQoc3RhdHVzKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSBmYWlsdXJlICovIH1cblx0XHRcdGlmIChpc1N1Y2Nlc3Moc3RhdHVzKSkge1xuXHRcdFx0XHRyZXNwb25zZU9ic2VydmVyLm5leHQocmVzcG9uc2VPcHRpb25zKTtcblx0XHRcdFx0cmVzcG9uc2VPYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzcG9uc2VPYnNlcnZlci5lcnJvcihyZXNwb25zZU9wdGlvbnMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICgpID0+IHsgfTsgLy8gdW5zdWJzY3JpYmUgZnVuY3Rpb25cblx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBkZWxldGUoeyBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaGVhZGVycywgaWQsIHVybCB9OiBSZXF1ZXN0SW5mbyk6IFJlc3BvbnNlT3B0aW9ucyB7XG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcblx0XHRpZiAoaWQgPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVU19DT0RFLk5PVF9GT1VORCwgYE1pc3NpbmcgXCIke2NvbGxlY3Rpb25OYW1lfVwiIGlkYCk7XG5cdFx0fVxuXHRcdGNvbnN0IGV4aXN0cyA9IHRoaXMucmVtb3ZlQnlJZChjb2xsZWN0aW9uLCBpZCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXG5cdFx0XHRzdGF0dXM6IChleGlzdHMgfHwgIXRoaXMuY29uZmlnLmRlbGV0ZTQwNCkgPyBTVEFUVVNfQ09ERS5OT19DT05URU5UIDogU1RBVFVTX0NPREUuTk9UX0ZPVU5EXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaW5kIGZpcnN0IGluc3RhbmNlIG9mIGl0ZW0gaW4gY29sbGVjdGlvbiBieSBgaXRlbS5pZGBcblx0ICogQHBhcmFtIGNvbGxlY3Rpb25cblx0ICogQHBhcmFtIGlkXG5cdCAqL1xuXHRwcm90ZWN0ZWQgZmluZEJ5SWQ8VCBleHRlbmRzIHsgaWQ6IGFueSB9Pihjb2xsZWN0aW9uOiBUW10sIGlkOiBhbnkpOiBUIHtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5maW5kKChpdGVtOiBUKSA9PiBpdGVtLmlkID09PSBpZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2VuZXJhdGUgdGhlIG5leHQgYXZhaWxhYmxlIGlkIGZvciBpdGVtIGluIHRoaXMgY29sbGVjdGlvblxuXHQgKiBVc2UgbWV0aG9kIGZyb20gYGRhdGFTZXJ2aWNlYCBpZiBpdCBleGlzdHMgYW5kIHJldHVybnMgYSB2YWx1ZSxcblx0ICogZWxzZSBkZWxlZ2F0ZXMgdG8gYGdlbklkRGVmYXVsdGAuXG5cdCAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gY29sbGVjdGlvbiBvZiBpdGVtcyB3aXRoIGBpZGAga2V5IHByb3BlcnR5XG5cdCAqL1xuXHRwcm90ZWN0ZWQgZ2VuSWQ8VCBleHRlbmRzIHsgaWQ6IGFueSB9Pihjb2xsZWN0aW9uOiBUW10sIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBhbnkge1xuXHRcdGNvbnN0IGdlbklkID0gdGhpcy5iaW5kKCdnZW5JZCcpO1xuXHRcdGlmIChnZW5JZCkge1xuXHRcdFx0Y29uc3QgaWQgPSBnZW5JZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuXHRcdFx0aWYgKGlkICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4gaWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmdlbklkRGVmYXVsdChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XG5cdH1cblxuXHQvKipcblx0ICogRGVmYXVsdCBnZW5lcmF0b3Igb2YgdGhlIG5leHQgYXZhaWxhYmxlIGlkIGZvciBpdGVtIGluIHRoaXMgY29sbGVjdGlvblxuXHQgKiBUaGlzIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gd29ya3Mgb25seSBmb3IgbnVtZXJpYyBpZHMuXG5cdCAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gY29sbGVjdGlvbiBvZiBpdGVtcyB3aXRoIGBpZGAga2V5IHByb3BlcnR5XG5cdCAqIEBwYXJhbSBjb2xsZWN0aW9uTmFtZSAtIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cblx0ICovXG5cdHByb3RlY3RlZCBnZW5JZERlZmF1bHQ8VCBleHRlbmRzIHsgaWQ6IGFueSB9Pihjb2xsZWN0aW9uOiBUW10sIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBhbnkge1xuXHRcdGlmICghdGhpcy5pc0NvbGxlY3Rpb25JZE51bWVyaWMoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbGxlY3Rpb24gJyR7Y29sbGVjdGlvbk5hbWV9JyBpZCB0eXBlIGlzIG5vbi1udW1lcmljIG9yIHVua25vd24uIENhbiBvbmx5IGdlbmVyYXRlIG51bWVyaWMgaWRzLmApO1xuXHRcdH1cblx0XHRsZXQgbWF4SWQgPSAwO1xuXHRcdGNvbGxlY3Rpb24ucmVkdWNlKChwcmV2OiBhbnksIGl0ZW06IGFueSkgPT4ge1xuXHRcdFx0bWF4SWQgPSBNYXRoLm1heChtYXhJZCwgdHlwZW9mIGl0ZW0uaWQgPT09ICdudW1iZXInID8gaXRlbS5pZCA6IG1heElkKTtcblx0XHR9LCB1bmRlZmluZWQpO1xuXHRcdHJldHVybiBtYXhJZCArIDE7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0KHsgY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMsIGlkLCBxdWVyeSwgdXJsIH06IFJlcXVlc3RJbmZvKTogUmVzcG9uc2VPcHRpb25zIHtcblx0XHRsZXQgZGF0YSA9IGNvbGxlY3Rpb247XG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcblx0XHRpZiAoaWQgIT0gdW5kZWZpbmVkICYmIGlkICE9PSAnJykge1xuXHRcdFx0ZGF0YSA9IHRoaXMuZmluZEJ5SWQoY29sbGVjdGlvbiwgaWQpO1xuXHRcdH0gZWxzZSBpZiAocXVlcnkpIHtcblx0XHRcdGRhdGEgPSB0aGlzLmFwcGx5UXVlcnkoY29sbGVjdGlvbiwgcXVlcnkpO1xuXHRcdH1cblx0XHRpZiAoIWRhdGEpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgJyR7Y29sbGVjdGlvbk5hbWV9JyB3aXRoIGlkPScke2lkfScgbm90IGZvdW5kYCk7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRib2R5OiB0aGlzLmJvZGlmeSh0aGlzLmNsb25lKGRhdGEpKSxcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXG5cdFx0XHRzdGF0dXM6IFNUQVRVU19DT0RFLk9LXG5cdFx0fTtcblx0fVxuXG5cdC8qKiBHZXQgSlNPTiBib2R5IGZyb20gdGhlIHJlcXVlc3Qgb2JqZWN0ICovXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRKc29uQm9keShyZXF1ZXN0OiBhbnkpOiBhbnk7XG5cblx0LyoqXG5cdCAqIEdldCBsb2NhdGlvbiBpbmZvIGZyb20gYSB1cmwsIGV2ZW4gb24gc2VydmVyIHdoZXJlIGBkb2N1bWVudGAgaXMgbm90IGRlZmluZWRcblx0ICovXG5cdHByb3RlY3RlZCBnZXRMb2NhdGlvbih1cmw6IHN0cmluZyk6IFVyaUluZm8ge1xuXHRcdGlmICghdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuXHRcdFx0Ly8gZ2V0IHRoZSBkb2N1bWVudCBpZiBydW5uaW5nIGluIGJyb3dzZXJcblx0XHRcdGNvbnN0IGRvY3VtZW50XzogRG9jdW1lbnQgPSAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcblx0XHRcdC8vIGFkZCBob3N0IGluZm8gdG8gdXJsIGJlZm9yZSBwYXJzaW5nLiAgVXNlIGEgZmFrZSBob3N0IHdoZW4gbm90IGluIGJyb3dzZXIuXG5cdFx0XHRjb25zdCBiYXNlID0gZG9jdW1lbnRfID8gZG9jdW1lbnRfLmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGRvY3VtZW50Xy5sb2NhdGlvbi5ob3N0IDogJ2h0dHA6Ly9mYWtlJztcblx0XHRcdHVybCA9IHVybC5zdGFydHNXaXRoKCcvJykgPyBiYXNlICsgdXJsIDogYmFzZSArICcvJyArIHVybDtcblx0XHR9XG5cdFx0cmV0dXJuIHBhcnNlVXJpKHVybCk7XG5cdH1cblxuXHQvKipcblx0ICogZ2V0IG9yIGNyZWF0ZSB0aGUgZnVuY3Rpb24gdGhhdCBwYXNzZXMgdW5oYW5kbGVkIHJlcXVlc3RzXG5cdCAqIHRocm91Z2ggdG8gdGhlIFwicmVhbFwiIGJhY2tlbmQuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgZ2V0UGFzc1RocnVCYWNrZW5kKCk6IFBhc3NUaHJ1QmFja2VuZCB7XG5cdFx0cmV0dXJuIHRoaXMucGFzc1RocnVCYWNrZW5kID8gdGhpcy5wYXNzVGhydUJhY2tlbmQgOiB0aGlzLnBhc3NUaHJ1QmFja2VuZCA9IHRoaXMuY3JlYXRlUGFzc1RocnVCYWNrZW5kKCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHV0aWxpdHkgbWV0aG9kcyBmcm9tIHRoaXMgc2VydmljZSBpbnN0YW5jZS5cblx0ICogVXNlZnVsIHdpdGhpbiBhbiBIVFRQIG1ldGhvZCBvdmVycmlkZVxuXHQgKi9cblx0cHJvdGVjdGVkIGdldFJlcXVlc3RJbmZvVXRpbHMoKTogUmVxdWVzdEluZm9VdGlsaXRpZXMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjcmVhdGVSZXNwb25zZSQ6IHRoaXMuY3JlYXRlUmVzcG9uc2UkLmJpbmQodGhpcyksXG5cdFx0XHRmaW5kQnlJZDogdGhpcy5maW5kQnlJZC5iaW5kKHRoaXMpLFxuXHRcdFx0aXNDb2xsZWN0aW9uSWROdW1lcmljOiB0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYy5iaW5kKHRoaXMpLFxuXHRcdFx0Z2V0Q29uZmlnOiAoKSA9PiB0aGlzLmNvbmZpZyxcblx0XHRcdGdldERiOiAoKSA9PiB0aGlzLmRhdGFiYXNlLFxuXHRcdFx0Z2V0SnNvbkJvZHk6IHRoaXMuZ2V0SnNvbkJvZHkuYmluZCh0aGlzKSxcblx0XHRcdGdldExvY2F0aW9uOiB0aGlzLmdldExvY2F0aW9uLmJpbmQodGhpcyksXG5cdFx0XHRnZXRQYXNzVGhydUJhY2tlbmQ6IHRoaXMuZ2V0UGFzc1RocnVCYWNrZW5kLmJpbmQodGhpcyksXG5cdFx0XHRwYXJzZVJlcXVlc3RVcmw6IHRoaXMucGFyc2VSZXF1ZXN0VXJsLmJpbmQodGhpcyksXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiByZXR1cm4gY2Fub25pY2FsIEhUVFAgbWV0aG9kIG5hbWUgKGxvd2VyY2FzZSkgZnJvbSB0aGUgcmVxdWVzdCBvYmplY3Rcblx0ICogZS5nLiAocmVxLm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKTtcblx0ICogQHBhcmFtIHJlcXVlc3QgLSByZXF1ZXN0IG9iamVjdCBmcm9tIHRoZSBodHRwIGNhbGxcblx0ICpcblx0ICovXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRSZXF1ZXN0TWV0aG9kKHJlcXVlc3Q6IGFueSk6IHN0cmluZztcblxuXHRwcm90ZWN0ZWQgaW5kZXhPZihjb2xsZWN0aW9uOiBhbnlbXSwgaWQ6IG51bWJlcikge1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmZpbmRJbmRleCgoaXRlbTogYW55KSA9PiBpdGVtLmlkID09PSBpZCk7XG5cdH1cblxuXHQvKiogUGFyc2UgdGhlIGlkIGFzIGEgbnVtYmVyLiBSZXR1cm4gb3JpZ2luYWwgdmFsdWUgaWYgbm90IGEgbnVtYmVyLiAqL1xuXHRwcm90ZWN0ZWQgcGFyc2VJZChjb2xsZWN0aW9uOiBhbnlbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZywgaWQ6IHN0cmluZyk6IGFueSB7XG5cdFx0aWYgKCF0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYyhjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkpIHtcblx0XHRcdC8vIENhbid0IGNvbmZpcm0gdGhhdCBgaWRgIGlzIGEgbnVtZXJpYyB0eXBlOyBkb24ndCBwYXJzZSBhcyBhIG51bWJlclxuXHRcdFx0Ly8gb3IgZWxzZSBgJzQyJ2AgLT4gYDQyYCBhbmQgX2dldCBieSBpZF8gZmFpbHMuXG5cdFx0XHRyZXR1cm4gaWQ7XG5cdFx0fVxuXHRcdGNvbnN0IGlkTnVtID0gcGFyc2VGbG9hdChpZCk7XG5cdFx0cmV0dXJuIGlzTmFOKGlkTnVtKSA/IGlkIDogaWROdW07XG5cdH1cblxuXHQvKipcblx0ICogcmV0dXJuIHRydWUgaWYgY2FuIGRldGVybWluZSB0aGF0IHRoZSBjb2xsZWN0aW9uJ3MgYGl0ZW0uaWRgIGlzIGEgbnVtYmVyXG5cdCAqIFRoaXMgaW1wbGVtZW50YXRpb24gY2FuJ3QgdGVsbCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eSBzbyBpdCBhc3N1bWVzIE5PXG5cdCAqICovXG5cdHByb3RlY3RlZCBpc0NvbGxlY3Rpb25JZE51bWVyaWM8VCBleHRlbmRzIHsgaWQ6IGFueSB9Pihjb2xsZWN0aW9uOiBUW10sIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHQvLyBjb2xsZWN0aW9uTmFtZSBub3QgdXNlZCBub3cgYnV0IG92ZXJyaWRlIG1pZ2h0IG1haW50YWluIGNvbGxlY3Rpb24gdHlwZSBpbmZvcm1hdGlvblxuXHRcdC8vIHNvIHRoYXQgaXQgY291bGQga25vdyB0aGUgdHlwZSBvZiB0aGUgYGlkYCBldmVuIHdoZW4gdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkuXG5cdFx0Ly8gcmV0dXJuICEhKGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvblswXSkgJiYgdHlwZW9mIGNvbGxlY3Rpb25bMF0uaWQgPT09ICdudW1iZXInO1xuXHRcdHJldHVybiAhIShjb2xsZWN0aW9uICYmIGNvbGxlY3Rpb25bMF0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBhcnNlcyB0aGUgcmVxdWVzdCBVUkwgaW50byBhIGBQYXJzZWRSZXF1ZXN0VXJsYCBvYmplY3QuXG5cdCAqIFBhcnNpbmcgZGVwZW5kcyB1cG9uIGNlcnRhaW4gdmFsdWVzIG9mIGBjb25maWdgOiBgYXBpQmFzZWAsIGBob3N0YCwgYW5kIGB1cmxSb290YC5cblx0ICpcblx0ICogQ29uZmlndXJpbmcgdGhlIGBhcGlCYXNlYCB5aWVsZHMgdGhlIG1vc3QgaW50ZXJlc3RpbmcgY2hhbmdlcyB0byBgcGFyc2VSZXF1ZXN0VXJsYCBiZWhhdmlvcjpcblx0ICogICBXaGVuIGFwaUJhc2U9dW5kZWZpbmVkIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3QvYXBpL2NvbGxlY3Rpb24vNDInXG5cdCAqICAgICB7YmFzZTogJ2FwaS8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogJzQyJywgLi4ufVxuXHQgKiAgIFdoZW4gYXBpQmFzZT0nc29tZS9hcGkvcm9vdC8nIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3Qvc29tZS9hcGkvcm9vdC9jb2xsZWN0aW9uJ1xuXHQgKiAgICAge2Jhc2U6ICdzb21lL2FwaS9yb290LycsIGNvbGxlY3Rpb25OYW1lOiAnY29sbGVjdGlvbicsIGlkOiB1bmRlZmluZWQsIC4uLn1cblx0ICogICBXaGVuIGFwaUJhc2U9Jy8nIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3QvY29sbGVjdGlvbidcblx0ICogICAgIHtiYXNlOiAnLycsIGNvbGxlY3Rpb25OYW1lOiAnY29sbGVjdGlvbicsIGlkOiB1bmRlZmluZWQsIC4uLn1cblx0ICpcblx0ICogVGhlIGFjdHVhbCBhcGkgYmFzZSBzZWdtZW50IHZhbHVlcyBhcmUgaWdub3JlZC4gT25seSB0aGUgbnVtYmVyIG9mIHNlZ21lbnRzIG1hdHRlcnMuXG5cdCAqIFRoZSBmb2xsb3dpbmcgYXBpIGJhc2Ugc3RyaW5ncyBhcmUgY29uc2lkZXJlZCBpZGVudGljYWw6ICdhL2InIH4gJ3NvbWUvYXBpLycgfiBgdHdvL3NlZ21lbnRzJ1xuXHQgKlxuXHQgKiBUbyByZXBsYWNlIHRoaXMgZGVmYXVsdCBtZXRob2QsIGFzc2lnbiB5b3VyIGFsdGVybmF0aXZlIHRvIHlvdXIgTWVtb3J5RGF0YVNlcnZpY2VbJ3BhcnNlUmVxdWVzdFVybCddXG5cdCAqL1xuXHRwcm90ZWN0ZWQgcGFyc2VSZXF1ZXN0VXJsKHVybDogc3RyaW5nKTogUGFyc2VkUmVxdWVzdFVybCB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGxvY2F0aW9uID0gdGhpcy5nZXRMb2NhdGlvbih1cmwpO1xuXHRcdFx0bGV0IGRyb3AgPSB0aGlzLmNvbmZpZy5yb290UGF0aC5sZW5ndGg7XG5cdFx0XHRsZXQgdXJsUm9vdCA9ICcnO1xuXHRcdFx0aWYgKGxvY2F0aW9uLmhvc3QgIT09IHRoaXMuY29uZmlnLmhvc3QpIHtcblx0XHRcdFx0Ly8gdXJsIGZvciBhIHNlcnZlciBvbiBhIGRpZmZlcmVudCBob3N0IVxuXHRcdFx0XHQvLyBhc3N1bWUgaXQncyBjb2xsZWN0aW9uIGlzIGFjdHVhbGx5IGhlcmUgdG9vLlxuXHRcdFx0XHRkcm9wID0gMTsgLy8gdGhlIGxlYWRpbmcgc2xhc2hcblx0XHRcdFx0dXJsUm9vdCA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnLyc7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYXRoID0gbG9jYXRpb24ucGF0aC5zdWJzdHJpbmcoZHJvcCk7XG5cdFx0XHRjb25zdCBwYXRoU2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJyk7XG5cdFx0XHRsZXQgc2VnbWVudEl4ID0gMDtcblx0XHRcdC8vIGFwaUJhc2U6IHRoZSBmcm9udCBwYXJ0IG9mIHRoZSBwYXRoIGRldm90ZWQgdG8gZ2V0dGluZyB0byB0aGUgYXBpIHJvdXRlXG5cdFx0XHQvLyBBc3N1bWVzIGZpcnN0IHBhdGggc2VnbWVudCBpZiBubyBjb25maWcuYXBpQmFzZVxuXHRcdFx0Ly8gZWxzZSBpZ25vcmVzIGFzIG1hbnkgcGF0aCBzZWdtZW50cyBhcyBhcmUgaW4gY29uZmlnLmFwaUJhc2Vcblx0XHRcdC8vIERvZXMgTk9UIGNhcmUgd2hhdCB0aGUgYXBpIGJhc2UgY2hhcnMgYWN0dWFsbHkgYXJlLlxuXHRcdFx0bGV0IGFwaUJhc2U6IHN0cmluZztcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG5cdFx0XHRpZiAodGhpcy5jb25maWcuYXBpQmFzZSA9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0YXBpQmFzZSA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhcGlCYXNlID0gcmVtb3ZlVHJhaWxpbmdTbGFzaCh0aGlzLmNvbmZpZy5hcGlCYXNlLnRyaW0oKSk7XG5cdFx0XHRcdGlmIChhcGlCYXNlKSB7XG5cdFx0XHRcdFx0c2VnbWVudEl4ID0gYXBpQmFzZS5zcGxpdCgnLycpLmxlbmd0aDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZWdtZW50SXggPSAwOyAvLyBubyBhcGkgYmFzZSBhdCBhbGw7IHVud2lzZSBidXQgYWxsb3dlZC5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0YXBpQmFzZSArPSAnLyc7XG5cdFx0XHRsZXQgY29sbGVjdGlvbk5hbWUgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xuXHRcdFx0Ly8gaWdub3JlIGFueXRoaW5nIGFmdGVyIGEgJy4nIChlLmcuLHRoZSBcImpzb25cIiBpbiBcImN1c3RvbWVycy5qc29uXCIpXG5cdFx0XHRjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25OYW1lICYmIGNvbGxlY3Rpb25OYW1lLnNwbGl0KCcuJylbMF07XG5cdFx0XHRjb25zdCBpZCA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG5cdFx0XHRjb25zdCBxdWVyeSA9IHRoaXMuY3JlYXRlUXVlcnlNYXAobG9jYXRpb24ucXVlcnkpO1xuXHRcdFx0Y29uc3QgcmVzb3VyY2VVcmwgPSB1cmxSb290ICsgYXBpQmFzZSArIGNvbGxlY3Rpb25OYW1lICsgJy8nO1xuXHRcdFx0cmV0dXJuIHsgYXBpQmFzZSwgY29sbGVjdGlvbk5hbWUsIGlkLCBxdWVyeSwgcmVzb3VyY2VVcmwgfTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc3QgbWVzc2FnZSA9IGB1bmFibGUgdG8gcGFyc2UgdXJsICcke3VybH0nOyBvcmlnaW5hbCBlcnJvcjogJHtlcnJvci5tZXNzYWdlfWA7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ3JlYXRlIGVudGl0eVxuXHQvLyBDYW4gdXBkYXRlIGFuIGV4aXN0aW5nIGVudGl0eSB0b28gaWYgcG9zdDQwOSBpcyBmYWxzZS5cblx0cHJvdGVjdGVkIHBvc3QoeyBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaGVhZGVycywgaWQsIHJlcXVlc3QsIHJlc291cmNlVXJsLCB1cmwgfTogUmVxdWVzdEluZm8pOiBSZXNwb25zZU9wdGlvbnMge1xuXHRcdGNvbnN0IGl0ZW0gPSB0aGlzLmNsb25lKHRoaXMuZ2V0SnNvbkJvZHkocmVxdWVzdCkpO1xuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG5cdFx0aWYgKGl0ZW0uaWQgPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpdGVtLmlkID0gaWQgfHwgdGhpcy5nZW5JZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zdCBtZXNzYWdlOiBzdHJpbmcgPSBlcnJvci5tZXNzYWdlIHx8ICcnO1xuXHRcdFx0XHRpZiAoL2lkIHR5cGUgaXMgbm9uLW51bWVyaWMvLnRlc3QobWVzc2FnZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVU19DT0RFLlVOUFJPQ0VTU0FCTEVfRU5UUlksIG1lc3NhZ2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTX0NPREUuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBgRmFpbGVkIHRvIGdlbmVyYXRlIG5ldyBpZCBmb3IgJyR7Y29sbGVjdGlvbk5hbWV9J2ApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChpZCAmJiBpZCAhPT0gaXRlbS5pZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVNfQ09ERS5CQURfUkVRVUVTVCwgYFJlcXVlc3QgaWQgZG9lcyBub3QgbWF0Y2ggaXRlbS5pZGApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZCA9IGl0ZW0uaWQ7XG5cdFx0fVxuXHRcdGNvbnN0IGV4aXN0aW5nSXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuXHRcdGNvbnN0IGJvZHkgPSB0aGlzLmJvZGlmeShpdGVtKTtcblx0XHRpZiAoZXhpc3RpbmdJeCA9PT0gLTEpIHtcblx0XHRcdGNvbGxlY3Rpb24ucHVzaChpdGVtKTtcblx0XHRcdGhlYWRlcnMuc2V0KCdMb2NhdGlvbicsIHJlc291cmNlVXJsICsgJy8nICsgaWQpO1xuXHRcdFx0cmV0dXJuIHsgaGVhZGVycywgYm9keSwgc3RhdHVzOiBTVEFUVVNfQ09ERS5DUkVBVEVEIH07XG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvbmZpZy5wb3N0NDA5KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVU19DT0RFLkNPTkZMSUNULCBgJyR7Y29sbGVjdGlvbk5hbWV9JyBpdGVtIHdpdGggaWQ9JyR7aWR9IGV4aXN0cyBhbmQgbWF5IG5vdCBiZSB1cGRhdGVkIHdpdGggUE9TVDsgdXNlIFBVVCBpbnN0ZWFkLmApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2xsZWN0aW9uW2V4aXN0aW5nSXhdID0gaXRlbTtcblx0XHRcdHJldHVybiB0aGlzLmNvbmZpZy5wb3N0MjA0ID9cblx0XHRcdFx0eyBoZWFkZXJzLCBzdGF0dXM6IFNUQVRVU19DT0RFLk5PX0NPTlRFTlQgfSA6IC8vIHN1Y2Nlc3NmdWw7IG5vIGNvbnRlbnRcblx0XHRcdFx0eyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVU19DT0RFLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcblx0XHR9XG5cdH1cblxuXHQvLyBVcGRhdGUgZXhpc3RpbmcgZW50aXR5XG5cdC8vIENhbiBjcmVhdGUgYW4gZW50aXR5IHRvbyBpZiBwdXQ0MDQgaXMgZmFsc2UuXG5cdHByb3RlY3RlZCBwdXQoeyBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaGVhZGVycywgaWQsIHJlcXVlc3QsIHVybCB9OiBSZXF1ZXN0SW5mbyk6IFJlc3BvbnNlT3B0aW9ucyB7XG5cdFx0Y29uc3QgaXRlbSA9IHRoaXMuY2xvbmUodGhpcy5nZXRKc29uQm9keShyZXF1ZXN0KSk7XG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcblx0XHRpZiAoaXRlbS5pZCA9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgTWlzc2luZyAnJHtjb2xsZWN0aW9uTmFtZX0nIGlkYCk7XG5cdFx0fVxuXHRcdGlmIChpZCAmJiBpZCAhPT0gaXRlbS5pZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVNfQ09ERS5CQURfUkVRVUVTVCwgYFJlcXVlc3QgZm9yICcke2NvbGxlY3Rpb25OYW1lfScgaWQgZG9lcyBub3QgbWF0Y2ggaXRlbS5pZGApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZCA9IGl0ZW0uaWQ7XG5cdFx0fVxuXHRcdGNvbnN0IGV4aXN0aW5nSXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuXHRcdGNvbnN0IGJvZHkgPSB0aGlzLmJvZGlmeShpdGVtKTtcblx0XHRpZiAoZXhpc3RpbmdJeCA+IC0xKSB7XG5cdFx0XHRjb2xsZWN0aW9uW2V4aXN0aW5nSXhdID0gaXRlbTtcblx0XHRcdHJldHVybiB0aGlzLmNvbmZpZy5wdXQyMDQgP1xuXHRcdFx0XHR7IGhlYWRlcnMsIHN0YXR1czogU1RBVFVTX0NPREUuTk9fQ09OVEVOVCB9IDogLy8gc3VjY2Vzc2Z1bDsgbm8gY29udGVudFxuXHRcdFx0XHR7IGhlYWRlcnMsIGJvZHksIHN0YXR1czogU1RBVFVTX0NPREUuT0sgfTsgLy8gc3VjY2Vzc2Z1bDsgcmV0dXJuIGVudGl0eVxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb25maWcucHV0NDA0KSB7XG5cdFx0XHQvLyBpdGVtIHRvIHVwZGF0ZSBub3QgZm91bmQ7IHVzZSBQT1NUIHRvIGNyZWF0ZSBuZXcgaXRlbSBmb3IgdGhpcyBpZC5cblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTX0NPREUuTk9UX0ZPVU5ELCBgJyR7Y29sbGVjdGlvbk5hbWV9JyBpdGVtIHdpdGggaWQ9JyR7aWR9IG5vdCBmb3VuZCBhbmQgbWF5IG5vdCBiZSBjcmVhdGVkIHdpdGggUFVUOyB1c2UgUE9TVCBpbnN0ZWFkLmApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBjcmVhdGUgbmV3IGl0ZW0gZm9yIGlkIG5vdCBmb3VuZFxuXHRcdFx0Y29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xuXHRcdFx0cmV0dXJuIHsgaGVhZGVycywgYm9keSwgc3RhdHVzOiBTVEFUVVNfQ09ERS5DUkVBVEVEIH07XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIHJlbW92ZUJ5SWQoY29sbGVjdGlvbjogYW55W10sIGlkOiBudW1iZXIpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuaW5kZXhPZihjb2xsZWN0aW9uLCBpZCk7XG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdGNvbGxlY3Rpb24uc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogVGVsbCB5b3VyIGluLW1lbSBcImRhdGFiYXNlXCIgdG8gcmVzZXQuXG5cdCAqIHJldHVybnMgT2JzZXJ2YWJsZSBvZiB0aGUgZGF0YWJhc2UgYmVjYXVzZSByZXNldHRpbmcgaXQgY291bGQgYmUgYXN5bmNcblx0ICovXG5cdHByb3RlY3RlZCByZXNldERiKHJlcXVlc3RJbmZvPzogUmVxdWVzdEluZm8pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHR0aGlzLmRhdGFiYXNlUmVhZHlTdWJqZWN0Lm5leHQoZmFsc2UpO1xuXHRcdGNvbnN0IGRhdGFiYXNlID0gdGhpcy5kYXRhU2VydmljZS5jcmVhdGVEYihyZXF1ZXN0SW5mbyk7XG5cdFx0Y29uc3QgZGF0YWJhc2UkID0gZGF0YWJhc2UgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZGF0YWJhc2UgOlxuXHRcdFx0dHlwZW9mIChkYXRhYmFzZSBhcyBhbnkpLnRoZW4gPT09ICdmdW5jdGlvbicgPyBmcm9tKGRhdGFiYXNlIGFzIFByb21pc2U8YW55PikgOlxuXHRcdFx0XHRvZihkYXRhYmFzZSk7XG5cdFx0ZGF0YWJhc2UkLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKChkYXRhYmFzZToge30pID0+IHtcblx0XHRcdHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcblx0XHRcdHRoaXMuZGF0YWJhc2VSZWFkeVN1YmplY3QubmV4dCh0cnVlKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcy5kYXRhYmFzZVJlYWR5O1xuXHR9XG5cbn1cbiJdfQ==