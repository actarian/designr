/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlInfo } from './control-info';
export class ControlInfoComponent extends ControlComponent {
    /**
     * @return {?}
     */
    get control() {
        return null;
    }
    /**
     * @return {?}
     */
    get isValid() {
        return true;
    }
    /**
     * @return {?}
     */
    get classes() {
        return {};
    }
}
ControlInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-info-component',
                template: "<ng-container [formGroup]=\"form\">\r\n\t<ng-template #inputDef let-context>\r\n\t\t<div class=\"control__title\" *ngIf=\"context.option.title\">{{ context.option.title | label }}</div>\r\n\t\t<div class=\"control__abstract\" *ngIf=\"context.option.abstract\">{{ context.option.abstract | label }}</div>\r\n\t</ng-template>\r\n\t<ng-container *ngTemplateOutlet=\"context.inputRef || inputDef; context: { $implicit: context }\"></ng-container>\r\n</ng-container>\r\n"
            }] }
];
ControlInfoComponent.propDecorators = {
    option: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlInfoComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9pbmZvL2NvbnRyb2wtaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU03QyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZ0JBQWdCOzs7O0lBSXpELElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQVFWLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7O1lBekJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyw2ZEFBMEM7YUFDMUM7OztxQkFHQyxLQUFLOzs7O0lBQU4sc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xJbmZvIH0gZnJvbSAnLi9jb250cm9sLWluZm8nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjb250cm9sLWluZm8tY29tcG9uZW50JyxcclxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtaW5mby5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sSW5mb0NvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xyXG5cclxuXHRASW5wdXQoKSBvcHRpb246IENvbnRyb2xJbmZvO1xyXG5cclxuXHRnZXQgY29udHJvbCgpOiBBYnN0cmFjdENvbnRyb2wge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRnZXQgaXNWYWxpZCgpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNsYXNzZXMoKToge1xyXG5cdFx0dmFsaWQ/OiBib29sZWFuLFxyXG5cdFx0aW52YWxpZD86IGJvb2xlYW4sXHJcblx0XHRkaXJ0eT86IGJvb2xlYW4sXHJcblx0XHRlbXB0eT86IGJvb2xlYW4sXHJcblx0XHRyZXF1aXJlZD86IGJvb2xlYW4sXHJcblx0XHRkaXNhYmxlZD86IGJvb2xlYW5cclxuXHR9IHtcclxuXHRcdHJldHVybiB7fTtcclxuXHR9XHJcbn1cclxuIl19