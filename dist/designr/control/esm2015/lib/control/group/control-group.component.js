/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlGroup } from './control-group';
export class ControlGroupComponent extends ControlComponent {
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
if (false) {
    /** @type {?} */
    ControlGroupComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvZ3JvdXAvY29udHJvbC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0vQyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZ0JBQWdCOzs7WUFKMUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLDI5QkFBMkM7YUFDM0M7OztxQkFFQyxLQUFLOzs7O0lBQU4sdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sR3JvdXAgfSBmcm9tICcuL2NvbnRyb2wtZ3JvdXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjb250cm9sLWdyb3VwLWNvbXBvbmVudCcsXHJcblx0dGVtcGxhdGVVcmw6ICdjb250cm9sLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xHcm91cENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpIG9wdGlvbjogQ29udHJvbEdyb3VwO1xyXG59XHJcbiJdfQ==