import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = ["sprite", ""];
function SpriteComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 1);
    i0.ɵɵelement(2, "use");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵattributeInterpolate1("href", "#", ctx_r15.sprite, "", null, "xlink");
} }
var SpriteComponent = /** @class */ (function () {
    function SpriteComponent() {
    }
    SpriteComponent.ɵfac = function SpriteComponent_Factory(t) { return new (t || SpriteComponent)(); };
    SpriteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SpriteComponent, selectors: [["", "sprite", ""]], inputs: { sprite: "sprite" }, attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "sprite"]], template: function SpriteComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SpriteComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.sprite);
        } }, directives: [i1.NgIf], encapsulation: 2 });
    return SpriteComponent;
}());
export { SpriteComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SpriteComponent, [{
        type: Component,
        args: [{
                selector: '[sprite]',
                template: "<ng-container *ngIf=\"sprite\">\n\t<svg class=\"sprite\">\n\t\t<use attr.xlink:href=\"#{{sprite}}\"></use>\n\t</svg>\n</ng-container>",
            }]
    }], null, { sprite: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ByaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL3Nwcml0ZS9zcHJpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQUlyQyw2QkFDWDtJQUFBLG1CQUNDO0lBREQsOEJBQ0M7SUFBQSxzQkFBeUM7SUFDMUMsaUJBQU07SUFDUCwwQkFBZTs7O0lBRlIsZUFBNkI7SUFBN0IsMEVBQTZCOztBQUpwQztJQUFBO0tBWUM7a0ZBSlksZUFBZTt3REFBZixlQUFlO1lBTmhCLGtGQUNYOztZQUR5QixpQ0FBYzs7MEJBSnhDO0NBY0MsQUFaRCxJQVlDO1NBSlksZUFBZTtrREFBZixlQUFlO2NBUjNCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLHVJQUlLO2FBQ2Y7O2tCQUdDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1tzcHJpdGVdJyxcblx0dGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0lmPVwic3ByaXRlXCI+XG5cdDxzdmcgY2xhc3M9XCJzcHJpdGVcIj5cblx0XHQ8dXNlIGF0dHIueGxpbms6aHJlZj1cIiN7e3Nwcml0ZX19XCI+PC91c2U+XG5cdDwvc3ZnPlxuPC9uZy1jb250YWluZXI+YCxcbn0pXG5leHBvcnQgY2xhc3MgU3ByaXRlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBzcHJpdGU6IHN0cmluZztcblxufVxuIl19