import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlMarkdown } from './control-markdown';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
function ControlMarkdownComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "textarea", 4);
    i0.ɵɵpipe(1, "label");
} if (rf & 2) {
    var context_r275 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(1, 3, context_r275.option.placeholder));
    i0.ɵɵproperty("id", context_r275.option.key)("formControlName", context_r275.option.key);
} }
function ControlMarkdownComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.required"));
} }
var _c0 = function (a0) { return { minlength: a0 }; };
function ControlMarkdownComponent_ng_template_3_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r276 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.minlength", null, i0.ɵɵpureFunction1(5, _c0, context_r276.option.minlength)));
} }
var _c1 = function (a0) { return { maxlength: a0 }; };
function ControlMarkdownComponent_ng_template_3_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r276 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.maxlength", null, i0.ɵɵpureFunction1(5, _c1, context_r276.option.maxlength)));
} }
function ControlMarkdownComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, ControlMarkdownComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 7);
    i0.ɵɵtemplate(2, ControlMarkdownComponent_ng_template_3_div_0_div_2_Template, 3, 7, "div", 7);
    i0.ɵɵtemplate(3, ControlMarkdownComponent_ng_template_3_div_0_div_3_Template, 3, 7, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r276 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r276.control.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r276.control.errors.minlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r276.control.errors.maxlength);
} }
function ControlMarkdownComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlMarkdownComponent_ng_template_3_div_0_Template, 4, 3, "div", 5);
} if (rf & 2) {
    var context_r276 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r276.control.invalid && (context_r276.control.dirty || context_r276.control.touched));
} }
function ControlMarkdownComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlMarkdownComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c2 = function (a0) { return { $implicit: a0 }; };
var ControlMarkdownComponent = /** @class */ (function (_super) {
    __extends(ControlMarkdownComponent, _super);
    function ControlMarkdownComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlMarkdownComponent.ɵfac = function ControlMarkdownComponent_Factory(t) { return ɵControlMarkdownComponent_BaseFactory(t || ControlMarkdownComponent); };
    ControlMarkdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlMarkdownComponent, selectors: [["control-markdown-component"]], inputs: { option: "option" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["rows", "4", 1, "control__input", "control__input--markdown", 3, "placeholder", "id", "formControlName"], ["class", "control__error control__error--markdown", 4, "ngIf"], [1, "control__error", "control__error--markdown"], [4, "ngIf"]], template: function ControlMarkdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, ControlMarkdownComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, ControlMarkdownComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(5, ControlMarkdownComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            i0.ɵɵtemplate(6, ControlMarkdownComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r269 = i0.ɵɵreference(2);
            var _r271 = i0.ɵɵreference(4);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r269)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c2, ctx.context));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r271)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c2, ctx.context));
        } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
    return ControlMarkdownComponent;
}(ControlComponent));
export { ControlMarkdownComponent };
var ɵControlMarkdownComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlMarkdownComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlMarkdownComponent, [{
        type: Component,
        args: [{
                selector: 'control-markdown-component',
                templateUrl: 'control-markdown.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1tYXJrZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvbWFya2Rvd24vY29udHJvbC1tYXJrZG93bi5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9tYXJrZG93bi9jb250cm9sLW1hcmtkb3duLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7OztJQ0FuRCw4QkFBc007Ozs7SUFBNUksOEZBQXNEO0lBQUMsNENBQXlCLDRDQUFBOzs7SUFJekksMkJBQTZDO0lBQUEsWUFBK0I7O0lBQUEsaUJBQU07O0lBQXJDLGVBQStCO0lBQS9CLDZEQUErQjs7OztJQUM1RSwyQkFBOEM7SUFBQSxZQUFpRjs7SUFBQSxpQkFBTTs7O0lBQXZGLGVBQWlGO0lBQWpGLCtIQUFpRjs7OztJQUMvSCwyQkFBOEM7SUFBQSxZQUFpRjs7SUFBQSxpQkFBTTs7O0lBQXZGLGVBQWlGO0lBQWpGLCtIQUFpRjs7O0lBSGhJLDhCQUNDO0lBQUEsNkZBQTZDO0lBQzdDLDZGQUE4QztJQUM5Qyw2RkFBOEM7SUFDL0MsaUJBQU07OztJQUhBLGVBQXVDO0lBQXZDLDJEQUF1QztJQUN2QyxlQUF3QztJQUF4Qyw0REFBd0M7SUFDeEMsZUFBd0M7SUFBeEMsNERBQXdDOzs7SUFIOUMsdUZBQ0M7OztJQURvRCxtSEFBcUY7OztJQU0zSSx3QkFBK0c7OztJQUMvRyx3QkFBK0c7OztBRFJoSDtJQUk4Qyw0Q0FBZ0I7SUFKOUQ7O0tBUUM7cUlBSlksd0JBQXdCO2lFQUF4Qix3QkFBd0I7WUNSckMsZ0NBQ0M7WUFBQSwwSEFDQztZQUVELDBIQUNDO1lBTUQsMkZBQWdHO1lBQ2hHLDJGQUFnRztZQUNqRywwQkFBZTs7OztZQWJELG9DQUFrQjtZQVdqQixlQUFpRjtZQUFqRixnRUFBaUYsb0VBQUE7WUFDakYsZUFBaUY7WUFBakYsZ0VBQWlGLG9FQUFBOzttQ0RaaEc7Q0FZQyxBQVJELENBSThDLGdCQUFnQixHQUk3RDtTQUpZLHdCQUF3QjtxRUFBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FKcEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7YUFDOUM7O2tCQUdDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbE1hcmtkb3duIH0gZnJvbSAnLi9jb250cm9sLW1hcmtkb3duJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1tYXJrZG93bi1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtbWFya2Rvd24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sTWFya2Rvd25Db21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xNYXJrZG93bjtcblxufVxuIiwiPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuXHQ8bmctdGVtcGxhdGUgI2lucHV0RGVmIGxldC1jb250ZXh0PlxyXG5cdFx0PHRleHRhcmVhIGNsYXNzPVwiY29udHJvbF9faW5wdXQgY29udHJvbF9faW5wdXQtLW1hcmtkb3duXCIgcGxhY2Vob2xkZXI9XCJ7eyBjb250ZXh0Lm9wdGlvbi5wbGFjZWhvbGRlciB8IGxhYmVsIH19XCIgW2lkXT1cImNvbnRleHQub3B0aW9uLmtleVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udGV4dC5vcHRpb24ua2V5XCIgcm93cz1cIjRcIj48L3RleHRhcmVhPlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLXRlbXBsYXRlICNlcnJvckRlZiBsZXQtY29udGV4dD5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb250cm9sX19lcnJvciBjb250cm9sX19lcnJvci0tbWFya2Rvd25cIiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5pbnZhbGlkICYmIChjb250ZXh0LmNvbnRyb2wuZGlydHkgfHwgY29udGV4dC5jb250cm9sLnRvdWNoZWQpXCI+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLnJlcXVpcmVkXCI+e3sgJ2Vycm9ycy5yZXF1aXJlZCcgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5taW5sZW5ndGhcIj57eyAnZXJyb3JzLm1pbmxlbmd0aCcgfCBsYWJlbCA6IG51bGwgOiB7IG1pbmxlbmd0aDogY29udGV4dC5vcHRpb24ubWlubGVuZ3RoIH0gfX08L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMubWF4bGVuZ3RoXCI+e3sgJ2Vycm9ycy5tYXhsZW5ndGgnIHwgbGFiZWwgOiBudWxsIDogeyBtYXhsZW5ndGg6IGNvbnRleHQub3B0aW9uLm1heGxlbmd0aCB9IH19PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L25nLXRlbXBsYXRlPlxyXG5cdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZXh0LmlucHV0UmVmIHx8IGlucHV0RGVmOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGV4dCB9XCI+PC9uZy1jb250YWluZXI+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuZXJyb3JSZWYgfHwgZXJyb3JEZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==