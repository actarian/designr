import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlCheckbox } from './control-checkbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
function ControlCheckboxComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 4);
    i0.ɵɵelement(1, "input", 5);
    i0.ɵɵelementStart(2, "span", 6);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r23 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", context_r23.option.key)("formControlName", context_r23.option.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 3, context_r23.option.info));
} }
function ControlCheckboxComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.required"));
} }
function ControlCheckboxComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.required"));
} }
function ControlCheckboxComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, ControlCheckboxComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 9);
    i0.ɵɵtemplate(2, ControlCheckboxComponent_ng_template_3_div_0_div_2_Template, 3, 3, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r24 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r24.control.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r24.control.errors.requiredTrue);
} }
function ControlCheckboxComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlCheckboxComponent_ng_template_3_div_0_Template, 3, 2, "div", 7);
} if (rf & 2) {
    const context_r24 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r24.control.invalid && (context_r24.control.dirty || context_r24.control.touched));
} }
function ControlCheckboxComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlCheckboxComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
export class ControlCheckboxComponent extends ControlComponent {
}
ControlCheckboxComponent.ɵfac = function ControlCheckboxComponent_Factory(t) { return ɵControlCheckboxComponent_BaseFactory(t || ControlCheckboxComponent); };
ControlCheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlCheckboxComponent, selectors: [["control-checkbox-component"]], inputs: { option: "option" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control__group", "control__group--checkbox"], ["type", "checkbox", 1, "control__checkbox", 3, "id", "formControlName"], [1, "control__info"], ["class", "control__error control__error--checkbox", 4, "ngIf"], [1, "control__error", "control__error--checkbox"], [4, "ngIf"]], template: function ControlCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ControlCheckboxComponent_ng_template_1_Template, 5, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, ControlCheckboxComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, ControlCheckboxComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
        i0.ɵɵtemplate(6, ControlCheckboxComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const _r17 = i0.ɵɵreference(2);
        const _r19 = i0.ɵɵreference(4);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r17)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c0, ctx.context));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r19)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c0, ctx.context));
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
const ɵControlCheckboxComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlCheckboxComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'control-checkbox-component',
                templateUrl: 'control-checkbox.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY2hlY2tib3gvY29udHJvbC1jaGVja2JveC5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9jaGVja2JveC9jb250cm9sLWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0lDQW5ELGdDQUNDO0lBQUEsMkJBQ0E7SUFBQSwrQkFBNEI7SUFBQSxZQUFpQzs7SUFBQSxpQkFBTztJQUNyRSxpQkFBUTs7O0lBRjBDLGVBQXlCO0lBQXpCLDJDQUF5QiwyQ0FBQTtJQUM5QyxlQUFpQztJQUFqQyxtRUFBaUM7OztJQUs3RCwyQkFBNkM7SUFBQSxZQUErQjs7SUFBQSxpQkFBTTs7SUFBckMsZUFBK0I7SUFBL0IsNkRBQStCOzs7SUFDNUUsMkJBQWlEO0lBQUEsWUFBK0I7O0lBQUEsaUJBQU07O0lBQXJDLGVBQStCO0lBQS9CLDZEQUErQjs7O0lBRmpGLDhCQUNDO0lBQUEsNkZBQTZDO0lBQzdDLDZGQUFpRDtJQUNsRCxpQkFBTTs7O0lBRkEsZUFBdUM7SUFBdkMsMERBQXVDO0lBQ3ZDLGVBQTJDO0lBQTNDLDhEQUEyQzs7O0lBRmpELHVGQUNDOzs7SUFEb0QsZ0hBQXFGOzs7SUFLM0ksd0JBQStHOzs7SUFDL0csd0JBQStHOzs7QUROaEgsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGdCQUFnQjs7aUlBQWpELHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FDUnJDLGdDQUNDO1FBQUEsMEhBQ0M7UUFLRCwwSEFDQztRQUtELDJGQUFnRztRQUNoRywyRkFBZ0c7UUFDakcsMEJBQWU7Ozs7UUFmRCxvQ0FBa0I7UUFhakIsZUFBaUY7UUFBakYsK0RBQWlGLG9FQUFBO1FBQ2pGLGVBQWlGO1FBQWpGLCtEQUFpRixvRUFBQTs7dUVETm5GLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBSnBDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2FBQzlDOztrQkFHQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xDaGVja2JveCB9IGZyb20gJy4vY29udHJvbC1jaGVja2JveCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtY2hlY2tib3gtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbENoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCB7XG5cblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sQ2hlY2tib3g7XG5cbn1cbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcblx0PG5nLXRlbXBsYXRlICNpbnB1dERlZiBsZXQtY29udGV4dD5cclxuXHRcdDxsYWJlbCBjbGFzcz1cImNvbnRyb2xfX2dyb3VwIGNvbnRyb2xfX2dyb3VwLS1jaGVja2JveFwiPlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJjb250cm9sX19jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIFtpZF09XCJjb250ZXh0Lm9wdGlvbi5rZXlcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRleHQub3B0aW9uLmtleVwiPlxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cImNvbnRyb2xfX2luZm9cIj57eyBjb250ZXh0Lm9wdGlvbi5pbmZvIHwgbGFiZWwgfX08L3NwYW4+XHJcblx0XHQ8L2xhYmVsPlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLXRlbXBsYXRlICNlcnJvckRlZiBsZXQtY29udGV4dD5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb250cm9sX19lcnJvciBjb250cm9sX19lcnJvci0tY2hlY2tib3hcIiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5pbnZhbGlkICYmIChjb250ZXh0LmNvbnRyb2wuZGlydHkgfHwgY29udGV4dC5jb250cm9sLnRvdWNoZWQpXCI+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLnJlcXVpcmVkXCI+e3sgJ2Vycm9ycy5yZXF1aXJlZCcgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5yZXF1aXJlZFRydWVcIj57eyAnZXJyb3JzLnJlcXVpcmVkJyB8IGxhYmVsIH19PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L25nLXRlbXBsYXRlPlxyXG5cdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZXh0LmlucHV0UmVmIHx8IGlucHV0RGVmOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGV4dCB9XCI+PC9uZy1jb250YWluZXI+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuZXJyb3JSZWYgfHwgZXJyb3JEZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==