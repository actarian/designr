import { Component } from '@angular/core';
import * as i0 from "@angular/core";
var EditorModuleComponent = /** @class */ (function () {
    function EditorModuleComponent() {
        this.version = '0.0.12';
    }
    EditorModuleComponent.prototype.ngOnInit = function () {
    };
    EditorModuleComponent.ɵfac = function EditorModuleComponent_Factory(t) { return new (t || EditorModuleComponent)(); };
    EditorModuleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditorModuleComponent, selectors: [["editor-module"]], decls: 2, vars: 1, consts: [[1, "editor-module"]], template: function EditorModuleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("editor ", ctx.version, "");
        } }, encapsulation: 2 });
    return EditorModuleComponent;
}());
export { EditorModuleComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EditorModuleComponent, [{
        type: Component,
        args: [{
                selector: 'editor-module',
                template: "<span class=\"editor-module\">editor {{version}}</span>",
                styles: []
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLW1vZHVsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvZWRpdG9yLW1vZHVsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFFbEQ7SUFTQztRQUZBLFlBQU8sR0FBVyxRQUFRLENBQUM7SUFFWCxDQUFDO0lBRWpCLHdDQUFRLEdBQVI7SUFDQSxDQUFDOzhGQVBXLHFCQUFxQjs4REFBckIscUJBQXFCO1lBSHRCLCtCQUE0QjtZQUFBLFlBQWtCO1lBQUEsaUJBQU87O1lBQXpCLGVBQWtCO1lBQWxCLGlEQUFrQjs7Z0NBSjFEO0NBa0JDLEFBaEJELElBZ0JDO1NBWFkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUseURBQXVEO2dCQUNqRSxNQUFNLEVBQUUsRUFBRTthQUNWIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZWRpdG9yLW1vZHVsZScsXG5cdHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJlZGl0b3ItbW9kdWxlXCI+ZWRpdG9yIHt7dmVyc2lvbn19PC9zcGFuPmAsXG5cdHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgRWRpdG9yTW9kdWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHR2ZXJzaW9uOiBzdHJpbmcgPSAnMC4wLjEyJztcblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cblx0Ly8gPG5nLWNvbnRhaW5lciBsb2FkTW9kdWxlPVwid2lkZ2V0U2V0dGluZ3NcIj48L25nLWNvbnRhaW5lcj5cblxufVxuIl19