import { CommonModule } from '@angular/common';
import { PageIndex } from '@designr/page';
import { InjectionToken, Component, Input, Inject, Injectable, ComponentFactoryResolver, ViewChild, ViewContainerRef, NgModule, Optional, SkipSelf, defineInjectable, inject } from '@angular/core';
import { DisposableComponent, CoreModule } from '@designr/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SectionConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.sections = {};
        // console.log('SectionConfig', options);
        if (options) {
            Object.assign(this, options);
            this.sections = options.sections || {};
        }
    }
}
/** @type {?} */
const SECTION_CONFIG = new InjectionToken('section.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SectionModuleComponent {
    constructor() {
        this.version = '0.0.3';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SectionModuleComponent.decorators = [
    { type: Component, args: [{
                selector: 'section-module',
                template: `<span class="section-module">section {{version}}</span>`
            }] }
];
/** @nocollapse */
SectionModuleComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Section extends PageIndex {
    /**
     * @param {?=} options
     */
    constructor(options) {
        super(options);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SectionComponent extends DisposableComponent {
}
SectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-section',
                template: `<section class="section">Section not found!</section>`
            }] }
];
SectionComponent.propDecorators = {
    section: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SectionService {
    /**
     * @param {?} options
     */
    constructor(options) {
        // console.log('SectionService', options);
        options = options || {};
        this.options = new SectionConfig(options);
    }
    /**
     * @param {?} section
     * @return {?}
     */
    resolve(section) {
        /** @type {?} */
        let component;
        if (section) {
            component = this.options.sections[section.component] || SectionComponent;
        }
        else {
            component = SectionComponent;
            // component = this.pageService.options.notFoundPage || SectionComponent;
        }
        return component;
    }
}
SectionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SectionService.ctorParameters = () => [
    { type: SectionConfig, decorators: [{ type: Inject, args: [SECTION_CONFIG,] }] }
];
/** @nocollapse */ SectionService.ngInjectableDef = defineInjectable({ factory: function SectionService_Factory() { return new SectionService(inject(SECTION_CONFIG)); }, token: SectionService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SectionOutletComponent extends DisposableComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} sectionService
     */
    constructor(componentFactoryResolver, sectionService) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.sectionService = sectionService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const component = this.sectionService.resolve(this.section);
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        /** @type {?} */
        const componentRef = this.viewContainerRef.createComponent(factory);
        /** @type {?} */
        const instance = componentRef.instance;
        instance.section = this.section;
        if (typeof instance['SectionInit'] === 'function') {
            instance['SectionInit']();
        }
        this.componentRef = componentRef;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
SectionOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'section-outlet',
                template: '<ng-template #outlet></ng-template>'
            }] }
];
/** @nocollapse */
SectionOutletComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: SectionService }
];
SectionOutletComponent.propDecorators = {
    section: [{ type: Input }],
    viewContainerRef: [{ type: ViewChild, args: ['outlet', { read: ViewContainerRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SectionsComponent extends DisposableComponent {
}
SectionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'section-sections',
                template: `<ng-container *ngFor="let section of sections">
	<section-outlet [section]="section"></section-outlet>
</ng-container>`
            }] }
];
SectionsComponent.propDecorators = {
    sections: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [
    SectionService,
];
/** @type {?} */
const components = [
    SectionModuleComponent,
    SectionOutletComponent,
    SectionComponent,
    SectionsComponent,
];
class SectionModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('SectionModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: SectionModule,
            providers: [{
                    provide: SECTION_CONFIG, useValue: config
                }]
        };
    }
}
SectionModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                ],
                providers: [
                    ...services,
                ],
                declarations: [
                    ...components,
                ],
                entryComponents: [
                    ...components,
                ],
                exports: [
                    CoreModule,
                    ...components,
                ],
            },] }
];
/** @nocollapse */
SectionModule.ctorParameters = () => [
    { type: SectionModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SectionConfig, SECTION_CONFIG, SectionModuleComponent, SectionModule, Section, SectionOutletComponent, SectionComponent, SectionService, SectionsComponent as ɵa };

//# sourceMappingURL=designr-section.js.map