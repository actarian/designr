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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb250cm9sLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFHMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7OztBQUUxRixzQ0FHQzs7O0lBRkEscUNBQWtDOztJQUNsQyxpQ0FBZ0M7Ozs7O0FBR2pDLDhCQUE4RDs7QUFFOUQsTUFBTSxPQUFPLGVBQWUsR0FBRztJQUM5Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtDQUN4Qjs7QUFFRCxNQUFNLE9BQU8sUUFBUSxHQUFhO0lBQ2pDLFVBQVUsRUFBRTtRQUNYLFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsS0FBSyxFQUFFLGVBQWU7S0FDdEI7SUFDRCxPQUFPLEVBQUU7UUFDUixTQUFTLEVBQUUscUJBQXFCO1FBQ2hDLEtBQUssRUFBRSxZQUFZO0tBQ25CO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxLQUFLLEVBQUUsZUFBZTtLQUN0QjtJQUNELFFBQVEsRUFBRTtRQUNULFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsS0FBSyxFQUFFLGFBQWE7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDWCxTQUFTLEVBQUUsd0JBQXdCO1FBQ25DLEtBQUssRUFBRSxlQUFlO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxLQUFLLEVBQUUsWUFBWTtLQUNuQjtJQUNELFFBQVEsRUFBRTtRQUNULFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsS0FBSyxFQUFFLGFBQWE7S0FDcEI7SUFDRCxNQUFNLEVBQUU7UUFDUCxTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLEtBQUssRUFBRSxXQUFXO0tBQ2xCO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxLQUFLLEVBQUUsZUFBZTtLQUN0QjtDQUNEO0FBRUQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFJekIsWUFBWSxPQUF1QjtRQUZuQyxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBR3hCLHlDQUF5QztRQUN6QyxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLHFCQUNULFFBQVEsRUFDUixDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQzNCLENBQUM7U0FDRjtJQUNGLENBQUM7Q0FDRDs7O0lBWkEsaUNBQXlCOzs7QUFjMUIsTUFBTSxPQUFPLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBZ0IsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENoZWNrYm94IH0gZnJvbSAnLi4vY29udHJvbC9jaGVja2JveC9jb250cm9sLWNoZWNrYm94JztcbmltcG9ydCB7IENvbnRyb2xDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvY2hlY2tib3gvY29udHJvbC1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbE9wdGlvbiB9IGZyb20gJy4uL2NvbnRyb2wvY29udHJvbC1vcHRpb24nO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbEVtYWlsIH0gZnJvbSAnLi4vY29udHJvbC9lbWFpbC9jb250cm9sLWVtYWlsJztcbmltcG9ydCB7IENvbnRyb2xFbWFpbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvZW1haWwvY29udHJvbC1lbWFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbE1hcmtkb3duIH0gZnJvbSAnLi4vY29udHJvbC9tYXJrZG93bi9jb250cm9sLW1hcmtkb3duJztcbmltcG9ydCB7IENvbnRyb2xNYXJrZG93bkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvbWFya2Rvd24vY29udHJvbC1tYXJrZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbE51bWJlciB9IGZyb20gJy4uL2NvbnRyb2wvbnVtYmVyL2NvbnRyb2wtbnVtYmVyJztcbmltcG9ydCB7IENvbnRyb2xOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL251bWJlci9jb250cm9sLW51bWJlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFBhc3N3b3JkIH0gZnJvbSAnLi4vY29udHJvbC9wYXNzd29yZC9jb250cm9sLXBhc3N3b3JkJztcbmltcG9ydCB7IENvbnRyb2xQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvcGFzc3dvcmQvY29udHJvbC1wYXNzd29yZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFJhZGlvIH0gZnJvbSAnLi4vY29udHJvbC9yYWRpby9jb250cm9sLXJhZGlvJztcbmltcG9ydCB7IENvbnRyb2xSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvcmFkaW8vY29udHJvbC1yYWRpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFNlbGVjdCB9IGZyb20gJy4uL2NvbnRyb2wvc2VsZWN0L2NvbnRyb2wtc2VsZWN0JztcbmltcG9ydCB7IENvbnRyb2xTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFRleHQgfSBmcm9tICcuLi9jb250cm9sL3RleHQvY29udHJvbC10ZXh0JztcbmltcG9ydCB7IENvbnRyb2xUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC90ZXh0L2NvbnRyb2wtdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFRleHRhcmVhIH0gZnJvbSAnLi4vY29udHJvbC90ZXh0YXJlYS9jb250cm9sLXRleHRhcmVhJztcbmltcG9ydCB7IENvbnRyb2xUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvdGV4dGFyZWEvY29udHJvbC10ZXh0YXJlYS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRyb2xJbnRlcmZhY2Uge1xuXHRjb21wb25lbnQ6IFR5cGU8Q29udHJvbENvbXBvbmVudD47XG5cdG1vZGVsOiBUeXBlPENvbnRyb2xPcHRpb248YW55Pj47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJvbHMgeyBba2V5OiBzdHJpbmddOiBDb250cm9sSW50ZXJmYWNlOyB9XG5cbmV4cG9ydCBjb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXG5cdENvbnRyb2xDaGVja2JveENvbXBvbmVudCxcblx0Q29udHJvbEVtYWlsQ29tcG9uZW50LFxuXHRDb250cm9sTWFya2Rvd25Db21wb25lbnQsXG5cdENvbnRyb2xOdW1iZXJDb21wb25lbnQsXG5cdENvbnRyb2xQYXNzd29yZENvbXBvbmVudCxcblx0Q29udHJvbFJhZGlvQ29tcG9uZW50LFxuXHRDb250cm9sU2VsZWN0Q29tcG9uZW50LFxuXHRDb250cm9sVGV4dENvbXBvbmVudCxcblx0Q29udHJvbFRleHRhcmVhQ29tcG9uZW50LFxuXTtcblxuZXhwb3J0IGNvbnN0IGNvbnRyb2xzOiBDb250cm9scyA9IHtcblx0J2NoZWNrYm94Jzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbENoZWNrYm94Q29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sQ2hlY2tib3hcblx0fSxcblx0J2VtYWlsJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbEVtYWlsQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sRW1haWxcblx0fSxcblx0J21hcmtkb3duJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbE1hcmtkb3duQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sTWFya2Rvd25cblx0fSxcblx0J251bWJlcic6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xOdW1iZXJDb21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xOdW1iZXJcblx0fSxcblx0J3Bhc3N3b3JkJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbFBhc3N3b3JkQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sUGFzc3dvcmRcblx0fSxcblx0J3JhZGlvJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbFJhZGlvQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sUmFkaW9cblx0fSxcblx0J3NlbGVjdCc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xTZWxlY3RDb21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xTZWxlY3Rcblx0fSxcblx0J3RleHQnOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sVGV4dENvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbFRleHRcblx0fSxcblx0J3RleHRhcmVhJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbFRleHRhcmVhQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sVGV4dGFyZWFcblx0fSxcbn07XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sQ29uZmlnIHtcblxuXHRjb250cm9scz86IENvbnRyb2xzID0ge307XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IENvbnRyb2xDb25maWcpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbENvbmZpZycsIG9wdGlvbnMpO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdFx0dGhpcy5jb250cm9scyA9IHtcblx0XHRcdFx0Li4uY29udHJvbHMsXG5cdFx0XHRcdC4uLihvcHRpb25zLmNvbnRyb2xzIHx8IHt9KVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IENPTlRST0xfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPENvbnRyb2xDb25maWc+KCdjb250cm9sLmNvbmZpZycpO1xuIl19