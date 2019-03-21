(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@designr/control'), require('@designr/page'), require('ngx-markdown'), require('rxjs/operators'), require('@angular/common'), require('@angular/animations'), require('@angular/core'), require('@designr/core')) :
    typeof define === 'function' && define.amd ? define('@designr/editor', ['exports', '@angular/forms', '@designr/control', '@designr/page', 'ngx-markdown', 'rxjs/operators', '@angular/common', '@angular/animations', '@angular/core', '@designr/core'], factory) :
    (factory((global.designr = global.designr || {}, global.designr.editor = {}),global.ng.forms,global.control,global.page,global.ngxMarkdown,global.rxjs.operators,global.ng.common,global.ng.animations,global.ng.core,global.core));
}(this, (function (exports,forms,control,page,ngxMarkdown,operators,common,animations,i0,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var EDITOR_CONFIG = new i0.InjectionToken('editor.config');
    var EditorConfig = /** @class */ (function () {
        function EditorConfig(options) {
            // console.log('EditorConfig', options);
            if (options) {
                this.enabled = options.enabled || false;
            }
        }
        return EditorConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditorService = /** @class */ (function () {
        function EditorService(options) {
            // console.log('EditorService', options);
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            get: /**
             * @return {?}
             */ function () {
                return this._page;
            },
            set: /**
             * @param {?} page
             * @return {?}
             */ function (page$$1) {
                var _this = this;
                this._pageCopy = Object.assign({}, page$$1);
                this._page = page$$1;
                if (this._page) {
                    this.options = this.formService.getOptions(this.getControlsByPage(page$$1));
                    this.group = this.formService.getFormGroup(this.options);
                    this.group.valueChanges.subscribe(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) {
                        _this.onAssign(x); // Object.assign(this._page, x);
                    }));
                }
                else {
                    this.options = [];
                    this.group = null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorRootComponent.prototype, "componentName", {
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
        EditorRootComponent.prototype.getControlsByPage = /**
         * @param {?} page
         * @return {?}
         */
            function (page$$1) {
                return page$$1 ? Object.keys(page$$1).filter(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) { return typeof page$$1[key] !== 'object'; })).map(( /**
                 * @param {?} key
                 * @param {?} i
                 * @return {?}
                 */function (key, i) {
                    return {
                        key: key,
                        value: page$$1[key],
                        schema: key === 'description' ? 'markdown' : 'text',
                        label: key,
                        placeholder: key,
                        required: false,
                        order: i + 1
                    };
                })) : [];
            };
        /**
         * @return {?}
         */
        EditorRootComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (common.isPlatformBrowser(this.platformId)) {
                    this.pageResolverService.events$.pipe(operators.takeUntil(this.unsubscribe)).subscribe(( /**
                     * @param {?} resolver
                     * @return {?}
                     */function (resolver) {
                        // console.log('EditorRootComponent.resolver', resolver);
                        _this.page = resolver ? resolver.page : null;
                    }));
                }
            };
        /**
         * @return {?}
         */
        EditorRootComponent.prototype.onReset = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // console.log('EditorRootComponent.onReset');
                Object.keys(this.group.controls).forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) {
                    _this.group.get(key).setValue(_this._pageCopy[key]);
                }));
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
        EditorRootComponent.prototype.onSubmit = /**
         * @param {?} model
         * @return {?}
         */
            function (model) {
                // console.log('EditorRootComponent.onSubmit', model);
                this.onAssign(model);
                // Object.assign(this._page, model);
            };
        /**
         * @param {?} model
         * @return {?}
         */
        EditorRootComponent.prototype.onAssign = /**
         * @param {?} model
         * @return {?}
         */
            function (model) {
                var _this = this;
                Object.keys(this.group.controls).forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) {
                    switch (key) {
                        case 'description':
                            _this._page[key] = _this.markdownService.compile(model[key]);
                            break;
                        default:
                            _this._page[key] = model[key];
                    }
                }));
            };
        EditorRootComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'editor-root-component',
                        template: "<ng-container *ngIf=\"page\">\n\t<form class=\"form\" name=\"group\" [formGroup]=\"group\" (ngSubmit)=\"group.valid && onSubmit(group.value)\" #form=\"ngForm\" role=\"form\" novalidate autocomplete=\"off\">\n\t\t<div class=\"info\">\n\t\t\t<span class=\"id\">{{page.id}}</span>\n\t\t\t<span class=\"status\" [ngClass]=\"{ active: page.active }\">{{page.active ? 'active' : 'inactive'}}</span>\n\t\t\t<span class=\"component\">{{componentName}}</span>\n\t\t</div>\n\t\t<hr>\n\t\t<h2 class=\"h1\" [innerHTML]=\"page.title\"></h2>\n\t\t<!--\n\t\t\t\t<p [innerHTML]=\"page.description\"></p>\n\t\t\t\t-->\n\t\t<hr>\n\t\t<div *ngFor=\"let option of options\">\n\t\t\t<control-outlet class=\"form-group\" [option]=\"option\" [form]=\"group\"></control-outlet>\n\t\t</div>\n\t\t<!-- <control-editable formControlName=\"email\"></control-editable> -->\n\t\t<div class=\"action-bar\">\n\t\t\t<button type=\"text\" class=\"btn btn--secondary\" [disabled]=\"submitted || !group.valid\" (click)=\"onReset()\" title=\"Annulla\"><span>Annulla</span></button>\n\t\t\t<button type=\"submit\" class=\"btn btn--primary\" [disabled]=\"submitted || !group.valid\" [ngClass]=\"{ 'btn--busy': busy }\" title=\"Salva\"><span>Salva</span></button>\n\t\t</div>\n\t</form>\n</ng-container>\n",
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        styles: [":host{font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}.h1{color:#55555a;font-size:19px}form{margin:0}label{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}.id{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active{background:green;color:#fff}.component{display:inline-block;font-size:14px;font-style:italic}"]
                    }] }
        ];
        /** @nocollapse */
        EditorRootComponent.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: page.ConfigService },
                { type: ngxMarkdown.MarkdownService },
                { type: control.FormService },
                { type: page.PageResolverService }
            ];
        };
        return EditorRootComponent;
    }(core.DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services = [];
    /** @type {?} */
    var components = [
        EditorRootComponent,
    ];
    var ɵ0 = {
    // gfm: true,
    // tables: true,
    // breaks: true,
    // pedantic: true,
    // sanitize: true,
    // smartLists: true,
    // smartypants: true,
    }, ɵ1 = EditorRootComponent;
    var EditorBundleModule = /** @class */ (function () {
        function EditorBundleModule(parentModule) {
            if (parentModule) {
                throw new Error('EditorBundleModule is already loaded. Import it in the AppModule only');
            }
        }
        EditorBundleModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            ngxMarkdown.MarkdownModule.forRoot({
                                markedOptions: {
                                    provide: ngxMarkdown.MarkedOptions,
                                    useValue: ɵ0,
                                },
                            }),
                            core.CoreModule,
                            control.ControlModule,
                        ],
                        providers: __spread([
                            { provide: 'LAZY_ROOT_COMPONENT', useValue: ɵ1 }
                        ], services),
                        declarations: __spread([
                            EditorRootComponent
                        ], components),
                        entryComponents: [
                            EditorRootComponent,
                        ],
                        exports: __spread(components),
                    },] }
        ];
        /** @nocollapse */
        EditorBundleModule.ctorParameters = function () {
            return [
                { type: EditorBundleModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
            ];
        };
        return EditorBundleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditorModuleComponent = /** @class */ (function () {
        function EditorModuleComponent() {
            this.version = '0.0.6';
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PanelComponent = /** @class */ (function (_super) {
        __extends(PanelComponent, _super);
        function PanelComponent(platformId, config) {
            var _this = _super.call(this) || this;
            _this.platformId = platformId;
            _this.config = config;
            _this.opened = false;
            return _this;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        PanelComponent.prototype.onKeydown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.key === 'e' && event.ctrlKey) {
                    this.opened = this.config.enabled && !this.opened;
                    console.log('PanelComponent.document:keydown', this.opened);
                }
            };
        PanelComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'panel-component',
                        template: "<div class=\"panel\" [@openClose]=\"opened ? 'open' : 'closed'\" (clickOutside)=\"opened = false\">\n\t<ng-container *ngIf=\"opened\">\n\t\t<ng-container bundle=\"editor\"></ng-container>\n\t</ng-container>\n</div>\n",
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
                        styles: [".panel{position:fixed;top:0;right:0;width:320px;height:100vh;padding:15px;overflow-x:hidden;overflow-y:auto;background:#fff;z-index:100000}::-webkit-scrollbar{width:0}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:0 0}::-webkit-scrollbar-thumb:hover{background:0 0}"]
                    }] }
        ];
        /** @nocollapse */
        PanelComponent.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: EditorConfig, decorators: [{ type: i0.Inject, args: [EDITOR_CONFIG,] }] }
            ];
        };
        PanelComponent.propDecorators = {
            onKeydown: [{ type: i0.HostListener, args: ['document:keydown', ['$event'],] }]
        };
        return PanelComponent;
    }(core.DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services$1 = [
        EditorService,
    ];
    /** @type {?} */
    var components$1 = [
        EditorModuleComponent,
        PanelComponent,
    ];
    /** @type {?} */
    var directives$1 = [];
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
                        { provide: EDITOR_CONFIG, useValue: config },
                    ]
                };
            };
        EditorModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core.CoreModule,
                        ],
                        providers: __spread(services$1),
                        declarations: __spread(components$1, directives$1),
                        exports: __spread([
                            core.CoreModule
                        ], components$1),
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.MarkdownModule = ngxMarkdown.MarkdownModule;
    exports.MarkedOptions = ngxMarkdown.MarkedOptions;
    exports.EditorConfig = EditorConfig;
    exports.EDITOR_CONFIG = EDITOR_CONFIG;
    exports.EditorService = EditorService;
    exports.EditorBundleModule = EditorBundleModule;
    exports.EditorRootComponent = EditorRootComponent;
    exports.EditorModuleComponent = EditorModuleComponent;
    exports.EditorModule = EditorModule;
    exports.ɵa = PanelComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=designr-editor.umd.js.map