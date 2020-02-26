import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, Component, EventEmitter, ɵɵdirectiveInject, ElementRef, ɵɵdefineDirective, Directive, Input, Output, PLATFORM_ID, Renderer2, NgZone, ɵɵgetInheritedFactory, Injector, ComponentFactoryResolver, ɵɵstaticViewQuery, ViewContainerRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵInheritDefinitionFeature, ɵɵelementContainer, ViewEncapsulation, ViewChild, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵpipe, ɵɵnamespaceSVG, ɵɵelement, ɵɵnamespaceHTML, ɵɵproperty, ɵɵpipeBind2, ɵɵtextInterpolate, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵtemplate, ɵɵpureFunction1, ɵɵpipeBind1, ɵɵattributeInterpolate1, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { __extends, __spread } from 'tslib';
import { isPlatformBrowser, NgClass, NgIf, NgForOf, AsyncPipe, CommonModule } from '@angular/common';
import { DisposableComponent, LabelPipe, DisposableDirective, CoreModule } from '@designr/core';
import { EventManager } from '@angular/platform-browser';
import { map, takeUntil, shareReplay, filter, distinctUntilChanged, tap } from 'rxjs/operators';
import { BehaviorSubject, range, of, Observable, fromEvent } from 'rxjs';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';

var UIConfig = /** @class */ (function () {
    function UIConfig(options) {
        // console.log('UIConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
    return UIConfig;
}());
var UI_CONFIG = new InjectionToken('ui.config');

var UIService = /** @class */ (function () {
    function UIService(options) {
        // console.log('UIService', options);
        options = options || {};
        this.options = new UIConfig(options);
    }
    UIService.ɵfac = function UIService_Factory(t) { return new (t || UIService)(ɵɵinject(UI_CONFIG)); };
    UIService.ɵprov = ɵɵdefineInjectable({ token: UIService, factory: UIService.ɵfac, providedIn: 'root' });
    return UIService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UIService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: UIConfig, decorators: [{
                type: Inject,
                args: [UI_CONFIG]
            }] }]; }, null); })();

var UIModuleComponent = /** @class */ (function () {
    function UIModuleComponent() {
        this.version = '0.0.12';
    }
    UIModuleComponent.prototype.ngOnInit = function () {
    };
    UIModuleComponent.ɵfac = function UIModuleComponent_Factory(t) { return new (t || UIModuleComponent)(); };
    UIModuleComponent.ɵcmp = ɵɵdefineComponent({ type: UIModuleComponent, selectors: [["ui-module"]], decls: 2, vars: 1, consts: [[1, "ui-module"]], template: function UIModuleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "span", 0);
            ɵɵtext(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵtextInterpolate1("ui ", ctx.version, "");
        } }, encapsulation: 2 });
    return UIModuleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UIModuleComponent, [{
        type: Component,
        args: [{
                selector: 'ui-module',
                template: "<span class=\"ui-module\">ui {{version}}</span>",
                styles: []
            }]
    }], function () { return []; }, null); })();

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(eventManager, element) {
        this.eventManager = eventManager;
        this.element = element;
        this.initialFocus = false;
        this.clickOutside = new EventEmitter();
    }
    ClickOutsideDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.eventManager.getZone().runOutsideAngular(function () {
            _this.removeClick = _this.eventManager.addGlobalEventListener('document', 'click', function (e) {
                _this.onClick(e);
            });
        });
    };
    ClickOutsideDirective.prototype.ngOnDestroy = function () {
        this.removeClick();
    };
    // @HostListener('document:click', ['$event'])
    ClickOutsideDirective.prototype.onClick = function (e) {
        var _this = this;
        var targetElement = e.target;
        // console.log('ClickOutsideDirective.onClick', this.element.nativeElement, targetElement, this.element.nativeElement.contains(targetElement));
        // const documentContained: boolean = Boolean(document.compareDocumentPosition(targetElement) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        // console.log(targetElement, documentContained);
        var clickedInside = this.element.nativeElement.contains(targetElement) || !document.contains(targetElement);
        if (!clickedInside) {
            if (this.initialFocus) {
                this.initialFocus = false;
                this.eventManager.getZone().run(function () {
                    _this.clickOutside.emit(null);
                });
            }
        }
        else {
            this.initialFocus = true;
        }
    };
    ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(ɵɵdirectiveInject(EventManager), ɵɵdirectiveInject(ElementRef)); };
    ClickOutsideDirective.ɵdir = ɵɵdefineDirective({ type: ClickOutsideDirective, selectors: [["", "clickOutside", ""]], inputs: { initialFocus: "initialFocus" }, outputs: { clickOutside: "clickOutside" } });
    return ClickOutsideDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ClickOutsideDirective, [{
        type: Directive,
        args: [{
                selector: '[clickOutside]'
            }]
    }], function () { return [{ type: EventManager }, { type: ElementRef }]; }, { initialFocus: [{
            type: Input
        }], clickOutside: [{
            type: Output
        }] }); })();

