import { ɵɵelement, ɵɵpipe, ɵɵpropertyInterpolate, ɵɵpipeBind1, ɵɵproperty, ɵɵelementContainer, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵnextContext, ɵɵpipeBind3, ɵɵpureFunction1, ɵɵtemplate, ɵɵdefineComponent, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵInheritDefinitionFeature, ɵɵelementContainerStart, ɵɵtemplateRefExtractor, ɵɵelementContainerEnd, ɵɵreference, ɵɵgetInheritedFactory, ɵsetClassMetadata, Component, ContentChild, Input, ɵɵclassMapInterpolate1, ɵɵattribute, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, InjectionToken, ɵɵtextInterpolate1, ɵɵinject, ɵɵdefineInjectable, Injectable, Inject, ɵɵdirectiveInject, ComponentFactoryResolver, ɵɵstaticContentQuery, ɵɵstaticViewQuery, ViewContainerRef, ViewChild, forwardRef, Renderer2, ElementRef, ɵɵdefineDirective, ɵɵProvidersFeature, Directive, ɵɵinjectAttribute, Attribute, EventEmitter, Output, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf, ɵɵsetComponentScope } from '@angular/core';
import { NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, CheckboxControlValueAccessor, NumberValueAccessor, RadioControlValueAccessor, SelectControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, FormControl, FormGroup, Validators, NG_VALUE_ACCESSOR, NG_ASYNC_VALIDATORS, NG_VALIDATORS, FormsModule, ReactiveFormsModule, ɵangular_packages_forms_forms_y, RangeValueAccessor, SelectMultipleControlValueAccessor, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, FormControlDirective, FormGroupName, FormArrayName } from '@angular/forms';
import { DisposableComponent, LabelPipe, CoreModule, CoreModuleComponent, DisposableDirective, JsonFormatterComponent, LoggerComponent, OutletComponent, OutletDefaultComponent, OutletRepeaterComponent, BundleDirective, DefaultContentDirective, LabelDirective, TranslateDirective, AssetPipe, CustomAsyncPipe, HighlightPipe, ImagePipe, ImageUrlPipe, PublicPipe, RoutePipe, SafeStylePipe, SafeUrlPipe, SegmentPipe, SlugPipe, TranslatePipe, TrustPipe } from '@designr/core';
import { NgTemplateOutlet, NgIf, NgForOf, NgClass, CommonModule, NgComponentOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { isObservable, of } from 'rxjs';
import { takeUntil, tap, map, debounceTime, catchError, take } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';

// let UNIQUE_ID: number = 0;
class ControlOption {
    constructor(options) {
        this.schema = 'text';
        if (options) {
            Object.assign(this, options);
        }
    }
}

class ControlCheckbox extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'checkbox';
    }
}

const _c0 = ["inputRef"];
const _c1 = ["errorRef"];
function ControlComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "input", 4);
    ɵɵpipe(1, "label");
} if (rf & 2) {
    const context_r6 = ctx.$implicit;
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(1, 3, context_r6.option.placeholder));
    ɵɵproperty("id", context_r6.option.key)("formControlName", context_r6.option.key);
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
const _c2 = function (a0) { return { minlength: a0 }; };
function ControlComponent_ng_template_4_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r7 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.minlength", null, ɵɵpureFunction1(5, _c2, context_r7.option.minlength)));
} }
const _c3 = function (a0) { return { maxlength: a0 }; };
function ControlComponent_ng_template_4_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r7 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.maxlength", null, ɵɵpureFunction1(5, _c3, context_r7.option.maxlength)));
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
    const context_r7 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r7.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r7.control.errors.minlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r7.control.errors.maxlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r7.control.errors.pattern);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r7.control.errors.match);
} }
function ControlComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlComponent_ng_template_4_div_0_Template, 6, 5, "div", 5);
} if (rf & 2) {
    const context_r7 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r7.control.invalid && (context_r7.control.dirty || context_r7.control.touched));
} }
function ControlComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c4 = function (a0) { return { $implicit: a0 }; };
class ControlComponent extends DisposableComponent {
    get context() {
        return this;
    }
    get control() {
        // console.log('control', this.option.key, this.form.controls);
        return this.form.controls[this.option.key];
    }
    get isValid() {
        return this.control.valid;
    }
    get classes() {
        return {
            valid: this.control.valid,
            invalid: this.control.invalid,
            dirty: this.control.dirty,
            empty: Boolean(this.control.value == null),
            required: Boolean(this.option.required || this.option.requiredTrue),
            disabled: this.option.disabled,
        };
    }
}
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
        const _r0 = ɵɵreference(2);
        const _r3 = ɵɵreference(5);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(3);
        ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r0)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c4, ctx.context));
        ɵɵadvance(3);
        ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r3)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c4, ctx.context));
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
const ɵControlComponent_BaseFactory = ɵɵgetInheritedFactory(ControlComponent);
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
    const context_r23 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("id", context_r23.option.key)("formControlName", context_r23.option.key);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 3, context_r23.option.info));
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
    const context_r24 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r24.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r24.control.errors.requiredTrue);
} }
function ControlCheckboxComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlCheckboxComponent_ng_template_3_div_0_Template, 3, 2, "div", 7);
} if (rf & 2) {
    const context_r24 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r24.control.invalid && (context_r24.control.dirty || context_r24.control.touched));
} }
function ControlCheckboxComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlCheckboxComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0$1 = function (a0) { return { $implicit: a0 }; };
class ControlCheckboxComponent extends ControlComponent {
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
        const _r17 = ɵɵreference(2);
        const _r19 = ɵɵreference(4);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(5);
        ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r17)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c0$1, ctx.context));
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r19)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c0$1, ctx.context));
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, CheckboxControlValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
const ɵControlCheckboxComponent_BaseFactory = ɵɵgetInheritedFactory(ControlCheckboxComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'control-checkbox-component',
                templateUrl: 'control-checkbox.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();

class ControlEmail extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'email';
        this.pattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
    }
}

function ControlEmailComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "input", 4);
    ɵɵpipe(1, "label");
} if (rf & 2) {
    const context_r35 = ctx.$implicit;
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(1, 3, context_r35.option.placeholder));
    ɵɵproperty("id", context_r35.option.key)("formControlName", context_r35.option.key);
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
const _c0$2 = function (a0) { return { minlength: a0 }; };
function ControlEmailComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r36 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.minlength", null, ɵɵpureFunction1(5, _c0$2, context_r36.option.minlength)));
} }
const _c1$1 = function (a0) { return { maxlength: a0 }; };
function ControlEmailComponent_ng_template_3_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r36 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.maxlength", null, ɵɵpureFunction1(5, _c1$1, context_r36.option.maxlength)));
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
    const context_r36 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r36.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r36.control.errors.email);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r36.control.errors.minlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r36.control.errors.maxlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r36.control.errors.pattern);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r36.control.errors.match);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r36.control.errors.exists);
} }
function ControlEmailComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlEmailComponent_ng_template_3_div_0_Template, 8, 7, "div", 5);
} if (rf & 2) {
    const context_r36 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r36.control.invalid && (context_r36.control.dirty || context_r36.control.touched));
} }
function ControlEmailComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlEmailComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2$1 = function (a0) { return { $implicit: a0 }; };
class ControlEmailComponent extends ControlComponent {
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
        const _r29 = ɵɵreference(2);
        const _r31 = ɵɵreference(4);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(5);
        ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r29)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c2$1, ctx.context));
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r31)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c2$1, ctx.context));
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
const ɵControlEmailComponent_BaseFactory = ɵɵgetInheritedFactory(ControlEmailComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlEmailComponent, [{
        type: Component,
        args: [{
                selector: 'control-email-component',
                templateUrl: 'control-email.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();

class ControlGroup extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'group';
    }
}

function ControlGroupComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r54 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, context_r54.option.title));
} }
function ControlGroupComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r54 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, context_r54.option.abstract));
} }
function ControlGroupComponent_ng_template_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "control-outlet", 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r61 = ctx.$implicit;
    const context_r54 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("fieldset__field fieldset__field--", option_r61.schema, "");
    ɵɵproperty("option", option_r61)("form", context_r54.control);
} }
function ControlGroupComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, ControlGroupComponent_ng_template_1_div_2_ng_container_1_Template, 2, 5, "ng-container", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r54 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", context_r54.option.options);
} }
function ControlGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlGroupComponent_ng_template_1_div_0_Template, 3, 3, "div", 4);
    ɵɵtemplate(1, ControlGroupComponent_ng_template_1_div_1_Template, 3, 3, "div", 5);
    ɵɵtemplate(2, ControlGroupComponent_ng_template_1_div_2_Template, 2, 1, "div", 6);
} if (rf & 2) {
    const context_r54 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r54.option.title);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r54.option.abstract);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r54.option.options.length);
} }
function ControlGroupComponent_ng_template_3_Template(rf, ctx) { }
function ControlGroupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlGroupComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0$3 = function (a0) { return { $implicit: a0 }; };
class ControlGroupComponent extends ControlComponent {
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
        const _r48 = ɵɵreference(2);
        const _r50 = ɵɵreference(4);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(5);
        ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r48)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c0$3, ctx.context));
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r50)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c0$3, ctx.context));
    } }, encapsulation: 2 });
