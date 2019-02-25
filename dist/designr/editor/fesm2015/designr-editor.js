import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService, ControlModule } from '@designr/control';
import { PageResolverService, PageService } from '@designr/page';
import { MarkdownService, MarkdownModule, MarkedOptions } from 'ngx-markdown';
export { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { InjectionToken, Inject, Injectable, Directive, Injector, Input, NgModuleFactoryLoader, ViewContainerRef, Component, ViewEncapsulation, PLATFORM_ID, HostListener, NgModule, SystemJsNgModuleLoader, Optional, SkipSelf, defineInjectable, inject } from '@angular/core';
import { DisposableComponent, CoreModule } from '@designr/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EDITOR_CONFIG = new InjectionToken('editor.config');
class EditorConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        // console.log('EditorConfig', options);
        if (options) {
            this.enabled = options.enabled || false;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditorService {
    /**
     * @param {?} options
     */
    constructor(options) {
        // console.log('EditorService', options);
        options = options || {};
        this.options = new EditorConfig(options);
    }
}
EditorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EditorService.ctorParameters = () => [
    { type: EditorConfig, decorators: [{ type: Inject, args: [EDITOR_CONFIG,] }] }
];
/** @nocollapse */ EditorService.ngInjectableDef = defineInjectable({ factory: function EditorService_Factory() { return new EditorService(inject(EDITOR_CONFIG)); }, token: EditorService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditorRootComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} pageService
     * @param {?} markdownService
     * @param {?} formService
     * @param {?} pageResolverService
     */
    constructor(platformId, pageService, markdownService, formService, pageResolverService) {
        super();
        this.platformId = platformId;
        this.pageService = pageService;
        this.markdownService = markdownService;
        this.formService = formService;
        this.pageResolverService = pageResolverService;
        this.busy = false;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    set page(page) {
        this._pageCopy = Object.assign({}, page);
        this._page = page;
        if (this._page) {
            this.controls = this.formService.getControlsFromOptions(this.getControlsByPage(page));
            this.group = this.formService.getGroupFromControls(this.controls);
            this.group.valueChanges.subscribe(x => {
                this.onAssign(x); // Object.assign(this._page, x);
            });
        }
        else {
            this.controls = [];
            this.group = null;
        }
    }
    /**
     * @return {?}
     */
    get componentName() {
        if (this._page) {
            /** @type {?} */
            const component = this.pageService.options.pages[this._page.component];
            if (component) {
                return component.name;
            }
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    getControlsByPage(page) {
        return page ? Object.keys(page).filter(key => typeof page[key] !== 'object').map((key, i) => {
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
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.pageResolverService.events$.pipe(takeUntil(this.unsubscribe)).subscribe((resolver) => {
                // console.log('EditorRootComponent.resolver', resolver);
                this.page = resolver ? resolver.page : null;
            });
        }
    }
    /**
     * @return {?}
     */
    onReset() {
        // console.log('EditorRootComponent.onReset');
        Object.keys(this.group.controls).forEach(key => {
            this.group.get(key).setValue(this._pageCopy[key]);
        });
        /*
        const keys = this.controls.map(x => x.key);
        keys.forEach(k => {
            // console.log(k, this._page[k], this._pageCopy[k]);
            this._page[k] = this._pageCopy[k];
        });
        */
    }
    /**
     * @param {?} model
     * @return {?}
     */
    onSubmit(model) {
        // console.log('EditorRootComponent.onSubmit', model);
        this.onAssign(model);
        // Object.assign(this._page, model);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    onAssign(model) {
        Object.keys(this.group.controls).forEach(key => {
            switch (key) {
                case 'description':
                    this._page[key] = this.markdownService.compile(model[key]);
                    break;
                default:
                    this._page[key] = model[key];
            }
        });
    }
}
EditorRootComponent.decorators = [
    { type: Component, args: [{
                selector: 'editor-root-component',
                template: "<ng-container *ngIf=\"page\">\n\t<form class=\"form\" name=\"group\" [formGroup]=\"group\" (ngSubmit)=\"group.valid && onSubmit(group.value)\" #form=\"ngForm\" role=\"form\" novalidate autocomplete=\"off\">\n\t\t<div class=\"info\">\n\t\t\t<span class=\"id\">{{page.id}}</span>\n\t\t\t<span class=\"status\" [ngClass]=\"{ active: page.active }\">{{page.active ? 'active' : 'inactive'}}</span>\n\t\t\t<span class=\"component\">{{componentName}}</span>\n\t\t</div>\n\t\t<hr>\n\t\t<h2 class=\"h1\" [innerHTML]=\"page.title\"></h2>\n\t\t<!--\n\t\t\t\t<p [innerHTML]=\"page.description\"></p>\n\t\t\t\t-->\n\t\t<hr>\n\t\t<!--\n\t\t\t\t<div class=\"fieldset\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Label</label>\n\t\t\t\t\t\t<input placeholder=\"placeholder\" type=\"text\" class=\"form-control\" required [(ngModel)]=\"model.title\" name=\"title\" #title=\"ngModel\" autocomplete=\"title\">\n\t\t\t\t\t\t<div *ngIf=\"title.invalid && (form.submitted || title.dirty || title.touched)\" class=\"alert alert--danger\">\n\t\t\t\t\t\t\t<div *ngIf=\"title.errors.required\">{{ 'errors.required' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t-->\n\t\t<div *ngFor=\"let control of controls\">\n\t\t\t<core-control [control]=\"control\" [form]=\"group\"></core-control>\n\t\t</div>\n\t\t<!-- <control-editable formControlName=\"email\"></control-editable> -->\n\t\t<div class=\"action-bar\">\n\t\t\t<button type=\"text\" class=\"btn btn--secondary\" [disabled]=\"submitted || !group.valid\" (click)=\"onReset()\" title=\"Annulla\"><span>Annulla</span></button>\n\t\t\t<button type=\"submit\" class=\"btn btn--primary\" [disabled]=\"submitted || !group.valid\" [ngClass]=\"{ 'btn--busy': busy }\" title=\"Salva\"><span>Salva</span></button>\n\t\t</div>\n\t</form>\n</ng-container>\n",
                encapsulation: ViewEncapsulation.Emulated,
                styles: [":host{font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}:host .h1{color:#55555a}:host form{margin:0}:host label{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}@media (max-width:1024px){:host{display:none}}.id{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active{background:green;color:#fff}.component{display:inline-block;font-size:14px;font-style:italic}::-webkit-scrollbar{width:0}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:0 0}::-webkit-scrollbar-thumb:hover{background:0 0}"]
            }] }
];
/** @nocollapse */
EditorRootComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PageService },
    { type: MarkdownService },
    { type: FormService },
    { type: PageResolverService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [];
/** @type {?} */
const components = [
    EditorRootComponent,
];
const ɵ0 = {
// gfm: true,
// tables: true,
// breaks: true,
// pedantic: true,
// sanitize: true,
// smartLists: true,
// smartypants: true,
}, ɵ1 = EditorRootComponent;
class EditorLazyModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('EditorLazyModule is already loaded. Import it in the AppModule only');
        }
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
                providers: [
                    { provide: 'LAZY_ROOT_COMPONENT', useValue: ɵ1 },
                    ...services,
                ],
                declarations: [
                    EditorRootComponent,
                    ...components,
                ],
                entryComponents: [
                    EditorRootComponent,
                ],
                exports: [
                    CoreModule,
                    ...components,
                ],
            },] }
];
/** @nocollapse */
EditorLazyModule.ctorParameters = () => [
    { type: EditorLazyModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditorModuleComponent {
    constructor() {
        this.version = '0.0.3';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EditorModuleComponent.decorators = [
    { type: Component, args: [{
                selector: 'editor-module',
                template: `<span class="editor-module">editor {{version}}</span>`
            }] }
];
/** @nocollapse */
EditorModuleComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LAZY_MODULES = {
    editorLazyModule: 'src/lib/editor-lazy/editor-lazy.module#EditorLazyModule'
};
/** @type {?} */
const EDITOR_MODULES_FACTORY = new InjectionToken('EDITOR_MODULES_FACTORY', {
    factory: () => LAZY_MODULES
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LazyModuleDirective {
    /**
     * @param {?} modulesMap
     * @param {?} injector
     * @param {?} loader
     * @param {?} container
     */
    constructor(modulesMap, injector, loader, container) {
        this.modulesMap = modulesMap;
        this.injector = injector;
        this.loader = loader;
        this.container = container;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loader.load(this.modulesMap[this.lazyModule]).then((moduleFactory) => {
            this.moduleRef = moduleFactory.create(this.injector);
            /** @type {?} */
            const rootComponentType = this.moduleRef.injector.get('LAZY_ENTRY_COMPONENT');
            /** @type {?} */
            const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponentType);
            this.container.createComponent(factory);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.moduleRef) {
            this.moduleRef.destroy();
        }
    }
}
LazyModuleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lazyModule]'
            },] }
];
/** @nocollapse */
LazyModuleDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [EDITOR_MODULES_FACTORY,] }] },
    { type: Injector },
    { type: NgModuleFactoryLoader },
    { type: ViewContainerRef }
];
LazyModuleDirective.propDecorators = {
    lazyModule: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PanelComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} config
     */
    constructor(platformId, config) {
        super();
        this.platformId = platformId;
        this.config = config;
        this.opened = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeydown(e) {
        if (e.key === 'e' && e.ctrlKey) {
            this.opened = this.config.enabled && !this.opened;
            this.opened = !this.opened;
            console.log('AppComponent.document:keydown', e.key, e.ctrlKey, e.altKey, e.code);
        }
    }
}
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
PanelComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: EditorConfig, decorators: [{ type: Inject, args: [EDITOR_CONFIG,] }] }
];
PanelComponent.propDecorators = {
    onKeydown: [{ type: HostListener, args: ['document:keydown', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$1 = [
    EditorService,
];
/** @type {?} */
const components$1 = [
    EditorModuleComponent,
    PanelComponent,
];
/** @type {?} */
const directives$1 = [
    LazyModuleDirective,
];
class EditorModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('EditorModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: EditorModule,
            providers: [
                { provide: EDITOR_CONFIG, useValue: config },
            ]
        };
    }
}
EditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                ],
                providers: [
                    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
                    ...services$1,
                ],
                declarations: [
                    ...components$1,
                    ...directives$1,
                ],
                exports: [
                    CoreModule,
                    ...components$1,
                ],
            },] }
];
/** @nocollapse */
EditorModule.ctorParameters = () => [
    { type: EditorModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

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