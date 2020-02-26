import { __extends } from "tslib";
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
    var context_r219 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", context_r219.option.key)("formControlName", context_r219.option.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 3, context_r219.option.info));
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
    var context_r220 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r220.control.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r220.control.errors.requiredTrue);
} }
function ControlCheckboxComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlCheckboxComponent_ng_template_3_div_0_Template, 3, 2, "div", 7);
} if (rf & 2) {
    var context_r220 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r220.control.invalid && (context_r220.control.dirty || context_r220.control.touched));
} }
function ControlCheckboxComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlCheckboxComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c0 = function (a0) { return { $implicit: a0 }; };
var ControlCheckboxComponent = /** @class */ (function (_super) {
    __extends(ControlCheckboxComponent, _super);
    function ControlCheckboxComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
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
            var _r213 = i0.ɵɵreference(2);
            var _r215 = i0.ɵɵreference(4);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r213)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c0, ctx.context));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r215)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c0, ctx.context));
        } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
    return ControlCheckboxComponent;
}(ControlComponent));
export { ControlCheckboxComponent };
var ɵControlCheckboxComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlCheckboxComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'control-checkbox-component',
                templateUrl: 'control-checkbox.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY2hlY2tib3gvY29udHJvbC1jaGVja2JveC5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9jaGVja2JveC9jb250cm9sLWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7OztJQ0FuRCxnQ0FDQztJQUFBLDJCQUNBO0lBQUEsK0JBQTRCO0lBQUEsWUFBaUM7O0lBQUEsaUJBQU87SUFDckUsaUJBQVE7OztJQUYwQyxlQUF5QjtJQUF6Qiw0Q0FBeUIsNENBQUE7SUFDOUMsZUFBaUM7SUFBakMsb0VBQWlDOzs7SUFLN0QsMkJBQTZDO0lBQUEsWUFBK0I7O0lBQUEsaUJBQU07O0lBQXJDLGVBQStCO0lBQS9CLDZEQUErQjs7O0lBQzVFLDJCQUFpRDtJQUFBLFlBQStCOztJQUFBLGlCQUFNOztJQUFyQyxlQUErQjtJQUEvQiw2REFBK0I7OztJQUZqRiw4QkFDQztJQUFBLDZGQUE2QztJQUM3Qyw2RkFBaUQ7SUFDbEQsaUJBQU07OztJQUZBLGVBQXVDO0lBQXZDLDJEQUF1QztJQUN2QyxlQUEyQztJQUEzQywrREFBMkM7OztJQUZqRCx1RkFDQzs7O0lBRG9ELG1IQUFxRjs7O0lBSzNJLHdCQUErRzs7O0lBQy9HLHdCQUErRzs7O0FEVmhIO0lBSThDLDRDQUFnQjtJQUo5RDs7S0FRQztxSUFKWSx3QkFBd0I7aUVBQXhCLHdCQUF3QjtZQ1JyQyxnQ0FDQztZQUFBLDBIQUNDO1lBS0QsMEhBQ0M7WUFLRCwyRkFBZ0c7WUFDaEcsMkZBQWdHO1lBQ2pHLDBCQUFlOzs7O1lBZkQsb0NBQWtCO1lBYWpCLGVBQWlGO1lBQWpGLGdFQUFpRixvRUFBQTtZQUNqRixlQUFpRjtZQUFqRixnRUFBaUYsb0VBQUE7O21DRGRoRztDQVlDLEFBUkQsQ0FJOEMsZ0JBQWdCLEdBSTdEO1NBSlksd0JBQXdCO3FFQUF4Qix3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUpwQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQzthQUM5Qzs7a0JBR0MsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sQ2hlY2tib3ggfSBmcm9tICcuL2NvbnRyb2wtY2hlY2tib3gnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLWNoZWNrYm94LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xDaGVja2JveENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbENoZWNrYm94O1xuXG59XG4iLCI8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG5cdDxuZy10ZW1wbGF0ZSAjaW5wdXREZWYgbGV0LWNvbnRleHQ+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJjb250cm9sX19ncm91cCBjb250cm9sX19ncm91cC0tY2hlY2tib3hcIj5cclxuXHRcdFx0PGlucHV0IGNsYXNzPVwiY29udHJvbF9fY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiBbaWRdPVwiY29udGV4dC5vcHRpb24ua2V5XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250ZXh0Lm9wdGlvbi5rZXlcIj5cclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJjb250cm9sX19pbmZvXCI+e3sgY29udGV4dC5vcHRpb24uaW5mbyB8IGxhYmVsIH19PC9zcGFuPlxyXG5cdFx0PC9sYWJlbD5cclxuXHQ8L25nLXRlbXBsYXRlPlxyXG5cdDxuZy10ZW1wbGF0ZSAjZXJyb3JEZWYgbGV0LWNvbnRleHQ+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udHJvbF9fZXJyb3IgY29udHJvbF9fZXJyb3ItLWNoZWNrYm94XCIgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuaW52YWxpZCAmJiAoY29udGV4dC5jb250cm9sLmRpcnR5IHx8IGNvbnRleHQuY29udHJvbC50b3VjaGVkKVwiPlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5yZXF1aXJlZFwiPnt7ICdlcnJvcnMucmVxdWlyZWQnIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMucmVxdWlyZWRUcnVlXCI+e3sgJ2Vycm9ycy5yZXF1aXJlZCcgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5pbnB1dFJlZiB8fCBpbnB1dERlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG5cdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZXh0LmVycm9yUmVmIHx8IGVycm9yRGVmOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGV4dCB9XCI+PC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=