const ɵControlGroupComponent_BaseFactory = ɵɵgetInheritedFactory(ControlGroupComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlGroupComponent, [{
        type: Component,
        args: [{
                selector: 'control-group-component',
                templateUrl: 'control-group.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();

class ControlInfo extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'info';
    }
}

function ControlInfoComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r68 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, context_r68.option.title));
} }
function ControlInfoComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r68 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, context_r68.option.abstract));
} }
function ControlInfoComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlInfoComponent_ng_template_1_div_0_Template, 3, 3, "div", 3);
    ɵɵtemplate(1, ControlInfoComponent_ng_template_1_div_1_Template, 3, 3, "div", 4);
} if (rf & 2) {
    const context_r68 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r68.option.title);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r68.option.abstract);
} }
function ControlInfoComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0$4 = function (a0) { return { $implicit: a0 }; };
class ControlInfoComponent extends ControlComponent {
    get control() {
        return null;
    }
    get isValid() {
        return true;
    }
    get classes() {
        return {};
    }
}
ControlInfoComponent.ɵfac = function ControlInfoComponent_Factory(t) { return ɵControlInfoComponent_BaseFactory(t || ControlInfoComponent); };
ControlInfoComponent.ɵcmp = ɵɵdefineComponent({ type: ControlInfoComponent, selectors: [["control-info-component"]], inputs: { option: "option" }, features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 5, consts: [[3, "formGroup"], ["inputDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "control__title", 4, "ngIf"], ["class", "control__abstract", 4, "ngIf"], [1, "control__title"], [1, "control__abstract"]], template: function ControlInfoComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, ControlInfoComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, ControlInfoComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        const _r65 = ɵɵreference(2);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(3);
        ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r65)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c0$4, ctx.context));
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, NgIf], pipes: [LabelPipe], encapsulation: 2 });
const ɵControlInfoComponent_BaseFactory = ɵɵgetInheritedFactory(ControlInfoComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlInfoComponent, [{
        type: Component,
        args: [{
                selector: 'control-info-component',
                templateUrl: 'control-info.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();

class ControlMarkdown extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'markdown';
    }
}

function ControlMarkdownComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "textarea", 4);
    ɵɵpipe(1, "label");
} if (rf & 2) {
    const context_r79 = ctx.$implicit;
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(1, 3, context_r79.option.placeholder));
    ɵɵproperty("id", context_r79.option.key)("formControlName", context_r79.option.key);
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
const _c0$5 = function (a0) { return { minlength: a0 }; };
function ControlMarkdownComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r80 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.minlength", null, ɵɵpureFunction1(5, _c0$5, context_r80.option.minlength)));
} }
const _c1$2 = function (a0) { return { maxlength: a0 }; };
function ControlMarkdownComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r80 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.maxlength", null, ɵɵpureFunction1(5, _c1$2, context_r80.option.maxlength)));
} }
function ControlMarkdownComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, ControlMarkdownComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
    ɵɵtemplate(2, ControlMarkdownComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 7);
    ɵɵtemplate(3, ControlMarkdownComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r80 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r80.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r80.control.errors.minlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r80.control.errors.maxlength);
} }
function ControlMarkdownComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlMarkdownComponent_ng_template_3_div_0_Template, 4, 3, "div", 5);
} if (rf & 2) {
    const context_r80 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r80.control.invalid && (context_r80.control.dirty || context_r80.control.touched));
} }
function ControlMarkdownComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlMarkdownComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2$2 = function (a0) { return { $implicit: a0 }; };
class ControlMarkdownComponent extends ControlComponent {
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
        const _r73 = ɵɵreference(2);
        const _r75 = ɵɵreference(4);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(5);
        ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r73)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c2$2, ctx.context));
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r75)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c2$2, ctx.context));
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
const ɵControlMarkdownComponent_BaseFactory = ɵɵgetInheritedFactory(ControlMarkdownComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlMarkdownComponent, [{
        type: Component,
        args: [{
                selector: 'control-markdown-component',
                templateUrl: 'control-markdown.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();

class ControlNumber extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'number';
    }
}

function ControlNumberComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "input", 4);
    ɵɵpipe(1, "label");
} if (rf & 2) {
    const context_r94 = ctx.$implicit;
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(1, 4, context_r94.option.placeholder));
    ɵɵproperty("id", context_r94.option.key)("formControlName", context_r94.option.key);
    ɵɵattribute("step", context_r94.option.step);
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
const _c0$6 = function (a0) { return { min: a0 }; };
function ControlNumberComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r95 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.min", null, ɵɵpureFunction1(5, _c0$6, context_r95.option.min)));
} }
const _c1$3 = function (a0) { return { max: a0 }; };
function ControlNumberComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r95 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.max", null, ɵɵpureFunction1(5, _c1$3, context_r95.option.max)));
} }
function ControlNumberComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, ControlNumberComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
    ɵɵtemplate(2, ControlNumberComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 7);
    ɵɵtemplate(3, ControlNumberComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r95 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r95.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r95.control.errors.min);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r95.control.errors.max);
} }
function ControlNumberComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlNumberComponent_ng_template_3_div_0_Template, 4, 3, "div", 5);
} if (rf & 2) {
    const context_r95 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r95.control.invalid && (context_r95.control.dirty || context_r95.control.touched));
} }
function ControlNumberComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlNumberComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2$3 = function (a0) { return { $implicit: a0 }; };
class ControlNumberComponent extends ControlComponent {
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
        const _r88 = ɵɵreference(2);
        const _r90 = ɵɵreference(4);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(5);
        ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r88)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c2$3, ctx.context));
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r90)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c2$3, ctx.context));
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, NumberValueAccessor, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
const ɵControlNumberComponent_BaseFactory = ɵɵgetInheritedFactory(ControlNumberComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlNumberComponent, [{
        type: Component,
        args: [{
                selector: 'control-number-component',
                templateUrl: 'control-number.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();

class ControlPassword extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'password';
    }
}

function ControlPasswordComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r113 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵelement(1, "input", 5, 6);
    ɵɵpipe(3, "label");
    ɵɵelementStart(4, "div", 7);
    ɵɵelementStart(5, "input", 8, 9);
    ɵɵlistener("input", function ControlPasswordComponent_ng_template_1_Template_input_input_5_listener($event) { ɵɵrestoreView(_r113); const _r111 = ɵɵreference(6); const _r110 = ɵɵreference(2); return _r110.setAttribute("type", _r111.checked ? "text" : "password"); });
    ɵɵpipe(7, "label");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r109 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(3, 3, context_r109.option.placeholder));
    ɵɵproperty("formControlName", context_r109.option.key);
    ɵɵadvance(4);
    ɵɵattribute("aria-label", ɵɵpipeBind1(7, 5, context_r109.option.label));
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
const _c0$7 = function (a0) { return { minlength: a0 }; };
function ControlPasswordComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r114 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.minlength", null, ɵɵpureFunction1(5, _c0$7, context_r114.option.minlength)));
} }
const _c1$4 = function (a0) { return { maxlength: a0 }; };
function ControlPasswordComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r114 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.maxlength", null, ɵɵpureFunction1(5, _c1$4, context_r114.option.maxlength)));
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
    const context_r114 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r114.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r114.control.errors.minlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r114.control.errors.maxlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r114.control.errors.pattern);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r114.control.errors.match);
} }
function ControlPasswordComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlPasswordComponent_ng_template_3_div_0_Template, 6, 5, "div", 10);
} if (rf & 2) {
    const context_r114 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r114.control.invalid && (context_r114.control.dirty || context_r114.control.touched));
} }
function ControlPasswordComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlPasswordComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2$4 = function (a0) { return { $implicit: a0 }; };
class ControlPasswordComponent extends ControlComponent {
    constructor() {
        super(...arguments);
        this.reveal = { checked: false };
    }
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
        const _r103 = ɵɵreference(2);
        const _r105 = ɵɵreference(4);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(5);
        ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r103)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c2$4, ctx.context));
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r105)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c2$4, ctx.context));
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
const ɵControlPasswordComponent_BaseFactory = ɵɵgetInheritedFactory(ControlPasswordComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlPasswordComponent, [{
        type: Component,
        args: [{
                selector: 'control-password-component',
                templateUrl: 'control-password.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();

class ControlRadio extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'radio';
    }
}

function ControlRadioComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "label", 4);
    ɵɵelement(1, "input", 5);
    ɵɵelementStart(2, "span", 6);
    ɵɵtext(3);
    ɵɵpipe(4, "label");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r130 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("id", context_r130.option.key)("formControlName", context_r130.option.key);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 3, context_r130.option.info));
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
    const context_r131 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r131.control.errors.required);
} }
function ControlRadioComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlRadioComponent_ng_template_3_div_0_Template, 2, 1, "div", 7);
} if (rf & 2) {
    const context_r131 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r131.control.invalid && (context_r131.control.dirty || context_r131.control.touched));
} }
function ControlRadioComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlRadioComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0$8 = function (a0) { return { $implicit: a0 }; };
class ControlRadioComponent extends ControlComponent {
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
        const _r124 = ɵɵreference(2);
        const _r126 = ɵɵreference(4);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(5);
        ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r124)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c0$8, ctx.context));
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r126)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c0$8, ctx.context));
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, RadioControlValueAccessor, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
const ɵControlRadioComponent_BaseFactory = ɵɵgetInheritedFactory(ControlRadioComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlRadioComponent, [{
        type: Component,
        args: [{
                selector: 'control-radio-component',
                templateUrl: 'control-radio.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();

class ControlSelect extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'select';
    }
}

function ControlSelectComponent_ng_template_1_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 7);
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r143 = ctx.$implicit;
    const context_r141 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngValue", context_r141.getValue(item_r143));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 2, item_r143 == null ? null : item_r143.name));
} }
function ControlSelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "select", 5);
    ɵɵtemplate(2, ControlSelectComponent_ng_template_1_option_2_Template, 3, 4, "option", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r141 = ctx.$implicit;
    const ctx_r136 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("id", context_r141.option.key)("formControlName", context_r141.option.key)("compareWith", context_r141.compareWith);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r136.options);
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
    const context_r145 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r145.control.errors.required);
} }
function ControlSelectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlSelectComponent_ng_template_3_div_0_Template, 2, 1, "div", 8);
} if (rf & 2) {
    const context_r145 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r145.control.invalid && (context_r145.control.dirty || context_r145.control.touched));
} }
function ControlSelectComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlSelectComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0$9 = function (a0) { return { $implicit: a0 }; };
class ControlSelectComponent extends ControlComponent {
    constructor() {
        super(...arguments);
        this.options = [];
        this.getValue = this.getValue_.bind(this);
        this.compareWith = this.compareWith_.bind(this);
    }
    ngOnInit() {
        this.options$().pipe(takeUntil(this.unsubscribe), tap(options => {
            if (this.option.asObject && this.control.value === null) {
                const firstNullOptions = options.find(x => x.id === null);
                if (firstNullOptions !== undefined) {
                    this.control.setValue(firstNullOptions);
                }
            }
        })).subscribe(options => this.options = options);
    }
    options$() {
        const options = this.option.options;
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
    }
    getValue_(item) {
        return this.option.asObject ? item : item.id;
    }
    compareWith_(a, b) {
        if (this.option.asObject) {
            a = a;
            b = b;
            return (b && b.id !== undefined) ? a.id === b.id : a.id === b;
        }
        else {
            return b ? a === b : a === null;
        }
    }
}
ControlSelectComponent.ɵfac = function ControlSelectComponent_Factory(t) { return ɵControlSelectComponent_BaseFactory(t || ControlSelectComponent); };
ControlSelectComponent.ɵcmp = ɵɵdefineComponent({ type: ControlSelectComponent, selectors: [["control-select-component"]], inputs: { option: "option" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control__input", "control__input--select"], [3, "id", "formControlName", "compareWith"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["class", "control__error control__error--select", 4, "ngIf"], [1, "control__error", "control__error--select"], [4, "ngIf"]], template: function ControlSelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, ControlSelectComponent_ng_template_1_Template, 3, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, ControlSelectComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(5, ControlSelectComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
        ɵɵtemplate(6, ControlSelectComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        const _r135 = ɵɵreference(2);
        const _r137 = ɵɵreference(4);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(5);
        ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r135)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c0$9, ctx.context));
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r137)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c0$9, ctx.context));
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, SelectControlValueAccessor, NgControlStatus, FormControlName, NgForOf, NgSelectOption, ɵangular_packages_forms_forms_x, NgIf], pipes: [LabelPipe], encapsulation: 2 });
const ɵControlSelectComponent_BaseFactory = ɵɵgetInheritedFactory(ControlSelectComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlSelectComponent, [{
        type: Component,
        args: [{
                selector: 'control-select-component',
                templateUrl: 'control-select.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();

class ControlText extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'text';
    }
}

function ControlTextComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "input", 4);
    ɵɵpipe(1, "label");
} if (rf & 2) {
    const context_r155 = ctx.$implicit;
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(1, 3, context_r155.option.placeholder));
    ɵɵproperty("id", context_r155.option.key)("formControlName", context_r155.option.key);
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
const _c0$a = function (a0) { return { minlength: a0 }; };
function ControlTextComponent_ng_template_4_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r156 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.minlength", null, ɵɵpureFunction1(5, _c0$a, context_r156.option.minlength)));
} }
const _c1$5 = function (a0) { return { maxlength: a0 }; };
function ControlTextComponent_ng_template_4_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r156 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.maxlength", null, ɵɵpureFunction1(5, _c1$5, context_r156.option.maxlength)));
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
    const context_r156 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r156.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r156.control.errors.minlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r156.control.errors.maxlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r156.control.errors.pattern);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r156.control.errors.match);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r156.control.errors.exists);
} }
function ControlTextComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlTextComponent_ng_template_4_div_0_Template, 7, 6, "div", 5);
} if (rf & 2) {
    const context_r156 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r156.control.invalid && (context_r156.control.dirty || context_r156.control.touched));
} }
function ControlTextComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2$5 = function (a0) { return { $implicit: a0 }; };
class ControlTextComponent extends ControlComponent {
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
        const _r149 = ɵɵreference(2);
        const _r152 = ɵɵreference(5);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(3);
        ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r149)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c2$5, ctx.context));
        ɵɵadvance(3);
        ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r152)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c2$5, ctx.context));
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
const ɵControlTextComponent_BaseFactory = ɵɵgetInheritedFactory(ControlTextComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlTextComponent, [{
        type: Component,
        args: [{
                selector: 'control-text-component',
                templateUrl: 'control-text.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();

class ControlTextarea extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'textarea';
    }
}

function ControlTextareaComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "textarea", 4);
    ɵɵpipe(1, "label");
} if (rf & 2) {
    const context_r173 = ctx.$implicit;
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(1, 3, context_r173.option.placeholder));
    ɵɵproperty("id", context_r173.option.key)("formControlName", context_r173.option.key);
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
const _c0$b = function (a0) { return { minlength: a0 }; };
function ControlTextareaComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r174 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.minlength", null, ɵɵpureFunction1(5, _c0$b, context_r174.option.minlength)));
} }
const _c1$6 = function (a0) { return { maxlength: a0 }; };
function ControlTextareaComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r174 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, "errors.maxlength", null, ɵɵpureFunction1(5, _c1$6, context_r174.option.maxlength)));
} }
function ControlTextareaComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, ControlTextareaComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
    ɵɵtemplate(2, ControlTextareaComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 7);
    ɵɵtemplate(3, ControlTextareaComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r174 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r174.control.errors.required);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r174.control.errors.minlength);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", context_r174.control.errors.maxlength);
} }
function ControlTextareaComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlTextareaComponent_ng_template_3_div_0_Template, 4, 3, "div", 5);
} if (rf & 2) {
    const context_r174 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r174.control.invalid && (context_r174.control.dirty || context_r174.control.touched));
} }
function ControlTextareaComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlTextareaComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2$6 = function (a0) { return { $implicit: a0 }; };
class ControlTextareaComponent extends ControlComponent {
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
        const _r167 = ɵɵreference(2);
        const _r169 = ɵɵreference(4);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(5);
        ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r167)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c2$6, ctx.context));
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r169)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c2$6, ctx.context));
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf], pipes: [LabelPipe], encapsulation: 2 });
const ɵControlTextareaComponent_BaseFactory = ɵɵgetInheritedFactory(ControlTextareaComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlTextareaComponent, [{
        type: Component,
        args: [{
                selector: 'control-textarea-component',
                templateUrl: 'control-textarea.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();

const entryComponents = [
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
const controls = {
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
class ControlConfig {
    constructor(options) {
        this.controls = {};
        // console.log('ControlConfig', options);
        if (options) {
            Object.assign(this, options);
            this.controls = Object.assign(Object.assign({}, controls), (options.controls || {}));
        }
    }
}
const CONTROL_CONFIG = new InjectionToken('control.config');

class ControlModuleComponent {
    constructor() {
        this.version = '0.0.12';
    }
    ngOnInit() {
    }
}
ControlModuleComponent.ɵfac = function ControlModuleComponent_Factory(t) { return new (t || ControlModuleComponent)(); };
ControlModuleComponent.ɵcmp = ɵɵdefineComponent({ type: ControlModuleComponent, selectors: [["control-module"]], decls: 2, vars: 1, consts: [[1, "control-module"]], template: function ControlModuleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1("control ", ctx.version, "");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlModuleComponent, [{
        type: Component,
        args: [{
                selector: 'control-module',
                template: `<span class="control-module">control {{version}}</span>`,
                styles: []
            }]
    }], function () { return []; }, null); })();

const DEBOUNCE_TIME = 250;
function exists$(value, exists) {
    if (typeof exists === 'function') {
        const oservableOrValue = exists(value);
        if (isObservable(oservableOrValue)) {
            return oservableOrValue.pipe(map(exists => {
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
    return (control) => {
        return exists$(control.value, exists).pipe(debounceTime(DEBOUNCE_TIME), catchError((error) => {
            console.log('existsValidator.catchError', error);
            return of(null);
        }), take(1));
    };
}

function matchValidator(otherKey, reverse = false, group) {
    return (control) => {
        const otherControl = group.controls[otherKey];
        const value = control.value;
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
    return (control) => {
        console.log(control);
        return null;
    };
}
class ControlService {
    constructor(options) {
        // console.log('ControlService', options);
        this.options = new ControlConfig(options || {});
    }
    toFormGroup(options) {
        const controls = {};
        options.forEach((option) => {
            // group[x.key] = new FormControl(x.value, this.getValidators(x, group));
            if (option instanceof ControlGroup) {
                const group = this.toFormGroup(option.options);
                controls[option.key] = group;
            }
            else if (!(option instanceof ControlInfo)) {
                const validators = this.getValidators(option);
                const asyncValidators = this.getAsyncValidators(option);
                const control = new FormControl(option.value, {
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
        const group = new FormGroup(controls);
        group.markAsDirty();
        // console.log(group);
        options.forEach((option) => {
            if (!(option instanceof ControlInfo)) {
                const groupValidators = this.getGroupValidators(option, group);
                if (groupValidators.length) {
                    // console.log(validators);
                    group.controls[option.key].setValidators(groupValidators);
                    // group.controls[option.key].updateValueAndValidity();
                }
            }
        });
        return group;
    }
    getValidators(option) {
        const validators = [];
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
    }
    getAsyncValidators(option) {
        const validators = [];
        if (option.exists) {
            validators.push(existsValidator(option.exists));
        }
        return validators;
    }
    getGroupValidators(option, group) {
        const validators = [];
        if (option.match) {
            validators.push(matchValidator(option.match, option.reverse, group));
        }
        return validators;
    }
    resolve(option) {
        let component;
        if (option) {
            component = this.options.controls[option.schema].component || ControlComponent;
        }
        else {
            component = ControlComponent;
        }
        return component;
    }
}
ControlService.ɵfac = function ControlService_Factory(t) { return new (t || ControlService)(ɵɵinject(CONTROL_CONFIG)); };
ControlService.ɵprov = ɵɵdefineInjectable({ token: ControlService, factory: ControlService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ControlConfig, decorators: [{
                type: Inject,
                args: [CONTROL_CONFIG]
            }] }]; }, null); })();

const _c0$c = ["inputRef"];
const _c1$7 = ["errorRef"];
const _c2$7 = ["labelRef"];
const _c3$1 = ["descriptionRef"];
const _c4$1 = ["descriptionDef"];
const _c5 = ["labelDef"];
const _c6 = ["outlet"];
function ControlOutletComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "label");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r190 = ctx.$implicit;
    ɵɵclassMapInterpolate1("control__label control__label--", context_r190.option.schema, "");
    ɵɵattribute("for", context_r190.option.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 5, context_r190.option.label));
} }
function ControlOutletComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "label");
    ɵɵelementEnd();
} if (rf & 2) {
    const context_r191 = ɵɵnextContext().$implicit;
    ɵɵclassMapInterpolate1("control__description control__description--", context_r191.option.schema, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 4, context_r191.option.description), " ");
} }
function ControlOutletComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ControlOutletComponent_ng_template_2_div_0_Template, 3, 6, "div", 5);
} if (rf & 2) {
    const context_r191 = ctx.$implicit;
    ɵɵproperty("ngIf", context_r191.option.description);
} }
function ControlOutletComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ControlOutletComponent_ng_template_6_Template(rf, ctx) { }
function ControlOutletComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c7 = function (a0) { return { $implicit: a0 }; };
class ControlOutletComponent {
    constructor(componentFactoryResolver, controlService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.controlService = controlService;
    }
    get context() {
        return this;
    }
    get classes() {
        // console.log('control', this.option.key, this.form.controls);
        return this.componentRef ? this.componentRef.instance.classes : null;
    }
    get control() {
        // console.log('control', this.option.key, this.form.controls);
        return this.componentRef ? this.componentRef.instance.control : null;
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        const component = this.controlService.resolve(this.option);
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        const componentRef = this.viewContainerRef.createComponent(factory);
        const instance = componentRef.instance;
        instance.option = this.option;
        instance.form = this.form;
        instance.inputRef = this.inputRef;
        instance.errorRef = this.errorRef;
        // instance.labelRef = this.labelRef || this.labelDef;
        if (typeof instance['ControlInit'] === 'function') {
            instance['ControlInit']();
        }
        this.componentRef = componentRef;
    }
    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
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
        const _r182 = ɵɵreference(1);
        const _r184 = ɵɵreference(3);
        ɵɵadvance(4);
        ɵɵclassMapInterpolate1("control control--", ctx.context.option.schema, "");
        ɵɵproperty("ngClass", ctx.context.classes);
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.context.labelRef || _r182)("ngTemplateOutletContext", ɵɵpureFunction1(8, _c7, ctx.context));
        ɵɵadvance(3);
        ɵɵproperty("ngTemplateOutlet", ctx.context.descriptionRef || _r184)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c7, ctx.context));
    } }, directives: [NgClass, NgTemplateOutlet, NgIf], pipes: [LabelPipe], encapsulation: 2 });
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

const CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef(() => ControlAccessor),
    multi: true
};
// tslint:disable-next-line:directive-class-suffix
class ControlAccessor {
    constructor(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.onChange = (value) => { };
        this.onTouched = () => { };
    }
    formatValue(value) {
        return value.toString();
    }
    parseValue(value) {
        return value && value !== '' ? value : null;
    }
    writeValue(value) {
        const formattedValue = this.formatValue(value);
        this.renderer.setProperty(this.element.nativeElement, 'value', formattedValue);
    }
    registerOnChange(callback) {
        this.onChange = (value) => {
            const parsedValue = this.parseValue(value);
            const formattedValue = this.formatValue(parsedValue);
            this.renderer.setProperty(this.element.nativeElement, 'value', formattedValue);
            callback(parsedValue);
        };
    }
    registerOnTouched(callback) {
        this.onTouched = callback;
    }
    setDisabledState(isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    }
}
ControlAccessor.ɵfac = function ControlAccessor_Factory(t) { return new (t || ControlAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
ControlAccessor.ɵdir = ɵɵdefineDirective({ type: ControlAccessor, selectors: [["input", "designr-accessor", "", "formControlName", ""], ["input", "designr-accessor", "", "formControl", ""], ["input", "designr-accessor", "", "ngModel", ""]], hostBindings: function ControlAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("change", function ControlAccessor_change_HostBindingHandler($event) { return ctx.onChange($event.target.value); })("input", function ControlAccessor_input_HostBindingHandler($event) { return ctx.onChange($event.target.value); })("blur", function ControlAccessor_blur_HostBindingHandler($event) { return ctx.onTouched(); });
    } }, features: [ɵɵProvidersFeature([CONTROL_VALUE_ACCESSOR])] });
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
    const option_r195 = ctx.$implicit;
    const ctx_r194 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("fieldset__field fieldset__field--", option_r195.schema, "");
    ɵɵproperty("option", option_r195)("form", ctx_r194.form);
} }
class ControlsComponent extends DisposableComponent {
}
ControlsComponent.ɵfac = function ControlsComponent_Factory(t) { return ɵControlsComponent_BaseFactory(t || ControlsComponent); };
ControlsComponent.ɵcmp = ɵɵdefineComponent({ type: ControlsComponent, selectors: [["controls-component"]], inputs: { options: "options", form: "form" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "option", "form"]], template: function ControlsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, ControlsComponent_ng_container_0_Template, 2, 5, "ng-container", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [NgForOf, ControlOutletComponent], encapsulation: 2 });
const ɵControlsComponent_BaseFactory = ɵɵgetInheritedFactory(ControlsComponent);
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

