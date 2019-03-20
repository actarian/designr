/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlSelect } from './control-select';
var ControlSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlSelectComponent, _super);
    function ControlSelectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-select-component',
                    template: "<div class=\"form-select\" [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"option.key\">{{ option.label | label }}</label>\r\n\t<select class=\"form-select__select\" [id]=\"option.key\" [formControlName]=\"option.key\">\r\n\t\t<option *ngFor=\"let item of option.options\" [ngValue]=\"item?.value\">{{item?.label}}</option>\r\n\t</select>\r\n\t<div class=\"alert alert--danger\" *ngIf=\"control.invalid && (control.dirty || control.touched)\">\r\n\t\t<div *ngIf=\"control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t</div>\r\n</div>\r\n"
                }] }
    ];
    ControlSelectComponent.propDecorators = {
        option: [{ type: Input }]
    };
    return ControlSelectComponent;
}(ControlComponent));
export { ControlSelectComponent };
if (false) {
    /** @type {?} */
    ControlSelectComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFJNEMsa0RBQWdCO0lBSjVEOztJQVFBLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyx5a0JBQTRDO2lCQUM1Qzs7O3lCQUdDLEtBQUs7O0lBRVAsNkJBQUM7Q0FBQSxBQVJELENBSTRDLGdCQUFnQixHQUkzRDtTQUpZLHNCQUFzQjs7O0lBRWxDLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sU2VsZWN0IH0gZnJvbSAnLi9jb250cm9sLXNlbGVjdCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtc2VsZWN0LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbXBvbmVudCB7XG5cblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sU2VsZWN0O1xuXG59XG4iXX0=