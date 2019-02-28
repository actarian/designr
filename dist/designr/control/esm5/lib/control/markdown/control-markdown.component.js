/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlMarkdown } from './control-markdown';
var ControlMarkdownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ControlMarkdownComponent, _super);
    function ControlMarkdownComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.renderer = renderer;
        return _this;
    }
    ControlMarkdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-markdown-component',
                    template: "<ng-container [formGroup]=\"form\">\r\n\t<label class=\"form-label\" [attr.for]=\"control.key\">{{ control.label | label }}</label>\r\n\t<textarea class=\"form-control\" placeholder=\"{{ control.placeholder | label }}\" [id]=\"control.key\" [formControlName]=\"control.key\" rows=\"4\"></textarea>\r\n\t<div class=\"alert alert--danger\" *ngIf=\"controlRef.invalid && (controlRef.dirty || controlRef.touched)\">\r\n\t\t<div *ngIf=\"controlRef.errors.required\">{{ 'errors.required' | label }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.minlength\">{{ 'errors.minlength' | label : null : { minlength: control.minlength } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.maxlength\">{{ 'errors.maxlength' | label : null : { maxlength: control.maxlength } }}</div>\r\n\t</div>\r\n</ng-container>\r\n",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return ControlMarkdownComponent; }),
                            multi: true,
                        }]
                }] }
    ];
    /** @nocollapse */
    ControlMarkdownComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    ControlMarkdownComponent.propDecorators = {
        control: [{ type: Input }]
    };
    return ControlMarkdownComponent;
}(ControlBaseComponent));
export { ControlMarkdownComponent };
if (false) {
    /** @type {?} */
    ControlMarkdownComponent.prototype.control;
    /**
     * @type {?}
     * @protected
     */
    ControlMarkdownComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1tYXJrZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvbWFya2Rvd24vY29udHJvbC1tYXJrZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQ7SUFTOEMsb0RBQW9CO0lBSWpFLGtDQUNXLFFBQW1CO1FBRDlCLFlBR0Msa0JBQU0sUUFBUSxDQUFDLFNBQ2Y7UUFIVSxjQUFRLEdBQVIsUUFBUSxDQUFXOztJQUc5QixDQUFDOztnQkFqQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLHV5QkFBZ0Q7b0JBQ2hELFNBQVMsRUFBRSxDQUFDOzRCQUNYLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHdCQUF3QixFQUF4QixDQUF3QixDQUFDOzRCQUN2RCxLQUFLLEVBQUUsSUFBSTt5QkFDWCxDQUFDO2lCQUNGOzs7O2dCQWJzQyxTQUFTOzs7MEJBZ0I5QyxLQUFLOztJQVFQLCtCQUFDO0NBQUEsQUFuQkQsQ0FTOEMsb0JBQW9CLEdBVWpFO1NBVlksd0JBQXdCOzs7SUFFcEMsMkNBQWtDOzs7OztJQUdqQyw0Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9jb250cm9sLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xNYXJrZG93biB9IGZyb20gJy4vY29udHJvbC1tYXJrZG93bic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRyb2wtbWFya2Rvd24tY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2NvbnRyb2wtbWFya2Rvd24uY29tcG9uZW50Lmh0bWwnLFxuXHRwcm92aWRlcnM6IFt7XG5cdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29udHJvbE1hcmtkb3duQ29tcG9uZW50KSxcblx0XHRtdWx0aTogdHJ1ZSxcblx0fV0sXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xNYXJrZG93bkNvbXBvbmVudCBleHRlbmRzIENvbnRyb2xCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG5cdEBJbnB1dCgpIGNvbnRyb2w6IENvbnRyb2xNYXJrZG93bjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMlxuXHQpIHtcblx0XHRzdXBlcihyZW5kZXJlcik7XG5cdH1cblxufVxuIl19