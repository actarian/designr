import { Component, Input } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./section-outlet.component";
function SectionsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "section-outlet", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const section_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("section", section_r3);
} }
export class SectionsComponent extends DisposableComponent {
}
SectionsComponent.ɵfac = function SectionsComponent_Factory(t) { return ɵSectionsComponent_BaseFactory(t || SectionsComponent); };
SectionsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SectionsComponent, selectors: [["section-sections"]], inputs: { sections: "sections" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "section"]], template: function SectionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SectionsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.sections);
    } }, directives: [i1.NgForOf, i2.SectionOutletComponent], encapsulation: 2 });
const ɵSectionsComponent_BaseFactory = i0.ɵɵgetInheritedFactory(SectionsComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SectionsComponent, [{
        type: Component,
        args: [{
                selector: 'section-sections',
                template: `<ng-container *ngFor="let section of sections">
	<section-outlet [section]="section"></section-outlet>
</ng-container>`,
            }]
    }], null, { sections: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lBS3hDLDZCQUNYO0lBQUEsb0NBQXFEO0lBQ3RELDBCQUFlOzs7SUFERSxlQUFtQjtJQUFuQixvQ0FBbUI7O0FBR3BDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxtQkFBbUI7OzRHQUE3QyxpQkFBaUI7c0RBQWpCLGlCQUFpQjtRQUpsQixvRkFDWDs7UUFEeUIsc0NBQWdDOztnRUFJN0MsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FON0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Z0JBRUs7YUFDZjs7a0JBR0MsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4vc2VjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NlY3Rpb24tc2VjdGlvbnMnLFxuXHR0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNlY3Rpb24gb2Ygc2VjdGlvbnNcIj5cblx0PHNlY3Rpb24tb3V0bGV0IFtzZWN0aW9uXT1cInNlY3Rpb25cIj48L3NlY3Rpb24tb3V0bGV0PlxuPC9uZy1jb250YWluZXI+YCxcbn0pXG5leHBvcnQgY2xhc3MgU2VjdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBzZWN0aW9uczogU2VjdGlvbltdO1xuXG59XG4iXX0=