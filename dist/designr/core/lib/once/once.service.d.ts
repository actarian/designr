import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class OnceService {
    private platformId;
    private zone;
    private uid;
    private paths;
    constructor(platformId: string, zone: NgZone);
    script(url: string, callback?: string | boolean): Observable<Event>;
    static ɵfac: i0.ɵɵFactoryDef<OnceService>;
    static ɵprov: i0.ɵɵInjectableDef<OnceService>;
}
