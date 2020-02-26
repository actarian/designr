import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlEmail } from './control-email';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
function ControlEmailComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 4);
    i0.ɵɵpipe(1, "label");
} if (rf & 2) {
    const context_r35 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(1, 3, context_r35.option.placeholder));
    i0.ɵɵproperty("id", context_r35.option.key)("formControlName", context_r35.option.key);
} }
function ControlEmailComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.required"));
} }
function ControlEmailComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.email"));
} }
const _c0 = function (a0) { return { minlength: a0 }; };
function ControlEmailComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r36 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.minlength", null, i0.ɵɵpureFunction1(5, _c0, context_r36.option.minlength)));
} }
const _c1 = function (a0) { return { maxlength: a0 }; };
function ControlEmailComponent_ng_template_3_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r36 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.maxlength", null, i0.ɵɵpureFunction1(5, _c1, context_r36.option.maxlength)));
} }
function ControlEmailComponent_ng_template_3_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.pattern"));
} }
function ControlEmailComponent_ng_template_3_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.match"));
} }
function ControlEmailComponent_ng_template_3_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.exists"));
} }
function ControlEmailComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, ControlEmailComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
    i0.ɵɵtemplate(2, ControlEmailComponent_ng_template_3_div_0_div_2_Template, 3, 3, "div", 7);
    i0.ɵɵtemplate(3, ControlEmailComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
    i0.ɵɵtemplate(4, ControlEmailComponent_ng_template_3_div_0_div_4_Template, 3, 7, "div", 7);
    i0.ɵɵtemplate(5, ControlEmailComponent_ng_template_3_div_0_div_5_Template, 3, 3, "div", 7);
    i0.ɵɵtemplate(6, ControlEmailComponent_ng_template_3_div_0_div_6_Template, 3, 3, "div", 7);
    i0.ɵɵtemplate(7, ControlEmailComponent_ng_template_3_div_0_div_7_Template, 3, 3, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r36 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r36.control.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r36.control.errors.email);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r36.control.errors.minlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r36.control.errors.maxlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r36.control.errors.pattern);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r36.control.errors.match);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r36.control.errors.exists);
} }
function ControlEmailComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlEmailComponent_ng_template_3_div_0_Template, 8, 7, "div", 5);
} if (rf & 2) {
    const context_r36 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r36.control.invalid && (context_r36.control.dirty || context_r36.control.touched));
} }
function ControlEmailComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlEmailComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function (a0) { return { $implicit: a0 }; };
export class ControlEmailComponent extends ControlComponent {
}
ControlEmailComponent.ɵfac = function ControlEmailComponent_Factory(t) { return ɵControlEmailComponent_BaseFactory(t || ControlEmailComponent); };
ControlEmailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlEmailComponent, selectors: [["control-email-component"]], inputs: { option: "option" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "email", 1, "control__input", "control__input--email", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--email", 4, "ngIf"], [1, "control__error", "control__error--email"], [4, "ngIf"]], template: function ControlEmailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ControlEmailComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, ControlEmailComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, ControlEmailComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
        i0.ɵɵtemplate(6, ControlEmailComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const _r29 = i0.ɵɵreference(2);
        const _r31 = i0.ɵɵreference(4);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c2, ctx.context));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r31)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c2, ctx.context));
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
const ɵControlEmailComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlEmailComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlEmailComponent, [{
        type: Component,
        args: [{
                selector: 'control-email-component',
                templateUrl: 'control-email.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1lbWFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvZW1haWwvY29udHJvbC1lbWFpbC5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9lbWFpbC9jb250cm9sLWVtYWlsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0lDQTdDLDJCQUNEOzs7O0lBRHFELDZGQUFzRDtJQUFDLDJDQUF5QiwyQ0FBQTs7O0lBSW5JLDJCQUE2QztJQUFBLFlBQStCOztJQUFBLGlCQUFNOztJQUFyQyxlQUErQjtJQUEvQiw2REFBK0I7OztJQUM1RSwyQkFBMEM7SUFBQSxZQUE0Qjs7SUFBQSxpQkFBTTs7SUFBbEMsZUFBNEI7SUFBNUIsMERBQTRCOzs7O0lBQ3RFLDJCQUE4QztJQUFBLFlBQWlGOztJQUFBLGlCQUFNOzs7SUFBdkYsZUFBaUY7SUFBakYsOEhBQWlGOzs7O0lBQy9ILDJCQUE4QztJQUFBLFlBQWlGOztJQUFBLGlCQUFNOzs7SUFBdkYsZUFBaUY7SUFBakYsOEhBQWlGOzs7SUFDL0gsMkJBQTRDO0lBQUEsWUFBOEI7O0lBQUEsaUJBQU07O0lBQXBDLGVBQThCO0lBQTlCLDREQUE4Qjs7O0lBQzFFLDJCQUEwQztJQUFBLFlBQTRCOztJQUFBLGlCQUFNOztJQUFsQyxlQUE0QjtJQUE1QiwwREFBNEI7OztJQUN0RSwyQkFBMkM7SUFBQSxZQUE2Qjs7SUFBQSxpQkFBTTs7SUFBbkMsZUFBNkI7SUFBN0IsMkRBQTZCOzs7SUFQekUsOEJBQ0M7SUFBQSwwRkFBNkM7SUFDN0MsMEZBQTBDO0lBQzFDLDBGQUE4QztJQUM5QywwRkFBOEM7SUFDOUMsMEZBQTRDO0lBQzVDLDBGQUEwQztJQUMxQywwRkFBMkM7SUFDNUMsaUJBQU07OztJQVBBLGVBQXVDO0lBQXZDLDBEQUF1QztJQUN2QyxlQUFvQztJQUFwQyx1REFBb0M7SUFDcEMsZUFBd0M7SUFBeEMsMkRBQXdDO0lBQ3hDLGVBQXdDO0lBQXhDLDJEQUF3QztJQUN4QyxlQUFzQztJQUF0Qyx5REFBc0M7SUFDdEMsZUFBb0M7SUFBcEMsdURBQW9DO0lBQ3BDLGVBQXFDO0lBQXJDLHdEQUFxQzs7O0lBUDNDLG9GQUNDOzs7SUFEaUQsZ0hBQXFGOzs7SUFVeEksd0JBQStHOzs7SUFDL0csd0JBQStHOzs7QURSaEgsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGdCQUFnQjs7d0hBQTlDLHFCQUFxQjswREFBckIscUJBQXFCO1FDUmxDLGdDQUNDO1FBQUEsdUhBQ0M7UUFFRCx1SEFDQztRQVVELHdGQUFnRztRQUNoRyx3RkFBZ0c7UUFDakcsMEJBQWU7Ozs7UUFqQkQsb0NBQWtCO1FBZWpCLGVBQWlGO1FBQWpGLCtEQUFpRixvRUFBQTtRQUNqRixlQUFpRjtRQUFqRiwrREFBaUYsb0VBQUE7O29FRFJuRixxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUpqQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjthQUMzQzs7a0JBR0MsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sRW1haWwgfSBmcm9tICcuL2NvbnRyb2wtZW1haWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLWVtYWlsLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1lbWFpbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xFbWFpbENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbEVtYWlsO1xuXG59XG4iLCI8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG5cdDxuZy10ZW1wbGF0ZSAjaW5wdXREZWYgbGV0LWNvbnRleHQ+XHJcblx0XHQ8aW5wdXQgY2xhc3M9XCJjb250cm9sX19pbnB1dCBjb250cm9sX19pbnB1dC0tZW1haWxcIiBwbGFjZWhvbGRlcj1cInt7IGNvbnRleHQub3B0aW9uLnBsYWNlaG9sZGVyIHwgbGFiZWwgfX1cIiBbaWRdPVwiY29udGV4dC5vcHRpb24ua2V5XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250ZXh0Lm9wdGlvbi5rZXlcIiB0eXBlPVwiZW1haWxcIj5cclxuXHQ8L25nLXRlbXBsYXRlPlxyXG5cdDxuZy10ZW1wbGF0ZSAjZXJyb3JEZWYgbGV0LWNvbnRleHQ+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udHJvbF9fZXJyb3IgY29udHJvbF9fZXJyb3ItLWVtYWlsXCIgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuaW52YWxpZCAmJiAoY29udGV4dC5jb250cm9sLmRpcnR5IHx8IGNvbnRleHQuY29udHJvbC50b3VjaGVkKVwiPlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5yZXF1aXJlZFwiPnt7ICdlcnJvcnMucmVxdWlyZWQnIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMuZW1haWxcIj57eyAnZXJyb3JzLmVtYWlsJyB8IGxhYmVsIH19PC9kaXY+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLm1pbmxlbmd0aFwiPnt7ICdlcnJvcnMubWlubGVuZ3RoJyB8IGxhYmVsIDogbnVsbCA6IHsgbWlubGVuZ3RoOiBjb250ZXh0Lm9wdGlvbi5taW5sZW5ndGggfSB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5tYXhsZW5ndGhcIj57eyAnZXJyb3JzLm1heGxlbmd0aCcgfCBsYWJlbCA6IG51bGwgOiB7IG1heGxlbmd0aDogY29udGV4dC5vcHRpb24ubWF4bGVuZ3RoIH0gfX08L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMucGF0dGVyblwiPnt7ICdlcnJvcnMucGF0dGVybicgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5tYXRjaFwiPnt7ICdlcnJvcnMubWF0Y2gnIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMuZXhpc3RzXCI+e3sgJ2Vycm9ycy5leGlzdHMnIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuaW5wdXRSZWYgfHwgaW5wdXREZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5lcnJvclJlZiB8fCBlcnJvckRlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19