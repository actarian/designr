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
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-template-id", ctx_r3.options.templateId)("data-businessunit-id", ctx_r3.options.businessunitId)("data-locale", ctx_r3.options.locale)("data-style-height", ctx_r3.options.styleHeight)("data-style-width", ctx_r3.options.styleWidth)("data-theme", ctx_r3.options.theme)("data-sku", ctx_r3.sku);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r3.options.businessunitName, "", i0.ɵɵsanitizeUrl);
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
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-template-id", ctx_r4.options.templateId)("data-businessunit-id", ctx_r4.options.businessunitId)("data-locale", ctx_r4.options.locale)("data-style-height", ctx_r4.options.styleHeight)("data-style-width", ctx_r4.options.styleWidth)("data-theme", ctx_r4.options.theme)("data-group", ctx_r4.options.group);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r4.options.businessunitName, "", i0.ɵɵsanitizeUrl);
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
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-template-id", ctx_r5.options.templateId)("data-businessunit-id", ctx_r5.options.businessunitId)("data-locale", ctx_r5.options.locale)("data-style-height", ctx_r5.options.styleHeight)("data-style-width", ctx_r5.options.styleWidth)("data-theme", ctx_r5.options.theme);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r5.options.businessunitName, "", i0.ɵɵsanitizeUrl);
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
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-template-id", ctx_r6.options.templateId)("data-businessunit-id", ctx_r6.options.businessunitId)("data-locale", ctx_r6.options.locale)("data-style-height", ctx_r6.options.styleHeight)("data-style-width", ctx_r6.options.styleWidth)("data-theme", ctx_r6.options.theme);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r6.options.businessunitName, "", i0.ɵɵsanitizeUrl);
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
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-template-id", ctx_r7.options.templateId)("data-businessunit-id", ctx_r7.options.businessunitId)("data-locale", ctx_r7.options.locale)("data-style-height", ctx_r7.options.styleHeight)("data-style-width", ctx_r7.options.styleWidth)("data-theme", ctx_r7.options.theme)("data-stars", ctx_r7.options.stars);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r7.options.businessunitName, "", i0.ɵɵsanitizeUrl);
} }
export class TrustPilotWidgetOptions {
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
    static newFromConfig(options) {
        return new TrustPilotWidgetOptions(options);
    }
    set(options) {
        if (options) {
            Object.assign(this, options);
        }
        return this;
    }
}
export class TrustPilotWidgetComponent extends DisposableComponent {
    constructor(platformId, pluginsService, elementRef, trustPilot) {
        super();
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.elementRef = elementRef;
        this.trustPilot = trustPilot;
        this.init();
    }
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.trustPilotOptions = this.pluginsService.options.trustPilot;
        this.options = new TrustPilotWidgetOptions(this.trustPilotOptions);
    }
    ngAfterViewInit() {
        // console.log('TrustPilotWidgetComponent.ngOnInit', this.options, this.loaded);
        if (isPlatformBrowser(this.platformId) && this.elementRef.nativeElement.children.length) { // && environment.production
            if (!this.loaded) {
                this.trustPilot.once().pipe(takeUntil(this.unsubscribe)).subscribe(Trustpilot => {
                    Trustpilot.loadFromElement(this.elementRef.nativeElement.firstElementChild);
                    this.loaded = true;
                });
            }
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LnRzIiwibGliL3BsdWdpbnMvdHJ1c3RwaWxvdC90cnVzdHBpbG90LXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFvQixpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7SUNIekUsNkJBQ0M7SUFDQSw4QkFDQztJQUFBLDhCQUNDO0lBQUEsNEJBQXdGO0lBQUEsMEJBQVU7SUFBQSxpQkFBSTtJQUN2RyxpQkFBTTtJQUNQLGlCQUFNO0lBQ1AsMEJBQWU7OztJQUprQixlQUE0QztJQUE1Qyw2REFBNEMsdURBQUEsc0NBQUEsaURBQUEsK0NBQUEsb0NBQUEsd0JBQUE7SUFDdkUsZUFBb0U7SUFBcEUsNkhBQW9FOzs7SUFJMUUsNkJBQ0M7SUFDQSw4QkFDQztJQUFBLDRCQUF3RjtJQUFBLDBCQUFVO0lBQUEsaUJBQUk7SUFDdkcsaUJBQU07SUFDUCwwQkFBZTs7O0lBSGlCLGVBQTRDO0lBQTVDLDZEQUE0Qyx1REFBQSxzQ0FBQSxpREFBQSwrQ0FBQSxvQ0FBQSxvQ0FBQTtJQUN2RSxl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Q0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUN4QixVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQzVFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixDQUFDLENBQUMsQ0FBQzthQUNIO1NBQ0Q7SUFDRixDQUFDOztrR0FyQ1cseUJBQXlCLHVCQVE1QixXQUFXOzhEQVJSLHlCQUF5QjtRQzlDdEMsNkJBQ0M7UUFBQSxnQ0FDQztRQUFBLDRGQUNDO1FBT0QsNEZBQ0M7UUFLRCw0RkFDQztRQUtELDRGQUNDO1FBS0QsNEZBQ0M7UUFLRiwwQkFBZTtRQUNoQiwwQkFBZTs7UUFsQ0EsZUFBK0I7UUFBL0IsaURBQStCO1FBQzlCLGVBQTBDO1FBQTFDLHlEQUEwQztRQVExQyxlQUEwQztRQUExQyx5REFBMEM7UUFNMUMsZUFBMEM7UUFBMUMseURBQTBDO1FBTTFDLGVBQTBDO1FBQTFDLHlEQUEwQztRQU0xQyxlQUEwQztRQUExQyx5REFBMEM7O2tERGtCN0MseUJBQXlCO2NBUHJDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUscUNBQXFDO2dCQUMvQyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztnQkFDakQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7YUFDekM7O3NCQVVFLE1BQU07dUJBQUMsV0FBVzs7a0JBSm5CLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIFBMQVRGT1JNX0lELCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlJztcbmltcG9ydCB7IFRydXN0UGlsb3RDb25maWcsIFRydXN0UGlsb3RTZXJ2aWNlIH0gZnJvbSAnLi90cnVzdHBpbG90LnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMge1xuXHR0ZW1wbGF0ZUlkPzogc3RyaW5nO1xuXHRidXNpbmVzc3VuaXRJZD86IHN0cmluZztcblx0YnVzaW5lc3N1bml0TmFtZT86IHN0cmluZztcblx0bG9jYWxlPzogc3RyaW5nID0gJ2l0LUlUJztcblx0c2t1Pzogc3RyaW5nO1xuXHRzdHlsZUhlaWdodD86IHN0cmluZyA9ICczNTBweCc7XG5cdHN0eWxlV2lkdGg/OiBzdHJpbmcgPSAnMTAwJSc7XG5cdHRoZW1lPzogc3RyaW5nID0gJ2xpZ2h0Jztcblx0Z3JvdXA/OiBzdHJpbmcgPSAnb24nO1xuXHRzdGFycz86IHN0cmluZyA9ICcxLDIsMyw0LDUnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG9wdGlvbnM/OiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyxcblx0KSB7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIG5ld0Zyb21Db25maWcob3B0aW9ucz86IFRydXN0UGlsb3RDb25maWcpOiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyB7XG5cdFx0cmV0dXJuIG5ldyBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyhvcHRpb25zKTtcblx0fVxuXG5cdHNldD8ob3B0aW9ucz86IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zKTogVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdwbHVnaW5zLXRydXN0cGlsb3Qtd2lkZ2V0LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnLi90cnVzdHBpbG90LXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3RydXN0cGlsb3Qtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ10sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcblxuZXhwb3J0IGNsYXNzIFRydXN0UGlsb3RXaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0bG9hZGVkOiBib29sZWFuO1xuXHR0cnVzdFBpbG90T3B0aW9uczogVHJ1c3RQaWxvdENvbmZpZztcblx0QElucHV0KCkgb3B0aW9ucz86IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zO1xuXHRASW5wdXQoKSBza3U/OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgdHJ1c3RQaWxvdDogVHJ1c3RQaWxvdFNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRwcml2YXRlIGluaXQoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMgJiYgIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy50cnVzdFBpbG90KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RydXN0UGlsb3RTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLnRydXN0UGlsb3QnKTtcblx0XHR9XG5cdFx0dGhpcy50cnVzdFBpbG90T3B0aW9ucyA9IHRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy50cnVzdFBpbG90O1xuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyh0aGlzLnRydXN0UGlsb3RPcHRpb25zKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnVHJ1c3RQaWxvdFdpZGdldENvbXBvbmVudC5uZ09uSW5pdCcsIHRoaXMub3B0aW9ucywgdGhpcy5sb2FkZWQpO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkgeyAvLyAmJiBlbnZpcm9ubWVudC5wcm9kdWN0aW9uXG5cdFx0XHRpZiAoIXRoaXMubG9hZGVkKSB7XG5cdFx0XHRcdHRoaXMudHJ1c3RQaWxvdC5vbmNlKCkucGlwZShcblx0XHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcblx0XHRcdFx0KS5zdWJzY3JpYmUoVHJ1c3RwaWxvdCA9PiB7XG5cdFx0XHRcdFx0VHJ1c3RwaWxvdC5sb2FkRnJvbUVsZW1lbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuXHRcdFx0XHRcdHRoaXMubG9hZGVkID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiIsIjxuZy1jb250YWluZXI+XG5cdDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIm9wdGlvbnMudGVtcGxhdGVJZFwiPlxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIic1NDRhNDI2MjA1ZGMwYTA5MDg4ODMzYzYnXCI+XG5cdFx0XHQ8IS0tIFBST0RVQ1QgUkVWSUVXUyAtLT5cblx0XHRcdDxkaXYgY2xhc3M9XCJ0cnVzdHBpbG90LWNvbW1lbnRzXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0cnVzdHBpbG90LXdpZGdldFwiIFthdHRyLmRhdGEtdGVtcGxhdGUtaWRdPVwib3B0aW9ucy50ZW1wbGF0ZUlkXCIgW2F0dHIuZGF0YS1idXNpbmVzc3VuaXQtaWRdPVwib3B0aW9ucy5idXNpbmVzc3VuaXRJZFwiIFthdHRyLmRhdGEtbG9jYWxlXT1cIm9wdGlvbnMubG9jYWxlXCIgW2F0dHIuZGF0YS1zdHlsZS1oZWlnaHRdPVwib3B0aW9ucy5zdHlsZUhlaWdodFwiIFthdHRyLmRhdGEtc3R5bGUtd2lkdGhdPVwib3B0aW9ucy5zdHlsZVdpZHRoXCIgW2F0dHIuZGF0YS10aGVtZV09XCJvcHRpb25zLnRoZW1lXCIgW2F0dHIuZGF0YS1za3VdPVwic2t1XCIgc3R5bGU9XCJtYXJnaW46IDMwcHggMDsgbWF4LXdpZHRoOiA3NTBweDtcIj5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9pdC50cnVzdHBpbG90LmNvbS9yZXZpZXcve3tvcHRpb25zLmJ1c2luZXNzdW5pdE5hbWV9fVwiIHRhcmdldD1cIl9ibGFua1wiPlRydXN0cGlsb3Q8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJzUzMGQwZWFmNzQ4YTUxMGUyMDkzY2Y5YidcIj5cblx0XHRcdDwhLS0gRVZBTFVBVEUgLS0+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidHJ1c3RwaWxvdC13aWRnZXRcIiBbYXR0ci5kYXRhLXRlbXBsYXRlLWlkXT1cIm9wdGlvbnMudGVtcGxhdGVJZFwiIFthdHRyLmRhdGEtYnVzaW5lc3N1bml0LWlkXT1cIm9wdGlvbnMuYnVzaW5lc3N1bml0SWRcIiBbYXR0ci5kYXRhLWxvY2FsZV09XCJvcHRpb25zLmxvY2FsZVwiIFthdHRyLmRhdGEtc3R5bGUtaGVpZ2h0XT1cIm9wdGlvbnMuc3R5bGVIZWlnaHRcIiBbYXR0ci5kYXRhLXN0eWxlLXdpZHRoXT1cIm9wdGlvbnMuc3R5bGVXaWR0aFwiIFthdHRyLmRhdGEtdGhlbWVdPVwib3B0aW9ucy50aGVtZVwiIFthdHRyLmRhdGEtZ3JvdXBdPVwib3B0aW9ucy5ncm91cFwiIHN0eWxlPVwibWFyZ2luOiAzMHB4IDA7IG1heC13aWR0aDogNzUwcHg7XCI+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL2l0LnRydXN0cGlsb3QuY29tL3Jldmlldy97e29wdGlvbnMuYnVzaW5lc3N1bml0TmFtZX19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VHJ1c3RwaWxvdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIic1M2FhODgwN2RlYzdlMTBkMzhmNTlmMzInXCI+XG5cdFx0XHQ8IS0tIE1JTkkgLS0+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidHJ1c3RwaWxvdC13aWRnZXRcIiBbYXR0ci5kYXRhLXRlbXBsYXRlLWlkXT1cIm9wdGlvbnMudGVtcGxhdGVJZFwiIFthdHRyLmRhdGEtYnVzaW5lc3N1bml0LWlkXT1cIm9wdGlvbnMuYnVzaW5lc3N1bml0SWRcIiBbYXR0ci5kYXRhLWxvY2FsZV09XCJvcHRpb25zLmxvY2FsZVwiIFthdHRyLmRhdGEtc3R5bGUtaGVpZ2h0XT1cIm9wdGlvbnMuc3R5bGVIZWlnaHRcIiBbYXR0ci5kYXRhLXN0eWxlLXdpZHRoXT1cIm9wdGlvbnMuc3R5bGVXaWR0aFwiIFthdHRyLmRhdGEtdGhlbWVdPVwib3B0aW9ucy50aGVtZVwiIHN0eWxlPVwibWFyZ2luOiAxNXB4IGF1dG87IG1heC13aWR0aDogNzUwcHg7XCI+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL2l0LnRydXN0cGlsb3QuY29tL3Jldmlldy97e29wdGlvbnMuYnVzaW5lc3N1bml0TmFtZX19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VHJ1c3RwaWxvdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIic1NjEzYzljZGU2OWRkYzA5MzQwYzZiZWInXCI+XG5cdFx0XHQ8IS0tIFNUQVJURVIgLS0+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidHJ1c3RwaWxvdC13aWRnZXRcIiBbYXR0ci5kYXRhLXRlbXBsYXRlLWlkXT1cIm9wdGlvbnMudGVtcGxhdGVJZFwiIFthdHRyLmRhdGEtYnVzaW5lc3N1bml0LWlkXT1cIm9wdGlvbnMuYnVzaW5lc3N1bml0SWRcIiBbYXR0ci5kYXRhLWxvY2FsZV09XCJvcHRpb25zLmxvY2FsZVwiIFthdHRyLmRhdGEtc3R5bGUtaGVpZ2h0XT1cIm9wdGlvbnMuc3R5bGVIZWlnaHRcIiBbYXR0ci5kYXRhLXN0eWxlLXdpZHRoXT1cIm9wdGlvbnMuc3R5bGVXaWR0aFwiIFthdHRyLmRhdGEtdGhlbWVdPVwib3B0aW9ucy50aGVtZVwiIHN0eWxlPVwibWFyZ2luOiAxNXB4IGF1dG87IG1heC13aWR0aDogNzUwcHg7XCI+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL2l0LnRydXN0cGlsb3QuY29tL3Jldmlldy97e29wdGlvbnMuYnVzaW5lc3N1bml0TmFtZX19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VHJ1c3RwaWxvdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIic1M2FhODkxMmRlYzdlMTBkMzhmNTlmMzYnXCI+XG5cdFx0XHQ8IS0tIENBUk9VU0VMIC0tPlxuXHRcdFx0PGRpdiBjbGFzcz1cInRydXN0cGlsb3Qtd2lkZ2V0XCIgW2F0dHIuZGF0YS10ZW1wbGF0ZS1pZF09XCJvcHRpb25zLnRlbXBsYXRlSWRcIiBbYXR0ci5kYXRhLWJ1c2luZXNzdW5pdC1pZF09XCJvcHRpb25zLmJ1c2luZXNzdW5pdElkXCIgW2F0dHIuZGF0YS1sb2NhbGVdPVwib3B0aW9ucy5sb2NhbGVcIiBbYXR0ci5kYXRhLXN0eWxlLWhlaWdodF09XCJvcHRpb25zLnN0eWxlSGVpZ2h0XCIgW2F0dHIuZGF0YS1zdHlsZS13aWR0aF09XCJvcHRpb25zLnN0eWxlV2lkdGhcIiBbYXR0ci5kYXRhLXRoZW1lXT1cIm9wdGlvbnMudGhlbWVcIiBbYXR0ci5kYXRhLXN0YXJzXT1cIm9wdGlvbnMuc3RhcnNcIiBzdHlsZT1cIm1hcmdpbjogMTVweCBhdXRvO1wiPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9pdC50cnVzdHBpbG90LmNvbS9yZXZpZXcve3tvcHRpb25zLmJ1c2luZXNzdW5pdE5hbWV9fVwiIHRhcmdldD1cIl9ibGFua1wiPlRydXN0cGlsb3Q8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblx0PC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==