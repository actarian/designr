import { Component, ComponentFactoryResolver, ContentChild, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlService } from './control.service';
import * as i0 from "@angular/core";
import * as i1 from "./control.service";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
var _c0 = ["inputRef"];
var _c1 = ["errorRef"];
var _c2 = ["labelRef"];
var _c3 = ["descriptionRef"];
var _c4 = ["descriptionDef"];
var _c5 = ["labelDef"];
var _c6 = ["outlet"];
function ControlOutletComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r386 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("control__label control__label--", context_r386.option.schema, "");
    i0.ɵɵattribute("for", context_r386.option.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 5, context_r386.option.label));
} }
function ControlOutletComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var context_r387 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("control__description control__description--", context_r387.option.schema, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 4, context_r387.option.description), " ");
} }
function ControlOutletComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlOutletComponent_ng_template_2_div_0_Template, 3, 6, "div", 5);
} if (rf & 2) {
    var context_r387 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r387.option.description);
} }
function ControlOutletComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlOutletComponent_ng_template_6_Template(rf, ctx) { }
function ControlOutletComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c7 = function (a0) { return { $implicit: a0 }; };
var ControlOutletComponent = /** @class */ (function () {
    function ControlOutletComponent(componentFactoryResolver, controlService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.controlService = controlService;
    }
    Object.defineProperty(ControlOutletComponent.prototype, "context", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlOutletComponent.prototype, "classes", {
        get: function () {
            // console.log('control', this.option.key, this.form.controls);
            return this.componentRef ? this.componentRef.instance.classes : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlOutletComponent.prototype, "control", {
        get: function () {
            // console.log('control', this.option.key, this.form.controls);
            return this.componentRef ? this.componentRef.instance.control : null;
        },
        enumerable: true,
        configurable: true
    });
    ControlOutletComponent.prototype.ngAfterViewInit = function () {
    };
    ControlOutletComponent.prototype.ngOnInit = function () {
        var component = this.controlService.resolve(this.option);
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        var componentRef = this.viewContainerRef.createComponent(factory);
        var instance = componentRef.instance;
        instance.option = this.option;
        instance.form = this.form;
        instance.inputRef = this.inputRef;
        instance.errorRef = this.errorRef;
        // instance.labelRef = this.labelRef || this.labelDef;
        if (typeof instance['ControlInit'] === 'function') {
            instance['ControlInit']();
        }
        this.componentRef = componentRef;
    };
    ControlOutletComponent.prototype.ngOnDestroy = function () {
        this.componentRef.destroy();
    };
    ControlOutletComponent.ɵfac = function ControlOutletComponent_Factory(t) { return new (t || ControlOutletComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i1.ControlService)); };
    ControlOutletComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlOutletComponent, selectors: [["control-outlet"]], contentQueries: function ControlOutletComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵstaticContentQuery(dirIndex, _c0, true);
            i0.ɵɵstaticContentQuery(dirIndex, _c1, true);
            i0.ɵɵstaticContentQuery(dirIndex, _c2, true);
            i0.ɵɵstaticContentQuery(dirIndex, _c3, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.errorRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.labelRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.descriptionRef = _t.first);
        } }, viewQuery: function ControlOutletComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c4, true);
            i0.ɵɵstaticViewQuery(_c5, true);
            i0.ɵɵstaticViewQuery(_c6, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.descriptionDef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.labelDef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
        } }, inputs: { option: "option", form: "form" }, decls: 9, vars: 12, consts: [["labelDef", ""], ["descriptionDef", ""], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["outlet", ""], [3, "class", 4, "ngIf"]], template: function ControlOutletComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ControlOutletComponent_ng_template_0_Template, 3, 7, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, ControlOutletComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵtemplate(5, ControlOutletComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            i0.ɵɵtemplate(6, ControlOutletComponent_ng_template_6_Template, 0, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, ControlOutletComponent_ng_container_8_Template, 1, 0, "ng-container", 3);
        } if (rf & 2) {
            var _r378 = i0.ɵɵreference(1);
            var _r380 = i0.ɵɵreference(3);
            i0.ɵɵadvance(4);
            i0.ɵɵclassMapInterpolate1("control control--", ctx.context.option.schema, "");
            i0.ɵɵproperty("ngClass", ctx.context.classes);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.labelRef || _r378)("ngTemplateOutletContext", i0.ɵɵpureFunction1(8, _c7, ctx.context));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.context.descriptionRef || _r380)("ngTemplateOutletContext", i0.ɵɵpureFunction1(10, _c7, ctx.context));
        } }, directives: [i2.NgClass, i2.NgTemplateOutlet, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
    return ControlOutletComponent;
}());
export { ControlOutletComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlOutletComponent, [{
        type: Component,
        args: [{
                selector: 'control-outlet',
                templateUrl: 'control-outlet.component.html',
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i1.ControlService }]; }, { inputRef: [{
            type: ContentChild,
            args: ['inputRef', { static: true }]
        }], errorRef: [{
            type: ContentChild,
            args: ['errorRef', { static: true }]
        }], labelRef: [{
            type: ContentChild,
            args: ['labelRef', { static: true }]
        }], descriptionRef: [{
            type: ContentChild,
            args: ['descriptionRef', { static: true }]
        }], descriptionDef: [{
            type: ViewChild,
            args: ['descriptionDef', { static: true }]
        }], labelDef: [{
            type: ViewChild,
            args: ['labelDef', { static: true }]
        }], viewContainerRef: [{
            type: ViewChild,
            args: ['outlet', { read: ViewContainerRef, static: true }]
        }], option: [{
            type: Input
        }], form: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC50cyIsImxpYi9jb250cm9sL2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBaUIsU0FBUyxFQUFvQix3QkFBd0IsRUFBZ0IsWUFBWSxFQUFFLEtBQUssRUFBcUIsV0FBVyxFQUFRLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzTSxPQUFPLEVBQW1CLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0psRCw2QkFBd0c7SUFBQSxZQUFrQzs7SUFBQSxpQkFBUTs7O0lBQTNJLDRGQUFnRTtJQUFDLDhDQUErQjtJQUFDLGVBQWtDO0lBQWxDLHFFQUFrQzs7O0lBRzFJLDJCQUNDO0lBQUEsWUFDRDs7SUFBQSxpQkFBTTs7O0lBRkQsd0dBQTRFO0lBQ2hGLGVBQ0Q7SUFEQyxzRkFDRDs7O0lBRkEscUZBQ0M7OztJQURpRixzREFBa0M7OztJQUtwSCx3QkFBK0c7Ozs7SUFHaEgsd0JBQTJIOzs7QURMM0g7SUFpQ0MsZ0NBQ1Msd0JBQWtELEVBQ2xELGNBQThCO1FBRDlCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ25DLENBQUM7SUFqQkwsc0JBQUksMkNBQU87YUFBWDtZQUNDLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQ0FBTzthQUFYO1lBQ0MsK0RBQStEO1lBQy9ELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxR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ICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgQ29udGVudENoaWxkLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBUeXBlLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSUNvbnRyb2xPcHRpb24gfSBmcm9tICcuL2NvbnRyb2wtb3B0aW9uJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9jb250cm9sLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLW91dGxldCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1vdXRsZXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sT3V0bGV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuXG5cdEBDb250ZW50Q2hpbGQoJ2lucHV0UmVmJywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRSZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+Pjtcblx0QENvbnRlbnRDaGlsZCgnZXJyb3JSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBlcnJvclJlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xuXHRAQ29udGVudENoaWxkKCdsYWJlbFJlZicsIHsgc3RhdGljOiB0cnVlIH0pIGxhYmVsUmVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XG5cdEBDb250ZW50Q2hpbGQoJ2Rlc2NyaXB0aW9uUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgZGVzY3JpcHRpb25SZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+Pjtcblx0QFZpZXdDaGlsZCgnZGVzY3JpcHRpb25EZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBkZXNjcmlwdGlvbkRlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xuXHRAVmlld0NoaWxkKCdsYWJlbERlZicsIHsgc3RhdGljOiB0cnVlIH0pIGxhYmVsRGVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XG5cdEBWaWV3Q2hpbGQoJ291dGxldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cblx0QElucHV0KCkgb3B0aW9uOiBJQ29udHJvbE9wdGlvbjxhbnk+O1xuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG5cblx0cHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxDb250cm9sQ29tcG9uZW50PjtcblxuXHRnZXQgY29udGV4dCgpOiBDb250cm9sT3V0bGV0Q29tcG9uZW50IHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldCBjbGFzc2VzKCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHtcblx0XHQvLyBjb25zb2xlLmxvZygnY29udHJvbCcsIHRoaXMub3B0aW9uLmtleSwgdGhpcy5mb3JtLmNvbnRyb2xzKTtcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnRSZWYgPyB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jbGFzc2VzIDogbnVsbDtcblx0fVxuXG5cdGdldCBjb250cm9sKCk6IEFic3RyYWN0Q29udHJvbCB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2NvbnRyb2wnLCB0aGlzLm9wdGlvbi5rZXksIHRoaXMuZm9ybS5jb250cm9scyk7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50UmVmID8gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuY29udHJvbCA6IG51bGw7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgY29udHJvbFNlcnZpY2U6IENvbnRyb2xTZXJ2aWNlLFxuXHQpIHsgfVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnN0IGNvbXBvbmVudDogVHlwZTxDb250cm9sQ29tcG9uZW50PiA9IHRoaXMuY29udHJvbFNlcnZpY2UucmVzb2x2ZSh0aGlzLm9wdGlvbik7XG5cdFx0Y29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxDb250cm9sQ29tcG9uZW50PiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblx0XHRjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcblx0XHRpbnN0YW5jZS5vcHRpb24gPSB0aGlzLm9wdGlvbjtcblx0XHRpbnN0YW5jZS5mb3JtID0gdGhpcy5mb3JtO1xuXHRcdGluc3RhbmNlLmlucHV0UmVmID0gdGhpcy5pbnB1dFJlZjtcblx0XHRpbnN0YW5jZS5lcnJvclJlZiA9IHRoaXMuZXJyb3JSZWY7XG5cdFx0Ly8gaW5zdGFuY2UubGFiZWxSZWYgPSB0aGlzLmxhYmVsUmVmIHx8IHRoaXMubGFiZWxEZWY7XG5cdFx0aWYgKHR5cGVvZiBpbnN0YW5jZVsnQ29udHJvbEluaXQnXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aW5zdGFuY2VbJ0NvbnRyb2xJbml0J10oKTtcblx0XHR9XG5cdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG5cdH1cblxufVxuIiwiPG5nLXRlbXBsYXRlICNsYWJlbERlZiBsZXQtY29udGV4dD5cclxuXHQ8bGFiZWwgY2xhc3M9XCJjb250cm9sX19sYWJlbCBjb250cm9sX19sYWJlbC0te3tjb250ZXh0Lm9wdGlvbi5zY2hlbWF9fVwiIFthdHRyLmZvcl09XCJjb250ZXh0Lm9wdGlvbi5rZXlcIj57eyBjb250ZXh0Lm9wdGlvbi5sYWJlbCB8IGxhYmVsIH19PC9sYWJlbD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICNkZXNjcmlwdGlvbkRlZiBsZXQtY29udGV4dD5cclxuXHQ8ZGl2IGNsYXNzPVwiY29udHJvbF9fZGVzY3JpcHRpb24gY29udHJvbF9fZGVzY3JpcHRpb24tLXt7Y29udGV4dC5vcHRpb24uc2NoZW1hfX1cIiAqbmdJZj1cImNvbnRleHQub3B0aW9uLmRlc2NyaXB0aW9uXCI+XHJcblx0XHR7eyBjb250ZXh0Lm9wdGlvbi5kZXNjcmlwdGlvbiB8IGxhYmVsIH19XHJcblx0PC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxkaXYgY2xhc3M9XCJjb250cm9sIGNvbnRyb2wtLXt7Y29udGV4dC5vcHRpb24uc2NoZW1hfX1cIiBbbmdDbGFzc109XCJjb250ZXh0LmNsYXNzZXNcIj5cclxuXHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5sYWJlbFJlZiB8fCBsYWJlbERlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG5cdDxuZy10ZW1wbGF0ZSAjb3V0bGV0PjwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG48bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGV4dC5kZXNjcmlwdGlvblJlZiB8fCBkZXNjcmlwdGlvbkRlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRleHQgfVwiPjwvbmctY29udGFpbmVyPlxyXG4iXX0=