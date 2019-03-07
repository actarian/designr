/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { ControlCheckbox } from '../control/checkbox/control-checkbox';
import { ControlCheckboxComponent } from '../control/checkbox/control-checkbox.component';
import { ControlEmail } from '../control/email/control-email';
import { ControlEmailComponent } from '../control/email/control-email.component';
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
/** @type {?} */
export const entryComponents = [
    ControlCheckboxComponent,
    ControlEmailComponent,
    ControlMarkdownComponent,
    ControlNumberComponent,
    ControlPasswordComponent,
    ControlRadioComponent,
    ControlSelectComponent,
    ControlTextComponent,
    ControlTextareaComponent,
];
/** @type {?} */
export const BaseControls = {
    'checkbox': {
        component: ControlCheckboxComponent,
        model: ControlCheckbox
    },
    'email': {
        component: ControlEmailComponent,
        model: ControlEmail
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
            this.controls = Object.assign({}, BaseControls, (options.controls || {}));
        }
    }
}
if (false) {
    /** @type {?} */
    ControlConfig.prototype.controls;
}
/** @type {?} */
export const CONTROL_CONFIG = new InjectionToken('control.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb250cm9sLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUFFMUYsTUFBTSxPQUFPLGVBQWUsR0FBRztJQUM5Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtDQUN4Qjs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUFhO0lBQ3JDLFVBQVUsRUFBRTtRQUNYLFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsS0FBSyxFQUFFLGVBQWU7S0FDdEI7SUFDRCxPQUFPLEVBQUU7UUFDUixTQUFTLEVBQUUscUJBQXFCO1FBQ2hDLEtBQUssRUFBRSxZQUFZO0tBQ25CO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxLQUFLLEVBQUUsZUFBZTtLQUN0QjtJQUNELFFBQVEsRUFBRTtRQUNULFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsS0FBSyxFQUFFLGFBQWE7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDWCxTQUFTLEVBQUUsd0JBQXdCO1FBQ25DLEtBQUssRUFBRSxlQUFlO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxLQUFLLEVBQUUsWUFBWTtLQUNuQjtJQUNELFFBQVEsRUFBRTtRQUNULFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsS0FBSyxFQUFFLGFBQWE7S0FDcEI7SUFDRCxNQUFNLEVBQUU7UUFDUCxTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLEtBQUssRUFBRSxXQUFXO0tBQ2xCO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxLQUFLLEVBQUUsZUFBZTtLQUN0QjtDQUNEO0FBRUQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFJekIsWUFBWSxPQUF1QjtRQUZuQyxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBR3hCLHlDQUF5QztRQUN6QyxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLHFCQUNULFlBQVksRUFDWixDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQzNCLENBQUM7U0FDRjtJQUNGLENBQUM7Q0FDRDs7O0lBWkEsaUNBQXlCOzs7QUFjMUIsTUFBTSxPQUFPLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBZ0IsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENoZWNrYm94IH0gZnJvbSAnLi4vY29udHJvbC9jaGVja2JveC9jb250cm9sLWNoZWNrYm94JztcbmltcG9ydCB7IENvbnRyb2xDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvY2hlY2tib3gvY29udHJvbC1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbHMgfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2xzJztcbmltcG9ydCB7IENvbnRyb2xFbWFpbCB9IGZyb20gJy4uL2NvbnRyb2wvZW1haWwvY29udHJvbC1lbWFpbCc7XG5pbXBvcnQgeyBDb250cm9sRW1haWxDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL2VtYWlsL2NvbnRyb2wtZW1haWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xNYXJrZG93biB9IGZyb20gJy4uL2NvbnRyb2wvbWFya2Rvd24vY29udHJvbC1tYXJrZG93bic7XG5pbXBvcnQgeyBDb250cm9sTWFya2Rvd25Db21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL21hcmtkb3duL2NvbnRyb2wtbWFya2Rvd24uY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xOdW1iZXIgfSBmcm9tICcuLi9jb250cm9sL251bWJlci9jb250cm9sLW51bWJlcic7XG5pbXBvcnQgeyBDb250cm9sTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9udW1iZXIvY29udHJvbC1udW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xQYXNzd29yZCB9IGZyb20gJy4uL2NvbnRyb2wvcGFzc3dvcmQvY29udHJvbC1wYXNzd29yZCc7XG5pbXBvcnQgeyBDb250cm9sUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3Bhc3N3b3JkL2NvbnRyb2wtcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xSYWRpbyB9IGZyb20gJy4uL2NvbnRyb2wvcmFkaW8vY29udHJvbC1yYWRpbyc7XG5pbXBvcnQgeyBDb250cm9sUmFkaW9Db21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3JhZGlvL2NvbnRyb2wtcmFkaW8uY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xTZWxlY3QgfSBmcm9tICcuLi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250cm9sU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9zZWxlY3QvY29udHJvbC1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xUZXh0IH0gZnJvbSAnLi4vY29udHJvbC90ZXh0L2NvbnRyb2wtdGV4dCc7XG5pbXBvcnQgeyBDb250cm9sVGV4dENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvdGV4dC9jb250cm9sLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xUZXh0YXJlYSB9IGZyb20gJy4uL2NvbnRyb2wvdGV4dGFyZWEvY29udHJvbC10ZXh0YXJlYSc7XG5pbXBvcnQgeyBDb250cm9sVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3RleHRhcmVhL2NvbnRyb2wtdGV4dGFyZWEuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtcblx0Q29udHJvbENoZWNrYm94Q29tcG9uZW50LFxuXHRDb250cm9sRW1haWxDb21wb25lbnQsXG5cdENvbnRyb2xNYXJrZG93bkNvbXBvbmVudCxcblx0Q29udHJvbE51bWJlckNvbXBvbmVudCxcblx0Q29udHJvbFBhc3N3b3JkQ29tcG9uZW50LFxuXHRDb250cm9sUmFkaW9Db21wb25lbnQsXG5cdENvbnRyb2xTZWxlY3RDb21wb25lbnQsXG5cdENvbnRyb2xUZXh0Q29tcG9uZW50LFxuXHRDb250cm9sVGV4dGFyZWFDb21wb25lbnQsXG5dO1xuXG5leHBvcnQgY29uc3QgQmFzZUNvbnRyb2xzOiBDb250cm9scyA9IHtcblx0J2NoZWNrYm94Jzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbENoZWNrYm94Q29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sQ2hlY2tib3hcblx0fSxcblx0J2VtYWlsJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbEVtYWlsQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sRW1haWxcblx0fSxcblx0J21hcmtkb3duJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbE1hcmtkb3duQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sTWFya2Rvd25cblx0fSxcblx0J251bWJlcic6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xOdW1iZXJDb21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xOdW1iZXJcblx0fSxcblx0J3Bhc3N3b3JkJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbFBhc3N3b3JkQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sUGFzc3dvcmRcblx0fSxcblx0J3JhZGlvJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbFJhZGlvQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sUmFkaW9cblx0fSxcblx0J3NlbGVjdCc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xTZWxlY3RDb21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xTZWxlY3Rcblx0fSxcblx0J3RleHQnOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sVGV4dENvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbFRleHRcblx0fSxcblx0J3RleHRhcmVhJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbFRleHRhcmVhQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sVGV4dGFyZWFcblx0fSxcbn07XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sQ29uZmlnIHtcblxuXHRjb250cm9scz86IENvbnRyb2xzID0ge307XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IENvbnRyb2xDb25maWcpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbENvbmZpZycsIG9wdGlvbnMpO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdFx0dGhpcy5jb250cm9scyA9IHtcblx0XHRcdFx0Li4uQmFzZUNvbnRyb2xzLFxuXHRcdFx0XHQuLi4ob3B0aW9ucy5jb250cm9scyB8fCB7fSlcblx0XHRcdH07XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBDT05UUk9MX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb250cm9sQ29uZmlnPignY29udHJvbC5jb25maWcnKTtcbiJdfQ==