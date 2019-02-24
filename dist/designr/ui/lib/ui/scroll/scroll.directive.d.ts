import { ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { DisposableComponent } from '@designr/core';
export declare class ScrollDirective extends DisposableComponent implements OnInit, OnDestroy {
    private platformId;
    private zone;
    protected elementRef: ElementRef<HTMLElement>;
    private eventOptions;
    constructor(platformId: string, zone: NgZone, elementRef: ElementRef<HTMLElement>);
    scroll: EventEmitter<{}>;
    private scrollEvent;
    private scrollDocumentEvent;
    ngOnInit(): void;
}
