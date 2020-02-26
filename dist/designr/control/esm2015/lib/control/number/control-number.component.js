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
    const context_r94 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(1, 4, context_r94.option.placeholder));
    i0.ɵɵproperty("id", context_r94.option.key)("formControlName", context_r94.option.key);
    i0.ɵɵattribute("step", context_r94.option.step);
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
const _c0 = function (a0) { return { min: a0 }; };
function ControlNumberComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r95 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.min", null, i0.ɵɵpureFunction1(5, _c0, context_r95.option.min)));
} }
const _c1 = function (a0) { return { max: a0 }; };
function ControlNumberComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r95 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.max", null, i0.ɵɵpureFunction1(5, _c1, context_r95.option.max)));
} }
function ControlNumberComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, ControlNumberComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
    i0.ɵɵtemplate(2, ControlNumberComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 7);
    i0.ɵɵtemplate(3, ControlNumberComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r95 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r95.control.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r95.control.errors.min);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r95.control.errors.max);
} }
function ControlNumberComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlNumberComponent_ng_template_3_div_0_Template, 4, 3, "div", 5);
} if (rf & 2) {
    const context_r95 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r95.control.invalid && (context_r95.control.dirty || context_r95.control.touched));
} }
function ControlNumberComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlNumberComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function (a0) { return { $implicit: a0 }; };
export class ControlNumberComponent extends ControlComponent {
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
        const _r88 = i0.ɵɵreference(2);
        const _r90 = i0.ɵɵreference(4);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r88)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c2, ctx.context));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r90)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c2, ctx.context));
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.NumberValueAccessor, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
const ɵControlNumberComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlNumberComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlNumberComponent, [{
        type: Component,
        args: [{
                selector: 'control-number-component',
                templateUrl: 'control-number.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1udW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL251bWJlci9jb250cm9sLW51bWJlci5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9udW1iZXIvY29udHJvbC1udW1iZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7SUNBL0MsMkJBQ0Q7Ozs7SUFEc0QsNkZBQXNEO0lBQUMsMkNBQXlCLDJDQUFBO0lBQXNELCtDQUFpQzs7O0lBSTNOLDJCQUE2QztJQUFBLFlBQStCOztJQUFBLGlCQUFNOztJQUFyQyxlQUErQjtJQUEvQiw2REFBK0I7Ozs7SUFDNUUsMkJBQXdDO0lBQUEsWUFBK0Q7O0lBQUEsaUJBQU07OztJQUFyRSxlQUErRDtJQUEvRCxrSEFBK0Q7Ozs7SUFDdkcsMkJBQXdDO0lBQUEsWUFBK0Q7O0lBQUEsaUJBQU07OztJQUFyRSxlQUErRDtJQUEvRCxrSEFBK0Q7OztJQUh4Ryw4QkFDQztJQUFBLDJGQUE2QztJQUM3QywyRkFBd0M7SUFDeEMsMkZBQXdDO0lBQ3pDLGlCQUFNOzs7SUFIQSxlQUF1QztJQUF2QywwREFBdUM7SUFDdkMsZUFBa0M7SUFBbEMscURBQWtDO0lBQ2xDLGVBQWtDO0lBQWxDLHFEQUFrQzs7O0lBSHhDLHFGQUNDOzs7SUFEa0QsZ0hBQXFGOzs7SUFNekksd0JBQStHOzs7SUFDL0csd0JBQStHOzs7QURKaEgsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGdCQUFnQjs7MkhBQS9DLHNCQUFzQjsyREFBdEIsc0JBQXNCO1FDUm5DLGdDQUNDO1FBQUEsd0hBQ0M7UUFFRCx3SEFDQztRQU1ELHlGQUFnRztRQUNoRyx5RkFBZ0c7UUFDakcsMEJBQWU7Ozs7UUFiRCxvQ0FBa0I7UUFXakIsZUFBaUY7UUFBakYsK0RBQWlGLG9FQUFBO1FBQ2pGLGVBQWlGO1FBQWpGLCtEQUFpRixvRUFBQTs7cUVESm5GLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2FBQzVDOztrQkFHQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xOdW1iZXIgfSBmcm9tICcuL2NvbnRyb2wtbnVtYmVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1udW1iZXItY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLW51bWJlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xOdW1iZXJDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xOdW1iZXI7XG5cbn1cbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcblx0PG5nLXRlbXBsYXRlICNpbnB1dERlZiBsZXQtY29udGV4dD5cclxuXHRcdDxpbnB1dCBjbGFzcz1cImNvbnRyb2xfX2lucHV0IGNvbnRyb2xfX2lucHV0LS1udW1iZXJcIiBwbGFjZWhvbGRlcj1cInt7IGNvbnRleHQub3B0aW9uLnBsYWNlaG9sZGVyIHwgbGFiZWwgfX1cIiBbaWRdPVwiY29udGV4dC5vcHRpb24ua2V5XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250ZXh0Lm9wdGlvbi5rZXlcIiB0eXBlPVwibnVtYmVyXCIgW2F0dHIuc3RlcF09XCJjb250ZXh0Lm9wdGlvbi5zdGVwXCI+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8bmctdGVtcGxhdGUgI2Vycm9yRGVmIGxldC1jb250ZXh0PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbnRyb2xfX2Vycm9yIGNvbnRyb2xfX2Vycm9yLS1udW1iZXJcIiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5pbnZhbGlkICYmIChjb250ZXh0LmNvbnRyb2wuZGlydHkgfHwgY29udGV4dC5jb250cm9sLnRvdWNoZWQpXCI+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLnJlcXVpcmVkXCI+e3sgJ2Vycm9ycy5yZXF1aXJlZCcgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5taW5cIj57eyAnZXJyb3JzLm1pbicgfCBsYWJlbCA6IG51bGwgOiB7IG1pbjogY29udGV4dC5vcHRpb24ubWluIH0gfX08L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMubWF4XCI+e3sgJ2Vycm9ycy5tYXgnIHwgbGFiZWwgOiBudWxsIDogeyBtYXg6IGNvbnRleHQub3B0aW9uLm1heCB9IH19PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L25nLXRlbXBsYXRlPlxyXG5cdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZXh0LmlucHV0UmVmIHx8IGlucHV0RGVmOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGV4dCB9XCI+PC9uZy1jb250YWluZXI+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuZXJyb3JSZWYgfHwgZXJyb3JEZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==