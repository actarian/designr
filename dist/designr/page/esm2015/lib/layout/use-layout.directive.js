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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWxheW91dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2xheW91dC91c2UtbGF5b3V0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFnQixTQUFTLEVBQUUsS0FBSyxFQUFxQixXQUFXLEVBQVEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakosT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3JELE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7SUFNOUIsWUFDUyxXQUE2QixFQUM3QixnQkFBa0MsRUFDbEMsd0JBQWtELEVBQ2xELGFBQTRCO1FBSDVCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDakMsQ0FBQzs7OztJQUVMLFFBQVE7O2NBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7Y0FDcEMsU0FBUyxHQUEyQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsYUFBYSxJQUFJLGVBQWU7O2NBQy9HLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFDekYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNGLENBQUM7OztZQTlCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7YUFDdkI7Ozs7WUFScUYsV0FBVztZQUFRLGdCQUFnQjtZQUFoSCx3QkFBd0I7WUFDeEIsYUFBYTs7O3dCQVdwQixLQUFLLFNBQUMsV0FBVzttQkFDakIsS0FBSzs7Ozs7OztJQUZOLHVDQUFrRDs7SUFDbEQsdUNBQXVDOztJQUN2QyxrQ0FBcUI7Ozs7O0lBR3BCLHlDQUFxQzs7Ozs7SUFDckMsOENBQTBDOzs7OztJQUMxQyxzREFBMEQ7Ozs7O0lBQzFELDJDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFR5cGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBJTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IHsgTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW3VzZUxheW91dF0nXG59KVxuZXhwb3J0IGNsYXNzIFVzZUxheW91dERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIGNvbnRhaW5lcjogQ29tcG9uZW50UmVmPElMYXlvdXRDb21wb25lbnQ+O1xuXHRASW5wdXQoJ3VzZUxheW91dCcpIGxheW91dEtleT86IHN0cmluZztcblx0QElucHV0KCkgcGFnZT86IFBhZ2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pixcblx0XHRwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG5cdCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zO1xuXHRcdGNvbnN0IGNvbXBvbmVudDogVHlwZTxJTGF5b3V0Q29tcG9uZW50PiA9IG9wdGlvbnMubGF5b3V0c1t0aGlzLmxheW91dEtleV0gfHwgb3B0aW9ucy5kZWZhdWx0TGF5b3V0IHx8IExheW91dENvbXBvbmVudDtcblx0XHRjb25zdCBjb250YWluZXJGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblx0XHR0aGlzLmNvbnRhaW5lciA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29udGFpbmVyRmFjdG9yeSk7XG5cdFx0dGhpcy5jb250YWluZXIuaW5zdGFuY2UudGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlUmVmO1xuXHRcdHRoaXMuY29udGFpbmVyLmluc3RhbmNlLnBhZ2UgPSB0aGlzLnBhZ2U7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5jb250YWluZXIpIHtcblx0XHRcdHRoaXMuY29udGFpbmVyLmRlc3Ryb3koKTtcblx0XHRcdHRoaXMuY29udGFpbmVyID0gbnVsbDtcblx0XHR9XG5cdH1cblxufVxuIl19