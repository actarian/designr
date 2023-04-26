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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvbWVtb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFLM0MsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFXOzs7O1FBRzdCLFNBQVMsR0FBRyxrTUFBa007O1FBQzlNLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7UUFDdkIsR0FBRyxHQUFZO1FBQ3BCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO1FBQ1osSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLEVBQUU7UUFDYixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsTUFBTSxFQUFFLEVBQUU7S0FDVjs7UUFDSyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7O1FBQ3pCLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTTtJQUNuQixPQUFPLENBQUMsRUFBRSxFQUFFO1FBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7S0FBRTtJQUMxQyxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLElBQVk7SUFDL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNoQyxDQUFDOzs7Ozs7Ozs7Ozs7QUFZRDs7Ozs7Ozs7Ozs7O0lBQUE7SUFpQkEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFEQSw4REFBOEU7Ozs7Ozs7Ozs7O0FBWS9FO0lBcURDLDZCQUFZLE1BQWdDO1FBQWhDLHVCQUFBLEVBQUEsV0FBZ0M7UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7O1lBRW5CLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsaUJBQWlCLEVBQUUsS0FBSzs7WUFDeEIsS0FBSyxFQUFFLEdBQUc7O1lBQ1YsU0FBUyxFQUFFLEtBQUs7O1lBQ2hCLGtCQUFrQixFQUFFLEtBQUs7O1lBQ3pCLE9BQU8sRUFBRSxJQUFJOztZQUNiLE9BQU8sRUFBRSxLQUFLOztZQUNkLE1BQU0sRUFBRSxJQUFJOztZQUNaLE1BQU0sRUFBRSxLQUFLOztZQUNiLE9BQU8sRUFBRSxTQUFTOztZQUNsQixJQUFJLEVBQUUsU0FBUzs7WUFDZixRQUFRLEVBQUUsU0FBUyxDQUFDLDREQUE0RDtTQUNoRixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ1osQ0FBQzs7Z0JBckVELFVBQVU7Ozs7Z0JBcURVLG1CQUFtQjs7SUFpQnhDLDBCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0FyRVksbUJBQW1COzs7Ozs7O0lBSy9CLHNDQUFpQjs7Ozs7SUFJakIsa0RBQThCOzs7Ozs7SUFLOUIsZ0RBQTRCOzs7OztJQUk1QixvQ0FBZTs7Ozs7SUFJZix3Q0FBb0I7Ozs7O0lBSXBCLG1DQUFjOzs7OztJQUlkLGlEQUE2Qjs7Ozs7SUFJN0Isc0NBQWtCOzs7OztJQUlsQixzQ0FBa0I7Ozs7O0lBSWxCLHFDQUFpQjs7Ozs7SUFJakIscUNBQWlCOzs7OztJQUlqQix1Q0FBa0I7Ozs7Ozs7Ozs7Ozs7QUErQm5CLHNDQU1DOzs7SUFMQSxtQ0FBZ0I7O0lBQ2hCLDBDQUF1Qjs7SUFDdkIsOEJBQVc7O0lBQ1gsaUNBQTZCOztJQUM3Qix1Q0FBb0I7Ozs7O0FBR3JCLHFDQU1DOzs7Ozs7OztJQURBLHNEQUFrQzs7Ozs7O0FBSW5DLDZCQWVDOzs7SUFkQSx5QkFBZTs7SUFDZiwyQkFBaUI7O0lBQ2pCLDRCQUFrQjs7SUFDbEIsMkJBQWlCOztJQUNqQix1QkFBYTs7SUFDYiwyQkFBaUI7O0lBQ2pCLHVCQUFhOztJQUNiLHVCQUFhOztJQUNiLDJCQUFpQjs7SUFDakIsdUJBQWE7O0lBQ2IsNEJBQWtCOztJQUNsQix1QkFBYTs7SUFDYix3QkFBYzs7SUFDZCx5QkFBZTs7Ozs7Ozs7QUFRaEIsbUNBWUM7OztJQVhBLGdDQUEwQjs7SUFDMUIsNkJBQVU7O0lBQ1YsZ0NBQWdCOztJQUNoQix1Q0FBdUI7O0lBQ3ZCLG1DQUFnQjs7SUFDaEIsZ0NBQXFCOztJQUNyQiwrQkFBZTs7SUFDZiwyQkFBUTs7SUFDUiw4QkFBNkI7O0lBQzdCLG9DQUFvQjs7SUFDcEIsNEJBQVk7Ozs7O0FBR2Isb0NBeUJDOzs7Ozs7SUFyQkEsOEJBQTRDOzs7OztJQUs1QyxpQ0FBc0I7Ozs7OztJQU10QixnQ0FBZ0I7Ozs7O0lBS2hCLG9DQUFvQjs7Ozs7SUFJcEIsNkJBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vYmFja2VuZC5zZXJ2aWNlJztcclxuXHJcbi8qKiBSZXR1cm4gaW5mb3JtYXRpb24gKFVyaUluZm8pIGFib3V0IGEgVVJJICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVcmkoc3RyOiBzdHJpbmcpOiBVcmlJbmZvIHtcclxuXHQvLyBBZGFwdGVkIGZyb20gcGFyc2V1cmkgcGFja2FnZSAtIGh0dHA6Ly9ibG9nLnN0ZXZlbmxldml0aGFuLmNvbS9hcmNoaXZlcy9wYXJzZXVyaVxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuXHRjb25zdCBVUkxfUkVHRVggPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShbXjpcXC8/Iy5dKyk6KT8oPzpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XHJcblx0Y29uc3QgbSA9IFVSTF9SRUdFWC5leGVjKHN0cik7XHJcblx0Y29uc3QgdXJpOiBVcmlJbmZvID0ge1xyXG5cdFx0c291cmNlOiAnJyxcclxuXHRcdHByb3RvY29sOiAnJyxcclxuXHRcdGF1dGhvcml0eTogJycsXHJcblx0XHR1c2VySW5mbzogJycsXHJcblx0XHR1c2VyOiAnJyxcclxuXHRcdHBhc3N3b3JkOiAnJyxcclxuXHRcdGhvc3Q6ICcnLFxyXG5cdFx0cG9ydDogJycsXHJcblx0XHRyZWxhdGl2ZTogJycsXHJcblx0XHRwYXRoOiAnJyxcclxuXHRcdGRpcmVjdG9yeTogJycsXHJcblx0XHRmaWxlOiAnJyxcclxuXHRcdHF1ZXJ5OiAnJyxcclxuXHRcdGFuY2hvcjogJydcclxuXHR9O1xyXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh1cmkpO1xyXG5cdGxldCBpID0ga2V5cy5sZW5ndGg7XHJcblx0d2hpbGUgKGktLSkgeyB1cmlba2V5c1tpXV0gPSBtW2ldIHx8ICcnOyB9XHJcblx0cmV0dXJuIHVyaTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKSB7XHJcblx0cmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKTtcclxufVxyXG5cclxuLyoqXHJcbiogSW50ZXJmYWNlIGZvciBhIGNsYXNzIHRoYXQgY3JlYXRlcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2VcclxuKlxyXG4qIEl0cyBgY3JlYXRlRGJgIG1ldGhvZCBjcmVhdGVzIGEgaGFzaCBvZiBuYW1lZCBjb2xsZWN0aW9ucyB0aGF0IHJlcHJlc2VudHMgdGhlIGRhdGFiYXNlXHJcbipcclxuKiBGb3IgbWF4aW11bSBmbGV4aWJpbGl0eSwgdGhlIHNlcnZpY2UgbWF5IGRlZmluZSBIVFRQIG1ldGhvZCBvdmVycmlkZXMuXHJcbiogU3VjaCBtZXRob2RzIG11c3QgbWF0Y2ggdGhlIHNwZWxsaW5nIG9mIGFuIEhUVFAgbWV0aG9kIGluIGxvd2VyIGNhc2UgKGUuZywgXCJnZXRcIikuXHJcbiogSWYgYSByZXF1ZXN0IGhhcyBhIG1hdGNoaW5nIG1ldGhvZCwgaXQgd2lsbCBiZSBjYWxsZWQgYXMgaW5cclxuKiBgZ2V0KGluZm86IHJlcXVlc3RJbmZvLCBkYjoge30pYCB3aGVyZSBgZGJgIGlzIHRoZSBkYXRhYmFzZSBvYmplY3QgZGVzY3JpYmVkIGFib3ZlLlxyXG4qL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWVtb3J5RGF0YVNlcnZpY2Uge1xyXG5cdC8qKlxyXG5cdCogQ3JlYXRlcyBhbiBpbi1tZW1vcnkgXCJkYXRhYmFzZVwiIGhhc2ggd2hvc2Uga2V5cyBhcmUgY29sbGVjdGlvbiBuYW1lc1xyXG5cdCogYW5kIHdob3NlIHZhbHVlcyBhcmUgYXJyYXlzIG9mIGNvbGxlY3Rpb24gb2JqZWN0cyB0byByZXR1cm4gb3IgdXBkYXRlLlxyXG5cdCpcclxuXHQqIHJldHVybnMgT2JzZXJ2YWJsZSBvZiB0aGUgZGF0YWJhc2UgYmVjYXVzZSBjb3VsZCBoYXZlIHRvIGNyZWF0ZSBpdCBhc3luY2hyb25vdXNseS5cclxuXHQqXHJcblx0KiBUaGlzIG1ldGhvZCBtdXN0IGJlIHNhZmUgdG8gY2FsbCByZXBlYXRlZGx5LlxyXG5cdCogRWFjaCB0aW1lIGl0IHNob3VsZCByZXR1cm4gYSBuZXcgb2JqZWN0IHdpdGggbmV3IGFycmF5cyBjb250YWluaW5nIG5ldyBpdGVtIG9iamVjdHMuXHJcblx0KiBUaGlzIGNvbmRpdGlvbiBhbGxvd3MgdGhlIGluLW1lbW9yeSBiYWNrZW5kIHNlcnZpY2UgdG8gbXV0YXRlIHRoZSBjb2xsZWN0aW9uc1xyXG5cdCogYW5kIHRoZWlyIGl0ZW1zIHdpdGhvdXQgdG91Y2hpbmcgdGhlIG9yaWdpbmFsIHNvdXJjZSBkYXRhLlxyXG5cdCpcclxuXHQqIFRoZSBpbi1tZW0gYmFja2VuZCBzZXJ2aWNlIGNhbGxzIHRoaXMgbWV0aG9kIHdpdGhvdXQgYSB2YWx1ZSB0aGUgZmlyc3QgdGltZS5cclxuXHQqIFRoZSBzZXJ2aWNlIGNhbGxzIGl0IHdpdGggdGhlIGBNZW1vcnlSZXF1ZXN0YCB3aGVuIGl0IHJlY2VpdmVzIGEgUE9TVCBgY29tbWFuZHMvcmVzZXREYmAgcmVxdWVzdC5cclxuXHQqIFlvdXIgTWVtb3J5RGF0YVNlcnZpY2UgY2FuIGFkanVzdCBpdHMgYmVoYXZpb3IgYWNjb3JkaW5nbHkuXHJcblx0Ki9cclxuXHRhYnN0cmFjdCBjcmVhdGVEYihyZXFJbmZvPzogTWVtb3J5UmVxdWVzdCk6IHt9IHwgT2JzZXJ2YWJsZTx7fT4gfCBQcm9taXNlPHt9PjtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8qKlxyXG4qICBNZW1vcnlCYWNrZW5kQ29uZmlnIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xyXG4qICBVc2FnZTpcclxuKiAgICBNZW1vcnlNb2R1bGUuZm9yUm9vdChJbk1lbUhlcm9TZXJ2aWNlLCB7ZGVsYXk6IDYwMH0pXHJcbipcclxuKiAgb3IgaWYgcHJvdmlkaW5nIHNlcGFyYXRlbHk6XHJcbiogICAgcHJvdmlkZShNZW1vcnlCYWNrZW5kQ29uZmlnLCB7dXNlVmFsdWU6IHtkZWxheTogNjAwfX0pLFxyXG4qL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZW1vcnlCYWNrZW5kQ29uZmlnIHtcclxuXHQvKipcclxuXHQgKiBUaGUgYmFzZSBwYXRoIHRvIHRoZSBhcGksIGUuZywgJ2FwaS8nLlxyXG5cdCAqIElmIG5vdCBzcGVjaWZpZWQgdGhhbiBgcGFyc2VSZXF1ZXN0VXJsYCBhc3N1bWVzIGl0IGlzIHRoZSBmaXJzdCBwYXRoIHNlZ21lbnQgaW4gdGhlIHJlcXVlc3QuXHJcblx0ICovXHJcblx0YXBpQmFzZT86IHN0cmluZztcclxuXHQvKipcclxuXHQgKiBmYWxzZSAoZGVmYXVsdCkgaWYgc2VhcmNoIG1hdGNoIHNob3VsZCBiZSBjYXNlIGluc2Vuc2l0aXZlXHJcblx0ICovXHJcblx0Y2FzZVNlbnNpdGl2ZVNlYXJjaD86IGJvb2xlYW47XHJcblx0LyoqXHJcblx0ICogZmFsc2UgKGRlZmF1bHQpIHB1dCBjb250ZW50IGRpcmVjdGx5IGluc2lkZSB0aGUgcmVzcG9uc2UgYm9keS5cclxuXHQgKiB0cnVlOiBlbmNhcHN1bGF0ZSBjb250ZW50IGluIGEgYGRhdGFgIHByb3BlcnR5IGluc2lkZSB0aGUgcmVzcG9uc2UgYm9keSwgYHsgZGF0YTogLi4uIH1gLlxyXG5cdCAqL1xyXG5cdGRhdGFFbmNhcHN1bGF0aW9uPzogYm9vbGVhbjtcclxuXHQvKipcclxuXHQgKiBkZWxheSAoaW4gbXMpIHRvIHNpbXVsYXRlIGxhdGVuY3lcclxuXHQgKi9cclxuXHRkZWxheT86IG51bWJlcjtcclxuXHQvKipcclxuXHQgKiBmYWxzZSAoZGVmYXVsdCkgc2hvdWxkIDIwNCB3aGVuIG9iamVjdC10by1kZWxldGUgbm90IGZvdW5kOyB0cnVlOiA0MDRcclxuXHQgKi9cclxuXHRkZWxldGU0MDQ/OiBib29sZWFuO1xyXG5cdC8qKlxyXG5cdCAqIGhvc3QgZm9yIHRoaXMgc2VydmljZSwgZS5nLiwgJ2xvY2FsaG9zdCdcclxuXHQgKi9cclxuXHRob3N0Pzogc3RyaW5nO1xyXG5cdC8qKlxyXG5cdCAqIGZhbHNlIChkZWZhdWx0KSBzaG91bGQgcGFzcyB1bnJlY29nbml6ZWQgcmVxdWVzdCBVUkwgdGhyb3VnaCB0byBvcmlnaW5hbCBiYWNrZW5kOyB0cnVlOiA0MDRcclxuXHQgKi9cclxuXHRwYXNzVGhydVVua25vd25Vcmw/OiBib29sZWFuO1xyXG5cdC8qKlxyXG5cdCAqIHRydWUgKGRlZmF1bHQpIHNob3VsZCBOT1QgcmV0dXJuIHRoZSBpdGVtICgyMDQpIGFmdGVyIGEgUE9TVC4gZmFsc2U6IHJldHVybiB0aGUgaXRlbSAoMjAwKS5cclxuXHQgKi9cclxuXHRwb3N0MjA0PzogYm9vbGVhbjtcclxuXHQvKipcclxuXHQqIGZhbHNlIChkZWZhdWx0KSBzaG91bGQgTk9UIHVwZGF0ZSBleGlzdGluZyBpdGVtIHdpdGggUE9TVC4gZmFsc2U6IE9LIHRvIHVwZGF0ZS5cclxuXHQqL1xyXG5cdHBvc3Q0MDk/OiBib29sZWFuO1xyXG5cdC8qKlxyXG5cdCogdHJ1ZSAoZGVmYXVsdCkgc2hvdWxkIE5PVCByZXR1cm4gdGhlIGl0ZW0gKDIwNCkgYWZ0ZXIgYSBQT1NULiBmYWxzZTogcmV0dXJuIHRoZSBpdGVtICgyMDApLlxyXG5cdCovXHJcblx0cHV0MjA0PzogYm9vbGVhbjtcclxuXHQvKipcclxuXHQgKiBmYWxzZSAoZGVmYXVsdCkgaWYgaXRlbSBub3QgZm91bmQsIGNyZWF0ZSBhcyBuZXcgaXRlbTsgZmFsc2U6IHNob3VsZCA0MDQuXHJcblx0ICovXHJcblx0cHV0NDA0PzogYm9vbGVhbjtcclxuXHQvKipcclxuXHQgKiByb290IHBhdGggX2JlZm9yZV8gYW55IEFQSSBjYWxsLCBlLmcuLCAnJ1xyXG5cdCAqL1xyXG5cdHJvb3RQYXRoPzogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb25maWc6IE1lbW9yeUJhY2tlbmRDb25maWcgPSB7fSkge1xyXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB7XHJcblx0XHRcdC8vIGRlZmF1bHQgY29uZmlnOlxyXG5cdFx0XHRjYXNlU2Vuc2l0aXZlU2VhcmNoOiBmYWxzZSxcclxuXHRcdFx0ZGF0YUVuY2Fwc3VsYXRpb246IGZhbHNlLCAvLyBkbyBOT1Qgd3JhcCBjb250ZW50IHdpdGhpbiBhbiBvYmplY3Qgd2l0aCBhIGBkYXRhYCBwcm9wZXJ0eVxyXG5cdFx0XHRkZWxheTogNTAwLCAvLyBzaW11bGF0ZSBsYXRlbmN5IGJ5IGRlbGF5aW5nIHJlc3BvbnNlXHJcblx0XHRcdGRlbGV0ZTQwNDogZmFsc2UsIC8vIGRvbid0IGNvbXBsYWluIGlmIGNhbid0IGZpbmQgZW50aXR5IHRvIGRlbGV0ZVxyXG5cdFx0XHRwYXNzVGhydVVua25vd25Vcmw6IGZhbHNlLCAvLyA0MDQgaWYgY2FuJ3QgcHJvY2VzcyBVUkxcclxuXHRcdFx0cG9zdDIwNDogdHJ1ZSwgLy8gZG9uJ3QgcmV0dXJuIHRoZSBpdGVtIGFmdGVyIGEgUE9TVFxyXG5cdFx0XHRwb3N0NDA5OiBmYWxzZSwgLy8gZG9uJ3QgdXBkYXRlIGV4aXN0aW5nIGl0ZW0gd2l0aCB0aGF0IElEXHJcblx0XHRcdHB1dDIwNDogdHJ1ZSwgIC8vIGRvbid0IHJldHVybiB0aGUgaXRlbSBhZnRlciBhIFBVVFxyXG5cdFx0XHRwdXQ0MDQ6IGZhbHNlLCAvLyBjcmVhdGUgbmV3IGl0ZW0gaWYgUFVUIGl0ZW0gd2l0aCB0aGF0IElEIG5vdCBmb3VuZFxyXG5cdFx0XHRhcGlCYXNlOiB1bmRlZmluZWQsIC8vIGFzc3VtZWQgdG8gYmUgdGhlIGZpcnN0IHBhdGggc2VnbWVudFxyXG5cdFx0XHRob3N0OiB1bmRlZmluZWQsICAgIC8vIGRlZmF1bHQgdmFsdWUgaXMgYWN0dWFsbHkgc2V0IGluIE1lbW9yeUJhY2tlbmRDb25maWcgY3RvclxyXG5cdFx0XHRyb290UGF0aDogdW5kZWZpbmVkIC8vIGRlZmF1bHQgdmFsdWUgaXMgYWN0dWFsbHkgc2V0IGluIE1lbW9yeUJhY2tlbmRDb25maWcgY3RvclxyXG5cdFx0fSwgY29uZmlnKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSByZXN1bHQgb2YgdGhlIGBwYXJzZVJlcXVlc3RVcmxgIG1ldGhvZDpcclxuICogICBHaXZlbiBVUkwgXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2N1c3RvbWVycy80Mj9mb289MSB0aGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5zXHJcbiAqICAgICBiYXNlOiAnYXBpLydcclxuICogICAgIGNvbGxlY3Rpb25OYW1lOiAnY3VzdG9tZXJzJ1xyXG4gKiAgICAgaWQ6ICc0MidcclxuICogICAgIHF1ZXJ5OiB0aGlzLmNyZWF0ZVF1ZXJ5KCdmb289MScpXHJcbiAqICAgICByZXNvdXJjZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3QvYXBpL2N1c3RvbWVycy8nXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFJlcXVlc3RVcmwge1xyXG5cdGFwaUJhc2U6IHN0cmluZzsgICAgICAgICAgIC8vIHRoZSBzbGFzaC10ZXJtaW5hdGVkIFwiYmFzZVwiIGZvciBhcGkgcmVxdWVzdHMgKGUuZy4gYGFwaS9gKVxyXG5cdGNvbGxlY3Rpb25OYW1lOiBzdHJpbmc7IC8vIHRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uIG9mIGRhdGEgaXRlbXMgKGUuZy4sYGN1c3RvbWVyc2ApXHJcblx0aWQ6IHN0cmluZzsgICAgICAgICAgICAgLy8gdGhlIChvcHRpb25hbCkgaWQgb2YgdGhlIGl0ZW0gaW4gdGhlIGNvbGxlY3Rpb24gKGUuZy4sIGA0MmApXHJcblx0cXVlcnk6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPjsgLy8gdGhlIHF1ZXJ5IHBhcmFtZXRlcnM7XHJcblx0cmVzb3VyY2VVcmw6IHN0cmluZzsgICAgLy8gdGhlIGVmZmVjdGl2ZSBVUkwgZm9yIHRoZSByZXNvdXJjZSAoZS5nLiwgJ2h0dHA6Ly9sb2NhbGhvc3QvYXBpL2N1c3RvbWVycy8nKVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhc3NUaHJ1QmFja2VuZCB7XHJcblx0LyoqXHJcblx0ICogSGFuZGxlIGFuIEhUVFAgcmVxdWVzdCBhbmQgcmV0dXJuIGFuIE9ic2VydmFibGUgb2YgSFRUUCByZXNwb25zZVxyXG5cdCAqIEJvdGggdGhlIHJlcXVlc3QgdHlwZSBhbmQgdGhlIHJlc3BvbnNlIHR5cGUgYXJlIGRldGVybWluZWQgYnkgdGhlIHN1cHBvcnRpbmcgSFRUUCBsaWJyYXJ5LlxyXG5cdCAqL1xyXG5cdGhhbmRsZShyZXE6IGFueSk6IE9ic2VydmFibGU8YW55PjtcclxufVxyXG5cclxuLyoqIEludGVyZmFjZSBvZiBpbmZvcm1hdGlvbiBhYm91dCBhIFVyaSAgKi9cclxuZXhwb3J0IGludGVyZmFjZSBVcmlJbmZvIHtcclxuXHRzb3VyY2U6IHN0cmluZztcclxuXHRwcm90b2NvbDogc3RyaW5nO1xyXG5cdGF1dGhvcml0eTogc3RyaW5nO1xyXG5cdHVzZXJJbmZvOiBzdHJpbmc7XHJcblx0dXNlcjogc3RyaW5nO1xyXG5cdHBhc3N3b3JkOiBzdHJpbmc7XHJcblx0aG9zdDogc3RyaW5nO1xyXG5cdHBvcnQ6IHN0cmluZztcclxuXHRyZWxhdGl2ZTogc3RyaW5nO1xyXG5cdHBhdGg6IHN0cmluZztcclxuXHRkaXJlY3Rvcnk6IHN0cmluZztcclxuXHRmaWxlOiBzdHJpbmc7XHJcblx0cXVlcnk6IHN0cmluZztcclxuXHRhbmNob3I6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiogSW50ZXJmYWNlIGZvciBvYmplY3Qgdy8gaW5mbyBhYm91dCB0aGUgY3VycmVudCByZXF1ZXN0IHVybFxyXG4qIGV4dHJhY3RlZCBmcm9tIGFuIEh0dHAgUmVxdWVzdC5cclxuKiBBbHNvIGhvbGRzIHV0aWxpdHkgbWV0aG9kcyBhbmQgY29uZmlndXJhdGlvbiBkYXRhIGZyb20gdGhpcyBzZXJ2aWNlXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVtb3J5UmVxdWVzdCB7XHJcblx0cmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PjsgLy8gY29uY3JldGUgdHlwZSBkZXBlbmRzIHVwb24gdGhlIEh0dHAgbGlicmFyeVxyXG5cdGJvZHk6IGFueTtcclxuXHRhcGlCYXNlOiBzdHJpbmc7XHJcblx0Y29sbGVjdGlvbk5hbWU6IHN0cmluZztcclxuXHRjb2xsZWN0aW9uOiBhbnk7XHJcblx0aGVhZGVyczogSHR0cEhlYWRlcnM7XHJcblx0bWV0aG9kOiBzdHJpbmc7XHJcblx0aWQ6IGFueTtcclxuXHRxdWVyeTogTWFwPHN0cmluZywgc3RyaW5nW10+O1xyXG5cdHJlc291cmNlVXJsOiBzdHJpbmc7XHJcblx0dXJsOiBzdHJpbmc7IC8vIHJlcXVlc3QgVVJMXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVtb3J5UmVzcG9uc2Uge1xyXG5cdC8qKlxyXG5cdCAqIFN0cmluZywgT2JqZWN0LCBBcnJheUJ1ZmZlciBvciBCbG9iIHJlcHJlc2VudGluZyB0aGUgYm9keSBvZiB0aGUge0BsaW5rIFJlc3BvbnNlfS5cclxuXHQgKi9cclxuXHRib2R5Pzogc3RyaW5nIHwgT2JqZWN0IHwgQXJyYXlCdWZmZXIgfCBCbG9iO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXNwb25zZSBoZWFkZXJzXHJcblx0ICovXHJcblx0aGVhZGVycz86IEh0dHBIZWFkZXJzO1xyXG5cclxuXHQvKipcclxuXHQgKiBIdHRwIHtAbGluayBodHRwOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzEwLmh0bWwgc3RhdHVzIGNvZGV9XHJcblx0ICogYXNzb2NpYXRlZCB3aXRoIHRoZSByZXNwb25zZS5cclxuXHQgKi9cclxuXHRzdGF0dXM/OiBudW1iZXI7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFN0YXR1cyB0ZXh0IGZvciB0aGUgc3RhdHVzIGNvZGVcclxuXHQgKi9cclxuXHRzdGF0dXNUZXh0Pzogc3RyaW5nO1xyXG5cdC8qKlxyXG5cdCAqIHJlcXVlc3QgdXJsXHJcblx0ICovXHJcblx0dXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogUHJvdmlkZSBhIGByZXF1ZXN0SW50ZXJjZXB0b3JgIG1ldGhvZCBvZiB0aGlzIHR5cGUgaW4geW91ciBgTWVtb3J5RGF0YVNlcnZpY2VgIHRvXHJcbiAqIGludGVyY2VwdCB0aGUgY3JlYXRlZCBNZW1vcnlSZXF1ZXN0LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVxdWVzdEludGVyY2VwdG9yID0gKHJlcXVlc3Q6IE1lbW9yeVJlcXVlc3QsIHNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlKSA9PiBNZW1vcnlSZXNwb25zZSB8IHVuZGVmaW5lZDtcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlIGEgYHJlc3BvbnNlSW50ZXJjZXB0b3JgIG1ldGhvZCBvZiB0aGlzIHR5cGUgaW4geW91ciBgTWVtb3J5RGF0YVNlcnZpY2VgIHRvXHJcbiAqIG1vcnBoIHRoZSByZXNwb25zZSBvcHRpb25zIGNyZWF0ZWQgaW4gdGhlIGBjb2xsZWN0aW9uSGFuZGxlcmAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZXNwb25zZUludGVyY2VwdG9yID0gKHJlc3BvbnNlOiBNZW1vcnlSZXNwb25zZSwgcmVxdWVzdDogTWVtb3J5UmVxdWVzdCkgPT4gTWVtb3J5UmVzcG9uc2U7XHJcbiJdfQ==