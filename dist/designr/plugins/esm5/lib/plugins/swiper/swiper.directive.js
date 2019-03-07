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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9zd2lwZXIvc3dpcGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQVcsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFrQixlQUFlLEVBQUUsTUFBTSxFQUF3QixRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDeE4sT0FBTyxLQUFLLE1BQU0sTUFBTSwwQkFBMEIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFzQyxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFcEg7SUE2REMseUJBQzhCLFVBQWtCLEVBQVUsSUFBWSxFQUM3RCxVQUFzQixFQUFVLE9BQXdCLEVBQ3JCLFFBQStCO1FBRjdDLGVBQVUsR0FBVixVQUFVLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQzdELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUF1QjtRQXpEbkUsV0FBTSxHQUFrQixJQUFJLENBQUM7UUFDN0IsWUFBTyxHQUF1QyxJQUFJLENBQUM7UUFRbEQsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUc1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4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QyxpQ0FBZ0Q7O0lBRWhELG1DQUE2Qzs7SUFDN0Msd0NBQWtEOztJQUNsRCx1Q0FBaUQ7O0lBQ2pELHdDQUFrRDs7SUFDbEQsdUNBQWlEOztJQUNqRCxxQ0FBK0M7O0lBQy9DLGdDQUEwQzs7SUFDMUMsb0NBQThDOztJQUM5QyxtQ0FBNkM7O0lBQzdDLHNDQUFnRDs7SUFDaEQsc0NBQW1EOztJQUNuRCwrQkFBeUM7O0lBQ3pDLG1DQUE2Qzs7SUFDN0Msd0NBQWtEOztJQUNsRCx5Q0FBbUQ7O0lBQ25ELG1DQUE2Qzs7SUFDN0MseUNBQW1EOztJQUNuRCxtQ0FBNkM7O0lBQzdDLGlDQUEyQzs7SUFDM0MsaUNBQTJDOztJQUMzQyx3Q0FBa0Q7O0lBQ2xELHlDQUFtRDs7SUFDbkQsMENBQW9EOztJQUNwRCx3Q0FBa0Q7O0lBQ2xELHVDQUFpRDs7SUFDakQsc0NBQWdEOztJQUNoRCxtREFBNkQ7O0lBQzdELHFEQUErRDs7SUFDL0QsaURBQTJEOztJQUMzRCxtREFBNkQ7O0lBQzdELGlEQUEyRDs7SUFDM0QsbURBQTZEOztJQUM3RCxxQ0FBK0M7O0lBQy9DLDhCQUF3Qzs7SUFDeEMsbUNBQTZDOztJQUM3QyxvQ0FBOEM7O0lBQzlDLDRDQUFzRDs7SUFDdEQscUNBQStDOztJQUMvQyx3Q0FBa0Q7O0lBQ2xELDBDQUFvRDs7Ozs7SUFHbkQscUNBQStDOzs7OztJQUFFLCtCQUFvQjs7Ozs7SUFDckUscUNBQThCOzs7OztJQUFFLGtDQUFnQzs7Ozs7SUFDaEUsbUNBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBEb0NoZWNrLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBPdXRwdXQsIFBMQVRGT1JNX0lELCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBTd2lwZXIgZnJvbSAnc3dpcGVyL2Rpc3QvanMvc3dpcGVyLmpzJztcbmltcG9ydCB7IFN3aXBlckNvbmZpZywgU3dpcGVyQ29uZmlnSW50ZXJmYWNlLCBTd2lwZXJFdmVudCwgU3dpcGVyRXZlbnRzLCBTV0lQRVJfQ09ORklHIH0gZnJvbSAnLi9zd2lwZXIuaW50ZXJmYWNlcyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tzd2lwZXJdJyxcblx0ZXhwb3J0QXM6ICduZ3hTd2lwZXInXG59KVxuZXhwb3J0IGNsYXNzIFN3aXBlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgT25DaGFuZ2VzIHtcblxuXHRwcml2YXRlIHN3aXBlcl86IGFueTtcblx0cHJpdmF0ZSBpbmRleF86IG51bWJlciB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIGNvbmZpZ186IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PiB8IG51bGwgPSBudWxsO1xuXG5cdEBJbnB1dCgpIHNldCBpbmRleChpbmRleDogbnVtYmVyKSB7XG5cdFx0aWYgKGluZGV4ICE9IG51bGwpIHtcblx0XHRcdHRoaXMuc2V0SW5kZXgoaW5kZXgpO1xuXHRcdH1cblx0fVxuXG5cdEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIHBlcmZvcm1hbmNlOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgnc3dpcGVyJykgY29uZmlnPzogU3dpcGVyQ29uZmlnSW50ZXJmYWNlO1xuXG5cdEBPdXRwdXQoKSBhdXRvcGxheSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgYXV0b3BsYXlTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgYXV0b3BsYXlTdG9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBiZWZvcmVEZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBiZWZvcmVSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGJyZWFrcG9pbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBkb3VibGVUYXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGZyb21FZGdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBpbWFnZXNSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgaW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblx0QE91dHB1dCgpIGluaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGtleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBsYXp5SW1hZ2VMb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBsYXp5SW1hZ2VSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHJlYWNoQmVnaW5uaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSByZWFjaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNjcm9sbERyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNjcm9sbERyYWdNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzY3JvbGxEcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNldFRyYW5zaXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNldFRyYW5zbGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlTmV4dFRyYW5zaXRpb25FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlTmV4dFRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVQcmV2VHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzbGlkZXJNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0YXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRvdWNoRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0b3VjaE1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRvdWNoTW92ZU9wcG9zaXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0b3VjaFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0cmFuc2l0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0cmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KFNXSVBFUl9DT05GSUcpIHByaXZhdGUgZGVmYXVsdHM6IFN3aXBlckNvbmZpZ0ludGVyZmFjZVxuXHQpIHsgfVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcGFyYW1zID0gbmV3IFN3aXBlckNvbmZpZyh0aGlzLmRlZmF1bHRzKTtcblx0XHRwYXJhbXMuYXNzaWduKHRoaXMuY29uZmlnKTsgLy8gQ3VzdG9tIGNvbmZpZ3VyYXRpb25cblx0XHRpZiAocGFyYW1zLnNjcm9sbGJhciA9PT0gdHJ1ZSkge1xuXHRcdFx0cGFyYW1zLnNjcm9sbGJhciA9IHtcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXNjcm9sbGJhcidcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmIChwYXJhbXMucGFnaW5hdGlvbiA9PT0gdHJ1ZSkge1xuXHRcdFx0cGFyYW1zLnBhZ2luYXRpb24gPSB7XG5cdFx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJ1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYgKHBhcmFtcy5uYXZpZ2F0aW9uID09PSB0cnVlKSB7XG5cdFx0XHRwYXJhbXMubmF2aWdhdGlvbiA9IHtcblx0XHRcdFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG5cdFx0XHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAodGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0cGFyYW1zLmFsbG93U2xpZGVQcmV2ID0gZmFsc2U7XG5cdFx0XHRwYXJhbXMuYWxsb3dTbGlkZU5leHQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaW5kZXhfICE9IG51bGwpIHtcblx0XHRcdHBhcmFtcy5pbml0aWFsU2xpZGUgPSB0aGlzLmluZGV4Xztcblx0XHRcdHRoaXMuaW5kZXhfID0gbnVsbDtcblx0XHR9XG5cdFx0cGFyYW1zLm9uID0ge1xuXHRcdFx0c2xpZGVDaGFuZ2U6ICgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuc3dpcGVyXyAmJiB0aGlzLmluZGV4Q2hhbmdlLm9ic2VydmVycy5sZW5ndGgpIHtcblx0XHRcdFx0XHR0aGlzLmVtaXQodGhpcy5pbmRleENoYW5nZSwgdGhpcy5zd2lwZXJfLnJlYWxJbmRleCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHR0aGlzLnN3aXBlcl8gPSBuZXcgU3dpcGVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBwYXJhbXMpO1xuXHRcdH0pO1xuXHRcdGlmIChwYXJhbXMuaW5pdCAhPT0gZmFsc2UgJiYgdGhpcy5pbml0Lm9ic2VydmVycy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuZW1pdCh0aGlzLmluaXQsIHRoaXMuc3dpcGVyXyk7XG5cdFx0fVxuXHRcdC8vIEFkZCBuYXRpdmUgU3dpcGVyIGV2ZW50IGhhbmRsaW5nXG5cdFx0U3dpcGVyRXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZTogU3dpcGVyRXZlbnQpID0+IHtcblx0XHRcdGxldCBzd2lwZXJFdmVudCA9IGV2ZW50TmFtZS5yZXBsYWNlKCdzd2lwZXInLCAnJyk7XG5cdFx0XHRzd2lwZXJFdmVudCA9IHN3aXBlckV2ZW50LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3dpcGVyRXZlbnQuc2xpY2UoMSk7XG5cdFx0XHR0aGlzLnN3aXBlcl8ub24oc3dpcGVyRXZlbnQsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuXHRcdFx0XHRpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRhcmdzID0gYXJnc1swXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBlbWl0dGVyID0gdGhpc1tzd2lwZXJFdmVudCBhcyBrZXlvZiBTd2lwZXJEaXJlY3RpdmVdIGFzIEV2ZW50RW1pdHRlcjxhbnk+O1xuXHRcdFx0XHRpZiAoZW1pdHRlci5vYnNlcnZlcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dGhpcy5lbWl0KGVtaXR0ZXIsIGFyZ3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZiAoIXRoaXMuY29uZmlnXykge1xuXHRcdFx0dGhpcy5jb25maWdfID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5jb25maWcgfHwge30pLmNyZWF0ZSgpO1xuXHRcdFx0dGhpcy5jb25maWdfLmRpZmYodGhpcy5jb25maWcgfHwge30pO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnN3aXBlcl8pIHtcblx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3dpcGVyXy5kZXN0cm95KHRydWUsIHRoaXMuc3dpcGVyXy5pbml0aWFsaXplZCB8fCBmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuc3dpcGVyXyA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0bmdEb0NoZWNrKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmNvbmZpZ18pIHtcblx0XHRcdGNvbnN0IGNoYW5nZXMgPSB0aGlzLmNvbmZpZ18uZGlmZih0aGlzLmNvbmZpZyB8fCB7fSk7XG5cdFx0XHRpZiAoY2hhbmdlcykge1xuXHRcdFx0XHR0aGlzLmluZGV4XyA9IHRoaXMuZ2V0SW5kZXgodHJ1ZSk7XG5cdFx0XHRcdHRoaXMubmdPbkRlc3Ryb3koKTtcblx0XHRcdFx0dGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3dpcGVyXyAmJiBjaGFuZ2VzWydkaXNhYmxlZCddKSB7XG5cdFx0XHRpZiAoY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXNbJ2Rpc2FibGVkJ10ucHJldmlvdXNWYWx1ZSkge1xuXHRcdFx0XHRpZiAoY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWUgPT09IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5uZ09uRGVzdHJveSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIGlmIChjaGFuZ2VzWydkaXNhYmxlZCddLmN1cnJlbnRWYWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5uZ09uRGVzdHJveSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZW1pdChlbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiwgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnBlcmZvcm1hbmNlKSB7XG5cdFx0XHRlbWl0dGVyLmVtaXQodmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnpvbmUucnVuKCgpID0+IGVtaXR0ZXIuZW1pdCh2YWx1ZSkpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzd2lwZXIoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5zd2lwZXJfO1xuXHR9XG5cblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3dpcGVyXykge1xuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zd2lwZXJfLmluaXQoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5zd2lwZXJfKSB7XG5cdFx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zd2lwZXJfLnVwZGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LCAwKTtcblx0fVxuXG5cdHB1YmxpYyBnZXRJbmRleChyZWFsPzogYm9vbGVhbik6IG51bWJlciB7XG5cdFx0aWYgKCF0aGlzLnN3aXBlcl8pIHtcblx0XHRcdHJldHVybiB0aGlzLmluZGV4XyB8fCAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gcmVhbCA/IHRoaXMuc3dpcGVyXy5yZWFsSW5kZXggOiB0aGlzLnN3aXBlcl8uYWN0aXZlSW5kZXg7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNldEluZGV4KGluZGV4OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyLCBzaWxlbnQ/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnN3aXBlcl8pIHtcblx0XHRcdHRoaXMuaW5kZXhfID0gaW5kZXg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCByZWFsSW5kZXggPSBpbmRleCAqIHRoaXMuc3dpcGVyXy5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cdFx0XHRpZiAodGhpcy5zd2lwZXJfLnBhcmFtcy5sb29wKSB7XG5cdFx0XHRcdHJlYWxJbmRleCArPSB0aGlzLnN3aXBlcl8ubG9vcGVkU2xpZGVzO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zd2lwZXJfLnNsaWRlVG8ocmVhbEluZGV4LCBzcGVlZCwgIXNpbGVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcHJldlNsaWRlKHNwZWVkPzogbnVtYmVyLCBzaWxlbnQ/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3dpcGVyXykge1xuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zd2lwZXJfLnNsaWRlUHJldihzcGVlZCwgIXNpbGVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgbmV4dFNsaWRlKHNwZWVkPzogbnVtYmVyLCBzaWxlbnQ/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3dpcGVyXykge1xuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zd2lwZXJfLnNsaWRlTmV4dChzcGVlZCwgIXNpbGVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc3RvcEF1dG9wbGF5KHJlc2V0PzogYm9vbGVhbik6IHZvaWQge1xuXHRcdGlmIChyZXNldCkge1xuXHRcdFx0dGhpcy5zZXRJbmRleCgwKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuc3dpcGVyXyAmJiB0aGlzLnN3aXBlcl8uYXV0b3BsYXkpIHtcblx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3dpcGVyXy5hdXRvcGxheS5zdG9wKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc3RhcnRBdXRvcGxheShyZXNldD86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRpZiAocmVzZXQpIHtcblx0XHRcdHRoaXMuc2V0SW5kZXgoMCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnN3aXBlcl8gJiYgdGhpcy5zd2lwZXJfLmF1dG9wbGF5KSB7XG5cdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnN3aXBlcl8uYXV0b3BsYXkuc3RhcnQoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=