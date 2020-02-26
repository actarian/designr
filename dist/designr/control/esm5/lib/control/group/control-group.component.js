import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlGroup } from './control-group';
import * as i0 from "@angular/core";
function ControlGroupComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r250 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, context_r250.option.title));
} }
function ControlGroupComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r250 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, context_r250.option.abstract));
} }
function ControlGroupComponent_ng_template_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "control-outlet", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r257 = ctx.$implicit;
    var context_r250 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("fieldset__field fieldset__field--", option_r257.schema, "");
    i0.ɵɵproperty("option", option_r257)("form", context_r250.control);
} }
function ControlGroupComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, ControlGroupComponent_ng_template_1_div_2_ng_container_1_Template, 2, 5, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r250 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", context_r250.option.options);
} }
function ControlGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlGroupComponent_ng_template_1_div_0_Template, 3, 3, "div", 4);
    i0.ɵɵtemplate(1, ControlGroupComponent_ng_template_1_div_1_Template, 3, 3, "div", 5);
    i0.ɵɵtemplate(2, ControlGroupComponent_ng_template_1_div_2_Template, 2, 1, "div", 6);
} if (rf & 2) {
    var context_r250 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r250.option.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r250.option.abstract);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r250.option.options.length);
} }
function ControlGroupComponent_ng_template_3_Template(rf, ctx) { }
function ControlGroupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlGroupComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c0 = function (a0) { return { $implicit: a0 }; };
var ControlGroupComponent = /** @class */ (function (_super) {
    __extends(ControlGroupComponent, _super);
    function ControlGroupComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlGroupComponent.ɵfac = function ControlGroupComponent_Factory(t) { return ɵControlGroupComponent_BaseFactory(t || ControlGroupComponent); };
    ControlGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlGroupComponent, selectors: [["control-group-component"]], inputs: { option: "option" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "control__title", 4, "ngIf"], ["class", "control__abstract", 4, "ngIf"], ["class", "fieldset", 4, "ngIf"], [1, "control__title"], [1, "control__abstract"], [1, "fieldset"], [4, "ngFor", "ngForOf"], [3, "option", "form"]], template: function ControlGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, ControlGroupComponent_ng_template_1_Template, 3, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, ControlGroupComponent_ng_template_3_Template, 0, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(5, ControlGroupComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            i0.ɵɵtemplate(6, ControlGroupComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r244 = i0.ɵɵreference(2);
            var _r246 = i0.ɵɵreference(4);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r244)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c0, ctx.context));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r246)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c0, ctx.context));
        } }, encapsulation: 2 });
    return ControlGroupComponent;
}(ControlComponent));
export { ControlGroupComponent };
var ɵControlGroupComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlGroupComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlGroupComponent, [{
        type: Component,
        args: [{
                selector: 'control-group-component',
                templateUrl: 'control-group.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvZ3JvdXAvY29udHJvbC1ncm91cC5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9ncm91cC9jb250cm9sLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztJQ0E3Qyw4QkFBeUQ7SUFBQSxZQUFrQzs7SUFBQSxpQkFBTTs7O0lBQXhDLGVBQWtDO0lBQWxDLHFFQUFrQzs7O0lBQzNGLDhCQUErRDtJQUFBLFlBQXFDOztJQUFBLGlCQUFNOzs7SUFBM0MsZUFBcUM7SUFBckMsd0VBQXFDOzs7SUFFbkcsNkJBQ0M7SUFBQSxxQ0FBdUk7SUFDeEksMEJBQWU7Ozs7SUFERSxlQUEwRDtJQUExRCxzRkFBMEQ7SUFBQyxvQ0FBaUIsOEJBQUE7OztJQUY5Riw4QkFDQztJQUFBLDZHQUNDO0lBRUYsaUJBQU07OztJQUhTLGVBQTZDO0lBQTdDLHFEQUE2Qzs7O0lBSDVELG9GQUF5RDtJQUN6RCxvRkFBK0Q7SUFDL0Qsb0ZBQ0M7OztJQUgyQixnREFBNEI7SUFDekIsZUFBK0I7SUFBL0IsbURBQStCO0lBQ3hDLGVBQXFDO0lBQXJDLHlEQUFxQzs7OztJQU81RCx3QkFBK0c7OztJQUMvRyx3QkFBK0c7OztBRFJoSDtJQUkyQyx5Q0FBZ0I7SUFKM0Q7O0tBTUM7NEhBRlkscUJBQXFCOzhEQUFyQixxQkFBcUI7WUNSbEMsZ0NBQ0M7WUFBQSx1SEFDQztZQVFELHVIQUFtQztZQUNuQyx3RkFBZ0c7WUFDaEcsd0ZBQWdHO1lBQ2pHLDBCQUFlOzs7O1lBYkQsb0NBQWtCO1lBV2pCLGVBQWlGO1lBQWpGLGdFQUFpRixvRUFBQTtZQUNqRixlQUFpRjtZQUFqRixnRUFBaUYsb0VBQUE7O2dDRFpoRztDQVVDLEFBTkQsQ0FJMkMsZ0JBQWdCLEdBRTFEO1NBRlkscUJBQXFCO2tFQUFyQixxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUpqQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjthQUMzQzs7a0JBRUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sR3JvdXAgfSBmcm9tICcuL2NvbnRyb2wtZ3JvdXAnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLWdyb3VwLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1ncm91cC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xHcm91cENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xHcm91cDtcbn1cbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcblx0PG5nLXRlbXBsYXRlICNpbnB1dERlZiBsZXQtY29udGV4dD5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb250cm9sX190aXRsZVwiICpuZ0lmPVwiY29udGV4dC5vcHRpb24udGl0bGVcIj57eyBjb250ZXh0Lm9wdGlvbi50aXRsZSB8IGxhYmVsIH19PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udHJvbF9fYWJzdHJhY3RcIiAqbmdJZj1cImNvbnRleHQub3B0aW9uLmFic3RyYWN0XCI+e3sgY29udGV4dC5vcHRpb24uYWJzdHJhY3QgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImZpZWxkc2V0XCIgKm5nSWY9XCJjb250ZXh0Lm9wdGlvbi5vcHRpb25zLmxlbmd0aFwiPlxyXG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29udGV4dC5vcHRpb24ub3B0aW9uc1wiPlxyXG5cdFx0XHRcdDxjb250cm9sLW91dGxldCBjbGFzcz1cImZpZWxkc2V0X19maWVsZCBmaWVsZHNldF9fZmllbGQtLXt7b3B0aW9uLnNjaGVtYX19XCIgW29wdGlvbl09XCJvcHRpb25cIiBbZm9ybV09XCJjb250ZXh0LmNvbnRyb2xcIj48L2NvbnRyb2wtb3V0bGV0PlxyXG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLXRlbXBsYXRlICNlcnJvckRlZiBsZXQtY29udGV4dD48L25nLXRlbXBsYXRlPlxyXG5cdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZXh0LmlucHV0UmVmIHx8IGlucHV0RGVmOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGV4dCB9XCI+PC9uZy1jb250YWluZXI+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuZXJyb3JSZWYgfHwgZXJyb3JEZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==