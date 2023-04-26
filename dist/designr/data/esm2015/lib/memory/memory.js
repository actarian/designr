/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvbWVtb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFLM0MsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFXOzs7O1VBRzdCLFNBQVMsR0FBRyxrTUFBa007O1VBQzlNLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7VUFDdkIsR0FBRyxHQUFZO1FBQ3BCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO1FBQ1osSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLEVBQUU7UUFDYixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsTUFBTSxFQUFFLEVBQUU7S0FDVjs7VUFDSyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7O1FBQ3pCLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTTtJQUNuQixPQUFPLENBQUMsRUFBRSxFQUFFO1FBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7S0FBRTtJQUMxQyxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLElBQVk7SUFDL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNoQyxDQUFDOzs7Ozs7Ozs7Ozs7QUFZRCxNQUFNLE9BQWdCLGlCQUFpQjtDQWlCdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBREEsOERBQThFOzs7Ozs7Ozs7OztBQWEvRSxNQUFNLE9BQU8sbUJBQW1COzs7O0lBb0QvQixZQUFZLFNBQThCLEVBQUU7UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7O1lBRW5CLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsaUJBQWlCLEVBQUUsS0FBSzs7WUFDeEIsS0FBSyxFQUFFLEdBQUc7O1lBQ1YsU0FBUyxFQUFFLEtBQUs7O1lBQ2hCLGtCQUFrQixFQUFFLEtBQUs7O1lBQ3pCLE9BQU8sRUFBRSxJQUFJOztZQUNiLE9BQU8sRUFBRSxLQUFLOztZQUNkLE1BQU0sRUFBRSxJQUFJOztZQUNaLE1BQU0sRUFBRSxLQUFLOztZQUNiLE9BQU8sRUFBRSxTQUFTOztZQUNsQixJQUFJLEVBQUUsU0FBUzs7WUFDZixRQUFRLEVBQUUsU0FBUyxDQUFDLDREQUE0RDtTQUNoRixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ1osQ0FBQzs7O1lBckVELFVBQVU7Ozs7WUFxRFUsbUJBQW1COzs7Ozs7OztJQS9DdkMsc0NBQWlCOzs7OztJQUlqQixrREFBOEI7Ozs7OztJQUs5QixnREFBNEI7Ozs7O0lBSTVCLG9DQUFlOzs7OztJQUlmLHdDQUFvQjs7Ozs7SUFJcEIsbUNBQWM7Ozs7O0lBSWQsaURBQTZCOzs7OztJQUk3QixzQ0FBa0I7Ozs7O0lBSWxCLHNDQUFrQjs7Ozs7SUFJbEIscUNBQWlCOzs7OztJQUlqQixxQ0FBaUI7Ozs7O0lBSWpCLHVDQUFrQjs7Ozs7Ozs7Ozs7OztBQStCbkIsc0NBTUM7OztJQUxBLG1DQUFnQjs7SUFDaEIsMENBQXVCOztJQUN2Qiw4QkFBVzs7SUFDWCxpQ0FBNkI7O0lBQzdCLHVDQUFvQjs7Ozs7QUFHckIscUNBTUM7Ozs7Ozs7O0lBREEsc0RBQWtDOzs7Ozs7QUFJbkMsNkJBZUM7OztJQWRBLHlCQUFlOztJQUNmLDJCQUFpQjs7SUFDakIsNEJBQWtCOztJQUNsQiwyQkFBaUI7O0lBQ2pCLHVCQUFhOztJQUNiLDJCQUFpQjs7SUFDakIsdUJBQWE7O0lBQ2IsdUJBQWE7O0lBQ2IsMkJBQWlCOztJQUNqQix1QkFBYTs7SUFDYiw0QkFBa0I7O0lBQ2xCLHVCQUFhOztJQUNiLHdCQUFjOztJQUNkLHlCQUFlOzs7Ozs7OztBQVFoQixtQ0FZQzs7O0lBWEEsZ0NBQTBCOztJQUMxQiw2QkFBVTs7SUFDVixnQ0FBZ0I7O0lBQ2hCLHVDQUF1Qjs7SUFDdkIsbUNBQWdCOztJQUNoQixnQ0FBcUI7O0lBQ3JCLCtCQUFlOztJQUNmLDJCQUFROztJQUNSLDhCQUE2Qjs7SUFDN0Isb0NBQW9COztJQUNwQiw0QkFBWTs7Ozs7QUFHYixvQ0F5QkM7Ozs7OztJQXJCQSw4QkFBNEM7Ozs7O0lBSzVDLGlDQUFzQjs7Ozs7O0lBTXRCLGdDQUFnQjs7Ozs7SUFLaEIsb0NBQW9COzs7OztJQUlwQiw2QkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9iYWNrZW5kLnNlcnZpY2UnO1xyXG5cclxuLyoqIFJldHVybiBpbmZvcm1hdGlvbiAoVXJpSW5mbykgYWJvdXQgYSBVUkkgICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVyaShzdHI6IHN0cmluZyk6IFVyaUluZm8ge1xyXG5cdC8vIEFkYXB0ZWQgZnJvbSBwYXJzZXVyaSBwYWNrYWdlIC0gaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL3BhcnNldXJpXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG5cdGNvbnN0IFVSTF9SRUdFWCA9IC9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKFteOlxcLz8jLl0rKTopPyg/OlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oW146XFwvPyNdKikoPzo6KFxcZCopKT8pKCgoXFwvKD86W14/I10oPyFbXj8jXFwvXSpcXC5bXj8jXFwvLl0rKD86Wz8jXXwkKSkpKlxcLz8pPyhbXj8jXFwvXSopKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8pLztcclxuXHRjb25zdCBtID0gVVJMX1JFR0VYLmV4ZWMoc3RyKTtcclxuXHRjb25zdCB1cmk6IFVyaUluZm8gPSB7XHJcblx0XHRzb3VyY2U6ICcnLFxyXG5cdFx0cHJvdG9jb2w6ICcnLFxyXG5cdFx0YXV0aG9yaXR5OiAnJyxcclxuXHRcdHVzZXJJbmZvOiAnJyxcclxuXHRcdHVzZXI6ICcnLFxyXG5cdFx0cGFzc3dvcmQ6ICcnLFxyXG5cdFx0aG9zdDogJycsXHJcblx0XHRwb3J0OiAnJyxcclxuXHRcdHJlbGF0aXZlOiAnJyxcclxuXHRcdHBhdGg6ICcnLFxyXG5cdFx0ZGlyZWN0b3J5OiAnJyxcclxuXHRcdGZpbGU6ICcnLFxyXG5cdFx0cXVlcnk6ICcnLFxyXG5cdFx0YW5jaG9yOiAnJ1xyXG5cdH07XHJcblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHVyaSk7XHJcblx0bGV0IGkgPSBrZXlzLmxlbmd0aDtcclxuXHR3aGlsZSAoaS0tKSB7IHVyaVtrZXlzW2ldXSA9IG1baV0gfHwgJyc7IH1cclxuXHRyZXR1cm4gdXJpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpIHtcclxuXHRyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xyXG59XHJcblxyXG4vKipcclxuKiBJbnRlcmZhY2UgZm9yIGEgY2xhc3MgdGhhdCBjcmVhdGVzIGFuIGluLW1lbW9yeSBkYXRhYmFzZVxyXG4qXHJcbiogSXRzIGBjcmVhdGVEYmAgbWV0aG9kIGNyZWF0ZXMgYSBoYXNoIG9mIG5hbWVkIGNvbGxlY3Rpb25zIHRoYXQgcmVwcmVzZW50cyB0aGUgZGF0YWJhc2VcclxuKlxyXG4qIEZvciBtYXhpbXVtIGZsZXhpYmlsaXR5LCB0aGUgc2VydmljZSBtYXkgZGVmaW5lIEhUVFAgbWV0aG9kIG92ZXJyaWRlcy5cclxuKiBTdWNoIG1ldGhvZHMgbXVzdCBtYXRjaCB0aGUgc3BlbGxpbmcgb2YgYW4gSFRUUCBtZXRob2QgaW4gbG93ZXIgY2FzZSAoZS5nLCBcImdldFwiKS5cclxuKiBJZiBhIHJlcXVlc3QgaGFzIGEgbWF0Y2hpbmcgbWV0aG9kLCBpdCB3aWxsIGJlIGNhbGxlZCBhcyBpblxyXG4qIGBnZXQoaW5mbzogcmVxdWVzdEluZm8sIGRiOiB7fSlgIHdoZXJlIGBkYmAgaXMgdGhlIGRhdGFiYXNlIG9iamVjdCBkZXNjcmliZWQgYWJvdmUuXHJcbiovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZW1vcnlEYXRhU2VydmljZSB7XHJcblx0LyoqXHJcblx0KiBDcmVhdGVzIGFuIGluLW1lbW9yeSBcImRhdGFiYXNlXCIgaGFzaCB3aG9zZSBrZXlzIGFyZSBjb2xsZWN0aW9uIG5hbWVzXHJcblx0KiBhbmQgd2hvc2UgdmFsdWVzIGFyZSBhcnJheXMgb2YgY29sbGVjdGlvbiBvYmplY3RzIHRvIHJldHVybiBvciB1cGRhdGUuXHJcblx0KlxyXG5cdCogcmV0dXJucyBPYnNlcnZhYmxlIG9mIHRoZSBkYXRhYmFzZSBiZWNhdXNlIGNvdWxkIGhhdmUgdG8gY3JlYXRlIGl0IGFzeW5jaHJvbm91c2x5LlxyXG5cdCpcclxuXHQqIFRoaXMgbWV0aG9kIG11c3QgYmUgc2FmZSB0byBjYWxsIHJlcGVhdGVkbHkuXHJcblx0KiBFYWNoIHRpbWUgaXQgc2hvdWxkIHJldHVybiBhIG5ldyBvYmplY3Qgd2l0aCBuZXcgYXJyYXlzIGNvbnRhaW5pbmcgbmV3IGl0ZW0gb2JqZWN0cy5cclxuXHQqIFRoaXMgY29uZGl0aW9uIGFsbG93cyB0aGUgaW4tbWVtb3J5IGJhY2tlbmQgc2VydmljZSB0byBtdXRhdGUgdGhlIGNvbGxlY3Rpb25zXHJcblx0KiBhbmQgdGhlaXIgaXRlbXMgd2l0aG91dCB0b3VjaGluZyB0aGUgb3JpZ2luYWwgc291cmNlIGRhdGEuXHJcblx0KlxyXG5cdCogVGhlIGluLW1lbSBiYWNrZW5kIHNlcnZpY2UgY2FsbHMgdGhpcyBtZXRob2Qgd2l0aG91dCBhIHZhbHVlIHRoZSBmaXJzdCB0aW1lLlxyXG5cdCogVGhlIHNlcnZpY2UgY2FsbHMgaXQgd2l0aCB0aGUgYE1lbW9yeVJlcXVlc3RgIHdoZW4gaXQgcmVjZWl2ZXMgYSBQT1NUIGBjb21tYW5kcy9yZXNldERiYCByZXF1ZXN0LlxyXG5cdCogWW91ciBNZW1vcnlEYXRhU2VydmljZSBjYW4gYWRqdXN0IGl0cyBiZWhhdmlvciBhY2NvcmRpbmdseS5cclxuXHQqL1xyXG5cdGFic3RyYWN0IGNyZWF0ZURiKHJlcUluZm8/OiBNZW1vcnlSZXF1ZXN0KToge30gfCBPYnNlcnZhYmxlPHt9PiB8IFByb21pc2U8e30+O1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLyoqXHJcbiogIE1lbW9yeUJhY2tlbmRDb25maWcgY29uZmlndXJhdGlvbiBvcHRpb25zXHJcbiogIFVzYWdlOlxyXG4qICAgIE1lbW9yeU1vZHVsZS5mb3JSb290KEluTWVtSGVyb1NlcnZpY2UsIHtkZWxheTogNjAwfSlcclxuKlxyXG4qICBvciBpZiBwcm92aWRpbmcgc2VwYXJhdGVseTpcclxuKiAgICBwcm92aWRlKE1lbW9yeUJhY2tlbmRDb25maWcsIHt1c2VWYWx1ZToge2RlbGF5OiA2MDB9fSksXHJcbiovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1lbW9yeUJhY2tlbmRDb25maWcge1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBiYXNlIHBhdGggdG8gdGhlIGFwaSwgZS5nLCAnYXBpLycuXHJcblx0ICogSWYgbm90IHNwZWNpZmllZCB0aGFuIGBwYXJzZVJlcXVlc3RVcmxgIGFzc3VtZXMgaXQgaXMgdGhlIGZpcnN0IHBhdGggc2VnbWVudCBpbiB0aGUgcmVxdWVzdC5cclxuXHQgKi9cclxuXHRhcGlCYXNlPzogc3RyaW5nO1xyXG5cdC8qKlxyXG5cdCAqIGZhbHNlIChkZWZhdWx0KSBpZiBzZWFyY2ggbWF0Y2ggc2hvdWxkIGJlIGNhc2UgaW5zZW5zaXRpdmVcclxuXHQgKi9cclxuXHRjYXNlU2Vuc2l0aXZlU2VhcmNoPzogYm9vbGVhbjtcclxuXHQvKipcclxuXHQgKiBmYWxzZSAoZGVmYXVsdCkgcHV0IGNvbnRlbnQgZGlyZWN0bHkgaW5zaWRlIHRoZSByZXNwb25zZSBib2R5LlxyXG5cdCAqIHRydWU6IGVuY2Fwc3VsYXRlIGNvbnRlbnQgaW4gYSBgZGF0YWAgcHJvcGVydHkgaW5zaWRlIHRoZSByZXNwb25zZSBib2R5LCBgeyBkYXRhOiAuLi4gfWAuXHJcblx0ICovXHJcblx0ZGF0YUVuY2Fwc3VsYXRpb24/OiBib29sZWFuO1xyXG5cdC8qKlxyXG5cdCAqIGRlbGF5IChpbiBtcykgdG8gc2ltdWxhdGUgbGF0ZW5jeVxyXG5cdCAqL1xyXG5cdGRlbGF5PzogbnVtYmVyO1xyXG5cdC8qKlxyXG5cdCAqIGZhbHNlIChkZWZhdWx0KSBzaG91bGQgMjA0IHdoZW4gb2JqZWN0LXRvLWRlbGV0ZSBub3QgZm91bmQ7IHRydWU6IDQwNFxyXG5cdCAqL1xyXG5cdGRlbGV0ZTQwND86IGJvb2xlYW47XHJcblx0LyoqXHJcblx0ICogaG9zdCBmb3IgdGhpcyBzZXJ2aWNlLCBlLmcuLCAnbG9jYWxob3N0J1xyXG5cdCAqL1xyXG5cdGhvc3Q/OiBzdHJpbmc7XHJcblx0LyoqXHJcblx0ICogZmFsc2UgKGRlZmF1bHQpIHNob3VsZCBwYXNzIHVucmVjb2duaXplZCByZXF1ZXN0IFVSTCB0aHJvdWdoIHRvIG9yaWdpbmFsIGJhY2tlbmQ7IHRydWU6IDQwNFxyXG5cdCAqL1xyXG5cdHBhc3NUaHJ1VW5rbm93blVybD86IGJvb2xlYW47XHJcblx0LyoqXHJcblx0ICogdHJ1ZSAoZGVmYXVsdCkgc2hvdWxkIE5PVCByZXR1cm4gdGhlIGl0ZW0gKDIwNCkgYWZ0ZXIgYSBQT1NULiBmYWxzZTogcmV0dXJuIHRoZSBpdGVtICgyMDApLlxyXG5cdCAqL1xyXG5cdHBvc3QyMDQ/OiBib29sZWFuO1xyXG5cdC8qKlxyXG5cdCogZmFsc2UgKGRlZmF1bHQpIHNob3VsZCBOT1QgdXBkYXRlIGV4aXN0aW5nIGl0ZW0gd2l0aCBQT1NULiBmYWxzZTogT0sgdG8gdXBkYXRlLlxyXG5cdCovXHJcblx0cG9zdDQwOT86IGJvb2xlYW47XHJcblx0LyoqXHJcblx0KiB0cnVlIChkZWZhdWx0KSBzaG91bGQgTk9UIHJldHVybiB0aGUgaXRlbSAoMjA0KSBhZnRlciBhIFBPU1QuIGZhbHNlOiByZXR1cm4gdGhlIGl0ZW0gKDIwMCkuXHJcblx0Ki9cclxuXHRwdXQyMDQ/OiBib29sZWFuO1xyXG5cdC8qKlxyXG5cdCAqIGZhbHNlIChkZWZhdWx0KSBpZiBpdGVtIG5vdCBmb3VuZCwgY3JlYXRlIGFzIG5ldyBpdGVtOyBmYWxzZTogc2hvdWxkIDQwNC5cclxuXHQgKi9cclxuXHRwdXQ0MDQ/OiBib29sZWFuO1xyXG5cdC8qKlxyXG5cdCAqIHJvb3QgcGF0aCBfYmVmb3JlXyBhbnkgQVBJIGNhbGwsIGUuZy4sICcnXHJcblx0ICovXHJcblx0cm9vdFBhdGg/OiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZzogTWVtb3J5QmFja2VuZENvbmZpZyA9IHt9KSB7XHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHtcclxuXHRcdFx0Ly8gZGVmYXVsdCBjb25maWc6XHJcblx0XHRcdGNhc2VTZW5zaXRpdmVTZWFyY2g6IGZhbHNlLFxyXG5cdFx0XHRkYXRhRW5jYXBzdWxhdGlvbjogZmFsc2UsIC8vIGRvIE5PVCB3cmFwIGNvbnRlbnQgd2l0aGluIGFuIG9iamVjdCB3aXRoIGEgYGRhdGFgIHByb3BlcnR5XHJcblx0XHRcdGRlbGF5OiA1MDAsIC8vIHNpbXVsYXRlIGxhdGVuY3kgYnkgZGVsYXlpbmcgcmVzcG9uc2VcclxuXHRcdFx0ZGVsZXRlNDA0OiBmYWxzZSwgLy8gZG9uJ3QgY29tcGxhaW4gaWYgY2FuJ3QgZmluZCBlbnRpdHkgdG8gZGVsZXRlXHJcblx0XHRcdHBhc3NUaHJ1VW5rbm93blVybDogZmFsc2UsIC8vIDQwNCBpZiBjYW4ndCBwcm9jZXNzIFVSTFxyXG5cdFx0XHRwb3N0MjA0OiB0cnVlLCAvLyBkb24ndCByZXR1cm4gdGhlIGl0ZW0gYWZ0ZXIgYSBQT1NUXHJcblx0XHRcdHBvc3Q0MDk6IGZhbHNlLCAvLyBkb24ndCB1cGRhdGUgZXhpc3RpbmcgaXRlbSB3aXRoIHRoYXQgSURcclxuXHRcdFx0cHV0MjA0OiB0cnVlLCAgLy8gZG9uJ3QgcmV0dXJuIHRoZSBpdGVtIGFmdGVyIGEgUFVUXHJcblx0XHRcdHB1dDQwNDogZmFsc2UsIC8vIGNyZWF0ZSBuZXcgaXRlbSBpZiBQVVQgaXRlbSB3aXRoIHRoYXQgSUQgbm90IGZvdW5kXHJcblx0XHRcdGFwaUJhc2U6IHVuZGVmaW5lZCwgLy8gYXNzdW1lZCB0byBiZSB0aGUgZmlyc3QgcGF0aCBzZWdtZW50XHJcblx0XHRcdGhvc3Q6IHVuZGVmaW5lZCwgICAgLy8gZGVmYXVsdCB2YWx1ZSBpcyBhY3R1YWxseSBzZXQgaW4gTWVtb3J5QmFja2VuZENvbmZpZyBjdG9yXHJcblx0XHRcdHJvb3RQYXRoOiB1bmRlZmluZWQgLy8gZGVmYXVsdCB2YWx1ZSBpcyBhY3R1YWxseSBzZXQgaW4gTWVtb3J5QmFja2VuZENvbmZpZyBjdG9yXHJcblx0XHR9LCBjb25maWcpO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEludGVyZmFjZSBmb3IgdGhlIHJlc3VsdCBvZiB0aGUgYHBhcnNlUmVxdWVzdFVybGAgbWV0aG9kOlxyXG4gKiAgIEdpdmVuIFVSTCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvY3VzdG9tZXJzLzQyP2Zvbz0xIHRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHJldHVybnNcclxuICogICAgIGJhc2U6ICdhcGkvJ1xyXG4gKiAgICAgY29sbGVjdGlvbk5hbWU6ICdjdXN0b21lcnMnXHJcbiAqICAgICBpZDogJzQyJ1xyXG4gKiAgICAgcXVlcnk6IHRoaXMuY3JlYXRlUXVlcnkoJ2Zvbz0xJylcclxuICogICAgIHJlc291cmNlVXJsOiAnaHR0cDovL2xvY2FsaG9zdC9hcGkvY3VzdG9tZXJzLydcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkUmVxdWVzdFVybCB7XHJcblx0YXBpQmFzZTogc3RyaW5nOyAgICAgICAgICAgLy8gdGhlIHNsYXNoLXRlcm1pbmF0ZWQgXCJiYXNlXCIgZm9yIGFwaSByZXF1ZXN0cyAoZS5nLiBgYXBpL2ApXHJcblx0Y29sbGVjdGlvbk5hbWU6IHN0cmluZzsgLy8gdGhlIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb24gb2YgZGF0YSBpdGVtcyAoZS5nLixgY3VzdG9tZXJzYClcclxuXHRpZDogc3RyaW5nOyAgICAgICAgICAgICAvLyB0aGUgKG9wdGlvbmFsKSBpZCBvZiB0aGUgaXRlbSBpbiB0aGUgY29sbGVjdGlvbiAoZS5nLiwgYDQyYClcclxuXHRxdWVyeTogTWFwPHN0cmluZywgc3RyaW5nW10+OyAvLyB0aGUgcXVlcnkgcGFyYW1ldGVycztcclxuXHRyZXNvdXJjZVVybDogc3RyaW5nOyAgICAvLyB0aGUgZWZmZWN0aXZlIFVSTCBmb3IgdGhlIHJlc291cmNlIChlLmcuLCAnaHR0cDovL2xvY2FsaG9zdC9hcGkvY3VzdG9tZXJzLycpXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFzc1RocnVCYWNrZW5kIHtcclxuXHQvKipcclxuXHQgKiBIYW5kbGUgYW4gSFRUUCByZXF1ZXN0IGFuZCByZXR1cm4gYW4gT2JzZXJ2YWJsZSBvZiBIVFRQIHJlc3BvbnNlXHJcblx0ICogQm90aCB0aGUgcmVxdWVzdCB0eXBlIGFuZCB0aGUgcmVzcG9uc2UgdHlwZSBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgc3VwcG9ydGluZyBIVFRQIGxpYnJhcnkuXHJcblx0ICovXHJcblx0aGFuZGxlKHJlcTogYW55KTogT2JzZXJ2YWJsZTxhbnk+O1xyXG59XHJcblxyXG4vKiogSW50ZXJmYWNlIG9mIGluZm9ybWF0aW9uIGFib3V0IGEgVXJpICAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFVyaUluZm8ge1xyXG5cdHNvdXJjZTogc3RyaW5nO1xyXG5cdHByb3RvY29sOiBzdHJpbmc7XHJcblx0YXV0aG9yaXR5OiBzdHJpbmc7XHJcblx0dXNlckluZm86IHN0cmluZztcclxuXHR1c2VyOiBzdHJpbmc7XHJcblx0cGFzc3dvcmQ6IHN0cmluZztcclxuXHRob3N0OiBzdHJpbmc7XHJcblx0cG9ydDogc3RyaW5nO1xyXG5cdHJlbGF0aXZlOiBzdHJpbmc7XHJcblx0cGF0aDogc3RyaW5nO1xyXG5cdGRpcmVjdG9yeTogc3RyaW5nO1xyXG5cdGZpbGU6IHN0cmluZztcclxuXHRxdWVyeTogc3RyaW5nO1xyXG5cdGFuY2hvcjogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuKiBJbnRlcmZhY2UgZm9yIG9iamVjdCB3LyBpbmZvIGFib3V0IHRoZSBjdXJyZW50IHJlcXVlc3QgdXJsXHJcbiogZXh0cmFjdGVkIGZyb20gYW4gSHR0cCBSZXF1ZXN0LlxyXG4qIEFsc28gaG9sZHMgdXRpbGl0eSBtZXRob2RzIGFuZCBjb25maWd1cmF0aW9uIGRhdGEgZnJvbSB0aGlzIHNlcnZpY2VcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZW1vcnlSZXF1ZXN0IHtcclxuXHRyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+OyAvLyBjb25jcmV0ZSB0eXBlIGRlcGVuZHMgdXBvbiB0aGUgSHR0cCBsaWJyYXJ5XHJcblx0Ym9keTogYW55O1xyXG5cdGFwaUJhc2U6IHN0cmluZztcclxuXHRjb2xsZWN0aW9uTmFtZTogc3RyaW5nO1xyXG5cdGNvbGxlY3Rpb246IGFueTtcclxuXHRoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuXHRtZXRob2Q6IHN0cmluZztcclxuXHRpZDogYW55O1xyXG5cdHF1ZXJ5OiBNYXA8c3RyaW5nLCBzdHJpbmdbXT47XHJcblx0cmVzb3VyY2VVcmw6IHN0cmluZztcclxuXHR1cmw6IHN0cmluZzsgLy8gcmVxdWVzdCBVUkxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZW1vcnlSZXNwb25zZSB7XHJcblx0LyoqXHJcblx0ICogU3RyaW5nLCBPYmplY3QsIEFycmF5QnVmZmVyIG9yIEJsb2IgcmVwcmVzZW50aW5nIHRoZSBib2R5IG9mIHRoZSB7QGxpbmsgUmVzcG9uc2V9LlxyXG5cdCAqL1xyXG5cdGJvZHk/OiBzdHJpbmcgfCBPYmplY3QgfCBBcnJheUJ1ZmZlciB8IEJsb2I7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc3BvbnNlIGhlYWRlcnNcclxuXHQgKi9cclxuXHRoZWFkZXJzPzogSHR0cEhlYWRlcnM7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEh0dHAge0BsaW5rIGh0dHA6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMTAuaHRtbCBzdGF0dXMgY29kZX1cclxuXHQgKiBhc3NvY2lhdGVkIHdpdGggdGhlIHJlc3BvbnNlLlxyXG5cdCAqL1xyXG5cdHN0YXR1cz86IG51bWJlcjtcclxuXHJcblx0LyoqXHJcblx0ICogU3RhdHVzIHRleHQgZm9yIHRoZSBzdGF0dXMgY29kZVxyXG5cdCAqL1xyXG5cdHN0YXR1c1RleHQ/OiBzdHJpbmc7XHJcblx0LyoqXHJcblx0ICogcmVxdWVzdCB1cmxcclxuXHQgKi9cclxuXHR1cmw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlIGEgYHJlcXVlc3RJbnRlcmNlcHRvcmAgbWV0aG9kIG9mIHRoaXMgdHlwZSBpbiB5b3VyIGBNZW1vcnlEYXRhU2VydmljZWAgdG9cclxuICogaW50ZXJjZXB0IHRoZSBjcmVhdGVkIE1lbW9yeVJlcXVlc3QuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZXF1ZXN0SW50ZXJjZXB0b3IgPSAocmVxdWVzdDogTWVtb3J5UmVxdWVzdCwgc2VydmljZTogQmFja2VuZFNlcnZpY2UpID0+IE1lbW9yeVJlc3BvbnNlIHwgdW5kZWZpbmVkO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGUgYSBgcmVzcG9uc2VJbnRlcmNlcHRvcmAgbWV0aG9kIG9mIHRoaXMgdHlwZSBpbiB5b3VyIGBNZW1vcnlEYXRhU2VydmljZWAgdG9cclxuICogbW9ycGggdGhlIHJlc3BvbnNlIG9wdGlvbnMgY3JlYXRlZCBpbiB0aGUgYGNvbGxlY3Rpb25IYW5kbGVyYC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJlc3BvbnNlSW50ZXJjZXB0b3IgPSAocmVzcG9uc2U6IE1lbW9yeVJlc3BvbnNlLCByZXF1ZXN0OiBNZW1vcnlSZXF1ZXN0KSA9PiBNZW1vcnlSZXNwb25zZTtcclxuIl19