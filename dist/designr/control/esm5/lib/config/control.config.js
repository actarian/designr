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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb250cm9sLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7QUFFMUYsc0NBR0M7OztJQUZBLHFDQUFrQzs7SUFDbEMsaUNBQWdDOzs7OztBQUdqQyw4QkFBOEQ7O0FBRTlELE1BQU0sS0FBTyxlQUFlLEdBQUc7SUFDOUIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDeEI7O0FBRUQsTUFBTSxLQUFPLFFBQVEsR0FBYTtJQUNqQyxVQUFVLEVBQUU7UUFDWCxTQUFTLEVBQUUsd0JBQXdCO1FBQ25DLEtBQUssRUFBRSxlQUFlO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxLQUFLLEVBQUUsWUFBWTtLQUNuQjtJQUNELFVBQVUsRUFBRTtRQUNYLFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsS0FBSyxFQUFFLGVBQWU7S0FDdEI7SUFDRCxRQUFRLEVBQUU7UUFDVCxTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLEtBQUssRUFBRSxhQUFhO0tBQ3BCO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxLQUFLLEVBQUUsZUFBZTtLQUN0QjtJQUNELE9BQU8sRUFBRTtRQUNSLFNBQVMsRUFBRSxxQkFBcUI7UUFDaEMsS0FBSyxFQUFFLFlBQVk7S0FDbkI7SUFDRCxRQUFRLEVBQUU7UUFDVCxTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLEtBQUssRUFBRSxhQUFhO0tBQ3BCO0lBQ0QsTUFBTSxFQUFFO1FBQ1AsU0FBUyxFQUFFLG9CQUFvQjtRQUMvQixLQUFLLEVBQUUsV0FBVztLQUNsQjtJQUNELFVBQVUsRUFBRTtRQUNYLFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsS0FBSyxFQUFFLGVBQWU7S0FDdEI7Q0FDRDtBQUVEO0lBSUMsdUJBQVksT0FBdUI7UUFGbkMsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUd4Qix5Q0FBeUM7UUFDekMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSx3QkFDVCxRQUFRLEVBQ1IsQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUMzQixDQUFDO1NBQ0Y7SUFDRixDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7OztJQVpBLGlDQUF5Qjs7O0FBYzFCLE1BQU0sS0FBTyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQWdCLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDaGVja2JveCB9IGZyb20gJy4uL2NvbnRyb2wvY2hlY2tib3gvY29udHJvbC1jaGVja2JveCc7XG5pbXBvcnQgeyBDb250cm9sQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL2NoZWNrYm94L2NvbnRyb2wtY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xPcHRpb24gfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wtb3B0aW9uJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xFbWFpbCB9IGZyb20gJy4uL2NvbnRyb2wvZW1haWwvY29udHJvbC1lbWFpbCc7XG5pbXBvcnQgeyBDb250cm9sRW1haWxDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL2VtYWlsL2NvbnRyb2wtZW1haWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xNYXJrZG93biB9IGZyb20gJy4uL2NvbnRyb2wvbWFya2Rvd24vY29udHJvbC1tYXJrZG93bic7XG5pbXBvcnQgeyBDb250cm9sTWFya2Rvd25Db21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL21hcmtkb3duL2NvbnRyb2wtbWFya2Rvd24uY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xOdW1iZXIgfSBmcm9tICcuLi9jb250cm9sL251bWJlci9jb250cm9sLW51bWJlcic7XG5pbXBvcnQgeyBDb250cm9sTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9udW1iZXIvY29udHJvbC1udW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xQYXNzd29yZCB9IGZyb20gJy4uL2NvbnRyb2wvcGFzc3dvcmQvY29udHJvbC1wYXNzd29yZCc7XG5pbXBvcnQgeyBDb250cm9sUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3Bhc3N3b3JkL2NvbnRyb2wtcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xSYWRpbyB9IGZyb20gJy4uL2NvbnRyb2wvcmFkaW8vY29udHJvbC1yYWRpbyc7XG5pbXBvcnQgeyBDb250cm9sUmFkaW9Db21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3JhZGlvL2NvbnRyb2wtcmFkaW8uY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xTZWxlY3QgfSBmcm9tICcuLi9jb250cm9sL3NlbGVjdC9jb250cm9sLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250cm9sU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9zZWxlY3QvY29udHJvbC1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xUZXh0IH0gZnJvbSAnLi4vY29udHJvbC90ZXh0L2NvbnRyb2wtdGV4dCc7XG5pbXBvcnQgeyBDb250cm9sVGV4dENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvdGV4dC9jb250cm9sLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xUZXh0YXJlYSB9IGZyb20gJy4uL2NvbnRyb2wvdGV4dGFyZWEvY29udHJvbC10ZXh0YXJlYSc7XG5pbXBvcnQgeyBDb250cm9sVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3RleHRhcmVhL2NvbnRyb2wtdGV4dGFyZWEuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDb250cm9sSW50ZXJmYWNlIHtcblx0Y29tcG9uZW50OiBUeXBlPENvbnRyb2xDb21wb25lbnQ+O1xuXHRtb2RlbDogVHlwZTxDb250cm9sT3B0aW9uPGFueT4+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRyb2xzIHsgW2tleTogc3RyaW5nXTogQ29udHJvbEludGVyZmFjZTsgfVxuXG5leHBvcnQgY29uc3QgZW50cnlDb21wb25lbnRzID0gW1xuXHRDb250cm9sQ2hlY2tib3hDb21wb25lbnQsXG5cdENvbnRyb2xFbWFpbENvbXBvbmVudCxcblx0Q29udHJvbE1hcmtkb3duQ29tcG9uZW50LFxuXHRDb250cm9sTnVtYmVyQ29tcG9uZW50LFxuXHRDb250cm9sUGFzc3dvcmRDb21wb25lbnQsXG5cdENvbnRyb2xSYWRpb0NvbXBvbmVudCxcblx0Q29udHJvbFNlbGVjdENvbXBvbmVudCxcblx0Q29udHJvbFRleHRDb21wb25lbnQsXG5cdENvbnRyb2xUZXh0YXJlYUNvbXBvbmVudCxcbl07XG5cbmV4cG9ydCBjb25zdCBjb250cm9sczogQ29udHJvbHMgPSB7XG5cdCdjaGVja2JveCc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xDaGVja2JveENvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbENoZWNrYm94XG5cdH0sXG5cdCdlbWFpbCc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xFbWFpbENvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbEVtYWlsXG5cdH0sXG5cdCdtYXJrZG93bic6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xNYXJrZG93bkNvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbE1hcmtkb3duXG5cdH0sXG5cdCdudW1iZXInOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sTnVtYmVyQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sTnVtYmVyXG5cdH0sXG5cdCdwYXNzd29yZCc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xQYXNzd29yZENvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbFBhc3N3b3JkXG5cdH0sXG5cdCdyYWRpbyc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xSYWRpb0NvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbFJhZGlvXG5cdH0sXG5cdCdzZWxlY3QnOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sU2VsZWN0Q29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sU2VsZWN0XG5cdH0sXG5cdCd0ZXh0Jzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbFRleHRDb21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xUZXh0XG5cdH0sXG5cdCd0ZXh0YXJlYSc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xUZXh0YXJlYUNvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbFRleHRhcmVhXG5cdH0sXG59O1xuXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbmZpZyB7XG5cblx0Y29udHJvbHM/OiBDb250cm9scyA9IHt9O1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBDb250cm9sQ29uZmlnKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xDb25maWcnLCBvcHRpb25zKTtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHRcdHRoaXMuY29udHJvbHMgPSB7XG5cdFx0XHRcdC4uLmNvbnRyb2xzLFxuXHRcdFx0XHQuLi4ob3B0aW9ucy5jb250cm9scyB8fCB7fSlcblx0XHRcdH07XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBDT05UUk9MX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb250cm9sQ29uZmlnPignY29udHJvbC5jb25maWcnKTtcbiJdfQ==