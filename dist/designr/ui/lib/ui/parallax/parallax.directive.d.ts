import { AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Observable } from 'rxjs';
import { RafService } from '../raf/raf.service';
export declare class ParallaxDirective extends DisposableComponent implements AfterViewInit {
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
}
