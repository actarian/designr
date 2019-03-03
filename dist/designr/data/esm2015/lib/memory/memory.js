/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
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
 * @param {?} path
 * @return {?}
 */
export function removeTrailingSlash(path) {
    return path.replace(/\/$/, '');
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
     * The service calls it with the `MemoryRequest` when it receives a POST `commands/resetDb` request.
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
/**
 * Interface for object w/ info about the current request url
 * extracted from an Http Request.
 * Also holds utility methods and configuration data from this service
 * @record
 */
export function MemoryRequest() { }
if (false) {
    /** @type {?} */
    MemoryRequest.prototype.request;
    /** @type {?} */
    MemoryRequest.prototype.body;
    /** @type {?} */
    MemoryRequest.prototype.apiBase;
    /** @type {?} */
    MemoryRequest.prototype.collectionName;
    /** @type {?} */
    MemoryRequest.prototype.collection;
    /** @type {?} */
    MemoryRequest.prototype.headers;
    /** @type {?} */
    MemoryRequest.prototype.method;
    /** @type {?} */
    MemoryRequest.prototype.id;
    /** @type {?} */
    MemoryRequest.prototype.query;
    /** @type {?} */
    MemoryRequest.prototype.resourceUrl;
    /** @type {?} */
    MemoryRequest.prototype.url;
}
/**
 * @record
 */
export function MemoryResponse() { }
if (false) {
    /**
     * String, Object, ArrayBuffer or Blob representing the body of the {\@link Response}.
     * @type {?|undefined}
     */
    MemoryResponse.prototype.body;
    /**
     * Response headers
     * @type {?|undefined}
     */
    MemoryResponse.prototype.headers;
    /**
     * Http {\@link http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html status code}
     * associated with the response.
     * @type {?|undefined}
     */
    MemoryResponse.prototype.status;
    /**
     * Status text for the status code
     * @type {?|undefined}
     */
    MemoryResponse.prototype.statusText;
    /**
     * request url
     * @type {?|undefined}
     */
    MemoryResponse.prototype.url;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvbWVtb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFLM0MsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFXOzs7O1VBRzdCLFNBQVMsR0FBRyxrTUFBa007O1VBQzlNLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7VUFDdkIsR0FBRyxHQUFZO1FBQ3BCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO1FBQ1osSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLEVBQUU7UUFDYixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsTUFBTSxFQUFFLEVBQUU7S0FDVjs7VUFDSyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7O1FBQ3pCLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTTtJQUNuQixPQUFPLENBQUMsRUFBRSxFQUFFO1FBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7S0FBRTtJQUMxQyxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLElBQVk7SUFDL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNoQyxDQUFDOzs7Ozs7Ozs7Ozs7QUFZRCxNQUFNLE9BQWdCLGlCQUFpQjtDQWlCdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBREEsOERBQThFOzs7Ozs7Ozs7OztBQWEvRSxNQUFNLE9BQU8sbUJBQW1COzs7O0lBb0QvQixZQUFZLFNBQThCLEVBQUU7UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7O1lBRW5CLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsaUJBQWlCLEVBQUUsS0FBSzs7WUFDeEIsS0FBSyxFQUFFLEdBQUc7O1lBQ1YsU0FBUyxFQUFFLEtBQUs7O1lBQ2hCLGtCQUFrQixFQUFFLEtBQUs7O1lBQ3pCLE9BQU8sRUFBRSxJQUFJOztZQUNiLE9BQU8sRUFBRSxLQUFLOztZQUNkLE1BQU0sRUFBRSxJQUFJOztZQUNaLE1BQU0sRUFBRSxLQUFLOztZQUNiLE9BQU8sRUFBRSxTQUFTOztZQUNsQixJQUFJLEVBQUUsU0FBUzs7WUFDZixRQUFRLEVBQUUsU0FBUyxDQUFDLDREQUE0RDtTQUNoRixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ1osQ0FBQzs7O1lBckVELFVBQVU7Ozs7WUFxRFUsbUJBQW1COzs7Ozs7OztJQS9DdkMsc0NBQWlCOzs7OztJQUlqQixrREFBOEI7Ozs7OztJQUs5QixnREFBNEI7Ozs7O0lBSTVCLG9DQUFlOzs7OztJQUlmLHdDQUFvQjs7Ozs7SUFJcEIsbUNBQWM7Ozs7O0lBSWQsaURBQTZCOzs7OztJQUk3QixzQ0FBa0I7Ozs7O0lBSWxCLHNDQUFrQjs7Ozs7SUFJbEIscUNBQWlCOzs7OztJQUlqQixxQ0FBaUI7Ozs7O0lBSWpCLHVDQUFrQjs7Ozs7Ozs7Ozs7OztBQStCbkIsc0NBTUM7OztJQUxBLG1DQUFnQjs7SUFDaEIsMENBQXVCOztJQUN2Qiw4QkFBVzs7SUFDWCxpQ0FBNkI7O0lBQzdCLHVDQUFvQjs7Ozs7QUFHckIscUNBTUM7Ozs7Ozs7O0lBREEsc0RBQWtDOzs7Ozs7QUFJbkMsNkJBZUM7OztJQWRBLHlCQUFlOztJQUNmLDJCQUFpQjs7SUFDakIsNEJBQWtCOztJQUNsQiwyQkFBaUI7O0lBQ2pCLHVCQUFhOztJQUNiLDJCQUFpQjs7SUFDakIsdUJBQWE7O0lBQ2IsdUJBQWE7O0lBQ2IsMkJBQWlCOztJQUNqQix1QkFBYTs7SUFDYiw0QkFBa0I7O0lBQ2xCLHVCQUFhOztJQUNiLHdCQUFjOztJQUNkLHlCQUFlOzs7Ozs7OztBQVFoQixtQ0FZQzs7O0lBWEEsZ0NBQTBCOztJQUMxQiw2QkFBVTs7SUFDVixnQ0FBZ0I7O0lBQ2hCLHVDQUF1Qjs7SUFDdkIsbUNBQWdCOztJQUNoQixnQ0FBcUI7O0lBQ3JCLCtCQUFlOztJQUNmLDJCQUFROztJQUNSLDhCQUE2Qjs7SUFDN0Isb0NBQW9COztJQUNwQiw0QkFBWTs7Ozs7QUFHYixvQ0F5QkM7Ozs7OztJQXJCQSw4QkFBNEM7Ozs7O0lBSzVDLGlDQUFzQjs7Ozs7O0lBTXRCLGdDQUFnQjs7Ozs7SUFLaEIsb0NBQW9COzs7OztJQUlwQiw2QkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9iYWNrZW5kLnNlcnZpY2UnO1xuXG4vKiogUmV0dXJuIGluZm9ybWF0aW9uIChVcmlJbmZvKSBhYm91dCBhIFVSSSAgKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVyaShzdHI6IHN0cmluZyk6IFVyaUluZm8ge1xuXHQvLyBBZGFwdGVkIGZyb20gcGFyc2V1cmkgcGFja2FnZSAtIGh0dHA6Ly9ibG9nLnN0ZXZlbmxldml0aGFuLmNvbS9hcmNoaXZlcy9wYXJzZXVyaVxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG5cdGNvbnN0IFVSTF9SRUdFWCA9IC9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKFteOlxcLz8jLl0rKTopPyg/OlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oW146XFwvPyNdKikoPzo6KFxcZCopKT8pKCgoXFwvKD86W14/I10oPyFbXj8jXFwvXSpcXC5bXj8jXFwvLl0rKD86Wz8jXXwkKSkpKlxcLz8pPyhbXj8jXFwvXSopKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8pLztcblx0Y29uc3QgbSA9IFVSTF9SRUdFWC5leGVjKHN0cik7XG5cdGNvbnN0IHVyaTogVXJpSW5mbyA9IHtcblx0XHRzb3VyY2U6ICcnLFxuXHRcdHByb3RvY29sOiAnJyxcblx0XHRhdXRob3JpdHk6ICcnLFxuXHRcdHVzZXJJbmZvOiAnJyxcblx0XHR1c2VyOiAnJyxcblx0XHRwYXNzd29yZDogJycsXG5cdFx0aG9zdDogJycsXG5cdFx0cG9ydDogJycsXG5cdFx0cmVsYXRpdmU6ICcnLFxuXHRcdHBhdGg6ICcnLFxuXHRcdGRpcmVjdG9yeTogJycsXG5cdFx0ZmlsZTogJycsXG5cdFx0cXVlcnk6ICcnLFxuXHRcdGFuY2hvcjogJydcblx0fTtcblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHVyaSk7XG5cdGxldCBpID0ga2V5cy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pIHsgdXJpW2tleXNbaV1dID0gbVtpXSB8fCAnJzsgfVxuXHRyZXR1cm4gdXJpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpIHtcblx0cmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKTtcbn1cblxuLyoqXG4qIEludGVyZmFjZSBmb3IgYSBjbGFzcyB0aGF0IGNyZWF0ZXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlXG4qXG4qIEl0cyBgY3JlYXRlRGJgIG1ldGhvZCBjcmVhdGVzIGEgaGFzaCBvZiBuYW1lZCBjb2xsZWN0aW9ucyB0aGF0IHJlcHJlc2VudHMgdGhlIGRhdGFiYXNlXG4qXG4qIEZvciBtYXhpbXVtIGZsZXhpYmlsaXR5LCB0aGUgc2VydmljZSBtYXkgZGVmaW5lIEhUVFAgbWV0aG9kIG92ZXJyaWRlcy5cbiogU3VjaCBtZXRob2RzIG11c3QgbWF0Y2ggdGhlIHNwZWxsaW5nIG9mIGFuIEhUVFAgbWV0aG9kIGluIGxvd2VyIGNhc2UgKGUuZywgXCJnZXRcIikuXG4qIElmIGEgcmVxdWVzdCBoYXMgYSBtYXRjaGluZyBtZXRob2QsIGl0IHdpbGwgYmUgY2FsbGVkIGFzIGluXG4qIGBnZXQoaW5mbzogcmVxdWVzdEluZm8sIGRiOiB7fSlgIHdoZXJlIGBkYmAgaXMgdGhlIGRhdGFiYXNlIG9iamVjdCBkZXNjcmliZWQgYWJvdmUuXG4qL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1lbW9yeURhdGFTZXJ2aWNlIHtcblx0LyoqXG5cdCogQ3JlYXRlcyBhbiBpbi1tZW1vcnkgXCJkYXRhYmFzZVwiIGhhc2ggd2hvc2Uga2V5cyBhcmUgY29sbGVjdGlvbiBuYW1lc1xuXHQqIGFuZCB3aG9zZSB2YWx1ZXMgYXJlIGFycmF5cyBvZiBjb2xsZWN0aW9uIG9iamVjdHMgdG8gcmV0dXJuIG9yIHVwZGF0ZS5cblx0KlxuXHQqIHJldHVybnMgT2JzZXJ2YWJsZSBvZiB0aGUgZGF0YWJhc2UgYmVjYXVzZSBjb3VsZCBoYXZlIHRvIGNyZWF0ZSBpdCBhc3luY2hyb25vdXNseS5cblx0KlxuXHQqIFRoaXMgbWV0aG9kIG11c3QgYmUgc2FmZSB0byBjYWxsIHJlcGVhdGVkbHkuXG5cdCogRWFjaCB0aW1lIGl0IHNob3VsZCByZXR1cm4gYSBuZXcgb2JqZWN0IHdpdGggbmV3IGFycmF5cyBjb250YWluaW5nIG5ldyBpdGVtIG9iamVjdHMuXG5cdCogVGhpcyBjb25kaXRpb24gYWxsb3dzIHRoZSBpbi1tZW1vcnkgYmFja2VuZCBzZXJ2aWNlIHRvIG11dGF0ZSB0aGUgY29sbGVjdGlvbnNcblx0KiBhbmQgdGhlaXIgaXRlbXMgd2l0aG91dCB0b3VjaGluZyB0aGUgb3JpZ2luYWwgc291cmNlIGRhdGEuXG5cdCpcblx0KiBUaGUgaW4tbWVtIGJhY2tlbmQgc2VydmljZSBjYWxscyB0aGlzIG1ldGhvZCB3aXRob3V0IGEgdmFsdWUgdGhlIGZpcnN0IHRpbWUuXG5cdCogVGhlIHNlcnZpY2UgY2FsbHMgaXQgd2l0aCB0aGUgYE1lbW9yeVJlcXVlc3RgIHdoZW4gaXQgcmVjZWl2ZXMgYSBQT1NUIGBjb21tYW5kcy9yZXNldERiYCByZXF1ZXN0LlxuXHQqIFlvdXIgTWVtb3J5RGF0YVNlcnZpY2UgY2FuIGFkanVzdCBpdHMgYmVoYXZpb3IgYWNjb3JkaW5nbHkuXG5cdCovXG5cdGFic3RyYWN0IGNyZWF0ZURiKHJlcUluZm8/OiBNZW1vcnlSZXF1ZXN0KToge30gfCBPYnNlcnZhYmxlPHt9PiB8IFByb21pc2U8e30+O1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qKlxuKiAgTWVtb3J5QmFja2VuZENvbmZpZyBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiogIFVzYWdlOlxuKiAgICBNZW1vcnlNb2R1bGUuZm9yUm9vdChJbk1lbUhlcm9TZXJ2aWNlLCB7ZGVsYXk6IDYwMH0pXG4qXG4qICBvciBpZiBwcm92aWRpbmcgc2VwYXJhdGVseTpcbiogICAgcHJvdmlkZShNZW1vcnlCYWNrZW5kQ29uZmlnLCB7dXNlVmFsdWU6IHtkZWxheTogNjAwfX0pLFxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZW1vcnlCYWNrZW5kQ29uZmlnIHtcblx0LyoqXG5cdCAqIFRoZSBiYXNlIHBhdGggdG8gdGhlIGFwaSwgZS5nLCAnYXBpLycuXG5cdCAqIElmIG5vdCBzcGVjaWZpZWQgdGhhbiBgcGFyc2VSZXF1ZXN0VXJsYCBhc3N1bWVzIGl0IGlzIHRoZSBmaXJzdCBwYXRoIHNlZ21lbnQgaW4gdGhlIHJlcXVlc3QuXG5cdCAqL1xuXHRhcGlCYXNlPzogc3RyaW5nO1xuXHQvKipcblx0ICogZmFsc2UgKGRlZmF1bHQpIGlmIHNlYXJjaCBtYXRjaCBzaG91bGQgYmUgY2FzZSBpbnNlbnNpdGl2ZVxuXHQgKi9cblx0Y2FzZVNlbnNpdGl2ZVNlYXJjaD86IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBmYWxzZSAoZGVmYXVsdCkgcHV0IGNvbnRlbnQgZGlyZWN0bHkgaW5zaWRlIHRoZSByZXNwb25zZSBib2R5LlxuXHQgKiB0cnVlOiBlbmNhcHN1bGF0ZSBjb250ZW50IGluIGEgYGRhdGFgIHByb3BlcnR5IGluc2lkZSB0aGUgcmVzcG9uc2UgYm9keSwgYHsgZGF0YTogLi4uIH1gLlxuXHQgKi9cblx0ZGF0YUVuY2Fwc3VsYXRpb24/OiBib29sZWFuO1xuXHQvKipcblx0ICogZGVsYXkgKGluIG1zKSB0byBzaW11bGF0ZSBsYXRlbmN5XG5cdCAqL1xuXHRkZWxheT86IG51bWJlcjtcblx0LyoqXG5cdCAqIGZhbHNlIChkZWZhdWx0KSBzaG91bGQgMjA0IHdoZW4gb2JqZWN0LXRvLWRlbGV0ZSBub3QgZm91bmQ7IHRydWU6IDQwNFxuXHQgKi9cblx0ZGVsZXRlNDA0PzogYm9vbGVhbjtcblx0LyoqXG5cdCAqIGhvc3QgZm9yIHRoaXMgc2VydmljZSwgZS5nLiwgJ2xvY2FsaG9zdCdcblx0ICovXG5cdGhvc3Q/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBmYWxzZSAoZGVmYXVsdCkgc2hvdWxkIHBhc3MgdW5yZWNvZ25pemVkIHJlcXVlc3QgVVJMIHRocm91Z2ggdG8gb3JpZ2luYWwgYmFja2VuZDsgdHJ1ZTogNDA0XG5cdCAqL1xuXHRwYXNzVGhydVVua25vd25Vcmw/OiBib29sZWFuO1xuXHQvKipcblx0ICogdHJ1ZSAoZGVmYXVsdCkgc2hvdWxkIE5PVCByZXR1cm4gdGhlIGl0ZW0gKDIwNCkgYWZ0ZXIgYSBQT1NULiBmYWxzZTogcmV0dXJuIHRoZSBpdGVtICgyMDApLlxuXHQgKi9cblx0cG9zdDIwND86IGJvb2xlYW47XG5cdC8qKlxuXHQqIGZhbHNlIChkZWZhdWx0KSBzaG91bGQgTk9UIHVwZGF0ZSBleGlzdGluZyBpdGVtIHdpdGggUE9TVC4gZmFsc2U6IE9LIHRvIHVwZGF0ZS5cblx0Ki9cblx0cG9zdDQwOT86IGJvb2xlYW47XG5cdC8qKlxuXHQqIHRydWUgKGRlZmF1bHQpIHNob3VsZCBOT1QgcmV0dXJuIHRoZSBpdGVtICgyMDQpIGFmdGVyIGEgUE9TVC4gZmFsc2U6IHJldHVybiB0aGUgaXRlbSAoMjAwKS5cblx0Ki9cblx0cHV0MjA0PzogYm9vbGVhbjtcblx0LyoqXG5cdCAqIGZhbHNlIChkZWZhdWx0KSBpZiBpdGVtIG5vdCBmb3VuZCwgY3JlYXRlIGFzIG5ldyBpdGVtOyBmYWxzZTogc2hvdWxkIDQwNC5cblx0ICovXG5cdHB1dDQwND86IGJvb2xlYW47XG5cdC8qKlxuXHQgKiByb290IHBhdGggX2JlZm9yZV8gYW55IEFQSSBjYWxsLCBlLmcuLCAnJ1xuXHQgKi9cblx0cm9vdFBhdGg/OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoY29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnID0ge30pIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHtcblx0XHRcdC8vIGRlZmF1bHQgY29uZmlnOlxuXHRcdFx0Y2FzZVNlbnNpdGl2ZVNlYXJjaDogZmFsc2UsXG5cdFx0XHRkYXRhRW5jYXBzdWxhdGlvbjogZmFsc2UsIC8vIGRvIE5PVCB3cmFwIGNvbnRlbnQgd2l0aGluIGFuIG9iamVjdCB3aXRoIGEgYGRhdGFgIHByb3BlcnR5XG5cdFx0XHRkZWxheTogNTAwLCAvLyBzaW11bGF0ZSBsYXRlbmN5IGJ5IGRlbGF5aW5nIHJlc3BvbnNlXG5cdFx0XHRkZWxldGU0MDQ6IGZhbHNlLCAvLyBkb24ndCBjb21wbGFpbiBpZiBjYW4ndCBmaW5kIGVudGl0eSB0byBkZWxldGVcblx0XHRcdHBhc3NUaHJ1VW5rbm93blVybDogZmFsc2UsIC8vIDQwNCBpZiBjYW4ndCBwcm9jZXNzIFVSTFxuXHRcdFx0cG9zdDIwNDogdHJ1ZSwgLy8gZG9uJ3QgcmV0dXJuIHRoZSBpdGVtIGFmdGVyIGEgUE9TVFxuXHRcdFx0cG9zdDQwOTogZmFsc2UsIC8vIGRvbid0IHVwZGF0ZSBleGlzdGluZyBpdGVtIHdpdGggdGhhdCBJRFxuXHRcdFx0cHV0MjA0OiB0cnVlLCAgLy8gZG9uJ3QgcmV0dXJuIHRoZSBpdGVtIGFmdGVyIGEgUFVUXG5cdFx0XHRwdXQ0MDQ6IGZhbHNlLCAvLyBjcmVhdGUgbmV3IGl0ZW0gaWYgUFVUIGl0ZW0gd2l0aCB0aGF0IElEIG5vdCBmb3VuZFxuXHRcdFx0YXBpQmFzZTogdW5kZWZpbmVkLCAvLyBhc3N1bWVkIHRvIGJlIHRoZSBmaXJzdCBwYXRoIHNlZ21lbnRcblx0XHRcdGhvc3Q6IHVuZGVmaW5lZCwgICAgLy8gZGVmYXVsdCB2YWx1ZSBpcyBhY3R1YWxseSBzZXQgaW4gTWVtb3J5QmFja2VuZENvbmZpZyBjdG9yXG5cdFx0XHRyb290UGF0aDogdW5kZWZpbmVkIC8vIGRlZmF1bHQgdmFsdWUgaXMgYWN0dWFsbHkgc2V0IGluIE1lbW9yeUJhY2tlbmRDb25maWcgY3RvclxuXHRcdH0sIGNvbmZpZyk7XG5cdH1cbn1cblxuLyoqXG4gKlxuICogSW50ZXJmYWNlIGZvciB0aGUgcmVzdWx0IG9mIHRoZSBgcGFyc2VSZXF1ZXN0VXJsYCBtZXRob2Q6XG4gKiAgIEdpdmVuIFVSTCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvY3VzdG9tZXJzLzQyP2Zvbz0xIHRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHJldHVybnNcbiAqICAgICBiYXNlOiAnYXBpLydcbiAqICAgICBjb2xsZWN0aW9uTmFtZTogJ2N1c3RvbWVycydcbiAqICAgICBpZDogJzQyJ1xuICogICAgIHF1ZXJ5OiB0aGlzLmNyZWF0ZVF1ZXJ5KCdmb289MScpXG4gKiAgICAgcmVzb3VyY2VVcmw6ICdodHRwOi8vbG9jYWxob3N0L2FwaS9jdXN0b21lcnMvJ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFJlcXVlc3RVcmwge1xuXHRhcGlCYXNlOiBzdHJpbmc7ICAgICAgICAgICAvLyB0aGUgc2xhc2gtdGVybWluYXRlZCBcImJhc2VcIiBmb3IgYXBpIHJlcXVlc3RzIChlLmcuIGBhcGkvYClcblx0Y29sbGVjdGlvbk5hbWU6IHN0cmluZzsgLy8gdGhlIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb24gb2YgZGF0YSBpdGVtcyAoZS5nLixgY3VzdG9tZXJzYClcblx0aWQ6IHN0cmluZzsgICAgICAgICAgICAgLy8gdGhlIChvcHRpb25hbCkgaWQgb2YgdGhlIGl0ZW0gaW4gdGhlIGNvbGxlY3Rpb24gKGUuZy4sIGA0MmApXG5cdHF1ZXJ5OiBNYXA8c3RyaW5nLCBzdHJpbmdbXT47IC8vIHRoZSBxdWVyeSBwYXJhbWV0ZXJzO1xuXHRyZXNvdXJjZVVybDogc3RyaW5nOyAgICAvLyB0aGUgZWZmZWN0aXZlIFVSTCBmb3IgdGhlIHJlc291cmNlIChlLmcuLCAnaHR0cDovL2xvY2FsaG9zdC9hcGkvY3VzdG9tZXJzLycpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFzc1RocnVCYWNrZW5kIHtcblx0LyoqXG5cdCAqIEhhbmRsZSBhbiBIVFRQIHJlcXVlc3QgYW5kIHJldHVybiBhbiBPYnNlcnZhYmxlIG9mIEhUVFAgcmVzcG9uc2Vcblx0ICogQm90aCB0aGUgcmVxdWVzdCB0eXBlIGFuZCB0aGUgcmVzcG9uc2UgdHlwZSBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgc3VwcG9ydGluZyBIVFRQIGxpYnJhcnkuXG5cdCAqL1xuXHRoYW5kbGUocmVxOiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG59XG5cbi8qKiBJbnRlcmZhY2Ugb2YgaW5mb3JtYXRpb24gYWJvdXQgYSBVcmkgICovXG5leHBvcnQgaW50ZXJmYWNlIFVyaUluZm8ge1xuXHRzb3VyY2U6IHN0cmluZztcblx0cHJvdG9jb2w6IHN0cmluZztcblx0YXV0aG9yaXR5OiBzdHJpbmc7XG5cdHVzZXJJbmZvOiBzdHJpbmc7XG5cdHVzZXI6IHN0cmluZztcblx0cGFzc3dvcmQ6IHN0cmluZztcblx0aG9zdDogc3RyaW5nO1xuXHRwb3J0OiBzdHJpbmc7XG5cdHJlbGF0aXZlOiBzdHJpbmc7XG5cdHBhdGg6IHN0cmluZztcblx0ZGlyZWN0b3J5OiBzdHJpbmc7XG5cdGZpbGU6IHN0cmluZztcblx0cXVlcnk6IHN0cmluZztcblx0YW5jaG9yOiBzdHJpbmc7XG59XG5cbi8qKlxuKiBJbnRlcmZhY2UgZm9yIG9iamVjdCB3LyBpbmZvIGFib3V0IHRoZSBjdXJyZW50IHJlcXVlc3QgdXJsXG4qIGV4dHJhY3RlZCBmcm9tIGFuIEh0dHAgUmVxdWVzdC5cbiogQWxzbyBob2xkcyB1dGlsaXR5IG1ldGhvZHMgYW5kIGNvbmZpZ3VyYXRpb24gZGF0YSBmcm9tIHRoaXMgc2VydmljZVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWVtb3J5UmVxdWVzdCB7XG5cdHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT47IC8vIGNvbmNyZXRlIHR5cGUgZGVwZW5kcyB1cG9uIHRoZSBIdHRwIGxpYnJhcnlcblx0Ym9keTogYW55O1xuXHRhcGlCYXNlOiBzdHJpbmc7XG5cdGNvbGxlY3Rpb25OYW1lOiBzdHJpbmc7XG5cdGNvbGxlY3Rpb246IGFueTtcblx0aGVhZGVyczogSHR0cEhlYWRlcnM7XG5cdG1ldGhvZDogc3RyaW5nO1xuXHRpZDogYW55O1xuXHRxdWVyeTogTWFwPHN0cmluZywgc3RyaW5nW10+O1xuXHRyZXNvdXJjZVVybDogc3RyaW5nO1xuXHR1cmw6IHN0cmluZzsgLy8gcmVxdWVzdCBVUkxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZW1vcnlSZXNwb25zZSB7XG5cdC8qKlxuXHQgKiBTdHJpbmcsIE9iamVjdCwgQXJyYXlCdWZmZXIgb3IgQmxvYiByZXByZXNlbnRpbmcgdGhlIGJvZHkgb2YgdGhlIHtAbGluayBSZXNwb25zZX0uXG5cdCAqL1xuXHRib2R5Pzogc3RyaW5nIHwgT2JqZWN0IHwgQXJyYXlCdWZmZXIgfCBCbG9iO1xuXG5cdC8qKlxuXHQgKiBSZXNwb25zZSBoZWFkZXJzXG5cdCAqL1xuXHRoZWFkZXJzPzogSHR0cEhlYWRlcnM7XG5cblx0LyoqXG5cdCAqIEh0dHAge0BsaW5rIGh0dHA6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMTAuaHRtbCBzdGF0dXMgY29kZX1cblx0ICogYXNzb2NpYXRlZCB3aXRoIHRoZSByZXNwb25zZS5cblx0ICovXG5cdHN0YXR1cz86IG51bWJlcjtcblxuXHQvKipcblx0ICogU3RhdHVzIHRleHQgZm9yIHRoZSBzdGF0dXMgY29kZVxuXHQgKi9cblx0c3RhdHVzVGV4dD86IHN0cmluZztcblx0LyoqXG5cdCAqIHJlcXVlc3QgdXJsXG5cdCAqL1xuXHR1cmw/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogUHJvdmlkZSBhIGByZXF1ZXN0SW50ZXJjZXB0b3JgIG1ldGhvZCBvZiB0aGlzIHR5cGUgaW4geW91ciBgTWVtb3J5RGF0YVNlcnZpY2VgIHRvXG4gKiBpbnRlcmNlcHQgdGhlIGNyZWF0ZWQgTWVtb3J5UmVxdWVzdC5cbiAqL1xuZXhwb3J0IHR5cGUgUmVxdWVzdEludGVyY2VwdG9yID0gKHJlcXVlc3Q6IE1lbW9yeVJlcXVlc3QsIHNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlKSA9PiBNZW1vcnlSZXNwb25zZSB8IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBQcm92aWRlIGEgYHJlc3BvbnNlSW50ZXJjZXB0b3JgIG1ldGhvZCBvZiB0aGlzIHR5cGUgaW4geW91ciBgTWVtb3J5RGF0YVNlcnZpY2VgIHRvXG4gKiBtb3JwaCB0aGUgcmVzcG9uc2Ugb3B0aW9ucyBjcmVhdGVkIGluIHRoZSBgY29sbGVjdGlvbkhhbmRsZXJgLlxuICovXG5leHBvcnQgdHlwZSBSZXNwb25zZUludGVyY2VwdG9yID0gKHJlc3BvbnNlOiBNZW1vcnlSZXNwb25zZSwgcmVxdWVzdDogTWVtb3J5UmVxdWVzdCkgPT4gTWVtb3J5UmVzcG9uc2U7XG4iXX0=