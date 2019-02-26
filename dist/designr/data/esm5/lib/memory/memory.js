/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 *  Minimum definition needed by base class
 * @record
 */
export function HeadersCore() { }
if (false) {
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    HeadersCore.prototype.set = function (name, value) { };
}
/**
 * Interface for a class that creates an in-memory database
 *
 * Its `createDb` method creates a hash of named collections that represents the database
 *
 * For maximum flexibility, the service may define HTTP method overrides.
 * Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
 * If a request has a matching method, it will be called as in
 * `get(info: requestInfo, db: {})` where `db` is the database object described above.
 * @abstract
 */
var /**
 * Interface for a class that creates an in-memory database
 *
 * Its `createDb` method creates a hash of named collections that represents the database
 *
 * For maximum flexibility, the service may define HTTP method overrides.
 * Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
 * If a request has a matching method, it will be called as in
 * `get(info: requestInfo, db: {})` where `db` is the database object described above.
 * @abstract
 */
MemoryDataService = /** @class */ (function () {
    function MemoryDataService() {
    }
    return MemoryDataService;
}());
/**
 * Interface for a class that creates an in-memory database
 *
 * Its `createDb` method creates a hash of named collections that represents the database
 *
 * For maximum flexibility, the service may define HTTP method overrides.
 * Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
 * If a request has a matching method, it will be called as in
 * `get(info: requestInfo, db: {})` where `db` is the database object described above.
 * @abstract
 */
export { MemoryDataService };
if (false) {
    /**
     * Creates an in-memory "database" hash whose keys are collection names
     * and whose values are arrays of collection objects to return or update.
     *
     * returns Observable of the database because could have to create it asynchronously.
     *
     * This method must be safe to call repeatedly.
     * Each time it should return a new object with new arrays containing new item objects.
     * This condition allows the in-memory backend service to mutate the collections
     * and their items without touching the original source data.
     *
     * The in-mem backend service calls this method without a value the first time.
     * The service calls it with the `RequestInfo` when it receives a POST `commands/resetDb` request.
     * Your MemoryDataService can adjust its behavior accordingly.
     * @abstract
     * @param {?=} reqInfo
     * @return {?}
     */
    MemoryDataService.prototype.createDb = function (reqInfo) { };
}
/////////////////////////////////
/**
 *  MemoryBackendConfig configuration options
 *  Usage:
 *    MemoryModule.forRoot(InMemHeroService, {delay: 600})
 *
 *  or if providing separately:
 *    provide(MemoryBackendConfig, {useValue: {delay: 600}}),
 */
var MemoryBackendConfig = /** @class */ (function () {
    function MemoryBackendConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, {
            // default config:
            caseSensitiveSearch: false,
            dataEncapsulation: false,
            // do NOT wrap content within an object with a `data` property
            delay: 500,
            // simulate latency by delaying response
            delete404: false,
            // don't complain if can't find entity to delete
            passThruUnknownUrl: false,
            // 404 if can't process URL
            post204: true,
            // don't return the item after a POST
            post409: false,
            // don't update existing item with that ID
            put204: true,
            // don't return the item after a PUT
            put404: false,
            // create new item if PUT item with that ID not found
            apiBase: undefined,
            // assumed to be the first path segment
            host: undefined,
            // default value is actually set in MemoryBackendConfig ctor
            rootPath: undefined // default value is actually set in MemoryBackendConfig ctor
        }, config);
    }
    MemoryBackendConfig.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MemoryBackendConfig.ctorParameters = function () { return [
        { type: MemoryBackendConfig }
    ]; };
    return MemoryBackendConfig;
}());
export { MemoryBackendConfig };
if (false) {
    /**
     * The base path to the api, e.g, 'api/'.
     * If not specified than `parseRequestUrl` assumes it is the first path segment in the request.
     * @type {?}
     */
    MemoryBackendConfig.prototype.apiBase;
    /**
     * false (default) if search match should be case insensitive
     * @type {?}
     */
    MemoryBackendConfig.prototype.caseSensitiveSearch;
    /**
     * false (default) put content directly inside the response body.
     * true: encapsulate content in a `data` property inside the response body, `{ data: ... }`.
     * @type {?}
     */
    MemoryBackendConfig.prototype.dataEncapsulation;
    /**
     * delay (in ms) to simulate latency
     * @type {?}
     */
    MemoryBackendConfig.prototype.delay;
    /**
     * false (default) should 204 when object-to-delete not found; true: 404
     * @type {?}
     */
    MemoryBackendConfig.prototype.delete404;
    /**
     * host for this service, e.g., 'localhost'
     * @type {?}
     */
    MemoryBackendConfig.prototype.host;
    /**
     * false (default) should pass unrecognized request URL through to original backend; true: 404
     * @type {?}
     */
    MemoryBackendConfig.prototype.passThruUnknownUrl;
    /**
     * true (default) should NOT return the item (204) after a POST. false: return the item (200).
     * @type {?}
     */
    MemoryBackendConfig.prototype.post204;
    /**
     * false (default) should NOT update existing item with POST. false: OK to update.
     * @type {?}
     */
    MemoryBackendConfig.prototype.post409;
    /**
     * true (default) should NOT return the item (204) after a POST. false: return the item (200).
     * @type {?}
     */
    MemoryBackendConfig.prototype.put204;
    /**
     * false (default) if item not found, create as new item; false: should 404.
     * @type {?}
     */
    MemoryBackendConfig.prototype.put404;
    /**
     * root path _before_ any API call, e.g., ''
     * @type {?}
     */
    MemoryBackendConfig.prototype.rootPath;
}
/**
 * Return information (UriInfo) about a URI
 * @param {?} str
 * @return {?}
 */
