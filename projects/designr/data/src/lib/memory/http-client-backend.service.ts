import { HttpBackend, HttpEvent, HttpHeaders, HttpParams, HttpRequest, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackendService } from './backend.service';
import { STATUS_CODE } from './http-status-codes';
import { MemoryBackendConfig, MemoryDataService, ResponseOptions } from './memory';

@Injectable()
export class HttpClientBackendService extends BackendService implements HttpBackend {

	constructor(
		dataService: MemoryDataService,
		@Inject(MemoryBackendConfig) @Optional() config: MemoryBackendConfig,
		private factory: XhrFactory,
	) {
		super(dataService, config);
	}

	handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
		try {
			return this.handleRequest(request);
		} catch (error) {
			const resOptions = this.createErrorResponseOptions(request.url, STATUS_CODE.INTERNAL_SERVER_ERROR, `${error.message || error}`);
			return this.createResponse$(() => resOptions);
		}
	}

	protected getJsonBody(request: HttpRequest<any>): any {
		return request.body;
	}

	protected getRequestMethod(request: HttpRequest<any>): string {
		return (request.method || 'get').toLowerCase();
	}

	protected createHeaders(headers: { [index: string]: string; }): HttpHeaders {
		return new HttpHeaders(headers);
	}

	protected createQueryMap(search: string): Map<string, string[]> {
		const map = new Map<string, string[]>();
		if (search) {
			const params = new HttpParams({ fromString: search });
			params.keys().forEach(p => map.set(p, params.getAll(p)));
		}
		return map;
	}

	protected createResponse$fromResponseOptions$(resOptions$: Observable<ResponseOptions>): Observable<HttpResponse<any>> {
		return resOptions$.pipe(
			map((options: HttpResponseBase) => new HttpResponse<any>(options)),
		);
	}

	protected createPassThruBackend() {
		try {
			return new HttpXhrBackend(this.factory);
		} catch (error) {
			error.message = 'Cannot create passThru404 backend; ' + (error.message || '');
			throw error;
		}
	}
}
