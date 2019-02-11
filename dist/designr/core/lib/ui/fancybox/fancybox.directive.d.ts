import { AfterViewInit, ElementRef, NgZone } from '@angular/core';
export declare class FancyboxDirective implements AfterViewInit {
    private platformId;
    private zone;
    private element;
    fancybox: any;
    target: string;
    constructor(platformId: string, zone: NgZone, element: ElementRef);
    ngAfterViewInit(): void;
}
