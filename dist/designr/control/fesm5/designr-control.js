import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@designr/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, debounceTime, switchMap, take } from 'rxjs/operators';
import { FormGroup, NG_VALUE_ACCESSOR, FormControl, Validators, NG_ASYNC_VALIDATORS, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InjectionToken, Component, forwardRef, Input, Renderer2, Inject, Injectable, Directive, Attribute, EventEmitter, HostListener, Output, NgModule, Optional, SkipSelf, defineInjectable, inject } from '@angular/core';
import { __spread, __extends } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlConfig = /** @class */ (function () {
    function ControlConfig(options) {
        this.controls = {};
        // console.log('ControlConfig', options);
        if (options) {
            Object.assign(this, options);
            this.controls = options.controls || {};
        }
    }
    return ControlConfig;
}());
/** @type {?} */
var CONTROL_CONFIG = new InjectionToken('control.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlModuleComponent = /** @class */ (function () {
    function ControlModuleComponent() {
        this.version = '0.0.3';
    }
    /**
     * @return {?}
     */
    ControlModuleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ControlModuleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-module',
                    template: "<span class=\"control-module\">control {{version}}</span>"
                }] }
    ];
    /** @nocollapse */
    ControlModuleComponent.ctorParameters = function () { return []; };
    return ControlModuleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ControlBaseOptions = /** @class */ (function () {
    function ControlBaseOptions() {
    }
    return ControlBaseOptions;
}());
/**
 * @template T
 */
