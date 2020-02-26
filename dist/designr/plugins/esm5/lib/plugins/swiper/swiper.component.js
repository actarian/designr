import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperDirective } from './swiper.directive';
import { SwiperConfig, SwiperEvents, SWIPER_CONFIG } from './swiper.interfaces';
import * as i0 from "@angular/core";
import * as i1 from "./swiper.directive";
var _c0 = ["swiperSlides"];
var _c1 = ["*"];
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
        get: function () {
            return (!this.directiveRef || !this.directiveRef.swiper()) ?
                false : this.directiveRef.swiper()['isEnd'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComponent.prototype, "isAtFirst", {
        get: function () {
            return (!this.directiveRef || !this.directiveRef.swiper()) ?
                false : this.directiveRef.swiper()['isBeginning'];
        },
        enumerable: true,
        configurable: true
    });
    SwiperComponent.prototype.ngAfterViewInit = function () {
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
                        var directiveOutput = eventName;
                        var componentOutput = eventName;
                        _this.directiveRef[directiveOutput] = _this[componentOutput];
                    }
                });
            }
        }, 0);
    };
    SwiperComponent.prototype.ngOnDestroy = function () {
        if (this.mo) {
            this.mo.disconnect();
        }
        if (this.config && this.paginationBackup) {
            this.config.pagination = this.paginationBackup;
        }
    };
    SwiperComponent.prototype.getConfig = function () {
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
                        var children = _this.swiperSlides ? _this.swiperSlides.nativeElement.children : [];
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
        return this.config;
    };
    SwiperComponent.prototype.updateClasses = function () {
        if (this.swiperSlides) {
            var updateNeeded = false;
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
    SwiperComponent.prototype.onPaginationClick = function (index) {
        if (this.config && this.directiveRef && (this.config.pagination === true ||
            (this.config.pagination && typeof this.config.pagination === 'object' &&
                (!this.config.pagination.type || this.config.pagination.type === 'bullets') &&
                (this.config.pagination.clickable && this.config.pagination.el === '.swiper-pagination')))) {
            this.directiveRef.setIndex(index);
        }
    };
    SwiperComponent.ɵfac = function SwiperComponent_Factory(t) { return new (t || SwiperComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(SWIPER_CONFIG, 8)); };
    SwiperComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SwiperComponent, selectors: [["swiper"]], viewQuery: function SwiperComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
            i0.ɵɵstaticViewQuery(SwiperDirective, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.swiperSlides = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.directiveRef = _t.first);
        } }, inputs: { index: "index", disabled: "disabled", performance: "performance", config: "config", useSwiperClass: "useSwiperClass" }, outputs: { autoplay: "autoplay", autoplayStart: "autoplayStart", autoplayStop: "autoplayStop", beforeDestroy: "beforeDestroy", beforeResize: "beforeResize", breakpoint: "breakpoint", click: "click", doubleTap: "doubleTap", fromEdge: "fromEdge", imagesReady: "imagesReady", indexChange: "indexChange", init: "init", keyPress: "keyPress", lazyImageLoad: "lazyImageLoad", lazyImageReady: "lazyImageReady", progress: "progress", reachBeginning: "reachBeginning", reachEnd: "reachEnd", resize: "resize", scroll: "scroll", scrollDragEnd: "scrollDragEnd", scrollDragMove: "scrollDragMove", scrollDragStart: "scrollDragStart", setTransition: "setTransition", setTranslate: "setTranslate", slideChange: "slideChange", slideChangeTransitionEnd: "slideChangeTransitionEnd", slideChangeTransitionStart: "slideChangeTransitionStart", slideNextTransitionEnd: "slideNextTransitionEnd", slideNextTransitionStart: "slideNextTransitionStart", slidePrevTransitionEnd: "slidePrevTransitionEnd", slidePrevTransitionStart: "slidePrevTransitionStart", sliderMove: "sliderMove", tap: "tap", touchEnd: "touchEnd", touchMove: "touchMove", touchMoveOpposite: "touchMoveOpposite", touchStart: "touchStart", transitionEnd: "transitionEnd", transitionStart: "transitionStart" }, exportAs: ["ngxSwiper"], ngContentSelectors: _c1, decls: 9, vars: 14, consts: [[1, "s-wrapper", 3, "swiper", "index", "disabled", "performance"], ["swiper", ""], [1, "swiper-wrapper"], ["swiperSlides", ""], [1, "swiper-scrollbar", 3, "hidden"], [1, "swiper-button-prev", 3, "hidden"], [1, "swiper-button-next", 3, "hidden"], [1, "swiper-pagination", 3, "hidden", "click", "keyup.enter"]], template: function SwiperComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵelementStart(2, "div", 2, 3);
            i0.ɵɵprojection(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "div", 4);
            i0.ɵɵelement(6, "div", 5);
            i0.ɵɵelement(7, "div", 6);
            i0.ɵɵelementStart(8, "div", 7);
            i0.ɵɵlistener("click", function SwiperComponent_Template_div_click_8_listener($event) { return ctx.onPaginationClick($event.target.getAttribute("index")); })("keyup.enter", function SwiperComponent_Template_div_keyup_enter_8_listener($event) { return ctx.onPaginationClick($event.target.getAttribute("index")); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("swiper", ctx.useSwiperClass)("swiper-container", ctx.useSwiperClass);
            i0.ɵɵproperty("swiper", ctx.getConfig())("index", ctx.index)("disabled", ctx.disabled)("performance", ctx.performance);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar == null ? null : ctx.swiperConfig.scrollbar.el) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar == null ? null : ctx.swiperConfig.scrollbar.el) !== ".swiper-scrollbar");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.prevEl) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.prevEl) !== ".swiper-button-prev");
            i0.ɵɵattribute("disabled", ctx.isAtFirst || null);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.nextEl) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.nextEl) !== ".swiper-button-next");
            i0.ɵɵattribute("disabled", ctx.isAtLast || null);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination == null ? null : ctx.swiperConfig.pagination.el) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination == null ? null : ctx.swiperConfig.pagination.el) !== ".swiper-pagination");
        } }, directives: [i1.SwiperDirective], encapsulation: 2 });
    return SwiperComponent;
}());
export { SwiperComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SwiperComponent, [{
        type: Component,
        args: [{
                selector: 'swiper',
                exportAs: 'ngxSwiper',
                templateUrl: 'swiper.component.html',
                // styleUrls: ['~swiper/dist/css/swiper.min.css', 'swiper.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [SWIPER_CONFIG]
            }] }]; }, { swiperSlides: [{
            type: ViewChild,
            args: ['swiperSlides', { static: true }]
        }], directiveRef: [{
            type: ViewChild,
            args: [SwiperDirective, { static: true }]
        }], index: [{
            type: Input
        }], disabled: [{
            type: Input
        }], performance: [{
            type: Input
        }], config: [{
            type: Input
        }], useSwiperClass: [{
            type: Input
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9zd2lwZXIvc3dpcGVyLmNvbXBvbmVudC50cyIsImxpYi9wbHVnaW5zL3N3aXBlci9zd2lwZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDck0sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQXNDLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFFcEg7SUEwRUMseUJBQ1MsSUFBWSxFQUFVLEtBQXdCLEVBQ3pCLFVBQWtCLEVBQ0osUUFBK0I7UUFGbEUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3pCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDSixhQUFRLEdBQVIsUUFBUSxDQUF1QjtRQWpFbEUsVUFBSyxHQUFrQixJQUFJLENBQUM7UUFDNUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixtQkFBYyxHQUFZLElBQUksQ0FBQztRQUU5QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZDLGtCQUFh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QUFNLEVBQUUsSUFBSSxFQUFFOztrQkFDMUMsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFFM0MsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBPdXRwdXQsIFBMQVRGT1JNX0lELCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTd2lwZXJEaXJlY3RpdmUgfSBmcm9tICcuL3N3aXBlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3dpcGVyQ29uZmlnLCBTd2lwZXJDb25maWdJbnRlcmZhY2UsIFN3aXBlckV2ZW50LCBTd2lwZXJFdmVudHMsIFNXSVBFUl9DT05GSUcgfSBmcm9tICcuL3N3aXBlci5pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3dpcGVyJyxcblx0ZXhwb3J0QXM6ICduZ3hTd2lwZXInLFxuXHR0ZW1wbGF0ZVVybDogJ3N3aXBlci5jb21wb25lbnQuaHRtbCcsXG5cdC8vIHN0eWxlVXJsczogWyd+c3dpcGVyL2Rpc3QvY3NzL3N3aXBlci5taW4uY3NzJywgJ3N3aXBlci5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN3aXBlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnc3dpcGVyU2xpZGVzJywgeyBzdGF0aWM6IHRydWUgfSkgc3dpcGVyU2xpZGVzPzogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChTd2lwZXJEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIGRpcmVjdGl2ZVJlZj86IFN3aXBlckRpcmVjdGl2ZTtcblxuXHRASW5wdXQoKSBpbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cdEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIHBlcmZvcm1hbmNlOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIGNvbmZpZz86IFN3aXBlckNvbmZpZ0ludGVyZmFjZTtcblx0QElucHV0KCkgdXNlU3dpcGVyQ2xhc3M6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdEBPdXRwdXQoKSBhdXRvcGxheSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgYXV0b3BsYXlTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgYXV0b3BsYXlTdG9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBiZWZvcmVEZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBiZWZvcmVSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGJyZWFrcG9pbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBkb3VibGVUYXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGZyb21FZGdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBpbWFnZXNSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgaW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblx0QE91dHB1dCgpIGluaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIGtleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBsYXp5SW1hZ2VMb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBsYXp5SW1hZ2VSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHJlYWNoQmVnaW5uaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSByZWFjaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNjcm9sbERyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNjcm9sbERyYWdNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzY3JvbGxEcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNldFRyYW5zaXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNldFRyYW5zbGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlTmV4dFRyYW5zaXRpb25FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHNsaWRlTmV4dFRyYW5zaXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVQcmV2VHJhbnNpdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBzbGlkZXJNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0YXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRvdWNoRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0b3VjaE1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0QE91dHB1dCgpIHRvdWNoTW92ZU9wcG9zaXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0b3VjaFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0cmFuc2l0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSB0cmFuc2l0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRnZXQgaXNBdExhc3QoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICghdGhpcy5kaXJlY3RpdmVSZWYgfHwgIXRoaXMuZGlyZWN0aXZlUmVmLnN3aXBlcigpKSA/XG5cdFx0XHRmYWxzZSA6IHRoaXMuZGlyZWN0aXZlUmVmLnN3aXBlcigpWydpc0VuZCddO1xuXHR9XG5cblx0Z2V0IGlzQXRGaXJzdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKCF0aGlzLmRpcmVjdGl2ZVJlZiB8fCAhdGhpcy5kaXJlY3RpdmVSZWYuc3dpcGVyKCkpID9cblx0XHRcdGZhbHNlIDogdGhpcy5kaXJlY3RpdmVSZWYuc3dpcGVyKClbJ2lzQmVnaW5uaW5nJ107XG5cdH1cblxuXHRwcml2YXRlIG1vOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGw7XG5cdHB1YmxpYyBzd2lwZXJDb25maWc6IGFueSA9IG51bGw7XG5cdHB1YmxpYyBwYWdpbmF0aW9uQmFja3VwOiBhbnkgPSBudWxsO1xuXHRwdWJsaWMgcGFnaW5hdGlvbkNvbmZpZzogYW55ID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdChTV0lQRVJfQ09ORklHKSBwcml2YXRlIGRlZmF1bHRzOiBTd2lwZXJDb25maWdJbnRlcmZhY2Vcblx0KSB7IH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cdFx0aWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHR0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcblx0XHRcdGlmICh0aGlzLnN3aXBlclNsaWRlcyAmJiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0dGhpcy5tbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMubW8ub2JzZXJ2ZSh0aGlzLnN3aXBlclNsaWRlcy5uYXRpdmVFbGVtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5kaXJlY3RpdmVSZWYpIHtcblx0XHRcdFx0dGhpcy5pbml0LmVtaXQoKTtcblx0XHRcdFx0dGhpcy5kaXJlY3RpdmVSZWYuaW5kZXhDaGFuZ2UgPSB0aGlzLmluZGV4Q2hhbmdlO1xuXHRcdFx0XHRTd2lwZXJFdmVudHMuZm9yRWFjaCgoZXZlbnROYW1lOiBTd2lwZXJFdmVudCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmRpcmVjdGl2ZVJlZikge1xuXHRcdFx0XHRcdFx0Y29uc3QgZGlyZWN0aXZlT3V0cHV0ID0gZXZlbnROYW1lIGFzIGtleW9mIFN3aXBlckRpcmVjdGl2ZTtcblx0XHRcdFx0XHRcdGNvbnN0IGNvbXBvbmVudE91dHB1dCA9IGV2ZW50TmFtZSBhcyBrZXlvZiBTd2lwZXJDb21wb25lbnQ7XG5cdFx0XHRcdFx0XHQodGhpcy5kaXJlY3RpdmVSZWYgYXMgYW55KVtkaXJlY3RpdmVPdXRwdXRdID0gdGhpc1tjb21wb25lbnRPdXRwdXRdIGFzIEV2ZW50RW1pdHRlcjxhbnk+O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSwgMCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5tbykge1xuXHRcdFx0dGhpcy5tby5kaXNjb25uZWN0KCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLnBhZ2luYXRpb25CYWNrdXApIHtcblx0XHRcdHRoaXMuY29uZmlnLnBhZ2luYXRpb24gPSB0aGlzLnBhZ2luYXRpb25CYWNrdXA7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldENvbmZpZygpOiBTd2lwZXJDb25maWdJbnRlcmZhY2Uge1xuXHRcdHRoaXMuc3dpcGVyQ29uZmlnID0gbmV3IFN3aXBlckNvbmZpZyh0aGlzLmRlZmF1bHRzKTtcblx0XHR0aGlzLnN3aXBlckNvbmZpZy5hc3NpZ24odGhpcy5jb25maWcpOyAvLyBDdXN0b20gY29uZmlndXJhdGlvblxuXHRcdGlmICh0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uID09PSB0cnVlIHx8XG5cdFx0XHQodGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbiAmJiB0eXBlb2YgdGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbiA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0KCF0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uLnR5cGUgfHwgdGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbi50eXBlID09PSAnYnVsbGV0cycpICYmXG5cdFx0XHRcdCF0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uLnJlbmRlckJ1bGxldCAmJiB0aGlzLnN3aXBlckNvbmZpZy5wYWdpbmF0aW9uLmVsID09PSAnLnN3aXBlci1wYWdpbmF0aW9uJykpIHtcblx0XHRcdHRoaXMuY29uZmlnID0gdGhpcy5jb25maWcgfHwge307XG5cdFx0XHRpZiAoIXRoaXMucGFnaW5hdGlvbkNvbmZpZykge1xuXHRcdFx0XHR0aGlzLnBhZ2luYXRpb25CYWNrdXAgPSB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uO1xuXHRcdFx0XHR0aGlzLnBhZ2luYXRpb25Db25maWcgPSB7XG5cdFx0XHRcdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuXHRcdFx0XHRcdHJlbmRlckJ1bGxldDogKGluZGV4OiBudW1iZXIsIGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMuc3dpcGVyU2xpZGVzID8gdGhpcy5zd2lwZXJTbGlkZXMubmF0aXZlRWxlbWVudC5jaGlsZHJlbiA6IFtdO1xuXHRcdFx0XHRcdFx0bGV0IGJ1bGxldCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfSAke2NsYXNzTmFtZX0tbWlkZGxlXCIgaW5kZXg9XCIke2luZGV4fVwiPjwvc3Bhbj5gO1xuXHRcdFx0XHRcdFx0aWYgKGluZGV4ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGJ1bGxldCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfSAke2NsYXNzTmFtZX0tZmlyc3RcIiBpbmRleD1cIiR7aW5kZXh9XCI+PC9zcGFuPmA7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSAoY2hpbGRyZW4ubGVuZ3RoIC0gMSkpIHtcblx0XHRcdFx0XHRcdFx0YnVsbGV0ID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9ICR7Y2xhc3NOYW1lfS1sYXN0XCIgaW5kZXg9XCIke2luZGV4fVwiPjwvc3Bhbj5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIGA8c3BhbiBjbGFzcz1cInN3aXBlci1wYWdpbmF0aW9uLWhhbmRsZVwiIGluZGV4PVwiJHtpbmRleH1cIj4ke2J1bGxldH08L3NwYW4+YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zd2lwZXJDb25maWcucGFnaW5hdGlvbiA9PT0gdHJ1ZSkge1xuXHRcdFx0XHR0aGlzLmNvbmZpZy5wYWdpbmF0aW9uID0gdGhpcy5wYWdpbmF0aW9uQ29uZmlnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jb25maWcucGFnaW5hdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlnLnBhZ2luYXRpb24sIHRoaXMucGFnaW5hdGlvbkNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmNvbmZpZyBhcyBTd2lwZXJDb25maWdJbnRlcmZhY2U7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZUNsYXNzZXMoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3dpcGVyU2xpZGVzKSB7XG5cdFx0XHRsZXQgdXBkYXRlTmVlZGVkID0gZmFsc2U7XG5cdFx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMuc3dpcGVyU2xpZGVzLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW47XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICghY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItc2xpZGUnKSkge1xuXHRcdFx0XHRcdHVwZGF0ZU5lZWRlZCA9IHRydWU7XG5cdFx0XHRcdFx0Y2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgnc3dpcGVyLXNsaWRlJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh1cGRhdGVOZWVkZWQgJiYgdGhpcy5kaXJlY3RpdmVSZWYpIHtcblx0XHRcdFx0dGhpcy5kaXJlY3RpdmVSZWYudXBkYXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHVibGljIG9uUGFnaW5hdGlvbkNsaWNrKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jb25maWcgJiYgdGhpcy5kaXJlY3RpdmVSZWYgJiYgKHRoaXMuY29uZmlnLnBhZ2luYXRpb24gPT09IHRydWUgfHxcblx0XHRcdCh0aGlzLmNvbmZpZy5wYWdpbmF0aW9uICYmIHR5cGVvZiB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0XHQoIXRoaXMuY29uZmlnLnBhZ2luYXRpb24udHlwZSB8fCB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uLnR5cGUgPT09ICdidWxsZXRzJykgJiZcblx0XHRcdFx0KHRoaXMuY29uZmlnLnBhZ2luYXRpb24uY2xpY2thYmxlICYmIHRoaXMuY29uZmlnLnBhZ2luYXRpb24uZWwgPT09ICcuc3dpcGVyLXBhZ2luYXRpb24nKSkpKSB7XG5cdFx0XHR0aGlzLmRpcmVjdGl2ZVJlZi5zZXRJbmRleChpbmRleCk7XG5cdFx0fVxuXHR9XG5cbn1cbiIsIjxkaXYgI3N3aXBlciBjbGFzcz1cInMtd3JhcHBlclwiIFtjbGFzcy5zd2lwZXJdPVwidXNlU3dpcGVyQ2xhc3NcIiBbY2xhc3Muc3dpcGVyLWNvbnRhaW5lcl09XCJ1c2VTd2lwZXJDbGFzc1wiIFtzd2lwZXJdPVwiZ2V0Q29uZmlnKClcIiBbaW5kZXhdPVwiaW5kZXhcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbcGVyZm9ybWFuY2VdPVwicGVyZm9ybWFuY2VcIj5cblx0PGRpdiAjc3dpcGVyU2xpZGVzIGNsYXNzPVwic3dpcGVyLXdyYXBwZXJcIj5cblx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwic3dpcGVyLXNjcm9sbGJhclwiIFtoaWRkZW5dPVwiIXN3aXBlckNvbmZpZz8uc2Nyb2xsYmFyIHx8IChzd2lwZXJDb25maWc/LnNjcm9sbGJhciAhPT0gdHJ1ZSAmJiAhIXN3aXBlckNvbmZpZz8uc2Nyb2xsYmFyPy5lbCAmJiBzd2lwZXJDb25maWc/LnNjcm9sbGJhcj8uZWwgIT09ICcuc3dpcGVyLXNjcm9sbGJhcicpXCI+PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJzd2lwZXItYnV0dG9uLXByZXZcIiBbaGlkZGVuXT1cIiFzd2lwZXJDb25maWc/Lm5hdmlnYXRpb24gfHwgKHN3aXBlckNvbmZpZz8ubmF2aWdhdGlvbiAhPT0gdHJ1ZSAmJiAhIXN3aXBlckNvbmZpZz8ubmF2aWdhdGlvbj8ucHJldkVsICYmIHN3aXBlckNvbmZpZz8ubmF2aWdhdGlvbj8ucHJldkVsICE9PSAnLnN3aXBlci1idXR0b24tcHJldicpXCIgW2F0dHIuZGlzYWJsZWRdPVwiaXNBdEZpcnN0IHx8wqBudWxsXCI+PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJzd2lwZXItYnV0dG9uLW5leHRcIiBbaGlkZGVuXT1cIiFzd2lwZXJDb25maWc/Lm5hdmlnYXRpb24gfHwgKHN3aXBlckNvbmZpZz8ubmF2aWdhdGlvbiAhPT0gdHJ1ZSAmJiAhIXN3aXBlckNvbmZpZz8ubmF2aWdhdGlvbj8ubmV4dEVsICYmIHN3aXBlckNvbmZpZz8ubmF2aWdhdGlvbj8ubmV4dEVsICE9PSAnLnN3aXBlci1idXR0b24tbmV4dCcpXCIgW2F0dHIuZGlzYWJsZWRdPVwiaXNBdExhc3QgfHwgbnVsbFwiPjwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwic3dpcGVyLXBhZ2luYXRpb25cIiBbaGlkZGVuXT1cIiFzd2lwZXJDb25maWc/LnBhZ2luYXRpb24gfHwgKHN3aXBlckNvbmZpZz8ucGFnaW5hdGlvbiAhPT0gdHJ1ZSAmJiAhIXN3aXBlckNvbmZpZz8ucGFnaW5hdGlvbj8uZWwgJiYgc3dpcGVyQ29uZmlnPy5wYWdpbmF0aW9uPy5lbCAhPT0gJy5zd2lwZXItcGFnaW5hdGlvbicpXCIgKGNsaWNrKT1cIm9uUGFnaW5hdGlvbkNsaWNrKCRldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbmRleCcpKVwiIChrZXl1cC5lbnRlcik9XCJvblBhZ2luYXRpb25DbGljaygkZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW5kZXgnKSlcIj48L2Rpdj5cbjwvZGl2PlxuIl19