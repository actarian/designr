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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9pbmZvL2NvbnRyb2wtaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU03QyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZ0JBQWdCOzs7O0lBSXpELElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQVFWLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7O1lBekJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyw2ZEFBMEM7YUFDMUM7OztxQkFHQyxLQUFLOzs7O0lBQU4sc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xJbmZvIH0gZnJvbSAnLi9jb250cm9sLWluZm8nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLWluZm8tY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLWluZm8uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sSW5mb0NvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbEluZm87XG5cblx0Z2V0IGNvbnRyb2woKTogQWJzdHJhY3RDb250cm9sIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGdldCBpc1ZhbGlkKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Z2V0IGNsYXNzZXMoKToge1xuXHRcdHZhbGlkPzogYm9vbGVhbixcblx0XHRpbnZhbGlkPzogYm9vbGVhbixcblx0XHRkaXJ0eT86IGJvb2xlYW4sXG5cdFx0ZW1wdHk/OiBib29sZWFuLFxuXHRcdHJlcXVpcmVkPzogYm9vbGVhbixcblx0XHRkaXNhYmxlZD86IGJvb2xlYW5cblx0fSB7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59XG4iXX0=