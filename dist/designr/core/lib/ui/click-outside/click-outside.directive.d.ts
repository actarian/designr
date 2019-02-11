import { ElementRef, EventEmitter } from '@angular/core';
export declare class ClickOutsideDirective {
    private element;
    constructor(element: ElementRef);
    clickOutside: EventEmitter<{}>;
    onClick(e: Event): void;
}
