(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@designr/core'), require('@angular/router'), require('rxjs'), require('@angular/platform-browser'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@designr/page', ['exports', '@angular/core', '@angular/common', '@designr/core', '@angular/router', 'rxjs', '@angular/platform-browser', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.designr = global.designr || {}, global.designr.page = {}), global.ng.core, global.ng.common, global.core$1, global.ng.router, global.rxjs, global.ng.platformBrowser, global.rxjs.operators));
}(this, (function (exports, core, common, core$1, router, rxjs, platformBrowser, operators) { 'use strict';

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

    var PageConfig = /** @class */ (function () {
        function PageConfig(options) {
            this.pages = {};
            this.layouts = {};
            // console.log('PageConfig', options);
            if (options) {
                this.layouts = options.layouts || {};
                this.defaultLayout = options.defaultLayout;
                this.pages = options.pages || {};
                this.defaultPage = options.defaultPage;
                this.notFoundPage = options.notFoundPage;
            }
        }
        return PageConfig;
    }());
    var PAGE_CONFIG = new core.InjectionToken('page.config');

    var ConfigService = /** @class */ (function () {
        function ConfigService(options) {
            this.options = new PageConfig(options || {});
        }
        ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(core["ɵɵinject"](PAGE_CONFIG)); };
        ConfigService.ɵprov = core["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
        return ConfigService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ConfigService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: PageConfig, decorators: [{
                    type: core.Inject,
                    args: [PAGE_CONFIG]
                }] }]; }, null); })();

    var ILayoutComponent = /** @class */ (function () {
        function ILayoutComponent() {
        }
        ILayoutComponent.ɵfac = function ILayoutComponent_Factory(t) { return new (t || ILayoutComponent)(); };
        ILayoutComponent.ɵdir = core["ɵɵdefineDirective"]({ type: ILayoutComponent, inputs: { template: "template" } });
        return ILayoutComponent;
    }());

    function LayoutComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    var LayoutComponent = /** @class */ (function () {
        function LayoutComponent() {
        }
        LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
        LayoutComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["layout-component"]], inputs: { template: "template" }, decls: 2, vars: 2, consts: [[3, "ngClass"], [4, "ngTemplateOutlet"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵtemplate"](1, LayoutComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngClass", ctx.page == null ? null : ctx.page.component);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.template);
            } }, directives: [common.NgClass, common.NgTemplateOutlet], encapsulation: 2 });
        return LayoutComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](LayoutComponent, [{
            type: core.Component,
            args: [{
                    selector: 'layout-component',
                    template: "<div [ngClass]=\"page?.component\">\n\t<ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</div>"
                }]
        }], null, { template: [{
                type: core.Input
            }] }); })();

    var PageMeta = /** @class */ (function () {
        function PageMeta() {
        }
        return PageMeta;
    }());
    var PageIndex = /** @class */ (function () {
        function PageIndex(options) {
            if (options) {
                Object.assign(this, options);
            }
        }
        return PageIndex;
    }());
    var PageRelation = /** @class */ (function () {
        function PageRelation() {
        }
        return PageRelation;
    }());
    var Page = /** @class */ (function () {
        function Page(options) {
            this.meta = {};
            if (options) {
                Object.assign(this, options);
                if (options.related) {
                    var related = options.related.map(function (x) {
                        // const item = new PageIndex(x.page);
                        var item = new PageIndex(x);
                        item.relationType = x.type;
                        return item;
                    });
                    this.related = related;
                }
            }
        }
        Page.prototype.getFeature = function (id) {
            return this.features.find(function (x) { return x.id === id; }) || null;
        };
        Page.prototype.getFeatures = function (type, n) {
            return this.features ? this.features.filter(function (x, i) { return (n.indexOf(Number(x.id)) !== -1 && x.type === type); }).sort(function (a, b) { return a.type - b.type; }) : [];
        };
        Page.prototype.getFeaturesByTypes = function (type) {
            return this.features ? this.features.filter(function (x) { return (type.indexOf(Number(x.type)) !== -1); }) : [];
        };
        Page.prototype.getGroupedFeaturesByTypes = function (type) {
            var _this = this;
            var groups = {};
            type.forEach(function (type) {
                var group = groups[type] || { features: [] };
                if (_this.features) {
                    _this.features.forEach(function (x) {
                        if (Number(x.type) === type) {
                            group.features.push(x);
                        }
                    });
                }
                groups[type] = group;
            });
            /*
            if (this.features) {
                this.features.forEach((x: Feature) => {
                    if (type.indexOf(Number(x.type)) !== -1) {
                        const group = groups[x.type] || { features: [] };
                        group.features.push(x);
                        groups[x.type] = group;
                    }
                });
            }
            */
            return groups;
        };
        return Page;
    }());

    var UseLayoutDirective = /** @class */ (function () {
        function UseLayoutDirective(templateRef, viewContainerRef, componentFactoryResolver, configService) {
            this.templateRef = templateRef;
            this.viewContainerRef = viewContainerRef;
            this.componentFactoryResolver = componentFactoryResolver;
            this.configService = configService;
        }
        UseLayoutDirective.prototype.ngOnInit = function () {
            var options = this.configService.options;
            var component = options.layouts[this.layoutKey] || options.defaultLayout || LayoutComponent;
            var containerFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.container = this.viewContainerRef.createComponent(containerFactory);
            this.container.instance.template = this.templateRef;
            this.container.instance.page = this.page;
        };
        UseLayoutDirective.prototype.ngOnDestroy = function () {
            if (this.container) {
                this.container.destroy();
                this.container = null;
            }
        };
        UseLayoutDirective.ɵfac = function UseLayoutDirective_Factory(t) { return new (t || UseLayoutDirective)(core["ɵɵdirectiveInject"](core.TemplateRef), core["ɵɵdirectiveInject"](core.ViewContainerRef), core["ɵɵdirectiveInject"](core.ComponentFactoryResolver), core["ɵɵdirectiveInject"](ConfigService)); };
        UseLayoutDirective.ɵdir = core["ɵɵdefineDirective"]({ type: UseLayoutDirective, selectors: [["", "useLayout", ""]], inputs: { layoutKey: ["useLayout", "layoutKey"], page: "page" } });
        return UseLayoutDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UseLayoutDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[useLayout]'
                }]
        }], function () { return [{ type: core.TemplateRef }, { type: core.ViewContainerRef }, { type: core.ComponentFactoryResolver }, { type: ConfigService }]; }, { layoutKey: [{
                type: core.Input,
                args: ['useLayout']
            }], page: [{
                type: core.Input
            }] }); })();

    var PageModuleComponent = /** @class */ (function () {
        function PageModuleComponent() {
            this.version = '0.0.12';
        }
        PageModuleComponent.prototype.ngOnInit = function () {
        };
        PageModuleComponent.ɵfac = function PageModuleComponent_Factory(t) { return new (t || PageModuleComponent)(); };
        PageModuleComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: PageModuleComponent, selectors: [["page-module"]], decls: 2, vars: 1, consts: [[1, "page-module"]], template: function PageModuleComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "span", 0);
                core["ɵɵtext"](1);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate1"]("page ", ctx.version, "");
            } }, encapsulation: 2 });
        return PageModuleComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PageModuleComponent, [{
            type: core.Component,
            args: [{
                    selector: 'page-module',
                    template: "<span class=\"page-module\">page {{version}}</span>",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var PageComponent = /** @class */ (function (_super) {
        __extends(PageComponent, _super);
        function PageComponent(injector) {
            var _this = _super.call(this) || this;
            _this.injector = injector;
            _this.scrollToTop();
            return _this;
        }
        Object.defineProperty(PageComponent.prototype, "platformId", {
            get: function () {
                return this.injector.get(core.PLATFORM_ID);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageComponent.prototype, "routeService", {
            get: function () {
                return this.injector.get(core$1.RouteService);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageComponent.prototype, "router", {
            get: function () {
                return this.injector.get(router.Router);
            },
            enumerable: true,
            configurable: true
        });
        // !!! Scroll to top on page change
        PageComponent.prototype.scrollToTop = function () {
            // !!! PLATFORM_ID dependancy manually activated
            // const platformId: string = RouteService.injector.get(PLATFORM_ID) as string;
            if (common.isPlatformBrowser(this.platformId)) {
                // !!! Router dependancy manually activated
                // const router = RouteService.injector.get(Router);
                this.router.events.subscribe(function (e) {
                    if (!(e instanceof router.NavigationEnd)) {
                        return;
                    }
                    window.scrollTo(0, 0);
                });
            }
        };
        PageComponent.prototype.getId = function () {
            return this.routeService.getId() || (this.page ? this.page.id : 0);
        };
        PageComponent.prototype.getSlug = function () {
            return this.routeService.getSlug() || (this.page ? this.page.slug : '');
        };
        PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(core["ɵɵdirectiveInject"](core.Injector)); };
        PageComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: PageComponent, selectors: [["core-page"]], inputs: { page: "page", params: "params", queryParams: "queryParams" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [[1, "page"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵtext"](1, "Page not found!");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return PageComponent;
    }(core$1.DisposableComponent));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PageComponent, [{
            type: core.Component,
            args: [{
                    selector: 'core-page',
                    template: "<div class=\"page\">Page not found!</div>",
                }]
        }], function () { return [{ type: core.Injector }]; }, { page: [{
                type: core.Input
            }], params: [{
                type: core.Input
            }], queryParams: [{
                type: core.Input
            }] }); })();

    var PageNotFoundComponent = /** @class */ (function (_super) {
        __extends(PageNotFoundComponent, _super);
        function PageNotFoundComponent(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.url = _this.router.url;
            return _this;
        }
        PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(core["ɵɵdirectiveInject"](core.Injector)); };
        PageNotFoundComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["page-not-found-component"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 1, consts: [[1, "page"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵtext"](1, "Page ");
                core["ɵɵelementStart"](2, "span");
                core["ɵɵtext"](3);
                core["ɵɵelementEnd"]();
                core["ɵɵtext"](4, " not found");
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](3);
                core["ɵɵtextInterpolate"](ctx.url);
            } }, encapsulation: 2 });
        return PageNotFoundComponent;
    }(PageComponent));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PageNotFoundComponent, [{
            type: core.Component,
            args: [{
                    selector: 'page-not-found-component',
                    template: "<div class=\"page\">Page <span>{{url}}</span> not found</div>",
                    encapsulation: core.ViewEncapsulation.Emulated,
                }]
        }], function () { return [{ type: core.Injector }]; }, null); })();

    var LinkDefinition = /** @class */ (function () {
        function LinkDefinition() {
        }
        return LinkDefinition;
    }());
    var LinkService = /** @class */ (function () {
        function LinkService(doc) {
            this.doc = doc;
        }
        LinkService.prototype.addTag = function (definition) {
            var element = this.doc.createElement("link");
            this.updateElementDefinition(element, definition);
            this.doc.head.appendChild(element);
        };
        LinkService.prototype.getTag = function (selector) {
            var element = this.doc.querySelector("link" + selector);
            return element;
        };
        LinkService.prototype.updateTag = function (selector, definition) {
            var element = this.doc.querySelector("link" + selector);
            this.updateElementDefinition(element, definition);
        };
        LinkService.prototype.removeTag = function (selector) {
            var element = this.doc.querySelector("link" + selector);
            element.remove();
        };
        LinkService.prototype.updateElementDefinition = function (element, definition) {
            this.updateElementAttribute(element, 'href', definition.href);
            this.updateElementAttribute(element, 'id', definition.id);
            this.updateElementAttribute(element, 'rel', definition.rel);
        };
        LinkService.prototype.updateElementAttribute = function (element, attribute, value) {
            if (value) {
                element.setAttribute(attribute, value);
            }
            else {
                element.removeAttribute(attribute);
            }
        };
        LinkService.ɵfac = function LinkService_Factory(t) { return new (t || LinkService)(core["ɵɵinject"](common.DOCUMENT)); };
        LinkService.ɵprov = core["ɵɵdefineInjectable"]({ token: LinkService, factory: LinkService.ɵfac, providedIn: 'root' });
        return LinkService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](LinkService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [common.DOCUMENT]
                }] }]; }, null); })();

    var PageService = /** @class */ (function (_super) {
        __extends(PageService, _super);
        function PageService(injector, titleService, metaService, linkService, statusCodeService) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.titleService = titleService;
            _this.metaService = metaService;
            _this.linkService = linkService;
            _this.statusCodeService = statusCodeService;
            return _this;
            // console.log('PageService', options);
        }
        Object.defineProperty(PageService.prototype, "collection", {
            get: function () {
                return '/api/page';
            },
            enumerable: true,
            configurable: true
        });
        PageService.prototype.getStatePageBySlug = function (slug) {
            var _this = this;
            slug = slug.split('?')[0];
            if (slug.indexOf('/') === 0) {
                slug = slug.substr(1);
            }
            return this.stateGet("?slug=/" + slug).pipe(operators.map(function (x) {
                x = new Page(Array.isArray(x) ? x.find(function (x) { return x.slug === "/" + slug; }) : x);
                // console.log('PageService.getStatePageBySlug', x);
                return x;
            }), operators.catchError(function (error) {
                // console.log('getStatePageBySlug.error', error);
                _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
                return rxjs.of(null);
            }));
        };
        PageService.prototype.getStatePageById = function (id) {
            var _this = this;
            return this.stateGet("/" + id).pipe(
            // tap(x => console.log('PageService.getPageById', id, x)),
            operators.map(function (x) { return new Page(x); }), operators.catchError(function (error) {
                _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
                return rxjs.of(null);
            }));
        };
        PageService.prototype.getPageById = function (id) {
            var _this = this;
            return this.get("/" + id).pipe(
            // tap(x => console.log('PageService.getPageById', id, x)),
            operators.map(function (x) { return new Page(x); }), operators.catchError(function (error) {
                _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
                return rxjs.of(null);
            }));
        };
        PageService.prototype.getPageBySlug = function (slug) {
            var _this = this;
            slug = slug.split(';')[0];
            // console.log('PageService.getPageBySlug', slug);
            return this.get("?slug=/" + slug).pipe(operators.map(function (x) { return new Page(x); }), 
            // tap(x => this.logger.log(`found pages matching "${slug}"`))
            // tap(x => console.log('PageService.getPageBySlug', x, slug))
            operators.catchError(function (error) {
                // console.log('PageService.getPageBySlug.error', error);
                _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
                return rxjs.of(null);
            }));
        };
        PageService.prototype.addOrUpdateMetaData = function (page) {
            // console.log('PageService.addOrUpdateMetaData', page);
            if (!page) {
                return;
            }
            this.titleService.setTitle(page.title);
            this.addOrUpdateMeta({ property: 'og:title', content: page.title });
            this.addOrUpdateMeta({ property: 'og:image', content: this.getSocialImage(page).url });
            this.addOrUpdateMeta({ property: 'og:image:width', content: '1200' });
            this.addOrUpdateMeta({ property: 'og:image:height', content: '630' });
            this.addOrUpdateMeta({ property: 'og:url', content: page.url || this.origin });
            var meta = page.meta;
            if (meta) {
                this.addOrUpdateMeta({ name: 'description', content: meta.description || 'Servizio di qualità senza costi aggiuntivi con i convenienti pacchetti viaggio Eurospin. Prenota comodamente online!' });
                this.addOrUpdateMeta({ name: 'keywords', content: meta.keywords || 'viaggi,viaggi eurospin' });
                this.addOrUpdateMeta({ name: 'robots', content: meta.robots || 'index,follow' });
                this.addOrUpdateMeta({ property: 'og:locale', content: meta.locale || 'it_IT' });
                this.addOrUpdateMeta({ property: 'og:type', content: meta.type || 'article' });
                this.addOrUpdateMeta({ property: 'og:author', content: meta.author || 'Eurospin Viaggi' });
                this.addOrUpdateLink({ rel: 'canonical', href: meta.canonical || (this.origin.indexOf(page.url) === 0 ? null : page.url) });
            }
            // console.log('PageOutletComponent.addOrUpdateMetaData', page.id, page.title, page.url);
        };
        PageService.prototype.getSocialImage = function (page) {
            var image = page.images ? (page.images.find(function (i) { return i.type === core$1.ImageType.Share; }) ||
                page.images.find(function (i) { return i.type === core$1.ImageType.Default; }) ||
                page.images.find(function (i) { return i.type === core$1.ImageType.Gallery; })) : null;
            return image || {
                url: 'https://s-static.ak.fbcdn.net/images/devsite/attachment_blank.png'
            };
        };
        PageService.prototype.addOrUpdateMeta = function (definition) {
            var selector = definition.name ? "name=\"" + definition.name + "\"" : "property=\"" + definition.property + "\"";
            if (this.metaService.getTag(selector)) {
                if (definition.content) {
                    this.metaService.updateTag(definition, selector);
                }
                else {
                    this.metaService.removeTag(selector);
                }
            }
            else if (definition.content) {
                this.metaService.addTag(definition);
            }
        };
        PageService.prototype.addOrUpdateLink = function (definition) {
            var selector = definition.id ? "#" + definition.id : "[rel=\"" + definition.rel + "\"]";
            if (this.linkService.getTag(selector)) {
                if (definition.href) {
                    this.linkService.updateTag(selector, definition);
                }
                else {
                    this.linkService.removeTag(selector);
                }
            }
            else if (definition.href) {
                this.linkService.addTag(definition);
            }
        };
        PageService.ɵfac = function PageService_Factory(t) { return new (t || PageService)(core["ɵɵinject"](core.Injector), core["ɵɵinject"](platformBrowser.Title), core["ɵɵinject"](platformBrowser.Meta), core["ɵɵinject"](LinkService), core["ɵɵinject"](core$1.HttpStatusCodeService)); };
        PageService.ɵprov = core["ɵɵdefineInjectable"]({ token: PageService, factory: PageService.ɵfac, providedIn: 'root' });
        return PageService;
    }(core$1.EntityService));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PageService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: core.Injector }, { type: platformBrowser.Title }, { type: platformBrowser.Meta }, { type: LinkService }, { type: core$1.HttpStatusCodeService }]; }, null); })();

    var _c0 = ["outlet"];
    function PageOutletComponent_ng_template_0_Template(rf, ctx) { }
    var PageOutletComponent = /** @class */ (function (_super) {
        __extends(PageOutletComponent, _super);
        function PageOutletComponent(router, route, componentFactoryResolver, routeService, pageService) {
            var _this = _super.call(this) || this;
            _this.router = router;
            _this.route = route;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.routeService = routeService;
            _this.pageService = pageService;
            // !!! keep -> Avoid PageOutlet Route Caching for different routes
            _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                return false;
            };
            return _this;
        }
        PageOutletComponent.prototype.ngOnInit = function () {
            this.setSnapshot(this.route.snapshot);
        };
        PageOutletComponent.prototype.setSnapshot = function (snapshot) {
            this.routeService.params = this.routeService.toData(snapshot.params);
            this.routeService.queryParams = this.routeService.toData(snapshot.queryParams);
            var data = snapshot.data;
            var params = this.routeService.params;
            var queryParams = this.routeService.queryParams;
            var component = PageNotFoundComponent;
            if (data.pageResolver) {
                component = data.pageResolver.component;
                var page = data.pageResolver.page;
                var factory = this.componentFactoryResolver.resolveComponentFactory(component);
                this.viewContainerRef.clear();
                var componentRef = this.viewContainerRef.createComponent(factory);
                var instance = componentRef.instance;
                instance.page = page;
                instance.params = params;
                instance.queryParams = queryParams;
                if (typeof instance['PageInit'] === 'function') {
                    instance['PageInit']();
                }
                this.componentRef = componentRef;
                if (page) {
                    var config = this.router.config.slice();
                    var slug = page.slug;
                    if (slug) {
                        config.push({
                            path: slug.indexOf('/') === 0 ? slug.substr(1) : slug, component: component,
                        });
                        this.router.resetConfig(config);
                    }
                    this.pageService.addOrUpdateMetaData(page);
                }
            } /* else {
                // console.log('PageOutletComponent.setSnapshot 404', data);
            }*/
        };
        PageOutletComponent.prototype.ngOnDestroy = function () {
            this.componentRef.destroy();
        };
        PageOutletComponent.ɵfac = function PageOutletComponent_Factory(t) { return new (t || PageOutletComponent)(core["ɵɵdirectiveInject"](router.Router), core["ɵɵdirectiveInject"](router.ActivatedRoute), core["ɵɵdirectiveInject"](core.ComponentFactoryResolver), core["ɵɵdirectiveInject"](core$1.RouteService), core["ɵɵdirectiveInject"](PageService)); };
        PageOutletComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: PageOutletComponent, selectors: [["page-outlet"]], viewQuery: function PageOutletComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.viewContainerRef = _t.first);
            } }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["outlet", ""]], template: function PageOutletComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, PageOutletComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, core["ɵɵtemplateRefExtractor"]);
            } }, encapsulation: 2 });
        return PageOutletComponent;
    }(core$1.DisposableComponent));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PageOutletComponent, [{
            type: core.Component,
            args: [{
                    selector: 'page-outlet',
                    template: '<ng-template #outlet></ng-template>',
                }]
        }], function () { return [{ type: router.Router }, { type: router.ActivatedRoute }, { type: core.ComponentFactoryResolver }, { type: core$1.RouteService }, { type: PageService }]; }, { viewContainerRef: [{
                type: core.ViewChild,
                args: ['outlet', { read: core.ViewContainerRef, static: true }]
            }] }); })();

    var PageResolver = /** @class */ (function () {
        function PageResolver(configService, page) {
            this.configService = configService;
            this.page = page;
            this.component = PageComponent;
            if (page && this.configService.options.pages) {
                this.component = this.configService.options.pages[page.component] || this.configService.options.defaultPage;
            }
            else {
                this.component = this.configService.options.notFoundPage || PageNotFoundComponent;
            }
        }
        return PageResolver;
    }());

    var PageResolverService = /** @class */ (function () {
        function PageResolverService(configService, pageService, routeService) {
            this.configService = configService;
            this.pageService = pageService;
            this.routeService = routeService;
            this.events$ = new rxjs.BehaviorSubject(null);
        }
        PageResolverService.prototype.pageToPageResolver = function (page) {
            var pageResolver = new PageResolver(this.configService, page);
            this.events$.next(pageResolver);
            return pageResolver;
        };
        PageResolverService.prototype.resolve = function (route, state) {
            if (route.params && route.params.id) {
                return this.getPageById(route.params.id);
            }
            else {
                var paths = route.url.filter(function (x) {
                    return x.path;
                }).map(function (x) {
                    return x.path;
                });
                var slug = this.routeService.toSlug(paths).join('/');
                return this.getPageBySlug(slug);
            }
        };
        PageResolverService.prototype.getPageById = function (id) {
            var _this = this;
            // console.log('PageResolverService.getPageById', id);
            return this.pageService.getPageById(id).pipe(operators.map(function (page) { return _this.pageToPageResolver(page); }));
        };
        PageResolverService.prototype.getPageBySlug = function (slug) {
            var _this = this;
            // console.log('PageResolverService.getPageBySlug', slug);
            return this.pageService.getStatePageBySlug(slug).pipe(operators.map(function (page) { return _this.pageToPageResolver(page); }));
        };
        PageResolverService.ɵfac = function PageResolverService_Factory(t) { return new (t || PageResolverService)(core["ɵɵinject"](ConfigService), core["ɵɵinject"](PageService), core["ɵɵinject"](core$1.RouteService)); };
        PageResolverService.ɵprov = core["ɵɵdefineInjectable"]({ token: PageResolverService, factory: PageResolverService.ɵfac, providedIn: 'root' });
        return PageResolverService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PageResolverService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: ConfigService }, { type: PageService }, { type: core$1.RouteService }]; }, null); })();

    var PageGuard = /** @class */ (function () {
        function PageGuard() {
        }
        PageGuard.prototype.match = function (route) {
            var lastPath = route.url.length ? route.url[route.url.length - 1].path : '';
            var pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
            var match = (lastPath).match(pattern);
            if (match !== null) {
                return false;
            }
            else {
                return true;
            }
        };
        PageGuard.prototype.canActivate = function (route, state) {
            return this.match(route);
        };
        PageGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
            return this.match(currentRoute);
        };
        PageGuard.ɵfac = function PageGuard_Factory(t) { return new (t || PageGuard)(); };
        PageGuard.ɵprov = core["ɵɵdefineInjectable"]({ token: PageGuard, factory: PageGuard.ɵfac });
        return PageGuard;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PageGuard, [{
            type: core.Injectable
        }], null, null); })();

    var StaticGuard = /** @class */ (function () {
        function StaticGuard() {
        }
        StaticGuard.prototype.match = function (route) {
            var lastPath = route.url[route.url.length - 1].path;
            // console.log('StaticGuard.CanActivate', e, lastPath);
            var pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
            var match = (lastPath).match(pattern);
            if (match !== null) {
                return true;
            }
            else {
                return false;
            }
        };
        StaticGuard.prototype.canActivate = function (route, state) {
            return this.match(route);
        };
        StaticGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
            return this.match(currentRoute);
        };
        StaticGuard.ɵfac = function StaticGuard_Factory(t) { return new (t || StaticGuard)(); };
        StaticGuard.ɵprov = core["ɵɵdefineInjectable"]({ token: StaticGuard, factory: StaticGuard.ɵfac });
        return StaticGuard;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](StaticGuard, [{
            type: core.Injectable
        }], null, null); })();

    var routes = [
        { path: 'page/:id', component: PageOutletComponent, resolve: { pageResolver: PageResolverService } },
        { path: '**', component: PageOutletComponent, resolve: { pageResolver: PageResolverService }, canActivate: [PageGuard] },
        { path: '**', component: PageNotFoundComponent, canActivate: [StaticGuard] },
    ];
    var PageRouting = /** @class */ (function () {
        function PageRouting() {
        }
        PageRouting.ɵmod = core["ɵɵdefineNgModule"]({ type: PageRouting });
        PageRouting.ɵinj = core["ɵɵdefineInjector"]({ factory: function PageRouting_Factory(t) { return new (t || PageRouting)(); }, imports: [[
                    router.RouterModule.forChild(routes),
                ],
                router.RouterModule] });
        return PageRouting;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](PageRouting, { imports: [router.RouterModule], exports: [router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PageRouting, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        router.RouterModule.forChild(routes),
                    ],
                    exports: [
                        router.RouterModule,
                    ],
                }]
        }], null, null); })();

    var services = [
        ConfigService,
        PageService,
    ];
    var components = [
        PageModuleComponent,
        PageComponent,
        PageNotFoundComponent,
        PageOutletComponent,
        LayoutComponent,
    ];
    var directives = [
        UseLayoutDirective
    ];
    var pipes = [];
    var validators = [];
    var guards = [
        PageGuard,
        StaticGuard,
    ];
    var PageModule = /** @class */ (function () {
        function PageModule(parentModule) {
            if (parentModule) {
                throw new Error('PageModule is already loaded. Import it in the AppModule only');
            }
        }
        PageModule.forRoot = function (config) {
            return {
                ngModule: PageModule,
                providers: [{
                        provide: PAGE_CONFIG, useValue: config
                    }]
            };
        };
        PageModule.ɵmod = core["ɵɵdefineNgModule"]({ type: PageModule });
        PageModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function PageModule_Factory(t) { return new (t || PageModule)(core["ɵɵinject"](PageModule, 12)); }, providers: __spread(services, guards), imports: [[
                    common.CommonModule,
                    core$1.CoreModule,
                    PageRouting,
                ],
                core$1.CoreModule,
                PageRouting] });
        return PageModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](PageModule, { declarations: [PageModuleComponent,
            PageComponent,
            PageNotFoundComponent,
            PageOutletComponent,
            LayoutComponent,
            UseLayoutDirective], imports: [common.CommonModule,
            core$1.CoreModule,
            PageRouting], exports: [core$1.CoreModule,
            PageRouting,
            PageModuleComponent,
            PageComponent,
            PageNotFoundComponent,
            PageOutletComponent,
            LayoutComponent,
            UseLayoutDirective] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PageModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        core$1.CoreModule,
                        PageRouting,
                    ],
                    providers: __spread(services, guards),
                    declarations: __spread(components, directives),
                    entryComponents: __spread(components),
                    exports: __spread([
                        core$1.CoreModule,
                        PageRouting
                    ], components, directives),
                }]
        }], function () { return [{ type: PageModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }]; }, null); })();

    exports.ConfigService = ConfigService;
    exports.ILayoutComponent = ILayoutComponent;
    exports.LayoutComponent = LayoutComponent;
    exports.PAGE_CONFIG = PAGE_CONFIG;
    exports.Page = Page;
    exports.PageComponent = PageComponent;
    exports.PageConfig = PageConfig;
    exports.PageGuard = PageGuard;
    exports.PageIndex = PageIndex;
    exports.PageMeta = PageMeta;
    exports.PageModule = PageModule;
    exports.PageModuleComponent = PageModuleComponent;
    exports.PageNotFoundComponent = PageNotFoundComponent;
    exports.PageOutletComponent = PageOutletComponent;
    exports.PageRelation = PageRelation;
    exports.PageResolver = PageResolver;
    exports.PageResolverService = PageResolverService;
    exports.PageRouting = PageRouting;
    exports.PageService = PageService;
    exports.StaticGuard = StaticGuard;
    exports.UseLayoutDirective = UseLayoutDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=designr-page.umd.js.map
