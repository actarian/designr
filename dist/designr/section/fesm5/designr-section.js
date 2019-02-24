import { CommonModule } from '@angular/common';
import { PageIndex } from '@designr/page';
import { __extends, __spread } from 'tslib';
import { InjectionToken, Component, Input, Inject, Injectable, ViewContainerRef, ComponentFactoryResolver, defineInjectable, inject, NgModule, Optional, SkipSelf } from '@angular/core';
import { DisposableComponent, CoreModule } from '@designr/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SectionConfig = /** @class */ (function () {
    function SectionConfig(options) {
        this.sections = {};
        // console.log('SectionConfig', options);
        if (options) {
            this.sections = options.sections || {};
        }
    }
    return SectionConfig;
}());
/** @type {?} */
var SECTION_CONFIG = new InjectionToken('section.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SectionModuleComponent = /** @class */ (function () {
    function SectionModuleComponent() {
        this.version = '0.0.3';
    }
    /**
     * @return {?}
     */
    SectionModuleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SectionModuleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'section-module',
                    template: "<span class=\"section-module\">section {{version}}</span>"
                }] }
    ];
    /** @nocollapse */
    SectionModuleComponent.ctorParameters = function () { return []; };
    return SectionModuleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section(options) {
        return _super.call(this, options) || this;
    }
    return Section;
}(PageIndex));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SectionComponent = /** @class */ (function (_super) {
    __extends(SectionComponent, _super);
    function SectionComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'core-section',
                    template: "<section class=\"section\">Section not found!</section>"
                }] }
    ];
    SectionComponent.propDecorators = {
        section: [{ type: Input }]
    };
    return SectionComponent;
}(DisposableComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SectionService = /** @class */ (function () {
    function SectionService(options) {
        // console.log('SectionService', options);
        options = options || {};
        this.options = new SectionConfig(options);
    }
    /**
     * @param {?} section
     * @return {?}
     */
    SectionService.prototype.resolve = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        /** @type {?} */
        var component;
        if (section) {
            component = this.options.sections[section.component] || SectionComponent;
        }
        else {
            component = SectionComponent;
            // component = this.pageService.options.notFoundPage || SectionComponent;
        }
        return component;
    };
    SectionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SectionService.ctorParameters = function () { return [
        { type: SectionConfig, decorators: [{ type: Inject, args: [SECTION_CONFIG,] }] }
    ]; };
    /** @nocollapse */ SectionService.ngInjectableDef = defineInjectable({ factory: function SectionService_Factory() { return new SectionService(inject(SECTION_CONFIG)); }, token: SectionService, providedIn: "root" });
    return SectionService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SectionOutletComponent = /** @class */ (function (_super) {
    __extends(SectionOutletComponent, _super);
    function SectionOutletComponent(viewContainerRef, componentFactoryResolver, sectionService) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.sectionService = sectionService;
        return _this;
    }
    /**
     * @return {?}
     */
    SectionOutletComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var component = this.sectionService.resolve(this.section);
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        /** @type {?} */
        var componentRef = this.viewContainerRef.createComponent(factory);
        /** @type {?} */
        var instance = componentRef.instance;
        instance.section = this.section;
        if (typeof instance['SectionInit'] === 'function') {
            instance['SectionInit']();
        }
    };
    SectionOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'section-outlet',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    SectionOutletComponent.ctorParameters = function () { return [
        { type: ViewContainerRef, decorators: [{ type: Inject, args: [ViewContainerRef,] }] },
        { type: ComponentFactoryResolver },
        { type: SectionService }
    ]; };
    SectionOutletComponent.propDecorators = {
        section: [{ type: Input }]
    };
    return SectionOutletComponent;
}(DisposableComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SectionsComponent = /** @class */ (function (_super) {
    __extends(SectionsComponent, _super);
    function SectionsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'section-sections',
                    template: "<ng-container *ngFor=\"let section of sections\">\n\t<section-outlet [section]=\"section\"></section-outlet>\n</ng-container>"
                }] }
    ];
    SectionsComponent.propDecorators = {
        sections: [{ type: Input }]
    };
    return SectionsComponent;
}(DisposableComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services = [
    SectionService,
];
/** @type {?} */
var components = [
    SectionModuleComponent,
    SectionOutletComponent,
    SectionComponent,
    SectionsComponent,
];
var SectionModule = /** @class */ (function () {
    function SectionModule(parentModule) {
        if (parentModule) {
            throw new Error('SectionModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    SectionModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: SectionModule,
            providers: [{
                    provide: SECTION_CONFIG, useValue: config
                }]
        };
    };
    SectionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CoreModule,
                    ],
                    providers: __spread(services),
                    declarations: __spread(components),
                    entryComponents: __spread(components),
                    exports: __spread([
                        CoreModule
                    ], components),
                },] }
    ];
    /** @nocollapse */
    SectionModule.ctorParameters = function () { return [
        { type: SectionModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return SectionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SectionConfig, SECTION_CONFIG, SectionModuleComponent, SectionModule, Section, SectionOutletComponent, SectionComponent, SectionService, SectionsComponent as ɵa };

//# sourceMappingURL=designr-section.js.map