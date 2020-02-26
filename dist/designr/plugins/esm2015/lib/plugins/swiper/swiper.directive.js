import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Inject, Input, KeyValueDiffers, NgZone, Optional, Output, PLATFORM_ID } from '@angular/core';
import * as Swiper from 'swiper/dist/js/swiper.js';
import { SwiperConfig, SwiperEvents, SWIPER_CONFIG } from './swiper.interfaces';
import * as i0 from "@angular/core";
export class SwiperDirective {
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
    set index(index) {
        if (index != null) {
            this.setIndex(index);
        }
    }
    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
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
            slideChange: () => {
                if (this.swiper_ && this.indexChange.observers.length) {
                    this.emit(this.indexChange, this.swiper_.realIndex);
                }
            }
        };
        this.zone.runOutsideAngular(() => {
            this.swiper_ = new Swiper(this.elementRef.nativeElement, params);
        });
        if (params.init !== false && this.init.observers.length) {
            this.emit(this.init, this.swiper_);
        }
        // Add native Swiper event handling
        SwiperEvents.forEach((eventName) => {
            let swiperEvent = eventName.replace('swiper', '');
            swiperEvent = swiperEvent.charAt(0).toLowerCase() + swiperEvent.slice(1);
            this.swiper_.on(swiperEvent, (...args) => {
                if (args.length === 1) {
                    args = args[0];
                }
                const emitter = this[swiperEvent];
                if (emitter.observers.length) {
                    this.emit(emitter, args);
                }
            });
        });
        if (!this.config_) {
            this.config_ = this.differs.find(this.config || {}).create();
            this.config_.diff(this.config || {});
        }
    }
    ngOnDestroy() {
        if (this.swiper_) {
            this.zone.runOutsideAngular(() => {
                this.swiper_.destroy(true, this.swiper_.initialized || false);
            });
            this.swiper_ = null;
        }
    }
    ngDoCheck() {
        if (this.config_) {
            const changes = this.config_.diff(this.config || {});
            if (changes) {
                this.index_ = this.getIndex(true);
                this.ngOnDestroy();
                this.ngAfterViewInit();
                this.update();
            }
        }
    }
    ngOnChanges(changes) {
        if (this.swiper_ && changes['disabled']) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.zone.runOutsideAngular(() => {
                        this.ngOnDestroy();
                        this.ngAfterViewInit();
                    });
                }
                else if (changes['disabled'].currentValue === false) {
                    this.zone.runOutsideAngular(() => {
                        this.ngOnDestroy();
                        this.ngAfterViewInit();
                    });
                }
            }
        }
    }
    emit(emitter, value) {
        if (this.performance) {
            emitter.emit(value);
        }
        else {
            this.zone.run(() => emitter.emit(value));
        }
    }
    swiper() {
        return this.swiper_;
    }
    initialize() {
        if (this.swiper_) {
            this.zone.runOutsideAngular(() => {
                this.swiper_.init();
            });
        }
    }
    update() {
        setTimeout(() => {
            if (this.swiper_) {
                this.zone.runOutsideAngular(() => {
                    this.swiper_.update();
                });
            }
        }, 0);
    }
    getIndex(real) {
        if (!this.swiper_) {
            return this.index_ || 0;
        }
        else {
            return real ? this.swiper_.realIndex : this.swiper_.activeIndex;
        }
    }
    setIndex(index, speed, silent) {
        if (!this.swiper_) {
            this.index_ = index;
        }
        else {
            let realIndex = index * this.swiper_.params.slidesPerGroup;
            if (this.swiper_.params.loop) {
                realIndex += this.swiper_.loopedSlides;
            }
            this.zone.runOutsideAngular(() => {
                this.swiper_.slideTo(realIndex, speed, !silent);
            });
        }
    }
    prevSlide(speed, silent) {
        if (this.swiper_) {
            this.zone.runOutsideAngular(() => {
                this.swiper_.slidePrev(speed, !silent);
            });
        }
    }
    nextSlide(speed, silent) {
        if (this.swiper_) {
            this.zone.runOutsideAngular(() => {
                this.swiper_.slideNext(speed, !silent);
            });
        }
    }
    stopAutoplay(reset) {
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper_ && this.swiper_.autoplay) {
            this.zone.runOutsideAngular(() => {
                this.swiper_.autoplay.stop();
            });
        }
    }
    startAutoplay(reset) {
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper_ && this.swiper_.autoplay) {
            this.zone.runOutsideAngular(() => {
                this.swiper_.autoplay.start();
            });
        }
    }
}
SwiperDirective.ɵfac = function SwiperDirective_Factory(t) { return new (t || SwiperDirective)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.KeyValueDiffers), i0.ɵɵdirectiveInject(SWIPER_CONFIG, 8)); };
SwiperDirective.ɵdir = i0.ɵɵdefineDirective({ type: SwiperDirective, selectors: [["", "swiper", ""]], inputs: { index: "index", disabled: "disabled", performance: "performance", config: ["swiper", "config"] }, outputs: { autoplay: "autoplay", autoplayStart: "autoplayStart", autoplayStop: "autoplayStop", beforeDestroy: "beforeDestroy", beforeResize: "beforeResize", breakpoint: "breakpoint", click: "click", doubleTap: "doubleTap", fromEdge: "fromEdge", imagesReady: "imagesReady", indexChange: "indexChange", init: "init", keyPress: "keyPress", lazyImageLoad: "lazyImageLoad", lazyImageReady: "lazyImageReady", progress: "progress", reachBeginning: "reachBeginning", reachEnd: "reachEnd", resize: "resize", scroll: "scroll", scrollDragEnd: "scrollDragEnd", scrollDragMove: "scrollDragMove", scrollDragStart: "scrollDragStart", setTransition: "setTransition", setTranslate: "setTranslate", slideChange: "slideChange", slideChangeTransitionEnd: "slideChangeTransitionEnd", slideChangeTransitionStart: "slideChangeTransitionStart", slideNextTransitionEnd: "slideNextTransitionEnd", slideNextTransitionStart: "slideNextTransitionStart", slidePrevTransitionEnd: "slidePrevTransitionEnd", slidePrevTransitionStart: "slidePrevTransitionStart", sliderMove: "sliderMove", tap: "tap", touchEnd: "touchEnd", touchMove: "touchMove", touchMoveOpposite: "touchMoveOpposite", touchStart: "touchStart", transitionEnd: "transitionEnd", transitionStart: "transitionStart" }, exportAs: ["ngxSwiper"], features: [i0.ɵɵNgOnChangesFeature()] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SwiperDirective, [{
        type: Directive,
        args: [{
                selector: '[swiper]',
                exportAs: 'ngxSwiper'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.KeyValueDiffers }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [SWIPER_CONFIG]
            }] }]; }, { index: [{
            type: Input
        }], disabled: [{
            type: Input
        }], performance: [{
            type: Input
        }], config: [{
            type: Input,
            args: ['swiper']
        }], autoplay: [{
            type: Output
        }], autoplayStart: [{
            type: Output
        }], autoplayStop: [{
            type: Output
        }], beforeDestroy: [{
            type: Output
        }], beforeResize: [{
            type: Output
        }], breakpoint: [{
            type: Output
        }], click: [{
            type: Output
        }], doubleTap: [{
            type: Output
        }], fromEdge: [{
            type: Output
        }], imagesReady: [{
            type: Output
        }], indexChange: [{
            type: Output
        }], init: [{
            type: Output
        }], keyPress: [{
            type: Output
        }], lazyImageLoad: [{
            type: Output
        }], lazyImageReady: [{
            type: Output
        }], progress: [{
            type: Output
        }], reachBeginning: [{
            type: Output
        }], reachEnd: [{
            type: Output
        }], resize: [{
            type: Output
        }], scroll: [{
            type: Output
        }], scrollDragEnd: [{
            type: Output
        }], scrollDragMove: [{
            type: Output
        }], scrollDragStart: [{
            type: Output
        }], setTransition: [{
            type: Output
        }], setTranslate: [{
            type: Output
        }], slideChange: [{
            type: Output
        }], slideChangeTransitionEnd: [{
            type: Output
        }], slideChangeTransitionStart: [{
            type: Output
        }], slideNextTransitionEnd: [{
            type: Output
        }], slideNextTransitionStart: [{
            type: Output
        }], slidePrevTransitionEnd: [{
            type: Output
        }], slidePrevTransitionStart: [{
            type: Output
        }], sliderMove: [{
            type: Output
        }], tap: [{
            type: Output
        }], touchEnd: [{
            type: Output
        }], touchMove: [{
            type: Output
        }], touchMoveOpposite: [{
            type: Output
        }], touchStart: [{
            type: Output
        }], transitionEnd: [{
            type: Output
        }], transitionStart: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9zd2lwZXIvc3dpcGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBVyxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWtCLGVBQWUsRUFBRSxNQUFNLEVBQXdCLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4TixPQUFPLEtBQUssTUFBTSxNQUFNLDBCQUEwQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQXNDLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFNcEgsTUFBTSxPQUFPLGVBQWU7SUF5RDNCLFlBQzhCLFVBQWtCLEVBQVUsSUFBWSxFQUM3RCxVQUFzQixFQUFVLE9BQXdCLEVBQ3JCLFFBQStCO1FBRjdDLGVBQVUsR0FBVixVQUFVLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQzdELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUF1QjtRQXpEbkUsV0FBTSxHQUFrQixJQUFJLENBQUM7UUFDN0IsWUFBTyxHQUF1QyxJQUFJLENBQUM7UUFRbEQsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUc1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVB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QyxNQUFNO3NCQUE5QyxNQUFNO3VCQUFDLFdBQVc7O3NCQUVsQixRQUFROztzQkFBSSxNQUFNO3VCQUFDLGFBQWE7O2tCQXREakMsS0FBSzs7a0JBTUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzttQkFBQyxRQUFROztrQkFFZCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBEb0NoZWNrLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBPdXRwdXQsIFBMQVRGT1JNX0lELCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBTd2lwZXIgZnJvbSAnc3dpcGVyL2Rpc3QvanMvc3dpcGVyLmpzJztcbmltcG9ydCB7IFN3aXBlckNvbmZpZywgU3dpcGVyQ29uZmlnSW50ZXJmYWNlLCBTd2lwZXJFdmVudCwgU3dpcGVyRXZlbnRzLCBTV0lQRVJfQ09ORklHIH0gZnJvbSAnLi9zd2lwZXIuaW50ZXJmYWNlcyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tzd2lwZXJdJyxcblx0ZXhwb3J0QXM6ICduZ3hTd2lwZXInXG59KVxuZXhwb3J0IGNsYXNzIFN3aXBlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgT25DaGFuZ2VzIHtcblxuXHRwcml2YXRlIHN3aXBlcl86IGFueTtcblx0cHJpdmF0ZSBpbmRleF86IG51bWJlciB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIGNvbmZpZ186IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PiB8IG51bGwgPSBudWxsO1xuXG5cdEBJbnB1dCgpIHNldCBpbmRleChpbmRleDogbnVtYmVyKSB7XG5cdFx0aWYgKGluZGV4ICE9IG51bGwpIHtcblx0XHRcdHRoaXMuc2V0SW5kZXgoaW5kZXgpO1xuXHRcdH1cblx0fVxuXG5cdEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIHBlcmZvcm1hbmNlOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgnc3dpcGVyJykgY29uZmlnPzogU3dpcGVyQ29uZmlnSW50ZXJmYWNlO1xuXG5cdEBPdXRwdXQoKSBhdXRvcGxheSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgYXV0b3BsYXlTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgYXV0b3BsYXlTdG9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBiZWZvcmVEZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBiZWZvcmVSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGJyZWFrcG9pbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBkb3VibGVUYXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGZyb21FZGdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBpbWFnZXNSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgaW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblx0QE91dHB1dCgpIGluaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGtleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBsYXp5SW1hZ2VMb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBsYXp5SW1hZ2VSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHJlYWNoQmVnaW5uaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSByZWFjaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNjcm9sbERyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNjcm9sbERyYWdNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzY3JvbGxEcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNldFRyYW5zaXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNldFRyYW5zbGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlTmV4dFRyYW5zaXRpb25FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlTmV4dFRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVQcmV2VHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzbGlkZXJNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0YXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRvdWNoRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0b3VjaE1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRvdWNoTW92ZU9wcG9zaXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0b3VjaFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0cmFuc2l0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0cmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KFNXSVBFUl9DT05GSUcpIHByaXZhdGUgZGVmYXVsdHM6IFN3aXBlckNvbmZpZ0ludGVyZmFjZVxuXHQpIHsgfVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcGFyYW1zID0gbmV3IFN3aXBlckNvbmZpZyh0aGlzLmRlZmF1bHRzKTtcblx0XHRwYXJhbXMuYXNzaWduKHRoaXMuY29uZmlnKTsgLy8gQ3VzdG9tIGNvbmZpZ3VyYXRpb25cblx0XHRpZiAocGFyYW1zLnNjcm9sbGJhciA9PT0gdHJ1ZSkge1xuXHRcdFx0cGFyYW1zLnNjcm9sbGJhciA9IHtcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXNjcm9sbGJhcidcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmIChwYXJhbXMucGFnaW5hdGlvbiA9PT0gdHJ1ZSkge1xuXHRcdFx0cGFyYW1zLnBhZ2luYXRpb24gPSB7XG5cdFx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJ1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYgKHBhcmFtcy5uYXZpZ2F0aW9uID09PSB0cnVlKSB7XG5cdFx0XHRwYXJhbXMubmF2aWdhdGlvbiA9IHtcblx0XHRcdFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG5cdFx0XHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAodGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0cGFyYW1zLmFsbG93U2xpZGVQcmV2ID0gZmFsc2U7XG5cdFx0XHRwYXJhbXMuYWxsb3dTbGlkZU5leHQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaW5kZXhfICE9IG51bGwpIHtcblx0XHRcdHBhcmFtcy5pbml0aWFsU2xpZGUgPSB0aGlzLmluZGV4Xztcblx0XHRcdHRoaXMuaW5kZXhfID0gbnVsbDtcblx0XHR9XG5cdFx0cGFyYW1zLm9uID0ge1xuXHRcdFx0c2xpZGVDaGFuZ2U6ICgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuc3dpcGVyXyAmJiB0aGlzLmluZGV4Q2hhbmdlLm9ic2VydmVycy5sZW5ndGgpIHtcblx0XHRcdFx0XHR0aGlzLmVtaXQodGhpcy5pbmRleENoYW5nZSwgdGhpcy5zd2lwZXJfLnJlYWxJbmRleCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHR0aGlzLnN3aXBlcl8gPSBuZXcgU3dpcGVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBwYXJhbXMpO1xuXHRcdH0pO1xuXHRcdGlmIChwYXJhbXMuaW5pdCAhPT0gZmFsc2UgJiYgdGhpcy5pbml0Lm9ic2VydmVycy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuZW1pdCh0aGlzLmluaXQsIHRoaXMuc3dpcGVyXyk7XG5cdFx0fVxuXHRcdC8vIEFkZCBuYXRpdmUgU3dpcGVyIGV2ZW50IGhhbmRsaW5nXG5cdFx0U3dpcGVyRXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZTogU3dpcGVyRXZlbnQpID0+IHtcblx0XHRcdGxldCBzd2lwZXJFdmVudCA9IGV2ZW50TmFtZS5yZXBsYWNlKCdzd2lwZXInLCAnJyk7XG5cdFx0XHRzd2lwZXJFdmVudCA9IHN3aXBlckV2ZW50LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3dpcGVyRXZlbnQuc2xpY2UoMSk7XG5cdFx0XHR0aGlzLnN3aXBlcl8ub24oc3dpcGVyRXZlbnQsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuXHRcdFx0XHRpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRhcmdzID0gYXJnc1swXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBlbWl0dGVyID0gdGhpc1tzd2lwZXJFdmVudCBhcyBrZXlvZiBTd2lwZXJEaXJlY3RpdmVdIGFzIEV2ZW50RW1pdHRlcjxhbnk+O1xuXHRcdFx0XHRpZiAoZW1pdHRlci5vYnNlcnZlcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dGhpcy5lbWl0KGVtaXR0ZXIsIGFyZ3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZiAoIXRoaXMuY29uZmlnXykge1xuXHRcdFx0dGhpcy5jb25maWdfID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5jb25maWcgfHwge30pLmNyZWF0ZSgpO1xuXHRcdFx0dGhpcy5jb25maWdfLmRpZmYodGhpcy5jb25maWcgfHwge30pO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnN3aXBlcl8pIHtcblx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3dpcGVyXy5kZXN0cm95KHRydWUsIHRoaXMuc3dpcGVyXy5pbml0aWFsaXplZCB8fCBmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuc3dpcGVyXyA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0bmdEb0NoZWNrKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmNvbmZpZ18pIHtcblx0XHRcdGNvbnN0IGNoYW5nZXMgPSB0aGlzLmNvbmZpZ18uZGlmZih0aGlzLmNvbmZpZyB8fCB7fSk7XG5cdFx0XHRpZiAoY2hhbmdlcykge1xuXHRcdFx0XHR0aGlzLmluZGV4XyA9IHRoaXMuZ2V0SW5kZXgodHJ1ZSk7XG5cdFx0XHRcdHRoaXMubmdPbkRlc3Ryb3koKTtcblx0XHRcdFx0dGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3dpcGVyXyAmJiBjaGFuZ2VzWydkaXNhYmxlZCddKSB7XG5cdFx0XHRpZiAoY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXNbJ2Rpc2FibGVkJ10ucHJldmlvdXNWYWx1ZSkge1xuXHRcdFx0XHRpZiAoY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWUgPT09IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5uZ09uRGVzdHJveSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIGlmIChjaGFuZ2VzWydkaXNhYmxlZCddLmN1cnJlbnRWYWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5uZ09uRGVzdHJveSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZW1pdChlbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiwgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnBlcmZvcm1hbmNlKSB7XG5cdFx0XHRlbWl0dGVyLmVtaXQodmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnpvbmUucnVuKCgpID0+IGVtaXR0ZXIuZW1pdCh2YWx1ZSkpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzd2lwZXIoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5zd2lwZXJfO1xuXHR9XG5cblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3dpcGVyXykge1xuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zd2lwZXJfLmluaXQoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5zd2lwZXJfKSB7XG5cdFx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zd2lwZXJfLnVwZGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LCAwKTtcblx0fVxuXG5cdHB1YmxpYyBnZXRJbmRleChyZWFsPzogYm9vbGVhbik6IG51bWJlciB7XG5cdFx0aWYgKCF0aGlzLnN3aXBlcl8pIHtcblx0XHRcdHJldHVybiB0aGlzLmluZGV4XyB8fCAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gcmVhbCA/IHRoaXMuc3dpcGVyXy5yZWFsSW5kZXggOiB0aGlzLnN3aXBlcl8uYWN0aXZlSW5kZXg7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNldEluZGV4KGluZGV4OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyLCBzaWxlbnQ/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnN3aXBlcl8pIHtcblx0XHRcdHRoaXMuaW5kZXhfID0gaW5kZXg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCByZWFsSW5kZXggPSBpbmRleCAqIHRoaXMuc3dpcGVyXy5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cdFx0XHRpZiAodGhpcy5zd2lwZXJfLnBhcmFtcy5sb29wKSB7XG5cdFx0XHRcdHJlYWxJbmRleCArPSB0aGlzLnN3aXBlcl8ubG9vcGVkU2xpZGVzO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zd2lwZXJfLnNsaWRlVG8ocmVhbEluZGV4LCBzcGVlZCwgIXNpbGVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcHJldlNsaWRlKHNwZWVkPzogbnVtYmVyLCBzaWxlbnQ/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3dpcGVyXykge1xuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zd2lwZXJfLnNsaWRlUHJldihzcGVlZCwgIXNpbGVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgbmV4dFNsaWRlKHNwZWVkPzogbnVtYmVyLCBzaWxlbnQ/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3dpcGVyXykge1xuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zd2lwZXJfLnNsaWRlTmV4dChzcGVlZCwgIXNpbGVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc3RvcEF1dG9wbGF5KHJlc2V0PzogYm9vbGVhbik6IHZvaWQge1xuXHRcdGlmIChyZXNldCkge1xuXHRcdFx0dGhpcy5zZXRJbmRleCgwKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuc3dpcGVyXyAmJiB0aGlzLnN3aXBlcl8uYXV0b3BsYXkpIHtcblx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3dpcGVyXy5hdXRvcGxheS5zdG9wKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc3RhcnRBdXRvcGxheShyZXNldD86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRpZiAocmVzZXQpIHtcblx0XHRcdHRoaXMuc2V0SW5kZXgoMCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnN3aXBlcl8gJiYgdGhpcy5zd2lwZXJfLmF1dG9wbGF5KSB7XG5cdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnN3aXBlcl8uYXV0b3BsYXkuc3RhcnQoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=