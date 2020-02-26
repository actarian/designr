import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlRadio } from './control-radio';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
function ControlRadioComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 4);
    i0.ɵɵelement(1, "input", 5);
    i0.ɵɵelementStart(2, "span", 6);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r130 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", context_r130.option.key)("formControlName", context_r130.option.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 3, context_r130.option.info));
} }
function ControlRadioComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.required"));
} }
function ControlRadioComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, ControlRadioComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r131 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r131.control.errors.required);
} }
function ControlRadioComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlRadioComponent_ng_template_3_div_0_Template, 2, 1, "div", 7);
} if (rf & 2) {
    const context_r131 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r131.control.invalid && (context_r131.control.dirty || context_r131.control.touched));
} }
function ControlRadioComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlRadioComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
export class ControlRadioComponent extends ControlComponent {
}
ControlRadioComponent.ɵfac = function ControlRadioComponent_Factory(t) { return ɵControlRadioComponent_BaseFactory(t || ControlRadioComponent); };
ControlRadioComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlRadioComponent, selectors: [["control-radio-component"]], inputs: { option: "option" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control__group", "control__group--radio"], ["type", "radio", 1, "control__radio", 3, "id", "formControlName"], [1, "control__info"], ["class", "control__error control__error--radio", 4, "ngIf"], [1, "control__error", "control__error--radio"], [4, "ngIf"]], template: function ControlRadioComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ControlRadioComponent_ng_template_1_Template, 5, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, ControlRadioComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, ControlRadioComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
        i0.ɵɵtemplate(6, ControlRadioComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const _r124 = i0.ɵɵreference(2);
        const _r126 = i0.ɵɵreference(4);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r124)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c0, ctx.context));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r126)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c0, ctx.context));
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.RadioControlValueAccessor, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
const ɵControlRadioComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlRadioComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlRadioComponent, [{
        type: Component,
        args: [{
                selector: 'control-radio-component',
                templateUrl: 'control-radio.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1yYWRpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvcmFkaW8vY29udHJvbC1yYWRpby5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9yYWRpby9jb250cm9sLXJhZGlvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0lDQTdDLGdDQUNDO0lBQUEsMkJBQ0E7SUFBQSwrQkFBNEI7SUFBQSxZQUFpQzs7SUFBQSxpQkFBTztJQUNyRSxpQkFBUTs7O0lBRm9DLGVBQXlCO0lBQXpCLDRDQUF5Qiw0Q0FBQTtJQUN4QyxlQUFpQztJQUFqQyxvRUFBaUM7OztJQUs3RCwyQkFBNkM7SUFBQSxZQUErQjs7SUFBQSxpQkFBTTs7SUFBckMsZUFBK0I7SUFBL0IsNkRBQStCOzs7SUFEN0UsOEJBQ0M7SUFBQSwwRkFBNkM7SUFDOUMsaUJBQU07OztJQURBLGVBQXVDO0lBQXZDLDJEQUF1Qzs7O0lBRDdDLG9GQUNDOzs7SUFEaUQsbUhBQXFGOzs7SUFJeEksd0JBQStHOzs7SUFDL0csd0JBQStHOzs7QURMaEgsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGdCQUFnQjs7d0hBQTlDLHFCQUFxQjswREFBckIscUJBQXFCO1FDUmxDLGdDQUNDO1FBQUEsdUhBQ0M7UUFLRCx1SEFDQztRQUlELHdGQUFnRztRQUNoRyx3RkFBZ0c7UUFDakcsMEJBQWU7Ozs7UUFkRCxvQ0FBa0I7UUFZakIsZUFBaUY7UUFBakYsZ0VBQWlGLG9FQUFBO1FBQ2pGLGVBQWlGO1FBQWpGLGdFQUFpRixvRUFBQTs7b0VETG5GLHFCQUFxQjtrREFBckIscUJBQXFCO2NBSmpDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2FBQzNDOztrQkFHQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xSYWRpbyB9IGZyb20gJy4vY29udHJvbC1yYWRpbyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtcmFkaW8tY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLXJhZGlvLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFJhZGlvQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCB7XG5cblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sUmFkaW87XG5cbn1cbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcblx0PG5nLXRlbXBsYXRlICNpbnB1dERlZiBsZXQtY29udGV4dD5cclxuXHRcdDxsYWJlbCBjbGFzcz1cImNvbnRyb2xfX2dyb3VwIGNvbnRyb2xfX2dyb3VwLS1yYWRpb1wiPlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJjb250cm9sX19yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIFtpZF09XCJjb250ZXh0Lm9wdGlvbi5rZXlcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRleHQub3B0aW9uLmtleVwiPlxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cImNvbnRyb2xfX2luZm9cIj57eyBjb250ZXh0Lm9wdGlvbi5pbmZvIHwgbGFiZWwgfX08L3NwYW4+XHJcblx0XHQ8L2xhYmVsPlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLXRlbXBsYXRlICNlcnJvckRlZiBsZXQtY29udGV4dD5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb250cm9sX19lcnJvciBjb250cm9sX19lcnJvci0tcmFkaW9cIiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5pbnZhbGlkICYmIChjb250ZXh0LmNvbnRyb2wuZGlydHkgfHwgY29udGV4dC5jb250cm9sLnRvdWNoZWQpXCI+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLnJlcXVpcmVkXCI+e3sgJ2Vycm9ycy5yZXF1aXJlZCcgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5pbnB1dFJlZiB8fCBpbnB1dERlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG5cdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZXh0LmVycm9yUmVmIHx8IGVycm9yRGVmOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGV4dCB9XCI+PC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=