var LazyImagesDirective = /** @class */ (function () {
    function LazyImagesDirective(platformId, element, renderer, zone) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.zone = zone;
        this.nativeElement = element.nativeElement;
    }
    LazyImagesDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular(function () {
            require('intersection-observer'); // use require for polyfill
            _this.onRegister();
        });
    };
    LazyImagesDirective.prototype.ngOnDestroy = function () {
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    LazyImagesDirective.prototype.onRegister = function () {
        var _this = this;
        this.newIntersectionObserver();
        var observer = new MutationObserver(function (mutations) { return _this.onChange(mutations); });
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
    LazyImagesDirective.prototype.onChange = function () {
        var _this = this;
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        var images = Array.from(this.nativeElement.querySelectorAll('img[data-src], [data-srcset], [data-background-src]'));
        images.forEach(function (image) { return _this.observer.observe(image); });
    };
    LazyImagesDirective.prototype.newIntersectionObserver = function () {
        var _this = this;
        var config = this.lazyImages instanceof Object ? this.lazyImages : undefined;
        this.observer = new IntersectionObserver(function (images) { return images.forEach(function (image) {
            if (!image.isIntersecting) {
                return;
            }
            _this.onAppearsInViewport(image.target);
        }); }, config);
        return this.observer;
    };
    LazyImagesDirective.prototype.onAppearsInViewport = function (image) {
        var _this = this;
        if (image.dataset.srcset) {
            this.renderer.setAttribute(image, 'srcset', image.dataset.srcset);
            this.renderer.removeAttribute(image, 'data-srcset');
            if (image.dataset.src) {
                this.renderer.setAttribute(image, 'src', image.dataset.src);
                this.renderer.removeAttribute(image, 'data-src');
            }
        }
        else if (image.dataset.src) {
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
        if (image.dataset.backgroundSrc) {
            this.renderer.setStyle(image, 'background-image', "url(" + image.dataset.backgroundSrc + ")");
            this.renderer.removeAttribute(image, 'data-background-src');
        }
        if (this.observer) {
            this.observer.unobserve(image);
        }
    };
    LazyImagesDirective.prototype.onImagePreload = function (src, callback) {
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
    LazyImagesDirective.ɵfac = function LazyImagesDirective_Factory(t) { return new (t || LazyImagesDirective)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone)); };
    LazyImagesDirective.ɵdir = ɵɵdefineDirective({ type: LazyImagesDirective, selectors: [["", "lazy-images", ""]], inputs: { lazyImages: "lazyImages" } });
    return LazyImagesDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(LazyImagesDirective, [{
        type: Directive,
        args: [{
                selector: '[lazy-images]'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ElementRef }, { type: Renderer2 }, { type: NgZone }]; }, { lazyImages: [{
            type: Input
        }] }); })();

var ModalEventType;
(function (ModalEventType) {
    ModalEventType[ModalEventType["Complete"] = 0] = "Complete";
    ModalEventType[ModalEventType["Close"] = 1] = "Close";
})(ModalEventType || (ModalEventType = {}));
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
    Modal.ɵfac = function Modal_Factory(t) { return new (t || Modal)(ɵɵinject(Modal)); };
    Modal.ɵprov = ɵɵdefineInjectable({ token: Modal, factory: Modal.ɵfac, providedIn: 'root' });
    return Modal;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(Modal, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Modal }]; }, null); })();
