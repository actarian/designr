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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9zd2lwZXIvc3dpcGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQVcsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFrQixlQUFlLEVBQUUsTUFBTSxFQUF3QixRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDeE4sT0FBTyxLQUFLLE1BQU0sTUFBTSwwQkFBMEIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFzQyxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFNcEgsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7O0lBeUQzQixZQUM4QixVQUFrQixFQUFVLElBQVksRUFDN0QsVUFBc0IsRUFBVSxPQUF3QixFQUNyQixRQUErQjtRQUY3QyxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUM3RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUF6RG5FLFdBQU0sR0FBa0IsSUFBSSxDQUFDO1FBQzdCLFlBQU8sR0FBdUMsSUFBSSxDQUFDO1FBUWxELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHNUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxrQkFBYSxHQUFHLElB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QUE2Qzs7SUFDN0Msd0NBQWtEOztJQUNsRCx5Q0FBbUQ7O0lBQ25ELG1DQUE2Qzs7SUFDN0MseUNBQW1EOztJQUNuRCxtQ0FBNkM7O0lBQzdDLGlDQUEyQzs7SUFDM0MsaUNBQTJDOztJQUMzQyx3Q0FBa0Q7O0lBQ2xELHlDQUFtRDs7SUFDbkQsMENBQW9EOztJQUNwRCx3Q0FBa0Q7O0lBQ2xELHVDQUFpRDs7SUFDakQsc0NBQWdEOztJQUNoRCxtREFBNkQ7O0lBQzdELHFEQUErRDs7SUFDL0QsaURBQTJEOztJQUMzRCxtREFBNkQ7O0lBQzdELGlEQUEyRDs7SUFDM0QsbURBQTZEOztJQUM3RCxxQ0FBK0M7O0lBQy9DLDhCQUF3Qzs7SUFDeEMsbUNBQTZDOztJQUM3QyxvQ0FBOEM7O0lBQzlDLDRDQUFzRDs7SUFDdEQscUNBQStDOztJQUMvQyx3Q0FBa0Q7O0lBQ2xELDBDQUFvRDs7Ozs7SUFHbkQscUNBQStDOzs7OztJQUFFLCtCQUFvQjs7Ozs7SUFDckUscUNBQThCOzs7OztJQUFFLGtDQUFnQzs7Ozs7SUFDaEUsbUNBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIERvQ2hlY2ssIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycywgTmdab25lLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3B0aW9uYWwsIE91dHB1dCwgUExBVEZPUk1fSUQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgU3dpcGVyIGZyb20gJ3N3aXBlci9kaXN0L2pzL3N3aXBlci5qcyc7XHJcbmltcG9ydCB7IFN3aXBlckNvbmZpZywgU3dpcGVyQ29uZmlnSW50ZXJmYWNlLCBTd2lwZXJFdmVudCwgU3dpcGVyRXZlbnRzLCBTV0lQRVJfQ09ORklHIH0gZnJvbSAnLi9zd2lwZXIuaW50ZXJmYWNlcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1tzd2lwZXJdJyxcclxuXHRleHBvcnRBczogJ25neFN3aXBlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIFN3aXBlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgT25DaGFuZ2VzIHtcclxuXHJcblx0cHJpdmF0ZSBzd2lwZXJfOiBhbnk7XHJcblx0cHJpdmF0ZSBpbmRleF86IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cdHByaXZhdGUgY29uZmlnXzogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+IHwgbnVsbCA9IG51bGw7XHJcblxyXG5cdEBJbnB1dCgpIHNldCBpbmRleChpbmRleDogbnVtYmVyKSB7XHJcblx0XHRpZiAoaW5kZXggIT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLnNldEluZGV4KGluZGV4KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblx0QElucHV0KCkgcGVyZm9ybWFuY2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRASW5wdXQoJ3N3aXBlcicpIGNvbmZpZz86IFN3aXBlckNvbmZpZ0ludGVyZmFjZTtcclxuXHJcblx0QE91dHB1dCgpIGF1dG9wbGF5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGF1dG9wbGF5U3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgYXV0b3BsYXlTdG9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGJlZm9yZURlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgYmVmb3JlUmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGJyZWFrcG9pbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgZG91YmxlVGFwID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGZyb21FZGdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGltYWdlc1JlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGluZGV4Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblx0QE91dHB1dCgpIGluaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkga2V5UHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgbGF6eUltYWdlTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBsYXp5SW1hZ2VSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBwcm9ncmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSByZWFjaEJlZ2lubmluZyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSByZWFjaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSByZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNjcm9sbERyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2Nyb2xsRHJhZ01vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2Nyb2xsRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNldFRyYW5zaXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2V0VHJhbnNsYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNsaWRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzbGlkZU5leHRUcmFuc2l0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNsaWRlTmV4dFRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzbGlkZVByZXZUcmFuc2l0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNsaWRlUHJldlRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzbGlkZXJNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHRhcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSB0b3VjaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSB0b3VjaE1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgdG91Y2hNb3ZlT3Bwb3NpdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgdG91Y2hTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSB0cmFuc2l0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LCBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuXHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXHJcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KFNXSVBFUl9DT05GSUcpIHByaXZhdGUgZGVmYXVsdHM6IFN3aXBlckNvbmZpZ0ludGVyZmFjZVxyXG5cdCkgeyB9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuXHRcdGlmICghaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBwYXJhbXMgPSBuZXcgU3dpcGVyQ29uZmlnKHRoaXMuZGVmYXVsdHMpO1xyXG5cdFx0cGFyYW1zLmFzc2lnbih0aGlzLmNvbmZpZyk7IC8vIEN1c3RvbSBjb25maWd1cmF0aW9uXHJcblx0XHRpZiAocGFyYW1zLnNjcm9sbGJhciA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRwYXJhbXMuc2Nyb2xsYmFyID0ge1xyXG5cdFx0XHRcdGVsOiAnLnN3aXBlci1zY3JvbGxiYXInXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRpZiAocGFyYW1zLnBhZ2luYXRpb24gPT09IHRydWUpIHtcclxuXHRcdFx0cGFyYW1zLnBhZ2luYXRpb24gPSB7XHJcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRpZiAocGFyYW1zLm5hdmlnYXRpb24gPT09IHRydWUpIHtcclxuXHRcdFx0cGFyYW1zLm5hdmlnYXRpb24gPSB7XHJcblx0XHRcdFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcblx0XHRcdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCdcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmRpc2FibGVkKSB7XHJcblx0XHRcdHBhcmFtcy5hbGxvd1NsaWRlUHJldiA9IGZhbHNlO1xyXG5cdFx0XHRwYXJhbXMuYWxsb3dTbGlkZU5leHQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmluZGV4XyAhPSBudWxsKSB7XHJcblx0XHRcdHBhcmFtcy5pbml0aWFsU2xpZGUgPSB0aGlzLmluZGV4XztcclxuXHRcdFx0dGhpcy5pbmRleF8gPSBudWxsO1xyXG5cdFx0fVxyXG5cdFx0cGFyYW1zLm9uID0ge1xyXG5cdFx0XHRzbGlkZUNoYW5nZTogKCkgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLnN3aXBlcl8gJiYgdGhpcy5pbmRleENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHR0aGlzLmVtaXQodGhpcy5pbmRleENoYW5nZSwgdGhpcy5zd2lwZXJfLnJlYWxJbmRleCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0dGhpcy5zd2lwZXJfID0gbmV3IFN3aXBlcih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgcGFyYW1zKTtcclxuXHRcdH0pO1xyXG5cdFx0aWYgKHBhcmFtcy5pbml0ICE9PSBmYWxzZSAmJiB0aGlzLmluaXQub2JzZXJ2ZXJzLmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLmVtaXQodGhpcy5pbml0LCB0aGlzLnN3aXBlcl8pO1xyXG5cdFx0fVxyXG5cdFx0Ly8gQWRkIG5hdGl2ZSBTd2lwZXIgZXZlbnQgaGFuZGxpbmdcclxuXHRcdFN3aXBlckV2ZW50cy5mb3JFYWNoKChldmVudE5hbWU6IFN3aXBlckV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCBzd2lwZXJFdmVudCA9IGV2ZW50TmFtZS5yZXBsYWNlKCdzd2lwZXInLCAnJyk7XHJcblx0XHRcdHN3aXBlckV2ZW50ID0gc3dpcGVyRXZlbnQuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzd2lwZXJFdmVudC5zbGljZSgxKTtcclxuXHRcdFx0dGhpcy5zd2lwZXJfLm9uKHN3aXBlckV2ZW50LCAoLi4uYXJnczogYW55W10pID0+IHtcclxuXHRcdFx0XHRpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0XHRcdGFyZ3MgPSBhcmdzWzBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zdCBlbWl0dGVyID0gdGhpc1tzd2lwZXJFdmVudCBhcyBrZXlvZiBTd2lwZXJEaXJlY3RpdmVdIGFzIEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cdFx0XHRcdGlmIChlbWl0dGVyLm9ic2VydmVycy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHRoaXMuZW1pdChlbWl0dGVyLCBhcmdzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRpZiAoIXRoaXMuY29uZmlnXykge1xyXG5cdFx0XHR0aGlzLmNvbmZpZ18gPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLmNvbmZpZyB8fCB7fSkuY3JlYXRlKCk7XHJcblx0XHRcdHRoaXMuY29uZmlnXy5kaWZmKHRoaXMuY29uZmlnIHx8IHt9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuc3dpcGVyXykge1xyXG5cdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3dpcGVyXy5kZXN0cm95KHRydWUsIHRoaXMuc3dpcGVyXy5pbml0aWFsaXplZCB8fCBmYWxzZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnN3aXBlcl8gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdEb0NoZWNrKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuY29uZmlnXykge1xyXG5cdFx0XHRjb25zdCBjaGFuZ2VzID0gdGhpcy5jb25maWdfLmRpZmYodGhpcy5jb25maWcgfHwge30pO1xyXG5cdFx0XHRpZiAoY2hhbmdlcykge1xyXG5cdFx0XHRcdHRoaXMuaW5kZXhfID0gdGhpcy5nZXRJbmRleCh0cnVlKTtcclxuXHRcdFx0XHR0aGlzLm5nT25EZXN0cm95KCk7XHJcblx0XHRcdFx0dGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zd2lwZXJfICYmIGNoYW5nZXNbJ2Rpc2FibGVkJ10pIHtcclxuXHRcdFx0aWYgKGNoYW5nZXNbJ2Rpc2FibGVkJ10uY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzWydkaXNhYmxlZCddLnByZXZpb3VzVmFsdWUpIHtcclxuXHRcdFx0XHRpZiAoY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWUgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMubmdPbkRlc3Ryb3koKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWUgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5nT25EZXN0cm95KCk7XHJcblx0XHRcdFx0XHRcdHRoaXMubmdBZnRlclZpZXdJbml0KCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZW1pdChlbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiwgdmFsdWU6IGFueSk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMucGVyZm9ybWFuY2UpIHtcclxuXHRcdFx0ZW1pdHRlci5lbWl0KHZhbHVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuem9uZS5ydW4oKCkgPT4gZW1pdHRlci5lbWl0KHZhbHVlKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3dpcGVyKCk6IGFueSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zd2lwZXJfO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zd2lwZXJfKSB7XHJcblx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zd2lwZXJfLmluaXQoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLnN3aXBlcl8pIHtcclxuXHRcdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zd2lwZXJfLnVwZGF0ZSgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LCAwKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRJbmRleChyZWFsPzogYm9vbGVhbik6IG51bWJlciB7XHJcblx0XHRpZiAoIXRoaXMuc3dpcGVyXykge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbmRleF8gfHwgMDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiByZWFsID8gdGhpcy5zd2lwZXJfLnJlYWxJbmRleCA6IHRoaXMuc3dpcGVyXy5hY3RpdmVJbmRleDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRJbmRleChpbmRleDogbnVtYmVyLCBzcGVlZD86IG51bWJlciwgc2lsZW50PzogYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLnN3aXBlcl8pIHtcclxuXHRcdFx0dGhpcy5pbmRleF8gPSBpbmRleDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCByZWFsSW5kZXggPSBpbmRleCAqIHRoaXMuc3dpcGVyXy5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XHJcblx0XHRcdGlmICh0aGlzLnN3aXBlcl8ucGFyYW1zLmxvb3ApIHtcclxuXHRcdFx0XHRyZWFsSW5kZXggKz0gdGhpcy5zd2lwZXJfLmxvb3BlZFNsaWRlcztcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3dpcGVyXy5zbGlkZVRvKHJlYWxJbmRleCwgc3BlZWQsICFzaWxlbnQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwcmV2U2xpZGUoc3BlZWQ/OiBudW1iZXIsIHNpbGVudD86IGJvb2xlYW4pOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnN3aXBlcl8pIHtcclxuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnN3aXBlcl8uc2xpZGVQcmV2KHNwZWVkLCAhc2lsZW50KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmV4dFNsaWRlKHNwZWVkPzogbnVtYmVyLCBzaWxlbnQ/OiBib29sZWFuKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zd2lwZXJfKSB7XHJcblx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zd2lwZXJfLnNsaWRlTmV4dChzcGVlZCwgIXNpbGVudCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0b3BBdXRvcGxheShyZXNldD86IGJvb2xlYW4pOiB2b2lkIHtcclxuXHRcdGlmIChyZXNldCkge1xyXG5cdFx0XHR0aGlzLnNldEluZGV4KDApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc3dpcGVyXyAmJiB0aGlzLnN3aXBlcl8uYXV0b3BsYXkpIHtcclxuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnN3aXBlcl8uYXV0b3BsYXkuc3RvcCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGFydEF1dG9wbGF5KHJlc2V0PzogYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0aWYgKHJlc2V0KSB7XHJcblx0XHRcdHRoaXMuc2V0SW5kZXgoMCk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zd2lwZXJfICYmIHRoaXMuc3dpcGVyXy5hdXRvcGxheSkge1xyXG5cdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3dpcGVyXy5hdXRvcGxheS5zdGFydCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==