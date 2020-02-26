import { Component, Input } from '@angular/core';
import { DisposableComponent } from '../disposable/disposable.component';
import { Outlet } from './outlet';
import * as i0 from "@angular/core";
export class OutletDefaultComponent extends DisposableComponent {
}
OutletDefaultComponent.ɵfac = function OutletDefaultComponent_Factory(t) { return ɵOutletDefaultComponent_BaseFactory(t || OutletDefaultComponent); };
OutletDefaultComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OutletDefaultComponent, selectors: [["outlet-content-component"]], inputs: { outlet: "outlet" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [[1, "outlet"]], template: function OutletDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1, "Outlet not found!");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
const ɵOutletDefaultComponent_BaseFactory = i0.ɵɵgetInheritedFactory(OutletDefaultComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OutletDefaultComponent, [{
        type: Component,
        args: [{
                selector: 'outlet-content-component',
                template: `<div class="outlet">Outlet not found!</div>`,
            }]
    }], null, { outlet: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LWRlZmF1bHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9vdXRsZXQvb3V0bGV0LWRlZmF1bHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBTWxDLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxtQkFBbUI7OzJIQUFsRCxzQkFBc0I7MkRBQXRCLHNCQUFzQjtRQUZ2Qiw4QkFBb0I7UUFBQSxpQ0FBaUI7UUFBQSxpQkFBTTs7cUVBRTFDLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsNkNBQTZDO2FBQ3ZEOztrQkFFQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICcuL291dGxldCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ291dGxldC1jb250ZW50LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm91dGxldFwiPk91dGxldCBub3QgZm91bmQhPC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0RGVmYXVsdENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXHRASW5wdXQoKSBvdXRsZXQ6IE91dGxldDtcbn1cbiJdfQ==