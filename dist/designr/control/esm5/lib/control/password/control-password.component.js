import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlPassword } from './control-password';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
function ControlPasswordComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r309 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "input", 5, 6);
    i0.ɵɵpipe(3, "label");
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵelementStart(5, "input", 8, 9);
    i0.ɵɵlistener("input", function ControlPasswordComponent_ng_template_1_Template_input_input_5_listener($event) { i0.ɵɵrestoreView(_r309); var _r307 = i0.ɵɵreference(6); var _r306 = i0.ɵɵreference(2); return _r306.setAttribute("type", _r307.checked ? "text" : "password"); });
    i0.ɵɵpipe(7, "label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r305 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(3, 3, context_r305.option.placeholder));
    i0.ɵɵproperty("formControlName", context_r305.option.key);
    i0.ɵɵadvance(4);
    i0.ɵɵattribute("aria-label", i0.ɵɵpipeBind1(7, 5, context_r305.option.label));
} }
function ControlPasswordComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.required"));
} }
var _c0 = function (a0) { return { minlength: a0 }; };
function ControlPasswordComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r310 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.minlength", null, i0.ɵɵpureFunction1(5, _c0, context_r310.option.minlength)));
} }
var _c1 = function (a0) { return { maxlength: a0 }; };
function ControlPasswordComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r310 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.maxlength", null, i0.ɵɵpureFunction1(5, _c1, context_r310.option.maxlength)));
} }
function ControlPasswordComponent_ng_template_3_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.pattern"));
} }
function ControlPasswordComponent_ng_template_3_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.match"));
} }
function ControlPasswordComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, ControlPasswordComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 12);
    i0.ɵɵtemplate(2, ControlPasswordComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 12);
    i0.ɵɵtemplate(3, ControlPasswordComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 12);
    i0.ɵɵtemplate(4, ControlPasswordComponent_ng_template_3_div_0_div_4_Template, 3, 3, "div", 12);
    i0.ɵɵtemplate(5, ControlPasswordComponent_ng_template_3_div_0_div_5_Template, 3, 3, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r310 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r310.control.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r310.control.errors.minlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r310.control.errors.maxlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r310.control.errors.pattern);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r310.control.errors.match);
} }
function ControlPasswordComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlPasswordComponent_ng_template_3_div_0_Template, 6, 5, "div", 10);
} if (rf & 2) {
    var context_r310 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r310.control.invalid && (context_r310.control.dirty || context_r310.control.touched));
} }
function ControlPasswordComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlPasswordComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c2 = function (a0) { return { $implicit: a0 }; };
var ControlPasswordComponent = /** @class */ (function (_super) {
    __extends(ControlPasswordComponent, _super);
    function ControlPasswordComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.reveal = { checked: false };
        return _this;
    }
    ControlPasswordComponent.ɵfac = function ControlPasswordComponent_Factory(t) { return ɵControlPasswordComponent_BaseFactory(t || ControlPasswordComponent); };
    ControlPasswordComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlPasswordComponent, selectors: [["control-password-component"]], inputs: { option: "option" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control__group", "control__group--password"], ["type", "password", 1, "control__input", "control__input--password", 3, "placeholder", "formControlName"], ["password", ""], [1, "control__addon"], ["type", "checkbox", 1, "control__checkbox", 3, "input"], ["reveal", ""], ["class", "control__error control__error--password", 4, "ngIf"], [1, "control__error", "control__error--password"], [4, "ngIf"]], template: function ControlPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, ControlPasswordComponent_ng_template_1_Template, 8, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, ControlPasswordComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(5, ControlPasswordComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            i0.ɵɵtemplate(6, ControlPasswordComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r299 = i0.ɵɵreference(2);
            var _r301 = i0.ɵɵreference(4);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r299)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c2, ctx.context));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r301)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c2, ctx.context));
        } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
    return ControlPasswordComponent;
}(ControlComponent));
export { ControlPasswordComponent };
var ɵControlPasswordComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlPasswordComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlPasswordComponent, [{
        type: Component,
        args: [{
                selector: 'control-password-component',
                templateUrl: 'control-password.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvcGFzc3dvcmQvY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9wYXNzd29yZC9jb250cm9sLXBhc3N3b3JkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7SUNBbkQsOEJBQ0M7SUFBQSw4QkFDQTs7SUFBQSw4QkFDQztJQUFBLG1DQUNEO0lBRG1HLCtNQUFTLG1CQUFzQixNQUFNLGtCQUFtQixNQUFPLEdBQUUsVUFBVSxDQUFDLElBQUM7O0lBQS9LLGlCQUNEO0lBQUEsaUJBQU07SUFDUCxpQkFBTTs7O0lBSmtELGVBQXNEO0lBQXRELDhGQUFzRDtJQUFDLHlEQUFzQztJQUVsRyxlQUFnRDtJQUFoRCw2RUFBZ0Q7OztJQU1sRywyQkFBNkM7SUFBQSxZQUErQjs7SUFBQSxpQkFBTTs7SUFBckMsZUFBK0I7SUFBL0IsNkRBQStCOzs7O0lBQzVFLDJCQUE4QztJQUFBLFlBQWlGOztJQUFBLGlCQUFNOzs7SUFBdkYsZUFBaUY7SUFBakYsK0hBQWlGOzs7O0lBQy9ILDJCQUE4QztJQUFBLFlBQWlGOztJQUFBLGlCQUFNOzs7SUFBdkYsZUFBaUY7SUFBakYsK0hBQWlGOzs7SUFDL0gsMkJBQTRDO0lBQUEsWUFBOEI7O0lBQUEsaUJBQU07O0lBQXBDLGVBQThCO0lBQTlCLDREQUE4Qjs7O0lBQzFFLDJCQUEwQztJQUFBLFlBQTRCOztJQUFBLGlCQUFNOztJQUFsQyxlQUE0QjtJQUE1QiwwREFBNEI7OztJQUx2RSwrQkFDQztJQUFBLDhGQUE2QztJQUM3Qyw4RkFBOEM7SUFDOUMsOEZBQThDO0lBQzlDLDhGQUE0QztJQUM1Qyw4RkFBMEM7SUFDM0MsaUJBQU07OztJQUxBLGVBQXVDO0lBQXZDLDJEQUF1QztJQUN2QyxlQUF3QztJQUF4Qyw0REFBd0M7SUFDeEMsZUFBd0M7SUFBeEMsNERBQXdDO0lBQ3hDLGVBQXNDO0lBQXRDLDBEQUFzQztJQUN0QyxlQUFvQztJQUFwQyx3REFBb0M7OztJQUwxQyx3RkFDQzs7O0lBRG9ELG1IQUFxRjs7O0lBUTNJLHdCQUErRzs7O0lBQy9HLHdCQUErRzs7O0FEZmhIO0lBSThDLDRDQUFnQjtJQUo5RDtRQUFBLHFFQVVDO1FBSkEsWUFBTSxHQUF5QixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzs7S0FJbEQ7cUlBTlksd0JBQXdCO2lFQUF4Qix3QkFBd0I7WUNSckMsZ0NBQ0M7WUFBQSwwSEFDQztZQU9ELDBIQUNDO1lBUUQsMkZBQWdHO1lBQ2hHLDJGQUFnRztZQUNqRywwQkFBZTs7OztZQXBCRCxvQ0FBa0I7WUFrQmpCLGVBQWlGO1lBQWpGLGdFQUFpRixvRUFBQTtZQUNqRixlQUFpRjtZQUFqRixnRUFBaUYsb0VBQUE7O21DRG5CaEc7Q0FjQyxBQVZELENBSThDLGdCQUFnQixHQU03RDtTQU5ZLHdCQUF3QjtxRUFBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FKcEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7YUFDOUM7O2tCQUtDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFBhc3N3b3JkIH0gZnJvbSAnLi9jb250cm9sLXBhc3N3b3JkJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1wYXNzd29yZC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sUGFzc3dvcmRDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IHtcblxuXHRyZXZlYWw6IHsgY2hlY2tlZDogYm9vbGVhbiB9ID0geyBjaGVja2VkOiBmYWxzZSB9O1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbFBhc3N3b3JkO1xuXG59XG4iLCI8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG5cdDxuZy10ZW1wbGF0ZSAjaW5wdXREZWYgbGV0LWNvbnRleHQ+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udHJvbF9fZ3JvdXAgY29udHJvbF9fZ3JvdXAtLXBhc3N3b3JkXCI+XHJcblx0XHRcdDxpbnB1dCBjbGFzcz1cImNvbnRyb2xfX2lucHV0IGNvbnRyb2xfX2lucHV0LS1wYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwie3sgY29udGV4dC5vcHRpb24ucGxhY2Vob2xkZXIgfCBsYWJlbCB9fVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udGV4dC5vcHRpb24ua2V5XCIgdHlwZT1cInBhc3N3b3JkXCIgI3Bhc3N3b3JkPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udHJvbF9fYWRkb25cIj5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJjb250cm9sX19jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIFthdHRyLmFyaWEtbGFiZWxdPVwiY29udGV4dC5vcHRpb24ubGFiZWwgfCBsYWJlbFwiIChpbnB1dCk9XCJwYXNzd29yZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCByZXZlYWwuY2hlY2tlZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCcpXCIgI3JldmVhbD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L25nLXRlbXBsYXRlPlxyXG5cdDxuZy10ZW1wbGF0ZSAjZXJyb3JEZWYgbGV0LWNvbnRleHQ+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udHJvbF9fZXJyb3IgY29udHJvbF9fZXJyb3ItLXBhc3N3b3JkXCIgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuaW52YWxpZCAmJiAoY29udGV4dC5jb250cm9sLmRpcnR5IHx8IGNvbnRleHQuY29udHJvbC50b3VjaGVkKVwiPlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5yZXF1aXJlZFwiPnt7ICdlcnJvcnMucmVxdWlyZWQnIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMubWlubGVuZ3RoXCI+e3sgJ2Vycm9ycy5taW5sZW5ndGgnIHwgbGFiZWwgOiBudWxsIDogeyBtaW5sZW5ndGg6IGNvbnRleHQub3B0aW9uLm1pbmxlbmd0aCB9IH19PC9kaXY+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLm1heGxlbmd0aFwiPnt7ICdlcnJvcnMubWF4bGVuZ3RoJyB8IGxhYmVsIDogbnVsbCA6IHsgbWF4bGVuZ3RoOiBjb250ZXh0Lm9wdGlvbi5tYXhsZW5ndGggfSB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5wYXR0ZXJuXCI+e3sgJ2Vycm9ycy5wYXR0ZXJuJyB8IGxhYmVsIH19PC9kaXY+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLm1hdGNoXCI+e3sgJ2Vycm9ycy5tYXRjaCcgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5pbnB1dFJlZiB8fCBpbnB1dERlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG5cdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZXh0LmVycm9yUmVmIHx8IGVycm9yRGVmOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGV4dCB9XCI+PC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=