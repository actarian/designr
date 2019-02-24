import { HttpBackend, HttpEvent, HttpHeaders, HttpRequest, HttpResponse, HttpXhrBackend, XhrFactory } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';
import { MemoryBackendConfig, MemoryDataService, ResponseOptions } from './interfaces';
export declare class HttpClientBackendService extends BackendService implements HttpBackend {
    private factory;
    constructor(dataService: MemoryDataService, config: MemoryBackendConfig, factory: XhrFactory);
    handle(request: HttpRequest<any>): Observable<HttpEvent<any>>;
    protected getJsonBody(request: HttpRequest<any>): any;
    protected getRequestMethod(request: HttpRequest<any>): string;
    protected createHeaders(headers: {
        [index: string]: string;
    }): HttpHeaders;
    protected createQueryMap(search: string): Map<string, string[]>;
    protected createResponse$fromResponseOptions$(resOptions$: Observable<ResponseOptions>): Observable<HttpResponse<any>>;
    protected createPassThruBackend(): HttpXhrBackend;
}
