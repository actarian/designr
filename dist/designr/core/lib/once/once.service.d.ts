import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
export declare class OnceService {
    private platformId;
    private zone;
    private uid;
    private paths;
    constructor(platformId: string, zone: NgZone);
    script(url: string, callback?: string | boolean): Observable<Event>;
}
