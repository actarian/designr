import { ComponentFactoryResolver, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Page } from '../page/page';
import { LayoutComponent } from './layout.component';
import * as i0 from "@angular/core";
import * as i1 from "../config/config.service";
export class UseLayoutDirective {
    constructor(templateRef, viewContainerRef, componentFactoryResolver, configService) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.configService = configService;
    }
    ngOnInit() {
        const options = this.configService.options;
        const component = options.layouts[this.layoutKey] || options.defaultLayout || LayoutComponent;
        const containerFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.container = this.viewContainerRef.createComponent(containerFactory);
        this.container.instance.template = this.templateRef;
        this.container.instance.page = this.page;
    }
    ngOnDestroy() {
        if (this.container) {
            this.container.destroy();
            this.container = null;
        }
    }
}
UseLayoutDirective.ɵfac = function UseLayoutDirective_Factory(t) { return new (t || UseLayoutDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i1.ConfigService)); };
UseLayoutDirective.ɵdir = i0.ɵɵdefineDirective({ type: UseLayoutDirective, selectors: [["", "useLayout", ""]], inputs: { layoutKey: ["useLayout", "layoutKey"], page: "page" } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWxheW91dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2xheW91dC91c2UtbGF5b3V0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQWdCLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFdBQVcsRUFBUSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUtyRCxNQUFNLE9BQU8sa0JBQWtCO0lBTTlCLFlBQ1MsV0FBNkIsRUFDN0IsZ0JBQWtDLEVBQ2xDLHdCQUFrRCxFQUNsRCxhQUE0QjtRQUg1QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ2pDLENBQUM7SUFFTCxRQUFRO1FBQ1AsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDM0MsTUFBTSxTQUFTLEdBQTJCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxhQUFhLElBQUksZUFBZSxDQUFDO1FBQ3RILE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDRixDQUFDOztvRkEzQlcsa0JBQWtCO3VEQUFsQixrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUg5QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7YUFDdkI7O2tCQUlDLEtBQUs7bUJBQUMsV0FBVzs7a0JBQ2pCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgSUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0JztcbmltcG9ydCB7IExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1t1c2VMYXlvdXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VMYXlvdXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBjb250YWluZXI6IENvbXBvbmVudFJlZjxJTGF5b3V0Q29tcG9uZW50Pjtcblx0QElucHV0KCd1c2VMYXlvdXQnKSBsYXlvdXRLZXk/OiBzdHJpbmc7XG5cdEBJbnB1dCgpIHBhZ2U/OiBQYWdlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG5cdFx0cHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHQpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucztcblx0XHRjb25zdCBjb21wb25lbnQ6IFR5cGU8SUxheW91dENvbXBvbmVudD4gPSBvcHRpb25zLmxheW91dHNbdGhpcy5sYXlvdXRLZXldIHx8IG9wdGlvbnMuZGVmYXVsdExheW91dCB8fCBMYXlvdXRDb21wb25lbnQ7XG5cdFx0Y29uc3QgY29udGFpbmVyRmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cdFx0dGhpcy5jb250YWluZXIgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbnRhaW5lckZhY3RvcnkpO1xuXHRcdHRoaXMuY29udGFpbmVyLmluc3RhbmNlLnRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZVJlZjtcblx0XHR0aGlzLmNvbnRhaW5lci5pbnN0YW5jZS5wYWdlID0gdGhpcy5wYWdlO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMuY29udGFpbmVyKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lci5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmNvbnRhaW5lciA9IG51bGw7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==