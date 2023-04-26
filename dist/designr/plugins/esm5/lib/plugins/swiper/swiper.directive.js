/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Inject, Input, KeyValueDiffers, NgZone, Optional, Output, PLATFORM_ID } from '@angular/core';
import * as Swiper from 'swiper/dist/js/swiper.js';
import { SwiperConfig, SwiperEvents, SWIPER_CONFIG } from './swiper.interfaces';
var SwiperDirective = /** @class */ (function () {
    function SwiperDirective(platformId, zone, elementRef, differs, defaults) {
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
    Object.defineProperty(SwiperDirective.prototype, "index", {
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (index != null) {
                this.setIndex(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        /** @type {?} */
        var params = new SwiperConfig(this.defaults);
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
            function () {
                if (_this.swiper_ && _this.indexChange.observers.length) {
                    _this.emit(_this.indexChange, _this.swiper_.realIndex);
                }
            })
        };
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.swiper_ = new Swiper(_this.elementRef.nativeElement, params);
        }));
        if (params.init !== false && this.init.observers.length) {
            this.emit(this.init, this.swiper_);
        }
        // Add native Swiper event handling
        SwiperEvents.forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        function (eventName) {
            /** @type {?} */
            var swiperEvent = eventName.replace('swiper', '');
            swiperEvent = swiperEvent.charAt(0).toLowerCase() + swiperEvent.slice(1);
            _this.swiper_.on(swiperEvent, (/**
             * @param {...?} args
             * @return {?}
             */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args.length === 1) {
                    args = args[0];
                }
                /** @type {?} */
                var emitter = (/** @type {?} */ (_this[(/** @type {?} */ (swiperEvent))]));
                if (emitter.observers.length) {
                    _this.emit(emitter, args);
                }
            }));
        }));
        if (!this.config_) {
            this.config_ = this.differs.find(this.config || {}).create();
            this.config_.diff(this.config || {});
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.swiper_) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.swiper_.destroy(true, _this.swiper_.initialized || false);
            }));
            this.swiper_ = null;
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.config_) {
            /** @type {?} */
            var changes = this.config_.diff(this.config || {});
            if (changes) {
                this.index_ = this.getIndex(true);
                this.ngOnDestroy();
                this.ngAfterViewInit();
                this.update();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SwiperDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (this.swiper_ && changes['disabled']) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    function () {
                        _this.ngOnDestroy();
                        _this.ngAfterViewInit();
                    }));
                }
                else if (changes['disabled'].currentValue === false) {
                    this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    function () {
                        _this.ngOnDestroy();
                        _this.ngAfterViewInit();
                    }));
                }
            }
        }
    };
    /**
     * @private
     * @param {?} emitter
     * @param {?} value
     * @return {?}
     */
    SwiperDirective.prototype.emit = /**
     * @private
     * @param {?} emitter
     * @param {?} value
     * @return {?}
     */
    function (emitter, value) {
        if (this.performance) {
            emitter.emit(value);
        }
        else {
            this.zone.run((/**
             * @return {?}
             */
            function () { return emitter.emit(value); }));
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.swiper = /**
     * @return {?}
     */
    function () {
        return this.swiper_;
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.initialize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.swiper_) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.swiper_.init();
            }));
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.update = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.swiper_) {
                _this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    _this.swiper_.update();
                }));
            }
        }), 0);
    };
    /**
     * @param {?=} real
     * @return {?}
     */
    SwiperDirective.prototype.getIndex = /**
     * @param {?=} real
     * @return {?}
     */
    function (real) {
        if (!this.swiper_) {
            return this.index_ || 0;
        }
        else {
            return real ? this.swiper_.realIndex : this.swiper_.activeIndex;
        }
    };
    /**
     * @param {?} index
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.setIndex = /**
     * @param {?} index
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    function (index, speed, silent) {
        var _this = this;
        if (!this.swiper_) {
            this.index_ = index;
        }
        else {
            /** @type {?} */
            var realIndex_1 = index * this.swiper_.params.slidesPerGroup;
            if (this.swiper_.params.loop) {
                realIndex_1 += this.swiper_.loopedSlides;
            }
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.swiper_.slideTo(realIndex_1, speed, !silent);
            }));
        }
    };
    /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.prevSlide = /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    function (speed, silent) {
        var _this = this;
        if (this.swiper_) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.swiper_.slidePrev(speed, !silent);
            }));
        }
    };
    /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.nextSlide = /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    function (speed, silent) {
        var _this = this;
        if (this.swiper_) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.swiper_.slideNext(speed, !silent);
            }));
        }
    };
    /**
     * @param {?=} reset
     * @return {?}
     */
    SwiperDirective.prototype.stopAutoplay = /**
     * @param {?=} reset
     * @return {?}
     */
    function (reset) {
        var _this = this;
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper_ && this.swiper_.autoplay) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.swiper_.autoplay.stop();
            }));
        }
    };
    /**
     * @param {?=} reset
     * @return {?}
     */
    SwiperDirective.prototype.startAutoplay = /**
     * @param {?=} reset
     * @return {?}
     */
    function (reset) {
        var _this = this;
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper_ && this.swiper_.autoplay) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.swiper_.autoplay.start();
            }));
        }
    };
    SwiperDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[swiper]',
                    exportAs: 'ngxSwiper'
                },] }
    ];
    /** @nocollapse */
    SwiperDirective.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone },
        { type: ElementRef },
        { type: KeyValueDiffers },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SWIPER_CONFIG,] }] }
    ]; };
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
    return SwiperDirective;
}());
export { SwiperDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9zd2lwZXIvc3dpcGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQVcsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFrQixlQUFlLEVBQUUsTUFBTSxFQUF3QixRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDeE4sT0FBTyxLQUFLLE1BQU0sTUFBTSwwQkFBMEIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFzQyxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFcEg7SUE2REMseUJBQzhCLFVBQWtCLEVBQVUsSUFBWSxFQUM3RCxVQUFzQixFQUFVLE9BQXdCLEVBQ3JCLFFBQStCO1FBRjdDLGVBQVUsR0FBVixVQUFVLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQzdELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUF1QjtRQXpEbkUsV0FBTSxHQUFrQixJQUFJLENBQUM7UUFDN0IsWUFBTyxHQUF1QyxJQUFJLENBQUM7UUFRbEQsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUc1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4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QyxpQ0FBZ0Q7O0lBRWhELG1DQUE2Qzs7SUFDN0Msd0NBQWtEOztJQUNsRCx1Q0FBaUQ7O0lBQ2pELHdDQUFrRDs7SUFDbEQsdUNBQWlEOztJQUNqRCxxQ0FBK0M7O0lBQy9DLGdDQUEwQzs7SUFDMUMsb0NBQThDOztJQUM5QyxtQ0FBNkM7O0lBQzdDLHNDQUFnRDs7SUFDaEQsc0NBQW1EOztJQUNuRCwrQkFBeUM7O0lBQ3pDLG1DQUE2Qzs7SUFDN0Msd0NBQWtEOztJQUNsRCx5Q0FBbUQ7O0lBQ25ELG1DQUE2Qzs7SUFDN0MseUNBQW1EOztJQUNuRCxtQ0FBNkM7O0lBQzdDLGlDQUEyQzs7SUFDM0MsaUNBQTJDOztJQUMzQyx3Q0FBa0Q7O0lBQ2xELHlDQUFtRDs7SUFDbkQsMENBQW9EOztJQUNwRCx3Q0FBa0Q7O0lBQ2xELHVDQUFpRDs7SUFDakQsc0NBQWdEOztJQUNoRCxtREFBNkQ7O0lBQzdELHFEQUErRDs7SUFDL0QsaURBQTJEOztJQUMzRCxtREFBNkQ7O0lBQzdELGlEQUEyRDs7SUFDM0QsbURBQTZEOztJQUM3RCxxQ0FBK0M7O0lBQy9DLDhCQUF3Qzs7SUFDeEMsbUNBQTZDOztJQUM3QyxvQ0FBOEM7O0lBQzlDLDRDQUFzRDs7SUFDdEQscUNBQStDOztJQUMvQyx3Q0FBa0Q7O0lBQ2xELDBDQUFvRDs7Ozs7SUFHbkQscUNBQStDOzs7OztJQUFFLCtCQUFvQjs7Ozs7SUFDckUscUNBQThCOzs7OztJQUFFLGtDQUFnQzs7Ozs7SUFDaEUsbUNBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIERvQ2hlY2ssIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycywgTmdab25lLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3B0aW9uYWwsIE91dHB1dCwgUExBVEZPUk1fSUQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgU3dpcGVyIGZyb20gJ3N3aXBlci9kaXN0L2pzL3N3aXBlci5qcyc7XHJcbmltcG9ydCB7IFN3aXBlckNvbmZpZywgU3dpcGVyQ29uZmlnSW50ZXJmYWNlLCBTd2lwZXJFdmVudCwgU3dpcGVyRXZlbnRzLCBTV0lQRVJfQ09ORklHIH0gZnJvbSAnLi9zd2lwZXIuaW50ZXJmYWNlcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1tzd2lwZXJdJyxcclxuXHRleHBvcnRBczogJ25neFN3aXBlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIFN3aXBlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgT25DaGFuZ2VzIHtcclxuXHJcblx0cHJpdmF0ZSBzd2lwZXJfOiBhbnk7XHJcblx0cHJpdmF0ZSBpbmRleF86IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cdHByaXZhdGUgY29uZmlnXzogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+IHwgbnVsbCA9IG51bGw7XHJcblxyXG5cdEBJbnB1dCgpIHNldCBpbmRleChpbmRleDogbnVtYmVyKSB7XHJcblx0XHRpZiAoaW5kZXggIT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLnNldEluZGV4KGluZGV4KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblx0QElucHV0KCkgcGVyZm9ybWFuY2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRASW5wdXQoJ3N3aXBlcicpIGNvbmZpZz86IFN3aXBlckNvbmZpZ0ludGVyZmFjZTtcclxuXHJcblx0QE91dHB1dCgpIGF1dG9wbGF5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGF1dG9wbGF5U3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgYXV0b3BsYXlTdG9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGJlZm9yZURlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgYmVmb3JlUmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGJyZWFrcG9pbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgZG91YmxlVGFwID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGZyb21FZGdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGltYWdlc1JlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGluZGV4Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblx0QE91dHB1dCgpIGluaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkga2V5UHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgbGF6eUltYWdlTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBsYXp5SW1hZ2VSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBwcm9ncmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSByZWFjaEJlZ2lubmluZyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSByZWFjaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSByZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNjcm9sbERyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2Nyb2xsRHJhZ01vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2Nyb2xsRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNldFRyYW5zaXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2V0VHJhbnNsYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNsaWRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzbGlkZU5leHRUcmFuc2l0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNsaWRlTmV4dFRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzbGlkZVByZXZUcmFuc2l0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNsaWRlUHJldlRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzbGlkZXJNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHRhcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSB0b3VjaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSB0b3VjaE1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgdG91Y2hNb3ZlT3Bwb3NpdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgdG91Y2hTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSB0cmFuc2l0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LCBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuXHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXHJcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KFNXSVBFUl9DT05GSUcpIHByaXZhdGUgZGVmYXVsdHM6IFN3aXBlckNvbmZpZ0ludGVyZmFjZVxyXG5cdCkgeyB9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuXHRcdGlmICghaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBwYXJhbXMgPSBuZXcgU3dpcGVyQ29uZmlnKHRoaXMuZGVmYXVsdHMpO1xyXG5cdFx0cGFyYW1zLmFzc2lnbih0aGlzLmNvbmZpZyk7IC8vIEN1c3RvbSBjb25maWd1cmF0aW9uXHJcblx0XHRpZiAocGFyYW1zLnNjcm9sbGJhciA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRwYXJhbXMuc2Nyb2xsYmFyID0ge1xyXG5cdFx0XHRcdGVsOiAnLnN3aXBlci1zY3JvbGxiYXInXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRpZiAocGFyYW1zLnBhZ2luYXRpb24gPT09IHRydWUpIHtcclxuXHRcdFx0cGFyYW1zLnBhZ2luYXRpb24gPSB7XHJcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRpZiAocGFyYW1zLm5hdmlnYXRpb24gPT09IHRydWUpIHtcclxuXHRcdFx0cGFyYW1zLm5hdmlnYXRpb24gPSB7XHJcblx0XHRcdFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcblx0XHRcdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCdcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmRpc2FibGVkKSB7XHJcblx0XHRcdHBhcmFtcy5hbGxvd1NsaWRlUHJldiA9IGZhbHNlO1xyXG5cdFx0XHRwYXJhbXMuYWxsb3dTbGlkZU5leHQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmluZGV4XyAhPSBudWxsKSB7XHJcblx0XHRcdHBhcmFtcy5pbml0aWFsU2xpZGUgPSB0aGlzLmluZGV4XztcclxuXHRcdFx0dGhpcy5pbmRleF8gPSBudWxsO1xyXG5cdFx0fVxyXG5cdFx0cGFyYW1zLm9uID0ge1xyXG5cdFx0XHRzbGlkZUNoYW5nZTogKCkgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLnN3aXBlcl8gJiYgdGhpcy5pbmRleENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHR0aGlzLmVtaXQodGhpcy5pbmRleENoYW5nZSwgdGhpcy5zd2lwZXJfLnJlYWxJbmRleCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0dGhpcy5zd2lwZXJfID0gbmV3IFN3aXBlcih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgcGFyYW1zKTtcclxuXHRcdH0pO1xyXG5cdFx0aWYgKHBhcmFtcy5pbml0ICE9PSBmYWxzZSAmJiB0aGlzLmluaXQub2JzZXJ2ZXJzLmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLmVtaXQodGhpcy5pbml0LCB0aGlzLnN3aXBlcl8pO1xyXG5cdFx0fVxyXG5cdFx0Ly8gQWRkIG5hdGl2ZSBTd2lwZXIgZXZlbnQgaGFuZGxpbmdcclxuXHRcdFN3aXBlckV2ZW50cy5mb3JFYWNoKChldmVudE5hbWU6IFN3aXBlckV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCBzd2lwZXJFdmVudCA9IGV2ZW50TmFtZS5yZXBsYWNlKCdzd2lwZXInLCAnJyk7XHJcblx0XHRcdHN3aXBlckV2ZW50ID0gc3dpcGVyRXZlbnQuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzd2lwZXJFdmVudC5zbGljZSgxKTtcclxuXHRcdFx0dGhpcy5zd2lwZXJfLm9uKHN3aXBlckV2ZW50LCAoLi4uYXJnczogYW55W10pID0+IHtcclxuXHRcdFx0XHRpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0XHRcdGFyZ3MgPSBhcmdzWzBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zdCBlbWl0dGVyID0gdGhpc1tzd2lwZXJFdmVudCBhcyBrZXlvZiBTd2lwZXJEaXJlY3RpdmVdIGFzIEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cdFx0XHRcdGlmIChlbWl0dGVyLm9ic2VydmVycy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHRoaXMuZW1pdChlbWl0dGVyLCBhcmdzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRpZiAoIXRoaXMuY29uZmlnXykge1xyXG5cdFx0XHR0aGlzLmNvbmZpZ18gPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLmNvbmZpZyB8fCB7fSkuY3JlYXRlKCk7XHJcblx0XHRcdHRoaXMuY29uZmlnXy5kaWZmKHRoaXMuY29uZmlnIHx8IHt9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuc3dpcGVyXykge1xyXG5cdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3dpcGVyXy5kZXN0cm95KHRydWUsIHRoaXMuc3dpcGVyXy5pbml0aWFsaXplZCB8fCBmYWxzZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnN3aXBlcl8gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdEb0NoZWNrKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuY29uZmlnXykge1xyXG5cdFx0XHRjb25zdCBjaGFuZ2VzID0gdGhpcy5jb25maWdfLmRpZmYodGhpcy5jb25maWcgfHwge30pO1xyXG5cdFx0XHRpZiAoY2hhbmdlcykge1xyXG5cdFx0XHRcdHRoaXMuaW5kZXhfID0gdGhpcy5nZXRJbmRleCh0cnVlKTtcclxuXHRcdFx0XHR0aGlzLm5nT25EZXN0cm95KCk7XHJcblx0XHRcdFx0dGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zd2lwZXJfICYmIGNoYW5nZXNbJ2Rpc2FibGVkJ10pIHtcclxuXHRcdFx0aWYgKGNoYW5nZXNbJ2Rpc2FibGVkJ10uY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzWydkaXNhYmxlZCddLnByZXZpb3VzVmFsdWUpIHtcclxuXHRcdFx0XHRpZiAoY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWUgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMubmdPbkRlc3Ryb3koKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWUgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5nT25EZXN0cm95KCk7XHJcblx0XHRcdFx0XHRcdHRoaXMubmdBZnRlclZpZXdJbml0KCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZW1pdChlbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiwgdmFsdWU6IGFueSk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMucGVyZm9ybWFuY2UpIHtcclxuXHRcdFx0ZW1pdHRlci5lbWl0KHZhbHVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuem9uZS5ydW4oKCkgPT4gZW1pdHRlci5lbWl0KHZhbHVlKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3dpcGVyKCk6IGFueSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zd2lwZXJfO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zd2lwZXJfKSB7XHJcblx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zd2lwZXJfLmluaXQoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLnN3aXBlcl8pIHtcclxuXHRcdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zd2lwZXJfLnVwZGF0ZSgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LCAwKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRJbmRleChyZWFsPzogYm9vbGVhbik6IG51bWJlciB7XHJcblx0XHRpZiAoIXRoaXMuc3dpcGVyXykge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbmRleF8gfHwgMDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiByZWFsID8gdGhpcy5zd2lwZXJfLnJlYWxJbmRleCA6IHRoaXMuc3dpcGVyXy5hY3RpdmVJbmRleDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRJbmRleChpbmRleDogbnVtYmVyLCBzcGVlZD86IG51bWJlciwgc2lsZW50PzogYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLnN3aXBlcl8pIHtcclxuXHRcdFx0dGhpcy5pbmRleF8gPSBpbmRleDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCByZWFsSW5kZXggPSBpbmRleCAqIHRoaXMuc3dpcGVyXy5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XHJcblx0XHRcdGlmICh0aGlzLnN3aXBlcl8ucGFyYW1zLmxvb3ApIHtcclxuXHRcdFx0XHRyZWFsSW5kZXggKz0gdGhpcy5zd2lwZXJfLmxvb3BlZFNsaWRlcztcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3dpcGVyXy5zbGlkZVRvKHJlYWxJbmRleCwgc3BlZWQsICFzaWxlbnQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwcmV2U2xpZGUoc3BlZWQ/OiBudW1iZXIsIHNpbGVudD86IGJvb2xlYW4pOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnN3aXBlcl8pIHtcclxuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnN3aXBlcl8uc2xpZGVQcmV2KHNwZWVkLCAhc2lsZW50KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmV4dFNsaWRlKHNwZWVkPzogbnVtYmVyLCBzaWxlbnQ/OiBib29sZWFuKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zd2lwZXJfKSB7XHJcblx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zd2lwZXJfLnNsaWRlTmV4dChzcGVlZCwgIXNpbGVudCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0b3BBdXRvcGxheShyZXNldD86IGJvb2xlYW4pOiB2b2lkIHtcclxuXHRcdGlmIChyZXNldCkge1xyXG5cdFx0XHR0aGlzLnNldEluZGV4KDApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc3dpcGVyXyAmJiB0aGlzLnN3aXBlcl8uYXV0b3BsYXkpIHtcclxuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnN3aXBlcl8uYXV0b3BsYXkuc3RvcCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGFydEF1dG9wbGF5KHJlc2V0PzogYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0aWYgKHJlc2V0KSB7XHJcblx0XHRcdHRoaXMuc2V0SW5kZXgoMCk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zd2lwZXJfICYmIHRoaXMuc3dpcGVyXy5hdXRvcGxheSkge1xyXG5cdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3dpcGVyXy5hdXRvcGxheS5zdGFydCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==