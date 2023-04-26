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
                    template: "<ng-container>\r\n\t<ng-container [ngSwitch]=\"options.templateId\">\r\n\t\t<ng-container *ngSwitchCase=\"'544a426205dc0a09088833c6'\">\r\n\t\t\t<!-- PRODUCT REVIEWS -->\r\n\t\t\t<div class=\"trustpilot-comments\">\r\n\t\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-sku]=\"sku\" style=\"margin: 30px 0; max-width: 750px;\">\r\n\t\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'530d0eaf748a510e2093cf9b'\">\r\n\t\t\t<!-- EVALUATE -->\r\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-group]=\"options.group\" style=\"margin: 30px 0; max-width: 750px;\">\r\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'53aa8807dec7e10d38f59f32'\">\r\n\t\t\t<!-- MINI -->\r\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\r\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'5613c9cde69ddc09340c6beb'\">\r\n\t\t\t<!-- STARTER -->\r\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\r\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'53aa8912dec7e10d38f59f36'\">\r\n\t\t\t<!-- CAROUSEL -->\r\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-stars]=\"options.stars\" style=\"margin: 15px auto;\">\r\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n</ng-container>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBb0IsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRTtJQVlDLGlDQUNDLE9BQWlDO1FBVGxDLFdBQU0sR0FBWSxPQUFPLENBQUM7UUFFMUIsZ0JBQVcsR0FBWSxPQUFPLENBQUM7UUFDL0IsZUFBVSxHQUFZLE1BQU0sQ0FBQztRQUM3QixVQUFLLEdBQVksT0FBTyxDQUFDO1FBQ3pCLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFZLFdBQVcsQ0FBQztRQUs1QixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQzs7Ozs7SUFFTSxxQ0FBYTs7OztJQUFwQixVQUFxQixPQUEwQjtRQUM5QyxPQUFPLElBQUksdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxxQ0FBRzs7OztJQUFILFVBQUssT0FBaUM7UUFDckMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLDhCQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQzs7OztJQTdCQSw2Q0FBb0I7O0lBQ3BCLGlEQUF3Qjs7SUFDeEIsbURBQTBCOztJQUMxQix5Q0FBMEI7O0lBQzFCLHNDQUFhOztJQUNiLDhDQUErQjs7SUFDL0IsNkNBQTZCOztJQUM3Qix3Q0FBeUI7O0lBQ3pCLHdDQUFzQjs7SUFDdEIsd0NBQTZCOztBQXNCOUI7SUFPK0MscURBQW1CO0lBT2pFLG1DQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixVQUFzQixFQUN0QixVQUE2QjtRQUp0QyxZQU1DLGlCQUFPLFNBRVA7UUFQNkIsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGdCQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUdyQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O0lBQ2IsQ0FBQzs7Ozs7SUFFTyx3Q0FBSTs7OztJQUFaO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzVFLE1BQU0sSUFBSSxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztTQUNuRztRQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCxtREFBZTs7O0lBQWY7UUFBQSxpQkFZQztRQVhBLGdGQUFnRjtRQUNoRixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsNEJBQTRCO1lBQ3RILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDMUIsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUEsVUFBVTtvQkFDckIsVUFBVSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUM1RSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDcEIsQ0FBQyxFQUFDLENBQUM7YUFDSDtTQUNEO0lBQ0YsQ0FBQzs7Z0JBNUNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUNBQXFDO29CQUMvQyxrd0dBQWlEO29CQUVqRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7aUJBQ3pDOzs7OzZDQVVFLE1BQU0sU0FBQyxXQUFXO2dCQWxEWixjQUFjO2dCQUhZLFVBQVU7Z0JBSWxCLGlCQUFpQjs7OzBCQTZDMUMsS0FBSztzQkFDTCxLQUFLOztJQWtDUCxnQ0FBQztDQUFBLEFBOUNELENBTytDLG1CQUFtQixHQXVDakU7U0F2Q1kseUJBQXlCOzs7SUFFckMsMkNBQWdCOztJQUNoQixzREFBb0M7O0lBQ3BDLDRDQUEyQzs7SUFDM0Msd0NBQXNCOzs7OztJQUdyQiwrQ0FBK0M7Ozs7O0lBQy9DLG1EQUFzQzs7Ozs7SUFDdEMsK0NBQThCOzs7OztJQUM5QiwrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgUExBVEZPUk1fSUQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcnVzdFBpbG90Q29uZmlnLCBUcnVzdFBpbG90U2VydmljZSB9IGZyb20gJy4vdHJ1c3RwaWxvdC5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyB7XHJcblx0dGVtcGxhdGVJZD86IHN0cmluZztcclxuXHRidXNpbmVzc3VuaXRJZD86IHN0cmluZztcclxuXHRidXNpbmVzc3VuaXROYW1lPzogc3RyaW5nO1xyXG5cdGxvY2FsZT86IHN0cmluZyA9ICdpdC1JVCc7XHJcblx0c2t1Pzogc3RyaW5nO1xyXG5cdHN0eWxlSGVpZ2h0Pzogc3RyaW5nID0gJzM1MHB4JztcclxuXHRzdHlsZVdpZHRoPzogc3RyaW5nID0gJzEwMCUnO1xyXG5cdHRoZW1lPzogc3RyaW5nID0gJ2xpZ2h0JztcclxuXHRncm91cD86IHN0cmluZyA9ICdvbic7XHJcblx0c3RhcnM/OiBzdHJpbmcgPSAnMSwyLDMsNCw1JztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRvcHRpb25zPzogVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMsXHJcblx0KSB7XHJcblx0XHRpZiAob3B0aW9ucykge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIG5ld0Zyb21Db25maWcob3B0aW9ucz86IFRydXN0UGlsb3RDb25maWcpOiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyB7XHJcblx0XHRyZXR1cm4gbmV3IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zKG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0c2V0PyhvcHRpb25zPzogVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMpOiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyB7XHJcblx0XHRpZiAob3B0aW9ucykge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3BsdWdpbnMtdHJ1c3RwaWxvdC13aWRnZXQtY29tcG9uZW50JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3RydXN0cGlsb3Qtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ10sXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJ1c3RQaWxvdFdpZGdldENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcblx0bG9hZGVkOiBib29sZWFuO1xyXG5cdHRydXN0UGlsb3RPcHRpb25zOiBUcnVzdFBpbG90Q29uZmlnO1xyXG5cdEBJbnB1dCgpIG9wdGlvbnM/OiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucztcclxuXHRASW5wdXQoKSBza3U/OiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIHBsdWdpbnNTZXJ2aWNlOiBQbHVnaW5zU2VydmljZSxcclxuXHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuXHRcdHByaXZhdGUgdHJ1c3RQaWxvdDogVHJ1c3RQaWxvdFNlcnZpY2UsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXQoKTogdm9pZCB7XHJcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnRydXN0UGlsb3QpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUcnVzdFBpbG90U2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy50cnVzdFBpbG90Jyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnRydXN0UGlsb3RPcHRpb25zID0gdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnRydXN0UGlsb3Q7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnModGhpcy50cnVzdFBpbG90T3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnVHJ1c3RQaWxvdFdpZGdldENvbXBvbmVudC5uZ09uSW5pdCcsIHRoaXMub3B0aW9ucywgdGhpcy5sb2FkZWQpO1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKSB7IC8vICYmIGVudmlyb25tZW50LnByb2R1Y3Rpb25cclxuXHRcdFx0aWYgKCF0aGlzLmxvYWRlZCkge1xyXG5cdFx0XHRcdHRoaXMudHJ1c3RQaWxvdC5vbmNlKCkucGlwZShcclxuXHRcdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxyXG5cdFx0XHRcdCkuc3Vic2NyaWJlKFRydXN0cGlsb3QgPT4ge1xyXG5cdFx0XHRcdFx0VHJ1c3RwaWxvdC5sb2FkRnJvbUVsZW1lbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=