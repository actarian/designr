import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { DisposableComponent } from '../disposable/disposable.component';
import { Outlet } from './outlet';
import * as i0 from "@angular/core";
var OutletDefaultComponent = /** @class */ (function (_super) {
    __extends(OutletDefaultComponent, _super);
    function OutletDefaultComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutletDefaultComponent.ɵfac = function OutletDefaultComponent_Factory(t) { return ɵOutletDefaultComponent_BaseFactory(t || OutletDefaultComponent); };
    OutletDefaultComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OutletDefaultComponent, selectors: [["outlet-content-component"]], inputs: { outlet: "outlet" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [[1, "outlet"]], template: function OutletDefaultComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtext(1, "Outlet not found!");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
    return OutletDefaultComponent;
}(DisposableComponent));
export { OutletDefaultComponent };
var ɵOutletDefaultComponent_BaseFactory = i0.ɵɵgetInheritedFactory(OutletDefaultComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OutletDefaultComponent, [{
        type: Component,
        args: [{
                selector: 'outlet-content-component',
                template: "<div class=\"outlet\">Outlet not found!</div>",
            }]
    }], null, { outlet: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LWRlZmF1bHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9vdXRsZXQvb3V0bGV0LWRlZmF1bHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUVsQztJQUk0QywwQ0FBbUI7SUFKL0Q7O0tBTUM7K0hBRlksc0JBQXNCOytEQUF0QixzQkFBc0I7WUFGdkIsOEJBQW9CO1lBQUEsaUNBQWlCO1lBQUEsaUJBQU07O2lDQVB2RDtDQVdDLEFBTkQsQ0FJNEMsbUJBQW1CLEdBRTlEO1NBRlksc0JBQXNCO21FQUF0QixzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQUpsQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLCtDQUE2QzthQUN2RDs7a0JBRUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAnLi9vdXRsZXQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdvdXRsZXQtY29udGVudC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJvdXRsZXRcIj5PdXRsZXQgbm90IGZvdW5kITwvZGl2PmAsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldERlZmF1bHRDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IHtcblx0QElucHV0KCkgb3V0bGV0OiBPdXRsZXQ7XG59XG4iXX0=