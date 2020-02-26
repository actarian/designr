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
    const context_r54 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, context_r54.option.title));
} }
function ControlGroupComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r54 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, context_r54.option.abstract));
} }
function ControlGroupComponent_ng_template_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "control-outlet", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r61 = ctx.$implicit;
    const context_r54 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("fieldset__field fieldset__field--", option_r61.schema, "");
    i0.ɵɵproperty("option", option_r61)("form", context_r54.control);
} }
function ControlGroupComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, ControlGroupComponent_ng_template_1_div_2_ng_container_1_Template, 2, 5, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r54 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", context_r54.option.options);
} }
function ControlGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlGroupComponent_ng_template_1_div_0_Template, 3, 3, "div", 4);
    i0.ɵɵtemplate(1, ControlGroupComponent_ng_template_1_div_1_Template, 3, 3, "div", 5);
    i0.ɵɵtemplate(2, ControlGroupComponent_ng_template_1_div_2_Template, 2, 1, "div", 6);
} if (rf & 2) {
    const context_r54 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r54.option.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r54.option.abstract);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r54.option.options.length);
} }
function ControlGroupComponent_ng_template_3_Template(rf, ctx) { }
function ControlGroupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlGroupComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
export class ControlGroupComponent extends ControlComponent {
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
        const _r48 = i0.ɵɵreference(2);
        const _r50 = i0.ɵɵreference(4);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r48)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c0, ctx.context));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r50)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c0, ctx.context));
    } }, encapsulation: 2 });
const ɵControlGroupComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlGroupComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlGroupComponent, [{
        type: Component,
        args: [{
                selector: 'control-group-component',
                templateUrl: 'control-group.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvZ3JvdXAvY29udHJvbC1ncm91cC5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9ncm91cC9jb250cm9sLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0lDQTdDLDhCQUF5RDtJQUFBLFlBQWtDOztJQUFBLGlCQUFNOzs7SUFBeEMsZUFBa0M7SUFBbEMsb0VBQWtDOzs7SUFDM0YsOEJBQStEO0lBQUEsWUFBcUM7O0lBQUEsaUJBQU07OztJQUEzQyxlQUFxQztJQUFyQyx1RUFBcUM7OztJQUVuRyw2QkFDQztJQUFBLHFDQUF1STtJQUN4SSwwQkFBZTs7OztJQURFLGVBQTBEO0lBQTFELHFGQUEwRDtJQUFDLG1DQUFpQiw2QkFBQTs7O0lBRjlGLDhCQUNDO0lBQUEsNkdBQ0M7SUFFRixpQkFBTTs7O0lBSFMsZUFBNkM7SUFBN0Msb0RBQTZDOzs7SUFINUQsb0ZBQXlEO0lBQ3pELG9GQUErRDtJQUMvRCxvRkFDQzs7O0lBSDJCLCtDQUE0QjtJQUN6QixlQUErQjtJQUEvQixrREFBK0I7SUFDeEMsZUFBcUM7SUFBckMsd0RBQXFDOzs7O0lBTzVELHdCQUErRzs7O0lBQy9HLHdCQUErRzs7O0FESmhILE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxnQkFBZ0I7O3dIQUE5QyxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1JsQyxnQ0FDQztRQUFBLHVIQUNDO1FBUUQsdUhBQW1DO1FBQ25DLHdGQUFnRztRQUNoRyx3RkFBZ0c7UUFDakcsMEJBQWU7Ozs7UUFiRCxvQ0FBa0I7UUFXakIsZUFBaUY7UUFBakYsK0RBQWlGLG9FQUFBO1FBQ2pGLGVBQWlGO1FBQWpGLCtEQUFpRixvRUFBQTs7b0VESm5GLHFCQUFxQjtrREFBckIscUJBQXFCO2NBSmpDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2FBQzNDOztrQkFFQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xHcm91cCB9IGZyb20gJy4vY29udHJvbC1ncm91cCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtZ3JvdXAtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbEdyb3VwQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbEdyb3VwO1xufVxuIiwiPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuXHQ8bmctdGVtcGxhdGUgI2lucHV0RGVmIGxldC1jb250ZXh0PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbnRyb2xfX3RpdGxlXCIgKm5nSWY9XCJjb250ZXh0Lm9wdGlvbi50aXRsZVwiPnt7IGNvbnRleHQub3B0aW9uLnRpdGxlIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb250cm9sX19hYnN0cmFjdFwiICpuZ0lmPVwiY29udGV4dC5vcHRpb24uYWJzdHJhY3RcIj57eyBjb250ZXh0Lm9wdGlvbi5hYnN0cmFjdCB8IGxhYmVsIH19PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZmllbGRzZXRcIiAqbmdJZj1cImNvbnRleHQub3B0aW9uLm9wdGlvbnMubGVuZ3RoXCI+XHJcblx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb250ZXh0Lm9wdGlvbi5vcHRpb25zXCI+XHJcblx0XHRcdFx0PGNvbnRyb2wtb3V0bGV0IGNsYXNzPVwiZmllbGRzZXRfX2ZpZWxkIGZpZWxkc2V0X19maWVsZC0te3tvcHRpb24uc2NoZW1hfX1cIiBbb3B0aW9uXT1cIm9wdGlvblwiIFtmb3JtXT1cImNvbnRleHQuY29udHJvbFwiPjwvY29udHJvbC1vdXRsZXQ+XHJcblx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8bmctdGVtcGxhdGUgI2Vycm9yRGVmIGxldC1jb250ZXh0PjwvbmctdGVtcGxhdGU+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuaW5wdXRSZWYgfHwgaW5wdXREZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5lcnJvclJlZiB8fCBlcnJvckRlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19