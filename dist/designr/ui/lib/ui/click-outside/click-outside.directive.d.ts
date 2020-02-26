import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class ClickOutsideDirective implements OnInit, OnDestroy {
    private eventManager;
    private element;
    initialFocus: boolean;
    clickOutside: EventEmitter<any>;
    private removeClick;
    constructor(eventManager: EventManager, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(e: Event): void;
    static ɵfac: i0.ɵɵFactoryDef<ClickOutsideDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClickOutsideDirective, "[clickOutside]", never, { "initialFocus": "initialFocus"; }, { "clickOutside": "clickOutside"; }, never>;
}
