import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./control-outlet.component";
function ControlsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "control-outlet", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r195 = ctx.$implicit;
    const ctx_r194 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("fieldset__field fieldset__field--", option_r195.schema, "");
    i0.ɵɵproperty("option", option_r195)("form", ctx_r194.form);
} }
export class ControlsComponent extends DisposableComponent {
}
ControlsComponent.ɵfac = function ControlsComponent_Factory(t) { return ɵControlsComponent_BaseFactory(t || ControlsComponent); };
ControlsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlsComponent, selectors: [["controls-component"]], inputs: { options: "options", form: "form" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "option", "form"]], template: function ControlsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ControlsComponent_ng_container_0_Template, 2, 5, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [i1.NgForOf, i2.ControlOutletComponent], encapsulation: 2 });
const ɵControlsComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ControlsComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlsComponent, [{
        type: Component,
        args: [{
                selector: 'controls-component',
                templateUrl: 'controls.component.html',
            }]
    }], null, { options: [{
            type: Input
        }], form: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2xzLmNvbXBvbmVudC50cyIsImxpYi9jb250cm9sL2NvbnRyb2xzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDSHBELDZCQUNDO0lBQUEsb0NBUWlCO0lBQ2xCLDBCQUFlOzs7O0lBVEUsZUFBMEQ7SUFBMUQsc0ZBQTBEO0lBQUMsb0NBQWlCLHVCQUFBOztBRFM3RixNQUFNLE9BQU8saUJBQWtCLFNBQVEsbUJBQW1COzs0R0FBN0MsaUJBQWlCO3NEQUFqQixpQkFBaUI7UUNWOUIsb0ZBQ0M7O1FBRGEscUNBQThCOztnRURVL0IsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FKN0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSx5QkFBeUI7YUFDdEM7O2tCQUVDLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLW9wdGlvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2xzLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbHMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sc0NvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXHRASW5wdXQoKSBvcHRpb25zOiBJQ29udHJvbE9wdGlvbjxhbnk+W107XG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbn1cbiIsIjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+XHJcblx0PGNvbnRyb2wtb3V0bGV0IGNsYXNzPVwiZmllbGRzZXRfX2ZpZWxkIGZpZWxkc2V0X19maWVsZC0te3tvcHRpb24uc2NoZW1hfX1cIiBbb3B0aW9uXT1cIm9wdGlvblwiIFtmb3JtXT1cImZvcm1cIj5cclxuXHRcdDwhLS1cclxuXHRcdDxuZy10ZW1wbGF0ZSAjZXJyb3JSZWYgbGV0LWNvbnRleHQ+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250cm9sX19lcnJvciBjb250cm9sX19lcnJvci0te3tjb250ZXh0Lm9wdGlvbi5zY2hlbWF9fVwiPlxyXG5cdFx0XHRcdEFBQVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHQtLT5cclxuXHQ8L2NvbnRyb2wtb3V0bGV0PlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19