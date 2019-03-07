/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Inject, Input, KeyValueDiffers, NgZone, Optional, Output, PLATFORM_ID } from '@angular/core';
import * as Swiper from 'swiper/dist/js/swiper.js';
import { SwiperConfig, SwiperEvents, SWIPER_CONFIG } from './swiper.interfaces';
export class SwiperDirective {
    /**
     * @param {?} platformId
     * @param {?} zone
     * @param {?} elementRef
     * @param {?} differs
     * @param {?} defaults
     */
    constructor(platformId, zone, elementRef, differs, defaults) {
        this.platformId = platformId;
        this.zone = zone;
        this.elementRef = elementRef;
        this.differs = differs;
        this.defaults = defaults;
        this.index_ = null;
        this.config_ = null;
        this.disabled = false;
        this.performance = false;
        this.autoplay = new EventEmitter();
        this.autoplayStart = new EventEmitter();
        this.autoplayStop = new EventEmitter();
        this.beforeDestroy = new EventEmitter();
        this.beforeResize = new EventEmitter();
        this.breakpoint = new EventEmitter();
        this.click = new EventEmitter();
        this.doubleTap = new EventEmitter();
        this.fromEdge = new EventEmitter();
        this.imagesReady = new EventEmitter();
        this.indexChange = new EventEmitter();
        this.init = new EventEmitter();
        this.keyPress = new EventEmitter();
        this.lazyImageLoad = new EventEmitter();
        this.lazyImageReady = new EventEmitter();
        this.progress = new EventEmitter();
        this.reachBeginning = new EventEmitter();
        this.reachEnd = new EventEmitter();
        this.resize = new EventEmitter();
        this.scroll = new EventEmitter();
        this.scrollDragEnd = new EventEmitter();
        this.scrollDragMove = new EventEmitter();
        this.scrollDragStart = new EventEmitter();
        this.setTransition = new EventEmitter();
        this.setTranslate = new EventEmitter();
        this.slideChange = new EventEmitter();
        this.slideChangeTransitionEnd = new EventEmitter();
        this.slideChangeTransitionStart = new EventEmitter();
        this.slideNextTransitionEnd = new EventEmitter();
        this.slideNextTransitionStart = new EventEmitter();
        this.slidePrevTransitionEnd = new EventEmitter();
        this.slidePrevTransitionStart = new EventEmitter();
        this.sliderMove = new EventEmitter();
        this.tap = new EventEmitter();
        this.touchEnd = new EventEmitter();
        this.touchMove = new EventEmitter();
        this.touchMoveOpposite = new EventEmitter();
        this.touchStart = new EventEmitter();
        this.transitionEnd = new EventEmitter();
        this.transitionStart = new EventEmitter();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    set index(index) {
        if (index != null) {
            this.setIndex(index);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        /** @type {?} */
        const params = new SwiperConfig(this.defaults);
        params.assign(this.config); // Custom configuration
        if (params.scrollbar === true) {
            params.scrollbar = {
                el: '.swiper-scrollbar'
            };
        }
        if (params.pagination === true) {
            params.pagination = {
                el: '.swiper-pagination'
            };
        }
        if (params.navigation === true) {
            params.navigation = {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            };
        }
        if (this.disabled) {
            params.allowSlidePrev = false;
            params.allowSlideNext = false;
        }
        if (this.index_ != null) {
            params.initialSlide = this.index_;
            this.index_ = null;
        }
        params.on = {
            slideChange: (/**
             * @return {?}
             */
            () => {
                if (this.swiper_ && this.indexChange.observers.length) {
                    this.emit(this.indexChange, this.swiper_.realIndex);
                }
            })
        };
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.swiper_ = new Swiper(this.elementRef.nativeElement, params);
        }));
        if (params.init !== false && this.init.observers.length) {
            this.emit(this.init, this.swiper_);
        }
        // Add native Swiper event handling
        SwiperEvents.forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        (eventName) => {
            /** @type {?} */
            let swiperEvent = eventName.replace('swiper', '');
            swiperEvent = swiperEvent.charAt(0).toLowerCase() + swiperEvent.slice(1);
            this.swiper_.on(swiperEvent, (/**
             * @param {...?} args
             * @return {?}
             */
            (...args) => {
                if (args.length === 1) {
                    args = args[0];
                }
                /** @type {?} */
                const emitter = (/** @type {?} */ (this[(/** @type {?} */ (swiperEvent))]));
                if (emitter.observers.length) {
                    this.emit(emitter, args);
                }
            }));
        }));
        if (!this.config_) {
            this.config_ = this.differs.find(this.config || {}).create();
            this.config_.diff(this.config || {});
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.swiper_) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.swiper_.destroy(true, this.swiper_.initialized || false);
            }));
            this.swiper_ = null;
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.config_) {
            /** @type {?} */
            const changes = this.config_.diff(this.config || {});
            if (changes) {
                this.index_ = this.getIndex(true);
                this.ngOnDestroy();
                this.ngAfterViewInit();
                this.update();
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.swiper_ && changes['disabled']) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    () => {
                        this.ngOnDestroy();
                        this.ngAfterViewInit();
                    }));
                }
                else if (changes['disabled'].currentValue === false) {
                    this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    () => {
                        this.ngOnDestroy();
                        this.ngAfterViewInit();
                    }));
                }
            }
        }
    }
    /**
     * @private
     * @param {?} emitter
     * @param {?} value
     * @return {?}
     */
    emit(emitter, value) {
        if (this.performance) {
            emitter.emit(value);
        }
        else {
            this.zone.run((/**
             * @return {?}
             */
            () => emitter.emit(value)));
        }
    }
    /**
     * @return {?}
     */
    swiper() {
        return this.swiper_;
    }
    /**
     * @return {?}
     */
    initialize() {
        if (this.swiper_) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.swiper_.init();
            }));
        }
    }
    /**
     * @return {?}
     */
    update() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.swiper_) {
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => {
                    this.swiper_.update();
                }));
            }
        }), 0);
    }
    /**
     * @param {?=} real
     * @return {?}
     */
    getIndex(real) {
        if (!this.swiper_) {
            return this.index_ || 0;
        }
        else {
            return real ? this.swiper_.realIndex : this.swiper_.activeIndex;
        }
    }
    /**
     * @param {?} index
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    setIndex(index, speed, silent) {
        if (!this.swiper_) {
            this.index_ = index;
        }
        else {
            /** @type {?} */
            let realIndex = index * this.swiper_.params.slidesPerGroup;
            if (this.swiper_.params.loop) {
                realIndex += this.swiper_.loopedSlides;
            }
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.swiper_.slideTo(realIndex, speed, !silent);
            }));
        }
    }
    /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    prevSlide(speed, silent) {
        if (this.swiper_) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.swiper_.slidePrev(speed, !silent);
            }));
        }
    }
    /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    nextSlide(speed, silent) {
        if (this.swiper_) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.swiper_.slideNext(speed, !silent);
            }));
        }
    }
    /**
     * @param {?=} reset
     * @return {?}
     */
    stopAutoplay(reset) {
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper_ && this.swiper_.autoplay) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.swiper_.autoplay.stop();
            }));
        }
    }
    /**
     * @param {?=} reset
     * @return {?}
     */
    startAutoplay(reset) {
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper_ && this.swiper_.autoplay) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.swiper_.autoplay.start();
            }));
        }
    }
}
SwiperDirective.decorators = [
    { type: Directive, args: [{
                selector: '[swiper]',
                exportAs: 'ngxSwiper'
            },] }
];
/** @nocollapse */
SwiperDirective.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone },
    { type: ElementRef },
    { type: KeyValueDiffers },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SWIPER_CONFIG,] }] }
];
SwiperDirective.propDecorators = {
    index: [{ type: Input }],
    disabled: [{ type: Input }],
    performance: [{ type: Input }],
    config: [{ type: Input, args: ['swiper',] }],
    autoplay: [{ type: Output }],
    autoplayStart: [{ type: Output }],
    autoplayStop: [{ type: Output }],
    beforeDestroy: [{ type: Output }],
    beforeResize: [{ type: Output }],
    breakpoint: [{ type: Output }],
    click: [{ type: Output }],
    doubleTap: [{ type: Output }],
    fromEdge: [{ type: Output }],
    imagesReady: [{ type: Output }],
    indexChange: [{ type: Output }],
    init: [{ type: Output }],
    keyPress: [{ type: Output }],
    lazyImageLoad: [{ type: Output }],
    lazyImageReady: [{ type: Output }],
    progress: [{ type: Output }],
    reachBeginning: [{ type: Output }],
    reachEnd: [{ type: Output }],
    resize: [{ type: Output }],
    scroll: [{ type: Output }],
    scrollDragEnd: [{ type: Output }],
    scrollDragMove: [{ type: Output }],
    scrollDragStart: [{ type: Output }],
    setTransition: [{ type: Output }],
    setTranslate: [{ type: Output }],
    slideChange: [{ type: Output }],
    slideChangeTransitionEnd: [{ type: Output }],
    slideChangeTransitionStart: [{ type: Output }],
    slideNextTransitionEnd: [{ type: Output }],
    slideNextTransitionStart: [{ type: Output }],
    slidePrevTransitionEnd: [{ type: Output }],
    slidePrevTransitionStart: [{ type: Output }],
    sliderMove: [{ type: Output }],
    tap: [{ type: Output }],
    touchEnd: [{ type: Output }],
    touchMove: [{ type: Output }],
    touchMoveOpposite: [{ type: Output }],
    touchStart: [{ type: Output }],
    transitionEnd: [{ type: Output }],
    transitionStart: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.swiper_;
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.index_;
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.config_;
    /** @type {?} */
    SwiperDirective.prototype.disabled;
    /** @type {?} */
    SwiperDirective.prototype.performance;
    /** @type {?} */
    SwiperDirective.prototype.config;
    /** @type {?} */
    SwiperDirective.prototype.autoplay;
    /** @type {?} */
    SwiperDirective.prototype.autoplayStart;
    /** @type {?} */
    SwiperDirective.prototype.autoplayStop;
    /** @type {?} */
    SwiperDirective.prototype.beforeDestroy;
    /** @type {?} */
    SwiperDirective.prototype.beforeResize;
    /** @type {?} */
    SwiperDirective.prototype.breakpoint;
    /** @type {?} */
    SwiperDirective.prototype.click;
    /** @type {?} */
    SwiperDirective.prototype.doubleTap;
    /** @type {?} */
    SwiperDirective.prototype.fromEdge;
    /** @type {?} */
    SwiperDirective.prototype.imagesReady;
    /** @type {?} */
    SwiperDirective.prototype.indexChange;
    /** @type {?} */
    SwiperDirective.prototype.init;
    /** @type {?} */
    SwiperDirective.prototype.keyPress;
    /** @type {?} */
    SwiperDirective.prototype.lazyImageLoad;
    /** @type {?} */
    SwiperDirective.prototype.lazyImageReady;
    /** @type {?} */
    SwiperDirective.prototype.progress;
    /** @type {?} */
    SwiperDirective.prototype.reachBeginning;
    /** @type {?} */
    SwiperDirective.prototype.reachEnd;
    /** @type {?} */
    SwiperDirective.prototype.resize;
    /** @type {?} */
    SwiperDirective.prototype.scroll;
    /** @type {?} */
    SwiperDirective.prototype.scrollDragEnd;
    /** @type {?} */
    SwiperDirective.prototype.scrollDragMove;
    /** @type {?} */
    SwiperDirective.prototype.scrollDragStart;
    /** @type {?} */
    SwiperDirective.prototype.setTransition;
    /** @type {?} */
    SwiperDirective.prototype.setTranslate;
    /** @type {?} */
    SwiperDirective.prototype.slideChange;
    /** @type {?} */
    SwiperDirective.prototype.slideChangeTransitionEnd;
    /** @type {?} */
    SwiperDirective.prototype.slideChangeTransitionStart;
    /** @type {?} */
    SwiperDirective.prototype.slideNextTransitionEnd;
    /** @type {?} */
    SwiperDirective.prototype.slideNextTransitionStart;
    /** @type {?} */
    SwiperDirective.prototype.slidePrevTransitionEnd;
    /** @type {?} */
    SwiperDirective.prototype.slidePrevTransitionStart;
    /** @type {?} */
    SwiperDirective.prototype.sliderMove;
    /** @type {?} */
    SwiperDirective.prototype.tap;
    /** @type {?} */
    SwiperDirective.prototype.touchEnd;
    /** @type {?} */
    SwiperDirective.prototype.touchMove;
    /** @type {?} */
    SwiperDirective.prototype.touchMoveOpposite;
    /** @type {?} */
    SwiperDirective.prototype.touchStart;
    /** @type {?} */
    SwiperDirective.prototype.transitionEnd;
    /** @type {?} */
    SwiperDirective.prototype.transitionStart;
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.differs;
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.defaults;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9zd2lwZXIvc3dpcGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQVcsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFrQixlQUFlLEVBQUUsTUFBTSxFQUF3QixRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDeE4sT0FBTyxLQUFLLE1BQU0sTUFBTSwwQkFBMEIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFzQyxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFNcEgsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7O0lBeUQzQixZQUM4QixVQUFrQixFQUFVLElBQVksRUFDN0QsVUFBc0IsRUFBVSxPQUF3QixFQUNyQixRQUErQjtRQUY3QyxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUM3RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUF6RG5FLFdBQU0sR0FBa0IsSUFBSSxDQUFDO1FBQzdCLFlBQU8sR0FBdUMsSUFBSSxDQUFDO1FBUWxELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHNUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxrQkFBYSxHQUFHLElB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QUE2Qzs7SUFDN0Msd0NBQWtEOztJQUNsRCx5Q0FBbUQ7O0lBQ25ELG1DQUE2Qzs7SUFDN0MseUNBQW1EOztJQUNuRCxtQ0FBNkM7O0lBQzdDLGlDQUEyQzs7SUFDM0MsaUNBQTJDOztJQUMzQyx3Q0FBa0Q7O0lBQ2xELHlDQUFtRDs7SUFDbkQsMENBQW9EOztJQUNwRCx3Q0FBa0Q7O0lBQ2xELHVDQUFpRDs7SUFDakQsc0NBQWdEOztJQUNoRCxtREFBNkQ7O0lBQzdELHFEQUErRDs7SUFDL0QsaURBQTJEOztJQUMzRCxtREFBNkQ7O0lBQzdELGlEQUEyRDs7SUFDM0QsbURBQTZEOztJQUM3RCxxQ0FBK0M7O0lBQy9DLDhCQUF3Qzs7SUFDeEMsbUNBQTZDOztJQUM3QyxvQ0FBOEM7O0lBQzlDLDRDQUFzRDs7SUFDdEQscUNBQStDOztJQUMvQyx3Q0FBa0Q7O0lBQ2xELDBDQUFvRDs7Ozs7SUFHbkQscUNBQStDOzs7OztJQUFFLCtCQUFvQjs7Ozs7SUFDckUscUNBQThCOzs7OztJQUFFLGtDQUFnQzs7Ozs7SUFDaEUsbUNBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBEb0NoZWNrLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBPdXRwdXQsIFBMQVRGT1JNX0lELCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBTd2lwZXIgZnJvbSAnc3dpcGVyL2Rpc3QvanMvc3dpcGVyLmpzJztcbmltcG9ydCB7IFN3aXBlckNvbmZpZywgU3dpcGVyQ29uZmlnSW50ZXJmYWNlLCBTd2lwZXJFdmVudCwgU3dpcGVyRXZlbnRzLCBTV0lQRVJfQ09ORklHIH0gZnJvbSAnLi9zd2lwZXIuaW50ZXJmYWNlcyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tzd2lwZXJdJyxcblx0ZXhwb3J0QXM6ICduZ3hTd2lwZXInXG59KVxuZXhwb3J0IGNsYXNzIFN3aXBlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgT25DaGFuZ2VzIHtcblxuXHRwcml2YXRlIHN3aXBlcl86IGFueTtcblx0cHJpdmF0ZSBpbmRleF86IG51bWJlciB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIGNvbmZpZ186IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PiB8IG51bGwgPSBudWxsO1xuXG5cdEBJbnB1dCgpIHNldCBpbmRleChpbmRleDogbnVtYmVyKSB7XG5cdFx0aWYgKGluZGV4ICE9IG51bGwpIHtcblx0XHRcdHRoaXMuc2V0SW5kZXgoaW5kZXgpO1xuXHRcdH1cblx0fVxuXG5cdEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIHBlcmZvcm1hbmNlOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgnc3dpcGVyJykgY29uZmlnPzogU3dpcGVyQ29uZmlnSW50ZXJmYWNlO1xuXG5cdEBPdXRwdXQoKSBhdXRvcGxheSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgYXV0b3BsYXlTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgYXV0b3BsYXlTdG9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBiZWZvcmVEZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBiZWZvcmVSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGJyZWFrcG9pbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBkb3VibGVUYXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGZyb21FZGdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBpbWFnZXNSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgaW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblx0QE91dHB1dCgpIGluaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGtleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBsYXp5SW1hZ2VMb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBsYXp5SW1hZ2VSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHJlYWNoQmVnaW5uaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSByZWFjaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNjcm9sbERyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNjcm9sbERyYWdNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzY3JvbGxEcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNldFRyYW5zaXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNldFRyYW5zbGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlTmV4dFRyYW5zaXRpb25FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlTmV4dFRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVQcmV2VHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzbGlkZXJNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0YXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRvdWNoRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0b3VjaE1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRvdWNoTW92ZU9wcG9zaXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0b3VjaFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0cmFuc2l0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0cmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KFNXSVBFUl9DT05GSUcpIHByaXZhdGUgZGVmYXVsdHM6IFN3aXBlckNvbmZpZ0ludGVyZmFjZVxuXHQpIHsgfVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcGFyYW1zID0gbmV3IFN3aXBlckNvbmZpZyh0aGlzLmRlZmF1bHRzKTtcblx0XHRwYXJhbXMuYXNzaWduKHRoaXMuY29uZmlnKTsgLy8gQ3VzdG9tIGNvbmZpZ3VyYXRpb25cblx0XHRpZiAocGFyYW1zLnNjcm9sbGJhciA9PT0gdHJ1ZSkge1xuXHRcdFx0cGFyYW1zLnNjcm9sbGJhciA9IHtcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXNjcm9sbGJhcidcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmIChwYXJhbXMucGFnaW5hdGlvbiA9PT0gdHJ1ZSkge1xuXHRcdFx0cGFyYW1zLnBhZ2luYXRpb24gPSB7XG5cdFx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJ1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYgKHBhcmFtcy5uYXZpZ2F0aW9uID09PSB0cnVlKSB7XG5cdFx0XHRwYXJhbXMubmF2aWdhdGlvbiA9IHtcblx0XHRcdFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG5cdFx0XHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAodGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0cGFyYW1zLmFsbG93U2xpZGVQcmV2ID0gZmFsc2U7XG5cdFx0XHRwYXJhbXMuYWxsb3dTbGlkZU5leHQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaW5kZXhfICE9IG51bGwpIHtcblx0XHRcdHBhcmFtcy5pbml0aWFsU2xpZGUgPSB0aGlzLmluZGV4Xztcblx0XHRcdHRoaXMuaW5kZXhfID0gbnVsbDtcblx0XHR9XG5cdFx0cGFyYW1zLm9uID0ge1xuXHRcdFx0c2xpZGVDaGFuZ2U6ICgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuc3dpcGVyXyAmJiB0aGlzLmluZGV4Q2hhbmdlLm9ic2VydmVycy5sZW5ndGgpIHtcblx0XHRcdFx0XHR0aGlzLmVtaXQodGhpcy5pbmRleENoYW5nZSwgdGhpcy5zd2lwZXJfLnJlYWxJbmRleCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHR0aGlzLnN3aXBlcl8gPSBuZXcgU3dpcGVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBwYXJhbXMpO1xuXHRcdH0pO1xuXHRcdGlmIChwYXJhbXMuaW5pdCAhPT0gZmFsc2UgJiYgdGhpcy5pbml0Lm9ic2VydmVycy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuZW1pdCh0aGlzLmluaXQsIHRoaXMuc3dpcGVyXyk7XG5cdFx0fVxuXHRcdC8vIEFkZCBuYXRpdmUgU3dpcGVyIGV2ZW50IGhhbmRsaW5nXG5cdFx0U3dpcGVyRXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZTogU3dpcGVyRXZlbnQpID0+IHtcblx0XHRcdGxldCBzd2lwZXJFdmVudCA9IGV2ZW50TmFtZS5yZXBsYWNlKCdzd2lwZXInLCAnJyk7XG5cdFx0XHRzd2lwZXJFdmVudCA9IHN3aXBlckV2ZW50LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3dpcGVyRXZlbnQuc2xpY2UoMSk7XG5cdFx0XHR0aGlzLnN3aXBlcl8ub24oc3dpcGVyRXZlbnQsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuXHRcdFx0XHRpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRhcmdzID0gYXJnc1swXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBlbWl0dGVyID0gdGhpc1tzd2lwZXJFdmVudCBhcyBrZXlvZiBTd2lwZXJEaXJlY3RpdmVdIGFzIEV2ZW50RW1pdHRlcjxhbnk+O1xuXHRcdFx0XHRpZiAoZW1pdHRlci5vYnNlcnZlcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dGhpcy5lbWl0KGVtaXR0ZXIsIGFyZ3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZiAoIXRoaXMuY29uZmlnXykge1xuXHRcdFx0dGhpcy5jb25maWdfID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5jb25maWcgfHwge30pLmNyZWF0ZSgpO1xuXHRcdFx0dGhpcy5jb25maWdfLmRpZmYodGhpcy5jb25maWcgfHwge30pO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnN3aXBlcl8pIHtcblx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3dpcGVyXy5kZXN0cm95KHRydWUsIHRoaXMuc3dpcGVyXy5pbml0aWFsaXplZCB8fCBmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuc3dpcGVyXyA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0bmdEb0NoZWNrKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmNvbmZpZ18pIHtcblx0XHRcdGNvbnN0IGNoYW5nZXMgPSB0aGlzLmNvbmZpZ18uZGlmZih0aGlzLmNvbmZpZyB8fCB7fSk7XG5cdFx0XHRpZiAoY2hhbmdlcykge1xuXHRcdFx0XHR0aGlzLmluZGV4XyA9IHRoaXMuZ2V0SW5kZXgodHJ1ZSk7XG5cdFx0XHRcdHRoaXMubmdPbkRlc3Ryb3koKTtcblx0XHRcdFx0dGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3dpcGVyXyAmJiBjaGFuZ2VzWydkaXNhYmxlZCddKSB7XG5cdFx0XHRpZiAoY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXNbJ2Rpc2FibGVkJ10ucHJldmlvdXNWYWx1ZSkge1xuXHRcdFx0XHRpZiAoY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWUgPT09IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5uZ09uRGVzdHJveSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIGlmIChjaGFuZ2VzWydkaXNhYmxlZCddLmN1cnJlbnRWYWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5uZ09uRGVzdHJveSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZW1pdChlbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiwgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnBlcmZvcm1hbmNlKSB7XG5cdFx0XHRlbWl0dGVyLmVtaXQodmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnpvbmUucnVuKCgpID0+IGVtaXR0ZXIuZW1pdCh2YWx1ZSkpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzd2lwZXIoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5zd2lwZXJfO1xuXHR9XG5cblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3dpcGVyXykge1xuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zd2lwZXJfLmluaXQoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5zd2lwZXJfKSB7XG5cdFx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zd2lwZXJfLnVwZGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LCAwKTtcblx0fVxuXG5cdHB1YmxpYyBnZXRJbmRleChyZWFsPzogYm9vbGVhbik6IG51bWJlciB7XG5cdFx0aWYgKCF0aGlzLnN3aXBlcl8pIHtcblx0XHRcdHJldHVybiB0aGlzLmluZGV4XyB8fCAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gcmVhbCA/IHRoaXMuc3dpcGVyXy5yZWFsSW5kZXggOiB0aGlzLnN3aXBlcl8uYWN0aXZlSW5kZXg7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNldEluZGV4KGluZGV4OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyLCBzaWxlbnQ/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnN3aXBlcl8pIHtcblx0XHRcdHRoaXMuaW5kZXhfID0gaW5kZXg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCByZWFsSW5kZXggPSBpbmRleCAqIHRoaXMuc3dpcGVyXy5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cdFx0XHRpZiAodGhpcy5zd2lwZXJfLnBhcmFtcy5sb29wKSB7XG5cdFx0XHRcdHJlYWxJbmRleCArPSB0aGlzLnN3aXBlcl8ubG9vcGVkU2xpZGVzO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zd2lwZXJfLnNsaWRlVG8ocmVhbEluZGV4LCBzcGVlZCwgIXNpbGVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcHJldlNsaWRlKHNwZWVkPzogbnVtYmVyLCBzaWxlbnQ/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3dpcGVyXykge1xuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zd2lwZXJfLnNsaWRlUHJldihzcGVlZCwgIXNpbGVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgbmV4dFNsaWRlKHNwZWVkPzogbnVtYmVyLCBzaWxlbnQ/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3dpcGVyXykge1xuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zd2lwZXJfLnNsaWRlTmV4dChzcGVlZCwgIXNpbGVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc3RvcEF1dG9wbGF5KHJlc2V0PzogYm9vbGVhbik6IHZvaWQge1xuXHRcdGlmIChyZXNldCkge1xuXHRcdFx0dGhpcy5zZXRJbmRleCgwKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuc3dpcGVyXyAmJiB0aGlzLnN3aXBlcl8uYXV0b3BsYXkpIHtcblx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3dpcGVyXy5hdXRvcGxheS5zdG9wKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc3RhcnRBdXRvcGxheShyZXNldD86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRpZiAocmVzZXQpIHtcblx0XHRcdHRoaXMuc2V0SW5kZXgoMCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnN3aXBlcl8gJiYgdGhpcy5zd2lwZXJfLmF1dG9wbGF5KSB7XG5cdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnN3aXBlcl8uYXV0b3BsYXkuc3RhcnQoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=