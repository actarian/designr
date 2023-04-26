(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@designr/core'), require('@designr/page')) :
    typeof define === 'function' && define.amd ? define('@designr/section', ['exports', '@angular/common', '@angular/core', '@designr/core', '@designr/page'], factory) :
    (factory((global.designr = global.designr || {}, global.designr.section = {}),global.ng.common,global.ng.core,global.core,global.page));
}(this, (function (exports,common,i0,core,page) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
    /** @type {?} */
    var SECTION_CONFIG = new i0.InjectionToken('section.config');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SectionModuleComponent = /** @class */ (function () {
        function SectionModuleComponent() {
            this.version = '0.0.13';
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
            { type: i0.Component, args: [{
                        selector: 'section-module',
                        template: "<span class=\"section-module\">section {{version}}</span>"
                    }] }
        ];
        /** @nocollapse */
        SectionModuleComponent.ctorParameters = function () { return []; };
        return SectionModuleComponent;
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
    var SectionComponent = /** @class */ (function (_super) {
        __extends(SectionComponent, _super);
        function SectionComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SectionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'core-section',
                        template: "<section class=\"section\">Section not found!</section>"
                    }] }
        ];
        SectionComponent.propDecorators = {
            section: [{ type: i0.Input }]
        };
        return SectionComponent;
    }(core.DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SectionService.ctorParameters = function () {
            return [
                { type: SectionConfig, decorators: [{ type: i0.Inject, args: [SECTION_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ SectionService.ngInjectableDef = i0.defineInjectable({ factory: function SectionService_Factory() { return new SectionService(i0.inject(SECTION_CONFIG)); }, token: SectionService, providedIn: "root" });
        return SectionService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SectionOutletComponent = /** @class */ (function (_super) {
        __extends(SectionOutletComponent, _super);
        function SectionOutletComponent(componentFactoryResolver, sectionService) {
            var _this = _super.call(this) || this;
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
                this.componentRef = componentRef;
            };
        /**
         * @return {?}
         */
        SectionOutletComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.componentRef.destroy();
            };
        SectionOutletComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'section-outlet',
                        template: '<ng-template #outlet></ng-template>'
                    }] }
        ];
        /** @nocollapse */
        SectionOutletComponent.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: SectionService }
            ];
        };
        SectionOutletComponent.propDecorators = {
            section: [{ type: i0.Input }],
            viewContainerRef: [{ type: i0.ViewChild, args: ['outlet', { read: i0.ViewContainerRef },] }]
        };
        return SectionOutletComponent;
    }(core.DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SectionsComponent = /** @class */ (function (_super) {
        __extends(SectionsComponent, _super);
        function SectionsComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SectionsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'section-sections',
                        template: "<ng-container *ngFor=\"let section of sections\">\n\t<section-outlet [section]=\"section\"></section-outlet>\n</ng-container>"
                    }] }
        ];
        SectionsComponent.propDecorators = {
            sections: [{ type: i0.Input }]
        };
        return SectionsComponent;
    }(core.DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core.CoreModule,
                        ],
                        providers: __spread(services),
                        declarations: __spread(components),
                        entryComponents: __spread(components),
                        exports: __spread([
                            core.CoreModule
                        ], components),
                    },] }
        ];
        /** @nocollapse */
        SectionModule.ctorParameters = function () {
            return [
                { type: SectionModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
            ];
        };
        return SectionModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Section = /** @class */ (function (_super) {
        __extends(Section, _super);
        function Section(options) {
            return _super.call(this, options) || this;
        }
        return Section;
    }(page.PageIndex));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SectionConfig = SectionConfig;
    exports.SECTION_CONFIG = SECTION_CONFIG;
    exports.SectionModuleComponent = SectionModuleComponent;
    exports.SectionModule = SectionModule;
    exports.Section = Section;
    exports.SectionOutletComponent = SectionOutletComponent;
    exports.SectionComponent = SectionComponent;
    exports.SectionService = SectionService;
    exports.ɵa = SectionsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=designr-section.umd.js.map