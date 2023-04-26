/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var entryComponents = [
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
export var controls = {
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
var ControlConfig = /** @class */ (function () {
    function ControlConfig(options) {
        this.controls = {};
        // console.log('ControlConfig', options);
        if (options) {
            Object.assign(this, options);
            this.controls = tslib_1.__assign({}, controls, (options.controls || {}));
        }
    }
    return ControlConfig;
}());
export { ControlConfig };
if (false) {
    /** @type {?} */
    ControlConfig.prototype.controls;
}
/** @type {?} */
export var CONTROL_CONFIG = new InjectionToken('control.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb250cm9sLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7OztBQUUxRixzQ0FHQzs7O0lBRkEscUNBQWtDOztJQUNsQyxpQ0FBaUM7Ozs7O0FBR2xDLDhCQUE4RDs7QUFFOUQsTUFBTSxLQUFPLGVBQWUsR0FBRztJQUM5Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQ3hCOztBQUVELE1BQU0sS0FBTyxRQUFRLEdBQWE7SUFDakMsVUFBVSxFQUFFO1FBQ1gsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxLQUFLLEVBQUUsZUFBZTtLQUN0QjtJQUNELE9BQU8sRUFBRTtRQUNSLFNBQVMsRUFBRSxxQkFBcUI7UUFDaEMsS0FBSyxFQUFFLFlBQVk7S0FDbkI7SUFDRCxPQUFPLEVBQUU7UUFDUixTQUFTLEVBQUUscUJBQXFCO1FBQ2hDLEtBQUssRUFBRSxZQUFZO0tBQ25CO0lBQ0QsTUFBTSxFQUFFO1FBQ1AsU0FBUyxFQUFFLG9CQUFvQjtRQUMvQixLQUFLLEVBQUUsV0FBVztLQUNsQjtJQUNELFVBQVUsRUFBRTtRQUNYLFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsS0FBSyxFQUFFLGVBQWU7S0FDdEI7SUFDRCxRQUFRLEVBQUU7UUFDVCxTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLEtBQUssRUFBRSxhQUFhO0tBQ3BCO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxLQUFLLEVBQUUsZUFBZTtLQUN0QjtJQUNELE9BQU8sRUFBRTtRQUNSLFNBQVMsRUFBRSxxQkFBcUI7UUFDaEMsS0FBSyxFQUFFLFlBQVk7S0FDbkI7SUFDRCxRQUFRLEVBQUU7UUFDVCxTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLEtBQUssRUFBRSxhQUFhO0tBQ3BCO0lBQ0QsTUFBTSxFQUFFO1FBQ1AsU0FBUyxFQUFFLG9CQUFvQjtRQUMvQixLQUFLLEVBQUUsV0FBVztLQUNsQjtJQUNELFVBQVUsRUFBRTtRQUNYLFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsS0FBSyxFQUFFLGVBQWU7S0FDdEI7Q0FDRDtBQUVEO0lBSUMsdUJBQVksT0FBdUI7UUFGbkMsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUd4Qix5Q0FBeUM7UUFDekMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSx3QkFDVCxRQUFRLEVBQ1IsQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUMzQixDQUFDO1NBQ0Y7SUFDRixDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7OztJQVpBLGlDQUF5Qjs7O0FBYzFCLE1BQU0sS0FBTyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQWdCLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbENoZWNrYm94IH0gZnJvbSAnLi4vY29udHJvbC9jaGVja2JveC9jb250cm9sLWNoZWNrYm94JztcclxuaW1wb3J0IHsgQ29udHJvbENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9jaGVja2JveC9jb250cm9sLWNoZWNrYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLW9wdGlvbic7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbEVtYWlsIH0gZnJvbSAnLi4vY29udHJvbC9lbWFpbC9jb250cm9sLWVtYWlsJztcclxuaW1wb3J0IHsgQ29udHJvbEVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9lbWFpbC9jb250cm9sLWVtYWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xHcm91cCB9IGZyb20gJy4uL2NvbnRyb2wvZ3JvdXAvY29udHJvbC1ncm91cCc7XHJcbmltcG9ydCB7IENvbnRyb2xHcm91cENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvZ3JvdXAvY29udHJvbC1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sSW5mbyB9IGZyb20gJy4uL2NvbnRyb2wvaW5mby9jb250cm9sLWluZm8nO1xyXG5pbXBvcnQgeyBDb250cm9sSW5mb0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvaW5mby9jb250cm9sLWluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbE1hcmtkb3duIH0gZnJvbSAnLi4vY29udHJvbC9tYXJrZG93bi9jb250cm9sLW1hcmtkb3duJztcclxuaW1wb3J0IHsgQ29udHJvbE1hcmtkb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9tYXJrZG93bi9jb250cm9sLW1hcmtkb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xOdW1iZXIgfSBmcm9tICcuLi9jb250cm9sL251bWJlci9jb250cm9sLW51bWJlcic7XHJcbmltcG9ydCB7IENvbnRyb2xOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL251bWJlci9jb250cm9sLW51bWJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sUGFzc3dvcmQgfSBmcm9tICcuLi9jb250cm9sL3Bhc3N3b3JkL2NvbnRyb2wtcGFzc3dvcmQnO1xyXG5pbXBvcnQgeyBDb250cm9sUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3Bhc3N3b3JkL2NvbnRyb2wtcGFzc3dvcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFJhZGlvIH0gZnJvbSAnLi4vY29udHJvbC9yYWRpby9jb250cm9sLXJhZGlvJztcclxuaW1wb3J0IHsgQ29udHJvbFJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9yYWRpby9jb250cm9sLXJhZGlvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xTZWxlY3QgfSBmcm9tICcuLi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdCc7XHJcbmltcG9ydCB7IENvbnRyb2xTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sVGV4dCB9IGZyb20gJy4uL2NvbnRyb2wvdGV4dC9jb250cm9sLXRleHQnO1xyXG5pbXBvcnQgeyBDb250cm9sVGV4dENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvdGV4dC9jb250cm9sLXRleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFRleHRhcmVhIH0gZnJvbSAnLi4vY29udHJvbC90ZXh0YXJlYS9jb250cm9sLXRleHRhcmVhJztcclxuaW1wb3J0IHsgQ29udHJvbFRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC90ZXh0YXJlYS9jb250cm9sLXRleHRhcmVhLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRyb2xJbnRlcmZhY2Uge1xyXG5cdGNvbXBvbmVudDogVHlwZTxDb250cm9sQ29tcG9uZW50PjtcclxuXHRtb2RlbDogVHlwZTxJQ29udHJvbE9wdGlvbjxhbnk+PjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb250cm9scyB7IFtrZXk6IHN0cmluZ106IENvbnRyb2xJbnRlcmZhY2U7IH1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXHJcblx0Q29udHJvbENoZWNrYm94Q29tcG9uZW50LFxyXG5cdENvbnRyb2xFbWFpbENvbXBvbmVudCxcclxuXHRDb250cm9sR3JvdXBDb21wb25lbnQsXHJcblx0Q29udHJvbEluZm9Db21wb25lbnQsXHJcblx0Q29udHJvbE1hcmtkb3duQ29tcG9uZW50LFxyXG5cdENvbnRyb2xOdW1iZXJDb21wb25lbnQsXHJcblx0Q29udHJvbFBhc3N3b3JkQ29tcG9uZW50LFxyXG5cdENvbnRyb2xSYWRpb0NvbXBvbmVudCxcclxuXHRDb250cm9sU2VsZWN0Q29tcG9uZW50LFxyXG5cdENvbnRyb2xUZXh0Q29tcG9uZW50LFxyXG5cdENvbnRyb2xUZXh0YXJlYUNvbXBvbmVudCxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb250cm9sczogQ29udHJvbHMgPSB7XHJcblx0J2NoZWNrYm94Jzoge1xyXG5cdFx0Y29tcG9uZW50OiBDb250cm9sQ2hlY2tib3hDb21wb25lbnQsXHJcblx0XHRtb2RlbDogQ29udHJvbENoZWNrYm94XHJcblx0fSxcclxuXHQnZW1haWwnOiB7XHJcblx0XHRjb21wb25lbnQ6IENvbnRyb2xFbWFpbENvbXBvbmVudCxcclxuXHRcdG1vZGVsOiBDb250cm9sRW1haWxcclxuXHR9LFxyXG5cdCdncm91cCc6IHtcclxuXHRcdGNvbXBvbmVudDogQ29udHJvbEdyb3VwQ29tcG9uZW50LFxyXG5cdFx0bW9kZWw6IENvbnRyb2xHcm91cFxyXG5cdH0sXHJcblx0J2luZm8nOiB7XHJcblx0XHRjb21wb25lbnQ6IENvbnRyb2xJbmZvQ29tcG9uZW50LFxyXG5cdFx0bW9kZWw6IENvbnRyb2xJbmZvXHJcblx0fSxcclxuXHQnbWFya2Rvd24nOiB7XHJcblx0XHRjb21wb25lbnQ6IENvbnRyb2xNYXJrZG93bkNvbXBvbmVudCxcclxuXHRcdG1vZGVsOiBDb250cm9sTWFya2Rvd25cclxuXHR9LFxyXG5cdCdudW1iZXInOiB7XHJcblx0XHRjb21wb25lbnQ6IENvbnRyb2xOdW1iZXJDb21wb25lbnQsXHJcblx0XHRtb2RlbDogQ29udHJvbE51bWJlclxyXG5cdH0sXHJcblx0J3Bhc3N3b3JkJzoge1xyXG5cdFx0Y29tcG9uZW50OiBDb250cm9sUGFzc3dvcmRDb21wb25lbnQsXHJcblx0XHRtb2RlbDogQ29udHJvbFBhc3N3b3JkXHJcblx0fSxcclxuXHQncmFkaW8nOiB7XHJcblx0XHRjb21wb25lbnQ6IENvbnRyb2xSYWRpb0NvbXBvbmVudCxcclxuXHRcdG1vZGVsOiBDb250cm9sUmFkaW9cclxuXHR9LFxyXG5cdCdzZWxlY3QnOiB7XHJcblx0XHRjb21wb25lbnQ6IENvbnRyb2xTZWxlY3RDb21wb25lbnQsXHJcblx0XHRtb2RlbDogQ29udHJvbFNlbGVjdFxyXG5cdH0sXHJcblx0J3RleHQnOiB7XHJcblx0XHRjb21wb25lbnQ6IENvbnRyb2xUZXh0Q29tcG9uZW50LFxyXG5cdFx0bW9kZWw6IENvbnRyb2xUZXh0XHJcblx0fSxcclxuXHQndGV4dGFyZWEnOiB7XHJcblx0XHRjb21wb25lbnQ6IENvbnRyb2xUZXh0YXJlYUNvbXBvbmVudCxcclxuXHRcdG1vZGVsOiBDb250cm9sVGV4dGFyZWFcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xDb25maWcge1xyXG5cclxuXHRjb250cm9scz86IENvbnRyb2xzID0ge307XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBDb250cm9sQ29uZmlnKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbENvbmZpZycsIG9wdGlvbnMpO1xyXG5cdFx0aWYgKG9wdGlvbnMpIHtcclxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuXHRcdFx0dGhpcy5jb250cm9scyA9IHtcclxuXHRcdFx0XHQuLi5jb250cm9scyxcclxuXHRcdFx0XHQuLi4ob3B0aW9ucy5jb250cm9scyB8fCB7fSlcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb250cm9sQ29uZmlnPignY29udHJvbC5jb25maWcnKTtcclxuIl19