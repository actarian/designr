import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlText } from './control-text';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
function ControlTextComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 4);
    i0.ɵɵpipe(1, "label");
} if (rf & 2) {
    const context_r155 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(1, 3, context_r155.option.placeholder));
    i0.ɵɵproperty("id", context_r155.option.key)("formControlName", context_r155.option.key);
} }
function ControlTextComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlTextComponent_ng_template_4_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.required"));
} }
const _c0 = function (a0) { return { minlength: a0 }; };
function ControlTextComponent_ng_template_4_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r156 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.minlength", null, i0.ɵɵpureFunction1(5, _c0, context_r156.option.minlength)));
} }
const _c1 = function (a0) { return { maxlength: a0 }; };
function ControlTextComponent_ng_template_4_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r156 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.maxlength", null, i0.ɵɵpureFunction1(5, _c1, context_r156.option.maxlength)));
} }
function ControlTextComponent_ng_template_4_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.pattern"));
} }
function ControlTextComponent_ng_template_4_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.match"));
} }
function ControlTextComponent_ng_template_4_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.exists"));
} }
function ControlTextComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, ControlTextComponent_ng_template_4_div_0_div_1_Template, 3, 3, "div", 7);
    i0.ɵɵtemplate(2, ControlTextComponent_ng_template_4_div_0_div_2_Template, 3, 7, "div", 7);
    i0.ɵɵtemplate(3, ControlTextComponent_ng_template_4_div_0_div_3_Template, 3, 7, "div", 7);
    i0.ɵɵtemplate(4, ControlTextComponent_ng_template_4_div_0_div_4_Template, 3, 3, "div", 7);
    i0.ɵɵtemplate(5, ControlTextComponent_ng_template_4_div_0_div_5_Template, 3, 3, "div", 7);
    i0.ɵɵtemplate(6, ControlTextComponent_ng_template_4_div_0_div_6_Template, 3, 3, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r156 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r156.control.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r156.control.errors.minlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r156.control.errors.maxlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r156.control.errors.pattern);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r156.control.errors.match);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r156.control.errors.exists);
} }
function ControlTextComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlTextComponent_ng_template_4_div_0_Template, 7, 6, "div", 5);
} if (rf & 2) {
    const context_r156 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r156.control.invalid && (context_r156.control.dirty || context_r156.control.touched));
} }
function ControlTextComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function (a0) { return { $implicit: a0 }; };
export class ControlTextComponent extends ControlComponent {
}
ControlTextComponent.ɵfac = function ControlTextComponent_Factory(t) { return ɵControlTextComponent_BaseFactory(t || ControlTextComponent); };
ControlTextComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlTextComponent, selectors: [["control-text-component"]], inputs: { option: "option" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["errorDef", ""], ["type", "text", 1, "control__input", "control__input--text", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--text", 4, "ngIf"], [1, "control__error", "control__error--text"], [4, "ngIf"]], template: function ControlTextComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ControlTextComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, ControlTextComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
        i0.ɵɵtemplate(4, ControlTextComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, ControlTextComponent_ng_container_6_Template, 1, 0, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const _r149 = i0.ɵɵreference(2);
        const _r152 = i0.ɵɵreference(5);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r149)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c2, ctx.context));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r152)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c2, ctx.context));
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
const ɵControlTextComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlTextComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlTextComponent, [{
        type: Component,
        args: [{
                selector: 'control-text-component',
                templateUrl: 'control-text.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC10ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC90ZXh0L2NvbnRyb2wtdGV4dC5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC90ZXh0L2NvbnRyb2wtdGV4dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztJQ0EzQywyQkFDRDs7OztJQURvRCw4RkFBc0Q7SUFBQyw0Q0FBeUIsNENBQUE7OztJQUVwSSx3QkFBK0c7OztJQUc3RywyQkFBNkM7SUFBQSxZQUErQjs7SUFBQSxpQkFBTTs7SUFBckMsZUFBK0I7SUFBL0IsNkRBQStCOzs7O0lBQzVFLDJCQUE4QztJQUFBLFlBQWlGOztJQUFBLGlCQUFNOzs7SUFBdkYsZUFBaUY7SUFBakYsK0hBQWlGOzs7O0lBQy9ILDJCQUE4QztJQUFBLFlBQWlGOztJQUFBLGlCQUFNOzs7SUFBdkYsZUFBaUY7SUFBakYsK0hBQWlGOzs7SUFDL0gsMkJBQTRDO0lBQUEsWUFBOEI7O0lBQUEsaUJBQU07O0lBQXBDLGVBQThCO0lBQTlCLDREQUE4Qjs7O0lBQzFFLDJCQUEwQztJQUFBLFlBQTRCOztJQUFBLGlCQUFNOztJQUFsQyxlQUE0QjtJQUE1QiwwREFBNEI7OztJQUN0RSwyQkFBMkM7SUFBQSxZQUE2Qjs7SUFBQSxpQkFBTTs7SUFBbkMsZUFBNkI7SUFBN0IsMkRBQTZCOzs7SUFOekUsOEJBQ0M7SUFBQSx5RkFBNkM7SUFDN0MseUZBQThDO0lBQzlDLHlGQUE4QztJQUM5Qyx5RkFBNEM7SUFDNUMseUZBQTBDO0lBQzFDLHlGQUEyQztJQUM1QyxpQkFBTTs7O0lBTkEsZUFBdUM7SUFBdkMsMkRBQXVDO0lBQ3ZDLGVBQXdDO0lBQXhDLDREQUF3QztJQUN4QyxlQUF3QztJQUF4Qyw0REFBd0M7SUFDeEMsZUFBc0M7SUFBdEMsMERBQXNDO0lBQ3RDLGVBQW9DO0lBQXBDLHdEQUFvQztJQUNwQyxlQUFxQztJQUFyQyx5REFBcUM7OztJQU4zQyxtRkFDQzs7O0lBRGdELG1IQUFxRjs7O0lBU3ZJLHdCQUErRzs7O0FEUGhILE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxnQkFBZ0I7O3FIQUE3QyxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ1JqQyxnQ0FDQztRQUFBLHNIQUNDO1FBRUQsdUZBQWdHO1FBQ2hHLHNIQUNDO1FBU0QsdUZBQWdHO1FBQ2pHLDBCQUFlOzs7O1FBaEJELG9DQUFrQjtRQUlqQixlQUFpRjtRQUFqRixnRUFBaUYsb0VBQUE7UUFXakYsZUFBaUY7UUFBakYsZ0VBQWlGLG9FQUFBOzttRURQbkYsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7YUFDMUM7O2tCQUdDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFRleHQgfSBmcm9tICcuL2NvbnRyb2wtdGV4dCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtdGV4dC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtdGV4dC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xUZXh0Q29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCB7XG5cblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sVGV4dDtcblxufVxuIiwiPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuXHQ8bmctdGVtcGxhdGUgI2lucHV0RGVmIGxldC1jb250ZXh0PlxyXG5cdFx0PGlucHV0IGNsYXNzPVwiY29udHJvbF9faW5wdXQgY29udHJvbF9faW5wdXQtLXRleHRcIiBwbGFjZWhvbGRlcj1cInt7IGNvbnRleHQub3B0aW9uLnBsYWNlaG9sZGVyIHwgbGFiZWwgfX1cIiBbaWRdPVwiY29udGV4dC5vcHRpb24ua2V5XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250ZXh0Lm9wdGlvbi5rZXlcIiB0eXBlPVwidGV4dFwiPlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuaW5wdXRSZWYgfHwgaW5wdXREZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuXHQ8bmctdGVtcGxhdGUgI2Vycm9yRGVmIGxldC1jb250ZXh0PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbnRyb2xfX2Vycm9yIGNvbnRyb2xfX2Vycm9yLS10ZXh0XCIgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuaW52YWxpZCAmJiAoY29udGV4dC5jb250cm9sLmRpcnR5IHx8IGNvbnRleHQuY29udHJvbC50b3VjaGVkKVwiPlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5yZXF1aXJlZFwiPnt7ICdlcnJvcnMucmVxdWlyZWQnIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMubWlubGVuZ3RoXCI+e3sgJ2Vycm9ycy5taW5sZW5ndGgnIHwgbGFiZWwgOiBudWxsIDogeyBtaW5sZW5ndGg6IGNvbnRleHQub3B0aW9uLm1pbmxlbmd0aCB9IH19PC9kaXY+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLm1heGxlbmd0aFwiPnt7ICdlcnJvcnMubWF4bGVuZ3RoJyB8IGxhYmVsIDogbnVsbCA6IHsgbWF4bGVuZ3RoOiBjb250ZXh0Lm9wdGlvbi5tYXhsZW5ndGggfSB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5wYXR0ZXJuXCI+e3sgJ2Vycm9ycy5wYXR0ZXJuJyB8IGxhYmVsIH19PC9kaXY+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLm1hdGNoXCI+e3sgJ2Vycm9ycy5tYXRjaCcgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5leGlzdHNcIj57eyAnZXJyb3JzLmV4aXN0cycgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5lcnJvclJlZiB8fCBlcnJvckRlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19