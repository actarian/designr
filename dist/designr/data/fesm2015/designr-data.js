import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@designr/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InjectionToken, Inject, Injectable, Component, defineInjectable, inject, NgModule, Optional, SkipSelf } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DATA_CONFIG = new InjectionToken('data.config');
class DataConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.datas = {};
        console.log('DataConfig', options);
        if (options) {
            this.datas = options.datas || {};
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataService {
    /**
     * @param {?} options
     */
    constructor(options) {
        console.log('DataService', options);
        options = options || {};
        this.options = new DataConfig(options);
    }
}
DataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DataService.ctorParameters = () => [
    { type: DataConfig, decorators: [{ type: Inject, args: [DATA_CONFIG,] }] }
];
/** @nocollapse */ DataService.ngInjectableDef = defineInjectable({ factory: function DataService_Factory() { return new DataService(inject(DATA_CONFIG)); }, token: DataService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataModuleComponent {
    constructor() {
        this.version = '0.0.2';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DataModuleComponent.decorators = [
    { type: Component, args: [{
                selector: 'data-module',
                template: `<span class="data-module">data {{version}}</span>`
            }] }
];
/** @nocollapse */
DataModuleComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MemoryService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        console.log('DatasService', config);
    }
    /**
     * @return {?}
     */
    createDb() {
        console.log('MemoryService.createDb', this.config.datas);
        return this.config.datas || {};
    }
    /**
     * @param {?} url
     * @param {?} service
     * @return {?}
     */
    parseRequestUrl(url, service) {
        // !!! REMAPPING
        /*
                if (this.configService.options.memory && this.configService.options.memory.remap) {
                    Object.keys(this.configService.options.memory.remap).forEach((k: string) => {
                        url = url.replace(k, this.configService.options.memory.remap[k]);
                    });
                }
                */
        /** @type {?} */
        const parsed = service.parseRequestUrl(url);
        return parsed;
    }
}
MemoryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
MemoryService.ctorParameters = () => [
    { type: DataConfig, decorators: [{ type: Inject, args: [DATA_CONFIG,] }] }
];
/** @nocollapse */ MemoryService.ngInjectableDef = defineInjectable({ factory: function MemoryService_Factory() { return new MemoryService(inject(DATA_CONFIG)); }, token: MemoryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [
    DataService,
];
/** @type {?} */
const components = [
    DataModuleComponent,
];
class DataModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('DataModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: DataModule,
            providers: [
                { provide: DATA_CONFIG, useValue: config },
                ...HttpClientInMemoryWebApiModule.forRoot(MemoryService, config.memory).providers
            ]
        };
    }
}
DataModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    HttpClientInMemoryWebApiModule,
                    CoreModule,
                ],
                providers: [
                    ...services,
                ],
                declarations: [
                    ...components,
                ],
                exports: [
                    HttpClientInMemoryWebApiModule,
                    CoreModule,
                    ...components,
                ],
            },] }
];
/** @nocollapse */
DataModule.ctorParameters = () => [
    { type: DataModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

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