import { MarkdownService, MarkdownModule, MarkedOptions } from 'ngx-markdown';
export { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵnextContext, ɵɵreference, ɵɵadvance, ɵɵclassMapInterpolate1, ɵɵproperty, ɵɵgetCurrentView, ɵɵelementContainerStart, ɵɵlistener, ɵɵrestoreView, ɵɵtext, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵtextInterpolate, ɵɵpureFunction1, ɵɵsanitizeHtml, ɵɵdirectiveInject, PLATFORM_ID, ɵɵdefineComponent, ɵɵInheritDefinitionFeature, Component, ViewEncapsulation, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf, ɵɵtextInterpolate1, ɵɵelementContainer, ɵɵresolveDocument, HostListener } from '@angular/core';
import { __extends, __spread } from 'tslib';
import { isPlatformBrowser, NgIf, NgClass, NgForOf, CommonModule } from '@angular/common';
import { ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService, ControlOutletComponent, ControlModule } from '@designr/control';
import { DisposableComponent, CoreModule, BundleDirective } from '@designr/core';
import { ConfigService, PageResolverService } from '@designr/page';
import { takeUntil } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';

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

var EditorService = /** @class */ (function () {
    function EditorService(options) {
        // console.log('EditorService', options);
        options = options || {};
        this.options = new EditorConfig(options);
    }
    EditorService.ɵfac = function EditorService_Factory(t) { return new (t || EditorService)(ɵɵinject(EDITOR_CONFIG)); };
    EditorService.ɵprov = ɵɵdefineInjectable({ token: EditorService, factory: EditorService.ɵfac, providedIn: 'root' });
    return EditorService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(EditorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: EditorConfig, decorators: [{
                type: Inject,
                args: [EDITOR_CONFIG]
            }] }]; }, null); })();

