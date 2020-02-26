(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@designr/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@designr/control', ['exports', '@angular/core', '@angular/forms', '@designr/core', '@angular/common', 'rxjs', 'rxjs/operators', '@angular/common/http'], factory) :
    (global = global || self, factory((global.designr = global.designr || {}, global.designr.control = {}), global.ng.core, global.ng.forms, global.core, global.ng.common, global.rxjs, global.rxjs.operators, global.ng.common.http));
}(this, (function (exports, core, forms, core$1, common, rxjs, operators, http) { 'use strict';

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

    // let UNIQUE_ID: number = 0;
    var ControlOption = /** @class */ (function () {
        function ControlOption(options) {
            this.schema = 'text';
            if (options) {
                Object.assign(this, options);
            }
        }
        return ControlOption;
    }());

    var ControlCheckbox = /** @class */ (function (_super) {
        __extends(ControlCheckbox, _super);
        function ControlCheckbox() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'checkbox';
            return _this;
        }
        return ControlCheckbox;
    }(ControlOption));

    var _c0 = ["inputRef"];
    var _c1 = ["errorRef"];
    function ControlComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "input", 4);
        core["ɵɵpipe"](1, "label");
    } if (rf & 2) {
        var context_r202 = ctx.$implicit;
        core["ɵɵpropertyInterpolate"]("placeholder", core["ɵɵpipeBind1"](1, 3, context_r202.option.placeholder));
        core["ɵɵproperty"]("id", context_r202.option.key)("formControlName", context_r202.option.key);
    } }
    function ControlComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function ControlComponent_ng_template_4_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.required"));
    } }
    var _c2 = function (a0) { return { minlength: a0 }; };
    function ControlComponent_ng_template_4_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r203 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind3"](2, 1, "errors.minlength", null, core["ɵɵpureFunction1"](5, _c2, context_r203.option.minlength)));
    } }
    var _c3 = function (a0) { return { maxlength: a0 }; };
    function ControlComponent_ng_template_4_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r203 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind3"](2, 1, "errors.maxlength", null, core["ɵɵpureFunction1"](5, _c3, context_r203.option.maxlength)));
    } }
    function ControlComponent_ng_template_4_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.pattern"));
    } }
    function ControlComponent_ng_template_4_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.match"));
    } }
    function ControlComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 6);
        core["ɵɵtemplate"](1, ControlComponent_ng_template_4_div_0_div_1_Template, 3, 3, "div", 7);
        core["ɵɵtemplate"](2, ControlComponent_ng_template_4_div_0_div_2_Template, 3, 7, "div", 7);
        core["ɵɵtemplate"](3, ControlComponent_ng_template_4_div_0_div_3_Template, 3, 7, "div", 7);
        core["ɵɵtemplate"](4, ControlComponent_ng_template_4_div_0_div_4_Template, 3, 3, "div", 7);
        core["ɵɵtemplate"](5, ControlComponent_ng_template_4_div_0_div_5_Template, 3, 3, "div", 7);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r203 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r203.control.errors.required);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r203.control.errors.minlength);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r203.control.errors.maxlength);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r203.control.errors.pattern);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r203.control.errors.match);
    } }
    function ControlComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, ControlComponent_ng_template_4_div_0_Template, 6, 5, "div", 5);
    } if (rf & 2) {
        var context_r203 = ctx.$implicit;
        core["ɵɵproperty"]("ngIf", context_r203.control.invalid && (context_r203.control.dirty || context_r203.control.touched));
    } }
    function ControlComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    var _c4 = function (a0) { return { $implicit: a0 }; };
    var ControlComponent = /** @class */ (function (_super) {
        __extends(ControlComponent, _super);
        function ControlComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ControlComponent.prototype, "context", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlComponent.prototype, "control", {
            get: function () {
                // console.log('control', this.option.key, this.form.controls);
                return this.form.controls[this.option.key];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlComponent.prototype, "isValid", {
            get: function () {
                return this.control.valid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlComponent.prototype, "classes", {
            get: function () {
                return {
                    valid: this.control.valid,
                    invalid: this.control.invalid,
                    dirty: this.control.dirty,
                    empty: Boolean(this.control.value == null),
                    required: Boolean(this.option.required || this.option.requiredTrue),
                    disabled: this.option.disabled,
                };
            },
            enumerable: true,
            configurable: true
        });
        ControlComponent.ɵfac = function ControlComponent_Factory(t) { return ɵControlComponent_BaseFactory(t || ControlComponent); };
        ControlComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlComponent, selectors: [["control-component"]], contentQueries: function ControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core["ɵɵcontentQuery"](dirIndex, _c0, true);
                core["ɵɵcontentQuery"](dirIndex, _c1, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.inputRef = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.errorRef = _t.first);
            } }, inputs: { option: "option", form: "form" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["errorDef", ""], ["type", "text", 1, "control__input", 3, "placeholder", "id", "formControlName"], ["class", "control__error", 4, "ngIf"], [1, "control__error"], [4, "ngIf"]], template: function ControlComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵtemplate"](1, ControlComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](3, ControlComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
                core["ɵɵtemplate"](4, ControlComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](6, ControlComponent_ng_container_6_Template, 1, 0, "ng-container", 2);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                var _r196 = core["ɵɵreference"](2);
                var _r199 = core["ɵɵreference"](5);
                core["ɵɵproperty"]("formGroup", ctx.form);
                core["ɵɵadvance"](3);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.inputRef || _r196)("ngTemplateOutletContext", core["ɵɵpureFunction1"](5, _c4, ctx.context));
                core["ɵɵadvance"](3);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.errorRef || _r199)("ngTemplateOutletContext", core["ɵɵpureFunction1"](7, _c4, ctx.context));
            } }, directives: [forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgTemplateOutlet, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, common.NgIf], pipes: [core$1.LabelPipe], encapsulation: 2 });
        return ControlComponent;
    }(core$1.DisposableComponent));
    var ɵControlComponent_BaseFactory = core["ɵɵgetInheritedFactory"](ControlComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlComponent, [{
            type: core.Component,
            args: [{
                    selector: 'control-component',
                    templateUrl: 'control.component.html',
                }]
        }], null, { inputRef: [{
                type: core.ContentChild,
                args: ['inputRef', /* TODO: add static flag */ {}]
            }], errorRef: [{
                type: core.ContentChild,
                args: ['errorRef', /* TODO: add static flag */ {}]
            }], option: [{
                type: core.Input
            }], form: [{
                type: core.Input
            }] }); })();

    function ControlCheckboxComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "label", 4);
        core["ɵɵelement"](1, "input", 5);
        core["ɵɵelementStart"](2, "span", 6);
        core["ɵɵtext"](3);
        core["ɵɵpipe"](4, "label");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r219 = ctx.$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("id", context_r219.option.key)("formControlName", context_r219.option.key);
        core["ɵɵadvance"](2);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](4, 3, context_r219.option.info));
    } }
    function ControlCheckboxComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.required"));
    } }
    function ControlCheckboxComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.required"));
    } }
    function ControlCheckboxComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 8);
        core["ɵɵtemplate"](1, ControlCheckboxComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 9);
        core["ɵɵtemplate"](2, ControlCheckboxComponent_ng_template_3_div_0_div_2_Template, 3, 3, "div", 9);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r220 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r220.control.errors.required);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r220.control.errors.requiredTrue);
    } }
    function ControlCheckboxComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, ControlCheckboxComponent_ng_template_3_div_0_Template, 3, 2, "div", 7);
    } if (rf & 2) {
        var context_r220 = ctx.$implicit;
        core["ɵɵproperty"]("ngIf", context_r220.control.invalid && (context_r220.control.dirty || context_r220.control.touched));
    } }
    function ControlCheckboxComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function ControlCheckboxComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    var _c0$1 = function (a0) { return { $implicit: a0 }; };
    var ControlCheckboxComponent = /** @class */ (function (_super) {
        __extends(ControlCheckboxComponent, _super);
        function ControlCheckboxComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlCheckboxComponent.ɵfac = function ControlCheckboxComponent_Factory(t) { return ɵControlCheckboxComponent_BaseFactory(t || ControlCheckboxComponent); };
        ControlCheckboxComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlCheckboxComponent, selectors: [["control-checkbox-component"]], inputs: { option: "option" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control__group", "control__group--checkbox"], ["type", "checkbox", 1, "control__checkbox", 3, "id", "formControlName"], [1, "control__info"], ["class", "control__error control__error--checkbox", 4, "ngIf"], [1, "control__error", "control__error--checkbox"], [4, "ngIf"]], template: function ControlCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵtemplate"](1, ControlCheckboxComponent_ng_template_1_Template, 5, 5, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](3, ControlCheckboxComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](5, ControlCheckboxComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
                core["ɵɵtemplate"](6, ControlCheckboxComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                var _r213 = core["ɵɵreference"](2);
                var _r215 = core["ɵɵreference"](4);
                core["ɵɵproperty"]("formGroup", ctx.form);
                core["ɵɵadvance"](5);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.inputRef || _r213)("ngTemplateOutletContext", core["ɵɵpureFunction1"](5, _c0$1, ctx.context));
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.errorRef || _r215)("ngTemplateOutletContext", core["ɵɵpureFunction1"](7, _c0$1, ctx.context));
            } }, directives: [forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgTemplateOutlet, forms.CheckboxControlValueAccessor, forms.NgControlStatus, forms.FormControlName, common.NgIf], pipes: [core$1.LabelPipe], encapsulation: 2 });
        return ControlCheckboxComponent;
    }(ControlComponent));
    var ɵControlCheckboxComponent_BaseFactory = core["ɵɵgetInheritedFactory"](ControlCheckboxComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlCheckboxComponent, [{
            type: core.Component,
            args: [{
                    selector: 'control-checkbox-component',
                    templateUrl: 'control-checkbox.component.html',
                }]
        }], null, { option: [{
                type: core.Input
            }] }); })();

    var ControlEmail = /** @class */ (function (_super) {
        __extends(ControlEmail, _super);
        function ControlEmail() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'email';
            _this.pattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
            return _this;
        }
        return ControlEmail;
    }(ControlOption));

    function ControlEmailComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "input", 4);
        core["ɵɵpipe"](1, "label");
    } if (rf & 2) {
        var context_r231 = ctx.$implicit;
        core["ɵɵpropertyInterpolate"]("placeholder", core["ɵɵpipeBind1"](1, 3, context_r231.option.placeholder));
        core["ɵɵproperty"]("id", context_r231.option.key)("formControlName", context_r231.option.key);
    } }
    function ControlEmailComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.required"));
    } }
    function ControlEmailComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.email"));
    } }
    var _c0$2 = function (a0) { return { minlength: a0 }; };
    function ControlEmailComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r232 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind3"](2, 1, "errors.minlength", null, core["ɵɵpureFunction1"](5, _c0$2, context_r232.option.minlength)));
    } }
    var _c1$1 = function (a0) { return { maxlength: a0 }; };
    function ControlEmailComponent_ng_template_3_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r232 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind3"](2, 1, "errors.maxlength", null, core["ɵɵpureFunction1"](5, _c1$1, context_r232.option.maxlength)));
    } }
    function ControlEmailComponent_ng_template_3_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.pattern"));
    } }
    function ControlEmailComponent_ng_template_3_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.match"));
    } }
    function ControlEmailComponent_ng_template_3_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.exists"));
    } }
    function ControlEmailComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 6);
        core["ɵɵtemplate"](1, ControlEmailComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
        core["ɵɵtemplate"](2, ControlEmailComponent_ng_template_3_div_0_div_2_Template, 3, 3, "div", 7);
        core["ɵɵtemplate"](3, ControlEmailComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
        core["ɵɵtemplate"](4, ControlEmailComponent_ng_template_3_div_0_div_4_Template, 3, 7, "div", 7);
        core["ɵɵtemplate"](5, ControlEmailComponent_ng_template_3_div_0_div_5_Template, 3, 3, "div", 7);
        core["ɵɵtemplate"](6, ControlEmailComponent_ng_template_3_div_0_div_6_Template, 3, 3, "div", 7);
        core["ɵɵtemplate"](7, ControlEmailComponent_ng_template_3_div_0_div_7_Template, 3, 3, "div", 7);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r232 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r232.control.errors.required);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r232.control.errors.email);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r232.control.errors.minlength);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r232.control.errors.maxlength);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r232.control.errors.pattern);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r232.control.errors.match);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r232.control.errors.exists);
    } }
    function ControlEmailComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, ControlEmailComponent_ng_template_3_div_0_Template, 8, 7, "div", 5);
    } if (rf & 2) {
        var context_r232 = ctx.$implicit;
        core["ɵɵproperty"]("ngIf", context_r232.control.invalid && (context_r232.control.dirty || context_r232.control.touched));
    } }
    function ControlEmailComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function ControlEmailComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    var _c2$1 = function (a0) { return { $implicit: a0 }; };
    var ControlEmailComponent = /** @class */ (function (_super) {
        __extends(ControlEmailComponent, _super);
        function ControlEmailComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlEmailComponent.ɵfac = function ControlEmailComponent_Factory(t) { return ɵControlEmailComponent_BaseFactory(t || ControlEmailComponent); };
        ControlEmailComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlEmailComponent, selectors: [["control-email-component"]], inputs: { option: "option" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "email", 1, "control__input", "control__input--email", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--email", 4, "ngIf"], [1, "control__error", "control__error--email"], [4, "ngIf"]], template: function ControlEmailComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵtemplate"](1, ControlEmailComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](3, ControlEmailComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](5, ControlEmailComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
                core["ɵɵtemplate"](6, ControlEmailComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                var _r225 = core["ɵɵreference"](2);
                var _r227 = core["ɵɵreference"](4);
                core["ɵɵproperty"]("formGroup", ctx.form);
                core["ɵɵadvance"](5);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.inputRef || _r225)("ngTemplateOutletContext", core["ɵɵpureFunction1"](5, _c2$1, ctx.context));
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.errorRef || _r227)("ngTemplateOutletContext", core["ɵɵpureFunction1"](7, _c2$1, ctx.context));
            } }, directives: [forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgTemplateOutlet, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, common.NgIf], pipes: [core$1.LabelPipe], encapsulation: 2 });
        return ControlEmailComponent;
    }(ControlComponent));
    var ɵControlEmailComponent_BaseFactory = core["ɵɵgetInheritedFactory"](ControlEmailComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlEmailComponent, [{
            type: core.Component,
            args: [{
                    selector: 'control-email-component',
                    templateUrl: 'control-email.component.html',
                }]
        }], null, { option: [{
                type: core.Input
            }] }); })();

    var ControlGroup = /** @class */ (function (_super) {
        __extends(ControlGroup, _super);
        function ControlGroup() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'group';
            return _this;
        }
        return ControlGroup;
    }(ControlOption));

    function ControlGroupComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 7);
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r250 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, context_r250.option.title));
    } }
    function ControlGroupComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 8);
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r250 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, context_r250.option.abstract));
    } }
    function ControlGroupComponent_ng_template_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelement"](1, "control-outlet", 11);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var option_r257 = ctx.$implicit;
        var context_r250 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵclassMapInterpolate1"]("fieldset__field fieldset__field--", option_r257.schema, "");
        core["ɵɵproperty"]("option", option_r257)("form", context_r250.control);
    } }
    function ControlGroupComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 9);
        core["ɵɵtemplate"](1, ControlGroupComponent_ng_template_1_div_2_ng_container_1_Template, 2, 5, "ng-container", 10);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r250 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", context_r250.option.options);
    } }
    function ControlGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, ControlGroupComponent_ng_template_1_div_0_Template, 3, 3, "div", 4);
        core["ɵɵtemplate"](1, ControlGroupComponent_ng_template_1_div_1_Template, 3, 3, "div", 5);
        core["ɵɵtemplate"](2, ControlGroupComponent_ng_template_1_div_2_Template, 2, 1, "div", 6);
    } if (rf & 2) {
        var context_r250 = ctx.$implicit;
        core["ɵɵproperty"]("ngIf", context_r250.option.title);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r250.option.abstract);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r250.option.options.length);
    } }
    function ControlGroupComponent_ng_template_3_Template(rf, ctx) { }
    function ControlGroupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function ControlGroupComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    var _c0$3 = function (a0) { return { $implicit: a0 }; };
    var ControlGroupComponent = /** @class */ (function (_super) {
        __extends(ControlGroupComponent, _super);
        function ControlGroupComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlGroupComponent.ɵfac = function ControlGroupComponent_Factory(t) { return ɵControlGroupComponent_BaseFactory(t || ControlGroupComponent); };
        ControlGroupComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlGroupComponent, selectors: [["control-group-component"]], inputs: { option: "option" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "control__title", 4, "ngIf"], ["class", "control__abstract", 4, "ngIf"], ["class", "fieldset", 4, "ngIf"], [1, "control__title"], [1, "control__abstract"], [1, "fieldset"], [4, "ngFor", "ngForOf"], [3, "option", "form"]], template: function ControlGroupComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵtemplate"](1, ControlGroupComponent_ng_template_1_Template, 3, 3, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](3, ControlGroupComponent_ng_template_3_Template, 0, 0, "ng-template", null, 2, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](5, ControlGroupComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
                core["ɵɵtemplate"](6, ControlGroupComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                var _r244 = core["ɵɵreference"](2);
                var _r246 = core["ɵɵreference"](4);
                core["ɵɵproperty"]("formGroup", ctx.form);
                core["ɵɵadvance"](5);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.inputRef || _r244)("ngTemplateOutletContext", core["ɵɵpureFunction1"](5, _c0$3, ctx.context));
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.errorRef || _r246)("ngTemplateOutletContext", core["ɵɵpureFunction1"](7, _c0$3, ctx.context));
            } }, encapsulation: 2 });
        return ControlGroupComponent;
    }(ControlComponent));
    var ɵControlGroupComponent_BaseFactory = core["ɵɵgetInheritedFactory"](ControlGroupComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlGroupComponent, [{
            type: core.Component,
            args: [{
                    selector: 'control-group-component',
                    templateUrl: 'control-group.component.html',
                }]
        }], null, { option: [{
                type: core.Input
            }] }); })();

    var ControlInfo = /** @class */ (function (_super) {
        __extends(ControlInfo, _super);
        function ControlInfo() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'info';
            return _this;
        }
        return ControlInfo;
    }(ControlOption));

    function ControlInfoComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 5);
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r264 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, context_r264.option.title));
    } }
    function ControlInfoComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 6);
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r264 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, context_r264.option.abstract));
    } }
    function ControlInfoComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, ControlInfoComponent_ng_template_1_div_0_Template, 3, 3, "div", 3);
        core["ɵɵtemplate"](1, ControlInfoComponent_ng_template_1_div_1_Template, 3, 3, "div", 4);
    } if (rf & 2) {
        var context_r264 = ctx.$implicit;
        core["ɵɵproperty"]("ngIf", context_r264.option.title);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r264.option.abstract);
    } }
    function ControlInfoComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    var _c0$4 = function (a0) { return { $implicit: a0 }; };
    var ControlInfoComponent = /** @class */ (function (_super) {
        __extends(ControlInfoComponent, _super);
        function ControlInfoComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ControlInfoComponent.prototype, "control", {
            get: function () {
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlInfoComponent.prototype, "isValid", {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlInfoComponent.prototype, "classes", {
            get: function () {
                return {};
            },
            enumerable: true,
            configurable: true
        });
        ControlInfoComponent.ɵfac = function ControlInfoComponent_Factory(t) { return ɵControlInfoComponent_BaseFactory(t || ControlInfoComponent); };
        ControlInfoComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlInfoComponent, selectors: [["control-info-component"]], inputs: { option: "option" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 5, consts: [[3, "formGroup"], ["inputDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "control__title", 4, "ngIf"], ["class", "control__abstract", 4, "ngIf"], [1, "control__title"], [1, "control__abstract"]], template: function ControlInfoComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵtemplate"](1, ControlInfoComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](3, ControlInfoComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                var _r261 = core["ɵɵreference"](2);
                core["ɵɵproperty"]("formGroup", ctx.form);
                core["ɵɵadvance"](3);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.inputRef || _r261)("ngTemplateOutletContext", core["ɵɵpureFunction1"](3, _c0$4, ctx.context));
            } }, directives: [forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgTemplateOutlet, common.NgIf], pipes: [core$1.LabelPipe], encapsulation: 2 });
        return ControlInfoComponent;
    }(ControlComponent));
    var ɵControlInfoComponent_BaseFactory = core["ɵɵgetInheritedFactory"](ControlInfoComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlInfoComponent, [{
            type: core.Component,
            args: [{
                    selector: 'control-info-component',
                    templateUrl: 'control-info.component.html',
                }]
        }], null, { option: [{
                type: core.Input
            }] }); })();

    var ControlMarkdown = /** @class */ (function (_super) {
        __extends(ControlMarkdown, _super);
        function ControlMarkdown() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'markdown';
            return _this;
        }
        return ControlMarkdown;
    }(ControlOption));

    function ControlMarkdownComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "textarea", 4);
        core["ɵɵpipe"](1, "label");
    } if (rf & 2) {
        var context_r275 = ctx.$implicit;
        core["ɵɵpropertyInterpolate"]("placeholder", core["ɵɵpipeBind1"](1, 3, context_r275.option.placeholder));
        core["ɵɵproperty"]("id", context_r275.option.key)("formControlName", context_r275.option.key);
    } }
    function ControlMarkdownComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.required"));
    } }
    var _c0$5 = function (a0) { return { minlength: a0 }; };
    function ControlMarkdownComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r276 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind3"](2, 1, "errors.minlength", null, core["ɵɵpureFunction1"](5, _c0$5, context_r276.option.minlength)));
    } }
    var _c1$2 = function (a0) { return { maxlength: a0 }; };
    function ControlMarkdownComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r276 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind3"](2, 1, "errors.maxlength", null, core["ɵɵpureFunction1"](5, _c1$2, context_r276.option.maxlength)));
    } }
    function ControlMarkdownComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 6);
        core["ɵɵtemplate"](1, ControlMarkdownComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
        core["ɵɵtemplate"](2, ControlMarkdownComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 7);
        core["ɵɵtemplate"](3, ControlMarkdownComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r276 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r276.control.errors.required);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r276.control.errors.minlength);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r276.control.errors.maxlength);
    } }
    function ControlMarkdownComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, ControlMarkdownComponent_ng_template_3_div_0_Template, 4, 3, "div", 5);
    } if (rf & 2) {
        var context_r276 = ctx.$implicit;
        core["ɵɵproperty"]("ngIf", context_r276.control.invalid && (context_r276.control.dirty || context_r276.control.touched));
    } }
    function ControlMarkdownComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function ControlMarkdownComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    var _c2$2 = function (a0) { return { $implicit: a0 }; };
    var ControlMarkdownComponent = /** @class */ (function (_super) {
        __extends(ControlMarkdownComponent, _super);
        function ControlMarkdownComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlMarkdownComponent.ɵfac = function ControlMarkdownComponent_Factory(t) { return ɵControlMarkdownComponent_BaseFactory(t || ControlMarkdownComponent); };
        ControlMarkdownComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlMarkdownComponent, selectors: [["control-markdown-component"]], inputs: { option: "option" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["rows", "4", 1, "control__input", "control__input--markdown", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--markdown", 4, "ngIf"], [1, "control__error", "control__error--markdown"], [4, "ngIf"]], template: function ControlMarkdownComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵtemplate"](1, ControlMarkdownComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](3, ControlMarkdownComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](5, ControlMarkdownComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
                core["ɵɵtemplate"](6, ControlMarkdownComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                var _r269 = core["ɵɵreference"](2);
                var _r271 = core["ɵɵreference"](4);
                core["ɵɵproperty"]("formGroup", ctx.form);
                core["ɵɵadvance"](5);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.inputRef || _r269)("ngTemplateOutletContext", core["ɵɵpureFunction1"](5, _c2$2, ctx.context));
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.errorRef || _r271)("ngTemplateOutletContext", core["ɵɵpureFunction1"](7, _c2$2, ctx.context));
            } }, directives: [forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgTemplateOutlet, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, common.NgIf], pipes: [core$1.LabelPipe], encapsulation: 2 });
        return ControlMarkdownComponent;
    }(ControlComponent));
    var ɵControlMarkdownComponent_BaseFactory = core["ɵɵgetInheritedFactory"](ControlMarkdownComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlMarkdownComponent, [{
            type: core.Component,
            args: [{
                    selector: 'control-markdown-component',
                    templateUrl: 'control-markdown.component.html',
                }]
        }], null, { option: [{
                type: core.Input
            }] }); })();

    var ControlNumber = /** @class */ (function (_super) {
        __extends(ControlNumber, _super);
        function ControlNumber() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'number';
            return _this;
        }
        return ControlNumber;
    }(ControlOption));

    function ControlNumberComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "input", 4);
        core["ɵɵpipe"](1, "label");
    } if (rf & 2) {
        var context_r290 = ctx.$implicit;
        core["ɵɵpropertyInterpolate"]("placeholder", core["ɵɵpipeBind1"](1, 4, context_r290.option.placeholder));
        core["ɵɵproperty"]("id", context_r290.option.key)("formControlName", context_r290.option.key);
        core["ɵɵattribute"]("step", context_r290.option.step);
    } }
    function ControlNumberComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.required"));
    } }
    var _c0$6 = function (a0) { return { min: a0 }; };
    function ControlNumberComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r291 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind3"](2, 1, "errors.min", null, core["ɵɵpureFunction1"](5, _c0$6, context_r291.option.min)));
    } }
    var _c1$3 = function (a0) { return { max: a0 }; };
    function ControlNumberComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r291 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind3"](2, 1, "errors.max", null, core["ɵɵpureFunction1"](5, _c1$3, context_r291.option.max)));
    } }
    function ControlNumberComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 6);
        core["ɵɵtemplate"](1, ControlNumberComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
        core["ɵɵtemplate"](2, ControlNumberComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 7);
        core["ɵɵtemplate"](3, ControlNumberComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r291 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r291.control.errors.required);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r291.control.errors.min);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r291.control.errors.max);
    } }
    function ControlNumberComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, ControlNumberComponent_ng_template_3_div_0_Template, 4, 3, "div", 5);
    } if (rf & 2) {
        var context_r291 = ctx.$implicit;
        core["ɵɵproperty"]("ngIf", context_r291.control.invalid && (context_r291.control.dirty || context_r291.control.touched));
    } }
    function ControlNumberComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function ControlNumberComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    var _c2$3 = function (a0) { return { $implicit: a0 }; };
    var ControlNumberComponent = /** @class */ (function (_super) {
        __extends(ControlNumberComponent, _super);
        function ControlNumberComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlNumberComponent.ɵfac = function ControlNumberComponent_Factory(t) { return ɵControlNumberComponent_BaseFactory(t || ControlNumberComponent); };
        ControlNumberComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlNumberComponent, selectors: [["control-number-component"]], inputs: { option: "option" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "number", 1, "control__input", "control__input--number", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--number", 4, "ngIf"], [1, "control__error", "control__error--number"], [4, "ngIf"]], template: function ControlNumberComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵtemplate"](1, ControlNumberComponent_ng_template_1_Template, 2, 6, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](3, ControlNumberComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](5, ControlNumberComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
                core["ɵɵtemplate"](6, ControlNumberComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                var _r284 = core["ɵɵreference"](2);
                var _r286 = core["ɵɵreference"](4);
                core["ɵɵproperty"]("formGroup", ctx.form);
                core["ɵɵadvance"](5);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.inputRef || _r284)("ngTemplateOutletContext", core["ɵɵpureFunction1"](5, _c2$3, ctx.context));
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.errorRef || _r286)("ngTemplateOutletContext", core["ɵɵpureFunction1"](7, _c2$3, ctx.context));
            } }, directives: [forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgTemplateOutlet, forms.NumberValueAccessor, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, common.NgIf], pipes: [core$1.LabelPipe], encapsulation: 2 });
        return ControlNumberComponent;
    }(ControlComponent));
    var ɵControlNumberComponent_BaseFactory = core["ɵɵgetInheritedFactory"](ControlNumberComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlNumberComponent, [{
            type: core.Component,
            args: [{
                    selector: 'control-number-component',
                    templateUrl: 'control-number.component.html',
                }]
        }], null, { option: [{
                type: core.Input
            }] }); })();

    var ControlPassword = /** @class */ (function (_super) {
        __extends(ControlPassword, _super);
        function ControlPassword() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'password';
            return _this;
        }
        return ControlPassword;
    }(ControlOption));

    function ControlPasswordComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r309 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "div", 4);
        core["ɵɵelement"](1, "input", 5, 6);
        core["ɵɵpipe"](3, "label");
        core["ɵɵelementStart"](4, "div", 7);
        core["ɵɵelementStart"](5, "input", 8, 9);
        core["ɵɵlistener"]("input", function ControlPasswordComponent_ng_template_1_Template_input_input_5_listener($event) { core["ɵɵrestoreView"](_r309); var _r307 = core["ɵɵreference"](6); var _r306 = core["ɵɵreference"](2); return _r306.setAttribute("type", _r307.checked ? "text" : "password"); });
        core["ɵɵpipe"](7, "label");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r305 = ctx.$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵpropertyInterpolate"]("placeholder", core["ɵɵpipeBind1"](3, 3, context_r305.option.placeholder));
        core["ɵɵproperty"]("formControlName", context_r305.option.key);
        core["ɵɵadvance"](4);
        core["ɵɵattribute"]("aria-label", core["ɵɵpipeBind1"](7, 5, context_r305.option.label));
    } }
    function ControlPasswordComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.required"));
    } }
    var _c0$7 = function (a0) { return { minlength: a0 }; };
    function ControlPasswordComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r310 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind3"](2, 1, "errors.minlength", null, core["ɵɵpureFunction1"](5, _c0$7, context_r310.option.minlength)));
    } }
    var _c1$4 = function (a0) { return { maxlength: a0 }; };
    function ControlPasswordComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r310 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind3"](2, 1, "errors.maxlength", null, core["ɵɵpureFunction1"](5, _c1$4, context_r310.option.maxlength)));
    } }
    function ControlPasswordComponent_ng_template_3_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.pattern"));
    } }
    function ControlPasswordComponent_ng_template_3_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.match"));
    } }
    function ControlPasswordComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 11);
        core["ɵɵtemplate"](1, ControlPasswordComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 12);
        core["ɵɵtemplate"](2, ControlPasswordComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 12);
        core["ɵɵtemplate"](3, ControlPasswordComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 12);
        core["ɵɵtemplate"](4, ControlPasswordComponent_ng_template_3_div_0_div_4_Template, 3, 3, "div", 12);
        core["ɵɵtemplate"](5, ControlPasswordComponent_ng_template_3_div_0_div_5_Template, 3, 3, "div", 12);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r310 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r310.control.errors.required);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r310.control.errors.minlength);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r310.control.errors.maxlength);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r310.control.errors.pattern);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r310.control.errors.match);
    } }
    function ControlPasswordComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, ControlPasswordComponent_ng_template_3_div_0_Template, 6, 5, "div", 10);
    } if (rf & 2) {
        var context_r310 = ctx.$implicit;
        core["ɵɵproperty"]("ngIf", context_r310.control.invalid && (context_r310.control.dirty || context_r310.control.touched));
    } }
    function ControlPasswordComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function ControlPasswordComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    var _c2$4 = function (a0) { return { $implicit: a0 }; };
    var ControlPasswordComponent = /** @class */ (function (_super) {
        __extends(ControlPasswordComponent, _super);
        function ControlPasswordComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.reveal = { checked: false };
            return _this;
        }
        ControlPasswordComponent.ɵfac = function ControlPasswordComponent_Factory(t) { return ɵControlPasswordComponent_BaseFactory(t || ControlPasswordComponent); };
        ControlPasswordComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlPasswordComponent, selectors: [["control-password-component"]], inputs: { option: "option" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control__group", "control__group--password"], ["type", "password", 1, "control__input", "control__input--password", 3, "placeholder", "formControlName"], ["password", ""], [1, "control__addon"], ["type", "checkbox", 1, "control__checkbox", 3, "input"], ["reveal", ""], ["class", "control__error control__error--password", 4, "ngIf"], [1, "control__error", "control__error--password"], [4, "ngIf"]], template: function ControlPasswordComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵtemplate"](1, ControlPasswordComponent_ng_template_1_Template, 8, 7, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](3, ControlPasswordComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](5, ControlPasswordComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
                core["ɵɵtemplate"](6, ControlPasswordComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                var _r299 = core["ɵɵreference"](2);
                var _r301 = core["ɵɵreference"](4);
                core["ɵɵproperty"]("formGroup", ctx.form);
                core["ɵɵadvance"](5);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.inputRef || _r299)("ngTemplateOutletContext", core["ɵɵpureFunction1"](5, _c2$4, ctx.context));
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.errorRef || _r301)("ngTemplateOutletContext", core["ɵɵpureFunction1"](7, _c2$4, ctx.context));
            } }, directives: [forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgTemplateOutlet, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, common.NgIf], pipes: [core$1.LabelPipe], encapsulation: 2 });
        return ControlPasswordComponent;
    }(ControlComponent));
    var ɵControlPasswordComponent_BaseFactory = core["ɵɵgetInheritedFactory"](ControlPasswordComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlPasswordComponent, [{
            type: core.Component,
            args: [{
                    selector: 'control-password-component',
                    templateUrl: 'control-password.component.html',
                }]
        }], null, { option: [{
                type: core.Input
            }] }); })();

    var ControlRadio = /** @class */ (function (_super) {
        __extends(ControlRadio, _super);
        function ControlRadio() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'radio';
            return _this;
        }
        return ControlRadio;
    }(ControlOption));

    function ControlRadioComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "label", 4);
        core["ɵɵelement"](1, "input", 5);
        core["ɵɵelementStart"](2, "span", 6);
        core["ɵɵtext"](3);
        core["ɵɵpipe"](4, "label");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r326 = ctx.$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("id", context_r326.option.key)("formControlName", context_r326.option.key);
        core["ɵɵadvance"](2);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](4, 3, context_r326.option.info));
    } }
    function ControlRadioComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.required"));
    } }
    function ControlRadioComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 8);
        core["ɵɵtemplate"](1, ControlRadioComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 9);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r327 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r327.control.errors.required);
    } }
    function ControlRadioComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, ControlRadioComponent_ng_template_3_div_0_Template, 2, 1, "div", 7);
    } if (rf & 2) {
        var context_r327 = ctx.$implicit;
        core["ɵɵproperty"]("ngIf", context_r327.control.invalid && (context_r327.control.dirty || context_r327.control.touched));
    } }
    function ControlRadioComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function ControlRadioComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    var _c0$8 = function (a0) { return { $implicit: a0 }; };
    var ControlRadioComponent = /** @class */ (function (_super) {
        __extends(ControlRadioComponent, _super);
        function ControlRadioComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlRadioComponent.ɵfac = function ControlRadioComponent_Factory(t) { return ɵControlRadioComponent_BaseFactory(t || ControlRadioComponent); };
        ControlRadioComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlRadioComponent, selectors: [["control-radio-component"]], inputs: { option: "option" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control__group", "control__group--radio"], ["type", "radio", 1, "control__radio", 3, "id", "formControlName"], [1, "control__info"], ["class", "control__error control__error--radio", 4, "ngIf"], [1, "control__error", "control__error--radio"], [4, "ngIf"]], template: function ControlRadioComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵtemplate"](1, ControlRadioComponent_ng_template_1_Template, 5, 5, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](3, ControlRadioComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](5, ControlRadioComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
                core["ɵɵtemplate"](6, ControlRadioComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                var _r320 = core["ɵɵreference"](2);
                var _r322 = core["ɵɵreference"](4);
                core["ɵɵproperty"]("formGroup", ctx.form);
                core["ɵɵadvance"](5);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.inputRef || _r320)("ngTemplateOutletContext", core["ɵɵpureFunction1"](5, _c0$8, ctx.context));
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.errorRef || _r322)("ngTemplateOutletContext", core["ɵɵpureFunction1"](7, _c0$8, ctx.context));
            } }, directives: [forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgTemplateOutlet, forms.RadioControlValueAccessor, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, common.NgIf], pipes: [core$1.LabelPipe], encapsulation: 2 });
        return ControlRadioComponent;
    }(ControlComponent));
    var ɵControlRadioComponent_BaseFactory = core["ɵɵgetInheritedFactory"](ControlRadioComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlRadioComponent, [{
            type: core.Component,
            args: [{
                    selector: 'control-radio-component',
                    templateUrl: 'control-radio.component.html',
                }]
        }], null, { option: [{
                type: core.Input
            }] }); })();

    var ControlSelect = /** @class */ (function (_super) {
        __extends(ControlSelect, _super);
        function ControlSelect() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'select';
            return _this;
        }
        return ControlSelect;
    }(ControlOption));

    function ControlSelectComponent_ng_template_1_option_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "option", 7);
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var item_r339 = ctx.$implicit;
        var context_r337 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵproperty"]("ngValue", context_r337.getValue(item_r339));
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 2, item_r339 == null ? null : item_r339.name));
    } }
    function ControlSelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 4);
        core["ɵɵelementStart"](1, "select", 5);
        core["ɵɵtemplate"](2, ControlSelectComponent_ng_template_1_option_2_Template, 3, 4, "option", 6);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r337 = ctx.$implicit;
        var ctx_r332 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("id", context_r337.option.key)("formControlName", context_r337.option.key)("compareWith", context_r337.compareWith);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", ctx_r332.options);
    } }
    function ControlSelectComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.required"));
    } }
    function ControlSelectComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 9);
        core["ɵɵtemplate"](1, ControlSelectComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 10);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r341 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r341.control.errors.required);
    } }
    function ControlSelectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, ControlSelectComponent_ng_template_3_div_0_Template, 2, 1, "div", 8);
    } if (rf & 2) {
        var context_r341 = ctx.$implicit;
        core["ɵɵproperty"]("ngIf", context_r341.control.invalid && (context_r341.control.dirty || context_r341.control.touched));
    } }
    function ControlSelectComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function ControlSelectComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    var _c0$9 = function (a0) { return { $implicit: a0 }; };
    var ControlSelectComponent = /** @class */ (function (_super) {
        __extends(ControlSelectComponent, _super);
        function ControlSelectComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.options = [];
            _this.getValue = _this.getValue_.bind(_this);
            _this.compareWith = _this.compareWith_.bind(_this);
            return _this;
        }
        ControlSelectComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.options$().pipe(operators.takeUntil(this.unsubscribe), operators.tap(function (options) {
                if (_this.option.asObject && _this.control.value === null) {
                    var firstNullOptions = options.find(function (x) { return x.id === null; });
                    if (firstNullOptions !== undefined) {
                        _this.control.setValue(firstNullOptions);
                    }
                }
            })).subscribe(function (options) { return _this.options = options; });
        };
        ControlSelectComponent.prototype.options$ = function () {
            var options = this.option.options;
            if (options) {
                if (rxjs.isObservable(options)) {
                    return options;
                }
                else if (Array.isArray(options)) {
                    return rxjs.of(options);
                }
                else {
                    return rxjs.of([]);
                }
            }
            else {
                return rxjs.of([]);
            }
        };
        ControlSelectComponent.prototype.getValue_ = function (item) {
            return this.option.asObject ? item : item.id;
        };
        ControlSelectComponent.prototype.compareWith_ = function (a, b) {
            if (this.option.asObject) {
                a = a;
                b = b;
                return (b && b.id !== undefined) ? a.id === b.id : a.id === b;
            }
            else {
                return b ? a === b : a === null;
            }
        };
        ControlSelectComponent.ɵfac = function ControlSelectComponent_Factory(t) { return ɵControlSelectComponent_BaseFactory(t || ControlSelectComponent); };
        ControlSelectComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlSelectComponent, selectors: [["control-select-component"]], inputs: { option: "option" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control__input", "control__input--select"], [3, "id", "formControlName", "compareWith"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["class", "control__error control__error--select", 4, "ngIf"], [1, "control__error", "control__error--select"], [4, "ngIf"]], template: function ControlSelectComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵtemplate"](1, ControlSelectComponent_ng_template_1_Template, 3, 4, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](3, ControlSelectComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](5, ControlSelectComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
                core["ɵɵtemplate"](6, ControlSelectComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                var _r331 = core["ɵɵreference"](2);
                var _r333 = core["ɵɵreference"](4);
                core["ɵɵproperty"]("formGroup", ctx.form);
                core["ɵɵadvance"](5);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.inputRef || _r331)("ngTemplateOutletContext", core["ɵɵpureFunction1"](5, _c0$9, ctx.context));
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.errorRef || _r333)("ngTemplateOutletContext", core["ɵɵpureFunction1"](7, _c0$9, ctx.context));
            } }, directives: [forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgTemplateOutlet, forms.SelectControlValueAccessor, forms.NgControlStatus, forms.FormControlName, common.NgForOf, forms.NgSelectOption, forms["ɵangular_packages_forms_forms_x"], common.NgIf], pipes: [core$1.LabelPipe], encapsulation: 2 });
        return ControlSelectComponent;
    }(ControlComponent));
    var ɵControlSelectComponent_BaseFactory = core["ɵɵgetInheritedFactory"](ControlSelectComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlSelectComponent, [{
            type: core.Component,
            args: [{
                    selector: 'control-select-component',
                    templateUrl: 'control-select.component.html',
                }]
        }], null, { option: [{
                type: core.Input
            }] }); })();

    var ControlText = /** @class */ (function (_super) {
        __extends(ControlText, _super);
        function ControlText() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'text';
            return _this;
        }
        return ControlText;
    }(ControlOption));

    function ControlTextComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "input", 4);
        core["ɵɵpipe"](1, "label");
    } if (rf & 2) {
        var context_r351 = ctx.$implicit;
        core["ɵɵpropertyInterpolate"]("placeholder", core["ɵɵpipeBind1"](1, 3, context_r351.option.placeholder));
        core["ɵɵproperty"]("id", context_r351.option.key)("formControlName", context_r351.option.key);
    } }
    function ControlTextComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function ControlTextComponent_ng_template_4_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.required"));
    } }
    var _c0$a = function (a0) { return { minlength: a0 }; };
    function ControlTextComponent_ng_template_4_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r352 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind3"](2, 1, "errors.minlength", null, core["ɵɵpureFunction1"](5, _c0$a, context_r352.option.minlength)));
    } }
    var _c1$5 = function (a0) { return { maxlength: a0 }; };
    function ControlTextComponent_ng_template_4_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r352 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind3"](2, 1, "errors.maxlength", null, core["ɵɵpureFunction1"](5, _c1$5, context_r352.option.maxlength)));
    } }
    function ControlTextComponent_ng_template_4_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.pattern"));
    } }
    function ControlTextComponent_ng_template_4_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.match"));
    } }
    function ControlTextComponent_ng_template_4_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.exists"));
    } }
    function ControlTextComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 6);
        core["ɵɵtemplate"](1, ControlTextComponent_ng_template_4_div_0_div_1_Template, 3, 3, "div", 7);
        core["ɵɵtemplate"](2, ControlTextComponent_ng_template_4_div_0_div_2_Template, 3, 7, "div", 7);
        core["ɵɵtemplate"](3, ControlTextComponent_ng_template_4_div_0_div_3_Template, 3, 7, "div", 7);
        core["ɵɵtemplate"](4, ControlTextComponent_ng_template_4_div_0_div_4_Template, 3, 3, "div", 7);
        core["ɵɵtemplate"](5, ControlTextComponent_ng_template_4_div_0_div_5_Template, 3, 3, "div", 7);
        core["ɵɵtemplate"](6, ControlTextComponent_ng_template_4_div_0_div_6_Template, 3, 3, "div", 7);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r352 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r352.control.errors.required);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r352.control.errors.minlength);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r352.control.errors.maxlength);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r352.control.errors.pattern);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r352.control.errors.match);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r352.control.errors.exists);
    } }
    function ControlTextComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, ControlTextComponent_ng_template_4_div_0_Template, 7, 6, "div", 5);
    } if (rf & 2) {
        var context_r352 = ctx.$implicit;
        core["ɵɵproperty"]("ngIf", context_r352.control.invalid && (context_r352.control.dirty || context_r352.control.touched));
    } }
    function ControlTextComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    var _c2$5 = function (a0) { return { $implicit: a0 }; };
    var ControlTextComponent = /** @class */ (function (_super) {
        __extends(ControlTextComponent, _super);
        function ControlTextComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlTextComponent.ɵfac = function ControlTextComponent_Factory(t) { return ɵControlTextComponent_BaseFactory(t || ControlTextComponent); };
        ControlTextComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlTextComponent, selectors: [["control-text-component"]], inputs: { option: "option" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["errorDef", ""], ["type", "text", 1, "control__input", "control__input--text", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--text", 4, "ngIf"], [1, "control__error", "control__error--text"], [4, "ngIf"]], template: function ControlTextComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵtemplate"](1, ControlTextComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](3, ControlTextComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
                core["ɵɵtemplate"](4, ControlTextComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](6, ControlTextComponent_ng_container_6_Template, 1, 0, "ng-container", 2);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                var _r345 = core["ɵɵreference"](2);
                var _r348 = core["ɵɵreference"](5);
                core["ɵɵproperty"]("formGroup", ctx.form);
                core["ɵɵadvance"](3);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.inputRef || _r345)("ngTemplateOutletContext", core["ɵɵpureFunction1"](5, _c2$5, ctx.context));
                core["ɵɵadvance"](3);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.errorRef || _r348)("ngTemplateOutletContext", core["ɵɵpureFunction1"](7, _c2$5, ctx.context));
            } }, directives: [forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgTemplateOutlet, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, common.NgIf], pipes: [core$1.LabelPipe], encapsulation: 2 });
        return ControlTextComponent;
    }(ControlComponent));
    var ɵControlTextComponent_BaseFactory = core["ɵɵgetInheritedFactory"](ControlTextComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlTextComponent, [{
            type: core.Component,
            args: [{
                    selector: 'control-text-component',
                    templateUrl: 'control-text.component.html',
                }]
        }], null, { option: [{
                type: core.Input
            }] }); })();

    var ControlTextarea = /** @class */ (function (_super) {
        __extends(ControlTextarea, _super);
        function ControlTextarea() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'textarea';
            return _this;
        }
        return ControlTextarea;
    }(ControlOption));

    function ControlTextareaComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "textarea", 4);
        core["ɵɵpipe"](1, "label");
    } if (rf & 2) {
        var context_r369 = ctx.$implicit;
        core["ɵɵpropertyInterpolate"]("placeholder", core["ɵɵpipeBind1"](1, 3, context_r369.option.placeholder));
        core["ɵɵproperty"]("id", context_r369.option.key)("formControlName", context_r369.option.key);
    } }
    function ControlTextareaComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 1, "errors.required"));
    } }
    var _c0$b = function (a0) { return { minlength: a0 }; };
    function ControlTextareaComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r370 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind3"](2, 1, "errors.minlength", null, core["ɵɵpureFunction1"](5, _c0$b, context_r370.option.minlength)));
    } }
    var _c1$6 = function (a0) { return { maxlength: a0 }; };
    function ControlTextareaComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r370 = core["ɵɵnextContext"](2).$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind3"](2, 1, "errors.maxlength", null, core["ɵɵpureFunction1"](5, _c1$6, context_r370.option.maxlength)));
    } }
    function ControlTextareaComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 6);
        core["ɵɵtemplate"](1, ControlTextareaComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
        core["ɵɵtemplate"](2, ControlTextareaComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 7);
        core["ɵɵtemplate"](3, ControlTextareaComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r370 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r370.control.errors.required);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r370.control.errors.minlength);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", context_r370.control.errors.maxlength);
    } }
    function ControlTextareaComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, ControlTextareaComponent_ng_template_3_div_0_Template, 4, 3, "div", 5);
    } if (rf & 2) {
        var context_r370 = ctx.$implicit;
        core["ɵɵproperty"]("ngIf", context_r370.control.invalid && (context_r370.control.dirty || context_r370.control.touched));
    } }
    function ControlTextareaComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function ControlTextareaComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    var _c2$6 = function (a0) { return { $implicit: a0 }; };
    var ControlTextareaComponent = /** @class */ (function (_super) {
        __extends(ControlTextareaComponent, _super);
        function ControlTextareaComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlTextareaComponent.ɵfac = function ControlTextareaComponent_Factory(t) { return ɵControlTextareaComponent_BaseFactory(t || ControlTextareaComponent); };
        ControlTextareaComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlTextareaComponent, selectors: [["control-textarea-component"]], inputs: { option: "option" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["rows", "4", 1, "control__input", "control__input--textarea", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--textarea", 4, "ngIf"], [1, "control__error", "control__error--textarea"], [4, "ngIf"]], template: function ControlTextareaComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵtemplate"](1, ControlTextareaComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](3, ControlTextareaComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](5, ControlTextareaComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
                core["ɵɵtemplate"](6, ControlTextareaComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                var _r363 = core["ɵɵreference"](2);
                var _r365 = core["ɵɵreference"](4);
                core["ɵɵproperty"]("formGroup", ctx.form);
                core["ɵɵadvance"](5);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.inputRef || _r363)("ngTemplateOutletContext", core["ɵɵpureFunction1"](5, _c2$6, ctx.context));
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.errorRef || _r365)("ngTemplateOutletContext", core["ɵɵpureFunction1"](7, _c2$6, ctx.context));
            } }, directives: [forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgTemplateOutlet, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, common.NgIf], pipes: [core$1.LabelPipe], encapsulation: 2 });
        return ControlTextareaComponent;
    }(ControlComponent));
    var ɵControlTextareaComponent_BaseFactory = core["ɵɵgetInheritedFactory"](ControlTextareaComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlTextareaComponent, [{
            type: core.Component,
            args: [{
                    selector: 'control-textarea-component',
                    templateUrl: 'control-textarea.component.html',
                }]
        }], null, { option: [{
                type: core.Input
            }] }); })();

    var entryComponents = [
        ControlCheckboxComponent,
        ControlEmailComponent,
        ControlGroupComponent,
        ControlInfoComponent,
        ControlMarkdownComponent,
        ControlNumberComponent,
        ControlPasswordComponent,
        ControlRadioComponent,
        ControlSelectComponent,
        ControlTextComponent,
        ControlTextareaComponent,
    ];
    var controls = {
        'checkbox': {
            component: ControlCheckboxComponent,
            model: ControlCheckbox
        },
        'email': {
            component: ControlEmailComponent,
            model: ControlEmail
        },
        'group': {
            component: ControlGroupComponent,
            model: ControlGroup
        },
        'info': {
            component: ControlInfoComponent,
            model: ControlInfo
        },
        'markdown': {
            component: ControlMarkdownComponent,
            model: ControlMarkdown
        },
        'number': {
            component: ControlNumberComponent,
            model: ControlNumber
        },
        'password': {
            component: ControlPasswordComponent,
            model: ControlPassword
        },
        'radio': {
            component: ControlRadioComponent,
            model: ControlRadio
        },
        'select': {
            component: ControlSelectComponent,
            model: ControlSelect
        },
        'text': {
            component: ControlTextComponent,
            model: ControlText
        },
        'textarea': {
            component: ControlTextareaComponent,
            model: ControlTextarea
        },
    };
    var ControlConfig = /** @class */ (function () {
        function ControlConfig(options) {
            this.controls = {};
            // console.log('ControlConfig', options);
            if (options) {
                Object.assign(this, options);
                this.controls = __assign(__assign({}, controls), (options.controls || {}));
            }
        }
        return ControlConfig;
    }());
    var CONTROL_CONFIG = new core.InjectionToken('control.config');

    var ControlModuleComponent = /** @class */ (function () {
        function ControlModuleComponent() {
            this.version = '0.0.12';
        }
        ControlModuleComponent.prototype.ngOnInit = function () {
        };
        ControlModuleComponent.ɵfac = function ControlModuleComponent_Factory(t) { return new (t || ControlModuleComponent)(); };
        ControlModuleComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlModuleComponent, selectors: [["control-module"]], decls: 2, vars: 1, consts: [[1, "control-module"]], template: function ControlModuleComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "span", 0);
                core["ɵɵtext"](1);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate1"]("control ", ctx.version, "");
            } }, encapsulation: 2 });
        return ControlModuleComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlModuleComponent, [{
            type: core.Component,
            args: [{
                    selector: 'control-module',
                    template: "<span class=\"control-module\">control {{version}}</span>",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var DEBOUNCE_TIME = 250;
    function exists$(value, exists) {
        if (typeof exists === 'function') {
            var oservableOrValue = exists(value);
            if (rxjs.isObservable(oservableOrValue)) {
                return oservableOrValue.pipe(operators.map(function (exists) {
                    return exists ? { exists: true } : null;
                }));
            }
            else {
                return rxjs.of(oservableOrValue ? { exists: true } : null);
            }
        }
        else {
            return rxjs.of(null);
        }
    }
    function existsValidator(exists) {
        return function (control) {
            return exists$(control.value, exists).pipe(operators.debounceTime(DEBOUNCE_TIME), operators.catchError(function (error) {
                console.log('existsValidator.catchError', error);
                return rxjs.of(null);
            }), operators.take(1));
        };
    }

    function matchValidator(otherKey, reverse, group) {
        if (reverse === void 0) { reverse = false; }
        return function (control) {
            var otherControl = group.controls[otherKey];
            var value = control.value;
            // value not equal
            if (otherControl && value !== otherControl.value && !reverse) {
                return {
                    match: true,
                };
            }
            // value equal and reverse
            if (otherControl && value === otherControl.value && reverse) {
                if (otherControl.errors) {
                    delete otherControl.errors['match'];
                    if (!Object.keys(otherControl.errors).length) {
                        otherControl.setErrors(null);
                    }
                }
            }
            // value not equal and reverse
            if (otherControl && value !== otherControl.value && reverse) {
                otherControl.setErrors({
                    match: true,
                });
            }
            return null;
        };
    }

    function noopValidator() {
        return function (control) {
            console.log(control);
            return null;
        };
    }
    var ControlService = /** @class */ (function () {
        function ControlService(options) {
            // console.log('ControlService', options);
            this.options = new ControlConfig(options || {});
        }
        ControlService.prototype.toFormGroup = function (options) {
            var _this = this;
            var controls = {};
            options.forEach(function (option) {
                // group[x.key] = new FormControl(x.value, this.getValidators(x, group));
                if (option instanceof ControlGroup) {
                    var group_1 = _this.toFormGroup(option.options);
                    controls[option.key] = group_1;
                }
                else if (!(option instanceof ControlInfo)) {
                    var validators = _this.getValidators(option);
                    var asyncValidators = _this.getAsyncValidators(option);
                    var control = new forms.FormControl(option.value, {
                        validators: validators.length ? validators : undefined,
                        asyncValidators: asyncValidators.length ? asyncValidators : undefined,
                    });
                    if (option.disabled) {
                        control.disable();
                    }
                    controls[option.key] = control;
                    // control.updateValueAndValidity();
                    // x.setControl(control); // !!!
                }
            });
            var group = new forms.FormGroup(controls);
            group.markAsDirty();
            // console.log(group);
            options.forEach(function (option) {
                if (!(option instanceof ControlInfo)) {
                    var groupValidators = _this.getGroupValidators(option, group);
                    if (groupValidators.length) {
                        // console.log(validators);
                        group.controls[option.key].setValidators(groupValidators);
                        // group.controls[option.key].updateValueAndValidity();
                    }
                }
            });
            return group;
        };
        ControlService.prototype.getValidators = function (option) {
            var validators = [];
            if (option.min) {
                validators.push(forms.Validators.min(option.min));
            }
            if (option.max) {
                validators.push(forms.Validators.max(option.max));
            }
            if (option.required) {
                validators.push(forms.Validators.required);
            }
            if (option.requiredTrue) {
                validators.push(forms.Validators.requiredTrue);
            }
            if (option.minlength) {
                validators.push(forms.Validators.minLength(option.minlength));
            }
            if (option.maxlength) {
                validators.push(forms.Validators.maxLength(option.maxlength));
            }
            if (option.pattern) {
                validators.push(forms.Validators.pattern(option.pattern));
            }
            if (option.schema === 'email') {
                validators.push(forms.Validators.email);
            }
            return validators;
        };
        ControlService.prototype.getAsyncValidators = function (option) {
            var validators = [];
            if (option.exists) {
                validators.push(existsValidator(option.exists));
            }
            return validators;
        };
        ControlService.prototype.getGroupValidators = function (option, group) {
            var validators = [];
            if (option.match) {
                validators.push(matchValidator(option.match, option.reverse, group));
            }
            return validators;
        };
        ControlService.prototype.resolve = function (option) {
            var component;
            if (option) {
                component = this.options.controls[option.schema].component || ControlComponent;
            }
            else {
                component = ControlComponent;
            }
            return component;
        };
        ControlService.ɵfac = function ControlService_Factory(t) { return new (t || ControlService)(core["ɵɵinject"](CONTROL_CONFIG)); };
        ControlService.ɵprov = core["ɵɵdefineInjectable"]({ token: ControlService, factory: ControlService.ɵfac, providedIn: 'root' });
        return ControlService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: ControlConfig, decorators: [{
                    type: core.Inject,
                    args: [CONTROL_CONFIG]
                }] }]; }, null); })();

    var _c0$c = ["inputRef"];
    var _c1$7 = ["errorRef"];
    var _c2$7 = ["labelRef"];
    var _c3$1 = ["descriptionRef"];
    var _c4$1 = ["descriptionDef"];
    var _c5 = ["labelDef"];
    var _c6 = ["outlet"];
    function ControlOutletComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "label");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r386 = ctx.$implicit;
        core["ɵɵclassMapInterpolate1"]("control__label control__label--", context_r386.option.schema, "");
        core["ɵɵattribute"]("for", context_r386.option.key);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](core["ɵɵpipeBind1"](2, 5, context_r386.option.label));
    } }
    function ControlOutletComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵpipe"](2, "label");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var context_r387 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵclassMapInterpolate1"]("control__description control__description--", context_r387.option.schema, "");
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"](" ", core["ɵɵpipeBind1"](2, 4, context_r387.option.description), " ");
    } }
    function ControlOutletComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, ControlOutletComponent_ng_template_2_div_0_Template, 3, 6, "div", 5);
    } if (rf & 2) {
        var context_r387 = ctx.$implicit;
        core["ɵɵproperty"]("ngIf", context_r387.option.description);
    } }
    function ControlOutletComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function ControlOutletComponent_ng_template_6_Template(rf, ctx) { }
    function ControlOutletComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    var _c7 = function (a0) { return { $implicit: a0 }; };
    var ControlOutletComponent = /** @class */ (function () {
        function ControlOutletComponent(componentFactoryResolver, controlService) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.controlService = controlService;
        }
        Object.defineProperty(ControlOutletComponent.prototype, "context", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlOutletComponent.prototype, "classes", {
            get: function () {
                // console.log('control', this.option.key, this.form.controls);
                return this.componentRef ? this.componentRef.instance.classes : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlOutletComponent.prototype, "control", {
            get: function () {
                // console.log('control', this.option.key, this.form.controls);
                return this.componentRef ? this.componentRef.instance.control : null;
            },
            enumerable: true,
            configurable: true
        });
        ControlOutletComponent.prototype.ngAfterViewInit = function () {
        };
        ControlOutletComponent.prototype.ngOnInit = function () {
            var component = this.controlService.resolve(this.option);
            var factory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.viewContainerRef.clear();
            var componentRef = this.viewContainerRef.createComponent(factory);
            var instance = componentRef.instance;
            instance.option = this.option;
            instance.form = this.form;
            instance.inputRef = this.inputRef;
            instance.errorRef = this.errorRef;
            // instance.labelRef = this.labelRef || this.labelDef;
            if (typeof instance['ControlInit'] === 'function') {
                instance['ControlInit']();
            }
            this.componentRef = componentRef;
        };
        ControlOutletComponent.prototype.ngOnDestroy = function () {
            this.componentRef.destroy();
        };
        ControlOutletComponent.ɵfac = function ControlOutletComponent_Factory(t) { return new (t || ControlOutletComponent)(core["ɵɵdirectiveInject"](core.ComponentFactoryResolver), core["ɵɵdirectiveInject"](ControlService)); };
        ControlOutletComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlOutletComponent, selectors: [["control-outlet"]], contentQueries: function ControlOutletComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core["ɵɵstaticContentQuery"](dirIndex, _c0$c, true);
                core["ɵɵstaticContentQuery"](dirIndex, _c1$7, true);
                core["ɵɵstaticContentQuery"](dirIndex, _c2$7, true);
                core["ɵɵstaticContentQuery"](dirIndex, _c3$1, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.inputRef = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.errorRef = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.labelRef = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.descriptionRef = _t.first);
            } }, viewQuery: function ControlOutletComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c4$1, true);
                core["ɵɵstaticViewQuery"](_c5, true);
                core["ɵɵstaticViewQuery"](_c6, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.descriptionDef = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.labelDef = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.viewContainerRef = _t.first);
            } }, inputs: { option: "option", form: "form" }, decls: 9, vars: 12, consts: [["labelDef", ""], ["descriptionDef", ""], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["outlet", ""], [3, "class", 4, "ngIf"]], template: function ControlOutletComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, ControlOutletComponent_ng_template_0_Template, 3, 7, "ng-template", null, 0, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](2, ControlOutletComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵelementStart"](4, "div", 2);
                core["ɵɵtemplate"](5, ControlOutletComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
                core["ɵɵtemplate"](6, ControlOutletComponent_ng_template_6_Template, 0, 0, "ng-template", null, 4, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](8, ControlOutletComponent_ng_container_8_Template, 1, 0, "ng-container", 3);
            } if (rf & 2) {
                var _r378 = core["ɵɵreference"](1);
                var _r380 = core["ɵɵreference"](3);
                core["ɵɵadvance"](4);
                core["ɵɵclassMapInterpolate1"]("control control--", ctx.context.option.schema, "");
                core["ɵɵproperty"]("ngClass", ctx.context.classes);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.labelRef || _r378)("ngTemplateOutletContext", core["ɵɵpureFunction1"](8, _c7, ctx.context));
                core["ɵɵadvance"](3);
                core["ɵɵproperty"]("ngTemplateOutlet", ctx.context.descriptionRef || _r380)("ngTemplateOutletContext", core["ɵɵpureFunction1"](10, _c7, ctx.context));
            } }, directives: [common.NgClass, common.NgTemplateOutlet, common.NgIf], pipes: [core$1.LabelPipe], encapsulation: 2 });
        return ControlOutletComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlOutletComponent, [{
            type: core.Component,
            args: [{
                    selector: 'control-outlet',
                    templateUrl: 'control-outlet.component.html',
                }]
        }], function () { return [{ type: core.ComponentFactoryResolver }, { type: ControlService }]; }, { inputRef: [{
                type: core.ContentChild,
                args: ['inputRef', { static: true }]
            }], errorRef: [{
                type: core.ContentChild,
                args: ['errorRef', { static: true }]
            }], labelRef: [{
                type: core.ContentChild,
                args: ['labelRef', { static: true }]
            }], descriptionRef: [{
                type: core.ContentChild,
                args: ['descriptionRef', { static: true }]
            }], descriptionDef: [{
                type: core.ViewChild,
                args: ['descriptionDef', { static: true }]
            }], labelDef: [{
                type: core.ViewChild,
                args: ['labelDef', { static: true }]
            }], viewContainerRef: [{
                type: core.ViewChild,
                args: ['outlet', { read: core.ViewContainerRef, static: true }]
            }], option: [{
                type: core.Input
            }], form: [{
                type: core.Input
            }] }); })();

    var CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        // tslint:disable-next-line:no-use-before-declare
        useExisting: core.forwardRef(function () { return ControlAccessor; }),
        multi: true
    };
    var ControlAccessor = /** @class */ (function () {
        function ControlAccessor(renderer, element) {
            this.renderer = renderer;
            this.element = element;
            this.onChange = function (value) { };
            this.onTouched = function () { };
        }
        ControlAccessor.prototype.formatValue = function (value) {
            return value.toString();
        };
        ControlAccessor.prototype.parseValue = function (value) {
            return value && value !== '' ? value : null;
        };
        ControlAccessor.prototype.writeValue = function (value) {
            var formattedValue = this.formatValue(value);
            this.renderer.setProperty(this.element.nativeElement, 'value', formattedValue);
        };
        ControlAccessor.prototype.registerOnChange = function (callback) {
            var _this = this;
            this.onChange = function (value) {
                var parsedValue = _this.parseValue(value);
                var formattedValue = _this.formatValue(parsedValue);
                _this.renderer.setProperty(_this.element.nativeElement, 'value', formattedValue);
                callback(parsedValue);
            };
        };
        ControlAccessor.prototype.registerOnTouched = function (callback) {
            this.onTouched = callback;
        };
        ControlAccessor.prototype.setDisabledState = function (isDisabled) {
            this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
        };
        ControlAccessor.ɵfac = function ControlAccessor_Factory(t) { return new (t || ControlAccessor)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef)); };
        ControlAccessor.ɵdir = core["ɵɵdefineDirective"]({ type: ControlAccessor, selectors: [["input", "designr-accessor", "", "formControlName", ""], ["input", "designr-accessor", "", "formControl", ""], ["input", "designr-accessor", "", "ngModel", ""]], hostBindings: function ControlAccessor_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("change", function ControlAccessor_change_HostBindingHandler($event) { return ctx.onChange($event.target.value); })("input", function ControlAccessor_input_HostBindingHandler($event) { return ctx.onChange($event.target.value); })("blur", function ControlAccessor_blur_HostBindingHandler($event) { return ctx.onTouched(); });
            } }, features: [core["ɵɵProvidersFeature"]([CONTROL_VALUE_ACCESSOR])] });
        return ControlAccessor;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlAccessor, [{
            type: core.Directive,
            args: [{
                    selector: 'input[designr-accessor][formControlName],input[designr-accessor][formControl],input[designr-accessor][ngModel]',
                    // tslint:disable-next-line:use-host-property-decorator
                    host: {
                        '(change)': 'onChange($event.target.value)',
                        '(input)': 'onChange($event.target.value)',
                        '(blur)': 'onTouched()'
                    },
                    providers: [CONTROL_VALUE_ACCESSOR]
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }]; }, null); })();

    function ControlsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelement"](1, "control-outlet", 1);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var option_r391 = ctx.$implicit;
        var ctx_r390 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵclassMapInterpolate1"]("fieldset__field fieldset__field--", option_r391.schema, "");
        core["ɵɵproperty"]("option", option_r391)("form", ctx_r390.form);
    } }
    var ControlsComponent = /** @class */ (function (_super) {
        __extends(ControlsComponent, _super);
        function ControlsComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlsComponent.ɵfac = function ControlsComponent_Factory(t) { return ɵControlsComponent_BaseFactory(t || ControlsComponent); };
        ControlsComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ControlsComponent, selectors: [["controls-component"]], inputs: { options: "options", form: "form" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "option", "form"]], template: function ControlsComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, ControlsComponent_ng_container_0_Template, 2, 5, "ng-container", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngForOf", ctx.options);
            } }, directives: [common.NgForOf, ControlOutletComponent], encapsulation: 2 });
        return ControlsComponent;
    }(core$1.DisposableComponent));
    var ɵControlsComponent_BaseFactory = core["ɵɵgetInheritedFactory"](ControlsComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlsComponent, [{
            type: core.Component,
            args: [{
                    selector: 'controls-component',
                    templateUrl: 'controls.component.html',
                }]
        }], null, { options: [{
                type: core.Input
            }], form: [{
                type: core.Input
            }] }); })();

    var DEBOUNCE_TIME$1 = 250;
    var ExistsValidator = /** @class */ (function () {
        function ExistsValidator() {
        }
        ExistsValidator.prototype.exists$ = function (value) {
            if (typeof this.exists === 'function') {
                var oservableOrValue = this.exists(value);
                if (rxjs.isObservable(oservableOrValue)) {
                    return oservableOrValue.pipe(operators.map(function (exists) {
                        return exists ? { exists: true } : null;
                    }));
                }
                else {
                    return rxjs.of(oservableOrValue ? { exists: true } : null);
                }
            }
            else {
                return rxjs.of(null);
            }
        };
        ExistsValidator.prototype.validate = function (control) {
            return this.exists$(control.value).pipe(operators.debounceTime(DEBOUNCE_TIME$1), operators.catchError(function (response) {
                console.log('ExistsValidator.debounced$.catchError', response);
                return rxjs.of(null);
            }), operators.take(1));
        };
        ExistsValidator.ɵfac = function ExistsValidator_Factory(t) { return new (t || ExistsValidator)(); };
        ExistsValidator.ɵdir = core["ɵɵdefineDirective"]({ type: ExistsValidator, selectors: [["", "exists", "", "formControlName", ""], ["", "exists", "", "formControl", ""], ["", "exists", "", "ngModel", ""]], inputs: { exists: "exists" }, features: [core["ɵɵProvidersFeature"]([
                    { provide: forms.NG_ASYNC_VALIDATORS, useExisting: core.forwardRef(function () { return ExistsValidator; }), multi: true },
                ])] });
        return ExistsValidator;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ExistsValidator, [{
            type: core.Directive,
            args: [{
                    selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                    providers: [
                        { provide: forms.NG_ASYNC_VALIDATORS, useExisting: core.forwardRef(function () { return ExistsValidator; }), multi: true },
                    ]
                }]
        }], null, { exists: [{
                type: core.Input
            }] }); })();

    var MatchValidator = /** @class */ (function () {
        function MatchValidator(match, reverse) {
            this.match = match;
            this.reverse = reverse;
        }
        Object.defineProperty(MatchValidator.prototype, "isReverse", {
            get: function () {
                if (!this.reverse) {
                    return false;
                }
                return this.reverse === 'true' ? true : false;
            },
            enumerable: true,
            configurable: true
        });
        MatchValidator.prototype.validate = function (control) {
            // self value
            var value = control.value;
            // control value
            var input = control.root.get(this.match);
            // value not equal
            if (input && value !== input.value && !this.isReverse) {
                return {
                    match: true,
                };
            }
            // value equal and reverse
            if (input && value === input.value && this.isReverse) {
                delete input.errors['match'];
                if (!Object.keys(input.errors).length) {
                    input.setErrors(null);
                }
            }
            // value not equal and reverse
            if (input && value !== input.value && this.isReverse) {
                input.setErrors({
                    match: true,
                });
            }
            return null;
        };
        MatchValidator.ɵfac = function MatchValidator_Factory(t) { return new (t || MatchValidator)(core["ɵɵinjectAttribute"]('match'), core["ɵɵinjectAttribute"]('reverse')); };
        MatchValidator.ɵdir = core["ɵɵdefineDirective"]({ type: MatchValidator, selectors: [["", "match", "", "formControlName", ""], ["", "match", "", "formControl", ""], ["", "match", "", "ngModel", ""]], features: [core["ɵɵProvidersFeature"]([
                    { provide: forms.NG_VALIDATORS, useExisting: core.forwardRef(function () { return MatchValidator; }), multi: true }
                ])] });
        return MatchValidator;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](MatchValidator, [{
            type: core.Directive,
            args: [{
                    selector: '[match][formControlName],[match][formControl],[match][ngModel]',
                    providers: [
                        { provide: forms.NG_VALIDATORS, useExisting: core.forwardRef(function () { return MatchValidator; }), multi: true }
                    ]
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Attribute,
                    args: ['match']
                }] }, { type: undefined, decorators: [{
                    type: core.Attribute,
                    args: ['reverse']
                }] }]; }, null); })();

    var UppercaseDirective = /** @class */ (function () {
        function UppercaseDirective() {
            this.ngModelChange = new core.EventEmitter();
        }
        UppercaseDirective.prototype.onInputChange = function ($event) {
            this.value = $event.target.value.toUpperCase();
            this.ngModelChange.emit(this.value);
        };
        UppercaseDirective.ɵfac = function UppercaseDirective_Factory(t) { return new (t || UppercaseDirective)(); };
        UppercaseDirective.ɵdir = core["ɵɵdefineDirective"]({ type: UppercaseDirective, selectors: [["", "ngModel", "", "uppercase", ""]], hostBindings: function UppercaseDirective_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("input", function UppercaseDirective_input_HostBindingHandler($event) { return ctx.onInputChange($event); });
            } }, outputs: { ngModelChange: "ngModelChange" } });
        return UppercaseDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UppercaseDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[ngModel][uppercase]'
                }]
        }], null, { ngModelChange: [{
                type: core.Output
            }], onInputChange: [{
                type: core.HostListener,
                args: ['input', ['$event']]
            }] }); })();

    var FormService = /** @class */ (function () {
        function FormService(controlService) {
            this.controlService = controlService;
        }
        FormService.prototype.getOptions = function (data) {
            var _this = this;
            var options = data.map(function (option) {
                var control = _this.controlService.options.controls[option.schema];
                if (control) {
                    var optionModel = control.model;
                    var optionModelInstance = new optionModel(option);
                    if (optionModelInstance instanceof ControlGroup) {
                        var options_1 = _this.getOptions(optionModelInstance.options);
                        options_1.sort(function (a, b) { return a.order - b.order; });
                        optionModelInstance.options = options_1;
                    }
                    return optionModelInstance;
                }
                else {
                    console.error("missing option for key " + option.schema);
                    return null;
                }
            }).filter(function (x) { return x; });
            options.sort(function (a, b) { return a.order - b.order; });
            return options;
        };
        FormService.prototype.getFormGroup = function (options) {
            return this.controlService.toFormGroup(options);
        };
        FormService.prototype.getFormGroupFromOptions = function (options) {
            return this.getFormGroup(this.getOptions(options));
        };
        FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(core["ɵɵinject"](ControlService)); };
        FormService.ɵprov = core["ɵɵdefineInjectable"]({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });
        return FormService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FormService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: ControlService }]; }, null); })();

    var services = [
        ControlService,
        FormService,
    ];
    var components = __spread([
        ControlsComponent,
        ControlModuleComponent,
        ControlOutletComponent,
        ControlComponent
    ], entryComponents);
    var directives = [
        UppercaseDirective,
        ControlAccessor,
    ];
    var pipes = [];
    var validators = [
        ExistsValidator,
        MatchValidator,
    ];
    var guards = [];
    var ControlModule = /** @class */ (function () {
        function ControlModule(parentModule) {
            /*
            if (parentModule) {
                throw new Error('ControlModule is already loaded. Import it in the AppModule only');
            }
            */
        }
        ControlModule.forRoot = function (config) {
            return {
                ngModule: ControlModule,
                providers: [{
                        provide: CONTROL_CONFIG, useValue: config
                    }]
            };
        };
        ControlModule.ɵmod = core["ɵɵdefineNgModule"]({ type: ControlModule });
        ControlModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function ControlModule_Factory(t) { return new (t || ControlModule)(core["ɵɵinject"](ControlModule, 12)); }, providers: __spread(services, pipes, validators), imports: [[
                    common.CommonModule,
                    http.HttpClientModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    core$1.CoreModule,
                ]] });
        return ControlModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](ControlModule, { declarations: [ControlsComponent,
            ControlModuleComponent,
            ControlOutletComponent,
            ControlComponent, ControlCheckboxComponent, ControlEmailComponent, ControlGroupComponent, ControlInfoComponent, ControlMarkdownComponent, ControlNumberComponent, ControlPasswordComponent, ControlRadioComponent, ControlSelectComponent, ControlTextComponent, ControlTextareaComponent, UppercaseDirective,
            ControlAccessor,
            ExistsValidator,
            MatchValidator], imports: [common.CommonModule,
            http.HttpClientModule,
            forms.FormsModule,
            forms.ReactiveFormsModule,
            core$1.CoreModule], exports: [ControlsComponent,
            ControlModuleComponent,
            ControlOutletComponent,
            ControlComponent, ControlCheckboxComponent, ControlEmailComponent, ControlGroupComponent, ControlInfoComponent, ControlMarkdownComponent, ControlNumberComponent, ControlPasswordComponent, ControlRadioComponent, ControlSelectComponent, ControlTextComponent, ControlTextareaComponent, UppercaseDirective,
            ControlAccessor,
            ExistsValidator,
            MatchValidator] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ControlModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        http.HttpClientModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        core$1.CoreModule,
                    ],
                    providers: __spread(services, pipes, validators),
                    declarations: __spread(components, directives, pipes, validators),
                    entryComponents: __spread(entryComponents),
                    exports: __spread(components, directives, pipes, validators),
                }]
        }], function () { return [{ type: ControlModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }]; }, null); })();
    core["ɵɵsetComponentScope"](ControlGroupComponent, [ControlsComponent,
        ControlModuleComponent,
        ControlOutletComponent,
        ControlComponent, ControlCheckboxComponent, ControlEmailComponent, ControlGroupComponent, ControlInfoComponent, ControlMarkdownComponent, ControlNumberComponent, ControlPasswordComponent, ControlRadioComponent, ControlSelectComponent, ControlTextComponent, ControlTextareaComponent, UppercaseDirective,
        ControlAccessor,
        ExistsValidator,
        MatchValidator, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, forms["ɵangular_packages_forms_forms_y"], forms.NgSelectOption, forms["ɵangular_packages_forms_forms_x"], forms.DefaultValueAccessor, forms.NumberValueAccessor, forms.RangeValueAccessor, forms.CheckboxControlValueAccessor, forms.SelectControlValueAccessor, forms.SelectMultipleControlValueAccessor, forms.RadioControlValueAccessor, forms.NgControlStatus, forms.NgControlStatusGroup, forms.RequiredValidator, forms.MinLengthValidator, forms.MaxLengthValidator, forms.PatternValidator, forms.CheckboxRequiredValidator, forms.EmailValidator, forms.NgModel, forms.NgModelGroup, forms.NgForm, forms.FormControlDirective, forms.FormGroupDirective, forms.FormControlName, forms.FormGroupName, forms.FormArrayName, core$1.CoreModuleComponent, core$1.DisposableComponent, core$1.DisposableDirective, core$1.JsonFormatterComponent, core$1.LoggerComponent, core$1.OutletComponent, core$1.OutletDefaultComponent, core$1.OutletRepeaterComponent, core$1.BundleDirective, core$1.DefaultContentDirective, core$1.LabelDirective, core$1.TranslateDirective], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe, core$1.AssetPipe, core$1.CustomAsyncPipe, core$1.HighlightPipe, core$1.ImagePipe, core$1.ImageUrlPipe, core$1.LabelPipe, core$1.PublicPipe, core$1.RoutePipe, core$1.SafeStylePipe, core$1.SafeUrlPipe, core$1.SegmentPipe, core$1.SlugPipe, core$1.TranslatePipe, core$1.TrustPipe]);

    exports.CONTROL_CONFIG = CONTROL_CONFIG;
    exports.ControlAccessor = ControlAccessor;
    exports.ControlCheckbox = ControlCheckbox;
    exports.ControlCheckboxComponent = ControlCheckboxComponent;
    exports.ControlComponent = ControlComponent;
    exports.ControlConfig = ControlConfig;
    exports.ControlEmail = ControlEmail;
    exports.ControlEmailComponent = ControlEmailComponent;
    exports.ControlGroup = ControlGroup;
    exports.ControlGroupComponent = ControlGroupComponent;
    exports.ControlInfo = ControlInfo;
    exports.ControlInfoComponent = ControlInfoComponent;
    exports.ControlMarkdown = ControlMarkdown;
    exports.ControlMarkdownComponent = ControlMarkdownComponent;
    exports.ControlModule = ControlModule;
    exports.ControlModuleComponent = ControlModuleComponent;
    exports.ControlNumber = ControlNumber;
    exports.ControlNumberComponent = ControlNumberComponent;
    exports.ControlOption = ControlOption;
    exports.ControlOutletComponent = ControlOutletComponent;
    exports.ControlPassword = ControlPassword;
    exports.ControlPasswordComponent = ControlPasswordComponent;
    exports.ControlRadio = ControlRadio;
    exports.ControlRadioComponent = ControlRadioComponent;
    exports.ControlSelect = ControlSelect;
    exports.ControlSelectComponent = ControlSelectComponent;
    exports.ControlService = ControlService;
    exports.ControlText = ControlText;
    exports.ControlTextComponent = ControlTextComponent;
    exports.ControlTextarea = ControlTextarea;
    exports.ControlTextareaComponent = ControlTextareaComponent;
    exports.ControlsComponent = ControlsComponent;
    exports.ExistsValidator = ExistsValidator;
    exports.FormService = FormService;
    exports.MatchValidator = MatchValidator;
    exports.UppercaseDirective = UppercaseDirective;
    exports.existsValidator = existsValidator;
    exports.matchValidator = matchValidator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=designr-control.umd.js.map
