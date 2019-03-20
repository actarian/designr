import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DisposableComponent, CoreModule } from '@designr/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, debounceTime, switchMap, take } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, NG_VALUE_ACCESSOR, NG_ASYNC_VALIDATORS, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Input, InjectionToken, Inject, Injectable, Directive, ElementRef, forwardRef, Renderer2, ComponentFactoryResolver, ViewChild, ViewContainerRef, Attribute, EventEmitter, HostListener, Output, defineInjectable, inject, NgModule, Optional, SkipSelf } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ControlOption {
    /**
     * @param {?=} options
     */
    constructor(options) {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlCheckbox extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'checkbox';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlComponent extends DisposableComponent {
    /**
     * @return {?}
     */
    get control() {
        // console.log('control', this.option.key, this.form.controls);
        return this.form.controls[this.option.key];
    }
    /**
     * @return {?}
     */
    get isValid() { return this.control.valid; }
}
ControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t<input class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" type=\"text\">\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t</div>\r\n</ng-container>\r\n"
            }] }
];
ControlComponent.propDecorators = {
    option: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlCheckboxComponent extends ControlComponent {
}
ControlCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-checkbox-component',
                template: "<div class=\"form-checkbox\" [formGroup]=\"form\">\r\n\t<label class=\"form-label\">\r\n\t\t<input class=\"form-checkbox__input\" type=\"checkbox\" [id]=\"option.key\" [formControlName]=\"option.key\">\r\n\t\t<span class=\"form-checkbox__label\">{{ option.label | label }}</span>\r\n\t</label>\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.requiredTrue\">{{ 'errors.required' | label }}</div>\r\n\t</div>\r\n</div>\r\n"
            }] }
];
ControlCheckboxComponent.propDecorators = {
    option: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlEmail extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'email';
        this.pattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlEmailComponent extends ControlComponent {
}
ControlEmailComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-email-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t<input class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" type=\"email\">\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.email\">{{ 'errors.email' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: option.minlength } }}</div>\r\n\t\t<div *ngIf=\"control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: option.maxlength } }}</div>\r\n\t\t<div *ngIf=\"control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t</div>\r\n</ng-container>\r\n"
            }] }
];
ControlEmailComponent.propDecorators = {
    option: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlMarkdown extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'markdown';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlMarkdownComponent extends ControlComponent {
}
ControlMarkdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-markdown-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t<textarea class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" rows=\"4\"></textarea>\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: option.minlength } }}</div>\r\n\t\t<div *ngIf=\"control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: option.maxlength } }}</div>\r\n\t</div>\r\n</ng-container>\r\n"
            }] }
];
ControlMarkdownComponent.propDecorators = {
    option: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlNumber extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'number';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlNumberComponent extends ControlComponent {
}
ControlNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-number-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t<input class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" type=\"number\" [attr.step]=\"option.step\">\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.min\">{{ 'errors.min' | label : null : { min: option.min } }}</div>\r\n\t\t<div *ngIf=\"control.errors.max\">{{ 'errors.max' | label : null : { max: option.max } }}</div>\r\n\t</div>\r\n</ng-container>\r\n"
            }] }
];
ControlNumberComponent.propDecorators = {
    option: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlPassword extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'password';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlPasswordComponent extends ControlComponent {
    constructor() {
        super(...arguments);
        this.reveal = { checked: false };
    }
}
ControlPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-password-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t<div class=\"input-group\">\r\n\t\t<input class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" type=\"password\" #password>\r\n\t\t<input class=\"form-control--addon\" type=\"checkbox\" [attr.aria-label]=\"option.label | label\" (input)=\"password.setAttribute('type', reveal.checked ? 'text' : 'password')\" #reveal>\r\n\t</div>\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: option.minlength } }}</div>\r\n\t\t<div *ngIf=\"control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: option.maxlength } }}</div>\r\n\t\t<div *ngIf=\"control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t</div>\r\n</ng-container>\r\n"
            }] }
];
ControlPasswordComponent.propDecorators = {
    option: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlRadio extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'radio';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlRadioComponent extends ControlComponent {
}
ControlRadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-radio-component',
                template: "<div class=\"form-radio\" [formGroup]=\"form\">\r\n\t<label class=\"form-label\">\r\n\t\t<input class=\"form-radio__input\" type=\"radio\" [id]=\"option.key\" [formControlName]=\"option.key\">\r\n\t\t<span class=\"form-radio__label\">{{ option.label | label }}</span>\r\n\t</label>\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t</div>\r\n</div>\r\n"
            }] }
];
ControlRadioComponent.propDecorators = {
    option: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlSelect extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'select';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlSelectComponent extends ControlComponent {
}
ControlSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-select-component',
                template: "<div class=\"form-select\" [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t<select class=\"form-select__select\" [id]=\"option.key\" [formControlName]=\"option.key\">\r\n\t\t<option *ngFor=\"let item of option.options\" [ngValue]=\"item?.value\">{{item?.label}}</option>\r\n\t</select>\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t</div>\r\n</div>\r\n"
            }] }
];
ControlSelectComponent.propDecorators = {
    option: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlText extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'text';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlTextComponent extends ControlComponent {
}
ControlTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-text-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t<input class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" type=\"text\">\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: option.minlength } }}</div>\r\n\t\t<div *ngIf=\"control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: option.maxlength } }}</div>\r\n\t\t<div *ngIf=\"control.errors.pattern\">{{ 'errors.pattern' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.match\">{{ 'errors.match' | label }}</div>\r\n\t</div>\r\n</ng-container>\r\n"
            }] }
];
ControlTextComponent.propDecorators = {
    option: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlTextarea extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'textarea';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlTextareaComponent extends ControlComponent {
}
ControlTextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-textarea-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t<textarea class=\"form-control\" placeholder=\"{{ option.placeholder | label }}\" [id]=\"option.key\" [formControlName]=\"option.key\" rows=\"4\"></textarea>\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"control.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: option.minlength } }}</div>\r\n\t\t<div *ngIf=\"control.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: option.maxlength } }}</div>\r\n\t</div>\r\n</ng-container>\r\n"
            }] }
];
ControlTextareaComponent.propDecorators = {
    option: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const entryComponents = [
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
const controls = {
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
class ControlConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.controls = {};
        // console.log('ControlConfig', options);
        if (options) {
            Object.assign(this, options);
            this.controls = Object.assign({}, controls, (options.controls || {}));
        }
    }
}
/** @type {?} */
const CONTROL_CONFIG = new InjectionToken('control.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlModuleComponent {
    constructor() {
        this.version = '0.0.5';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ControlModuleComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-module',
                template: `<span class="control-module">control {{version}}</span>`
            }] }
];
/** @nocollapse */
ControlModuleComponent.ctorParameters = () => [];

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
function matchValidator(otherKey, reverse = false, group) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        /** @type {?} */
        const otherControl = group.controls[otherKey];
        /** @type {?} */
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
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlService {
    /**
     * @param {?} options
     */
    constructor(options) {
        // console.log('ControlService', options);
        this.options = new ControlConfig(options || {});
    }
    /**
     * @param {?} options
     * @return {?}
     */
    resolve(options) {
        /** @type {?} */
        let component;
        if (options) {
            component = this.options.controls[options.schema].component || ControlComponent;
        }
        else {
            component = ControlComponent;
        }
        return component;
    }
    /**
     * @param {?} options
     * @param {?} group
     * @return {?}
     */
    getValidators(options, group) {
        /** @type {?} */
        const validators = [];
        if (options.min) {
            validators.push(Validators.min(options.min));
        }
        if (options.max) {
            validators.push(Validators.max(options.max));
        }
        if (options.required) {
            validators.push(Validators.required);
        }
        if (options.requiredTrue) {
            validators.push(Validators.requiredTrue);
        }
        if (options.minlength) {
            validators.push(Validators.minLength(options.minlength));
        }
        if (options.maxlength) {
            validators.push(Validators.maxLength(options.maxlength));
        }
        if (options.pattern) {
            validators.push(Validators.pattern(options.pattern));
        }
        if (options.match) {
            validators.push(matchValidator(options.match, options.reverse, group));
        }
        if (options.schema === 'email') {
            validators.push(Validators.email);
        }
        // console.log(options.key, validators);
        return validators;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    toFormGroup(options) {
        /** @type {?} */
        const controls$$1 = {};
        options.forEach((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            // group[x.key] = new FormControl(x.value, this.getValidators(x, group));
            /** @type {?} */
            const control = new FormControl(x.value);
            if (x.disabled) {
                control.disable();
            }
            controls$$1[x.key] = control;
            // x.setControl(control); // !!!
        }));
        /** @type {?} */
        const group = new FormGroup(controls$$1);
        // console.log(group);
        options.forEach((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            /** @type {?} */
            const validators = this.getValidators(x, group);
            // console.log(validators);
            group.controls[x.key].setValidators(validators);
        }));
        return group;
    }
}
ControlService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ControlService.ctorParameters = () => [
    { type: ControlConfig, decorators: [{ type: Inject, args: [CONTROL_CONFIG,] }] }
];
/** @nocollapse */ ControlService.ngInjectableDef = defineInjectable({ factory: function ControlService_Factory() { return new ControlService(inject(CONTROL_CONFIG)); }, token: ControlService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlOutletComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} controlService
     */
    constructor(componentFactoryResolver, controlService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.controlService = controlService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const component = this.controlService.resolve(this.option);
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        /** @type {?} */
        const componentRef = this.viewContainerRef.createComponent(factory);
        /** @type {?} */
        const instance = componentRef.instance;
        instance.option = this.option;
        instance.form = this.form;
        if (typeof instance['ControlInit'] === 'function') {
            instance['ControlInit']();
        }
        this.componentRef = componentRef;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
ControlOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-outlet',
                template: '<ng-template #outlet></ng-template>'
            }] }
];
/** @nocollapse */
ControlOutletComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ControlService }
];
ControlOutletComponent.propDecorators = {
    option: [{ type: Input }],
    form: [{ type: Input }],
    viewContainerRef: [{ type: ViewChild, args: ['outlet', { read: ViewContainerRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => ControlAccessor)),
    multi: true
};
/**
 * @template T
 */
// tslint:disable-next-line:directive-class-suffix
class ControlAccessor {
    /**
     * @param {?} renderer
     * @param {?} element
     */
    constructor(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    formatValue(value) {
        return value.toString();
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    parseValue(value) {
        return value && value !== '' ? value : null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        /** @type {?} */
        const formattedValue = this.formatValue(value);
        this.renderer.setProperty(this.element.nativeElement, 'value', formattedValue);
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerOnChange(callback) {
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            /** @type {?} */
            const parsedValue = this.parseValue(value);
            /** @type {?} */
            const formattedValue = this.formatValue(parsedValue);
            this.renderer.setProperty(this.element.nativeElement, 'value', formattedValue);
            callback(parsedValue);
        });
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerOnTouched(callback) {
        this.onTouched = callback;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    }
}
ControlAccessor.decorators = [
    { type: Directive, args: [{
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
ControlAccessor.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlsComponent extends DisposableComponent {
}
ControlsComponent.decorators = [
    { type: Component, args: [{
                selector: 'controls-component',
                template: `<ng-container *ngFor="let option of options">
	<control-outlet class="form-group" [option]="option" [form]="form"></control-outlet>
</ng-container>`
            }] }
];
ControlsComponent.propDecorators = {
    options: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEBOUNCE_TIME = 250;
class ExistsValidator {
    constructor() {
        this.values = new BehaviorSubject(null);
        this.debounced$ = this.values.pipe(debounceTime(DEBOUNCE_TIME), switchMap((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            // console.log('ExistsValidator.debounced$', value);
            return this.exists$(value);
        })), catchError((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        })), take(1));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (value && value.trim() !== '') {
            this.values.next(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    exists$(value) {
        if (typeof this.exists === 'function') {
            // console.log('ExistsValidator.exists$', value);
            return this.exists(value).pipe(switchMap((/**
             * @param {?} exists
             * @return {?}
             */
            exists => {
                if (exists) {
                    return of({
                        exists: true,
                    });
                }
                else {
                    return of(null);
                }
            })));
        }
        else {
            return of(null);
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        this.value = control.value;
        return this.debounced$;
    }
}
ExistsValidator.decorators = [
    { type: Directive, args: [{
                selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                providers: [
                    { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => ExistsValidator)), multi: true },
                ]
            },] }
];
ExistsValidator.propDecorators = {
    exists: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatchValidator {
    /**
     * @param {?} match
     * @param {?} reverse
     */
    constructor(match, reverse) {
        this.match = match;
        this.reverse = reverse;
    }
    /**
     * @private
     * @return {?}
     */
    get isReverse() {
        if (!this.reverse) {
            return false;
        }
        return this.reverse === 'true' ? true : false;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        // self value
        /** @type {?} */
        const value = control.value;
        // control value
        /** @type {?} */
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
MatchValidator.decorators = [
    { type: Directive, args: [{
                selector: '[match][formControlName],[match][formControl],[match][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => MatchValidator)), multi: true }
                ]
            },] }
];
/** @nocollapse */
MatchValidator.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['match',] }] },
    { type: String, decorators: [{ type: Attribute, args: ['reverse',] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UppercaseDirective {
    constructor() {
        this.ngModelChange = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInputChange($event) {
        this.value = $event.target.value.toUpperCase();
        this.ngModelChange.emit(this.value);
    }
}
UppercaseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngModel][uppercase]'
            },] }
];
UppercaseDirective.propDecorators = {
    ngModelChange: [{ type: Output }],
    onInputChange: [{ type: HostListener, args: ['input', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormService {
    /**
     * @param {?} controlService
     */
    constructor(controlService) {
        this.controlService = controlService;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getFormGroup(options) {
        return this.controlService.toFormGroup(options);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getOptions(data) {
        /** @type {?} */
        const options = data.map((/**
         * @param {?} o
         * @return {?}
         */
        o => {
            /** @type {?} */
            const control = this.controlService.options.controls[o.schema];
            if (control) {
                /** @type {?} */
                const optionModel = control.model;
                return new optionModel(o);
            }
            else {
                console.error(`missing option for key ${o.schema}`);
                return null;
            }
        })).filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x));
        options.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.order - b.order));
        return options;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getFormGroupFromOptions(options) {
        return this.getFormGroup(this.getOptions(options));
    }
}
FormService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormService.ctorParameters = () => [
    { type: ControlService }
];
/** @nocollapse */ FormService.ngInjectableDef = defineInjectable({ factory: function FormService_Factory() { return new FormService(inject(ControlService)); }, token: FormService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [
    ControlService,
    FormService,
];
/** @type {?} */
const components = [
    ControlsComponent,
    ControlModuleComponent,
    ControlOutletComponent,
    ControlComponent,
    ...entryComponents,
];
/** @type {?} */
const directives = [
    UppercaseDirective,
    ControlAccessor,
];
/** @type {?} */
const pipes = [];
/** @type {?} */
const validators = [
    ExistsValidator,
    MatchValidator,
];
class ControlModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
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
    static forRoot(config) {
        return {
            ngModule: ControlModule,
            providers: [{
                    provide: CONTROL_CONFIG, useValue: config
                }]
        };
    }
}
ControlModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
/** @nocollapse */
ControlModule.ctorParameters = () => [
    { type: ControlModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ControlConfig, CONTROL_CONFIG, ControlModuleComponent, ControlModule, ControlCheckbox, ControlCheckboxComponent, ControlOption, ControlOutletComponent, ControlAccessor, ControlComponent, ControlService, ControlsComponent, ControlEmail, ControlEmailComponent, ControlMarkdown, ControlMarkdownComponent, ControlNumber, ControlNumberComponent, ControlPassword, ControlPasswordComponent, ControlRadio, ControlRadioComponent, ControlSelect, ControlSelectComponent, ControlText, ControlTextComponent, ControlTextarea, ControlTextareaComponent, ExistsValidator, MatchValidator, matchValidator, UppercaseDirective, FormService, entryComponents as ɵa, CONTROL_VALUE_ACCESSOR as ɵb };

//# sourceMappingURL=designr-control.js.map