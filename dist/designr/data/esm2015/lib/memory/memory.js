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
            // default value is actually set in MemoryBackendConfig ctor
            rootPath: undefined // default value is actually set in MemoryBackendConfig ctor
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvbWVtb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQU0zQyxpQ0FFQzs7Ozs7OztJQURBLHVEQUE2Qzs7Ozs7Ozs7Ozs7OztBQWE5QyxNQUFNLE9BQWdCLGlCQUFpQjtDQWlCdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBREEsOERBQTRFOzs7Ozs7Ozs7OztBQWE3RSxNQUFNLE9BQU8sbUJBQW1COzs7O0lBb0QvQixZQUFZLFNBQThCLEVBQUU7UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7O1lBRW5CLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsaUJBQWlCLEVBQUUsS0FBSzs7WUFDeEIsS0FBSyxFQUFFLEdBQUc7O1lBQ1YsU0FBUyxFQUFFLEtBQUs7O1lBQ2hCLGtCQUFrQixFQUFFLEtBQUs7O1lBQ3pCLE9BQU8sRUFBRSxJQUFJOztZQUNiLE9BQU8sRUFBRSxLQUFLOztZQUNkLE1BQU0sRUFBRSxJQUFJOztZQUNaLE1BQU0sRUFBRSxLQUFLOztZQUNiLE9BQU8sRUFBRSxTQUFTOztZQUNsQixJQUFJLEVBQUUsU0FBUzs7WUFDZixRQUFRLEVBQUUsU0FBUyxDQUFDLDREQUE0RDtTQUNoRixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ1osQ0FBQzs7O1lBckVELFVBQVU7Ozs7WUFxRFUsbUJBQW1COzs7Ozs7OztJQS9DdkMsc0NBQWlCOzs7OztJQUlqQixrREFBOEI7Ozs7OztJQUs5QixnREFBNEI7Ozs7O0lBSTVCLG9DQUFlOzs7OztJQUlmLHdDQUFvQjs7Ozs7SUFJcEIsbUNBQWM7Ozs7O0lBSWQsaURBQTZCOzs7OztJQUk3QixzQ0FBa0I7Ozs7O0lBSWxCLHNDQUFrQjs7Ozs7SUFJbEIscUNBQWlCOzs7OztJQUlqQixxQ0FBaUI7Ozs7O0lBSWpCLHVDQUFrQjs7Ozs7OztBQXNCbkIsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFXOzs7O1VBRzdCLFNBQVMsR0FBRyxrTUFBa007O1VBQzlNLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7VUFDdkIsR0FBRyxHQUFZO1FBQ3BCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO1FBQ1osSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLEVBQUU7UUFDYixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsTUFBTSxFQUFFLEVBQUU7S0FDVjs7VUFDSyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7O1FBQ3pCLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTTtJQUNuQixPQUFPLENBQUMsRUFBRSxFQUFFO1FBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7S0FBRTtJQUMxQyxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7Ozs7Ozs7Ozs7OztBQVlELHNDQU1DOzs7SUFMQSxtQ0FBZ0I7O0lBQ2hCLDBDQUF1Qjs7SUFDdkIsOEJBQVc7O0lBQ1gsaUNBQTZCOztJQUM3Qix1Q0FBb0I7Ozs7O0FBR3JCLHFDQU1DOzs7Ozs7OztJQURBLHNEQUFrQzs7Ozs7O0FBR25DLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxJQUFZO0lBQy9DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDaEMsQ0FBQzs7Ozs7QUFLRCxpQ0FHQzs7O0lBRkEsMEJBQVk7O0lBQ1osb0NBQXVCOzs7Ozs7OztBQVF4QixpQ0FZQzs7O0lBWEEsOEJBQXFCOztJQUNyQiw4QkFBZ0I7O0lBQ2hCLHFDQUF1Qjs7SUFDdkIsaUNBQWdCOztJQUNoQiw4QkFBcUI7O0lBQ3JCLDZCQUFlOztJQUNmLHlCQUFROztJQUNSLDRCQUE2Qjs7SUFDN0Isa0NBQW9COztJQUNwQiwwQkFBWTs7SUFDWiw0QkFBNEI7Ozs7Ozs7QUFPN0IsMENBeUNDOzs7Ozs7Ozs7SUFsQ0EsK0NBQStFOzs7Ozs7OztJQU8vRSx3RUFBNkQ7Ozs7O0lBRzdELDJEQUFpQzs7Ozs7SUFHakMsdURBQVk7Ozs7OztJQUdaLGdFQUEyQjs7Ozs7O0lBRzNCLGdFQUFrQzs7Ozs7SUFHbEMsb0VBQXNDOzs7Ozs7Ozs7SUFLdEMsaUdBQStGOzs7Ozs7O0lBTS9GLG9FQUErQzs7Ozs7QUFTaEQscUNBeUJDOzs7Ozs7SUFyQkEsK0JBQTRDOzs7OztJQUs1QyxrQ0FBc0I7Ozs7OztJQU10QixpQ0FBZ0I7Ozs7O0lBS2hCLHFDQUFvQjs7Ozs7SUFJcEIsOEJBQWE7Ozs7OztBQUlkLDZCQWVDOzs7SUFkQSx5QkFBZTs7SUFDZiwyQkFBaUI7O0lBQ2pCLDRCQUFrQjs7SUFDbEIsMkJBQWlCOztJQUNqQix1QkFBYTs7SUFDYiwyQkFBaUI7O0lBQ2pCLHVCQUFhOztJQUNiLHVCQUFhOztJQUNiLDJCQUFpQjs7SUFDakIsdUJBQWE7O0lBQ2IsNEJBQWtCOztJQUNsQix1QkFBYTs7SUFDYix3QkFBYzs7SUFDZCx5QkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiAgTWluaW11bSBkZWZpbml0aW9uIG5lZWRlZCBieSBiYXNlIGNsYXNzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSGVhZGVyc0NvcmUge1xuXHRzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB8IGFueTtcbn1cblxuLyoqXG4qIEludGVyZmFjZSBmb3IgYSBjbGFzcyB0aGF0IGNyZWF0ZXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlXG4qXG4qIEl0cyBgY3JlYXRlRGJgIG1ldGhvZCBjcmVhdGVzIGEgaGFzaCBvZiBuYW1lZCBjb2xsZWN0aW9ucyB0aGF0IHJlcHJlc2VudHMgdGhlIGRhdGFiYXNlXG4qXG4qIEZvciBtYXhpbXVtIGZsZXhpYmlsaXR5LCB0aGUgc2VydmljZSBtYXkgZGVmaW5lIEhUVFAgbWV0aG9kIG92ZXJyaWRlcy5cbiogU3VjaCBtZXRob2RzIG11c3QgbWF0Y2ggdGhlIHNwZWxsaW5nIG9mIGFuIEhUVFAgbWV0aG9kIGluIGxvd2VyIGNhc2UgKGUuZywgXCJnZXRcIikuXG4qIElmIGEgcmVxdWVzdCBoYXMgYSBtYXRjaGluZyBtZXRob2QsIGl0IHdpbGwgYmUgY2FsbGVkIGFzIGluXG4qIGBnZXQoaW5mbzogcmVxdWVzdEluZm8sIGRiOiB7fSlgIHdoZXJlIGBkYmAgaXMgdGhlIGRhdGFiYXNlIG9iamVjdCBkZXNjcmliZWQgYWJvdmUuXG4qL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1lbW9yeURhdGFTZXJ2aWNlIHtcblx0LyoqXG5cdCogQ3JlYXRlcyBhbiBpbi1tZW1vcnkgXCJkYXRhYmFzZVwiIGhhc2ggd2hvc2Uga2V5cyBhcmUgY29sbGVjdGlvbiBuYW1lc1xuXHQqIGFuZCB3aG9zZSB2YWx1ZXMgYXJlIGFycmF5cyBvZiBjb2xsZWN0aW9uIG9iamVjdHMgdG8gcmV0dXJuIG9yIHVwZGF0ZS5cblx0KlxuXHQqIHJldHVybnMgT2JzZXJ2YWJsZSBvZiB0aGUgZGF0YWJhc2UgYmVjYXVzZSBjb3VsZCBoYXZlIHRvIGNyZWF0ZSBpdCBhc3luY2hyb25vdXNseS5cblx0KlxuXHQqIFRoaXMgbWV0aG9kIG11c3QgYmUgc2FmZSB0byBjYWxsIHJlcGVhdGVkbHkuXG5cdCogRWFjaCB0aW1lIGl0IHNob3VsZCByZXR1cm4gYSBuZXcgb2JqZWN0IHdpdGggbmV3IGFycmF5cyBjb250YWluaW5nIG5ldyBpdGVtIG9iamVjdHMuXG5cdCogVGhpcyBjb25kaXRpb24gYWxsb3dzIHRoZSBpbi1tZW1vcnkgYmFja2VuZCBzZXJ2aWNlIHRvIG11dGF0ZSB0aGUgY29sbGVjdGlvbnNcblx0KiBhbmQgdGhlaXIgaXRlbXMgd2l0aG91dCB0b3VjaGluZyB0aGUgb3JpZ2luYWwgc291cmNlIGRhdGEuXG5cdCpcblx0KiBUaGUgaW4tbWVtIGJhY2tlbmQgc2VydmljZSBjYWxscyB0aGlzIG1ldGhvZCB3aXRob3V0IGEgdmFsdWUgdGhlIGZpcnN0IHRpbWUuXG5cdCogVGhlIHNlcnZpY2UgY2FsbHMgaXQgd2l0aCB0aGUgYFJlcXVlc3RJbmZvYCB3aGVuIGl0IHJlY2VpdmVzIGEgUE9TVCBgY29tbWFuZHMvcmVzZXREYmAgcmVxdWVzdC5cblx0KiBZb3VyIE1lbW9yeURhdGFTZXJ2aWNlIGNhbiBhZGp1c3QgaXRzIGJlaGF2aW9yIGFjY29yZGluZ2x5LlxuXHQqL1xuXHRhYnN0cmFjdCBjcmVhdGVEYihyZXFJbmZvPzogUmVxdWVzdEluZm8pOiB7fSB8IE9ic2VydmFibGU8e30+IHwgUHJvbWlzZTx7fT47XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLyoqXG4qICBNZW1vcnlCYWNrZW5kQ29uZmlnIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuKiAgVXNhZ2U6XG4qICAgIE1lbW9yeU1vZHVsZS5mb3JSb290KEluTWVtSGVyb1NlcnZpY2UsIHtkZWxheTogNjAwfSlcbipcbiogIG9yIGlmIHByb3ZpZGluZyBzZXBhcmF0ZWx5OlxuKiAgICBwcm92aWRlKE1lbW9yeUJhY2tlbmRDb25maWcsIHt1c2VWYWx1ZToge2RlbGF5OiA2MDB9fSksXG4qL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lbW9yeUJhY2tlbmRDb25maWcge1xuXHQvKipcblx0ICogVGhlIGJhc2UgcGF0aCB0byB0aGUgYXBpLCBlLmcsICdhcGkvJy5cblx0ICogSWYgbm90IHNwZWNpZmllZCB0aGFuIGBwYXJzZVJlcXVlc3RVcmxgIGFzc3VtZXMgaXQgaXMgdGhlIGZpcnN0IHBhdGggc2VnbWVudCBpbiB0aGUgcmVxdWVzdC5cblx0ICovXG5cdGFwaUJhc2U/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBmYWxzZSAoZGVmYXVsdCkgaWYgc2VhcmNoIG1hdGNoIHNob3VsZCBiZSBjYXNlIGluc2Vuc2l0aXZlXG5cdCAqL1xuXHRjYXNlU2Vuc2l0aXZlU2VhcmNoPzogYm9vbGVhbjtcblx0LyoqXG5cdCAqIGZhbHNlIChkZWZhdWx0KSBwdXQgY29udGVudCBkaXJlY3RseSBpbnNpZGUgdGhlIHJlc3BvbnNlIGJvZHkuXG5cdCAqIHRydWU6IGVuY2Fwc3VsYXRlIGNvbnRlbnQgaW4gYSBgZGF0YWAgcHJvcGVydHkgaW5zaWRlIHRoZSByZXNwb25zZSBib2R5LCBgeyBkYXRhOiAuLi4gfWAuXG5cdCAqL1xuXHRkYXRhRW5jYXBzdWxhdGlvbj86IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBkZWxheSAoaW4gbXMpIHRvIHNpbXVsYXRlIGxhdGVuY3lcblx0ICovXG5cdGRlbGF5PzogbnVtYmVyO1xuXHQvKipcblx0ICogZmFsc2UgKGRlZmF1bHQpIHNob3VsZCAyMDQgd2hlbiBvYmplY3QtdG8tZGVsZXRlIG5vdCBmb3VuZDsgdHJ1ZTogNDA0XG5cdCAqL1xuXHRkZWxldGU0MDQ/OiBib29sZWFuO1xuXHQvKipcblx0ICogaG9zdCBmb3IgdGhpcyBzZXJ2aWNlLCBlLmcuLCAnbG9jYWxob3N0J1xuXHQgKi9cblx0aG9zdD86IHN0cmluZztcblx0LyoqXG5cdCAqIGZhbHNlIChkZWZhdWx0KSBzaG91bGQgcGFzcyB1bnJlY29nbml6ZWQgcmVxdWVzdCBVUkwgdGhyb3VnaCB0byBvcmlnaW5hbCBiYWNrZW5kOyB0cnVlOiA0MDRcblx0ICovXG5cdHBhc3NUaHJ1VW5rbm93blVybD86IGJvb2xlYW47XG5cdC8qKlxuXHQgKiB0cnVlIChkZWZhdWx0KSBzaG91bGQgTk9UIHJldHVybiB0aGUgaXRlbSAoMjA0KSBhZnRlciBhIFBPU1QuIGZhbHNlOiByZXR1cm4gdGhlIGl0ZW0gKDIwMCkuXG5cdCAqL1xuXHRwb3N0MjA0PzogYm9vbGVhbjtcblx0LyoqXG5cdCogZmFsc2UgKGRlZmF1bHQpIHNob3VsZCBOT1QgdXBkYXRlIGV4aXN0aW5nIGl0ZW0gd2l0aCBQT1NULiBmYWxzZTogT0sgdG8gdXBkYXRlLlxuXHQqL1xuXHRwb3N0NDA5PzogYm9vbGVhbjtcblx0LyoqXG5cdCogdHJ1ZSAoZGVmYXVsdCkgc2hvdWxkIE5PVCByZXR1cm4gdGhlIGl0ZW0gKDIwNCkgYWZ0ZXIgYSBQT1NULiBmYWxzZTogcmV0dXJuIHRoZSBpdGVtICgyMDApLlxuXHQqL1xuXHRwdXQyMDQ/OiBib29sZWFuO1xuXHQvKipcblx0ICogZmFsc2UgKGRlZmF1bHQpIGlmIGl0ZW0gbm90IGZvdW5kLCBjcmVhdGUgYXMgbmV3IGl0ZW07IGZhbHNlOiBzaG91bGQgNDA0LlxuXHQgKi9cblx0cHV0NDA0PzogYm9vbGVhbjtcblx0LyoqXG5cdCAqIHJvb3QgcGF0aCBfYmVmb3JlXyBhbnkgQVBJIGNhbGwsIGUuZy4sICcnXG5cdCAqL1xuXHRyb290UGF0aD86IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihjb25maWc6IE1lbW9yeUJhY2tlbmRDb25maWcgPSB7fSkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywge1xuXHRcdFx0Ly8gZGVmYXVsdCBjb25maWc6XG5cdFx0XHRjYXNlU2Vuc2l0aXZlU2VhcmNoOiBmYWxzZSxcblx0XHRcdGRhdGFFbmNhcHN1bGF0aW9uOiBmYWxzZSwgLy8gZG8gTk9UIHdyYXAgY29udGVudCB3aXRoaW4gYW4gb2JqZWN0IHdpdGggYSBgZGF0YWAgcHJvcGVydHlcblx0XHRcdGRlbGF5OiA1MDAsIC8vIHNpbXVsYXRlIGxhdGVuY3kgYnkgZGVsYXlpbmcgcmVzcG9uc2Vcblx0XHRcdGRlbGV0ZTQwNDogZmFsc2UsIC8vIGRvbid0IGNvbXBsYWluIGlmIGNhbid0IGZpbmQgZW50aXR5IHRvIGRlbGV0ZVxuXHRcdFx0cGFzc1RocnVVbmtub3duVXJsOiBmYWxzZSwgLy8gNDA0IGlmIGNhbid0IHByb2Nlc3MgVVJMXG5cdFx0XHRwb3N0MjA0OiB0cnVlLCAvLyBkb24ndCByZXR1cm4gdGhlIGl0ZW0gYWZ0ZXIgYSBQT1NUXG5cdFx0XHRwb3N0NDA5OiBmYWxzZSwgLy8gZG9uJ3QgdXBkYXRlIGV4aXN0aW5nIGl0ZW0gd2l0aCB0aGF0IElEXG5cdFx0XHRwdXQyMDQ6IHRydWUsICAvLyBkb24ndCByZXR1cm4gdGhlIGl0ZW0gYWZ0ZXIgYSBQVVRcblx0XHRcdHB1dDQwNDogZmFsc2UsIC8vIGNyZWF0ZSBuZXcgaXRlbSBpZiBQVVQgaXRlbSB3aXRoIHRoYXQgSUQgbm90IGZvdW5kXG5cdFx0XHRhcGlCYXNlOiB1bmRlZmluZWQsIC8vIGFzc3VtZWQgdG8gYmUgdGhlIGZpcnN0IHBhdGggc2VnbWVudFxuXHRcdFx0aG9zdDogdW5kZWZpbmVkLCAgICAvLyBkZWZhdWx0IHZhbHVlIGlzIGFjdHVhbGx5IHNldCBpbiBNZW1vcnlCYWNrZW5kQ29uZmlnIGN0b3Jcblx0XHRcdHJvb3RQYXRoOiB1bmRlZmluZWQgLy8gZGVmYXVsdCB2YWx1ZSBpcyBhY3R1YWxseSBzZXQgaW4gTWVtb3J5QmFja2VuZENvbmZpZyBjdG9yXG5cdFx0fSwgY29uZmlnKTtcblx0fVxufVxuXG4vKiogUmV0dXJuIGluZm9ybWF0aW9uIChVcmlJbmZvKSBhYm91dCBhIFVSSSAgKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVyaShzdHI6IHN0cmluZyk6IFVyaUluZm8ge1xuXHQvLyBBZGFwdGVkIGZyb20gcGFyc2V1cmkgcGFja2FnZSAtIGh0dHA6Ly9ibG9nLnN0ZXZlbmxldml0aGFuLmNvbS9hcmNoaXZlcy9wYXJzZXVyaVxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG5cdGNvbnN0IFVSTF9SRUdFWCA9IC9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKFteOlxcLz8jLl0rKTopPyg/OlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oW146XFwvPyNdKikoPzo6KFxcZCopKT8pKCgoXFwvKD86W14/I10oPyFbXj8jXFwvXSpcXC5bXj8jXFwvLl0rKD86Wz8jXXwkKSkpKlxcLz8pPyhbXj8jXFwvXSopKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8pLztcblx0Y29uc3QgbSA9IFVSTF9SRUdFWC5leGVjKHN0cik7XG5cdGNvbnN0IHVyaTogVXJpSW5mbyA9IHtcblx0XHRzb3VyY2U6ICcnLFxuXHRcdHByb3RvY29sOiAnJyxcblx0XHRhdXRob3JpdHk6ICcnLFxuXHRcdHVzZXJJbmZvOiAnJyxcblx0XHR1c2VyOiAnJyxcblx0XHRwYXNzd29yZDogJycsXG5cdFx0aG9zdDogJycsXG5cdFx0cG9ydDogJycsXG5cdFx0cmVsYXRpdmU6ICcnLFxuXHRcdHBhdGg6ICcnLFxuXHRcdGRpcmVjdG9yeTogJycsXG5cdFx0ZmlsZTogJycsXG5cdFx0cXVlcnk6ICcnLFxuXHRcdGFuY2hvcjogJydcblx0fTtcblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHVyaSk7XG5cdGxldCBpID0ga2V5cy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pIHsgdXJpW2tleXNbaV1dID0gbVtpXSB8fCAnJzsgfVxuXHRyZXR1cm4gdXJpO1xufVxuXG4vKipcbiAqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSByZXN1bHQgb2YgdGhlIGBwYXJzZVJlcXVlc3RVcmxgIG1ldGhvZDpcbiAqICAgR2l2ZW4gVVJMIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9jdXN0b21lcnMvNDI/Zm9vPTEgdGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gcmV0dXJuc1xuICogICAgIGJhc2U6ICdhcGkvJ1xuICogICAgIGNvbGxlY3Rpb25OYW1lOiAnY3VzdG9tZXJzJ1xuICogICAgIGlkOiAnNDInXG4gKiAgICAgcXVlcnk6IHRoaXMuY3JlYXRlUXVlcnkoJ2Zvbz0xJylcbiAqICAgICByZXNvdXJjZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3QvYXBpL2N1c3RvbWVycy8nXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkUmVxdWVzdFVybCB7XG5cdGFwaUJhc2U6IHN0cmluZzsgICAgICAgICAgIC8vIHRoZSBzbGFzaC10ZXJtaW5hdGVkIFwiYmFzZVwiIGZvciBhcGkgcmVxdWVzdHMgKGUuZy4gYGFwaS9gKVxuXHRjb2xsZWN0aW9uTmFtZTogc3RyaW5nOyAvLyB0aGUgbmFtZSBvZiB0aGUgY29sbGVjdGlvbiBvZiBkYXRhIGl0ZW1zIChlLmcuLGBjdXN0b21lcnNgKVxuXHRpZDogc3RyaW5nOyAgICAgICAgICAgICAvLyB0aGUgKG9wdGlvbmFsKSBpZCBvZiB0aGUgaXRlbSBpbiB0aGUgY29sbGVjdGlvbiAoZS5nLiwgYDQyYClcblx0cXVlcnk6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPjsgLy8gdGhlIHF1ZXJ5IHBhcmFtZXRlcnM7XG5cdHJlc291cmNlVXJsOiBzdHJpbmc7ICAgIC8vIHRoZSBlZmZlY3RpdmUgVVJMIGZvciB0aGUgcmVzb3VyY2UgKGUuZy4sICdodHRwOi8vbG9jYWxob3N0L2FwaS9jdXN0b21lcnMvJylcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXNzVGhydUJhY2tlbmQge1xuXHQvKipcblx0ICogSGFuZGxlIGFuIEhUVFAgcmVxdWVzdCBhbmQgcmV0dXJuIGFuIE9ic2VydmFibGUgb2YgSFRUUCByZXNwb25zZVxuXHQgKiBCb3RoIHRoZSByZXF1ZXN0IHR5cGUgYW5kIHRoZSByZXNwb25zZSB0eXBlIGFyZSBkZXRlcm1pbmVkIGJ5IHRoZSBzdXBwb3J0aW5nIEhUVFAgbGlicmFyeS5cblx0ICovXG5cdGhhbmRsZShyZXE6IGFueSk6IE9ic2VydmFibGU8YW55Pjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKSB7XG5cdHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG59XG5cbi8qKlxuICogIE1pbmltdW0gZGVmaW5pdGlvbiBuZWVkZWQgYnkgYmFzZSBjbGFzc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RDb3JlIHtcblx0dXJsOiBzdHJpbmc7IC8vIHJlcXVlc3QgVVJMXG5cdHVybFdpdGhQYXJhbXM/OiBzdHJpbmc7IC8vIHJlcXVlc3QgVVJMIHdpdGggcXVlcnkgcGFyYW1ldGVycyBhZGRlZCBieSBgSHR0cFBhcmFtc2Bcbn1cblxuLyoqXG4qIEludGVyZmFjZSBmb3Igb2JqZWN0IHcvIGluZm8gYWJvdXQgdGhlIGN1cnJlbnQgcmVxdWVzdCB1cmxcbiogZXh0cmFjdGVkIGZyb20gYW4gSHR0cCBSZXF1ZXN0LlxuKiBBbHNvIGhvbGRzIHV0aWxpdHkgbWV0aG9kcyBhbmQgY29uZmlndXJhdGlvbiBkYXRhIGZyb20gdGhpcyBzZXJ2aWNlXG4qL1xuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0SW5mbyB7XG5cdHJlcXVlc3Q6IFJlcXVlc3RDb3JlOyAvLyBjb25jcmV0ZSB0eXBlIGRlcGVuZHMgdXBvbiB0aGUgSHR0cCBsaWJyYXJ5XG5cdGFwaUJhc2U6IHN0cmluZztcblx0Y29sbGVjdGlvbk5hbWU6IHN0cmluZztcblx0Y29sbGVjdGlvbjogYW55O1xuXHRoZWFkZXJzOiBIZWFkZXJzQ29yZTtcblx0bWV0aG9kOiBzdHJpbmc7XG5cdGlkOiBhbnk7XG5cdHF1ZXJ5OiBNYXA8c3RyaW5nLCBzdHJpbmdbXT47XG5cdHJlc291cmNlVXJsOiBzdHJpbmc7XG5cdHVybDogc3RyaW5nOyAvLyByZXF1ZXN0IFVSTFxuXHR1dGlsczogUmVxdWVzdEluZm9VdGlsaXRpZXM7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciB1dGlsaXR5IG1ldGhvZHMgZnJvbSB0aGlzIHNlcnZpY2UgaW5zdGFuY2UuXG4gKiBVc2VmdWwgd2l0aGluIGFuIEhUVFAgbWV0aG9kIG92ZXJyaWRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEluZm9VdGlsaXRpZXMge1xuXHQvKipcblx0ICogQ3JlYXRlIGEgY29sZCByZXNwb25zZSBPYnNlcnZhYmxlIGZyb20gYSBmYWN0b3J5IGZvciBSZXNwb25zZU9wdGlvbnNcblx0ICogdGhlIHNhbWUgd2F5IHRoYXQgdGhlIGluLW1lbSBiYWNrZW5kIHNlcnZpY2UgZG9lcy5cblx0ICogQHBhcmFtIHJlc09wdGlvbnNGYWN0b3J5IC0gY3JlYXRlcyBSZXNwb25zZU9wdGlvbnMgd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcblx0ICogQHBhcmFtIHdpdGhEZWxheSAtIGlmIHRydWUgKGRlZmF1bHQpLCBhZGQgc2ltdWxhdGVkIGxhdGVuY3kgZGVsYXkgZnJvbSBjb25maWd1cmF0aW9uXG5cdCAqL1xuXHRjcmVhdGVSZXNwb25zZSQ6IChyZXNPcHRpb25zRmFjdG9yeTogKCkgPT4gUmVzcG9uc2VPcHRpb25zKSA9PiBPYnNlcnZhYmxlPGFueT47XG5cblx0LyoqXG5cdCAqIEZpbmQgZmlyc3QgaW5zdGFuY2Ugb2YgaXRlbSBpbiBjb2xsZWN0aW9uIGJ5IGBpdGVtLmlkYFxuXHQgKiBAcGFyYW0gY29sbGVjdGlvblxuXHQgKiBAcGFyYW0gaWRcblx0ICovXG5cdGZpbmRCeUlkPFQgZXh0ZW5kcyB7IGlkOiBhbnkgfT4oY29sbGVjdGlvbjogVFtdLCBpZDogYW55KTogVDtcblxuXHQvKiogcmV0dXJuIHRoZSBjdXJyZW50LCBhY3RpdmUgY29uZmlndXJhdGlvbiB3aGljaCBpcyBhIGJsZW5kIG9mIGRlZmF1bHRzIGFuZCBvdmVycmlkZXMgKi9cblx0Z2V0Q29uZmlnKCk6IE1lbW9yeUJhY2tlbmRDb25maWc7XG5cblx0LyoqIEdldCB0aGUgaW4tbWVtIHNlcnZpY2UncyBjb3B5IG9mIHRoZSBcImRhdGFiYXNlXCIgKi9cblx0Z2V0RGIoKToge307XG5cblx0LyoqIEdldCBKU09OIGJvZHkgZnJvbSB0aGUgcmVxdWVzdCBvYmplY3QgKi9cblx0Z2V0SnNvbkJvZHkocmVxOiBhbnkpOiBhbnk7XG5cblx0LyoqIEdldCBsb2NhdGlvbiBpbmZvIGZyb20gYSB1cmwsIGV2ZW4gb24gc2VydmVyIHdoZXJlIGBkb2N1bWVudGAgaXMgbm90IGRlZmluZWQgKi9cblx0Z2V0TG9jYXRpb24odXJsOiBzdHJpbmcpOiBVcmlJbmZvO1xuXG5cdC8qKiBHZXQgKG9yIGNyZWF0ZSkgdGhlIFwicmVhbFwiIGJhY2tlbmQgKi9cblx0Z2V0UGFzc1RocnVCYWNrZW5kKCk6IFBhc3NUaHJ1QmFja2VuZDtcblxuXHQvKipcblx0ICogcmV0dXJuIHRydWUgaWYgY2FuIGRldGVybWluZSB0aGF0IHRoZSBjb2xsZWN0aW9uJ3MgYGl0ZW0uaWRgIGlzIGEgbnVtYmVyXG5cdCAqICovXG5cdGlzQ29sbGVjdGlvbklkTnVtZXJpYzxUIGV4dGVuZHMgeyBpZDogYW55IH0+KGNvbGxlY3Rpb246IFRbXSwgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFBhcnNlcyB0aGUgcmVxdWVzdCBVUkwgaW50byBhIGBQYXJzZWRSZXF1ZXN0VXJsYCBvYmplY3QuXG5cdCAqIFBhcnNpbmcgZGVwZW5kcyB1cG9uIGNlcnRhaW4gdmFsdWVzIG9mIGBjb25maWdgOiBgYXBpQmFzZWAsIGBob3N0YCwgYW5kIGB1cmxSb290YC5cblx0ICovXG5cdHBhcnNlUmVxdWVzdFVybCh1cmw6IHN0cmluZyk6IFBhcnNlZFJlcXVlc3RVcmw7XG59XG5cbi8qKlxuICogUHJvdmlkZSBhIGByZXNwb25zZUludGVyY2VwdG9yYCBtZXRob2Qgb2YgdGhpcyB0eXBlIGluIHlvdXIgYGluTWVtRGJTZXJ2aWNlYCB0b1xuICogbW9ycGggdGhlIHJlc3BvbnNlIG9wdGlvbnMgY3JlYXRlZCBpbiB0aGUgYGNvbGxlY3Rpb25IYW5kbGVyYC5cbiAqL1xuZXhwb3J0IHR5cGUgUmVzcG9uc2VJbnRlcmNlcHRvciA9IChyZXM6IFJlc3BvbnNlT3B0aW9ucywgcmk6IFJlcXVlc3RJbmZvKSA9PiBSZXNwb25zZU9wdGlvbnM7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VPcHRpb25zIHtcblx0LyoqXG5cdCAqIFN0cmluZywgT2JqZWN0LCBBcnJheUJ1ZmZlciBvciBCbG9iIHJlcHJlc2VudGluZyB0aGUgYm9keSBvZiB0aGUge0BsaW5rIFJlc3BvbnNlfS5cblx0ICovXG5cdGJvZHk/OiBzdHJpbmcgfCBPYmplY3QgfCBBcnJheUJ1ZmZlciB8IEJsb2I7XG5cblx0LyoqXG5cdCAqIFJlc3BvbnNlIGhlYWRlcnNcblx0ICovXG5cdGhlYWRlcnM/OiBIZWFkZXJzQ29yZTtcblxuXHQvKipcblx0ICogSHR0cCB7QGxpbmsgaHR0cDovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWMxMC5odG1sIHN0YXR1cyBjb2RlfVxuXHQgKiBhc3NvY2lhdGVkIHdpdGggdGhlIHJlc3BvbnNlLlxuXHQgKi9cblx0c3RhdHVzPzogbnVtYmVyO1xuXG5cdC8qKlxuXHQgKiBTdGF0dXMgdGV4dCBmb3IgdGhlIHN0YXR1cyBjb2RlXG5cdCAqL1xuXHRzdGF0dXNUZXh0Pzogc3RyaW5nO1xuXHQvKipcblx0ICogcmVxdWVzdCB1cmxcblx0ICovXG5cdHVybD86IHN0cmluZztcbn1cblxuLyoqIEludGVyZmFjZSBvZiBpbmZvcm1hdGlvbiBhYm91dCBhIFVyaSAgKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXJpSW5mbyB7XG5cdHNvdXJjZTogc3RyaW5nO1xuXHRwcm90b2NvbDogc3RyaW5nO1xuXHRhdXRob3JpdHk6IHN0cmluZztcblx0dXNlckluZm86IHN0cmluZztcblx0dXNlcjogc3RyaW5nO1xuXHRwYXNzd29yZDogc3RyaW5nO1xuXHRob3N0OiBzdHJpbmc7XG5cdHBvcnQ6IHN0cmluZztcblx0cmVsYXRpdmU6IHN0cmluZztcblx0cGF0aDogc3RyaW5nO1xuXHRkaXJlY3Rvcnk6IHN0cmluZztcblx0ZmlsZTogc3RyaW5nO1xuXHRxdWVyeTogc3RyaW5nO1xuXHRhbmNob3I6IHN0cmluZztcbn1cbiJdfQ==