export function parseUri(str) {
    // Adapted from parseuri package - http://blog.stevenlevithan.com/archives/parseuri
    // tslint:disable-next-line:max-line-length
    /** @type {?} */
    var URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    /** @type {?} */
    var m = URL_REGEX.exec(str);
    /** @type {?} */
    var uri = {
        source: '',
        protocol: '',
        authority: '',
        userInfo: '',
        user: '',
        password: '',
        host: '',
        port: '',
        relative: '',
        path: '',
        directory: '',
        file: '',
        query: '',
        anchor: ''
    };
    /** @type {?} */
    var keys = Object.keys(uri);
    /** @type {?} */
    var i = keys.length;
    while (i--) {
        uri[keys[i]] = m[i] || '';
    }
    return uri;
}
/**
 *
 * Interface for the result of the `parseRequestUrl` method:
 *   Given URL "http://localhost:8080/api/customers/42?foo=1 the default implementation returns
 *     base: 'api/'
 *     collectionName: 'customers'
 *     id: '42'
 *     query: this.createQuery('foo=1')
 *     resourceUrl: 'http://localhost/api/customers/'
 * @record
 */
export function ParsedRequestUrl() { }
if (false) {
    /** @type {?} */
    ParsedRequestUrl.prototype.apiBase;
    /** @type {?} */
    ParsedRequestUrl.prototype.collectionName;
    /** @type {?} */
    ParsedRequestUrl.prototype.id;
    /** @type {?} */
    ParsedRequestUrl.prototype.query;
    /** @type {?} */
    ParsedRequestUrl.prototype.resourceUrl;
}
/**
 * @record
 */
export function PassThruBackend() { }
if (false) {
    /**
     * Handle an HTTP request and return an Observable of HTTP response
     * Both the request type and the response type are determined by the supporting HTTP library.
     * @param {?} req
     * @return {?}
     */
    PassThruBackend.prototype.handle = function (req) { };
}
/**
 * @param {?} path
 * @return {?}
 */
export function removeTrailingSlash(path) {
    return path.replace(/\/$/, '');
}
/**
 *  Minimum definition needed by base class
 * @record
 */
export function RequestCore() { }
if (false) {
    /** @type {?} */
    RequestCore.prototype.url;
    /** @type {?|undefined} */
    RequestCore.prototype.urlWithParams;
}
/**
 * Interface for object w/ info about the current request url
 * extracted from an Http Request.
 * Also holds utility methods and configuration data from this service
 * @record
 */
export function RequestInfo() { }
if (false) {
    /** @type {?} */
    RequestInfo.prototype.request;
    /** @type {?} */
    RequestInfo.prototype.apiBase;
    /** @type {?} */
    RequestInfo.prototype.collectionName;
    /** @type {?} */
    RequestInfo.prototype.collection;
    /** @type {?} */
    RequestInfo.prototype.headers;
    /** @type {?} */
    RequestInfo.prototype.method;
    /** @type {?} */
    RequestInfo.prototype.id;
    /** @type {?} */
    RequestInfo.prototype.query;
    /** @type {?} */
    RequestInfo.prototype.resourceUrl;
    /** @type {?} */
    RequestInfo.prototype.url;
    /** @type {?} */
    RequestInfo.prototype.utils;
}
/**
 * Interface for utility methods from this service instance.
 * Useful within an HTTP method override
 * @record
 */
export function RequestInfoUtilities() { }
if (false) {
    /**
     * Create a cold response Observable from a factory for ResponseOptions
     * the same way that the in-mem backend service does.
     * \@param resOptionsFactory - creates ResponseOptions when observable is subscribed
     * \@param withDelay - if true (default), add simulated latency delay from configuration
     * @type {?}
     */
    RequestInfoUtilities.prototype.createResponse$;
    /**
     * Find first instance of item in collection by `item.id`
     * @template T
     * @param {?} collection
     * @param {?} id
     * @return {?}
     */
    RequestInfoUtilities.prototype.findById = function (collection, id) { };
    /**
     * return the current, active configuration which is a blend of defaults and overrides
     * @return {?}
     */
    RequestInfoUtilities.prototype.getConfig = function () { };
    /**
     * Get the in-mem service's copy of the "database"
     * @return {?}
     */
    RequestInfoUtilities.prototype.getDb = function () { };
    /**
     * Get JSON body from the request object
     * @param {?} req
     * @return {?}
     */
    RequestInfoUtilities.prototype.getJsonBody = function (req) { };
    /**
     * Get location info from a url, even on server where `document` is not defined
     * @param {?} url
     * @return {?}
     */
    RequestInfoUtilities.prototype.getLocation = function (url) { };
    /**
     * Get (or create) the "real" backend
     * @return {?}
     */
    RequestInfoUtilities.prototype.getPassThruBackend = function () { };
    /**
     * return true if can determine that the collection's `item.id` is a number
     *
     * @template T
     * @param {?} collection
     * @param {?} collectionName
     * @return {?}
     */
    RequestInfoUtilities.prototype.isCollectionIdNumeric = function (collection, collectionName) { };
    /**
     * Parses the request URL into a `ParsedRequestUrl` object.
     * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
     * @param {?} url
     * @return {?}
     */
    RequestInfoUtilities.prototype.parseRequestUrl = function (url) { };
}
/**
 * @record
 */
export function ResponseOptions() { }
if (false) {
    /**
     * String, Object, ArrayBuffer or Blob representing the body of the {\@link Response}.
     * @type {?|undefined}
     */
    ResponseOptions.prototype.body;
    /**
     * Response headers
     * @type {?|undefined}
     */
    ResponseOptions.prototype.headers;
    /**
     * Http {\@link http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html status code}
     * associated with the response.
     * @type {?|undefined}
     */
    ResponseOptions.prototype.status;
    /**
     * Status text for the status code
     * @type {?|undefined}
     */
    ResponseOptions.prototype.statusText;
    /**
     * request url
     * @type {?|undefined}
     */
    ResponseOptions.prototype.url;
}
/**
 * Interface of information about a Uri
 * @record
 */