const DEBOUNCE_TIME$1 = 250;
class ExistsValidator {
    exists$(value) {
        if (typeof this.exists === 'function') {
            const oservableOrValue = this.exists(value);
            if (isObservable(oservableOrValue)) {
                return oservableOrValue.pipe(map(exists => {
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
    validate(control) {
        return this.exists$(control.value).pipe(debounceTime(DEBOUNCE_TIME$1), catchError((response) => {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        }), take(1));
    }
}
ExistsValidator.ɵfac = function ExistsValidator_Factory(t) { return new (t || ExistsValidator)(); };
ExistsValidator.ɵdir = ɵɵdefineDirective({ type: ExistsValidator, selectors: [["", "exists", "", "formControlName", ""], ["", "exists", "", "formControl", ""], ["", "exists", "", "ngModel", ""]], inputs: { exists: "exists" }, features: [ɵɵProvidersFeature([
            { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ExistsValidator), multi: true },
        ])] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExistsValidator, [{
        type: Directive,
        args: [{
                selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                providers: [
                    { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ExistsValidator), multi: true },
                ]
            }]
    }], null, { exists: [{
            type: Input
        }] }); })();

class MatchValidator {
    constructor(match, reverse) {
        this.match = match;
        this.reverse = reverse;
    }
    get isReverse() {
        if (!this.reverse) {
            return false;
        }
        return this.reverse === 'true' ? true : false;
    }
    validate(control) {
        // self value
        const value = control.value;
        // control value
        const input = control.root.get(this.match);
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
    }
}
MatchValidator.ɵfac = function MatchValidator_Factory(t) { return new (t || MatchValidator)(ɵɵinjectAttribute('match'), ɵɵinjectAttribute('reverse')); };
MatchValidator.ɵdir = ɵɵdefineDirective({ type: MatchValidator, selectors: [["", "match", "", "formControlName", ""], ["", "match", "", "formControl", ""], ["", "match", "", "ngModel", ""]], features: [ɵɵProvidersFeature([
            { provide: NG_VALIDATORS, useExisting: forwardRef(() => MatchValidator), multi: true }
        ])] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MatchValidator, [{
        type: Directive,
        args: [{
                selector: '[match][formControlName],[match][formControl],[match][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => MatchValidator), multi: true }
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Attribute,
                args: ['match']
            }] }, { type: undefined, decorators: [{
                type: Attribute,
                args: ['reverse']
            }] }]; }, null); })();

class UppercaseDirective {
    constructor() {
        this.ngModelChange = new EventEmitter();
    }
    onInputChange($event) {
        this.value = $event.target.value.toUpperCase();
        this.ngModelChange.emit(this.value);
    }
}
UppercaseDirective.ɵfac = function UppercaseDirective_Factory(t) { return new (t || UppercaseDirective)(); };
UppercaseDirective.ɵdir = ɵɵdefineDirective({ type: UppercaseDirective, selectors: [["", "ngModel", "", "uppercase", ""]], hostBindings: function UppercaseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("input", function UppercaseDirective_input_HostBindingHandler($event) { return ctx.onInputChange($event); });
    } }, outputs: { ngModelChange: "ngModelChange" } });
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

