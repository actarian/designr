/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperDirective } from './swiper.directive';
import { SwiperConfig, SwiperEvents, SWIPER_CONFIG } from './swiper.interfaces';
var SwiperComponent = /** @class */ (function () {
    function SwiperComponent(zone, cdRef, platformId, defaults) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.index = null;
        this.disabled = false;
        this.performance = false;
        this.useSwiperClass = true;
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
        this.mo = null;
        this.swiperConfig = null;
        this.paginationBackup = null;
        this.paginationConfig = null;
    }
    Object.defineProperty(SwiperComponent.prototype, "isAtLast", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.directiveRef || !this.directiveRef.swiper()) ?
                false : this.directiveRef.swiper()['isEnd'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComponent.prototype, "isAtFirst", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.directiveRef || !this.directiveRef.swiper()) ?
                false : this.directiveRef.swiper()['isBeginning'];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SwiperComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular(function () {
            _this.updateClasses();
            if (_this.swiperSlides && typeof MutationObserver !== 'undefined') {
                _this.mo = new MutationObserver(function () {
                    _this.updateClasses();
                });
                _this.mo.observe(_this.swiperSlides.nativeElement, { childList: true });
            }
        });
        window.setTimeout(function () {
            if (_this.directiveRef) {
                _this.init.emit();
                _this.directiveRef.indexChange = _this.indexChange;
                SwiperEvents.forEach(function (eventName) {
                    if (_this.directiveRef) {
                        /** @type {?} */
                        var directiveOutput = (/** @type {?} */ (eventName));
                        /** @type {?} */
                        var componentOutput = (/** @type {?} */ (eventName));
                        _this.directiveRef[directiveOutput] = (/** @type {?} */ (_this[componentOutput]));
                    }
                });
            }
        }, 0);
    };
    /**
     * @return {?}
     */
    SwiperComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.mo) {
            this.mo.disconnect();
        }
        if (this.config && this.paginationBackup) {
            this.config.pagination = this.paginationBackup;
        }
    };
    /**
     * @return {?}
     */
    SwiperComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.swiperConfig = new SwiperConfig(this.defaults);
        this.swiperConfig.assign(this.config); // Custom configuration
        if (this.swiperConfig.pagination === true ||
            (this.swiperConfig.pagination && typeof this.swiperConfig.pagination === 'object' &&
                (!this.swiperConfig.pagination.type || this.swiperConfig.pagination.type === 'bullets') &&
                !this.swiperConfig.pagination.renderBullet && this.swiperConfig.pagination.el === '.swiper-pagination')) {
            this.config = this.config || {};
            if (!this.paginationConfig) {
                this.paginationBackup = this.config.pagination;
                this.paginationConfig = {
                    el: '.swiper-pagination',
                    renderBullet: function (index, className) {
                        /** @type {?} */
                        var children = _this.swiperSlides ? _this.swiperSlides.nativeElement.children : [];
                        /** @type {?} */
                        var bullet = "<span class=\"" + className + " " + className + "-middle\" index=\"" + index + "\"></span>";
                        if (index === 0) {
                            bullet = "<span class=\"" + className + " " + className + "-first\" index=\"" + index + "\"></span>";
                        }
                        else if (index === (children.length - 1)) {
                            bullet = "<span class=\"" + className + " " + className + "-last\" index=\"" + index + "\"></span>";
                        }
                        return "<span class=\"swiper-pagination-handle\" index=\"" + index + "\">" + bullet + "</span>";
                    }
                };
            }
            if (this.swiperConfig.pagination === true) {
                this.config.pagination = this.paginationConfig;
            }
            else {
                this.config.pagination = Object.assign({}, this.config.pagination, this.paginationConfig);
            }
        }
        return (/** @type {?} */ (this.config));
    };
    /**
     * @private
     * @return {?}
     */
    SwiperComponent.prototype.updateClasses = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.swiperSlides) {
            /** @type {?} */
            var updateNeeded = false;
            /** @type {?} */
            var children = this.swiperSlides.nativeElement.children;
            for (var i = 0; i < children.length; i++) {
                if (!children[i].classList.contains('swiper-slide')) {
                    updateNeeded = true;
                    children[i].classList.add('swiper-slide');
                }
            }
            if (updateNeeded && this.directiveRef) {
                this.directiveRef.update();
            }
        }
        this.cdRef.detectChanges();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    SwiperComponent.prototype.onPaginationClick = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.config && this.directiveRef && (this.config.pagination === true ||
            (this.config.pagination && typeof this.config.pagination === 'object' &&
                (!this.config.pagination.type || this.config.pagination.type === 'bullets') &&
                (this.config.pagination.clickable && this.config.pagination.el === '.swiper-pagination')))) {
            this.directiveRef.setIndex(index);
        }
    };
    SwiperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'swiper',
                    exportAs: 'ngxSwiper',
                    template: "<div #swiper class=\"s-wrapper\" [class.swiper]=\"useSwiperClass\" [class.swiper-container]=\"useSwiperClass\" [swiper]=\"getConfig()\" [index]=\"index\" [disabled]=\"disabled\" [performance]=\"performance\">\n\t<div #swiperSlides class=\"swiper-wrapper\">\n\t\t<ng-content></ng-content>\n\t</div>\n\t<div class=\"swiper-scrollbar\" [hidden]=\"!swiperConfig?.scrollbar || (swiperConfig?.scrollbar !== true && !!swiperConfig?.scrollbar?.el && swiperConfig?.scrollbar?.el !== '.swiper-scrollbar')\"></div>\n\t<div class=\"swiper-button-prev\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.prevEl && swiperConfig?.navigation?.prevEl !== '.swiper-button-prev')\" [attr.disabled]=\"isAtFirst ||\u00A0null\"></div>\n\t<div class=\"swiper-button-next\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.nextEl && swiperConfig?.navigation?.nextEl !== '.swiper-button-next')\" [attr.disabled]=\"isAtLast || null\"></div>\n\t<div class=\"swiper-pagination\" [hidden]=\"!swiperConfig?.pagination || (swiperConfig?.pagination !== true && !!swiperConfig?.pagination?.el && swiperConfig?.pagination?.el !== '.swiper-pagination')\" (click)=\"onPaginationClick($event.target.getAttribute('index'))\" (keyup.enter)=\"onPaginationClick($event.target.getAttribute('index'))\"></div>\n</div>\n",
                    // styleUrls: ['~swiper/dist/css/swiper.min.css', 'swiper.component.scss'],
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SwiperComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SWIPER_CONFIG,] }] }
    ]; };
    SwiperComponent.propDecorators = {
        swiperSlides: [{ type: ViewChild, args: ['swiperSlides',] }],
        directiveRef: [{ type: ViewChild, args: [SwiperDirective,] }],
        index: [{ type: Input }],
        disabled: [{ type: Input }],
        performance: [{ type: Input }],
        config: [{ type: Input }],
        useSwiperClass: [{ type: Input }],
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
    return SwiperComponent;
}());
export { SwiperComponent };
if (false) {
    /** @type {?} */
    SwiperComponent.prototype.swiperSlides;
    /** @type {?} */
    SwiperComponent.prototype.directiveRef;
    /** @type {?} */
    SwiperComponent.prototype.index;
    /** @type {?} */
    SwiperComponent.prototype.disabled;
    /** @type {?} */
    SwiperComponent.prototype.performance;
    /** @type {?} */
    SwiperComponent.prototype.config;
    /** @type {?} */
    SwiperComponent.prototype.useSwiperClass;
    /** @type {?} */
    SwiperComponent.prototype.autoplay;
    /** @type {?} */
    SwiperComponent.prototype.autoplayStart;
    /** @type {?} */
    SwiperComponent.prototype.autoplayStop;
    /** @type {?} */
    SwiperComponent.prototype.beforeDestroy;
    /** @type {?} */
    SwiperComponent.prototype.beforeResize;
    /** @type {?} */
    SwiperComponent.prototype.breakpoint;
    /** @type {?} */
    SwiperComponent.prototype.click;
    /** @type {?} */
    SwiperComponent.prototype.doubleTap;
    /** @type {?} */
    SwiperComponent.prototype.fromEdge;
    /** @type {?} */
    SwiperComponent.prototype.imagesReady;
    /** @type {?} */
    SwiperComponent.prototype.indexChange;
    /** @type {?} */
    SwiperComponent.prototype.init;
    /** @type {?} */
    SwiperComponent.prototype.keyPress;
    /** @type {?} */
    SwiperComponent.prototype.lazyImageLoad;
    /** @type {?} */
    SwiperComponent.prototype.lazyImageReady;
    /** @type {?} */
    SwiperComponent.prototype.progress;
    /** @type {?} */
    SwiperComponent.prototype.reachBeginning;
    /** @type {?} */
    SwiperComponent.prototype.reachEnd;
    /** @type {?} */
    SwiperComponent.prototype.resize;
    /** @type {?} */
    SwiperComponent.prototype.scroll;
    /** @type {?} */
    SwiperComponent.prototype.scrollDragEnd;
    /** @type {?} */
    SwiperComponent.prototype.scrollDragMove;
    /** @type {?} */
    SwiperComponent.prototype.scrollDragStart;
    /** @type {?} */
    SwiperComponent.prototype.setTransition;
    /** @type {?} */
    SwiperComponent.prototype.setTranslate;
    /** @type {?} */
    SwiperComponent.prototype.slideChange;
    /** @type {?} */
    SwiperComponent.prototype.slideChangeTransitionEnd;
    /** @type {?} */
    SwiperComponent.prototype.slideChangeTransitionStart;
    /** @type {?} */
    SwiperComponent.prototype.slideNextTransitionEnd;
    /** @type {?} */
    SwiperComponent.prototype.slideNextTransitionStart;
    /** @type {?} */
    SwiperComponent.prototype.slidePrevTransitionEnd;
    /** @type {?} */
    SwiperComponent.prototype.slidePrevTransitionStart;
    /** @type {?} */
    SwiperComponent.prototype.sliderMove;
    /** @type {?} */
    SwiperComponent.prototype.tap;
    /** @type {?} */
    SwiperComponent.prototype.touchEnd;
    /** @type {?} */
    SwiperComponent.prototype.touchMove;
    /** @type {?} */
    SwiperComponent.prototype.touchMoveOpposite;
    /** @type {?} */
    SwiperComponent.prototype.touchStart;
    /** @type {?} */
    SwiperComponent.prototype.transitionEnd;
    /** @type {?} */
    SwiperComponent.prototype.transitionStart;
    /**
     * @type {?}
     * @private
     */
    SwiperComponent.prototype.mo;
    /** @type {?} */
    SwiperComponent.prototype.swiperConfig;
    /** @type {?} */
    SwiperComponent.prototype.paginationBackup;
    /** @type {?} */
    SwiperComponent.prototype.paginationConfig;
    /**
     * @type {?}
     * @private
     */
    SwiperComponent.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    SwiperComponent.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    SwiperComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    SwiperComponent.prototype.defaults;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9zd2lwZXIvc3dpcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDck0sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQXNDLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVwSDtJQTBFQyx5QkFDUyxJQUFZLEVBQVUsS0FBd0IsRUFDekIsVUFBa0IsRUFDSixRQUErQjtRQUZsRSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDekIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNKLGFBQVEsR0FBUixRQUFRLENBQXVCO1FBakVsRSxVQUFLLEdBQWtCLElBQUksQ0FBQztRQUM1QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRTlCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLGlCQUFZLEdBQUcs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UixzQkFBQztDQUFBLEFBaExELElBZ0xDO1NBektZLGVBQWU7OztJQUUzQix1Q0FBcUQ7O0lBQ3JELHVDQUEyRDs7SUFFM0QsZ0NBQXFDOztJQUNyQyxtQ0FBbUM7O0lBQ25DLHNDQUFzQzs7SUFDdEMsaUNBQXdDOztJQUN4Qyx5Q0FBd0M7O0lBRXhDLG1DQUE2Qzs7SUFDN0Msd0NBQWtEOztJQUNsRCx1Q0FBaUQ7O0lBQ2pELHdDQUFrRDs7SUFDbEQsdUNBQWlEOztJQUNqRCxxQ0FBK0M7O0lBQy9DLGdDQUEwQzs7SUFDMUMsb0NBQThDOztJQUM5QyxtQ0FBNkM7O0lBQzdDLHNDQUFnRDs7SUFDaEQsc0NBQW1EOztJQUNuRCwrQkFBeUM7O0lBQ3pDLG1DQUE2Qzs7SUFDN0Msd0NBQWtEOztJQUNsRCx5Q0FBbUQ7O0lBQ25ELG1DQUE2Qzs7SUFDN0MseUNBQW1EOztJQUNuRCxtQ0FBNkM7O0lBQzdDLGlDQUEyQzs7SUFDM0MsaUNBQTJDOztJQUMzQyx3Q0FBa0Q7O0lBQ2xELHlDQUFtRDs7SUFDbkQsMENBQW9EOztJQUNwRCx3Q0FBa0Q7O0lBQ2xELHVDQUFpRDs7SUFDakQsc0NBQWdEOztJQUNoRCxtREFBNkQ7O0lBQzdELHFEQUErRDs7SUFDL0QsaURBQTJEOztJQUMzRCxtREFBNkQ7O0lBQzdELGlEQUEyRDs7SUFDM0QsbURBQTZEOztJQUM3RCxxQ0FBK0M7O0lBQy9DLDhCQUF3Qzs7SUFDeEMsbUNBQTZDOztJQUM3QyxvQ0FBOEM7O0lBQzlDLDRDQUFzRDs7SUFDdEQscUNBQStDOztJQUMvQyx3Q0FBa0Q7O0lBQ2xELDBDQUFvRDs7Ozs7SUFZcEQsNkJBQTJDOztJQUMzQyx1Q0FBZ0M7O0lBQ2hDLDJDQUFvQzs7SUFDcEMsMkNBQW9DOzs7OztJQUduQywrQkFBb0I7Ozs7O0lBQUUsZ0NBQWdDOzs7OztJQUN0RCxxQ0FBK0M7Ozs7O0lBQy9DLG1DQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBPdXRwdXQsIFBMQVRGT1JNX0lELCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTd2lwZXJEaXJlY3RpdmUgfSBmcm9tICcuL3N3aXBlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3dpcGVyQ29uZmlnLCBTd2lwZXJDb25maWdJbnRlcmZhY2UsIFN3aXBlckV2ZW50LCBTd2lwZXJFdmVudHMsIFNXSVBFUl9DT05GSUcgfSBmcm9tICcuL3N3aXBlci5pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3dpcGVyJyxcblx0ZXhwb3J0QXM6ICduZ3hTd2lwZXInLFxuXHR0ZW1wbGF0ZVVybDogJ3N3aXBlci5jb21wb25lbnQuaHRtbCcsXG5cdC8vIHN0eWxlVXJsczogWyd+c3dpcGVyL2Rpc3QvY3NzL3N3aXBlci5taW4uY3NzJywgJ3N3aXBlci5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN3aXBlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnc3dpcGVyU2xpZGVzJykgc3dpcGVyU2xpZGVzPzogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChTd2lwZXJEaXJlY3RpdmUpIGRpcmVjdGl2ZVJlZj86IFN3aXBlckRpcmVjdGl2ZTtcblxuXHRASW5wdXQoKSBpbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cdEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIHBlcmZvcm1hbmNlOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIGNvbmZpZz86IFN3aXBlckNvbmZpZ0ludGVyZmFjZTtcblx0QElucHV0KCkgdXNlU3dpcGVyQ2xhc3M6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdEBPdXRwdXQoKSBhdXRvcGxheSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgYXV0b3BsYXlTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgYXV0b3BsYXlTdG9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBiZWZvcmVEZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBiZWZvcmVSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGJyZWFrcG9pbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBkb3VibGVUYXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGZyb21FZGdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBpbWFnZXNSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgaW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblx0QE91dHB1dCgpIGluaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGtleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBsYXp5SW1hZ2VMb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBsYXp5SW1hZ2VSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHJlYWNoQmVnaW5uaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSByZWFjaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNjcm9sbERyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNjcm9sbERyYWdNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzY3JvbGxEcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNldFRyYW5zaXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNldFRyYW5zbGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlTmV4dFRyYW5zaXRpb25FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlTmV4dFRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVQcmV2VHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzbGlkZXJNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0YXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRvdWNoRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0b3VjaE1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRvdWNoTW92ZU9wcG9zaXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0b3VjaFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0cmFuc2l0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0cmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRnZXQgaXNBdExhc3QoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICghdGhpcy5kaXJlY3RpdmVSZWYgfHwgIXRoaXMuZGlyZWN0aXZlUmVmLnN3aXBlcigpKSA/XG5cdFx0XHRmYWxzZSA6IHRoaXMuZGlyZWN0aXZlUmVmLnN3aXBlcigpWydpc0VuZCddO1xuXHR9XG5cblx0Z2V0IGlzQXRGaXJzdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKCF0aGlzLmRpcmVjdGl2ZVJlZiB8fCAhdGhpcy5kaXJlY3RpdmVSZWYuc3dpcGVyKCkpID9cblx0XHRcdGZhbHNlIDogdGhpcy5kaXJlY3RpdmVSZWYuc3dpcGVyKClbJ2lzQmVnaW5uaW5nJ107XG5cdH1cblxuXHRwcml2YXRlIG1vOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGw7XG5cdHB1YmxpYyBzd2lwZXJDb25maWc6IGFueSA9IG51bGw7XG5cdHB1YmxpYyBwYWdpbmF0aW9uQmFja3VwOiBhbnkgPSBudWxsO1xuXHRwdWJsaWMgcGFnaW5hdGlvbkNvbmZpZzogYW55ID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdChTV0lQRVJfQ09ORklHKSBwcml2YXRlIGRlZmF1bHRzOiBTd2lwZXJDb25maWdJbnRlcmZhY2Vcblx0KSB7IH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cdFx0aWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHR0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcblx0XHRcdGlmICh0aGlzLnN3aXBlclNsaWRlcyAmJiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0dGhpcy5tbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMubW8ub2JzZXJ2ZSh0aGlzLnN3aXBlclNsaWRlcy5uYXRpdmVFbGVtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5kaXJlY3RpdmVSZWYpIHtcblx0XHRcdFx0dGhpcy5pbml0LmVtaXQoKTtcblx0XHRcdFx0dGhpcy5kaXJlY3RpdmVSZWYuaW5kZXhDaGFuZ2UgPSB0aGlzLmluZGV4Q2hhbmdlO1xuXHRcdFx0XHRTd2lwZXJFdmVudHMuZm9yRWFjaCgoZXZlbnROYW1lOiBTd2lwZXJFdmVudCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmRpcmVjdGl2ZVJlZikge1xuXHRcdFx0XHRcdFx0Y29uc3QgZGlyZWN0aXZlT3V0cHV0ID0gZXZlbnROYW1lIGFzIGtleW9mIFN3aXBlckRpcmVjdGl2ZTtcblx0XHRcdFx0XHRcdGNvbnN0IGNvbXBvbmVudE91dHB1dCA9IGV2ZW50TmFtZSBhcyBrZXlvZiBTd2lwZXJDb21wb25lbnQ7XG5cdFx0XHRcdFx0XHR0aGlzLmRpcmVjdGl2ZVJlZltkaXJlY3RpdmVPdXRwdXRdID0gdGhpc1tjb21wb25lbnRPdXRwdXRdIGFzIEV2ZW50RW1pdHRlcjxhbnk+O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSwgMCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5tbykge1xuXHRcdFx0dGhpcy5tby5kaXNjb25uZWN0KCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLnBhZ2luYXRpb25CYWNrdXApIHtcblx0XHRcdHRoaXMuY29uZmlnLnBhZ2luYXRpb24gPSB0aGlzLnBhZ2luYXRpb25CYWNrdXA7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldENvbmZpZygpOiBTd2lwZXJDb25maWdJbnRlcmZhY2Uge1xuXHRcdHRoaXMuc3dpcGVyQ29uZmlnID0gbmV3IFN3aXBlckNvbmZpZyh0aGlzLmRlZmF1bHRzKTtcblx0XHR0aGlzLnN3aXBlckNvbmZpZy5hc3NpZ24odGhpcy5jb25maWcpOyAvLyBDdXN0b20gY29uZmlndXJhdGlvblxuXHRcdGlmICh0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uID09PSB0cnVlIHx8XG5cdFx0XHQodGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbiAmJiB0eXBlb2YgdGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbiA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0KCF0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uLnR5cGUgfHwgdGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbi50eXBlID09PSAnYnVsbGV0cycpICYmXG5cdFx0XHRcdCF0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uLnJlbmRlckJ1bGxldCAmJiB0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uLmVsID09PSAnLnN3aXBlci1wYWdpbmF0aW9uJykpIHtcblx0XHRcdHRoaXMuY29uZmlnID0gdGhpcy5jb25maWcgfHwge307XG5cdFx0XHRpZiAoIXRoaXMucGFnaW5hdGlvbkNvbmZpZykge1xuXHRcdFx0XHR0aGlzLnBhZ2luYXRpb25CYWNrdXAgPSB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uO1xuXHRcdFx0XHR0aGlzLnBhZ2luYXRpb25Db25maWcgPSB7XG5cdFx0XHRcdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuXHRcdFx0XHRcdHJlbmRlckJ1bGxldDogKGluZGV4OiBudW1iZXIsIGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMuc3dpcGVyU2xpZGVzID8gdGhpcy5zd2lwZXJTbGlkZXMubmF0aXZlRWxlbWVudC5jaGlsZHJlbiA6IFtdO1xuXHRcdFx0XHRcdFx0bGV0IGJ1bGxldCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfSAke2NsYXNzTmFtZX0tbWlkZGxlXCIgaW5kZXg9XCIke2luZGV4fVwiPjwvc3Bhbj5gO1xuXHRcdFx0XHRcdFx0aWYgKGluZGV4ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGJ1bGxldCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfSAke2NsYXNzTmFtZX0tZmlyc3RcIiBpbmRleD1cIiR7aW5kZXh9XCI+PC9zcGFuPmA7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSAoY2hpbGRyZW4ubGVuZ3RoIC0gMSkpIHtcblx0XHRcdFx0XHRcdFx0YnVsbGV0ID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9ICR7Y2xhc3NOYW1lfS1sYXN0XCIgaW5kZXg9XCIke2luZGV4fVwiPjwvc3Bhbj5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIGA8c3BhbiBjbGFzcz1cInN3aXBlci1wYWdpbmF0aW9uLWhhbmRsZVwiIGluZGV4PVwiJHtpbmRleH1cIj4ke2J1bGxldH08L3NwYW4+YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbiA9PT0gdHJ1ZSkge1xuXHRcdFx0XHR0aGlzLmNvbmZpZy5wYWdpbmF0aW9uID0gdGhpcy5wYWdpbmF0aW9uQ29uZmlnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jb25maWcucGFnaW5hdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlnLnBhZ2luYXRpb24sIHRoaXMucGFnaW5hdGlvbkNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmNvbmZpZyBhcyBTd2lwZXJDb25maWdJbnRlcmZhY2U7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZUNsYXNzZXMoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3dpcGVyU2xpZGVzKSB7XG5cdFx0XHRsZXQgdXBkYXRlTmVlZGVkID0gZmFsc2U7XG5cdFx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMuc3dpcGVyU2xpZGVzLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW47XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICghY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItc2xpZGUnKSkge1xuXHRcdFx0XHRcdHVwZGF0ZU5lZWRlZCA9IHRydWU7XG5cdFx0XHRcdFx0Y2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgnc3dpcGVyLXNsaWRlJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh1cGRhdGVOZWVkZWQgJiYgdGhpcy5kaXJlY3RpdmVSZWYpIHtcblx0XHRcdFx0dGhpcy5kaXJlY3RpdmVSZWYudXBkYXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHVibGljIG9uUGFnaW5hdGlvbkNsaWNrKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jb25maWcgJiYgdGhpcy5kaXJlY3RpdmVSZWYgJiYgKHRoaXMuY29uZmlnLnBhZ2luYXRpb24gPT09IHRydWUgfHxcblx0XHRcdCh0aGlzLmNvbmZpZy5wYWdpbmF0aW9uICYmIHR5cGVvZiB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0XHQoIXRoaXMuY29uZmlnLnBhZ2luYXRpb24udHlwZSB8fCB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uLnR5cGUgPT09ICdidWxsZXRzJykgJiZcblx0XHRcdFx0KHRoaXMuY29uZmlnLnBhZ2luYXRpb24uY2xpY2thYmxlICYmIHRoaXMuY29uZmlnLnBhZ2luYXRpb24uZWwgPT09ICcuc3dpcGVyLXBhZ2luYXRpb24nKSkpKSB7XG5cdFx0XHR0aGlzLmRpcmVjdGl2ZVJlZi5zZXRJbmRleChpbmRleCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==