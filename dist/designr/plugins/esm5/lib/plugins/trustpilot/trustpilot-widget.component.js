/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { takeUntil } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import { TrustPilotService } from './trustpilot.service';
var TrustPilotWidgetOptions = /** @class */ (function () {
    function TrustPilotWidgetOptions(options) {
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
    TrustPilotWidgetOptions.newFromConfig = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new TrustPilotWidgetOptions(options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    TrustPilotWidgetOptions.prototype.set = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options) {
            Object.assign(this, options);
        }
        return this;
    };
    return TrustPilotWidgetOptions;
}());
export { TrustPilotWidgetOptions };
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
var TrustPilotWidgetComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TrustPilotWidgetComponent, _super);
    function TrustPilotWidgetComponent(platformId, pluginsService, elementRef, trustPilot) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.pluginsService = pluginsService;
        _this.elementRef = elementRef;
        _this.trustPilot = trustPilot;
        _this.init();
        return _this;
    }
    /**
     * @private
     * @return {?}
     */
    TrustPilotWidgetComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.trustPilotOptions = this.pluginsService.options.trustPilot;
        this.options = new TrustPilotWidgetOptions(this.trustPilotOptions);
    };
    /**
     * @return {?}
     */
    TrustPilotWidgetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('TrustPilotWidgetComponent.ngOnInit', this.options, this.loaded);
        if (isPlatformBrowser(this.platformId) && this.elementRef.nativeElement.children.length) { // && environment.production
            if (!this.loaded) {
                this.trustPilot.once().pipe(takeUntil(this.unsubscribe)).subscribe(function (Trustpilot) {
                    Trustpilot.loadFromElement(_this.elementRef.nativeElement.firstElementChild);
                    _this.loaded = true;
                });
            }
        }
    };
    TrustPilotWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'plugins-trustpilot-widget-component',
                    template: "<ng-container>\n\t<ng-container [ngSwitch]=\"options.templateId\">\n\t\t<ng-container *ngSwitchCase=\"'544a426205dc0a09088833c6'\">\n\t\t\t<!-- PRODUCT REVIEWS -->\n\t\t\t<div class=\"trustpilot-comments\">\n\t\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-sku]=\"sku\" style=\"margin: 30px 0; max-width: 750px;\">\n\t\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'530d0eaf748a510e2093cf9b'\">\n\t\t\t<!-- EVALUATE -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-group]=\"options.group\" style=\"margin: 30px 0; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'53aa8807dec7e10d38f59f32'\">\n\t\t\t<!-- MINI -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'5613c9cde69ddc09340c6beb'\">\n\t\t\t<!-- STARTER -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'53aa8912dec7e10d38f59f36'\">\n\t\t\t<!-- CAROUSEL -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-stars]=\"options.stars\" style=\"margin: 15px auto;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t</ng-container>\n</ng-container>\n",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [":host{width:100%}.trustpilot-widget{margin:15px auto!important}@media print{.trustpilot-comments{display:none!important}}"]
                }] }
    ];
    /** @nocollapse */
    TrustPilotWidgetComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PluginsService },
        { type: ElementRef },
        { type: TrustPilotService }
    ]; };
    TrustPilotWidgetComponent.propDecorators = {
        options: [{ type: Input }],
        sku: [{ type: Input }]
    };
    return TrustPilotWidgetComponent;
}(DisposableComponent));
export { TrustPilotWidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBb0IsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRTtJQVlDLGlDQUNDLE9BQWlDO1FBVGxDLFdBQU0sR0FBWSxPQUFPLENBQUM7UUFFMUIsZ0JBQVcsR0FBWSxPQUFPLENBQUM7UUFDL0IsZUFBVSxHQUFZLE1BQU0sQ0FBQztRQUM3QixVQUFLLEdBQVksT0FBTyxDQUFDO1FBQ3pCLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFZLFdBQVcsQ0FBQztRQUs1QixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQzs7Ozs7SUFFTSxxQ0FBYTs7OztJQUFwQixVQUFxQixPQUEwQjtRQUM5QyxPQUFPLElBQUksdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxxQ0FBRzs7OztJQUFILFVBQUssT0FBaUM7UUFDckMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLDhCQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQzs7OztJQTdCQSw2Q0FBb0I7O0lBQ3BCLGlEQUF3Qjs7SUFDeEIsbURBQTBCOztJQUMxQix5Q0FBMEI7O0lBQzFCLHNDQUFhOztJQUNiLDhDQUErQjs7SUFDL0IsNkNBQTZCOztJQUM3Qix3Q0FBeUI7O0lBQ3pCLHdDQUFzQjs7SUFDdEIsd0NBQTZCOztBQXNCOUI7SUFPK0MscURBQW1CO0lBT2pFLG1DQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixVQUFzQixFQUN0QixVQUE2QjtRQUp0QyxZQU1DLGlCQUFPLFNBRVA7UUFQNkIsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGdCQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUdyQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O0lBQ2IsQ0FBQzs7Ozs7SUFFTyx3Q0FBSTs7OztJQUFaO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzVFLE1BQU0sSUFBSSxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztTQUNuRztRQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCxtREFBZTs7O0lBQWY7UUFBQSxpQkFZQztRQVhBLGdGQUFnRjtRQUNoRixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsNEJBQTRCO1lBQ3RILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDMUIsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxVQUFVO29CQUNyQixVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQzVFLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixDQUFDLENBQUMsQ0FBQzthQUNIO1NBQ0Q7SUFDRixDQUFDOztnQkE1Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxxQ0FBcUM7b0JBQy9DLDByR0FBaUQ7b0JBRWpELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFROztpQkFDekM7Ozs7NkNBVUUsTUFBTSxTQUFDLFdBQVc7Z0JBbERaLGNBQWM7Z0JBSFksVUFBVTtnQkFJbEIsaUJBQWlCOzs7MEJBNkMxQyxLQUFLO3NCQUNMLEtBQUs7O0lBa0NQLGdDQUFDO0NBQUEsQUE5Q0QsQ0FPK0MsbUJBQW1CLEdBdUNqRTtTQXZDWSx5QkFBeUI7OztJQUVyQywyQ0FBZ0I7O0lBQ2hCLHNEQUFvQzs7SUFDcEMsNENBQTJDOztJQUMzQyx3Q0FBc0I7Ozs7O0lBR3JCLCtDQUErQzs7Ozs7SUFDL0MsbURBQXNDOzs7OztJQUN0QywrQ0FBOEI7Ozs7O0lBQzlCLCtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgUExBVEZPUk1fSUQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJ1c3RQaWxvdENvbmZpZywgVHJ1c3RQaWxvdFNlcnZpY2UgfSBmcm9tICcuL3RydXN0cGlsb3Quc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyB7XG5cdHRlbXBsYXRlSWQ/OiBzdHJpbmc7XG5cdGJ1c2luZXNzdW5pdElkPzogc3RyaW5nO1xuXHRidXNpbmVzc3VuaXROYW1lPzogc3RyaW5nO1xuXHRsb2NhbGU/OiBzdHJpbmcgPSAnaXQtSVQnO1xuXHRza3U/OiBzdHJpbmc7XG5cdHN0eWxlSGVpZ2h0Pzogc3RyaW5nID0gJzM1MHB4Jztcblx0c3R5bGVXaWR0aD86IHN0cmluZyA9ICcxMDAlJztcblx0dGhlbWU/OiBzdHJpbmcgPSAnbGlnaHQnO1xuXHRncm91cD86IHN0cmluZyA9ICdvbic7XG5cdHN0YXJzPzogc3RyaW5nID0gJzEsMiwzLDQsNSc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0b3B0aW9ucz86IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zLFxuXHQpIHtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgbmV3RnJvbUNvbmZpZyhvcHRpb25zPzogVHJ1c3RQaWxvdENvbmZpZyk6IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zIHtcblx0XHRyZXR1cm4gbmV3IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zKG9wdGlvbnMpO1xuXHR9XG5cblx0c2V0PyhvcHRpb25zPzogVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMpOiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyB7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3BsdWdpbnMtdHJ1c3RwaWxvdC13aWRnZXQtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICcuL3RydXN0cGlsb3Qtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LnNjc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuXG5leHBvcnQgY2xhc3MgVHJ1c3RQaWxvdFdpZGdldENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRsb2FkZWQ6IGJvb2xlYW47XG5cdHRydXN0UGlsb3RPcHRpb25zOiBUcnVzdFBpbG90Q29uZmlnO1xuXHRASW5wdXQoKSBvcHRpb25zPzogVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnM7XG5cdEBJbnB1dCgpIHNrdT86IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHBsdWdpbnNTZXJ2aWNlOiBQbHVnaW5zU2VydmljZSxcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSB0cnVzdFBpbG90OiBUcnVzdFBpbG90U2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnRydXN0UGlsb3QpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVHJ1c3RQaWxvdFNlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMudHJ1c3RQaWxvdCcpO1xuXHRcdH1cblx0XHR0aGlzLnRydXN0UGlsb3RPcHRpb25zID0gdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnRydXN0UGlsb3Q7XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zKHRoaXMudHJ1c3RQaWxvdE9wdGlvbnMpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50Lm5nT25Jbml0JywgdGhpcy5vcHRpb25zLCB0aGlzLmxvYWRlZCk7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKSB7IC8vICYmIGVudmlyb25tZW50LnByb2R1Y3Rpb25cblx0XHRcdGlmICghdGhpcy5sb2FkZWQpIHtcblx0XHRcdFx0dGhpcy50cnVzdFBpbG90Lm9uY2UoKS5waXBlKFxuXHRcdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxuXHRcdFx0XHQpLnN1YnNjcmliZShUcnVzdHBpbG90ID0+IHtcblx0XHRcdFx0XHRUcnVzdHBpbG90LmxvYWRGcm9tRWxlbWVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG5cdFx0XHRcdFx0dGhpcy5sb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19