var ModalData = /** @class */ (function (_super) {
    __extends(ModalData, _super);
    function ModalData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalData.ɵfac = function ModalData_Factory(t) { return ɵModalData_BaseFactory(t || ModalData); };
    ModalData.ɵprov = ɵɵdefineInjectable({ token: ModalData, factory: ModalData.ɵfac, providedIn: 'root' });
    return ModalData;
}(Object));
var ɵModalData_BaseFactory = ɵɵgetInheritedFactory(ModalData);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModalData, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

var ModalService = /** @class */ (function () {
    function ModalService(platformId) {
        this.platformId = platformId;
        this.modals$ = new BehaviorSubject([]);
    }
    ModalService.prototype.getInfos = function () {
        return this.modals$.pipe(map(function (modals) {
            return modals.length ? modals[modals.length - 1] : null;
        }));
    };
    ModalService.prototype.addClass = function (name) {
        if (isPlatformBrowser(this.platformId)) {
            var body = document.querySelector('body');
            body.classList.add(name);
        }
    };
    ModalService.prototype.removeClass = function (name) {
        if (isPlatformBrowser(this.platformId)) {
            var body = document.querySelector('body');
            body.classList.remove(name);
        }
    };
    ModalService.prototype.open = function (modal) {
        this.addClass('modal-active');
        modal = new Modal(modal);
        var modals = this.modals$.getValue();
        modals.push(modal);
        this.modals$.next(modals);
        return modal.emitter;
        // event emitter bound to modals$
    };
    ModalService.prototype.complete = function (modal, data) {
        modal = modal ? this.remove(modal) : this.pop();
        if (modal) {
            modal.emitter.emit(new ModalCompleteEvent({ modal: modal, data: data }));
        }
    };
    ModalService.prototype.close = function (modal, data) {
        modal = this.removeAll();
        if (modal) {
            modal.emitter.emit(new ModalCloseEvent({ modal: modal, data: data }));
        }
    };
    ModalService.prototype.prev = function (modal, data) {
        modal = modal ? this.remove(modal) : this.pop();
        if (modal) {
            modal.emitter.emit(new ModalCloseEvent({ modal: modal, data: data }));
        }
    };
    ModalService.prototype.pop = function () {
        var modals = this.modals$.getValue();
        if (modals.length) {
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
    ModalService.prototype.remove = function (modal) {
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
    ModalService.prototype.removeAll = function () {
        var modals = this.modals$.getValue();
        if (modals.length) {
            var modal = modals.pop();
            this.removeClass('modal-active');
            this.modals$.next([]);
            return modal;
        }
        else {
            return null;
        }
    };
    ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(ɵɵinject(PLATFORM_ID)); };
    ModalService.ɵprov = ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
    return ModalService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();

var _c0 = ["modalContainer"];
var ModalViewComponent = /** @class */ (function (_super) {
    __extends(ModalViewComponent, _super);
    function ModalViewComponent(resolver) {
        var _this = _super.call(this) || this;
        _this.resolver = resolver;
        return _this;
    }
    ModalViewComponent.prototype.ngOnInit = function () {
        this.setModal(this.modal);
    };
    ModalViewComponent.prototype.ngOnDestroy = function () {
        if (this.component) {
            this.component.destroy();
            this.component = null;
        }
    };
    ModalViewComponent.prototype.setModal = function (modal) {
        if (this.component) {
            this.component.destroy();
        }
        if (!modal) {
            this.component = null;
            return;
        }
        var providers = Object.keys(modal.providers).map(function (key) {
            return { provide: key, useValue: modal.providers[key] };
        });
        providers.push({ provide: ModalData, useValue: modal.data }, { provide: Modal, useValue: modal });
        var injector = Injector.create({ providers: providers });
        // const resolvedInputs = ReflectiveInjector.resolve(providers);
        // const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.modalContainer.parentInjector);
        var factory = this.resolver.resolveComponentFactory(modal.component);
        var component = factory.create(injector);
        this.modalContainer.insert(component.hostView);
        this.component = component;
        // this.changeDetector.markForCheck();
    };
    ModalViewComponent.ɵfac = function ModalViewComponent_Factory(t) { return new (t || ModalViewComponent)(ɵɵdirectiveInject(ComponentFactoryResolver)); };
    ModalViewComponent.ɵcmp = ɵɵdefineComponent({ type: ModalViewComponent, selectors: [["core-modal-view-component"]], viewQuery: function ModalViewComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalContainer = _t.first);
        } }, inputs: { modal: "modal" }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [["modalContainer", ""]], template: function ModalViewComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainer(0, null, 0);
        } }, encapsulation: 2 });
    return ModalViewComponent;
}(DisposableComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModalViewComponent, [{
        type: Component,
        args: [{
                selector: 'core-modal-view-component',
                templateUrl: './modal-view.component.html',
                // styleUrls: ['./modal-view.component.scss'],
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: ComponentFactoryResolver }]; }, { modalContainer: [{
            type: ViewChild,
            args: ['modalContainer', { read: ViewContainerRef, static: true }]
        }], modal: [{
            type: Input
        }] }); })();

function ModalContainerComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function ModalContainerComponent_button_4_Template_button_click_0_listener($event) { ɵɵrestoreView(_r11); var ctx_r10 = ɵɵnextContext(); return ctx_r10.doPrev(); });
    ɵɵpipe(1, "label");
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg");
    ɵɵelement(3, "use", 10);
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵpipe(6, "label");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("title", ɵɵpipeBind2(1, 2, "modal.back", "back"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind2(6, 5, "modal.back", "back"));
} }
function ModalContainerComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "core-modal-view-component", 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var modal_r12 = ctx.$implicit;
    var last_r13 = ctx.last;
    ɵɵadvance(1);
    ɵɵproperty("modal", modal_r12)("hidden", !last_r13);
} }
var _c0$1 = function (a0) { return { active: a0 }; };
var ModalContainerComponent = /** @class */ (function (_super) {
    __extends(ModalContainerComponent, _super);
    function ModalContainerComponent(modalService) {
        var _this = _super.call(this) || this;
        _this.modalService = modalService;
        _this.modalCount = 0;
        return _this;
    }
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalService.modals$.pipe(takeUntil(this.unsubscribe), map(function (modals) {
            _this.modalCount = modals.length;
            var modal = modals.length ? modals[modals.length - 1] : null;
            return modal;
        })).subscribe(function (modal) {
            _this.className = modal ? modal.className : null;
        });
    };
    ModalContainerComponent.prototype.doClose = function () {
        this.modalService.close();
    };
    ModalContainerComponent.prototype.doPrev = function () {
        this.modalService.prev();
    };
    ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) { return new (t || ModalContainerComponent)(ɵɵdirectiveInject(ModalService)); };
    ModalContainerComponent.ɵcmp = ɵɵdefineComponent({ type: ModalContainerComponent, selectors: [["core-modal-container-component"]], features: [ɵɵInheritDefinitionFeature], decls: 14, vars: 12, consts: [[1, "modal", 3, "ngClass"], [1, "modal__background", 3, "click"], [1, "modal__page", 3, "ngClass"], [1, "modal__header"], ["type", "button", "class", "btn btn--prev", 3, "title", "click", 4, "ngIf"], ["type", "button", "title", "'modal.close' | label : 'close'", 1, "btn", "btn--close", 3, "click"], [0, "xlink", "href", "#close"], [1, "modal__content"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn--prev", 3, "title", "click"], [0, "xlink", "href", "#prev"], [3, "modal", "hidden"]], template: function ModalContainerComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵlistener("click", function ModalContainerComponent_Template_div_click_1_listener($event) { return ctx.doClose(); });
            ɵɵelementEnd();
            ɵɵelementStart(2, "div", 2);
            ɵɵelementStart(3, "div", 3);
            ɵɵtemplate(4, ModalContainerComponent_button_4_Template, 7, 8, "button", 4);
            ɵɵelementStart(5, "button", 5);
            ɵɵlistener("click", function ModalContainerComponent_Template_button_click_5_listener($event) { return ctx.doClose(); });
            ɵɵnamespaceSVG();
            ɵɵelementStart(6, "svg");
            ɵɵelement(7, "use", 6);
            ɵɵelementEnd();
            ɵɵnamespaceHTML();
            ɵɵelementStart(8, "span");
            ɵɵtext(9);
            ɵɵpipe(10, "label");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(11, "div", 7);
            ɵɵtemplate(12, ModalContainerComponent_ng_container_12_Template, 2, 2, "ng-container", 8);
            ɵɵpipe(13, "async");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c0$1, ctx.modalCount > 0));
            ɵɵadvance(2);
            ɵɵproperty("ngClass", ctx.className);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.modalCount > 1);
            ɵɵadvance(5);
            ɵɵtextInterpolate(ɵɵpipeBind2(10, 5, "modal.close", "close"));
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ɵɵpipeBind1(13, 8, ctx.modalService.modals$));
        } }, directives: [NgClass, NgIf, NgForOf, ModalViewComponent], pipes: [LabelPipe, AsyncPipe], encapsulation: 2 });
    return ModalContainerComponent;
}(DisposableComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModalContainerComponent, [{
        type: Component,
        args: [{
                selector: 'core-modal-container-component',
                templateUrl: './modal-container.component.html',
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: ModalService }]; }, null); })();

