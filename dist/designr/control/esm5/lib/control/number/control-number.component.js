import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlNumber } from './control-number';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
function ControlNumberComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 4);
    i0.ɵɵpipe(1, "label");
} if (rf & 2) {
    var context_r290 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(1, 4, context_r290.option.placeholder));
    i0.ɵɵproperty("id", context_r290.option.key)("formControlName", context_r290.option.key);
    i0.ɵɵattribute("step", context_r290.option.step);
} }
function ControlNumberComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.required"));
} }
var _c0 = function (a0) { return { min: a0 }; };
function ControlNumberComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r291 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.min", null, i0.ɵɵpureFunction1(5, _c0, context_r291.option.min)));
} }
var _c1 = function (a0) { return { max: a0 }; };
function ControlNumberComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r291 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.max", null, i0.ɵɵpureFunction1(5, _c1, context_r291.option.max)));
} }
function ControlNumberComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, ControlNumberComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
    i0.ɵɵtemplate(2, ControlNumberComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 7);
    i0.ɵɵtemplate(3, ControlNumberComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r291 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r291.control.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r291.control.errors.min);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r291.control.errors.max);
} }
function ControlNumberComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlNumberComponent_ng_template_3_div_0_Template, 4, 3, "div", 5);
} if (rf & 2) {
    var context_r291 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r291.control.invalid && (context_r291.control.dirty || context_r291.control.touched));
} }
function ControlNumberComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlNumberComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c2 = function (a0) { return { $implicit: a0 }; };
var ControlNumberComponent = /** @class */ (function (_super) {
    __extends(ControlNumberComponent, _super);
    function ControlNumberComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlNumberComponent.ɵfac = function ControlNumberComponent_Factory(t) { return ɵControlNumberComponent_BaseFactory(t || ControlNumberComponent); };
    ControlNumberComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlNumberComponent, selectors: [["control-number-component"]], inputs: { option: "option" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "number", 1, "control__input", "control__input--number", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--number", 4, "ngIf"], [1, "control__error", "control__error--number"], [4, "ngIf"]], template: function ControlNumberComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, ControlNumberComponent_ng_template_1_Template, 2, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, ControlNumberComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(5, ControlNumberComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            i0.ɵɵtemplate(6, ControlNumberComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r284 = i0.ɵɵreference(2);
            var _r286 = i0.ɵɵreference(4);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r284)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c2, ctx.context));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r286)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c2, ctx.context));
        } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.NumberValueAccessor, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
    return ControlNumberComponent;
}(ControlComponent));
export { ControlNumberComponent };
var ɵControlNumberComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlNumberComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlNumberComponent, [{
        type: Component,
        args: [{
                selector: 'control-number-component',
                templateUrl: 'control-number.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1udW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL251bWJlci9jb250cm9sLW51bWJlci5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9udW1iZXIvY29udHJvbC1udW1iZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0lDQS9DLDJCQUNEOzs7O0lBRHNELDhGQUFzRDtJQUFDLDRDQUF5Qiw0Q0FBQTtJQUFzRCxnREFBaUM7OztJQUkzTiwyQkFBNkM7SUFBQSxZQUErQjs7SUFBQSxpQkFBTTs7SUFBckMsZUFBK0I7SUFBL0IsNkRBQStCOzs7O0lBQzVFLDJCQUF3QztJQUFBLFlBQStEOztJQUFBLGlCQUFNOzs7SUFBckUsZUFBK0Q7SUFBL0QsbUhBQStEOzs7O0lBQ3ZHLDJCQUF3QztJQUFBLFlBQStEOztJQUFBLGlCQUFNOzs7SUFBckUsZUFBK0Q7SUFBL0QsbUhBQStEOzs7SUFIeEcsOEJBQ0M7SUFBQSwyRkFBNkM7SUFDN0MsMkZBQXdDO0lBQ3hDLDJGQUF3QztJQUN6QyxpQkFBTTs7O0lBSEEsZUFBdUM7SUFBdkMsMkRBQXVDO0lBQ3ZDLGVBQWtDO0lBQWxDLHNEQUFrQztJQUNsQyxlQUFrQztJQUFsQyxzREFBa0M7OztJQUh4QyxxRkFDQzs7O0lBRGtELG1IQUFxRjs7O0lBTXpJLHdCQUErRzs7O0lBQy9HLHdCQUErRzs7O0FEUmhIO0lBSTRDLDBDQUFnQjtJQUo1RDs7S0FRQzsrSEFKWSxzQkFBc0I7K0RBQXRCLHNCQUFzQjtZQ1JuQyxnQ0FDQztZQUFBLHdIQUNDO1lBRUQsd0hBQ0M7WUFNRCx5RkFBZ0c7WUFDaEcseUZBQWdHO1lBQ2pHLDBCQUFlOzs7O1lBYkQsb0NBQWtCO1lBV2pCLGVBQWlGO1lBQWpGLGdFQUFpRixvRUFBQTtZQUNqRixlQUFpRjtZQUFqRixnRUFBaUYsb0VBQUE7O2lDRFpoRztDQVlDLEFBUkQsQ0FJNEMsZ0JBQWdCLEdBSTNEO1NBSlksc0JBQXNCO21FQUF0QixzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQUpsQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjthQUM1Qzs7a0JBR0MsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sTnVtYmVyIH0gZnJvbSAnLi9jb250cm9sLW51bWJlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtbnVtYmVyLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sTnVtYmVyQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCB7XG5cblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sTnVtYmVyO1xuXG59XG4iLCI8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG5cdDxuZy10ZW1wbGF0ZSAjaW5wdXREZWYgbGV0LWNvbnRleHQ+XHJcblx0XHQ8aW5wdXQgY2xhc3M9XCJjb250cm9sX19pbnB1dCBjb250cm9sX19pbnB1dC0tbnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJ7eyBjb250ZXh0Lm9wdGlvbi5wbGFjZWhvbGRlciB8IGxhYmVsIH19XCIgW2lkXT1cImNvbnRleHQub3B0aW9uLmtleVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udGV4dC5vcHRpb24ua2V5XCIgdHlwZT1cIm51bWJlclwiIFthdHRyLnN0ZXBdPVwiY29udGV4dC5vcHRpb24uc3RlcFwiPlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLXRlbXBsYXRlICNlcnJvckRlZiBsZXQtY29udGV4dD5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb250cm9sX19lcnJvciBjb250cm9sX19lcnJvci0tbnVtYmVyXCIgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuaW52YWxpZCAmJiAoY29udGV4dC5jb250cm9sLmRpcnR5IHx8IGNvbnRleHQuY29udHJvbC50b3VjaGVkKVwiPlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5yZXF1aXJlZFwiPnt7ICdlcnJvcnMucmVxdWlyZWQnIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMubWluXCI+e3sgJ2Vycm9ycy5taW4nIHwgbGFiZWwgOiBudWxsIDogeyBtaW46IGNvbnRleHQub3B0aW9uLm1pbiB9IH19PC9kaXY+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLm1heFwiPnt7ICdlcnJvcnMubWF4JyB8IGxhYmVsIDogbnVsbCA6IHsgbWF4OiBjb250ZXh0Lm9wdGlvbi5tYXggfSB9fTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5pbnB1dFJlZiB8fCBpbnB1dERlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG5cdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZXh0LmVycm9yUmVmIHx8IGVycm9yRGVmOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGV4dCB9XCI+PC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=