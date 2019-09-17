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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb250cm9sLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7OztBQUUxRixzQ0FHQzs7O0lBRkEscUNBQWtDOztJQUNsQyxpQ0FBaUM7Ozs7O0FBR2xDLDhCQUE4RDs7QUFFOUQsTUFBTSxLQUFPLGVBQWUsR0FBRztJQUM5Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQ3hCOztBQUVELE1BQU0sS0FBTyxRQUFRLEdBQWE7SUFDakMsVUFBVSxFQUFFO1FBQ1gsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxLQUFLLEVBQUUsZUFBZTtLQUN0QjtJQUNELE9BQU8sRUFBRTtRQUNSLFNBQVMsRUFBRSxxQkFBcUI7UUFDaEMsS0FBSyxFQUFFLFlBQVk7S0FDbkI7SUFDRCxPQUFPLEVBQUU7UUFDUixTQUFTLEVBQUUscUJBQXFCO1FBQ2hDLEtBQUssRUFBRSxZQUFZO0tBQ25CO0lBQ0QsTUFBTSxFQUFFO1FBQ1AsU0FBUyxFQUFFLG9CQUFvQjtRQUMvQixLQUFLLEVBQUUsV0FBVztLQUNsQjtJQUNELFVBQVUsRUFBRTtRQUNYLFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsS0FBSyxFQUFFLGVBQWU7S0FDdEI7SUFDRCxRQUFRLEVBQUU7UUFDVCxTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLEtBQUssRUFBRSxhQUFhO0tBQ3BCO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxLQUFLLEVBQUUsZUFBZTtLQUN0QjtJQUNELE9BQU8sRUFBRTtRQUNSLFNBQVMsRUFBRSxxQkFBcUI7UUFDaEMsS0FBSyxFQUFFLFlBQVk7S0FDbkI7SUFDRCxRQUFRLEVBQUU7UUFDVCxTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLEtBQUssRUFBRSxhQUFhO0tBQ3BCO0lBQ0QsTUFBTSxFQUFFO1FBQ1AsU0FBUyxFQUFFLG9CQUFvQjtRQUMvQixLQUFLLEVBQUUsV0FBVztLQUNsQjtJQUNELFVBQVUsRUFBRTtRQUNYLFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsS0FBSyxFQUFFLGVBQWU7S0FDdEI7Q0FDRDtBQUVEO0lBSUMsdUJBQVksT0FBdUI7UUFGbkMsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUd4Qix5Q0FBeUM7UUFDekMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSx3QkFDVCxRQUFRLEVBQ1IsQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUMzQixDQUFDO1NBQ0Y7SUFDRixDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7OztJQVpBLGlDQUF5Qjs7O0FBYzFCLE1BQU0sS0FBTyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQWdCLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDaGVja2JveCB9IGZyb20gJy4uL2NvbnRyb2wvY2hlY2tib3gvY29udHJvbC1jaGVja2JveCc7XG5pbXBvcnQgeyBDb250cm9sQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL2NoZWNrYm94L2NvbnRyb2wtY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLW9wdGlvbic7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sRW1haWwgfSBmcm9tICcuLi9jb250cm9sL2VtYWlsL2NvbnRyb2wtZW1haWwnO1xuaW1wb3J0IHsgQ29udHJvbEVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9lbWFpbC9jb250cm9sLWVtYWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sR3JvdXAgfSBmcm9tICcuLi9jb250cm9sL2dyb3VwL2NvbnRyb2wtZ3JvdXAnO1xuaW1wb3J0IHsgQ29udHJvbEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9ncm91cC9jb250cm9sLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sSW5mbyB9IGZyb20gJy4uL2NvbnRyb2wvaW5mby9jb250cm9sLWluZm8nO1xuaW1wb3J0IHsgQ29udHJvbEluZm9Db21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL2luZm8vY29udHJvbC1pbmZvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sTWFya2Rvd24gfSBmcm9tICcuLi9jb250cm9sL21hcmtkb3duL2NvbnRyb2wtbWFya2Rvd24nO1xuaW1wb3J0IHsgQ29udHJvbE1hcmtkb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9tYXJrZG93bi9jb250cm9sLW1hcmtkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sTnVtYmVyIH0gZnJvbSAnLi4vY29udHJvbC9udW1iZXIvY29udHJvbC1udW1iZXInO1xuaW1wb3J0IHsgQ29udHJvbE51bWJlckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvbnVtYmVyL2NvbnRyb2wtbnVtYmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sUGFzc3dvcmQgfSBmcm9tICcuLi9jb250cm9sL3Bhc3N3b3JkL2NvbnRyb2wtcGFzc3dvcmQnO1xuaW1wb3J0IHsgQ29udHJvbFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9wYXNzd29yZC9jb250cm9sLXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sUmFkaW8gfSBmcm9tICcuLi9jb250cm9sL3JhZGlvL2NvbnRyb2wtcmFkaW8nO1xuaW1wb3J0IHsgQ29udHJvbFJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9yYWRpby9jb250cm9sLXJhZGlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sU2VsZWN0IH0gZnJvbSAnLi4vY29udHJvbC9zZWxlY3QvY29udHJvbC1zZWxlY3QnO1xuaW1wb3J0IHsgQ29udHJvbFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvc2VsZWN0L2NvbnRyb2wtc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sVGV4dCB9IGZyb20gJy4uL2NvbnRyb2wvdGV4dC9jb250cm9sLXRleHQnO1xuaW1wb3J0IHsgQ29udHJvbFRleHRDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3RleHQvY29udHJvbC10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sVGV4dGFyZWEgfSBmcm9tICcuLi9jb250cm9sL3RleHRhcmVhL2NvbnRyb2wtdGV4dGFyZWEnO1xuaW1wb3J0IHsgQ29udHJvbFRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC90ZXh0YXJlYS9jb250cm9sLXRleHRhcmVhLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJvbEludGVyZmFjZSB7XG5cdGNvbXBvbmVudDogVHlwZTxDb250cm9sQ29tcG9uZW50Pjtcblx0bW9kZWw6IFR5cGU8SUNvbnRyb2xPcHRpb248YW55Pj47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJvbHMgeyBba2V5OiBzdHJpbmddOiBDb250cm9sSW50ZXJmYWNlOyB9XG5cbmV4cG9ydCBjb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXG5cdENvbnRyb2xDaGVja2JveENvbXBvbmVudCxcblx0Q29udHJvbEVtYWlsQ29tcG9uZW50LFxuXHRDb250cm9sR3JvdXBDb21wb25lbnQsXG5cdENvbnRyb2xJbmZvQ29tcG9uZW50LFxuXHRDb250cm9sTWFya2Rvd25Db21wb25lbnQsXG5cdENvbnRyb2xOdW1iZXJDb21wb25lbnQsXG5cdENvbnRyb2xQYXNzd29yZENvbXBvbmVudCxcblx0Q29udHJvbFJhZGlvQ29tcG9uZW50LFxuXHRDb250cm9sU2VsZWN0Q29tcG9uZW50LFxuXHRDb250cm9sVGV4dENvbXBvbmVudCxcblx0Q29udHJvbFRleHRhcmVhQ29tcG9uZW50LFxuXTtcblxuZXhwb3J0IGNvbnN0IGNvbnRyb2xzOiBDb250cm9scyA9IHtcblx0J2NoZWNrYm94Jzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbENoZWNrYm94Q29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sQ2hlY2tib3hcblx0fSxcblx0J2VtYWlsJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbEVtYWlsQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sRW1haWxcblx0fSxcblx0J2dyb3VwJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbEdyb3VwQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sR3JvdXBcblx0fSxcblx0J2luZm8nOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sSW5mb0NvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbEluZm9cblx0fSxcblx0J21hcmtkb3duJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbE1hcmtkb3duQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sTWFya2Rvd25cblx0fSxcblx0J251bWJlcic6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xOdW1iZXJDb21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xOdW1iZXJcblx0fSxcblx0J3Bhc3N3b3JkJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbFBhc3N3b3JkQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sUGFzc3dvcmRcblx0fSxcblx0J3JhZGlvJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbFJhZGlvQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sUmFkaW9cblx0fSxcblx0J3NlbGVjdCc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xTZWxlY3RDb21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xTZWxlY3Rcblx0fSxcblx0J3RleHQnOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sVGV4dENvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbFRleHRcblx0fSxcblx0J3RleHRhcmVhJzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbFRleHRhcmVhQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sVGV4dGFyZWFcblx0fSxcbn07XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sQ29uZmlnIHtcblxuXHRjb250cm9scz86IENvbnRyb2xzID0ge307XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IENvbnRyb2xDb25maWcpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbENvbmZpZycsIG9wdGlvbnMpO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdFx0dGhpcy5jb250cm9scyA9IHtcblx0XHRcdFx0Li4uY29udHJvbHMsXG5cdFx0XHRcdC4uLihvcHRpb25zLmNvbnRyb2xzIHx8IHt9KVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IENPTlRST0xfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPENvbnRyb2xDb25maWc+KCdjb250cm9sLmNvbmZpZycpO1xuIl19