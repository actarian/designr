import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@designr/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InjectionToken, Inject, Injectable, Component, NgModule, Optional, SkipSelf, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DATA_CONFIG = new InjectionToken('data.config');
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return [
        { type: DataConfig, decorators: [{ type: Inject, args: [DATA_CONFIG,] }] }
    ]; };
    /** @nocollapse */ DataService.ngInjectableDef = defineInjectable({ factory: function DataService_Factory() { return new DataService(inject(DATA_CONFIG)); }, token: DataService, providedIn: "root" });
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
        { type: Component, args: [{
                    selector: 'data-module',
                    template: "<span class=\"data-module\">data {{version}}</span>"
                }] }
    ];
    /** @nocollapse */
    DataModuleComponent.ctorParameters = function () { return []; };
    return DataModuleComponent;
}());

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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    MemoryService.ctorParameters = function () { return [
        { type: DataConfig, decorators: [{ type: Inject, args: [DATA_CONFIG,] }] }
    ]; };
    /** @nocollapse */ MemoryService.ngInjectableDef = defineInjectable({ factory: function MemoryService_Factory() { return new MemoryService(inject(DATA_CONFIG)); }, token: MemoryService, providedIn: "root" });
    return MemoryService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            ], HttpClientInMemoryWebApiModule.forRoot(MemoryService, config.memory).providers)
        };
    };
    DataModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        HttpClientInMemoryWebApiModule,
                        CoreModule,
                    ],
                    providers: __spread(services),
                    declarations: __spread(components),
                    exports: __spread([
                        HttpClientInMemoryWebApiModule,
                        CoreModule
                    ], components),
                },] }
    ];
    /** @nocollapse */
    DataModule.ctorParameters = function () { return [
        { type: DataModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
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

export { DataConfig, DATA_CONFIG, DataService, DataModuleComponent, DataModule, MemoryService };

//# sourceMappingURL=designr-data.js.map