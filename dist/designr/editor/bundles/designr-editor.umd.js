(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ngx-markdown'), require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@designr/control'), require('@designr/core'), require('@designr/page'), require('rxjs/operators'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('@designr/editor', ['exports', 'ngx-markdown', '@angular/core', '@angular/common', '@angular/forms', '@designr/control', '@designr/core', '@designr/page', 'rxjs/operators', '@angular/animations'], factory) :
    (global = global || self, factory((global.designr = global.designr || {}, global.designr.editor = {}), global.ngxMarkdown, global.ng.core, global.ng.common, global.ng.forms, global.control, global.core, global.page, global.rxjs.operators, global.ng.animations));
}(this, (function (exports, ngxMarkdown, core, common, forms, control, core$1, page, operators, animations) { 'use strict';

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

    var EDITOR_CONFIG = new core.InjectionToken('editor.config');
    var EditorConfig = /** @class */ (function () {
        function EditorConfig(options) {
            // console.log('EditorConfig', options);
            if (options) {
                this.enabled = options.enabled || false;
            }
        }
        return EditorConfig;
    }());

    var EditorService = /** @class */ (function () {
        function EditorService(options) {
            // console.log('EditorService', options);
            options = options || {};
            this.options = new EditorConfig(options);
        }
        EditorService.ɵfac = function EditorService_Factory(t) { return new (t || EditorService)(core["ɵɵinject"](EDITOR_CONFIG)); };
        EditorService.ɵprov = core["ɵɵdefineInjectable"]({ token: EditorService, factory: EditorService.ɵfac, providedIn: 'root' });
        return EditorService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EditorService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: EditorConfig, decorators: [{
                    type: core.Inject,
                    args: [EDITOR_CONFIG]
                }] }]; }, null); })();

    function EditorRootComponent_ng_container_0_div_13_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵelement"](1, "control-outlet", 12);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var option_r11 = ctx.$implicit;
        core["ɵɵnextContext"]();
        var _r9 = core["ɵɵreference"](2);
        core["ɵɵadvance"](1);
        core["ɵɵclassMapInterpolate1"]("fieldset__field fieldset__field--", option_r11.schema, "");
        core["ɵɵproperty"]("option", option_r11)("form", _r9);
    } }
    var _c0 = function (a0) { return { active: a0 }; };
    var _c1 = function (a0) { return { "btn--busy": a0 }; };
    function EditorRootComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        var _r13 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelementStart"](1, "form", 1, 2);
        core["ɵɵlistener"]("ngSubmit", function EditorRootComponent_ng_container_0_Template_form_ngSubmit_1_listener($event) { core["ɵɵrestoreView"](_r13); var _r9 = core["ɵɵreference"](2); var ctx_r12 = core["ɵɵnextContext"](); return _r9.valid && ctx_r12.onSubmit(_r9.value); });
        core["ɵɵelementStart"](3, "div", 3);
        core["ɵɵelementStart"](4, "span", 4);
        core["ɵɵtext"](5);
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](6, "span", 5);
        core["ɵɵtext"](7);
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](8, "span", 6);
        core["ɵɵtext"](9);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelement"](10, "hr");
        core["ɵɵelement"](11, "h2", 7);
        core["ɵɵelement"](12, "hr");
        core["ɵɵtemplate"](13, EditorRootComponent_ng_container_0_div_13_Template, 2, 5, "div", 8);
        core["ɵɵelementStart"](14, "div", 9);
        core["ɵɵelementStart"](15, "button", 10);
        core["ɵɵlistener"]("click", function EditorRootComponent_ng_container_0_Template_button_click_15_listener($event) { core["ɵɵrestoreView"](_r13); var ctx_r14 = core["ɵɵnextContext"](); return ctx_r14.onReset(); });
        core["ɵɵelementStart"](16, "span");
        core["ɵɵtext"](17, "Annulla");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](18, "button", 11);
        core["ɵɵelementStart"](19, "span");
        core["ɵɵtext"](20, "Salva");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var _r9 = core["ɵɵreference"](2);
        var ctx_r8 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("formGroup", _r9);
        core["ɵɵadvance"](4);
        core["ɵɵtextInterpolate"](ctx_r8.page.id);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction1"](10, _c0, ctx_r8.page.active));
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](ctx_r8.page.active ? "active" : "inactive");
        core["ɵɵadvance"](2);
        core["ɵɵtextInterpolate"](ctx_r8.componentName);
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("innerHTML", ctx_r8.page.title, core["ɵɵsanitizeHtml"]);
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngForOf", ctx_r8.options);
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("disabled", ctx_r8.submitted || !_r9.valid);
        core["ɵɵadvance"](3);
        core["ɵɵproperty"]("disabled", ctx_r8.submitted || !_r9.valid)("ngClass", core["ɵɵpureFunction1"](12, _c1, ctx_r8.busy));
    } }
    var EditorRootComponent = /** @class */ (function (_super) {
        __extends(EditorRootComponent, _super);
        function EditorRootComponent(platformId, configService, markdownService, formService, pageResolverService) {
            var _this = _super.call(this) || this;
            _this.platformId = platformId;
            _this.configService = configService;
            _this.markdownService = markdownService;
            _this.formService = formService;
            _this.pageResolverService = pageResolverService;
            _this.busy = false;
            _this.submitted = false;
            return _this;
        }
        Object.defineProperty(EditorRootComponent.prototype, "page", {
            get: function () {
                return this._page;
            },
            set: function (page) {
                var _this = this;
                this._pageCopy = Object.assign({}, page);
                this._page = page;
                if (this._page) {
                    this.options = this.formService.getOptions(this.getControlsByPage(page));
                    this.form = this.formService.getFormGroup(this.options);
                    this.form.valueChanges.subscribe(function (x) {
                        _this.onAssign(x); // Object.assign(this._page, x);
                    });
                }
                else {
                    this.options = [];
                    this.form = null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorRootComponent.prototype, "componentName", {
            get: function () {
                if (this._page) {
                    var component = this.configService.options.pages[this._page.component];
                    if (component) {
                        return component.name;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        EditorRootComponent.prototype.getControlsByPage = function (page) {
            return page ? Object.keys(page).filter(function (key) { return typeof page[key] !== 'object'; }).map(function (key, i) {
                return {
                    key: key,
                    value: page[key],
                    schema: key === 'description' ? 'markdown' : 'text',
                    label: key,
                    placeholder: key,
                    required: false,
                    order: i + 1
                };
            }) : [];
        };
        EditorRootComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                this.pageResolverService.events$.pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (resolver) {
                    // console.log('EditorRootComponent.resolver', resolver);
                    _this.page = resolver ? resolver.page : null;
                });
            }
        };
        EditorRootComponent.prototype.onReset = function () {
            var _this = this;
            // console.log('EditorRootComponent.onReset');
            Object.keys(this.form.controls).forEach(function (key) {
                _this.form.get(key).setValue(_this._pageCopy[key]);
            });
            /*
            const keys = this.controls.map(x => x.key);
            keys.forEach(k => {
                // console.log(k, this._page[k], this._pageCopy[k]);
                this._page[k] = this._pageCopy[k];
            });
            */
        };
        EditorRootComponent.prototype.onSubmit = function (model) {
            // console.log('EditorRootComponent.onSubmit', model);
            this.onAssign(model);
            // Object.assign(this._page, model);
        };
        EditorRootComponent.prototype.onAssign = function (model) {
            var _this = this;
            Object.keys(this.form.controls).forEach(function (key) {
                switch (key) {
                    case 'description':
                        _this._page[key] = _this.markdownService.compile(model[key]);
                        break;
                    default:
                        _this._page[key] = model[key];
                }
            });
        };
        EditorRootComponent.ɵfac = function EditorRootComponent_Factory(t) { return new (t || EditorRootComponent)(core["ɵɵdirectiveInject"](core.PLATFORM_ID), core["ɵɵdirectiveInject"](page.ConfigService), core["ɵɵdirectiveInject"](ngxMarkdown.MarkdownService), core["ɵɵdirectiveInject"](control.FormService), core["ɵɵdirectiveInject"](page.PageResolverService)); };
        EditorRootComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: EditorRootComponent, selectors: [["editor-root-component"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["name", "form", "role", "form", "novalidate", "", "autocomplete", "off", 1, "form", 3, "formGroup", "ngSubmit"], ["form", "ngForm"], [1, "info"], [1, "id"], [1, "status", 3, "ngClass"], [1, "component"], [1, "h1", 3, "innerHTML"], [4, "ngFor", "ngForOf"], [1, "action-bar"], ["type", "text", "title", "Annulla", 1, "btn", "btn--secondary", 3, "disabled", "click"], ["type", "submit", "title", "Salva", 1, "btn", "btn--primary", 3, "disabled", "ngClass"], [3, "option", "form"]], template: function EditorRootComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, EditorRootComponent_ng_container_0_Template, 21, 14, "ng-container", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", ctx.page);
            } }, directives: [common.NgIf, forms["ɵangular_packages_forms_forms_y"], forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgClass, common.NgForOf, control.ControlOutletComponent], styles: ["[_nghost-%COMP%]{font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}.h1[_ngcontent-%COMP%]{color:#55555a;font-size:19px}form[_ngcontent-%COMP%]{margin:0}label[_ngcontent-%COMP%]{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}.id[_ngcontent-%COMP%]{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status[_ngcontent-%COMP%]{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active[_ngcontent-%COMP%]{background:green;color:#fff}.component[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-style:italic}"] });
        return EditorRootComponent;
    }(core$1.DisposableComponent));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EditorRootComponent, [{
            type: core.Component,
            args: [{
                    selector: 'editor-root-component',
                    templateUrl: './editor-root.component.html',
                    styleUrls: ['./editor-root.component.scss'],
                    encapsulation: core.ViewEncapsulation.Emulated,
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: page.ConfigService }, { type: ngxMarkdown.MarkdownService }, { type: control.FormService }, { type: page.PageResolverService }]; }, null); })();

    var services = [];
    var components = [
        EditorRootComponent,
    ];
    var directives = [];
    var pipes = [];
    var validators = [];
    var guards = [];
    var EditorBundleModule = /** @class */ (function () {
        function EditorBundleModule(parentModule) {
            if (parentModule) {
                throw new Error('EditorBundleModule is already loaded. Import it in the AppModule only');
            }
        }
        EditorBundleModule.ɵmod = core["ɵɵdefineNgModule"]({ type: EditorBundleModule });
        EditorBundleModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function EditorBundleModule_Factory(t) { return new (t || EditorBundleModule)(core["ɵɵinject"](EditorBundleModule, 12)); }, providers: __spread([
                { provide: 'LAZY_ROOT_COMPONENT', useValue: EditorRootComponent }
            ], services), imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    ngxMarkdown.MarkdownModule.forRoot({
                        markedOptions: {
                            provide: ngxMarkdown.MarkedOptions,
                            useValue: {
                            // gfm: true,
                            // tables: true,
                            // breaks: true,
                            // pedantic: true,
                            // sanitize: true,
                            // smartLists: true,
                            // smartypants: true,
                            },
                        },
                    }),
                    core$1.CoreModule,
                    control.ControlModule,
                ]] });
        return EditorBundleModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](EditorBundleModule, { declarations: [EditorRootComponent,
            EditorRootComponent], imports: [common.CommonModule,
            forms.FormsModule,
            forms.ReactiveFormsModule, ngxMarkdown.MarkdownModule, core$1.CoreModule,
            control.ControlModule], exports: [EditorRootComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EditorBundleModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        ngxMarkdown.MarkdownModule.forRoot({
                            markedOptions: {
                                provide: ngxMarkdown.MarkedOptions,
                                useValue: {
                                // gfm: true,
                                // tables: true,
                                // breaks: true,
                                // pedantic: true,
                                // sanitize: true,
                                // smartLists: true,
                                // smartypants: true,
                                },
                            },
                        }),
                        core$1.CoreModule,
                        control.ControlModule,
                    ],
                    providers: __spread([
                        { provide: 'LAZY_ROOT_COMPONENT', useValue: EditorRootComponent }
                    ], services),
                    declarations: __spread([
                        EditorRootComponent
                    ], components),
                    entryComponents: [
                        EditorRootComponent,
                    ],
                    exports: __spread(components),
                }]
        }], function () { return [{ type: EditorBundleModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }]; }, null); })();

    var EditorModuleComponent = /** @class */ (function () {
        function EditorModuleComponent() {
            this.version = '0.0.12';
        }
        EditorModuleComponent.prototype.ngOnInit = function () {
        };
        EditorModuleComponent.ɵfac = function EditorModuleComponent_Factory(t) { return new (t || EditorModuleComponent)(); };
        EditorModuleComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: EditorModuleComponent, selectors: [["editor-module"]], decls: 2, vars: 1, consts: [[1, "editor-module"]], template: function EditorModuleComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "span", 0);
                core["ɵɵtext"](1);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate1"]("editor ", ctx.version, "");
            } }, encapsulation: 2 });
        return EditorModuleComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EditorModuleComponent, [{
            type: core.Component,
            args: [{
                    selector: 'editor-module',
                    template: "<span class=\"editor-module\">editor {{version}}</span>",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    function PanelComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelementContainer"](1, 2);
        core["ɵɵelementContainerEnd"]();
    } }
    var PanelComponent = /** @class */ (function (_super) {
        __extends(PanelComponent, _super);
        function PanelComponent(platformId, config) {
            var _this = _super.call(this) || this;
            _this.platformId = platformId;
            _this.config = config;
            _this.opened = false;
            return _this;
        }
        PanelComponent.prototype.onKeydown = function (event) {
            if (event.key === 'e' && event.ctrlKey) {
                this.opened = this.config.enabled && !this.opened;
                console.log('PanelComponent.document:keydown', this.opened);
            }
        };
        PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(core["ɵɵdirectiveInject"](core.PLATFORM_ID), core["ɵɵdirectiveInject"](EDITOR_CONFIG)); };
        PanelComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["panel-component"]], hostBindings: function PanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("keydown", function PanelComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); }, false, core["ɵɵresolveDocument"]);
            } }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[1, "panel", 3, "clickOutside"], [4, "ngIf"], ["bundle", "editor"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵlistener"]("clickOutside", function PanelComponent_Template_div_clickOutside_0_listener($event) { return ctx.opened = false; });
                core["ɵɵtemplate"](1, PanelComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("@openClose", ctx.opened ? "open" : "closed");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.opened);
            } }, directives: [common.NgIf, core$1.BundleDirective], styles: [".panel[_ngcontent-%COMP%]{position:fixed;top:0;right:0;width:320px;height:100vh;padding:15px;overflow-x:hidden;overflow-y:auto;background:#fff;z-index:100000}[_ngcontent-%COMP%]::-webkit-scrollbar{width:0}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:0 0}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:0 0}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:0 0}"], data: { animation: [
                    animations.trigger('openClose', [
                        animations.state('open', animations.style({
                            opacity: 1,
                            transform: 'translateX(0)',
                        })),
                        animations.state('closed', animations.style({
                            opacity: 0.5,
                            transform: 'translateX(100%)',
                        })),
                        animations.transition('open => closed', [
                            animations.animate('250ms')
                        ]),
                        animations.transition('closed => open', [
                            animations.animate('150ms')
                        ]),
                    ]),
                ] } });
        return PanelComponent;
    }(core$1.DisposableComponent));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PanelComponent, [{
            type: core.Component,
            args: [{
                    selector: 'panel-component',
                    templateUrl: './panel.component.html',
                    styleUrls: ['./panel.component.scss'],
                    animations: [
                        animations.trigger('openClose', [
                            animations.state('open', animations.style({
                                opacity: 1,
                                transform: 'translateX(0)',
                            })),
                            animations.state('closed', animations.style({
                                opacity: 0.5,
                                transform: 'translateX(100%)',
                            })),
                            animations.transition('open => closed', [
                                animations.animate('250ms')
                            ]),
                            animations.transition('closed => open', [
                                animations.animate('150ms')
                            ]),
                        ]),
                    ],
                    encapsulation: core.ViewEncapsulation.Emulated,
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: EditorConfig, decorators: [{
                    type: core.Inject,
                    args: [EDITOR_CONFIG]
                }] }]; }, { onKeydown: [{
                type: core.HostListener,
                args: ['document:keydown', ['$event']]
            }] }); })();

    var services$1 = [
        EditorService,
    ];
    var components$1 = [
        EditorModuleComponent,
        PanelComponent,
    ];
    var directives$1 = [];
    var pipes$1 = [];
    var validators$1 = [];
    var guards$1 = [];
    var EditorModule = /** @class */ (function () {
        function EditorModule(parentModule) {
            if (parentModule) {
                throw new Error('EditorModule is already loaded. Import it in the AppModule only');
            }
        }
        EditorModule.forRoot = function (config) {
            return {
                ngModule: EditorModule,
                providers: [
                    { provide: EDITOR_CONFIG, useValue: config },
                ]
            };
        };
        EditorModule.ɵmod = core["ɵɵdefineNgModule"]({ type: EditorModule });
        EditorModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function EditorModule_Factory(t) { return new (t || EditorModule)(core["ɵɵinject"](EditorModule, 12)); }, providers: __spread(services$1), imports: [[
                    common.CommonModule,
                    core$1.CoreModule,
                ],
                core$1.CoreModule] });
        return EditorModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](EditorModule, { declarations: [EditorModuleComponent,
            PanelComponent], imports: [common.CommonModule,
            core$1.CoreModule], exports: [core$1.CoreModule,
            EditorModuleComponent,
            PanelComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EditorModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        core$1.CoreModule,
                    ],
                    providers: __spread(services$1),
                    declarations: __spread(components$1, directives$1),
                    exports: __spread([
                        core$1.CoreModule
                    ], components$1),
                }]
        }], function () { return [{ type: EditorModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }]; }, null); })();

    Object.defineProperty(exports, 'MarkdownModule', {
        enumerable: true,
        get: function () {
            return ngxMarkdown.MarkdownModule;
        }
    });
    Object.defineProperty(exports, 'MarkedOptions', {
        enumerable: true,
        get: function () {
            return ngxMarkdown.MarkedOptions;
        }
    });
    exports.EDITOR_CONFIG = EDITOR_CONFIG;
    exports.EditorBundleModule = EditorBundleModule;
    exports.EditorConfig = EditorConfig;
    exports.EditorModule = EditorModule;
    exports.EditorModuleComponent = EditorModuleComponent;
    exports.EditorRootComponent = EditorRootComponent;
    exports.EditorService = EditorService;
    exports.PanelComponent = PanelComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=designr-editor.umd.js.map
