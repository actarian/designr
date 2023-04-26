/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { ControlCheckbox } from '../control/checkbox/control-checkbox';
import { ControlCheckboxComponent } from '../control/checkbox/control-checkbox.component';
import { ControlEmail } from '../control/email/control-email';
import { ControlEmailComponent } from '../control/email/control-email.component';
import { ControlGroup } from '../control/group/control-group';
import { ControlGroupComponent } from '../control/group/control-group.component';
import { ControlInfo } from '../control/info/control-info';
import { ControlInfoComponent } from '../control/info/control-info.component';
import { ControlMarkdown } from '../control/markdown/control-markdown';
import { ControlMarkdownComponent } from '../control/markdown/control-markdown.component';
import { ControlNumber } from '../control/number/control-number';
import { ControlNumberComponent } from '../control/number/control-number.component';
import { ControlPassword } from '../control/password/control-password';
import { ControlPasswordComponent } from '../control/password/control-password.component';
import { ControlRadio } from '../control/radio/control-radio';
import { ControlRadioComponent } from '../control/radio/control-radio.component';
import { ControlSelect } from '../control/select/control-select';
import { ControlSelectComponent } from '../control/select/control-select.component';
import { ControlText } from '../control/text/control-text';
import { ControlTextComponent } from '../control/text/control-text.component';
import { ControlTextarea } from '../control/textarea/control-textarea';
import { ControlTextareaComponent } from '../control/textarea/control-textarea.component';
/**
 * @record
 */
export function ControlInterface() { }
if (false) {
    /** @type {?} */
    ControlInterface.prototype.component;
    /** @type {?} */
    ControlInterface.prototype.model;
}
/**
 * @record
 */
