import { AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { DisposableDirective } from '@designr/core';
import { Observable } from 'rxjs';
import { RafService } from '../raf/raf.service';
import * as i0 from "@angular/core";
export declare class ParallaxDirective extends DisposableDirective implements AfterViewInit {
    private platformId;
    private zone;
    private elementRef;
    private rafService;
    parallax: number;
    constructor(platformId: string, zone: NgZone, elementRef: ElementRef<HTMLElement>, rafService: RafService);
    ngAfterViewInit(): void;
    parallax$(): Observable<{
        s: number;
        p: number;
    }>;
    scrollTop$(): Observable<number>;
    static ɵfac: i0.ɵɵFactoryDef<ParallaxDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ParallaxDirective, "[parallax]", never, { "parallax": "parallax"; }, {}, never>;
}
