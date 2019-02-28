/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlNumber } from './control-number';
var ControlNumberComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlNumberComponent, _super);
    function ControlNumberComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.renderer = renderer;
        return _this;
    }
    ControlNumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-number-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t<input class=\"form-control\" placeholder=\"{{ control.placeholder | label }}\" [id]=\"control.key\" [type]=\"control.type\" [attr.step]=\"control.step\" (input)=\"onInput($event)\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [value]=\"getFormattedValue()\">\r\n\t<div class=\"alert alert--danger\" *ngIf=\"controlRef.invalid && (controlRef.dirty || controlRef.touched)\">\r\n\t\t<div *ngIf=\"controlRef.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.min\">{{ 'errors.min' | label : null : { min: control.min } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.max\">{{ 'errors.max' | label : null : { max: control.max } }}</div>\r\n\t</div>\r\n</ng-container>\r\n",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return ControlNumberComponent; }),
                            multi: true,
                        }]
                }] }
    ];
    /** @nocollapse */
    ControlNumberComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    ControlNumberComponent.propDecorators = {
        control: [{ type: Input }]
    };
    return ControlNumberComponent;
}(ControlBaseComponent));
export { ControlNumberComponent };
if (false) {
    /** @type {?} */
    ControlNumberComponent.prototype.control;
    /**
     * @type {?}
     * @protected
     */
    ControlNumberComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1udW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL251bWJlci9jb250cm9sLW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFTNEMsa0RBQW9CO0lBSS9ELGdDQUNXLFFBQW1CO1FBRDlCLFlBR0Msa0JBQU0sUUFBUSxDQUFDLFNBQ2Y7UUFIVSxjQUFRLEdBQVIsUUFBUSxDQUFXOztJQUc5QixDQUFDOztnQkFqQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLG0yQkFBOEM7b0JBQzlDLFNBQVMsRUFBRSxDQUFDOzRCQUNYLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixDQUFDOzRCQUNyRCxLQUFLLEVBQUUsSUFBSTt5QkFDWCxDQUFDO2lCQUNGOzs7O2dCQWJzQyxTQUFTOzs7MEJBZ0I5QyxLQUFLOztJQVFQLDZCQUFDO0NBQUEsQUFuQkQsQ0FTNEMsb0JBQW9CLEdBVS9EO1NBVlksc0JBQXNCOzs7SUFFbEMseUNBQWdDOzs7OztJQUcvQiwwQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9jb250cm9sLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xOdW1iZXIgfSBmcm9tICcuL2NvbnRyb2wtbnVtYmVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1udW1iZXItY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2NvbnRyb2wtbnVtYmVyLmNvbXBvbmVudC5odG1sJyxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbnRyb2xOdW1iZXJDb21wb25lbnQpLFxuXHRcdG11bHRpOiB0cnVlLFxuXHR9XSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbE51bWJlckNvbXBvbmVudCBleHRlbmRzIENvbnRyb2xCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG5cdEBJbnB1dCgpIGNvbnRyb2w6IENvbnRyb2xOdW1iZXI7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjJcblx0KSB7XG5cdFx0c3VwZXIocmVuZGVyZXIpO1xuXHR9XG5cbn1cbiJdfQ==