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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvbWVtb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFLM0MsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFXOzs7O1FBRzdCLFNBQVMsR0FBRyxrTUFBa007O1FBQzlNLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7UUFDdkIsR0FBRyxHQUFZO1FBQ3BCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO1FBQ1osSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLEVBQUU7UUFDYixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsTUFBTSxFQUFFLEVBQUU7S0FDVjs7UUFDSyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7O1FBQ3pCLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTTtJQUNuQixPQUFPLENBQUMsRUFBRSxFQUFFO1FBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7S0FBRTtJQUMxQyxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLElBQVk7SUFDL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNoQyxDQUFDOzs7Ozs7Ozs7Ozs7QUFZRDs7Ozs7Ozs7Ozs7O0lBQUE7SUFpQkEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFEQSw4REFBOEU7Ozs7Ozs7Ozs7O0FBWS9FO0lBcURDLDZCQUFZLE1BQWdDO1FBQWhDLHVCQUFBLEVBQUEsV0FBZ0M7UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7O1lBRW5CLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsaUJBQWlCLEVBQUUsS0FBSzs7WUFDeEIsS0FBSyxFQUFFLEdBQUc7O1lBQ1YsU0FBUyxFQUFFLEtBQUs7O1lBQ2hCLGtCQUFrQixFQUFFLEtBQUs7O1lBQ3pCLE9BQU8sRUFBRSxJQUFJOztZQUNiLE9BQU8sRUFBRSxLQUFLOztZQUNkLE1BQU0sRUFBRSxJQUFJOztZQUNaLE1BQU0sRUFBRSxLQUFLOztZQUNiLE9BQU8sRUFBRSxTQUFTOztZQUNsQixJQUFJLEVBQUUsU0FBUzs7WUFDZixRQUFRLEVBQUUsU0FBUyxDQUFDLDREQUE0RDtTQUNoRixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ1osQ0FBQzs7Z0JBckVELFVBQVU7Ozs7Z0JBcURVLG1CQUFtQjs7SUFpQnhDLDBCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0FyRVksbUJBQW1COzs7Ozs7O0lBSy9CLHNDQUFpQjs7Ozs7SUFJakIsa0RBQThCOzs7Ozs7SUFLOUIsZ0RBQTRCOzs7OztJQUk1QixvQ0FBZTs7Ozs7SUFJZix3Q0FBb0I7Ozs7O0lBSXBCLG1DQUFjOzs7OztJQUlkLGlEQUE2Qjs7Ozs7SUFJN0Isc0NBQWtCOzs7OztJQUlsQixzQ0FBa0I7Ozs7O0lBSWxCLHFDQUFpQjs7Ozs7SUFJakIscUNBQWlCOzs7OztJQUlqQix1Q0FBa0I7Ozs7Ozs7Ozs7Ozs7QUErQm5CLHNDQU1DOzs7SUFMQSxtQ0FBZ0I7O0lBQ2hCLDBDQUF1Qjs7SUFDdkIsOEJBQVc7O0lBQ1gsaUNBQTZCOztJQUM3Qix1Q0FBb0I7Ozs7O0FBR3JCLHFDQU1DOzs7Ozs7OztJQURBLHNEQUFrQzs7Ozs7O0FBSW5DLDZCQWVDOzs7SUFkQSx5QkFBZTs7SUFDZiwyQkFBaUI7O0lBQ2pCLDRCQUFrQjs7SUFDbEIsMkJBQWlCOztJQUNqQix1QkFBYTs7SUFDYiwyQkFBaUI7O0lBQ2pCLHVCQUFhOztJQUNiLHVCQUFhOztJQUNiLDJCQUFpQjs7SUFDakIsdUJBQWE7O0lBQ2IsNEJBQWtCOztJQUNsQix1QkFBYTs7SUFDYix3QkFBYzs7SUFDZCx5QkFBZTs7Ozs7Ozs7QUFRaEIsbUNBWUM7OztJQVhBLGdDQUEwQjs7SUFDMUIsNkJBQVU7O0lBQ1YsZ0NBQWdCOztJQUNoQix1Q0FBdUI7O0lBQ3ZCLG1DQUFnQjs7SUFDaEIsZ0NBQXFCOztJQUNyQiwrQkFBZTs7SUFDZiwyQkFBUTs7SUFDUiw4QkFBNkI7O0lBQzdCLG9DQUFvQjs7SUFDcEIsNEJBQVk7Ozs7O0FBR2Isb0NBeUJDOzs7Ozs7SUFyQkEsOEJBQTRDOzs7OztJQUs1QyxpQ0FBc0I7Ozs7OztJQU10QixnQ0FBZ0I7Ozs7O0lBS2hCLG9DQUFvQjs7Ozs7SUFJcEIsNkJBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vYmFja2VuZC5zZXJ2aWNlJztcblxuLyoqIFJldHVybiBpbmZvcm1hdGlvbiAoVXJpSW5mbykgYWJvdXQgYSBVUkkgICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVcmkoc3RyOiBzdHJpbmcpOiBVcmlJbmZvIHtcblx0Ly8gQWRhcHRlZCBmcm9tIHBhcnNldXJpIHBhY2thZ2UgLSBodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20vYXJjaGl2ZXMvcGFyc2V1cmlcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuXHRjb25zdCBVUkxfUkVHRVggPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShbXjpcXC8/Iy5dKyk6KT8oPzpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XG5cdGNvbnN0IG0gPSBVUkxfUkVHRVguZXhlYyhzdHIpO1xuXHRjb25zdCB1cmk6IFVyaUluZm8gPSB7XG5cdFx0c291cmNlOiAnJyxcblx0XHRwcm90b2NvbDogJycsXG5cdFx0YXV0aG9yaXR5OiAnJyxcblx0XHR1c2VySW5mbzogJycsXG5cdFx0dXNlcjogJycsXG5cdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdGhvc3Q6ICcnLFxuXHRcdHBvcnQ6ICcnLFxuXHRcdHJlbGF0aXZlOiAnJyxcblx0XHRwYXRoOiAnJyxcblx0XHRkaXJlY3Rvcnk6ICcnLFxuXHRcdGZpbGU6ICcnLFxuXHRcdHF1ZXJ5OiAnJyxcblx0XHRhbmNob3I6ICcnXG5cdH07XG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh1cmkpO1xuXHRsZXQgaSA9IGtleXMubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKSB7IHVyaVtrZXlzW2ldXSA9IG1baV0gfHwgJyc7IH1cblx0cmV0dXJuIHVyaTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKSB7XG5cdHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG59XG5cbi8qKlxuKiBJbnRlcmZhY2UgZm9yIGEgY2xhc3MgdGhhdCBjcmVhdGVzIGFuIGluLW1lbW9yeSBkYXRhYmFzZVxuKlxuKiBJdHMgYGNyZWF0ZURiYCBtZXRob2QgY3JlYXRlcyBhIGhhc2ggb2YgbmFtZWQgY29sbGVjdGlvbnMgdGhhdCByZXByZXNlbnRzIHRoZSBkYXRhYmFzZVxuKlxuKiBGb3IgbWF4aW11bSBmbGV4aWJpbGl0eSwgdGhlIHNlcnZpY2UgbWF5IGRlZmluZSBIVFRQIG1ldGhvZCBvdmVycmlkZXMuXG4qIFN1Y2ggbWV0aG9kcyBtdXN0IG1hdGNoIHRoZSBzcGVsbGluZyBvZiBhbiBIVFRQIG1ldGhvZCBpbiBsb3dlciBjYXNlIChlLmcsIFwiZ2V0XCIpLlxuKiBJZiBhIHJlcXVlc3QgaGFzIGEgbWF0Y2hpbmcgbWV0aG9kLCBpdCB3aWxsIGJlIGNhbGxlZCBhcyBpblxuKiBgZ2V0KGluZm86IHJlcXVlc3RJbmZvLCBkYjoge30pYCB3aGVyZSBgZGJgIGlzIHRoZSBkYXRhYmFzZSBvYmplY3QgZGVzY3JpYmVkIGFib3ZlLlxuKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZW1vcnlEYXRhU2VydmljZSB7XG5cdC8qKlxuXHQqIENyZWF0ZXMgYW4gaW4tbWVtb3J5IFwiZGF0YWJhc2VcIiBoYXNoIHdob3NlIGtleXMgYXJlIGNvbGxlY3Rpb24gbmFtZXNcblx0KiBhbmQgd2hvc2UgdmFsdWVzIGFyZSBhcnJheXMgb2YgY29sbGVjdGlvbiBvYmplY3RzIHRvIHJldHVybiBvciB1cGRhdGUuXG5cdCpcblx0KiByZXR1cm5zIE9ic2VydmFibGUgb2YgdGhlIGRhdGFiYXNlIGJlY2F1c2UgY291bGQgaGF2ZSB0byBjcmVhdGUgaXQgYXN5bmNocm9ub3VzbHkuXG5cdCpcblx0KiBUaGlzIG1ldGhvZCBtdXN0IGJlIHNhZmUgdG8gY2FsbCByZXBlYXRlZGx5LlxuXHQqIEVhY2ggdGltZSBpdCBzaG91bGQgcmV0dXJuIGEgbmV3IG9iamVjdCB3aXRoIG5ldyBhcnJheXMgY29udGFpbmluZyBuZXcgaXRlbSBvYmplY3RzLlxuXHQqIFRoaXMgY29uZGl0aW9uIGFsbG93cyB0aGUgaW4tbWVtb3J5IGJhY2tlbmQgc2VydmljZSB0byBtdXRhdGUgdGhlIGNvbGxlY3Rpb25zXG5cdCogYW5kIHRoZWlyIGl0ZW1zIHdpdGhvdXQgdG91Y2hpbmcgdGhlIG9yaWdpbmFsIHNvdXJjZSBkYXRhLlxuXHQqXG5cdCogVGhlIGluLW1lbSBiYWNrZW5kIHNlcnZpY2UgY2FsbHMgdGhpcyBtZXRob2Qgd2l0aG91dCBhIHZhbHVlIHRoZSBmaXJzdCB0aW1lLlxuXHQqIFRoZSBzZXJ2aWNlIGNhbGxzIGl0IHdpdGggdGhlIGBNZW1vcnlSZXF1ZXN0YCB3aGVuIGl0IHJlY2VpdmVzIGEgUE9TVCBgY29tbWFuZHMvcmVzZXREYmAgcmVxdWVzdC5cblx0KiBZb3VyIE1lbW9yeURhdGFTZXJ2aWNlIGNhbiBhZGp1c3QgaXRzIGJlaGF2aW9yIGFjY29yZGluZ2x5LlxuXHQqL1xuXHRhYnN0cmFjdCBjcmVhdGVEYihyZXFJbmZvPzogTWVtb3J5UmVxdWVzdCk6IHt9IHwgT2JzZXJ2YWJsZTx7fT4gfCBQcm9taXNlPHt9Pjtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKipcbiogIE1lbW9yeUJhY2tlbmRDb25maWcgY29uZmlndXJhdGlvbiBvcHRpb25zXG4qICBVc2FnZTpcbiogICAgTWVtb3J5TW9kdWxlLmZvclJvb3QoSW5NZW1IZXJvU2VydmljZSwge2RlbGF5OiA2MDB9KVxuKlxuKiAgb3IgaWYgcHJvdmlkaW5nIHNlcGFyYXRlbHk6XG4qICAgIHByb3ZpZGUoTWVtb3J5QmFja2VuZENvbmZpZywge3VzZVZhbHVlOiB7ZGVsYXk6IDYwMH19KSxcbiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVtb3J5QmFja2VuZENvbmZpZyB7XG5cdC8qKlxuXHQgKiBUaGUgYmFzZSBwYXRoIHRvIHRoZSBhcGksIGUuZywgJ2FwaS8nLlxuXHQgKiBJZiBub3Qgc3BlY2lmaWVkIHRoYW4gYHBhcnNlUmVxdWVzdFVybGAgYXNzdW1lcyBpdCBpcyB0aGUgZmlyc3QgcGF0aCBzZWdtZW50IGluIHRoZSByZXF1ZXN0LlxuXHQgKi9cblx0YXBpQmFzZT86IHN0cmluZztcblx0LyoqXG5cdCAqIGZhbHNlIChkZWZhdWx0KSBpZiBzZWFyY2ggbWF0Y2ggc2hvdWxkIGJlIGNhc2UgaW5zZW5zaXRpdmVcblx0ICovXG5cdGNhc2VTZW5zaXRpdmVTZWFyY2g/OiBib29sZWFuO1xuXHQvKipcblx0ICogZmFsc2UgKGRlZmF1bHQpIHB1dCBjb250ZW50IGRpcmVjdGx5IGluc2lkZSB0aGUgcmVzcG9uc2UgYm9keS5cblx0ICogdHJ1ZTogZW5jYXBzdWxhdGUgY29udGVudCBpbiBhIGBkYXRhYCBwcm9wZXJ0eSBpbnNpZGUgdGhlIHJlc3BvbnNlIGJvZHksIGB7IGRhdGE6IC4uLiB9YC5cblx0ICovXG5cdGRhdGFFbmNhcHN1bGF0aW9uPzogYm9vbGVhbjtcblx0LyoqXG5cdCAqIGRlbGF5IChpbiBtcykgdG8gc2ltdWxhdGUgbGF0ZW5jeVxuXHQgKi9cblx0ZGVsYXk/OiBudW1iZXI7XG5cdC8qKlxuXHQgKiBmYWxzZSAoZGVmYXVsdCkgc2hvdWxkIDIwNCB3aGVuIG9iamVjdC10by1kZWxldGUgbm90IGZvdW5kOyB0cnVlOiA0MDRcblx0ICovXG5cdGRlbGV0ZTQwND86IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBob3N0IGZvciB0aGlzIHNlcnZpY2UsIGUuZy4sICdsb2NhbGhvc3QnXG5cdCAqL1xuXHRob3N0Pzogc3RyaW5nO1xuXHQvKipcblx0ICogZmFsc2UgKGRlZmF1bHQpIHNob3VsZCBwYXNzIHVucmVjb2duaXplZCByZXF1ZXN0IFVSTCB0aHJvdWdoIHRvIG9yaWdpbmFsIGJhY2tlbmQ7IHRydWU6IDQwNFxuXHQgKi9cblx0cGFzc1RocnVVbmtub3duVXJsPzogYm9vbGVhbjtcblx0LyoqXG5cdCAqIHRydWUgKGRlZmF1bHQpIHNob3VsZCBOT1QgcmV0dXJuIHRoZSBpdGVtICgyMDQpIGFmdGVyIGEgUE9TVC4gZmFsc2U6IHJldHVybiB0aGUgaXRlbSAoMjAwKS5cblx0ICovXG5cdHBvc3QyMDQ/OiBib29sZWFuO1xuXHQvKipcblx0KiBmYWxzZSAoZGVmYXVsdCkgc2hvdWxkIE5PVCB1cGRhdGUgZXhpc3RpbmcgaXRlbSB3aXRoIFBPU1QuIGZhbHNlOiBPSyB0byB1cGRhdGUuXG5cdCovXG5cdHBvc3Q0MDk/OiBib29sZWFuO1xuXHQvKipcblx0KiB0cnVlIChkZWZhdWx0KSBzaG91bGQgTk9UIHJldHVybiB0aGUgaXRlbSAoMjA0KSBhZnRlciBhIFBPU1QuIGZhbHNlOiByZXR1cm4gdGhlIGl0ZW0gKDIwMCkuXG5cdCovXG5cdHB1dDIwND86IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBmYWxzZSAoZGVmYXVsdCkgaWYgaXRlbSBub3QgZm91bmQsIGNyZWF0ZSBhcyBuZXcgaXRlbTsgZmFsc2U6IHNob3VsZCA0MDQuXG5cdCAqL1xuXHRwdXQ0MDQ/OiBib29sZWFuO1xuXHQvKipcblx0ICogcm9vdCBwYXRoIF9iZWZvcmVfIGFueSBBUEkgY2FsbCwgZS5nLiwgJydcblx0ICovXG5cdHJvb3RQYXRoPzogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNvbmZpZzogTWVtb3J5QmFja2VuZENvbmZpZyA9IHt9KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB7XG5cdFx0XHQvLyBkZWZhdWx0IGNvbmZpZzpcblx0XHRcdGNhc2VTZW5zaXRpdmVTZWFyY2g6IGZhbHNlLFxuXHRcdFx0ZGF0YUVuY2Fwc3VsYXRpb246IGZhbHNlLCAvLyBkbyBOT1Qgd3JhcCBjb250ZW50IHdpdGhpbiBhbiBvYmplY3Qgd2l0aCBhIGBkYXRhYCBwcm9wZXJ0eVxuXHRcdFx0ZGVsYXk6IDUwMCwgLy8gc2ltdWxhdGUgbGF0ZW5jeSBieSBkZWxheWluZyByZXNwb25zZVxuXHRcdFx0ZGVsZXRlNDA0OiBmYWxzZSwgLy8gZG9uJ3QgY29tcGxhaW4gaWYgY2FuJ3QgZmluZCBlbnRpdHkgdG8gZGVsZXRlXG5cdFx0XHRwYXNzVGhydVVua25vd25Vcmw6IGZhbHNlLCAvLyA0MDQgaWYgY2FuJ3QgcHJvY2VzcyBVUkxcblx0XHRcdHBvc3QyMDQ6IHRydWUsIC8vIGRvbid0IHJldHVybiB0aGUgaXRlbSBhZnRlciBhIFBPU1Rcblx0XHRcdHBvc3Q0MDk6IGZhbHNlLCAvLyBkb24ndCB1cGRhdGUgZXhpc3RpbmcgaXRlbSB3aXRoIHRoYXQgSURcblx0XHRcdHB1dDIwNDogdHJ1ZSwgIC8vIGRvbid0IHJldHVybiB0aGUgaXRlbSBhZnRlciBhIFBVVFxuXHRcdFx0cHV0NDA0OiBmYWxzZSwgLy8gY3JlYXRlIG5ldyBpdGVtIGlmIFBVVCBpdGVtIHdpdGggdGhhdCBJRCBub3QgZm91bmRcblx0XHRcdGFwaUJhc2U6IHVuZGVmaW5lZCwgLy8gYXNzdW1lZCB0byBiZSB0aGUgZmlyc3QgcGF0aCBzZWdtZW50XG5cdFx0XHRob3N0OiB1bmRlZmluZWQsICAgIC8vIGRlZmF1bHQgdmFsdWUgaXMgYWN0dWFsbHkgc2V0IGluIE1lbW9yeUJhY2tlbmRDb25maWcgY3RvclxuXHRcdFx0cm9vdFBhdGg6IHVuZGVmaW5lZCAvLyBkZWZhdWx0IHZhbHVlIGlzIGFjdHVhbGx5IHNldCBpbiBNZW1vcnlCYWNrZW5kQ29uZmlnIGN0b3Jcblx0XHR9LCBjb25maWcpO1xuXHR9XG59XG5cbi8qKlxuICpcbiAqIEludGVyZmFjZSBmb3IgdGhlIHJlc3VsdCBvZiB0aGUgYHBhcnNlUmVxdWVzdFVybGAgbWV0aG9kOlxuICogICBHaXZlbiBVUkwgXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2N1c3RvbWVycy80Mj9mb289MSB0aGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5zXG4gKiAgICAgYmFzZTogJ2FwaS8nXG4gKiAgICAgY29sbGVjdGlvbk5hbWU6ICdjdXN0b21lcnMnXG4gKiAgICAgaWQ6ICc0MidcbiAqICAgICBxdWVyeTogdGhpcy5jcmVhdGVRdWVyeSgnZm9vPTEnKVxuICogICAgIHJlc291cmNlVXJsOiAnaHR0cDovL2xvY2FsaG9zdC9hcGkvY3VzdG9tZXJzLydcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRSZXF1ZXN0VXJsIHtcblx0YXBpQmFzZTogc3RyaW5nOyAgICAgICAgICAgLy8gdGhlIHNsYXNoLXRlcm1pbmF0ZWQgXCJiYXNlXCIgZm9yIGFwaSByZXF1ZXN0cyAoZS5nLiBgYXBpL2ApXG5cdGNvbGxlY3Rpb25OYW1lOiBzdHJpbmc7IC8vIHRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uIG9mIGRhdGEgaXRlbXMgKGUuZy4sYGN1c3RvbWVyc2ApXG5cdGlkOiBzdHJpbmc7ICAgICAgICAgICAgIC8vIHRoZSAob3B0aW9uYWwpIGlkIG9mIHRoZSBpdGVtIGluIHRoZSBjb2xsZWN0aW9uIChlLmcuLCBgNDJgKVxuXHRxdWVyeTogTWFwPHN0cmluZywgc3RyaW5nW10+OyAvLyB0aGUgcXVlcnkgcGFyYW1ldGVycztcblx0cmVzb3VyY2VVcmw6IHN0cmluZzsgICAgLy8gdGhlIGVmZmVjdGl2ZSBVUkwgZm9yIHRoZSByZXNvdXJjZSAoZS5nLiwgJ2h0dHA6Ly9sb2NhbGhvc3QvYXBpL2N1c3RvbWVycy8nKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhc3NUaHJ1QmFja2VuZCB7XG5cdC8qKlxuXHQgKiBIYW5kbGUgYW4gSFRUUCByZXF1ZXN0IGFuZCByZXR1cm4gYW4gT2JzZXJ2YWJsZSBvZiBIVFRQIHJlc3BvbnNlXG5cdCAqIEJvdGggdGhlIHJlcXVlc3QgdHlwZSBhbmQgdGhlIHJlc3BvbnNlIHR5cGUgYXJlIGRldGVybWluZWQgYnkgdGhlIHN1cHBvcnRpbmcgSFRUUCBsaWJyYXJ5LlxuXHQgKi9cblx0aGFuZGxlKHJlcTogYW55KTogT2JzZXJ2YWJsZTxhbnk+O1xufVxuXG4vKiogSW50ZXJmYWNlIG9mIGluZm9ybWF0aW9uIGFib3V0IGEgVXJpICAqL1xuZXhwb3J0IGludGVyZmFjZSBVcmlJbmZvIHtcblx0c291cmNlOiBzdHJpbmc7XG5cdHByb3RvY29sOiBzdHJpbmc7XG5cdGF1dGhvcml0eTogc3RyaW5nO1xuXHR1c2VySW5mbzogc3RyaW5nO1xuXHR1c2VyOiBzdHJpbmc7XG5cdHBhc3N3b3JkOiBzdHJpbmc7XG5cdGhvc3Q6IHN0cmluZztcblx0cG9ydDogc3RyaW5nO1xuXHRyZWxhdGl2ZTogc3RyaW5nO1xuXHRwYXRoOiBzdHJpbmc7XG5cdGRpcmVjdG9yeTogc3RyaW5nO1xuXHRmaWxlOiBzdHJpbmc7XG5cdHF1ZXJ5OiBzdHJpbmc7XG5cdGFuY2hvcjogc3RyaW5nO1xufVxuXG4vKipcbiogSW50ZXJmYWNlIGZvciBvYmplY3Qgdy8gaW5mbyBhYm91dCB0aGUgY3VycmVudCByZXF1ZXN0IHVybFxuKiBleHRyYWN0ZWQgZnJvbSBhbiBIdHRwIFJlcXVlc3QuXG4qIEFsc28gaG9sZHMgdXRpbGl0eSBtZXRob2RzIGFuZCBjb25maWd1cmF0aW9uIGRhdGEgZnJvbSB0aGlzIHNlcnZpY2VcbiovXG5leHBvcnQgaW50ZXJmYWNlIE1lbW9yeVJlcXVlc3Qge1xuXHRyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+OyAvLyBjb25jcmV0ZSB0eXBlIGRlcGVuZHMgdXBvbiB0aGUgSHR0cCBsaWJyYXJ5XG5cdGJvZHk6IGFueTtcblx0YXBpQmFzZTogc3RyaW5nO1xuXHRjb2xsZWN0aW9uTmFtZTogc3RyaW5nO1xuXHRjb2xsZWN0aW9uOiBhbnk7XG5cdGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuXHRtZXRob2Q6IHN0cmluZztcblx0aWQ6IGFueTtcblx0cXVlcnk6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPjtcblx0cmVzb3VyY2VVcmw6IHN0cmluZztcblx0dXJsOiBzdHJpbmc7IC8vIHJlcXVlc3QgVVJMXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVtb3J5UmVzcG9uc2Uge1xuXHQvKipcblx0ICogU3RyaW5nLCBPYmplY3QsIEFycmF5QnVmZmVyIG9yIEJsb2IgcmVwcmVzZW50aW5nIHRoZSBib2R5IG9mIHRoZSB7QGxpbmsgUmVzcG9uc2V9LlxuXHQgKi9cblx0Ym9keT86IHN0cmluZyB8IE9iamVjdCB8IEFycmF5QnVmZmVyIHwgQmxvYjtcblxuXHQvKipcblx0ICogUmVzcG9uc2UgaGVhZGVyc1xuXHQgKi9cblx0aGVhZGVycz86IEh0dHBIZWFkZXJzO1xuXG5cdC8qKlxuXHQgKiBIdHRwIHtAbGluayBodHRwOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzEwLmh0bWwgc3RhdHVzIGNvZGV9XG5cdCAqIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVzcG9uc2UuXG5cdCAqL1xuXHRzdGF0dXM/OiBudW1iZXI7XG5cblx0LyoqXG5cdCAqIFN0YXR1cyB0ZXh0IGZvciB0aGUgc3RhdHVzIGNvZGVcblx0ICovXG5cdHN0YXR1c1RleHQ/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiByZXF1ZXN0IHVybFxuXHQgKi9cblx0dXJsPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFByb3ZpZGUgYSBgcmVxdWVzdEludGVyY2VwdG9yYCBtZXRob2Qgb2YgdGhpcyB0eXBlIGluIHlvdXIgYE1lbW9yeURhdGFTZXJ2aWNlYCB0b1xuICogaW50ZXJjZXB0IHRoZSBjcmVhdGVkIE1lbW9yeVJlcXVlc3QuXG4gKi9cbmV4cG9ydCB0eXBlIFJlcXVlc3RJbnRlcmNlcHRvciA9IChyZXF1ZXN0OiBNZW1vcnlSZXF1ZXN0LCBzZXJ2aWNlOiBCYWNrZW5kU2VydmljZSkgPT4gTWVtb3J5UmVzcG9uc2UgfCB1bmRlZmluZWQ7XG5cbi8qKlxuICogUHJvdmlkZSBhIGByZXNwb25zZUludGVyY2VwdG9yYCBtZXRob2Qgb2YgdGhpcyB0eXBlIGluIHlvdXIgYE1lbW9yeURhdGFTZXJ2aWNlYCB0b1xuICogbW9ycGggdGhlIHJlc3BvbnNlIG9wdGlvbnMgY3JlYXRlZCBpbiB0aGUgYGNvbGxlY3Rpb25IYW5kbGVyYC5cbiAqL1xuZXhwb3J0IHR5cGUgUmVzcG9uc2VJbnRlcmNlcHRvciA9IChyZXNwb25zZTogTWVtb3J5UmVzcG9uc2UsIHJlcXVlc3Q6IE1lbW9yeVJlcXVlc3QpID0+IE1lbW9yeVJlc3BvbnNlO1xuIl19