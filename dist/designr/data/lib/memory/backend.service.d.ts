import { HttpBackend, HttpEvent, HttpRequest, HttpResponse, HttpXhrBackend, XhrFactory } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { MemoryBackendConfig, MemoryDataService, MemoryRequest, MemoryResponse, ParsedRequestUrl, PassThruBackend, UriInfo } from './memory';
import * as i0 from "@angular/core";
export declare class BackendService implements HttpBackend {
    protected dataService: MemoryDataService;
    private factory;
    private passThruBackend;
    protected config: MemoryBackendConfig;
    protected database: Object;
    protected databaseReadySubject: BehaviorSubject<boolean>;
    constructor(dataService: MemoryDataService, config: MemoryBackendConfig, factory: XhrFactory);
    protected get databaseReady(): Observable<boolean>;
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
     *     `dataService.get(memoryRequest)`
     *     which must return either an Observable of the response type
     *     for this http library or null|undefined (which means "keep processing").
     */
    protected handleRequest(request: HttpRequest<any>): Observable<any>;
    protected handleRequest_(request: HttpRequest<any>): Observable<any>;
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
    protected parseRequestUrl(url: string): ParsedRequestUrl;
    /** Parse the id as a number. Return original value if not a number. */
    protected parseId(collection: any[], collectionName: string, id: string): any;
    /**
     * Add configured delay to response observable unless delay === 0
     */
    protected addDelay(response: Observable<any>): Observable<any>;
    /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     */
    protected applyQuery(collection: any[], query: Map<string, string[]>): any[];
    /**
     * Get a method from the `MemoryDataService` (if it exists), bound to that service
     */
    protected bind<T extends Function>(methodName: string): T;
    bodify(data: any): any;
    protected clone(data: any): any;
    protected collectionHandler(request: MemoryRequest): MemoryResponse;
    createErrorResponse(url: string, status: number, message: string): MemoryResponse;
    /**
     * Create a cold response Observable from a factory for MemoryResponse
     * @param memoryResponseFactory - creates MemoryResponse when observable is subscribed
     * @param withDelay - if true (default), add simulated latency delay from configuration
     */
    protected createResponse$(memoryResponseFactory: () => MemoryResponse, withDelay?: boolean): Observable<any>;
    /**
     * Create a cold Observable of MemoryResponse.
     * @param memoryResponseFactory - creates MemoryResponse when observable is subscribed
     */
    protected createMemoryResponse$(memoryResponseFactory: () => MemoryResponse): Observable<MemoryResponse>;
    /**
     * Find first instance of item in collection by `item.id`
     * @param collection
     * @param id
     */
    protected findById<T extends {
        id: any;
    }>(collection: T[], id: any): T;
    /**
     * Generate the next available id for item in this collection
     * Use method from `dataService` if it exists and returns a value,
     * else delegates to `genIdDefault`.
     * @param collection - collection of items with `id` key property
     */
    protected genId<T extends {
        id: any;
    }>(collection: T[], collectionName: string): any;
    /**
     * Default generator of the next available id for item in this collection
     * This default implementation works only for numeric ids.
     * @param collection - collection of items with `id` key property
     * @param collectionName - name of the collection
     */
    protected genIdDefault<T extends {
        id: any;
    }>(collection: T[], collectionName: string): any;
    /**
     * Get location info from a url, even on server where `document` is not defined
     */
    protected getLocation(url: string): UriInfo;
    /**
     * get or create the function that passes unhandled requests
     * through to the "real" backend.
     */
    protected getPassThruBackend(): PassThruBackend;
    protected indexOf(collection: any[], id: number): number;
    /**
     * return true if can determine that the collection's `item.id` is a number
     * This implementation can't tell if the collection is empty so it assumes NO
     * */
    protected isCollectionIdNumeric<T extends {
        id: any;
    }>(collection: T[], collectionName: string): boolean;
    protected removeById(collection: any[], id: number): boolean;
    /**
     * Tell your in-mem "database" to reset.
     * returns Observable of the database because resetting it could be async
     */
    protected resetDb(request?: MemoryRequest): Observable<boolean>;
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
    protected commands(request: MemoryRequest): Observable<any>;
    protected get({ collection, collectionName, headers, id, query, url }: MemoryRequest): MemoryResponse;
    protected post({ collection, collectionName, headers, id, request, resourceUrl, url }: MemoryRequest): MemoryResponse;
    protected put({ collection, collectionName, headers, id, request, url }: MemoryRequest): MemoryResponse;
    protected delete({ collection, collectionName, headers, id, url }: MemoryRequest): MemoryResponse;
    handle(request: HttpRequest<any>): Observable<HttpEvent<any>>;
    protected createQueryMap(search: string): Map<string, string[]>;
    protected createResponse$fromMemoryResponse$(response$: Observable<MemoryResponse>): Observable<HttpResponse<any>>;
    protected createPassThruBackend(): HttpXhrBackend;
    static ɵfac: i0.ɵɵFactoryDef<BackendService>;
    static ɵprov: i0.ɵɵInjectableDef<BackendService>;
}
