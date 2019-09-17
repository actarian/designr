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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb250cm9sLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFHMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7O0FBRTFGLHNDQUdDOzs7SUFGQSxxQ0FBa0M7O0lBQ2xDLGlDQUFpQzs7Ozs7QUFHbEMsOEJBQThEOztBQUU5RCxNQUFNLE9BQU8sZUFBZSxHQUFHO0lBQzlCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDeEI7O0FBRUQsTUFBTSxPQUFPLFFBQVEsR0FBYTtJQUNqQyxVQUFVLEVBQUU7UUFDWCxTQUFTLEVBQUUsd0JBQXdCO1FBQ25DLEtBQUssRUFBRSxlQUFlO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxLQUFLLEVBQUUsWUFBWTtLQUNuQjtJQUNELE9BQU8sRUFBRTtRQUNSLFNBQVMsRUFBRSxxQkFBcUI7UUFDaEMsS0FBSyxFQUFFLFlBQVk7S0FDbkI7SUFDRCxNQUFNLEVBQUU7UUFDUCxTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLEtBQUssRUFBRSxXQUFXO0tBQ2xCO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxLQUFLLEVBQUUsZUFBZTtLQUN0QjtJQUNELFFBQVEsRUFBRTtRQUNULFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsS0FBSyxFQUFFLGFBQWE7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDWCxTQUFTLEVBQUUsd0JBQXdCO1FBQ25DLEtBQUssRUFBRSxlQUFlO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxLQUFLLEVBQUUsWUFBWTtLQUNuQjtJQUNELFFBQVEsRUFBRTtRQUNULFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsS0FBSyxFQUFFLGFBQWE7S0FDcEI7SUFDRCxNQUFNLEVBQUU7UUFDUCxTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLEtBQUssRUFBRSxXQUFXO0tBQ2xCO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxLQUFLLEVBQUUsZUFBZTtLQUN0QjtDQUNEO0FBRUQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFJekIsWUFBWSxPQUF1QjtRQUZuQyxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBR3hCLHlDQUF5QztRQUN6QyxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLHFCQUNULFFBQVEsRUFDUixDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQzNCLENBQUM7U0FDRjtJQUNGLENBQUM7Q0FDRDs7O0lBWkEsaUNBQXlCOzs7QUFjMUIsTUFBTSxPQUFPLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBZ0IsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENoZWNrYm94IH0gZnJvbSAnLi4vY29udHJvbC9jaGVja2JveC9jb250cm9sLWNoZWNrYm94JztcbmltcG9ydCB7IENvbnRyb2xDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvY2hlY2tib3gvY29udHJvbC1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNvbnRyb2xPcHRpb24gfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wtb3B0aW9uJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xFbWFpbCB9IGZyb20gJy4uL2NvbnRyb2wvZW1haWwvY29udHJvbC1lbWFpbCc7XG5pbXBvcnQgeyBDb250cm9sRW1haWxDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL2VtYWlsL2NvbnRyb2wtZW1haWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xHcm91cCB9IGZyb20gJy4uL2NvbnRyb2wvZ3JvdXAvY29udHJvbC1ncm91cCc7XG5pbXBvcnQgeyBDb250cm9sR3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL2dyb3VwL2NvbnRyb2wtZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xJbmZvIH0gZnJvbSAnLi4vY29udHJvbC9pbmZvL2NvbnRyb2wtaW5mbyc7XG5pbXBvcnQgeyBDb250cm9sSW5mb0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvaW5mby9jb250cm9sLWluZm8uY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xNYXJrZG93biB9IGZyb20gJy4uL2NvbnRyb2wvbWFya2Rvd24vY29udHJvbC1tYXJrZG93bic7XG5pbXBvcnQgeyBDb250cm9sTWFya2Rvd25Db21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL21hcmtkb3duL2NvbnRyb2wtbWFya2Rvd24uY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xOdW1iZXIgfSBmcm9tICcuLi9jb250cm9sL251bWJlci9jb250cm9sLW51bWJlcic7XG5pbXBvcnQgeyBDb250cm9sTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9udW1iZXIvY29udHJvbC1udW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xQYXNzd29yZCB9IGZyb20gJy4uL2NvbnRyb2wvcGFzc3dvcmQvY29udHJvbC1wYXNzd29yZCc7XG5pbXBvcnQgeyBDb250cm9sUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3Bhc3N3b3JkL2NvbnRyb2wtcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xSYWRpbyB9IGZyb20gJy4uL2NvbnRyb2wvcmFkaW8vY29udHJvbC1yYWRpbyc7XG5pbXBvcnQgeyBDb250cm9sUmFkaW9Db21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3JhZGlvL2NvbnRyb2wtcmFkaW8uY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xTZWxlY3QgfSBmcm9tICcuLi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250cm9sU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9zZWxlY3QvY29udHJvbC1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xUZXh0IH0gZnJvbSAnLi4vY29udHJvbC90ZXh0L2NvbnRyb2wtdGV4dCc7XG5pbXBvcnQgeyBDb250cm9sVGV4dENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvdGV4dC9jb250cm9sLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xUZXh0YXJlYSB9IGZyb20gJy4uL2NvbnRyb2wvdGV4dGFyZWEvY29udHJvbC10ZXh0YXJlYSc7XG5pbXBvcnQgeyBDb250cm9sVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3RleHRhcmVhL2NvbnRyb2wtdGV4dGFyZWEuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDb250cm9sSW50ZXJmYWNlIHtcblx0Y29tcG9uZW50OiBUeXBlPENvbnRyb2xDb21wb25lbnQ+O1xuXHRtb2RlbDogVHlwZTxJQ29udHJvbE9wdGlvbjxhbnk+Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb250cm9scyB7IFtrZXk6IHN0cmluZ106IENvbnRyb2xJbnRlcmZhY2U7IH1cblxuZXhwb3J0IGNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtcblx0Q29udHJvbENoZWNrYm94Q29tcG9uZW50LFxuXHRDb250cm9sRW1haWxDb21wb25lbnQsXG5cdENvbnRyb2xHcm91cENvbXBvbmVudCxcblx0Q29udHJvbEluZm9Db21wb25lbnQsXG5cdENvbnRyb2xNYXJrZG93bkNvbXBvbmVudCxcblx0Q29udHJvbE51bWJlckNvbXBvbmVudCxcblx0Q29udHJvbFBhc3N3b3JkQ29tcG9uZW50LFxuXHRDb250cm9sUmFkaW9Db21wb25lbnQsXG5cdENvbnRyb2xTZWxlY3RDb21wb25lbnQsXG5cdENvbnRyb2xUZXh0Q29tcG9uZW50LFxuXHRDb250cm9sVGV4dGFyZWFDb21wb25lbnQsXG5dO1xuXG5leHBvcnQgY29uc3QgY29udHJvbHM6IENvbnRyb2xzID0ge1xuXHQnY2hlY2tib3gnOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sQ2hlY2tib3hDb21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xDaGVja2JveFxuXHR9LFxuXHQnZW1haWwnOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sRW1haWxDb21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xFbWFpbFxuXHR9LFxuXHQnZ3JvdXAnOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sR3JvdXBDb21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xHcm91cFxuXHR9LFxuXHQnaW5mbyc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xJbmZvQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sSW5mb1xuXHR9LFxuXHQnbWFya2Rvd24nOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sTWFya2Rvd25Db21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xNYXJrZG93blxuXHR9LFxuXHQnbnVtYmVyJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbE51bWJlckNvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbE51bWJlclxuXHR9LFxuXHQncGFzc3dvcmQnOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sUGFzc3dvcmRDb21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xQYXNzd29yZFxuXHR9LFxuXHQncmFkaW8nOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sUmFkaW9Db21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xSYWRpb1xuXHR9LFxuXHQnc2VsZWN0Jzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbFNlbGVjdENvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbFNlbGVjdFxuXHR9LFxuXHQndGV4dCc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xUZXh0Q29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sVGV4dFxuXHR9LFxuXHQndGV4dGFyZWEnOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sVGV4dGFyZWFDb21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xUZXh0YXJlYVxuXHR9LFxufTtcblxuZXhwb3J0IGNsYXNzIENvbnRyb2xDb25maWcge1xuXG5cdGNvbnRyb2xzPzogQ29udHJvbHMgPSB7fTtcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogQ29udHJvbENvbmZpZykge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQ29uZmlnJywgb3B0aW9ucyk7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0XHR0aGlzLmNvbnRyb2xzID0ge1xuXHRcdFx0XHQuLi5jb250cm9scyxcblx0XHRcdFx0Li4uKG9wdGlvbnMuY29udHJvbHMgfHwge30pXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY29uc3QgQ09OVFJPTF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29udHJvbENvbmZpZz4oJ2NvbnRyb2wuY29uZmlnJyk7XG4iXX0=