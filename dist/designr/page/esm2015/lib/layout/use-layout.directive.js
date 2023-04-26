/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Page } from '../page/page';
import { LayoutComponent } from './layout.component';
export class UseLayoutDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     * @param {?} componentFactoryResolver
     * @param {?} configService
     */
    constructor(templateRef, viewContainerRef, componentFactoryResolver, configService) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.configService = configService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const options = this.configService.options;
        /** @type {?} */
        const component = options.layouts[this.layoutKey] || options.defaultLayout || LayoutComponent;
        /** @type {?} */
        const containerFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.container = this.viewContainerRef.createComponent(containerFactory);
        this.container.instance.template = this.templateRef;
        this.container.instance.page = this.page;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.container) {
            this.container.destroy();
            this.container = null;
        }
    }
}
UseLayoutDirective.decorators = [
    { type: Directive, args: [{
                selector: '[useLayout]'
            },] }
];
/** @nocollapse */
UseLayoutDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: ConfigService }
];
UseLayoutDirective.propDecorators = {
    layoutKey: [{ type: Input, args: ['useLayout',] }],
    page: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWxheW91dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2xheW91dC91c2UtbGF5b3V0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFnQixTQUFTLEVBQUUsS0FBSyxFQUFxQixXQUFXLEVBQVEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakosT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3JELE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7SUFNOUIsWUFDUyxXQUE2QixFQUM3QixnQkFBa0MsRUFDbEMsd0JBQWtELEVBQ2xELGFBQTRCO1FBSDVCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDakMsQ0FBQzs7OztJQUVMLFFBQVE7O2NBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7Y0FDcEMsU0FBUyxHQUEyQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsYUFBYSxJQUFJLGVBQWU7O2NBQy9HLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFDekYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNGLENBQUM7OztZQTlCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7YUFDdkI7Ozs7WUFScUYsV0FBVztZQUFRLGdCQUFnQjtZQUFoSCx3QkFBd0I7WUFDeEIsYUFBYTs7O3dCQVdwQixLQUFLLFNBQUMsV0FBVzttQkFDakIsS0FBSzs7Ozs7OztJQUZOLHVDQUFrRDs7SUFDbEQsdUNBQXVDOztJQUN2QyxrQ0FBcUI7Ozs7O0lBR3BCLHlDQUFxQzs7Ozs7SUFDckMsOENBQTBDOzs7OztJQUMxQyxzREFBMEQ7Ozs7O0lBQzFELDJDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFR5cGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi9wYWdlL3BhZ2UnO1xyXG5pbXBvcnQgeyBJTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbdXNlTGF5b3V0XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZUxheW91dERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcblx0cHJpdmF0ZSBjb250YWluZXI6IENvbXBvbmVudFJlZjxJTGF5b3V0Q29tcG9uZW50PjtcclxuXHRASW5wdXQoJ3VzZUxheW91dCcpIGxheW91dEtleT86IHN0cmluZztcclxuXHRASW5wdXQoKSBwYWdlPzogUGFnZTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG5cdFx0cHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcclxuXHQpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucztcclxuXHRcdGNvbnN0IGNvbXBvbmVudDogVHlwZTxJTGF5b3V0Q29tcG9uZW50PiA9IG9wdGlvbnMubGF5b3V0c1t0aGlzLmxheW91dEtleV0gfHwgb3B0aW9ucy5kZWZhdWx0TGF5b3V0IHx8IExheW91dENvbXBvbmVudDtcclxuXHRcdGNvbnN0IGNvbnRhaW5lckZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbnRhaW5lckZhY3RvcnkpO1xyXG5cdFx0dGhpcy5jb250YWluZXIuaW5zdGFuY2UudGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlUmVmO1xyXG5cdFx0dGhpcy5jb250YWluZXIuaW5zdGFuY2UucGFnZSA9IHRoaXMucGFnZTtcclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0aWYgKHRoaXMuY29udGFpbmVyKSB7XHJcblx0XHRcdHRoaXMuY29udGFpbmVyLmRlc3Ryb3koKTtcclxuXHRcdFx0dGhpcy5jb250YWluZXIgPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19