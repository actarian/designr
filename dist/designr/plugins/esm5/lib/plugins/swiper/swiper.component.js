/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.updateClasses();
            if (_this.swiperSlides && typeof MutationObserver !== 'undefined') {
                _this.mo = new MutationObserver((/**
                 * @return {?}
                 */
                function () {
                    _this.updateClasses();
                }));
                _this.mo.observe(_this.swiperSlides.nativeElement, { childList: true });
            }
        }));
        window.setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.directiveRef) {
                _this.init.emit();
                _this.directiveRef.indexChange = _this.indexChange;
                SwiperEvents.forEach((/**
                 * @param {?} eventName
                 * @return {?}
                 */
                function (eventName) {
                    if (_this.directiveRef) {
                        /** @type {?} */
                        var directiveOutput = (/** @type {?} */ (eventName));
                        /** @type {?} */
                        var componentOutput = (/** @type {?} */ (eventName));
                        _this.directiveRef[directiveOutput] = (/** @type {?} */ (_this[componentOutput]));
                    }
                }));
            }
        }), 0);
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
                    renderBullet: (/**
                     * @param {?} index
                     * @param {?} className
                     * @return {?}
                     */
                    function (index, className) {
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
                    template: "<div #swiper class=\"s-wrapper\" [class.swiper]=\"useSwiperClass\" [class.swiper-container]=\"useSwiperClass\" [swiper]=\"getConfig()\" [index]=\"index\" [disabled]=\"disabled\" [performance]=\"performance\">\r\n\t<div #swiperSlides class=\"swiper-wrapper\">\r\n\t\t<ng-content></ng-content>\r\n\t</div>\r\n\t<div class=\"swiper-scrollbar\" [hidden]=\"!swiperConfig?.scrollbar || (swiperConfig?.scrollbar !== true && !!swiperConfig?.scrollbar?.el && swiperConfig?.scrollbar?.el !== '.swiper-scrollbar')\"></div>\r\n\t<div class=\"swiper-button-prev\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.prevEl && swiperConfig?.navigation?.prevEl !== '.swiper-button-prev')\" [attr.disabled]=\"isAtFirst ||\u00A0null\"></div>\r\n\t<div class=\"swiper-button-next\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.nextEl && swiperConfig?.navigation?.nextEl !== '.swiper-button-next')\" [attr.disabled]=\"isAtLast || null\"></div>\r\n\t<div class=\"swiper-pagination\" [hidden]=\"!swiperConfig?.pagination || (swiperConfig?.pagination !== true && !!swiperConfig?.pagination?.el && swiperConfig?.pagination?.el !== '.swiper-pagination')\" (click)=\"onPaginationClick($event.target.getAttribute('index'))\" (keyup.enter)=\"onPaginationClick($event.target.getAttribute('index'))\"></div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9zd2lwZXIvc3dpcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDck0sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQXNDLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVwSDtJQTBFQyx5QkFDUyxJQUFZLEVBQVUsS0FBd0IsRUFDekIsVUFBa0IsRUFDSixRQUErQjtRQUZsRSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDekIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNKLGFBQVEsR0FBUixRQUFRLENBQXVCO1FBakVsRSxVQUFLLEdBQWtCLElBQUksQ0FBQztRQUM1QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRTlCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLGlCQUFZLEdBQUcs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Z3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIE91dHB1dCwgUExBVEZPUk1fSUQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3dpcGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9zd2lwZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU3dpcGVyQ29uZmlnLCBTd2lwZXJDb25maWdJbnRlcmZhY2UsIFN3aXBlckV2ZW50LCBTd2lwZXJFdmVudHMsIFNXSVBFUl9DT05GSUcgfSBmcm9tICcuL3N3aXBlci5pbnRlcmZhY2VzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3dpcGVyJyxcclxuXHRleHBvcnRBczogJ25neFN3aXBlcicsXHJcblx0dGVtcGxhdGVVcmw6ICdzd2lwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG5cdC8vIHN0eWxlVXJsczogWyd+c3dpcGVyL2Rpc3QvY3NzL3N3aXBlci5taW4uY3NzJywgJ3N3aXBlci5jb21wb25lbnQuc2NzcyddLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIFN3aXBlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ3N3aXBlclNsaWRlcycpIHN3aXBlclNsaWRlcz86IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChTd2lwZXJEaXJlY3RpdmUpIGRpcmVjdGl2ZVJlZj86IFN3aXBlckRpcmVjdGl2ZTtcclxuXHJcblx0QElucHV0KCkgaW5kZXg6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cdEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblx0QElucHV0KCkgcGVyZm9ybWFuY2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRASW5wdXQoKSBjb25maWc/OiBTd2lwZXJDb25maWdJbnRlcmZhY2U7XHJcblx0QElucHV0KCkgdXNlU3dpcGVyQ2xhc3M6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuXHRAT3V0cHV0KCkgYXV0b3BsYXkgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgYXV0b3BsYXlTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBhdXRvcGxheVN0b3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgYmVmb3JlRGVzdHJveSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBiZWZvcmVSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgYnJlYWtwb2ludCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBkb3VibGVUYXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgZnJvbUVkZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgaW1hZ2VzUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgaW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHRAT3V0cHV0KCkgaW5pdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBrZXlQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBsYXp5SW1hZ2VMb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIGxhenlJbWFnZVJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHByb2dyZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHJlYWNoQmVnaW5uaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHJlYWNoRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2Nyb2xsRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzY3JvbGxEcmFnTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzY3JvbGxEcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2V0VHJhbnNpdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSBzZXRUcmFuc2xhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2xpZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNsaWRlTmV4dFRyYW5zaXRpb25FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2xpZGVOZXh0VHJhbnNpdGlvblN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNsaWRlUHJldlRyYW5zaXRpb25FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHNsaWRlck1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgdGFwID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHRvdWNoRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHRvdWNoTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSB0b3VjaE1vdmVPcHBvc2l0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdEBPdXRwdXQoKSB0b3VjaFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0QE91dHB1dCgpIHRyYW5zaXRpb25FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRAT3V0cHV0KCkgdHJhbnNpdGlvblN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG5cdGdldCBpc0F0TGFzdCgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAoIXRoaXMuZGlyZWN0aXZlUmVmIHx8ICF0aGlzLmRpcmVjdGl2ZVJlZi5zd2lwZXIoKSkgP1xyXG5cdFx0XHRmYWxzZSA6IHRoaXMuZGlyZWN0aXZlUmVmLnN3aXBlcigpWydpc0VuZCddO1xyXG5cdH1cclxuXHJcblx0Z2V0IGlzQXRGaXJzdCgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAoIXRoaXMuZGlyZWN0aXZlUmVmIHx8ICF0aGlzLmRpcmVjdGl2ZVJlZi5zd2lwZXIoKSkgP1xyXG5cdFx0XHRmYWxzZSA6IHRoaXMuZGlyZWN0aXZlUmVmLnN3aXBlcigpWydpc0JlZ2lubmluZyddO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtbzogTXV0YXRpb25PYnNlcnZlciB8IG51bGwgPSBudWxsO1xyXG5cdHB1YmxpYyBzd2lwZXJDb25maWc6IGFueSA9IG51bGw7XHJcblx0cHVibGljIHBhZ2luYXRpb25CYWNrdXA6IGFueSA9IG51bGw7XHJcblx0cHVibGljIHBhZ2luYXRpb25Db25maWc6IGFueSA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXHJcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KFNXSVBFUl9DT05GSUcpIHByaXZhdGUgZGVmYXVsdHM6IFN3aXBlckNvbmZpZ0ludGVyZmFjZVxyXG5cdCkgeyB9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuXHRcdGlmICghaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcclxuXHRcdFx0aWYgKHRoaXMuc3dpcGVyU2xpZGVzICYmIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHRoaXMubW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLm1vLm9ic2VydmUodGhpcy5zd2lwZXJTbGlkZXMubmF0aXZlRWxlbWVudCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5kaXJlY3RpdmVSZWYpIHtcclxuXHRcdFx0XHR0aGlzLmluaXQuZW1pdCgpO1xyXG5cdFx0XHRcdHRoaXMuZGlyZWN0aXZlUmVmLmluZGV4Q2hhbmdlID0gdGhpcy5pbmRleENoYW5nZTtcclxuXHRcdFx0XHRTd2lwZXJFdmVudHMuZm9yRWFjaCgoZXZlbnROYW1lOiBTd2lwZXJFdmVudCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZGlyZWN0aXZlUmVmKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRpcmVjdGl2ZU91dHB1dCA9IGV2ZW50TmFtZSBhcyBrZXlvZiBTd2lwZXJEaXJlY3RpdmU7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGNvbXBvbmVudE91dHB1dCA9IGV2ZW50TmFtZSBhcyBrZXlvZiBTd2lwZXJDb21wb25lbnQ7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlyZWN0aXZlUmVmW2RpcmVjdGl2ZU91dHB1dF0gPSB0aGlzW2NvbXBvbmVudE91dHB1dF0gYXMgRXZlbnRFbWl0dGVyPGFueT47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0sIDApO1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5tbykge1xyXG5cdFx0XHR0aGlzLm1vLmRpc2Nvbm5lY3QoKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLnBhZ2luYXRpb25CYWNrdXApIHtcclxuXHRcdFx0dGhpcy5jb25maWcucGFnaW5hdGlvbiA9IHRoaXMucGFnaW5hdGlvbkJhY2t1cDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRDb25maWcoKTogU3dpcGVyQ29uZmlnSW50ZXJmYWNlIHtcclxuXHRcdHRoaXMuc3dpcGVyQ29uZmlnID0gbmV3IFN3aXBlckNvbmZpZyh0aGlzLmRlZmF1bHRzKTtcclxuXHRcdHRoaXMuc3dpcGVyQ29uZmlnLmFzc2lnbih0aGlzLmNvbmZpZyk7IC8vIEN1c3RvbSBjb25maWd1cmF0aW9uXHJcblx0XHRpZiAodGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbiA9PT0gdHJ1ZSB8fFxyXG5cdFx0XHQodGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbiAmJiB0eXBlb2YgdGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbiA9PT0gJ29iamVjdCcgJiZcclxuXHRcdFx0XHQoIXRoaXMuc3dpcGVyQ29uZmlnLnBhZ2luYXRpb24udHlwZSB8fCB0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uLnR5cGUgPT09ICdidWxsZXRzJykgJiZcclxuXHRcdFx0XHQhdGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbi5yZW5kZXJCdWxsZXQgJiYgdGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbi5lbCA9PT0gJy5zd2lwZXItcGFnaW5hdGlvbicpKSB7XHJcblx0XHRcdHRoaXMuY29uZmlnID0gdGhpcy5jb25maWcgfHwge307XHJcblx0XHRcdGlmICghdGhpcy5wYWdpbmF0aW9uQ29uZmlnKSB7XHJcblx0XHRcdFx0dGhpcy5wYWdpbmF0aW9uQmFja3VwID0gdGhpcy5jb25maWcucGFnaW5hdGlvbjtcclxuXHRcdFx0XHR0aGlzLnBhZ2luYXRpb25Db25maWcgPSB7XHJcblx0XHRcdFx0XHRlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcblx0XHRcdFx0XHRyZW5kZXJCdWxsZXQ6IChpbmRleDogbnVtYmVyLCBjbGFzc05hbWU6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMuc3dpcGVyU2xpZGVzID8gdGhpcy5zd2lwZXJTbGlkZXMubmF0aXZlRWxlbWVudC5jaGlsZHJlbiA6IFtdO1xyXG5cdFx0XHRcdFx0XHRsZXQgYnVsbGV0ID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9ICR7Y2xhc3NOYW1lfS1taWRkbGVcIiBpbmRleD1cIiR7aW5kZXh9XCI+PC9zcGFuPmA7XHJcblx0XHRcdFx0XHRcdGlmIChpbmRleCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdGJ1bGxldCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfSAke2NsYXNzTmFtZX0tZmlyc3RcIiBpbmRleD1cIiR7aW5kZXh9XCI+PC9zcGFuPmA7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IChjaGlsZHJlbi5sZW5ndGggLSAxKSkge1xyXG5cdFx0XHRcdFx0XHRcdGJ1bGxldCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfSAke2NsYXNzTmFtZX0tbGFzdFwiIGluZGV4PVwiJHtpbmRleH1cIj48L3NwYW4+YDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gYDxzcGFuIGNsYXNzPVwic3dpcGVyLXBhZ2luYXRpb24taGFuZGxlXCIgaW5kZXg9XCIke2luZGV4fVwiPiR7YnVsbGV0fTwvc3Bhbj5gO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuc3dpcGVyQ29uZmlnLnBhZ2luYXRpb24gPT09IHRydWUpIHtcclxuXHRcdFx0XHR0aGlzLmNvbmZpZy5wYWdpbmF0aW9uID0gdGhpcy5wYWdpbmF0aW9uQ29uZmlnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnLnBhZ2luYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uLCB0aGlzLnBhZ2luYXRpb25Db25maWcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWcgYXMgU3dpcGVyQ29uZmlnSW50ZXJmYWNlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSB1cGRhdGVDbGFzc2VzKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuc3dpcGVyU2xpZGVzKSB7XHJcblx0XHRcdGxldCB1cGRhdGVOZWVkZWQgPSBmYWxzZTtcclxuXHRcdFx0Y29uc3QgY2hpbGRyZW4gPSB0aGlzLnN3aXBlclNsaWRlcy5uYXRpdmVFbGVtZW50LmNoaWxkcmVuO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKCFjaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1zbGlkZScpKSB7XHJcblx0XHRcdFx0XHR1cGRhdGVOZWVkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0Y2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgnc3dpcGVyLXNsaWRlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh1cGRhdGVOZWVkZWQgJiYgdGhpcy5kaXJlY3RpdmVSZWYpIHtcclxuXHRcdFx0XHR0aGlzLmRpcmVjdGl2ZVJlZi51cGRhdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25QYWdpbmF0aW9uQ2xpY2soaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuY29uZmlnICYmIHRoaXMuZGlyZWN0aXZlUmVmICYmICh0aGlzLmNvbmZpZy5wYWdpbmF0aW9uID09PSB0cnVlIHx8XHJcblx0XHRcdCh0aGlzLmNvbmZpZy5wYWdpbmF0aW9uICYmIHR5cGVvZiB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uID09PSAnb2JqZWN0JyAmJlxyXG5cdFx0XHRcdCghdGhpcy5jb25maWcucGFnaW5hdGlvbi50eXBlIHx8IHRoaXMuY29uZmlnLnBhZ2luYXRpb24udHlwZSA9PT0gJ2J1bGxldHMnKSAmJlxyXG5cdFx0XHRcdCh0aGlzLmNvbmZpZy5wYWdpbmF0aW9uLmNsaWNrYWJsZSAmJiB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uLmVsID09PSAnLnN3aXBlci1wYWdpbmF0aW9uJykpKSkge1xyXG5cdFx0XHR0aGlzLmRpcmVjdGl2ZVJlZi5zZXRJbmRleChpbmRleCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=