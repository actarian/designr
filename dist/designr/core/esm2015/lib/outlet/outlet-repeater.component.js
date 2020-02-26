import { Component, Input } from '@angular/core';
import { DisposableComponent } from '../disposable/disposable.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./outlet.component";
function OutletRepeaterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "outlet-component", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const outlet_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("outlet", outlet_r3);
} }
export class OutletRepeaterComponent extends DisposableComponent {
}
OutletRepeaterComponent.ɵfac = function OutletRepeaterComponent_Factory(t) { return ɵOutletRepeaterComponent_BaseFactory(t || OutletRepeaterComponent); };
OutletRepeaterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OutletRepeaterComponent, selectors: [["outlet-repeater-component"]], inputs: { outlets: "outlets" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "outlet"]], template: function OutletRepeaterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, OutletRepeaterComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.outlets);
    } }, directives: [i1.NgForOf, i2.OutletComponent], encapsulation: 2 });
const ɵOutletRepeaterComponent_BaseFactory = i0.ɵɵgetInheritedFactory(OutletRepeaterComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OutletRepeaterComponent, [{
        type: Component,
        args: [{
                selector: 'outlet-repeater-component',
                template: `<ng-container *ngFor="let outlet of outlets"><outlet-component [outlet]="outlet"></outlet-component></ng-container>`,
            }]
    }], null, { outlets: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlcGVhdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvb3V0bGV0L291dGxldC1yZXBlYXRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7O0lBSzdELDZCQUE2QztJQUFBLHNDQUF1RDtJQUFBLDBCQUFlOzs7SUFBcEQsZUFBaUI7SUFBakIsa0NBQWlCOztBQUU1RixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsbUJBQW1COzs4SEFBbkQsdUJBQXVCOzREQUF2Qix1QkFBdUI7UUFGeEIsMEZBQTZDOztRQUEvQixxQ0FBOEI7O3NFQUUzQyx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUpuQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFLHFIQUFxSDthQUMvSDs7a0JBRUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAnLi9vdXRsZXQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdvdXRsZXQtcmVwZWF0ZXItY29tcG9uZW50Jyxcblx0dGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvdXRsZXQgb2Ygb3V0bGV0c1wiPjxvdXRsZXQtY29tcG9uZW50IFtvdXRsZXRdPVwib3V0bGV0XCI+PC9vdXRsZXQtY29tcG9uZW50PjwvbmctY29udGFpbmVyPmAsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldFJlcGVhdGVyQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIG91dGxldHM6IE91dGxldFtdO1xufVxuIl19