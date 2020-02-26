import { __extends } from "tslib";
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
    var context_r351 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(1, 3, context_r351.option.placeholder));
    i0.ɵɵproperty("id", context_r351.option.key)("formControlName", context_r351.option.key);
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
var _c0 = function (a0) { return { minlength: a0 }; };
function ControlTextComponent_ng_template_4_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r352 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.minlength", null, i0.ɵɵpureFunction1(5, _c0, context_r352.option.minlength)));
} }
var _c1 = function (a0) { return { maxlength: a0 }; };
function ControlTextComponent_ng_template_4_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r352 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.maxlength", null, i0.ɵɵpureFunction1(5, _c1, context_r352.option.maxlength)));
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
    var context_r352 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r352.control.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r352.control.errors.minlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r352.control.errors.maxlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r352.control.errors.pattern);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r352.control.errors.match);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r352.control.errors.exists);
} }
function ControlTextComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlTextComponent_ng_template_4_div_0_Template, 7, 6, "div", 5);
} if (rf & 2) {
    var context_r352 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r352.control.invalid && (context_r352.control.dirty || context_r352.control.touched));
} }
function ControlTextComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c2 = function (a0) { return { $implicit: a0 }; };
var ControlTextComponent = /** @class */ (function (_super) {
    __extends(ControlTextComponent, _super);
    function ControlTextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
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
            var _r345 = i0.ɵɵreference(2);
            var _r348 = i0.ɵɵreference(5);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r345)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c2, ctx.context));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r348)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c2, ctx.context));
        } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
    return ControlTextComponent;
}(ControlComponent));
export { ControlTextComponent };
var ɵControlTextComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlTextComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlTextComponent, [{
        type: Component,
        args: [{
                selector: 'control-text-component',
                templateUrl: 'control-text.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC10ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC90ZXh0L2NvbnRyb2wtdGV4dC5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC90ZXh0L2NvbnRyb2wtdGV4dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7SUNBM0MsMkJBQ0Q7Ozs7SUFEb0QsOEZBQXNEO0lBQUMsNENBQXlCLDRDQUFBOzs7SUFFcEksd0JBQStHOzs7SUFHN0csMkJBQTZDO0lBQUEsWUFBK0I7O0lBQUEsaUJBQU07O0lBQXJDLGVBQStCO0lBQS9CLDZEQUErQjs7OztJQUM1RSwyQkFBOEM7SUFBQSxZQUFpRjs7SUFBQSxpQkFBTTs7O0lBQXZGLGVBQWlGO0lBQWpGLCtIQUFpRjs7OztJQUMvSCwyQkFBOEM7SUFBQSxZQUFpRjs7SUFBQSxpQkFBTTs7O0lBQXZGLGVBQWlGO0lBQWpGLCtIQUFpRjs7O0lBQy9ILDJCQUE0QztJQUFBLFlBQThCOztJQUFBLGlCQUFNOztJQUFwQyxlQUE4QjtJQUE5Qiw0REFBOEI7OztJQUMxRSwyQkFBMEM7SUFBQSxZQUE0Qjs7SUFBQSxpQkFBTTs7SUFBbEMsZUFBNEI7SUFBNUIsMERBQTRCOzs7SUFDdEUsMkJBQTJDO0lBQUEsWUFBNkI7O0lBQUEsaUJBQU07O0lBQW5DLGVBQTZCO0lBQTdCLDJEQUE2Qjs7O0lBTnpFLDhCQUNDO0lBQUEseUZBQTZDO0lBQzdDLHlGQUE4QztJQUM5Qyx5RkFBOEM7SUFDOUMseUZBQTRDO0lBQzVDLHlGQUEwQztJQUMxQyx5RkFBMkM7SUFDNUMsaUJBQU07OztJQU5BLGVBQXVDO0lBQXZDLDJEQUF1QztJQUN2QyxlQUF3QztJQUF4Qyw0REFBd0M7SUFDeEMsZUFBd0M7SUFBeEMsNERBQXdDO0lBQ3hDLGVBQXNDO0lBQXRDLDBEQUFzQztJQUN0QyxlQUFvQztJQUFwQyx3REFBb0M7SUFDcEMsZUFBcUM7SUFBckMseURBQXFDOzs7SUFOM0MsbUZBQ0M7OztJQURnRCxtSEFBcUY7OztJQVN2SSx3QkFBK0c7OztBRFhoSDtJQUkwQyx3Q0FBZ0I7SUFKMUQ7O0tBUUM7eUhBSlksb0JBQW9COzZEQUFwQixvQkFBb0I7WUNSakMsZ0NBQ0M7WUFBQSxzSEFDQztZQUVELHVGQUFnRztZQUNoRyxzSEFDQztZQVNELHVGQUFnRztZQUNqRywwQkFBZTs7OztZQWhCRCxvQ0FBa0I7WUFJakIsZUFBaUY7WUFBakYsZ0VBQWlGLG9FQUFBO1lBV2pGLGVBQWlGO1lBQWpGLGdFQUFpRixvRUFBQTs7K0JEZmhHO0NBWUMsQUFSRCxDQUkwQyxnQkFBZ0IsR0FJekQ7U0FKWSxvQkFBb0I7aUVBQXBCLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsNkJBQTZCO2FBQzFDOztrQkFHQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xUZXh0IH0gZnJvbSAnLi9jb250cm9sLXRleHQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLXRleHQtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLXRleHQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sVGV4dENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbFRleHQ7XG5cbn1cbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcblx0PG5nLXRlbXBsYXRlICNpbnB1dERlZiBsZXQtY29udGV4dD5cclxuXHRcdDxpbnB1dCBjbGFzcz1cImNvbnRyb2xfX2lucHV0IGNvbnRyb2xfX2lucHV0LS10ZXh0XCIgcGxhY2Vob2xkZXI9XCJ7eyBjb250ZXh0Lm9wdGlvbi5wbGFjZWhvbGRlciB8IGxhYmVsIH19XCIgW2lkXT1cImNvbnRleHQub3B0aW9uLmtleVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udGV4dC5vcHRpb24ua2V5XCIgdHlwZT1cInRleHRcIj5cclxuXHQ8L25nLXRlbXBsYXRlPlxyXG5cdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZXh0LmlucHV0UmVmIHx8IGlucHV0RGVmOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGV4dCB9XCI+PC9uZy1jb250YWluZXI+XHJcblx0PG5nLXRlbXBsYXRlICNlcnJvckRlZiBsZXQtY29udGV4dD5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb250cm9sX19lcnJvciBjb250cm9sX19lcnJvci0tdGV4dFwiICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmludmFsaWQgJiYgKGNvbnRleHQuY29udHJvbC5kaXJ0eSB8fCBjb250ZXh0LmNvbnRyb2wudG91Y2hlZClcIj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMucmVxdWlyZWRcIj57eyAnZXJyb3JzLnJlcXVpcmVkJyB8IGxhYmVsIH19PC9kaXY+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLm1pbmxlbmd0aFwiPnt7ICdlcnJvcnMubWlubGVuZ3RoJyB8IGxhYmVsIDogbnVsbCA6IHsgbWlubGVuZ3RoOiBjb250ZXh0Lm9wdGlvbi5taW5sZW5ndGggfSB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5tYXhsZW5ndGhcIj57eyAnZXJyb3JzLm1heGxlbmd0aCcgfCBsYWJlbCA6IG51bGwgOiB7IG1heGxlbmd0aDogY29udGV4dC5vcHRpb24ubWF4bGVuZ3RoIH0gfX08L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMucGF0dGVyblwiPnt7ICdlcnJvcnMucGF0dGVybicgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5tYXRjaFwiPnt7ICdlcnJvcnMubWF0Y2gnIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMuZXhpc3RzXCI+e3sgJ2Vycm9ycy5leGlzdHMnIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuZXJyb3JSZWYgfHwgZXJyb3JEZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==