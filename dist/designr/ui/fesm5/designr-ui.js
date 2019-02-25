import { __spread, __extends } from 'tslib';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { DisposableComponent, CoreModule } from '@designr/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { InjectionToken, Inject, Injectable, Component, Input, Directive, ElementRef, EventEmitter, HostListener, Output, NgModule, Optional, SkipSelf, defineInjectable, inject, ViewEncapsulation, ReflectiveInjector, ComponentFactoryResolver, ViewChild, ViewContainerRef, PLATFORM_ID, NgZone, Renderer2 } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UIConfig = /** @class */ (function () {
    function UIConfig(options) {
        // console.log('UIConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
    return UIConfig;
}());
/** @type {?} */
var UI_CONFIG = new InjectionToken('ui.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UIService = /** @class */ (function () {
    function UIService(options) {
        // console.log('UIService', options);
        options = options || {};
        this.options = new UIConfig(options);
    }
    UIService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UIService.ctorParameters = function () { return [
        { type: UIConfig, decorators: [{ type: Inject, args: [UI_CONFIG,] }] }
    ]; };
    /** @nocollapse */ UIService.ngInjectableDef = defineInjectable({ factory: function UIService_Factory() { return new UIService(inject(UI_CONFIG)); }, token: UIService, providedIn: "root" });
    return UIService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UIModuleComponent = /** @class */ (function () {
    function UIModuleComponent() {
        this.version = '0.0.3';
    }
    /**
     * @return {?}
     */
    UIModuleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UIModuleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui-module',
                    template: "<span class=\"ui-module\">ui {{version}}</span>"
                }] }
    ];
    /** @nocollapse */
    UIModuleComponent.ctorParameters = function () { return []; };
    return UIModuleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(element) {
        this.element = element;
        this.clickOutside = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    ClickOutsideDirective.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var targetElement = (/** @type {?} */ (e.target));
        // console.log('ClickOutsideDirective.onClick', this.element.nativeElement, targetElement, this.element.nativeElement.contains(targetElement));
        // const documentContained: boolean = Boolean(document.compareDocumentPosition(targetElement) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        // console.log(targetElement, documentContained);
        /** @type {?} */
        var clickedInside = this.element.nativeElement.contains(targetElement) || !document.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    };
    ClickOutsideDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[clickOutside]'
                },] }
    ];
    /** @nocollapse */
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ClickOutsideDirective.propDecorators = {
        clickOutside: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return ClickOutsideDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// use require for polyfill
var LazyImagesDirective = /** @class */ (function () {
    function LazyImagesDirective(platformId, element, renderer, zone) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.zone = zone;
        this.nativeElement = element.nativeElement;
    }
    /**
     * @return {?}
     */
    LazyImagesDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular(function () {
            require('intersection-observer'); // use require for polyfill
            _this.onRegister();
        });
    };
    /**
     * @return {?}
     */
    LazyImagesDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    /**
     * @return {?}
     */
    LazyImagesDirective.prototype.onRegister = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.newIntersectionObserver();
        /** @type {?} */
        var observer = new MutationObserver(function (mutations) { return _this.onChange(mutations); });
        /** @type {?} */
        var config = {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true
        };
        observer.observe(this.nativeElement, config);
        this.onChange();
        // this.observeDOMChanges(this.nativeElement, () => this.onChange);
    };
    /**
     * @param {...?} data
     * @return {?}
     */
    LazyImagesDirective.prototype.onChange = /**
     * @param {...?} data
     * @return {?}
     */
    function () {
        var _this = this;
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        /** @type {?} */
        var images = Array.from(this.nativeElement.querySelectorAll('img[data-src], [data-srcset], [data-background-src]'));
        images.forEach(function (image) { return _this.observer.observe(image); });
    };
    /**
     * @return {?}
     */
    LazyImagesDirective.prototype.newIntersectionObserver = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var config = this.lazyImages instanceof Object ? this.lazyImages : undefined;
        this.observer = new IntersectionObserver(function (images) { return images.forEach(function (image) {
            if (!image.isIntersecting) {
                return;
            }
            _this.onAppearsInViewport(image.target);
        }); }, config);
        return this.observer;
    };
    /**
     * @param {?} image
     * @return {?}
     */
    LazyImagesDirective.prototype.onAppearsInViewport = /**
     * @param {?} image
     * @return {?}
     */
    function (image) {
        var _this = this;
        if (image.dataset.src) {
            /** @type {?} */
            var input = image.dataset.src;
            this.onImagePreload(input, function (output) {
                _this.renderer.setAttribute(image, 'src', output);
                _this.renderer.removeAttribute(image, 'data-src');
                _this.zone.runOutsideAngular(function () {
                    setTimeout(function () {
                        _this.renderer.addClass(image, 'ready');
                    }, 1);
                });
            });
        }
        if (image.dataset.srcset) {
            this.renderer.setAttribute(image, 'srcset', image.dataset.srcset);
            this.renderer.removeAttribute(image, 'data-srcset');
        }
        if (image.dataset.backgroundSrc) {
            this.renderer.setStyle(image, 'background-image', "url(" + image.dataset.backgroundSrc + ")");
            this.renderer.removeAttribute(image, 'data-background-src');
        }
        if (this.observer) {
            this.observer.unobserve(image);
        }
    };
    /**
     * @param {?} src
     * @param {?} callback
     * @return {?}
     */
    LazyImagesDirective.prototype.onImagePreload = /**
     * @param {?} src
     * @param {?} callback
     * @return {?}
     */
    function (src, callback) {
        /** @type {?} */
        var img = new Image();
        img.onload = function () {
            if (typeof callback === 'function') {
                callback(img.src);
            }
        };
        img.onerror = function (e) {
            img.onerror = null;
            img.src = 'data:image/png;base64,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';
        };
        img.src = src;
    };
    LazyImagesDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lazy-images]'
                },] }
    ];
    /** @nocollapse */
    LazyImagesDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    LazyImagesDirective.propDecorators = {
        lazyImages: [{ type: Input }]
    };
    return LazyImagesDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ModalEventType = {
    Complete: 0,
    Close: 1,
};
ModalEventType[ModalEventType.Complete] = 'Complete';
ModalEventType[ModalEventType.Close] = 'Close';
var ModalCompleteEvent = /** @class */ (function () {
    function ModalCompleteEvent(options) {
        this.type = ModalEventType.Complete;
        // console.log('ModalCompleteEvent', options);
        if (options) {
            Object.assign(this, options);
        }
    }
    return ModalCompleteEvent;
}());
var ModalCloseEvent = /** @class */ (function () {
    function ModalCloseEvent(options) {
        this.type = ModalEventType.Close;
        if (options) {
            Object.assign(this, options);
        }
    }
    return ModalCloseEvent;
}());
var Modal = /** @class */ (function () {
    function Modal(options) {
        this.providers = [];
        this.emitter = new EventEmitter();
        if (options) {
            Object.assign(this, options);
        }
    }
    Modal.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Modal.ctorParameters = function () { return [
        { type: Modal }
    ]; };
    /** @nocollapse */ Modal.ngInjectableDef = defineInjectable({ factory: function Modal_Factory() { return new Modal(inject(Modal)); }, token: Modal, providedIn: "root" });
    return Modal;
}());
var ModalData = /** @class */ (function (_super) {
    __extends(ModalData, _super);
    function ModalData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalData.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ ModalData.ngInjectableDef = defineInjectable({ factory: function ModalData_Factory() { return new ModalData(); }, token: ModalData, providedIn: "root" });
    return ModalData;
}(Object));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalService = /** @class */ (function () {
    function ModalService(platformId) {
        this.platformId = platformId;
        this.modals$ = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    ModalService.prototype.getInfos = /**
     * @return {?}
     */
    function () {
        return this.modals$.pipe(map(function (modals) {
            return modals.length ? modals[modals.length - 1] : null;
        }));
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ModalService.prototype.addClass = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var body = (/** @type {?} */ (document.querySelector('body')));
            body.classList.add(name);
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ModalService.prototype.removeClass = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var body = (/** @type {?} */ (document.querySelector('body')));
            body.classList.remove(name);
        }
    };
    /**
     * @param {?} modal
     * @return {?}
     */
    ModalService.prototype.open = /**
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        this.addClass('modal-active');
        modal = new Modal(modal);
        /** @type {?} */
        var modals = this.modals$.getValue();
        modals.push(modal);
        this.modals$.next(modals);
        return modal.emitter;
        // event emitter bound to modals$
    };
    /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    ModalService.prototype.complete = /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    function (modal, data) {
        modal = modal ? this.remove(modal) : this.pop();
        if (modal) {
            modal.emitter.emit(new ModalCompleteEvent({ modal: modal, data: data }));
        }
    };
    /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    ModalService.prototype.close = /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    function (modal, data) {
        modal = this.removeAll();
        if (modal) {
            modal.emitter.emit(new ModalCloseEvent({ modal: modal, data: data }));
        }
    };
    /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    ModalService.prototype.prev = /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    function (modal, data) {
        modal = modal ? this.remove(modal) : this.pop();
        if (modal) {
            modal.emitter.emit(new ModalCloseEvent({ modal: modal, data: data }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    ModalService.prototype.pop = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modals = this.modals$.getValue();
        if (modals.length) {
            /** @type {?} */
            var modal = modals.pop();
            if (!modals.length) {
                this.removeClass('modal-active');
            }
            this.modals$.next(modals);
            return modal;
        }
        else {
            return null;
        }
    };
    /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    ModalService.prototype.remove = /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        /** @type {?} */
        var modals = this.modals$.getValue();
        if (modals.length && modals[modals.length - 1] === modal) {
            modals.pop();
            if (!modals.length) {
                this.removeClass('modal-active');
            }
            this.modals$.next(modals);
            return modal;
        }
        else {
            return null;
        }
    };
    /**
     * @private
     * @return {?}
     */
    ModalService.prototype.removeAll = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modals = this.modals$.getValue();
        if (modals.length) {
            /** @type {?} */
            var modal = modals.pop();
            this.removeClass('modal-active');
            this.modals$.next([]);
            return modal;
        }
        else {
            return null;
        }
    };
    ModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    /** @nocollapse */ ModalService.ngInjectableDef = defineInjectable({ factory: function ModalService_Factory() { return new ModalService(inject(PLATFORM_ID)); }, token: ModalService, providedIn: "root" });
    return ModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalContainerComponent = /** @class */ (function (_super) {
    __extends(ModalContainerComponent, _super);
    function ModalContainerComponent(modalService) {
        var _this = _super.call(this) || this;
        _this.modalService = modalService;
        _this.modalCount = 0;
        return _this;
    }
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.modalService.modals$.pipe(takeUntil(this.unsubscribe), map(function (modals) {
            _this.modalCount = modals.length;
            /** @type {?} */
            var modal = modals.length ? modals[modals.length - 1] : null;
            return modal;
        })).subscribe(function (modal) {
            _this.className = modal ? modal.className : null;
        });
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.doClose = /**
     * @return {?}
     */
    function () {
        this.modalService.close();
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.doPrev = /**
     * @return {?}
     */
    function () {
        this.modalService.prev();
    };
    ModalContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'core-modal-container-component',
                    template: "<div class=\"modal\" [ngClass]=\"{ active: modalCount > 0 }\">\r\n\t<div class=\"modal-bg\" (click)=\"doClose()\"></div>\r\n\t<div class=\"modal-page\" [ngClass]=\"className\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<button type=\"button\" class=\"btn btn--prev\" (click)=\"doPrev()\" *ngIf=\"modalCount > 1\" [title]=\"'modal.back' | label : 'back'\">\r\n\t\t\t\t<span sprite=\"ico-prev\"></span>\r\n\t\t\t\t<span>{{'modal.back' | label : 'back'}}</span>\r\n\t\t\t</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn--close\" (click)=\"doClose()\" title=\"'modal.close' | label : 'close'\">\r\n\t\t\t\t<span sprite=\"ico-close\"></span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<ng-container *ngFor=\"let modal of (modalService.modals$ | async); let last = last;\">\r\n\t\t\t\t<core-modal-view-component [modal]=\"modal\" [hidden]=\"!last\"></core-modal-view-component>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
                    encapsulation: ViewEncapsulation.Emulated
                }] }
    ];
    /** @nocollapse */
    ModalContainerComponent.ctorParameters = function () { return [
        { type: ModalService }
    ]; };
    return ModalContainerComponent;
}(DisposableComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalViewComponent = /** @class */ (function (_super) {
    __extends(ModalViewComponent, _super);
    function ModalViewComponent(resolver) {
        var _this = _super.call(this) || this;
        _this.resolver = resolver;
        return _this;
    }
    Object.defineProperty(ModalViewComponent.prototype, "modal", {
        set: /**
         * @param {?} modal
         * @return {?}
         */
        function (modal) {
            if (this.component) {
                this.component.destroy();
            }
            if (!modal) {
                this.component = null;
                return;
            }
            /** @type {?} */
            var providers = Object.keys(modal.providers).map(function (key) {
                return { provide: key, useValue: modal.providers[key] };
            });
            providers.push({ provide: ModalData, useValue: modal.data }, { provide: Modal, useValue: modal });
            /** @type {?} */
            var resolvedInputs = ReflectiveInjector.resolve(providers);
            /** @type {?} */
            var injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.modalContainer.parentInjector);
            /** @type {?} */
            var factory = this.resolver.resolveComponentFactory(modal.component);
            /** @type {?} */
            var component = factory.create(injector);
            this.modalContainer.insert(component.hostView);
            this.component = component;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalViewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.component) {
            this.component.destroy();
            this.component = null;
        }
    };
    ModalViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'core-modal-view-component',
                    template: "<ng-container #modalContainer></ng-container>\r\n",
                    // styleUrls: ['./modal-view.component.scss'],
                    encapsulation: ViewEncapsulation.Emulated
                }] }
    ];
    /** @nocollapse */
    ModalViewComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    ModalViewComponent.propDecorators = {
        modalContainer: [{ type: ViewChild, args: ['modalContainer', { read: ViewContainerRef },] }],
        modal: [{ type: Input }]
    };
    return ModalViewComponent;
}(DisposableComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollDirective = /** @class */ (function (_super) {
    __extends(ScrollDirective, _super);
    function ScrollDirective(platformId, zone, elementRef) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.zone = zone;
        _this.elementRef = elementRef;
        _this.scroll = new EventEmitter();
        _this.scrollEvent = new Observable(function (observer) {
            return _this.zone.runOutsideAngular(function () {
                return fromEvent(_this.elementRef.nativeElement, 'scroll')
                    .pipe(takeUntil(_this.unsubscribe))
                    .subscribe(observer);
            });
        });
        _this.scrollDocumentEvent = new Observable(function (observer) {
            return _this.zone.runOutsideAngular(function () {
                return fromEvent(window.document, 'scroll')
                    .pipe(takeUntil(_this.unsubscribe))
                    .subscribe(observer);
            });
        });
        return _this;
    }
    /**
     * @return {?}
     */
    ScrollDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.scrollDocumentEvent.subscribe(function (event) {
            /** @type {?} */
            var e = {
                scrollHeight: document.scrollingElement.scrollHeight,
                scrollLeft: document.scrollingElement.scrollLeft,
                scrollTop: document.scrollingElement.scrollTop,
                scrollWidth: document.scrollingElement.scrollWidth,
                originalEvent: event,
            };
            _this.scroll.emit(e);
        });
    };
    ScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[scroll]'
                },] }
    ];
    /** @nocollapse */
    ScrollDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone },
        { type: ElementRef }
    ]; };
    ScrollDirective.propDecorators = {
        scroll: [{ type: Output }]
    };
    return ScrollDirective;
}(DisposableComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SpriteComponent = /** @class */ (function () {
    function SpriteComponent() {
    }
    SpriteComponent.decorators = [
        { type: Component, args: [{
                    selector: '[sprite]',
                    template: "<ng-container *ngIf=\"sprite\">\n\t<svg class=\"sprite\"><use attr.xlink:href=\"#{{sprite}}\"></use></svg>\n</ng-container>"
                }] }
    ];
    SpriteComponent.propDecorators = {
        sprite: [{ type: Input }]
    };
    return SpriteComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services = [
    UIService,
    ModalService,
];
/** @type {?} */
var components = [
    UIModuleComponent,
    ModalContainerComponent,
    ModalViewComponent,
    SpriteComponent,
];
/** @type {?} */
var directives = [
    ClickOutsideDirective,
    LazyImagesDirective,
    ScrollDirective,
];
var UIModule = /** @class */ (function () {
    function UIModule(parentModule) {
        if (parentModule) {
            throw new Error('UIModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    UIModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: UIModule,
            providers: [
                { provide: UI_CONFIG, useValue: config },
            ]
        };
    };
    UIModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CoreModule,
                    ],
                    providers: __spread(services),
                    declarations: __spread(components, directives),
                    exports: __spread([
                        CoreModule
                    ], components, directives),
                },] }
    ];
    /** @nocollapse */
    UIModule.ctorParameters = function () { return [
        { type: UIModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return UIModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { UIConfig, UI_CONFIG, UIService, UIModuleComponent, UIModule, ClickOutsideDirective, LazyImagesDirective, ModalCompleteEvent, ModalData, ModalContainerComponent, ModalViewComponent, ModalService, ScrollDirective, SpriteComponent as ɵa };

//# sourceMappingURL=designr-ui.js.map