var RafService = /** @class */ (function () {
    function RafService(platformId, zone) {
        this.platformId = platformId;
        this.zone = zone;
    }
    RafService.prototype.raf$ = function () {
        var _this = this;
        return this.zone.runOutsideAngular(function () {
            if (isPlatformBrowser(_this.platformId)) {
                return range(0, Number.POSITIVE_INFINITY, animationFrame).pipe(shareReplay());
            }
            else {
                return of(null);
            }
        });
    };
    RafService.ɵfac = function RafService_Factory(t) { return new (t || RafService)(ɵɵinject(PLATFORM_ID), ɵɵinject(NgZone)); };
    RafService.ɵprov = ɵɵdefineInjectable({ token: RafService, factory: RafService.ɵfac, providedIn: 'root' });
    return RafService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(RafService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: NgZone }]; }, null); })();

var Point = /** @class */ (function () {
    function Point() {
        this.top = 0;
        this.left = 0;
        this.x = 0;
        this.y = 0;
    }
    return Point;
}());
var Rect = /** @class */ (function () {
    function Rect(rect) {
        this.top = 0;
        this.left = 0;
        this.width = 0;
        this.height = 0;
        this.right = 0;
        this.bottom = 0;
        this.center = new Point();
        this.set(rect);
    }
    Rect.contains = function (rect, left, top) {
        return rect.top <= top && top <= rect.bottom && rect.left <= left && left <= rect.right;
    };
    Rect.intersectRect = function (r1, r2) {
        return !(r2.left > r1.right ||
            r2.right < r1.left ||
            r2.top > r1.bottom ||
            r2.bottom < r1.top);
    };
    Rect.fromNode = function (node) {
        if (!node.getClientRects().length) {
            return new Rect();
        }
        var rect = node.getBoundingClientRect();
        // const defaultView = node.ownerDocument.defaultView;
        return new Rect({
            // top: rect.top + defaultView.pageYOffset,
            // left: rect.left + defaultView.pageXOffset,
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        });
    };
    Rect.prototype.set = function (rect) {
        if (rect) {
            Object.assign(this, rect);
            this.right = this.left + this.width;
            this.bottom = this.top + this.height;
        }
        var y = this.top + this.height / 2;
        var x = this.left + this.width / 2;
        this.center = {
            left: x,
            top: y,
            x: x,
            y: y,
        };
    };
    Rect.prototype.contains = function (left, top) {
        return Rect.contains(this, left, top);
    };
    Rect.prototype.intersect = function (rect) {
        return Rect.intersectRect(this, rect);
    };
    Rect.prototype.intersection = function (rect) {
        var center = {
            x: (this.center.x - rect.center.x) / (rect.width / 2),
            y: (this.center.y - rect.center.y) / (rect.height / 2),
        };
        if (this.intersect(rect)) {
            var dx = this.left > rect.left ? 0 : Math.abs(rect.left - this.left);
            var dy = this.top > rect.top ? 0 : Math.abs(rect.top - this.top);
            var x = dx ? (1 - dx / this.width) : ((rect.left + rect.width) - this.left) / this.width;
            var y = dy ? (1 - dy / this.height) : ((rect.top + rect.height) - this.top) / this.height;
            x = Math.min(1, x);
            y = Math.min(1, y);
            return {
                x: x,
                y: y,
                center: center
            };
        }
        else {
            return { x: 0, y: 0, center: center };
        }
    };
    return Rect;
}());

