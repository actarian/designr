(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@designr/core'), require('@designr/page')) :
    typeof define === 'function' && define.amd ? define('@designr/section', ['exports', '@angular/core', '@angular/common', '@designr/core', '@designr/page'], factory) :
    (global = global || self, factory((global.designr = global.designr || {}, global.designr.section = {}), global.ng.core, global.ng.common, global.core$1, global.page));
}(this, (function (exports, core, common, core$1, page) { 'use strict';

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

    var SectionConfig = /** @class */ (function () {
        function SectionConfig(options) {
            this.sections = {};
            // console.log('SectionConfig', options);
            if (options) {
                Object.assign(this, options);
                this.sections = options.sections || {};
            }
        }
        return SectionConfig;
    }());
    var SECTION_CONFIG = new core.InjectionToken('section.config');

    var SectionModuleComponent = /** @class */ (function () {
        function SectionModuleComponent() {
            this.version = '0.0.12';
        }
        SectionModuleComponent.prototype.ngOnInit = function () {
        };
        SectionModuleComponent.ɵfac = function SectionModuleComponent_Factory(t) { return new (t || SectionModuleComponent)(); };
        SectionModuleComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: SectionModuleComponent, selectors: [["section-module"]], decls: 2, vars: 1, consts: [[1, "section-module"]], template: function SectionModuleComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "span", 0);
                core["ɵɵtext"](1);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate1"]("section ", ctx.version, "");
            } }, encapsulation: 2 });
        return SectionModuleComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SectionModuleComponent, [{
            type: core.Component,
            args: [{
                    selector: 'section-module',
                    template: "<span class=\"section-module\">section {{version}}</span>",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var Section = /** @class */ (function (_super) {
        __extends(Section, _super);
        function Section(options) {
            return _super.call(this, options) || this;
        }
        return Section;
    }(page.PageIndex));

    var SectionComponent = /** @class */ (function (_super) {
        __extends(SectionComponent, _super);
        function SectionComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SectionComponent.ɵfac = function SectionComponent_Factory(t) { return ɵSectionComponent_BaseFactory(t || SectionComponent); };
        SectionComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: SectionComponent, selectors: [["core-section"]], inputs: { section: "section" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [[1, "section"]], template: function SectionComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "section", 0);
                core["ɵɵtext"](1, "Section not found!");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return SectionComponent;
    }(core$1.DisposableComponent));
    var ɵSectionComponent_BaseFactory = core["ɵɵgetInheritedFactory"](SectionComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SectionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'core-section',
                    template: "<section class=\"section\">Section not found!</section>",
                }]
        }], null, { section: [{
                type: core.Input
            }] }); })();

    var SectionService = /** @class */ (function () {
        function SectionService(options) {
            // console.log('SectionService', options);
            options = options || {};
            this.options = new SectionConfig(options);
        }
        SectionService.prototype.resolve = function (section) {
            var component;
            if (section) {
                component = this.options.sections[section.component] || SectionComponent;
            }
            else {
                component = SectionComponent;
                // component = this.pageService.options.notFoundPage || SectionComponent;
            }
            return component;
        };
        SectionService.ɵfac = function SectionService_Factory(t) { return new (t || SectionService)(core["ɵɵinject"](SECTION_CONFIG)); };
        SectionService.ɵprov = core["ɵɵdefineInjectable"]({ token: SectionService, factory: SectionService.ɵfac, providedIn: 'root' });
        return SectionService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SectionService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: SectionConfig, decorators: [{
                    type: core.Inject,
                    args: [SECTION_CONFIG]
                }] }]; }, null); })();

    var _c0 = ["outlet"];
    function SectionOutletComponent_ng_template_0_Template(rf, ctx) { }
    var SectionOutletComponent = /** @class */ (function (_super) {
        __extends(SectionOutletComponent, _super);
        function SectionOutletComponent(componentFactoryResolver, sectionService) {
            var _this = _super.call(this) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.sectionService = sectionService;
            return _this;
        }
        SectionOutletComponent.prototype.ngOnInit = function () {
            var component = this.sectionService.resolve(this.section);
            var factory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.viewContainerRef.clear();
            var componentRef = this.viewContainerRef.createComponent(factory);
            var instance = componentRef.instance;
            instance.section = this.section;
            if (typeof instance['SectionInit'] === 'function') {
                instance['SectionInit']();
            }
            this.componentRef = componentRef;
        };
        SectionOutletComponent.prototype.ngOnDestroy = function () {
            this.componentRef.destroy();
        };
        SectionOutletComponent.ɵfac = function SectionOutletComponent_Factory(t) { return new (t || SectionOutletComponent)(core["ɵɵdirectiveInject"](core.ComponentFactoryResolver), core["ɵɵdirectiveInject"](SectionService)); };
        SectionOutletComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: SectionOutletComponent, selectors: [["section-outlet"]], viewQuery: function SectionOutletComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.viewContainerRef = _t.first);
            } }, inputs: { section: "section" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["outlet", ""]], template: function SectionOutletComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, SectionOutletComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, core["ɵɵtemplateRefExtractor"]);
            } }, encapsulation: 2 });
        return SectionOutletComponent;
    }(core$1.DisposableComponent));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SectionOutletComponent, [{
            type: core.Component,
            args: [{
                    selector: 'section-outlet',
                    template: '<ng-template #outlet></ng-template>',
                }]
        }], function () { return [{ type: core.ComponentFactoryResolver }, { type: SectionService }]; }, { section: [{
                type: core.Input
            }], viewContainerRef: [{
                type: core.ViewChild,
                args: ['outlet', { read: core.ViewContainerRef, static: true }]
            }] }); })();

    function SectionsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelement"](1, "section-outlet", 1);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var section_r7 = ctx.$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("section", section_r7);
    } }
    var SectionsComponent = /** @class */ (function (_super) {
        __extends(SectionsComponent, _super);
        function SectionsComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SectionsComponent.ɵfac = function SectionsComponent_Factory(t) { return ɵSectionsComponent_BaseFactory(t || SectionsComponent); };
        SectionsComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: SectionsComponent, selectors: [["section-sections"]], inputs: { sections: "sections" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "section"]], template: function SectionsComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, SectionsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngForOf", ctx.sections);
            } }, directives: [common.NgForOf, SectionOutletComponent], encapsulation: 2 });
        return SectionsComponent;
    }(core$1.DisposableComponent));
    var ɵSectionsComponent_BaseFactory = core["ɵɵgetInheritedFactory"](SectionsComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SectionsComponent, [{
            type: core.Component,
            args: [{
                    selector: 'section-sections',
                    template: "<ng-container *ngFor=\"let section of sections\">\n\t<section-outlet [section]=\"section\"></section-outlet>\n</ng-container>",
                }]
        }], null, { sections: [{
                type: core.Input
            }] }); })();

    var services = [
        SectionService,
    ];
    var components = [
        SectionModuleComponent,
        SectionOutletComponent,
        SectionComponent,
        SectionsComponent,
    ];
    var directives = [];
    var pipes = [];
    var validators = [];
    var guards = [];
    var SectionModule = /** @class */ (function () {
        function SectionModule(parentModule) {
            if (parentModule) {
                throw new Error('SectionModule is already loaded. Import it in the AppModule only');
            }
        }
        SectionModule.forRoot = function (config) {
            return {
                ngModule: SectionModule,
                providers: [{
                        provide: SECTION_CONFIG, useValue: config
                    }]
            };
        };
        SectionModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SectionModule });
        SectionModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SectionModule_Factory(t) { return new (t || SectionModule)(core["ɵɵinject"](SectionModule, 12)); }, providers: __spread(services), imports: [[
                    common.CommonModule,
                    core$1.CoreModule,
                ],
                core$1.CoreModule] });
        return SectionModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SectionModule, { declarations: [SectionModuleComponent,
            SectionOutletComponent,
            SectionComponent,
            SectionsComponent], imports: [common.CommonModule,
            core$1.CoreModule], exports: [core$1.CoreModule,
            SectionModuleComponent,
            SectionOutletComponent,
            SectionComponent,
            SectionsComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SectionModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        core$1.CoreModule,
                    ],
                    providers: __spread(services),
                    declarations: __spread(components),
                    entryComponents: __spread(components),
                    exports: __spread([
                        core$1.CoreModule
                    ], components),
                }]
        }], function () { return [{ type: SectionModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }]; }, null); })();

    exports.SECTION_CONFIG = SECTION_CONFIG;
    exports.Section = Section;
    exports.SectionComponent = SectionComponent;
    exports.SectionConfig = SectionConfig;
    exports.SectionModule = SectionModule;
    exports.SectionModuleComponent = SectionModuleComponent;
    exports.SectionOutletComponent = SectionOutletComponent;
    exports.SectionService = SectionService;
    exports.SectionsComponent = SectionsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=designr-section.umd.js.map
