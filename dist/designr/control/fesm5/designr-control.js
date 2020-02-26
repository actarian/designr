import { __extends, __assign, __spread } from 'tslib';
import { ɵɵelement, ɵɵpipe, ɵɵpropertyInterpolate, ɵɵpipeBind1, ɵɵproperty, ɵɵelementContainer, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵnextContext, ɵɵpipeBind3, ɵɵpureFunction1, ɵɵtemplate, ɵɵdefineComponent, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵInheritDefinitionFeature, ɵɵelementContainerStart, ɵɵtemplateRefExtractor, ɵɵelementContainerEnd, ɵɵreference, ɵɵgetInheritedFactory, ɵsetClassMetadata, Component, ContentChild, Input, ɵɵclassMapInterpolate1, ɵɵattribute, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, InjectionToken, ɵɵtextInterpolate1, ɵɵinject, ɵɵdefineInjectable, Injectable, Inject, ɵɵdirectiveInject, ComponentFactoryResolver, ɵɵstaticContentQuery, ɵɵstaticViewQuery, ViewContainerRef, ViewChild, forwardRef, Renderer2, ElementRef, ɵɵdefineDirective, ɵɵProvidersFeature, Directive, ɵɵinjectAttribute, Attribute, EventEmitter, Output, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf, ɵɵsetComponentScope } from '@angular/core';
import { NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, CheckboxControlValueAccessor, NumberValueAccessor, RadioControlValueAccessor, SelectControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, FormControl, FormGroup, Validators, NG_VALUE_ACCESSOR, NG_ASYNC_VALIDATORS, NG_VALIDATORS, FormsModule, ReactiveFormsModule, ɵangular_packages_forms_forms_y, RangeValueAccessor, SelectMultipleControlValueAccessor, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, FormControlDirective, FormGroupName, FormArrayName } from '@angular/forms';
import { LabelPipe, DisposableComponent, CoreModule, CoreModuleComponent, DisposableDirective, JsonFormatterComponent, LoggerComponent, OutletComponent, OutletDefaultComponent, OutletRepeaterComponent, BundleDirective, DefaultContentDirective, LabelDirective, TranslateDirective, AssetPipe, CustomAsyncPipe, HighlightPipe, ImagePipe, ImageUrlPipe, PublicPipe, RoutePipe, SafeStylePipe, SafeUrlPipe, SegmentPipe, SlugPipe, TranslatePipe, TrustPipe } from '@designr/core';
import { NgTemplateOutlet, NgIf, NgForOf, NgClass, CommonModule, NgComponentOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { isObservable, of } from 'rxjs';
import { takeUntil, tap, map, debounceTime, catchError, take } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';

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
    ɵɵelement(0, "input", 4);
    ɵɵpipe(1, "label");
} if (rf & 2) {
    var context_r202 = ctx.$implicit;
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(1, 3, context_r202.option.placeholder));
    ɵɵproperty("id", context_r202.option.key)("formControlName", context_r202.option.key);
} }
function ControlComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlComponent_ng_template_4_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.required"));
} }
var _c2 = function (a0) { return { minlength: a0 }; };
function ControlComponent_ng_template_4_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r203 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.minlength", null, ɵɵpureFunction1(5, _c2, context_r203.option.minlength)));
} }
var _c3 = function (a0) { return { maxlength: a0 }; };
function ControlComponent_ng_template_4_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r203 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.maxlength", null, ɵɵpureFunction1(5, _c3, context_r203.option.maxlength)));
} }
function ControlComponent_ng_template_4_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.pattern"));
} }
function ControlComponent_ng_template_4_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.match"));
} }
function ControlComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, ControlComponent_ng_template_4_div_0_div_1_Template, 3, 3, "div", 7);
    ɵɵtemplate(2, ControlComponent_ng_template_4_div_0_div_2_Template, 3, 7, "div", 7);
    ɵɵtemplate(3, ControlComponent_ng_template_4_div_0_div_3_Template, 3, 7, "div", 7);
    ɵɵtemplate(4, ControlComponent_ng_template_4_div_0_div_4_Template, 3, 3, "div", 7);
    ɵɵtemplate(5, ControlComponent_ng_template_4_div_0_div_5_Template, 3, 3, "div", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r203 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r203.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r203.control.errors.minlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r203.control.errors.maxlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r203.control.errors.pattern);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r203.control.errors.match);
} }
function ControlComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlComponent_ng_template_4_div_0_Template, 6, 5, "div", 5);
} if (rf & 2) {
    var context_r203 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r203.control.invalid && (context_r203.control.dirty || context_r203.control.touched));
} }
function ControlComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
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
    ControlComponent.ɵcmp = ɵɵdefineComponent({ type: ControlComponent, selectors: [["control-component"]], contentQueries: function ControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, _c0, true);
            ɵɵcontentQuery(dirIndex, _c1, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputRef = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.errorRef = _t.first);
        } }, inputs: { option: "option", form: "form" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["errorDef", ""], ["type", "text", 1, "control__input", 3, "placeholder", "id", "formControlName"], ["class", "control__error", 4, "ngIf"], [1, "control__error"], [4, "ngIf"]], template: function ControlComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵtemplate(1, ControlComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵtemplate(3, ControlComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
            ɵɵtemplate(4, ControlComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
            ɵɵtemplate(6, ControlComponent_ng_container_6_Template, 1, 0, "ng-container", 2);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r196 = ɵɵreference(2);
            var _r199 = ɵɵreference(5);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(3);
            ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r196)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c4, ctx.context));
            ɵɵadvance(3);
            ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r199)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c4, ctx.context));
        } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
    return ControlComponent;
}(DisposableComponent));
var ɵControlComponent_BaseFactory = ɵɵgetInheritedFactory(ControlComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlComponent, [{
        type: Component,
        args: [{
                selector: 'control-component',
                templateUrl: 'control.component.html',
            }]
    }], null, { inputRef: [{
            type: ContentChild,
            args: ['inputRef', /* TODO: add static flag */ {}]
        }], errorRef: [{
            type: ContentChild,
            args: ['errorRef', /* TODO: add static flag */ {}]
        }], option: [{
            type: Input
        }], form: [{
            type: Input
        }] }); })();

function ControlCheckboxComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "label", 4);
    ɵɵelement(1, "input", 5);
    ɵɵelementStart(2, "span", 6);
    ɵɵtext(3);
    ɵɵpipe(4, "label");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r219 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("id", context_r219.option.key)("formControlName", context_r219.option.key);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 3, context_r219.option.info));
} }
function ControlCheckboxComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.required"));
} }
function ControlCheckboxComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.required"));
} }
function ControlCheckboxComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, ControlCheckboxComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 9);
    ɵɵtemplate(2, ControlCheckboxComponent_ng_template_3_div_0_div_2_Template, 3, 3, "div", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r220 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r220.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r220.control.errors.requiredTrue);
} }
function ControlCheckboxComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlCheckboxComponent_ng_template_3_div_0_Template, 3, 2, "div", 7);
} if (rf & 2) {
    var context_r220 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r220.control.invalid && (context_r220.control.dirty || context_r220.control.touched));
} }
function ControlCheckboxComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlCheckboxComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
var _c0$1 = function (a0) { return { $implicit: a0 }; };
var ControlCheckboxComponent = /** @class */ (function (_super) {
    __extends(ControlCheckboxComponent, _super);
    function ControlCheckboxComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlCheckboxComponent.ɵfac = function ControlCheckboxComponent_Factory(t) { return ɵControlCheckboxComponent_BaseFactory(t || ControlCheckboxComponent); };
    ControlCheckboxComponent.ɵcmp = ɵɵdefineComponent({ type: ControlCheckboxComponent, selectors: [["control-checkbox-component"]], inputs: { option: "option" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control__group", "control__group--checkbox"], ["type", "checkbox", 1, "control__checkbox", 3, "id", "formControlName"], [1, "control__info"], ["class", "control__error control__error--checkbox", 4, "ngIf"], [1, "control__error", "control__error--checkbox"], [4, "ngIf"]], template: function ControlCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵtemplate(1, ControlCheckboxComponent_ng_template_1_Template, 5, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵtemplate(3, ControlCheckboxComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
            ɵɵtemplate(5, ControlCheckboxComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            ɵɵtemplate(6, ControlCheckboxComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r213 = ɵɵreference(2);
            var _r215 = ɵɵreference(4);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(5);
            ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r213)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c0$1, ctx.context));
            ɵɵadvance(1);
            ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r215)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c0$1, ctx.context));
        } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, CheckboxControlValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
    return ControlCheckboxComponent;
}(ControlComponent));
var ɵControlCheckboxComponent_BaseFactory = ɵɵgetInheritedFactory(ControlCheckboxComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'control-checkbox-component',
                templateUrl: 'control-checkbox.component.html',
            }]
    }], null, { option: [{
            type: Input
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
    ɵɵelement(0, "input", 4);
    ɵɵpipe(1, "label");
} if (rf & 2) {
    var context_r231 = ctx.$implicit;
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(1, 3, context_r231.option.placeholder));
    ɵɵproperty("id", context_r231.option.key)("formControlName", context_r231.option.key);
} }
function ControlEmailComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.required"));
} }
function ControlEmailComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.email"));
} }
var _c0$2 = function (a0) { return { minlength: a0 }; };
function ControlEmailComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r232 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.minlength", null, ɵɵpureFunction1(5, _c0$2, context_r232.option.minlength)));
} }
var _c1$1 = function (a0) { return { maxlength: a0 }; };
function ControlEmailComponent_ng_template_3_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r232 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.maxlength", null, ɵɵpureFunction1(5, _c1$1, context_r232.option.maxlength)));
} }
function ControlEmailComponent_ng_template_3_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.pattern"));
} }
function ControlEmailComponent_ng_template_3_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.match"));
} }
function ControlEmailComponent_ng_template_3_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.exists"));
} }
function ControlEmailComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, ControlEmailComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
    ɵɵtemplate(2, ControlEmailComponent_ng_template_3_div_0_div_2_Template, 3, 3, "div", 7);
    ɵɵtemplate(3, ControlEmailComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
    ɵɵtemplate(4, ControlEmailComponent_ng_template_3_div_0_div_4_Template, 3, 7, "div", 7);
    ɵɵtemplate(5, ControlEmailComponent_ng_template_3_div_0_div_5_Template, 3, 3, "div", 7);
    ɵɵtemplate(6, ControlEmailComponent_ng_template_3_div_0_div_6_Template, 3, 3, "div", 7);
    ɵɵtemplate(7, ControlEmailComponent_ng_template_3_div_0_div_7_Template, 3, 3, "div", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r232 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r232.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r232.control.errors.email);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r232.control.errors.minlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r232.control.errors.maxlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r232.control.errors.pattern);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r232.control.errors.match);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r232.control.errors.exists);
} }
function ControlEmailComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlEmailComponent_ng_template_3_div_0_Template, 8, 7, "div", 5);
} if (rf & 2) {
    var context_r232 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r232.control.invalid && (context_r232.control.dirty || context_r232.control.touched));
} }
function ControlEmailComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlEmailComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
var _c2$1 = function (a0) { return { $implicit: a0 }; };
var ControlEmailComponent = /** @class */ (function (_super) {
    __extends(ControlEmailComponent, _super);
    function ControlEmailComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlEmailComponent.ɵfac = function ControlEmailComponent_Factory(t) { return ɵControlEmailComponent_BaseFactory(t || ControlEmailComponent); };
    ControlEmailComponent.ɵcmp = ɵɵdefineComponent({ type: ControlEmailComponent, selectors: [["control-email-component"]], inputs: { option: "option" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "email", 1, "control__input", "control__input--email", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--email", 4, "ngIf"], [1, "control__error", "control__error--email"], [4, "ngIf"]], template: function ControlEmailComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵtemplate(1, ControlEmailComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵtemplate(3, ControlEmailComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
            ɵɵtemplate(5, ControlEmailComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            ɵɵtemplate(6, ControlEmailComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r225 = ɵɵreference(2);
            var _r227 = ɵɵreference(4);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(5);
            ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r225)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c2$1, ctx.context));
            ɵɵadvance(1);
            ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r227)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c2$1, ctx.context));
        } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
    return ControlEmailComponent;
}(ControlComponent));
var ɵControlEmailComponent_BaseFactory = ɵɵgetInheritedFactory(ControlEmailComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlEmailComponent, [{
        type: Component,
        args: [{
                selector: 'control-email-component',
                templateUrl: 'control-email.component.html',
            }]
    }], null, { option: [{
            type: Input
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
    ɵɵelementStart(0, "div", 7);
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r250 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, context_r250.option.title));
} }
function ControlGroupComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r250 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, context_r250.option.abstract));
} }
function ControlGroupComponent_ng_template_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "control-outlet", 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r257 = ctx.$implicit;
    var context_r250 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("fieldset__field fieldset__field--", option_r257.schema, "");
    ɵɵproperty("option", option_r257)("form", context_r250.control);
} }
function ControlGroupComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, ControlGroupComponent_ng_template_1_div_2_ng_container_1_Template, 2, 5, "ng-container", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r250 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", context_r250.option.options);
} }
function ControlGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlGroupComponent_ng_template_1_div_0_Template, 3, 3, "div", 4);
    ɵɵtemplate(1, ControlGroupComponent_ng_template_1_div_1_Template, 3, 3, "div", 5);
    ɵɵtemplate(2, ControlGroupComponent_ng_template_1_div_2_Template, 2, 1, "div", 6);
} if (rf & 2) {
    var context_r250 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r250.option.title);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r250.option.abstract);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r250.option.options.length);
} }
function ControlGroupComponent_ng_template_3_Template(rf, ctx) { }
function ControlGroupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlGroupComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
var _c0$3 = function (a0) { return { $implicit: a0 }; };
var ControlGroupComponent = /** @class */ (function (_super) {
    __extends(ControlGroupComponent, _super);
    function ControlGroupComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlGroupComponent.ɵfac = function ControlGroupComponent_Factory(t) { return ɵControlGroupComponent_BaseFactory(t || ControlGroupComponent); };
    ControlGroupComponent.ɵcmp = ɵɵdefineComponent({ type: ControlGroupComponent, selectors: [["control-group-component"]], inputs: { option: "option" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "control__title", 4, "ngIf"], ["class", "control__abstract", 4, "ngIf"], ["class", "fieldset", 4, "ngIf"], [1, "control__title"], [1, "control__abstract"], [1, "fieldset"], [4, "ngFor", "ngForOf"], [3, "option", "form"]], template: function ControlGroupComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵtemplate(1, ControlGroupComponent_ng_template_1_Template, 3, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵtemplate(3, ControlGroupComponent_ng_template_3_Template, 0, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
            ɵɵtemplate(5, ControlGroupComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            ɵɵtemplate(6, ControlGroupComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r244 = ɵɵreference(2);
            var _r246 = ɵɵreference(4);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(5);
            ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r244)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c0$3, ctx.context));
            ɵɵadvance(1);
            ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r246)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c0$3, ctx.context));
        } }, encapsulation: 2 });
    return ControlGroupComponent;
}(ControlComponent));
var ɵControlGroupComponent_BaseFactory = ɵɵgetInheritedFactory(ControlGroupComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlGroupComponent, [{
        type: Component,
        args: [{
                selector: 'control-group-component',
                templateUrl: 'control-group.component.html',
            }]
    }], null, { option: [{
            type: Input
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
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r264 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, context_r264.option.title));
} }
function ControlInfoComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r264 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, context_r264.option.abstract));
} }
function ControlInfoComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlInfoComponent_ng_template_1_div_0_Template, 3, 3, "div", 3);
    ɵɵtemplate(1, ControlInfoComponent_ng_template_1_div_1_Template, 3, 3, "div", 4);
} if (rf & 2) {
    var context_r264 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r264.option.title);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r264.option.abstract);
} }
function ControlInfoComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
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
    ControlInfoComponent.ɵcmp = ɵɵdefineComponent({ type: ControlInfoComponent, selectors: [["control-info-component"]], inputs: { option: "option" }, features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 5, consts: [[3, "formGroup"], ["inputDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "control__title", 4, "ngIf"], ["class", "control__abstract", 4, "ngIf"], [1, "control__title"], [1, "control__abstract"]], template: function ControlInfoComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵtemplate(1, ControlInfoComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵtemplate(3, ControlInfoComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r261 = ɵɵreference(2);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(3);
            ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r261)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c0$4, ctx.context));
        } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, NgIf], pipes: [LabelPipe], encapsulation: 2 });
    return ControlInfoComponent;
}(ControlComponent));
var ɵControlInfoComponent_BaseFactory = ɵɵgetInheritedFactory(ControlInfoComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlInfoComponent, [{
        type: Component,
        args: [{
                selector: 'control-info-component',
                templateUrl: 'control-info.component.html',
            }]
    }], null, { option: [{
            type: Input
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
    ɵɵelement(0, "textarea", 4);
    ɵɵpipe(1, "label");
} if (rf & 2) {
    var context_r275 = ctx.$implicit;
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(1, 3, context_r275.option.placeholder));
    ɵɵproperty("id", context_r275.option.key)("formControlName", context_r275.option.key);
} }
function ControlMarkdownComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.required"));
} }
var _c0$5 = function (a0) { return { minlength: a0 }; };
function ControlMarkdownComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r276 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.minlength", null, ɵɵpureFunction1(5, _c0$5, context_r276.option.minlength)));
} }
var _c1$2 = function (a0) { return { maxlength: a0 }; };
function ControlMarkdownComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r276 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.maxlength", null, ɵɵpureFunction1(5, _c1$2, context_r276.option.maxlength)));
} }
function ControlMarkdownComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, ControlMarkdownComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
    ɵɵtemplate(2, ControlMarkdownComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 7);
    ɵɵtemplate(3, ControlMarkdownComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r276 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r276.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r276.control.errors.minlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r276.control.errors.maxlength);
} }
function ControlMarkdownComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlMarkdownComponent_ng_template_3_div_0_Template, 4, 3, "div", 5);
} if (rf & 2) {
    var context_r276 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r276.control.invalid && (context_r276.control.dirty || context_r276.control.touched));
} }
function ControlMarkdownComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlMarkdownComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
var _c2$2 = function (a0) { return { $implicit: a0 }; };
var ControlMarkdownComponent = /** @class */ (function (_super) {
    __extends(ControlMarkdownComponent, _super);
    function ControlMarkdownComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlMarkdownComponent.ɵfac = function ControlMarkdownComponent_Factory(t) { return ɵControlMarkdownComponent_BaseFactory(t || ControlMarkdownComponent); };
    ControlMarkdownComponent.ɵcmp = ɵɵdefineComponent({ type: ControlMarkdownComponent, selectors: [["control-markdown-component"]], inputs: { option: "option" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["rows", "4", 1, "control__input", "control__input--markdown", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--markdown", 4, "ngIf"], [1, "control__error", "control__error--markdown"], [4, "ngIf"]], template: function ControlMarkdownComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵtemplate(1, ControlMarkdownComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵtemplate(3, ControlMarkdownComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
            ɵɵtemplate(5, ControlMarkdownComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            ɵɵtemplate(6, ControlMarkdownComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r269 = ɵɵreference(2);
            var _r271 = ɵɵreference(4);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(5);
            ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r269)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c2$2, ctx.context));
            ɵɵadvance(1);
            ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r271)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c2$2, ctx.context));
        } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
    return ControlMarkdownComponent;
}(ControlComponent));
var ɵControlMarkdownComponent_BaseFactory = ɵɵgetInheritedFactory(ControlMarkdownComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlMarkdownComponent, [{
        type: Component,
        args: [{
                selector: 'control-markdown-component',
                templateUrl: 'control-markdown.component.html',
            }]
    }], null, { option: [{
            type: Input
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
    ɵɵelement(0, "input", 4);
    ɵɵpipe(1, "label");
} if (rf & 2) {
    var context_r290 = ctx.$implicit;
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(1, 4, context_r290.option.placeholder));
    ɵɵproperty("id", context_r290.option.key)("formControlName", context_r290.option.key);
    ɵɵattribute("step", context_r290.option.step);
} }
function ControlNumberComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.required"));
} }
var _c0$6 = function (a0) { return { min: a0 }; };
function ControlNumberComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r291 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.min", null, ɵɵpureFunction1(5, _c0$6, context_r291.option.min)));
} }
var _c1$3 = function (a0) { return { max: a0 }; };
function ControlNumberComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r291 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.max", null, ɵɵpureFunction1(5, _c1$3, context_r291.option.max)));
} }
function ControlNumberComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, ControlNumberComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
    ɵɵtemplate(2, ControlNumberComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 7);
    ɵɵtemplate(3, ControlNumberComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r291 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r291.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r291.control.errors.min);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r291.control.errors.max);
} }
function ControlNumberComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlNumberComponent_ng_template_3_div_0_Template, 4, 3, "div", 5);
} if (rf & 2) {
    var context_r291 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r291.control.invalid && (context_r291.control.dirty || context_r291.control.touched));
} }
function ControlNumberComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlNumberComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
var _c2$3 = function (a0) { return { $implicit: a0 }; };
var ControlNumberComponent = /** @class */ (function (_super) {
    __extends(ControlNumberComponent, _super);
    function ControlNumberComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlNumberComponent.ɵfac = function ControlNumberComponent_Factory(t) { return ɵControlNumberComponent_BaseFactory(t || ControlNumberComponent); };
    ControlNumberComponent.ɵcmp = ɵɵdefineComponent({ type: ControlNumberComponent, selectors: [["control-number-component"]], inputs: { option: "option" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "number", 1, "control__input", "control__input--number", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--number", 4, "ngIf"], [1, "control__error", "control__error--number"], [4, "ngIf"]], template: function ControlNumberComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵtemplate(1, ControlNumberComponent_ng_template_1_Template, 2, 6, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵtemplate(3, ControlNumberComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
            ɵɵtemplate(5, ControlNumberComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            ɵɵtemplate(6, ControlNumberComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r284 = ɵɵreference(2);
            var _r286 = ɵɵreference(4);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(5);
            ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r284)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c2$3, ctx.context));
            ɵɵadvance(1);
            ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r286)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c2$3, ctx.context));
        } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, NumberValueAccessor, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
    return ControlNumberComponent;
}(ControlComponent));
var ɵControlNumberComponent_BaseFactory = ɵɵgetInheritedFactory(ControlNumberComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlNumberComponent, [{
        type: Component,
        args: [{
                selector: 'control-number-component',
                templateUrl: 'control-number.component.html',
            }]
    }], null, { option: [{
            type: Input
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
    var _r309 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵelement(1, "input", 5, 6);
    ɵɵpipe(3, "label");
    ɵɵelementStart(4, "div", 7);
    ɵɵelementStart(5, "input", 8, 9);
    ɵɵlistener("input", function ControlPasswordComponent_ng_template_1_Template_input_input_5_listener($event) { ɵɵrestoreView(_r309); var _r307 = ɵɵreference(6); var _r306 = ɵɵreference(2); return _r306.setAttribute("type", _r307.checked ? "text" : "password"); });
    ɵɵpipe(7, "label");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r305 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(3, 3, context_r305.option.placeholder));
    ɵɵproperty("formControlName", context_r305.option.key);
    ɵɵadvance(4);
    ɵɵattribute("aria-label", ɵɵpipeBind1(7, 5, context_r305.option.label));
} }
function ControlPasswordComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.required"));
} }
var _c0$7 = function (a0) { return { minlength: a0 }; };
function ControlPasswordComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r310 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.minlength", null, ɵɵpureFunction1(5, _c0$7, context_r310.option.minlength)));
} }
var _c1$4 = function (a0) { return { maxlength: a0 }; };
function ControlPasswordComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r310 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.maxlength", null, ɵɵpureFunction1(5, _c1$4, context_r310.option.maxlength)));
} }
function ControlPasswordComponent_ng_template_3_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.pattern"));
} }
function ControlPasswordComponent_ng_template_3_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.match"));
} }
function ControlPasswordComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, ControlPasswordComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 12);
    ɵɵtemplate(2, ControlPasswordComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 12);
    ɵɵtemplate(3, ControlPasswordComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 12);
    ɵɵtemplate(4, ControlPasswordComponent_ng_template_3_div_0_div_4_Template, 3, 3, "div", 12);
    ɵɵtemplate(5, ControlPasswordComponent_ng_template_3_div_0_div_5_Template, 3, 3, "div", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r310 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r310.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r310.control.errors.minlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r310.control.errors.maxlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r310.control.errors.pattern);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r310.control.errors.match);
} }
function ControlPasswordComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlPasswordComponent_ng_template_3_div_0_Template, 6, 5, "div", 10);
} if (rf & 2) {
    var context_r310 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r310.control.invalid && (context_r310.control.dirty || context_r310.control.touched));
} }
function ControlPasswordComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlPasswordComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
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
    ControlPasswordComponent.ɵcmp = ɵɵdefineComponent({ type: ControlPasswordComponent, selectors: [["control-password-component"]], inputs: { option: "option" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control__group", "control__group--password"], ["type", "password", 1, "control__input", "control__input--password", 3, "placeholder", "formControlName"], ["password", ""], [1, "control__addon"], ["type", "checkbox", 1, "control__checkbox", 3, "input"], ["reveal", ""], ["class", "control__error control__error--password", 4, "ngIf"], [1, "control__error", "control__error--password"], [4, "ngIf"]], template: function ControlPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵtemplate(1, ControlPasswordComponent_ng_template_1_Template, 8, 7, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵtemplate(3, ControlPasswordComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
            ɵɵtemplate(5, ControlPasswordComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            ɵɵtemplate(6, ControlPasswordComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r299 = ɵɵreference(2);
            var _r301 = ɵɵreference(4);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(5);
            ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r299)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c2$4, ctx.context));
            ɵɵadvance(1);
            ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r301)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c2$4, ctx.context));
        } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
    return ControlPasswordComponent;
}(ControlComponent));
var ɵControlPasswordComponent_BaseFactory = ɵɵgetInheritedFactory(ControlPasswordComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlPasswordComponent, [{
        type: Component,
        args: [{
                selector: 'control-password-component',
                templateUrl: 'control-password.component.html',
            }]
    }], null, { option: [{
            type: Input
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
    ɵɵelementStart(0, "label", 4);
    ɵɵelement(1, "input", 5);
    ɵɵelementStart(2, "span", 6);
    ɵɵtext(3);
    ɵɵpipe(4, "label");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r326 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("id", context_r326.option.key)("formControlName", context_r326.option.key);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 3, context_r326.option.info));
} }
function ControlRadioComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.required"));
} }
function ControlRadioComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, ControlRadioComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r327 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r327.control.errors.required);
} }
function ControlRadioComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlRadioComponent_ng_template_3_div_0_Template, 2, 1, "div", 7);
} if (rf & 2) {
    var context_r327 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r327.control.invalid && (context_r327.control.dirty || context_r327.control.touched));
} }
function ControlRadioComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlRadioComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
var _c0$8 = function (a0) { return { $implicit: a0 }; };
var ControlRadioComponent = /** @class */ (function (_super) {
    __extends(ControlRadioComponent, _super);
    function ControlRadioComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlRadioComponent.ɵfac = function ControlRadioComponent_Factory(t) { return ɵControlRadioComponent_BaseFactory(t || ControlRadioComponent); };
    ControlRadioComponent.ɵcmp = ɵɵdefineComponent({ type: ControlRadioComponent, selectors: [["control-radio-component"]], inputs: { option: "option" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control__group", "control__group--radio"], ["type", "radio", 1, "control__radio", 3, "id", "formControlName"], [1, "control__info"], ["class", "control__error control__error--radio", 4, "ngIf"], [1, "control__error", "control__error--radio"], [4, "ngIf"]], template: function ControlRadioComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵtemplate(1, ControlRadioComponent_ng_template_1_Template, 5, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵtemplate(3, ControlRadioComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
            ɵɵtemplate(5, ControlRadioComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            ɵɵtemplate(6, ControlRadioComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r320 = ɵɵreference(2);
            var _r322 = ɵɵreference(4);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(5);
            ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r320)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c0$8, ctx.context));
            ɵɵadvance(1);
            ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r322)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c0$8, ctx.context));
        } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, RadioControlValueAccessor, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
    return ControlRadioComponent;
}(ControlComponent));
var ɵControlRadioComponent_BaseFactory = ɵɵgetInheritedFactory(ControlRadioComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlRadioComponent, [{
        type: Component,
        args: [{
                selector: 'control-radio-component',
                templateUrl: 'control-radio.component.html',
            }]
    }], null, { option: [{
            type: Input
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
    ɵɵelementStart(0, "option", 7);
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r339 = ctx.$implicit;
    var context_r337 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngValue", context_r337.getValue(item_r339));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 2, item_r339 == null ? null : item_r339.name));
} }
function ControlSelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "select", 5);
    ɵɵtemplate(2, ControlSelectComponent_ng_template_1_option_2_Template, 3, 4, "option", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r337 = ctx.$implicit;
    var ctx_r332 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("id", context_r337.option.key)("formControlName", context_r337.option.key)("compareWith", context_r337.compareWith);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r332.options);
} }
function ControlSelectComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.required"));
} }
function ControlSelectComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, ControlSelectComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r341 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r341.control.errors.required);
} }
function ControlSelectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlSelectComponent_ng_template_3_div_0_Template, 2, 1, "div", 8);
} if (rf & 2) {
    var context_r341 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r341.control.invalid && (context_r341.control.dirty || context_r341.control.touched));
} }
function ControlSelectComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlSelectComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
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
        this.options$().pipe(takeUntil(this.unsubscribe), tap(function (options) {
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
            if (isObservable(options)) {
                return options;
            }
            else if (Array.isArray(options)) {
                return of(options);
            }
            else {
                return of([]);
            }
        }
        else {
            return of([]);
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
    ControlSelectComponent.ɵcmp = ɵɵdefineComponent({ type: ControlSelectComponent, selectors: [["control-select-component"]], inputs: { option: "option" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control__input", "control__input--select"], [3, "id", "formControlName", "compareWith"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["class", "control__error control__error--select", 4, "ngIf"], [1, "control__error", "control__error--select"], [4, "ngIf"]], template: function ControlSelectComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵtemplate(1, ControlSelectComponent_ng_template_1_Template, 3, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵtemplate(3, ControlSelectComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
            ɵɵtemplate(5, ControlSelectComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            ɵɵtemplate(6, ControlSelectComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r331 = ɵɵreference(2);
            var _r333 = ɵɵreference(4);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(5);
            ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r331)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c0$9, ctx.context));
            ɵɵadvance(1);
            ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r333)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c0$9, ctx.context));
        } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, SelectControlValueAccessor, NgControlStatus, FormControlName, NgForOf, NgSelectOption, ɵangular_packages_forms_forms_x, NgIf], pipes: [LabelPipe], encapsulation: 2 });
    return ControlSelectComponent;
}(ControlComponent));
var ɵControlSelectComponent_BaseFactory = ɵɵgetInheritedFactory(ControlSelectComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlSelectComponent, [{
        type: Component,
        args: [{
                selector: 'control-select-component',
                templateUrl: 'control-select.component.html',
            }]
    }], null, { option: [{
            type: Input
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
    ɵɵelement(0, "input", 4);
    ɵɵpipe(1, "label");
} if (rf & 2) {
    var context_r351 = ctx.$implicit;
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(1, 3, context_r351.option.placeholder));
    ɵɵproperty("id", context_r351.option.key)("formControlName", context_r351.option.key);
} }
function ControlTextComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlTextComponent_ng_template_4_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.required"));
} }
var _c0$a = function (a0) { return { minlength: a0 }; };
function ControlTextComponent_ng_template_4_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r352 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.minlength", null, ɵɵpureFunction1(5, _c0$a, context_r352.option.minlength)));
} }
var _c1$5 = function (a0) { return { maxlength: a0 }; };
function ControlTextComponent_ng_template_4_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r352 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.maxlength", null, ɵɵpureFunction1(5, _c1$5, context_r352.option.maxlength)));
} }
function ControlTextComponent_ng_template_4_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.pattern"));
} }
function ControlTextComponent_ng_template_4_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.match"));
} }
function ControlTextComponent_ng_template_4_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.exists"));
} }
function ControlTextComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, ControlTextComponent_ng_template_4_div_0_div_1_Template, 3, 3, "div", 7);
    ɵɵtemplate(2, ControlTextComponent_ng_template_4_div_0_div_2_Template, 3, 7, "div", 7);
    ɵɵtemplate(3, ControlTextComponent_ng_template_4_div_0_div_3_Template, 3, 7, "div", 7);
    ɵɵtemplate(4, ControlTextComponent_ng_template_4_div_0_div_4_Template, 3, 3, "div", 7);
    ɵɵtemplate(5, ControlTextComponent_ng_template_4_div_0_div_5_Template, 3, 3, "div", 7);
    ɵɵtemplate(6, ControlTextComponent_ng_template_4_div_0_div_6_Template, 3, 3, "div", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r352 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r352.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r352.control.errors.minlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r352.control.errors.maxlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r352.control.errors.pattern);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r352.control.errors.match);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r352.control.errors.exists);
} }
function ControlTextComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlTextComponent_ng_template_4_div_0_Template, 7, 6, "div", 5);
} if (rf & 2) {
    var context_r352 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r352.control.invalid && (context_r352.control.dirty || context_r352.control.touched));
} }
function ControlTextComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
var _c2$5 = function (a0) { return { $implicit: a0 }; };
var ControlTextComponent = /** @class */ (function (_super) {
    __extends(ControlTextComponent, _super);
    function ControlTextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlTextComponent.ɵfac = function ControlTextComponent_Factory(t) { return ɵControlTextComponent_BaseFactory(t || ControlTextComponent); };
    ControlTextComponent.ɵcmp = ɵɵdefineComponent({ type: ControlTextComponent, selectors: [["control-text-component"]], inputs: { option: "option" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["errorDef", ""], ["type", "text", 1, "control__input", "control__input--text", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--text", 4, "ngIf"], [1, "control__error", "control__error--text"], [4, "ngIf"]], template: function ControlTextComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵtemplate(1, ControlTextComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵtemplate(3, ControlTextComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
            ɵɵtemplate(4, ControlTextComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
            ɵɵtemplate(6, ControlTextComponent_ng_container_6_Template, 1, 0, "ng-container", 2);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r345 = ɵɵreference(2);
            var _r348 = ɵɵreference(5);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(3);
            ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r345)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c2$5, ctx.context));
            ɵɵadvance(3);
            ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r348)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c2$5, ctx.context));
        } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
    return ControlTextComponent;
}(ControlComponent));
var ɵControlTextComponent_BaseFactory = ɵɵgetInheritedFactory(ControlTextComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlTextComponent, [{
        type: Component,
        args: [{
                selector: 'control-text-component',
                templateUrl: 'control-text.component.html',
            }]
    }], null, { option: [{
            type: Input
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
    ɵɵelement(0, "textarea", 4);
    ɵɵpipe(1, "label");
} if (rf & 2) {
    var context_r369 = ctx.$implicit;
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(1, 3, context_r369.option.placeholder));
    ɵɵproperty("id", context_r369.option.key)("formControlName", context_r369.option.key);
} }
function ControlTextareaComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "errors.required"));
} }
var _c0$b = function (a0) { return { minlength: a0 }; };
function ControlTextareaComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r370 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.minlength", null, ɵɵpureFunction1(5, _c0$b, context_r370.option.minlength)));
} }
var _c1$6 = function (a0) { return { maxlength: a0 }; };
function ControlTextareaComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r370 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.maxlength", null, ɵɵpureFunction1(5, _c1$6, context_r370.option.maxlength)));
} }
function ControlTextareaComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, ControlTextareaComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
    ɵɵtemplate(2, ControlTextareaComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 7);
    ɵɵtemplate(3, ControlTextareaComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r370 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r370.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r370.control.errors.minlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r370.control.errors.maxlength);
} }
function ControlTextareaComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlTextareaComponent_ng_template_3_div_0_Template, 4, 3, "div", 5);
} if (rf & 2) {
    var context_r370 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r370.control.invalid && (context_r370.control.dirty || context_r370.control.touched));
} }
function ControlTextareaComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlTextareaComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
var _c2$6 = function (a0) { return { $implicit: a0 }; };
var ControlTextareaComponent = /** @class */ (function (_super) {
    __extends(ControlTextareaComponent, _super);
    function ControlTextareaComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlTextareaComponent.ɵfac = function ControlTextareaComponent_Factory(t) { return ɵControlTextareaComponent_BaseFactory(t || ControlTextareaComponent); };
    ControlTextareaComponent.ɵcmp = ɵɵdefineComponent({ type: ControlTextareaComponent, selectors: [["control-textarea-component"]], inputs: { option: "option" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["rows", "4", 1, "control__input", "control__input--textarea", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--textarea", 4, "ngIf"], [1, "control__error", "control__error--textarea"], [4, "ngIf"]], template: function ControlTextareaComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵtemplate(1, ControlTextareaComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵtemplate(3, ControlTextareaComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
            ɵɵtemplate(5, ControlTextareaComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            ɵɵtemplate(6, ControlTextareaComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r363 = ɵɵreference(2);
            var _r365 = ɵɵreference(4);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(5);
            ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r363)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c2$6, ctx.context));
            ɵɵadvance(1);
            ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r365)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c2$6, ctx.context));
        } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
    return ControlTextareaComponent;
}(ControlComponent));
var ɵControlTextareaComponent_BaseFactory = ɵɵgetInheritedFactory(ControlTextareaComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlTextareaComponent, [{
        type: Component,
        args: [{
                selector: 'control-textarea-component',
                templateUrl: 'control-textarea.component.html',
            }]
    }], null, { option: [{
            type: Input
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
var CONTROL_CONFIG = new InjectionToken('control.config');

var ControlModuleComponent = /** @class */ (function () {
    function ControlModuleComponent() {
        this.version = '0.0.12';
    }
    ControlModuleComponent.prototype.ngOnInit = function () {
    };
    ControlModuleComponent.ɵfac = function ControlModuleComponent_Factory(t) { return new (t || ControlModuleComponent)(); };
    ControlModuleComponent.ɵcmp = ɵɵdefineComponent({ type: ControlModuleComponent, selectors: [["control-module"]], decls: 2, vars: 1, consts: [[1, "control-module"]], template: function ControlModuleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "span", 0);
            ɵɵtext(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵtextInterpolate1("control ", ctx.version, "");
        } }, encapsulation: 2 });
    return ControlModuleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlModuleComponent, [{
        type: Component,
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
        if (isObservable(oservableOrValue)) {
            return oservableOrValue.pipe(map(function (exists) {
                return exists ? { exists: true } : null;
            }));
        }
        else {
            return of(oservableOrValue ? { exists: true } : null);
        }
    }
    else {
        return of(null);
    }
}
function existsValidator(exists) {
    return function (control) {
        return exists$(control.value, exists).pipe(debounceTime(DEBOUNCE_TIME), catchError(function (error) {
            console.log('existsValidator.catchError', error);
            return of(null);
        }), take(1));
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
                var control = new FormControl(option.value, {
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
        var group = new FormGroup(controls);
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
            validators.push(Validators.min(option.min));
        }
        if (option.max) {
            validators.push(Validators.max(option.max));
        }
        if (option.required) {
            validators.push(Validators.required);
        }
        if (option.requiredTrue) {
            validators.push(Validators.requiredTrue);
        }
        if (option.minlength) {
            validators.push(Validators.minLength(option.minlength));
        }
        if (option.maxlength) {
            validators.push(Validators.maxLength(option.maxlength));
        }
        if (option.pattern) {
            validators.push(Validators.pattern(option.pattern));
        }
        if (option.schema === 'email') {
            validators.push(Validators.email);
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
    ControlService.ɵfac = function ControlService_Factory(t) { return new (t || ControlService)(ɵɵinject(CONTROL_CONFIG)); };
    ControlService.ɵprov = ɵɵdefineInjectable({ token: ControlService, factory: ControlService.ɵfac, providedIn: 'root' });
    return ControlService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ControlConfig, decorators: [{
                type: Inject,
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
    ɵɵelementStart(0, "label");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r386 = ctx.$implicit;
    ɵɵclassMapInterpolate1("control__label control__label--", context_r386.option.schema, "");
    ɵɵattribute("for", context_r386.option.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 5, context_r386.option.label));
} }
function ControlOutletComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    var context_r387 = ɵɵnextContext().$implicit;
    ɵɵclassMapInterpolate1("control__description control__description--", context_r387.option.schema, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 4, context_r387.option.description), " ");
} }
function ControlOutletComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlOutletComponent_ng_template_2_div_0_Template, 3, 6, "div", 5);
} if (rf & 2) {
    var context_r387 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r387.option.description);
} }
function ControlOutletComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlOutletComponent_ng_template_6_Template(rf, ctx) { }
function ControlOutletComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
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
    ControlOutletComponent.ɵfac = function ControlOutletComponent_Factory(t) { return new (t || ControlOutletComponent)(ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(ControlService)); };
    ControlOutletComponent.ɵcmp = ɵɵdefineComponent({ type: ControlOutletComponent, selectors: [["control-outlet"]], contentQueries: function ControlOutletComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵstaticContentQuery(dirIndex, _c0$c, true);
            ɵɵstaticContentQuery(dirIndex, _c1$7, true);
            ɵɵstaticContentQuery(dirIndex, _c2$7, true);
            ɵɵstaticContentQuery(dirIndex, _c3$1, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputRef = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.errorRef = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelRef = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.descriptionRef = _t.first);
        } }, viewQuery: function ControlOutletComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c4$1, true);
            ɵɵstaticViewQuery(_c5, true);
            ɵɵstaticViewQuery(_c6, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.descriptionDef = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelDef = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
        } }, inputs: { option: "option", form: "form" }, decls: 9, vars: 12, consts: [["labelDef", ""], ["descriptionDef", ""], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["outlet", ""], [3, "class", 4, "ngIf"]], template: function ControlOutletComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, ControlOutletComponent_ng_template_0_Template, 3, 7, "ng-template", null, 0, ɵɵtemplateRefExtractor);
            ɵɵtemplate(2, ControlOutletComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵelementStart(4, "div", 2);
            ɵɵtemplate(5, ControlOutletComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            ɵɵtemplate(6, ControlOutletComponent_ng_template_6_Template, 0, 0, "ng-template", null, 4, ɵɵtemplateRefExtractor);
            ɵɵelementEnd();
            ɵɵtemplate(8, ControlOutletComponent_ng_container_8_Template, 1, 0, "ng-container", 3);
        } if (rf & 2) {
            var _r378 = ɵɵreference(1);
            var _r380 = ɵɵreference(3);
            ɵɵadvance(4);
            ɵɵclassMapInterpolate1("control control--", ctx.context.option.schema, "");
            ɵɵproperty("ngClass", ctx.context.classes);
            ɵɵadvance(1);
            ɵɵproperty("ngTemplateOutlet", ctx.context.labelRef || _r378)("ngTemplateOutletContext", ɵɵpureFunction1(8, _c7, ctx.context));
            ɵɵadvance(3);
            ɵɵproperty("ngTemplateOutlet", ctx.context.descriptionRef || _r380)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c7, ctx.context));
        } }, directives: [NgClass, NgTemplateOutlet, NgIf], pipes: [LabelPipe], encapsulation: 2 });
    return ControlOutletComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlOutletComponent, [{
        type: Component,
        args: [{
                selector: 'control-outlet',
                templateUrl: 'control-outlet.component.html',
            }]
    }], function () { return [{ type: ComponentFactoryResolver }, { type: ControlService }]; }, { inputRef: [{
            type: ContentChild,
            args: ['inputRef', { static: true }]
        }], errorRef: [{
            type: ContentChild,
            args: ['errorRef', { static: true }]
        }], labelRef: [{
            type: ContentChild,
            args: ['labelRef', { static: true }]
        }], descriptionRef: [{
            type: ContentChild,
            args: ['descriptionRef', { static: true }]
        }], descriptionDef: [{
            type: ViewChild,
            args: ['descriptionDef', { static: true }]
        }], labelDef: [{
            type: ViewChild,
            args: ['labelDef', { static: true }]
        }], viewContainerRef: [{
            type: ViewChild,
            args: ['outlet', { read: ViewContainerRef, static: true }]
        }], option: [{
            type: Input
        }], form: [{
            type: Input
        }] }); })();

var CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef(function () { return ControlAccessor; }),
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
    ControlAccessor.ɵfac = function ControlAccessor_Factory(t) { return new (t || ControlAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
    ControlAccessor.ɵdir = ɵɵdefineDirective({ type: ControlAccessor, selectors: [["input", "designr-accessor", "", "formControlName", ""], ["input", "designr-accessor", "", "formControl", ""], ["input", "designr-accessor", "", "ngModel", ""]], hostBindings: function ControlAccessor_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("change", function ControlAccessor_change_HostBindingHandler($event) { return ctx.onChange($event.target.value); })("input", function ControlAccessor_input_HostBindingHandler($event) { return ctx.onChange($event.target.value); })("blur", function ControlAccessor_blur_HostBindingHandler($event) { return ctx.onTouched(); });
        } }, features: [ɵɵProvidersFeature([CONTROL_VALUE_ACCESSOR])] });
    return ControlAccessor;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlAccessor, [{
        type: Directive,
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
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }]; }, null); })();

function ControlsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "control-outlet", 1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r391 = ctx.$implicit;
    var ctx_r390 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("fieldset__field fieldset__field--", option_r391.schema, "");
    ɵɵproperty("option", option_r391)("form", ctx_r390.form);
} }
var ControlsComponent = /** @class */ (function (_super) {
    __extends(ControlsComponent, _super);
    function ControlsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlsComponent.ɵfac = function ControlsComponent_Factory(t) { return ɵControlsComponent_BaseFactory(t || ControlsComponent); };
    ControlsComponent.ɵcmp = ɵɵdefineComponent({ type: ControlsComponent, selectors: [["controls-component"]], inputs: { options: "options", form: "form" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "option", "form"]], template: function ControlsComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, ControlsComponent_ng_container_0_Template, 2, 5, "ng-container", 0);
        } if (rf & 2) {
            ɵɵproperty("ngForOf", ctx.options);
        } }, directives: [NgForOf, ControlOutletComponent], encapsulation: 2 });
    return ControlsComponent;
}(DisposableComponent));
var ɵControlsComponent_BaseFactory = ɵɵgetInheritedFactory(ControlsComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlsComponent, [{
        type: Component,
        args: [{
                selector: 'controls-component',
                templateUrl: 'controls.component.html',
            }]
    }], null, { options: [{
            type: Input
        }], form: [{
            type: Input
        }] }); })();

