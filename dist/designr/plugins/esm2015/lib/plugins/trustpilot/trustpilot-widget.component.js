/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { takeUntil } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import { TrustPilotService } from './trustpilot.service';
export class TrustPilotWidgetOptions {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.locale = 'it-IT';
        this.styleHeight = '350px';
        this.styleWidth = '100%';
        this.theme = 'light';
        this.group = 'on';
        this.stars = '1,2,3,4,5';
        if (options) {
            Object.assign(this, options);
        }
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    static newFromConfig(options) {
        return new TrustPilotWidgetOptions(options);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    set(options) {
        if (options) {
            Object.assign(this, options);
        }
        return this;
    }
}
if (false) {
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.templateId;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.businessunitId;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.businessunitName;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.locale;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.sku;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.styleHeight;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.styleWidth;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.theme;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.group;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.stars;
}
export class TrustPilotWidgetComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} elementRef
     * @param {?} trustPilot
     */
    constructor(platformId, pluginsService, elementRef, trustPilot) {
        super();
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.elementRef = elementRef;
        this.trustPilot = trustPilot;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.trustPilotOptions = this.pluginsService.options.trustPilot;
        this.options = new TrustPilotWidgetOptions(this.trustPilotOptions);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // console.log('TrustPilotWidgetComponent.ngOnInit', this.options, this.loaded);
        if (isPlatformBrowser(this.platformId) && this.elementRef.nativeElement.children.length) { // && environment.production
            if (!this.loaded) {
                this.trustPilot.once().pipe(takeUntil(this.unsubscribe)).subscribe((/**
                 * @param {?} Trustpilot
                 * @return {?}
                 */
                Trustpilot => {
                    Trustpilot.loadFromElement(this.elementRef.nativeElement.firstElementChild);
                    this.loaded = true;
                }));
            }
        }
    }
}
TrustPilotWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'plugins-trustpilot-widget-component',
                template: "<ng-container>\r\n\t<ng-container [ngSwitch]=\"options.templateId\">\r\n\t\t<ng-container *ngSwitchCase=\"'544a426205dc0a09088833c6'\">\r\n\t\t\t<!-- PRODUCT REVIEWS -->\r\n\t\t\t<div class=\"trustpilot-comments\">\r\n\t\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-sku]=\"sku\" style=\"margin: 30px 0; max-width: 750px;\">\r\n\t\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'530d0eaf748a510e2093cf9b'\">\r\n\t\t\t<!-- EVALUATE -->\r\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-group]=\"options.group\" style=\"margin: 30px 0; max-width: 750px;\">\r\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'53aa8807dec7e10d38f59f32'\">\r\n\t\t\t<!-- MINI -->\r\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\r\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'5613c9cde69ddc09340c6beb'\">\r\n\t\t\t<!-- STARTER -->\r\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\r\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'53aa8912dec7e10d38f59f36'\">\r\n\t\t\t<!-- CAROUSEL -->\r\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-stars]=\"options.stars\" style=\"margin: 15px auto;\">\r\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n</ng-container>\r\n",
                encapsulation: ViewEncapsulation.Emulated,
                styles: [":host{width:100%}.trustpilot-widget{margin:15px auto!important}@media print{.trustpilot-comments{display:none!important}}"]
            }] }
];
/** @nocollapse */
TrustPilotWidgetComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: ElementRef },
    { type: TrustPilotService }
];
TrustPilotWidgetComponent.propDecorators = {
    options: [{ type: Input }],
    sku: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TrustPilotWidgetComponent.prototype.loaded;
    /** @type {?} */
    TrustPilotWidgetComponent.prototype.trustPilotOptions;
    /** @type {?} */
    TrustPilotWidgetComponent.prototype.options;
    /** @type {?} */
    TrustPilotWidgetComponent.prototype.sku;
    /**
     * @type {?}
     * @private
     */
    TrustPilotWidgetComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    TrustPilotWidgetComponent.prototype.pluginsService;
    /**
     * @type {?}
     * @private
     */
    TrustPilotWidgetComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TrustPilotWidgetComponent.prototype.trustPilot;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFvQixpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFZbkMsWUFDQyxPQUFpQztRQVRsQyxXQUFNLEdBQVksT0FBTyxDQUFDO1FBRTFCLGdCQUFXLEdBQVksT0FBTyxDQUFDO1FBQy9CLGVBQVUsR0FBWSxNQUFNLENBQUM7UUFDN0IsVUFBSyxHQUFZLE9BQU8sQ0FBQztRQUN6QixVQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFVBQUssR0FBWSxXQUFXLENBQUM7UUFLNUIsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUEwQjtRQUM5QyxPQUFPLElBQUksdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUUsT0FBaUM7UUFDckMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUNEOzs7SUE3QkEsNkNBQW9COztJQUNwQixpREFBd0I7O0lBQ3hCLG1EQUEwQjs7SUFDMUIseUNBQTBCOztJQUMxQixzQ0FBYTs7SUFDYiw4Q0FBK0I7O0lBQy9CLDZDQUE2Qjs7SUFDN0Isd0NBQXlCOztJQUN6Qix3Q0FBc0I7O0lBQ3RCLHdDQUE2Qjs7QUE2QjlCLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxtQkFBbUI7Ozs7Ozs7SUFPakUsWUFDOEIsVUFBa0IsRUFDdkMsY0FBOEIsRUFDOUIsVUFBc0IsRUFDdEIsVUFBNkI7UUFFckMsS0FBSyxFQUFFLENBQUM7UUFMcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUdyQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDOzs7OztJQUVPLElBQUk7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDNUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO1NBQ25HO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksdUJBQXVCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxnRkFBZ0Y7UUFDaEYsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLDRCQUE0QjtZQUN0SCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUzs7OztnQkFBQyxVQUFVLENBQUMsRUFBRTtvQkFDeEIsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUM1RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDcEIsQ0FBQyxFQUFDLENBQUM7YUFDSDtTQUNEO0lBQ0YsQ0FBQzs7O1lBNUNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUscUNBQXFDO2dCQUMvQyxrd0dBQWlEO2dCQUVqRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7YUFDekM7Ozs7eUNBVUUsTUFBTSxTQUFDLFdBQVc7WUFsRFosY0FBYztZQUhZLFVBQVU7WUFJbEIsaUJBQWlCOzs7c0JBNkMxQyxLQUFLO2tCQUNMLEtBQUs7Ozs7SUFITiwyQ0FBZ0I7O0lBQ2hCLHNEQUFvQzs7SUFDcEMsNENBQTJDOztJQUMzQyx3Q0FBc0I7Ozs7O0lBR3JCLCtDQUErQzs7Ozs7SUFDL0MsbURBQXNDOzs7OztJQUN0QywrQ0FBOEI7Ozs7O0lBQzlCLCtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XHJcbmltcG9ydCB7IFRydXN0UGlsb3RDb25maWcsIFRydXN0UGlsb3RTZXJ2aWNlIH0gZnJvbSAnLi90cnVzdHBpbG90LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRydXN0UGlsb3RXaWRnZXRPcHRpb25zIHtcclxuXHR0ZW1wbGF0ZUlkPzogc3RyaW5nO1xyXG5cdGJ1c2luZXNzdW5pdElkPzogc3RyaW5nO1xyXG5cdGJ1c2luZXNzdW5pdE5hbWU/OiBzdHJpbmc7XHJcblx0bG9jYWxlPzogc3RyaW5nID0gJ2l0LUlUJztcclxuXHRza3U/OiBzdHJpbmc7XHJcblx0c3R5bGVIZWlnaHQ/OiBzdHJpbmcgPSAnMzUwcHgnO1xyXG5cdHN0eWxlV2lkdGg/OiBzdHJpbmcgPSAnMTAwJSc7XHJcblx0dGhlbWU/OiBzdHJpbmcgPSAnbGlnaHQnO1xyXG5cdGdyb3VwPzogc3RyaW5nID0gJ29uJztcclxuXHRzdGFycz86IHN0cmluZyA9ICcxLDIsMyw0LDUnO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdG9wdGlvbnM/OiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyxcclxuXHQpIHtcclxuXHRcdGlmIChvcHRpb25zKSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbmV3RnJvbUNvbmZpZyhvcHRpb25zPzogVHJ1c3RQaWxvdENvbmZpZyk6IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zIHtcclxuXHRcdHJldHVybiBuZXcgVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMob3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRzZXQ/KG9wdGlvbnM/OiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyk6IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zIHtcclxuXHRcdGlmIChvcHRpb25zKSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAncGx1Z2lucy10cnVzdHBpbG90LXdpZGdldC1jb21wb25lbnQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi90cnVzdHBpbG90LXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LnNjc3MnXSxcclxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuXHRsb2FkZWQ6IGJvb2xlYW47XHJcblx0dHJ1c3RQaWxvdE9wdGlvbnM6IFRydXN0UGlsb3RDb25maWc7XHJcblx0QElucHV0KCkgb3B0aW9ucz86IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zO1xyXG5cdEBJbnB1dCgpIHNrdT86IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG5cdFx0cHJpdmF0ZSB0cnVzdFBpbG90OiBUcnVzdFBpbG90U2VydmljZSxcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcclxuXHRcdGlmICghdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zICYmICF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMudHJ1c3RQaWxvdCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RydXN0UGlsb3RTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLnRydXN0UGlsb3QnKTtcclxuXHRcdH1cclxuXHRcdHRoaXMudHJ1c3RQaWxvdE9wdGlvbnMgPSB0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMudHJ1c3RQaWxvdDtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyh0aGlzLnRydXN0UGlsb3RPcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50Lm5nT25Jbml0JywgdGhpcy5vcHRpb25zLCB0aGlzLmxvYWRlZCk7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpIHsgLy8gJiYgZW52aXJvbm1lbnQucHJvZHVjdGlvblxyXG5cdFx0XHRpZiAoIXRoaXMubG9hZGVkKSB7XHJcblx0XHRcdFx0dGhpcy50cnVzdFBpbG90Lm9uY2UoKS5waXBlKFxyXG5cdFx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXHJcblx0XHRcdFx0KS5zdWJzY3JpYmUoVHJ1c3RwaWxvdCA9PiB7XHJcblx0XHRcdFx0XHRUcnVzdHBpbG90LmxvYWRGcm9tRWxlbWVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XHJcblx0XHRcdFx0XHR0aGlzLmxvYWRlZCA9IHRydWU7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==