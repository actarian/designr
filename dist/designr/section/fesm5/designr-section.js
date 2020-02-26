import { InjectionToken, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵsetClassMetadata, Component, ɵɵInheritDefinitionFeature, ɵɵgetInheritedFactory, Input, ɵɵinject, ɵɵdefineInjectable, Injectable, Inject, ɵɵdirectiveInject, ComponentFactoryResolver, ɵɵstaticViewQuery, ViewContainerRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtemplate, ɵɵtemplateRefExtractor, ViewChild, ɵɵelementContainerStart, ɵɵelement, ɵɵelementContainerEnd, ɵɵproperty, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { __extends, __spread } from 'tslib';
import { NgForOf, CommonModule } from '@angular/common';
import { DisposableComponent, CoreModule } from '@designr/core';
import { PageIndex } from '@designr/page';

var SectionConfig = /** @class */ (function () {
    function SectionConfig(options) {
        this.sections = {};
        // console.log('SectionConfig', options);
        if (options) {
            Object.assign(this, options);
            this.sections = options.sections || {};
        }
    }
    return SectionConfig;
}());
var SECTION_CONFIG = new InjectionToken('section.config');

var SectionModuleComponent = /** @class */ (function () {
    function SectionModuleComponent() {
        this.version = '0.0.12';
    }
    SectionModuleComponent.prototype.ngOnInit = function () {
    };
    SectionModuleComponent.ɵfac = function SectionModuleComponent_Factory(t) { return new (t || SectionModuleComponent)(); };
    SectionModuleComponent.ɵcmp = ɵɵdefineComponent({ type: SectionModuleComponent, selectors: [["section-module"]], decls: 2, vars: 1, consts: [[1, "section-module"]], template: function SectionModuleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "span", 0);
            ɵɵtext(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵtextInterpolate1("section ", ctx.version, "");
        } }, encapsulation: 2 });
    return SectionModuleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SectionModuleComponent, [{
        type: Component,
        args: [{
                selector: 'section-module',
                template: "<span class=\"section-module\">section {{version}}</span>",
                styles: []
            }]
    }], function () { return []; }, null); })();

var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section(options) {
        return _super.call(this, options) || this;
    }
    return Section;
}(PageIndex));

var SectionComponent = /** @class */ (function (_super) {
    __extends(SectionComponent, _super);
    function SectionComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionComponent.ɵfac = function SectionComponent_Factory(t) { return ɵSectionComponent_BaseFactory(t || SectionComponent); };
    SectionComponent.ɵcmp = ɵɵdefineComponent({ type: SectionComponent, selectors: [["core-section"]], inputs: { section: "section" }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [[1, "section"]], template: function SectionComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "section", 0);
            ɵɵtext(1, "Section not found!");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return SectionComponent;
}(DisposableComponent));
var ɵSectionComponent_BaseFactory = ɵɵgetInheritedFactory(SectionComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(SectionComponent, [{
        type: Component,
        args: [{
                selector: 'core-section',
                template: "<section class=\"section\">Section not found!</section>",
            }]
    }], null, { section: [{
            type: Input
        }] }); })();

var SectionService = /** @class */ (function () {
    function SectionService(options) {
        // console.log('SectionService', options);
        options = options || {};
        this.options = new SectionConfig(options);
    }
    SectionService.prototype.resolve = function (section) {
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
    SectionService.ɵfac = function SectionService_Factory(t) { return new (t || SectionService)(ɵɵinject(SECTION_CONFIG)); };
    SectionService.ɵprov = ɵɵdefineInjectable({ token: SectionService, factory: SectionService.ɵfac, providedIn: 'root' });
    return SectionService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SectionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: SectionConfig, decorators: [{
                type: Inject,
                args: [SECTION_CONFIG]
            }] }]; }, null); })();