var DEBOUNCE_TIME$1 = 250;
var ExistsValidator = /** @class */ (function () {
    function ExistsValidator() {
    }
    ExistsValidator.prototype.exists$ = function (value) {
        if (typeof this.exists === 'function') {
            var oservableOrValue = this.exists(value);
            if (isObservable(oservableOrValue)) {
                return oservableOrValue.pipe(map(function (exists) {
                    return exists ? { exists: true } : null;
                }));
            }
            else {
                return of(oservableOrValue ? { exists: true } : null);
            }
        }
        else {
            return of(null);
        }
    };
    ExistsValidator.prototype.validate = function (control) {
        return this.exists$(control.value).pipe(debounceTime(DEBOUNCE_TIME$1), catchError(function (response) {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        }), take(1));
    };
    ExistsValidator.ɵfac = function ExistsValidator_Factory(t) { return new (t || ExistsValidator)(); };
    ExistsValidator.ɵdir = ɵɵdefineDirective({ type: ExistsValidator, selectors: [["", "exists", "", "formControlName", ""], ["", "exists", "", "formControl", ""], ["", "exists", "", "ngModel", ""]], inputs: { exists: "exists" }, features: [ɵɵProvidersFeature([
                { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(function () { return ExistsValidator; }), multi: true },
            ])] });
    return ExistsValidator;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExistsValidator, [{
        type: Directive,
        args: [{
                selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                providers: [
                    { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(function () { return ExistsValidator; }), multi: true },
                ]
            }]
    }], null, { exists: [{
            type: Input
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
    MatchValidator.ɵfac = function MatchValidator_Factory(t) { return new (t || MatchValidator)(ɵɵinjectAttribute('match'), ɵɵinjectAttribute('reverse')); };
    MatchValidator.ɵdir = ɵɵdefineDirective({ type: MatchValidator, selectors: [["", "match", "", "formControlName", ""], ["", "match", "", "formControl", ""], ["", "match", "", "ngModel", ""]], features: [ɵɵProvidersFeature([
                { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return MatchValidator; }), multi: true }
            ])] });
    return MatchValidator;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MatchValidator, [{
        type: Directive,
        args: [{
                selector: '[match][formControlName],[match][formControl],[match][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return MatchValidator; }), multi: true }
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Attribute,
                args: ['match']
            }] }, { type: undefined, decorators: [{
                type: Attribute,
                args: ['reverse']
            }] }]; }, null); })();

