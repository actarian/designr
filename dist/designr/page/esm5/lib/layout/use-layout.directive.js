/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Page } from '../page/page';
import { LayoutComponent } from './layout.component';
var UseLayoutDirective = /** @class */ (function () {
    function UseLayoutDirective(templateRef, viewContainerRef, componentFactoryResolver, configService) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.configService = configService;
    }
    /**
     * @return {?}
     */
    UseLayoutDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = this.configService.options;
        /** @type {?} */
        var component = options.layouts[this.layoutKey] || options.defaultLayout || LayoutComponent;
        /** @type {?} */
        var containerFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.container = this.viewContainerRef.createComponent(containerFactory);
        this.container.instance.template = this.templateRef;
        this.container.instance.page = this.page;
    };
    /**
     * @return {?}
     */
    UseLayoutDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.container) {
            this.container.destroy();
            this.container = null;
        }
    };
    UseLayoutDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[useLayout]'
                },] }
    ];
    /** @nocollapse */
    UseLayoutDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: ConfigService }
    ]; };
    UseLayoutDirective.propDecorators = {
        layoutKey: [{ type: Input, args: ['useLayout',] }],
        page: [{ type: Input }]
    };
    return UseLayoutDirective;
}());
export { UseLayoutDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UseLayoutDirective.prototype.container;
    /** @type {?} */
    UseLayoutDirective.prototype.layoutKey;
    /** @type {?} */
    UseLayoutDirective.prototype.page;
    /**
     * @type {?}
     * @private
     */
    UseLayoutDirective.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    UseLayoutDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    UseLayoutDirective.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    UseLayoutDirective.prototype.configService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWxheW91dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2xheW91dC91c2UtbGF5b3V0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFnQixTQUFTLEVBQUUsS0FBSyxFQUFxQixXQUFXLEVBQVEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakosT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJEO0lBU0MsNEJBQ1MsV0FBNkIsRUFDN0IsZ0JBQWtDLEVBQ2xDLHdCQUFrRCxFQUNsRCxhQUE0QjtRQUg1QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ2pDLENBQUM7Ozs7SUFFTCxxQ0FBUTs7O0lBQVI7O1lBQ08sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7WUFDcEMsU0FBUyxHQUEyQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsYUFBYSxJQUFJLGVBQWU7O1lBQy9HLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFDekYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzs7Z0JBOUJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsYUFBYTtpQkFDdkI7Ozs7Z0JBUnFGLFdBQVc7Z0JBQVEsZ0JBQWdCO2dCQUFoSCx3QkFBd0I7Z0JBQ3hCLGFBQWE7Ozs0QkFXcEIsS0FBSyxTQUFDLFdBQVc7dUJBQ2pCLEtBQUs7O0lBeUJQLHlCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0E3Qlksa0JBQWtCOzs7Ozs7SUFFOUIsdUNBQWtEOztJQUNsRCx1Q0FBdUM7O0lBQ3ZDLGtDQUFxQjs7Ozs7SUFHcEIseUNBQXFDOzs7OztJQUNyQyw4Q0FBMEM7Ozs7O0lBQzFDLHNEQUEwRDs7Ozs7SUFDMUQsMkNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVHlwZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vcGFnZS9wYWdlJztcbmltcG9ydCB7IElMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dCc7XG5pbXBvcnQgeyBMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbdXNlTGF5b3V0XSdcbn0pXG5leHBvcnQgY2xhc3MgVXNlTGF5b3V0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgY29udGFpbmVyOiBDb21wb25lbnRSZWY8SUxheW91dENvbXBvbmVudD47XG5cdEBJbnB1dCgndXNlTGF5b3V0JykgbGF5b3V0S2V5Pzogc3RyaW5nO1xuXHRASW5wdXQoKSBwYWdlPzogUGFnZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuXHRcdHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcblx0KSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnM7XG5cdFx0Y29uc3QgY29tcG9uZW50OiBUeXBlPElMYXlvdXRDb21wb25lbnQ+ID0gb3B0aW9ucy5sYXlvdXRzW3RoaXMubGF5b3V0S2V5XSB8fCBvcHRpb25zLmRlZmF1bHRMYXlvdXQgfHwgTGF5b3V0Q29tcG9uZW50O1xuXHRcdGNvbnN0IGNvbnRhaW5lckZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXHRcdHRoaXMuY29udGFpbmVyID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb250YWluZXJGYWN0b3J5KTtcblx0XHR0aGlzLmNvbnRhaW5lci5pbnN0YW5jZS50ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVSZWY7XG5cdFx0dGhpcy5jb250YWluZXIuaW5zdGFuY2UucGFnZSA9IHRoaXMucGFnZTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmICh0aGlzLmNvbnRhaW5lcikge1xuXHRcdFx0dGhpcy5jb250YWluZXIuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy5jb250YWluZXIgPSBudWxsO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=