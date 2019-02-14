(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@designr/core'), require('angular-in-memory-web-api'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@designr/data', ['exports', '@angular/common/http', '@designr/core', 'angular-in-memory-web-api', '@angular/core'], factory) :
    (factory((global.designr = global.designr || {}, global.designr.data = {}),global.ng.common.http,global.core,global.HttpClientInMemoryWebApiModule,global.ng.core));
}(this, (function (exports,http,core,angularInMemoryWebApi,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DATA_CONFIG = new i0.InjectionToken('data.config');
    var DataConfig = /** @class */ (function () {
        function DataConfig(options) {
            this.datas = {};
            console.log('DataConfig', options);
            if (options) {
                this.datas = options.datas || {};
            }
        }
        return DataConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataService = /** @class */ (function () {
        function DataService(options) {
            console.log('DataService', options);
            options = options || {};
            this.options = new DataConfig(options);
        }
        DataService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DataService.ctorParameters = function () {
            return [
                { type: DataConfig, decorators: [{ type: i0.Inject, args: [DATA_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ DataService.ngInjectableDef = i0.defineInjectable({ factory: function DataService_Factory() { return new DataService(i0.inject(DATA_CONFIG)); }, token: DataService, providedIn: "root" });
        return DataService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataModuleComponent = /** @class */ (function () {
        function DataModuleComponent() {
            this.version = '0.0.2';
        }
        /**
         * @return {?}
         */
        DataModuleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        DataModuleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'data-module',
                        template: "<span class=\"data-module\">data {{version}}</span>"
                    }] }
        ];
        /** @nocollapse */
        DataModuleComponent.ctorParameters = function () { return []; };
        return DataModuleComponent;
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
    var MemoryService = /** @class */ (function () {
        function MemoryService(config) {
            this.config = config;
            console.log('DatasService', config);
        }
        /**
         * @return {?}
         */
        MemoryService.prototype.createDb = /**
         * @return {?}
         */
            function () {
                console.log('MemoryService.createDb', this.config.datas);
                return this.config.datas || {};
            };
        /**
         * @param {?} url
         * @param {?} service
         * @return {?}
         */
        MemoryService.prototype.parseRequestUrl = /**
         * @param {?} url
         * @param {?} service
         * @return {?}
         */
            function (url, service) {
                // !!! REMAPPING
                /*
                        if (this.configService.options.memory && this.configService.options.memory.remap) {
                            Object.keys(this.configService.options.memory.remap).forEach((k: string) => {
                                url = url.replace(k, this.configService.options.memory.remap[k]);
                            });
                        }
                        */
                /** @type {?} */
                var parsed = service.parseRequestUrl(url);
                return parsed;
            };
        MemoryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        MemoryService.ctorParameters = function () {
            return [
                { type: DataConfig, decorators: [{ type: i0.Inject, args: [DATA_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ MemoryService.ngInjectableDef = i0.defineInjectable({ factory: function MemoryService_Factory() { return new MemoryService(i0.inject(DATA_CONFIG)); }, token: MemoryService, providedIn: "root" });
        return MemoryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var modules = [
        http.HttpClientModule,
        angularInMemoryWebApi.HttpClientInMemoryWebApiModule,
        core.CoreModule,
    ];
    /** @type {?} */
    var services = [
        DataService,
    ];
    /** @type {?} */
    var components = [
        DataModuleComponent,
    ];
    var DataModule = /** @class */ (function () {
        function DataModule(parentModule) {
            if (parentModule) {
                throw new Error('DataModule is already loaded. Import it in the AppModule only');
            }
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        DataModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: DataModule,
                    providers: __spread([
                        { provide: DATA_CONFIG, useValue: config }
                    ], angularInMemoryWebApi.HttpClientInMemoryWebApiModule.forRoot(MemoryService, config.memory).providers)
                };
            };
        DataModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: __spread(modules),
                        providers: __spread(services),
                        declarations: __spread(components),
                        exports: __spread(modules, components),
                    },] }
        ];
        /** @nocollapse */
        DataModule.ctorParameters = function () {
            return [
                { type: DataModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
            ];
        };
        return DataModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.DataConfig = DataConfig;
    exports.DATA_CONFIG = DATA_CONFIG;
    exports.DataService = DataService;
    exports.DataModuleComponent = DataModuleComponent;
    exports.DataModule = DataModule;
    exports.MemoryService = MemoryService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=designr-data.umd.js.map