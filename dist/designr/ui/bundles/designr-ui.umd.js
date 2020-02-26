(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@designr/core'), require('@angular/platform-browser'), require('rxjs/operators'), require('rxjs'), require('rxjs/internal/scheduler/animationFrame')) :
    typeof define === 'function' && define.amd ? define('@designr/ui', ['exports', '@angular/core', '@angular/common', '@designr/core', '@angular/platform-browser', 'rxjs/operators', 'rxjs', 'rxjs/internal/scheduler/animationFrame'], factory) :
    (global = global || self, factory((global.designr = global.designr || {}, global.designr.ui = {}), global.ng.core, global.ng.common, global.core$1, global.ng.platformBrowser, global.rxjs.operators, global.rxjs, global.rxjs['internal/scheduler/animationFrame']));
}(this, (function (exports, core, common, core$1, platformBrowser, operators, rxjs, animationFrame) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var UIConfig = /** @class */ (function () {
        function UIConfig(options) {
            // console.log('UIConfig', options);
            if (options) {
                Object.assign(this, options);
            }
        }
        return UIConfig;
    }());
    var UI_CONFIG = new core.InjectionToken('ui.config');

    var UIService = /** @class */ (function () {
        function UIService(options) {
            // console.log('UIService', options);
            options = options || {};
            this.options = new UIConfig(options);
        }
        UIService.ɵfac = function UIService_Factory(t) { return new (t || UIService)(core["ɵɵinject"](UI_CONFIG)); };
        UIService.ɵprov = core["ɵɵdefineInjectable"]({ token: UIService, factory: UIService.ɵfac, providedIn: 'root' });
        return UIService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UIService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: UIConfig, decorators: [{
                    type: core.Inject,
                    args: [UI_CONFIG]
                }] }]; }, null); })();

    var UIModuleComponent = /** @class */ (function () {
        function UIModuleComponent() {
            this.version = '0.0.12';
        }
        UIModuleComponent.prototype.ngOnInit = function () {
        };
        UIModuleComponent.ɵfac = function UIModuleComponent_Factory(t) { return new (t || UIModuleComponent)(); };
        UIModuleComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: UIModuleComponent, selectors: [["ui-module"]], decls: 2, vars: 1, consts: [[1, "ui-module"]], template: function UIModuleComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "span", 0);
                core["ɵɵtext"](1);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate1"]("ui ", ctx.version, "");
            } }, encapsulation: 2 });
        return UIModuleComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UIModuleComponent, [{
            type: core.Component,
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
            this.clickOutside = new core.EventEmitter();
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
        ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(core["ɵɵdirectiveInject"](platformBrowser.EventManager), core["ɵɵdirectiveInject"](core.ElementRef)); };
        ClickOutsideDirective.ɵdir = core["ɵɵdefineDirective"]({ type: ClickOutsideDirective, selectors: [["", "clickOutside", ""]], inputs: { initialFocus: "initialFocus" }, outputs: { clickOutside: "clickOutside" } });
        return ClickOutsideDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ClickOutsideDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[clickOutside]'
                }]
        }], function () { return [{ type: platformBrowser.EventManager }, { type: core.ElementRef }]; }, { initialFocus: [{
                type: core.Input
            }], clickOutside: [{
                type: core.Output
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
            if (!common.isPlatformBrowser(this.platformId)) {
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
        LazyImagesDirective.ɵfac = function LazyImagesDirective_Factory(t) { return new (t || LazyImagesDirective)(core["ɵɵdirectiveInject"](core.PLATFORM_ID), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.NgZone)); };
        LazyImagesDirective.ɵdir = core["ɵɵdefineDirective"]({ type: LazyImagesDirective, selectors: [["", "lazy-images", ""]], inputs: { lazyImages: "lazyImages" } });
        return LazyImagesDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](LazyImagesDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[lazy-images]'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: core.ElementRef }, { type: core.Renderer2 }, { type: core.NgZone }]; }, { lazyImages: [{
                type: core.Input
            }] }); })();


    (function (ModalEventType) {
        ModalEventType[ModalEventType["Complete"] = 0] = "Complete";
        ModalEventType[ModalEventType["Close"] = 1] = "Close";
    })(exports.ModalEventType || (exports.ModalEventType = {}));
    var ModalCompleteEvent = /** @class */ (function () {
        function ModalCompleteEvent(options) {
            this.type = exports.ModalEventType.Complete;
            // console.log('ModalCompleteEvent', options);
            if (options) {
                Object.assign(this, options);
            }
        }
        return ModalCompleteEvent;
    }());
    var ModalCloseEvent = /** @class */ (function () {
        function ModalCloseEvent(options) {
            this.type = exports.ModalEventType.Close;
            if (options) {
                Object.assign(this, options);
            }
        }
        return ModalCloseEvent;
    }());
    var Modal = /** @class */ (function () {
        function Modal(options) {
            this.providers = [];
            this.emitter = new core.EventEmitter();
            if (options) {
                Object.assign(this, options);
            }
        }
        Modal.ɵfac = function Modal_Factory(t) { return new (t || Modal)(core["ɵɵinject"](Modal)); };
        Modal.ɵprov = core["ɵɵdefineInjectable"]({ token: Modal, factory: Modal.ɵfac, providedIn: 'root' });
        return Modal;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](Modal, [{
            type: core.Injectable,
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
        ModalData.ɵprov = core["ɵɵdefineInjectable"]({ token: ModalData, factory: ModalData.ɵfac, providedIn: 'root' });
        return ModalData;
    }(Object));
    var ɵModalData_BaseFactory = core["ɵɵgetInheritedFactory"](ModalData);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ModalData, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null); })();

    var ModalService = /** @class */ (function () {
        function ModalService(platformId) {
            this.platformId = platformId;
            this.modals$ = new rxjs.BehaviorSubject([]);
        }
        ModalService.prototype.getInfos = function () {
            return this.modals$.pipe(operators.map(function (modals) {
                return modals.length ? modals[modals.length - 1] : null;
            }));
        };
        ModalService.prototype.addClass = function (name) {
            if (common.isPlatformBrowser(this.platformId)) {
                var body = document.querySelector('body');
                body.classList.add(name);
            }
        };
        ModalService.prototype.removeClass = function (name) {
            if (common.isPlatformBrowser(this.platformId)) {
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
        ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(core["ɵɵinject"](core.PLATFORM_ID)); };
        ModalService.ɵprov = core["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
        return ModalService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ModalService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
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
            var injector = core.Injector.create({ providers: providers });
            // const resolvedInputs = ReflectiveInjector.resolve(providers);
            // const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.modalContainer.parentInjector);
            var factory = this.resolver.resolveComponentFactory(modal.component);
            var component = factory.create(injector);
            this.modalContainer.insert(component.hostView);
            this.component = component;
            // this.changeDetector.markForCheck();
        };
        ModalViewComponent.ɵfac = function ModalViewComponent_Factory(t) { return new (t || ModalViewComponent)(core["ɵɵdirectiveInject"](core.ComponentFactoryResolver)); };
        ModalViewComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ModalViewComponent, selectors: [["core-modal-view-component"]], viewQuery: function ModalViewComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.modalContainer = _t.first);
            } }, inputs: { modal: "modal" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["modalContainer", ""]], template: function ModalViewComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainer"](0, null, 0);
            } }, encapsulation: 2 });
        return ModalViewComponent;
    }(core$1.DisposableComponent));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ModalViewComponent, [{
            type: core.Component,
            args: [{
                    selector: 'core-modal-view-component',
                    templateUrl: './modal-view.component.html',
                    // styleUrls: ['./modal-view.component.scss'],
                    encapsulation: core.ViewEncapsulation.Emulated,
                }]
        }], function () { return [{ type: core.ComponentFactoryResolver }]; }, { modalContainer: [{
                type: core.ViewChild,
                args: ['modalContainer', { read: core.ViewContainerRef, static: true }]
            }], modal: [{
                type: core.Input
            }] }); })();

    function ModalContainerComponent_button_4_Template(rf, ctx) { if (rf & 1) {
        var _r11 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "button", 9);
        core["ɵɵlistener"]("click", function ModalContainerComponent_button_4_Template_button_click_0_listener($event) { core["ɵɵrestoreView"](_r11); var ctx_r10 = core["ɵɵnextContext"](); return ctx_r10.doPrev(); });
        core["ɵɵpipe"](1, "label");
        core["ɵɵnamespaceSVG"]();
        core["ɵɵelementStart"](2, "svg");
        core["ɵɵelement"](3, "use", 10);
        core["ɵɵelementEnd"]();
        core["ɵɵnamespaceHTML"]();
        core["ɵɵelementStart"](4, "span");
        core["ɵɵtext"](5);
        core["ɵɵpipe"](6, "label");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵproperty"]("title", core["ɵɵpipeBind2"](1, 2, "modal.back", "back"));
        core["ɵɵadvance"](5);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind2"](6, 5, "modal.back", "back"));
    } }
    function ModalContainerComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelement"](1, "core-modal-view-component", 11);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var modal_r12 = ctx.$implicit;
        var last_r13 = ctx.last;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("modal", modal_r12)("hidden", !last_r13);
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
            this.modalService.modals$.pipe(operators.takeUntil(this.unsubscribe), operators.map(function (modals) {
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
        ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) { return new (t || ModalContainerComponent)(core["ɵɵdirectiveInject"](ModalService)); };
        ModalContainerComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ModalContainerComponent, selectors: [["core-modal-container-component"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 12, consts: [[1, "modal", 3, "ngClass"], [1, "modal__background", 3, "click"], [1, "modal__page", 3, "ngClass"], [1, "modal__header"], ["type", "button", "class", "btn btn--prev", 3, "title", "click", 4, "ngIf"], ["type", "button", "title", "'modal.close' | label : 'close'", 1, "btn", "btn--close", 3, "click"], [0, "xlink", "href", "#close"], [1, "modal__content"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn--prev", 3, "title", "click"], [0, "xlink", "href", "#prev"], [3, "modal", "hidden"]], template: function ModalContainerComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵelementStart"](1, "div", 1);
                core["ɵɵlistener"]("click", function ModalContainerComponent_Template_div_click_1_listener($event) { return ctx.doClose(); });
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](2, "div", 2);
                core["ɵɵelementStart"](3, "div", 3);
                core["ɵɵtemplate"](4, ModalContainerComponent_button_4_Template, 7, 8, "button", 4);
                core["ɵɵelementStart"](5, "button", 5);
                core["ɵɵlistener"]("click", function ModalContainerComponent_Template_button_click_5_listener($event) { return ctx.doClose(); });
                core["ɵɵnamespaceSVG"]();
                core["ɵɵelementStart"](6, "svg");
                core["ɵɵelement"](7, "use", 6);
                core["ɵɵelementEnd"]();
                core["ɵɵnamespaceHTML"]();
                core["ɵɵelementStart"](8, "span");
                core["ɵɵtext"](9);
                core["ɵɵpipe"](10, "label");
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](11, "div", 7);
                core["ɵɵtemplate"](12, ModalContainerComponent_ng_container_12_Template, 2, 2, "ng-container", 8);
                core["ɵɵpipe"](13, "async");
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction1"](10, _c0$1, ctx.modalCount > 0));
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngClass", ctx.className);
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngIf", ctx.modalCount > 1);
                core["ɵɵadvance"](5);
                core["ɵɵtextInterpolate"](core["ɵɵpipeBind2"](10, 5, "modal.close", "close"));
                core["ɵɵadvance"](3);
                core["ɵɵproperty"]("ngForOf", core["ɵɵpipeBind1"](13, 8, ctx.modalService.modals$));
            } }, directives: [common.NgClass, common.NgIf, common.NgForOf, ModalViewComponent], pipes: [core$1.LabelPipe, common.AsyncPipe], encapsulation: 2 });
        return ModalContainerComponent;
    }(core$1.DisposableComponent));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ModalContainerComponent, [{
            type: core.Component,
            args: [{
                    selector: 'core-modal-container-component',
                    templateUrl: './modal-container.component.html',
                    encapsulation: core.ViewEncapsulation.Emulated,
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
                if (common.isPlatformBrowser(_this.platformId)) {
                    return rxjs.range(0, Number.POSITIVE_INFINITY, animationFrame.animationFrame).pipe(operators.shareReplay());
                }
                else {
                    return rxjs.of(null);
                }
            });
        };
        RafService.ɵfac = function RafService_Factory(t) { return new (t || RafService)(core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](core.NgZone)); };
        RafService.ɵprov = core["ɵɵdefineInjectable"]({ token: RafService, factory: RafService.ɵfac, providedIn: 'root' });
        return RafService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](RafService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: core.NgZone }]; }, null); })();

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
            if (!common.isPlatformBrowser(this.platformId)) {
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
                operators.takeUntil(_this.unsubscribe)).subscribe(function (parallax) {
                    // console.log(parallax);
                    image.setAttribute('style', "height: " + parallax.s * 100 + "%; top: 50%; left: 50%; transform: translateX(-50%) translateY(" + parallax.p + "%);");
                });
            });
        };
        ParallaxDirective.prototype.parallax$ = function () {
            var _this = this;
            return this.rafService.raf$().pipe(operators.map(function (top) {
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
            }), operators.filter(function (x) { return x !== null; }));
        };
        ParallaxDirective.prototype.scrollTop$ = function () {
            return this.rafService.raf$().pipe(operators.map(function (x) { return window.pageYOffset; }), operators.distinctUntilChanged(), operators.tap(function (x) { return console.log(x); }));
        };
        ParallaxDirective.ɵfac = function ParallaxDirective_Factory(t) { return new (t || ParallaxDirective)(core["ɵɵdirectiveInject"](core.PLATFORM_ID), core["ɵɵdirectiveInject"](core.NgZone), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](RafService)); };
        ParallaxDirective.ɵdir = core["ɵɵdefineDirective"]({ type: ParallaxDirective, selectors: [["", "parallax", ""]], inputs: { parallax: "parallax" }, features: [core["ɵɵInheritDefinitionFeature"]] });
        return ParallaxDirective;
    }(core$1.DisposableDirective));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ParallaxDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[parallax]'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: core.NgZone }, { type: core.ElementRef }, { type: RafService }]; }, { parallax: [{
                type: core.Input
            }] }); })();

    var ScrollDirective = /** @class */ (function (_super) {
        __extends(ScrollDirective, _super);
        function ScrollDirective(platformId, zone, elementRef) {
            var _this = _super.call(this) || this;
            _this.platformId = platformId;
            _this.zone = zone;
            _this.elementRef = elementRef;
            _this.scroll = new core.EventEmitter();
            _this.scrollEvent = new rxjs.Observable(function (observer) {
                return _this.zone.runOutsideAngular(function () {
                    return rxjs.fromEvent(_this.elementRef.nativeElement, 'scroll')
                        .pipe(operators.takeUntil(_this.unsubscribe))
                        .subscribe(observer);
                });
            });
            _this.scrollDocumentEvent = new rxjs.Observable(function (observer) {
                return _this.zone.runOutsideAngular(function () {
                    return rxjs.fromEvent(window.document, 'scroll')
                        .pipe(operators.takeUntil(_this.unsubscribe))
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
            if (!common.isPlatformBrowser(this.platformId)) {
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
        ScrollDirective.ɵfac = function ScrollDirective_Factory(t) { return new (t || ScrollDirective)(core["ɵɵdirectiveInject"](core.PLATFORM_ID), core["ɵɵdirectiveInject"](core.NgZone), core["ɵɵdirectiveInject"](core.ElementRef)); };
        ScrollDirective.ɵdir = core["ɵɵdefineDirective"]({ type: ScrollDirective, selectors: [["", "scroll", ""]], outputs: { scroll: "scroll" }, features: [core["ɵɵInheritDefinitionFeature"]] });
        return ScrollDirective;
    }(core$1.DisposableDirective));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ScrollDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[scroll]'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: core.NgZone }, { type: core.ElementRef }]; }, { scroll: [{
                type: core.Output
            }] }); })();

    var _c0$2 = ["sprite", ""];
    function SpriteComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵnamespaceSVG"]();
        core["ɵɵelementStart"](1, "svg", 1);
        core["ɵɵelement"](2, "use");
        core["ɵɵelementEnd"]();
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var ctx_r15 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](2);
        core["ɵɵattributeInterpolate1"]("href", "#", ctx_r15.sprite, "", null, "xlink");
    } }
    var SpriteComponent = /** @class */ (function () {
        function SpriteComponent() {
        }
        SpriteComponent.ɵfac = function SpriteComponent_Factory(t) { return new (t || SpriteComponent)(); };
        SpriteComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: SpriteComponent, selectors: [["", "sprite", ""]], inputs: { sprite: "sprite" }, attrs: _c0$2, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "sprite"]], template: function SpriteComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, SpriteComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", ctx.sprite);
            } }, directives: [common.NgIf], encapsulation: 2 });
        return SpriteComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SpriteComponent, [{
            type: core.Component,
            args: [{
                    selector: '[sprite]',
                    template: "<ng-container *ngIf=\"sprite\">\n\t<svg class=\"sprite\">\n\t\t<use attr.xlink:href=\"#{{sprite}}\"></use>\n\t</svg>\n</ng-container>",
                }]
        }], null, { sprite: [{
                type: core.Input
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
        UIModule.ɵmod = core["ɵɵdefineNgModule"]({ type: UIModule });
        UIModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function UIModule_Factory(t) { return new (t || UIModule)(core["ɵɵinject"](UIModule, 12)); }, providers: __spread(services), imports: [[
                    common.CommonModule,
                    core$1.CoreModule,
                ],
                core$1.CoreModule] });
        return UIModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](UIModule, { declarations: [UIModuleComponent,
            ModalContainerComponent,
            ModalViewComponent,
            SpriteComponent,
            ClickOutsideDirective,
            LazyImagesDirective,
            ParallaxDirective,
            ScrollDirective], imports: [common.CommonModule,
            core$1.CoreModule], exports: [core$1.CoreModule,
            UIModuleComponent,
            ModalContainerComponent,
            ModalViewComponent,
            SpriteComponent,
            ClickOutsideDirective,
            LazyImagesDirective,
            ParallaxDirective,
            ScrollDirective] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UIModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        core$1.CoreModule,
                    ],
                    providers: __spread(services),
                    declarations: __spread(components, directives),
                    exports: __spread([
                        core$1.CoreModule
                    ], components, directives),
                }]
        }], function () { return [{ type: UIModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }]; }, null); })();

    exports.ClickOutsideDirective = ClickOutsideDirective;
    exports.LazyImagesDirective = LazyImagesDirective;
    exports.Modal = Modal;
    exports.ModalCloseEvent = ModalCloseEvent;
    exports.ModalCompleteEvent = ModalCompleteEvent;
    exports.ModalContainerComponent = ModalContainerComponent;
    exports.ModalData = ModalData;
    exports.ModalService = ModalService;
    exports.ModalViewComponent = ModalViewComponent;
    exports.ParallaxDirective = ParallaxDirective;
    exports.RafService = RafService;
    exports.ScrollDirective = ScrollDirective;
    exports.SpriteComponent = SpriteComponent;
    exports.UIConfig = UIConfig;
    exports.UIModule = UIModule;
    exports.UIModuleComponent = UIModuleComponent;
    exports.UIService = UIService;
    exports.UI_CONFIG = UI_CONFIG;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=designr-ui.umd.js.map
