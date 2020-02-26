import { ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { DisposableDirective } from '@designr/core';
import * as i0 from "@angular/core";
export declare class ScrollDirective extends DisposableDirective implements OnInit, OnDestroy {
    private platformId;
    private zone;
    protected elementRef: ElementRef<HTMLElement>;
    private eventOptions;
    constructor(platformId: string, zone: NgZone, elementRef: ElementRef<HTMLElement>);
    scroll: EventEmitter<any>;
    private scrollEvent;
    private scrollDocumentEvent;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ScrollDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ScrollDirective, "[scroll]", never, {}, { "scroll": "scroll"; }, never>;
}
