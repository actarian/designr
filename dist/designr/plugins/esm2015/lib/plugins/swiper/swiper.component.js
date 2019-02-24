/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.zone.runOutsideAngular(() => {
            this.updateClasses();
            if (this.swiperSlides && typeof MutationObserver !== 'undefined') {
                this.mo = new MutationObserver(() => {
                    this.updateClasses();
                });
                this.mo.observe(this.swiperSlides.nativeElement, { childList: true });
            }
        });
        window.setTimeout(() => {
            if (this.directiveRef) {
                this.init.emit();
                this.directiveRef.indexChange = this.indexChange;
                SwiperEvents.forEach((eventName) => {
                    if (this.directiveRef) {
                        /** @type {?} */
                        const directiveOutput = (/** @type {?} */ (eventName));
                        /** @type {?} */
                        const componentOutput = (/** @type {?} */ (eventName));
                        this.directiveRef[directiveOutput] = (/** @type {?} */ (this[componentOutput]));
                    }
                });
            }
        }, 0);
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
                    renderBullet: (index, className) => {
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
                template: "<div #swiper class=\"s-wrapper\" [class.swiper]=\"useSwiperClass\" [class.swiper-container]=\"useSwiperClass\" [swiper]=\"getConfig()\" [index]=\"index\" [disabled]=\"disabled\" [performance]=\"performance\">\n\t<div #swiperSlides class=\"swiper-wrapper\">\n\t\t<ng-content></ng-content>\n\t</div>\n\t<div class=\"swiper-scrollbar\" [hidden]=\"!swiperConfig?.scrollbar || (swiperConfig?.scrollbar !== true && !!swiperConfig?.scrollbar?.el && swiperConfig?.scrollbar?.el !== '.swiper-scrollbar')\"></div>\n\t<div class=\"swiper-button-prev\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.prevEl && swiperConfig?.navigation?.prevEl !== '.swiper-button-prev')\" [attr.disabled]=\"isAtFirst ||\u00A0null\"></div>\n\t<div class=\"swiper-button-next\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.nextEl && swiperConfig?.navigation?.nextEl !== '.swiper-button-next')\" [attr.disabled]=\"isAtLast || null\"></div>\n\t<div class=\"swiper-pagination\" [hidden]=\"!swiperConfig?.pagination || (swiperConfig?.pagination !== true && !!swiperConfig?.pagination?.el && swiperConfig?.pagination?.el !== '.swiper-pagination')\" (click)=\"onPaginationClick($event.target.getAttribute('index'))\" (keyup.enter)=\"onPaginationClick($event.target.getAttribute('index'))\"></div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9zd2lwZXIvc3dpcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDck0sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQXNDLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVNwSCxNQUFNLE9BQU8sZUFBZTs7Ozs7OztJQW1FM0IsWUFDUyxJQUFZLEVBQVUsS0FBd0IsRUFDekIsVUFBa0IsRUFDSixRQUErQjtRQUZsRSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDekIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNKLGFBQVEsR0FBUixRQUFRLENBQXVCO1FBakVsRSxVQUFLLEdBQWtCLElBQUksQ0FBQztRQUM1QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRTlCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxD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Q0FBcUM7O0lBQ3JDLG1DQUFtQzs7SUFDbkMsc0NBQXNDOztJQUN0QyxpQ0FBd0M7O0lBQ3hDLHlDQUF3Qzs7SUFFeEMsbUNBQTZDOztJQUM3Qyx3Q0FBa0Q7O0lBQ2xELHVDQUFpRDs7SUFDakQsd0NBQWtEOztJQUNsRCx1Q0FBaUQ7O0lBQ2pELHFDQUErQzs7SUFDL0MsZ0NBQTBDOztJQUMxQyxvQ0FBOEM7O0lBQzlDLG1DQUE2Qzs7SUFDN0Msc0NBQWdEOztJQUNoRCxzQ0FBbUQ7O0lBQ25ELCtCQUF5Qzs7SUFDekMsbUNBQTZDOztJQUM3Qyx3Q0FBa0Q7O0lBQ2xELHlDQUFtRDs7SUFDbkQsbUNBQTZDOztJQUM3Qyx5Q0FBbUQ7O0lBQ25ELG1DQUE2Qzs7SUFDN0MsaUNBQTJDOztJQUMzQyxpQ0FBMkM7O0lBQzNDLHdDQUFrRDs7SUFDbEQseUNBQW1EOztJQUNuRCwwQ0FBb0Q7O0lBQ3BELHdDQUFrRDs7SUFDbEQsdUNBQWlEOztJQUNqRCxzQ0FBZ0Q7O0lBQ2hELG1EQUE2RDs7SUFDN0QscURBQStEOztJQUMvRCxpREFBMkQ7O0lBQzNELG1EQUE2RDs7SUFDN0QsaURBQTJEOztJQUMzRCxtREFBNkQ7O0lBQzdELHFDQUErQzs7SUFDL0MsOEJBQXdDOztJQUN4QyxtQ0FBNkM7O0lBQzdDLG9DQUE4Qzs7SUFDOUMsNENBQXNEOztJQUN0RCxxQ0FBK0M7O0lBQy9DLHdDQUFrRDs7SUFDbEQsMENBQW9EOzs7OztJQVlwRCw2QkFBMkM7O0lBQzNDLHVDQUFnQzs7SUFDaEMsMkNBQW9DOztJQUNwQywyQ0FBb0M7Ozs7O0lBR25DLCtCQUFvQjs7Ozs7SUFBRSxnQ0FBZ0M7Ozs7O0lBQ3RELHFDQUErQzs7Ozs7SUFDL0MsbUNBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIE91dHB1dCwgUExBVEZPUk1fSUQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN3aXBlckRpcmVjdGl2ZSB9IGZyb20gJy4vc3dpcGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTd2lwZXJDb25maWcsIFN3aXBlckNvbmZpZ0ludGVyZmFjZSwgU3dpcGVyRXZlbnQsIFN3aXBlckV2ZW50cywgU1dJUEVSX0NPTkZJRyB9IGZyb20gJy4vc3dpcGVyLmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzd2lwZXInLFxuXHRleHBvcnRBczogJ25neFN3aXBlcicsXG5cdHRlbXBsYXRlVXJsOiAnc3dpcGVyLmNvbXBvbmVudC5odG1sJyxcblx0Ly8gc3R5bGVVcmxzOiBbJ35zd2lwZXIvZGlzdC9jc3Mvc3dpcGVyLm1pbi5jc3MnLCAnc3dpcGVyLmNvbXBvbmVudC5zY3NzJ10sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3dpcGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdzd2lwZXJTbGlkZXMnKSBzd2lwZXJTbGlkZXM/OiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFN3aXBlckRpcmVjdGl2ZSkgZGlyZWN0aXZlUmVmPzogU3dpcGVyRGlyZWN0aXZlO1xuXG5cdEBJbnB1dCgpIGluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcblx0QElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0QElucHV0KCkgcGVyZm9ybWFuY2U6IGJvb2xlYW4gPSBmYWxzZTtcblx0QElucHV0KCkgY29uZmlnPzogU3dpcGVyQ29uZmlnSW50ZXJmYWNlO1xuXHRASW5wdXQoKSB1c2VTd2lwZXJDbGFzczogYm9vbGVhbiA9IHRydWU7XG5cblx0QE91dHB1dCgpIGF1dG9wbGF5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBhdXRvcGxheVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBhdXRvcGxheVN0b3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGJlZm9yZURlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGJlZm9yZVJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgYnJlYWtwb2ludCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGRvdWJsZVRhcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgZnJvbUVkZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGltYWdlc1JlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBpbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXHRAT3V0cHV0KCkgaW5pdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkga2V5UHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGxhenlJbWFnZUxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGxhenlJbWFnZVJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBwcm9ncmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcmVhY2hCZWdpbm5pbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHJlYWNoRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSByZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2Nyb2xsRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2Nyb2xsRHJhZ01vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNjcm9sbERyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2V0VHJhbnNpdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2V0VHJhbnNsYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzbGlkZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVOZXh0VHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVOZXh0VHJhbnNpdGlvblN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzbGlkZVByZXZUcmFuc2l0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzbGlkZVByZXZUcmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlck1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRhcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgdG91Y2hFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRvdWNoTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgdG91Y2hNb3ZlT3Bwb3NpdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRvdWNoU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRyYW5zaXRpb25FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cdGdldCBpc0F0TGFzdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKCF0aGlzLmRpcmVjdGl2ZVJlZiB8fCAhdGhpcy5kaXJlY3RpdmVSZWYuc3dpcGVyKCkpID9cblx0XHRcdGZhbHNlIDogdGhpcy5kaXJlY3RpdmVSZWYuc3dpcGVyKClbJ2lzRW5kJ107XG5cdH1cblxuXHRnZXQgaXNBdEZpcnN0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAoIXRoaXMuZGlyZWN0aXZlUmVmIHx8ICF0aGlzLmRpcmVjdGl2ZVJlZi5zd2lwZXIoKSkgP1xuXHRcdFx0ZmFsc2UgOiB0aGlzLmRpcmVjdGl2ZVJlZi5zd2lwZXIoKVsnaXNCZWdpbm5pbmcnXTtcblx0fVxuXG5cdHByaXZhdGUgbW86IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsID0gbnVsbDtcblx0cHVibGljIHN3aXBlckNvbmZpZzogYW55ID0gbnVsbDtcblx0cHVibGljIHBhZ2luYXRpb25CYWNrdXA6IGFueSA9IG51bGw7XG5cdHB1YmxpYyBwYWdpbmF0aW9uQ29uZmlnOiBhbnkgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KFNXSVBFUl9DT05GSUcpIHByaXZhdGUgZGVmYXVsdHM6IFN3aXBlckNvbmZpZ0ludGVyZmFjZVxuXHQpIHsgfVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuXHRcdFx0aWYgKHRoaXMuc3dpcGVyU2xpZGVzICYmIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR0aGlzLm1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5tby5vYnNlcnZlKHRoaXMuc3dpcGVyU2xpZGVzLm5hdGl2ZUVsZW1lbnQsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGlmICh0aGlzLmRpcmVjdGl2ZVJlZikge1xuXHRcdFx0XHR0aGlzLmluaXQuZW1pdCgpO1xuXHRcdFx0XHR0aGlzLmRpcmVjdGl2ZVJlZi5pbmRleENoYW5nZSA9IHRoaXMuaW5kZXhDaGFuZ2U7XG5cdFx0XHRcdFN3aXBlckV2ZW50cy5mb3JFYWNoKChldmVudE5hbWU6IFN3aXBlckV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZGlyZWN0aXZlUmVmKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBkaXJlY3RpdmVPdXRwdXQgPSBldmVudE5hbWUgYXMga2V5b2YgU3dpcGVyRGlyZWN0aXZlO1xuXHRcdFx0XHRcdFx0Y29uc3QgY29tcG9uZW50T3V0cHV0ID0gZXZlbnROYW1lIGFzIGtleW9mIFN3aXBlckNvbXBvbmVudDtcblx0XHRcdFx0XHRcdHRoaXMuZGlyZWN0aXZlUmVmW2RpcmVjdGl2ZU91dHB1dF0gPSB0aGlzW2NvbXBvbmVudE91dHB1dF0gYXMgRXZlbnRFbWl0dGVyPGFueT47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LCAwKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm1vKSB7XG5cdFx0XHR0aGlzLm1vLmRpc2Nvbm5lY3QoKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY29uZmlnICYmIHRoaXMucGFnaW5hdGlvbkJhY2t1cCkge1xuXHRcdFx0dGhpcy5jb25maWcucGFnaW5hdGlvbiA9IHRoaXMucGFnaW5hdGlvbkJhY2t1cDtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0Q29uZmlnKCk6IFN3aXBlckNvbmZpZ0ludGVyZmFjZSB7XG5cdFx0dGhpcy5zd2lwZXJDb25maWcgPSBuZXcgU3dpcGVyQ29uZmlnKHRoaXMuZGVmYXVsdHMpO1xuXHRcdHRoaXMuc3dpcGVyQ29uZmlnLmFzc2lnbih0aGlzLmNvbmZpZyk7IC8vIEN1c3RvbSBjb25maWd1cmF0aW9uXG5cdFx0aWYgKHRoaXMuc3dpcGVyQ29uZmlnLnBhZ2luYXRpb24gPT09IHRydWUgfHxcblx0XHRcdCh0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uICYmIHR5cGVvZiB0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0XHQoIXRoaXMuc3dpcGVyQ29uZmlnLnBhZ2luYXRpb24udHlwZSB8fCB0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uLnR5cGUgPT09ICdidWxsZXRzJykgJiZcblx0XHRcdFx0IXRoaXMuc3dpcGVyQ29uZmlnLnBhZ2luYXRpb24ucmVuZGVyQnVsbGV0ICYmIHRoaXMuc3dpcGVyQ29uZmlnLnBhZ2luYXRpb24uZWwgPT09ICcuc3dpcGVyLXBhZ2luYXRpb24nKSkge1xuXHRcdFx0dGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZyB8fCB7fTtcblx0XHRcdGlmICghdGhpcy5wYWdpbmF0aW9uQ29uZmlnKSB7XG5cdFx0XHRcdHRoaXMucGFnaW5hdGlvbkJhY2t1cCA9IHRoaXMuY29uZmlnLnBhZ2luYXRpb247XG5cdFx0XHRcdHRoaXMucGFnaW5hdGlvbkNvbmZpZyA9IHtcblx0XHRcdFx0XHRlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG5cdFx0XHRcdFx0cmVuZGVyQnVsbGV0OiAoaW5kZXg6IG51bWJlciwgY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGNoaWxkcmVuID0gdGhpcy5zd2lwZXJTbGlkZXMgPyB0aGlzLnN3aXBlclNsaWRlcy5uYXRpdmVFbGVtZW50LmNoaWxkcmVuIDogW107XG5cdFx0XHRcdFx0XHRsZXQgYnVsbGV0ID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9ICR7Y2xhc3NOYW1lfS1taWRkbGVcIiBpbmRleD1cIiR7aW5kZXh9XCI+PC9zcGFuPmA7XG5cdFx0XHRcdFx0XHRpZiAoaW5kZXggPT09IDApIHtcblx0XHRcdFx0XHRcdFx0YnVsbGV0ID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9ICR7Y2xhc3NOYW1lfS1maXJzdFwiIGluZGV4PVwiJHtpbmRleH1cIj48L3NwYW4+YDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IChjaGlsZHJlbi5sZW5ndGggLSAxKSkge1xuXHRcdFx0XHRcdFx0XHRidWxsZXQgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX0gJHtjbGFzc05hbWV9LWxhc3RcIiBpbmRleD1cIiR7aW5kZXh9XCI+PC9zcGFuPmA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gYDxzcGFuIGNsYXNzPVwic3dpcGVyLXBhZ2luYXRpb24taGFuZGxlXCIgaW5kZXg9XCIke2luZGV4fVwiPiR7YnVsbGV0fTwvc3Bhbj5gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uID09PSB0cnVlKSB7XG5cdFx0XHRcdHRoaXMuY29uZmlnLnBhZ2luYXRpb24gPSB0aGlzLnBhZ2luYXRpb25Db25maWc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmNvbmZpZy5wYWdpbmF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb25maWcucGFnaW5hdGlvbiwgdGhpcy5wYWdpbmF0aW9uQ29uZmlnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnIGFzIFN3aXBlckNvbmZpZ0ludGVyZmFjZTtcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlQ2xhc3NlcygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zd2lwZXJTbGlkZXMpIHtcblx0XHRcdGxldCB1cGRhdGVOZWVkZWQgPSBmYWxzZTtcblx0XHRcdGNvbnN0IGNoaWxkcmVuID0gdGhpcy5zd2lwZXJTbGlkZXMubmF0aXZlRWxlbWVudC5jaGlsZHJlbjtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKCFjaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1zbGlkZScpKSB7XG5cdFx0XHRcdFx0dXBkYXRlTmVlZGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRjaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItc2xpZGUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHVwZGF0ZU5lZWRlZCAmJiB0aGlzLmRpcmVjdGl2ZVJlZikge1xuXHRcdFx0XHR0aGlzLmRpcmVjdGl2ZVJlZi51cGRhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRwdWJsaWMgb25QYWdpbmF0aW9uQ2xpY2soaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmRpcmVjdGl2ZVJlZiAmJiAodGhpcy5jb25maWcucGFnaW5hdGlvbiA9PT0gdHJ1ZSB8fFxuXHRcdFx0KHRoaXMuY29uZmlnLnBhZ2luYXRpb24gJiYgdHlwZW9mIHRoaXMuY29uZmlnLnBhZ2luYXRpb24gPT09ICdvYmplY3QnICYmXG5cdFx0XHRcdCghdGhpcy5jb25maWcucGFnaW5hdGlvbi50eXBlIHx8IHRoaXMuY29uZmlnLnBhZ2luYXRpb24udHlwZSA9PT0gJ2J1bGxldHMnKSAmJlxuXHRcdFx0XHQodGhpcy5jb25maWcucGFnaW5hdGlvbi5jbGlja2FibGUgJiYgdGhpcy5jb25maWcucGFnaW5hdGlvbi5lbCA9PT0gJy5zd2lwZXItcGFnaW5hdGlvbicpKSkpIHtcblx0XHRcdHRoaXMuZGlyZWN0aXZlUmVmLnNldEluZGV4KGluZGV4KTtcblx0XHR9XG5cdH1cblxufVxuIl19