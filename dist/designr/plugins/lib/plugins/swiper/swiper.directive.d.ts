import { AfterViewInit, DoCheck, ElementRef, EventEmitter, KeyValueDiffers, NgZone, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { SwiperConfigInterface } from './swiper.interfaces';
import * as i0 from "@angular/core";
export declare class SwiperDirective implements AfterViewInit, OnDestroy, DoCheck, OnChanges {
    private platformId;
    private zone;
    private elementRef;
    private differs;
    private defaults;
    private swiper_;
    private index_;
    private config_;
    set index(index: number);
    disabled: boolean;
    performance: boolean;
    config?: SwiperConfigInterface;
    autoplay: EventEmitter<any>;
    autoplayStart: EventEmitter<any>;
    autoplayStop: EventEmitter<any>;
    beforeDestroy: EventEmitter<any>;
    beforeResize: EventEmitter<any>;
    breakpoint: EventEmitter<any>;
    click: EventEmitter<any>;
    doubleTap: EventEmitter<any>;
    fromEdge: EventEmitter<any>;
    imagesReady: EventEmitter<any>;
    indexChange: EventEmitter<number>;
    init: EventEmitter<any>;
    keyPress: EventEmitter<any>;
    lazyImageLoad: EventEmitter<any>;
    lazyImageReady: EventEmitter<any>;
    progress: EventEmitter<any>;
    reachBeginning: EventEmitter<any>;
    reachEnd: EventEmitter<any>;
    resize: EventEmitter<any>;
    scroll: EventEmitter<any>;
    scrollDragEnd: EventEmitter<any>;
    scrollDragMove: EventEmitter<any>;
    scrollDragStart: EventEmitter<any>;
    setTransition: EventEmitter<any>;
    setTranslate: EventEmitter<any>;
    slideChange: EventEmitter<any>;
    slideChangeTransitionEnd: EventEmitter<any>;
    slideChangeTransitionStart: EventEmitter<any>;
    slideNextTransitionEnd: EventEmitter<any>;
    slideNextTransitionStart: EventEmitter<any>;
    slidePrevTransitionEnd: EventEmitter<any>;
    slidePrevTransitionStart: EventEmitter<any>;
    sliderMove: EventEmitter<any>;
    tap: EventEmitter<any>;
    touchEnd: EventEmitter<any>;
    touchMove: EventEmitter<any>;
    touchMoveOpposite: EventEmitter<any>;
    touchStart: EventEmitter<any>;
    transitionEnd: EventEmitter<any>;
    transitionStart: EventEmitter<any>;
    constructor(platformId: Object, zone: NgZone, elementRef: ElementRef, differs: KeyValueDiffers, defaults: SwiperConfigInterface);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private emit;
    swiper(): any;
    initialize(): void;
    update(): void;
    getIndex(real?: boolean): number;
    setIndex(index: number, speed?: number, silent?: boolean): void;
    prevSlide(speed?: number, silent?: boolean): void;
    nextSlide(speed?: number, silent?: boolean): void;
    stopAutoplay(reset?: boolean): void;
    startAutoplay(reset?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<SwiperDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SwiperDirective, "[swiper]", ["ngxSwiper"], { "index": "index"; "disabled": "disabled"; "performance": "performance"; "config": "swiper"; }, { "autoplay": "autoplay"; "autoplayStart": "autoplayStart"; "autoplayStop": "autoplayStop"; "beforeDestroy": "beforeDestroy"; "beforeResize": "beforeResize"; "breakpoint": "breakpoint"; "click": "click"; "doubleTap": "doubleTap"; "fromEdge": "fromEdge"; "imagesReady": "imagesReady"; "indexChange": "indexChange"; "init": "init"; "keyPress": "keyPress"; "lazyImageLoad": "lazyImageLoad"; "lazyImageReady": "lazyImageReady"; "progress": "progress"; "reachBeginning": "reachBeginning"; "reachEnd": "reachEnd"; "resize": "resize"; "scroll": "scroll"; "scrollDragEnd": "scrollDragEnd"; "scrollDragMove": "scrollDragMove"; "scrollDragStart": "scrollDragStart"; "setTransition": "setTransition"; "setTranslate": "setTranslate"; "slideChange": "slideChange"; "slideChangeTransitionEnd": "slideChangeTransitionEnd"; "slideChangeTransitionStart": "slideChangeTransitionStart"; "slideNextTransitionEnd": "slideNextTransitionEnd"; "slideNextTransitionStart": "slideNextTransitionStart"; "slidePrevTransitionEnd": "slidePrevTransitionEnd"; "slidePrevTransitionStart": "slidePrevTransitionStart"; "sliderMove": "sliderMove"; "tap": "tap"; "touchEnd": "touchEnd"; "touchMove": "touchMove"; "touchMoveOpposite": "touchMoveOpposite"; "touchStart": "touchStart"; "transitionEnd": "transitionEnd"; "transitionStart": "transitionStart"; }, never>;
}
