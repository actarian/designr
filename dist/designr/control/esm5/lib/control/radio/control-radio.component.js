import { __extends } from "tslib";
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
    var context_r326 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", context_r326.option.key)("formControlName", context_r326.option.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 3, context_r326.option.info));
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
    var context_r327 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r327.control.errors.required);
} }
function ControlRadioComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlRadioComponent_ng_template_3_div_0_Template, 2, 1, "div", 7);
} if (rf & 2) {
    var context_r327 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r327.control.invalid && (context_r327.control.dirty || context_r327.control.touched));
} }
function ControlRadioComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlRadioComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c0 = function (a0) { return { $implicit: a0 }; };
var ControlRadioComponent = /** @class */ (function (_super) {
    __extends(ControlRadioComponent, _super);
    function ControlRadioComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
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
            var _r320 = i0.ɵɵreference(2);
            var _r322 = i0.ɵɵreference(4);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r320)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c0, ctx.context));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r322)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c0, ctx.context));
        } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.RadioControlValueAccessor, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
    return ControlRadioComponent;
}(ControlComponent));
export { ControlRadioComponent };
var ɵControlRadioComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlRadioComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlRadioComponent, [{
        type: Component,
        args: [{
                selector: 'control-radio-component',
                templateUrl: 'control-radio.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1yYWRpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvcmFkaW8vY29udHJvbC1yYWRpby5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9yYWRpby9jb250cm9sLXJhZGlvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7OztJQ0E3QyxnQ0FDQztJQUFBLDJCQUNBO0lBQUEsK0JBQTRCO0lBQUEsWUFBaUM7O0lBQUEsaUJBQU87SUFDckUsaUJBQVE7OztJQUZvQyxlQUF5QjtJQUF6Qiw0Q0FBeUIsNENBQUE7SUFDeEMsZUFBaUM7SUFBakMsb0VBQWlDOzs7SUFLN0QsMkJBQTZDO0lBQUEsWUFBK0I7O0lBQUEsaUJBQU07O0lBQXJDLGVBQStCO0lBQS9CLDZEQUErQjs7O0lBRDdFLDhCQUNDO0lBQUEsMEZBQTZDO0lBQzlDLGlCQUFNOzs7SUFEQSxlQUF1QztJQUF2QywyREFBdUM7OztJQUQ3QyxvRkFDQzs7O0lBRGlELG1IQUFxRjs7O0lBSXhJLHdCQUErRzs7O0lBQy9HLHdCQUErRzs7O0FEVGhIO0lBSTJDLHlDQUFnQjtJQUozRDs7S0FRQzs0SEFKWSxxQkFBcUI7OERBQXJCLHFCQUFxQjtZQ1JsQyxnQ0FDQztZQUFBLHVIQUNDO1lBS0QsdUhBQ0M7WUFJRCx3RkFBZ0c7WUFDaEcsd0ZBQWdHO1lBQ2pHLDBCQUFlOzs7O1lBZEQsb0NBQWtCO1lBWWpCLGVBQWlGO1lBQWpGLGdFQUFpRixvRUFBQTtZQUNqRixlQUFpRjtZQUFqRixnRUFBaUYsb0VBQUE7O2dDRGJoRztDQVlDLEFBUkQsQ0FJMkMsZ0JBQWdCLEdBSTFEO1NBSlkscUJBQXFCO2tFQUFyQixxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUpqQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjthQUMzQzs7a0JBR0MsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sUmFkaW8gfSBmcm9tICcuL2NvbnRyb2wtcmFkaW8nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLXJhZGlvLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1yYWRpby5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xSYWRpb0NvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbFJhZGlvO1xuXG59XG4iLCI8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG5cdDxuZy10ZW1wbGF0ZSAjaW5wdXREZWYgbGV0LWNvbnRleHQ+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJjb250cm9sX19ncm91cCBjb250cm9sX19ncm91cC0tcmFkaW9cIj5cclxuXHRcdFx0PGlucHV0IGNsYXNzPVwiY29udHJvbF9fcmFkaW9cIiB0eXBlPVwicmFkaW9cIiBbaWRdPVwiY29udGV4dC5vcHRpb24ua2V5XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250ZXh0Lm9wdGlvbi5rZXlcIj5cclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJjb250cm9sX19pbmZvXCI+e3sgY29udGV4dC5vcHRpb24uaW5mbyB8IGxhYmVsIH19PC9zcGFuPlxyXG5cdFx0PC9sYWJlbD5cclxuXHQ8L25nLXRlbXBsYXRlPlxyXG5cdDxuZy10ZW1wbGF0ZSAjZXJyb3JEZWYgbGV0LWNvbnRleHQ+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udHJvbF9fZXJyb3IgY29udHJvbF9fZXJyb3ItLXJhZGlvXCIgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuaW52YWxpZCAmJiAoY29udGV4dC5jb250cm9sLmRpcnR5IHx8IGNvbnRleHQuY29udHJvbC50b3VjaGVkKVwiPlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5yZXF1aXJlZFwiPnt7ICdlcnJvcnMucmVxdWlyZWQnIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuaW5wdXRSZWYgfHwgaW5wdXREZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5lcnJvclJlZiB8fCBlcnJvckRlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19