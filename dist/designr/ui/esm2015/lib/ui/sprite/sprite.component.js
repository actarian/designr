import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["sprite", ""];
function SpriteComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 1);
    i0.ɵɵelement(2, "use");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵattributeInterpolate1("href", "#", ctx_r7.sprite, "", null, "xlink");
} }
export class SpriteComponent {
}
SpriteComponent.ɵfac = function SpriteComponent_Factory(t) { return new (t || SpriteComponent)(); };
SpriteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SpriteComponent, selectors: [["", "sprite", ""]], inputs: { sprite: "sprite" }, attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "sprite"]], template: function SpriteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SpriteComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.sprite);
    } }, directives: [i1.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SpriteComponent, [{
        type: Component,
        args: [{
                selector: '[sprite]',
                template: `<ng-container *ngIf="sprite">
	<svg class="sprite">
		<use attr.xlink:href="#{{sprite}}"></use>
	</svg>
</ng-container>`,
            }]
    }], null, { sprite: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ByaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL3Nwcml0ZS9zcHJpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQUlyQyw2QkFDWDtJQUFBLG1CQUNDO0lBREQsOEJBQ0M7SUFBQSxzQkFBeUM7SUFDMUMsaUJBQU07SUFDUCwwQkFBZTs7O0lBRlIsZUFBNkI7SUFBN0IseUVBQTZCOztBQUlwQyxNQUFNLE9BQU8sZUFBZTs7OEVBQWYsZUFBZTtvREFBZixlQUFlO1FBTmhCLGtGQUNYOztRQUR5QixpQ0FBYzs7a0RBTTNCLGVBQWU7Y0FSM0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Z0JBSUs7YUFDZjs7a0JBR0MsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW3Nwcml0ZV0nLFxuXHR0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nSWY9XCJzcHJpdGVcIj5cblx0PHN2ZyBjbGFzcz1cInNwcml0ZVwiPlxuXHRcdDx1c2UgYXR0ci54bGluazpocmVmPVwiI3t7c3ByaXRlfX1cIj48L3VzZT5cblx0PC9zdmc+XG48L25nLWNvbnRhaW5lcj5gLFxufSlcbmV4cG9ydCBjbGFzcyBTcHJpdGVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIHNwcml0ZTogc3RyaW5nO1xuXG59XG4iXX0=