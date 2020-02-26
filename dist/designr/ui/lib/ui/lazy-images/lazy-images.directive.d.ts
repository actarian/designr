import { ElementRef, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LazyImagesDirective implements OnInit, OnDestroy {
    private platformId;
    renderer: Renderer2;
    zone: NgZone;
    lazyImages: Object;
    observer: IntersectionObserver;
    nativeElement: HTMLElement;
    constructor(platformId: string, element: ElementRef, renderer: Renderer2, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onRegister(): void;
    onChange(...data: any[]): void;
    newIntersectionObserver(): IntersectionObserver;
    onAppearsInViewport(image: any): void;
    onImagePreload(src: string, callback: Function): void;
    static ɵfac: i0.ɵɵFactoryDef<LazyImagesDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<LazyImagesDirective, "[lazy-images]", never, { "lazyImages": "lazyImages"; }, {}, never>;
}