export function UriInfo() { }
if (false) {
    /** @type {?} */
    UriInfo.prototype.source;
    /** @type {?} */
    UriInfo.prototype.protocol;
    /** @type {?} */
    UriInfo.prototype.authority;
    /** @type {?} */
    UriInfo.prototype.userInfo;
    /** @type {?} */
    UriInfo.prototype.user;
    /** @type {?} */
    UriInfo.prototype.password;
    /** @type {?} */
    UriInfo.prototype.host;
    /** @type {?} */
    UriInfo.prototype.port;
    /** @type {?} */
    UriInfo.prototype.relative;
    /** @type {?} */
    UriInfo.prototype.path;
    /** @type {?} */
    UriInfo.prototype.directory;
    /** @type {?} */
    UriInfo.prototype.file;
    /** @type {?} */
    UriInfo.prototype.query;
    /** @type {?} */
    UriInfo.prototype.anchor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvbWVtb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQU0zQyxpQ0FFQzs7Ozs7OztJQURBLHVEQUE2Qzs7Ozs7Ozs7Ozs7OztBQWE5Qzs7Ozs7Ozs7Ozs7O0lBQUE7SUFpQkEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFEQSw4REFBNEU7Ozs7Ozs7Ozs7O0FBWTdFO0lBcURDLDZCQUFZLE1BQWdDO1FBQWhDLHVCQUFBLEVBQUEsV0FBZ0M7UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7O1lBRW5CLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsaUJBQWlCLEVBQUUsS0FBSzs7WUFDeEIsS0FBSyxFQUFFLEdBQUc7O1lBQ1YsU0FBUyxFQUFFLEtBQUs7O1lBQ2hCLGtCQUFrQixFQUFFLEtBQUs7O1lBQ3pCLE9BQU8sRUFBRSxJQUFJOztZQUNiLE9BQU8sRUFBRSxLQUFLOztZQUNkLE1BQU0sRUFBRSxJQUFJOztZQUNaLE1BQU0sRUFBRSxLQUFLOztZQUNiLE9BQU8sRUFBRSxTQUFTOztZQUNsQixJQUFJLEVBQUUsU0FBUzs7WUFDZixRQUFRLEVBQUUsU0FBUyxDQUFDLDREQUE0RDtTQUNoRixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ1osQ0FBQzs7Z0JBckVELFVBQVU7Ozs7Z0JBcURVLG1CQUFtQjs7SUFpQnhDLDBCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0FyRVksbUJBQW1COzs7Ozs7O0lBSy9CLHNDQUFpQjs7Ozs7SUFJakIsa0RBQThCOzs7Ozs7SUFLOUIsZ0RBQTRCOzs7OztJQUk1QixvQ0FBZTs7Ozs7SUFJZix3Q0FBb0I7Ozs7O0lBSXBCLG1DQUFjOzs7OztJQUlkLGlEQUE2Qjs7Ozs7SUFJN0Isc0NBQWtCOzs7OztJQUlsQixzQ0FBa0I7Ozs7O0lBSWxCLHFDQUFpQjs7Ozs7SUFJakIscUNBQWlCOzs7OztJQUlqQix1Q0FBa0I7Ozs7Ozs7QUFzQm5CLE1BQU0sVUFBVSxRQUFRLENBQUMsR0FBVzs7OztRQUc3QixTQUFTLEdBQUcsa01BQWtNOztRQUM5TSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7O1FBQ3ZCLEdBQUcsR0FBWTtRQUNwQixNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUU7UUFDWixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUU7UUFDWixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxFQUFFO1FBQ2IsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsRUFBRTtRQUNULE1BQU0sRUFBRSxFQUFFO0tBQ1Y7O1FBQ0ssSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOztRQUN6QixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU07SUFDbkIsT0FBTyxDQUFDLEVBQUUsRUFBRTtRQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQUU7SUFDMUMsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDOzs7Ozs7Ozs7Ozs7QUFZRCxzQ0FNQzs7O0lBTEEsbUNBQWdCOztJQUNoQiwwQ0FBdUI7O0lBQ3ZCLDhCQUFXOztJQUNYLGlDQUE2Qjs7SUFDN0IsdUNBQW9COzs7OztBQUdyQixxQ0FNQzs7Ozs7Ozs7SUFEQSxzREFBa0M7Ozs7OztBQUduQyxNQUFNLFVBQVUsbUJBQW1CLENBQUMsSUFBWTtJQUMvQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7Ozs7O0FBS0QsaUNBR0M7OztJQUZBLDBCQUFZOztJQUNaLG9DQUF1Qjs7Ozs7Ozs7QUFReEIsaUNBWUM7OztJQVhBLDhCQUFxQjs7SUFDckIsOEJBQWdCOztJQUNoQixxQ0FBdUI7O0lBQ3ZCLGlDQUFnQjs7SUFDaEIsOEJBQXFCOztJQUNyQiw2QkFBZTs7SUFDZix5QkFBUTs7SUFDUiw0QkFBNkI7O0lBQzdCLGtDQUFvQjs7SUFDcEIsMEJBQVk7O0lBQ1osNEJBQTRCOzs7Ozs7O0FBTzdCLDBDQXlDQzs7Ozs7Ozs7O0lBbENBLCtDQUErRTs7Ozs7Ozs7SUFPL0Usd0VBQTZEOzs7OztJQUc3RCwyREFBaUM7Ozs7O0lBR2pDLHVEQUFZOzs7Ozs7SUFHWixnRUFBMkI7Ozs7OztJQUczQixnRUFBa0M7Ozs7O0lBR2xDLG9FQUFzQzs7Ozs7Ozs7O0lBS3RDLGlHQUErRjs7Ozs7OztJQU0vRixvRUFBK0M7Ozs7O0FBU2hELHFDQXlCQzs7Ozs7O0lBckJBLCtCQUE0Qzs7Ozs7SUFLNUMsa0NBQXNCOzs7Ozs7SUFNdEIsaUNBQWdCOzs7OztJQUtoQixxQ0FBb0I7Ozs7O0lBSXBCLDhCQUFhOzs7Ozs7QUFJZCw2QkFlQzs7O0lBZEEseUJBQWU7O0lBQ2YsMkJBQWlCOztJQUNqQiw0QkFBa0I7O0lBQ2xCLDJCQUFpQjs7SUFDakIsdUJBQWE7O0lBQ2IsMkJBQWlCOztJQUNqQix1QkFBYTs7SUFDYix1QkFBYTs7SUFDYiwyQkFBaUI7O0lBQ2pCLHVCQUFhOztJQUNiLDRCQUFrQjs7SUFDbEIsdUJBQWE7O0lBQ2Isd0JBQWM7O0lBQ2QseUJBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogIE1pbmltdW0gZGVmaW5pdGlvbiBuZWVkZWQgYnkgYmFzZSBjbGFzc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEhlYWRlcnNDb3JlIHtcblx0c2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQgfCBhbnk7XG59XG5cbi8qKlxuKiBJbnRlcmZhY2UgZm9yIGEgY2xhc3MgdGhhdCBjcmVhdGVzIGFuIGluLW1lbW9yeSBkYXRhYmFzZVxuKlxuKiBJdHMgYGNyZWF0ZURiYCBtZXRob2QgY3JlYXRlcyBhIGhhc2ggb2YgbmFtZWQgY29sbGVjdGlvbnMgdGhhdCByZXByZXNlbnRzIHRoZSBkYXRhYmFzZVxuKlxuKiBGb3IgbWF4aW11bSBmbGV4aWJpbGl0eSwgdGhlIHNlcnZpY2UgbWF5IGRlZmluZSBIVFRQIG1ldGhvZCBvdmVycmlkZXMuXG4qIFN1Y2ggbWV0aG9kcyBtdXN0IG1hdGNoIHRoZSBzcGVsbGluZyBvZiBhbiBIVFRQIG1ldGhvZCBpbiBsb3dlciBjYXNlIChlLmcsIFwiZ2V0XCIpLlxuKiBJZiBhIHJlcXVlc3QgaGFzIGEgbWF0Y2hpbmcgbWV0aG9kLCBpdCB3aWxsIGJlIGNhbGxlZCBhcyBpblxuKiBgZ2V0KGluZm86IHJlcXVlc3RJbmZvLCBkYjoge30pYCB3aGVyZSBgZGJgIGlzIHRoZSBkYXRhYmFzZSBvYmplY3QgZGVzY3JpYmVkIGFib3ZlLlxuKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZW1vcnlEYXRhU2VydmljZSB7XG5cdC8qKlxuXHQqIENyZWF0ZXMgYW4gaW4tbWVtb3J5IFwiZGF0YWJhc2VcIiBoYXNoIHdob3NlIGtleXMgYXJlIGNvbGxlY3Rpb24gbmFtZXNcblx0KiBhbmQgd2hvc2UgdmFsdWVzIGFyZSBhcnJheXMgb2YgY29sbGVjdGlvbiBvYmplY3RzIHRvIHJldHVybiBvciB1cGRhdGUuXG5cdCpcblx0KiByZXR1cm5zIE9ic2VydmFibGUgb2YgdGhlIGRhdGFiYXNlIGJlY2F1c2UgY291bGQgaGF2ZSB0byBjcmVhdGUgaXQgYXN5bmNocm9ub3VzbHkuXG5cdCpcblx0KiBUaGlzIG1ldGhvZCBtdXN0IGJlIHNhZmUgdG8gY2FsbCByZXBlYXRlZGx5LlxuXHQqIEVhY2ggdGltZSBpdCBzaG91bGQgcmV0dXJuIGEgbmV3IG9iamVjdCB3aXRoIG5ldyBhcnJheXMgY29udGFpbmluZyBuZXcgaXRlbSBvYmplY3RzLlxuXHQqIFRoaXMgY29uZGl0aW9uIGFsbG93cyB0aGUgaW4tbWVtb3J5IGJhY2tlbmQgc2VydmljZSB0byBtdXRhdGUgdGhlIGNvbGxlY3Rpb25zXG5cdCogYW5kIHRoZWlyIGl0ZW1zIHdpdGhvdXQgdG91Y2hpbmcgdGhlIG9yaWdpbmFsIHNvdXJjZSBkYXRhLlxuXHQqXG5cdCogVGhlIGluLW1lbSBiYWNrZW5kIHNlcnZpY2UgY2FsbHMgdGhpcyBtZXRob2Qgd2l0aG91dCBhIHZhbHVlIHRoZSBmaXJzdCB0aW1lLlxuXHQqIFRoZSBzZXJ2aWNlIGNhbGxzIGl0IHdpdGggdGhlIGBSZXF1ZXN0SW5mb2Agd2hlbiBpdCByZWNlaXZlcyBhIFBPU1QgYGNvbW1hbmRzL3Jlc2V0RGJgIHJlcXVlc3QuXG5cdCogWW91ciBNZW1vcnlEYXRhU2VydmljZSBjYW4gYWRqdXN0IGl0cyBiZWhhdmlvciBhY2NvcmRpbmdseS5cblx0Ki9cblx0YWJzdHJhY3QgY3JlYXRlRGIocmVxSW5mbz86IFJlcXVlc3RJbmZvKToge30gfCBPYnNlcnZhYmxlPHt9PiB8IFByb21pc2U8e30+O1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qKlxuKiAgTWVtb3J5QmFja2VuZENvbmZpZyBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiogIFVzYWdlOlxuKiAgICBNZW1vcnlNb2R1bGUuZm9yUm9vdChJbk1lbUhlcm9TZXJ2aWNlLCB7ZGVsYXk6IDYwMH0pXG4qXG4qICBvciBpZiBwcm92aWRpbmcgc2VwYXJhdGVseTpcbiogICAgcHJvdmlkZShNZW1vcnlCYWNrZW5kQ29uZmlnLCB7dXNlVmFsdWU6IHtkZWxheTogNjAwfX0pLFxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZW1vcnlCYWNrZW5kQ29uZmlnIHtcblx0LyoqXG5cdCAqIFRoZSBiYXNlIHBhdGggdG8gdGhlIGFwaSwgZS5nLCAnYXBpLycuXG5cdCAqIElmIG5vdCBzcGVjaWZpZWQgdGhhbiBgcGFyc2VSZXF1ZXN0VXJsYCBhc3N1bWVzIGl0IGlzIHRoZSBmaXJzdCBwYXRoIHNlZ21lbnQgaW4gdGhlIHJlcXVlc3QuXG5cdCAqL1xuXHRhcGlCYXNlPzogc3RyaW5nO1xuXHQvKipcblx0ICogZmFsc2UgKGRlZmF1bHQpIGlmIHNlYXJjaCBtYXRjaCBzaG91bGQgYmUgY2FzZSBpbnNlbnNpdGl2ZVxuXHQgKi9cblx0Y2FzZVNlbnNpdGl2ZVNlYXJjaD86IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBmYWxzZSAoZGVmYXVsdCkgcHV0IGNvbnRlbnQgZGlyZWN0bHkgaW5zaWRlIHRoZSByZXNwb25zZSBib2R5LlxuXHQgKiB0cnVlOiBlbmNhcHN1bGF0ZSBjb250ZW50IGluIGEgYGRhdGFgIHByb3BlcnR5IGluc2lkZSB0aGUgcmVzcG9uc2UgYm9keSwgYHsgZGF0YTogLi4uIH1gLlxuXHQgKi9cblx0ZGF0YUVuY2Fwc3VsYXRpb24/OiBib29sZWFuO1xuXHQvKipcblx0ICogZGVsYXkgKGluIG1zKSB0byBzaW11bGF0ZSBsYXRlbmN5XG5cdCAqL1xuXHRkZWxheT86IG51bWJlcjtcblx0LyoqXG5cdCAqIGZhbHNlIChkZWZhdWx0KSBzaG91bGQgMjA0IHdoZW4gb2JqZWN0LXRvLWRlbGV0ZSBub3QgZm91bmQ7IHRydWU6IDQwNFxuXHQgKi9cblx0ZGVsZXRlNDA0PzogYm9vbGVhbjtcblx0LyoqXG5cdCAqIGhvc3QgZm9yIHRoaXMgc2VydmljZSwgZS5nLiwgJ2xvY2FsaG9zdCdcblx0ICovXG5cdGhvc3Q/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBmYWxzZSAoZGVmYXVsdCkgc2hvdWxkIHBhc3MgdW5yZWNvZ25pemVkIHJlcXVlc3QgVVJMIHRocm91Z2ggdG8gb3JpZ2luYWwgYmFja2VuZDsgdHJ1ZTogNDA0XG5cdCAqL1xuXHRwYXNzVGhydVVua25vd25Vcmw/OiBib29sZWFuO1xuXHQvKipcblx0ICogdHJ1ZSAoZGVmYXVsdCkgc2hvdWxkIE5PVCByZXR1cm4gdGhlIGl0ZW0gKDIwNCkgYWZ0ZXIgYSBQT1NULiBmYWxzZTogcmV0dXJuIHRoZSBpdGVtICgyMDApLlxuXHQgKi9cblx0cG9zdDIwND86IGJvb2xlYW47XG5cdC8qKlxuXHQqIGZhbHNlIChkZWZhdWx0KSBzaG91bGQgTk9UIHVwZGF0ZSBleGlzdGluZyBpdGVtIHdpdGggUE9TVC4gZmFsc2U6IE9LIHRvIHVwZGF0ZS5cblx0Ki9cblx0cG9zdDQwOT86IGJvb2xlYW47XG5cdC8qKlxuXHQqIHRydWUgKGRlZmF1bHQpIHNob3VsZCBOT1QgcmV0dXJuIHRoZSBpdGVtICgyMDQpIGFmdGVyIGEgUE9TVC4gZmFsc2U6IHJldHVybiB0aGUgaXRlbSAoMjAwKS5cblx0Ki9cblx0cHV0MjA0PzogYm9vbGVhbjtcblx0LyoqXG5cdCAqIGZhbHNlIChkZWZhdWx0KSBpZiBpdGVtIG5vdCBmb3VuZCwgY3JlYXRlIGFzIG5ldyBpdGVtOyBmYWxzZTogc2hvdWxkIDQwNC5cblx0ICovXG5cdHB1dDQwND86IGJvb2xlYW47XG5cdC8qKlxuXHQgKiByb290IHBhdGggX2JlZm9yZV8gYW55IEFQSSBjYWxsLCBlLmcuLCAnJ1xuXHQgKi9cblx0cm9vdFBhdGg/OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoY29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnID0ge30pIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHtcblx0XHRcdC8vIGRlZmF1bHQgY29uZmlnOlxuXHRcdFx0Y2FzZVNlbnNpdGl2ZVNlYXJjaDogZmFsc2UsXG5cdFx0XHRkYXRhRW5jYXBzdWxhdGlvbjogZmFsc2UsIC8vIGRvIE5PVCB3cmFwIGNvbnRlbnQgd2l0aGluIGFuIG9iamVjdCB3aXRoIGEgYGRhdGFgIHByb3BlcnR5XG5cdFx0XHRkZWxheTogNTAwLCAvLyBzaW11bGF0ZSBsYXRlbmN5IGJ5IGRlbGF5aW5nIHJlc3BvbnNlXG5cdFx0XHRkZWxldGU0MDQ6IGZhbHNlLCAvLyBkb24ndCBjb21wbGFpbiBpZiBjYW4ndCBmaW5kIGVudGl0eSB0byBkZWxldGVcblx0XHRcdHBhc3NUaHJ1VW5rbm93blVybDogZmFsc2UsIC8vIDQwNCBpZiBjYW4ndCBwcm9jZXNzIFVSTFxuXHRcdFx0cG9zdDIwNDogdHJ1ZSwgLy8gZG9uJ3QgcmV0dXJuIHRoZSBpdGVtIGFmdGVyIGEgUE9TVFxuXHRcdFx0cG9zdDQwOTogZmFsc2UsIC8vIGRvbid0IHVwZGF0ZSBleGlzdGluZyBpdGVtIHdpdGggdGhhdCBJRFxuXHRcdFx0cHV0MjA0OiB0cnVlLCAgLy8gZG9uJ3QgcmV0dXJuIHRoZSBpdGVtIGFmdGVyIGEgUFVUXG5cdFx0XHRwdXQ0MDQ6IGZhbHNlLCAvLyBjcmVhdGUgbmV3IGl0ZW0gaWYgUFVUIGl0ZW0gd2l0aCB0aGF0IElEIG5vdCBmb3VuZFxuXHRcdFx0YXBpQmFzZTogdW5kZWZpbmVkLCAvLyBhc3N1bWVkIHRvIGJlIHRoZSBmaXJzdCBwYXRoIHNlZ21lbnRcblx0XHRcdGhvc3Q6IHVuZGVmaW5lZCwgICAgLy8gZGVmYXVsdCB2YWx1ZSBpcyBhY3R1YWxseSBzZXQgaW4gTWVtb3J5QmFja2VuZENvbmZpZyBjdG9yXG5cdFx0XHRyb290UGF0aDogdW5kZWZpbmVkIC8vIGRlZmF1bHQgdmFsdWUgaXMgYWN0dWFsbHkgc2V0IGluIE1lbW9yeUJhY2tlbmRDb25maWcgY3RvclxuXHRcdH0sIGNvbmZpZyk7XG5cdH1cbn1cblxuLyoqIFJldHVybiBpbmZvcm1hdGlvbiAoVXJpSW5mbykgYWJvdXQgYSBVUkkgICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVcmkoc3RyOiBzdHJpbmcpOiBVcmlJbmZvIHtcblx0Ly8gQWRhcHRlZCBmcm9tIHBhcnNldXJpIHBhY2thZ2UgLSBodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20vYXJjaGl2ZXMvcGFyc2V1cmlcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuXHRjb25zdCBVUkxfUkVHRVggPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShbXjpcXC8/Iy5dKyk6KT8oPzpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XG5cdGNvbnN0IG0gPSBVUkxfUkVHRVguZXhlYyhzdHIpO1xuXHRjb25zdCB1cmk6IFVyaUluZm8gPSB7XG5cdFx0c291cmNlOiAnJyxcblx0XHRwcm90b2NvbDogJycsXG5cdFx0YXV0aG9yaXR5OiAnJyxcblx0XHR1c2VySW5mbzogJycsXG5cdFx0dXNlcjogJycsXG5cdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdGhvc3Q6ICcnLFxuXHRcdHBvcnQ6ICcnLFxuXHRcdHJlbGF0aXZlOiAnJyxcblx0XHRwYXRoOiAnJyxcblx0XHRkaXJlY3Rvcnk6ICcnLFxuXHRcdGZpbGU6ICcnLFxuXHRcdHF1ZXJ5OiAnJyxcblx0XHRhbmNob3I6ICcnXG5cdH07XG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh1cmkpO1xuXHRsZXQgaSA9IGtleXMubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKSB7IHVyaVtrZXlzW2ldXSA9IG1baV0gfHwgJyc7IH1cblx0cmV0dXJuIHVyaTtcbn1cblxuLyoqXG4gKlxuICogSW50ZXJmYWNlIGZvciB0aGUgcmVzdWx0IG9mIHRoZSBgcGFyc2VSZXF1ZXN0VXJsYCBtZXRob2Q6XG4gKiAgIEdpdmVuIFVSTCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvY3VzdG9tZXJzLzQyP2Zvbz0xIHRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHJldHVybnNcbiAqICAgICBiYXNlOiAnYXBpLydcbiAqICAgICBjb2xsZWN0aW9uTmFtZTogJ2N1c3RvbWVycydcbiAqICAgICBpZDogJzQyJ1xuICogICAgIHF1ZXJ5OiB0aGlzLmNyZWF0ZVF1ZXJ5KCdmb289MScpXG4gKiAgICAgcmVzb3VyY2VVcmw6ICdodHRwOi8vbG9jYWxob3N0L2FwaS9jdXN0b21lcnMvJ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFJlcXVlc3RVcmwge1xuXHRhcGlCYXNlOiBzdHJpbmc7ICAgICAgICAgICAvLyB0aGUgc2xhc2gtdGVybWluYXRlZCBcImJhc2VcIiBmb3IgYXBpIHJlcXVlc3RzIChlLmcuIGBhcGkvYClcblx0Y29sbGVjdGlvbk5hbWU6IHN0cmluZzsgLy8gdGhlIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb24gb2YgZGF0YSBpdGVtcyAoZS5nLixgY3VzdG9tZXJzYClcblx0aWQ6IHN0cmluZzsgICAgICAgICAgICAgLy8gdGhlIChvcHRpb25hbCkgaWQgb2YgdGhlIGl0ZW0gaW4gdGhlIGNvbGxlY3Rpb24gKGUuZy4sIGA0MmApXG5cdHF1ZXJ5OiBNYXA8c3RyaW5nLCBzdHJpbmdbXT47IC8vIHRoZSBxdWVyeSBwYXJhbWV0ZXJzO1xuXHRyZXNvdXJjZVVybDogc3RyaW5nOyAgICAvLyB0aGUgZWZmZWN0aXZlIFVSTCBmb3IgdGhlIHJlc291cmNlIChlLmcuLCAnaHR0cDovL2xvY2FsaG9zdC9hcGkvY3VzdG9tZXJzLycpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFzc1RocnVCYWNrZW5kIHtcblx0LyoqXG5cdCAqIEhhbmRsZSBhbiBIVFRQIHJlcXVlc3QgYW5kIHJldHVybiBhbiBPYnNlcnZhYmxlIG9mIEhUVFAgcmVzcG9uc2Vcblx0ICogQm90aCB0aGUgcmVxdWVzdCB0eXBlIGFuZCB0aGUgcmVzcG9uc2UgdHlwZSBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgc3VwcG9ydGluZyBIVFRQIGxpYnJhcnkuXG5cdCAqL1xuXHRoYW5kbGUocmVxOiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZykge1xuXHRyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xufVxuXG4vKipcbiAqICBNaW5pbXVtIGRlZmluaXRpb24gbmVlZGVkIGJ5IGJhc2UgY2xhc3NcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q29yZSB7XG5cdHVybDogc3RyaW5nOyAvLyByZXF1ZXN0IFVSTFxuXHR1cmxXaXRoUGFyYW1zPzogc3RyaW5nOyAvLyByZXF1ZXN0IFVSTCB3aXRoIHF1ZXJ5IHBhcmFtZXRlcnMgYWRkZWQgYnkgYEh0dHBQYXJhbXNgXG59XG5cbi8qKlxuKiBJbnRlcmZhY2UgZm9yIG9iamVjdCB3LyBpbmZvIGFib3V0IHRoZSBjdXJyZW50IHJlcXVlc3QgdXJsXG4qIGV4dHJhY3RlZCBmcm9tIGFuIEh0dHAgUmVxdWVzdC5cbiogQWxzbyBob2xkcyB1dGlsaXR5IG1ldGhvZHMgYW5kIGNvbmZpZ3VyYXRpb24gZGF0YSBmcm9tIHRoaXMgc2VydmljZVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEluZm8ge1xuXHRyZXF1ZXN0OiBSZXF1ZXN0Q29yZTsgLy8gY29uY3JldGUgdHlwZSBkZXBlbmRzIHVwb24gdGhlIEh0dHAgbGlicmFyeVxuXHRhcGlCYXNlOiBzdHJpbmc7XG5cdGNvbGxlY3Rpb25OYW1lOiBzdHJpbmc7XG5cdGNvbGxlY3Rpb246IGFueTtcblx0aGVhZGVyczogSGVhZGVyc0NvcmU7XG5cdG1ldGhvZDogc3RyaW5nO1xuXHRpZDogYW55O1xuXHRxdWVyeTogTWFwPHN0cmluZywgc3RyaW5nW10+O1xuXHRyZXNvdXJjZVVybDogc3RyaW5nO1xuXHR1cmw6IHN0cmluZzsgLy8gcmVxdWVzdCBVUkxcblx0dXRpbHM6IFJlcXVlc3RJbmZvVXRpbGl0aWVzO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdXRpbGl0eSBtZXRob2RzIGZyb20gdGhpcyBzZXJ2aWNlIGluc3RhbmNlLlxuICogVXNlZnVsIHdpdGhpbiBhbiBIVFRQIG1ldGhvZCBvdmVycmlkZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RJbmZvVXRpbGl0aWVzIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIGNvbGQgcmVzcG9uc2UgT2JzZXJ2YWJsZSBmcm9tIGEgZmFjdG9yeSBmb3IgUmVzcG9uc2VPcHRpb25zXG5cdCAqIHRoZSBzYW1lIHdheSB0aGF0IHRoZSBpbi1tZW0gYmFja2VuZCBzZXJ2aWNlIGRvZXMuXG5cdCAqIEBwYXJhbSByZXNPcHRpb25zRmFjdG9yeSAtIGNyZWF0ZXMgUmVzcG9uc2VPcHRpb25zIHdoZW4gb2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkXG5cdCAqIEBwYXJhbSB3aXRoRGVsYXkgLSBpZiB0cnVlIChkZWZhdWx0KSwgYWRkIHNpbXVsYXRlZCBsYXRlbmN5IGRlbGF5IGZyb20gY29uZmlndXJhdGlvblxuXHQgKi9cblx0Y3JlYXRlUmVzcG9uc2UkOiAocmVzT3B0aW9uc0ZhY3Rvcnk6ICgpID0+IFJlc3BvbnNlT3B0aW9ucykgPT4gT2JzZXJ2YWJsZTxhbnk+O1xuXG5cdC8qKlxuXHQgKiBGaW5kIGZpcnN0IGluc3RhbmNlIG9mIGl0ZW0gaW4gY29sbGVjdGlvbiBieSBgaXRlbS5pZGBcblx0ICogQHBhcmFtIGNvbGxlY3Rpb25cblx0ICogQHBhcmFtIGlkXG5cdCAqL1xuXHRmaW5kQnlJZDxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgaWQ6IGFueSk6IFQ7XG5cblx0LyoqIHJldHVybiB0aGUgY3VycmVudCwgYWN0aXZlIGNvbmZpZ3VyYXRpb24gd2hpY2ggaXMgYSBibGVuZCBvZiBkZWZhdWx0cyBhbmQgb3ZlcnJpZGVzICovXG5cdGdldENvbmZpZygpOiBNZW1vcnlCYWNrZW5kQ29uZmlnO1xuXG5cdC8qKiBHZXQgdGhlIGluLW1lbSBzZXJ2aWNlJ3MgY29weSBvZiB0aGUgXCJkYXRhYmFzZVwiICovXG5cdGdldERiKCk6IHt9O1xuXG5cdC8qKiBHZXQgSlNPTiBib2R5IGZyb20gdGhlIHJlcXVlc3Qgb2JqZWN0ICovXG5cdGdldEpzb25Cb2R5KHJlcTogYW55KTogYW55O1xuXG5cdC8qKiBHZXQgbG9jYXRpb24gaW5mbyBmcm9tIGEgdXJsLCBldmVuIG9uIHNlcnZlciB3aGVyZSBgZG9jdW1lbnRgIGlzIG5vdCBkZWZpbmVkICovXG5cdGdldExvY2F0aW9uKHVybDogc3RyaW5nKTogVXJpSW5mbztcblxuXHQvKiogR2V0IChvciBjcmVhdGUpIHRoZSBcInJlYWxcIiBiYWNrZW5kICovXG5cdGdldFBhc3NUaHJ1QmFja2VuZCgpOiBQYXNzVGhydUJhY2tlbmQ7XG5cblx0LyoqXG5cdCAqIHJldHVybiB0cnVlIGlmIGNhbiBkZXRlcm1pbmUgdGhhdCB0aGUgY29sbGVjdGlvbidzIGBpdGVtLmlkYCBpcyBhIG51bWJlclxuXHQgKiAqL1xuXHRpc0NvbGxlY3Rpb25JZE51bWVyaWM8VCBleHRlbmRzIHsgaWQ6IGFueSB9Pihjb2xsZWN0aW9uOiBUW10sIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBQYXJzZXMgdGhlIHJlcXVlc3QgVVJMIGludG8gYSBgUGFyc2VkUmVxdWVzdFVybGAgb2JqZWN0LlxuXHQgKiBQYXJzaW5nIGRlcGVuZHMgdXBvbiBjZXJ0YWluIHZhbHVlcyBvZiBgY29uZmlnYDogYGFwaUJhc2VgLCBgaG9zdGAsIGFuZCBgdXJsUm9vdGAuXG5cdCAqL1xuXHRwYXJzZVJlcXVlc3RVcmwodXJsOiBzdHJpbmcpOiBQYXJzZWRSZXF1ZXN0VXJsO1xufVxuXG4vKipcbiAqIFByb3ZpZGUgYSBgcmVzcG9uc2VJbnRlcmNlcHRvcmAgbWV0aG9kIG9mIHRoaXMgdHlwZSBpbiB5b3VyIGBpbk1lbURiU2VydmljZWAgdG9cbiAqIG1vcnBoIHRoZSByZXNwb25zZSBvcHRpb25zIGNyZWF0ZWQgaW4gdGhlIGBjb2xsZWN0aW9uSGFuZGxlcmAuXG4gKi9cbmV4cG9ydCB0eXBlIFJlc3BvbnNlSW50ZXJjZXB0b3IgPSAocmVzOiBSZXNwb25zZU9wdGlvbnMsIHJpOiBSZXF1ZXN0SW5mbykgPT4gUmVzcG9uc2VPcHRpb25zO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlT3B0aW9ucyB7XG5cdC8qKlxuXHQgKiBTdHJpbmcsIE9iamVjdCwgQXJyYXlCdWZmZXIgb3IgQmxvYiByZXByZXNlbnRpbmcgdGhlIGJvZHkgb2YgdGhlIHtAbGluayBSZXNwb25zZX0uXG5cdCAqL1xuXHRib2R5Pzogc3RyaW5nIHwgT2JqZWN0IHwgQXJyYXlCdWZmZXIgfCBCbG9iO1xuXG5cdC8qKlxuXHQgKiBSZXNwb25zZSBoZWFkZXJzXG5cdCAqL1xuXHRoZWFkZXJzPzogSGVhZGVyc0NvcmU7XG5cblx0LyoqXG5cdCAqIEh0dHAge0BsaW5rIGh0dHA6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMTAuaHRtbCBzdGF0dXMgY29kZX1cblx0ICogYXNzb2NpYXRlZCB3aXRoIHRoZSByZXNwb25zZS5cblx0ICovXG5cdHN0YXR1cz86IG51bWJlcjtcblxuXHQvKipcblx0ICogU3RhdHVzIHRleHQgZm9yIHRoZSBzdGF0dXMgY29kZVxuXHQgKi9cblx0c3RhdHVzVGV4dD86IHN0cmluZztcblx0LyoqXG5cdCAqIHJlcXVlc3QgdXJsXG5cdCAqL1xuXHR1cmw/OiBzdHJpbmc7XG59XG5cbi8qKiBJbnRlcmZhY2Ugb2YgaW5mb3JtYXRpb24gYWJvdXQgYSBVcmkgICovXG5leHBvcnQgaW50ZXJmYWNlIFVyaUluZm8ge1xuXHRzb3VyY2U6IHN0cmluZztcblx0cHJvdG9jb2w6IHN0cmluZztcblx0YXV0aG9yaXR5OiBzdHJpbmc7XG5cdHVzZXJJbmZvOiBzdHJpbmc7XG5cdHVzZXI6IHN0cmluZztcblx0cGFzc3dvcmQ6IHN0cmluZztcblx0aG9zdDogc3RyaW5nO1xuXHRwb3J0OiBzdHJpbmc7XG5cdHJlbGF0aXZlOiBzdHJpbmc7XG5cdHBhdGg6IHN0cmluZztcblx0ZGlyZWN0b3J5OiBzdHJpbmc7XG5cdGZpbGU6IHN0cmluZztcblx0cXVlcnk6IHN0cmluZztcblx0YW5jaG9yOiBzdHJpbmc7XG59XG4iXX0=