/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var SWIPER_CONFIG = new InjectionToken('SWIPER_CONFIG');
/** @type {?} */
export var SwiperEvents = [
    'init',
    'beforeDestroy',
    'scroll',
    'progress',
    'keyPress',
    'beforeResize',
    'afterResize',
    'resize',
    'breakpoint',
    'beforeResize',
    'sliderMove',
    'slideChange',
    'setTranslate',
    'setTransition',
    'fromEdge',
    'reachEnd',
    'reachBeginning',
    'autoplay',
    'autoplayStop',
    'autoplayStart',
    'imagesReady',
    'lazyImageLoad',
    'lazyImageReady',
    'scrollDragEnd',
    'scrollDragMove',
    'scrollDragStart',
    'swiperTap',
    'swiperClick',
    'swiperDoubleTap',
    'swiperTouchEnd',
    'swiperTouchMove',
    'swiperTouchStart',
    'swiperTouchMoveOpposite',
    'swiperTransitionEnd',
    'swiperTransitionStart',
    'slideNextTransitionEnd',
    'slideNextTransitionStart',
    'slidePrevTransitionEnd',
    'slidePrevTransitionStart',
    'slideChangeTransitionEnd',
    'slideChangeTransitionStart'
];
/**
 * @record
 */
export function SwiperConfigInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.init;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.initialSlide;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.direction;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.speed;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.setWrapperSize;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.virtualTranslate;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.width;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.height;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.autoHeight;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.roundLengths;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.nested;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.uniqueNavElements;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.effect;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.runCallbacksOnInit;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.watchOverflow;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.spaceBetween;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slidesPerView;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slidesPerColumn;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slidesPerColumnFill;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slidesPerGroup;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.centeredSlides;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slidesOffsetBefore;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slidesOffsetAfter;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.normalizeSlideIndex;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.centerInsufficientSlides;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.grabCursor;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.touchEventsTarget;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.touchRatio;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.touchAngle;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.simulateTouch;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.shortSwipes;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.longSwipes;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.longSwipesRatio;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.longSwipesMs;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.followFinger;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.allowTouchMove;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.threshold;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.touchMoveStopPropagation;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.iOSEdgeSwipeDetection;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.iOSEdgeSwipeThreshold;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.touchReleaseOnEdges;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.passiveListeners;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.resistance;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.resistanceRatio;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.preventInteractionOnTransition;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.allowSlidePrev;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.allowSlideNext;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.noSwiping;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.noSwipingClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.noSwipingSelector;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.swipeHandler;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.preventClicks;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.preventClicksPropagation;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideToClickedSlide;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeMode;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeModeMomentum;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeModeMomentumRatio;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeModeMomentumVelocityRatio;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeModeMomentumBounce;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeModeMomentumBounceRatio;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeModeMinimumVelocity;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeModeSticky;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.watchSlidesProgress;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.watchSlidesVisibility;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.preloadImages;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.updateOnImagesReady;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.loop;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.loopAdditionalSlides;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.loopedSlides;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.loopFillGroupWithBlank;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.breakpoints;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.breakpointsInverse;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.observer;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.observeParents;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.containerModifierClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideActiveClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideDuplicatedActiveClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideVisibleClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideDuplicateClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideNextClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideDuplicatedNextClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slidePrevClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideDuplicatedPrevClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.wrapperClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.fadeEffect;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.flipEffect;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.cubeEffect;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.coverflowEffect;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.parallax;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.a11y;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.lazy;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.zoom;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.thumbs;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.history;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.virtual;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.autoplay;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.keyboard;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.scrollbar;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.mousewheel;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.controller;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.navigation;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.pagination;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.hashNavigation;
}
/**
 * @record
 */
export function SwiperA11YInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperA11YInterface.prototype.prevSlideMessage;
    /** @type {?|undefined} */
    SwiperA11YInterface.prototype.nextSlideMessage;
    /** @type {?|undefined} */
    SwiperA11YInterface.prototype.firstSlideMessage;
    /** @type {?|undefined} */
    SwiperA11YInterface.prototype.lastSlideMessage;
    /** @type {?|undefined} */
    SwiperA11YInterface.prototype.paginationBulletMessage;
    /** @type {?|undefined} */
    SwiperA11YInterface.prototype.notificationClass;
}
/**
 * @record
 */
export function SwiperLazyInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperLazyInterface.prototype.loadPrevNext;
    /** @type {?|undefined} */
    SwiperLazyInterface.prototype.loadPrevNextAmount;
    /** @type {?|undefined} */
    SwiperLazyInterface.prototype.loadOnTransitionStart;
    /** @type {?|undefined} */
    SwiperLazyInterface.prototype.elementClass;
    /** @type {?|undefined} */
    SwiperLazyInterface.prototype.loadingClass;
    /** @type {?|undefined} */
    SwiperLazyInterface.prototype.loadedClass;
    /** @type {?|undefined} */
    SwiperLazyInterface.prototype.preloaderClass;
}
/**
 * @record
 */
export function SwiperZoomInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperZoomInterface.prototype.maxRatio;
    /** @type {?|undefined} */
    SwiperZoomInterface.prototype.minRatio;
    /** @type {?|undefined} */
    SwiperZoomInterface.prototype.toggle;
    /** @type {?|undefined} */
    SwiperZoomInterface.prototype.containerClass;
    /** @type {?|undefined} */
    SwiperZoomInterface.prototype.zoomedSlideClass;
}
/**
 * @record
 */
export function SwiperThumbsInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperThumbsInterface.prototype.swiper;
    /** @type {?|undefined} */
    SwiperThumbsInterface.prototype.slideThumbActiveClass;
    /** @type {?|undefined} */
    SwiperThumbsInterface.prototype.thumbsContainerClass;
}
/**
 * @record
 */
export function SwiperHistoryInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperHistoryInterface.prototype.replaceState;
    /** @type {?|undefined} */
    SwiperHistoryInterface.prototype.key;
}
/**
 * @record
 */
export function SwiperVirtualInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperVirtualInterface.prototype.slides;
    /** @type {?|undefined} */
    SwiperVirtualInterface.prototype.cache;
    /** @type {?|undefined} */
    SwiperVirtualInterface.prototype.addSliderBefore;
    /** @type {?|undefined} */
    SwiperVirtualInterface.prototype.addSliderAfter;
    /** @type {?|undefined} */
    SwiperVirtualInterface.prototype.renderSlide;
    /** @type {?|undefined} */
    SwiperVirtualInterface.prototype.renderExternal;
}
/**
 * @record
 */
export function SwiperKeyboardInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperKeyboardInterface.prototype.enabled;
    /** @type {?|undefined} */
    SwiperKeyboardInterface.prototype.onlyInViewport;
}
/**
 * @record
 */
export function SwiperAutoplayInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperAutoplayInterface.prototype.delay;
    /** @type {?|undefined} */
    SwiperAutoplayInterface.prototype.stopOnLastSlide;
    /** @type {?|undefined} */
    SwiperAutoplayInterface.prototype.disableOnInteraction;
    /** @type {?|undefined} */
    SwiperAutoplayInterface.prototype.reverseDirection;
    /** @type {?|undefined} */
    SwiperAutoplayInterface.prototype.waitForTransition;
}
/**
 * @record
 */
export function SwiperScrollbarInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperScrollbarInterface.prototype.el;
    /** @type {?|undefined} */
    SwiperScrollbarInterface.prototype.hide;
    /** @type {?|undefined} */
    SwiperScrollbarInterface.prototype.draggable;
    /** @type {?|undefined} */
    SwiperScrollbarInterface.prototype.snapOnRelease;
    /** @type {?|undefined} */
    SwiperScrollbarInterface.prototype.dragSize;
}
/**
 * @record
 */
export function SwiperControllerInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperControllerInterface.prototype.control;
    /** @type {?|undefined} */
    SwiperControllerInterface.prototype.inverse;
    /** @type {?|undefined} */
    SwiperControllerInterface.prototype.by;
}
/**
 * @record
 */
export function SwiperNavigationInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperNavigationInterface.prototype.nextEl;
    /** @type {?|undefined} */
    SwiperNavigationInterface.prototype.prevEl;
    /** @type {?|undefined} */
    SwiperNavigationInterface.prototype.hideOnClick;
    /** @type {?|undefined} */
    SwiperNavigationInterface.prototype.disabledClass;
    /** @type {?|undefined} */
    SwiperNavigationInterface.prototype.hiddenClass;
}
/**
 * @record
 */
export function SwiperPaginationInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.el;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.type;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.bulletElement;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.dynamicBullets;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.dynamicMainBullets;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.hideOnClick;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.clickable;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.renderBullet;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.renderFraction;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.renderProgressbar;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.renderCustom;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.bulletClass;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.bulletActiveClass;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.modifierClass;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.currentClass;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.totalClass;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.hiddenClass;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.progressbarFillClass;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.clickableClass;
}
/**
 * @record
 */
export function SwiperMousewheelInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperMousewheelInterface.prototype.forceToAxis;
    /** @type {?|undefined} */
    SwiperMousewheelInterface.prototype.releaseOnEdges;
    /** @type {?|undefined} */
    SwiperMousewheelInterface.prototype.invert;
    /** @type {?|undefined} */
    SwiperMousewheelInterface.prototype.sensitivity;
    /** @type {?|undefined} */
    SwiperMousewheelInterface.prototype.eventsTarget;
}
/**
 * @record
 */
export function SwiperHashNavigationInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperHashNavigationInterface.prototype.watchState;
    /** @type {?|undefined} */
    SwiperHashNavigationInterface.prototype.replaceState;
}
/**
 * @record
 */
export function SwiperFadeEffectInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperFadeEffectInterface.prototype.crossFade;
}
/**
 * @record
 */
export function SwiperFlipEffectInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperFlipEffectInterface.prototype.limitRotation;
    /** @type {?|undefined} */
    SwiperFlipEffectInterface.prototype.slideShadows;
}
/**
 * @record
 */
export function SwiperCubeEffectInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperCubeEffectInterface.prototype.shadow;
    /** @type {?|undefined} */
    SwiperCubeEffectInterface.prototype.shadowScale;
    /** @type {?|undefined} */
    SwiperCubeEffectInterface.prototype.shadowOffset;
    /** @type {?|undefined} */
    SwiperCubeEffectInterface.prototype.slideShadows;
}
/**
 * @record
 */
export function SwiperCoverflowEffectInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperCoverflowEffectInterface.prototype.depth;
    /** @type {?|undefined} */
    SwiperCoverflowEffectInterface.prototype.rotate;
    /** @type {?|undefined} */
    SwiperCoverflowEffectInterface.prototype.stretch;
    /** @type {?|undefined} */
    SwiperCoverflowEffectInterface.prototype.modifier;
    /** @type {?|undefined} */
    SwiperCoverflowEffectInterface.prototype.slideShadows;
}
/**
 * @record
 */
