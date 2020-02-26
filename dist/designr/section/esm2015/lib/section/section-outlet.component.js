import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';
import { SectionService } from './section.service';
import * as i0 from "@angular/core";
import * as i1 from "./section.service";
const _c0 = ["outlet"];
function SectionOutletComponent_ng_template_0_Template(rf, ctx) { }
export class SectionOutletComponent extends DisposableComponent {
    constructor(componentFactoryResolver, sectionService) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.sectionService = sectionService;
    }
    ngOnInit() {
        const component = this.sectionService.resolve(this.section);
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        const componentRef = this.viewContainerRef.createComponent(factory);
        const instance = componentRef.instance;
        instance.section = this.section;
        if (typeof instance['SectionInit'] === 'function') {
            instance['SectionInit']();
        }
        this.componentRef = componentRef;
    }
    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
SectionOutletComponent.ɵfac = function SectionOutletComponent_Factory(t) { return new (t || SectionOutletComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i1.SectionService)); };
SectionOutletComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SectionOutletComponent, selectors: [["section-outlet"]], viewQuery: function SectionOutletComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
    } }, inputs: { section: "section" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [["outlet", ""]], template: function SectionOutletComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SectionOutletComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    } }, encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb24tb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQix3QkFBd0IsRUFBZ0IsS0FBSyxFQUEyQixTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakssT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQU1uRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsbUJBQW1CO0lBTzlELFlBQ1Msd0JBQWtELEVBQ2xELGNBQThCO1FBRXRDLEtBQUssRUFBRSxDQUFDO1FBSEEsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFHdkMsQ0FBQztJQUVELFFBQVE7UUFDUCxNQUFNLFNBQVMsR0FBMkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BGLE1BQU0sT0FBTyxHQUF1QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEUsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDbEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7NEZBN0JXLHNCQUFzQjsyREFBdEIsc0JBQXNCO3dDQUlMLGdCQUFnQjs7Ozs7UUFObEMsd0hBQXFCOztrREFFcEIsc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUscUNBQXFDO2FBQy9DOztrQkFHQyxLQUFLOztrQkFFTCxTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBUeXBlLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuL3NlY3Rpb24nO1xuaW1wb3J0IHsgU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VjdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlY3Rpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NlY3Rpb24tb3V0bGV0Jyxcblx0dGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI291dGxldD48L25nLXRlbXBsYXRlPicsXG59KVxuZXhwb3J0IGNsYXNzIFNlY3Rpb25PdXRsZXRDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpIHNlY3Rpb246IFNlY3Rpb247XG5cblx0QFZpZXdDaGlsZCgnb3V0bGV0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblx0cHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxTZWN0aW9uQ29tcG9uZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgc2VjdGlvblNlcnZpY2U6IFNlY3Rpb25TZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3QgY29tcG9uZW50OiBUeXBlPFNlY3Rpb25Db21wb25lbnQ+ID0gdGhpcy5zZWN0aW9uU2VydmljZS5yZXNvbHZlKHRoaXMuc2VjdGlvbik7XG5cdFx0Y29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxTZWN0aW9uQ29tcG9uZW50PiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblx0XHRjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcblx0XHRpbnN0YW5jZS5zZWN0aW9uID0gdGhpcy5zZWN0aW9uO1xuXHRcdGlmICh0eXBlb2YgaW5zdGFuY2VbJ1NlY3Rpb25Jbml0J10gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGluc3RhbmNlWydTZWN0aW9uSW5pdCddKCk7XG5cdFx0fVxuXHRcdHRoaXMuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuXHR9XG5cbn1cbiJdfQ==