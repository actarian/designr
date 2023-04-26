/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperDirective } from './swiper.directive';
import { SwiperConfig, SwiperEvents, SWIPER_CONFIG } from './swiper.interfaces';
export class SwiperComponent {
    /**
     * @param {?} zone
     * @param {?} cdRef
     * @param {?} platformId
     * @param {?} defaults
     */
    constructor(zone, cdRef, platformId, defaults) {
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
    /**
     * @return {?}
     */
    get isAtLast() {
        return (!this.directiveRef || !this.directiveRef.swiper()) ?
            false : this.directiveRef.swiper()['isEnd'];
    }
    /**
     * @return {?}
     */
    get isAtFirst() {
        return (!this.directiveRef || !this.directiveRef.swiper()) ?
            false : this.directiveRef.swiper()['isBeginning'];
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.updateClasses();
            if (this.swiperSlides && typeof MutationObserver !== 'undefined') {
                this.mo = new MutationObserver((/**
                 * @return {?}
                 */
                () => {
                    this.updateClasses();
                }));
                this.mo.observe(this.swiperSlides.nativeElement, { childList: true });
            }
        }));
        window.setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.directiveRef) {
                this.init.emit();
                this.directiveRef.indexChange = this.indexChange;
                SwiperEvents.forEach((/**
                 * @param {?} eventName
                 * @return {?}
                 */
                (eventName) => {
                    if (this.directiveRef) {
                        /** @type {?} */
                        const directiveOutput = (/** @type {?} */ (eventName));
                        /** @type {?} */
                        const componentOutput = (/** @type {?} */ (eventName));
                        this.directiveRef[directiveOutput] = (/** @type {?} */ (this[componentOutput]));
                    }
                }));
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.mo) {
            this.mo.disconnect();
        }
        if (this.config && this.paginationBackup) {
            this.config.pagination = this.paginationBackup;
        }
    }
    /**
     * @return {?}
     */
    getConfig() {
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
                    renderBullet: (/**
                     * @param {?} index
                     * @param {?} className
                     * @return {?}
                     */
                    (index, className) => {
                        /** @type {?} */
                        const children = this.swiperSlides ? this.swiperSlides.nativeElement.children : [];
                        /** @type {?} */
                        let bullet = `<span class="${className} ${className}-middle" index="${index}"></span>`;
                        if (index === 0) {
                            bullet = `<span class="${className} ${className}-first" index="${index}"></span>`;
                        }
                        else if (index === (children.length - 1)) {
                            bullet = `<span class="${className} ${className}-last" index="${index}"></span>`;
                        }
                        return `<span class="swiper-pagination-handle" index="${index}">${bullet}</span>`;
                    })
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
    }
    /**
     * @private
     * @return {?}
     */
    updateClasses() {
        if (this.swiperSlides) {
            /** @type {?} */
            let updateNeeded = false;
            /** @type {?} */
            const children = this.swiperSlides.nativeElement.children;
            for (let i = 0; i < children.length; i++) {
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
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onPaginationClick(index) {
        if (this.config && this.directiveRef && (this.config.pagination === true ||
            (this.config.pagination && typeof this.config.pagination === 'object' &&
                (!this.config.pagination.type || this.config.pagination.type === 'bullets') &&
                (this.config.pagination.clickable && this.config.pagination.el === '.swiper-pagination')))) {
            this.directiveRef.setIndex(index);
        }
    }
}
SwiperComponent.decorators = [
    { type: Component, args: [{
                selector: 'swiper',
                exportAs: 'ngxSwiper',
                template: "<div #swiper class=\"s-wrapper\" [class.swiper]=\"useSwiperClass\" [class.swiper-container]=\"useSwiperClass\" [swiper]=\"getConfig()\" [index]=\"index\" [disabled]=\"disabled\" [performance]=\"performance\">\r\n\t<div #swiperSlides class=\"swiper-wrapper\">\r\n\t\t<ng-content></ng-content>\r\n\t</div>\r\n\t<div class=\"swiper-scrollbar\" [hidden]=\"!swiperConfig?.scrollbar || (swiperConfig?.scrollbar !== true && !!swiperConfig?.scrollbar?.el && swiperConfig?.scrollbar?.el !== '.swiper-scrollbar')\"></div>\r\n\t<div class=\"swiper-button-prev\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.prevEl && swiperConfig?.navigation?.prevEl !== '.swiper-button-prev')\" [attr.disabled]=\"isAtFirst ||\u00A0null\"></div>\r\n\t<div class=\"swiper-button-next\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.nextEl && swiperConfig?.navigation?.nextEl !== '.swiper-button-next')\" [attr.disabled]=\"isAtLast || null\"></div>\r\n\t<div class=\"swiper-pagination\" [hidden]=\"!swiperConfig?.pagination || (swiperConfig?.pagination !== true && !!swiperConfig?.pagination?.el && swiperConfig?.pagination?.el !== '.swiper-pagination')\" (click)=\"onPaginationClick($event.target.getAttribute('index'))\" (keyup.enter)=\"onPaginationClick($event.target.getAttribute('index'))\"></div>\r\n</div>\r\n",
                // styleUrls: ['~swiper/dist/css/swiper.min.css', 'swiper.component.scss'],
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
SwiperComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SWIPER_CONFIG,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9zd2lwZXIvc3dpcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDck0sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQXNDLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVNwSCxNQUFNLE9BQU8sZUFBZTs7Ozs7OztJQW1FM0IsWUFDUyxJQUFZLEVBQVUsS0FBd0IsRUFDekIsVUFBa0IsRUFDSixRQUErQjtRQUZsRSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDekIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNKLGFBQVEsR0FBUixRQUFRLENBQXVCO1FBakVsRSxVQUFLLEdBQWtCLElBQUksQ0FBQztRQUM1QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRTlCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxD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SUFDckQsdUNBQTJEOztJQUUzRCxnQ0FBcUM7O0lBQ3JDLG1DQUFtQzs7SUFDbkMsc0NBQXNDOztJQUN0QyxpQ0FBd0M7O0lBQ3hDLHlDQUF3Qzs7SUFFeEMsbUNBQTZDOztJQUM3Qyx3Q0FBa0Q7O0lBQ2xELHVDQUFpRDs7SUFDakQsd0NBQWtEOztJQUNsRCx1Q0FBaUQ7O0lBQ2pELHFDQUErQzs7SUFDL0MsZ0NBQTBDOztJQUMxQyxvQ0FBOEM7O0lBQzlDLG1DQUE2Qzs7SUFDN0Msc0NBQWdEOztJQUNoRCxzQ0FBbUQ7O0lBQ25ELCtCQUF5Qzs7SUFDekMsbUNBQTZDOztJQUM3Qyx3Q0FBa0Q7O0lBQ2xELHlDQUFtRDs7SUFDbkQsbUNBQTZDOztJQUM3Qyx5Q0FBbUQ7O0lBQ25ELG1DQUE2Qzs7SUFDN0MsaUNBQTJDOztJQUMzQyxpQ0FBMkM7O0lBQzNDLHdDQUFrRDs7SUFDbEQseUNBQW1EOztJQUNuRCwwQ0FBb0Q7O0lBQ3BELHdDQUFrRDs7SUFDbEQsdUNBQWlEOztJQUNqRCxzQ0FBZ0Q7O0lBQ2hELG1EQUE2RDs7SUFDN0QscURBQStEOztJQUMvRCxpREFBMkQ7O0lBQzNELG1EQUE2RDs7SUFDN0QsaURBQTJEOztJQUMzRCxtREFBNkQ7O0lBQzdELHFDQUErQzs7SUFDL0MsOEJBQXdDOztJQUN4QyxtQ0FBNkM7O0lBQzdDLG9DQUE4Qzs7SUFDOUMsNENBQXNEOztJQUN0RCxxQ0FBK0M7O0lBQy9DLHdDQUFrRDs7SUFDbEQsMENBQW9EOzs7OztJQVlwRCw2QkFBMkM7O0lBQzNDLHVDQUFnQzs7SUFDaEMsMkNBQW9DOztJQUNwQywyQ0FBb0M7Ozs7O0lBR25DLCtCQUFvQjs7Ozs7SUFBRSxnQ0FBZ0M7Ozs7O0lBQ3RELHFDQUErQzs7Ozs7SUFDL0MsbUNBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPcHRpb25hbCwgT3V0cHV0LCBQTEFURk9STV9JRCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTd2lwZXJEaXJlY3RpdmUgfSBmcm9tICcuL3N3aXBlci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTd2lwZXJDb25maWcsIFN3aXBlckNvbmZpZ0ludGVyZmFjZSwgU3dpcGVyRXZlbnQsIFN3aXBlckV2ZW50cywgU1dJUEVSX0NPTkZJRyB9IGZyb20gJy4vc3dpcGVyLmludGVyZmFjZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzd2lwZXInLFxyXG5cdGV4cG9ydEFzOiAnbmd4U3dpcGVyJyxcclxuXHR0ZW1wbGF0ZVVybDogJ3N3aXBlci5jb21wb25lbnQuaHRtbCcsXHJcblx0Ly8gc3R5bGVVcmxzOiBbJ35zd2lwZXIvZGlzdC9jc3Mvc3dpcGVyLm1pbi5jc3MnLCAnc3dpcGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3dpcGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcblx0QFZpZXdDaGlsZCgnc3dpcGVyU2xpZGVzJykgc3dpcGVyU2xpZGVzPzogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFN3aXBlckRpcmVjdGl2ZSkgZGlyZWN0aXZlUmVmPzogU3dpcGVyRGlyZWN0aXZlO1xyXG5cclxuXHRASW5wdXQoKSBpbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcblx0QElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRASW5wdXQoKSBwZXJmb3JtYW5jZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpIGNvbmZpZz86IFN3aXBlckNvbmZpZ0ludGVyZmFjZTtcclxuXHRASW5wdXQoKSB1c2VTd2lwZXJDbGFzczogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5cdEBPdXRwdXQoKSBhdXRvcGxheSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBhdXRvcGxheVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGF1dG9wbGF5U3RvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBiZWZvcmVEZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGJlZm9yZVJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBicmVha3BvaW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGRvdWJsZVRhcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBmcm9tRWRnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBpbWFnZXNSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBpbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cdEBPdXRwdXQoKSBpbml0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGtleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGxhenlJbWFnZUxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgbGF6eUltYWdlUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgcHJvZ3Jlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgcmVhY2hCZWdpbm5pbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgcmVhY2hFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgcmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzY3JvbGxEcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNjcm9sbERyYWdNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNjcm9sbERyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzZXRUcmFuc2l0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNldFRyYW5zbGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzbGlkZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2xpZGVOZXh0VHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzbGlkZU5leHRUcmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2xpZGVQcmV2VHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzbGlkZVByZXZUcmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2xpZGVyTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSB0YXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgdG91Y2hFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgdG91Y2hNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHRvdWNoTW92ZU9wcG9zaXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHRvdWNoU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgdHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSB0cmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcblx0Z2V0IGlzQXRMYXN0KCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuICghdGhpcy5kaXJlY3RpdmVSZWYgfHwgIXRoaXMuZGlyZWN0aXZlUmVmLnN3aXBlcigpKSA/XHJcblx0XHRcdGZhbHNlIDogdGhpcy5kaXJlY3RpdmVSZWYuc3dpcGVyKClbJ2lzRW5kJ107XHJcblx0fVxyXG5cclxuXHRnZXQgaXNBdEZpcnN0KCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuICghdGhpcy5kaXJlY3RpdmVSZWYgfHwgIXRoaXMuZGlyZWN0aXZlUmVmLnN3aXBlcigpKSA/XHJcblx0XHRcdGZhbHNlIDogdGhpcy5kaXJlY3RpdmVSZWYuc3dpcGVyKClbJ2lzQmVnaW5uaW5nJ107XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG1vOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGw7XHJcblx0cHVibGljIHN3aXBlckNvbmZpZzogYW55ID0gbnVsbDtcclxuXHRwdWJsaWMgcGFnaW5hdGlvbkJhY2t1cDogYW55ID0gbnVsbDtcclxuXHRwdWJsaWMgcGFnaW5hdGlvbkNvbmZpZzogYW55ID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcclxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoU1dJUEVSX0NPTkZJRykgcHJpdmF0ZSBkZWZhdWx0czogU3dpcGVyQ29uZmlnSW50ZXJmYWNlXHJcblx0KSB7IH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG5cdFx0aWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdHRoaXMudXBkYXRlQ2xhc3NlcygpO1xyXG5cdFx0XHRpZiAodGhpcy5zd2lwZXJTbGlkZXMgJiYgdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0dGhpcy5tbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ2xhc3NlcygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMubW8ub2JzZXJ2ZSh0aGlzLnN3aXBlclNsaWRlcy5uYXRpdmVFbGVtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmRpcmVjdGl2ZVJlZikge1xyXG5cdFx0XHRcdHRoaXMuaW5pdC5lbWl0KCk7XHJcblx0XHRcdFx0dGhpcy5kaXJlY3RpdmVSZWYuaW5kZXhDaGFuZ2UgPSB0aGlzLmluZGV4Q2hhbmdlO1xyXG5cdFx0XHRcdFN3aXBlckV2ZW50cy5mb3JFYWNoKChldmVudE5hbWU6IFN3aXBlckV2ZW50KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kaXJlY3RpdmVSZWYpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZGlyZWN0aXZlT3V0cHV0ID0gZXZlbnROYW1lIGFzIGtleW9mIFN3aXBlckRpcmVjdGl2ZTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgY29tcG9uZW50T3V0cHV0ID0gZXZlbnROYW1lIGFzIGtleW9mIFN3aXBlckNvbXBvbmVudDtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJlY3RpdmVSZWZbZGlyZWN0aXZlT3V0cHV0XSA9IHRoaXNbY29tcG9uZW50T3V0cHV0XSBhcyBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgMCk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLm1vKSB7XHJcblx0XHRcdHRoaXMubW8uZGlzY29ubmVjdCgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuY29uZmlnICYmIHRoaXMucGFnaW5hdGlvbkJhY2t1cCkge1xyXG5cdFx0XHR0aGlzLmNvbmZpZy5wYWdpbmF0aW9uID0gdGhpcy5wYWdpbmF0aW9uQmFja3VwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldENvbmZpZygpOiBTd2lwZXJDb25maWdJbnRlcmZhY2Uge1xyXG5cdFx0dGhpcy5zd2lwZXJDb25maWcgPSBuZXcgU3dpcGVyQ29uZmlnKHRoaXMuZGVmYXVsdHMpO1xyXG5cdFx0dGhpcy5zd2lwZXJDb25maWcuYXNzaWduKHRoaXMuY29uZmlnKTsgLy8gQ3VzdG9tIGNvbmZpZ3VyYXRpb25cclxuXHRcdGlmICh0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uID09PSB0cnVlIHx8XHJcblx0XHRcdCh0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uICYmIHR5cGVvZiB0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uID09PSAnb2JqZWN0JyAmJlxyXG5cdFx0XHRcdCghdGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbi50eXBlIHx8IHRoaXMuc3dpcGVyQ29uZmlnLnBhZ2luYXRpb24udHlwZSA9PT0gJ2J1bGxldHMnKSAmJlxyXG5cdFx0XHRcdCF0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uLnJlbmRlckJ1bGxldCAmJiB0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uLmVsID09PSAnLnN3aXBlci1wYWdpbmF0aW9uJykpIHtcclxuXHRcdFx0dGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZyB8fCB7fTtcclxuXHRcdFx0aWYgKCF0aGlzLnBhZ2luYXRpb25Db25maWcpIHtcclxuXHRcdFx0XHR0aGlzLnBhZ2luYXRpb25CYWNrdXAgPSB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uO1xyXG5cdFx0XHRcdHRoaXMucGFnaW5hdGlvbkNvbmZpZyA9IHtcclxuXHRcdFx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuXHRcdFx0XHRcdHJlbmRlckJ1bGxldDogKGluZGV4OiBudW1iZXIsIGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGNoaWxkcmVuID0gdGhpcy5zd2lwZXJTbGlkZXMgPyB0aGlzLnN3aXBlclNsaWRlcy5uYXRpdmVFbGVtZW50LmNoaWxkcmVuIDogW107XHJcblx0XHRcdFx0XHRcdGxldCBidWxsZXQgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX0gJHtjbGFzc05hbWV9LW1pZGRsZVwiIGluZGV4PVwiJHtpbmRleH1cIj48L3NwYW4+YDtcclxuXHRcdFx0XHRcdFx0aWYgKGluZGV4ID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0YnVsbGV0ID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9ICR7Y2xhc3NOYW1lfS1maXJzdFwiIGluZGV4PVwiJHtpbmRleH1cIj48L3NwYW4+YDtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gKGNoaWxkcmVuLmxlbmd0aCAtIDEpKSB7XHJcblx0XHRcdFx0XHRcdFx0YnVsbGV0ID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9ICR7Y2xhc3NOYW1lfS1sYXN0XCIgaW5kZXg9XCIke2luZGV4fVwiPjwvc3Bhbj5gO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJldHVybiBgPHNwYW4gY2xhc3M9XCJzd2lwZXItcGFnaW5hdGlvbi1oYW5kbGVcIiBpbmRleD1cIiR7aW5kZXh9XCI+JHtidWxsZXR9PC9zcGFuPmA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbiA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnLnBhZ2luYXRpb24gPSB0aGlzLnBhZ2luYXRpb25Db25maWc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jb25maWcucGFnaW5hdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlnLnBhZ2luYXRpb24sIHRoaXMucGFnaW5hdGlvbkNvbmZpZyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZyBhcyBTd2lwZXJDb25maWdJbnRlcmZhY2U7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHVwZGF0ZUNsYXNzZXMoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zd2lwZXJTbGlkZXMpIHtcclxuXHRcdFx0bGV0IHVwZGF0ZU5lZWRlZCA9IGZhbHNlO1xyXG5cdFx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMuc3dpcGVyU2xpZGVzLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW47XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoIWNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLXNsaWRlJykpIHtcclxuXHRcdFx0XHRcdHVwZGF0ZU5lZWRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRjaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItc2xpZGUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHVwZGF0ZU5lZWRlZCAmJiB0aGlzLmRpcmVjdGl2ZVJlZikge1xyXG5cdFx0XHRcdHRoaXMuZGlyZWN0aXZlUmVmLnVwZGF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvblBhZ2luYXRpb25DbGljayhpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5jb25maWcgJiYgdGhpcy5kaXJlY3RpdmVSZWYgJiYgKHRoaXMuY29uZmlnLnBhZ2luYXRpb24gPT09IHRydWUgfHxcclxuXHRcdFx0KHRoaXMuY29uZmlnLnBhZ2luYXRpb24gJiYgdHlwZW9mIHRoaXMuY29uZmlnLnBhZ2luYXRpb24gPT09ICdvYmplY3QnICYmXHJcblx0XHRcdFx0KCF0aGlzLmNvbmZpZy5wYWdpbmF0aW9uLnR5cGUgfHwgdGhpcy5jb25maWcucGFnaW5hdGlvbi50eXBlID09PSAnYnVsbGV0cycpICYmXHJcblx0XHRcdFx0KHRoaXMuY29uZmlnLnBhZ2luYXRpb24uY2xpY2thYmxlICYmIHRoaXMuY29uZmlnLnBhZ2luYXRpb24uZWwgPT09ICcuc3dpcGVyLXBhZ2luYXRpb24nKSkpKSB7XHJcblx0XHRcdHRoaXMuZGlyZWN0aXZlUmVmLnNldEluZGV4KGluZGV4KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==