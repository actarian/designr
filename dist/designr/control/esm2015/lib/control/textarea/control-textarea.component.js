import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlTextarea } from './control-textarea';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
function ControlTextareaComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "textarea", 4);
    i0.ɵɵpipe(1, "label");
} if (rf & 2) {
    const context_r173 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(1, 3, context_r173.option.placeholder));
    i0.ɵɵproperty("id", context_r173.option.key)("formControlName", context_r173.option.key);
} }
function ControlTextareaComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.required"));
} }
const _c0 = function (a0) { return { minlength: a0 }; };
function ControlTextareaComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r174 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.minlength", null, i0.ɵɵpureFunction1(5, _c0, context_r174.option.minlength)));
} }
const _c1 = function (a0) { return { maxlength: a0 }; };
function ControlTextareaComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r174 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.maxlength", null, i0.ɵɵpureFunction1(5, _c1, context_r174.option.maxlength)));
} }
function ControlTextareaComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, ControlTextareaComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
    i0.ɵɵtemplate(2, ControlTextareaComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 7);
    i0.ɵɵtemplate(3, ControlTextareaComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r174 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r174.control.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r174.control.errors.minlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r174.control.errors.maxlength);
} }
function ControlTextareaComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlTextareaComponent_ng_template_3_div_0_Template, 4, 3, "div", 5);
} if (rf & 2) {
    const context_r174 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r174.control.invalid && (context_r174.control.dirty || context_r174.control.touched));
} }
function ControlTextareaComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlTextareaComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function (a0) { return { $implicit: a0 }; };
export class ControlTextareaComponent extends ControlComponent {
}
ControlTextareaComponent.ɵfac = function ControlTextareaComponent_Factory(t) { return ɵControlTextareaComponent_BaseFactory(t || ControlTextareaComponent); };
ControlTextareaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlTextareaComponent, selectors: [["control-textarea-component"]], inputs: { option: "option" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["rows", "4", 1, "control__input", "control__input--textarea", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--textarea", 4, "ngIf"], [1, "control__error", "control__error--textarea"], [4, "ngIf"]], template: function ControlTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ControlTextareaComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, ControlTextareaComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, ControlTextareaComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
        i0.ɵɵtemplate(6, ControlTextareaComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const _r167 = i0.ɵɵreference(2);
        const _r169 = i0.ɵɵreference(4);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r167)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c2, ctx.context));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r169)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c2, ctx.context));
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
const ɵControlTextareaComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlTextareaComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlTextareaComponent, [{
        type: Component,
        args: [{
                selector: 'control-textarea-component',
                templateUrl: 'control-textarea.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC10ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvdGV4dGFyZWEvY29udHJvbC10ZXh0YXJlYS5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC90ZXh0YXJlYS9jb250cm9sLXRleHRhcmVhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0lDQW5ELDhCQUFzTTs7OztJQUE1SSw4RkFBc0Q7SUFBQyw0Q0FBeUIsNENBQUE7OztJQUl6SSwyQkFBNkM7SUFBQSxZQUErQjs7SUFBQSxpQkFBTTs7SUFBckMsZUFBK0I7SUFBL0IsNkRBQStCOzs7O0lBQzVFLDJCQUE4QztJQUFBLFlBQWlGOztJQUFBLGlCQUFNOzs7SUFBdkYsZUFBaUY7SUFBakYsK0hBQWlGOzs7O0lBQy9ILDJCQUE4QztJQUFBLFlBQWlGOztJQUFBLGlCQUFNOzs7SUFBdkYsZUFBaUY7SUFBakYsK0hBQWlGOzs7SUFIaEksOEJBQ0M7SUFBQSw2RkFBNkM7SUFDN0MsNkZBQThDO0lBQzlDLDZGQUE4QztJQUMvQyxpQkFBTTs7O0lBSEEsZUFBdUM7SUFBdkMsMkRBQXVDO0lBQ3ZDLGVBQXdDO0lBQXhDLDREQUF3QztJQUN4QyxlQUF3QztJQUF4Qyw0REFBd0M7OztJQUg5Qyx1RkFDQzs7O0lBRG9ELG1IQUFxRjs7O0lBTTNJLHdCQUErRzs7O0lBQy9HLHdCQUErRzs7O0FESmhILE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxnQkFBZ0I7O2lJQUFqRCx3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQ1JyQyxnQ0FDQztRQUFBLDBIQUNDO1FBRUQsMEhBQ0M7UUFNRCwyRkFBZ0c7UUFDaEcsMkZBQWdHO1FBQ2pHLDBCQUFlOzs7O1FBYkQsb0NBQWtCO1FBV2pCLGVBQWlGO1FBQWpGLGdFQUFpRixvRUFBQTtRQUNqRixlQUFpRjtRQUFqRixnRUFBaUYsb0VBQUE7O3VFREpuRix3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUpwQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQzthQUM5Qzs7a0JBR0MsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sVGV4dGFyZWEgfSBmcm9tICcuL2NvbnRyb2wtdGV4dGFyZWEnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLXRleHRhcmVhLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC10ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xUZXh0YXJlYUNvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbFRleHRhcmVhO1xuXG59XG4iLCI8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG5cdDxuZy10ZW1wbGF0ZSAjaW5wdXREZWYgbGV0LWNvbnRleHQ+XHJcblx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJjb250cm9sX19pbnB1dCBjb250cm9sX19pbnB1dC0tdGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cInt7IGNvbnRleHQub3B0aW9uLnBsYWNlaG9sZGVyIHwgbGFiZWwgfX1cIiBbaWRdPVwiY29udGV4dC5vcHRpb24ua2V5XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250ZXh0Lm9wdGlvbi5rZXlcIiByb3dzPVwiNFwiPjwvdGV4dGFyZWE+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8bmctdGVtcGxhdGUgI2Vycm9yRGVmIGxldC1jb250ZXh0PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbnRyb2xfX2Vycm9yIGNvbnRyb2xfX2Vycm9yLS10ZXh0YXJlYVwiICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmludmFsaWQgJiYgKGNvbnRleHQuY29udHJvbC5kaXJ0eSB8fCBjb250ZXh0LmNvbnRyb2wudG91Y2hlZClcIj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMucmVxdWlyZWRcIj57eyAnZXJyb3JzLnJlcXVpcmVkJyB8IGxhYmVsIH19PC9kaXY+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLm1pbmxlbmd0aFwiPnt7ICdlcnJvcnMubWlubGVuZ3RoJyB8IGxhYmVsIDogbnVsbCA6IHsgbWlubGVuZ3RoOiBjb250ZXh0Lm9wdGlvbi5taW5sZW5ndGggfSB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5tYXhsZW5ndGhcIj57eyAnZXJyb3JzLm1heGxlbmd0aCcgfCBsYWJlbCA6IG51bGwgOiB7IG1heGxlbmd0aDogY29udGV4dC5vcHRpb24ubWF4bGVuZ3RoIH0gfX08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuaW5wdXRSZWYgfHwgaW5wdXREZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5lcnJvclJlZiB8fCBlcnJvckRlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19