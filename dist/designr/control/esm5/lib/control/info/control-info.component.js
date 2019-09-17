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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9pbmZvL2NvbnRyb2wtaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFJMEMsZ0RBQWdCO0lBSjFEOztJQTBCQSxDQUFDO0lBbEJBLHNCQUFJLHlDQUFPOzs7O1FBQVg7WUFDQyxPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQU87Ozs7UUFBWDtZQUNDLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBTzs7OztRQUFYO1lBUUMsT0FBTyxFQUFFLENBQUM7UUFDWCxDQUFDOzs7T0FBQTs7Z0JBekJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyw2ZEFBMEM7aUJBQzFDOzs7eUJBR0MsS0FBSzs7SUFvQlAsMkJBQUM7Q0FBQSxBQTFCRCxDQUkwQyxnQkFBZ0IsR0FzQnpEO1NBdEJZLG9CQUFvQjs7O0lBRWhDLHNDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sSW5mbyB9IGZyb20gJy4vY29udHJvbC1pbmZvJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1pbmZvLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1pbmZvLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbEluZm9Db21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xJbmZvO1xuXG5cdGdldCBjb250cm9sKCk6IEFic3RyYWN0Q29udHJvbCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRnZXQgaXNWYWxpZCgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGdldCBjbGFzc2VzKCk6IHtcblx0XHR2YWxpZD86IGJvb2xlYW4sXG5cdFx0aW52YWxpZD86IGJvb2xlYW4sXG5cdFx0ZGlydHk/OiBib29sZWFuLFxuXHRcdGVtcHR5PzogYm9vbGVhbixcblx0XHRyZXF1aXJlZD86IGJvb2xlYW4sXG5cdFx0ZGlzYWJsZWQ/OiBib29sZWFuXG5cdH0ge1xuXHRcdHJldHVybiB7fTtcblx0fVxufVxuIl19