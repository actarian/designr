import { __extends } from "tslib";
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
    var outlet_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("outlet", outlet_r7);
} }
var OutletRepeaterComponent = /** @class */ (function (_super) {
    __extends(OutletRepeaterComponent, _super);
    function OutletRepeaterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutletRepeaterComponent.ɵfac = function OutletRepeaterComponent_Factory(t) { return ɵOutletRepeaterComponent_BaseFactory(t || OutletRepeaterComponent); };
    OutletRepeaterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OutletRepeaterComponent, selectors: [["outlet-repeater-component"]], inputs: { outlets: "outlets" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "outlet"]], template: function OutletRepeaterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, OutletRepeaterComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.outlets);
        } }, directives: [i1.NgForOf, i2.OutletComponent], encapsulation: 2 });
    return OutletRepeaterComponent;
}(DisposableComponent));
export { OutletRepeaterComponent };
var ɵOutletRepeaterComponent_BaseFactory = i0.ɵɵgetInheritedFactory(OutletRepeaterComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OutletRepeaterComponent, [{
        type: Component,
        args: [{
                selector: 'outlet-repeater-component',
                template: "<ng-container *ngFor=\"let outlet of outlets\"><outlet-component [outlet]=\"outlet\"></outlet-component></ng-container>",
            }]
    }], null, { outlets: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlcGVhdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvb3V0bGV0L291dGxldC1yZXBlYXRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7OztJQUs3RCw2QkFBNkM7SUFBQSxzQ0FBdUQ7SUFBQSwwQkFBZTs7O0lBQXBELGVBQWlCO0lBQWpCLGtDQUFpQjs7QUFGNUY7SUFJNkMsMkNBQW1CO0lBSmhFOztLQU1DO2tJQUZZLHVCQUF1QjtnRUFBdkIsdUJBQXVCO1lBRnhCLDBGQUE2Qzs7WUFBL0IscUNBQThCOztrQ0FQeEQ7Q0FXQyxBQU5ELENBSTZDLG1CQUFtQixHQUUvRDtTQUZZLHVCQUF1QjtvRUFBdkIsdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FKbkMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSx5SEFBcUg7YUFDL0g7O2tCQUVDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE91dGxldCB9IGZyb20gJy4vb3V0bGV0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnb3V0bGV0LXJlcGVhdGVyLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3V0bGV0IG9mIG91dGxldHNcIj48b3V0bGV0LWNvbXBvbmVudCBbb3V0bGV0XT1cIm91dGxldFwiPjwvb3V0bGV0LWNvbXBvbmVudD48L25nLWNvbnRhaW5lcj5gLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXRSZXBlYXRlckNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXHRASW5wdXQoKSBvdXRsZXRzOiBPdXRsZXRbXTtcbn1cbiJdfQ==