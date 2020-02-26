import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./control-outlet.component";
function ControlsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "control-outlet", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r391 = ctx.$implicit;
    var ctx_r390 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("fieldset__field fieldset__field--", option_r391.schema, "");
    i0.ɵɵproperty("option", option_r391)("form", ctx_r390.form);
} }
var ControlsComponent = /** @class */ (function (_super) {
    __extends(ControlsComponent, _super);
    function ControlsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlsComponent.ɵfac = function ControlsComponent_Factory(t) { return ɵControlsComponent_BaseFactory(t || ControlsComponent); };
    ControlsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlsComponent, selectors: [["controls-component"]], inputs: { options: "options", form: "form" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "option", "form"]], template: function ControlsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ControlsComponent_ng_container_0_Template, 2, 5, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.options);
        } }, directives: [i1.NgForOf, i2.ControlOutletComponent], encapsulation: 2 });
    return ControlsComponent;
}(DisposableComponent));
export { ControlsComponent };
var ɵControlsComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlsComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlsComponent, [{
        type: Component,
        args: [{
                selector: 'controls-component',
                templateUrl: 'controls.component.html',
            }]
    }], null, { options: [{
            type: Input
        }], form: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2xzLmNvbXBvbmVudC50cyIsImxpYi9jb250cm9sL2NvbnRyb2xzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0hwRCw2QkFDQztJQUFBLG9DQVFpQjtJQUNsQiwwQkFBZTs7OztJQVRFLGVBQTBEO0lBQTFELHNGQUEwRDtJQUFDLG9DQUFpQix1QkFBQTs7QURLN0Y7SUFJdUMscUNBQW1CO0lBSjFEOztLQU9DO2dIQUhZLGlCQUFpQjswREFBakIsaUJBQWlCO1lDVjlCLG9GQUNDOztZQURhLHFDQUE4Qjs7NEJEQTVDO0NBYUMsQUFQRCxDQUl1QyxtQkFBbUIsR0FHekQ7U0FIWSxpQkFBaUI7OERBQWpCLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBSjdCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUseUJBQXlCO2FBQ3RDOztrQkFFQyxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBJQ29udHJvbE9wdGlvbiB9IGZyb20gJy4vY29udHJvbC1vcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9scy1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2xzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbHNDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IHtcblx0QElucHV0KCkgb3B0aW9uczogSUNvbnRyb2xPcHRpb248YW55PltdO1xuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiPlxyXG5cdDxjb250cm9sLW91dGxldCBjbGFzcz1cImZpZWxkc2V0X19maWVsZCBmaWVsZHNldF9fZmllbGQtLXt7b3B0aW9uLnNjaGVtYX19XCIgW29wdGlvbl09XCJvcHRpb25cIiBbZm9ybV09XCJmb3JtXCI+XHJcblx0XHQ8IS0tXHJcblx0XHQ8bmctdGVtcGxhdGUgI2Vycm9yUmVmIGxldC1jb250ZXh0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udHJvbF9fZXJyb3IgY29udHJvbF9fZXJyb3ItLXt7Y29udGV4dC5vcHRpb24uc2NoZW1hfX1cIj5cclxuXHRcdFx0XHRBQUFcclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0LS0+XHJcblx0PC9jb250cm9sLW91dGxldD5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==