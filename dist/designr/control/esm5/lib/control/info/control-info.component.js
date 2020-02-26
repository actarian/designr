import { __extends } from "tslib";
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
    var context_r264 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, context_r264.option.title));
} }
function ControlInfoComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r264 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, context_r264.option.abstract));
} }
function ControlInfoComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlInfoComponent_ng_template_1_div_0_Template, 3, 3, "div", 3);
    i0.ɵɵtemplate(1, ControlInfoComponent_ng_template_1_div_1_Template, 3, 3, "div", 4);
} if (rf & 2) {
    var context_r264 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r264.option.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r264.option.abstract);
} }
function ControlInfoComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c0 = function (a0) { return { $implicit: a0 }; };
var ControlInfoComponent = /** @class */ (function (_super) {
    __extends(ControlInfoComponent, _super);
    function ControlInfoComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlInfoComponent.prototype, "control", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlInfoComponent.prototype, "isValid", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlInfoComponent.prototype, "classes", {
        get: function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    ControlInfoComponent.ɵfac = function ControlInfoComponent_Factory(t) { return ɵControlInfoComponent_BaseFactory(t || ControlInfoComponent); };
    ControlInfoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlInfoComponent, selectors: [["control-info-component"]], inputs: { option: "option" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 5, consts: [[3, "formGroup"], ["inputDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "control__title", 4, "ngIf"], ["class", "control__abstract", 4, "ngIf"], [1, "control__title"], [1, "control__abstract"]], template: function ControlInfoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, ControlInfoComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, ControlInfoComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r261 = i0.ɵɵreference(2);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r261)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c0, ctx.context));
        } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
    return ControlInfoComponent;
}(ControlComponent));
export { ControlInfoComponent };
var ɵControlInfoComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlInfoComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlInfoComponent, [{
        type: Component,
        args: [{
                selector: 'control-info-component',
                templateUrl: 'control-info.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9pbmZvL2NvbnRyb2wtaW5mby5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9pbmZvL2NvbnRyb2wtaW5mby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7SUNEM0MsOEJBQXlEO0lBQUEsWUFBa0M7O0lBQUEsaUJBQU07OztJQUF4QyxlQUFrQztJQUFsQyxxRUFBa0M7OztJQUMzRiw4QkFBK0Q7SUFBQSxZQUFxQzs7SUFBQSxpQkFBTTs7O0lBQTNDLGVBQXFDO0lBQXJDLHdFQUFxQzs7O0lBRHBHLG1GQUF5RDtJQUN6RCxtRkFBK0Q7OztJQURuQyxnREFBNEI7SUFDekIsZUFBK0I7SUFBL0IsbURBQStCOzs7SUFFL0Qsd0JBQStHOzs7QURBaEg7SUFJMEMsd0NBQWdCO0lBSjFEOztLQTBCQztJQWxCQSxzQkFBSSx5Q0FBTzthQUFYO1lBQ0MsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFPO2FBQVg7WUFDQyxPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQU87YUFBWDtZQVFDLE9BQU8sRUFBRSxDQUFDO1FBQ1gsQ0FBQzs7O09BQUE7eUhBckJXLG9CQUFvQjs2REFBcEIsb0JBQW9CO1lDVGpDLGdDQUNDO1lBQUEsc0hBQ0M7WUFHRCx1RkFBZ0c7WUFDakcsMEJBQWU7OztZQU5ELG9DQUFrQjtZQUtqQixlQUFpRjtZQUFqRixnRUFBaUYsb0VBQUE7OytCRExoRztDQStCQyxBQTFCRCxDQUkwQyxnQkFBZ0IsR0FzQnpEO1NBdEJZLG9CQUFvQjtpRUFBcEIsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7YUFDMUM7O2tCQUdDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbEluZm8gfSBmcm9tICcuL2NvbnRyb2wtaW5mbyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtaW5mby1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtaW5mby5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xJbmZvQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCB7XG5cblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sSW5mbztcblxuXHRnZXQgY29udHJvbCgpOiBBYnN0cmFjdENvbnRyb2wge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Z2V0IGlzVmFsaWQoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRnZXQgY2xhc3NlcygpOiB7XG5cdFx0dmFsaWQ/OiBib29sZWFuLFxuXHRcdGludmFsaWQ/OiBib29sZWFuLFxuXHRcdGRpcnR5PzogYm9vbGVhbixcblx0XHRlbXB0eT86IGJvb2xlYW4sXG5cdFx0cmVxdWlyZWQ/OiBib29sZWFuLFxuXHRcdGRpc2FibGVkPzogYm9vbGVhblxuXHR9IHtcblx0XHRyZXR1cm4ge307XG5cdH1cbn1cbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcblx0PG5nLXRlbXBsYXRlICNpbnB1dERlZiBsZXQtY29udGV4dD5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb250cm9sX190aXRsZVwiICpuZ0lmPVwiY29udGV4dC5vcHRpb24udGl0bGVcIj57eyBjb250ZXh0Lm9wdGlvbi50aXRsZSB8IGxhYmVsIH19PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udHJvbF9fYWJzdHJhY3RcIiAqbmdJZj1cImNvbnRleHQub3B0aW9uLmFic3RyYWN0XCI+e3sgY29udGV4dC5vcHRpb24uYWJzdHJhY3QgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuaW5wdXRSZWYgfHwgaW5wdXREZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==