/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { concatMap, first } from 'rxjs/operators';
import { delayResponse } from './delay-response';
import { getStatusText, isSuccess, STATUS } from './http-status-codes';
import { MemoryBackendConfig, parseUri, removeTrailingSlash } from './interfaces';
/**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService` service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 * @abstract
 */
var /**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService` service.
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
        var loc = this.getLocation('/');
        this.config.host = loc.host; // default to app web server host
        this.config.rootPath = loc.path; // default to path when app is served (e.g.'/')
        Object.assign(this.config, config);
    }
    Object.defineProperty(BackendService.prototype, "dbReady", {
        ////  protected /////
        get: 
        ////  protected /////
        /**
         * @protected
         * @return {?}
         */
        function () {
            if (!this.dbReadySubject) {
                // first time the service is called.
                this.dbReadySubject = new BehaviorSubject(false);
                this.resetDb();
            }
            return this.dbReadySubject.asObservable().pipe(first(function (r) { return r; }));
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
     * @param {?} req
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
     * @param {?} req
     * @return {?}
     */
    function (req) {
        var _this = this;
        //  handle the request when there is an in-memory database
        return this.dbReady.pipe(concatMap(function () { return _this.handleRequest_(req); }));
    };
    /**
     * @protected
     * @param {?} req
     * @return {?}
     */
    BackendService.prototype.handleRequest_ = /**
     * @protected
     * @param {?} req
     * @return {?}
     */
    function (req) {
        var _this = this;
        /** @type {?} */
        var url = req.urlWithParams ? req.urlWithParams : req.url;
        // Try override parser
        // If no override parser or it returns nothing, use default parser
        /** @type {?} */
        var parser = this.bind('parseRequestUrl');
        /** @type {?} */
        var parsed = (parser && parser(url, this.requestInfoUtils)) ||
            this.parseRequestUrl(url);
        /** @type {?} */
        var collectionName = parsed.collectionName;
        /** @type {?} */
        var collection = this.db[collectionName];
        /** @type {?} */
        var reqInfo = {
            req: req,
            apiBase: parsed.apiBase,
            collection: collection,
            collectionName: collectionName,
            headers: this.createHeaders({ 'Content-Type': 'application/json' }),
            id: this.parseId(collection, collectionName, parsed.id),
            method: this.getRequestMethod(req),
            query: parsed.query,
            resourceUrl: parsed.resourceUrl,
            url: url,
            utils: this.requestInfoUtils
        };
        /** @type {?} */
        var resOptions;
        if (/commands\/?$/i.test(reqInfo.apiBase)) {
            return this.commands(reqInfo);
        }
        /** @type {?} */
        var methodInterceptor = this.bind(reqInfo.method);
        if (methodInterceptor) {
            // InMemoryDbService intercepts this HTTP method.
            // if interceptor produced a response, return it.
            // else InMemoryDbService chose not to intercept; continue processing.
            /** @type {?} */
            var interceptorResponse = methodInterceptor(reqInfo);
            if (interceptorResponse) {
                return interceptorResponse;
            }
            ;
        }
        if (this.db[collectionName]) {
            // request is for a known collection of the InMemoryDbService
            return this.createResponse$(function () { return _this.collectionHandler(reqInfo); });
        }
        if (this.config.passThruUnknownUrl) {
            // unknown collection; pass request thru to a "real" backend.
            return this.getPassThruBackend().handle(req);
        }
        // 404 - can't handle this request
        resOptions = this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "Collection '" + collectionName + "' not found");
        return this.createResponse$(function () { return resOptions; });
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
        var d = this.config.delay;
        return d === 0 ? response : delayResponse(response, d || 500);
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
            value.forEach(function (v) { return conditions.push({ name: name, rx: new RegExp(decodeURI(v), caseSensitive) }); });
        });
        /** @type {?} */
        var len = conditions.length;
        if (!len) {
            return collection;
        }
        // AND the RegExp conditions
        return collection.filter(function (row) {
            /** @type {?} */
            var ok = true;
            /** @type {?} */
            var i = len;
            while (ok && i) {
                i -= 1;
                /** @type {?} */
                var cond = conditions[i];
                ok = cond.rx.test(row[cond.name]);
            }
            return ok;
        });
    };
    /**
     * Get a method from the `InMemoryDbService` (if it exists), bound to that service
     */
    /**
     * Get a method from the `InMemoryDbService` (if it exists), bound to that service
     * @protected
     * @template T
     * @param {?} methodName
     * @return {?}
     */
    BackendService.prototype.bind = /**
     * Get a method from the `InMemoryDbService` (if it exists), bound to that service
     * @protected
     * @template T
     * @param {?} methodName
     * @return {?}
     */
    function (methodName) {
        /** @type {?} */
        var fn = (/** @type {?} */ (this.dataService[methodName]));
        return fn ? (/** @type {?} */ (fn.bind(this.dataService))) : undefined;
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
     * @param {?} reqInfo
     * @return {?}
     */
    BackendService.prototype.collectionHandler = /**
     * @protected
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        // const req = reqInfo.req;
        /** @type {?} */
        var resOptions;
        switch (reqInfo.method) {
            case 'get':
                resOptions = this.get(reqInfo);
                break;
            case 'post':
                resOptions = this.post(reqInfo);
                break;
            case 'put':
                resOptions = this.put(reqInfo);
                break;
            case 'delete':
                resOptions = this.delete(reqInfo);
                break;
            default:
                resOptions = this.createErrorResponseOptions(reqInfo.url, STATUS.METHOD_NOT_ALLOWED, 'Method not allowed');
                break;
        }
        // If `dataService.responseInterceptor` exists, let it morph the response options
        /** @type {?} */
        var interceptor = this.bind('responseInterceptor');
        return interceptor ? interceptor(resOptions, reqInfo) : resOptions;
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
     * @param {?} reqInfo
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
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        /** @type {?} */
        var command = reqInfo.collectionName.toLowerCase();
        /** @type {?} */
        var method = reqInfo.method;
        /** @type {?} */
        var resOptions = {
            url: reqInfo.url
        };
        switch (command) {
            case 'resetdb':
                resOptions.status = STATUS.NO_CONTENT;
                return this.resetDb(reqInfo).pipe(concatMap(function () { return _this.createResponse$(function () { return resOptions; }, false /* no latency delay */); }));
            case 'config':
                if (method === 'get') {
                    resOptions.status = STATUS.OK;
                    resOptions.body = this.clone(this.config);
                    // any other HTTP method is assumed to be a config update
                }
                else {
                    /** @type {?} */
                    var body = this.getJsonBody(reqInfo.req);
                    Object.assign(this.config, body);
                    this.passThruBackend = undefined; // re-create when needed
                    resOptions.status = STATUS.NO_CONTENT;
                }
                break;
            default:
                resOptions = this.createErrorResponseOptions(reqInfo.url, STATUS.INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
        }
        return this.createResponse$(function () { return resOptions; }, false /* no latency delay */);
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
            body: { error: "" + message },
            url: url,
            headers: this.createHeaders({ 'Content-Type': 'application/json' }),
            status: status
        };
    };
    /**
     * Create a cold response Observable from a factory for ResponseOptions
     * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
     * @param withDelay - if true (default), add simulated latency delay from configuration
     */
    /**
     * Create a cold response Observable from a factory for ResponseOptions
     * @protected
     * @param {?} resOptionsFactory - creates ResponseOptions when observable is subscribed
     * @param {?=} withDelay - if true (default), add simulated latency delay from configuration
     * @return {?}
     */
    BackendService.prototype.createResponse$ = /**
     * Create a cold response Observable from a factory for ResponseOptions
     * @protected
     * @param {?} resOptionsFactory - creates ResponseOptions when observable is subscribed
     * @param {?=} withDelay - if true (default), add simulated latency delay from configuration
     * @return {?}
     */
    function (resOptionsFactory, withDelay) {
        if (withDelay === void 0) { withDelay = true; }
        /** @type {?} */
        var resOptions$ = this.createResponseOptions$(resOptionsFactory);
        /** @type {?} */
        var resp$ = this.createResponse$fromResponseOptions$(resOptions$);
        return withDelay ? this.addDelay(resp$) : resp$;
    };
    /**
     * Create a cold Observable of ResponseOptions.
     * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
     */
    /**
     * Create a cold Observable of ResponseOptions.
     * @protected
     * @param {?} resOptionsFactory - creates ResponseOptions when observable is subscribed
     * @return {?}
     */
    BackendService.prototype.createResponseOptions$ = /**
     * Create a cold Observable of ResponseOptions.
     * @protected
     * @param {?} resOptionsFactory - creates ResponseOptions when observable is subscribed
     * @return {?}
     */
    function (resOptionsFactory) {
        var _this = this;
        return new Observable(function (responseObserver) {
            /** @type {?} */
            var resOptions;
            try {
                resOptions = resOptionsFactory();
            }
            catch (error) {
                /** @type {?} */
                var err = error.message || error;
                resOptions = _this.createErrorResponseOptions('', STATUS.INTERNAL_SERVER_ERROR, "" + err);
            }
            /** @type {?} */
            var status = resOptions.status;
            try {
                resOptions.statusText = getStatusText(status);
            }
            catch (e) { /* ignore failure */ }
            if (isSuccess(status)) {
                responseObserver.next(resOptions);
                responseObserver.complete();
            }
            else {
                responseObserver.error(resOptions);
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
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "Missing \"" + collectionName + "\" id");
        }
        /** @type {?} */
        var exists = this.removeById(collection, id);
        return {
            headers: headers,
            status: (exists || !this.config.delete404) ? STATUS.NO_CONTENT : STATUS.NOT_FOUND
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
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
        }
        return {
            body: this.bodify(this.clone(data)),
            headers: headers,
            status: STATUS.OK
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
            // get the document iff running in browser
            /** @type {?} */
            var doc = (typeof document === 'undefined') ? undefined : document;
            // add host info to url before parsing.  Use a fake host when not in browser.
            /** @type {?} */
            var base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
            url = url.startsWith('/') ? base + url : base + '/' + url;
        }
        return parseUri(url);
    };
    ;
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
        return this.passThruBackend ?
            this.passThruBackend :
            this.passThruBackend = this.createPassThruBackend();
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
            getDb: function () { return _this.db; },
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
     * To replace this default method, assign your alternative to your InMemDbService['parseRequestUrl']
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
     * To replace this default method, assign your alternative to your InMemDbService['parseRequestUrl']
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
     * To replace this default method, assign your alternative to your InMemDbService['parseRequestUrl']
     * @protected
     * @param {?} url
     * @return {?}
     */
    function (url) {
        try {
            /** @type {?} */
            var loc = this.getLocation(url);
            /** @type {?} */
            var drop = this.config.rootPath.length;
            /** @type {?} */
            var urlRoot = '';
            if (loc.host !== this.config.host) {
                // url for a server on a different host!
                // assume it's collection is actually here too.
                drop = 1; // the leading slash
                urlRoot = loc.protocol + '//' + loc.host + '/';
            }
            /** @type {?} */
            var path = loc.path.substring(drop);
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
            var query = this.createQueryMap(loc.query);
            /** @type {?} */
            var resourceUrl = urlRoot + apiBase + collectionName + '/';
            return { apiBase: apiBase, collectionName: collectionName, id: id, query: query, resourceUrl: resourceUrl };
        }
        catch (err) {
            /** @type {?} */
            var msg = "unable to parse url '" + url + "'; original error: " + err.message;
            throw new Error(msg);
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
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, req = _a.req, resourceUrl = _a.resourceUrl, url = _a.url;
        /** @type {?} */
        var item = this.clone(this.getJsonBody(req));
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            try {
                item.id = id || this.genId(collection, collectionName);
            }
            catch (err) {
                /** @type {?} */
                var emsg = err.message || '';
                if (/id type is non-numeric/.test(emsg)) {
                    return this.createErrorResponseOptions(url, STATUS.UNPROCESSABLE_ENTRY, emsg);
                }
                else {
                    console.error(err);
                    return this.createErrorResponseOptions(url, STATUS.INTERNAL_SERVER_ERROR, "Failed to generate new id for '" + collectionName + "'");
                }
            }
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, STATUS.BAD_REQUEST, "Request id does not match item.id");
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
            return { headers: headers, body: body, status: STATUS.CREATED };
        }
        else if (this.config.post409) {
            return this.createErrorResponseOptions(url, STATUS.CONFLICT, "'" + collectionName + "' item with id='" + id + " exists and may not be updated with POST; use PUT instead.");
        }
        else {
            collection[existingIx] = item;
            return this.config.post204 ?
                { headers: headers, status: STATUS.NO_CONTENT } : // successful; no content
                { headers: headers, body: body, status: STATUS.OK }; // successful; return entity
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
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, req = _a.req, url = _a.url;
        /** @type {?} */
        var item = this.clone(this.getJsonBody(req));
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "Missing '" + collectionName + "' id");
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, STATUS.BAD_REQUEST, "Request for '" + collectionName + "' id does not match item.id");
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
                { headers: headers, status: STATUS.NO_CONTENT } : // successful; no content
                { headers: headers, body: body, status: STATUS.OK }; // successful; return entity
        }
        else if (this.config.put404) {
            // item to update not found; use POST to create new item for this id.
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "'" + collectionName + "' item with id='" + id + " not found and may not be created with PUT; use POST instead.");
        }
        else {
            // create new item for id not found
            collection.push(item);
            return { headers: headers, body: body, status: STATUS.CREATED };
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
        var ix = this.indexOf(collection, id);
        if (ix > -1) {
            collection.splice(ix, 1);
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
     * @param {?=} reqInfo
     * @return {?}
     */
    BackendService.prototype.resetDb = /**
     * Tell your in-mem "database" to reset.
     * returns Observable of the database because resetting it could be async
     * @protected
     * @param {?=} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        this.dbReadySubject.next(false);
        /** @type {?} */
        var db = this.dataService.createDb(reqInfo);
        /** @type {?} */
        var db$ = db instanceof Observable ? db :
            typeof ((/** @type {?} */ (db))).then === 'function' ? from((/** @type {?} */ (db))) :
                of(db);
        db$.pipe(first()).subscribe(function (d) {
            _this.db = d;
            _this.dbReadySubject.next(true);
        });
        return this.dbReady;
    };
    return BackendService;
}());
/**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService` service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 * @abstract
 */