var _c0 = ["outlet"];
function SectionOutletComponent_ng_template_0_Template(rf, ctx) { }
var SectionOutletComponent = /** @class */ (function (_super) {
    __extends(SectionOutletComponent, _super);
    function SectionOutletComponent(componentFactoryResolver, sectionService) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.sectionService = sectionService;
        return _this;
    }
    SectionOutletComponent.prototype.ngOnInit = function () {
        var component = this.sectionService.resolve(this.section);
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        var componentRef = this.viewContainerRef.createComponent(factory);
        var instance = componentRef.instance;
        instance.section = this.section;
        if (typeof instance['SectionInit'] === 'function') {
            instance['SectionInit']();
        }
        this.componentRef = componentRef;
    };
    SectionOutletComponent.prototype.ngOnDestroy = function () {
        this.componentRef.destroy();
    };
    SectionOutletComponent.ɵfac = function SectionOutletComponent_Factory(t) { return new (t || SectionOutletComponent)(ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(SectionService)); };
    SectionOutletComponent.ɵcmp = ɵɵdefineComponent({ type: SectionOutletComponent, selectors: [["section-outlet"]], viewQuery: function SectionOutletComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
        } }, inputs: { section: "section" }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [["outlet", ""]], template: function SectionOutletComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, SectionOutletComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 });
    return SectionOutletComponent;
}(DisposableComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SectionOutletComponent, [{
        type: Component,
        args: [{
                selector: 'section-outlet',
                template: '<ng-template #outlet></ng-template>',
            }]
    }], function () { return [{ type: ComponentFactoryResolver }, { type: SectionService }]; }, { section: [{
            type: Input
        }], viewContainerRef: [{
            type: ViewChild,
            args: ['outlet', { read: ViewContainerRef, static: true }]
        }] }); })();

function SectionsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "section-outlet", 1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var section_r7 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("section", section_r7);
} }
var SectionsComponent = /** @class */ (function (_super) {
    __extends(SectionsComponent, _super);
    function SectionsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionsComponent.ɵfac = function SectionsComponent_Factory(t) { return ɵSectionsComponent_BaseFactory(t || SectionsComponent); };
    SectionsComponent.ɵcmp = ɵɵdefineComponent({ type: SectionsComponent, selectors: [["section-sections"]], inputs: { sections: "sections" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "section"]], template: function SectionsComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, SectionsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            ɵɵproperty("ngForOf", ctx.sections);
        } }, directives: [NgForOf, SectionOutletComponent], encapsulation: 2 });
    return SectionsComponent;
}(DisposableComponent));
var ɵSectionsComponent_BaseFactory = ɵɵgetInheritedFactory(SectionsComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(SectionsComponent, [{
        type: Component,
        args: [{
                selector: 'section-sections',
                template: "<ng-container *ngFor=\"let section of sections\">\n\t<section-outlet [section]=\"section\"></section-outlet>\n</ng-container>",
            }]
    }], null, { sections: [{
            type: Input
        }] }); })();

var services = [
    SectionService,
];
var components = [
    SectionModuleComponent,
    SectionOutletComponent,
    SectionComponent,
    SectionsComponent,
];
var directives = [];
var pipes = [];
var validators = [];
var guards = [];
var SectionModule = /** @class */ (function () {
    function SectionModule(parentModule) {
        if (parentModule) {
            throw new Error('SectionModule is already loaded. Import it in the AppModule only');
        }
    }
    SectionModule.forRoot = function (config) {
        return {
            ngModule: SectionModule,
            providers: [{
                    provide: SECTION_CONFIG, useValue: config
                }]
        };
    };
    SectionModule.ɵmod = ɵɵdefineNgModule({ type: SectionModule });
    SectionModule.ɵinj = ɵɵdefineInjector({ factory: function SectionModule_Factory(t) { return new (t || SectionModule)(ɵɵinject(SectionModule, 12)); }, providers: __spread(services), imports: [[
                CommonModule,
                CoreModule,
            ],
            CoreModule] });
    return SectionModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SectionModule, { declarations: [SectionModuleComponent,
        SectionOutletComponent,
        SectionComponent,
        SectionsComponent], imports: [CommonModule,
        CoreModule], exports: [CoreModule,
        SectionModuleComponent,
        SectionOutletComponent,
        SectionComponent,
        SectionsComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SectionModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], function () { return [{ type: SectionModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SECTION_CONFIG, Section, SectionComponent, SectionConfig, SectionModule, SectionModuleComponent, SectionOutletComponent, SectionService, SectionsComponent };
//# sourceMappingURL=designr-section.js.map
