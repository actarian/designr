(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/forms'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@designr/core')) :
    typeof define === 'function' && define.amd ? define('@designr/ui', ['exports', '@angular/common/http', '@angular/forms', '@angular/common', 'rxjs', 'rxjs/operators', '@angular/core', '@designr/core'], factory) :
    (factory((global.designr = global.designr || {}, global.designr.ui = {}),global.ng.common.http,global.ng.forms,global.ng.common,global.rxjs,global.rxjs.operators,global.ng.core,global.core));
}(this, (function (exports,http,forms,common,rxjs,operators,i0,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UIModuleComponent = /** @class */ (function () {
        function UIModuleComponent() {
            this.version = '0.0.1';
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
            { type: i0.Component, args: [{
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
            this.clickOutside = new i0.EventEmitter();
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
                var targetElement = ( /** @type {?} */(e.target));
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
            { type: i0.Directive, args: [{
                        selector: '[clickOutside]'
                    },] }
        ];
        /** @nocollapse */
        ClickOutsideDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        ClickOutsideDirective.propDecorators = {
            clickOutside: [{ type: i0.Output }],
            onClick: [{ type: i0.HostListener, args: ['document:click', ['$event'],] }]
        };
        return ClickOutsideDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // use $ for jquery // !!! rimuovere
    var FancyboxDirective = /** @class */ (function () {
        function FancyboxDirective(platformId, zone, element) {
            this.platformId = platformId;
            this.zone = zone;
            this.element = element;
        }
        /**
         * @return {?}
         */
        FancyboxDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (common.isPlatformBrowser(this.platformId)) {
                    this.zone.runOutsideAngular(function () {
                        $(function () {
                            // $(this.element.nativeElement).fancybox(this.fancybox);
                            /** @type {?} */
                            var group = Array.from($(_this.element.nativeElement).find(_this.target));
                            group.forEach(function (item, i) {
                                return item.addEventListener('click', function (e) {
                                    $.fancybox.open(group, _this.fancybox, i);
                                    e.preventDefault();
                                    e.stopImmediatePropagation();
                                });
                            });
                            // console.log(group);
                        });
                    });
                }
            };
        FancyboxDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[fancybox]',
                    },] }
        ];
        /** @nocollapse */
        FancyboxDirective.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: i0.NgZone },
                { type: i0.ElementRef }
            ];
        };
        FancyboxDirective.propDecorators = {
            fancybox: [{ type: i0.Input }],
            target: [{ type: i0.Input }]
        };
        return FancyboxDirective;
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
                if (!common.isPlatformBrowser(this.platformId)) {
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
                this.observer = new IntersectionObserver(function (images) {
                    return images.forEach(function (image) {
                        if (!image.isIntersecting) {
                            return;
                        }
                        _this.onAppearsInViewport(image.target);
                    });
                }, config);
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
            { type: i0.Directive, args: [{
                        selector: '[lazy-images]'
                    },] }
        ];
        /** @nocollapse */
        LazyImagesDirective.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i0.NgZone }
            ];
        };
        LazyImagesDirective.propDecorators = {
            lazyImages: [{ type: i0.Input }]
        };
        return LazyImagesDirective;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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
            this.emitter = new i0.EventEmitter();
            if (options) {
                Object.assign(this, options);
            }
        }
        Modal.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        Modal.ctorParameters = function () {
            return [
                { type: Modal }
            ];
        };
        /** @nocollapse */ Modal.ngInjectableDef = i0.defineInjectable({ factory: function Modal_Factory() { return new Modal(i0.inject(Modal)); }, token: Modal, providedIn: "root" });
        return Modal;
    }());
    var ModalData = /** @class */ (function (_super) {
        __extends(ModalData, _super);
        function ModalData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ModalData.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ ModalData.ngInjectableDef = i0.defineInjectable({ factory: function ModalData_Factory() { return new ModalData(); }, token: ModalData, providedIn: "root" });
        return ModalData;
    }(Object));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalService = /** @class */ (function () {
        function ModalService(platformId) {
            this.platformId = platformId;
            this.modals$ = new rxjs.BehaviorSubject([]);
        }
        /**
         * @return {?}
         */
        ModalService.prototype.getInfos = /**
         * @return {?}
         */
            function () {
                return this.modals$.pipe(operators.map(function (modals) {
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
                if (common.isPlatformBrowser(this.platformId)) {
                    /** @type {?} */
                    var body = ( /** @type {?} */(document.querySelector('body')));
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
                if (common.isPlatformBrowser(this.platformId)) {
                    /** @type {?} */
                    var body = ( /** @type {?} */(document.querySelector('body')));
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ModalService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        /** @nocollapse */ ModalService.ngInjectableDef = i0.defineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.inject(i0.PLATFORM_ID)); }, token: ModalService, providedIn: "root" });
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
                this.modalService.modals$.pipe(operators.takeUntil(this.unsubscribe), operators.map(function (modals) {
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
            { type: i0.Component, args: [{
                        selector: 'core-modal-container-component',
                        template: "<div class=\"modal\" [ngClass]=\"{ active: modalCount > 0 }\">\r\n\t<div class=\"modal-bg\" (click)=\"doClose()\"></div>\r\n\t<div class=\"modal-page\" [ngClass]=\"className\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<button type=\"button\" class=\"modal-prev\" (click)=\"doPrev()\" title=\"Indietro\" *ngIf=\"modalCount > 1\">\r\n\t\t\t\t<svg class=\"ico\">\r\n\t\t\t\t\t<use xlink:href=\"#ico-prev\"></use>\r\n\t\t\t\t</svg>\r\n\t\t\t\tindietro\r\n\t\t\t</button>\r\n\t\t\t<button type=\"button\" class=\"modal-close\" (click)=\"doClose()\" title=\"Chiudi finestra\">\r\n\t\t\t\t<svg class=\"ico\">\r\n\t\t\t\t\t<use xlink:href=\"#ico-close\"></use>\r\n\t\t\t\t</svg>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<ng-container *ngFor=\"let modal of (modalService.modals$ | async); let last = last;\">\r\n\t\t\t\t<core-modal-view-component [modal]=\"modal\" [hidden]=\"!last\"></core-modal-view-component>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        styles: [".modal{position:fixed;display:flex;justify-content:center;align-items:center;top:0;left:0;width:100%;height:100%;z-index:10000;margin:0;padding:0;overflow:hidden;pointer-events:none;opacity:0;transition:opacity 250ms ease-in-out}.modal.active{opacity:1;pointer-events:all}.modal-bg{position:fixed;z-index:0;background:#1e1e1e;opacity:.87;top:0;left:0;bottom:0;right:0}.modal-page{position:relative;z-index:1;background:#fff;max-height:90vh;max-width:90vw;box-shadow:0 10px 40px -5px rgba(0,0,0,.5);overflow-y:auto}@media (max-width:500px){.modal-page{max-height:calc(100% - 80px);margin-top:40px;width:90%;max-width:none}}.modal-page .modal-header .modal-prev{padding:10px;z-index:1;color:#5f5d63;display:flex;font-size:11px;align-items:center;text-transform:uppercase;margin-left:4px}.modal-page .modal-header .modal-prev .ico{width:12px;height:12px;fill:#5f5d63;margin-right:4px}.modal-page .modal-header .modal-close{position:fixed;z-index:1;right:10px;top:10px}.modal-page .modal-header .modal-close .ico{fill:#fff;width:32px;height:32px}"]
                    }] }
        ];
        /** @nocollapse */
        ModalContainerComponent.ctorParameters = function () {
            return [
                { type: ModalService }
            ];
        };
        return ModalContainerComponent;
    }(core.DisposableComponent));

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
             */ function (modal) {
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
                var resolvedInputs = i0.ReflectiveInjector.resolve(providers);
                /** @type {?} */
                var injector = i0.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.modalContainer.parentInjector);
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
            { type: i0.Component, args: [{
                        selector: 'core-modal-view-component',
                        template: "<ng-container #modalContainer></ng-container>\r\n",
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ModalViewComponent.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver }
            ];
        };
        ModalViewComponent.propDecorators = {
            modalContainer: [{ type: i0.ViewChild, args: ['modalContainer', { read: i0.ViewContainerRef },] }],
            modal: [{ type: i0.Input }]
        };
        return ModalViewComponent;
    }(core.DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UIModule = /** @class */ (function () {
        function UIModule(parentModule) {
            if (parentModule) {
                throw new Error('UIModule is already loaded. Import it in the AppModule only');
            }
        }
        UIModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                        ],
                        declarations: [
                            ClickOutsideDirective,
                            UIModuleComponent,
                            FancyboxDirective,
                            LazyImagesDirective,
                            ModalContainerComponent,
                            ModalViewComponent,
                        ],
                        exports: [
                            ClickOutsideDirective,
                            UIModuleComponent,
                            FancyboxDirective,
                            LazyImagesDirective,
                            ModalContainerComponent,
                            ModalViewComponent,
                        ],
                        providers: [
                            ModalService,
                        ],
                    },] }
        ];
        /** @nocollapse */
        UIModule.ctorParameters = function () {
            return [
                { type: UIModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
            ];
        };
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

    exports.UIModuleComponent = UIModuleComponent;
    exports.UIModule = UIModule;
    exports.ClickOutsideDirective = ClickOutsideDirective;
    exports.FancyboxDirective = FancyboxDirective;
    exports.LazyImagesDirective = LazyImagesDirective;
    exports.ModalContainerComponent = ModalContainerComponent;
    exports.ModalViewComponent = ModalViewComponent;
    exports.ModalService = ModalService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=designr-ui.umd.js.map