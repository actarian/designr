import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { isObservable, of } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ControlComponent } from '../control.component';
import { ControlSelect } from './control-select';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
function ControlSelectComponent_ng_template_1_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r339 = ctx.$implicit;
    var context_r337 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngValue", context_r337.getValue(item_r339));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, item_r339 == null ? null : item_r339.name));
} }
function ControlSelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "select", 5);
    i0.ɵɵtemplate(2, ControlSelectComponent_ng_template_1_option_2_Template, 3, 4, "option", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r337 = ctx.$implicit;
    var ctx_r332 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", context_r337.option.key)("formControlName", context_r337.option.key)("compareWith", context_r337.compareWith);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r332.options);
} }
function ControlSelectComponent_ng_template_3_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "errors.required"));
} }
function ControlSelectComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, ControlSelectComponent_ng_template_3_div_0_div_1_Template, 3, 3, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r341 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r341.control.errors.required);
} }
function ControlSelectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlSelectComponent_ng_template_3_div_0_Template, 2, 1, "div", 8);
} if (rf & 2) {
    var context_r341 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r341.control.invalid && (context_r341.control.dirty || context_r341.control.touched));
} }
function ControlSelectComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlSelectComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c0 = function (a0) { return { $implicit: a0 }; };
var ControlSelectComponent = /** @class */ (function (_super) {
    __extends(ControlSelectComponent, _super);
    function ControlSelectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = [];
        _this.getValue = _this.getValue_.bind(_this);
        _this.compareWith = _this.compareWith_.bind(_this);
        return _this;
    }
    ControlSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options$().pipe(takeUntil(this.unsubscribe), tap(function (options) {
            if (_this.option.asObject && _this.control.value === null) {
                var firstNullOptions = options.find(function (x) { return x.id === null; });
                if (firstNullOptions !== undefined) {
                    _this.control.setValue(firstNullOptions);
                }
            }
        })).subscribe(function (options) { return _this.options = options; });
    };
    ControlSelectComponent.prototype.options$ = function () {
        var options = this.option.options;
        if (options) {
            if (isObservable(options)) {
                return options;
            }
            else if (Array.isArray(options)) {
                return of(options);
            }
            else {
                return of([]);
            }
        }
        else {
            return of([]);
        }
    };
    ControlSelectComponent.prototype.getValue_ = function (item) {
        return this.option.asObject ? item : item.id;
    };
    ControlSelectComponent.prototype.compareWith_ = function (a, b) {
        if (this.option.asObject) {
            a = a;
            b = b;
            return (b && b.id !== undefined) ? a.id === b.id : a.id === b;
        }
        else {
            return b ? a === b : a === null;
        }
    };
    ControlSelectComponent.ɵfac = function ControlSelectComponent_Factory(t) { return ɵControlSelectComponent_BaseFactory(t || ControlSelectComponent); };
    ControlSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlSelectComponent, selectors: [["control-select-component"]], inputs: { option: "option" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control__input", "control__input--select"], [3, "id", "formControlName", "compareWith"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["class", "control__error control__error--select", 4, "ngIf"], [1, "control__error", "control__error--select"], [4, "ngIf"]], template: function ControlSelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, ControlSelectComponent_ng_template_1_Template, 3, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, ControlSelectComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(5, ControlSelectComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            i0.ɵɵtemplate(6, ControlSelectComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            var _r331 = i0.ɵɵreference(2);
            var _r333 = i0.ɵɵreference(4);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r331)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c0, ctx.context));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r333)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c0, ctx.context));
        } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgForOf, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
    return ControlSelectComponent;
}(ControlComponent));
export { ControlSelectComponent };
var ɵControlSelectComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlSelectComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlSelectComponent, [{
        type: Component,
        args: [{
                selector: 'control-select-component',
                templateUrl: 'control-select.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9zZWxlY3QvY29udHJvbC1zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBdUIsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0lDQWxFLGlDQUF3RTtJQUFBLFlBQXNCOztJQUFBLGlCQUFTOzs7O0lBQWxFLDBEQUFrQztJQUFDLGVBQXNCO0lBQXRCLHFGQUFzQjs7O0lBRmhHLDhCQUNDO0lBQUEsaUNBQ0M7SUFBQSwyRkFBd0U7SUFDekUsaUJBQVM7SUFFVixpQkFBTTs7OztJQUpHLGVBQXlCO0lBQXpCLDRDQUF5Qiw0Q0FBQSx5Q0FBQTtJQUN4QixlQUE0QjtJQUE1QiwwQ0FBNEI7OztJQU9yQywyQkFBNkM7SUFBQSxZQUErQjs7SUFBQSxpQkFBTTs7SUFBckMsZUFBK0I7SUFBL0IsNkRBQStCOzs7SUFEN0UsOEJBQ0M7SUFBQSw0RkFBNkM7SUFDOUMsaUJBQU07OztJQURBLGVBQXVDO0lBQXZDLDJEQUF1Qzs7O0lBRDdDLHFGQUNDOzs7SUFEa0QsbUhBQXFGOzs7SUFJekksd0JBQStHOzs7SUFDL0csd0JBQStHOzs7QURUaEg7SUFJNEMsMENBQWdCO0lBSjVEO1FBQUEscUVBcURDO1FB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QkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7YUFDNUM7O2tCQUdDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xTZWxlY3QsIENvbnRyb2xTZWxlY3RPcHRpb24gfSBmcm9tICcuL2NvbnRyb2wtc2VsZWN0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1zZWxlY3QtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xTZWxlY3Q7XG5cdG9wdGlvbnM6IENvbnRyb2xTZWxlY3RPcHRpb25bXSA9IFtdO1xuXHRnZXRWYWx1ZTogRnVuY3Rpb24gPSB0aGlzLmdldFZhbHVlXy5iaW5kKHRoaXMpO1xuXHRjb21wYXJlV2l0aDogRnVuY3Rpb24gPSB0aGlzLmNvbXBhcmVXaXRoXy5iaW5kKHRoaXMpO1xuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub3B0aW9ucyQoKS5waXBlKFxuXHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLFxuXHRcdFx0dGFwKG9wdGlvbnMgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb24uYXNPYmplY3QgJiYgdGhpcy5jb250cm9sLnZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29uc3QgZmlyc3ROdWxsT3B0aW9ucyA9IG9wdGlvbnMuZmluZCh4ID0+IHguaWQgPT09IG51bGwpO1xuXHRcdFx0XHRcdGlmIChmaXJzdE51bGxPcHRpb25zICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHRoaXMuY29udHJvbC5zZXRWYWx1ZShmaXJzdE51bGxPcHRpb25zKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdCkuc3Vic2NyaWJlKG9wdGlvbnMgPT4gdGhpcy5vcHRpb25zID0gb3B0aW9ucyk7XG5cdH1cblxuXHRvcHRpb25zJCgpOiBPYnNlcnZhYmxlPENvbnRyb2xTZWxlY3RPcHRpb25bXT4ge1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbi5vcHRpb25zO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRpZiAoaXNPYnNlcnZhYmxlKG9wdGlvbnMpKSB7XG5cdFx0XHRcdHJldHVybiBvcHRpb25zO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG5cdFx0XHRcdHJldHVybiBvZihvcHRpb25zKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBvZihbXSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihbXSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0VmFsdWVfKGl0ZW06IENvbnRyb2xTZWxlY3RPcHRpb24pOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbi5hc09iamVjdCA/IGl0ZW0gOiBpdGVtLmlkO1xuXHR9XG5cblx0Y29tcGFyZVdpdGhfKGE6IENvbnRyb2xTZWxlY3RPcHRpb24gfCBzdHJpbmcgfCBudW1iZXIsIGI6IENvbnRyb2xTZWxlY3RPcHRpb24gfCBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHRpZiAodGhpcy5vcHRpb24uYXNPYmplY3QpIHtcblx0XHRcdGEgPSBhIGFzIENvbnRyb2xTZWxlY3RPcHRpb247XG5cdFx0XHRiID0gYiBhcyBDb250cm9sU2VsZWN0T3B0aW9uO1xuXHRcdFx0cmV0dXJuIChiICYmIGIuaWQgIT09IHVuZGVmaW5lZCkgPyBhLmlkID09PSBiLmlkIDogYS5pZCA9PT0gYjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGIgPyBhID09PSBiIDogYSA9PT0gbnVsbDtcblx0XHR9XG5cdH1cbn1cbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcblx0PG5nLXRlbXBsYXRlICNpbnB1dERlZiBsZXQtY29udGV4dD5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb250cm9sX19pbnB1dCBjb250cm9sX19pbnB1dC0tc2VsZWN0XCI+XHJcblx0XHRcdDxzZWxlY3QgW2lkXT1cImNvbnRleHQub3B0aW9uLmtleVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udGV4dC5vcHRpb24ua2V5XCIgW2NvbXBhcmVXaXRoXT1cImNvbnRleHQuY29tcGFyZVdpdGhcIj5cclxuXHRcdFx0XHQ8b3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIG9wdGlvbnNcIiBbbmdWYWx1ZV09XCJjb250ZXh0LmdldFZhbHVlKGl0ZW0pXCI+e3tpdGVtPy5uYW1lIHwgbGFiZWx9fTwvb3B0aW9uPlxyXG5cdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0PCEtLSBjb250cm9sX19hY2Nlc3NvcnkgLS0+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L25nLXRlbXBsYXRlPlxyXG5cdDxuZy10ZW1wbGF0ZSAjZXJyb3JEZWYgbGV0LWNvbnRleHQ+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udHJvbF9fZXJyb3IgY29udHJvbF9fZXJyb3ItLXNlbGVjdFwiICpuZ0lmPVwiY29udGV4dC5jb250cm9sLmludmFsaWQgJiYgKGNvbnRleHQuY29udHJvbC5kaXJ0eSB8fCBjb250ZXh0LmNvbnRyb2wudG91Y2hlZClcIj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5lcnJvcnMucmVxdWlyZWRcIj57eyAnZXJyb3JzLnJlcXVpcmVkJyB8IGxhYmVsIH19PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L25nLXRlbXBsYXRlPlxyXG5cdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZXh0LmlucHV0UmVmIHx8IGlucHV0RGVmOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGV4dCB9XCI+PC9uZy1jb250YWluZXI+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuZXJyb3JSZWYgfHwgZXJyb3JEZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==