var ControlBase = /** @class */ (function () {
    function ControlBase(options) {
        if (options === void 0) { options = {}; }
        this._originalValue = options.value;
        this.value = options.value;
        this.key = options.key;
        //
        /** @type {?} */
        var name = (options.key || 'Control') + " " + ++ControlBase.uid;
        this.label = options.label || name;
        this.placeholder = options.placeholder || name;
        // order
        this.order = options.order === undefined ? 1 : options.order;
        this.schema = options.schema || 'text';
        this.type = options.type || this.schema;
        // validators
        this.min = options.min || null;
        this.max = options.max || null;
        this.required = !!options.required;
        this.requiredTrue = !!options.requiredTrue;
        this.email = !!options.email;
        this.minLength = options.minLength || null;
        this.maxLength = options.maxLength || null;
        this.pattern = options.pattern || null;
        this.match = options.match || null;
        // options
        this.reverse = !!options.reverse;
        this.options = options.options || [];
        // state
        this.disabled = !!options.disabled;
        // formatters
        this.step = options.step || null;
        this.format = options.format || null;
    }
    // export class ControlBase<T> implements ControlValueAccessor {
    ControlBase.uid = 0;
    return ControlBase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlComponent = /** @class */ (function () {
    function ControlComponent(renderer) {
        this.renderer = renderer;
        this.reveal = { checked: false };
        this.onChange = function (value) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(ControlComponent.prototype, "controlRef", {
        get: /**
         * @return {?}
         */
        function () {
            // console.log('controlRef', this.control.key, this.form.controls);
            return this.form.controls[this.control.key];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.controlRef.valid; },
        enumerable: true,
        configurable: true
    });
    // ControlValueAccessor
    // ControlValueAccessor
    /**
     * @return {?}
     */
    ControlComponent.prototype.getFormattedValue = 
    // ControlValueAccessor
    /**
     * @return {?}
     */
    function () {
        // console.log('ControlComponent.getFormattedValue', this.controlRef.value);
        return this.controlRef.value;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ControlComponent.prototype.onInput = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.element = $event.target;
        this.onChange(this.element.value);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ControlComponent.prototype.onFocus = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.blurred = false;
        this.element = $event.target;
        // this.element.value = this.controlRef.value;
        this.renderer.setProperty(this.element, 'value', this.controlRef.value);
        // console.log('ControlComponent.onFocus', this.controlRef);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ControlComponent.prototype.onBlur = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.blurred = true;
        this.element = $event.target;
        // this.element.value = this.controlRef.value;
        this.renderer.setProperty(this.element, 'value', this.controlRef.value);
        // console.log('ControlComponent.onBlur', this.controlRef);
        /*
        if (this.innervalue) {
            this.control.patchValue(this.innervalue + ' H', { emitEvent: false });
        }
        */
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ControlComponent.prototype.formatValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // console.log('ControlComponent.formatValue', value);
        this.renderer.setProperty(this.element, 'value', value);
        // console.log('ControlEditableComponent.writeValue', value);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ControlComponent.prototype.parseValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // console.log('ControlComponent.parseValue', value);
        /** @type {?} */
        var parsed = this.innervalue;
        this.onChange(parsed);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ControlComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.formatValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ControlComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
        // console.log('ControlEditableComponent.registerOnChange');
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ControlComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
        // console.log('ControlEditableComponent.registerOnTouched');
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ControlComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        // const node = this.textarea.nativeElement;
        /*
        if (isDisabled) {
            this.renderer.addClass(this.element, 'disabled');
        } else {
            this.renderer.removeClass(this.element, 'disabled');
        }
        // console.log('ControlEditableComponent.setDisabledState', isDisabled);
        */
    };
    ControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'core-control',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-container [ngSwitch]=\"control.schema\">\r\n\t\t<ng-container *ngSwitchCase=\"'checkbox'\">\r\n\t\t\t<!-- CHECKBOX -->\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t\t<span>{{ control.label | label }}</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'email'\">\r\n\t\t\t<!-- EMAIL -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'number'\">\r\n\t\t\t<!-- NUMBER -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [type]=\"control.type\" [attr.step]=\"control.step\" (input)=\"onInput($event)\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [value]=\"getFormattedValue()\">\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'password'\">\r\n\t\t\t<!-- PASSWORD -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<input placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\" #password>\r\n\t\t\t\t<div class=\"input-group-append\" *ngIf=\"control.type === 'password'\">\r\n\t\t\t\t\t<div class=\"input-group-text\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" [attr.aria-label]=\"control.label | label\" (input)=\"password.type = reveal.checked ? 'text' : control.type\" #password>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'radio'\">\r\n\t\t\t<!-- RADIO -->\r\n\t\t\t<div class=\"radio\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"radio\" class=\"form-radio-input\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t\t<span>{{ control.label | label }}</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'select'\">\r\n\t\t\t<!-- SELECT -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<select class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t<option *ngFor=\"let opt of control.options\" [value]=\"opt.key\">{{opt.value}}</option>\r\n\t\t\t</select>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'markdown'\">\r\n\t\t\t<!-- MARKDOWN -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<textarea placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" rows=\"4\"></textarea>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'text'\">\r\n\t\t\t<!-- TEXT -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | label }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\t<div *ngIf=\"controlRef.invalid && (controlRef.dirty || controlRef.touched)\" class=\"alert alert--danger\">\r\n\t\t<div *ngIf=\"controlRef.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.requiredTrue\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.min\">{{ 'errors.min' | label : null : { min: control.min } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.max\">{{ 'errors.max' | label : null : { max: control.max } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.email\">{{ 'errors.email' | label }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.minLength\">{{ 'errors.minLength' | label : null : { minLength: control.minLength } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.maxLength\">{{ 'errors.maxLength' | label : null : { maxLength: control.maxLength } }}</div>\r\n\t\t<!-- <div *ngIf=\"controlRef.errors.pattern\">{{ 'errors.pattern' | label }}</div> -->\r\n\t\t<div *ngIf=\"controlRef.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t</div>\r\n</ng-container>\r\n",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return ControlComponent; }),
                            multi: true,
                        }]
                }] }
    ];
    /** @nocollapse */
    ControlComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    ControlComponent.propDecorators = {
        control: [{ type: Input }],
        form: [{ type: Input }]
    };
    return ControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} otherKey
 * @param {?=} reverse
 * @param {?=} group
 * @return {?}
 */
