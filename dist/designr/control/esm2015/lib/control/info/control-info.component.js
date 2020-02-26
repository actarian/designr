import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlInfo } from './control-info';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
function ControlInfoComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r68 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, context_r68.option.title));
} }
function ControlInfoComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r68 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, context_r68.option.abstract));
} }
function ControlInfoComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlInfoComponent_ng_template_1_div_0_Template, 3, 3, "div", 3);
    i0.ɵɵtemplate(1, ControlInfoComponent_ng_template_1_div_1_Template, 3, 3, "div", 4);
} if (rf & 2) {
    const context_r68 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r68.option.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r68.option.abstract);
} }
function ControlInfoComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
export class ControlInfoComponent extends ControlComponent {
    get control() {
        return null;
    }
    get isValid() {
        return true;
    }
    get classes() {
        return {};
    }
}
ControlInfoComponent.ɵfac = function ControlInfoComponent_Factory(t) { return ɵControlInfoComponent_BaseFactory(t || ControlInfoComponent); };
ControlInfoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlInfoComponent, selectors: [["control-info-component"]], inputs: { option: "option" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 5, consts: [[3, "formGroup"], ["inputDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "control__title", 4, "ngIf"], ["class", "control__abstract", 4, "ngIf"], [1, "control__title"], [1, "control__abstract"]], template: function ControlInfoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ControlInfoComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, ControlInfoComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const _r65 = i0.ɵɵreference(2);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r65)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c0, ctx.context));
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
const ɵControlInfoComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlInfoComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlInfoComponent, [{
        type: Component,
        args: [{
                selector: 'control-info-component',
                templateUrl: 'control-info.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9pbmZvL2NvbnRyb2wtaW5mby5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9pbmZvL2NvbnRyb2wtaW5mby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztJQ0QzQyw4QkFBeUQ7SUFBQSxZQUFrQzs7SUFBQSxpQkFBTTs7O0lBQXhDLGVBQWtDO0lBQWxDLG9FQUFrQzs7O0lBQzNGLDhCQUErRDtJQUFBLFlBQXFDOztJQUFBLGlCQUFNOzs7SUFBM0MsZUFBcUM7SUFBckMsdUVBQXFDOzs7SUFEcEcsbUZBQXlEO0lBQ3pELG1GQUErRDs7O0lBRG5DLCtDQUE0QjtJQUN6QixlQUErQjtJQUEvQixrREFBK0I7OztJQUUvRCx3QkFBK0c7OztBREloSCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZ0JBQWdCO0lBSXpELElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVELElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVELElBQUksT0FBTztRQVFWLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7cUhBckJXLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FDVGpDLGdDQUNDO1FBQUEsc0hBQ0M7UUFHRCx1RkFBZ0c7UUFDakcsMEJBQWU7OztRQU5ELG9DQUFrQjtRQUtqQixlQUFpRjtRQUFqRiwrREFBaUYsb0VBQUE7O21FREluRixvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQUpoQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjthQUMxQzs7a0JBR0MsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sSW5mbyB9IGZyb20gJy4vY29udHJvbC1pbmZvJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1pbmZvLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1pbmZvLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbEluZm9Db21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xJbmZvO1xuXG5cdGdldCBjb250cm9sKCk6IEFic3RyYWN0Q29udHJvbCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRnZXQgaXNWYWxpZCgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGdldCBjbGFzc2VzKCk6IHtcblx0XHR2YWxpZD86IGJvb2xlYW4sXG5cdFx0aW52YWxpZD86IGJvb2xlYW4sXG5cdFx0ZGlydHk/OiBib29sZWFuLFxuXHRcdGVtcHR5PzogYm9vbGVhbixcblx0XHRyZXF1aXJlZD86IGJvb2xlYW4sXG5cdFx0ZGlzYWJsZWQ/OiBib29sZWFuXG5cdH0ge1xuXHRcdHJldHVybiB7fTtcblx0fVxufVxuIiwiPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuXHQ8bmctdGVtcGxhdGUgI2lucHV0RGVmIGxldC1jb250ZXh0PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbnRyb2xfX3RpdGxlXCIgKm5nSWY9XCJjb250ZXh0Lm9wdGlvbi50aXRsZVwiPnt7IGNvbnRleHQub3B0aW9uLnRpdGxlIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb250cm9sX19hYnN0cmFjdFwiICpuZ0lmPVwiY29udGV4dC5vcHRpb24uYWJzdHJhY3RcIj57eyBjb250ZXh0Lm9wdGlvbi5hYnN0cmFjdCB8IGxhYmVsIH19PC9kaXY+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5pbnB1dFJlZiB8fCBpbnB1dERlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19