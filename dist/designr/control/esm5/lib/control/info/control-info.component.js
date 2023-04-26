/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlInfo } from './control-info';
var ControlInfoComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlInfoComponent, _super);
    function ControlInfoComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlInfoComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlInfoComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlInfoComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    ControlInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-info-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-template #inputDef let-context>\r\n\t\t<div class=\"control__title\" *ngIf=\"context.option.title\">{{ context.option.title | label }}</div>\r\n\t\t<div class=\"control__abstract\" *ngIf=\"context.option.abstract\">{{ context.option.abstract | label }}</div>\r\n\t</ng-template>\r\n\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n</ng-container>\r\n"
                }] }
    ];
    ControlInfoComponent.propDecorators = {
        option: [{ type: Input }]
    };
    return ControlInfoComponent;
}(ControlComponent));
export { ControlInfoComponent };
if (false) {
    /** @type {?} */
    ControlInfoComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9pbmZvL2NvbnRyb2wtaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFJMEMsZ0RBQWdCO0lBSjFEOztJQTBCQSxDQUFDO0lBbEJBLHNCQUFJLHlDQUFPOzs7O1FBQVg7WUFDQyxPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQU87Ozs7UUFBWDtZQUNDLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBTzs7OztRQUFYO1lBUUMsT0FBTyxFQUFFLENBQUM7UUFDWCxDQUFDOzs7T0FBQTs7Z0JBekJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyw2ZEFBMEM7aUJBQzFDOzs7eUJBR0MsS0FBSzs7SUFvQlAsMkJBQUM7Q0FBQSxBQTFCRCxDQUkwQyxnQkFBZ0IsR0FzQnpEO1NBdEJZLG9CQUFvQjs7O0lBRWhDLHNDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sSW5mbyB9IGZyb20gJy4vY29udHJvbC1pbmZvJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnY29udHJvbC1pbmZvLWNvbXBvbmVudCcsXHJcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLWluZm8uY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbEluZm9Db21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IHtcclxuXHJcblx0QElucHV0KCkgb3B0aW9uOiBDb250cm9sSW5mbztcclxuXHJcblx0Z2V0IGNvbnRyb2woKTogQWJzdHJhY3RDb250cm9sIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0Z2V0IGlzVmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldCBjbGFzc2VzKCk6IHtcclxuXHRcdHZhbGlkPzogYm9vbGVhbixcclxuXHRcdGludmFsaWQ/OiBib29sZWFuLFxyXG5cdFx0ZGlydHk/OiBib29sZWFuLFxyXG5cdFx0ZW1wdHk/OiBib29sZWFuLFxyXG5cdFx0cmVxdWlyZWQ/OiBib29sZWFuLFxyXG5cdFx0ZGlzYWJsZWQ/OiBib29sZWFuXHJcblx0fSB7XHJcblx0XHRyZXR1cm4ge307XHJcblx0fVxyXG59XHJcbiJdfQ==