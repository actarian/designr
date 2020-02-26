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
    const item_r143 = ctx.$implicit;
    const context_r141 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngValue", context_r141.getValue(item_r143));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, item_r143 == null ? null : item_r143.name));
} }
function ControlSelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "select", 5);
    i0.ɵɵtemplate(2, ControlSelectComponent_ng_template_1_option_2_Template, 3, 4, "option", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r141 = ctx.$implicit;
    const ctx_r136 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", context_r141.option.key)("formControlName", context_r141.option.key)("compareWith", context_r141.compareWith);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r136.options);
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
    const context_r145 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", context_r145.control.errors.required);
} }
function ControlSelectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlSelectComponent_ng_template_3_div_0_Template, 2, 1, "div", 8);
} if (rf & 2) {
    const context_r145 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r145.control.invalid && (context_r145.control.dirty || context_r145.control.touched));
} }
function ControlSelectComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlSelectComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
export class ControlSelectComponent extends ControlComponent {
    constructor() {
        super(...arguments);
        this.options = [];
        this.getValue = this.getValue_.bind(this);
        this.compareWith = this.compareWith_.bind(this);
    }
    ngOnInit() {
        this.options$().pipe(takeUntil(this.unsubscribe), tap(options => {
            if (this.option.asObject && this.control.value === null) {
                const firstNullOptions = options.find(x => x.id === null);
                if (firstNullOptions !== undefined) {
                    this.control.setValue(firstNullOptions);
                }
            }
        })).subscribe(options => this.options = options);
    }
    options$() {
        const options = this.option.options;
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
    }
    getValue_(item) {
        return this.option.asObject ? item : item.id;
    }
    compareWith_(a, b) {
        if (this.option.asObject) {
            a = a;
            b = b;
            return (b && b.id !== undefined) ? a.id === b.id : a.id === b;
        }
        else {
            return b ? a === b : a === null;
        }
    }
}
ControlSelectComponent.ɵfac = function ControlSelectComponent_Factory(t) { return ɵControlSelectComponent_BaseFactory(t || ControlSelectComponent); };
ControlSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlSelectComponent, selectors: [["control-select-component"]], inputs: { option: "option" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[3, "formGroup"], ["inputDef", ""], ["errorDef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control__input", "control__input--select"], [3, "id", "formControlName", "compareWith"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["class", "control__error control__error--select", 4, "ngIf"], [1, "control__error", "control__error--select"], [4, "ngIf"]], template: function ControlSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ControlSelectComponent_ng_template_1_Template, 3, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, ControlSelectComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, ControlSelectComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
        i0.ɵɵtemplate(6, ControlSelectComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const _r135 = i0.ɵɵreference(2);
        const _r137 = i0.ɵɵreference(4);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.inputRef || _r135)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c0, ctx.context));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.errorRef || _r137)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c0, ctx.context));
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgTemplateOutlet, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgForOf, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
const ɵControlSelectComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlSelectComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlSelectComponent, [{
        type: Component,
        args: [{
                selector: 'control-select-component',
                templateUrl: 'control-select.component.html',
            }]
    }], null, { option: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQudHMiLCJsaWIvY29udHJvbC9zZWxlY3QvY29udHJvbC1zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUF1QixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7SUNBbEUsaUNBQXdFO0lBQUEsWUFBc0I7O0lBQUEsaUJBQVM7Ozs7SUFBbEUsMERBQWtDO0lBQUMsZUFBc0I7SUFBdEIscUZBQXNCOzs7SUFGaEcsOEJBQ0M7SUFBQSxpQ0FDQztJQUFBLDJGQUF3RTtJQUN6RSxpQkFBUztJQUVWLGlCQUFNOzs7O0lBSkcsZUFBeUI7SUFBekIsNENBQXlCLDRDQUFBLHlDQUFBO0lBQ3hCLGVBQTRCO0lBQTVCLDBDQUE0Qjs7O0lBT3JDLDJCQUE2QztJQUFBLFlBQStCOztJQUFBLGlCQUFNOztJQUFyQyxlQUErQjtJQUEvQiw2REFBK0I7OztJQUQ3RSw4QkFDQztJQUFBLDRGQUE2QztJQUM5QyxpQkFBTTs7O0lBREEsZUFBdUM7SUFBdkMsMkRBQXVDOzs7SUFEN0MscUZBQ0M7OztJQURrRCxtSEFBcUY7OztJQUl6SSx3QkFBK0c7OztJQUMvRyx3QkFBK0c7OztBRExoSCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCO0lBSjVE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bnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sU2VsZWN0LCBDb250cm9sU2VsZWN0T3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLXNlbGVjdCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtc2VsZWN0LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sU2VsZWN0O1xuXHRvcHRpb25zOiBDb250cm9sU2VsZWN0T3B0aW9uW10gPSBbXTtcblx0Z2V0VmFsdWU6IEZ1bmN0aW9uID0gdGhpcy5nZXRWYWx1ZV8uYmluZCh0aGlzKTtcblx0Y29tcGFyZVdpdGg6IEZ1bmN0aW9uID0gdGhpcy5jb21wYXJlV2l0aF8uYmluZCh0aGlzKTtcblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9wdGlvbnMkKCkucGlwZShcblx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSxcblx0XHRcdHRhcChvcHRpb25zID0+IHtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9uLmFzT2JqZWN0ICYmIHRoaXMuY29udHJvbC52YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGZpcnN0TnVsbE9wdGlvbnMgPSBvcHRpb25zLmZpbmQoeCA9PiB4LmlkID09PSBudWxsKTtcblx0XHRcdFx0XHRpZiAoZmlyc3ROdWxsT3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRyb2wuc2V0VmFsdWUoZmlyc3ROdWxsT3B0aW9ucyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHQpLnN1YnNjcmliZShvcHRpb25zID0+IHRoaXMub3B0aW9ucyA9IG9wdGlvbnMpO1xuXHR9XG5cblx0b3B0aW9ucyQoKTogT2JzZXJ2YWJsZTxDb250cm9sU2VsZWN0T3B0aW9uW10+IHtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb24ub3B0aW9ucztcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0aWYgKGlzT2JzZXJ2YWJsZShvcHRpb25zKSkge1xuXHRcdFx0XHRyZXR1cm4gb3B0aW9ucztcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuXHRcdFx0XHRyZXR1cm4gb2Yob3B0aW9ucyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gb2YoW10pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YoW10pO1xuXHRcdH1cblx0fVxuXG5cdGdldFZhbHVlXyhpdGVtOiBDb250cm9sU2VsZWN0T3B0aW9uKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24uYXNPYmplY3QgPyBpdGVtIDogaXRlbS5pZDtcblx0fVxuXG5cdGNvbXBhcmVXaXRoXyhhOiBDb250cm9sU2VsZWN0T3B0aW9uIHwgc3RyaW5nIHwgbnVtYmVyLCBiOiBDb250cm9sU2VsZWN0T3B0aW9uIHwgc3RyaW5nIHwgbnVtYmVyKSB7XG5cdFx0aWYgKHRoaXMub3B0aW9uLmFzT2JqZWN0KSB7XG5cdFx0XHRhID0gYSBhcyBDb250cm9sU2VsZWN0T3B0aW9uO1xuXHRcdFx0YiA9IGIgYXMgQ29udHJvbFNlbGVjdE9wdGlvbjtcblx0XHRcdHJldHVybiAoYiAmJiBiLmlkICE9PSB1bmRlZmluZWQpID8gYS5pZCA9PT0gYi5pZCA6IGEuaWQgPT09IGI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBiID8gYSA9PT0gYiA6IGEgPT09IG51bGw7XG5cdFx0fVxuXHR9XG59XG4iLCI8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG5cdDxuZy10ZW1wbGF0ZSAjaW5wdXREZWYgbGV0LWNvbnRleHQ+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udHJvbF9faW5wdXQgY29udHJvbF9faW5wdXQtLXNlbGVjdFwiPlxyXG5cdFx0XHQ8c2VsZWN0IFtpZF09XCJjb250ZXh0Lm9wdGlvbi5rZXlcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRleHQub3B0aW9uLmtleVwiIFtjb21wYXJlV2l0aF09XCJjb250ZXh0LmNvbXBhcmVXaXRoXCI+XHJcblx0XHRcdFx0PG9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBvcHRpb25zXCIgW25nVmFsdWVdPVwiY29udGV4dC5nZXRWYWx1ZShpdGVtKVwiPnt7aXRlbT8ubmFtZSB8IGxhYmVsfX08L29wdGlvbj5cclxuXHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdDwhLS0gY29udHJvbF9fYWNjZXNzb3J5IC0tPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8bmctdGVtcGxhdGUgI2Vycm9yRGVmIGxldC1jb250ZXh0PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbnRyb2xfX2Vycm9yIGNvbnRyb2xfX2Vycm9yLS1zZWxlY3RcIiAqbmdJZj1cImNvbnRleHQuY29udHJvbC5pbnZhbGlkICYmIChjb250ZXh0LmNvbnRyb2wuZGlydHkgfHwgY29udGV4dC5jb250cm9sLnRvdWNoZWQpXCI+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJjb250ZXh0LmNvbnRyb2wuZXJyb3JzLnJlcXVpcmVkXCI+e3sgJ2Vycm9ycy5yZXF1aXJlZCcgfCBsYWJlbCB9fTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5pbnB1dFJlZiB8fCBpbnB1dERlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG5cdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZXh0LmVycm9yUmVmIHx8IGVycm9yRGVmOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGV4dCB9XCI+PC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=