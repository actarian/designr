import { Component, ComponentFactoryResolver, ContentChild, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlService } from './control.service';
import * as i0 from "@angular/core";
import * as i1 from "./control.service";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
const _c0 = ["inputRef"];
const _c1 = ["errorRef"];
const _c2 = ["labelRef"];
const _c3 = ["descriptionRef"];
const _c4 = ["descriptionDef"];
const _c5 = ["labelDef"];
const _c6 = ["outlet"];
function ControlOutletComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r190 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("control__label control__label--", context_r190.option.schema, "");
    i0.ɵɵattribute("for", context_r190.option.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 5, context_r190.option.label));
} }
function ControlOutletComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "label");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r191 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("control__description control__description--", context_r191.option.schema, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 4, context_r191.option.description), " ");
} }
function ControlOutletComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ControlOutletComponent_ng_template_2_div_0_Template, 3, 6, "div", 5);
} if (rf & 2) {
    const context_r191 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", context_r191.option.description);
} }
function ControlOutletComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ControlOutletComponent_ng_template_6_Template(rf, ctx) { }
function ControlOutletComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c7 = function (a0) { return { $implicit: a0 }; };
export class ControlOutletComponent {
    constructor(componentFactoryResolver, controlService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.controlService = controlService;
    }
    get context() {
        return this;
    }
    get classes() {
        // console.log('control', this.option.key, this.form.controls);
        return this.componentRef ? this.componentRef.instance.classes : null;
    }
    get control() {
        // console.log('control', this.option.key, this.form.controls);
        return this.componentRef ? this.componentRef.instance.control : null;
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        const component = this.controlService.resolve(this.option);
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        const componentRef = this.viewContainerRef.createComponent(factory);
        const instance = componentRef.instance;
        instance.option = this.option;
        instance.form = this.form;
        instance.inputRef = this.inputRef;
        instance.errorRef = this.errorRef;
        // instance.labelRef = this.labelRef || this.labelDef;
        if (typeof instance['ControlInit'] === 'function') {
            instance['ControlInit']();
        }
        this.componentRef = componentRef;
    }
    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
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
        const _r182 = i0.ɵɵreference(1);
        const _r184 = i0.ɵɵreference(3);
        i0.ɵɵadvance(4);
        i0.ɵɵclassMapInterpolate1("control control--", ctx.context.option.schema, "");
        i0.ɵɵproperty("ngClass", ctx.context.classes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.labelRef || _r182)("ngTemplateOutletContext", i0.ɵɵpureFunction1(8, _c7, ctx.context));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.context.descriptionRef || _r184)("ngTemplateOutletContext", i0.ɵɵpureFunction1(10, _c7, ctx.context));
    } }, directives: [i2.NgClass, i2.NgTemplateOutlet, i2.NgIf], pipes: [i3.LabelPipe], encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC50cyIsImxpYi9jb250cm9sL2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBaUIsU0FBUyxFQUFvQix3QkFBd0IsRUFBZ0IsWUFBWSxFQUFFLEtBQUssRUFBcUIsV0FBVyxFQUFRLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzTSxPQUFPLEVBQW1CLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0psRCw2QkFBd0c7SUFBQSxZQUFrQzs7SUFBQSxpQkFBUTs7O0lBQTNJLDRGQUFnRTtJQUFDLDhDQUErQjtJQUFDLGVBQWtDO0lBQWxDLHFFQUFrQzs7O0lBRzFJLDJCQUNDO0lBQUEsWUFDRDs7SUFBQSxpQkFBTTs7O0lBRkQsd0dBQTRFO0lBQ2hGLGVBQ0Q7SUFEQyxzRkFDRDs7O0lBRkEscUZBQ0M7OztJQURpRixzREFBa0M7OztJQUtwSCx3QkFBK0c7Ozs7SUFHaEgsd0JBQTJIOzs7QUREM0gsTUFBTSxPQUFPLHNCQUFzQjtJQTZCbEMsWUFDUyx3QkFBa0QsRUFDbEQsY0FBOEI7UUFEOUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDbkMsQ0FBQztJQWpCTCxJQUFJLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDViwrREFBK0Q7UUFDL0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RSxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1YsK0RBQStEO1FBQy9ELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEUsQ0FBQztJQU9ELGVBQWU7SUFDZixDQUFDO0lBRUQsUUFBUTtRQUNQLE1BQU0sU0FBUyxHQUEyQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkYsTUFBTSxPQUFPLEdBQXVDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNySCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRSxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxzREFBc0Q7UUFDdEQsSUFBSSxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDbEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7NEZBeERXLHNCQUFzQjsyREFBdEIsc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozt3Q0FRTCxnQkFBZ0I7Ozs7Ozs7UUNuQjlDLHdIQUNDO1FBRUQsd0hBQ0M7UUFJRCw4QkFDQztRQUFBLHlGQUFnRztRQUNoRyx3SEFBcUI7UUFDdEIsaUJBQU07UUFDTix5RkFBNEc7Ozs7UUFKdkcsZUFBa0Q7UUFBbEQsNkVBQWtEO1FBQUMsNkNBQTJCO1FBQ3BFLGVBQWlGO1FBQWpGLGdFQUFpRixvRUFBQTtRQUdsRixlQUE2RjtRQUE3RixzRUFBNkYscUVBQUE7O2tEREQ5RixzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSwrQkFBK0I7YUFDNUM7O2tCQUdDLFlBQVk7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBQ3pDLFlBQVk7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBQ3pDLFlBQVk7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBQ3pDLFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFDL0MsU0FBUzttQkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUM1QyxTQUFTO21CQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUN0QyxTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFFNUQsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nRm9yT2ZDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVHlwZSwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLW9wdGlvbic7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4vY29udHJvbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1vdXRsZXQnLFxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbE91dGxldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuXHRAQ29udGVudENoaWxkKCdpbnB1dFJlZicsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0UmVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XG5cdEBDb250ZW50Q2hpbGQoJ2Vycm9yUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgZXJyb3JSZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+Pjtcblx0QENvbnRlbnRDaGlsZCgnbGFiZWxSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBsYWJlbFJlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xuXHRAQ29udGVudENoaWxkKCdkZXNjcmlwdGlvblJlZicsIHsgc3RhdGljOiB0cnVlIH0pIGRlc2NyaXB0aW9uUmVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XG5cdEBWaWV3Q2hpbGQoJ2Rlc2NyaXB0aW9uRGVmJywgeyBzdGF0aWM6IHRydWUgfSkgZGVzY3JpcHRpb25EZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+Pjtcblx0QFZpZXdDaGlsZCgnbGFiZWxEZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBsYWJlbERlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xuXHRAVmlld0NoaWxkKCdvdXRsZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogSUNvbnRyb2xPcHRpb248YW55Pjtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXG5cdHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8Q29udHJvbENvbXBvbmVudD47XG5cblx0Z2V0IGNvbnRleHQoKTogQ29udHJvbE91dGxldENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQgY2xhc3NlcygpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2NvbnRyb2wnLCB0aGlzLm9wdGlvbi5rZXksIHRoaXMuZm9ybS5jb250cm9scyk7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50UmVmID8gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuY2xhc3NlcyA6IG51bGw7XG5cdH1cblxuXHRnZXQgY29udHJvbCgpOiBBYnN0cmFjdENvbnRyb2wge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdjb250cm9sJywgdGhpcy5vcHRpb24ua2V5LCB0aGlzLmZvcm0uY29udHJvbHMpO1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudFJlZiA/IHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbnRyb2wgOiBudWxsO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRwcml2YXRlIGNvbnRyb2xTZXJ2aWNlOiBDb250cm9sU2VydmljZSxcblx0KSB7IH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zdCBjb21wb25lbnQ6IFR5cGU8Q29udHJvbENvbXBvbmVudD4gPSB0aGlzLmNvbnRyb2xTZXJ2aWNlLnJlc29sdmUodGhpcy5vcHRpb24pO1xuXHRcdGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8Q29udHJvbENvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG5cdFx0Y29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cdFx0aW5zdGFuY2Uub3B0aW9uID0gdGhpcy5vcHRpb247XG5cdFx0aW5zdGFuY2UuZm9ybSA9IHRoaXMuZm9ybTtcblx0XHRpbnN0YW5jZS5pbnB1dFJlZiA9IHRoaXMuaW5wdXRSZWY7XG5cdFx0aW5zdGFuY2UuZXJyb3JSZWYgPSB0aGlzLmVycm9yUmVmO1xuXHRcdC8vIGluc3RhbmNlLmxhYmVsUmVmID0gdGhpcy5sYWJlbFJlZiB8fCB0aGlzLmxhYmVsRGVmO1xuXHRcdGlmICh0eXBlb2YgaW5zdGFuY2VbJ0NvbnRyb2xJbml0J10gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGluc3RhbmNlWydDb250cm9sSW5pdCddKCk7XG5cdFx0fVxuXHRcdHRoaXMuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuXHR9XG5cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjbGFiZWxEZWYgbGV0LWNvbnRleHQ+XHJcblx0PGxhYmVsIGNsYXNzPVwiY29udHJvbF9fbGFiZWwgY29udHJvbF9fbGFiZWwtLXt7Y29udGV4dC5vcHRpb24uc2NoZW1hfX1cIiBbYXR0ci5mb3JdPVwiY29udGV4dC5vcHRpb24ua2V5XCI+e3sgY29udGV4dC5vcHRpb24ubGFiZWwgfCBsYWJlbCB9fTwvbGFiZWw+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxuZy10ZW1wbGF0ZSAjZGVzY3JpcHRpb25EZWYgbGV0LWNvbnRleHQ+XHJcblx0PGRpdiBjbGFzcz1cImNvbnRyb2xfX2Rlc2NyaXB0aW9uIGNvbnRyb2xfX2Rlc2NyaXB0aW9uLS17e2NvbnRleHQub3B0aW9uLnNjaGVtYX19XCIgKm5nSWY9XCJjb250ZXh0Lm9wdGlvbi5kZXNjcmlwdGlvblwiPlxyXG5cdFx0e3sgY29udGV4dC5vcHRpb24uZGVzY3JpcHRpb24gfCBsYWJlbCB9fVxyXG5cdDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwiY29udHJvbCBjb250cm9sLS17e2NvbnRleHQub3B0aW9uLnNjaGVtYX19XCIgW25nQ2xhc3NdPVwiY29udGV4dC5jbGFzc2VzXCI+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQubGFiZWxSZWYgfHwgbGFiZWxEZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuXHQ8bmctdGVtcGxhdGUgI291dGxldD48L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRleHQuZGVzY3JpcHRpb25SZWYgfHwgZGVzY3JpcHRpb25EZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0IH1cIj48L25nLWNvbnRhaW5lcj5cclxuIl19