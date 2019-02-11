/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                this.trustPilot.once().pipe(takeUntil(this.unsubscribe)).subscribe(Trustpilot => {
                    Trustpilot.loadFromElement(this.elementRef.nativeElement.firstElementChild);
                    this.loaded = true;
                });
            }
        }
    }
}
TrustPilotWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'plugins-trustpilot-widget-component',
                template: "<ng-container>\n\t<ng-container [ngSwitch]=\"options.templateId\">\n\t\t<ng-container *ngSwitchCase=\"'544a426205dc0a09088833c6'\">\n\t\t\t<!-- PRODUCT REVIEWS -->\n\t\t\t<div class=\"trustpilot-comments\">\n\t\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-sku]=\"sku\" style=\"margin: 30px 0; max-width: 750px;\">\n\t\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'530d0eaf748a510e2093cf9b'\">\n\t\t\t<!-- EVALUATE -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-group]=\"options.group\" style=\"margin: 30px 0; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'53aa8807dec7e10d38f59f32'\">\n\t\t\t<!-- MINI -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'5613c9cde69ddc09340c6beb'\">\n\t\t\t<!-- STARTER -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'53aa8912dec7e10d38f59f36'\">\n\t\t\t<!-- CAROUSEL -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-stars]=\"options.stars\" style=\"margin: 15px auto;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t</ng-container>\n</ng-container>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFvQixpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFZbkMsWUFDQyxPQUFpQztRQVRsQyxXQUFNLEdBQVksT0FBTyxDQUFDO1FBRTFCLGdCQUFXLEdBQVksT0FBTyxDQUFDO1FBQy9CLGVBQVUsR0FBWSxNQUFNLENBQUM7UUFDN0IsVUFBSyxHQUFZLE9BQU8sQ0FBQztRQUN6QixVQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFVBQUssR0FBWSxXQUFXLENBQUM7UUFLNUIsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUEwQjtRQUM5QyxPQUFPLElBQUksdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUUsT0FBaUM7UUFDckMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUNEOzs7SUE3QkEsNkNBQW9COztJQUNwQixpREFBd0I7O0lBQ3hCLG1EQUEwQjs7SUFDMUIseUNBQTBCOztJQUMxQixzQ0FBYTs7SUFDYiw4Q0FBK0I7O0lBQy9CLDZDQUE2Qjs7SUFDN0Isd0NBQXlCOztJQUN6Qix3Q0FBc0I7O0lBQ3RCLHdDQUE2Qjs7QUE2QjlCLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxtQkFBbUI7Ozs7Ozs7SUFPakUsWUFDOEIsVUFBa0IsRUFDdkMsY0FBOEIsRUFDOUIsVUFBc0IsRUFDdEIsVUFBNkI7UUFFckMsS0FBSyxFQUFFLENBQUM7UUFMcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUdyQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDOzs7OztJQUVPLElBQUk7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDNUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO1NBQ25HO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksdUJBQXVCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxnRkFBZ0Y7UUFDaEYsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLDRCQUE0QjtZQUN0SCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUN4QixVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQzVFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixDQUFDLENBQUMsQ0FBQzthQUNIO1NBQ0Q7SUFDRixDQUFDOzs7WUE1Q0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLDByR0FBaUQ7Z0JBRWpELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFROzthQUN6Qzs7Ozt5Q0FVRSxNQUFNLFNBQUMsV0FBVztZQWxEWixjQUFjO1lBSFksVUFBVTtZQUlsQixpQkFBaUI7OztzQkE2QzFDLEtBQUs7a0JBQ0wsS0FBSzs7OztJQUhOLDJDQUFnQjs7SUFDaEIsc0RBQW9DOztJQUNwQyw0Q0FBMkM7O0lBQzNDLHdDQUFzQjs7Ozs7SUFHckIsK0NBQStDOzs7OztJQUMvQyxtREFBc0M7Ozs7O0lBQ3RDLCtDQUE4Qjs7Ozs7SUFDOUIsK0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XG5pbXBvcnQgeyBUcnVzdFBpbG90Q29uZmlnLCBUcnVzdFBpbG90U2VydmljZSB9IGZyb20gJy4vdHJ1c3RwaWxvdC5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFRydXN0UGlsb3RXaWRnZXRPcHRpb25zIHtcblx0dGVtcGxhdGVJZD86IHN0cmluZztcblx0YnVzaW5lc3N1bml0SWQ/OiBzdHJpbmc7XG5cdGJ1c2luZXNzdW5pdE5hbWU/OiBzdHJpbmc7XG5cdGxvY2FsZT86IHN0cmluZyA9ICdpdC1JVCc7XG5cdHNrdT86IHN0cmluZztcblx0c3R5bGVIZWlnaHQ/OiBzdHJpbmcgPSAnMzUwcHgnO1xuXHRzdHlsZVdpZHRoPzogc3RyaW5nID0gJzEwMCUnO1xuXHR0aGVtZT86IHN0cmluZyA9ICdsaWdodCc7XG5cdGdyb3VwPzogc3RyaW5nID0gJ29uJztcblx0c3RhcnM/OiBzdHJpbmcgPSAnMSwyLDMsNCw1JztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRvcHRpb25zPzogVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMsXG5cdCkge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBuZXdGcm9tQ29uZmlnKG9wdGlvbnM/OiBUcnVzdFBpbG90Q29uZmlnKTogVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMge1xuXHRcdHJldHVybiBuZXcgVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMob3B0aW9ucyk7XG5cdH1cblxuXHRzZXQ/KG9wdGlvbnM/OiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyk6IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zIHtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncGx1Z2lucy10cnVzdHBpbG90LXdpZGdldC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi90cnVzdHBpbG90LXdpZGdldC5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdGxvYWRlZDogYm9vbGVhbjtcblx0dHJ1c3RQaWxvdE9wdGlvbnM6IFRydXN0UGlsb3RDb25maWc7XG5cdEBJbnB1dCgpIG9wdGlvbnM/OiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucztcblx0QElucHV0KCkgc2t1Pzogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIHRydXN0UGlsb3Q6IFRydXN0UGlsb3RTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zICYmICF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMudHJ1c3RQaWxvdCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUcnVzdFBpbG90U2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy50cnVzdFBpbG90Jyk7XG5cdFx0fVxuXHRcdHRoaXMudHJ1c3RQaWxvdE9wdGlvbnMgPSB0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMudHJ1c3RQaWxvdDtcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnModGhpcy50cnVzdFBpbG90T3B0aW9ucyk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1RydXN0UGlsb3RXaWRnZXRDb21wb25lbnQubmdPbkluaXQnLCB0aGlzLm9wdGlvbnMsIHRoaXMubG9hZGVkKTtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpIHsgLy8gJiYgZW52aXJvbm1lbnQucHJvZHVjdGlvblxuXHRcdFx0aWYgKCF0aGlzLmxvYWRlZCkge1xuXHRcdFx0XHR0aGlzLnRydXN0UGlsb3Qub25jZSgpLnBpcGUoXG5cdFx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0XHRcdCkuc3Vic2NyaWJlKFRydXN0cGlsb3QgPT4ge1xuXHRcdFx0XHRcdFRydXN0cGlsb3QubG9hZEZyb21FbGVtZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKTtcblx0XHRcdFx0XHR0aGlzLmxvYWRlZCA9IHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iXX0=