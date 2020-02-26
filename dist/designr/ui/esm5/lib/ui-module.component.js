import { Component } from '@angular/core';
import * as i0 from "@angular/core";
var UIModuleComponent = /** @class */ (function () {
    function UIModuleComponent() {
        this.version = '0.0.12';
    }
    UIModuleComponent.prototype.ngOnInit = function () {
    };
    UIModuleComponent.ɵfac = function UIModuleComponent_Factory(t) { return new (t || UIModuleComponent)(); };
    UIModuleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UIModuleComponent, selectors: [["ui-module"]], decls: 2, vars: 1, consts: [[1, "ui-module"]], template: function UIModuleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("ui ", ctx.version, "");
        } }, encapsulation: 2 });
    return UIModuleComponent;
}());
export { UIModuleComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UIModuleComponent, [{
        type: Component,
        args: [{
                selector: 'ui-module',
                template: "<span class=\"ui-module\">ui {{version}}</span>",
                styles: []
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbW9kdWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpLW1vZHVsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFFbEQ7SUFTQztRQUZBLFlBQU8sR0FBVyxRQUFRLENBQUM7SUFFWCxDQUFDO0lBRWpCLG9DQUFRLEdBQVI7SUFDQSxDQUFDO3NGQVBXLGlCQUFpQjswREFBakIsaUJBQWlCO1lBSGxCLCtCQUF3QjtZQUFBLFlBQWM7WUFBQSxpQkFBTzs7WUFBckIsZUFBYztZQUFkLDZDQUFjOzs0QkFKbEQ7Q0FnQkMsQUFkRCxJQWNDO1NBVFksaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsaURBQStDO2dCQUN6RCxNQUFNLEVBQUUsRUFBRTthQUNWIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAndWktbW9kdWxlJyxcblx0dGVtcGxhdGU6IGA8c3BhbiBjbGFzcz1cInVpLW1vZHVsZVwiPnVpIHt7dmVyc2lvbn19PC9zcGFuPmAsXG5cdHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVUlNb2R1bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHZlcnNpb246IHN0cmluZyA9ICcwLjAuMTInO1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxufVxuIl19