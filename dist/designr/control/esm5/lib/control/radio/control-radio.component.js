/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlRadio } from './control-radio';
var ControlRadioComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlRadioComponent, _super);
    function ControlRadioComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-radio-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-template #inputDef let-context>\r\n\t\t<label class=\"control__group control__group--radio\">\r\n\t\t\t<input class=\"control__radio\" type=\"radio\" [id]=\"context.option.key\" [formControlName]=\"context.option.key\">\r\n\t\t\t<span class=\"control__info\">{{ context.option.info | label }}</span>\r\n\t\t</label>\r\n\t</ng-template>\r\n\t<ng-template #errorDef let-context>\r\n\t\t<div class=\"control__error control__error--radio\" *ngIf=\"context.control.invalid && (context.control.dirty || context.control.touched)\">\r\n\t\t\t<div *ngIf=\"context.control.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n\t<ng-container *ngTemplateOutlet=\"context.errorRef || errorDef; context: { $implicit: context }\"></ng-container>\r\n</ng-container>\r\n"
                }] }
    ];
    ControlRadioComponent.propDecorators = {
        option: [{ type: Input }]
    };
    return ControlRadioComponent;
}(ControlComponent));
export { ControlRadioComponent };
if (false) {
    /** @type {?} */
    ControlRadioComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1yYWRpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvcmFkaW8vY29udHJvbC1yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0M7SUFJMkMsaURBQWdCO0lBSjNEOztJQVFBLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO29CQUNuQywwOEJBQTJDO2lCQUMzQzs7O3lCQUdDLEtBQUs7O0lBRVAsNEJBQUM7Q0FBQSxBQVJELENBSTJDLGdCQUFnQixHQUkxRDtTQUpZLHFCQUFxQjs7O0lBRWpDLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFJhZGlvIH0gZnJvbSAnLi9jb250cm9sLXJhZGlvJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnY29udHJvbC1yYWRpby1jb21wb25lbnQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1yYWRpby5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sUmFkaW9Db21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IHtcclxuXHJcblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sUmFkaW87XHJcblxyXG59XHJcbiJdfQ==