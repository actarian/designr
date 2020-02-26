import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlPassword } from './control-password';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
function ControlPasswordComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r113 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "input", 5, 6);
    i0.ɵɵpipe(3, "label");
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵelementStart(5, "input", 8, 9);
    i0.ɵɵlistener("input", function ControlPasswordComponent_ng_template_1_Template_input_input_5_listener($event) { i0.ɵɵrestoreView(_r113); const _r111 = i0.ɵɵreference(6); const _r110 = i0.ɵɵreference(2); return _r110.setAttribute("type", _r111.checked ? "text" : "password"); });
    i0.ɵɵpipe(7, "label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r109 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(3, 3, context_r109.option.placeholder));
    i0.ɵɵproperty("formControlName", context_r109.option.key);
    i0.ɵɵadvance(4);
    i0.ɵɵattribute("aria-label", i0.ɵɵpipeBind1(7, 5, context_r109.option.label));
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
const _c0 = function (a0) { return { minlength: a0 }; };
function ControlPasswordComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r114 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.minlength", null, i0.ɵɵpureFunction1(5, _c0, context_r114.option.minlength)));
} }
const _c1 = function (a0) { return { maxlength: a0 }; };
function ControlPasswordComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r114 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.maxlength", null, i0.ɵɵpureFunction1(5, _c1, context_r114.option.maxlength)));
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
    const context_r114 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r114.control.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r114.control.errors.minlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r114.control.errors.maxlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r114.control.errors.pattern);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r114.control.errors.match);
} }
function ControlPasswordComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlPasswordComponent_ng_template_3_div_0_Template, 6, 5, "div", 10);
} if (rf & 2) {
    const context_r114 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r114.control.invalid && (context_r114.control.dirty || context_r114.control.touched));
} }
function ControlPasswordComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlPasswordComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function (a0) { return { $implicit: a0 }; };
export class ControlPasswordComponent extends ControlComponent {
    constructor() {
        super(...arguments);
        this.reveal = { checked: false };
    }
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
        const _r103 = i0.ɵɵreference(2);
        const _r105 = i0.ɵɵreference(4);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r103)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c2, ctx.context));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r105)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c2, ctx.context));
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
const ɵControlPasswordComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlPasswordComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlPasswordComponent, [{
        type: Component,
        args: [{
                selector: 'control-password-component',
                templateUrl: 'control-password.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvcGFzc3dvcmQvY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9wYXNzd29yZC9jb250cm9sLXBhc3N3b3JkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztJQ0FuRCw4QkFDQztJQUFBLDhCQUNBOztJQUFBLDhCQUNDO0lBQUEsbUNBQ0Q7SUFEbUcsbU5BQVMsbUJBQXNCLE1BQU0sa0JBQW1CLE1BQU8sR0FBRSxVQUFVLENBQUMsSUFBQzs7SUFBL0ssaUJBQ0Q7SUFBQSxpQkFBTTtJQUNQLGlCQUFNOzs7SUFKa0QsZUFBc0Q7SUFBdEQsOEZBQXNEO0lBQUMseURBQXNDO0lBRWxHLGVBQWdEO0lBQWhELDZFQUFnRDs7O0lBTWxHLDJCQUE2QztJQUFBLFlBQStCOztJQUFBLGlCQUFNOztJQUFyQyxlQUErQjtJQUEvQiw2REFBK0I7Ozs7SUFDNUUsMkJBQThDO0lBQUEsWUFBaUY7O0lBQUEsaUJBQU07OztJQUF2RixlQUFpRjtJQUFqRiwrSEFBaUY7Ozs7SUFDL0gsMkJBQThDO0lBQUEsWUFBaUY7O0lBQUEsaUJBQU07OztJQUF2RixlQUFpRjtJQUFqRiwrSEFBaUY7OztJQUMvSCwyQkFBNEM7SUFBQSxZQUE4Qjs7SUFBQSxpQkFBTTs7SUFBcEMsZUFBOEI7SUFBOUIsNERBQThCOzs7SUFDMUUsMkJBQTBDO0lBQUEsWUFBNEI7O0lBQUEsaUJBQU07O0lBQWxDLGVBQTRCO0lBQTVCLDBEQUE0Qjs7O0lBTHZFLCtCQUNDO0lBQUEsOEZBQTZDO0lBQzdDLDhGQUE4QztJQUM5Qyw4RkFBOEM7SUFDOUMsOEZBQTRDO0lBQzVDLDhGQUEwQztJQUMzQyxpQkFBTTs7O0lBTEEsZUFBdUM7SUFBdkMsMkRBQXVDO0lBQ3ZDLGVBQXdDO0lBQXhDLDREQUF3QztJQUN4QyxlQUF3QztJQUF4Qyw0REFBd0M7SUFDeEMsZUFBc0M7SUFBdEMsMERBQXNDO0lBQ3RDLGVBQW9DO0lBQXBDLHdEQUFvQzs7O0lBTDFDLHdGQUNDOzs7SUFEb0QsbUhBQXFGOzs7SUFRM0ksd0JBQStHOzs7SUFDL0csd0JBQStHOzs7QURYaEgsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGdCQUFnQjtJQUo5RDs7UUFNQyxXQUFNLEdBQXlCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO0tBSWxEOztpSUFOWSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQ1JyQyxnQ0FDQztRQUFBLDBIQUNDO1FBT0QsMEhBQ0M7UUFRRCwyRkFBZ0c7UUFDaEcsMkZBQWdHO1FBQ2pHLDBCQUFlOzs7O1FBcEJELG9DQUFrQjtRQWtCakIsZUFBaUY7UUFBakYsZ0VBQWlGLG9FQUFBO1FBQ2pGLGVBQWlGO1FBQWpGLGdFQUFpRixvRUFBQTs7dUVEWG5GLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBSnBDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2FBQzlDOztrQkFLQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xQYXNzd29yZCB9IGZyb20gJy4vY29udHJvbC1wYXNzd29yZCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtcGFzc3dvcmQtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFBhc3N3b3JkQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCB7XG5cblx0cmV2ZWFsOiB7IGNoZWNrZWQ6IGJvb2xlYW4gfSA9IHsgY2hlY2tlZDogZmFsc2UgfTtcblxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xQYXNzd29yZDtcblxufVxuIiwiPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuXHQ8bmctdGVtcGxhdGUgI2lucHV0RGVmIGxldC1jb250ZXh0PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbnRyb2xfX2dyb3VwIGNvbnRyb2xfX2dyb3VwLS1wYXNzd29yZFwiPlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJjb250cm9sX19pbnB1dCBjb250cm9sX19pbnB1dC0tcGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInt7IGNvbnRleHQub3B0aW9uLnBsYWNlaG9sZGVyIHwgbGFiZWwgfX1cIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRleHQub3B0aW9uLmtleVwiIHR5cGU9XCJwYXNzd29yZFwiICNwYXNzd29yZD5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRyb2xfX2FkZG9uXCI+XHJcblx0XHRcdFx0PGlucHV0IGNsYXNzPVwiY29udHJvbF9fY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImNvbnRleHQub3B0aW9uLmxhYmVsIHwgbGFiZWxcIiAoaW5wdXQpPVwicGFzc3dvcmQuc2V0QXR0cmlidXRlKCd0eXBlJywgcmV2ZWFsLmNoZWNrZWQgPyAndGV4dCcgOiAncGFzc3dvcmQnKVwiICNyZXZlYWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8bmctdGVtcGxhdGUgI2Vycm9yRGVmIGxldC1jb250ZXh0PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbnRyb2xfX2Vycm9yIGNvbnRyb2xfX2Vycm9yLS1wYXNzd29yZFwiICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmludmFsaWQgJiYgKGNvbnRleHQuY29udHJvbC5kaXJ0eSB8fCBjb250ZXh0LmNvbnRyb2wudG91Y2hlZClcIj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMucmVxdWlyZWRcIj57eyAnZXJyb3JzLnJlcXVpcmVkJyB8IGxhYmVsIH19PC9kaXY+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLm1pbmxlbmd0aFwiPnt7ICdlcnJvcnMubWlubGVuZ3RoJyB8IGxhYmVsIDogbnVsbCA6IHsgbWlubGVuZ3RoOiBjb250ZXh0Lm9wdGlvbi5taW5sZW5ndGggfSB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5tYXhsZW5ndGhcIj57eyAnZXJyb3JzLm1heGxlbmd0aCcgfCBsYWJlbCA6IG51bGwgOiB7IG1heGxlbmd0aDogY29udGV4dC5vcHRpb24ubWF4bGVuZ3RoIH0gfX08L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMucGF0dGVyblwiPnt7ICdlcnJvcnMucGF0dGVybicgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5tYXRjaFwiPnt7ICdlcnJvcnMubWF0Y2gnIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuaW5wdXRSZWYgfHwgaW5wdXREZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5lcnJvclJlZiB8fCBlcnJvckRlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19