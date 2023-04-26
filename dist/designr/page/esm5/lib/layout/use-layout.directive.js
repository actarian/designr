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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWxheW91dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2xheW91dC91c2UtbGF5b3V0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFnQixTQUFTLEVBQUUsS0FBSyxFQUFxQixXQUFXLEVBQVEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakosT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJEO0lBU0MsNEJBQ1MsV0FBNkIsRUFDN0IsZ0JBQWtDLEVBQ2xDLHdCQUFrRCxFQUNsRCxhQUE0QjtRQUg1QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ2pDLENBQUM7Ozs7SUFFTCxxQ0FBUTs7O0lBQVI7O1lBQ08sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7WUFDcEMsU0FBUyxHQUEyQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsYUFBYSxJQUFJLGVBQWU7O1lBQy9HLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFDekYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzs7Z0JBOUJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsYUFBYTtpQkFDdkI7Ozs7Z0JBUnFGLFdBQVc7Z0JBQVEsZ0JBQWdCO2dCQUFoSCx3QkFBd0I7Z0JBQ3hCLGFBQWE7Ozs0QkFXcEIsS0FBSyxTQUFDLFdBQVc7dUJBQ2pCLEtBQUs7O0lBeUJQLHlCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0E3Qlksa0JBQWtCOzs7Ozs7SUFFOUIsdUNBQWtEOztJQUNsRCx1Q0FBdUM7O0lBQ3ZDLGtDQUFxQjs7Ozs7SUFHcEIseUNBQXFDOzs7OztJQUNyQyw4Q0FBMEM7Ozs7O0lBQzFDLHNEQUEwRDs7Ozs7SUFDMUQsMkNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVHlwZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL3BhZ2UvcGFnZSc7XHJcbmltcG9ydCB7IElMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCB7IExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1t1c2VMYXlvdXRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlTGF5b3V0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuXHRwcml2YXRlIGNvbnRhaW5lcjogQ29tcG9uZW50UmVmPElMYXlvdXRDb21wb25lbnQ+O1xyXG5cdEBJbnB1dCgndXNlTGF5b3V0JykgbGF5b3V0S2V5Pzogc3RyaW5nO1xyXG5cdEBJbnB1dCgpIHBhZ2U/OiBQYWdlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcblx0XHRwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxyXG5cdCkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zO1xyXG5cdFx0Y29uc3QgY29tcG9uZW50OiBUeXBlPElMYXlvdXRDb21wb25lbnQ+ID0gb3B0aW9ucy5sYXlvdXRzW3RoaXMubGF5b3V0S2V5XSB8fCBvcHRpb25zLmRlZmF1bHRMYXlvdXQgfHwgTGF5b3V0Q29tcG9uZW50O1xyXG5cdFx0Y29uc3QgY29udGFpbmVyRmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XHJcblx0XHR0aGlzLmNvbnRhaW5lciA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29udGFpbmVyRmFjdG9yeSk7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5pbnN0YW5jZS50ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVSZWY7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5pbnN0YW5jZS5wYWdlID0gdGhpcy5wYWdlO1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZiAodGhpcy5jb250YWluZXIpIHtcclxuXHRcdFx0dGhpcy5jb250YWluZXIuZGVzdHJveSgpO1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lciA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=