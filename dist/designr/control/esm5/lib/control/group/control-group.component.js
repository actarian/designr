/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlGroup } from './control-group';
var ControlGroupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlGroupComponent, _super);
    function ControlGroupComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-group-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-template #inputDef let-context>\r\n\t\t<div class=\"control__title\" *ngIf=\"context.option.title\">{{ context.option.title | label }}</div>\r\n\t\t<div class=\"control__abstract\" *ngIf=\"context.option.abstract\">{{ context.option.abstract | label }}</div>\r\n\t\t<div class=\"fieldset\" *ngIf=\"context.option.options.length\">\r\n\t\t\t<ng-container *ngFor=\"let option of context.option.options\">\r\n\t\t\t\t<control-outlet class=\"fieldset__field fieldset__field--{{option.schema}}\" [option]=\"option\" [form]=\"context.control\"></control-outlet>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-template #errorDef let-context></ng-template>\r\n\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n</ng-container>\r\n"
                }] }
    ];
    ControlGroupComponent.propDecorators = {
        option: [{ type: Input }]
    };
    return ControlGroupComponent;
}(ControlComponent));
export { ControlGroupComponent };
if (false) {
    /** @type {?} */
    ControlGroupComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvZ3JvdXAvY29udHJvbC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0M7SUFJMkMsaURBQWdCO0lBSjNEOztJQU1BLENBQUM7O2dCQU5BLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO29CQUNuQywyOUJBQTJDO2lCQUMzQzs7O3lCQUVDLEtBQUs7O0lBQ1AsNEJBQUM7Q0FBQSxBQU5ELENBSTJDLGdCQUFnQixHQUUxRDtTQUZZLHFCQUFxQjs7O0lBQ2pDLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbEdyb3VwIH0gZnJvbSAnLi9jb250cm9sLWdyb3VwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnY29udHJvbC1ncm91cC1jb21wb25lbnQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xHcm91cDtcclxufVxyXG4iXX0=