export function SwiperBreakpointsInterface() { }
var SwiperConfig = /** @class */ (function () {
    function SwiperConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @param {?=} target
     * @return {?}
     */
    SwiperConfig.prototype.assign = /**
     * @param {?=} config
     * @param {?=} target
     * @return {?}
     */
    function (config, target) {
        if (config === void 0) { config = {}; }
        target = target || this;
        for (var key in config) {
            if (config[key] != null && !Array.isArray(config[key]) && typeof config[key] === 'object' &&
                (typeof HTMLElement === 'undefined' || !(config[key] instanceof HTMLElement))) {
                target[key] = {};
                this.assign(config[key], target[key]);
            }
            else {
                target[key] = config[key];
            }
        }
    };
    return SwiperConfig;
}());
export { SwiperConfig };
if (false) {
    /** @type {?} */
    SwiperConfig.prototype.on;
    /** @type {?} */
    SwiperConfig.prototype.init;
    /** @type {?} */
    SwiperConfig.prototype.initialSlide;
    /** @type {?} */
    SwiperConfig.prototype.direction;
    /** @type {?} */
    SwiperConfig.prototype.speed;
    /** @type {?} */
    SwiperConfig.prototype.setWrapperSize;
    /** @type {?} */
    SwiperConfig.prototype.virtualTranslate;
    /** @type {?} */
    SwiperConfig.prototype.width;
    /** @type {?} */
    SwiperConfig.prototype.height;
    /** @type {?} */
    SwiperConfig.prototype.autoHeight;
    /** @type {?} */
    SwiperConfig.prototype.roundLengths;
    /** @type {?} */
    SwiperConfig.prototype.nested;
    /** @type {?} */
    SwiperConfig.prototype.uniqueNavElements;
    /** @type {?} */
    SwiperConfig.prototype.effect;
    /** @type {?} */
    SwiperConfig.prototype.runCallbacksOnInit;
    /** @type {?} */
    SwiperConfig.prototype.watchOverflow;
    /** @type {?} */
    SwiperConfig.prototype.spaceBetween;
    /** @type {?} */
    SwiperConfig.prototype.slidesPerView;
    /** @type {?} */
    SwiperConfig.prototype.slidesPerColumn;
    /** @type {?} */
    SwiperConfig.prototype.slidesPerColumnFill;
    /** @type {?} */
    SwiperConfig.prototype.slidesPerGroup;
    /** @type {?} */
    SwiperConfig.prototype.centeredSlides;
    /** @type {?} */
    SwiperConfig.prototype.slidesOffsetBefore;
    /** @type {?} */
    SwiperConfig.prototype.slidesOffsetAfter;
    /** @type {?} */
    SwiperConfig.prototype.normalizeSlideIndex;
    /** @type {?} */
    SwiperConfig.prototype.centerInsufficientSlides;
    /** @type {?} */
    SwiperConfig.prototype.grabCursor;
    /** @type {?} */
    SwiperConfig.prototype.touchEventsTarget;
    /** @type {?} */
    SwiperConfig.prototype.touchRatio;
    /** @type {?} */
    SwiperConfig.prototype.touchAngle;
    /** @type {?} */
    SwiperConfig.prototype.simulateTouch;
    /** @type {?} */
    SwiperConfig.prototype.shortSwipes;
    /** @type {?} */
    SwiperConfig.prototype.longSwipes;
    /** @type {?} */
    SwiperConfig.prototype.longSwipesRatio;
    /** @type {?} */
    SwiperConfig.prototype.longSwipesMs;
    /** @type {?} */
    SwiperConfig.prototype.followFinger;
    /** @type {?} */
    SwiperConfig.prototype.allowTouchMove;
    /** @type {?} */
    SwiperConfig.prototype.threshold;
    /** @type {?} */
    SwiperConfig.prototype.touchMoveStopPropagation;
    /** @type {?} */
    SwiperConfig.prototype.iOSEdgeSwipeDetection;
    /** @type {?} */
    SwiperConfig.prototype.iOSEdgeSwipeThreshold;
    /** @type {?} */
    SwiperConfig.prototype.touchReleaseOnEdges;
    /** @type {?} */
    SwiperConfig.prototype.passiveListeners;
    /** @type {?} */
    SwiperConfig.prototype.resistance;
    /** @type {?} */
    SwiperConfig.prototype.resistanceRatio;
    /** @type {?} */
    SwiperConfig.prototype.preventInteractionOnTransition;
    /** @type {?} */
    SwiperConfig.prototype.allowSlidePrev;
    /** @type {?} */
    SwiperConfig.prototype.allowSlideNext;
    /** @type {?} */
    SwiperConfig.prototype.noSwiping;
    /** @type {?} */
    SwiperConfig.prototype.noSwipingClass;
    /** @type {?} */
    SwiperConfig.prototype.noSwipingSelector;
    /** @type {?} */
    SwiperConfig.prototype.swipeHandler;
    /** @type {?} */
    SwiperConfig.prototype.preventClicks;
    /** @type {?} */
    SwiperConfig.prototype.preventClicksPropagation;
    /** @type {?} */
    SwiperConfig.prototype.slideToClickedSlide;
    /** @type {?} */
    SwiperConfig.prototype.freeMode;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentum;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentumRatio;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentumVelocityRatio;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentumBounce;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentumBounceRatio;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMinimumVelocity;
    /** @type {?} */
    SwiperConfig.prototype.freeModeSticky;
    /** @type {?} */
    SwiperConfig.prototype.watchSlidesProgress;
    /** @type {?} */
    SwiperConfig.prototype.watchSlidesVisibility;
    /** @type {?} */
    SwiperConfig.prototype.preloadImages;
    /** @type {?} */
    SwiperConfig.prototype.updateOnImagesReady;
    /** @type {?} */
    SwiperConfig.prototype.loop;
    /** @type {?} */
    SwiperConfig.prototype.loopAdditionalSlides;
    /** @type {?} */
    SwiperConfig.prototype.loopedSlides;
    /** @type {?} */
    SwiperConfig.prototype.loopFillGroupWithBlank;
    /** @type {?} */
    SwiperConfig.prototype.breakpoints;
    /** @type {?} */
    SwiperConfig.prototype.breakpointsInverse;
    /** @type {?} */
    SwiperConfig.prototype.observer;
    /** @type {?} */
    SwiperConfig.prototype.observeParents;
    /** @type {?} */
    SwiperConfig.prototype.containerModifierClass;
    /** @type {?} */
    SwiperConfig.prototype.slideClass;
    /** @type {?} */
    SwiperConfig.prototype.slideActiveClass;
    /** @type {?} */
    SwiperConfig.prototype.slideDuplicatedActiveClass;
    /** @type {?} */
    SwiperConfig.prototype.slideVisibleClass;
    /** @type {?} */
    SwiperConfig.prototype.slideDuplicateClass;
    /** @type {?} */
    SwiperConfig.prototype.slideNextClass;
    /** @type {?} */
    SwiperConfig.prototype.slideDuplicatedNextClass;
    /** @type {?} */
    SwiperConfig.prototype.slidePrevClass;
    /** @type {?} */
    SwiperConfig.prototype.slideDuplicatedPrevClass;
    /** @type {?} */
    SwiperConfig.prototype.wrapperClass;
    /** @type {?} */
    SwiperConfig.prototype.fadeEffect;
    /** @type {?} */
    SwiperConfig.prototype.flipEffect;
    /** @type {?} */
    SwiperConfig.prototype.cubeEffect;
    /** @type {?} */
    SwiperConfig.prototype.coverflowEffect;
    /** @type {?} */
    SwiperConfig.prototype.parallax;
    /** @type {?} */
    SwiperConfig.prototype.a11y;
    /** @type {?} */
    SwiperConfig.prototype.lazy;
    /** @type {?} */
    SwiperConfig.prototype.zoom;
    /** @type {?} */
    SwiperConfig.prototype.history;
    /** @type {?} */
    SwiperConfig.prototype.virtual;
    /** @type {?} */
    SwiperConfig.prototype.autoplay;
    /** @type {?} */
    SwiperConfig.prototype.keyboard;
    /** @type {?} */
    SwiperConfig.prototype.scrollbar;
    /** @type {?} */
    SwiperConfig.prototype.mousewheel;
    /** @type {?} */
    SwiperConfig.prototype.controller;
    /** @type {?} */
    SwiperConfig.prototype.navigation;
    /** @type {?} */
    SwiperConfig.prototype.pagination;
    /** @type {?} */
    SwiperConfig.prototype.hashNavigation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvc3dpcGVyL3N3aXBlci5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUvQyxNQUFNLEtBQU8sYUFBYSxHQUFHLElBQUksY0FBYyxDQUF3QixlQUFlLENBQUM7O0FBWXZGLE1BQU0sS0FBTyxZQUFZLEdBQWtCO0lBQzFDLE1BQU07SUFDTixlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYixRQUFRO0lBQ1IsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsVUFBVTtJQUNWLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQiw0QkFBNEI7Q0FDNUI7Ozs7QUFFRCwyQ0F3SUM7OztJQXRJQSxxQ0FBZTs7SUFDZiw2Q0FBc0I7O0lBQ3RCLDBDQUFtQjs7SUFDbkIsc0NBQWU7O0lBQ2YsK0NBQXlCOztJQUN6QixpREFBMkI7O0lBQzNCLHNDQUFlOztJQUNmLHVDQUFnQjs7SUFDaEIsMkNBQXFCOztJQUNyQiw2Q0FBdUI7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QUFxQzs7SUFDckMsb0NBQTZCOztJQUM3Qiw4Q0FBd0M7O0lBR3hDLG1DQUF5Qjs7SUFDekIsMENBQW9DOztJQUdwQyxnQ0FBMEI7O0lBQzFCLHNDQUFnQzs7SUFHaEMsOENBQXVDOztJQUN2QyxrQ0FBMkI7O0lBQzNCLHdDQUFpQzs7SUFDakMsa0RBQTJDOztJQUMzQyx5Q0FBa0M7O0lBQ2xDLDJDQUFvQzs7SUFDcEMsc0NBQStCOztJQUMvQixnREFBeUM7O0lBQ3pDLHNDQUErQjs7SUFDL0IsZ0RBQXlDOztJQUN6QyxvQ0FBNkI7O0lBRzdCLGtDQUF3Qjs7SUFDeEIsa0NBQXdCOztJQUN4QixrQ0FBd0I7O0lBQ3hCLHVDQUE2Qjs7SUFHN0IsZ0NBQTBCOztJQUMxQiw0QkFBNEI7O0lBQzVCLDRCQUE0Qjs7SUFDNUIsNEJBQTRCOztJQUM1QiwrQkFBK0I7O0lBQy9CLCtCQUErQjs7SUFDL0IsZ0NBQWdDOztJQUNoQyxnQ0FBZ0M7O0lBQ2hDLGlDQUFpQzs7SUFDakMsa0NBQWtDOztJQUNsQyxrQ0FBa0M7O0lBQ2xDLGtDQUFrQzs7SUFDbEMsa0NBQWtDOztJQUNsQyxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNXSVBFUl9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48U3dpcGVyQ29uZmlnSW50ZXJmYWNlPignU1dJUEVSX0NPTkZJRycpO1xyXG5cclxuZXhwb3J0IHR5cGUgU3dpcGVyRXZlbnQgPSAnaW5pdCcgfCAnYmVmb3JlRGVzdHJveScgfCAnc2Nyb2xsJyB8ICdwcm9ncmVzcycgfCAna2V5UHJlc3MnIHxcclxuXHQnYmVmb3JlUmVzaXplJyB8ICdhZnRlclJlc2l6ZScgfCAncmVzaXplJyB8ICdicmVha3BvaW50JyB8ICdiZWZvcmVSZXNpemUnIHwgJ3NsaWRlck1vdmUnIHxcclxuXHQnc2xpZGVDaGFuZ2UnIHwgJ3NldFRyYW5zbGF0ZScgfCAnc2V0VHJhbnNpdGlvbicgfCAnZnJvbUVkZ2UnIHwgJ3JlYWNoRW5kJyB8ICdyZWFjaEJlZ2lubmluZycgfFxyXG5cdCdhdXRvcGxheScgfCAnYXV0b3BsYXlTdG9wJyB8ICdhdXRvcGxheVN0YXJ0JyB8ICdpbWFnZXNSZWFkeScgfCAnbGF6eUltYWdlTG9hZCcgfFxyXG5cdCdsYXp5SW1hZ2VSZWFkeScgfCAnc2Nyb2xsRHJhZ0VuZCcgfCAnc2Nyb2xsRHJhZ01vdmUnIHwgJ3Njcm9sbERyYWdTdGFydCcgfCAnc3dpcGVyVGFwJyB8XHJcblx0J3N3aXBlckNsaWNrJyB8ICdzd2lwZXJEb3VibGVUYXAnIHwgJ3N3aXBlclRvdWNoRW5kJyB8ICdzd2lwZXJUb3VjaE1vdmUnIHwgJ3N3aXBlclRvdWNoU3RhcnQnIHxcclxuXHQnc3dpcGVyVG91Y2hNb3ZlT3Bwb3NpdGUnIHwgJ3N3aXBlclRyYW5zaXRpb25FbmQnIHwgJ3N3aXBlclRyYW5zaXRpb25TdGFydCcgfFxyXG5cdCdzbGlkZU5leHRUcmFuc2l0aW9uRW5kJyB8ICdzbGlkZU5leHRUcmFuc2l0aW9uU3RhcnQnIHwgJ3NsaWRlUHJldlRyYW5zaXRpb25FbmQnIHxcclxuXHQnc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0JyB8ICdzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnIHwgJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTd2lwZXJFdmVudHM6IFN3aXBlckV2ZW50W10gPSBbXHJcblx0J2luaXQnLFxyXG5cdCdiZWZvcmVEZXN0cm95JyxcclxuXHQnc2Nyb2xsJyxcclxuXHQncHJvZ3Jlc3MnLFxyXG5cdCdrZXlQcmVzcycsXHJcblx0J2JlZm9yZVJlc2l6ZScsXHJcblx0J2FmdGVyUmVzaXplJyxcclxuXHQncmVzaXplJyxcclxuXHQnYnJlYWtwb2ludCcsXHJcblx0J2JlZm9yZVJlc2l6ZScsXHJcblx0J3NsaWRlck1vdmUnLFxyXG5cdCdzbGlkZUNoYW5nZScsXHJcblx0J3NldFRyYW5zbGF0ZScsXHJcblx0J3NldFRyYW5zaXRpb24nLFxyXG5cdCdmcm9tRWRnZScsXHJcblx0J3JlYWNoRW5kJyxcclxuXHQncmVhY2hCZWdpbm5pbmcnLFxyXG5cdCdhdXRvcGxheScsXHJcblx0J2F1dG9wbGF5U3RvcCcsXHJcblx0J2F1dG9wbGF5U3RhcnQnLFxyXG5cdCdpbWFnZXNSZWFkeScsXHJcblx0J2xhenlJbWFnZUxvYWQnLFxyXG5cdCdsYXp5SW1hZ2VSZWFkeScsXHJcblx0J3Njcm9sbERyYWdFbmQnLFxyXG5cdCdzY3JvbGxEcmFnTW92ZScsXHJcblx0J3Njcm9sbERyYWdTdGFydCcsXHJcblx0J3N3aXBlclRhcCcsXHJcblx0J3N3aXBlckNsaWNrJyxcclxuXHQnc3dpcGVyRG91YmxlVGFwJyxcclxuXHQnc3dpcGVyVG91Y2hFbmQnLFxyXG5cdCdzd2lwZXJUb3VjaE1vdmUnLFxyXG5cdCdzd2lwZXJUb3VjaFN0YXJ0JyxcclxuXHQnc3dpcGVyVG91Y2hNb3ZlT3Bwb3NpdGUnLFxyXG5cdCdzd2lwZXJUcmFuc2l0aW9uRW5kJyxcclxuXHQnc3dpcGVyVHJhbnNpdGlvblN0YXJ0JyxcclxuXHQnc2xpZGVOZXh0VHJhbnNpdGlvbkVuZCcsXHJcblx0J3NsaWRlTmV4dFRyYW5zaXRpb25TdGFydCcsXHJcblx0J3NsaWRlUHJldlRyYW5zaXRpb25FbmQnLFxyXG5cdCdzbGlkZVByZXZUcmFuc2l0aW9uU3RhcnQnLFxyXG5cdCdzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnLFxyXG5cdCdzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydCdcclxuXTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpcGVyQ29uZmlnSW50ZXJmYWNlIHtcclxuXHQvLyBTd2lwZXIgcGFyYW1ldGVyc1xyXG5cdGluaXQ/OiBib29sZWFuO1xyXG5cdGluaXRpYWxTbGlkZT86IG51bWJlcjtcclxuXHRkaXJlY3Rpb24/OiBzdHJpbmc7XHJcblx0c3BlZWQ/OiBudW1iZXI7XHJcblx0c2V0V3JhcHBlclNpemU/OiBib29sZWFuO1xyXG5cdHZpcnR1YWxUcmFuc2xhdGU/OiBib29sZWFuO1xyXG5cdHdpZHRoPzogbnVtYmVyO1xyXG5cdGhlaWdodD86IG51bWJlcjtcclxuXHRhdXRvSGVpZ2h0PzogYm9vbGVhbjtcclxuXHRyb3VuZExlbmd0aHM/OiBib29sZWFuO1xyXG5cdG5lc3RlZD86IGJvb2xlYW47XHJcblx0dW5pcXVlTmF2RWxlbWVudHM/OiBib29sZWFuO1xyXG5cdGVmZmVjdD86IHN0cmluZztcclxuXHRydW5DYWxsYmFja3NPbkluaXQ/OiBib29sZWFuO1xyXG5cdHdhdGNoT3ZlcmZsb3c/OiBib29sZWFuO1xyXG5cclxuXHQvLyBTbGlkZXMgZ3JpZFxyXG5cdHNwYWNlQmV0d2Vlbj86IG51bWJlcjtcclxuXHRzbGlkZXNQZXJWaWV3PzogbnVtYmVyIHwgJ2F1dG8nO1xyXG5cdHNsaWRlc1BlckNvbHVtbj86IG51bWJlcjtcclxuXHRzbGlkZXNQZXJDb2x1bW5GaWxsPzogc3RyaW5nO1xyXG5cdHNsaWRlc1Blckdyb3VwPzogbnVtYmVyO1xyXG5cdGNlbnRlcmVkU2xpZGVzPzogYm9vbGVhbjtcclxuXHRzbGlkZXNPZmZzZXRCZWZvcmU/OiBudW1iZXI7XHJcblx0c2xpZGVzT2Zmc2V0QWZ0ZXI/OiBudW1iZXI7XHJcblx0bm9ybWFsaXplU2xpZGVJbmRleD86IGJvb2xlYW47XHJcblx0Y2VudGVySW5zdWZmaWNpZW50U2xpZGVzPzogYm9vbGVhbjtcclxuXHJcblx0Ly8gR3JhYiBjdXJzb3JcclxuXHRncmFiQ3Vyc29yPzogYm9vbGVhbjtcclxuXHJcblx0Ly8gVG91Y2hlc1xyXG5cdHRvdWNoRXZlbnRzVGFyZ2V0Pzogc3RyaW5nO1xyXG5cdHRvdWNoUmF0aW8/OiBudW1iZXI7XHJcblx0dG91Y2hBbmdsZT86IG51bWJlcjtcclxuXHRzaW11bGF0ZVRvdWNoPzogYm9vbGVhbjtcclxuXHRzaG9ydFN3aXBlcz86IGJvb2xlYW47XHJcblx0bG9uZ1N3aXBlcz86IGJvb2xlYW47XHJcblx0bG9uZ1N3aXBlc1JhdGlvPzogbnVtYmVyO1xyXG5cdGxvbmdTd2lwZXNNcz86IG51bWJlcjtcclxuXHRmb2xsb3dGaW5nZXI/OiBib29sZWFuO1xyXG5cdGFsbG93VG91Y2hNb3ZlPzogYm9vbGVhbjtcclxuXHR0aHJlc2hvbGQ/OiBudW1iZXI7XHJcblx0dG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uPzogYm9vbGVhbjtcclxuXHRpT1NFZGdlU3dpcGVEZXRlY3Rpb24/OiBib29sZWFuO1xyXG5cdGlPU0VkZ2VTd2lwZVRocmVzaG9sZD86IG51bWJlcjtcclxuXHR0b3VjaFJlbGVhc2VPbkVkZ2VzPzogYm9vbGVhbjtcclxuXHRwYXNzaXZlTGlzdGVuZXJzPzogYm9vbGVhbjtcclxuXHJcblx0Ly8gVG91Y2ggcmVzaXN0YW5jZVxyXG5cdHJlc2lzdGFuY2U/OiBib29sZWFuO1xyXG5cdHJlc2lzdGFuY2VSYXRpbz86IG51bWJlcjtcclxuXHJcblx0Ly8gU3dpcGluZyAvIG5vIHN3aXBpbmdcclxuXHRwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24/OiBib29sZWFuO1xyXG5cdGFsbG93U2xpZGVQcmV2PzogYm9vbGVhbjtcclxuXHRhbGxvd1NsaWRlTmV4dD86IGJvb2xlYW47XHJcblx0bm9Td2lwaW5nPzogYm9vbGVhbjtcclxuXHRub1N3aXBpbmdDbGFzcz86IHN0cmluZztcclxuXHRub1N3aXBpbmdTZWxlY3Rvcj86IHN0cmluZztcclxuXHRzd2lwZUhhbmRsZXI/OiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcclxuXHJcblx0Ly8gQ2xpY2tzXHJcblx0cHJldmVudENsaWNrcz86IGJvb2xlYW47XHJcblx0cHJldmVudENsaWNrc1Byb3BhZ2F0aW9uPzogYm9vbGVhbjtcclxuXHRzbGlkZVRvQ2xpY2tlZFNsaWRlPzogYm9vbGVhbjtcclxuXHJcblx0Ly8gRnJlZW1vZGVcclxuXHRmcmVlTW9kZT86IGJvb2xlYW47XHJcblx0ZnJlZU1vZGVNb21lbnR1bT86IGJvb2xlYW47XHJcblx0ZnJlZU1vZGVNb21lbnR1bVJhdGlvPzogbnVtYmVyO1xyXG5cdGZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvPzogbnVtYmVyO1xyXG5cdGZyZWVNb2RlTW9tZW50dW1Cb3VuY2U/OiBib29sZWFuO1xyXG5cdGZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbz86IG51bWJlcjtcclxuXHRmcmVlTW9kZU1pbmltdW1WZWxvY2l0eT86IG51bWJlcjtcclxuXHRmcmVlTW9kZVN0aWNreT86IGJvb2xlYW47XHJcblxyXG5cdC8vIFByb2dyZXNzXHJcblx0d2F0Y2hTbGlkZXNQcm9ncmVzcz86IGJvb2xlYW47XHJcblx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5PzogYm9vbGVhbjtcclxuXHJcblx0Ly8gSW1hZ2VzXHJcblx0cHJlbG9hZEltYWdlcz86IGJvb2xlYW47XHJcblx0dXBkYXRlT25JbWFnZXNSZWFkeT86IGJvb2xlYW47XHJcblxyXG5cdC8vIExvb3BcclxuXHRsb29wPzogYm9vbGVhbjtcclxuXHRsb29wQWRkaXRpb25hbFNsaWRlcz86IG51bWJlcjtcclxuXHRsb29wZWRTbGlkZXM/OiBudW1iZXI7XHJcblx0bG9vcEZpbGxHcm91cFdpdGhCbGFuaz86IGJvb2xlYW47XHJcblxyXG5cdC8vIEJyZWFrcG9pbnRzXHJcblx0YnJlYWtwb2ludHM/OiBTd2lwZXJCcmVha3BvaW50c0ludGVyZmFjZTtcclxuXHRicmVha3BvaW50c0ludmVyc2U/OiBib29sZWFuO1xyXG5cclxuXHQvLyBPYnNlcnZlclxyXG5cdG9ic2VydmVyPzogYm9vbGVhbjtcclxuXHRvYnNlcnZlUGFyZW50cz86IGJvb2xlYW47XHJcblxyXG5cdC8vIE5hbWVzcGFjZVxyXG5cdGNvbnRhaW5lck1vZGlmaWVyQ2xhc3M/OiBzdHJpbmc7XHJcblx0c2xpZGVDbGFzcz86IHN0cmluZztcclxuXHRzbGlkZUFjdGl2ZUNsYXNzPzogc3RyaW5nO1xyXG5cdHNsaWRlRHVwbGljYXRlZEFjdGl2ZUNsYXNzPzogc3RyaW5nO1xyXG5cdHNsaWRlVmlzaWJsZUNsYXNzPzogc3RyaW5nO1xyXG5cdHNsaWRlRHVwbGljYXRlQ2xhc3M/OiBzdHJpbmc7XHJcblx0c2xpZGVOZXh0Q2xhc3M/OiBzdHJpbmc7XHJcblx0c2xpZGVEdXBsaWNhdGVkTmV4dENsYXNzPzogc3RyaW5nO1xyXG5cdHNsaWRlUHJldkNsYXNzPzogc3RyaW5nO1xyXG5cdHNsaWRlRHVwbGljYXRlZFByZXZDbGFzcz86IHN0cmluZztcclxuXHR3cmFwcGVyQ2xhc3M/OiBzdHJpbmc7XHJcblxyXG5cdC8vIEVmZmVjdHNcclxuXHRmYWRlRWZmZWN0PzogU3dpcGVyRmFkZUVmZmVjdEludGVyZmFjZTtcclxuXHRmbGlwRWZmZWN0PzogU3dpcGVyRmxpcEVmZmVjdEludGVyZmFjZTtcclxuXHRjdWJlRWZmZWN0PzogU3dpcGVyQ3ViZUVmZmVjdEludGVyZmFjZTtcclxuXHRjb3ZlcmZsb3dFZmZlY3Q/OiBTd2lwZXJDb3ZlcmZsb3dFZmZlY3RJbnRlcmZhY2U7XHJcblxyXG5cdC8vIENvbXBvbmVudHNcclxuXHRwYXJhbGxheD86IGJvb2xlYW47XHJcblx0YTExeT86IGJvb2xlYW4gfCBTd2lwZXJBMTFZSW50ZXJmYWNlO1xyXG5cdGxhenk/OiBib29sZWFuIHwgU3dpcGVyTGF6eUludGVyZmFjZTtcclxuXHR6b29tPzogYm9vbGVhbiB8IFN3aXBlclpvb21JbnRlcmZhY2U7XHJcblx0dGh1bWJzPzogYm9vbGVhbiB8IFN3aXBlclRodW1ic0ludGVyZmFjZTtcclxuXHRoaXN0b3J5PzogYm9vbGVhbiB8IFN3aXBlckhpc3RvcnlJbnRlcmZhY2U7XHJcblx0dmlydHVhbD86IGJvb2xlYW4gfCBTd2lwZXJWaXJ0dWFsSW50ZXJmYWNlO1xyXG5cdGF1dG9wbGF5PzogYm9vbGVhbiB8IFN3aXBlckF1dG9wbGF5SW50ZXJmYWNlO1xyXG5cdGtleWJvYXJkPzogYm9vbGVhbiB8IFN3aXBlcktleWJvYXJkSW50ZXJmYWNlO1xyXG5cdHNjcm9sbGJhcj86IGJvb2xlYW4gfCBTd2lwZXJTY3JvbGxiYXJJbnRlcmZhY2U7XHJcblx0bW91c2V3aGVlbD86IGJvb2xlYW4gfCBTd2lwZXJNb3VzZXdoZWVsSW50ZXJmYWNlO1xyXG5cdGNvbnRyb2xsZXI/OiBib29sZWFuIHwgU3dpcGVyQ29udHJvbGxlckludGVyZmFjZTtcclxuXHRuYXZpZ2F0aW9uPzogYm9vbGVhbiB8IFN3aXBlck5hdmlnYXRpb25JbnRlcmZhY2U7XHJcblx0cGFnaW5hdGlvbj86IGJvb2xlYW4gfCBTd2lwZXJQYWdpbmF0aW9uSW50ZXJmYWNlO1xyXG5cdGhhc2hOYXZpZ2F0aW9uPzogYm9vbGVhbiB8IFN3aXBlckhhc2hOYXZpZ2F0aW9uSW50ZXJmYWNlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXBlckExMVlJbnRlcmZhY2Uge1xyXG5cdHByZXZTbGlkZU1lc3NhZ2U/OiBzdHJpbmc7XHJcblx0bmV4dFNsaWRlTWVzc2FnZT86IHN0cmluZztcclxuXHRmaXJzdFNsaWRlTWVzc2FnZT86IHN0cmluZztcclxuXHRsYXN0U2xpZGVNZXNzYWdlPzogc3RyaW5nO1xyXG5cdHBhZ2luYXRpb25CdWxsZXRNZXNzYWdlPzogc3RyaW5nO1xyXG5cdG5vdGlmaWNhdGlvbkNsYXNzPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXBlckxhenlJbnRlcmZhY2Uge1xyXG5cdGxvYWRQcmV2TmV4dD86IGJvb2xlYW47XHJcblx0bG9hZFByZXZOZXh0QW1vdW50PzogbnVtYmVyO1xyXG5cdGxvYWRPblRyYW5zaXRpb25TdGFydD86IGJvb2xlYW47XHJcblx0ZWxlbWVudENsYXNzPzogc3RyaW5nO1xyXG5cdGxvYWRpbmdDbGFzcz86IHN0cmluZztcclxuXHRsb2FkZWRDbGFzcz86IHN0cmluZztcclxuXHRwcmVsb2FkZXJDbGFzcz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJab29tSW50ZXJmYWNlIHtcclxuXHRtYXhSYXRpbz86IG51bWJlcjtcclxuXHRtaW5SYXRpbz86IG51bWJlcjtcclxuXHR0b2dnbGU/OiBib29sZWFuO1xyXG5cdGNvbnRhaW5lckNsYXNzPzogc3RyaW5nO1xyXG5cdHpvb21lZFNsaWRlQ2xhc3M/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJUaHVtYnNJbnRlcmZhY2Uge1xyXG5cdHN3aXBlcj86IGFueTtcclxuXHRzbGlkZVRodW1iQWN0aXZlQ2xhc3M/OiBzdHJpbmc7XHJcblx0dGh1bWJzQ29udGFpbmVyQ2xhc3M/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJIaXN0b3J5SW50ZXJmYWNlIHtcclxuXHRyZXBsYWNlU3RhdGU/OiBib29sZWFuO1xyXG5cdGtleT86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXBlclZpcnR1YWxJbnRlcmZhY2Uge1xyXG5cdHNsaWRlcz86IGFueVtdO1xyXG5cdGNhY2hlPzogYm9vbGVhbjtcclxuXHRhZGRTbGlkZXJCZWZvcmU/OiBudW1iZXI7XHJcblx0YWRkU2xpZGVyQWZ0ZXI/OiBudW1iZXI7XHJcblx0cmVuZGVyU2xpZGU/OiBTd2lwZXJSZW5kZXJTbGlkZUZ1bmN0aW9uO1xyXG5cdHJlbmRlckV4dGVybmFsPzogU3dpcGVyUmVuZGVyRXh0ZXJuYWxGdW5jdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJLZXlib2FyZEludGVyZmFjZSB7XHJcblx0ZW5hYmxlZD86IGJvb2xlYW47XHJcblx0b25seUluVmlld3BvcnQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXBlckF1dG9wbGF5SW50ZXJmYWNlIHtcclxuXHRkZWxheT86IG51bWJlcjtcclxuXHRzdG9wT25MYXN0U2xpZGU/OiBib29sZWFuO1xyXG5cdGRpc2FibGVPbkludGVyYWN0aW9uPzogYm9vbGVhbjtcclxuXHRyZXZlcnNlRGlyZWN0aW9uPzogYm9vbGVhbjtcclxuXHR3YWl0Rm9yVHJhbnNpdGlvbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpcGVyU2Nyb2xsYmFySW50ZXJmYWNlIHtcclxuXHRlbD86IHN0cmluZyB8IEhUTUxFbGVtZW50O1xyXG5cdGhpZGU/OiBib29sZWFuO1xyXG5cdGRyYWdnYWJsZT86IGJvb2xlYW47XHJcblx0c25hcE9uUmVsZWFzZT86IGJvb2xlYW47XHJcblx0ZHJhZ1NpemU/OiBudW1iZXIgfCAnYXV0byc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpcGVyQ29udHJvbGxlckludGVyZmFjZSB7XHJcblx0Y29udHJvbD86IGFueTtcclxuXHRpbnZlcnNlPzogYm9vbGVhbjtcclxuXHRieT86ICdzbGlkZScgfCAnY29udGFpbmVyJztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJOYXZpZ2F0aW9uSW50ZXJmYWNlIHtcclxuXHRuZXh0RWw/OiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcclxuXHRwcmV2RWw/OiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcclxuXHRoaWRlT25DbGljaz86IGJvb2xlYW47XHJcblx0ZGlzYWJsZWRDbGFzcz86IHN0cmluZztcclxuXHRoaWRkZW5DbGFzcz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJQYWdpbmF0aW9uSW50ZXJmYWNlIHtcclxuXHRlbD86IHN0cmluZyB8IEhUTUxFbGVtZW50O1xyXG5cdHR5cGU/OiAnYnVsbGV0cycgfCAnZnJhY3Rpb24nIHwgJ3Byb2dyZXNzYmFyJyB8ICdjdXN0b20nO1xyXG5cdGJ1bGxldEVsZW1lbnQ/OiBzdHJpbmc7XHJcblx0ZHluYW1pY0J1bGxldHM/OiBib29sZWFuO1xyXG5cdGR5bmFtaWNNYWluQnVsbGV0cz86IG51bWJlcjtcclxuXHRoaWRlT25DbGljaz86IGJvb2xlYW47XHJcblx0Y2xpY2thYmxlPzogYm9vbGVhbjtcclxuXHRyZW5kZXJCdWxsZXQ/OiBTd2lwZXJSZW5kZXJCdWxsZXRGdW5jdGlvbjtcclxuXHRyZW5kZXJGcmFjdGlvbj86IFN3aXBlclJlbmRlckZyYWN0aW9uRnVuY3Rpb247XHJcblx0cmVuZGVyUHJvZ3Jlc3NiYXI/OiBTd2lwZXJSZW5kZXJQcm9ncmVzc2JhckZ1bmN0aW9uO1xyXG5cdHJlbmRlckN1c3RvbT86IFN3aXBlclJlbmRlckN1c3RvbUZ1bmN0aW9uO1xyXG5cdGJ1bGxldENsYXNzPzogc3RyaW5nO1xyXG5cdGJ1bGxldEFjdGl2ZUNsYXNzPzogc3RyaW5nO1xyXG5cdG1vZGlmaWVyQ2xhc3M/OiBzdHJpbmc7XHJcblx0Y3VycmVudENsYXNzPzogc3RyaW5nO1xyXG5cdHRvdGFsQ2xhc3M/OiBzdHJpbmc7XHJcblx0aGlkZGVuQ2xhc3M/OiBzdHJpbmc7XHJcblx0cHJvZ3Jlc3NiYXJGaWxsQ2xhc3M/OiBzdHJpbmc7XHJcblx0Y2xpY2thYmxlQ2xhc3M/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpcGVyTW91c2V3aGVlbEludGVyZmFjZSB7XHJcblx0Zm9yY2VUb0F4aXM/OiBib29sZWFuO1xyXG5cdHJlbGVhc2VPbkVkZ2VzPzogYm9vbGVhbjtcclxuXHRpbnZlcnQ/OiBib29sZWFuO1xyXG5cdHNlbnNpdGl2aXR5PzogbnVtYmVyO1xyXG5cdGV2ZW50c1RhcmdldD86IHN0cmluZyB8IEhUTUxFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXBlckhhc2hOYXZpZ2F0aW9uSW50ZXJmYWNlIHtcclxuXHR3YXRjaFN0YXRlPzogYm9vbGVhbjtcclxuXHRyZXBsYWNlU3RhdGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXBlckZhZGVFZmZlY3RJbnRlcmZhY2Uge1xyXG5cdGNyb3NzRmFkZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpcGVyRmxpcEVmZmVjdEludGVyZmFjZSB7XHJcblx0bGltaXRSb3RhdGlvbj86IGJvb2xlYW47XHJcblx0c2xpZGVTaGFkb3dzPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJDdWJlRWZmZWN0SW50ZXJmYWNlIHtcclxuXHRzaGFkb3c/OiBib29sZWFuO1xyXG5cdHNoYWRvd1NjYWxlPzogbnVtYmVyO1xyXG5cdHNoYWRvd09mZnNldD86IG51bWJlcjtcclxuXHRzbGlkZVNoYWRvd3M/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXBlckNvdmVyZmxvd0VmZmVjdEludGVyZmFjZSB7XHJcblx0ZGVwdGg/OiBudW1iZXI7XHJcblx0cm90YXRlPzogbnVtYmVyO1xyXG5cdHN0cmV0Y2g/OiBudW1iZXI7XHJcblx0bW9kaWZpZXI/OiBudW1iZXI7XHJcblx0c2xpZGVTaGFkb3dzPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJCcmVha3BvaW50c0ludGVyZmFjZSB7XHJcblx0W3NpemU6IG51bWJlcl06IFN3aXBlckNvbmZpZ0ludGVyZmFjZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN3aXBlckNvbmZpZyBpbXBsZW1lbnRzIFN3aXBlckNvbmZpZ0ludGVyZmFjZSB7XHJcblx0cHVibGljIG9uPzogYW55O1xyXG5cclxuXHQvLyBTd2lwZXIgcGFyYW1ldGVyc1xyXG5cdHB1YmxpYyBpbml0PzogYm9vbGVhbjtcclxuXHRwdWJsaWMgaW5pdGlhbFNsaWRlPzogbnVtYmVyO1xyXG5cdHB1YmxpYyBkaXJlY3Rpb24/OiBzdHJpbmc7XHJcblx0cHVibGljIHNwZWVkPzogbnVtYmVyO1xyXG5cdHB1YmxpYyBzZXRXcmFwcGVyU2l6ZT86IGJvb2xlYW47XHJcblx0cHVibGljIHZpcnR1YWxUcmFuc2xhdGU/OiBib29sZWFuO1xyXG5cdHB1YmxpYyB3aWR0aD86IG51bWJlcjtcclxuXHRwdWJsaWMgaGVpZ2h0PzogbnVtYmVyO1xyXG5cdHB1YmxpYyBhdXRvSGVpZ2h0PzogYm9vbGVhbjtcclxuXHRwdWJsaWMgcm91bmRMZW5ndGhzPzogYm9vbGVhbjtcclxuXHRwdWJsaWMgbmVzdGVkPzogYm9vbGVhbjtcclxuXHRwdWJsaWMgdW5pcXVlTmF2RWxlbWVudHM/OiBib29sZWFuO1xyXG5cdHB1YmxpYyBlZmZlY3Q/OiBzdHJpbmc7XHJcblx0cHVibGljIHJ1bkNhbGxiYWNrc09uSW5pdD86IGJvb2xlYW47XHJcblx0cHVibGljIHdhdGNoT3ZlcmZsb3c/OiBib29sZWFuO1xyXG5cclxuXHQvLyBTbGlkZXMgZ3JpZFxyXG5cdHB1YmxpYyBzcGFjZUJldHdlZW4/OiBudW1iZXI7XHJcblx0cHVibGljIHNsaWRlc1BlclZpZXc/OiBudW1iZXIgfCAnYXV0byc7XHJcblx0cHVibGljIHNsaWRlc1BlckNvbHVtbj86IG51bWJlcjtcclxuXHRwdWJsaWMgc2xpZGVzUGVyQ29sdW1uRmlsbD86IHN0cmluZztcclxuXHRwdWJsaWMgc2xpZGVzUGVyR3JvdXA/OiBudW1iZXI7XHJcblx0cHVibGljIGNlbnRlcmVkU2xpZGVzPzogYm9vbGVhbjtcclxuXHRwdWJsaWMgc2xpZGVzT2Zmc2V0QmVmb3JlPzogbnVtYmVyO1xyXG5cdHB1YmxpYyBzbGlkZXNPZmZzZXRBZnRlcj86IG51bWJlcjtcclxuXHRwdWJsaWMgbm9ybWFsaXplU2xpZGVJbmRleD86IGJvb2xlYW47XHJcblx0cHVibGljIGNlbnRlckluc3VmZmljaWVudFNsaWRlcz86IGJvb2xlYW47XHJcblxyXG5cdC8vIEdyYWIgY3Vyc29yXHJcblx0cHVibGljIGdyYWJDdXJzb3I/OiBib29sZWFuO1xyXG5cclxuXHQvLyBUb3VjaGVzXHJcblx0cHVibGljIHRvdWNoRXZlbnRzVGFyZ2V0Pzogc3RyaW5nO1xyXG5cdHB1YmxpYyB0b3VjaFJhdGlvPzogbnVtYmVyO1xyXG5cdHB1YmxpYyB0b3VjaEFuZ2xlPzogbnVtYmVyO1xyXG5cdHB1YmxpYyBzaW11bGF0ZVRvdWNoPzogYm9vbGVhbjtcclxuXHRwdWJsaWMgc2hvcnRTd2lwZXM/OiBib29sZWFuO1xyXG5cdHB1YmxpYyBsb25nU3dpcGVzPzogYm9vbGVhbjtcclxuXHRwdWJsaWMgbG9uZ1N3aXBlc1JhdGlvPzogbnVtYmVyO1xyXG5cdHB1YmxpYyBsb25nU3dpcGVzTXM/OiBudW1iZXI7XHJcblx0cHVibGljIGZvbGxvd0Zpbmdlcj86IGJvb2xlYW47XHJcblx0cHVibGljIGFsbG93VG91Y2hNb3ZlPzogYm9vbGVhbjtcclxuXHRwdWJsaWMgdGhyZXNob2xkPzogbnVtYmVyO1xyXG5cdHB1YmxpYyB0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24/OiBib29sZWFuO1xyXG5cdHB1YmxpYyBpT1NFZGdlU3dpcGVEZXRlY3Rpb24/OiBib29sZWFuO1xyXG5cdHB1YmxpYyBpT1NFZGdlU3dpcGVUaHJlc2hvbGQ/OiBudW1iZXI7XHJcblx0cHVibGljIHRvdWNoUmVsZWFzZU9uRWRnZXM/OiBib29sZWFuO1xyXG5cdHB1YmxpYyBwYXNzaXZlTGlzdGVuZXJzPzogYm9vbGVhbjtcclxuXHJcblx0Ly8gVG91Y2ggcmVzaXN0YW5jZVxyXG5cdHB1YmxpYyByZXNpc3RhbmNlPzogYm9vbGVhbjtcclxuXHRwdWJsaWMgcmVzaXN0YW5jZVJhdGlvPzogbnVtYmVyO1xyXG5cclxuXHQvLyBTd2lwaW5nIC8gbm8gc3dpcGluZ1xyXG5cdHB1YmxpYyBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24/OiBib29sZWFuO1xyXG5cdHB1YmxpYyBhbGxvd1NsaWRlUHJldj86IGJvb2xlYW47XHJcblx0cHVibGljIGFsbG93U2xpZGVOZXh0PzogYm9vbGVhbjtcclxuXHRwdWJsaWMgbm9Td2lwaW5nPzogYm9vbGVhbjtcclxuXHRwdWJsaWMgbm9Td2lwaW5nQ2xhc3M/OiBzdHJpbmc7XHJcblx0cHVibGljIG5vU3dpcGluZ1NlbGVjdG9yPzogc3RyaW5nO1xyXG5cdHB1YmxpYyBzd2lwZUhhbmRsZXI/OiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcclxuXHJcblx0Ly8gQ2xpY2tzXHJcblx0cHVibGljIHByZXZlbnRDbGlja3M/OiBib29sZWFuO1xyXG5cdHB1YmxpYyBwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24/OiBib29sZWFuO1xyXG5cdHB1YmxpYyBzbGlkZVRvQ2xpY2tlZFNsaWRlPzogYm9vbGVhbjtcclxuXHJcblx0Ly8gRnJlZW1vZGVcclxuXHRwdWJsaWMgZnJlZU1vZGU/OiBib29sZWFuO1xyXG5cdHB1YmxpYyBmcmVlTW9kZU1vbWVudHVtPzogYm9vbGVhbjtcclxuXHRwdWJsaWMgZnJlZU1vZGVNb21lbnR1bVJhdGlvPzogbnVtYmVyO1xyXG5cdHB1YmxpYyBmcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbz86IG51bWJlcjtcclxuXHRwdWJsaWMgZnJlZU1vZGVNb21lbnR1bUJvdW5jZT86IGJvb2xlYW47XHJcblx0cHVibGljIGZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbz86IG51bWJlcjtcclxuXHRwdWJsaWMgZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHk/OiBudW1iZXI7XHJcblx0cHVibGljIGZyZWVNb2RlU3RpY2t5PzogYm9vbGVhbjtcclxuXHJcblx0Ly8gUHJvZ3Jlc3NcclxuXHRwdWJsaWMgd2F0Y2hTbGlkZXNQcm9ncmVzcz86IGJvb2xlYW47XHJcblx0cHVibGljIHdhdGNoU2xpZGVzVmlzaWJpbGl0eT86IGJvb2xlYW47XHJcblxyXG5cdC8vIEltYWdlc1xyXG5cdHB1YmxpYyBwcmVsb2FkSW1hZ2VzPzogYm9vbGVhbjtcclxuXHRwdWJsaWMgdXBkYXRlT25JbWFnZXNSZWFkeT86IGJvb2xlYW47XHJcblxyXG5cdC8vIExvb3BcclxuXHRwdWJsaWMgbG9vcD86IGJvb2xlYW47XHJcblx0cHVibGljIGxvb3BBZGRpdGlvbmFsU2xpZGVzPzogbnVtYmVyO1xyXG5cdHB1YmxpYyBsb29wZWRTbGlkZXM/OiBudW1iZXI7XHJcblx0cHVibGljIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms/OiBib29sZWFuO1xyXG5cclxuXHQvLyBCcmVha3BvaW50c1xyXG5cdHB1YmxpYyBicmVha3BvaW50cz86IGFueTtcclxuXHRwdWJsaWMgYnJlYWtwb2ludHNJbnZlcnNlPzogYm9vbGVhbjtcclxuXHJcblx0Ly8gT2JzZXJ2ZXJcclxuXHRwdWJsaWMgb2JzZXJ2ZXI/OiBib29sZWFuO1xyXG5cdHB1YmxpYyBvYnNlcnZlUGFyZW50cz86IGJvb2xlYW47XHJcblxyXG5cdC8vIE5hbWVzcGFjZVxyXG5cdHB1YmxpYyBjb250YWluZXJNb2RpZmllckNsYXNzPzogc3RyaW5nO1xyXG5cdHB1YmxpYyBzbGlkZUNsYXNzPzogc3RyaW5nO1xyXG5cdHB1YmxpYyBzbGlkZUFjdGl2ZUNsYXNzPzogc3RyaW5nO1xyXG5cdHB1YmxpYyBzbGlkZUR1cGxpY2F0ZWRBY3RpdmVDbGFzcz86IHN0cmluZztcclxuXHRwdWJsaWMgc2xpZGVWaXNpYmxlQ2xhc3M/OiBzdHJpbmc7XHJcblx0cHVibGljIHNsaWRlRHVwbGljYXRlQ2xhc3M/OiBzdHJpbmc7XHJcblx0cHVibGljIHNsaWRlTmV4dENsYXNzPzogc3RyaW5nO1xyXG5cdHB1YmxpYyBzbGlkZUR1cGxpY2F0ZWROZXh0Q2xhc3M/OiBzdHJpbmc7XHJcblx0cHVibGljIHNsaWRlUHJldkNsYXNzPzogc3RyaW5nO1xyXG5cdHB1YmxpYyBzbGlkZUR1cGxpY2F0ZWRQcmV2Q2xhc3M/OiBzdHJpbmc7XHJcblx0cHVibGljIHdyYXBwZXJDbGFzcz86IHN0cmluZztcclxuXHJcblx0Ly8gRWZmZWN0c1xyXG5cdHB1YmxpYyBmYWRlRWZmZWN0PzogYW55O1xyXG5cdHB1YmxpYyBmbGlwRWZmZWN0PzogYW55O1xyXG5cdHB1YmxpYyBjdWJlRWZmZWN0PzogYW55O1xyXG5cdHB1YmxpYyBjb3ZlcmZsb3dFZmZlY3Q/OiBhbnk7XHJcblxyXG5cdC8vIENvbXBvbmVudHNcclxuXHRwdWJsaWMgcGFyYWxsYXg/OiBib29sZWFuO1xyXG5cdHB1YmxpYyBhMTF5PzogYm9vbGVhbiB8IGFueTtcclxuXHRwdWJsaWMgbGF6eT86IGJvb2xlYW4gfCBhbnk7XHJcblx0cHVibGljIHpvb20/OiBib29sZWFuIHwgYW55O1xyXG5cdHB1YmxpYyBoaXN0b3J5PzogYm9vbGVhbiB8IGFueTtcclxuXHRwdWJsaWMgdmlydHVhbD86IGJvb2xlYW4gfCBhbnk7XHJcblx0cHVibGljIGF1dG9wbGF5PzogYm9vbGVhbiB8IGFueTtcclxuXHRwdWJsaWMga2V5Ym9hcmQ/OiBib29sZWFuIHwgYW55O1xyXG5cdHB1YmxpYyBzY3JvbGxiYXI/OiBib29sZWFuIHwgYW55O1xyXG5cdHB1YmxpYyBtb3VzZXdoZWVsPzogYm9vbGVhbiB8IGFueTtcclxuXHRwdWJsaWMgY29udHJvbGxlcj86IGJvb2xlYW4gfCBhbnk7XHJcblx0cHVibGljIG5hdmlnYXRpb24/OiBib29sZWFuIHwgYW55O1xyXG5cdHB1YmxpYyBwYWdpbmF0aW9uPzogYm9vbGVhbiB8IGFueTtcclxuXHRwdWJsaWMgaGFzaE5hdmlnYXRpb24/OiBib29sZWFuIHwgYW55O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb25maWc6IFN3aXBlckNvbmZpZ0ludGVyZmFjZSA9IHt9KSB7XHJcblx0XHR0aGlzLmFzc2lnbihjb25maWcpO1xyXG5cdH1cclxuXHJcblx0YXNzaWduKGNvbmZpZzogU3dpcGVyQ29uZmlnSW50ZXJmYWNlIHwgYW55ID0ge30sIHRhcmdldD86IGFueSkge1xyXG5cdFx0dGFyZ2V0ID0gdGFyZ2V0IHx8IHRoaXM7XHJcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBjb25maWcpIHtcclxuXHRcdFx0aWYgKGNvbmZpZ1trZXldICE9IG51bGwgJiYgIUFycmF5LmlzQXJyYXkoY29uZmlnW2tleV0pICYmIHR5cGVvZiBjb25maWdba2V5XSA9PT0gJ29iamVjdCcgJiZcclxuXHRcdFx0XHQodHlwZW9mIEhUTUxFbGVtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhKGNvbmZpZ1trZXldIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSkge1xyXG5cdFx0XHRcdHRhcmdldFtrZXldID0ge307XHJcblx0XHRcdFx0dGhpcy5hc3NpZ24oY29uZmlnW2tleV0sIHRhcmdldFtrZXldKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0YXJnZXRba2V5XSA9IGNvbmZpZ1trZXldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTd2lwZXJSZW5kZXJTbGlkZUZ1bmN0aW9uID0gKHNsaWRlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IEhUTUxFbGVtZW50O1xyXG5leHBvcnQgdHlwZSBTd2lwZXJSZW5kZXJFeHRlcm5hbEZ1bmN0aW9uID0gKGRhdGE6IGFueSkgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgU3dpcGVyUmVuZGVyQ3VzdG9tRnVuY3Rpb24gPSAoc3dpcGVyOiBhbnksIGN1cnJlbnQ6IG51bWJlciwgdG90YWw6IG51bWJlcikgPT4gc3RyaW5nO1xyXG5leHBvcnQgdHlwZSBTd2lwZXJSZW5kZXJCdWxsZXRGdW5jdGlvbiA9IChpbmRleDogbnVtYmVyLCBjbGFzc05hbWU6IHN0cmluZykgPT4gc3RyaW5nO1xyXG5leHBvcnQgdHlwZSBTd2lwZXJSZW5kZXJGcmFjdGlvbkZ1bmN0aW9uID0gKGN1cnJlbnRDbGFzczogc3RyaW5nLCB0b3RhbENsYXNzOiBzdHJpbmcpID0+IHN0cmluZztcclxuZXhwb3J0IHR5cGUgU3dpcGVyUmVuZGVyUHJvZ3Jlc3NiYXJGdW5jdGlvbiA9IChwcm9ncmVzc2JhckNsYXNzOiBzdHJpbmcpID0+IHN0cmluZztcclxuIl19