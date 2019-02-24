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
        const loc = this.getLocation('/');
        this.config.host = loc.host; // default to app web server host
        this.config.rootPath = loc.path; // default to path when app is served (e.g.'/')
        Object.assign(this.config, config);
    }
    ////  protected /////
    /**
     * @protected
     * @return {?}
     */
    get dbReady() {
        if (!this.dbReadySubject) {
            // first time the service is called.
            this.dbReadySubject = new BehaviorSubject(false);
            this.resetDb();
        }
        return this.dbReadySubject.asObservable().pipe(first((r) => r));
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
     * @param {?} req
     * @return {?}
     */
    handleRequest(req) {
        //  handle the request when there is an in-memory database
        return this.dbReady.pipe(concatMap(() => this.handleRequest_(req)));
    }
    /**
     * @protected
     * @param {?} req
     * @return {?}
     */
    handleRequest_(req) {
        /** @type {?} */
        const url = req.urlWithParams ? req.urlWithParams : req.url;
        // Try override parser
        // If no override parser or it returns nothing, use default parser
        /** @type {?} */
        const parser = this.bind('parseRequestUrl');
        /** @type {?} */
        const parsed = (parser && parser(url, this.requestInfoUtils)) ||
            this.parseRequestUrl(url);
        /** @type {?} */
        const collectionName = parsed.collectionName;
        /** @type {?} */
        const collection = this.db[collectionName];
        /** @type {?} */
        const reqInfo = {
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
        let resOptions;
        if (/commands\/?$/i.test(reqInfo.apiBase)) {
            return this.commands(reqInfo);
        }
        /** @type {?} */
        const methodInterceptor = this.bind(reqInfo.method);
        if (methodInterceptor) {
            // InMemoryDbService intercepts this HTTP method.
            // if interceptor produced a response, return it.
            // else InMemoryDbService chose not to intercept; continue processing.
            /** @type {?} */
            const interceptorResponse = methodInterceptor(reqInfo);
            if (interceptorResponse) {
                return interceptorResponse;
            }
            ;
        }
        if (this.db[collectionName]) {
            // request is for a known collection of the InMemoryDbService
            return this.createResponse$(() => this.collectionHandler(reqInfo));
        }
        if (this.config.passThruUnknownUrl) {
            // unknown collection; pass request thru to a "real" backend.
            return this.getPassThruBackend().handle(req);
        }
        // 404 - can't handle this request
        resOptions = this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `Collection '${collectionName}' not found`);
        return this.createResponse$(() => resOptions);
    }
    /**
     * Add configured delay to response observable unless delay === 0
     * @protected
     * @param {?} response
     * @return {?}
     */
    addDelay(response) {
        /** @type {?} */
        const d = this.config.delay;
        return d === 0 ? response : delayResponse(response, d || 500);
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
            value.forEach(v => conditions.push({ name, rx: new RegExp(decodeURI(v), caseSensitive) }));
        });
        /** @type {?} */
        const len = conditions.length;
        if (!len) {
            return collection;
        }
        // AND the RegExp conditions
        return collection.filter(row => {
            /** @type {?} */
            let ok = true;
            /** @type {?} */
            let i = len;
            while (ok && i) {
                i -= 1;
                /** @type {?} */
                const cond = conditions[i];
                ok = cond.rx.test(row[cond.name]);
            }
            return ok;
        });
    }
    /**
     * Get a method from the `InMemoryDbService` (if it exists), bound to that service
     * @protected
     * @template T
     * @param {?} methodName
     * @return {?}
     */
    bind(methodName) {
        /** @type {?} */
        const fn = (/** @type {?} */ (this.dataService[methodName]));
        return fn ? (/** @type {?} */ (fn.bind(this.dataService))) : undefined;
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
     * @param {?} reqInfo
     * @return {?}
     */
    collectionHandler(reqInfo) {
        // const req = reqInfo.req;
        /** @type {?} */
        let resOptions;
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
        const interceptor = this.bind('responseInterceptor');
        return interceptor ? interceptor(resOptions, reqInfo) : resOptions;
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
     * @param {?} reqInfo
     * @return {?}
     */
    commands(reqInfo) {
        /** @type {?} */
        const command = reqInfo.collectionName.toLowerCase();
        /** @type {?} */
        const method = reqInfo.method;
        /** @type {?} */
        let resOptions = {
            url: reqInfo.url
        };
        switch (command) {
            case 'resetdb':
                resOptions.status = STATUS.NO_CONTENT;
                return this.resetDb(reqInfo).pipe(concatMap(() => this.createResponse$(() => resOptions, false /* no latency delay */)));
            case 'config':
                if (method === 'get') {
                    resOptions.status = STATUS.OK;
                    resOptions.body = this.clone(this.config);
                    // any other HTTP method is assumed to be a config update
                }
                else {
                    /** @type {?} */
                    const body = this.getJsonBody(reqInfo.req);
                    Object.assign(this.config, body);
                    this.passThruBackend = undefined; // re-create when needed
                    resOptions.status = STATUS.NO_CONTENT;
                }
                break;
            default:
                resOptions = this.createErrorResponseOptions(reqInfo.url, STATUS.INTERNAL_SERVER_ERROR, `Unknown command "${command}"`);
        }
        return this.createResponse$(() => resOptions, false /* no latency delay */);
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
            body: { error: `${message}` },
            url: url,
            headers: this.createHeaders({ 'Content-Type': 'application/json' }),
            status: status
        };
    }
    /**
     * Create a cold response Observable from a factory for ResponseOptions
     * @protected
     * @param {?} resOptionsFactory - creates ResponseOptions when observable is subscribed
     * @param {?=} withDelay - if true (default), add simulated latency delay from configuration
     * @return {?}
     */
    createResponse$(resOptionsFactory, withDelay = true) {
        /** @type {?} */
        const resOptions$ = this.createResponseOptions$(resOptionsFactory);
        /** @type {?} */
        let resp$ = this.createResponse$fromResponseOptions$(resOptions$);
        return withDelay ? this.addDelay(resp$) : resp$;
    }
    /**
     * Create a cold Observable of ResponseOptions.
     * @protected
     * @param {?} resOptionsFactory - creates ResponseOptions when observable is subscribed
     * @return {?}
     */
    createResponseOptions$(resOptionsFactory) {
        return new Observable((responseObserver) => {
            /** @type {?} */
            let resOptions;
            try {
                resOptions = resOptionsFactory();
            }
            catch (error) {
                /** @type {?} */
                const err = error.message || error;
                resOptions = this.createErrorResponseOptions('', STATUS.INTERNAL_SERVER_ERROR, `${err}`);
            }
            /** @type {?} */
            const status = resOptions.status;
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
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `Missing "${collectionName}" id`);
        }
        /** @type {?} */
        const exists = this.removeById(collection, id);
        return {
            headers: headers,
            status: (exists || !this.config.delete404) ? STATUS.NO_CONTENT : STATUS.NOT_FOUND
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
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `'${collectionName}' with id='${id}' not found`);
        }
        return {
            body: this.bodify(this.clone(data)),
            headers: headers,
            status: STATUS.OK
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
            // get the document iff running in browser
            /** @type {?} */
            const doc = (typeof document === 'undefined') ? undefined : document;
            // add host info to url before parsing.  Use a fake host when not in browser.
            /** @type {?} */
            const base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
            url = url.startsWith('/') ? base + url : base + '/' + url;
        }
        return parseUri(url);
    }
    ;
    /**
     * get or create the function that passes unhandled requests
     * through to the "real" backend.
     * @protected
     * @return {?}
     */
    getPassThruBackend() {
        return this.passThruBackend ?
            this.passThruBackend :
            this.passThruBackend = this.createPassThruBackend();
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
            getDb: () => this.db,
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
     * To replace this default method, assign your alternative to your InMemDbService['parseRequestUrl']
     * @protected
     * @param {?} url
     * @return {?}
     */
    parseRequestUrl(url) {
        try {
            /** @type {?} */
            const loc = this.getLocation(url);
            /** @type {?} */
            let drop = this.config.rootPath.length;
            /** @type {?} */
            let urlRoot = '';
            if (loc.host !== this.config.host) {
                // url for a server on a different host!
                // assume it's collection is actually here too.
                drop = 1; // the leading slash
                urlRoot = loc.protocol + '//' + loc.host + '/';
            }
            /** @type {?} */
            const path = loc.path.substring(drop);
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
            const query = this.createQueryMap(loc.query);
            /** @type {?} */
            const resourceUrl = urlRoot + apiBase + collectionName + '/';
            return { apiBase, collectionName, id, query, resourceUrl };
        }
        catch (err) {
            /** @type {?} */
            const msg = `unable to parse url '${url}'; original error: ${err.message}`;
            throw new Error(msg);
        }
    }
    // Create entity
    // Can update an existing entity too if post409 is false.
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    post({ collection, collectionName, headers, id, req, resourceUrl, url }) {
        /** @type {?} */
        const item = this.clone(this.getJsonBody(req));
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            try {
                item.id = id || this.genId(collection, collectionName);
            }
            catch (err) {
                /** @type {?} */
                const emsg = err.message || '';
                if (/id type is non-numeric/.test(emsg)) {
                    return this.createErrorResponseOptions(url, STATUS.UNPROCESSABLE_ENTRY, emsg);
                }
                else {
                    console.error(err);
                    return this.createErrorResponseOptions(url, STATUS.INTERNAL_SERVER_ERROR, `Failed to generate new id for '${collectionName}'`);
                }
            }
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, STATUS.BAD_REQUEST, `Request id does not match item.id`);
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
            return { headers, body, status: STATUS.CREATED };
        }
        else if (this.config.post409) {
            return this.createErrorResponseOptions(url, STATUS.CONFLICT, `'${collectionName}' item with id='${id} exists and may not be updated with POST; use PUT instead.`);
        }
        else {
            collection[existingIx] = item;
            return this.config.post204 ?
                { headers, status: STATUS.NO_CONTENT } : // successful; no content
                { headers, body, status: STATUS.OK }; // successful; return entity
        }
    }
    // Update existing entity
    // Can create an entity too if put404 is false.
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    put({ collection, collectionName, headers, id, req, url }) {
        /** @type {?} */
        const item = this.clone(this.getJsonBody(req));
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `Missing '${collectionName}' id`);
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, STATUS.BAD_REQUEST, `Request for '${collectionName}' id does not match item.id`);
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
                { headers, status: STATUS.NO_CONTENT } : // successful; no content
                { headers, body, status: STATUS.OK }; // successful; return entity
        }
        else if (this.config.put404) {
            // item to update not found; use POST to create new item for this id.
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `'${collectionName}' item with id='${id} not found and may not be created with PUT; use POST instead.`);
        }
        else {
            // create new item for id not found
            collection.push(item);
            return { headers, body, status: STATUS.CREATED };
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
        const ix = this.indexOf(collection, id);
        if (ix > -1) {
            collection.splice(ix, 1);
            return true;
        }
        return false;
    }
    /**
     * Tell your in-mem "database" to reset.
     * returns Observable of the database because resetting it could be async
     * @protected
     * @param {?=} reqInfo
     * @return {?}
     */
    resetDb(reqInfo) {
        this.dbReadySubject.next(false);
        /** @type {?} */
        const db = this.dataService.createDb(reqInfo);
        /** @type {?} */
        const db$ = db instanceof Observable ? db :
            typeof ((/** @type {?} */ (db))).then === 'function' ? from((/** @type {?} */ (db))) :
                of(db);
        db$.pipe(first()).subscribe((d) => {
            this.db = d;
            this.dbReadySubject.next(true);
        });
        return this.dbReady;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnlfL2JhY2tlbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFZLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RSxPQUFPLEVBQWUsbUJBQW1CLEVBQXVDLFFBQVEsRUFBbUIsbUJBQW1CLEVBQTRFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7QUFTL04sTUFBTSxPQUFnQixjQUFjOzs7OztJQU9uQyxZQUNXLFdBQThCLEVBQ3hDLFNBQThCLEVBQUU7UUFEdEIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBUC9CLFdBQU0sR0FBd0IsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBSXhELHFCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDOztjQU1qRCxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFLLGlDQUFpQztRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsK0NBQStDO1FBQ2hGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFHRCxJQUFjLE9BQU87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dmFibGUsIE9ic2VydmVyLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uY2F0TWFwLCBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlbGF5UmVzcG9uc2UgfSBmcm9tICcuL2RlbGF5LXJlc3BvbnNlJztcbmltcG9ydCB7IGdldFN0YXR1c1RleHQsIGlzU3VjY2VzcywgU1RBVFVTIH0gZnJvbSAnLi9odHRwLXN0YXR1cy1jb2Rlcyc7XG5pbXBvcnQgeyBIZWFkZXJzQ29yZSwgTWVtb3J5QmFja2VuZENvbmZpZywgTWVtb3J5RGF0YVNlcnZpY2UsIFBhcnNlZFJlcXVlc3RVcmwsIHBhcnNlVXJpLCBQYXNzVGhydUJhY2tlbmQsIHJlbW92ZVRyYWlsaW5nU2xhc2gsIFJlcXVlc3RDb3JlLCBSZXF1ZXN0SW5mbywgUmVxdWVzdEluZm9VdGlsaXRpZXMsIFJlc3BvbnNlT3B0aW9ucywgVXJpSW5mbyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW4tbWVtb3J5IHdlYiBhcGkgYmFjay1lbmRzXG4gKiBTaW11bGF0ZSB0aGUgYmVoYXZpb3Igb2YgYSBSRVNUeSB3ZWIgYXBpXG4gKiBiYWNrZWQgYnkgdGhlIHNpbXBsZSBpbi1tZW1vcnkgZGF0YSBzdG9yZSBwcm92aWRlZCBieSB0aGUgaW5qZWN0ZWQgYEluTWVtb3J5RGJTZXJ2aWNlYCBzZXJ2aWNlLlxuICogQ29uZm9ybXMgbW9zdGx5IHRvIGJlaGF2aW9yIGRlc2NyaWJlZCBoZXJlOlxuICogaHR0cDovL3d3dy5yZXN0YXBpdHV0b3JpYWwuY29tL2xlc3NvbnMvaHR0cG1ldGhvZHMuaHRtbFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xuXHRwcm90ZWN0ZWQgY29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnID0gbmV3IE1lbW9yeUJhY2tlbmRDb25maWcoKTtcblx0cHJvdGVjdGVkIGRiOiBPYmplY3Q7XG5cdHByb3RlY3RlZCBkYlJlYWR5U3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xuXHRwcml2YXRlIHBhc3NUaHJ1QmFja2VuZDogUGFzc1RocnVCYWNrZW5kO1xuXHRwcm90ZWN0ZWQgcmVxdWVzdEluZm9VdGlscyA9IHRoaXMuZ2V0UmVxdWVzdEluZm9VdGlscygpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBkYXRhU2VydmljZTogTWVtb3J5RGF0YVNlcnZpY2UsXG5cdFx0Y29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnID0ge31cblx0KSB7XG5cdFx0Y29uc3QgbG9jID0gdGhpcy5nZXRMb2NhdGlvbignLycpO1xuXHRcdHRoaXMuY29uZmlnLmhvc3QgPSBsb2MuaG9zdDsgICAgIC8vIGRlZmF1bHQgdG8gYXBwIHdlYiBzZXJ2ZXIgaG9zdFxuXHRcdHRoaXMuY29uZmlnLnJvb3RQYXRoID0gbG9jLnBhdGg7IC8vIGRlZmF1bHQgdG8gcGF0aCB3aGVuIGFwcCBpcyBzZXJ2ZWQgKGUuZy4nLycpXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgY29uZmlnKTtcblx0fVxuXG5cdC8vLy8gIHByb3RlY3RlZCAvLy8vL1xuXHRwcm90ZWN0ZWQgZ2V0IGRiUmVhZHkoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0aWYgKCF0aGlzLmRiUmVhZHlTdWJqZWN0KSB7XG5cdFx0XHQvLyBmaXJzdCB0aW1lIHRoZSBzZXJ2aWNlIGlzIGNhbGxlZC5cblx0XHRcdHRoaXMuZGJSZWFkeVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblx0XHRcdHRoaXMucmVzZXREYigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5kYlJlYWR5U3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKGZpcnN0KChyOiBib29sZWFuKSA9PiByKSk7XG5cdH1cblxuXHQvKipcblx0ICogUHJvY2VzcyBSZXF1ZXN0IGFuZCByZXR1cm4gYW4gT2JzZXJ2YWJsZSBvZiBIdHRwIFJlc3BvbnNlIG9iamVjdFxuXHQgKiBpbiB0aGUgbWFubmVyIG9mIGEgUkVTVHkgd2ViIGFwaS5cblx0ICpcblx0ICogRXhwZWN0IFVSSSBwYXR0ZXJuIGluIHRoZSBmb3JtIDpiYXNlLzpjb2xsZWN0aW9uTmFtZS86aWQ/XG5cdCAqIEV4YW1wbGVzOlxuXHQgKiAgIC8vIGZvciBzdG9yZSB3aXRoIGEgJ2N1c3RvbWVycycgY29sbGVjdGlvblxuXHQgKiAgIEdFVCBhcGkvY3VzdG9tZXJzICAgICAgICAgIC8vIGFsbCBjdXN0b21lcnNcblx0ICogICBHRVQgYXBpL2N1c3RvbWVycy80MiAgICAgICAvLyB0aGUgY2hhcmFjdGVyIHdpdGggaWQ9NDJcblx0ICogICBHRVQgYXBpL2N1c3RvbWVycz9uYW1lPV5qICAvLyAnaicgaXMgYSByZWdleDsgcmV0dXJucyBjdXN0b21lcnMgd2hvc2UgbmFtZSBzdGFydHMgd2l0aCAnaicgb3IgJ0onXG5cdCAqICAgR0VUIGFwaS9jdXN0b21lcnMuanNvbi80MiAgLy8gaWdub3JlcyB0aGUgXCIuanNvblwiXG5cdCAqXG5cdCAqIEFsc28gYWNjZXB0cyBkaXJlY3QgY29tbWFuZHMgdG8gdGhlIHNlcnZpY2UgaW4gd2hpY2ggdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYXBpQmFzZSBpcyB0aGUgd29yZCBcImNvbW1hbmRzXCJcblx0ICogRXhhbXBsZXM6XG5cdCAqICAgICBQT1NUIGNvbW1hbmRzL3Jlc2V0RGIsXG5cdCAqICAgICBHRVQvUE9TVCBjb21tYW5kcy9jb25maWcgLSBnZXQgb3IgKHJlKXNldCB0aGUgY29uZmlnXG5cdCAqXG5cdCAqICAgSFRUUCBvdmVycmlkZXM6XG5cdCAqICAgICBJZiB0aGUgaW5qZWN0ZWQgZGF0YVNlcnZpY2UgZGVmaW5lcyBhbiBIVFRQIG1ldGhvZCAobG93ZXJjYXNlKVxuXHQgKiAgICAgVGhlIHJlcXVlc3QgaXMgZm9yd2FyZGVkIHRvIHRoYXQgbWV0aG9kIGFzIGluXG5cdCAqICAgICBgZGF0YVNlcnZpY2UuZ2V0KHJlcXVlc3RJbmZvKWBcblx0ICogICAgIHdoaWNoIG11c3QgcmV0dXJuIGVpdGhlciBhbiBPYnNlcnZhYmxlIG9mIHRoZSByZXNwb25zZSB0eXBlXG5cdCAqICAgICBmb3IgdGhpcyBodHRwIGxpYnJhcnkgb3IgbnVsbHx1bmRlZmluZWQgKHdoaWNoIG1lYW5zIFwia2VlcCBwcm9jZXNzaW5nXCIpLlxuXHQgKi9cblx0cHJvdGVjdGVkIGhhbmRsZVJlcXVlc3QocmVxOiBSZXF1ZXN0Q29yZSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Ly8gIGhhbmRsZSB0aGUgcmVxdWVzdCB3aGVuIHRoZXJlIGlzIGFuIGluLW1lbW9yeSBkYXRhYmFzZVxuXHRcdHJldHVybiB0aGlzLmRiUmVhZHkucGlwZShjb25jYXRNYXAoKCkgPT4gdGhpcy5oYW5kbGVSZXF1ZXN0XyhyZXEpKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGFuZGxlUmVxdWVzdF8ocmVxOiBSZXF1ZXN0Q29yZSk6IE9ic2VydmFibGU8YW55PiB7XG5cblx0XHRjb25zdCB1cmwgPSByZXEudXJsV2l0aFBhcmFtcyA/IHJlcS51cmxXaXRoUGFyYW1zIDogcmVxLnVybDtcblxuXHRcdC8vIFRyeSBvdmVycmlkZSBwYXJzZXJcblx0XHQvLyBJZiBubyBvdmVycmlkZSBwYXJzZXIgb3IgaXQgcmV0dXJucyBub3RoaW5nLCB1c2UgZGVmYXVsdCBwYXJzZXJcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLmJpbmQoJ3BhcnNlUmVxdWVzdFVybCcpO1xuXHRcdGNvbnN0IHBhcnNlZDogUGFyc2VkUmVxdWVzdFVybCA9XG5cdFx0XHQocGFyc2VyICYmIHBhcnNlcih1cmwsIHRoaXMucmVxdWVzdEluZm9VdGlscykpIHx8XG5cdFx0XHR0aGlzLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xuXG5cdFx0Y29uc3QgY29sbGVjdGlvbk5hbWUgPSBwYXJzZWQuY29sbGVjdGlvbk5hbWU7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IHRoaXMuZGJbY29sbGVjdGlvbk5hbWVdO1xuXG5cdFx0Y29uc3QgcmVxSW5mbzogUmVxdWVzdEluZm8gPSB7XG5cdFx0XHRyZXE6IHJlcSxcblx0XHRcdGFwaUJhc2U6IHBhcnNlZC5hcGlCYXNlLFxuXHRcdFx0Y29sbGVjdGlvbjogY29sbGVjdGlvbixcblx0XHRcdGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZSxcblx0XHRcdGhlYWRlcnM6IHRoaXMuY3JlYXRlSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXG5cdFx0XHRpZDogdGhpcy5wYXJzZUlkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBwYXJzZWQuaWQpLFxuXHRcdFx0bWV0aG9kOiB0aGlzLmdldFJlcXVlc3RNZXRob2QocmVxKSxcblx0XHRcdHF1ZXJ5OiBwYXJzZWQucXVlcnksXG5cdFx0XHRyZXNvdXJjZVVybDogcGFyc2VkLnJlc291cmNlVXJsLFxuXHRcdFx0dXJsOiB1cmwsXG5cdFx0XHR1dGlsczogdGhpcy5yZXF1ZXN0SW5mb1V0aWxzXG5cdFx0fTtcblxuXHRcdGxldCByZXNPcHRpb25zOiBSZXNwb25zZU9wdGlvbnM7XG5cblx0XHRpZiAoL2NvbW1hbmRzXFwvPyQvaS50ZXN0KHJlcUluZm8uYXBpQmFzZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbW1hbmRzKHJlcUluZm8pO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1ldGhvZEludGVyY2VwdG9yID0gdGhpcy5iaW5kKHJlcUluZm8ubWV0aG9kKTtcblx0XHRpZiAobWV0aG9kSW50ZXJjZXB0b3IpIHtcblx0XHRcdC8vIEluTWVtb3J5RGJTZXJ2aWNlIGludGVyY2VwdHMgdGhpcyBIVFRQIG1ldGhvZC5cblx0XHRcdC8vIGlmIGludGVyY2VwdG9yIHByb2R1Y2VkIGEgcmVzcG9uc2UsIHJldHVybiBpdC5cblx0XHRcdC8vIGVsc2UgSW5NZW1vcnlEYlNlcnZpY2UgY2hvc2Ugbm90IHRvIGludGVyY2VwdDsgY29udGludWUgcHJvY2Vzc2luZy5cblx0XHRcdGNvbnN0IGludGVyY2VwdG9yUmVzcG9uc2UgPSBtZXRob2RJbnRlcmNlcHRvcihyZXFJbmZvKTtcblx0XHRcdGlmIChpbnRlcmNlcHRvclJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiBpbnRlcmNlcHRvclJlc3BvbnNlO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5kYltjb2xsZWN0aW9uTmFtZV0pIHtcblx0XHRcdC8vIHJlcXVlc3QgaXMgZm9yIGEga25vd24gY29sbGVjdGlvbiBvZiB0aGUgSW5NZW1vcnlEYlNlcnZpY2Vcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiB0aGlzLmNvbGxlY3Rpb25IYW5kbGVyKHJlcUluZm8pKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jb25maWcucGFzc1RocnVVbmtub3duVXJsKSB7XG5cdFx0XHQvLyB1bmtub3duIGNvbGxlY3Rpb247IHBhc3MgcmVxdWVzdCB0aHJ1IHRvIGEgXCJyZWFsXCIgYmFja2VuZC5cblx0XHRcdHJldHVybiB0aGlzLmdldFBhc3NUaHJ1QmFja2VuZCgpLmhhbmRsZShyZXEpO1xuXHRcdH1cblxuXHRcdC8vIDQwNCAtIGNhbid0IGhhbmRsZSB0aGlzIHJlcXVlc3Rcblx0XHRyZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhcblx0XHRcdHVybCxcblx0XHRcdFNUQVRVUy5OT1RfRk9VTkQsXG5cdFx0XHRgQ29sbGVjdGlvbiAnJHtjb2xsZWN0aW9uTmFtZX0nIG5vdCBmb3VuZGBcblx0XHQpO1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNPcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGQgY29uZmlndXJlZCBkZWxheSB0byByZXNwb25zZSBvYnNlcnZhYmxlIHVubGVzcyBkZWxheSA9PT0gMFxuXHQgKi9cblx0cHJvdGVjdGVkIGFkZERlbGF5KHJlc3BvbnNlOiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGQgPSB0aGlzLmNvbmZpZy5kZWxheTtcblx0XHRyZXR1cm4gZCA9PT0gMCA/IHJlc3BvbnNlIDogZGVsYXlSZXNwb25zZShyZXNwb25zZSwgZCB8fCA1MDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFwcGx5IHF1ZXJ5L3NlYXJjaCBwYXJhbWV0ZXJzIGFzIGEgZmlsdGVyIG92ZXIgdGhlIGNvbGxlY3Rpb25cblx0ICogVGhpcyBpbXBsIG9ubHkgc3VwcG9ydHMgUmVnRXhwIHF1ZXJpZXMgb24gc3RyaW5nIHByb3BlcnRpZXMgb2YgdGhlIGNvbGxlY3Rpb25cblx0ICogQU5EcyB0aGUgY29uZGl0aW9ucyB0b2dldGhlclxuXHQgKi9cblx0cHJvdGVjdGVkIGFwcGx5UXVlcnkoY29sbGVjdGlvbjogYW55W10sIHF1ZXJ5OiBNYXA8c3RyaW5nLCBzdHJpbmdbXT4pOiBhbnlbXSB7XG5cdFx0Ly8gZXh0cmFjdCBmaWx0ZXJpbmcgY29uZGl0aW9ucyAtIHtwcm9wZXJ0eU5hbWUsIFJlZ0V4cHMpIC0gZnJvbSBxdWVyeS9zZWFyY2ggcGFyYW1ldGVyc1xuXHRcdGNvbnN0IGNvbmRpdGlvbnM6IHsgbmFtZTogc3RyaW5nLCByeDogUmVnRXhwIH1bXSA9IFtdO1xuXHRcdGNvbnN0IGNhc2VTZW5zaXRpdmUgPSB0aGlzLmNvbmZpZy5jYXNlU2Vuc2l0aXZlU2VhcmNoID8gdW5kZWZpbmVkIDogJ2knO1xuXHRcdHF1ZXJ5LmZvckVhY2goKHZhbHVlOiBzdHJpbmdbXSwgbmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHR2YWx1ZS5mb3JFYWNoKHYgPT4gY29uZGl0aW9ucy5wdXNoKHsgbmFtZSwgcng6IG5ldyBSZWdFeHAoZGVjb2RlVVJJKHYpLCBjYXNlU2Vuc2l0aXZlKSB9KSk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBsZW4gPSBjb25kaXRpb25zLmxlbmd0aDtcblx0XHRpZiAoIWxlbikgeyByZXR1cm4gY29sbGVjdGlvbjsgfVxuXG5cdFx0Ly8gQU5EIHRoZSBSZWdFeHAgY29uZGl0aW9uc1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmZpbHRlcihyb3cgPT4ge1xuXHRcdFx0bGV0IG9rID0gdHJ1ZTtcblx0XHRcdGxldCBpID0gbGVuO1xuXHRcdFx0d2hpbGUgKG9rICYmIGkpIHtcblx0XHRcdFx0aSAtPSAxO1xuXHRcdFx0XHRjb25zdCBjb25kID0gY29uZGl0aW9uc1tpXTtcblx0XHRcdFx0b2sgPSBjb25kLnJ4LnRlc3Qocm93W2NvbmQubmFtZV0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9rO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIG1ldGhvZCBmcm9tIHRoZSBgSW5NZW1vcnlEYlNlcnZpY2VgIChpZiBpdCBleGlzdHMpLCBib3VuZCB0byB0aGF0IHNlcnZpY2Vcblx0ICovXG5cdHByb3RlY3RlZCBiaW5kPFQgZXh0ZW5kcyBGdW5jdGlvbj4obWV0aG9kTmFtZTogc3RyaW5nKSB7XG5cdFx0Y29uc3QgZm4gPSB0aGlzLmRhdGFTZXJ2aWNlW21ldGhvZE5hbWVdIGFzIFQ7XG5cdFx0cmV0dXJuIGZuID8gPFQ+Zm4uYmluZCh0aGlzLmRhdGFTZXJ2aWNlKSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdHByb3RlY3RlZCBib2RpZnkoZGF0YTogYW55KSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRhdGFFbmNhcHN1bGF0aW9uID8geyBkYXRhIH0gOiBkYXRhO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNsb25lKGRhdGE6IGFueSkge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBjb2xsZWN0aW9uSGFuZGxlcihyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IFJlc3BvbnNlT3B0aW9ucyB7XG5cdFx0Ly8gY29uc3QgcmVxID0gcmVxSW5mby5yZXE7XG5cdFx0bGV0IHJlc09wdGlvbnM6IFJlc3BvbnNlT3B0aW9ucztcblx0XHRzd2l0Y2ggKHJlcUluZm8ubWV0aG9kKSB7XG5cdFx0XHRjYXNlICdnZXQnOlxuXHRcdFx0XHRyZXNPcHRpb25zID0gdGhpcy5nZXQocmVxSW5mbyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncG9zdCc6XG5cdFx0XHRcdHJlc09wdGlvbnMgPSB0aGlzLnBvc3QocmVxSW5mbyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncHV0Jzpcblx0XHRcdFx0cmVzT3B0aW9ucyA9IHRoaXMucHV0KHJlcUluZm8pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2RlbGV0ZSc6XG5cdFx0XHRcdHJlc09wdGlvbnMgPSB0aGlzLmRlbGV0ZShyZXFJbmZvKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhyZXFJbmZvLnVybCwgU1RBVFVTLk1FVEhPRF9OT1RfQUxMT1dFRCwgJ01ldGhvZCBub3QgYWxsb3dlZCcpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHQvLyBJZiBgZGF0YVNlcnZpY2UucmVzcG9uc2VJbnRlcmNlcHRvcmAgZXhpc3RzLCBsZXQgaXQgbW9ycGggdGhlIHJlc3BvbnNlIG9wdGlvbnNcblx0XHRjb25zdCBpbnRlcmNlcHRvciA9IHRoaXMuYmluZCgncmVzcG9uc2VJbnRlcmNlcHRvcicpO1xuXHRcdHJldHVybiBpbnRlcmNlcHRvciA/IGludGVyY2VwdG9yKHJlc09wdGlvbnMsIHJlcUluZm8pIDogcmVzT3B0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21tYW5kcyByZWNvbmZpZ3VyZSB0aGUgaW4tbWVtb3J5IHdlYiBhcGkgc2VydmljZSBvciBleHRyYWN0IGluZm9ybWF0aW9uIGZyb20gaXQuXG5cdCAqIENvbW1hbmRzIGlnbm9yZSB0aGUgbGF0ZW5jeSBkZWxheSBhbmQgcmVzcG9uZCBBU0FQLlxuXHQgKlxuXHQgKiBXaGVuIHRoZSBsYXN0IHNlZ21lbnQgb2YgdGhlIGBhcGlCYXNlYCBwYXRoIGlzIFwiY29tbWFuZHNcIixcblx0ICogdGhlIGBjb2xsZWN0aW9uTmFtZWAgaXMgdGhlIGNvbW1hbmQuXG5cdCAqXG5cdCAqIEV4YW1wbGUgVVJMczpcblx0ICogICBjb21tYW5kcy9yZXNldGRiIChQT1NUKSAvLyBSZXNldCB0aGUgXCJkYXRhYmFzZVwiIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZVxuXHQgKiAgIGNvbW1hbmRzL2NvbmZpZyAoR0VUKSAgIC8vIFJldHVybiB0aGlzIHNlcnZpY2UncyBjb25maWcgb2JqZWN0XG5cdCAqICAgY29tbWFuZHMvY29uZmlnIChQT1NUKSAgLy8gVXBkYXRlIHRoZSBjb25maWcgKGUuZy4gdGhlIGRlbGF5KVxuXHQgKlxuXHQgKiBVc2FnZTpcblx0ICogICBodHRwLnBvc3QoJ2NvbW1hbmRzL3Jlc2V0ZGInLCB1bmRlZmluZWQpO1xuXHQgKiAgIGh0dHAuZ2V0KCdjb21tYW5kcy9jb25maWcnKTtcblx0ICogICBodHRwLnBvc3QoJ2NvbW1hbmRzL2NvbmZpZycsICd7XCJkZWxheVwiOjEwMDB9Jyk7XG5cdCAqL1xuXHRwcm90ZWN0ZWQgY29tbWFuZHMocmVxSW5mbzogUmVxdWVzdEluZm8pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGNvbW1hbmQgPSByZXFJbmZvLmNvbGxlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgbWV0aG9kID0gcmVxSW5mby5tZXRob2Q7XG5cblx0XHRsZXQgcmVzT3B0aW9uczogUmVzcG9uc2VPcHRpb25zID0ge1xuXHRcdFx0dXJsOiByZXFJbmZvLnVybFxuXHRcdH07XG5cblx0XHRzd2l0Y2ggKGNvbW1hbmQpIHtcblx0XHRcdGNhc2UgJ3Jlc2V0ZGInOlxuXHRcdFx0XHRyZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5OT19DT05URU5UO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5yZXNldERiKHJlcUluZm8pLnBpcGUoXG5cdFx0XHRcdFx0Y29uY2F0TWFwKCgpID0+IHRoaXMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHJlc09wdGlvbnMsIGZhbHNlIC8qIG5vIGxhdGVuY3kgZGVsYXkgKi8pKVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRjYXNlICdjb25maWcnOlxuXHRcdFx0XHRpZiAobWV0aG9kID09PSAnZ2V0Jykge1xuXHRcdFx0XHRcdHJlc09wdGlvbnMuc3RhdHVzID0gU1RBVFVTLk9LO1xuXHRcdFx0XHRcdHJlc09wdGlvbnMuYm9keSA9IHRoaXMuY2xvbmUodGhpcy5jb25maWcpO1xuXG5cdFx0XHRcdFx0Ly8gYW55IG90aGVyIEhUVFAgbWV0aG9kIGlzIGFzc3VtZWQgdG8gYmUgYSBjb25maWcgdXBkYXRlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgYm9keSA9IHRoaXMuZ2V0SnNvbkJvZHkocmVxSW5mby5yZXEpO1xuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGJvZHkpO1xuXHRcdFx0XHRcdHRoaXMucGFzc1RocnVCYWNrZW5kID0gdW5kZWZpbmVkOyAvLyByZS1jcmVhdGUgd2hlbiBuZWVkZWRcblxuXHRcdFx0XHRcdHJlc09wdGlvbnMuc3RhdHVzID0gU1RBVFVTLk5PX0NPTlRFTlQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJlc09wdGlvbnMgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKFxuXHRcdFx0XHRcdHJlcUluZm8udXJsLFxuXHRcdFx0XHRcdFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG5cdFx0XHRcdFx0YFVua25vd24gY29tbWFuZCBcIiR7Y29tbWFuZH1cImBcblx0XHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gcmVzT3B0aW9ucywgZmFsc2UgLyogbm8gbGF0ZW5jeSBkZWxheSAqLyk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpOiBSZXNwb25zZU9wdGlvbnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRib2R5OiB7IGVycm9yOiBgJHttZXNzYWdlfWAgfSxcblx0XHRcdHVybDogdXJsLFxuXHRcdFx0aGVhZGVyczogdGhpcy5jcmVhdGVIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcblx0XHRcdHN0YXR1czogc3RhdHVzXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgc3RhbmRhcmQgSFRUUCBoZWFkZXJzIG9iamVjdCBmcm9tIGhhc2ggbWFwIG9mIGhlYWRlciBzdHJpbmdzXG5cdCAqIEBwYXJhbSBoZWFkZXJzXG5cdCAqL1xuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlSGVhZGVycyhoZWFkZXJzOiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH0pOiBIZWFkZXJzQ29yZTtcblxuXHQvKipcblx0ICogY3JlYXRlIHRoZSBmdW5jdGlvbiB0aGF0IHBhc3NlcyB1bmhhbmRsZWQgcmVxdWVzdHMgdGhyb3VnaCB0byB0aGUgXCJyZWFsXCIgYmFja2VuZC5cblx0ICovXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVQYXNzVGhydUJhY2tlbmQoKTogUGFzc1RocnVCYWNrZW5kO1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSBzZWFyY2ggbWFwIGZyb20gYSBsb2NhdGlvbiBxdWVyeS9zZWFyY2ggc3RyaW5nXG5cdCAqL1xuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlUXVlcnlNYXAoc2VhcmNoOiBzdHJpbmcpOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT47XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIGNvbGQgcmVzcG9uc2UgT2JzZXJ2YWJsZSBmcm9tIGEgZmFjdG9yeSBmb3IgUmVzcG9uc2VPcHRpb25zXG5cdCAqIEBwYXJhbSByZXNPcHRpb25zRmFjdG9yeSAtIGNyZWF0ZXMgUmVzcG9uc2VPcHRpb25zIHdoZW4gb2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkXG5cdCAqIEBwYXJhbSB3aXRoRGVsYXkgLSBpZiB0cnVlIChkZWZhdWx0KSwgYWRkIHNpbXVsYXRlZCBsYXRlbmN5IGRlbGF5IGZyb20gY29uZmlndXJhdGlvblxuXHQgKi9cblx0cHJvdGVjdGVkIGNyZWF0ZVJlc3BvbnNlJChyZXNPcHRpb25zRmFjdG9yeTogKCkgPT4gUmVzcG9uc2VPcHRpb25zLCB3aXRoRGVsYXkgPSB0cnVlKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCByZXNPcHRpb25zJCA9IHRoaXMuY3JlYXRlUmVzcG9uc2VPcHRpb25zJChyZXNPcHRpb25zRmFjdG9yeSk7XG5cdFx0bGV0IHJlc3AkID0gdGhpcy5jcmVhdGVSZXNwb25zZSRmcm9tUmVzcG9uc2VPcHRpb25zJChyZXNPcHRpb25zJCk7XG5cdFx0cmV0dXJuIHdpdGhEZWxheSA/IHRoaXMuYWRkRGVsYXkocmVzcCQpIDogcmVzcCQ7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgUmVzcG9uc2Ugb2JzZXJ2YWJsZSBmcm9tIFJlc3BvbnNlT3B0aW9ucyBvYnNlcnZhYmxlLlxuXHQgKi9cblx0cHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZVJlc3BvbnNlJGZyb21SZXNwb25zZU9wdGlvbnMkKHJlc09wdGlvbnMkOiBPYnNlcnZhYmxlPFJlc3BvbnNlT3B0aW9ucz4pOiBPYnNlcnZhYmxlPGFueT47XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIGNvbGQgT2JzZXJ2YWJsZSBvZiBSZXNwb25zZU9wdGlvbnMuXG5cdCAqIEBwYXJhbSByZXNPcHRpb25zRmFjdG9yeSAtIGNyZWF0ZXMgUmVzcG9uc2VPcHRpb25zIHdoZW4gb2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkXG5cdCAqL1xuXHRwcm90ZWN0ZWQgY3JlYXRlUmVzcG9uc2VPcHRpb25zJChyZXNPcHRpb25zRmFjdG9yeTogKCkgPT4gUmVzcG9uc2VPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZU9wdGlvbnM+IHtcblxuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZTxSZXNwb25zZU9wdGlvbnM+KChyZXNwb25zZU9ic2VydmVyOiBPYnNlcnZlcjxSZXNwb25zZU9wdGlvbnM+KSA9PiB7XG5cdFx0XHRsZXQgcmVzT3B0aW9uczogUmVzcG9uc2VPcHRpb25zO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzT3B0aW9ucyA9IHJlc09wdGlvbnNGYWN0b3J5KCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zdCBlcnIgPSBlcnJvci5tZXNzYWdlIHx8IGVycm9yO1xuXHRcdFx0XHRyZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucygnJywgU1RBVFVTLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgYCR7ZXJyfWApO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdGF0dXMgPSByZXNPcHRpb25zLnN0YXR1cztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlc09wdGlvbnMuc3RhdHVzVGV4dCA9IGdldFN0YXR1c1RleHQoc3RhdHVzKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHsgLyogaWdub3JlIGZhaWx1cmUgKi8gfVxuXHRcdFx0aWYgKGlzU3VjY2VzcyhzdGF0dXMpKSB7XG5cdFx0XHRcdHJlc3BvbnNlT2JzZXJ2ZXIubmV4dChyZXNPcHRpb25zKTtcblx0XHRcdFx0cmVzcG9uc2VPYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzcG9uc2VPYnNlcnZlci5lcnJvcihyZXNPcHRpb25zKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoKSA9PiB7IH07IC8vIHVuc3Vic2NyaWJlIGZ1bmN0aW9uXG5cdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZGVsZXRlKHsgY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMsIGlkLCB1cmwgfTogUmVxdWVzdEluZm8pOiBSZXNwb25zZU9wdGlvbnMge1xuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG5cdFx0aWYgKGlkID09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBgTWlzc2luZyBcIiR7Y29sbGVjdGlvbk5hbWV9XCIgaWRgKTtcblx0XHR9XG5cdFx0Y29uc3QgZXhpc3RzID0gdGhpcy5yZW1vdmVCeUlkKGNvbGxlY3Rpb24sIGlkKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcblx0XHRcdHN0YXR1czogKGV4aXN0cyB8fCAhdGhpcy5jb25maWcuZGVsZXRlNDA0KSA/IFNUQVRVUy5OT19DT05URU5UIDogU1RBVFVTLk5PVF9GT1VORFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogRmluZCBmaXJzdCBpbnN0YW5jZSBvZiBpdGVtIGluIGNvbGxlY3Rpb24gYnkgYGl0ZW0uaWRgXG5cdCAqIEBwYXJhbSBjb2xsZWN0aW9uXG5cdCAqIEBwYXJhbSBpZFxuXHQgKi9cblx0cHJvdGVjdGVkIGZpbmRCeUlkPFQgZXh0ZW5kcyB7IGlkOiBhbnkgfT4oY29sbGVjdGlvbjogVFtdLCBpZDogYW55KTogVCB7XG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uZmluZCgoaXRlbTogVCkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdlbmVyYXRlIHRoZSBuZXh0IGF2YWlsYWJsZSBpZCBmb3IgaXRlbSBpbiB0aGlzIGNvbGxlY3Rpb25cblx0ICogVXNlIG1ldGhvZCBmcm9tIGBkYXRhU2VydmljZWAgaWYgaXQgZXhpc3RzIGFuZCByZXR1cm5zIGEgdmFsdWUsXG5cdCAqIGVsc2UgZGVsZWdhdGVzIHRvIGBnZW5JZERlZmF1bHRgLlxuXHQgKiBAcGFyYW0gY29sbGVjdGlvbiAtIGNvbGxlY3Rpb24gb2YgaXRlbXMgd2l0aCBgaWRgIGtleSBwcm9wZXJ0eVxuXHQgKi9cblx0cHJvdGVjdGVkIGdlbklkPFQgZXh0ZW5kcyB7IGlkOiBhbnkgfT4oY29sbGVjdGlvbjogVFtdLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRjb25zdCBnZW5JZCA9IHRoaXMuYmluZCgnZ2VuSWQnKTtcblx0XHRpZiAoZ2VuSWQpIHtcblx0XHRcdGNvbnN0IGlkID0gZ2VuSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcblx0XHRcdGlmIChpZCAhPSB1bmRlZmluZWQpIHsgcmV0dXJuIGlkOyB9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmdlbklkRGVmYXVsdChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XG5cdH1cblxuXHQvKipcblx0ICogRGVmYXVsdCBnZW5lcmF0b3Igb2YgdGhlIG5leHQgYXZhaWxhYmxlIGlkIGZvciBpdGVtIGluIHRoaXMgY29sbGVjdGlvblxuXHQgKiBUaGlzIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gd29ya3Mgb25seSBmb3IgbnVtZXJpYyBpZHMuXG5cdCAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gY29sbGVjdGlvbiBvZiBpdGVtcyB3aXRoIGBpZGAga2V5IHByb3BlcnR5XG5cdCAqIEBwYXJhbSBjb2xsZWN0aW9uTmFtZSAtIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cblx0ICovXG5cdHByb3RlY3RlZCBnZW5JZERlZmF1bHQ8VCBleHRlbmRzIHsgaWQ6IGFueSB9Pihjb2xsZWN0aW9uOiBUW10sIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBhbnkge1xuXHRcdGlmICghdGhpcy5pc0NvbGxlY3Rpb25JZE51bWVyaWMoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdGBDb2xsZWN0aW9uICcke2NvbGxlY3Rpb25OYW1lfScgaWQgdHlwZSBpcyBub24tbnVtZXJpYyBvciB1bmtub3duLiBDYW4gb25seSBnZW5lcmF0ZSBudW1lcmljIGlkcy5gKTtcblx0XHR9XG5cblx0XHRsZXQgbWF4SWQgPSAwO1xuXHRcdGNvbGxlY3Rpb24ucmVkdWNlKChwcmV2OiBhbnksIGl0ZW06IGFueSkgPT4ge1xuXHRcdFx0bWF4SWQgPSBNYXRoLm1heChtYXhJZCwgdHlwZW9mIGl0ZW0uaWQgPT09ICdudW1iZXInID8gaXRlbS5pZCA6IG1heElkKTtcblx0XHR9LCB1bmRlZmluZWQpO1xuXHRcdHJldHVybiBtYXhJZCArIDE7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0KHsgY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMsIGlkLCBxdWVyeSwgdXJsIH06IFJlcXVlc3RJbmZvKTogUmVzcG9uc2VPcHRpb25zIHtcblx0XHRsZXQgZGF0YSA9IGNvbGxlY3Rpb247XG5cblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuXHRcdGlmIChpZCAhPSB1bmRlZmluZWQgJiYgaWQgIT09ICcnKSB7XG5cdFx0XHRkYXRhID0gdGhpcy5maW5kQnlJZChjb2xsZWN0aW9uLCBpZCk7XG5cdFx0fSBlbHNlIGlmIChxdWVyeSkge1xuXHRcdFx0ZGF0YSA9IHRoaXMuYXBwbHlRdWVyeShjb2xsZWN0aW9uLCBxdWVyeSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFkYXRhKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIGAnJHtjb2xsZWN0aW9uTmFtZX0nIHdpdGggaWQ9JyR7aWR9JyBub3QgZm91bmRgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGJvZHk6IHRoaXMuYm9kaWZ5KHRoaXMuY2xvbmUoZGF0YSkpLFxuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcblx0XHRcdHN0YXR1czogU1RBVFVTLk9LXG5cdFx0fTtcblx0fVxuXG5cdC8qKiBHZXQgSlNPTiBib2R5IGZyb20gdGhlIHJlcXVlc3Qgb2JqZWN0ICovXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRKc29uQm9keShyZXE6IGFueSk6IGFueTtcblxuXHQvKipcblx0ICogR2V0IGxvY2F0aW9uIGluZm8gZnJvbSBhIHVybCwgZXZlbiBvbiBzZXJ2ZXIgd2hlcmUgYGRvY3VtZW50YCBpcyBub3QgZGVmaW5lZFxuXHQgKi9cblx0cHJvdGVjdGVkIGdldExvY2F0aW9uKHVybDogc3RyaW5nKTogVXJpSW5mbyB7XG5cdFx0aWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG5cdFx0XHQvLyBnZXQgdGhlIGRvY3VtZW50IGlmZiBydW5uaW5nIGluIGJyb3dzZXJcblx0XHRcdGNvbnN0IGRvYzogRG9jdW1lbnQgPSAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcblx0XHRcdC8vIGFkZCBob3N0IGluZm8gdG8gdXJsIGJlZm9yZSBwYXJzaW5nLiAgVXNlIGEgZmFrZSBob3N0IHdoZW4gbm90IGluIGJyb3dzZXIuXG5cdFx0XHRjb25zdCBiYXNlID0gZG9jID8gZG9jLmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGRvYy5sb2NhdGlvbi5ob3N0IDogJ2h0dHA6Ly9mYWtlJztcblx0XHRcdHVybCA9IHVybC5zdGFydHNXaXRoKCcvJykgPyBiYXNlICsgdXJsIDogYmFzZSArICcvJyArIHVybDtcblx0XHR9XG5cdFx0cmV0dXJuIHBhcnNlVXJpKHVybCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIGdldCBvciBjcmVhdGUgdGhlIGZ1bmN0aW9uIHRoYXQgcGFzc2VzIHVuaGFuZGxlZCByZXF1ZXN0c1xuXHQgKiB0aHJvdWdoIHRvIHRoZSBcInJlYWxcIiBiYWNrZW5kLlxuXHQgKi9cblx0cHJvdGVjdGVkIGdldFBhc3NUaHJ1QmFja2VuZCgpOiBQYXNzVGhydUJhY2tlbmQge1xuXHRcdHJldHVybiB0aGlzLnBhc3NUaHJ1QmFja2VuZCA/XG5cdFx0XHR0aGlzLnBhc3NUaHJ1QmFja2VuZCA6XG5cdFx0XHR0aGlzLnBhc3NUaHJ1QmFja2VuZCA9IHRoaXMuY3JlYXRlUGFzc1RocnVCYWNrZW5kKCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHV0aWxpdHkgbWV0aG9kcyBmcm9tIHRoaXMgc2VydmljZSBpbnN0YW5jZS5cblx0ICogVXNlZnVsIHdpdGhpbiBhbiBIVFRQIG1ldGhvZCBvdmVycmlkZVxuXHQgKi9cblx0cHJvdGVjdGVkIGdldFJlcXVlc3RJbmZvVXRpbHMoKTogUmVxdWVzdEluZm9VdGlsaXRpZXMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjcmVhdGVSZXNwb25zZSQ6IHRoaXMuY3JlYXRlUmVzcG9uc2UkLmJpbmQodGhpcyksXG5cdFx0XHRmaW5kQnlJZDogdGhpcy5maW5kQnlJZC5iaW5kKHRoaXMpLFxuXHRcdFx0aXNDb2xsZWN0aW9uSWROdW1lcmljOiB0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYy5iaW5kKHRoaXMpLFxuXHRcdFx0Z2V0Q29uZmlnOiAoKSA9PiB0aGlzLmNvbmZpZyxcblx0XHRcdGdldERiOiAoKSA9PiB0aGlzLmRiLFxuXHRcdFx0Z2V0SnNvbkJvZHk6IHRoaXMuZ2V0SnNvbkJvZHkuYmluZCh0aGlzKSxcblx0XHRcdGdldExvY2F0aW9uOiB0aGlzLmdldExvY2F0aW9uLmJpbmQodGhpcyksXG5cdFx0XHRnZXRQYXNzVGhydUJhY2tlbmQ6IHRoaXMuZ2V0UGFzc1RocnVCYWNrZW5kLmJpbmQodGhpcyksXG5cdFx0XHRwYXJzZVJlcXVlc3RVcmw6IHRoaXMucGFyc2VSZXF1ZXN0VXJsLmJpbmQodGhpcyksXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiByZXR1cm4gY2Fub25pY2FsIEhUVFAgbWV0aG9kIG5hbWUgKGxvd2VyY2FzZSkgZnJvbSB0aGUgcmVxdWVzdCBvYmplY3Rcblx0ICogZS5nLiAocmVxLm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKTtcblx0ICogQHBhcmFtIHJlcSAtIHJlcXVlc3Qgb2JqZWN0IGZyb20gdGhlIGh0dHAgY2FsbFxuXHQgKlxuXHQgKi9cblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldFJlcXVlc3RNZXRob2QocmVxOiBhbnkpOiBzdHJpbmc7XG5cblx0cHJvdGVjdGVkIGluZGV4T2YoY29sbGVjdGlvbjogYW55W10sIGlkOiBudW1iZXIpIHtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5maW5kSW5kZXgoKGl0ZW06IGFueSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuXHR9XG5cblx0LyoqIFBhcnNlIHRoZSBpZCBhcyBhIG51bWJlci4gUmV0dXJuIG9yaWdpbmFsIHZhbHVlIGlmIG5vdCBhIG51bWJlci4gKi9cblx0cHJvdGVjdGVkIHBhcnNlSWQoY29sbGVjdGlvbjogYW55W10sIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiBhbnkge1xuXHRcdGlmICghdGhpcy5pc0NvbGxlY3Rpb25JZE51bWVyaWMoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpKSB7XG5cdFx0XHQvLyBDYW4ndCBjb25maXJtIHRoYXQgYGlkYCBpcyBhIG51bWVyaWMgdHlwZTsgZG9uJ3QgcGFyc2UgYXMgYSBudW1iZXJcblx0XHRcdC8vIG9yIGVsc2UgYCc0MidgIC0+IGA0MmAgYW5kIF9nZXQgYnkgaWRfIGZhaWxzLlxuXHRcdFx0cmV0dXJuIGlkO1xuXHRcdH1cblx0XHRjb25zdCBpZE51bSA9IHBhcnNlRmxvYXQoaWQpO1xuXHRcdHJldHVybiBpc05hTihpZE51bSkgPyBpZCA6IGlkTnVtO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJldHVybiB0cnVlIGlmIGNhbiBkZXRlcm1pbmUgdGhhdCB0aGUgY29sbGVjdGlvbidzIGBpdGVtLmlkYCBpcyBhIG51bWJlclxuXHQgKiBUaGlzIGltcGxlbWVudGF0aW9uIGNhbid0IHRlbGwgaWYgdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkgc28gaXQgYXNzdW1lcyBOT1xuXHQgKiAqL1xuXHRwcm90ZWN0ZWQgaXNDb2xsZWN0aW9uSWROdW1lcmljPFQgZXh0ZW5kcyB7IGlkOiBhbnkgfT4oY29sbGVjdGlvbjogVFtdLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0Ly8gY29sbGVjdGlvbk5hbWUgbm90IHVzZWQgbm93IGJ1dCBvdmVycmlkZSBtaWdodCBtYWludGFpbiBjb2xsZWN0aW9uIHR5cGUgaW5mb3JtYXRpb25cblx0XHQvLyBzbyB0aGF0IGl0IGNvdWxkIGtub3cgdGhlIHR5cGUgb2YgdGhlIGBpZGAgZXZlbiB3aGVuIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5LlxuXHRcdC8vIHJldHVybiAhIShjb2xsZWN0aW9uICYmIGNvbGxlY3Rpb25bMF0pICYmIHR5cGVvZiBjb2xsZWN0aW9uWzBdLmlkID09PSAnbnVtYmVyJztcblx0XHRyZXR1cm4gISEoY29sbGVjdGlvbiAmJiBjb2xsZWN0aW9uWzBdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXJzZXMgdGhlIHJlcXVlc3QgVVJMIGludG8gYSBgUGFyc2VkUmVxdWVzdFVybGAgb2JqZWN0LlxuXHQgKiBQYXJzaW5nIGRlcGVuZHMgdXBvbiBjZXJ0YWluIHZhbHVlcyBvZiBgY29uZmlnYDogYGFwaUJhc2VgLCBgaG9zdGAsIGFuZCBgdXJsUm9vdGAuXG5cdCAqXG5cdCAqIENvbmZpZ3VyaW5nIHRoZSBgYXBpQmFzZWAgeWllbGRzIHRoZSBtb3N0IGludGVyZXN0aW5nIGNoYW5nZXMgdG8gYHBhcnNlUmVxdWVzdFVybGAgYmVoYXZpb3I6XG5cdCAqICAgV2hlbiBhcGlCYXNlPXVuZGVmaW5lZCBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L2FwaS9jb2xsZWN0aW9uLzQyJ1xuXHQgKiAgICAge2Jhc2U6ICdhcGkvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6ICc0MicsIC4uLn1cblx0ICogICBXaGVuIGFwaUJhc2U9J3NvbWUvYXBpL3Jvb3QvJyBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L3NvbWUvYXBpL3Jvb3QvY29sbGVjdGlvbidcblx0ICogICAgIHtiYXNlOiAnc29tZS9hcGkvcm9vdC8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogdW5kZWZpbmVkLCAuLi59XG5cdCAqICAgV2hlbiBhcGlCYXNlPScvJyBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L2NvbGxlY3Rpb24nXG5cdCAqICAgICB7YmFzZTogJy8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogdW5kZWZpbmVkLCAuLi59XG5cdCAqXG5cdCAqIFRoZSBhY3R1YWwgYXBpIGJhc2Ugc2VnbWVudCB2YWx1ZXMgYXJlIGlnbm9yZWQuIE9ubHkgdGhlIG51bWJlciBvZiBzZWdtZW50cyBtYXR0ZXJzLlxuXHQgKiBUaGUgZm9sbG93aW5nIGFwaSBiYXNlIHN0cmluZ3MgYXJlIGNvbnNpZGVyZWQgaWRlbnRpY2FsOiAnYS9iJyB+ICdzb21lL2FwaS8nIH4gYHR3by9zZWdtZW50cydcblx0ICpcblx0ICogVG8gcmVwbGFjZSB0aGlzIGRlZmF1bHQgbWV0aG9kLCBhc3NpZ24geW91ciBhbHRlcm5hdGl2ZSB0byB5b3VyIEluTWVtRGJTZXJ2aWNlWydwYXJzZVJlcXVlc3RVcmwnXVxuXHQgKi9cblx0cHJvdGVjdGVkIHBhcnNlUmVxdWVzdFVybCh1cmw6IHN0cmluZyk6IFBhcnNlZFJlcXVlc3RVcmwge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBsb2MgPSB0aGlzLmdldExvY2F0aW9uKHVybCk7XG5cdFx0XHRsZXQgZHJvcCA9IHRoaXMuY29uZmlnLnJvb3RQYXRoLmxlbmd0aDtcblx0XHRcdGxldCB1cmxSb290ID0gJyc7XG5cdFx0XHRpZiAobG9jLmhvc3QgIT09IHRoaXMuY29uZmlnLmhvc3QpIHtcblx0XHRcdFx0Ly8gdXJsIGZvciBhIHNlcnZlciBvbiBhIGRpZmZlcmVudCBob3N0IVxuXHRcdFx0XHQvLyBhc3N1bWUgaXQncyBjb2xsZWN0aW9uIGlzIGFjdHVhbGx5IGhlcmUgdG9vLlxuXHRcdFx0XHRkcm9wID0gMTsgLy8gdGhlIGxlYWRpbmcgc2xhc2hcblx0XHRcdFx0dXJsUm9vdCA9IGxvYy5wcm90b2NvbCArICcvLycgKyBsb2MuaG9zdCArICcvJztcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhdGggPSBsb2MucGF0aC5zdWJzdHJpbmcoZHJvcCk7XG5cdFx0XHRjb25zdCBwYXRoU2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJyk7XG5cdFx0XHRsZXQgc2VnbWVudEl4ID0gMDtcblxuXHRcdFx0Ly8gYXBpQmFzZTogdGhlIGZyb250IHBhcnQgb2YgdGhlIHBhdGggZGV2b3RlZCB0byBnZXR0aW5nIHRvIHRoZSBhcGkgcm91dGVcblx0XHRcdC8vIEFzc3VtZXMgZmlyc3QgcGF0aCBzZWdtZW50IGlmIG5vIGNvbmZpZy5hcGlCYXNlXG5cdFx0XHQvLyBlbHNlIGlnbm9yZXMgYXMgbWFueSBwYXRoIHNlZ21lbnRzIGFzIGFyZSBpbiBjb25maWcuYXBpQmFzZVxuXHRcdFx0Ly8gRG9lcyBOT1QgY2FyZSB3aGF0IHRoZSBhcGkgYmFzZSBjaGFycyBhY3R1YWxseSBhcmUuXG5cdFx0XHRsZXQgYXBpQmFzZTogc3RyaW5nO1xuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5hcGlCYXNlID09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRhcGlCYXNlID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFwaUJhc2UgPSByZW1vdmVUcmFpbGluZ1NsYXNoKHRoaXMuY29uZmlnLmFwaUJhc2UudHJpbSgpKTtcblx0XHRcdFx0aWYgKGFwaUJhc2UpIHtcblx0XHRcdFx0XHRzZWdtZW50SXggPSBhcGlCYXNlLnNwbGl0KCcvJykubGVuZ3RoO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNlZ21lbnRJeCA9IDA7IC8vIG5vIGFwaSBiYXNlIGF0IGFsbDsgdW53aXNlIGJ1dCBhbGxvd2VkLlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRhcGlCYXNlICs9ICcvJztcblxuXHRcdFx0bGV0IGNvbGxlY3Rpb25OYW1lID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcblx0XHRcdC8vIGlnbm9yZSBhbnl0aGluZyBhZnRlciBhICcuJyAoZS5nLix0aGUgXCJqc29uXCIgaW4gXCJjdXN0b21lcnMuanNvblwiKVxuXHRcdFx0Y29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZSAmJiBjb2xsZWN0aW9uTmFtZS5zcGxpdCgnLicpWzBdO1xuXG5cdFx0XHRjb25zdCBpZCA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG5cdFx0XHRjb25zdCBxdWVyeSA9IHRoaXMuY3JlYXRlUXVlcnlNYXAobG9jLnF1ZXJ5KTtcblx0XHRcdGNvbnN0IHJlc291cmNlVXJsID0gdXJsUm9vdCArIGFwaUJhc2UgKyBjb2xsZWN0aW9uTmFtZSArICcvJztcblx0XHRcdHJldHVybiB7IGFwaUJhc2UsIGNvbGxlY3Rpb25OYW1lLCBpZCwgcXVlcnksIHJlc291cmNlVXJsIH07XG5cblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnN0IG1zZyA9IGB1bmFibGUgdG8gcGFyc2UgdXJsICcke3VybH0nOyBvcmlnaW5hbCBlcnJvcjogJHtlcnIubWVzc2FnZX1gO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKG1zZyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ3JlYXRlIGVudGl0eVxuXHQvLyBDYW4gdXBkYXRlIGFuIGV4aXN0aW5nIGVudGl0eSB0b28gaWYgcG9zdDQwOSBpcyBmYWxzZS5cblx0cHJvdGVjdGVkIHBvc3QoeyBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaGVhZGVycywgaWQsIHJlcSwgcmVzb3VyY2VVcmwsIHVybCB9OiBSZXF1ZXN0SW5mbyk6IFJlc3BvbnNlT3B0aW9ucyB7XG5cdFx0Y29uc3QgaXRlbSA9IHRoaXMuY2xvbmUodGhpcy5nZXRKc29uQm9keShyZXEpKTtcblxuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG5cdFx0aWYgKGl0ZW0uaWQgPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpdGVtLmlkID0gaWQgfHwgdGhpcy5nZW5JZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0Y29uc3QgZW1zZzogc3RyaW5nID0gZXJyLm1lc3NhZ2UgfHwgJyc7XG5cdFx0XHRcdGlmICgvaWQgdHlwZSBpcyBub24tbnVtZXJpYy8udGVzdChlbXNnKSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLlVOUFJPQ0VTU0FCTEVfRU5UUlksIGVtc2cpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG5cdFx0XHRcdFx0XHRgRmFpbGVkIHRvIGdlbmVyYXRlIG5ldyBpZCBmb3IgJyR7Y29sbGVjdGlvbk5hbWV9J2ApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5CQURfUkVRVUVTVCwgYFJlcXVlc3QgaWQgZG9lcyBub3QgbWF0Y2ggaXRlbS5pZGApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZCA9IGl0ZW0uaWQ7XG5cdFx0fVxuXHRcdGNvbnN0IGV4aXN0aW5nSXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuXHRcdGNvbnN0IGJvZHkgPSB0aGlzLmJvZGlmeShpdGVtKTtcblxuXHRcdGlmIChleGlzdGluZ0l4ID09PSAtMSkge1xuXHRcdFx0Y29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xuXHRcdFx0aGVhZGVycy5zZXQoJ0xvY2F0aW9uJywgcmVzb3VyY2VVcmwgKyAnLycgKyBpZCk7XG5cdFx0XHRyZXR1cm4geyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVUy5DUkVBVEVEIH07XG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvbmZpZy5wb3N0NDA5KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5DT05GTElDVCxcblx0XHRcdFx0YCcke2NvbGxlY3Rpb25OYW1lfScgaXRlbSB3aXRoIGlkPScke2lkfSBleGlzdHMgYW5kIG1heSBub3QgYmUgdXBkYXRlZCB3aXRoIFBPU1Q7IHVzZSBQVVQgaW5zdGVhZC5gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29sbGVjdGlvbltleGlzdGluZ0l4XSA9IGl0ZW07XG5cdFx0XHRyZXR1cm4gdGhpcy5jb25maWcucG9zdDIwNCA/XG5cdFx0XHRcdHsgaGVhZGVycywgc3RhdHVzOiBTVEFUVVMuTk9fQ09OVEVOVCB9IDogLy8gc3VjY2Vzc2Z1bDsgbm8gY29udGVudFxuXHRcdFx0XHR7IGhlYWRlcnMsIGJvZHksIHN0YXR1czogU1RBVFVTLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcblx0XHR9XG5cdH1cblxuXHQvLyBVcGRhdGUgZXhpc3RpbmcgZW50aXR5XG5cdC8vIENhbiBjcmVhdGUgYW4gZW50aXR5IHRvbyBpZiBwdXQ0MDQgaXMgZmFsc2UuXG5cdHByb3RlY3RlZCBwdXQoeyBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaGVhZGVycywgaWQsIHJlcSwgdXJsIH06IFJlcXVlc3RJbmZvKTogUmVzcG9uc2VPcHRpb25zIHtcblx0XHRjb25zdCBpdGVtID0gdGhpcy5jbG9uZSh0aGlzLmdldEpzb25Cb2R5KHJlcSkpO1xuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG5cdFx0aWYgKGl0ZW0uaWQgPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIGBNaXNzaW5nICcke2NvbGxlY3Rpb25OYW1lfScgaWRgKTtcblx0XHR9XG5cdFx0aWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5CQURfUkVRVUVTVCxcblx0XHRcdFx0YFJlcXVlc3QgZm9yICcke2NvbGxlY3Rpb25OYW1lfScgaWQgZG9lcyBub3QgbWF0Y2ggaXRlbS5pZGApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZCA9IGl0ZW0uaWQ7XG5cdFx0fVxuXHRcdGNvbnN0IGV4aXN0aW5nSXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuXHRcdGNvbnN0IGJvZHkgPSB0aGlzLmJvZGlmeShpdGVtKTtcblxuXHRcdGlmIChleGlzdGluZ0l4ID4gLTEpIHtcblx0XHRcdGNvbGxlY3Rpb25bZXhpc3RpbmdJeF0gPSBpdGVtO1xuXHRcdFx0cmV0dXJuIHRoaXMuY29uZmlnLnB1dDIwNCA/XG5cdFx0XHRcdHsgaGVhZGVycywgc3RhdHVzOiBTVEFUVVMuTk9fQ09OVEVOVCB9IDogLy8gc3VjY2Vzc2Z1bDsgbm8gY29udGVudFxuXHRcdFx0XHR7IGhlYWRlcnMsIGJvZHksIHN0YXR1czogU1RBVFVTLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcblx0XHR9IGVsc2UgaWYgKHRoaXMuY29uZmlnLnB1dDQwNCkge1xuXHRcdFx0Ly8gaXRlbSB0byB1cGRhdGUgbm90IGZvdW5kOyB1c2UgUE9TVCB0byBjcmVhdGUgbmV3IGl0ZW0gZm9yIHRoaXMgaWQuXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsXG5cdFx0XHRcdGAnJHtjb2xsZWN0aW9uTmFtZX0nIGl0ZW0gd2l0aCBpZD0nJHtpZH0gbm90IGZvdW5kIGFuZCBtYXkgbm90IGJlIGNyZWF0ZWQgd2l0aCBQVVQ7IHVzZSBQT1NUIGluc3RlYWQuYCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGNyZWF0ZSBuZXcgaXRlbSBmb3IgaWQgbm90IGZvdW5kXG5cdFx0XHRjb2xsZWN0aW9uLnB1c2goaXRlbSk7XG5cdFx0XHRyZXR1cm4geyBoZWFkZXJzLCBib2R5LCBzdGF0dXM6IFNUQVRVUy5DUkVBVEVEIH07XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIHJlbW92ZUJ5SWQoY29sbGVjdGlvbjogYW55W10sIGlkOiBudW1iZXIpIHtcblx0XHRjb25zdCBpeCA9IHRoaXMuaW5kZXhPZihjb2xsZWN0aW9uLCBpZCk7XG5cdFx0aWYgKGl4ID4gLTEpIHtcblx0XHRcdGNvbGxlY3Rpb24uc3BsaWNlKGl4LCAxKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogVGVsbCB5b3VyIGluLW1lbSBcImRhdGFiYXNlXCIgdG8gcmVzZXQuXG5cdCAqIHJldHVybnMgT2JzZXJ2YWJsZSBvZiB0aGUgZGF0YWJhc2UgYmVjYXVzZSByZXNldHRpbmcgaXQgY291bGQgYmUgYXN5bmNcblx0ICovXG5cdHByb3RlY3RlZCByZXNldERiKHJlcUluZm8/OiBSZXF1ZXN0SW5mbyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHRoaXMuZGJSZWFkeVN1YmplY3QubmV4dChmYWxzZSk7XG5cdFx0Y29uc3QgZGIgPSB0aGlzLmRhdGFTZXJ2aWNlLmNyZWF0ZURiKHJlcUluZm8pO1xuXHRcdGNvbnN0IGRiJCA9IGRiIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSA/IGRiIDpcblx0XHRcdHR5cGVvZiAoZGIgYXMgYW55KS50aGVuID09PSAnZnVuY3Rpb24nID8gZnJvbShkYiBhcyBQcm9taXNlPGFueT4pIDpcblx0XHRcdFx0b2YoZGIpO1xuXHRcdGRiJC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgoZDoge30pID0+IHtcblx0XHRcdHRoaXMuZGIgPSBkO1xuXHRcdFx0dGhpcy5kYlJlYWR5U3ViamVjdC5uZXh0KHRydWUpO1xuXHRcdH0pO1xuXHRcdHJldHVybiB0aGlzLmRiUmVhZHk7XG5cdH1cblxufVxuIl19