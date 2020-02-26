import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
const _c0 = ["inputRef"];
const _c1 = ["errorRef"];
function ControlComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 4);
    i0.ɵɵpipe(1, "label");
} if (rf & 2) {
    const context_r6 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(1, 3, context_r6.option.placeholder));
    i0.ɵɵproperty("id", context_r6.option.key)("formControlName", context_r6.option.key);
} }
function ControlComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlComponent_ng_template_4_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.required"));
} }
const _c2 = function (a0) { return { minlength: a0 }; };
function ControlComponent_ng_template_4_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.minlength", null, i0.ɵɵpureFunction1(5, _c2, context_r7.option.minlength)));
} }
const _c3 = function (a0) { return { maxlength: a0 }; };
function ControlComponent_ng_template_4_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, "errors.maxlength", null, i0.ɵɵpureFunction1(5, _c3, context_r7.option.maxlength)));
} }
function ControlComponent_ng_template_4_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.pattern"));
} }
function ControlComponent_ng_template_4_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.match"));
} }
function ControlComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, ControlComponent_ng_template_4_div_0_div_1_Template, 3, 3, "div", 7);
    i0.ɵɵtemplate(2, ControlComponent_ng_template_4_div_0_div_2_Template, 3, 7, "div", 7);
    i0.ɵɵtemplate(3, ControlComponent_ng_template_4_div_0_div_3_Template, 3, 7, "div", 7);
    i0.ɵɵtemplate(4, ControlComponent_ng_template_4_div_0_div_4_Template, 3, 3, "div", 7);
    i0.ɵɵtemplate(5, ControlComponent_ng_template_4_div_0_div_5_Template, 3, 3, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r7.control.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r7.control.errors.minlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r7.control.errors.maxlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r7.control.errors.pattern);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r7.control.errors.match);
} }
function ControlComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlComponent_ng_template_4_div_0_Template, 6, 5, "div", 5);
} if (rf & 2) {
    const context_r7 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r7.control.invalid && (context_r7.control.dirty || context_r7.control.touched));
} }
function ControlComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c4 = function (a0) { return { $implicit: a0 }; };
export class ControlComponent extends DisposableComponent {
    get context() {
        return this;
    }
    get control() {
        // console.log('control', this.option.key, this.form.controls);
        return this.form.controls[this.option.key];
    }
    get isValid() {
        return this.control.valid;
    }
    get classes() {
        return {
            valid: this.control.valid,
            invalid: this.control.invalid,
            dirty: this.control.dirty,
            empty: Boolean(this.control.value == null),
            required: Boolean(this.option.required || this.option.requiredTrue),
            disabled: this.option.disabled,
        };
    }
}
ControlComponent.ɵfac = function ControlComponent_Factory(t) { return ɵControlComponent_BaseFactory(t || ControlComponent); };
ControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlComponent, selectors: [["control-component"]], contentQueries: function ControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, true);
        i0.ɵɵcontentQuery(dirIndex, _c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.errorRef = _t.first);
    } }, inputs: { option: "option", form: "form" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["errorDef", ""], ["type", "text", 1, "control__input", 3, "placeholder", "id", "formControlName"], ["class", "control__error", 4, "ngIf"], [1, "control__error"], [4, "ngIf"]], template: function ControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ControlComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, ControlComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
        i0.ɵɵtemplate(4, ControlComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, ControlComponent_ng_container_6_Template, 1, 0, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        const _r3 = i0.ɵɵreference(5);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c4, ctx.context));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c4, ctx.context));
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
const ɵControlComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlComponent, [{
        type: Component,
        args: [{
                selector: 'control-component',
                templateUrl: 'control.component.html',
            }]
    }], null, { inputRef: [{
            type: ContentChild,
            args: ['inputRef', /* TODO: add static flag */ {}]
        }], errorRef: [{
            type: ContentChild,
            args: ['errorRef', /* TODO: add static flag */ {}]
        }], option: [{
            type: Input
        }], form: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9jb250cm9sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFtQixTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDRGxELDJCQUNEOzs7O0lBRCtCLDRGQUFzRDtJQUFDLDBDQUF5QiwwQ0FBQTs7O0lBRS9HLHdCQUErRzs7O0lBRzdHLDJCQUE2QztJQUFBLFlBQStCOztJQUFBLGlCQUFNOztJQUFyQyxlQUErQjtJQUEvQiw2REFBK0I7Ozs7SUFDNUUsMkJBQThDO0lBQUEsWUFBaUY7O0lBQUEsaUJBQU07OztJQUF2RixlQUFpRjtJQUFqRiw2SEFBaUY7Ozs7SUFDL0gsMkJBQThDO0lBQUEsWUFBaUY7O0lBQUEsaUJBQU07OztJQUF2RixlQUFpRjtJQUFqRiw2SEFBaUY7OztJQUMvSCwyQkFBNEM7SUFBQSxZQUE4Qjs7SUFBQSxpQkFBTTs7SUFBcEMsZUFBOEI7SUFBOUIsNERBQThCOzs7SUFDMUUsMkJBQTBDO0lBQUEsWUFBNEI7O0lBQUEsaUJBQU07O0lBQWxDLGVBQTRCO0lBQTVCLDBEQUE0Qjs7O0lBTHZFLDhCQUNDO0lBQUEscUZBQTZDO0lBQzdDLHFGQUE4QztJQUM5QyxxRkFBOEM7SUFDOUMscUZBQTRDO0lBQzVDLHFGQUEwQztJQUMzQyxpQkFBTTs7O0lBTEEsZUFBdUM7SUFBdkMseURBQXVDO0lBQ3ZDLGVBQXdDO0lBQXhDLDBEQUF3QztJQUN4QyxlQUF3QztJQUF4QywwREFBd0M7SUFDeEMsZUFBc0M7SUFBdEMsd0RBQXNDO0lBQ3RDLGVBQW9DO0lBQXBDLHNEQUFvQzs7O0lBTDFDLCtFQUNDOzs7SUFEMkIsNkdBQXFGOzs7SUFRbEgsd0JBQStHOzs7QURKaEgsTUFBTSxPQUFPLGdCQUFpQixTQUFRLG1CQUFtQjtJQVV4RCxJQUFJLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDViwrREFBK0Q7UUFDL0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFRVixPQUFPO1lBQ04sS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDekIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7WUFDMUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUNuRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1NBQzlCLENBQUM7SUFDSCxDQUFDOzt5R0F2Q1csZ0JBQWdCO3FEQUFoQixnQkFBZ0I7Ozs7Ozs7O1FDVjdCLGdDQUNDO1FBQUEsa0hBQ0M7UUFFRCxtRkFBZ0c7UUFDaEcsa0hBQ0M7UUFRRCxtRkFBZ0c7UUFDakcsMEJBQWU7Ozs7UUFmRCxvQ0FBa0I7UUFJakIsZUFBaUY7UUFBakYsOERBQWlGLG9FQUFBO1FBVWpGLGVBQWlGO1FBQWpGLDhEQUFpRixvRUFBQTs7K0RESm5GLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBSjVCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsd0JBQXdCO2FBQ3JDOztrQkFLQyxZQUFZO21CQUFDLFVBQVUsRUFBRSwyQkFBMkIsQ0FBQyxFQUFFOztrQkFDdkQsWUFBWTttQkFBQyxVQUFVLEVBQUUsMkJBQTJCLENBQUMsRUFBRTs7a0JBRXZELEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0Zvck9mQ29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLW9wdGlvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXG5cdC8vIEBDb250ZW50Q2hpbGQoJ2NvbnRyb2xSZWYnKSBjb250cm9sUmVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XG5cdC8vIEBDb250ZW50Q2hpbGQoJ2xhYmVsUmVmJykgbGFiZWxSZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+Pjtcblx0QENvbnRlbnRDaGlsZCgnaW5wdXRSZWYnLCAvKiBUT0RPOiBhZGQgc3RhdGljIGZsYWcgKi8ge30pIGlucHV0UmVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XG5cdEBDb250ZW50Q2hpbGQoJ2Vycm9yUmVmJywgLyogVE9ETzogYWRkIHN0YXRpYyBmbGFnICovIHt9KSBlcnJvclJlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogSUNvbnRyb2xPcHRpb248YW55Pjtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXG5cdGdldCBjb250ZXh0KCk6IENvbnRyb2xDb21wb25lbnQge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0IGNvbnRyb2woKTogQWJzdHJhY3RDb250cm9sIHtcblx0XHQvLyBjb25zb2xlLmxvZygnY29udHJvbCcsIHRoaXMub3B0aW9uLmtleSwgdGhpcy5mb3JtLmNvbnRyb2xzKTtcblx0XHRyZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMub3B0aW9uLmtleV07XG5cdH1cblxuXHRnZXQgaXNWYWxpZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9sLnZhbGlkO1xuXHR9XG5cblx0Z2V0IGNsYXNzZXMoKToge1xuXHRcdHZhbGlkPzogYm9vbGVhbixcblx0XHRpbnZhbGlkPzogYm9vbGVhbixcblx0XHRkaXJ0eT86IGJvb2xlYW4sXG5cdFx0ZW1wdHk/OiBib29sZWFuLFxuXHRcdHJlcXVpcmVkPzogYm9vbGVhbixcblx0XHRkaXNhYmxlZD86IGJvb2xlYW5cblx0fSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbGlkOiB0aGlzLmNvbnRyb2wudmFsaWQsXG5cdFx0XHRpbnZhbGlkOiB0aGlzLmNvbnRyb2wuaW52YWxpZCxcblx0XHRcdGRpcnR5OiB0aGlzLmNvbnRyb2wuZGlydHksXG5cdFx0XHRlbXB0eTogQm9vbGVhbih0aGlzLmNvbnRyb2wudmFsdWUgPT0gbnVsbCksXG5cdFx0XHRyZXF1aXJlZDogQm9vbGVhbih0aGlzLm9wdGlvbi5yZXF1aXJlZCB8fCB0aGlzLm9wdGlvbi5yZXF1aXJlZFRydWUpLFxuXHRcdFx0ZGlzYWJsZWQ6IHRoaXMub3B0aW9uLmRpc2FibGVkLFxuXHRcdH07XG5cdH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuXHQ8bmctdGVtcGxhdGUgI2lucHV0RGVmIGxldC1jb250ZXh0PlxyXG5cdFx0PGlucHV0IGNsYXNzPVwiY29udHJvbF9faW5wdXRcIiBwbGFjZWhvbGRlcj1cInt7IGNvbnRleHQub3B0aW9uLnBsYWNlaG9sZGVyIHwgbGFiZWwgfX1cIiBbaWRdPVwiY29udGV4dC5vcHRpb24ua2V5XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250ZXh0Lm9wdGlvbi5rZXlcIiB0eXBlPVwidGV4dFwiPlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuaW5wdXRSZWYgfHwgaW5wdXREZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuXHQ8bmctdGVtcGxhdGUgI2Vycm9yRGVmIGxldC1jb250ZXh0PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbnRyb2xfX2Vycm9yXCIgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuaW52YWxpZCAmJiAoY29udGV4dC5jb250cm9sLmRpcnR5IHx8IGNvbnRleHQuY29udHJvbC50b3VjaGVkKVwiPlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5yZXF1aXJlZFwiPnt7ICdlcnJvcnMucmVxdWlyZWQnIHwgbGFiZWwgfX08L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMubWlubGVuZ3RoXCI+e3sgJ2Vycm9ycy5taW5sZW5ndGgnIHwgbGFiZWwgOiBudWxsIDogeyBtaW5sZW5ndGg6IGNvbnRleHQub3B0aW9uLm1pbmxlbmd0aCB9IH19PC9kaXY+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLm1heGxlbmd0aFwiPnt7ICdlcnJvcnMubWF4bGVuZ3RoJyB8IGxhYmVsIDogbnVsbCA6IHsgbWF4bGVuZ3RoOiBjb250ZXh0Lm9wdGlvbi5tYXhsZW5ndGggfSB9fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmVycm9ycy5wYXR0ZXJuXCI+e3sgJ2Vycm9ycy5wYXR0ZXJuJyB8IGxhYmVsIH19PC9kaXY+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLm1hdGNoXCI+e3sgJ2Vycm9ycy5tYXRjaCcgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5lcnJvclJlZiB8fCBlcnJvckRlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19