var UppercaseDirective = /** @class */ (function () {
    function UppercaseDirective() {
        this.ngModelChange = new EventEmitter();
    }
    UppercaseDirective.prototype.onInputChange = function ($event) {
        this.value = $event.target.value.toUpperCase();
        this.ngModelChange.emit(this.value);
    };
    UppercaseDirective.ɵfac = function UppercaseDirective_Factory(t) { return new (t || UppercaseDirective)(); };
    UppercaseDirective.ɵdir = ɵɵdefineDirective({ type: UppercaseDirective, selectors: [["", "ngModel", "", "uppercase", ""]], hostBindings: function UppercaseDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("input", function UppercaseDirective_input_HostBindingHandler($event) { return ctx.onInputChange($event); });
        } }, outputs: { ngModelChange: "ngModelChange" } });
    return UppercaseDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UppercaseDirective, [{
        type: Directive,
        args: [{
                selector: '[ngModel][uppercase]'
            }]
    }], null, { ngModelChange: [{
            type: Output
        }], onInputChange: [{
            type: HostListener,
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
    FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(ɵɵinject(ControlService)); };
    FormService.ɵprov = ɵɵdefineInjectable({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });
    return FormService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormService, [{
        type: Injectable,
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
    ControlModule.ɵmod = ɵɵdefineNgModule({ type: ControlModule });
    ControlModule.ɵinj = ɵɵdefineInjector({ factory: function ControlModule_Factory(t) { return new (t || ControlModule)(ɵɵinject(ControlModule, 12)); }, providers: __spread(services, pipes, validators), imports: [[
                CommonModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
                CoreModule,
            ]] });
    return ControlModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ControlModule, { declarations: [ControlsComponent,
        ControlModuleComponent,
        ControlOutletComponent,
        ControlComponent, ControlCheckboxComponent, ControlEmailComponent, ControlGroupComponent, ControlInfoComponent, ControlMarkdownComponent, ControlNumberComponent, ControlPasswordComponent, ControlRadioComponent, ControlSelectComponent, ControlTextComponent, ControlTextareaComponent, UppercaseDirective,
        ControlAccessor,
        ExistsValidator,
        MatchValidator], imports: [CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule], exports: [ControlsComponent,
        ControlModuleComponent,
        ControlOutletComponent,
        ControlComponent, ControlCheckboxComponent, ControlEmailComponent, ControlGroupComponent, ControlInfoComponent, ControlMarkdownComponent, ControlNumberComponent, ControlPasswordComponent, ControlRadioComponent, ControlSelectComponent, ControlTextComponent, ControlTextareaComponent, UppercaseDirective,
        ControlAccessor,
        ExistsValidator,
        MatchValidator] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CoreModule,
                ],
                providers: __spread(services, pipes, validators),
                declarations: __spread(components, directives, pipes, validators),
                entryComponents: __spread(entryComponents),
                exports: __spread(components, directives, pipes, validators),
            }]
    }], function () { return [{ type: ControlModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
ɵɵsetComponentScope(ControlGroupComponent, [ControlsComponent,
    ControlModuleComponent,
    ControlOutletComponent,
    ControlComponent, ControlCheckboxComponent, ControlEmailComponent, ControlGroupComponent, ControlInfoComponent, ControlMarkdownComponent, ControlNumberComponent, ControlPasswordComponent, ControlRadioComponent, ControlSelectComponent, ControlTextComponent, ControlTextareaComponent, UppercaseDirective,
    ControlAccessor,
    ExistsValidator,
    MatchValidator, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, CoreModuleComponent, DisposableComponent, DisposableDirective, JsonFormatterComponent, LoggerComponent, OutletComponent, OutletDefaultComponent, OutletRepeaterComponent, BundleDirective, DefaultContentDirective, LabelDirective, TranslateDirective], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe, AssetPipe, CustomAsyncPipe, HighlightPipe, ImagePipe, ImageUrlPipe, LabelPipe, PublicPipe, RoutePipe, SafeStylePipe, SafeUrlPipe, SegmentPipe, SlugPipe, TranslatePipe, TrustPipe]);

/**
 * Generated bundle index. Do not edit.
 */

export { CONTROL_CONFIG, ControlAccessor, ControlCheckbox, ControlCheckboxComponent, ControlComponent, ControlConfig, ControlEmail, ControlEmailComponent, ControlGroup, ControlGroupComponent, ControlInfo, ControlInfoComponent, ControlMarkdown, ControlMarkdownComponent, ControlModule, ControlModuleComponent, ControlNumber, ControlNumberComponent, ControlOption, ControlOutletComponent, ControlPassword, ControlPasswordComponent, ControlRadio, ControlRadioComponent, ControlSelect, ControlSelectComponent, ControlService, ControlText, ControlTextComponent, ControlTextarea, ControlTextareaComponent, ControlsComponent, ExistsValidator, FormService, MatchValidator, UppercaseDirective, existsValidator, matchValidator };
//# sourceMappingURL=designr-control.js.map