export { BackendService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BackendService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    BackendService.prototype.db;
    /**
     * @type {?}
     * @protected
     */
    BackendService.prototype.dbReadySubject;
    /**
     * @type {?}
     * @private
     */
    BackendService.prototype.passThruBackend;
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
    /* Skipping unhandled member: ;*/
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
     * @param {?} resOptions$
     * @return {?}
     */
    BackendService.prototype.createResponse$fromResponseOptions$ = function (resOptions$) { };
    /**
     * Get JSON body from the request object
     * @abstract
     * @protected
     * @param {?} req
     * @return {?}
     */
    BackendService.prototype.getJsonBody = function (req) { };
    /**
     * return canonical HTTP method name (lowercase) from the request object
     * e.g. (req.method || 'get').toLowerCase();
     * @abstract
     * @protected
     * @param {?} req - request object from the http call
     *
     * @return {?}
     */
    BackendService.prototype.getRequestMethod = function (req) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnlfL2JhY2tlbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFZLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RSxPQUFPLEVBQWUsbUJBQW1CLEVBQXVDLFFBQVEsRUFBbUIsbUJBQW1CLEVBQTRFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7QUFTL047Ozs7Ozs7OztJQU9DLHdCQUNXLFdBQThCLEVBQ3hDLE1BQWdDO1FBQWhDLHVCQUFBLEVBQUEsV0FBZ0M7UUFEdEIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBUC9CLFdBQU0sR0FBd0IsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBSXhELHFCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDOztZQU1qRCxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFLLGlDQUFpQztRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsK0NBQStDO1FBQ2hGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBR0Qsc0JBQWMsbUNB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Ozs7Ozs7SUE0R2xILDBEQUE4Qzs7Ozs7Ozs7OztJQWtEOUMsK0RBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tLCBPYnNlcnZhYmxlLCBPYnNlcnZlciwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvbmNhdE1hcCwgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWxheVJlc3BvbnNlIH0gZnJvbSAnLi9kZWxheS1yZXNwb25zZSc7XG5pbXBvcnQgeyBnZXRTdGF0dXNUZXh0LCBpc1N1Y2Nlc3MsIFNUQVRVUyB9IGZyb20gJy4vaHR0cC1zdGF0dXMtY29kZXMnO1xuaW1wb3J0IHsgSGVhZGVyc0NvcmUsIE1lbW9yeUJhY2tlbmRDb25maWcsIE1lbW9yeURhdGFTZXJ2aWNlLCBQYXJzZWRSZXF1ZXN0VXJsLCBwYXJzZVVyaSwgUGFzc1RocnVCYWNrZW5kLCByZW1vdmVUcmFpbGluZ1NsYXNoLCBSZXF1ZXN0Q29yZSwgUmVxdWVzdEluZm8sIFJlcXVlc3RJbmZvVXRpbGl0aWVzLCBSZXNwb25zZU9wdGlvbnMsIFVyaUluZm8gfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGluLW1lbW9yeSB3ZWIgYXBpIGJhY2stZW5kc1xuICogU2ltdWxhdGUgdGhlIGJlaGF2aW9yIG9mIGEgUkVTVHkgd2ViIGFwaVxuICogYmFja2VkIGJ5IHRoZSBzaW1wbGUgaW4tbWVtb3J5IGRhdGEgc3RvcmUgcHJvdmlkZWQgYnkgdGhlIGluamVjdGVkIGBJbk1lbW9yeURiU2VydmljZWAgc2VydmljZS5cbiAqIENvbmZvcm1zIG1vc3RseSB0byBiZWhhdmlvciBkZXNjcmliZWQgaGVyZTpcbiAqIGh0dHA6Ly93d3cucmVzdGFwaXR1dG9yaWFsLmNvbS9sZXNzb25zL2h0dHBtZXRob2RzLmh0bWxcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcblx0cHJvdGVjdGVkIGNvbmZpZzogTWVtb3J5QmFja2VuZENvbmZpZyA9IG5ldyBNZW1vcnlCYWNrZW5kQ29uZmlnKCk7XG5cdHByb3RlY3RlZCBkYjogT2JqZWN0O1xuXHRwcm90ZWN0ZWQgZGJSZWFkeVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcblx0cHJpdmF0ZSBwYXNzVGhydUJhY2tlbmQ6IFBhc3NUaHJ1QmFja2VuZDtcblx0cHJvdGVjdGVkIHJlcXVlc3RJbmZvVXRpbHMgPSB0aGlzLmdldFJlcXVlc3RJbmZvVXRpbHMoKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgZGF0YVNlcnZpY2U6IE1lbW9yeURhdGFTZXJ2aWNlLFxuXHRcdGNvbmZpZzogTWVtb3J5QmFja2VuZENvbmZpZyA9IHt9XG5cdCkge1xuXHRcdGNvbnN0IGxvYyA9IHRoaXMuZ2V0TG9jYXRpb24oJy8nKTtcblx0XHR0aGlzLmNvbmZpZy5ob3N0ID0gbG9jLmhvc3Q7ICAgICAvLyBkZWZhdWx0IHRvIGFwcCB3ZWIgc2VydmVyIGhvc3Rcblx0XHR0aGlzLmNvbmZpZy5yb290UGF0aCA9IGxvYy5wYXRoOyAvLyBkZWZhdWx0IHRvIHBhdGggd2hlbiBhcHAgaXMgc2VydmVkIChlLmcuJy8nKVxuXHRcdE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGNvbmZpZyk7XG5cdH1cblxuXHQvLy8vICBwcm90ZWN0ZWQgLy8vLy9cblx0cHJvdGVjdGVkIGdldCBkYlJlYWR5KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdGlmICghdGhpcy5kYlJlYWR5U3ViamVjdCkge1xuXHRcdFx0Ly8gZmlyc3QgdGltZSB0aGUgc2VydmljZSBpcyBjYWxsZWQuXG5cdFx0XHR0aGlzLmRiUmVhZHlTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cdFx0XHR0aGlzLnJlc2V0RGIoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZGJSZWFkeVN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShmaXJzdCgocjogYm9vbGVhbikgPT4gcikpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb2Nlc3MgUmVxdWVzdCBhbmQgcmV0dXJuIGFuIE9ic2VydmFibGUgb2YgSHR0cCBSZXNwb25zZSBvYmplY3Rcblx0ICogaW4gdGhlIG1hbm5lciBvZiBhIFJFU1R5IHdlYiBhcGkuXG5cdCAqXG5cdCAqIEV4cGVjdCBVUkkgcGF0dGVybiBpbiB0aGUgZm9ybSA6YmFzZS86Y29sbGVjdGlvbk5hbWUvOmlkP1xuXHQgKiBFeGFtcGxlczpcblx0ICogICAvLyBmb3Igc3RvcmUgd2l0aCBhICdjdXN0b21lcnMnIGNvbGxlY3Rpb25cblx0ICogICBHRVQgYXBpL2N1c3RvbWVycyAgICAgICAgICAvLyBhbGwgY3VzdG9tZXJzXG5cdCAqICAgR0VUIGFwaS9jdXN0b21lcnMvNDIgICAgICAgLy8gdGhlIGNoYXJhY3RlciB3aXRoIGlkPTQyXG5cdCAqICAgR0VUIGFwaS9jdXN0b21lcnM/bmFtZT1eaiAgLy8gJ2onIGlzIGEgcmVnZXg7IHJldHVybnMgY3VzdG9tZXJzIHdob3NlIG5hbWUgc3RhcnRzIHdpdGggJ2onIG9yICdKJ1xuXHQgKiAgIEdFVCBhcGkvY3VzdG9tZXJzLmpzb24vNDIgIC8vIGlnbm9yZXMgdGhlIFwiLmpzb25cIlxuXHQgKlxuXHQgKiBBbHNvIGFjY2VwdHMgZGlyZWN0IGNvbW1hbmRzIHRvIHRoZSBzZXJ2aWNlIGluIHdoaWNoIHRoZSBsYXN0IHNlZ21lbnQgb2YgdGhlIGFwaUJhc2UgaXMgdGhlIHdvcmQgXCJjb21tYW5kc1wiXG5cdCAqIEV4YW1wbGVzOlxuXHQgKiAgICAgUE9TVCBjb21tYW5kcy9yZXNldERiLFxuXHQgKiAgICAgR0VUL1BPU1QgY29tbWFuZHMvY29uZmlnIC0gZ2V0IG9yIChyZSlzZXQgdGhlIGNvbmZpZ1xuXHQgKlxuXHQgKiAgIEhUVFAgb3ZlcnJpZGVzOlxuXHQgKiAgICAgSWYgdGhlIGluamVjdGVkIGRhdGFTZXJ2aWNlIGRlZmluZXMgYW4gSFRUUCBtZXRob2QgKGxvd2VyY2FzZSlcblx0ICogICAgIFRoZSByZXF1ZXN0IGlzIGZvcndhcmRlZCB0byB0aGF0IG1ldGhvZCBhcyBpblxuXHQgKiAgICAgYGRhdGFTZXJ2aWNlLmdldChyZXF1ZXN0SW5mbylgXG5cdCAqICAgICB3aGljaCBtdXN0IHJldHVybiBlaXRoZXIgYW4gT2JzZXJ2YWJsZSBvZiB0aGUgcmVzcG9uc2UgdHlwZVxuXHQgKiAgICAgZm9yIHRoaXMgaHR0cCBsaWJyYXJ5IG9yIG51bGx8dW5kZWZpbmVkICh3aGljaCBtZWFucyBcImtlZXAgcHJvY2Vzc2luZ1wiKS5cblx0ICovXG5cdHByb3RlY3RlZCBoYW5kbGVSZXF1ZXN0KHJlcTogUmVxdWVzdENvcmUpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdC8vICBoYW5kbGUgdGhlIHJlcXVlc3Qgd2hlbiB0aGVyZSBpcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2Vcblx0XHRyZXR1cm4gdGhpcy5kYlJlYWR5LnBpcGUoY29uY2F0TWFwKCgpID0+IHRoaXMuaGFuZGxlUmVxdWVzdF8ocmVxKSkpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhhbmRsZVJlcXVlc3RfKHJlcTogUmVxdWVzdENvcmUpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG5cdFx0Y29uc3QgdXJsID0gcmVxLnVybFdpdGhQYXJhbXMgPyByZXEudXJsV2l0aFBhcmFtcyA6IHJlcS51cmw7XG5cblx0XHQvLyBUcnkgb3ZlcnJpZGUgcGFyc2VyXG5cdFx0Ly8gSWYgbm8gb3ZlcnJpZGUgcGFyc2VyIG9yIGl0IHJldHVybnMgbm90aGluZywgdXNlIGRlZmF1bHQgcGFyc2VyXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5iaW5kKCdwYXJzZVJlcXVlc3RVcmwnKTtcblx0XHRjb25zdCBwYXJzZWQ6IFBhcnNlZFJlcXVlc3RVcmwgPVxuXHRcdFx0KHBhcnNlciAmJiBwYXJzZXIodXJsLCB0aGlzLnJlcXVlc3RJbmZvVXRpbHMpKSB8fFxuXHRcdFx0dGhpcy5wYXJzZVJlcXVlc3RVcmwodXJsKTtcblxuXHRcdGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gcGFyc2VkLmNvbGxlY3Rpb25OYW1lO1xuXHRcdGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLmRiW2NvbGxlY3Rpb25OYW1lXTtcblxuXHRcdGNvbnN0IHJlcUluZm86IFJlcXVlc3RJbmZvID0ge1xuXHRcdFx0cmVxOiByZXEsXG5cdFx0XHRhcGlCYXNlOiBwYXJzZWQuYXBpQmFzZSxcblx0XHRcdGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXG5cdFx0XHRjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWUsXG5cdFx0XHRoZWFkZXJzOiB0aGlzLmNyZWF0ZUhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxuXHRcdFx0aWQ6IHRoaXMucGFyc2VJZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgcGFyc2VkLmlkKSxcblx0XHRcdG1ldGhvZDogdGhpcy5nZXRSZXF1ZXN0TWV0aG9kKHJlcSksXG5cdFx0XHRxdWVyeTogcGFyc2VkLnF1ZXJ5LFxuXHRcdFx0cmVzb3VyY2VVcmw6IHBhcnNlZC5yZXNvdXJjZVVybCxcblx0XHRcdHVybDogdXJsLFxuXHRcdFx0dXRpbHM6IHRoaXMucmVxdWVzdEluZm9VdGlsc1xuXHRcdH07XG5cblx0XHRsZXQgcmVzT3B0aW9uczogUmVzcG9uc2VPcHRpb25zO1xuXG5cdFx0aWYgKC9jb21tYW5kc1xcLz8kL2kudGVzdChyZXFJbmZvLmFwaUJhc2UpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb21tYW5kcyhyZXFJbmZvKTtcblx0XHR9XG5cblx0XHRjb25zdCBtZXRob2RJbnRlcmNlcHRvciA9IHRoaXMuYmluZChyZXFJbmZvLm1ldGhvZCk7XG5cdFx0aWYgKG1ldGhvZEludGVyY2VwdG9yKSB7XG5cdFx0XHQvLyBJbk1lbW9yeURiU2VydmljZSBpbnRlcmNlcHRzIHRoaXMgSFRUUCBtZXRob2QuXG5cdFx0XHQvLyBpZiBpbnRlcmNlcHRvciBwcm9kdWNlZCBhIHJlc3BvbnNlLCByZXR1cm4gaXQuXG5cdFx0XHQvLyBlbHNlIEluTWVtb3J5RGJTZXJ2aWNlIGNob3NlIG5vdCB0byBpbnRlcmNlcHQ7IGNvbnRpbnVlIHByb2Nlc3NpbmcuXG5cdFx0XHRjb25zdCBpbnRlcmNlcHRvclJlc3BvbnNlID0gbWV0aG9kSW50ZXJjZXB0b3IocmVxSW5mbyk7XG5cdFx0XHRpZiAoaW50ZXJjZXB0b3JSZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gaW50ZXJjZXB0b3JSZXNwb25zZTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZGJbY29sbGVjdGlvbk5hbWVdKSB7XG5cdFx0XHQvLyByZXF1ZXN0IGlzIGZvciBhIGtub3duIGNvbGxlY3Rpb24gb2YgdGhlIEluTWVtb3J5RGJTZXJ2aWNlXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gdGhpcy5jb2xsZWN0aW9uSGFuZGxlcihyZXFJbmZvKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuY29uZmlnLnBhc3NUaHJ1VW5rbm93blVybCkge1xuXHRcdFx0Ly8gdW5rbm93biBjb2xsZWN0aW9uOyBwYXNzIHJlcXVlc3QgdGhydSB0byBhIFwicmVhbFwiIGJhY2tlbmQuXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRQYXNzVGhydUJhY2tlbmQoKS5oYW5kbGUocmVxKTtcblx0XHR9XG5cblx0XHQvLyA0MDQgLSBjYW4ndCBoYW5kbGUgdGhpcyByZXF1ZXN0XG5cdFx0cmVzT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMoXG5cdFx0XHR1cmwsXG5cdFx0XHRTVEFUVVMuTk9UX0ZPVU5ELFxuXHRcdFx0YENvbGxlY3Rpb24gJyR7Y29sbGVjdGlvbk5hbWV9JyBub3QgZm91bmRgXG5cdFx0KTtcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gcmVzT3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQWRkIGNvbmZpZ3VyZWQgZGVsYXkgdG8gcmVzcG9uc2Ugb2JzZXJ2YWJsZSB1bmxlc3MgZGVsYXkgPT09IDBcblx0ICovXG5cdHByb3RlY3RlZCBhZGREZWxheShyZXNwb25zZTogT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBkID0gdGhpcy5jb25maWcuZGVsYXk7XG5cdFx0cmV0dXJuIGQgPT09IDAgPyByZXNwb25zZSA6IGRlbGF5UmVzcG9uc2UocmVzcG9uc2UsIGQgfHwgNTAwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBcHBseSBxdWVyeS9zZWFyY2ggcGFyYW1ldGVycyBhcyBhIGZpbHRlciBvdmVyIHRoZSBjb2xsZWN0aW9uXG5cdCAqIFRoaXMgaW1wbCBvbmx5IHN1cHBvcnRzIFJlZ0V4cCBxdWVyaWVzIG9uIHN0cmluZyBwcm9wZXJ0aWVzIG9mIHRoZSBjb2xsZWN0aW9uXG5cdCAqIEFORHMgdGhlIGNvbmRpdGlvbnMgdG9nZXRoZXJcblx0ICovXG5cdHByb3RlY3RlZCBhcHBseVF1ZXJ5KGNvbGxlY3Rpb246IGFueVtdLCBxdWVyeTogTWFwPHN0cmluZywgc3RyaW5nW10+KTogYW55W10ge1xuXHRcdC8vIGV4dHJhY3QgZmlsdGVyaW5nIGNvbmRpdGlvbnMgLSB7cHJvcGVydHlOYW1lLCBSZWdFeHBzKSAtIGZyb20gcXVlcnkvc2VhcmNoIHBhcmFtZXRlcnNcblx0XHRjb25zdCBjb25kaXRpb25zOiB7IG5hbWU6IHN0cmluZywgcng6IFJlZ0V4cCB9W10gPSBbXTtcblx0XHRjb25zdCBjYXNlU2Vuc2l0aXZlID0gdGhpcy5jb25maWcuY2FzZVNlbnNpdGl2ZVNlYXJjaCA/IHVuZGVmaW5lZCA6ICdpJztcblx0XHRxdWVyeS5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nW10sIG5hbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0dmFsdWUuZm9yRWFjaCh2ID0+IGNvbmRpdGlvbnMucHVzaCh7IG5hbWUsIHJ4OiBuZXcgUmVnRXhwKGRlY29kZVVSSSh2KSwgY2FzZVNlbnNpdGl2ZSkgfSkpO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3QgbGVuID0gY29uZGl0aW9ucy5sZW5ndGg7XG5cdFx0aWYgKCFsZW4pIHsgcmV0dXJuIGNvbGxlY3Rpb247IH1cblxuXHRcdC8vIEFORCB0aGUgUmVnRXhwIGNvbmRpdGlvbnNcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5maWx0ZXIocm93ID0+IHtcblx0XHRcdGxldCBvayA9IHRydWU7XG5cdFx0XHRsZXQgaSA9IGxlbjtcblx0XHRcdHdoaWxlIChvayAmJiBpKSB7XG5cdFx0XHRcdGkgLT0gMTtcblx0XHRcdFx0Y29uc3QgY29uZCA9IGNvbmRpdGlvbnNbaV07XG5cdFx0XHRcdG9rID0gY29uZC5yeC50ZXN0KHJvd1tjb25kLm5hbWVdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvaztcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBtZXRob2QgZnJvbSB0aGUgYEluTWVtb3J5RGJTZXJ2aWNlYCAoaWYgaXQgZXhpc3RzKSwgYm91bmQgdG8gdGhhdCBzZXJ2aWNlXG5cdCAqL1xuXHRwcm90ZWN0ZWQgYmluZDxUIGV4dGVuZHMgRnVuY3Rpb24+KG1ldGhvZE5hbWU6IHN0cmluZykge1xuXHRcdGNvbnN0IGZuID0gdGhpcy5kYXRhU2VydmljZVttZXRob2ROYW1lXSBhcyBUO1xuXHRcdHJldHVybiBmbiA/IDxUPmZuLmJpbmQodGhpcy5kYXRhU2VydmljZSkgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYm9kaWZ5KGRhdGE6IGFueSkge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5kYXRhRW5jYXBzdWxhdGlvbiA/IHsgZGF0YSB9IDogZGF0YTtcblx0fVxuXG5cdHByb3RlY3RlZCBjbG9uZShkYXRhOiBhbnkpIHtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY29sbGVjdGlvbkhhbmRsZXIocmVxSW5mbzogUmVxdWVzdEluZm8pOiBSZXNwb25zZU9wdGlvbnMge1xuXHRcdC8vIGNvbnN0IHJlcSA9IHJlcUluZm8ucmVxO1xuXHRcdGxldCByZXNPcHRpb25zOiBSZXNwb25zZU9wdGlvbnM7XG5cdFx0c3dpdGNoIChyZXFJbmZvLm1ldGhvZCkge1xuXHRcdFx0Y2FzZSAnZ2V0Jzpcblx0XHRcdFx0cmVzT3B0aW9ucyA9IHRoaXMuZ2V0KHJlcUluZm8pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3Bvc3QnOlxuXHRcdFx0XHRyZXNPcHRpb25zID0gdGhpcy5wb3N0KHJlcUluZm8pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3B1dCc6XG5cdFx0XHRcdHJlc09wdGlvbnMgPSB0aGlzLnB1dChyZXFJbmZvKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkZWxldGUnOlxuXHRcdFx0XHRyZXNPcHRpb25zID0gdGhpcy5kZWxldGUocmVxSW5mbyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmVzT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMocmVxSW5mby51cmwsIFNUQVRVUy5NRVRIT0RfTk9UX0FMTE9XRUQsICdNZXRob2Qgbm90IGFsbG93ZWQnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYGRhdGFTZXJ2aWNlLnJlc3BvbnNlSW50ZXJjZXB0b3JgIGV4aXN0cywgbGV0IGl0IG1vcnBoIHRoZSByZXNwb25zZSBvcHRpb25zXG5cdFx0Y29uc3QgaW50ZXJjZXB0b3IgPSB0aGlzLmJpbmQoJ3Jlc3BvbnNlSW50ZXJjZXB0b3InKTtcblx0XHRyZXR1cm4gaW50ZXJjZXB0b3IgPyBpbnRlcmNlcHRvcihyZXNPcHRpb25zLCByZXFJbmZvKSA6IHJlc09wdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogQ29tbWFuZHMgcmVjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIHNlcnZpY2Ugb3IgZXh0cmFjdCBpbmZvcm1hdGlvbiBmcm9tIGl0LlxuXHQgKiBDb21tYW5kcyBpZ25vcmUgdGhlIGxhdGVuY3kgZGVsYXkgYW5kIHJlc3BvbmQgQVNBUC5cblx0ICpcblx0ICogV2hlbiB0aGUgbGFzdCBzZWdtZW50IG9mIHRoZSBgYXBpQmFzZWAgcGF0aCBpcyBcImNvbW1hbmRzXCIsXG5cdCAqIHRoZSBgY29sbGVjdGlvbk5hbWVgIGlzIHRoZSBjb21tYW5kLlxuXHQgKlxuXHQgKiBFeGFtcGxlIFVSTHM6XG5cdCAqICAgY29tbWFuZHMvcmVzZXRkYiAoUE9TVCkgLy8gUmVzZXQgdGhlIFwiZGF0YWJhc2VcIiB0byBpdHMgb3JpZ2luYWwgc3RhdGVcblx0ICogICBjb21tYW5kcy9jb25maWcgKEdFVCkgICAvLyBSZXR1cm4gdGhpcyBzZXJ2aWNlJ3MgY29uZmlnIG9iamVjdFxuXHQgKiAgIGNvbW1hbmRzL2NvbmZpZyAoUE9TVCkgIC8vIFVwZGF0ZSB0aGUgY29uZmlnIChlLmcuIHRoZSBkZWxheSlcblx0ICpcblx0ICogVXNhZ2U6XG5cdCAqICAgaHR0cC5wb3N0KCdjb21tYW5kcy9yZXNldGRiJywgdW5kZWZpbmVkKTtcblx0ICogICBodHRwLmdldCgnY29tbWFuZHMvY29uZmlnJyk7XG5cdCAqICAgaHR0cC5wb3N0KCdjb21tYW5kcy9jb25maWcnLCAne1wiZGVsYXlcIjoxMDAwfScpO1xuXHQgKi9cblx0cHJvdGVjdGVkIGNvbW1hbmRzKHJlcUluZm86IFJlcXVlc3RJbmZvKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBjb21tYW5kID0gcmVxSW5mby5jb2xsZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGNvbnN0IG1ldGhvZCA9IHJlcUluZm8ubWV0aG9kO1xuXG5cdFx0bGV0IHJlc09wdGlvbnM6IFJlc3BvbnNlT3B0aW9ucyA9IHtcblx0XHRcdHVybDogcmVxSW5mby51cmxcblx0XHR9O1xuXG5cdFx0c3dpdGNoIChjb21tYW5kKSB7XG5cdFx0XHRjYXNlICdyZXNldGRiJzpcblx0XHRcdFx0cmVzT3B0aW9ucy5zdGF0dXMgPSBTVEFUVVMuTk9fQ09OVEVOVDtcblx0XHRcdFx0cmV0dXJuIHRoaXMucmVzZXREYihyZXFJbmZvKS5waXBlKFxuXHRcdFx0XHRcdGNvbmNhdE1hcCgoKSA9PiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNPcHRpb25zLCBmYWxzZSAvKiBubyBsYXRlbmN5IGRlbGF5ICovKSlcblx0XHRcdFx0KTtcblxuXHRcdFx0Y2FzZSAnY29uZmlnJzpcblx0XHRcdFx0aWYgKG1ldGhvZCA9PT0gJ2dldCcpIHtcblx0XHRcdFx0XHRyZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5PSztcblx0XHRcdFx0XHRyZXNPcHRpb25zLmJvZHkgPSB0aGlzLmNsb25lKHRoaXMuY29uZmlnKTtcblxuXHRcdFx0XHRcdC8vIGFueSBvdGhlciBIVFRQIG1ldGhvZCBpcyBhc3N1bWVkIHRvIGJlIGEgY29uZmlnIHVwZGF0ZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnN0IGJvZHkgPSB0aGlzLmdldEpzb25Cb2R5KHJlcUluZm8ucmVxKTtcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBib2R5KTtcblx0XHRcdFx0XHR0aGlzLnBhc3NUaHJ1QmFja2VuZCA9IHVuZGVmaW5lZDsgLy8gcmUtY3JlYXRlIHdoZW4gbmVlZGVkXG5cblx0XHRcdFx0XHRyZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5OT19DT05URU5UO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhcblx0XHRcdFx0XHRyZXFJbmZvLnVybCxcblx0XHRcdFx0XHRTVEFUVVMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuXHRcdFx0XHRcdGBVbmtub3duIGNvbW1hbmQgXCIke2NvbW1hbmR9XCJgXG5cdFx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHJlc09wdGlvbnMsIGZhbHNlIC8qIG5vIGxhdGVuY3kgZGVsYXkgKi8pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybDogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKTogUmVzcG9uc2VPcHRpb25zIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Ym9keTogeyBlcnJvcjogYCR7bWVzc2FnZX1gIH0sXG5cdFx0XHR1cmw6IHVybCxcblx0XHRcdGhlYWRlcnM6IHRoaXMuY3JlYXRlSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXG5cdFx0XHRzdGF0dXM6IHN0YXR1c1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIHN0YW5kYXJkIEhUVFAgaGVhZGVycyBvYmplY3QgZnJvbSBoYXNoIG1hcCBvZiBoZWFkZXIgc3RyaW5nc1xuXHQgKiBAcGFyYW0gaGVhZGVyc1xuXHQgKi9cblx0cHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUhlYWRlcnMoaGVhZGVyczogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9KTogSGVhZGVyc0NvcmU7XG5cblx0LyoqXG5cdCAqIGNyZWF0ZSB0aGUgZnVuY3Rpb24gdGhhdCBwYXNzZXMgdW5oYW5kbGVkIHJlcXVlc3RzIHRocm91Z2ggdG8gdGhlIFwicmVhbFwiIGJhY2tlbmQuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlUGFzc1RocnVCYWNrZW5kKCk6IFBhc3NUaHJ1QmFja2VuZDtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgc2VhcmNoIG1hcCBmcm9tIGEgbG9jYXRpb24gcXVlcnkvc2VhcmNoIHN0cmluZ1xuXHQgKi9cblx0cHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZVF1ZXJ5TWFwKHNlYXJjaDogc3RyaW5nKTogTWFwPHN0cmluZywgc3RyaW5nW10+O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBjb2xkIHJlc3BvbnNlIE9ic2VydmFibGUgZnJvbSBhIGZhY3RvcnkgZm9yIFJlc3BvbnNlT3B0aW9uc1xuXHQgKiBAcGFyYW0gcmVzT3B0aW9uc0ZhY3RvcnkgLSBjcmVhdGVzIFJlc3BvbnNlT3B0aW9ucyB3aGVuIG9ic2VydmFibGUgaXMgc3Vic2NyaWJlZFxuXHQgKiBAcGFyYW0gd2l0aERlbGF5IC0gaWYgdHJ1ZSAoZGVmYXVsdCksIGFkZCBzaW11bGF0ZWQgbGF0ZW5jeSBkZWxheSBmcm9tIGNvbmZpZ3VyYXRpb25cblx0ICovXG5cdHByb3RlY3RlZCBjcmVhdGVSZXNwb25zZSQocmVzT3B0aW9uc0ZhY3Rvcnk6ICgpID0+IFJlc3BvbnNlT3B0aW9ucywgd2l0aERlbGF5ID0gdHJ1ZSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgcmVzT3B0aW9ucyQgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlT3B0aW9ucyQocmVzT3B0aW9uc0ZhY3RvcnkpO1xuXHRcdGxldCByZXNwJCA9IHRoaXMuY3JlYXRlUmVzcG9uc2UkZnJvbVJlc3BvbnNlT3B0aW9ucyQocmVzT3B0aW9ucyQpO1xuXHRcdHJldHVybiB3aXRoRGVsYXkgPyB0aGlzLmFkZERlbGF5KHJlc3AkKSA6IHJlc3AkO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIFJlc3BvbnNlIG9ic2VydmFibGUgZnJvbSBSZXNwb25zZU9wdGlvbnMgb2JzZXJ2YWJsZS5cblx0ICovXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVSZXNwb25zZSRmcm9tUmVzcG9uc2VPcHRpb25zJChyZXNPcHRpb25zJDogT2JzZXJ2YWJsZTxSZXNwb25zZU9wdGlvbnM+KTogT2JzZXJ2YWJsZTxhbnk+O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBjb2xkIE9ic2VydmFibGUgb2YgUmVzcG9uc2VPcHRpb25zLlxuXHQgKiBAcGFyYW0gcmVzT3B0aW9uc0ZhY3RvcnkgLSBjcmVhdGVzIFJlc3BvbnNlT3B0aW9ucyB3aGVuIG9ic2VydmFibGUgaXMgc3Vic2NyaWJlZFxuXHQgKi9cblx0cHJvdGVjdGVkIGNyZWF0ZVJlc3BvbnNlT3B0aW9ucyQocmVzT3B0aW9uc0ZhY3Rvcnk6ICgpID0+IFJlc3BvbnNlT3B0aW9ucyk6IE9ic2VydmFibGU8UmVzcG9uc2VPcHRpb25zPiB7XG5cblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGU8UmVzcG9uc2VPcHRpb25zPigocmVzcG9uc2VPYnNlcnZlcjogT2JzZXJ2ZXI8UmVzcG9uc2VPcHRpb25zPikgPT4ge1xuXHRcdFx0bGV0IHJlc09wdGlvbnM6IFJlc3BvbnNlT3B0aW9ucztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlc09wdGlvbnMgPSByZXNPcHRpb25zRmFjdG9yeSgpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc3QgZXJyID0gZXJyb3IubWVzc2FnZSB8fCBlcnJvcjtcblx0XHRcdFx0cmVzT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMoJycsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGAke2Vycn1gKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3RhdHVzID0gcmVzT3B0aW9ucy5zdGF0dXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXNPcHRpb25zLnN0YXR1c1RleHQgPSBnZXRTdGF0dXNUZXh0KHN0YXR1cyk7XG5cdFx0XHR9IGNhdGNoIChlKSB7IC8qIGlnbm9yZSBmYWlsdXJlICovIH1cblx0XHRcdGlmIChpc1N1Y2Nlc3Moc3RhdHVzKSkge1xuXHRcdFx0XHRyZXNwb25zZU9ic2VydmVyLm5leHQocmVzT3B0aW9ucyk7XG5cdFx0XHRcdHJlc3BvbnNlT2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3BvbnNlT2JzZXJ2ZXIuZXJyb3IocmVzT3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKCkgPT4geyB9OyAvLyB1bnN1YnNjcmliZSBmdW5jdGlvblxuXHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGRlbGV0ZSh7IGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzLCBpZCwgdXJsIH06IFJlcXVlc3RJbmZvKTogUmVzcG9uc2VPcHRpb25zIHtcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuXHRcdGlmIChpZCA9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLk5PVF9GT1VORCwgYE1pc3NpbmcgXCIke2NvbGxlY3Rpb25OYW1lfVwiIGlkYCk7XG5cdFx0fVxuXHRcdGNvbnN0IGV4aXN0cyA9IHRoaXMucmVtb3ZlQnlJZChjb2xsZWN0aW9uLCBpZCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXG5cdFx0XHRzdGF0dXM6IChleGlzdHMgfHwgIXRoaXMuY29uZmlnLmRlbGV0ZTQwNCkgPyBTVEFUVVMuTk9fQ09OVEVOVCA6IFNUQVRVUy5OT1RfRk9VTkRcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmQgZmlyc3QgaW5zdGFuY2Ugb2YgaXRlbSBpbiBjb2xsZWN0aW9uIGJ5IGBpdGVtLmlkYFxuXHQgKiBAcGFyYW0gY29sbGVjdGlvblxuXHQgKiBAcGFyYW0gaWRcblx0ICovXG5cdHByb3RlY3RlZCBmaW5kQnlJZDxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgaWQ6IGFueSk6IFQge1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmZpbmQoKGl0ZW06IFQpID0+IGl0ZW0uaWQgPT09IGlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSB0aGUgbmV4dCBhdmFpbGFibGUgaWQgZm9yIGl0ZW0gaW4gdGhpcyBjb2xsZWN0aW9uXG5cdCAqIFVzZSBtZXRob2QgZnJvbSBgZGF0YVNlcnZpY2VgIGlmIGl0IGV4aXN0cyBhbmQgcmV0dXJucyBhIHZhbHVlLFxuXHQgKiBlbHNlIGRlbGVnYXRlcyB0byBgZ2VuSWREZWZhdWx0YC5cblx0ICogQHBhcmFtIGNvbGxlY3Rpb24gLSBjb2xsZWN0aW9uIG9mIGl0ZW1zIHdpdGggYGlkYCBrZXkgcHJvcGVydHlcblx0ICovXG5cdHByb3RlY3RlZCBnZW5JZDxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0Y29uc3QgZ2VuSWQgPSB0aGlzLmJpbmQoJ2dlbklkJyk7XG5cdFx0aWYgKGdlbklkKSB7XG5cdFx0XHRjb25zdCBpZCA9IGdlbklkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG5cdFx0XHRpZiAoaWQgIT0gdW5kZWZpbmVkKSB7IHJldHVybiBpZDsgfVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5nZW5JZERlZmF1bHQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgZ2VuZXJhdG9yIG9mIHRoZSBuZXh0IGF2YWlsYWJsZSBpZCBmb3IgaXRlbSBpbiB0aGlzIGNvbGxlY3Rpb25cblx0ICogVGhpcyBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHdvcmtzIG9ubHkgZm9yIG51bWVyaWMgaWRzLlxuXHQgKiBAcGFyYW0gY29sbGVjdGlvbiAtIGNvbGxlY3Rpb24gb2YgaXRlbXMgd2l0aCBgaWRgIGtleSBwcm9wZXJ0eVxuXHQgKiBAcGFyYW0gY29sbGVjdGlvbk5hbWUgLSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG5cdCAqL1xuXHRwcm90ZWN0ZWQgZ2VuSWREZWZhdWx0PFQgZXh0ZW5kcyB7IGlkOiBhbnkgfT4oY29sbGVjdGlvbjogVFtdLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRpZiAoIXRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRgQ29sbGVjdGlvbiAnJHtjb2xsZWN0aW9uTmFtZX0nIGlkIHR5cGUgaXMgbm9uLW51bWVyaWMgb3IgdW5rbm93bi4gQ2FuIG9ubHkgZ2VuZXJhdGUgbnVtZXJpYyBpZHMuYCk7XG5cdFx0fVxuXG5cdFx0bGV0IG1heElkID0gMDtcblx0XHRjb2xsZWN0aW9uLnJlZHVjZSgocHJldjogYW55LCBpdGVtOiBhbnkpID0+IHtcblx0XHRcdG1heElkID0gTWF0aC5tYXgobWF4SWQsIHR5cGVvZiBpdGVtLmlkID09PSAnbnVtYmVyJyA/IGl0ZW0uaWQgOiBtYXhJZCk7XG5cdFx0fSwgdW5kZWZpbmVkKTtcblx0XHRyZXR1cm4gbWF4SWQgKyAxO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldCh7IGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzLCBpZCwgcXVlcnksIHVybCB9OiBSZXF1ZXN0SW5mbyk6IFJlc3BvbnNlT3B0aW9ucyB7XG5cdFx0bGV0IGRhdGEgPSBjb2xsZWN0aW9uO1xuXG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcblx0XHRpZiAoaWQgIT0gdW5kZWZpbmVkICYmIGlkICE9PSAnJykge1xuXHRcdFx0ZGF0YSA9IHRoaXMuZmluZEJ5SWQoY29sbGVjdGlvbiwgaWQpO1xuXHRcdH0gZWxzZSBpZiAocXVlcnkpIHtcblx0XHRcdGRhdGEgPSB0aGlzLmFwcGx5UXVlcnkoY29sbGVjdGlvbiwgcXVlcnkpO1xuXHRcdH1cblxuXHRcdGlmICghZGF0YSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBgJyR7Y29sbGVjdGlvbk5hbWV9JyB3aXRoIGlkPScke2lkfScgbm90IGZvdW5kYCk7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRib2R5OiB0aGlzLmJvZGlmeSh0aGlzLmNsb25lKGRhdGEpKSxcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXG5cdFx0XHRzdGF0dXM6IFNUQVRVUy5PS1xuXHRcdH07XG5cdH1cblxuXHQvKiogR2V0IEpTT04gYm9keSBmcm9tIHRoZSByZXF1ZXN0IG9iamVjdCAqL1xuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0SnNvbkJvZHkocmVxOiBhbnkpOiBhbnk7XG5cblx0LyoqXG5cdCAqIEdldCBsb2NhdGlvbiBpbmZvIGZyb20gYSB1cmwsIGV2ZW4gb24gc2VydmVyIHdoZXJlIGBkb2N1bWVudGAgaXMgbm90IGRlZmluZWRcblx0ICovXG5cdHByb3RlY3RlZCBnZXRMb2NhdGlvbih1cmw6IHN0cmluZyk6IFVyaUluZm8ge1xuXHRcdGlmICghdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuXHRcdFx0Ly8gZ2V0IHRoZSBkb2N1bWVudCBpZmYgcnVubmluZyBpbiBicm93c2VyXG5cdFx0XHRjb25zdCBkb2M6IERvY3VtZW50ID0gKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpID8gdW5kZWZpbmVkIDogZG9jdW1lbnQ7XG5cdFx0XHQvLyBhZGQgaG9zdCBpbmZvIHRvIHVybCBiZWZvcmUgcGFyc2luZy4gIFVzZSBhIGZha2UgaG9zdCB3aGVuIG5vdCBpbiBicm93c2VyLlxuXHRcdFx0Y29uc3QgYmFzZSA9IGRvYyA/IGRvYy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBkb2MubG9jYXRpb24uaG9zdCA6ICdodHRwOi8vZmFrZSc7XG5cdFx0XHR1cmwgPSB1cmwuc3RhcnRzV2l0aCgnLycpID8gYmFzZSArIHVybCA6IGJhc2UgKyAnLycgKyB1cmw7XG5cdFx0fVxuXHRcdHJldHVybiBwYXJzZVVyaSh1cmwpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBnZXQgb3IgY3JlYXRlIHRoZSBmdW5jdGlvbiB0aGF0IHBhc3NlcyB1bmhhbmRsZWQgcmVxdWVzdHNcblx0ICogdGhyb3VnaCB0byB0aGUgXCJyZWFsXCIgYmFja2VuZC5cblx0ICovXG5cdHByb3RlY3RlZCBnZXRQYXNzVGhydUJhY2tlbmQoKTogUGFzc1RocnVCYWNrZW5kIHtcblx0XHRyZXR1cm4gdGhpcy5wYXNzVGhydUJhY2tlbmQgP1xuXHRcdFx0dGhpcy5wYXNzVGhydUJhY2tlbmQgOlxuXHRcdFx0dGhpcy5wYXNzVGhydUJhY2tlbmQgPSB0aGlzLmNyZWF0ZVBhc3NUaHJ1QmFja2VuZCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB1dGlsaXR5IG1ldGhvZHMgZnJvbSB0aGlzIHNlcnZpY2UgaW5zdGFuY2UuXG5cdCAqIFVzZWZ1bCB3aXRoaW4gYW4gSFRUUCBtZXRob2Qgb3ZlcnJpZGVcblx0ICovXG5cdHByb3RlY3RlZCBnZXRSZXF1ZXN0SW5mb1V0aWxzKCk6IFJlcXVlc3RJbmZvVXRpbGl0aWVzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y3JlYXRlUmVzcG9uc2UkOiB0aGlzLmNyZWF0ZVJlc3BvbnNlJC5iaW5kKHRoaXMpLFxuXHRcdFx0ZmluZEJ5SWQ6IHRoaXMuZmluZEJ5SWQuYmluZCh0aGlzKSxcblx0XHRcdGlzQ29sbGVjdGlvbklkTnVtZXJpYzogdGhpcy5pc0NvbGxlY3Rpb25JZE51bWVyaWMuYmluZCh0aGlzKSxcblx0XHRcdGdldENvbmZpZzogKCkgPT4gdGhpcy5jb25maWcsXG5cdFx0XHRnZXREYjogKCkgPT4gdGhpcy5kYixcblx0XHRcdGdldEpzb25Cb2R5OiB0aGlzLmdldEpzb25Cb2R5LmJpbmQodGhpcyksXG5cdFx0XHRnZXRMb2NhdGlvbjogdGhpcy5nZXRMb2NhdGlvbi5iaW5kKHRoaXMpLFxuXHRcdFx0Z2V0UGFzc1RocnVCYWNrZW5kOiB0aGlzLmdldFBhc3NUaHJ1QmFja2VuZC5iaW5kKHRoaXMpLFxuXHRcdFx0cGFyc2VSZXF1ZXN0VXJsOiB0aGlzLnBhcnNlUmVxdWVzdFVybC5iaW5kKHRoaXMpLFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogcmV0dXJuIGNhbm9uaWNhbCBIVFRQIG1ldGhvZCBuYW1lIChsb3dlcmNhc2UpIGZyb20gdGhlIHJlcXVlc3Qgb2JqZWN0XG5cdCAqIGUuZy4gKHJlcS5tZXRob2QgfHwgJ2dldCcpLnRvTG93ZXJDYXNlKCk7XG5cdCAqIEBwYXJhbSByZXEgLSByZXF1ZXN0IG9iamVjdCBmcm9tIHRoZSBodHRwIGNhbGxcblx0ICpcblx0ICovXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRSZXF1ZXN0TWV0aG9kKHJlcTogYW55KTogc3RyaW5nO1xuXG5cdHByb3RlY3RlZCBpbmRleE9mKGNvbGxlY3Rpb246IGFueVtdLCBpZDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uZmluZEluZGV4KChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgPT09IGlkKTtcblx0fVxuXG5cdC8qKiBQYXJzZSB0aGUgaWQgYXMgYSBudW1iZXIuIFJldHVybiBvcmlnaW5hbCB2YWx1ZSBpZiBub3QgYSBudW1iZXIuICovXG5cdHByb3RlY3RlZCBwYXJzZUlkKGNvbGxlY3Rpb246IGFueVtdLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nKTogYW55IHtcblx0XHRpZiAoIXRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSkge1xuXHRcdFx0Ly8gQ2FuJ3QgY29uZmlybSB0aGF0IGBpZGAgaXMgYSBudW1lcmljIHR5cGU7IGRvbid0IHBhcnNlIGFzIGEgbnVtYmVyXG5cdFx0XHQvLyBvciBlbHNlIGAnNDInYCAtPiBgNDJgIGFuZCBfZ2V0IGJ5IGlkXyBmYWlscy5cblx0XHRcdHJldHVybiBpZDtcblx0XHR9XG5cdFx0Y29uc3QgaWROdW0gPSBwYXJzZUZsb2F0KGlkKTtcblx0XHRyZXR1cm4gaXNOYU4oaWROdW0pID8gaWQgOiBpZE51bTtcblx0fVxuXG5cdC8qKlxuXHQgKiByZXR1cm4gdHJ1ZSBpZiBjYW4gZGV0ZXJtaW5lIHRoYXQgdGhlIGNvbGxlY3Rpb24ncyBgaXRlbS5pZGAgaXMgYSBudW1iZXJcblx0ICogVGhpcyBpbXBsZW1lbnRhdGlvbiBjYW4ndCB0ZWxsIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5IHNvIGl0IGFzc3VtZXMgTk9cblx0ICogKi9cblx0cHJvdGVjdGVkIGlzQ29sbGVjdGlvbklkTnVtZXJpYzxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdC8vIGNvbGxlY3Rpb25OYW1lIG5vdCB1c2VkIG5vdyBidXQgb3ZlcnJpZGUgbWlnaHQgbWFpbnRhaW4gY29sbGVjdGlvbiB0eXBlIGluZm9ybWF0aW9uXG5cdFx0Ly8gc28gdGhhdCBpdCBjb3VsZCBrbm93IHRoZSB0eXBlIG9mIHRoZSBgaWRgIGV2ZW4gd2hlbiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cblx0XHQvLyByZXR1cm4gISEoY29sbGVjdGlvbiAmJiBjb2xsZWN0aW9uWzBdKSAmJiB0eXBlb2YgY29sbGVjdGlvblswXS5pZCA9PT0gJ251bWJlcic7XG5cdFx0cmV0dXJuICEhKGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvblswXSk7XG5cdH1cblxuXHQvKipcblx0ICogUGFyc2VzIHRoZSByZXF1ZXN0IFVSTCBpbnRvIGEgYFBhcnNlZFJlcXVlc3RVcmxgIG9iamVjdC5cblx0ICogUGFyc2luZyBkZXBlbmRzIHVwb24gY2VydGFpbiB2YWx1ZXMgb2YgYGNvbmZpZ2A6IGBhcGlCYXNlYCwgYGhvc3RgLCBhbmQgYHVybFJvb3RgLlxuXHQgKlxuXHQgKiBDb25maWd1cmluZyB0aGUgYGFwaUJhc2VgIHlpZWxkcyB0aGUgbW9zdCBpbnRlcmVzdGluZyBjaGFuZ2VzIHRvIGBwYXJzZVJlcXVlc3RVcmxgIGJlaGF2aW9yOlxuXHQgKiAgIFdoZW4gYXBpQmFzZT11bmRlZmluZWQgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9hcGkvY29sbGVjdGlvbi80Midcblx0ICogICAgIHtiYXNlOiAnYXBpLycsIGNvbGxlY3Rpb25OYW1lOiAnY29sbGVjdGlvbicsIGlkOiAnNDInLCAuLi59XG5cdCAqICAgV2hlbiBhcGlCYXNlPSdzb21lL2FwaS9yb290LycgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9zb21lL2FwaS9yb290L2NvbGxlY3Rpb24nXG5cdCAqICAgICB7YmFzZTogJ3NvbWUvYXBpL3Jvb3QvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6IHVuZGVmaW5lZCwgLi4ufVxuXHQgKiAgIFdoZW4gYXBpQmFzZT0nLycgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9jb2xsZWN0aW9uJ1xuXHQgKiAgICAge2Jhc2U6ICcvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6IHVuZGVmaW5lZCwgLi4ufVxuXHQgKlxuXHQgKiBUaGUgYWN0dWFsIGFwaSBiYXNlIHNlZ21lbnQgdmFsdWVzIGFyZSBpZ25vcmVkLiBPbmx5IHRoZSBudW1iZXIgb2Ygc2VnbWVudHMgbWF0dGVycy5cblx0ICogVGhlIGZvbGxvd2luZyBhcGkgYmFzZSBzdHJpbmdzIGFyZSBjb25zaWRlcmVkIGlkZW50aWNhbDogJ2EvYicgfiAnc29tZS9hcGkvJyB+IGB0d28vc2VnbWVudHMnXG5cdCAqXG5cdCAqIFRvIHJlcGxhY2UgdGhpcyBkZWZhdWx0IG1ldGhvZCwgYXNzaWduIHlvdXIgYWx0ZXJuYXRpdmUgdG8geW91ciBJbk1lbURiU2VydmljZVsncGFyc2VSZXF1ZXN0VXJsJ11cblx0ICovXG5cdHByb3RlY3RlZCBwYXJzZVJlcXVlc3RVcmwodXJsOiBzdHJpbmcpOiBQYXJzZWRSZXF1ZXN0VXJsIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgbG9jID0gdGhpcy5nZXRMb2NhdGlvbih1cmwpO1xuXHRcdFx0bGV0IGRyb3AgPSB0aGlzLmNvbmZpZy5yb290UGF0aC5sZW5ndGg7XG5cdFx0XHRsZXQgdXJsUm9vdCA9ICcnO1xuXHRcdFx0aWYgKGxvYy5ob3N0ICE9PSB0aGlzLmNvbmZpZy5ob3N0KSB7XG5cdFx0XHRcdC8vIHVybCBmb3IgYSBzZXJ2ZXIgb24gYSBkaWZmZXJlbnQgaG9zdCFcblx0XHRcdFx0Ly8gYXNzdW1lIGl0J3MgY29sbGVjdGlvbiBpcyBhY3R1YWxseSBoZXJlIHRvby5cblx0XHRcdFx0ZHJvcCA9IDE7IC8vIHRoZSBsZWFkaW5nIHNsYXNoXG5cdFx0XHRcdHVybFJvb3QgPSBsb2MucHJvdG9jb2wgKyAnLy8nICsgbG9jLmhvc3QgKyAnLyc7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYXRoID0gbG9jLnBhdGguc3Vic3RyaW5nKGRyb3ApO1xuXHRcdFx0Y29uc3QgcGF0aFNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpO1xuXHRcdFx0bGV0IHNlZ21lbnRJeCA9IDA7XG5cblx0XHRcdC8vIGFwaUJhc2U6IHRoZSBmcm9udCBwYXJ0IG9mIHRoZSBwYXRoIGRldm90ZWQgdG8gZ2V0dGluZyB0byB0aGUgYXBpIHJvdXRlXG5cdFx0XHQvLyBBc3N1bWVzIGZpcnN0IHBhdGggc2VnbWVudCBpZiBubyBjb25maWcuYXBpQmFzZVxuXHRcdFx0Ly8gZWxzZSBpZ25vcmVzIGFzIG1hbnkgcGF0aCBzZWdtZW50cyBhcyBhcmUgaW4gY29uZmlnLmFwaUJhc2Vcblx0XHRcdC8vIERvZXMgTk9UIGNhcmUgd2hhdCB0aGUgYXBpIGJhc2UgY2hhcnMgYWN0dWFsbHkgYXJlLlxuXHRcdFx0bGV0IGFwaUJhc2U6IHN0cmluZztcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG5cdFx0XHRpZiAodGhpcy5jb25maWcuYXBpQmFzZSA9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0YXBpQmFzZSA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhcGlCYXNlID0gcmVtb3ZlVHJhaWxpbmdTbGFzaCh0aGlzLmNvbmZpZy5hcGlCYXNlLnRyaW0oKSk7XG5cdFx0XHRcdGlmIChhcGlCYXNlKSB7XG5cdFx0XHRcdFx0c2VnbWVudEl4ID0gYXBpQmFzZS5zcGxpdCgnLycpLmxlbmd0aDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZWdtZW50SXggPSAwOyAvLyBubyBhcGkgYmFzZSBhdCBhbGw7IHVud2lzZSBidXQgYWxsb3dlZC5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0YXBpQmFzZSArPSAnLyc7XG5cblx0XHRcdGxldCBjb2xsZWN0aW9uTmFtZSA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG5cdFx0XHQvLyBpZ25vcmUgYW55dGhpbmcgYWZ0ZXIgYSAnLicgKGUuZy4sdGhlIFwianNvblwiIGluIFwiY3VzdG9tZXJzLmpzb25cIilcblx0XHRcdGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWUgJiYgY29sbGVjdGlvbk5hbWUuc3BsaXQoJy4nKVswXTtcblxuXHRcdFx0Y29uc3QgaWQgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB0aGlzLmNyZWF0ZVF1ZXJ5TWFwKGxvYy5xdWVyeSk7XG5cdFx0XHRjb25zdCByZXNvdXJjZVVybCA9IHVybFJvb3QgKyBhcGlCYXNlICsgY29sbGVjdGlvbk5hbWUgKyAnLyc7XG5cdFx0XHRyZXR1cm4geyBhcGlCYXNlLCBjb2xsZWN0aW9uTmFtZSwgaWQsIHF1ZXJ5LCByZXNvdXJjZVVybCB9O1xuXG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zdCBtc2cgPSBgdW5hYmxlIHRvIHBhcnNlIHVybCAnJHt1cmx9Jzsgb3JpZ2luYWwgZXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YDtcblx0XHRcdHRocm93IG5ldyBFcnJvcihtc2cpO1xuXHRcdH1cblx0fVxuXG5cdC8vIENyZWF0ZSBlbnRpdHlcblx0Ly8gQ2FuIHVwZGF0ZSBhbiBleGlzdGluZyBlbnRpdHkgdG9vIGlmIHBvc3Q0MDkgaXMgZmFsc2UuXG5cdHByb3RlY3RlZCBwb3N0KHsgY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMsIGlkLCByZXEsIHJlc291cmNlVXJsLCB1cmwgfTogUmVxdWVzdEluZm8pOiBSZXNwb25zZU9wdGlvbnMge1xuXHRcdGNvbnN0IGl0ZW0gPSB0aGlzLmNsb25lKHRoaXMuZ2V0SnNvbkJvZHkocmVxKSk7XG5cblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuXHRcdGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aXRlbS5pZCA9IGlkIHx8IHRoaXMuZ2VuSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGNvbnN0IGVtc2c6IHN0cmluZyA9IGVyci5tZXNzYWdlIHx8ICcnO1xuXHRcdFx0XHRpZiAoL2lkIHR5cGUgaXMgbm9uLW51bWVyaWMvLnRlc3QoZW1zZykpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5VTlBST0NFU1NBQkxFX0VOVFJZLCBlbXNnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuXHRcdFx0XHRcdFx0YEZhaWxlZCB0byBnZW5lcmF0ZSBuZXcgaWQgZm9yICcke2NvbGxlY3Rpb25OYW1lfSdgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpZCAmJiBpZCAhPT0gaXRlbS5pZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuQkFEX1JFUVVFU1QsIGBSZXF1ZXN0IGlkIGRvZXMgbm90IG1hdGNoIGl0ZW0uaWRgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWQgPSBpdGVtLmlkO1xuXHRcdH1cblx0XHRjb25zdCBleGlzdGluZ0l4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcblx0XHRjb25zdCBib2R5ID0gdGhpcy5ib2RpZnkoaXRlbSk7XG5cblx0XHRpZiAoZXhpc3RpbmdJeCA9PT0gLTEpIHtcblx0XHRcdGNvbGxlY3Rpb24ucHVzaChpdGVtKTtcblx0XHRcdGhlYWRlcnMuc2V0KCdMb2NhdGlvbicsIHJlc291cmNlVXJsICsgJy8nICsgaWQpO1xuXHRcdFx0cmV0dXJuIHsgaGVhZGVycywgYm9keSwgc3RhdHVzOiBTVEFUVVMuQ1JFQVRFRCB9O1xuXHRcdH0gZWxzZSBpZiAodGhpcy5jb25maWcucG9zdDQwOSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuQ09ORkxJQ1QsXG5cdFx0XHRcdGAnJHtjb2xsZWN0aW9uTmFtZX0nIGl0ZW0gd2l0aCBpZD0nJHtpZH0gZXhpc3RzIGFuZCBtYXkgbm90IGJlIHVwZGF0ZWQgd2l0aCBQT1NUOyB1c2UgUFVUIGluc3RlYWQuYCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbGxlY3Rpb25bZXhpc3RpbmdJeF0gPSBpdGVtO1xuXHRcdFx0cmV0dXJuIHRoaXMuY29uZmlnLnBvc3QyMDQgP1xuXHRcdFx0XHR7IGhlYWRlcnMsIHN0YXR1czogU1RBVFVTLk5PX0NPTlRFTlQgfSA6IC8vIHN1Y2Nlc3NmdWw7IG5vIGNvbnRlbnRcblx0XHRcdFx0eyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVUy5PSyB9OyAvLyBzdWNjZXNzZnVsOyByZXR1cm4gZW50aXR5XG5cdFx0fVxuXHR9XG5cblx0Ly8gVXBkYXRlIGV4aXN0aW5nIGVudGl0eVxuXHQvLyBDYW4gY3JlYXRlIGFuIGVudGl0eSB0b28gaWYgcHV0NDA0IGlzIGZhbHNlLlxuXHRwcm90ZWN0ZWQgcHV0KHsgY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMsIGlkLCByZXEsIHVybCB9OiBSZXF1ZXN0SW5mbyk6IFJlc3BvbnNlT3B0aW9ucyB7XG5cdFx0Y29uc3QgaXRlbSA9IHRoaXMuY2xvbmUodGhpcy5nZXRKc29uQm9keShyZXEpKTtcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuXHRcdGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBgTWlzc2luZyAnJHtjb2xsZWN0aW9uTmFtZX0nIGlkYCk7XG5cdFx0fVxuXHRcdGlmIChpZCAmJiBpZCAhPT0gaXRlbS5pZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuQkFEX1JFUVVFU1QsXG5cdFx0XHRcdGBSZXF1ZXN0IGZvciAnJHtjb2xsZWN0aW9uTmFtZX0nIGlkIGRvZXMgbm90IG1hdGNoIGl0ZW0uaWRgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWQgPSBpdGVtLmlkO1xuXHRcdH1cblx0XHRjb25zdCBleGlzdGluZ0l4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcblx0XHRjb25zdCBib2R5ID0gdGhpcy5ib2RpZnkoaXRlbSk7XG5cblx0XHRpZiAoZXhpc3RpbmdJeCA+IC0xKSB7XG5cdFx0XHRjb2xsZWN0aW9uW2V4aXN0aW5nSXhdID0gaXRlbTtcblx0XHRcdHJldHVybiB0aGlzLmNvbmZpZy5wdXQyMDQgP1xuXHRcdFx0XHR7IGhlYWRlcnMsIHN0YXR1czogU1RBVFVTLk5PX0NPTlRFTlQgfSA6IC8vIHN1Y2Nlc3NmdWw7IG5vIGNvbnRlbnRcblx0XHRcdFx0eyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVUy5PSyB9OyAvLyBzdWNjZXNzZnVsOyByZXR1cm4gZW50aXR5XG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvbmZpZy5wdXQ0MDQpIHtcblx0XHRcdC8vIGl0ZW0gdG8gdXBkYXRlIG5vdCBmb3VuZDsgdXNlIFBPU1QgdG8gY3JlYXRlIG5ldyBpdGVtIGZvciB0aGlzIGlkLlxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELFxuXHRcdFx0XHRgJyR7Y29sbGVjdGlvbk5hbWV9JyBpdGVtIHdpdGggaWQ9JyR7aWR9IG5vdCBmb3VuZCBhbmQgbWF5IG5vdCBiZSBjcmVhdGVkIHdpdGggUFVUOyB1c2UgUE9TVCBpbnN0ZWFkLmApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBjcmVhdGUgbmV3IGl0ZW0gZm9yIGlkIG5vdCBmb3VuZFxuXHRcdFx0Y29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xuXHRcdFx0cmV0dXJuIHsgaGVhZGVycywgYm9keSwgc3RhdHVzOiBTVEFUVVMuQ1JFQVRFRCB9O1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCByZW1vdmVCeUlkKGNvbGxlY3Rpb246IGFueVtdLCBpZDogbnVtYmVyKSB7XG5cdFx0Y29uc3QgaXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuXHRcdGlmIChpeCA+IC0xKSB7XG5cdFx0XHRjb2xsZWN0aW9uLnNwbGljZShpeCwgMSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRlbGwgeW91ciBpbi1tZW0gXCJkYXRhYmFzZVwiIHRvIHJlc2V0LlxuXHQgKiByZXR1cm5zIE9ic2VydmFibGUgb2YgdGhlIGRhdGFiYXNlIGJlY2F1c2UgcmVzZXR0aW5nIGl0IGNvdWxkIGJlIGFzeW5jXG5cdCAqL1xuXHRwcm90ZWN0ZWQgcmVzZXREYihyZXFJbmZvPzogUmVxdWVzdEluZm8pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHR0aGlzLmRiUmVhZHlTdWJqZWN0Lm5leHQoZmFsc2UpO1xuXHRcdGNvbnN0IGRiID0gdGhpcy5kYXRhU2VydmljZS5jcmVhdGVEYihyZXFJbmZvKTtcblx0XHRjb25zdCBkYiQgPSBkYiBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBkYiA6XG5cdFx0XHR0eXBlb2YgKGRiIGFzIGFueSkudGhlbiA9PT0gJ2Z1bmN0aW9uJyA/IGZyb20oZGIgYXMgUHJvbWlzZTxhbnk+KSA6XG5cdFx0XHRcdG9mKGRiKTtcblx0XHRkYiQucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoKGQ6IHt9KSA9PiB7XG5cdFx0XHR0aGlzLmRiID0gZDtcblx0XHRcdHRoaXMuZGJSZWFkeVN1YmplY3QubmV4dCh0cnVlKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcy5kYlJlYWR5O1xuXHR9XG5cbn1cbiJdfQ==