var ParallaxDirective = /** @class */ (function (_super) {
    __extends(ParallaxDirective, _super);
    // @ViewChild('img', { read: HTMLImageElement }) image;
    function ParallaxDirective(platformId, zone, elementRef, rafService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.zone = zone;
        _this.elementRef = elementRef;
        _this.rafService = rafService;
        return _this;
    }
    ParallaxDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular(function () {
            var image = _this.elementRef.nativeElement.querySelector('img');
            _this.parallax$().pipe(
            /*
            distinctUntilChanged((a, b) => {
                return a.p !== b.p;
            }),
            */
            takeUntil(_this.unsubscribe)).subscribe(function (parallax) {
                // console.log(parallax);
                image.setAttribute('style', "height: " + parallax.s * 100 + "%; top: 50%; left: 50%; transform: translateX(-50%) translateY(" + parallax.p + "%);");
            });
        });
    };
    ParallaxDirective.prototype.parallax$ = function () {
        var _this = this;
        return this.rafService.raf$().pipe(map(function (top) {
            var windowRect = new Rect({
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            });
            // this.windowRect;
            var node = _this.elementRef.nativeElement;
            var parallax = (_this.parallax || 5) * 2;
            var direction = 1; // i % 2 === 0 ? 1 : -1;
            var rect = Rect.fromNode(node);
            rect = new Rect({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
            });
            var intersection = rect.intersection(windowRect);
            // console.log(intersection);
            if (intersection.y > 0) {
                var y = Math.min(1, Math.max(-1, intersection.center.y));
                var s = (100 + parallax * 2) / 100;
                var p = (-50 + (y * parallax * direction)); // .toFixed(3);
                return { s: s, p: p };
            }
            else {
                return null;
            }
        }), filter(function (x) { return x !== null; }));
    };
    ParallaxDirective.prototype.scrollTop$ = function () {
        return this.rafService.raf$().pipe(map(function (x) { return window.pageYOffset; }), distinctUntilChanged(), tap(function (x) { return console.log(x); }));
    };
    ParallaxDirective.ɵfac = function ParallaxDirective_Factory(t) { return new (t || ParallaxDirective)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(RafService)); };
    ParallaxDirective.ɵdir = ɵɵdefineDirective({ type: ParallaxDirective, selectors: [["", "parallax", ""]], inputs: { parallax: "parallax" }, features: [ɵɵInheritDefinitionFeature] });
    return ParallaxDirective;
}(DisposableDirective));
/*@__PURE__*/ (function () { ɵsetClassMetadata(ParallaxDirective, [{
        type: Directive,
        args: [{
                selector: '[parallax]'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: NgZone }, { type: ElementRef }, { type: RafService }]; }, { parallax: [{
            type: Input
        }] }); })();

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
            /*
            this.zone.runOutsideAngular(() => {
                this.renderer.listenGlobal('window', 'scroll', () => {
                    console.log('scrolling');
                });
            });
            */
        });
        return _this;
    }
    ScrollDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.scrollDocumentEvent.subscribe(function (event) {
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
    ScrollDirective.ɵfac = function ScrollDirective_Factory(t) { return new (t || ScrollDirective)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef)); };
    ScrollDirective.ɵdir = ɵɵdefineDirective({ type: ScrollDirective, selectors: [["", "scroll", ""]], outputs: { scroll: "scroll" }, features: [ɵɵInheritDefinitionFeature] });
    return ScrollDirective;
}(DisposableDirective));
/*@__PURE__*/ (function () { ɵsetClassMetadata(ScrollDirective, [{
        type: Directive,
        args: [{
                selector: '[scroll]'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: NgZone }, { type: ElementRef }]; }, { scroll: [{
            type: Output
        }] }); })();

var _c0$2 = ["sprite", ""];
function SpriteComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 1);
    ɵɵelement(2, "use");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r15 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵattributeInterpolate1("href", "#", ctx_r15.sprite, "", null, "xlink");
} }
var SpriteComponent = /** @class */ (function () {
    function SpriteComponent() {
    }
    SpriteComponent.ɵfac = function SpriteComponent_Factory(t) { return new (t || SpriteComponent)(); };
    SpriteComponent.ɵcmp = ɵɵdefineComponent({ type: SpriteComponent, selectors: [["", "sprite", ""]], inputs: { sprite: "sprite" }, attrs: _c0$2, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "sprite"]], template: function SpriteComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, SpriteComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.sprite);
        } }, directives: [NgIf], encapsulation: 2 });
    return SpriteComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SpriteComponent, [{
        type: Component,
        args: [{
                selector: '[sprite]',
                template: "<ng-container *ngIf=\"sprite\">\n\t<svg class=\"sprite\">\n\t\t<use attr.xlink:href=\"#{{sprite}}\"></use>\n\t</svg>\n</ng-container>",
            }]
    }], null, { sprite: [{
            type: Input
        }] }); })();

