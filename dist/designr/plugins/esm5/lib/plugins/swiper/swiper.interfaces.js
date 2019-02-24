/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvc3dpcGVyL3N3aXBlci5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUvQyxNQUFNLEtBQU8sYUFBYSxHQUFHLElBQUksY0FBYyxDQUF3QixlQUFlLENBQUM7O0FBWXZGLE1BQU0sS0FBTyxZQUFZLEdBQWtCO0lBQzFDLE1BQU07SUFDTixlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYixRQUFRO0lBQ1IsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsVUFBVTtJQUNWLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQiw0QkFBNEI7Q0FDNUI7Ozs7QUFFRCwyQ0F3SUM7OztJQXRJQSxxQ0FBZTs7SUFDZiw2Q0FBc0I7O0lBQ3RCLDBDQUFtQjs7SUFDbkIsc0NBQWU7O0lBQ2YsK0NBQXlCOztJQUN6QixpREFBMkI7O0lBQzNCLHNDQUFlOztJQUNmLHVDQUFnQjs7SUFDaEIsMkNBQXFCOztJQUNyQiw2Q0FBdUI7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QUFxQzs7SUFDckMsb0NBQTZCOztJQUM3Qiw4Q0FBd0M7O0lBR3hDLG1DQUF5Qjs7SUFDekIsMENBQW9DOztJQUdwQyxnQ0FBMEI7O0lBQzFCLHNDQUFnQzs7SUFHaEMsOENBQXVDOztJQUN2QyxrQ0FBMkI7O0lBQzNCLHdDQUFpQzs7SUFDakMsa0RBQTJDOztJQUMzQyx5Q0FBa0M7O0lBQ2xDLDJDQUFvQzs7SUFDcEMsc0NBQStCOztJQUMvQixnREFBeUM7O0lBQ3pDLHNDQUErQjs7SUFDL0IsZ0RBQXlDOztJQUN6QyxvQ0FBNkI7O0lBRzdCLGtDQUF3Qjs7SUFDeEIsa0NBQXdCOztJQUN4QixrQ0FBd0I7O0lBQ3hCLHVDQUE2Qjs7SUFHN0IsZ0NBQTBCOztJQUMxQiw0QkFBNEI7O0lBQzVCLDRCQUE0Qjs7SUFDNUIsNEJBQTRCOztJQUM1QiwrQkFBK0I7O0lBQy9CLCtCQUErQjs7SUFDL0IsZ0NBQWdDOztJQUNoQyxnQ0FBZ0M7O0lBQ2hDLGlDQUFpQzs7SUFDakMsa0NBQWtDOztJQUNsQyxrQ0FBa0M7O0lBQ2xDLGtDQUFrQzs7SUFDbEMsa0NBQWtDOztJQUNsQyxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgU1dJUEVSX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTd2lwZXJDb25maWdJbnRlcmZhY2U+KCdTV0lQRVJfQ09ORklHJyk7XG5cbmV4cG9ydCB0eXBlIFN3aXBlckV2ZW50ID0gJ2luaXQnIHwgJ2JlZm9yZURlc3Ryb3knIHwgJ3Njcm9sbCcgfCAncHJvZ3Jlc3MnIHwgJ2tleVByZXNzJyB8XG5cdCdiZWZvcmVSZXNpemUnIHwgJ2FmdGVyUmVzaXplJyB8ICdyZXNpemUnIHwgJ2JyZWFrcG9pbnQnIHwgJ2JlZm9yZVJlc2l6ZScgfCAnc2xpZGVyTW92ZScgfFxuXHQnc2xpZGVDaGFuZ2UnIHwgJ3NldFRyYW5zbGF0ZScgfCAnc2V0VHJhbnNpdGlvbicgfCAnZnJvbUVkZ2UnIHwgJ3JlYWNoRW5kJyB8ICdyZWFjaEJlZ2lubmluZycgfFxuXHQnYXV0b3BsYXknIHwgJ2F1dG9wbGF5U3RvcCcgfCAnYXV0b3BsYXlTdGFydCcgfCAnaW1hZ2VzUmVhZHknIHwgJ2xhenlJbWFnZUxvYWQnIHxcblx0J2xhenlJbWFnZVJlYWR5JyB8ICdzY3JvbGxEcmFnRW5kJyB8ICdzY3JvbGxEcmFnTW92ZScgfCAnc2Nyb2xsRHJhZ1N0YXJ0JyB8ICdzd2lwZXJUYXAnIHxcblx0J3N3aXBlckNsaWNrJyB8ICdzd2lwZXJEb3VibGVUYXAnIHwgJ3N3aXBlclRvdWNoRW5kJyB8ICdzd2lwZXJUb3VjaE1vdmUnIHwgJ3N3aXBlclRvdWNoU3RhcnQnIHxcblx0J3N3aXBlclRvdWNoTW92ZU9wcG9zaXRlJyB8ICdzd2lwZXJUcmFuc2l0aW9uRW5kJyB8ICdzd2lwZXJUcmFuc2l0aW9uU3RhcnQnIHxcblx0J3NsaWRlTmV4dFRyYW5zaXRpb25FbmQnIHwgJ3NsaWRlTmV4dFRyYW5zaXRpb25TdGFydCcgfCAnc2xpZGVQcmV2VHJhbnNpdGlvbkVuZCcgfFxuXHQnc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0JyB8ICdzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnIHwgJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0JztcblxuZXhwb3J0IGNvbnN0IFN3aXBlckV2ZW50czogU3dpcGVyRXZlbnRbXSA9IFtcblx0J2luaXQnLFxuXHQnYmVmb3JlRGVzdHJveScsXG5cdCdzY3JvbGwnLFxuXHQncHJvZ3Jlc3MnLFxuXHQna2V5UHJlc3MnLFxuXHQnYmVmb3JlUmVzaXplJyxcblx0J2FmdGVyUmVzaXplJyxcblx0J3Jlc2l6ZScsXG5cdCdicmVha3BvaW50Jyxcblx0J2JlZm9yZVJlc2l6ZScsXG5cdCdzbGlkZXJNb3ZlJyxcblx0J3NsaWRlQ2hhbmdlJyxcblx0J3NldFRyYW5zbGF0ZScsXG5cdCdzZXRUcmFuc2l0aW9uJyxcblx0J2Zyb21FZGdlJyxcblx0J3JlYWNoRW5kJyxcblx0J3JlYWNoQmVnaW5uaW5nJyxcblx0J2F1dG9wbGF5Jyxcblx0J2F1dG9wbGF5U3RvcCcsXG5cdCdhdXRvcGxheVN0YXJ0Jyxcblx0J2ltYWdlc1JlYWR5Jyxcblx0J2xhenlJbWFnZUxvYWQnLFxuXHQnbGF6eUltYWdlUmVhZHknLFxuXHQnc2Nyb2xsRHJhZ0VuZCcsXG5cdCdzY3JvbGxEcmFnTW92ZScsXG5cdCdzY3JvbGxEcmFnU3RhcnQnLFxuXHQnc3dpcGVyVGFwJyxcblx0J3N3aXBlckNsaWNrJyxcblx0J3N3aXBlckRvdWJsZVRhcCcsXG5cdCdzd2lwZXJUb3VjaEVuZCcsXG5cdCdzd2lwZXJUb3VjaE1vdmUnLFxuXHQnc3dpcGVyVG91Y2hTdGFydCcsXG5cdCdzd2lwZXJUb3VjaE1vdmVPcHBvc2l0ZScsXG5cdCdzd2lwZXJUcmFuc2l0aW9uRW5kJyxcblx0J3N3aXBlclRyYW5zaXRpb25TdGFydCcsXG5cdCdzbGlkZU5leHRUcmFuc2l0aW9uRW5kJyxcblx0J3NsaWRlTmV4dFRyYW5zaXRpb25TdGFydCcsXG5cdCdzbGlkZVByZXZUcmFuc2l0aW9uRW5kJyxcblx0J3NsaWRlUHJldlRyYW5zaXRpb25TdGFydCcsXG5cdCdzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnLFxuXHQnc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQnXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXBlckNvbmZpZ0ludGVyZmFjZSB7XG5cdC8vIFN3aXBlciBwYXJhbWV0ZXJzXG5cdGluaXQ/OiBib29sZWFuO1xuXHRpbml0aWFsU2xpZGU/OiBudW1iZXI7XG5cdGRpcmVjdGlvbj86IHN0cmluZztcblx0c3BlZWQ/OiBudW1iZXI7XG5cdHNldFdyYXBwZXJTaXplPzogYm9vbGVhbjtcblx0dmlydHVhbFRyYW5zbGF0ZT86IGJvb2xlYW47XG5cdHdpZHRoPzogbnVtYmVyO1xuXHRoZWlnaHQ/OiBudW1iZXI7XG5cdGF1dG9IZWlnaHQ/OiBib29sZWFuO1xuXHRyb3VuZExlbmd0aHM/OiBib29sZWFuO1xuXHRuZXN0ZWQ/OiBib29sZWFuO1xuXHR1bmlxdWVOYXZFbGVtZW50cz86IGJvb2xlYW47XG5cdGVmZmVjdD86IHN0cmluZztcblx0cnVuQ2FsbGJhY2tzT25Jbml0PzogYm9vbGVhbjtcblx0d2F0Y2hPdmVyZmxvdz86IGJvb2xlYW47XG5cblx0Ly8gU2xpZGVzIGdyaWRcblx0c3BhY2VCZXR3ZWVuPzogbnVtYmVyO1xuXHRzbGlkZXNQZXJWaWV3PzogbnVtYmVyIHwgJ2F1dG8nO1xuXHRzbGlkZXNQZXJDb2x1bW4/OiBudW1iZXI7XG5cdHNsaWRlc1BlckNvbHVtbkZpbGw/OiBzdHJpbmc7XG5cdHNsaWRlc1Blckdyb3VwPzogbnVtYmVyO1xuXHRjZW50ZXJlZFNsaWRlcz86IGJvb2xlYW47XG5cdHNsaWRlc09mZnNldEJlZm9yZT86IG51bWJlcjtcblx0c2xpZGVzT2Zmc2V0QWZ0ZXI/OiBudW1iZXI7XG5cdG5vcm1hbGl6ZVNsaWRlSW5kZXg/OiBib29sZWFuO1xuXHRjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXM/OiBib29sZWFuO1xuXG5cdC8vIEdyYWIgY3Vyc29yXG5cdGdyYWJDdXJzb3I/OiBib29sZWFuO1xuXG5cdC8vIFRvdWNoZXNcblx0dG91Y2hFdmVudHNUYXJnZXQ/OiBzdHJpbmc7XG5cdHRvdWNoUmF0aW8/OiBudW1iZXI7XG5cdHRvdWNoQW5nbGU/OiBudW1iZXI7XG5cdHNpbXVsYXRlVG91Y2g/OiBib29sZWFuO1xuXHRzaG9ydFN3aXBlcz86IGJvb2xlYW47XG5cdGxvbmdTd2lwZXM/OiBib29sZWFuO1xuXHRsb25nU3dpcGVzUmF0aW8/OiBudW1iZXI7XG5cdGxvbmdTd2lwZXNNcz86IG51bWJlcjtcblx0Zm9sbG93RmluZ2VyPzogYm9vbGVhbjtcblx0YWxsb3dUb3VjaE1vdmU/OiBib29sZWFuO1xuXHR0aHJlc2hvbGQ/OiBudW1iZXI7XG5cdHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbj86IGJvb2xlYW47XG5cdGlPU0VkZ2VTd2lwZURldGVjdGlvbj86IGJvb2xlYW47XG5cdGlPU0VkZ2VTd2lwZVRocmVzaG9sZD86IG51bWJlcjtcblx0dG91Y2hSZWxlYXNlT25FZGdlcz86IGJvb2xlYW47XG5cdHBhc3NpdmVMaXN0ZW5lcnM/OiBib29sZWFuO1xuXG5cdC8vIFRvdWNoIHJlc2lzdGFuY2Vcblx0cmVzaXN0YW5jZT86IGJvb2xlYW47XG5cdHJlc2lzdGFuY2VSYXRpbz86IG51bWJlcjtcblxuXHQvLyBTd2lwaW5nIC8gbm8gc3dpcGluZ1xuXHRwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24/OiBib29sZWFuO1xuXHRhbGxvd1NsaWRlUHJldj86IGJvb2xlYW47XG5cdGFsbG93U2xpZGVOZXh0PzogYm9vbGVhbjtcblx0bm9Td2lwaW5nPzogYm9vbGVhbjtcblx0bm9Td2lwaW5nQ2xhc3M/OiBzdHJpbmc7XG5cdG5vU3dpcGluZ1NlbGVjdG9yPzogc3RyaW5nO1xuXHRzd2lwZUhhbmRsZXI/OiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcblxuXHQvLyBDbGlja3Ncblx0cHJldmVudENsaWNrcz86IGJvb2xlYW47XG5cdHByZXZlbnRDbGlja3NQcm9wYWdhdGlvbj86IGJvb2xlYW47XG5cdHNsaWRlVG9DbGlja2VkU2xpZGU/OiBib29sZWFuO1xuXG5cdC8vIEZyZWVtb2RlXG5cdGZyZWVNb2RlPzogYm9vbGVhbjtcblx0ZnJlZU1vZGVNb21lbnR1bT86IGJvb2xlYW47XG5cdGZyZWVNb2RlTW9tZW50dW1SYXRpbz86IG51bWJlcjtcblx0ZnJlZU1vZGVNb21lbnR1bVZlbG9jaXR5UmF0aW8/OiBudW1iZXI7XG5cdGZyZWVNb2RlTW9tZW50dW1Cb3VuY2U/OiBib29sZWFuO1xuXHRmcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW8/OiBudW1iZXI7XG5cdGZyZWVNb2RlTWluaW11bVZlbG9jaXR5PzogbnVtYmVyO1xuXHRmcmVlTW9kZVN0aWNreT86IGJvb2xlYW47XG5cblx0Ly8gUHJvZ3Jlc3Ncblx0d2F0Y2hTbGlkZXNQcm9ncmVzcz86IGJvb2xlYW47XG5cdHdhdGNoU2xpZGVzVmlzaWJpbGl0eT86IGJvb2xlYW47XG5cblx0Ly8gSW1hZ2VzXG5cdHByZWxvYWRJbWFnZXM/OiBib29sZWFuO1xuXHR1cGRhdGVPbkltYWdlc1JlYWR5PzogYm9vbGVhbjtcblxuXHQvLyBMb29wXG5cdGxvb3A/OiBib29sZWFuO1xuXHRsb29wQWRkaXRpb25hbFNsaWRlcz86IG51bWJlcjtcblx0bG9vcGVkU2xpZGVzPzogbnVtYmVyO1xuXHRsb29wRmlsbEdyb3VwV2l0aEJsYW5rPzogYm9vbGVhbjtcblxuXHQvLyBCcmVha3BvaW50c1xuXHRicmVha3BvaW50cz86IFN3aXBlckJyZWFrcG9pbnRzSW50ZXJmYWNlO1xuXHRicmVha3BvaW50c0ludmVyc2U/OiBib29sZWFuO1xuXG5cdC8vIE9ic2VydmVyXG5cdG9ic2VydmVyPzogYm9vbGVhbjtcblx0b2JzZXJ2ZVBhcmVudHM/OiBib29sZWFuO1xuXG5cdC8vIE5hbWVzcGFjZVxuXHRjb250YWluZXJNb2RpZmllckNsYXNzPzogc3RyaW5nO1xuXHRzbGlkZUNsYXNzPzogc3RyaW5nO1xuXHRzbGlkZUFjdGl2ZUNsYXNzPzogc3RyaW5nO1xuXHRzbGlkZUR1cGxpY2F0ZWRBY3RpdmVDbGFzcz86IHN0cmluZztcblx0c2xpZGVWaXNpYmxlQ2xhc3M/OiBzdHJpbmc7XG5cdHNsaWRlRHVwbGljYXRlQ2xhc3M/OiBzdHJpbmc7XG5cdHNsaWRlTmV4dENsYXNzPzogc3RyaW5nO1xuXHRzbGlkZUR1cGxpY2F0ZWROZXh0Q2xhc3M/OiBzdHJpbmc7XG5cdHNsaWRlUHJldkNsYXNzPzogc3RyaW5nO1xuXHRzbGlkZUR1cGxpY2F0ZWRQcmV2Q2xhc3M/OiBzdHJpbmc7XG5cdHdyYXBwZXJDbGFzcz86IHN0cmluZztcblxuXHQvLyBFZmZlY3RzXG5cdGZhZGVFZmZlY3Q/OiBTd2lwZXJGYWRlRWZmZWN0SW50ZXJmYWNlO1xuXHRmbGlwRWZmZWN0PzogU3dpcGVyRmxpcEVmZmVjdEludGVyZmFjZTtcblx0Y3ViZUVmZmVjdD86IFN3aXBlckN1YmVFZmZlY3RJbnRlcmZhY2U7XG5cdGNvdmVyZmxvd0VmZmVjdD86IFN3aXBlckNvdmVyZmxvd0VmZmVjdEludGVyZmFjZTtcblxuXHQvLyBDb21wb25lbnRzXG5cdHBhcmFsbGF4PzogYm9vbGVhbjtcblx0YTExeT86IGJvb2xlYW4gfCBTd2lwZXJBMTFZSW50ZXJmYWNlO1xuXHRsYXp5PzogYm9vbGVhbiB8IFN3aXBlckxhenlJbnRlcmZhY2U7XG5cdHpvb20/OiBib29sZWFuIHwgU3dpcGVyWm9vbUludGVyZmFjZTtcblx0dGh1bWJzPzogYm9vbGVhbiB8IFN3aXBlclRodW1ic0ludGVyZmFjZTtcblx0aGlzdG9yeT86IGJvb2xlYW4gfCBTd2lwZXJIaXN0b3J5SW50ZXJmYWNlO1xuXHR2aXJ0dWFsPzogYm9vbGVhbiB8IFN3aXBlclZpcnR1YWxJbnRlcmZhY2U7XG5cdGF1dG9wbGF5PzogYm9vbGVhbiB8IFN3aXBlckF1dG9wbGF5SW50ZXJmYWNlO1xuXHRrZXlib2FyZD86IGJvb2xlYW4gfCBTd2lwZXJLZXlib2FyZEludGVyZmFjZTtcblx0c2Nyb2xsYmFyPzogYm9vbGVhbiB8IFN3aXBlclNjcm9sbGJhckludGVyZmFjZTtcblx0bW91c2V3aGVlbD86IGJvb2xlYW4gfCBTd2lwZXJNb3VzZXdoZWVsSW50ZXJmYWNlO1xuXHRjb250cm9sbGVyPzogYm9vbGVhbiB8IFN3aXBlckNvbnRyb2xsZXJJbnRlcmZhY2U7XG5cdG5hdmlnYXRpb24/OiBib29sZWFuIHwgU3dpcGVyTmF2aWdhdGlvbkludGVyZmFjZTtcblx0cGFnaW5hdGlvbj86IGJvb2xlYW4gfCBTd2lwZXJQYWdpbmF0aW9uSW50ZXJmYWNlO1xuXHRoYXNoTmF2aWdhdGlvbj86IGJvb2xlYW4gfCBTd2lwZXJIYXNoTmF2aWdhdGlvbkludGVyZmFjZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJBMTFZSW50ZXJmYWNlIHtcblx0cHJldlNsaWRlTWVzc2FnZT86IHN0cmluZztcblx0bmV4dFNsaWRlTWVzc2FnZT86IHN0cmluZztcblx0Zmlyc3RTbGlkZU1lc3NhZ2U/OiBzdHJpbmc7XG5cdGxhc3RTbGlkZU1lc3NhZ2U/OiBzdHJpbmc7XG5cdHBhZ2luYXRpb25CdWxsZXRNZXNzYWdlPzogc3RyaW5nO1xuXHRub3RpZmljYXRpb25DbGFzcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJMYXp5SW50ZXJmYWNlIHtcblx0bG9hZFByZXZOZXh0PzogYm9vbGVhbjtcblx0bG9hZFByZXZOZXh0QW1vdW50PzogbnVtYmVyO1xuXHRsb2FkT25UcmFuc2l0aW9uU3RhcnQ/OiBib29sZWFuO1xuXHRlbGVtZW50Q2xhc3M/OiBzdHJpbmc7XG5cdGxvYWRpbmdDbGFzcz86IHN0cmluZztcblx0bG9hZGVkQ2xhc3M/OiBzdHJpbmc7XG5cdHByZWxvYWRlckNsYXNzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXBlclpvb21JbnRlcmZhY2Uge1xuXHRtYXhSYXRpbz86IG51bWJlcjtcblx0bWluUmF0aW8/OiBudW1iZXI7XG5cdHRvZ2dsZT86IGJvb2xlYW47XG5cdGNvbnRhaW5lckNsYXNzPzogc3RyaW5nO1xuXHR6b29tZWRTbGlkZUNsYXNzPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpcGVyVGh1bWJzSW50ZXJmYWNlIHtcblx0c3dpcGVyPzogYW55O1xuXHRzbGlkZVRodW1iQWN0aXZlQ2xhc3M/OiBzdHJpbmc7XG5cdHRodW1ic0NvbnRhaW5lckNsYXNzPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpcGVySGlzdG9yeUludGVyZmFjZSB7XG5cdHJlcGxhY2VTdGF0ZT86IGJvb2xlYW47XG5cdGtleT86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXBlclZpcnR1YWxJbnRlcmZhY2Uge1xuXHRzbGlkZXM/OiBhbnlbXTtcblx0Y2FjaGU/OiBib29sZWFuO1xuXHRhZGRTbGlkZXJCZWZvcmU/OiBudW1iZXI7XG5cdGFkZFNsaWRlckFmdGVyPzogbnVtYmVyO1xuXHRyZW5kZXJTbGlkZT86IFN3aXBlclJlbmRlclNsaWRlRnVuY3Rpb247XG5cdHJlbmRlckV4dGVybmFsPzogU3dpcGVyUmVuZGVyRXh0ZXJuYWxGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJLZXlib2FyZEludGVyZmFjZSB7XG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXHRvbmx5SW5WaWV3cG9ydD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpcGVyQXV0b3BsYXlJbnRlcmZhY2Uge1xuXHRkZWxheT86IG51bWJlcjtcblx0c3RvcE9uTGFzdFNsaWRlPzogYm9vbGVhbjtcblx0ZGlzYWJsZU9uSW50ZXJhY3Rpb24/OiBib29sZWFuO1xuXHRyZXZlcnNlRGlyZWN0aW9uPzogYm9vbGVhbjtcblx0d2FpdEZvclRyYW5zaXRpb24/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXBlclNjcm9sbGJhckludGVyZmFjZSB7XG5cdGVsPzogc3RyaW5nIHwgSFRNTEVsZW1lbnQ7XG5cdGhpZGU/OiBib29sZWFuO1xuXHRkcmFnZ2FibGU/OiBib29sZWFuO1xuXHRzbmFwT25SZWxlYXNlPzogYm9vbGVhbjtcblx0ZHJhZ1NpemU/OiBudW1iZXIgfCAnYXV0byc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpcGVyQ29udHJvbGxlckludGVyZmFjZSB7XG5cdGNvbnRyb2w/OiBhbnk7XG5cdGludmVyc2U/OiBib29sZWFuO1xuXHRieT86ICdzbGlkZScgfCAnY29udGFpbmVyJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJOYXZpZ2F0aW9uSW50ZXJmYWNlIHtcblx0bmV4dEVsPzogc3RyaW5nIHwgSFRNTEVsZW1lbnQ7XG5cdHByZXZFbD86IHN0cmluZyB8IEhUTUxFbGVtZW50O1xuXHRoaWRlT25DbGljaz86IGJvb2xlYW47XG5cdGRpc2FibGVkQ2xhc3M/OiBzdHJpbmc7XG5cdGhpZGRlbkNsYXNzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXBlclBhZ2luYXRpb25JbnRlcmZhY2Uge1xuXHRlbD86IHN0cmluZyB8IEhUTUxFbGVtZW50O1xuXHR0eXBlPzogJ2J1bGxldHMnIHwgJ2ZyYWN0aW9uJyB8ICdwcm9ncmVzc2JhcicgfCAnY3VzdG9tJztcblx0YnVsbGV0RWxlbWVudD86IHN0cmluZztcblx0ZHluYW1pY0J1bGxldHM/OiBib29sZWFuO1xuXHRkeW5hbWljTWFpbkJ1bGxldHM/OiBudW1iZXI7XG5cdGhpZGVPbkNsaWNrPzogYm9vbGVhbjtcblx0Y2xpY2thYmxlPzogYm9vbGVhbjtcblx0cmVuZGVyQnVsbGV0PzogU3dpcGVyUmVuZGVyQnVsbGV0RnVuY3Rpb247XG5cdHJlbmRlckZyYWN0aW9uPzogU3dpcGVyUmVuZGVyRnJhY3Rpb25GdW5jdGlvbjtcblx0cmVuZGVyUHJvZ3Jlc3NiYXI/OiBTd2lwZXJSZW5kZXJQcm9ncmVzc2JhckZ1bmN0aW9uO1xuXHRyZW5kZXJDdXN0b20/OiBTd2lwZXJSZW5kZXJDdXN0b21GdW5jdGlvbjtcblx0YnVsbGV0Q2xhc3M/OiBzdHJpbmc7XG5cdGJ1bGxldEFjdGl2ZUNsYXNzPzogc3RyaW5nO1xuXHRtb2RpZmllckNsYXNzPzogc3RyaW5nO1xuXHRjdXJyZW50Q2xhc3M/OiBzdHJpbmc7XG5cdHRvdGFsQ2xhc3M/OiBzdHJpbmc7XG5cdGhpZGRlbkNsYXNzPzogc3RyaW5nO1xuXHRwcm9ncmVzc2JhckZpbGxDbGFzcz86IHN0cmluZztcblx0Y2xpY2thYmxlQ2xhc3M/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpcGVyTW91c2V3aGVlbEludGVyZmFjZSB7XG5cdGZvcmNlVG9BeGlzPzogYm9vbGVhbjtcblx0cmVsZWFzZU9uRWRnZXM/OiBib29sZWFuO1xuXHRpbnZlcnQ/OiBib29sZWFuO1xuXHRzZW5zaXRpdml0eT86IG51bWJlcjtcblx0ZXZlbnRzVGFyZ2V0Pzogc3RyaW5nIHwgSFRNTEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpcGVySGFzaE5hdmlnYXRpb25JbnRlcmZhY2Uge1xuXHR3YXRjaFN0YXRlPzogYm9vbGVhbjtcblx0cmVwbGFjZVN0YXRlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJGYWRlRWZmZWN0SW50ZXJmYWNlIHtcblx0Y3Jvc3NGYWRlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJGbGlwRWZmZWN0SW50ZXJmYWNlIHtcblx0bGltaXRSb3RhdGlvbj86IGJvb2xlYW47XG5cdHNsaWRlU2hhZG93cz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpcGVyQ3ViZUVmZmVjdEludGVyZmFjZSB7XG5cdHNoYWRvdz86IGJvb2xlYW47XG5cdHNoYWRvd1NjYWxlPzogbnVtYmVyO1xuXHRzaGFkb3dPZmZzZXQ/OiBudW1iZXI7XG5cdHNsaWRlU2hhZG93cz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpcGVyQ292ZXJmbG93RWZmZWN0SW50ZXJmYWNlIHtcblx0ZGVwdGg/OiBudW1iZXI7XG5cdHJvdGF0ZT86IG51bWJlcjtcblx0c3RyZXRjaD86IG51bWJlcjtcblx0bW9kaWZpZXI/OiBudW1iZXI7XG5cdHNsaWRlU2hhZG93cz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpcGVyQnJlYWtwb2ludHNJbnRlcmZhY2Uge1xuXHRbc2l6ZTogbnVtYmVyXTogU3dpcGVyQ29uZmlnSW50ZXJmYWNlO1xufVxuXG5leHBvcnQgY2xhc3MgU3dpcGVyQ29uZmlnIGltcGxlbWVudHMgU3dpcGVyQ29uZmlnSW50ZXJmYWNlIHtcblx0cHVibGljIG9uPzogYW55O1xuXG5cdC8vIFN3aXBlciBwYXJhbWV0ZXJzXG5cdHB1YmxpYyBpbml0PzogYm9vbGVhbjtcblx0cHVibGljIGluaXRpYWxTbGlkZT86IG51bWJlcjtcblx0cHVibGljIGRpcmVjdGlvbj86IHN0cmluZztcblx0cHVibGljIHNwZWVkPzogbnVtYmVyO1xuXHRwdWJsaWMgc2V0V3JhcHBlclNpemU/OiBib29sZWFuO1xuXHRwdWJsaWMgdmlydHVhbFRyYW5zbGF0ZT86IGJvb2xlYW47XG5cdHB1YmxpYyB3aWR0aD86IG51bWJlcjtcblx0cHVibGljIGhlaWdodD86IG51bWJlcjtcblx0cHVibGljIGF1dG9IZWlnaHQ/OiBib29sZWFuO1xuXHRwdWJsaWMgcm91bmRMZW5ndGhzPzogYm9vbGVhbjtcblx0cHVibGljIG5lc3RlZD86IGJvb2xlYW47XG5cdHB1YmxpYyB1bmlxdWVOYXZFbGVtZW50cz86IGJvb2xlYW47XG5cdHB1YmxpYyBlZmZlY3Q/OiBzdHJpbmc7XG5cdHB1YmxpYyBydW5DYWxsYmFja3NPbkluaXQ/OiBib29sZWFuO1xuXHRwdWJsaWMgd2F0Y2hPdmVyZmxvdz86IGJvb2xlYW47XG5cblx0Ly8gU2xpZGVzIGdyaWRcblx0cHVibGljIHNwYWNlQmV0d2Vlbj86IG51bWJlcjtcblx0cHVibGljIHNsaWRlc1BlclZpZXc/OiBudW1iZXIgfCAnYXV0byc7XG5cdHB1YmxpYyBzbGlkZXNQZXJDb2x1bW4/OiBudW1iZXI7XG5cdHB1YmxpYyBzbGlkZXNQZXJDb2x1bW5GaWxsPzogc3RyaW5nO1xuXHRwdWJsaWMgc2xpZGVzUGVyR3JvdXA/OiBudW1iZXI7XG5cdHB1YmxpYyBjZW50ZXJlZFNsaWRlcz86IGJvb2xlYW47XG5cdHB1YmxpYyBzbGlkZXNPZmZzZXRCZWZvcmU/OiBudW1iZXI7XG5cdHB1YmxpYyBzbGlkZXNPZmZzZXRBZnRlcj86IG51bWJlcjtcblx0cHVibGljIG5vcm1hbGl6ZVNsaWRlSW5kZXg/OiBib29sZWFuO1xuXHRwdWJsaWMgY2VudGVySW5zdWZmaWNpZW50U2xpZGVzPzogYm9vbGVhbjtcblxuXHQvLyBHcmFiIGN1cnNvclxuXHRwdWJsaWMgZ3JhYkN1cnNvcj86IGJvb2xlYW47XG5cblx0Ly8gVG91Y2hlc1xuXHRwdWJsaWMgdG91Y2hFdmVudHNUYXJnZXQ/OiBzdHJpbmc7XG5cdHB1YmxpYyB0b3VjaFJhdGlvPzogbnVtYmVyO1xuXHRwdWJsaWMgdG91Y2hBbmdsZT86IG51bWJlcjtcblx0cHVibGljIHNpbXVsYXRlVG91Y2g/OiBib29sZWFuO1xuXHRwdWJsaWMgc2hvcnRTd2lwZXM/OiBib29sZWFuO1xuXHRwdWJsaWMgbG9uZ1N3aXBlcz86IGJvb2xlYW47XG5cdHB1YmxpYyBsb25nU3dpcGVzUmF0aW8/OiBudW1iZXI7XG5cdHB1YmxpYyBsb25nU3dpcGVzTXM/OiBudW1iZXI7XG5cdHB1YmxpYyBmb2xsb3dGaW5nZXI/OiBib29sZWFuO1xuXHRwdWJsaWMgYWxsb3dUb3VjaE1vdmU/OiBib29sZWFuO1xuXHRwdWJsaWMgdGhyZXNob2xkPzogbnVtYmVyO1xuXHRwdWJsaWMgdG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uPzogYm9vbGVhbjtcblx0cHVibGljIGlPU0VkZ2VTd2lwZURldGVjdGlvbj86IGJvb2xlYW47XG5cdHB1YmxpYyBpT1NFZGdlU3dpcGVUaHJlc2hvbGQ/OiBudW1iZXI7XG5cdHB1YmxpYyB0b3VjaFJlbGVhc2VPbkVkZ2VzPzogYm9vbGVhbjtcblx0cHVibGljIHBhc3NpdmVMaXN0ZW5lcnM/OiBib29sZWFuO1xuXG5cdC8vIFRvdWNoIHJlc2lzdGFuY2Vcblx0cHVibGljIHJlc2lzdGFuY2U/OiBib29sZWFuO1xuXHRwdWJsaWMgcmVzaXN0YW5jZVJhdGlvPzogbnVtYmVyO1xuXG5cdC8vIFN3aXBpbmcgLyBubyBzd2lwaW5nXG5cdHB1YmxpYyBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24/OiBib29sZWFuO1xuXHRwdWJsaWMgYWxsb3dTbGlkZVByZXY/OiBib29sZWFuO1xuXHRwdWJsaWMgYWxsb3dTbGlkZU5leHQ/OiBib29sZWFuO1xuXHRwdWJsaWMgbm9Td2lwaW5nPzogYm9vbGVhbjtcblx0cHVibGljIG5vU3dpcGluZ0NsYXNzPzogc3RyaW5nO1xuXHRwdWJsaWMgbm9Td2lwaW5nU2VsZWN0b3I/OiBzdHJpbmc7XG5cdHB1YmxpYyBzd2lwZUhhbmRsZXI/OiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcblxuXHQvLyBDbGlja3Ncblx0cHVibGljIHByZXZlbnRDbGlja3M/OiBib29sZWFuO1xuXHRwdWJsaWMgcHJldmVudENsaWNrc1Byb3BhZ2F0aW9uPzogYm9vbGVhbjtcblx0cHVibGljIHNsaWRlVG9DbGlja2VkU2xpZGU/OiBib29sZWFuO1xuXG5cdC8vIEZyZWVtb2RlXG5cdHB1YmxpYyBmcmVlTW9kZT86IGJvb2xlYW47XG5cdHB1YmxpYyBmcmVlTW9kZU1vbWVudHVtPzogYm9vbGVhbjtcblx0cHVibGljIGZyZWVNb2RlTW9tZW50dW1SYXRpbz86IG51bWJlcjtcblx0cHVibGljIGZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvPzogbnVtYmVyO1xuXHRwdWJsaWMgZnJlZU1vZGVNb21lbnR1bUJvdW5jZT86IGJvb2xlYW47XG5cdHB1YmxpYyBmcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW8/OiBudW1iZXI7XG5cdHB1YmxpYyBmcmVlTW9kZU1pbmltdW1WZWxvY2l0eT86IG51bWJlcjtcblx0cHVibGljIGZyZWVNb2RlU3RpY2t5PzogYm9vbGVhbjtcblxuXHQvLyBQcm9ncmVzc1xuXHRwdWJsaWMgd2F0Y2hTbGlkZXNQcm9ncmVzcz86IGJvb2xlYW47XG5cdHB1YmxpYyB3YXRjaFNsaWRlc1Zpc2liaWxpdHk/OiBib29sZWFuO1xuXG5cdC8vIEltYWdlc1xuXHRwdWJsaWMgcHJlbG9hZEltYWdlcz86IGJvb2xlYW47XG5cdHB1YmxpYyB1cGRhdGVPbkltYWdlc1JlYWR5PzogYm9vbGVhbjtcblxuXHQvLyBMb29wXG5cdHB1YmxpYyBsb29wPzogYm9vbGVhbjtcblx0cHVibGljIGxvb3BBZGRpdGlvbmFsU2xpZGVzPzogbnVtYmVyO1xuXHRwdWJsaWMgbG9vcGVkU2xpZGVzPzogbnVtYmVyO1xuXHRwdWJsaWMgbG9vcEZpbGxHcm91cFdpdGhCbGFuaz86IGJvb2xlYW47XG5cblx0Ly8gQnJlYWtwb2ludHNcblx0cHVibGljIGJyZWFrcG9pbnRzPzogYW55O1xuXHRwdWJsaWMgYnJlYWtwb2ludHNJbnZlcnNlPzogYm9vbGVhbjtcblxuXHQvLyBPYnNlcnZlclxuXHRwdWJsaWMgb2JzZXJ2ZXI/OiBib29sZWFuO1xuXHRwdWJsaWMgb2JzZXJ2ZVBhcmVudHM/OiBib29sZWFuO1xuXG5cdC8vIE5hbWVzcGFjZVxuXHRwdWJsaWMgY29udGFpbmVyTW9kaWZpZXJDbGFzcz86IHN0cmluZztcblx0cHVibGljIHNsaWRlQ2xhc3M/OiBzdHJpbmc7XG5cdHB1YmxpYyBzbGlkZUFjdGl2ZUNsYXNzPzogc3RyaW5nO1xuXHRwdWJsaWMgc2xpZGVEdXBsaWNhdGVkQWN0aXZlQ2xhc3M/OiBzdHJpbmc7XG5cdHB1YmxpYyBzbGlkZVZpc2libGVDbGFzcz86IHN0cmluZztcblx0cHVibGljIHNsaWRlRHVwbGljYXRlQ2xhc3M/OiBzdHJpbmc7XG5cdHB1YmxpYyBzbGlkZU5leHRDbGFzcz86IHN0cmluZztcblx0cHVibGljIHNsaWRlRHVwbGljYXRlZE5leHRDbGFzcz86IHN0cmluZztcblx0cHVibGljIHNsaWRlUHJldkNsYXNzPzogc3RyaW5nO1xuXHRwdWJsaWMgc2xpZGVEdXBsaWNhdGVkUHJldkNsYXNzPzogc3RyaW5nO1xuXHRwdWJsaWMgd3JhcHBlckNsYXNzPzogc3RyaW5nO1xuXG5cdC8vIEVmZmVjdHNcblx0cHVibGljIGZhZGVFZmZlY3Q/OiBhbnk7XG5cdHB1YmxpYyBmbGlwRWZmZWN0PzogYW55O1xuXHRwdWJsaWMgY3ViZUVmZmVjdD86IGFueTtcblx0cHVibGljIGNvdmVyZmxvd0VmZmVjdD86IGFueTtcblxuXHQvLyBDb21wb25lbnRzXG5cdHB1YmxpYyBwYXJhbGxheD86IGJvb2xlYW47XG5cdHB1YmxpYyBhMTF5PzogYm9vbGVhbiB8IGFueTtcblx0cHVibGljIGxhenk/OiBib29sZWFuIHwgYW55O1xuXHRwdWJsaWMgem9vbT86IGJvb2xlYW4gfCBhbnk7XG5cdHB1YmxpYyBoaXN0b3J5PzogYm9vbGVhbiB8IGFueTtcblx0cHVibGljIHZpcnR1YWw/OiBib29sZWFuIHwgYW55O1xuXHRwdWJsaWMgYXV0b3BsYXk/OiBib29sZWFuIHwgYW55O1xuXHRwdWJsaWMga2V5Ym9hcmQ/OiBib29sZWFuIHwgYW55O1xuXHRwdWJsaWMgc2Nyb2xsYmFyPzogYm9vbGVhbiB8IGFueTtcblx0cHVibGljIG1vdXNld2hlZWw/OiBib29sZWFuIHwgYW55O1xuXHRwdWJsaWMgY29udHJvbGxlcj86IGJvb2xlYW4gfCBhbnk7XG5cdHB1YmxpYyBuYXZpZ2F0aW9uPzogYm9vbGVhbiB8IGFueTtcblx0cHVibGljIHBhZ2luYXRpb24/OiBib29sZWFuIHwgYW55O1xuXHRwdWJsaWMgaGFzaE5hdmlnYXRpb24/OiBib29sZWFuIHwgYW55O1xuXG5cdGNvbnN0cnVjdG9yKGNvbmZpZzogU3dpcGVyQ29uZmlnSW50ZXJmYWNlID0ge30pIHtcblx0XHR0aGlzLmFzc2lnbihjb25maWcpO1xuXHR9XG5cblx0YXNzaWduKGNvbmZpZzogU3dpcGVyQ29uZmlnSW50ZXJmYWNlIHwgYW55ID0ge30sIHRhcmdldD86IGFueSkge1xuXHRcdHRhcmdldCA9IHRhcmdldCB8fCB0aGlzO1xuXHRcdGZvciAoY29uc3Qga2V5IGluIGNvbmZpZykge1xuXHRcdFx0aWYgKGNvbmZpZ1trZXldICE9IG51bGwgJiYgIUFycmF5LmlzQXJyYXkoY29uZmlnW2tleV0pICYmIHR5cGVvZiBjb25maWdba2V5XSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0KHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIShjb25maWdba2V5XSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkpIHtcblx0XHRcdFx0dGFyZ2V0W2tleV0gPSB7fTtcblx0XHRcdFx0dGhpcy5hc3NpZ24oY29uZmlnW2tleV0sIHRhcmdldFtrZXldKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhcmdldFtrZXldID0gY29uZmlnW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCB0eXBlIFN3aXBlclJlbmRlclNsaWRlRnVuY3Rpb24gPSAoc2xpZGU6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gSFRNTEVsZW1lbnQ7XG5leHBvcnQgdHlwZSBTd2lwZXJSZW5kZXJFeHRlcm5hbEZ1bmN0aW9uID0gKGRhdGE6IGFueSkgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIFN3aXBlclJlbmRlckN1c3RvbUZ1bmN0aW9uID0gKHN3aXBlcjogYW55LCBjdXJyZW50OiBudW1iZXIsIHRvdGFsOiBudW1iZXIpID0+IHN0cmluZztcbmV4cG9ydCB0eXBlIFN3aXBlclJlbmRlckJ1bGxldEZ1bmN0aW9uID0gKGluZGV4OiBudW1iZXIsIGNsYXNzTmFtZTogc3RyaW5nKSA9PiBzdHJpbmc7XG5leHBvcnQgdHlwZSBTd2lwZXJSZW5kZXJGcmFjdGlvbkZ1bmN0aW9uID0gKGN1cnJlbnRDbGFzczogc3RyaW5nLCB0b3RhbENsYXNzOiBzdHJpbmcpID0+IHN0cmluZztcbmV4cG9ydCB0eXBlIFN3aXBlclJlbmRlclByb2dyZXNzYmFyRnVuY3Rpb24gPSAocHJvZ3Jlc3NiYXJDbGFzczogc3RyaW5nKSA9PiBzdHJpbmc7XG4iXX0=