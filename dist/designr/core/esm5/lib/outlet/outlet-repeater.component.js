/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DisposableComponent } from '../disposable/disposable.component';
var OutletRepeaterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(OutletRepeaterComponent, _super);
    function OutletRepeaterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutletRepeaterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'outlet-repeater-component',
                    template: "<ng-container *ngFor=\"let outlet of outlets\"><outlet-component [outlet]=\"outlet\"></outlet-component></ng-container>"
                }] }
    ];
    OutletRepeaterComponent.propDecorators = {
        outlets: [{ type: Input }]
    };
    return OutletRepeaterComponent;
}(DisposableComponent));
export { OutletRepeaterComponent };
if (false) {
    /** @type {?} */
    OutletRepeaterComponent.prototype.outlets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlcGVhdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvb3V0bGV0L291dGxldC1yZXBlYXRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUd6RTtJQUk2QyxtREFBbUI7SUFKaEU7O0lBTUEsQ0FBQzs7Z0JBTkEsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSx5SEFBcUg7aUJBQy9IOzs7MEJBRUMsS0FBSzs7SUFDUCw4QkFBQztDQUFBLEFBTkQsQ0FJNkMsbUJBQW1CLEdBRS9EO1NBRlksdUJBQXVCOzs7SUFDbkMsMENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICcuL291dGxldCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ291dGxldC1yZXBlYXRlci1jb21wb25lbnQnLFxyXG5cdHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3V0bGV0IG9mIG91dGxldHNcIj48b3V0bGV0LWNvbXBvbmVudCBbb3V0bGV0XT1cIm91dGxldFwiPjwvb3V0bGV0LWNvbXBvbmVudD48L25nLWNvbnRhaW5lcj5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3V0bGV0UmVwZWF0ZXJDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBvdXRsZXRzOiBPdXRsZXRbXTtcclxufVxyXG4iXX0=