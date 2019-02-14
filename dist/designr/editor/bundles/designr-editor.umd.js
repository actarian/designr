(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/forms'), require('@angular/animations'), require('@angular/common'), require('@angular/core'), require('@designr/core'), require('ngx-markdown'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@designr/editor', ['exports', '@angular/common/http', '@angular/forms', '@angular/animations', '@angular/common', '@angular/core', '@designr/core', 'ngx-markdown', 'rxjs/operators'], factory) :
    (factory((global.designr = global.designr || {}, global.designr.editor = {}),global.ng.common.http,global.ng.forms,global.ng.animations,global.ng.common,global.ng.core,global.core,global.ngxMarkdown,global.rxjs.operators));
}(this, (function (exports,http,forms,animations,common,i0,core,ngxMarkdown,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var EDITOR_CONFIG = new i0.InjectionToken('editor.config');
    var EditorConfig = /** @class */ (function () {
        function EditorConfig(options) {
            console.log('EditorConfig', options);
            if (options) {
                this.enabled = options.enabled || false;
            }
        }
        return EditorConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditorService = /** @class */ (function () {
        function EditorService(options) {
            console.log('EditorService', options);
            options = options || {};
            this.options = new EditorConfig(options);
        }
        EditorService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EditorService.ctorParameters = function () {
            return [
                { type: EditorConfig, decorators: [{ type: i0.Inject, args: [EDITOR_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ EditorService.ngInjectableDef = i0.defineInjectable({ factory: function EditorService_Factory() { return new EditorService(i0.inject(EDITOR_CONFIG)); }, token: EditorService, providedIn: "root" });
        return EditorService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditorModuleComponent = /** @class */ (function () {
        function EditorModuleComponent() {
            this.version = '0.0.2';
        }
        /**
         * @return {?}
         */
        EditorModuleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        EditorModuleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'editor-module',
                        template: "<span class=\"editor-module\">editor {{version}}</span>"
                    }] }
        ];
        /** @nocollapse */
        EditorModuleComponent.ctorParameters = function () { return []; };
        return EditorModuleComponent;
    }());

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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditorComponent = /** @class */ (function (_super) {
        __extends(EditorComponent, _super);
        function EditorComponent(platformId, config, configService, markdownService, formService, pageResolverService) {
            var _this = _super.call(this) || this;
            _this.platformId = platformId;
            _this.config = config;
            _this.configService = configService;
            _this.markdownService = markdownService;
            _this.formService = formService;
            _this.pageResolverService = pageResolverService;
            _this.editing = false;
            _this.busy = false;
            _this.submitted = false;
            return _this;
        }
        Object.defineProperty(EditorComponent.prototype, "page", {
            get: /**
             * @return {?}
             */ function () {
                return this._page;
            },
            set: /**
             * @param {?} page
             * @return {?}
             */ function (page) {
                var _this = this;
                this._pageCopy = Object.assign({}, page);
                this._page = page;
                if (this._page) {
                    this.controls = this.formService.getControlsFromOptions(this.getControlsByPage(page));
                    this.group = this.formService.getGroupFromControls(this.controls);
                    this.group.valueChanges.subscribe(function (x) {
                        _this.onAssign(x); // Object.assign(this._page, x);
                    });
                }
                else {
                    this.controls = [];
                    this.group = null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "componentName", {
            get: /**
             * @return {?}
             */ function () {
                if (this._page) {
                    /** @type {?} */
                    var component = this.configService.options.pages[this._page.component];
                    if (component) {
                        return component.name;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} page
         * @return {?}
         */
        EditorComponent.prototype.getControlsByPage = /**
         * @param {?} page
         * @return {?}
         */
            function (page) {
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
        /**
         * @return {?}
         */
        EditorComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (common.isPlatformBrowser(this.platformId)) {
                    this.pageResolverService.events$.pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (resolver) {
                        // console.log('EditorComponent.resolver', resolver);
                        _this.page = resolver ? resolver.page : null;
                    });
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        EditorComponent.prototype.onKeydown = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.key === 'e' && e.ctrlKey) {
                    this.editing = this.config.enabled && !this.editing;
                    this.editing = !this.editing;
                    // console.log('AppComponent.document:keydown', e.key, e.ctrlKey, e.altKey, e.code);
                }
            };
        /**
         * @return {?}
         */
        EditorComponent.prototype.onReset = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // console.log('EditorComponent.onReset');
                Object.keys(this.group.controls).forEach(function (key) {
                    _this.group.get(key).setValue(_this._pageCopy[key]);
                });
                /*
                const keys = this.controls.map(x => x.key);
                keys.forEach(k => {
                    // console.log(k, this._page[k], this._pageCopy[k]);
                    this._page[k] = this._pageCopy[k];
                });
                */
            };
        /**
         * @param {?} model
         * @return {?}
         */
        EditorComponent.prototype.onSubmit = /**
         * @param {?} model
         * @return {?}
         */
            function (model) {
                // console.log('EditorComponent.onSubmit', model);
                this.onAssign(model);
                // Object.assign(this._page, model);
            };
        /**
         * @param {?} model
         * @return {?}
         */
        EditorComponent.prototype.onAssign = /**
         * @param {?} model
         * @return {?}
         */
            function (model) {
                var _this = this;
                Object.keys(this.group.controls).forEach(function (key) {
                    switch (key) {
                        case 'description':
                            _this._page[key] = _this.markdownService.compile(model[key]);
                            break;
                        default:
                            _this._page[key] = model[key];
                    }
                });
            };
        EditorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'core-editor',
                        template: "<ng-container>\n\t<div class=\"page--editor\" [@openClose]=\"editing ? 'open' : 'closed'\" (clickOutside)=\"editing = false\">\n\t\t<ng-container *ngIf=\"editing && page\">\n\t\t\t<form class=\"form\" name=\"group\" [formGroup]=\"group\" (ngSubmit)=\"group.valid && onSubmit(group.value)\" #form=\"ngForm\" role=\"form\" novalidate autocomplete=\"off\">\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<span class=\"id\">{{page.id}}</span>\n\t\t\t\t\t<span class=\"status\" [ngClass]=\"{ active: page.active }\">{{page.active ? 'active' : 'inactive'}}</span>\n\t\t\t\t\t<span class=\"component\">{{componentName}}</span>\n\t\t\t\t</div>\n\t\t\t\t<hr>\n\t\t\t\t<h2 class=\"h1\" [innerHTML]=\"page.title\"></h2>\n\t\t\t\t<!--\n\t\t\t\t<p [innerHTML]=\"page.description\"></p>\n\t\t\t\t-->\n\t\t\t\t<hr>\n\t\t\t\t<!--\n\t\t\t\t<div class=\"fieldset\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Label</label>\n\t\t\t\t\t\t<input placeholder=\"placeholder\" type=\"text\" class=\"form-control\" required [(ngModel)]=\"model.title\" name=\"title\" #title=\"ngModel\" autocomplete=\"title\">\n\t\t\t\t\t\t<div *ngIf=\"title.invalid && (form.submitted || title.dirty || title.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div *ngIf=\"title.errors.required\">{{ 'errors.required' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t-->\n\t\t\t\t<div *ngFor=\"let control of controls\">\n\t\t\t\t\t<core-control [control]=\"control\" [form]=\"group\"></core-control>\n\t\t\t\t</div>\n\t\t\t\t<!-- <control-editable formControlName=\"email\"></control-editable> -->\n\t\t\t\t<div class=\"action-bar\">\n\t\t\t\t\t<button type=\"text\" class=\"btn btn--dimmed\" [disabled]=\"submitted || !group.valid\" (click)=\"onReset()\" title=\"Annulla\"><span>Annulla</span></button>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"submitted || !group.valid\" [ngClass]=\"{ 'btn--busy': busy }\" title=\"Salva\"><span>Salva</span></button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</ng-container>\n\t</div>\n</ng-container>\n",
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
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        styles: [":host form{margin:0}:host label{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}.page--editor{position:fixed;top:0;right:0;width:320px;height:100vh;padding:15px;overflow-x:hidden;overflow-y:auto;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}.page--editor .h1{color:#55555a}@media (max-width:1024px){.page--editor{display:none}}.id{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active{background:green;color:#fff}.component{display:inline-block;font-size:14px;font-style:italic}::-webkit-scrollbar{width:0}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:0 0}::-webkit-scrollbar-thumb:hover{background:0 0}"]
                    }] }
        ];
        /** @nocollapse */
        EditorComponent.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: EditorConfig, decorators: [{ type: i0.Inject, args: [EDITOR_CONFIG,] }] },
                { type: core.ConfigService },
                { type: ngxMarkdown.MarkdownService },
                { type: core.FormService },
                { type: core.PageResolverService }
            ];
        };
        EditorComponent.propDecorators = {
            onKeydown: [{ type: i0.HostListener, args: ['document:keydown', ['$event'],] }]
        };
        return EditorComponent;
    }(core.DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var modules = [
        ngxMarkdown.MarkdownModule,
        core.CoreModule,
    ];
    /** @type {?} */
    var services = [
        EditorService,
    ];
    /** @type {?} */
    var components = [
        EditorModuleComponent,
        EditorComponent,
    ];
    var ɵ0 = {
    // gfm: true,
    // tables: true,
    // breaks: true,
    // pedantic: true,
    // sanitize: true,
    // smartLists: true,
    // smartypants: true,
    };
    var EditorModule = /** @class */ (function () {
        function EditorModule(parentModule) {
            if (parentModule) {
                throw new Error('EditorModule is already loaded. Import it in the AppModule only');
            }
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        EditorModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: EditorModule,
                    providers: [
                        { provide: EDITOR_CONFIG, useValue: config || {} },
                    ]
                };
            };
        EditorModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            ngxMarkdown.MarkdownModule.forRoot({
                                markedOptions: {
                                    provide: ngxMarkdown.MarkedOptions,
                                    useValue: ɵ0,
                                },
                            }),
                            core.CoreModule,
                        ],
                        providers: __spread(services),
                        declarations: __spread(components),
                        exports: __spread(modules, components),
                    },] }
        ];
        /** @nocollapse */
        EditorModule.ctorParameters = function () {
            return [
                { type: EditorModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
            ];
        };
        return EditorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.HTTP_INTERCEPTORS = http.HTTP_INTERCEPTORS;
    exports.FormsModule = forms.FormsModule;
    exports.ReactiveFormsModule = forms.ReactiveFormsModule;
    exports.CommonModule = common.CommonModule;
    exports.NgModule = i0.NgModule;
    exports.Optional = i0.Optional;
    exports.SkipSelf = i0.SkipSelf;
    exports.Type = i0.Type;
    exports.MarkdownModule = ngxMarkdown.MarkdownModule;
    exports.MarkedOptions = ngxMarkdown.MarkedOptions;
    exports.EditorConfig = EditorConfig;
    exports.EDITOR_CONFIG = EDITOR_CONFIG;
    exports.EditorService = EditorService;
    exports.EditorModuleComponent = EditorModuleComponent;
    exports.EditorModule = EditorModule;
    exports.EditorComponent = EditorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=designr-editor.umd.js.map