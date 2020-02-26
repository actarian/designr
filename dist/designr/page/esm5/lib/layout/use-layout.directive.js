import { ComponentFactoryResolver, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Page } from '../page/page';
import { LayoutComponent } from './layout.component';
import * as i0 from "@angular/core";
import * as i1 from "../config/config.service";
var UseLayoutDirective = /** @class */ (function () {
    function UseLayoutDirective(templateRef, viewContainerRef, componentFactoryResolver, configService) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.configService = configService;
    }
    UseLayoutDirective.prototype.ngOnInit = function () {
        var options = this.configService.options;
        var component = options.layouts[this.layoutKey] || options.defaultLayout || LayoutComponent;
        var containerFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.container = this.viewContainerRef.createComponent(containerFactory);
        this.container.instance.template = this.templateRef;
        this.container.instance.page = this.page;
    };
    UseLayoutDirective.prototype.ngOnDestroy = function () {
        if (this.container) {
            this.container.destroy();
            this.container = null;
        }
    };
    UseLayoutDirective.ɵfac = function UseLayoutDirective_Factory(t) { return new (t || UseLayoutDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i1.ConfigService)); };
    UseLayoutDirective.ɵdir = i0.ɵɵdefineDirective({ type: UseLayoutDirective, selectors: [["", "useLayout", ""]], inputs: { layoutKey: ["useLayout", "layoutKey"], page: "page" } });
    return UseLayoutDirective;
}());
export { UseLayoutDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UseLayoutDirective, [{
        type: Directive,
        args: [{
                selector: '[useLayout]'
            }]
    }], function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i1.ConfigService }]; }, { layoutKey: [{
            type: Input,
            args: ['useLayout']
        }], page: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWxheW91dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2xheW91dC91c2UtbGF5b3V0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQWdCLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFdBQVcsRUFBUSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUVyRDtJQVNDLDRCQUNTLFdBQTZCLEVBQzdCLGdCQUFrQyxFQUNsQyx3QkFBa0QsRUFDbEQsYUFBNEI7UUFINUIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNqQyxDQUFDO0lBRUwscUNBQVEsR0FBUjtRQUNDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzNDLElBQU0sU0FBUyxHQUEyQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsYUFBYSxJQUFJLGVBQWUsQ0FBQztRQUN0SCxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMxQyxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzt3RkEzQlcsa0JBQWtCOzJEQUFsQixrQkFBa0I7NkJBVC9CO0NBc0NDLEFBaENELElBZ0NDO1NBN0JZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBSDlCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsYUFBYTthQUN2Qjs7a0JBSUMsS0FBSzttQkFBQyxXQUFXOztrQkFDakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFR5cGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBJTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IHsgTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW3VzZUxheW91dF0nXG59KVxuZXhwb3J0IGNsYXNzIFVzZUxheW91dERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIGNvbnRhaW5lcjogQ29tcG9uZW50UmVmPElMYXlvdXRDb21wb25lbnQ+O1xuXHRASW5wdXQoJ3VzZUxheW91dCcpIGxheW91dEtleT86IHN0cmluZztcblx0QElucHV0KCkgcGFnZT86IFBhZ2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pixcblx0XHRwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG5cdCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zO1xuXHRcdGNvbnN0IGNvbXBvbmVudDogVHlwZTxJTGF5b3V0Q29tcG9uZW50PiA9IG9wdGlvbnMubGF5b3V0c1t0aGlzLmxheW91dEtleV0gfHwgb3B0aW9ucy5kZWZhdWx0TGF5b3V0IHx8IExheW91dENvbXBvbmVudDtcblx0XHRjb25zdCBjb250YWluZXJGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblx0XHR0aGlzLmNvbnRhaW5lciA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29udGFpbmVyRmFjdG9yeSk7XG5cdFx0dGhpcy5jb250YWluZXIuaW5zdGFuY2UudGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlUmVmO1xuXHRcdHRoaXMuY29udGFpbmVyLmluc3RhbmNlLnBhZ2UgPSB0aGlzLnBhZ2U7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5jb250YWluZXIpIHtcblx0XHRcdHRoaXMuY29udGFpbmVyLmRlc3Ryb3koKTtcblx0XHRcdHRoaXMuY29udGFpbmVyID0gbnVsbDtcblx0XHR9XG5cdH1cblxufVxuIl19