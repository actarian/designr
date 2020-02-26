import { __extends } from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { takeUntil } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import { TrustPilotService } from './trustpilot.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/plugins.service";
import * as i2 from "./trustpilot.service";
import * as i3 from "@angular/common";
function TrustPilotWidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "a", 4);
    i0.ɵɵtext(4, "Trustpilot");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-template-id", ctx_r11.options.templateId)("data-businessunit-id", ctx_r11.options.businessunitId)("data-locale", ctx_r11.options.locale)("data-style-height", ctx_r11.options.styleHeight)("data-style-width", ctx_r11.options.styleWidth)("data-theme", ctx_r11.options.theme)("data-sku", ctx_r11.sku);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r11.options.businessunitName, "", i0.ɵɵsanitizeUrl);
} }
function TrustPilotWidgetComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "a", 4);
    i0.ɵɵtext(3, "Trustpilot");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-template-id", ctx_r12.options.templateId)("data-businessunit-id", ctx_r12.options.businessunitId)("data-locale", ctx_r12.options.locale)("data-style-height", ctx_r12.options.styleHeight)("data-style-width", ctx_r12.options.styleWidth)("data-theme", ctx_r12.options.theme)("data-group", ctx_r12.options.group);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r12.options.businessunitName, "", i0.ɵɵsanitizeUrl);
} }
function TrustPilotWidgetComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "a", 4);
    i0.ɵɵtext(3, "Trustpilot");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-template-id", ctx_r13.options.templateId)("data-businessunit-id", ctx_r13.options.businessunitId)("data-locale", ctx_r13.options.locale)("data-style-height", ctx_r13.options.styleHeight)("data-style-width", ctx_r13.options.styleWidth)("data-theme", ctx_r13.options.theme);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r13.options.businessunitName, "", i0.ɵɵsanitizeUrl);
} }
function TrustPilotWidgetComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "a", 4);
    i0.ɵɵtext(3, "Trustpilot");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-template-id", ctx_r14.options.templateId)("data-businessunit-id", ctx_r14.options.businessunitId)("data-locale", ctx_r14.options.locale)("data-style-height", ctx_r14.options.styleHeight)("data-style-width", ctx_r14.options.styleWidth)("data-theme", ctx_r14.options.theme);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r14.options.businessunitName, "", i0.ɵɵsanitizeUrl);
} }
function TrustPilotWidgetComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "a", 4);
    i0.ɵɵtext(3, "Trustpilot");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-template-id", ctx_r15.options.templateId)("data-businessunit-id", ctx_r15.options.businessunitId)("data-locale", ctx_r15.options.locale)("data-style-height", ctx_r15.options.styleHeight)("data-style-width", ctx_r15.options.styleWidth)("data-theme", ctx_r15.options.theme)("data-stars", ctx_r15.options.stars);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r15.options.businessunitName, "", i0.ɵɵsanitizeUrl);
} }
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
    TrustPilotWidgetOptions.newFromConfig = function (options) {
        return new TrustPilotWidgetOptions(options);
    };
    TrustPilotWidgetOptions.prototype.set = function (options) {
        if (options) {
            Object.assign(this, options);
        }
        return this;
    };
    return TrustPilotWidgetOptions;
}());
export { TrustPilotWidgetOptions };
var TrustPilotWidgetComponent = /** @class */ (function (_super) {
    __extends(TrustPilotWidgetComponent, _super);
    function TrustPilotWidgetComponent(platformId, pluginsService, elementRef, trustPilot) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.pluginsService = pluginsService;
        _this.elementRef = elementRef;
        _this.trustPilot = trustPilot;
        _this.init();
        return _this;
    }
    TrustPilotWidgetComponent.prototype.init = function () {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.trustPilotOptions = this.pluginsService.options.trustPilot;
        this.options = new TrustPilotWidgetOptions(this.trustPilotOptions);
    };
    TrustPilotWidgetComponent.prototype.ngAfterViewInit = function () {
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
    TrustPilotWidgetComponent.ɵfac = function TrustPilotWidgetComponent_Factory(t) { return new (t || TrustPilotWidgetComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i1.PluginsService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.TrustPilotService)); };
    TrustPilotWidgetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TrustPilotWidgetComponent, selectors: [["plugins-trustpilot-widget-component"]], inputs: { options: "options", sku: "sku" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 6, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "trustpilot-comments"], [1, "trustpilot-widget", 2, "margin", "30px 0", "max-width", "750px"], ["target", "_blank", 3, "href"], [1, "trustpilot-widget", 2, "margin", "15px auto", "max-width", "750px"], [1, "trustpilot-widget", 2, "margin", "15px auto"]], template: function TrustPilotWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementContainerStart(1, 0);
            i0.ɵɵtemplate(2, TrustPilotWidgetComponent_ng_container_2_Template, 5, 8, "ng-container", 1);
            i0.ɵɵtemplate(3, TrustPilotWidgetComponent_ng_container_3_Template, 4, 8, "ng-container", 1);
            i0.ɵɵtemplate(4, TrustPilotWidgetComponent_ng_container_4_Template, 4, 7, "ng-container", 1);
            i0.ɵɵtemplate(5, TrustPilotWidgetComponent_ng_container_5_Template, 4, 7, "ng-container", 1);
            i0.ɵɵtemplate(6, TrustPilotWidgetComponent_ng_container_6_Template, 4, 8, "ng-container", 1);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", ctx.options.templateId);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "544a426205dc0a09088833c6");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "530d0eaf748a510e2093cf9b");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "53aa8807dec7e10d38f59f32");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "5613c9cde69ddc09340c6beb");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "53aa8912dec7e10d38f59f36");
        } }, directives: [i3.NgSwitch, i3.NgSwitchCase], styles: ["[_nghost-%COMP%]{width:100%}.trustpilot-widget[_ngcontent-%COMP%]{margin:15px auto!important}@media print{.trustpilot-comments[_ngcontent-%COMP%]{display:none!important}}"] });
    return TrustPilotWidgetComponent;
}(DisposableComponent));
export { TrustPilotWidgetComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TrustPilotWidgetComponent, [{
        type: Component,
        args: [{
                selector: 'plugins-trustpilot-widget-component',
                templateUrl: './trustpilot-widget.component.html',
                styleUrls: ['./trustpilot-widget.component.scss'],
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PluginsService }, { type: i0.ElementRef }, { type: i2.TrustPilotService }]; }, { options: [{
            type: Input
        }], sku: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LnRzIiwibGliL3BsdWdpbnMvdHJ1c3RwaWxvdC90cnVzdHBpbG90LXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBb0IsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0lDSHpFLDZCQUNDO0lBQ0EsOEJBQ0M7SUFBQSw4QkFDQztJQUFBLDRCQUF3RjtJQUFBLDBCQUFVO0lBQUEsaUJBQUk7SUFDdkcsaUJBQU07SUFDUCxpQkFBTTtJQUNQLDBCQUFlOzs7SUFKa0IsZUFBNEM7SUFBNUMsOERBQTRDLHdEQUFBLHVDQUFBLGtEQUFBLGdEQUFBLHFDQUFBLHlCQUFBO0lBQ3ZFLGVBQW9FO0lBQXBFLDhIQUFvRTs7O0lBSTFFLDZCQUNDO0lBQ0EsOEJBQ0M7SUFBQSw0QkFBd0Y7SUFBQSwwQkFBVTtJQUFBLGlCQUFJO0lBQ3ZHLGlCQUFNO0lBQ1AsMEJBQWU7OztJQUhpQixlQUE0QztJQUE1Qyw4REFBNEMsd0RBQUEsdUNBQUEsa0RBQUEsZ0RBQUEscUNBQUEscUNBQUE7SUFDdkUs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QUFJLEVBQUUsQ0FBQyxJQUFJLENBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUyxDQUFDLFVBQUEsVUFBVTtvQkFDckIsVUFBVSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUM1RSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLENBQUM7YUFDSDtTQUNEO0lBQ0YsQ0FBQztzR0FyQ1cseUJBQXlCLHVCQVE1QixXQUFXO2tFQVJSLHlCQUF5QjtZQzlDdEMsNkJBQ0M7WUFBQSxnQ0FDQztZQUFBLDRGQUNDO1lBT0QsNEZBQ0M7WUFLRCw0RkFDQztZQUtELDRGQUNDO1lBS0QsNEZBQ0M7WUFLRiwwQkFBZTtZQUNoQiwwQkFBZTs7WUFsQ0EsZUFBK0I7WUFBL0IsaURBQStCO1lBQzlCLGVBQTBDO1lBQTFDLHlEQUEwQztZQVExQyxlQUEwQztZQUExQyx5REFBMEM7WUFNMUMsZUFBMEM7WUFBMUMseURBQTBDO1lBTTFDLGVBQTBDO1lBQTFDLHlEQUEwQztZQU0xQyxlQUEwQztZQUExQyx5REFBMEM7O29DRDVCMUQ7Q0FxRkMsQUE5Q0QsQ0FPK0MsbUJBQW1CLEdBdUNqRTtTQXZDWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQVByQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7Z0JBQ2pELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFRO2FBQ3pDOztzQkFVRSxNQUFNO3VCQUFDLFdBQVc7O2tCQUpuQixLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XG5pbXBvcnQgeyBUcnVzdFBpbG90Q29uZmlnLCBUcnVzdFBpbG90U2VydmljZSB9IGZyb20gJy4vdHJ1c3RwaWxvdC5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFRydXN0UGlsb3RXaWRnZXRPcHRpb25zIHtcblx0dGVtcGxhdGVJZD86IHN0cmluZztcblx0YnVzaW5lc3N1bml0SWQ/OiBzdHJpbmc7XG5cdGJ1c2luZXNzdW5pdE5hbWU/OiBzdHJpbmc7XG5cdGxvY2FsZT86IHN0cmluZyA9ICdpdC1JVCc7XG5cdHNrdT86IHN0cmluZztcblx0c3R5bGVIZWlnaHQ/OiBzdHJpbmcgPSAnMzUwcHgnO1xuXHRzdHlsZVdpZHRoPzogc3RyaW5nID0gJzEwMCUnO1xuXHR0aGVtZT86IHN0cmluZyA9ICdsaWdodCc7XG5cdGdyb3VwPzogc3RyaW5nID0gJ29uJztcblx0c3RhcnM/OiBzdHJpbmcgPSAnMSwyLDMsNCw1JztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRvcHRpb25zPzogVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMsXG5cdCkge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBuZXdGcm9tQ29uZmlnKG9wdGlvbnM/OiBUcnVzdFBpbG90Q29uZmlnKTogVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMge1xuXHRcdHJldHVybiBuZXcgVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMob3B0aW9ucyk7XG5cdH1cblxuXHRzZXQ/KG9wdGlvbnM/OiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyk6IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zIHtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncGx1Z2lucy10cnVzdHBpbG90LXdpZGdldC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi90cnVzdHBpbG90LXdpZGdldC5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdGxvYWRlZDogYm9vbGVhbjtcblx0dHJ1c3RQaWxvdE9wdGlvbnM6IFRydXN0UGlsb3RDb25maWc7XG5cdEBJbnB1dCgpIG9wdGlvbnM/OiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucztcblx0QElucHV0KCkgc2t1Pzogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIHRydXN0UGlsb3Q6IFRydXN0UGlsb3RTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zICYmICF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMudHJ1c3RQaWxvdCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUcnVzdFBpbG90U2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy50cnVzdFBpbG90Jyk7XG5cdFx0fVxuXHRcdHRoaXMudHJ1c3RQaWxvdE9wdGlvbnMgPSB0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMudHJ1c3RQaWxvdDtcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnModGhpcy50cnVzdFBpbG90T3B0aW9ucyk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1RydXN0UGlsb3RXaWRnZXRDb21wb25lbnQubmdPbkluaXQnLCB0aGlzLm9wdGlvbnMsIHRoaXMubG9hZGVkKTtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpIHsgLy8gJiYgZW52aXJvbm1lbnQucHJvZHVjdGlvblxuXHRcdFx0aWYgKCF0aGlzLmxvYWRlZCkge1xuXHRcdFx0XHR0aGlzLnRydXN0UGlsb3Qub25jZSgpLnBpcGUoXG5cdFx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0XHRcdCkuc3Vic2NyaWJlKFRydXN0cGlsb3QgPT4ge1xuXHRcdFx0XHRcdFRydXN0cGlsb3QubG9hZEZyb21FbGVtZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKTtcblx0XHRcdFx0XHR0aGlzLmxvYWRlZCA9IHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iLCI8bmctY29udGFpbmVyPlxuXHQ8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJvcHRpb25zLnRlbXBsYXRlSWRcIj5cblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInNTQ0YTQyNjIwNWRjMGEwOTA4ODgzM2M2J1wiPlxuXHRcdFx0PCEtLSBQUk9EVUNUIFJFVklFV1MgLS0+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidHJ1c3RwaWxvdC1jb21tZW50c1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidHJ1c3RwaWxvdC13aWRnZXRcIiBbYXR0ci5kYXRhLXRlbXBsYXRlLWlkXT1cIm9wdGlvbnMudGVtcGxhdGVJZFwiIFthdHRyLmRhdGEtYnVzaW5lc3N1bml0LWlkXT1cIm9wdGlvbnMuYnVzaW5lc3N1bml0SWRcIiBbYXR0ci5kYXRhLWxvY2FsZV09XCJvcHRpb25zLmxvY2FsZVwiIFthdHRyLmRhdGEtc3R5bGUtaGVpZ2h0XT1cIm9wdGlvbnMuc3R5bGVIZWlnaHRcIiBbYXR0ci5kYXRhLXN0eWxlLXdpZHRoXT1cIm9wdGlvbnMuc3R5bGVXaWR0aFwiIFthdHRyLmRhdGEtdGhlbWVdPVwib3B0aW9ucy50aGVtZVwiIFthdHRyLmRhdGEtc2t1XT1cInNrdVwiIHN0eWxlPVwibWFyZ2luOiAzMHB4IDA7IG1heC13aWR0aDogNzUwcHg7XCI+XG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vaXQudHJ1c3RwaWxvdC5jb20vcmV2aWV3L3t7b3B0aW9ucy5idXNpbmVzc3VuaXROYW1lfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5UcnVzdHBpbG90PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIic1MzBkMGVhZjc0OGE1MTBlMjA5M2NmOWInXCI+XG5cdFx0XHQ8IS0tIEVWQUxVQVRFIC0tPlxuXHRcdFx0PGRpdiBjbGFzcz1cInRydXN0cGlsb3Qtd2lkZ2V0XCIgW2F0dHIuZGF0YS10ZW1wbGF0ZS1pZF09XCJvcHRpb25zLnRlbXBsYXRlSWRcIiBbYXR0ci5kYXRhLWJ1c2luZXNzdW5pdC1pZF09XCJvcHRpb25zLmJ1c2luZXNzdW5pdElkXCIgW2F0dHIuZGF0YS1sb2NhbGVdPVwib3B0aW9ucy5sb2NhbGVcIiBbYXR0ci5kYXRhLXN0eWxlLWhlaWdodF09XCJvcHRpb25zLnN0eWxlSGVpZ2h0XCIgW2F0dHIuZGF0YS1zdHlsZS13aWR0aF09XCJvcHRpb25zLnN0eWxlV2lkdGhcIiBbYXR0ci5kYXRhLXRoZW1lXT1cIm9wdGlvbnMudGhlbWVcIiBbYXR0ci5kYXRhLWdyb3VwXT1cIm9wdGlvbnMuZ3JvdXBcIiBzdHlsZT1cIm1hcmdpbjogMzBweCAwOyBtYXgtd2lkdGg6IDc1MHB4O1wiPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9pdC50cnVzdHBpbG90LmNvbS9yZXZpZXcve3tvcHRpb25zLmJ1c2luZXNzdW5pdE5hbWV9fVwiIHRhcmdldD1cIl9ibGFua1wiPlRydXN0cGlsb3Q8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInNTNhYTg4MDdkZWM3ZTEwZDM4ZjU5ZjMyJ1wiPlxuXHRcdFx0PCEtLSBNSU5JIC0tPlxuXHRcdFx0PGRpdiBjbGFzcz1cInRydXN0cGlsb3Qtd2lkZ2V0XCIgW2F0dHIuZGF0YS10ZW1wbGF0ZS1pZF09XCJvcHRpb25zLnRlbXBsYXRlSWRcIiBbYXR0ci5kYXRhLWJ1c2luZXNzdW5pdC1pZF09XCJvcHRpb25zLmJ1c2luZXNzdW5pdElkXCIgW2F0dHIuZGF0YS1sb2NhbGVdPVwib3B0aW9ucy5sb2NhbGVcIiBbYXR0ci5kYXRhLXN0eWxlLWhlaWdodF09XCJvcHRpb25zLnN0eWxlSGVpZ2h0XCIgW2F0dHIuZGF0YS1zdHlsZS13aWR0aF09XCJvcHRpb25zLnN0eWxlV2lkdGhcIiBbYXR0ci5kYXRhLXRoZW1lXT1cIm9wdGlvbnMudGhlbWVcIiBzdHlsZT1cIm1hcmdpbjogMTVweCBhdXRvOyBtYXgtd2lkdGg6IDc1MHB4O1wiPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9pdC50cnVzdHBpbG90LmNvbS9yZXZpZXcve3tvcHRpb25zLmJ1c2luZXNzdW5pdE5hbWV9fVwiIHRhcmdldD1cIl9ibGFua1wiPlRydXN0cGlsb3Q8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInNTYxM2M5Y2RlNjlkZGMwOTM0MGM2YmViJ1wiPlxuXHRcdFx0PCEtLSBTVEFSVEVSIC0tPlxuXHRcdFx0PGRpdiBjbGFzcz1cInRydXN0cGlsb3Qtd2lkZ2V0XCIgW2F0dHIuZGF0YS10ZW1wbGF0ZS1pZF09XCJvcHRpb25zLnRlbXBsYXRlSWRcIiBbYXR0ci5kYXRhLWJ1c2luZXNzdW5pdC1pZF09XCJvcHRpb25zLmJ1c2luZXNzdW5pdElkXCIgW2F0dHIuZGF0YS1sb2NhbGVdPVwib3B0aW9ucy5sb2NhbGVcIiBbYXR0ci5kYXRhLXN0eWxlLWhlaWdodF09XCJvcHRpb25zLnN0eWxlSGVpZ2h0XCIgW2F0dHIuZGF0YS1zdHlsZS13aWR0aF09XCJvcHRpb25zLnN0eWxlV2lkdGhcIiBbYXR0ci5kYXRhLXRoZW1lXT1cIm9wdGlvbnMudGhlbWVcIiBzdHlsZT1cIm1hcmdpbjogMTVweCBhdXRvOyBtYXgtd2lkdGg6IDc1MHB4O1wiPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9pdC50cnVzdHBpbG90LmNvbS9yZXZpZXcve3tvcHRpb25zLmJ1c2luZXNzdW5pdE5hbWV9fVwiIHRhcmdldD1cIl9ibGFua1wiPlRydXN0cGlsb3Q8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInNTNhYTg5MTJkZWM3ZTEwZDM4ZjU5ZjM2J1wiPlxuXHRcdFx0PCEtLSBDQVJPVVNFTCAtLT5cblx0XHRcdDxkaXYgY2xhc3M9XCJ0cnVzdHBpbG90LXdpZGdldFwiIFthdHRyLmRhdGEtdGVtcGxhdGUtaWRdPVwib3B0aW9ucy50ZW1wbGF0ZUlkXCIgW2F0dHIuZGF0YS1idXNpbmVzc3VuaXQtaWRdPVwib3B0aW9ucy5idXNpbmVzc3VuaXRJZFwiIFthdHRyLmRhdGEtbG9jYWxlXT1cIm9wdGlvbnMubG9jYWxlXCIgW2F0dHIuZGF0YS1zdHlsZS1oZWlnaHRdPVwib3B0aW9ucy5zdHlsZUhlaWdodFwiIFthdHRyLmRhdGEtc3R5bGUtd2lkdGhdPVwib3B0aW9ucy5zdHlsZVdpZHRoXCIgW2F0dHIuZGF0YS10aGVtZV09XCJvcHRpb25zLnRoZW1lXCIgW2F0dHIuZGF0YS1zdGFyc109XCJvcHRpb25zLnN0YXJzXCIgc3R5bGU9XCJtYXJnaW46IDE1cHggYXV0bztcIj5cblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vaXQudHJ1c3RwaWxvdC5jb20vcmV2aWV3L3t7b3B0aW9ucy5idXNpbmVzc3VuaXROYW1lfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5UcnVzdHBpbG90PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cdDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG4iXX0=