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
export class MemoryDataService {
}
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
     * Your InMemoryDbService can adjust its behavior accordingly.
     * @abstract
     * @param {?=} reqInfo
     * @return {?}
     */
    MemoryDataService.prototype.createDb = function (reqInfo) { };
}
/////////////////////////////////
/**
 *  InMemoryBackendService configuration options
 *  Usage:
 *    InMemoryWebApiModule.forRoot(InMemHeroService, {delay: 600})
 *
 *  or if providing separately:
 *    provide(InMemoryBackendConfig, {useValue: {delay: 600}}),
 */
export class MemoryBackendConfig {
    /**
     * @param {?=} config
     */
    constructor(config = {}) {
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
            // default value is actually set in InMemoryBackendService ctor
            rootPath: undefined // default value is actually set in InMemoryBackendService ctor
        }, config);
    }
}
MemoryBackendConfig.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MemoryBackendConfig.ctorParameters = () => [
    { type: MemoryBackendConfig }
];
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
    const URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    /** @type {?} */
    const m = URL_REGEX.exec(str);
    /** @type {?} */
    const uri = {
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
    const keys = Object.keys(uri);
    /** @type {?} */
    let i = keys.length;
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
    RequestInfo.prototype.req;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2RhdGEvIiwic291cmNlcyI6WyJsaWIvbWVtb3J5Xy9pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQU0zQyxpQ0FFQzs7Ozs7OztJQURBLHVEQUE2Qzs7Ozs7Ozs7Ozs7OztBQWE5QyxNQUFNLE9BQWdCLGlCQUFpQjtDQWlCdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBREEsOERBQTRFOzs7Ozs7Ozs7OztBQWE3RSxNQUFNLE9BQU8sbUJBQW1COzs7O0lBb0QvQixZQUFZLFNBQThCLEVBQUU7UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7O1lBRW5CLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsaUJBQWlCLEVBQUUsS0FBSzs7WUFDeEIsS0FBSyxFQUFFLEdBQUc7O1lBQ1YsU0FBUyxFQUFFLEtBQUs7O1lBQ2hCLGtCQUFrQixFQUFFLEtBQUs7O1lBQ3pCLE9BQU8sRUFBRSxJQUFJOztZQUNiLE9BQU8sRUFBRSxLQUFLOztZQUNkLE1BQU0sRUFBRSxJQUFJOztZQUNaLE1BQU0sRUFBRSxLQUFLOztZQUNiLE9BQU8sRUFBRSxTQUFTOztZQUNsQixJQUFJLEVBQUUsU0FBUzs7WUFDZixRQUFRLEVBQUUsU0FBUyxDQUFDLCtEQUErRDtTQUNuRixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ1osQ0FBQzs7O1lBckVELFVBQVU7Ozs7WUFxRFUsbUJBQW1COzs7Ozs7OztJQS9DdkMsc0NBQWlCOzs7OztJQUlqQixrREFBOEI7Ozs7OztJQUs5QixnREFBNEI7Ozs7O0lBSTVCLG9DQUFlOzs7OztJQUlmLHdDQUFvQjs7Ozs7SUFJcEIsbUNBQWM7Ozs7O0lBSWQsaURBQTZCOzs7OztJQUk3QixzQ0FBa0I7Ozs7O0lBSWxCLHNDQUFrQjs7Ozs7SUFJbEIscUNBQWlCOzs7OztJQUlqQixxQ0FBaUI7Ozs7O0lBSWpCLHVDQUFrQjs7Ozs7OztBQXNCbkIsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFXOzs7O1VBRzdCLFNBQVMsR0FBRyxrTUFBa007O1VBQzlNLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7VUFDdkIsR0FBRyxHQUFZO1FBQ3BCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO1FBQ1osSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLEVBQUU7UUFDYixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsTUFBTSxFQUFFLEVBQUU7S0FDVjs7VUFDSyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7O1FBQ3pCLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTTtJQUNuQixPQUFPLENBQUMsRUFBRSxFQUFFO1FBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7S0FBRTtJQUMxQyxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7Ozs7Ozs7Ozs7OztBQVlELHNDQU1DOzs7SUFMQSxtQ0FBZ0I7O0lBQ2hCLDBDQUF1Qjs7SUFDdkIsOEJBQVc7O0lBQ1gsaUNBQTZCOztJQUM3Qix1Q0FBb0I7Ozs7O0FBR3JCLHFDQU1DOzs7Ozs7OztJQURBLHNEQUFrQzs7Ozs7O0FBR25DLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxJQUFZO0lBQy9DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDaEMsQ0FBQzs7Ozs7QUFLRCxpQ0FHQzs7O0lBRkEsMEJBQVk7O0lBQ1osb0NBQXVCOzs7Ozs7OztBQVF4QixpQ0FZQzs7O0lBWEEsMEJBQWlCOztJQUNqQiw4QkFBZ0I7O0lBQ2hCLHFDQUF1Qjs7SUFDdkIsaUNBQWdCOztJQUNoQiw4QkFBcUI7O0lBQ3JCLDZCQUFlOztJQUNmLHlCQUFROztJQUNSLDRCQUE2Qjs7SUFDN0Isa0NBQW9COztJQUNwQiwwQkFBWTs7SUFDWiw0QkFBNEI7Ozs7Ozs7QUFPN0IsMENBeUNDOzs7Ozs7Ozs7SUFsQ0EsK0NBQStFOzs7Ozs7OztJQU8vRSx3RUFBNkQ7Ozs7O0lBRzdELDJEQUFpQzs7Ozs7SUFHakMsdURBQVk7Ozs7OztJQUdaLGdFQUEyQjs7Ozs7O0lBRzNCLGdFQUFrQzs7Ozs7SUFHbEMsb0VBQXNDOzs7Ozs7Ozs7SUFLdEMsaUdBQStGOzs7Ozs7O0lBTS9GLG9FQUErQzs7Ozs7QUFTaEQscUNBeUJDOzs7Ozs7SUFyQkEsK0JBQTRDOzs7OztJQUs1QyxrQ0FBc0I7Ozs7OztJQU10QixpQ0FBZ0I7Ozs7O0lBS2hCLHFDQUFvQjs7Ozs7SUFJcEIsOEJBQWE7Ozs7OztBQUlkLDZCQWVDOzs7SUFkQSx5QkFBZTs7SUFDZiwyQkFBaUI7O0lBQ2pCLDRCQUFrQjs7SUFDbEIsMkJBQWlCOztJQUNqQix1QkFBYTs7SUFDYiwyQkFBaUI7O0lBQ2pCLHVCQUFhOztJQUNiLHVCQUFhOztJQUNiLDJCQUFpQjs7SUFDakIsdUJBQWE7O0lBQ2IsNEJBQWtCOztJQUNsQix1QkFBYTs7SUFDYix3QkFBYzs7SUFDZCx5QkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiAgTWluaW11bSBkZWZpbml0aW9uIG5lZWRlZCBieSBiYXNlIGNsYXNzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSGVhZGVyc0NvcmUge1xuXHRzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB8IGFueTtcbn1cblxuLyoqXG4qIEludGVyZmFjZSBmb3IgYSBjbGFzcyB0aGF0IGNyZWF0ZXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlXG4qXG4qIEl0cyBgY3JlYXRlRGJgIG1ldGhvZCBjcmVhdGVzIGEgaGFzaCBvZiBuYW1lZCBjb2xsZWN0aW9ucyB0aGF0IHJlcHJlc2VudHMgdGhlIGRhdGFiYXNlXG4qXG4qIEZvciBtYXhpbXVtIGZsZXhpYmlsaXR5LCB0aGUgc2VydmljZSBtYXkgZGVmaW5lIEhUVFAgbWV0aG9kIG92ZXJyaWRlcy5cbiogU3VjaCBtZXRob2RzIG11c3QgbWF0Y2ggdGhlIHNwZWxsaW5nIG9mIGFuIEhUVFAgbWV0aG9kIGluIGxvd2VyIGNhc2UgKGUuZywgXCJnZXRcIikuXG4qIElmIGEgcmVxdWVzdCBoYXMgYSBtYXRjaGluZyBtZXRob2QsIGl0IHdpbGwgYmUgY2FsbGVkIGFzIGluXG4qIGBnZXQoaW5mbzogcmVxdWVzdEluZm8sIGRiOiB7fSlgIHdoZXJlIGBkYmAgaXMgdGhlIGRhdGFiYXNlIG9iamVjdCBkZXNjcmliZWQgYWJvdmUuXG4qL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1lbW9yeURhdGFTZXJ2aWNlIHtcblx0LyoqXG5cdCogQ3JlYXRlcyBhbiBpbi1tZW1vcnkgXCJkYXRhYmFzZVwiIGhhc2ggd2hvc2Uga2V5cyBhcmUgY29sbGVjdGlvbiBuYW1lc1xuXHQqIGFuZCB3aG9zZSB2YWx1ZXMgYXJlIGFycmF5cyBvZiBjb2xsZWN0aW9uIG9iamVjdHMgdG8gcmV0dXJuIG9yIHVwZGF0ZS5cblx0KlxuXHQqIHJldHVybnMgT2JzZXJ2YWJsZSBvZiB0aGUgZGF0YWJhc2UgYmVjYXVzZSBjb3VsZCBoYXZlIHRvIGNyZWF0ZSBpdCBhc3luY2hyb25vdXNseS5cblx0KlxuXHQqIFRoaXMgbWV0aG9kIG11c3QgYmUgc2FmZSB0byBjYWxsIHJlcGVhdGVkbHkuXG5cdCogRWFjaCB0aW1lIGl0IHNob3VsZCByZXR1cm4gYSBuZXcgb2JqZWN0IHdpdGggbmV3IGFycmF5cyBjb250YWluaW5nIG5ldyBpdGVtIG9iamVjdHMuXG5cdCogVGhpcyBjb25kaXRpb24gYWxsb3dzIHRoZSBpbi1tZW1vcnkgYmFja2VuZCBzZXJ2aWNlIHRvIG11dGF0ZSB0aGUgY29sbGVjdGlvbnNcblx0KiBhbmQgdGhlaXIgaXRlbXMgd2l0aG91dCB0b3VjaGluZyB0aGUgb3JpZ2luYWwgc291cmNlIGRhdGEuXG5cdCpcblx0KiBUaGUgaW4tbWVtIGJhY2tlbmQgc2VydmljZSBjYWxscyB0aGlzIG1ldGhvZCB3aXRob3V0IGEgdmFsdWUgdGhlIGZpcnN0IHRpbWUuXG5cdCogVGhlIHNlcnZpY2UgY2FsbHMgaXQgd2l0aCB0aGUgYFJlcXVlc3RJbmZvYCB3aGVuIGl0IHJlY2VpdmVzIGEgUE9TVCBgY29tbWFuZHMvcmVzZXREYmAgcmVxdWVzdC5cblx0KiBZb3VyIEluTWVtb3J5RGJTZXJ2aWNlIGNhbiBhZGp1c3QgaXRzIGJlaGF2aW9yIGFjY29yZGluZ2x5LlxuXHQqL1xuXHRhYnN0cmFjdCBjcmVhdGVEYihyZXFJbmZvPzogUmVxdWVzdEluZm8pOiB7fSB8IE9ic2VydmFibGU8e30+IHwgUHJvbWlzZTx7fT47XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLyoqXG4qICBJbk1lbW9yeUJhY2tlbmRTZXJ2aWNlIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuKiAgVXNhZ2U6XG4qICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoSW5NZW1IZXJvU2VydmljZSwge2RlbGF5OiA2MDB9KVxuKlxuKiAgb3IgaWYgcHJvdmlkaW5nIHNlcGFyYXRlbHk6XG4qICAgIHByb3ZpZGUoSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCB7dXNlVmFsdWU6IHtkZWxheTogNjAwfX0pLFxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZW1vcnlCYWNrZW5kQ29uZmlnIHtcblx0LyoqXG5cdCAqIFRoZSBiYXNlIHBhdGggdG8gdGhlIGFwaSwgZS5nLCAnYXBpLycuXG5cdCAqIElmIG5vdCBzcGVjaWZpZWQgdGhhbiBgcGFyc2VSZXF1ZXN0VXJsYCBhc3N1bWVzIGl0IGlzIHRoZSBmaXJzdCBwYXRoIHNlZ21lbnQgaW4gdGhlIHJlcXVlc3QuXG5cdCAqL1xuXHRhcGlCYXNlPzogc3RyaW5nO1xuXHQvKipcblx0ICogZmFsc2UgKGRlZmF1bHQpIGlmIHNlYXJjaCBtYXRjaCBzaG91bGQgYmUgY2FzZSBpbnNlbnNpdGl2ZVxuXHQgKi9cblx0Y2FzZVNlbnNpdGl2ZVNlYXJjaD86IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBmYWxzZSAoZGVmYXVsdCkgcHV0IGNvbnRlbnQgZGlyZWN0bHkgaW5zaWRlIHRoZSByZXNwb25zZSBib2R5LlxuXHQgKiB0cnVlOiBlbmNhcHN1bGF0ZSBjb250ZW50IGluIGEgYGRhdGFgIHByb3BlcnR5IGluc2lkZSB0aGUgcmVzcG9uc2UgYm9keSwgYHsgZGF0YTogLi4uIH1gLlxuXHQgKi9cblx0ZGF0YUVuY2Fwc3VsYXRpb24/OiBib29sZWFuO1xuXHQvKipcblx0ICogZGVsYXkgKGluIG1zKSB0byBzaW11bGF0ZSBsYXRlbmN5XG5cdCAqL1xuXHRkZWxheT86IG51bWJlcjtcblx0LyoqXG5cdCAqIGZhbHNlIChkZWZhdWx0KSBzaG91bGQgMjA0IHdoZW4gb2JqZWN0LXRvLWRlbGV0ZSBub3QgZm91bmQ7IHRydWU6IDQwNFxuXHQgKi9cblx0ZGVsZXRlNDA0PzogYm9vbGVhbjtcblx0LyoqXG5cdCAqIGhvc3QgZm9yIHRoaXMgc2VydmljZSwgZS5nLiwgJ2xvY2FsaG9zdCdcblx0ICovXG5cdGhvc3Q/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBmYWxzZSAoZGVmYXVsdCkgc2hvdWxkIHBhc3MgdW5yZWNvZ25pemVkIHJlcXVlc3QgVVJMIHRocm91Z2ggdG8gb3JpZ2luYWwgYmFja2VuZDsgdHJ1ZTogNDA0XG5cdCAqL1xuXHRwYXNzVGhydVVua25vd25Vcmw/OiBib29sZWFuO1xuXHQvKipcblx0ICogdHJ1ZSAoZGVmYXVsdCkgc2hvdWxkIE5PVCByZXR1cm4gdGhlIGl0ZW0gKDIwNCkgYWZ0ZXIgYSBQT1NULiBmYWxzZTogcmV0dXJuIHRoZSBpdGVtICgyMDApLlxuXHQgKi9cblx0cG9zdDIwND86IGJvb2xlYW47XG5cdC8qKlxuXHQqIGZhbHNlIChkZWZhdWx0KSBzaG91bGQgTk9UIHVwZGF0ZSBleGlzdGluZyBpdGVtIHdpdGggUE9TVC4gZmFsc2U6IE9LIHRvIHVwZGF0ZS5cblx0Ki9cblx0cG9zdDQwOT86IGJvb2xlYW47XG5cdC8qKlxuXHQqIHRydWUgKGRlZmF1bHQpIHNob3VsZCBOT1QgcmV0dXJuIHRoZSBpdGVtICgyMDQpIGFmdGVyIGEgUE9TVC4gZmFsc2U6IHJldHVybiB0aGUgaXRlbSAoMjAwKS5cblx0Ki9cblx0cHV0MjA0PzogYm9vbGVhbjtcblx0LyoqXG5cdCAqIGZhbHNlIChkZWZhdWx0KSBpZiBpdGVtIG5vdCBmb3VuZCwgY3JlYXRlIGFzIG5ldyBpdGVtOyBmYWxzZTogc2hvdWxkIDQwNC5cblx0ICovXG5cdHB1dDQwND86IGJvb2xlYW47XG5cdC8qKlxuXHQgKiByb290IHBhdGggX2JlZm9yZV8gYW55IEFQSSBjYWxsLCBlLmcuLCAnJ1xuXHQgKi9cblx0cm9vdFBhdGg/OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoY29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnID0ge30pIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHtcblx0XHRcdC8vIGRlZmF1bHQgY29uZmlnOlxuXHRcdFx0Y2FzZVNlbnNpdGl2ZVNlYXJjaDogZmFsc2UsXG5cdFx0XHRkYXRhRW5jYXBzdWxhdGlvbjogZmFsc2UsIC8vIGRvIE5PVCB3cmFwIGNvbnRlbnQgd2l0aGluIGFuIG9iamVjdCB3aXRoIGEgYGRhdGFgIHByb3BlcnR5XG5cdFx0XHRkZWxheTogNTAwLCAvLyBzaW11bGF0ZSBsYXRlbmN5IGJ5IGRlbGF5aW5nIHJlc3BvbnNlXG5cdFx0XHRkZWxldGU0MDQ6IGZhbHNlLCAvLyBkb24ndCBjb21wbGFpbiBpZiBjYW4ndCBmaW5kIGVudGl0eSB0byBkZWxldGVcblx0XHRcdHBhc3NUaHJ1VW5rbm93blVybDogZmFsc2UsIC8vIDQwNCBpZiBjYW4ndCBwcm9jZXNzIFVSTFxuXHRcdFx0cG9zdDIwNDogdHJ1ZSwgLy8gZG9uJ3QgcmV0dXJuIHRoZSBpdGVtIGFmdGVyIGEgUE9TVFxuXHRcdFx0cG9zdDQwOTogZmFsc2UsIC8vIGRvbid0IHVwZGF0ZSBleGlzdGluZyBpdGVtIHdpdGggdGhhdCBJRFxuXHRcdFx0cHV0MjA0OiB0cnVlLCAgLy8gZG9uJ3QgcmV0dXJuIHRoZSBpdGVtIGFmdGVyIGEgUFVUXG5cdFx0XHRwdXQ0MDQ6IGZhbHNlLCAvLyBjcmVhdGUgbmV3IGl0ZW0gaWYgUFVUIGl0ZW0gd2l0aCB0aGF0IElEIG5vdCBmb3VuZFxuXHRcdFx0YXBpQmFzZTogdW5kZWZpbmVkLCAvLyBhc3N1bWVkIHRvIGJlIHRoZSBmaXJzdCBwYXRoIHNlZ21lbnRcblx0XHRcdGhvc3Q6IHVuZGVmaW5lZCwgICAgLy8gZGVmYXVsdCB2YWx1ZSBpcyBhY3R1YWxseSBzZXQgaW4gSW5NZW1vcnlCYWNrZW5kU2VydmljZSBjdG9yXG5cdFx0XHRyb290UGF0aDogdW5kZWZpbmVkIC8vIGRlZmF1bHQgdmFsdWUgaXMgYWN0dWFsbHkgc2V0IGluIEluTWVtb3J5QmFja2VuZFNlcnZpY2UgY3RvclxuXHRcdH0sIGNvbmZpZyk7XG5cdH1cbn1cblxuLyoqIFJldHVybiBpbmZvcm1hdGlvbiAoVXJpSW5mbykgYWJvdXQgYSBVUkkgICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVcmkoc3RyOiBzdHJpbmcpOiBVcmlJbmZvIHtcblx0Ly8gQWRhcHRlZCBmcm9tIHBhcnNldXJpIHBhY2thZ2UgLSBodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20vYXJjaGl2ZXMvcGFyc2V1cmlcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuXHRjb25zdCBVUkxfUkVHRVggPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShbXjpcXC8/Iy5dKyk6KT8oPzpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XG5cdGNvbnN0IG0gPSBVUkxfUkVHRVguZXhlYyhzdHIpO1xuXHRjb25zdCB1cmk6IFVyaUluZm8gPSB7XG5cdFx0c291cmNlOiAnJyxcblx0XHRwcm90b2NvbDogJycsXG5cdFx0YXV0aG9yaXR5OiAnJyxcblx0XHR1c2VySW5mbzogJycsXG5cdFx0dXNlcjogJycsXG5cdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdGhvc3Q6ICcnLFxuXHRcdHBvcnQ6ICcnLFxuXHRcdHJlbGF0aXZlOiAnJyxcblx0XHRwYXRoOiAnJyxcblx0XHRkaXJlY3Rvcnk6ICcnLFxuXHRcdGZpbGU6ICcnLFxuXHRcdHF1ZXJ5OiAnJyxcblx0XHRhbmNob3I6ICcnXG5cdH07XG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh1cmkpO1xuXHRsZXQgaSA9IGtleXMubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKSB7IHVyaVtrZXlzW2ldXSA9IG1baV0gfHwgJyc7IH1cblx0cmV0dXJuIHVyaTtcbn1cblxuLyoqXG4gKlxuICogSW50ZXJmYWNlIGZvciB0aGUgcmVzdWx0IG9mIHRoZSBgcGFyc2VSZXF1ZXN0VXJsYCBtZXRob2Q6XG4gKiAgIEdpdmVuIFVSTCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvY3VzdG9tZXJzLzQyP2Zvbz0xIHRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHJldHVybnNcbiAqICAgICBiYXNlOiAnYXBpLydcbiAqICAgICBjb2xsZWN0aW9uTmFtZTogJ2N1c3RvbWVycydcbiAqICAgICBpZDogJzQyJ1xuICogICAgIHF1ZXJ5OiB0aGlzLmNyZWF0ZVF1ZXJ5KCdmb289MScpXG4gKiAgICAgcmVzb3VyY2VVcmw6ICdodHRwOi8vbG9jYWxob3N0L2FwaS9jdXN0b21lcnMvJ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFJlcXVlc3RVcmwge1xuXHRhcGlCYXNlOiBzdHJpbmc7ICAgICAgICAgICAvLyB0aGUgc2xhc2gtdGVybWluYXRlZCBcImJhc2VcIiBmb3IgYXBpIHJlcXVlc3RzIChlLmcuIGBhcGkvYClcblx0Y29sbGVjdGlvbk5hbWU6IHN0cmluZzsgLy8gdGhlIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb24gb2YgZGF0YSBpdGVtcyAoZS5nLixgY3VzdG9tZXJzYClcblx0aWQ6IHN0cmluZzsgICAgICAgICAgICAgLy8gdGhlIChvcHRpb25hbCkgaWQgb2YgdGhlIGl0ZW0gaW4gdGhlIGNvbGxlY3Rpb24gKGUuZy4sIGA0MmApXG5cdHF1ZXJ5OiBNYXA8c3RyaW5nLCBzdHJpbmdbXT47IC8vIHRoZSBxdWVyeSBwYXJhbWV0ZXJzO1xuXHRyZXNvdXJjZVVybDogc3RyaW5nOyAgICAvLyB0aGUgZWZmZWN0aXZlIFVSTCBmb3IgdGhlIHJlc291cmNlIChlLmcuLCAnaHR0cDovL2xvY2FsaG9zdC9hcGkvY3VzdG9tZXJzLycpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFzc1RocnVCYWNrZW5kIHtcblx0LyoqXG5cdCAqIEhhbmRsZSBhbiBIVFRQIHJlcXVlc3QgYW5kIHJldHVybiBhbiBPYnNlcnZhYmxlIG9mIEhUVFAgcmVzcG9uc2Vcblx0ICogQm90aCB0aGUgcmVxdWVzdCB0eXBlIGFuZCB0aGUgcmVzcG9uc2UgdHlwZSBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgc3VwcG9ydGluZyBIVFRQIGxpYnJhcnkuXG5cdCAqL1xuXHRoYW5kbGUocmVxOiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZykge1xuXHRyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xufVxuXG4vKipcbiAqICBNaW5pbXVtIGRlZmluaXRpb24gbmVlZGVkIGJ5IGJhc2UgY2xhc3NcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q29yZSB7XG5cdHVybDogc3RyaW5nOyAvLyByZXF1ZXN0IFVSTFxuXHR1cmxXaXRoUGFyYW1zPzogc3RyaW5nOyAvLyByZXF1ZXN0IFVSTCB3aXRoIHF1ZXJ5IHBhcmFtZXRlcnMgYWRkZWQgYnkgYEh0dHBQYXJhbXNgXG59XG5cbi8qKlxuKiBJbnRlcmZhY2UgZm9yIG9iamVjdCB3LyBpbmZvIGFib3V0IHRoZSBjdXJyZW50IHJlcXVlc3QgdXJsXG4qIGV4dHJhY3RlZCBmcm9tIGFuIEh0dHAgUmVxdWVzdC5cbiogQWxzbyBob2xkcyB1dGlsaXR5IG1ldGhvZHMgYW5kIGNvbmZpZ3VyYXRpb24gZGF0YSBmcm9tIHRoaXMgc2VydmljZVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEluZm8ge1xuXHRyZXE6IFJlcXVlc3RDb3JlOyAvLyBjb25jcmV0ZSB0eXBlIGRlcGVuZHMgdXBvbiB0aGUgSHR0cCBsaWJyYXJ5XG5cdGFwaUJhc2U6IHN0cmluZztcblx0Y29sbGVjdGlvbk5hbWU6IHN0cmluZztcblx0Y29sbGVjdGlvbjogYW55O1xuXHRoZWFkZXJzOiBIZWFkZXJzQ29yZTtcblx0bWV0aG9kOiBzdHJpbmc7XG5cdGlkOiBhbnk7XG5cdHF1ZXJ5OiBNYXA8c3RyaW5nLCBzdHJpbmdbXT47XG5cdHJlc291cmNlVXJsOiBzdHJpbmc7XG5cdHVybDogc3RyaW5nOyAvLyByZXF1ZXN0IFVSTFxuXHR1dGlsczogUmVxdWVzdEluZm9VdGlsaXRpZXM7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciB1dGlsaXR5IG1ldGhvZHMgZnJvbSB0aGlzIHNlcnZpY2UgaW5zdGFuY2UuXG4gKiBVc2VmdWwgd2l0aGluIGFuIEhUVFAgbWV0aG9kIG92ZXJyaWRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEluZm9VdGlsaXRpZXMge1xuXHQvKipcblx0ICogQ3JlYXRlIGEgY29sZCByZXNwb25zZSBPYnNlcnZhYmxlIGZyb20gYSBmYWN0b3J5IGZvciBSZXNwb25zZU9wdGlvbnNcblx0ICogdGhlIHNhbWUgd2F5IHRoYXQgdGhlIGluLW1lbSBiYWNrZW5kIHNlcnZpY2UgZG9lcy5cblx0ICogQHBhcmFtIHJlc09wdGlvbnNGYWN0b3J5IC0gY3JlYXRlcyBSZXNwb25zZU9wdGlvbnMgd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcblx0ICogQHBhcmFtIHdpdGhEZWxheSAtIGlmIHRydWUgKGRlZmF1bHQpLCBhZGQgc2ltdWxhdGVkIGxhdGVuY3kgZGVsYXkgZnJvbSBjb25maWd1cmF0aW9uXG5cdCAqL1xuXHRjcmVhdGVSZXNwb25zZSQ6IChyZXNPcHRpb25zRmFjdG9yeTogKCkgPT4gUmVzcG9uc2VPcHRpb25zKSA9PiBPYnNlcnZhYmxlPGFueT47XG5cblx0LyoqXG5cdCAqIEZpbmQgZmlyc3QgaW5zdGFuY2Ugb2YgaXRlbSBpbiBjb2xsZWN0aW9uIGJ5IGBpdGVtLmlkYFxuXHQgKiBAcGFyYW0gY29sbGVjdGlvblxuXHQgKiBAcGFyYW0gaWRcblx0ICovXG5cdGZpbmRCeUlkPFQgZXh0ZW5kcyB7IGlkOiBhbnkgfT4oY29sbGVjdGlvbjogVFtdLCBpZDogYW55KTogVDtcblxuXHQvKiogcmV0dXJuIHRoZSBjdXJyZW50LCBhY3RpdmUgY29uZmlndXJhdGlvbiB3aGljaCBpcyBhIGJsZW5kIG9mIGRlZmF1bHRzIGFuZCBvdmVycmlkZXMgKi9cblx0Z2V0Q29uZmlnKCk6IE1lbW9yeUJhY2tlbmRDb25maWc7XG5cblx0LyoqIEdldCB0aGUgaW4tbWVtIHNlcnZpY2UncyBjb3B5IG9mIHRoZSBcImRhdGFiYXNlXCIgKi9cblx0Z2V0RGIoKToge307XG5cblx0LyoqIEdldCBKU09OIGJvZHkgZnJvbSB0aGUgcmVxdWVzdCBvYmplY3QgKi9cblx0Z2V0SnNvbkJvZHkocmVxOiBhbnkpOiBhbnk7XG5cblx0LyoqIEdldCBsb2NhdGlvbiBpbmZvIGZyb20gYSB1cmwsIGV2ZW4gb24gc2VydmVyIHdoZXJlIGBkb2N1bWVudGAgaXMgbm90IGRlZmluZWQgKi9cblx0Z2V0TG9jYXRpb24odXJsOiBzdHJpbmcpOiBVcmlJbmZvO1xuXG5cdC8qKiBHZXQgKG9yIGNyZWF0ZSkgdGhlIFwicmVhbFwiIGJhY2tlbmQgKi9cblx0Z2V0UGFzc1RocnVCYWNrZW5kKCk6IFBhc3NUaHJ1QmFja2VuZDtcblxuXHQvKipcblx0ICogcmV0dXJuIHRydWUgaWYgY2FuIGRldGVybWluZSB0aGF0IHRoZSBjb2xsZWN0aW9uJ3MgYGl0ZW0uaWRgIGlzIGEgbnVtYmVyXG5cdCAqICovXG5cdGlzQ29sbGVjdGlvbklkTnVtZXJpYzxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFBhcnNlcyB0aGUgcmVxdWVzdCBVUkwgaW50byBhIGBQYXJzZWRSZXF1ZXN0VXJsYCBvYmplY3QuXG5cdCAqIFBhcnNpbmcgZGVwZW5kcyB1cG9uIGNlcnRhaW4gdmFsdWVzIG9mIGBjb25maWdgOiBgYXBpQmFzZWAsIGBob3N0YCwgYW5kIGB1cmxSb290YC5cblx0ICovXG5cdHBhcnNlUmVxdWVzdFVybCh1cmw6IHN0cmluZyk6IFBhcnNlZFJlcXVlc3RVcmw7XG59XG5cbi8qKlxuICogUHJvdmlkZSBhIGByZXNwb25zZUludGVyY2VwdG9yYCBtZXRob2Qgb2YgdGhpcyB0eXBlIGluIHlvdXIgYGluTWVtRGJTZXJ2aWNlYCB0b1xuICogbW9ycGggdGhlIHJlc3BvbnNlIG9wdGlvbnMgY3JlYXRlZCBpbiB0aGUgYGNvbGxlY3Rpb25IYW5kbGVyYC5cbiAqL1xuZXhwb3J0IHR5cGUgUmVzcG9uc2VJbnRlcmNlcHRvciA9IChyZXM6IFJlc3BvbnNlT3B0aW9ucywgcmk6IFJlcXVlc3RJbmZvKSA9PiBSZXNwb25zZU9wdGlvbnM7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VPcHRpb25zIHtcblx0LyoqXG5cdCAqIFN0cmluZywgT2JqZWN0LCBBcnJheUJ1ZmZlciBvciBCbG9iIHJlcHJlc2VudGluZyB0aGUgYm9keSBvZiB0aGUge0BsaW5rIFJlc3BvbnNlfS5cblx0ICovXG5cdGJvZHk/OiBzdHJpbmcgfCBPYmplY3QgfCBBcnJheUJ1ZmZlciB8IEJsb2I7XG5cblx0LyoqXG5cdCAqIFJlc3BvbnNlIGhlYWRlcnNcblx0ICovXG5cdGhlYWRlcnM/OiBIZWFkZXJzQ29yZTtcblxuXHQvKipcblx0ICogSHR0cCB7QGxpbmsgaHR0cDovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWMxMC5odG1sIHN0YXR1cyBjb2RlfVxuXHQgKiBhc3NvY2lhdGVkIHdpdGggdGhlIHJlc3BvbnNlLlxuXHQgKi9cblx0c3RhdHVzPzogbnVtYmVyO1xuXG5cdC8qKlxuXHQgKiBTdGF0dXMgdGV4dCBmb3IgdGhlIHN0YXR1cyBjb2RlXG5cdCAqL1xuXHRzdGF0dXNUZXh0Pzogc3RyaW5nO1xuXHQvKipcblx0ICogcmVxdWVzdCB1cmxcblx0ICovXG5cdHVybD86IHN0cmluZztcbn1cblxuLyoqIEludGVyZmFjZSBvZiBpbmZvcm1hdGlvbiBhYm91dCBhIFVyaSAgKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXJpSW5mbyB7XG5cdHNvdXJjZTogc3RyaW5nO1xuXHRwcm90b2NvbDogc3RyaW5nO1xuXHRhdXRob3JpdHk6IHN0cmluZztcblx0dXNlckluZm86IHN0cmluZztcblx0dXNlcjogc3RyaW5nO1xuXHRwYXNzd29yZDogc3RyaW5nO1xuXHRob3N0OiBzdHJpbmc7XG5cdHBvcnQ6IHN0cmluZztcblx0cmVsYXRpdmU6IHN0cmluZztcblx0cGF0aDogc3RyaW5nO1xuXHRkaXJlY3Rvcnk6IHN0cmluZztcblx0ZmlsZTogc3RyaW5nO1xuXHRxdWVyeTogc3RyaW5nO1xuXHRhbmNob3I6IHN0cmluZztcbn1cbiJdfQ==