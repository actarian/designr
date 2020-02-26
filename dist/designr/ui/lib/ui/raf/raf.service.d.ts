import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class RafService {
    private platformId;
    private zone;
    constructor(platformId: string, zone: NgZone);
    raf$(): Observable<number>;
    static ɵfac: i0.ɵɵFactoryDef<RafService>;
    static ɵprov: i0.ɵɵInjectableDef<RafService>;
}
