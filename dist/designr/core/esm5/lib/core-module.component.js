import { Component } from '@angular/core';
import * as i0 from "@angular/core";
var CoreModuleComponent = /** @class */ (function () {
    function CoreModuleComponent() {
        this.version = '0.0.12';
    }
    CoreModuleComponent.prototype.ngOnInit = function () {
    };
    CoreModuleComponent.ɵfac = function CoreModuleComponent_Factory(t) { return new (t || CoreModuleComponent)(); };
    CoreModuleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CoreModuleComponent, selectors: [["core-module"]], decls: 2, vars: 1, consts: [[1, "core-module"]], template: function CoreModuleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("core ", ctx.version, "");
        } }, encapsulation: 2 });
    return CoreModuleComponent;
}());
export { CoreModuleComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CoreModuleComponent, [{
        type: Component,
        args: [{
                selector: 'core-module',
                template: "<span class=\"core-module\">core {{version}}</span>",
                styles: []
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1tb2R1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLW1vZHVsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFFbEQ7SUFTQztRQUZBLFlBQU8sR0FBVyxRQUFRLENBQUM7SUFFWCxDQUFDO0lBRWpCLHNDQUFRLEdBQVI7SUFDQSxDQUFDOzBGQVBXLG1CQUFtQjs0REFBbkIsbUJBQW1CO1lBSHBCLCtCQUEwQjtZQUFBLFlBQWdCO1lBQUEsaUJBQU87O1lBQXZCLGVBQWdCO1lBQWhCLCtDQUFnQjs7OEJBSnREO0NBZ0JDLEFBZEQsSUFjQztTQVRZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLHFEQUFtRDtnQkFDN0QsTUFBTSxFQUFFLEVBQUU7YUFDViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtbW9kdWxlJyxcblx0dGVtcGxhdGU6IGA8c3BhbiBjbGFzcz1cImNvcmUtbW9kdWxlXCI+Y29yZSB7e3ZlcnNpb259fTwvc3Bhbj5gLFxuXHRzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHZlcnNpb246IHN0cmluZyA9ICcwLjAuMTInO1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxufVxuIl19