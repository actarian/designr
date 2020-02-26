import { Component, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function LayoutComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
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
    return LayoutComponent;
}());
export { LayoutComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayoutComponent, [{
        type: Component,
        args: [{
                selector: 'layout-component',
                template: "<div [ngClass]=\"page?.component\">\n\t<ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</div>"
            }]
    }], null, { template: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2xheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lBTzdELHdCQUEwRDs7QUFIM0Q7SUFBQTtLQVNDO2tGQUhZLGVBQWU7d0RBQWYsZUFBZTtZQUpoQiw4QkFDWDtZQUFBLGtGQUEyQztZQUM1QyxpQkFBTTs7WUFGVyxzRUFBMkI7WUFDN0IsZUFBNEI7WUFBNUIsK0NBQTRCOzswQkFQM0M7Q0FhQyxBQVRELElBU0M7U0FIWSxlQUFlO2tEQUFmLGVBQWU7Y0FOM0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSw2R0FFSjthQUNOOztrQkFFQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgSUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbGF5b3V0LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBbbmdDbGFzc109XCJwYWdlPy5jb21wb25lbnRcIj5cblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIExheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIElMYXlvdXRDb21wb25lbnQge1xuXHRASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcblx0cGFnZT86IFBhZ2U7XG59XG4iXX0=