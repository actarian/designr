import { Component, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function LayoutComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
export class LayoutComponent {
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayoutComponent, selectors: [["layout-component"]], inputs: { template: "template" }, decls: 2, vars: 2, consts: [[3, "ngClass"], [4, "ngTemplateOutlet"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, LayoutComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.page == null ? null : ctx.page.component);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.template);
    } }, directives: [i1.NgClass, i1.NgTemplateOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayoutComponent, [{
        type: Component,
        args: [{
                selector: 'layout-component',
                template: `<div [ngClass]="page?.component">
	<ng-container *ngTemplateOutlet="template"></ng-container>
</div>`
            }]
    }], null, { template: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2xheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lBTzdELHdCQUEwRDs7QUFHM0QsTUFBTSxPQUFPLGVBQWU7OzhFQUFmLGVBQWU7b0RBQWYsZUFBZTtRQUpoQiw4QkFDWDtRQUFBLGtGQUEyQztRQUM1QyxpQkFBTTs7UUFGVyxzRUFBMkI7UUFDN0IsZUFBNEI7UUFBNUIsK0NBQTRCOztrREFHOUIsZUFBZTtjQU4zQixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOztPQUVKO2FBQ047O2tCQUVDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBJTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdsYXlvdXQtY29tcG9uZW50Jyxcblx0dGVtcGxhdGU6IGA8ZGl2IFtuZ0NsYXNzXT1cInBhZ2U/LmNvbXBvbmVudFwiPlxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgSUxheW91dENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXHRwYWdlPzogUGFnZTtcbn1cbiJdfQ==