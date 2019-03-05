import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
export declare class ClickOutsideDirective implements OnInit, OnDestroy {
    private eventManager;
    private element;
    initialFocus: boolean;
    clickOutside: EventEmitter<{}>;
    private removeClick;
    constructor(eventManager: EventManager, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(e: Event): void;
}
