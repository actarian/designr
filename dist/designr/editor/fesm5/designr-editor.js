import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService, ControlModule } from '@designr/control';
import { PageResolverService, PageService } from '@designr/page';
import { MarkdownService, MarkdownModule, MarkedOptions } from 'ngx-markdown';
export { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { __extends, __spread } from 'tslib';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { InjectionToken, Inject, Injectable, Directive, Injector, Input, NgModuleFactoryLoader, ViewContainerRef, Component, ViewEncapsulation, PLATFORM_ID, HostListener, NgModule, SystemJsNgModuleLoader, Optional, SkipSelf, defineInjectable, inject } from '@angular/core';
import { DisposableComponent, CoreModule } from '@designr/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EDITOR_CONFIG = new InjectionToken('editor.config');
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditorService = /** @class */ (function () {
    function EditorService(options) {
        // console.log('EditorService', options);
        options = options || {};
        this.options = new EditorConfig(options);
    }
    EditorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EditorService.ctorParameters = function () { return [
        { type: EditorConfig, decorators: [{ type: Inject, args: [EDITOR_CONFIG,] }] }
    ]; };
    /** @nocollapse */ EditorService.ngInjectableDef = defineInjectable({ factory: function EditorService_Factory() { return new EditorService(inject(EDITOR_CONFIG)); }, token: EditorService, providedIn: "root" });
    return EditorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditorRootComponent = /** @class */ (function (_super) {
    __extends(EditorRootComponent, _super);
    function EditorRootComponent(platformId, pageService, markdownService, formService, pageResolverService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.pageService = pageService;
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
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
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
    Object.defineProperty(EditorRootComponent.prototype, "componentName", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._page) {
                /** @type {?} */
                var component = this.pageService.options.pages[this._page.component];
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
    EditorRootComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.pageResolverService.events$.pipe(takeUntil(this.unsubscribe)).subscribe(function (resolver) {
                // console.log('EditorRootComponent.resolver', resolver);
                _this.page = resolver ? resolver.page : null;
            });
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
    EditorRootComponent.decorators = [
        { type: Component, args: [{
                    selector: 'editor-root-component',
                    template: "<ng-container *ngIf=\"page\">\n\t<form class=\"form\" name=\"group\" [formGroup]=\"group\" (ngSubmit)=\"group.valid && onSubmit(group.value)\" #form=\"ngForm\" role=\"form\" novalidate autocomplete=\"off\">\n\t\t<div class=\"info\">\n\t\t\t<span class=\"id\">{{page.id}}</span>\n\t\t\t<span class=\"status\" [ngClass]=\"{ active: page.active }\">{{page.active ? 'active' : 'inactive'}}</span>\n\t\t\t<span class=\"component\">{{componentName}}</span>\n\t\t</div>\n\t\t<hr>\n\t\t<h2 class=\"h1\" [innerHTML]=\"page.title\"></h2>\n\t\t<!--\n\t\t\t\t<p [innerHTML]=\"page.description\"></p>\n\t\t\t\t-->\n\t\t<hr>\n\t\t<!--\n\t\t\t\t<div class=\"fieldset\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Label</label>\n\t\t\t\t\t\t<input placeholder=\"placeholder\" type=\"text\" class=\"form-control\" required [(ngModel)]=\"model.title\" name=\"title\" #title=\"ngModel\" autocomplete=\"title\">\n\t\t\t\t\t\t<div *ngIf=\"title.invalid && (form.submitted || title.dirty || title.touched)\" class=\"alert alert--danger\">\n\t\t\t\t\t\t\t<div *ngIf=\"title.errors.required\">{{ 'errors.required' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t-->\n\t\t<div *ngFor=\"let control of controls\">\n\t\t\t<core-control [control]=\"control\" [form]=\"group\"></core-control>\n\t\t</div>\n\t\t<!-- <control-editable formControlName=\"email\"></control-editable> -->\n\t\t<div class=\"action-bar\">\n\t\t\t<button type=\"text\" class=\"btn btn--secondary\" [disabled]=\"submitted || !group.valid\" (click)=\"onReset()\" title=\"Annulla\"><span>Annulla</span></button>\n\t\t\t<button type=\"submit\" class=\"btn btn--primary\" [disabled]=\"submitted || !group.valid\" [ngClass]=\"{ 'btn--busy': busy }\" title=\"Salva\"><span>Salva</span></button>\n\t\t</div>\n\t</form>\n</ng-container>\n",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [":host{font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}:host .h1{color:#55555a}:host form{margin:0}:host label{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}@media (max-width:1024px){:host{display:none}}.id{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active{background:green;color:#fff}.component{display:inline-block;font-size:14px;font-style:italic}::-webkit-scrollbar{width:0}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:0 0}::-webkit-scrollbar-thumb:hover{background:0 0}"]
                }] }
    ];
    /** @nocollapse */
    EditorRootComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PageService },
        { type: MarkdownService },
        { type: FormService },
        { type: PageResolverService }
    ]; };
    return EditorRootComponent;
}(DisposableComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var EditorLazyModule = /** @class */ (function () {
    function EditorLazyModule(parentModule) {
        if (parentModule) {
            throw new Error('EditorLazyModule is already loaded. Import it in the AppModule only');
        }
    }
    EditorLazyModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MarkdownModule.forRoot({
                            markedOptions: {
                                provide: MarkedOptions,
                                useValue: ɵ0,
                            },
                        }),
                        CoreModule,
                        ControlModule,
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
                    exports: __spread([
                        CoreModule
                    ], components),
                },] }
    ];
    /** @nocollapse */
    EditorLazyModule.ctorParameters = function () { return [
        { type: EditorLazyModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return EditorLazyModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditorModuleComponent = /** @class */ (function () {
    function EditorModuleComponent() {
        this.version = '0.0.3';
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
        { type: Component, args: [{
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LAZY_MODULES = {
    editorLazyModule: 'src/lib/editor-lazy/editor-lazy.module#EditorLazyModule'
};
/** @type {?} */
var EDITOR_MODULES_FACTORY = new InjectionToken('EDITOR_MODULES_FACTORY', {
    factory: function () { return LAZY_MODULES; }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LazyModuleDirective = /** @class */ (function () {
    function LazyModuleDirective(modulesMap, injector, loader, container) {
        this.modulesMap = modulesMap;
        this.injector = injector;
        this.loader = loader;
        this.container = container;
    }
    /**
     * @return {?}
     */
    LazyModuleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loader.load(this.modulesMap[this.lazyModule]).then(function (moduleFactory) {
            _this.moduleRef = moduleFactory.create(_this.injector);
            /** @type {?} */
            var rootComponentType = _this.moduleRef.injector.get('LAZY_ENTRY_COMPONENT');
            /** @type {?} */
            var factory = _this.moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponentType);
            _this.container.createComponent(factory);
        });
    };
    /**
     * @return {?}
     */
    LazyModuleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.moduleRef) {
            this.moduleRef.destroy();
        }
    };
    LazyModuleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lazyModule]'
                },] }
    ];
    /** @nocollapse */
    LazyModuleDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [EDITOR_MODULES_FACTORY,] }] },
        { type: Injector },
        { type: NgModuleFactoryLoader },
        { type: ViewContainerRef }
    ]; };
    LazyModuleDirective.propDecorators = {
        lazyModule: [{ type: Input }]
    };
    return LazyModuleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?} e
     * @return {?}
     */
    PanelComponent.prototype.onKeydown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.key === 'e' && e.ctrlKey) {
            this.opened = this.config.enabled && !this.opened;
            this.opened = !this.opened;
            console.log('AppComponent.document:keydown', e.key, e.ctrlKey, e.altKey, e.code);
        }
    };
    PanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'panel-component',
                    template: "<ng-container>\n\t<div class=\"panel\" [@openClose]=\"opened ? 'open' : 'closed'\" (clickOutside)=\"opened = false\">\n\t\t<ng-container *ngIf=\"opened\">\n\t\t\t<ng-container lazyModule=\"editorLazyModule\"></ng-container>\n\t\t</ng-container>\n\t</div>\n</ng-container>\n",
                    animations: [
                        trigger('openClose', [
                            state('open', style({
                                opacity: 1,
                                transform: 'translateX(0)',
                            })),
                            state('closed', style({
                                opacity: 0.5,
                                transform: 'translateX(100%)',
                            })),
                            transition('open => closed', [
                                animate('250ms')
                            ]),
                            transition('closed => open', [
                                animate('150ms')
                            ]),
                        ]),
                    ],
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [":host form{margin:0}:host label{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}.panel{position:fixed;top:0;right:0;width:320px;height:100vh;padding:15px;overflow-x:hidden;overflow-y:auto;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}.panel .h1{color:#55555a}@media (max-width:1024px){.panel{display:none}}.id{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active{background:green;color:#fff}.component{display:inline-block;font-size:14px;font-style:italic}::-webkit-scrollbar{width:0}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:0 0}::-webkit-scrollbar-thumb:hover{background:0 0}"]
                }] }
    ];
    /** @nocollapse */
    PanelComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: EditorConfig, decorators: [{ type: Inject, args: [EDITOR_CONFIG,] }] }
    ]; };
    PanelComponent.propDecorators = {
        onKeydown: [{ type: HostListener, args: ['document:keydown', ['$event'],] }]
    };
    return PanelComponent;
}(DisposableComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var directives$1 = [
    LazyModuleDirective,
];
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CoreModule,
                    ],
                    providers: __spread([
                        { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
                    ], services$1),
                    declarations: __spread(components$1, directives$1),
                    exports: __spread([
                        CoreModule
                    ], components$1),
                },] }
    ];
    /** @nocollapse */
    EditorModule.ctorParameters = function () { return [
        { type: EditorModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
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

export { EditorConfig, EDITOR_CONFIG, EditorService, EditorLazyModule, EditorRootComponent, EditorModuleComponent, EditorModule, EDITOR_MODULES_FACTORY as ɵc, LazyModuleDirective as ɵb, PanelComponent as ɵa };

//# sourceMappingURL=designr-editor.js.map