var services = [
    UIService,
    ModalService,
    RafService,
];
var components = [
    UIModuleComponent,
    ModalContainerComponent,
    ModalViewComponent,
    SpriteComponent,
];
var directives = [
    ClickOutsideDirective,
    LazyImagesDirective,
    ParallaxDirective,
    ScrollDirective,
];
var pipes = [];
var validators = [];
var guards = [];
var UIModule = /** @class */ (function () {
    function UIModule(parentModule) {
        if (parentModule) {
            throw new Error('UIModule is already loaded. Import it in the AppModule only');
        }
    }
    UIModule.forRoot = function (config) {
        return {
            ngModule: UIModule,
            providers: [
                { provide: UI_CONFIG, useValue: config },
            ]
        };
    };
    UIModule.ɵmod = ɵɵdefineNgModule({ type: UIModule });
    UIModule.ɵinj = ɵɵdefineInjector({ factory: function UIModule_Factory(t) { return new (t || UIModule)(ɵɵinject(UIModule, 12)); }, providers: __spread(services), imports: [[
                CommonModule,
                CoreModule,
            ],
            CoreModule] });
    return UIModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UIModule, { declarations: [UIModuleComponent,
        ModalContainerComponent,
        ModalViewComponent,
        SpriteComponent,
        ClickOutsideDirective,
        LazyImagesDirective,
        ParallaxDirective,
        ScrollDirective], imports: [CommonModule,
        CoreModule], exports: [CoreModule,
        UIModuleComponent,
        ModalContainerComponent,
        ModalViewComponent,
        SpriteComponent,
        ClickOutsideDirective,
        LazyImagesDirective,
        ParallaxDirective,
        ScrollDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UIModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                ],
                providers: __spread(services),
                declarations: __spread(components, directives),
                exports: __spread([
                    CoreModule
                ], components, directives),
            }]
    }], function () { return [{ type: UIModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ClickOutsideDirective, LazyImagesDirective, Modal, ModalCloseEvent, ModalCompleteEvent, ModalContainerComponent, ModalData, ModalEventType, ModalService, ModalViewComponent, ParallaxDirective, RafService, ScrollDirective, SpriteComponent, UIConfig, UIModule, UIModuleComponent, UIService, UI_CONFIG };
//# sourceMappingURL=designr-ui.js.map
