import { __extends } from "tslib";
import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';
import { SectionService } from './section.service';
import * as i0 from "@angular/core";
import * as i1 from "./section.service";
var _c0 = ["outlet"];
function SectionOutletComponent_ng_template_0_Template(rf, ctx) { }
var SectionOutletComponent = /** @class */ (function (_super) {
    __extends(SectionOutletComponent, _super);
    function SectionOutletComponent(componentFactoryResolver, sectionService) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.sectionService = sectionService;
        return _this;
    }
    SectionOutletComponent.prototype.ngOnInit = function () {
        var component = this.sectionService.resolve(this.section);
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        var componentRef = this.viewContainerRef.createComponent(factory);
        var instance = componentRef.instance;
        instance.section = this.section;
        if (typeof instance['SectionInit'] === 'function') {
            instance['SectionInit']();
        }
        this.componentRef = componentRef;
    };
    SectionOutletComponent.prototype.ngOnDestroy = function () {
        this.componentRef.destroy();
    };
    SectionOutletComponent.ɵfac = function SectionOutletComponent_Factory(t) { return new (t || SectionOutletComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i1.SectionService)); };
    SectionOutletComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SectionOutletComponent, selectors: [["section-outlet"]], viewQuery: function SectionOutletComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
        } }, inputs: { section: "section" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [["outlet", ""]], template: function SectionOutletComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SectionOutletComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 });
    return SectionOutletComponent;
}(DisposableComponent));
export { SectionOutletComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SectionOutletComponent, [{
        type: Component,
        args: [{
                selector: 'section-outlet',
                template: '<ng-template #outlet></ng-template>',
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i1.SectionService }]; }, { section: [{
            type: Input
        }], viewContainerRef: [{
            type: ViewChild,
            args: ['outlet', { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb24tb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0Isd0JBQXdCLEVBQWdCLEtBQUssRUFBMkIsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pLLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXBDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFFbkQ7SUFJNEMsMENBQW1CO0lBTzlELGdDQUNTLHdCQUFrRCxFQUNsRCxjQUE4QjtRQUZ2QyxZQUlDLGlCQUFPLFNBQ1A7UUFKUSw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG9CQUFjLEdBQWQsY0FBYyxDQUFnQjs7SUFHdkMsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDQyxJQUFNLFNBQVMsR0FBMkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BGLElBQU0sT0FBTyxHQUF1QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEUsSUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDbEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztnR0E3Qlcsc0JBQXNCOytEQUF0QixzQkFBc0I7NENBSUwsZ0JBQWdCOzs7OztZQU5sQyx3SEFBcUI7O2lDQVJqQztDQXlDQyxBQW5DRCxDQUk0QyxtQkFBbUIsR0ErQjlEO1NBL0JZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUscUNBQXFDO2FBQy9DOztrQkFHQyxLQUFLOztrQkFFTCxTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBUeXBlLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuL3NlY3Rpb24nO1xuaW1wb3J0IHsgU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VjdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlY3Rpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NlY3Rpb24tb3V0bGV0Jyxcblx0dGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI291dGxldD48L25nLXRlbXBsYXRlPicsXG59KVxuZXhwb3J0IGNsYXNzIFNlY3Rpb25PdXRsZXRDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpIHNlY3Rpb246IFNlY3Rpb247XG5cblx0QFZpZXdDaGlsZCgnb3V0bGV0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblx0cHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxTZWN0aW9uQ29tcG9uZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgc2VjdGlvblNlcnZpY2U6IFNlY3Rpb25TZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3QgY29tcG9uZW50OiBUeXBlPFNlY3Rpb25Db21wb25lbnQ+ID0gdGhpcy5zZWN0aW9uU2VydmljZS5yZXNvbHZlKHRoaXMuc2VjdGlvbik7XG5cdFx0Y29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxTZWN0aW9uQ29tcG9uZW50PiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblx0XHRjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcblx0XHRpbnN0YW5jZS5zZWN0aW9uID0gdGhpcy5zZWN0aW9uO1xuXHRcdGlmICh0eXBlb2YgaW5zdGFuY2VbJ1NlY3Rpb25Jbml0J10gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGluc3RhbmNlWydTZWN0aW9uSW5pdCddKCk7XG5cdFx0fVxuXHRcdHRoaXMuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuXHR9XG5cbn1cbiJdfQ==