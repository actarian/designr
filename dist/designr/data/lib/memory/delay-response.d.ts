import { Observable } from 'rxjs';
export declare function delayResponse<T>(response$: Observable<T>, ms: number): Observable<T>;