export function Controls() { }
/** @type {?} */
export const entryComponents = [
    ControlCheckboxComponent,
    ControlEmailComponent,
    ControlGroupComponent,
    ControlInfoComponent,
    ControlMarkdownComponent,
    ControlNumberComponent,
    ControlPasswordComponent,
    ControlRadioComponent,
    ControlSelectComponent,
    ControlTextComponent,
    ControlTextareaComponent,
];
/** @type {?} */
export const controls = {
    'checkbox': {
        component: ControlCheckboxComponent,
        model: ControlCheckbox
    },
    'email': {
        component: ControlEmailComponent,
        model: ControlEmail
    },
    'group': {
        component: ControlGroupComponent,
        model: ControlGroup
    },
    'info': {
        component: ControlInfoComponent,
        model: ControlInfo
    },
    'markdown': {
        component: ControlMarkdownComponent,
        model: ControlMarkdown
    },
    'number': {
        component: ControlNumberComponent,
        model: ControlNumber
    },
    'password': {
        component: ControlPasswordComponent,
        model: ControlPassword
    },
    'radio': {
        component: ControlRadioComponent,
        model: ControlRadio
    },
    'select': {
        component: ControlSelectComponent,
        model: ControlSelect
    },
    'text': {
        component: ControlTextComponent,
        model: ControlText
    },
    'textarea': {
        component: ControlTextareaComponent,
        model: ControlTextarea
    },
};
export class ControlConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.controls = {};
        // console.log('ControlConfig', options);
        if (options) {
            Object.assign(this, options);
            this.controls = Object.assign({}, controls, (options.controls || {}));
        }
    }
}
if (false) {
    /** @type {?} */
    ControlConfig.prototype.controls;
}
/** @type {?} */
export const CONTROL_CONFIG = new InjectionToken('control.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb250cm9sLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFHMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7O0FBRTFGLHNDQUdDOzs7SUFGQSxxQ0FBa0M7O0lBQ2xDLGlDQUFpQzs7Ozs7QUFHbEMsOEJBQThEOztBQUU5RCxNQUFNLE9BQU8sZUFBZSxHQUFHO0lBQzlCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDeEI7O0FBRUQsTUFBTSxPQUFPLFFBQVEsR0FBYTtJQUNqQyxVQUFVLEVBQUU7UUFDWCxTQUFTLEVBQUUsd0JBQXdCO1FBQ25DLEtBQUssRUFBRSxlQUFlO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxLQUFLLEVBQUUsWUFBWTtLQUNuQjtJQUNELE9BQU8sRUFBRTtRQUNSLFNBQVMsRUFBRSxxQkFBcUI7UUFDaEMsS0FBSyxFQUFFLFlBQVk7S0FDbkI7SUFDRCxNQUFNLEVBQUU7UUFDUCxTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLEtBQUssRUFBRSxXQUFXO0tBQ2xCO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxLQUFLLEVBQUUsZUFBZTtLQUN0QjtJQUNELFFBQVEsRUFBRTtRQUNULFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsS0FBSyxFQUFFLGFBQWE7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDWCxTQUFTLEVBQUUsd0JBQXdCO1FBQ25DLEtBQUssRUFBRSxlQUFlO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxLQUFLLEVBQUUsWUFBWTtLQUNuQjtJQUNELFFBQVEsRUFBRTtRQUNULFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsS0FBSyxFQUFFLGFBQWE7S0FDcEI7SUFDRCxNQUFNLEVBQUU7UUFDUCxTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLEtBQUssRUFBRSxXQUFXO0tBQ2xCO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxLQUFLLEVBQUUsZUFBZTtLQUN0QjtDQUNEO0FBRUQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFJekIsWUFBWSxPQUF1QjtRQUZuQyxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBR3hCLHlDQUF5QztRQUN6QyxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLHFCQUNULFFBQVEsRUFDUixDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQzNCLENBQUM7U0FDRjtJQUNGLENBQUM7Q0FDRDs7O0lBWkEsaUNBQXlCOzs7QUFjMUIsTUFBTSxPQUFPLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBZ0IsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sQ2hlY2tib3ggfSBmcm9tICcuLi9jb250cm9sL2NoZWNrYm94L2NvbnRyb2wtY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBDb250cm9sQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL2NoZWNrYm94L2NvbnRyb2wtY2hlY2tib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbnRyb2xPcHRpb24gfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wtb3B0aW9uJztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sRW1haWwgfSBmcm9tICcuLi9jb250cm9sL2VtYWlsL2NvbnRyb2wtZW1haWwnO1xyXG5pbXBvcnQgeyBDb250cm9sRW1haWxDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL2VtYWlsL2NvbnRyb2wtZW1haWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbEdyb3VwIH0gZnJvbSAnLi4vY29udHJvbC9ncm91cC9jb250cm9sLWdyb3VwJztcclxuaW1wb3J0IHsgQ29udHJvbEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9ncm91cC9jb250cm9sLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xJbmZvIH0gZnJvbSAnLi4vY29udHJvbC9pbmZvL2NvbnRyb2wtaW5mbyc7XHJcbmltcG9ydCB7IENvbnRyb2xJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9pbmZvL2NvbnRyb2wtaW5mby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sTWFya2Rvd24gfSBmcm9tICcuLi9jb250cm9sL21hcmtkb3duL2NvbnRyb2wtbWFya2Rvd24nO1xyXG5pbXBvcnQgeyBDb250cm9sTWFya2Rvd25Db21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL21hcmtkb3duL2NvbnRyb2wtbWFya2Rvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbE51bWJlciB9IGZyb20gJy4uL2NvbnRyb2wvbnVtYmVyL2NvbnRyb2wtbnVtYmVyJztcclxuaW1wb3J0IHsgQ29udHJvbE51bWJlckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvbnVtYmVyL2NvbnRyb2wtbnVtYmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xQYXNzd29yZCB9IGZyb20gJy4uL2NvbnRyb2wvcGFzc3dvcmQvY29udHJvbC1wYXNzd29yZCc7XHJcbmltcG9ydCB7IENvbnRyb2xQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvcGFzc3dvcmQvY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sUmFkaW8gfSBmcm9tICcuLi9jb250cm9sL3JhZGlvL2NvbnRyb2wtcmFkaW8nO1xyXG5pbXBvcnQgeyBDb250cm9sUmFkaW9Db21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3JhZGlvL2NvbnRyb2wtcmFkaW8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFNlbGVjdCB9IGZyb20gJy4uL2NvbnRyb2wvc2VsZWN0L2NvbnRyb2wtc2VsZWN0JztcclxuaW1wb3J0IHsgQ29udHJvbFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvc2VsZWN0L2NvbnRyb2wtc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xUZXh0IH0gZnJvbSAnLi4vY29udHJvbC90ZXh0L2NvbnRyb2wtdGV4dCc7XHJcbmltcG9ydCB7IENvbnRyb2xUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC90ZXh0L2NvbnRyb2wtdGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sVGV4dGFyZWEgfSBmcm9tICcuLi9jb250cm9sL3RleHRhcmVhL2NvbnRyb2wtdGV4dGFyZWEnO1xyXG5pbXBvcnQgeyBDb250cm9sVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3RleHRhcmVhL2NvbnRyb2wtdGV4dGFyZWEuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJvbEludGVyZmFjZSB7XHJcblx0Y29tcG9uZW50OiBUeXBlPENvbnRyb2xDb21wb25lbnQ+O1xyXG5cdG1vZGVsOiBUeXBlPElDb250cm9sT3B0aW9uPGFueT4+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRyb2xzIHsgW2tleTogc3RyaW5nXTogQ29udHJvbEludGVyZmFjZTsgfVxyXG5cclxuZXhwb3J0IGNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtcclxuXHRDb250cm9sQ2hlY2tib3hDb21wb25lbnQsXHJcblx0Q29udHJvbEVtYWlsQ29tcG9uZW50LFxyXG5cdENvbnRyb2xHcm91cENvbXBvbmVudCxcclxuXHRDb250cm9sSW5mb0NvbXBvbmVudCxcclxuXHRDb250cm9sTWFya2Rvd25Db21wb25lbnQsXHJcblx0Q29udHJvbE51bWJlckNvbXBvbmVudCxcclxuXHRDb250cm9sUGFzc3dvcmRDb21wb25lbnQsXHJcblx0Q29udHJvbFJhZGlvQ29tcG9uZW50LFxyXG5cdENvbnRyb2xTZWxlY3RDb21wb25lbnQsXHJcblx0Q29udHJvbFRleHRDb21wb25lbnQsXHJcblx0Q29udHJvbFRleHRhcmVhQ29tcG9uZW50LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRyb2xzOiBDb250cm9scyA9IHtcclxuXHQnY2hlY2tib3gnOiB7XHJcblx0XHRjb21wb25lbnQ6IENvbnRyb2xDaGVja2JveENvbXBvbmVudCxcclxuXHRcdG1vZGVsOiBDb250cm9sQ2hlY2tib3hcclxuXHR9LFxyXG5cdCdlbWFpbCc6IHtcclxuXHRcdGNvbXBvbmVudDogQ29udHJvbEVtYWlsQ29tcG9uZW50LFxyXG5cdFx0bW9kZWw6IENvbnRyb2xFbWFpbFxyXG5cdH0sXHJcblx0J2dyb3VwJzoge1xyXG5cdFx0Y29tcG9uZW50OiBDb250cm9sR3JvdXBDb21wb25lbnQsXHJcblx0XHRtb2RlbDogQ29udHJvbEdyb3VwXHJcblx0fSxcclxuXHQnaW5mbyc6IHtcclxuXHRcdGNvbXBvbmVudDogQ29udHJvbEluZm9Db21wb25lbnQsXHJcblx0XHRtb2RlbDogQ29udHJvbEluZm9cclxuXHR9LFxyXG5cdCdtYXJrZG93bic6IHtcclxuXHRcdGNvbXBvbmVudDogQ29udHJvbE1hcmtkb3duQ29tcG9uZW50LFxyXG5cdFx0bW9kZWw6IENvbnRyb2xNYXJrZG93blxyXG5cdH0sXHJcblx0J251bWJlcic6IHtcclxuXHRcdGNvbXBvbmVudDogQ29udHJvbE51bWJlckNvbXBvbmVudCxcclxuXHRcdG1vZGVsOiBDb250cm9sTnVtYmVyXHJcblx0fSxcclxuXHQncGFzc3dvcmQnOiB7XHJcblx0XHRjb21wb25lbnQ6IENvbnRyb2xQYXNzd29yZENvbXBvbmVudCxcclxuXHRcdG1vZGVsOiBDb250cm9sUGFzc3dvcmRcclxuXHR9LFxyXG5cdCdyYWRpbyc6IHtcclxuXHRcdGNvbXBvbmVudDogQ29udHJvbFJhZGlvQ29tcG9uZW50LFxyXG5cdFx0bW9kZWw6IENvbnRyb2xSYWRpb1xyXG5cdH0sXHJcblx0J3NlbGVjdCc6IHtcclxuXHRcdGNvbXBvbmVudDogQ29udHJvbFNlbGVjdENvbXBvbmVudCxcclxuXHRcdG1vZGVsOiBDb250cm9sU2VsZWN0XHJcblx0fSxcclxuXHQndGV4dCc6IHtcclxuXHRcdGNvbXBvbmVudDogQ29udHJvbFRleHRDb21wb25lbnQsXHJcblx0XHRtb2RlbDogQ29udHJvbFRleHRcclxuXHR9LFxyXG5cdCd0ZXh0YXJlYSc6IHtcclxuXHRcdGNvbXBvbmVudDogQ29udHJvbFRleHRhcmVhQ29tcG9uZW50LFxyXG5cdFx0bW9kZWw6IENvbnRyb2xUZXh0YXJlYVxyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbmZpZyB7XHJcblxyXG5cdGNvbnRyb2xzPzogQ29udHJvbHMgPSB7fTtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IENvbnRyb2xDb25maWcpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQ29uZmlnJywgb3B0aW9ucyk7XHJcblx0XHRpZiAob3B0aW9ucykge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cdFx0XHR0aGlzLmNvbnRyb2xzID0ge1xyXG5cdFx0XHRcdC4uLmNvbnRyb2xzLFxyXG5cdFx0XHRcdC4uLihvcHRpb25zLmNvbnRyb2xzIHx8IHt9KVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRST0xfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPENvbnRyb2xDb25maWc+KCdjb250cm9sLmNvbmZpZycpO1xyXG4iXX0=