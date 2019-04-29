(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/common/http'), require('@designr/core'), require('rxjs'), require('rxjs/operators'), require('@angular/forms'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@designr/control', ['exports', '@angular/common', '@angular/common/http', '@designr/core', 'rxjs', 'rxjs/operators', '@angular/forms', '@angular/core'], factory) :
    (factory((global.designr = global.designr || {}, global.designr.control = {}),global.ng.common,global.ng.common.http,global.core,global.rxjs,global.rxjs.operators,global.ng.forms,global.ng.core));
}(this, (function (exports,common,http,core,rxjs,operators,forms,i0) { 'use strict';

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
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ ControlOption = /** @class */ (function () {
        function ControlOption(options) {
            this.schema = 'text';
            if (options) {
                Object.assign(this, options);
            }
            /*
            const name = `${options.key || 'Control'} ${++UNIQUE_ID}`;
            this.label = this.label || name;
            this.placeholder = this.placeholder || name;
            this.order = this.order === undefined ? 1 : this.order;
            this.schema = this.schema || 'text';
            this.type = this.type || this.schema;
            */
        }
        return ControlOption;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlCheckbox = /** @class */ (function (_super) {
        __extends(ControlCheckbox, _super);
        function ControlCheckbox() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'checkbox';
            return _this;
        }
        return ControlCheckbox;
    }(ControlOption));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlComponent = /** @class */ (function (_super) {
        __extends(ControlComponent, _super);
        function ControlComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ControlComponent.prototype, "context", {
            get: /**
             * @return {?}
             */ function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlComponent.prototype, "control", {
            get: /**
             * @return {?}
             */ function () {
                // console.log('control', this.option.key, this.form.controls);
                return this.form.controls[this.option.key];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlComponent.prototype, "isValid", {
            get: /**
             * @return {?}
             */ function () { return this.control.valid; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlComponent.prototype, "classes", {
            get: /**
             * @return {?}
             */ function () {
                return {
                    valid: this.control.valid,
                    invalid: this.control.invalid,
                    dirty: this.control.dirty,
                    empty: (this.control.value == null),
                    required: Boolean(this.option.required || this.option.requiredTrue),
                    disabled: this.option.disabled,
                };
            },
            enumerable: true,
            configurable: true
        });
        ControlComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'control-component',
                        template: "<ng-container [formGroup]=\"form\">\r\n\r\n\t<ng-template #controlDef let-context>\r\n\t\t<div class=\"control\" [ngClass]=\"context.classes\">\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.labelRef || labelDef; context: { $implicit: context }\"></ng-container>\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-template #labelDef let-context>\r\n\t\t<label class=\"form-label\" [attr.for]=\"context.option.key\">{{ context.option.label | label }}</label>\r\n\t</ng-template>\r\n\r\n\t<ng-template #inputDef let-context>\r\n\t\t<input class=\"form-control\" placeholder=\"{{ context.option.placeholder | label }}\" [id]=\"context.option.key\" [formControlName]=\"context.option.key\" type=\"text\">\r\n\t</ng-template>\r\n\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: context.option.minlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: context.option.maxlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-container *ngTemplateOutlet=\"controlRef || controlDef; context: { $implicit: context }\"></ng-container>\r\n\r\n</ng-container>\r\n"
                    }] }
        ];
        ControlComponent.propDecorators = {
            controlRef: [{ type: i0.ContentChild, args: ['controlRef',] }],
            labelRef: [{ type: i0.ContentChild, args: ['labelRef',] }],
            inputRef: [{ type: i0.ContentChild, args: ['inputRef',] }],
            errorRef: [{ type: i0.ContentChild, args: ['errorRef',] }],
            option: [{ type: i0.Input }],
            form: [{ type: i0.Input }]
        };
        return ControlComponent;
    }(core.DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlCheckboxComponent = /** @class */ (function (_super) {
        __extends(ControlCheckboxComponent, _super);
        function ControlCheckboxComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlCheckboxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'control-checkbox-component',
                        template: "<ng-container [formGroup]=\"form\">\r\n\t<div class=\"form-checkbox\" [ngClass]=\"classes\">\r\n\t\t<label class=\"form-label\">\r\n\t\t\t<input class=\"form-checkbox__input\" type=\"checkbox\" [id]=\"option.key\" [formControlName]=\"option.key\">\r\n\t\t\t<span class=\"form-checkbox__label\">{{ option.label | label }}</span>\r\n\t\t</label>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.requiredTrue\">{{ 'errors.required' | label }}</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n"
                    }] }
        ];
        ControlCheckboxComponent.propDecorators = {
            option: [{ type: i0.Input }]
        };
        return ControlCheckboxComponent;
    }(ControlComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlEmailComponent = /** @class */ (function (_super) {
        __extends(ControlEmailComponent, _super);
        function ControlEmailComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlEmailComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'control-email-component',
                        template: "<ng-container [formGroup]=\"form\">\r\n\r\n\t<ng-template #controlDef let-context>\r\n\t\t<div class=\"control\" [ngClass]=\"context.classes\">\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.labelRef || labelDef; context: { $implicit: context }\"></ng-container>\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-template #labelDef let-context>\r\n\t\t<label class=\"form-label\" [attr.for]=\"context.option.key\">{{ context.option.label | label }}</label>\r\n\t</ng-template>\r\n\r\n\t<ng-template #inputDef let-context>\r\n\t\t<input class=\"form-control\" placeholder=\"{{ context.option.placeholder | label }}\" [id]=\"context.option.key\" [formControlName]=\"context.option.key\" type=\"email\">\r\n\t</ng-template>\r\n\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.email\">{{ 'errors.email' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: context.option.minlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: context.option.maxlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-container *ngTemplateOutlet=\"controlRef || controlDef; context: { $implicit: context }\"></ng-container>\r\n\r\n</ng-container>\r\n"
                    }] }
        ];
        ControlEmailComponent.propDecorators = {
            option: [{ type: i0.Input }]
        };
        return ControlEmailComponent;
    }(ControlComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlMarkdown = /** @class */ (function (_super) {
        __extends(ControlMarkdown, _super);
        function ControlMarkdown() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'markdown';
            return _this;
        }
        return ControlMarkdown;
    }(ControlOption));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlMarkdownComponent = /** @class */ (function (_super) {
        __extends(ControlMarkdownComponent, _super);
        function ControlMarkdownComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlMarkdownComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'control-markdown-component',
                        template: "<ng-container [formGroup]=\"form\">\r\n\t<div class=\"form-input\" [ngClass]=\"classes\">\r\n\t\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t\t<textarea class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" rows=\"4\"></textarea>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: option.minlength } }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: option.maxlength } }}</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n"
                    }] }
        ];
        ControlMarkdownComponent.propDecorators = {
            option: [{ type: i0.Input }]
        };
        return ControlMarkdownComponent;
    }(ControlComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlNumber = /** @class */ (function (_super) {
        __extends(ControlNumber, _super);
        function ControlNumber() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'number';
            return _this;
        }
        return ControlNumber;
    }(ControlOption));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlNumberComponent = /** @class */ (function (_super) {
        __extends(ControlNumberComponent, _super);
        function ControlNumberComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlNumberComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'control-number-component',
                        template: "<ng-container [formGroup]=\"form\">\r\n\t<div class=\"form-input\" [ngClass]=\"classes\">\r\n\t\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t\t<input class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" type=\"number\" [attr.step]=\"option.step\">\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.min\">{{ 'errors.min' | label : null : { min: option.min } }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.max\">{{ 'errors.max' | label : null : { max: option.max } }}</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n"
                    }] }
        ];
        ControlNumberComponent.propDecorators = {
            option: [{ type: i0.Input }]
        };
        return ControlNumberComponent;
    }(ControlComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlPassword = /** @class */ (function (_super) {
        __extends(ControlPassword, _super);
        function ControlPassword() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'password';
            return _this;
        }
        return ControlPassword;
    }(ControlOption));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlPasswordComponent = /** @class */ (function (_super) {
        __extends(ControlPasswordComponent, _super);
        function ControlPasswordComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.reveal = { checked: false };
            return _this;
        }
        ControlPasswordComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'control-password-component',
                        template: "<ng-container [formGroup]=\"form\">\r\n\t<div class=\"form-input\" [ngClass]=\"classes\">\r\n\t\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<input class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" type=\"password\" #password>\r\n\t\t\t<input class=\"form-control--addon\" type=\"checkbox\" [attr.aria-label]=\"option.label | label\" (input)=\"password.setAttribute('type', reveal.checked ? 'text' : 'password')\" #reveal>\r\n\t\t</div>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: option.minlength } }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: option.maxlength } }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n"
                    }] }
        ];
        ControlPasswordComponent.propDecorators = {
            option: [{ type: i0.Input }]
        };
        return ControlPasswordComponent;
    }(ControlComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlRadio = /** @class */ (function (_super) {
        __extends(ControlRadio, _super);
        function ControlRadio() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'radio';
            return _this;
        }
        return ControlRadio;
    }(ControlOption));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlRadioComponent = /** @class */ (function (_super) {
        __extends(ControlRadioComponent, _super);
        function ControlRadioComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlRadioComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'control-radio-component',
                        template: "<ng-container [formGroup]=\"form\">\r\n\t<div class=\"form-radio\" [ngClass]=\"classes\">\r\n\t\t<label class=\"form-label\">\r\n\t\t\t<input class=\"form-radio__input\" type=\"radio\" [id]=\"option.key\" [formControlName]=\"option.key\">\r\n\t\t\t<span class=\"form-radio__label\">{{ option.label | label }}</span>\r\n\t\t</label>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n"
                    }] }
        ];
        ControlRadioComponent.propDecorators = {
            option: [{ type: i0.Input }]
        };
        return ControlRadioComponent;
    }(ControlComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlSelect = /** @class */ (function (_super) {
        __extends(ControlSelect, _super);
        function ControlSelect() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'select';
            return _this;
        }
        return ControlSelect;
    }(ControlOption));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlSelectComponent = /** @class */ (function (_super) {
        __extends(ControlSelectComponent, _super);
        function ControlSelectComponent() {
            var _this = _super.call(this) || this;
            _this.options = [];
            _this.getValue = _this.getValue_.bind(_this);
            _this.compareWith = _this.compareWith_.bind(_this);
            return _this;
        }
        /**
         * @return {?}
         */
        ControlSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.options$().pipe(operators.takeUntil(this.unsubscribe)).subscribe(( /**
                 * @param {?} options
                 * @return {?}
                 */function (options) { return _this.options = options; }));
            };
        /**
         * @return {?}
         */
        ControlSelectComponent.prototype.options$ = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
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
        /**
         * @param {?} item
         * @return {?}
         */
        ControlSelectComponent.prototype.getValue_ = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                return this.option.asObject ? item : item.id;
            };
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        ControlSelectComponent.prototype.compareWith_ = /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
            function (a, b) {
                if (this.option.asObject) {
                    a = ( /** @type {?} */(a));
                    b = ( /** @type {?} */(b));
                    // b = (b as ControlSelectOption) || { id: null, name: 'Any' };
                    // console.log(a, b);
                    return b ? a.id === b.id : a.id === null;
                }
                else {
                    return b ? a === b : a === null;
                }
            };
        ControlSelectComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'control-select-component',
                        template: "<ng-container [formGroup]=\"form\">\r\n\t<div class=\"form-select\" [ngClass]=\"classes\">\r\n\t\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t\t<div class=\"form-select__select\">\r\n\t\t\t<select [id]=\"option.key\" [formControlName]=\"option.key\" [compareWith]=\"compareWith\">\r\n\t\t\t\t<option *ngFor=\"let item of options\" [ngValue]=\"getValue(item)\">{{item?.name}}</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n"
                    }] }
        ];
        /** @nocollapse */
        ControlSelectComponent.ctorParameters = function () { return []; };
        ControlSelectComponent.propDecorators = {
            option: [{ type: i0.Input }]
        };
        return ControlSelectComponent;
    }(ControlComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlText = /** @class */ (function (_super) {
        __extends(ControlText, _super);
        function ControlText() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'text';
            return _this;
        }
        return ControlText;
    }(ControlOption));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlTextComponent = /** @class */ (function (_super) {
        __extends(ControlTextComponent, _super);
        function ControlTextComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlTextComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'control-text-component',
                        template: "<ng-container [formGroup]=\"form\">\r\n\r\n\t<ng-template #controlDef let-context>\r\n\t\t<div class=\"control\" [ngClass]=\"context.classes\">\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.labelRef || labelDef; context: { $implicit: context }\"></ng-container>\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t\t\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-template #labelDef let-context>\r\n\t\t<label class=\"form-label\" [attr.for]=\"context.option.key\">{{ context.option.label | label }}</label>\r\n\t</ng-template>\r\n\r\n\t<ng-template #inputDef let-context>\r\n\t\t<input class=\"form-control\" placeholder=\"{{ context.option.placeholder | label }}\" [id]=\"context.option.key\" [formControlName]=\"context.option.key\" type=\"text\">\r\n\t</ng-template>\r\n\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: context.option.minlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: context.option.maxlength } }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t\t<div *ngIf=\"context.control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-container *ngTemplateOutlet=\"controlRef || controlDef; context: { $implicit: context }\"></ng-container>\r\n\r\n</ng-container>\r\n"
                    }] }
        ];
        ControlTextComponent.propDecorators = {
            option: [{ type: i0.Input }]
        };
        return ControlTextComponent;
    }(ControlComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlTextarea = /** @class */ (function (_super) {
        __extends(ControlTextarea, _super);
        function ControlTextarea() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.schema = 'textarea';
            return _this;
        }
        return ControlTextarea;
    }(ControlOption));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlTextareaComponent = /** @class */ (function (_super) {
        __extends(ControlTextareaComponent, _super);
        function ControlTextareaComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlTextareaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'control-textarea-component',
                        template: "<ng-container [formGroup]=\"form\">\r\n\t<div class=\"form-input\" [ngClass]=\"classes\">\r\n\t\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t\t<textarea class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" rows=\"4\"></textarea>\r\n\t\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: option.minlength } }}</div>\r\n\t\t\t<div *ngIf=\"control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: option.maxlength } }}</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n"
                    }] }
        ];
        ControlTextareaComponent.propDecorators = {
            option: [{ type: i0.Input }]
        };
        return ControlTextareaComponent;
    }(ControlComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var entryComponents = [
        ControlCheckboxComponent,
        ControlEmailComponent,
        ControlMarkdownComponent,
        ControlNumberComponent,
        ControlPasswordComponent,
        ControlRadioComponent,
        ControlSelectComponent,
        ControlTextComponent,
        ControlTextareaComponent,
    ];
    /** @type {?} */
    var controls = {
        'checkbox': {
            component: ControlCheckboxComponent,
            model: ControlCheckbox
        },
        'email': {
            component: ControlEmailComponent,
            model: ControlEmail
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
                this.controls = __assign({}, controls, (options.controls || {}));
            }
        }
        return ControlConfig;
    }());
    /** @type {?} */
    var CONTROL_CONFIG = new i0.InjectionToken('control.config');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlModuleComponent = /** @class */ (function () {
        function ControlModuleComponent() {
            this.version = '0.0.7';
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
            { type: i0.Component, args: [{
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} otherKey
     * @param {?=} reverse
     * @param {?=} group
     * @return {?}
     */
    function matchValidator(otherKey, reverse, group) {
        if (reverse === void 0) {
            reverse = false;
        }
        return ( /**
         * @param {?} control
         * @return {?}
         */function (control) {
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
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlService = /** @class */ (function () {
        function ControlService(options) {
            // console.log('ControlService', options);
            this.options = new ControlConfig(options || {});
        }
        /**
         * @param {?} options
         * @return {?}
         */
        ControlService.prototype.resolve = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                /** @type {?} */
                var component;
                if (options) {
                    component = this.options.controls[options.schema].component || ControlComponent;
                }
                else {
                    component = ControlComponent;
                }
                return component;
            };
        /**
         * @param {?} options
         * @param {?} group
         * @return {?}
         */
        ControlService.prototype.getValidators = /**
         * @param {?} options
         * @param {?} group
         * @return {?}
         */
            function (options, group) {
                /** @type {?} */
                var validators = [];
                if (options.min) {
                    validators.push(forms.Validators.min(options.min));
                }
                if (options.max) {
                    validators.push(forms.Validators.max(options.max));
                }
                if (options.required) {
                    validators.push(forms.Validators.required);
                }
                if (options.requiredTrue) {
                    validators.push(forms.Validators.requiredTrue);
                }
                if (options.minlength) {
                    validators.push(forms.Validators.minLength(options.minlength));
                }
                if (options.maxlength) {
                    validators.push(forms.Validators.maxLength(options.maxlength));
                }
                if (options.pattern) {
                    validators.push(forms.Validators.pattern(options.pattern));
                }
                if (options.match) {
                    validators.push(matchValidator(options.match, options.reverse, group));
                }
                if (options.schema === 'email') {
                    validators.push(forms.Validators.email);
                }
                // console.log(options.key, validators);
                return validators;
            };
        /**
         * @param {?} options
         * @return {?}
         */
        ControlService.prototype.toFormGroup = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                var _this = this;
                /** @type {?} */
                var controls$$1 = {};
                options.forEach(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) {
                    // group[x.key] = new FormControl(x.value, this.getValidators(x, group));
                    /** @type {?} */
                    var control = new forms.FormControl(x.value);
                    if (x.disabled) {
                        control.disable();
                    }
                    controls$$1[x.key] = control;
                    // x.setControl(control); // !!!
                }));
                /** @type {?} */
                var group = new forms.FormGroup(controls$$1);
                // console.log(group);
                options.forEach(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) {
                    /** @type {?} */
                    var validators = _this.getValidators(x, group);
                    // console.log(validators);
                    group.controls[x.key].setValidators(validators);
                }));
                return group;
            };
        ControlService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ControlService.ctorParameters = function () {
            return [
                { type: ControlConfig, decorators: [{ type: i0.Inject, args: [CONTROL_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ ControlService.ngInjectableDef = i0.defineInjectable({ factory: function ControlService_Factory() { return new ControlService(i0.inject(CONTROL_CONFIG)); }, token: ControlService, providedIn: "root" });
        return ControlService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlOutletComponent = /** @class */ (function () {
        function ControlOutletComponent(componentFactoryResolver, controlService) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.controlService = controlService;
        }
        Object.defineProperty(ControlOutletComponent.prototype, "classes", {
            get: /**
             * @return {?}
             */ function () {
                // console.log('control', this.option.key, this.form.controls);
                return this.componentRef ? this.componentRef.instance.classes : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlOutletComponent.prototype, "control", {
            get: /**
             * @return {?}
             */ function () {
                // console.log('control', this.option.key, this.form.controls);
                return this.componentRef ? this.componentRef.instance.control : null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ControlOutletComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var component = this.controlService.resolve(this.option);
                /** @type {?} */
                var factory = this.componentFactoryResolver.resolveComponentFactory(component);
                this.viewContainerRef.clear();
                /** @type {?} */
                var componentRef = this.viewContainerRef.createComponent(factory);
                /** @type {?} */
                var instance = componentRef.instance;
                instance.option = this.option;
                instance.form = this.form;
                if (typeof instance['ControlInit'] === 'function') {
                    instance['ControlInit']();
                }
                this.componentRef = componentRef;
            };
        /**
         * @return {?}
         */
        ControlOutletComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.componentRef.destroy();
            };
        ControlOutletComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'control-outlet',
                        template: "\n\t<!--\n\t<div class=\"control\" [ngClass]=\"classes\">\n\t\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\n\t\t<input class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" type=\"text\">\n\t</div>\n\t-->\n\t<!-- [formControlName]=\"option.key\" -->\n\t<ng-template #outlet></ng-template>\n\t"
                    }] }
        ];
        /** @nocollapse */
        ControlOutletComponent.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: ControlService }
            ];
        };
        ControlOutletComponent.propDecorators = {
            option: [{ type: i0.Input }],
            form: [{ type: i0.Input }],
            viewContainerRef: [{ type: i0.ViewChild, args: ['outlet', { read: i0.ViewContainerRef },] }]
        };
        return ControlOutletComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        // tslint:disable-next-line:no-use-before-declare
        useExisting: i0.forwardRef(( /**
         * @return {?}
         */function () { return ControlAccessor; })),
        multi: true
    };
    /**
     * @template T
     */
    var ControlAccessor = /** @class */ (function () {
        function ControlAccessor(renderer, element) {
            this.renderer = renderer;
            this.element = element;
            this.onChange = ( /**
             * @param {?} value
             * @return {?}
             */function (value) { });
            this.onTouched = ( /**
             * @return {?}
             */function () { });
        }
        /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        ControlAccessor.prototype.formatValue = /**
         * @protected
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return value.toString();
            };
        /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        ControlAccessor.prototype.parseValue = /**
         * @protected
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return value && value !== '' ? value : null;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ControlAccessor.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var formattedValue = this.formatValue(value);
                this.renderer.setProperty(this.element.nativeElement, 'value', formattedValue);
            };
        /**
         * @param {?} callback
         * @return {?}
         */
        ControlAccessor.prototype.registerOnChange = /**
         * @param {?} callback
         * @return {?}
         */
            function (callback) {
                var _this = this;
                this.onChange = ( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) {
                    /** @type {?} */
                    var parsedValue = _this.parseValue(value);
                    /** @type {?} */
                    var formattedValue = _this.formatValue(parsedValue);
                    _this.renderer.setProperty(_this.element.nativeElement, 'value', formattedValue);
                    callback(parsedValue);
                });
            };
        /**
         * @param {?} callback
         * @return {?}
         */
        ControlAccessor.prototype.registerOnTouched = /**
         * @param {?} callback
         * @return {?}
         */
            function (callback) {
                this.onTouched = callback;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        ControlAccessor.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
            };
        ControlAccessor.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'input[designr-accessor][formControlName],input[designr-accessor][formControl],input[designr-accessor][ngModel]',
                        // tslint:disable-next-line:use-host-property-decorator
                        host: {
                            '(change)': 'onChange($event.target.value)',
                            '(input)': 'onChange($event.target.value)',
                            '(blur)': 'onTouched()'
                        },
                        providers: [CONTROL_VALUE_ACCESSOR]
                    },] }
        ];
        /** @nocollapse */
        ControlAccessor.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        return ControlAccessor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlsComponent = /** @class */ (function (_super) {
        __extends(ControlsComponent, _super);
        function ControlsComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControlsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'controls-component',
                        template: "<ng-container *ngFor=\"let option of options\">\n\t<control-outlet class=\"form-group\" [option]=\"option\" [form]=\"form\"></control-outlet>\n</ng-container>"
                    }] }
        ];
        ControlsComponent.propDecorators = {
            options: [{ type: i0.Input }],
            form: [{ type: i0.Input }]
        };
        return ControlsComponent;
    }(core.DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEBOUNCE_TIME = 250;
    var ExistsValidator = /** @class */ (function () {
        function ExistsValidator() {
            var _this = this;
            this.values = new rxjs.BehaviorSubject(null);
            this.debounced$ = this.values.pipe(operators.debounceTime(DEBOUNCE_TIME), operators.switchMap(( /**
             * @param {?} value
             * @return {?}
             */function (value) {
                // console.log('ExistsValidator.debounced$', value);
                return _this.exists$(value);
            })), operators.catchError(( /**
             * @param {?} response
             * @return {?}
             */function (response) {
                console.log('ExistsValidator.debounced$.catchError', response);
                return rxjs.of(null);
            })), operators.take(1));
        }
        Object.defineProperty(ExistsValidator.prototype, "value", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                    return this.exists(value).pipe(operators.switchMap(( /**
                     * @param {?} exists
                     * @return {?}
                     */function (exists) {
                        if (exists) {
                            return rxjs.of({
                                exists: true,
                            });
                        }
                        else {
                            return rxjs.of(null);
                        }
                    })));
                }
                else {
                    return rxjs.of(null);
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
            { type: i0.Directive, args: [{
                        selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                        providers: [
                            { provide: forms.NG_ASYNC_VALIDATORS, useExisting: i0.forwardRef(( /**
                                     * @return {?}
                                     */function () { return ExistsValidator; })), multi: true },
                        ]
                    },] }
        ];
        ExistsValidator.propDecorators = {
            exists: [{ type: i0.Input }]
        };
        return ExistsValidator;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
             */ function () {
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
            { type: i0.Directive, args: [{
                        selector: '[match][formControlName],[match][formControl],[match][ngModel]',
                        providers: [
                            { provide: forms.NG_VALIDATORS, useExisting: i0.forwardRef(( /**
                                     * @return {?}
                                     */function () { return MatchValidator; })), multi: true }
                        ]
                    },] }
        ];
        /** @nocollapse */
        MatchValidator.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Attribute, args: ['match',] }] },
                { type: String, decorators: [{ type: i0.Attribute, args: ['reverse',] }] }
            ];
        };
        return MatchValidator;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UppercaseDirective = /** @class */ (function () {
        function UppercaseDirective() {
            this.ngModelChange = new i0.EventEmitter();
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
            { type: i0.Directive, args: [{
                        selector: '[ngModel][uppercase]'
                    },] }
        ];
        UppercaseDirective.propDecorators = {
            ngModelChange: [{ type: i0.Output }],
            onInputChange: [{ type: i0.HostListener, args: ['input', ['$event'],] }]
        };
        return UppercaseDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormService = /** @class */ (function () {
        function FormService(controlService) {
            this.controlService = controlService;
        }
        /**
         * @param {?} options
         * @return {?}
         */
        FormService.prototype.getFormGroup = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                return this.controlService.toFormGroup(options);
            };
        /**
         * @param {?} data
         * @return {?}
         */
        FormService.prototype.getOptions = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                /** @type {?} */
                var options = data.map(( /**
                 * @param {?} o
                 * @return {?}
                 */function (o) {
                    /** @type {?} */
                    var control = _this.controlService.options.controls[o.schema];
                    if (control) {
                        /** @type {?} */
                        var optionModel = control.model;
                        return new optionModel(o);
                    }
                    else {
                        console.error("missing option for key " + o.schema);
                        return null;
                    }
                })).filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x; }));
                options.sort(( /**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */function (a, b) { return a.order - b.order; }));
                return options;
            };
        /**
         * @param {?} options
         * @return {?}
         */
        FormService.prototype.getFormGroupFromOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                return this.getFormGroup(this.getOptions(options));
            };
        FormService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FormService.ctorParameters = function () {
            return [
                { type: ControlService }
            ];
        };
        /** @nocollapse */ FormService.ngInjectableDef = i0.defineInjectable({ factory: function FormService_Factory() { return new FormService(i0.inject(ControlService)); }, token: FormService, providedIn: "root" });
        return FormService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services = [
        ControlService,
        FormService,
    ];
    /** @type {?} */
    var components = __spread([
        ControlsComponent,
        ControlModuleComponent,
        ControlOutletComponent,
        ControlComponent
    ], entryComponents);
    /** @type {?} */
    var directives = [
        UppercaseDirective,
        ControlAccessor,
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
            /*
            if (parentModule) {
                throw new Error('ControlModule is already loaded. Import it in the AppModule only');
            }
            */
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            core.CoreModule,
                        ],
                        providers: __spread(services, pipes, validators),
                        declarations: __spread(components, directives, pipes, validators),
                        entryComponents: __spread(entryComponents),
                        exports: __spread(components, directives, pipes, validators),
                    },] }
        ];
        /** @nocollapse */
        ControlModule.ctorParameters = function () {
            return [
                { type: ControlModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
            ];
        };
        return ControlModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ControlConfig = ControlConfig;
    exports.CONTROL_CONFIG = CONTROL_CONFIG;
    exports.ControlModuleComponent = ControlModuleComponent;
    exports.ControlModule = ControlModule;
    exports.ControlCheckbox = ControlCheckbox;
    exports.ControlCheckboxComponent = ControlCheckboxComponent;
    exports.ControlOption = ControlOption;
    exports.ControlOutletComponent = ControlOutletComponent;
    exports.ControlAccessor = ControlAccessor;
    exports.ControlComponent = ControlComponent;
    exports.ControlService = ControlService;
    exports.ControlsComponent = ControlsComponent;
    exports.ControlEmail = ControlEmail;
    exports.ControlEmailComponent = ControlEmailComponent;
    exports.ControlMarkdown = ControlMarkdown;
    exports.ControlMarkdownComponent = ControlMarkdownComponent;
    exports.ControlNumber = ControlNumber;
    exports.ControlNumberComponent = ControlNumberComponent;
    exports.ControlPassword = ControlPassword;
    exports.ControlPasswordComponent = ControlPasswordComponent;
    exports.ControlRadio = ControlRadio;
    exports.ControlRadioComponent = ControlRadioComponent;
    exports.ControlSelect = ControlSelect;
    exports.ControlSelectComponent = ControlSelectComponent;
    exports.ControlText = ControlText;
    exports.ControlTextComponent = ControlTextComponent;
    exports.ControlTextarea = ControlTextarea;
    exports.ControlTextareaComponent = ControlTextareaComponent;
    exports.ExistsValidator = ExistsValidator;
    exports.MatchValidator = MatchValidator;
    exports.matchValidator = matchValidator;
    exports.UppercaseDirective = UppercaseDirective;
    exports.FormService = FormService;
    exports.ɵa = entryComponents;
    exports.ɵb = CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=designr-control.umd.js.map