function EditorRootComponent_ng_container_0_div_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "control-outlet", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    var option_r11 = ctx.$implicit;
    ɵɵnextContext();
    var _r9 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("fieldset__field fieldset__field--", option_r11.schema, "");
    ɵɵproperty("option", option_r11)("form", _r9);
} }
var _c0 = function (a0) { return { active: a0 }; };
var _c1 = function (a0) { return { "btn--busy": a0 }; };
function EditorRootComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "form", 1, 2);
    ɵɵlistener("ngSubmit", function EditorRootComponent_ng_container_0_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r13); var _r9 = ɵɵreference(2); var ctx_r12 = ɵɵnextContext(); return _r9.valid && ctx_r12.onSubmit(_r9.value); });
    ɵɵelementStart(3, "div", 3);
    ɵɵelementStart(4, "span", 4);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 5);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "span", 6);
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelement(10, "hr");
    ɵɵelement(11, "h2", 7);
    ɵɵelement(12, "hr");
    ɵɵtemplate(13, EditorRootComponent_ng_container_0_div_13_Template, 2, 5, "div", 8);
    ɵɵelementStart(14, "div", 9);
    ɵɵelementStart(15, "button", 10);
    ɵɵlistener("click", function EditorRootComponent_ng_container_0_Template_button_click_15_listener($event) { ɵɵrestoreView(_r13); var ctx_r14 = ɵɵnextContext(); return ctx_r14.onReset(); });
    ɵɵelementStart(16, "span");
    ɵɵtext(17, "Annulla");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(18, "button", 11);
    ɵɵelementStart(19, "span");
    ɵɵtext(20, "Salva");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r9 = ɵɵreference(2);
    var ctx_r8 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("formGroup", _r9);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r8.page.id);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c0, ctx_r8.page.active));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r8.page.active ? "active" : "inactive");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r8.componentName);
    ɵɵadvance(2);
    ɵɵproperty("innerHTML", ctx_r8.page.title, ɵɵsanitizeHtml);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r8.options);
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r8.submitted || !_r9.valid);
    ɵɵadvance(3);
    ɵɵproperty("disabled", ctx_r8.submitted || !_r9.valid)("ngClass", ɵɵpureFunction1(12, _c1, ctx_r8.busy));
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
        if (isPlatformBrowser(this.platformId)) {
            this.pageResolverService.events$.pipe(takeUntil(this.unsubscribe)).subscribe(function (resolver) {
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
    EditorRootComponent.ɵfac = function EditorRootComponent_Factory(t) { return new (t || EditorRootComponent)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ConfigService), ɵɵdirectiveInject(MarkdownService), ɵɵdirectiveInject(FormService), ɵɵdirectiveInject(PageResolverService)); };
    EditorRootComponent.ɵcmp = ɵɵdefineComponent({ type: EditorRootComponent, selectors: [["editor-root-component"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], ["name", "form", "role", "form", "novalidate", "", "autocomplete", "off", 1, "form", 3, "formGroup", "ngSubmit"], ["form", "ngForm"], [1, "info"], [1, "id"], [1, "status", 3, "ngClass"], [1, "component"], [1, "h1", 3, "innerHTML"], [4, "ngFor", "ngForOf"], [1, "action-bar"], ["type", "text", "title", "Annulla", 1, "btn", "btn--secondary", 3, "disabled", "click"], ["type", "submit", "title", "Salva", 1, "btn", "btn--primary", 3, "disabled", "ngClass"], [3, "option", "form"]], template: function EditorRootComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, EditorRootComponent_ng_container_0_Template, 21, 14, "ng-container", 0);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.page);
        } }, directives: [NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgClass, NgForOf, ControlOutletComponent], styles: ["[_nghost-%COMP%]{font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}.h1[_ngcontent-%COMP%]{color:#55555a;font-size:19px}form[_ngcontent-%COMP%]{margin:0}label[_ngcontent-%COMP%]{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}.id[_ngcontent-%COMP%]{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status[_ngcontent-%COMP%]{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active[_ngcontent-%COMP%]{background:green;color:#fff}.component[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-style:italic}"] });
    return EditorRootComponent;
}(DisposableComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(EditorRootComponent, [{
        type: Component,
        args: [{
                selector: 'editor-root-component',
                templateUrl: './editor-root.component.html',
                styleUrls: ['./editor-root.component.scss'],
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ConfigService }, { type: MarkdownService }, { type: FormService }, { type: PageResolverService }]; }, null); })();

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
    EditorBundleModule.ɵmod = ɵɵdefineNgModule({ type: EditorBundleModule });
    EditorBundleModule.ɵinj = ɵɵdefineInjector({ factory: function EditorBundleModule_Factory(t) { return new (t || EditorBundleModule)(ɵɵinject(EditorBundleModule, 12)); }, providers: __spread([
            { provide: 'LAZY_ROOT_COMPONENT', useValue: EditorRootComponent }
        ], services), imports: [[
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                MarkdownModule.forRoot({
                    markedOptions: {
                        provide: MarkedOptions,
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
                CoreModule,
                ControlModule,
            ]] });
    return EditorBundleModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EditorBundleModule, { declarations: [EditorRootComponent,
        EditorRootComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule, MarkdownModule, CoreModule,
        ControlModule], exports: [EditorRootComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(EditorBundleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MarkdownModule.forRoot({
                        markedOptions: {
                            provide: MarkedOptions,
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
                    CoreModule,
                    ControlModule,
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
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

var EditorModuleComponent = /** @class */ (function () {
    function EditorModuleComponent() {
        this.version = '0.0.12';
    }
    EditorModuleComponent.prototype.ngOnInit = function () {
    };
    EditorModuleComponent.ɵfac = function EditorModuleComponent_Factory(t) { return new (t || EditorModuleComponent)(); };
    EditorModuleComponent.ɵcmp = ɵɵdefineComponent({ type: EditorModuleComponent, selectors: [["editor-module"]], decls: 2, vars: 1, consts: [[1, "editor-module"]], template: function EditorModuleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "span", 0);
            ɵɵtext(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵtextInterpolate1("editor ", ctx.version, "");
        } }, encapsulation: 2 });
    return EditorModuleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(EditorModuleComponent, [{
        type: Component,
        args: [{
                selector: 'editor-module',
                template: "<span class=\"editor-module\">editor {{version}}</span>",
                styles: []
            }]
    }], function () { return []; }, null); })();

function PanelComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainer(1, 2);
    ɵɵelementContainerEnd();
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
    PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(EDITOR_CONFIG)); };
    PanelComponent.ɵcmp = ɵɵdefineComponent({ type: PanelComponent, selectors: [["panel-component"]], hostBindings: function PanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("keydown", function PanelComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); }, false, ɵɵresolveDocument);
        } }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[1, "panel", 3, "clickOutside"], [4, "ngIf"], ["bundle", "editor"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵlistener("clickOutside", function PanelComponent_Template_div_clickOutside_0_listener($event) { return ctx.opened = false; });
            ɵɵtemplate(1, PanelComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("@openClose", ctx.opened ? "open" : "closed");
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.opened);
        } }, directives: [NgIf, BundleDirective], styles: [".panel[_ngcontent-%COMP%]{position:fixed;top:0;right:0;width:320px;height:100vh;padding:15px;overflow-x:hidden;overflow-y:auto;background:#fff;z-index:100000}[_ngcontent-%COMP%]::-webkit-scrollbar{width:0}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:0 0}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:0 0}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:0 0}"], data: { animation: [
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
            ] } });
    return PanelComponent;
}(DisposableComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{
                selector: 'panel-component',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.scss'],
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
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: EditorConfig, decorators: [{
                type: Inject,
                args: [EDITOR_CONFIG]
            }] }]; }, { onKeydown: [{
            type: HostListener,
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
    EditorModule.ɵmod = ɵɵdefineNgModule({ type: EditorModule });
    EditorModule.ɵinj = ɵɵdefineInjector({ factory: function EditorModule_Factory(t) { return new (t || EditorModule)(ɵɵinject(EditorModule, 12)); }, providers: __spread(services$1), imports: [[
                CommonModule,
                CoreModule,
            ],
            CoreModule] });
    return EditorModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EditorModule, { declarations: [EditorModuleComponent,
        PanelComponent], imports: [CommonModule,
        CoreModule], exports: [CoreModule,
        EditorModuleComponent,
        PanelComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(EditorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                ],
                providers: __spread(services$1),
                declarations: __spread(components$1, directives$1),
                exports: __spread([
                    CoreModule
                ], components$1),
            }]
    }], function () { return [{ type: EditorModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { EDITOR_CONFIG, EditorBundleModule, EditorConfig, EditorModule, EditorModuleComponent, EditorRootComponent, EditorService, PanelComponent };
//# sourceMappingURL=designr-editor.js.map
