import { __extends } from "tslib";
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
    var context_r231 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(1, 3, context_r231.option.placeholder));
    i0.ɵɵproperty("id", context_r231.option.key)("formControlName", context_r231.option.key);
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
var _c0 = function (a0) { return { minlength: a0 }; };
function ControlEmailComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r232 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.minlength", null, i0.ɵɵpureFunction1(5, _c0, context_r232.option.minlength)));
} }
var _c1 = function (a0) { return { maxlength: a0 }; };
function ControlEmailComponent_ng_template_3_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r232 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.maxlength", null, i0.ɵɵpureFunction1(5, _c1, context_r232.option.maxlength)));
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
    var context_r232 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r232.control.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r232.control.errors.email);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r232.control.errors.minlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r232.control.errors.maxlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r232.control.errors.pattern);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r232.control.errors.match);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r232.control.errors.exists);
} }
function ControlEmailComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlEmailComponent_ng_template_3_div_0_Template, 8, 7, "div", 5);
} if (rf & 2) {
    var context_r232 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r232.control.invalid && (context_r232.control.dirty || context_r232.control.touched));
} }
function ControlEmailComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlEmailComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c2 = function (a0) { return { $implicit: a0 }; };
var ControlEmailComponent = /** @class */ (function (_super) {
    __extends(ControlEmailComponent, _super);
    function ControlEmailComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
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
            var _r225 = i0.ɵɵreference(2);
            var _r227 = i0.ɵɵreference(4);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r225)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c2, ctx.context));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r227)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c2, ctx.context));
        } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
    return ControlEmailComponent;
}(ControlComponent));
export { ControlEmailComponent };
var ɵControlEmailComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlEmailComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlEmailComponent, [{
        type: Component,
        args: [{
                selector: 'control-email-component',
                templateUrl: 'control-email.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1lbWFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvZW1haWwvY29udHJvbC1lbWFpbC5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9lbWFpbC9jb250cm9sLWVtYWlsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7OztJQ0E3QywyQkFDRDs7OztJQURxRCw4RkFBc0Q7SUFBQyw0Q0FBeUIsNENBQUE7OztJQUluSSwyQkFBNkM7SUFBQSxZQUErQjs7SUFBQSxpQkFBTTs7SUFBckMsZUFBK0I7SUFBL0IsNkRBQStCOzs7SUFDNUUsMkJBQTBDO0lBQUEsWUFBNEI7O0lBQUEsaUJBQU07O0lBQWxDLGVBQTRCO0lBQTVCLDBEQUE0Qjs7OztJQUN0RSwyQkFBOEM7SUFBQSxZQUFpRjs7SUFBQSxpQkFBTTs7O0lBQXZGLGVBQWlGO0lBQWpGLCtIQUFpRjs7OztJQUMvSCwyQkFBOEM7SUFBQSxZQUFpRjs7SUFBQSxpQkFBTTs7O0lBQXZGLGVBQWlGO0lBQWpGLCtIQUFpRjs7O0lBQy9ILDJCQUE0QztJQUFBLFlBQThCOztJQUFBLGlCQUFNOztJQUFwQyxlQUE4QjtJQUE5Qiw0REFBOEI7OztJQUMxRSwyQkFBMEM7SUFBQSxZQUE0Qjs7SUFBQSxpQkFBTTs7SUFBbEMsZUFBNEI7SUFBNUIsMERBQTRCOzs7SUFDdEUsMkJBQTJDO0lBQUEsWUFBNkI7O0lBQUEsaUJBQU07O0lBQW5DLGVBQTZCO0lBQTdCLDJEQUE2Qjs7O0lBUHpFLDhCQUNDO0lBQUEsMEZBQTZDO0lBQzdDLDBGQUEwQztJQUMxQywwRkFBOEM7SUFDOUMsMEZBQThDO0lBQzlDLDBGQUE0QztJQUM1QywwRkFBMEM7SUFDMUMsMEZBQTJDO0lBQzVDLGlCQUFNOzs7SUFQQSxlQUF1QztJQUF2QywyREFBdUM7SUFDdkMsZUFBb0M7SUFBcEMsd0RBQW9DO0lBQ3BDLGVBQXdDO0lBQXhDLDREQUF3QztJQUN4QyxlQUF3QztJQUF4Qyw0REFBd0M7SUFDeEMsZUFBc0M7SUFBdEMsMERBQXNDO0lBQ3RDLGVBQW9DO0lBQXBDLHdEQUFvQztJQUNwQyxlQUFxQztJQUFyQyx5REFBcUM7OztJQVAzQyxvRkFDQzs7O0lBRGlELG1IQUFxRjs7O0lBVXhJLHdCQUErRzs7O0lBQy9HLHdCQUErRzs7O0FEWmhIO0lBSTJDLHlDQUFnQjtJQUozRDs7S0FRQzs0SEFKWSxxQkFBcUI7OERBQXJCLHFCQUFxQjtZQ1JsQyxnQ0FDQztZQUFBLHVIQUNDO1lBRUQsdUhBQ0M7WUFVRCx3RkFBZ0c7WUFDaEcsd0ZBQWdHO1lBQ2pHLDBCQUFlOzs7O1lBakJELG9DQUFrQjtZQWVqQixlQUFpRjtZQUFqRixnRUFBaUYsb0VBQUE7WUFDakYsZUFBaUY7WUFBakYsZ0VBQWlGLG9FQUFBOztnQ0RoQmhHO0NBWUMsQUFSRCxDQUkyQyxnQkFBZ0IsR0FJMUQ7U0FKWSxxQkFBcUI7a0VBQXJCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBSmpDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2FBQzNDOztrQkFHQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xFbWFpbCB9IGZyb20gJy4vY29udHJvbC1lbWFpbCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtZW1haWwtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLWVtYWlsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbEVtYWlsQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCB7XG5cblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sRW1haWw7XG5cbn1cbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcblx0PG5nLXRlbXBsYXRlICNpbnB1dERlZiBsZXQtY29udGV4dD5cclxuXHRcdDxpbnB1dCBjbGFzcz1cImNvbnRyb2xfX2lucHV0IGNvbnRyb2xfX2lucHV0LS1lbWFpbFwiIHBsYWNlaG9sZGVyPVwie3sgY29udGV4dC5vcHRpb24ucGxhY2Vob2xkZXIgfCBsYWJlbCB9fVwiIFtpZF09XCJjb250ZXh0Lm9wdGlvbi5rZXlcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRleHQub3B0aW9uLmtleVwiIHR5cGU9XCJlbWFpbFwiPlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLXRlbXBsYXRlICNlcnJvckRlZiBsZXQtY29udGV4dD5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb250cm9sX19lcnJvciBjb250cm9sX19lcnJvci0tZW1haWxcIiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5pbnZhbGlkICYmIChjb250ZXh0LmNvbnRyb2wuZGlydHkgfHwgY29udGV4dC5jb250cm9sLnRvdWNoZWQpXCI+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLnJlcXVpcmVkXCI+e3sgJ2Vycm9ycy5yZXF1aXJlZCcgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5lbWFpbFwiPnt7ICdlcnJvcnMuZW1haWwnIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMubWlubGVuZ3RoXCI+e3sgJ2Vycm9ycy5taW5sZW5ndGgnIHwgbGFiZWwgOiBudWxsIDogeyBtaW5sZW5ndGg6IGNvbnRleHQub3B0aW9uLm1pbmxlbmd0aCB9IH19PC9kaXY+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLm1heGxlbmd0aFwiPnt7ICdlcnJvcnMubWF4bGVuZ3RoJyB8IGxhYmVsIDogbnVsbCA6IHsgbWF4bGVuZ3RoOiBjb250ZXh0Lm9wdGlvbi5tYXhsZW5ndGggfSB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5wYXR0ZXJuXCI+e3sgJ2Vycm9ycy5wYXR0ZXJuJyB8IGxhYmVsIH19PC9kaXY+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLm1hdGNoXCI+e3sgJ2Vycm9ycy5tYXRjaCcgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5leGlzdHNcIj57eyAnZXJyb3JzLmV4aXN0cycgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5pbnB1dFJlZiB8fCBpbnB1dERlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG5cdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZXh0LmVycm9yUmVmIHx8IGVycm9yRGVmOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGV4dCB9XCI+PC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=