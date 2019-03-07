/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                this.trustPilot.once().pipe(takeUntil(this.unsubscribe)).subscribe((/**
                 * @param {?} Trustpilot
                 * @return {?}
                 */
                function (Trustpilot) {
                    Trustpilot.loadFromElement(_this.elementRef.nativeElement.firstElementChild);
                    _this.loaded = true;
                }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBb0IsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRTtJQVlDLGlDQUNDLE9BQWlDO1FBVGxDLFdBQU0sR0FBWSxPQUFPLENBQUM7UUFFMUIsZ0JBQVcsR0FBWSxPQUFPLENBQUM7UUFDL0IsZUFBVSxHQUFZLE1BQU0sQ0FBQztRQUM3QixVQUFLLEdBQVksT0FBTyxDQUFDO1FBQ3pCLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFZLFdBQVcsQ0FBQztRQUs1QixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQzs7Ozs7SUFFTSxxQ0FBYTs7OztJQUFwQixVQUFxQixPQUEwQjtRQUM5QyxPQUFPLElBQUksdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxxQ0FBRzs7OztJQUFILFVBQUssT0FBaUM7UUFDckMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLDhCQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQzs7OztJQTdCQSw2Q0FBb0I7O0lBQ3BCLGlEQUF3Qjs7SUFDeEIsbURBQTBCOztJQUMxQix5Q0FBMEI7O0lBQzFCLHNDQUFhOztJQUNiLDhDQUErQjs7SUFDL0IsNkNBQTZCOztJQUM3Qix3Q0FBeUI7O0lBQ3pCLHdDQUFzQjs7SUFDdEIsd0NBQTZCOztBQXNCOUI7SUFPK0MscURBQW1CO0lBT2pFLG1DQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixVQUFzQixFQUN0QixVQUE2QjtRQUp0QyxZQU1DLGlCQUFPLFNBRVA7UUFQNkIsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGdCQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUdyQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O0lBQ2IsQ0FBQzs7Ozs7SUFFTyx3Q0FBSTs7OztJQUFaO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzVFLE1BQU0sSUFBSSxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztTQUNuRztRQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCxtREFBZTs7O0lBQWY7UUFBQSxpQkFZQztRQVhBLGdGQUFnRjtRQUNoRixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsNEJBQTRCO1lBQ3RILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDMUIsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUEsVUFBVTtvQkFDckIsVUFBVSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUM1RSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDcEIsQ0FBQyxFQUFDLENBQUM7YUFDSDtTQUNEO0lBQ0YsQ0FBQzs7Z0JBNUNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUNBQXFDO29CQUMvQywwckdBQWlEO29CQUVqRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7aUJBQ3pDOzs7OzZDQVVFLE1BQU0sU0FBQyxXQUFXO2dCQWxEWixjQUFjO2dCQUhZLFVBQVU7Z0JBSWxCLGlCQUFpQjs7OzBCQTZDMUMsS0FBSztzQkFDTCxLQUFLOztJQWtDUCxnQ0FBQztDQUFBLEFBOUNELENBTytDLG1CQUFtQixHQXVDakU7U0F2Q1kseUJBQXlCOzs7SUFFckMsMkNBQWdCOztJQUNoQixzREFBb0M7O0lBQ3BDLDRDQUEyQzs7SUFDM0Msd0NBQXNCOzs7OztJQUdyQiwrQ0FBK0M7Ozs7O0lBQy9DLG1EQUFzQzs7Ozs7SUFDdEMsK0NBQThCOzs7OztJQUM5QiwrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIFBMQVRGT1JNX0lELCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlJztcbmltcG9ydCB7IFRydXN0UGlsb3RDb25maWcsIFRydXN0UGlsb3RTZXJ2aWNlIH0gZnJvbSAnLi90cnVzdHBpbG90LnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMge1xuXHR0ZW1wbGF0ZUlkPzogc3RyaW5nO1xuXHRidXNpbmVzc3VuaXRJZD86IHN0cmluZztcblx0YnVzaW5lc3N1bml0TmFtZT86IHN0cmluZztcblx0bG9jYWxlPzogc3RyaW5nID0gJ2l0LUlUJztcblx0c2t1Pzogc3RyaW5nO1xuXHRzdHlsZUhlaWdodD86IHN0cmluZyA9ICczNTBweCc7XG5cdHN0eWxlV2lkdGg/OiBzdHJpbmcgPSAnMTAwJSc7XG5cdHRoZW1lPzogc3RyaW5nID0gJ2xpZ2h0Jztcblx0Z3JvdXA/OiBzdHJpbmcgPSAnb24nO1xuXHRzdGFycz86IHN0cmluZyA9ICcxLDIsMyw0LDUnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG9wdGlvbnM/OiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyxcblx0KSB7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIG5ld0Zyb21Db25maWcob3B0aW9ucz86IFRydXN0UGlsb3RDb25maWcpOiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyB7XG5cdFx0cmV0dXJuIG5ldyBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyhvcHRpb25zKTtcblx0fVxuXG5cdHNldD8ob3B0aW9ucz86IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zKTogVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdwbHVnaW5zLXRydXN0cGlsb3Qtd2lkZ2V0LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnLi90cnVzdHBpbG90LXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3RydXN0cGlsb3Qtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ10sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcblxuZXhwb3J0IGNsYXNzIFRydXN0UGlsb3RXaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0bG9hZGVkOiBib29sZWFuO1xuXHR0cnVzdFBpbG90T3B0aW9uczogVHJ1c3RQaWxvdENvbmZpZztcblx0QElucHV0KCkgb3B0aW9ucz86IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zO1xuXHRASW5wdXQoKSBza3U/OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgdHJ1c3RQaWxvdDogVHJ1c3RQaWxvdFNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRwcml2YXRlIGluaXQoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMgJiYgIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy50cnVzdFBpbG90KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RydXN0UGlsb3RTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLnRydXN0UGlsb3QnKTtcblx0XHR9XG5cdFx0dGhpcy50cnVzdFBpbG90T3B0aW9ucyA9IHRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy50cnVzdFBpbG90O1xuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyh0aGlzLnRydXN0UGlsb3RPcHRpb25zKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnVHJ1c3RQaWxvdFdpZGdldENvbXBvbmVudC5uZ09uSW5pdCcsIHRoaXMub3B0aW9ucywgdGhpcy5sb2FkZWQpO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkgeyAvLyAmJiBlbnZpcm9ubWVudC5wcm9kdWN0aW9uXG5cdFx0XHRpZiAoIXRoaXMubG9hZGVkKSB7XG5cdFx0XHRcdHRoaXMudHJ1c3RQaWxvdC5vbmNlKCkucGlwZShcblx0XHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcblx0XHRcdFx0KS5zdWJzY3JpYmUoVHJ1c3RwaWxvdCA9PiB7XG5cdFx0XHRcdFx0VHJ1c3RwaWxvdC5sb2FkRnJvbUVsZW1lbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuXHRcdFx0XHRcdHRoaXMubG9hZGVkID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==