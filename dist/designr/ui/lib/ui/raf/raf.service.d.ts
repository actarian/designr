import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
export declare class RafService {
    private platformId;
    private zone;
    constructor(platformId: string, zone: NgZone);
    raf$(): Observable<number>;
}