function matchValidator(otherKey, reverse, group) {
    if (reverse === void 0) { reverse = false; }
    return function (control) {
        /** @type {?} */
        var otherControl = group.controls[otherKey];
        /** @type {?} */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlService = /** @class */ (function () {
    function ControlService(options) {
        // console.log('ControlService', options);
        options = options || {};
        this.options = new ControlConfig(options);
    }
    /**
     * @param {?} control
     * @param {?} group
     * @return {?}
     */
    ControlService.prototype.getValidators = /**
     * @param {?} control
     * @param {?} group
     * @return {?}
     */
    function (control, group) {
        /** @type {?} */
        var validators = [];
        if (control.min) {
            validators.push(Validators.min(control.min));
        }
        if (control.max) {
            validators.push(Validators.max(control.max));
        }
        if (control.required) {
            validators.push(Validators.required);
        }
        if (control.requiredTrue) {
            validators.push(Validators.requiredTrue);
        }
        if (control.email) {
            validators.push(Validators.email);
        }
        if (control.minLength) {
            validators.push(Validators.minLength(control.minLength));
        }
        if (control.maxLength) {
            validators.push(Validators.maxLength(control.maxLength));
        }
        if (control.pattern) {
            validators.push(Validators.pattern(control.pattern));
        }
        if (control.match) {
            validators.push(matchValidator(control.match, control.reverse, group));
        }
        // console.log(control.key, validators);
        return validators;
    };
    /**
     * @param {?} controls
     * @return {?}
     */
    ControlService.prototype.toFormGroup = /**
     * @param {?} controls
     * @return {?}
     */
    function (controls) {
        var _this = this;
        /** @type {?} */
        var options = {};
        controls.forEach(function (x) {
            // group[x.key] = new FormControl(x.value, this.getValidators(x, group));
            /** @type {?} */
            var formControl = new FormControl(x.value);
            if (x.disabled) {
                formControl.disable();
            }
            options[x.key] = formControl;
            // x.setControl(formControl); // !!!
        });
        /** @type {?} */
        var group = new FormGroup(options);
        // console.log(group);
        controls.forEach(function (x) {
            /** @type {?} */
            var validators = _this.getValidators(x, group);
            // console.log(validators);
            group.controls[x.key].setValidators(validators);
        });
        return group;
    };
    ControlService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ControlService.ctorParameters = function () { return [
        { type: ControlConfig, decorators: [{ type: Inject, args: [CONTROL_CONFIG,] }] }
    ]; };
    /** @nocollapse */ ControlService.ngInjectableDef = defineInjectable({ factory: function ControlService_Factory() { return new ControlService(inject(CONTROL_CONFIG)); }, token: ControlService, providedIn: "root" });
    return ControlService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEBOUNCE_TIME = 250;
var ExistsValidator = /** @class */ (function () {
    function ExistsValidator() {
        var _this = this;
        this.values = new BehaviorSubject(null);
        this.debounced$ = this.values.pipe(debounceTime(DEBOUNCE_TIME), switchMap(function (value) {
            // console.log('ExistsValidator.debounced$', value);
            return _this.exists$(value);
        }), catchError(function (response) {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        }), take(1));
    }
    Object.defineProperty(ExistsValidator.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value.trim() !== '') {
                this.values.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    ExistsValidator.prototype.exists$ = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (typeof this.exists === 'function') {
            // console.log('ExistsValidator.exists$', value);
            return this.exists(value).pipe(switchMap(function (exists) {
                if (exists) {
                    return of({
                        exists: true,
                    });
                }
                else {
                    return of(null);
                }
            }));
        }
        else {
            return of(null);
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    ExistsValidator.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        this.value = control.value;
        return this.debounced$;
    };
    ExistsValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                    providers: [
                        { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(function () { return ExistsValidator; }), multi: true },
                    ]
                },] }
    ];
    ExistsValidator.propDecorators = {
        exists: [{ type: Input }]
    };
    return ExistsValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatchValidator = /** @class */ (function () {
    function MatchValidator(match, reverse) {
        this.match = match;
        this.reverse = reverse;
    }
    Object.defineProperty(MatchValidator.prototype, "isReverse", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} control
     * @return {?}
     */
    MatchValidator.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        // self value
        /** @type {?} */
        var value = control.value;
        // control value
        /** @type {?} */
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
    MatchValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[match][formControlName],[match][formControl],[match][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return MatchValidator; }), multi: true }
                    ]
                },] }
    ];
    /** @nocollapse */
    MatchValidator.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['match',] }] },
        { type: String, decorators: [{ type: Attribute, args: ['reverse',] }] }
    ]; };
    return MatchValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UppercaseDirective = /** @class */ (function () {
    function UppercaseDirective() {
        this.ngModelChange = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    UppercaseDirective.prototype.onInputChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.value = $event.target.value.toUpperCase();
        this.ngModelChange.emit(this.value);
    };
    UppercaseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngModel][uppercase]'
                },] }
    ];
    UppercaseDirective.propDecorators = {
        ngModelChange: [{ type: Output }],
        onInputChange: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return UppercaseDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlCheckbox = /** @class */ (function (_super) {
    __extends(ControlCheckbox, _super);
    function ControlCheckbox(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.schema = 'checkbox';
        _this.type = options.type || _this.type;
        return _this;
    }
    return ControlCheckbox;
}(ControlBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlEmail = /** @class */ (function (_super) {
    __extends(ControlEmail, _super);
    function ControlEmail(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.schema = 'email';
        _this.type = options.type || _this.type;
        _this.email = true;
        _this.pattern = options.pattern || '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
        return _this;
    }
    return ControlEmail;
}(ControlBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlMarkdown = /** @class */ (function (_super) {
    __extends(ControlMarkdown, _super);
    function ControlMarkdown(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.schema = 'markdown';
        _this.type = options.type || _this.type;
        return _this;
    }
    return ControlMarkdown;
}(ControlBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlNumber = /** @class */ (function (_super) {
    __extends(ControlNumber, _super);
    function ControlNumber(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.schema = 'number';
        _this.type = options.type || _this.type;
        return _this;
    }
    return ControlNumber;
}(ControlBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlPassword = /** @class */ (function (_super) {
    __extends(ControlPassword, _super);
    function ControlPassword(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.schema = 'password';
        _this.type = options.type || _this.type;
        return _this;
    }
    return ControlPassword;
}(ControlBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlRadio = /** @class */ (function (_super) {
    __extends(ControlRadio, _super);
    function ControlRadio(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.schema = 'radio';
        _this.type = options.type || _this.type;
        return _this;
    }
    return ControlRadio;
}(ControlBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlSelect = /** @class */ (function (_super) {
    __extends(ControlSelect, _super);
    function ControlSelect(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.schema = 'select';
        _this.options = [];
        _this.options = options.options || [];
        return _this;
    }
    return ControlSelect;
}(ControlBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlText = /** @class */ (function (_super) {
    __extends(ControlText, _super);
    function ControlText(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.schema = 'text';
        _this.type = options.type || _this.type;
        return _this;
    }
    return ControlText;
}(ControlBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormService = /** @class */ (function () {
    function FormService(controlService) {
        this.controlService = controlService;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    FormService.prototype.getControlsFromOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var controls = options.map(function (o) {
            switch (o.schema) {
                case 'checkbox':
                    return new ControlCheckbox(o);
                case 'email':
                    return new ControlEmail(o);
                case 'number':
                    return new ControlNumber(o);
                case 'password':
                    return new ControlPassword(o);
                case 'radio':
                    return new ControlRadio(o);
                case 'select':
                    return new ControlSelect(o);
                case 'markdown':
                    return new ControlMarkdown(o);
                case 'text':
                    return new ControlText(o);
                default:
                    return new ControlText(o);
            }
        });
        controls.sort(function (a, b) { return a.order - b.order; });
        return controls;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    FormService.prototype.getGroupFromOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var controls = this.getControlsFromOptions(options);
        /** @type {?} */
        var group = this.controlService.toFormGroup(controls);
        return group;
    };
    /**
     * @param {?} controls
     * @return {?}
     */
    FormService.prototype.getGroupFromControls = /**
     * @param {?} controls
     * @return {?}
     */
    function (controls) {
        /** @type {?} */
        var group = this.controlService.toFormGroup(controls);
        return group;
    };
    FormService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormService.ctorParameters = function () { return [
        { type: ControlService }
    ]; };
    /** @nocollapse */ FormService.ngInjectableDef = defineInjectable({ factory: function FormService_Factory() { return new FormService(inject(ControlService)); }, token: FormService, providedIn: "root" });
    return FormService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services = [
    ControlService,
    FormService,
];
/** @type {?} */
var components = [
    ControlComponent,
    ControlModuleComponent,
];
/** @type {?} */
var directives = [
    UppercaseDirective,
];
/** @type {?} */
var pipes = [];
/** @type {?} */
var validators = [
    ExistsValidator,
    MatchValidator,
];
var ControlModule = /** @class */ (function () {
    function ControlModule(parentModule) {
        if (parentModule) {
            throw new Error('ControlModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    ControlModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ControlModule,
            providers: [{
                    provide: CONTROL_CONFIG, useValue: config
                }]
        };
    };
    ControlModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CoreModule,
                    ],
                    providers: __spread(services, pipes, validators),
                    declarations: __spread(components, directives, pipes, validators),
                    exports: __spread(components, directives, pipes, validators),
                },] }
    ];
    /** @nocollapse */
    ControlModule.ctorParameters = function () { return [
        { type: ControlModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return ControlModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ValueAccessorBase = /** @class */ (function () {
    function ValueAccessorBase() {
        this.changed = new Array();
        this.touched = new Array();
    }
    Object.defineProperty(ValueAccessorBase.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.innerValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.innerValue !== value) {
                this.innerValue = value;
                this.changed.forEach(function (f) { return f(value); });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ValueAccessorBase.prototype.touch = /**
     * @return {?}
     */
    function () {
        this.touched.forEach(function (f) { return f(); });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValueAccessorBase.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.innerValue = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ValueAccessorBase.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.changed.push(fn);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ValueAccessorBase.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.touched.push(fn);
    };
    return ValueAccessorBase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ControlConfig, CONTROL_CONFIG, ControlModuleComponent, ControlModule, ControlBase, ControlBaseOptions, ControlCheckbox, ControlEmail, ControlMarkdown, ControlNumber, ControlPassword, ControlRadio, ControlSelect, ControlText, ValueAccessorBase, ControlComponent, ControlService, ExistsValidator, MatchValidator, matchValidator, UppercaseDirective, FormService };

//# sourceMappingURL=designr-control.js.map