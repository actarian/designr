import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { SwiperDirective } from './swiper.directive';
import { SwiperConfigInterface } from './swiper.interfaces';
export declare class SwiperComponent implements AfterViewInit, OnDestroy {
    private zone;
    private cdRef;
    private platformId;
    private defaults;
    swiperSlides?: ElementRef;
    directiveRef?: SwiperDirective;
    index: number | null;
    disabled: boolean;
    performance: boolean;
    config?: SwiperConfigInterface;
    useSwiperClass: boolean;
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
    readonly isAtLast: boolean;
    readonly isAtFirst: boolean;
    private mo;
    swiperConfig: any;
    paginationBackup: any;
    paginationConfig: any;
    constructor(zone: NgZone, cdRef: ChangeDetectorRef, platformId: Object, defaults: SwiperConfigInterface);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    getConfig(): SwiperConfigInterface;
    private updateClasses;
    onPaginationClick(index: number): void;
}