class FormService {
    constructor(controlService) {
        this.controlService = controlService;
    }
    getOptions(data) {
        const options = data.map((option) => {
            const control = this.controlService.options.controls[option.schema];
            if (control) {
                const optionModel = control.model;
                const optionModelInstance = new optionModel(option);
                if (optionModelInstance instanceof ControlGroup) {
                    const options = this.getOptions(optionModelInstance.options);
                    options.sort((a, b) => a.order - b.order);
                    optionModelInstance.options = options;
                }
                return optionModelInstance;
            }
            else {
                console.error(`missing option for key ${option.schema}`);
                return null;
            }
        }).filter(x => x);
        options.sort((a, b) => a.order - b.order);
        return options;
    }
    getFormGroup(options) {
        return this.controlService.toFormGroup(options);
    }
    getFormGroupFromOptions(options) {
        return this.getFormGroup(this.getOptions(options));
    }
}
FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(ɵɵinject(ControlService)); };
FormService.ɵprov = ɵɵdefineInjectable({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ControlService }]; }, null); })();

const services = [
    ControlService,
    FormService,
];
const components = [
    ControlsComponent,
    ControlModuleComponent,
    ControlOutletComponent,
    ControlComponent,
    ...entryComponents,
];
const directives = [
    UppercaseDirective,
    ControlAccessor,
];
const pipes = [];
const validators = [
    ExistsValidator,
    MatchValidator,
];
const guards = [];
class ControlModule {
    constructor(parentModule) {
        /*
        if (parentModule) {
            throw new Error('ControlModule is already loaded. Import it in the AppModule only');
        }
        */
    }
    static forRoot(config) {
        return {
            ngModule: ControlModule,
            providers: [{
                    provide: CONTROL_CONFIG, useValue: config
                }]
        };
    }
}
ControlModule.ɵmod = ɵɵdefineNgModule({ type: ControlModule });
ControlModule.ɵinj = ɵɵdefineInjector({ factory: function ControlModule_Factory(t) { return new (t || ControlModule)(ɵɵinject(ControlModule, 12)); }, providers: [
        ...services,
        ...pipes,
        ...validators,
    ], imports: [[
            CommonModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            CoreModule,
        ]] });
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
                providers: [
                    ...services,
                    ...pipes,
                    ...validators,
                ],
                declarations: [
                    ...components,
                    ...directives,
                    ...pipes,
                    ...validators,
                ],
                entryComponents: [
                    ...entryComponents,
                ],
                exports: [
                    ...components,
                    ...directives,
                    ...pipes,
                    ...validators,
                ],
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
