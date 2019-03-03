/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export var BaseControls = {
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
            this.controls = tslib_1.__assign({}, BaseControls, (options.controls || {}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb250cm9sLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRTFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBRTFGLE1BQU0sS0FBTyxlQUFlLEdBQUc7SUFDOUIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDeEI7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FBYTtJQUNyQyxVQUFVLEVBQUU7UUFDWCxTQUFTLEVBQUUsd0JBQXdCO1FBQ25DLEtBQUssRUFBRSxlQUFlO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxLQUFLLEVBQUUsWUFBWTtLQUNuQjtJQUNELFVBQVUsRUFBRTtRQUNYLFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsS0FBSyxFQUFFLGVBQWU7S0FDdEI7SUFDRCxRQUFRLEVBQUU7UUFDVCxTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLEtBQUssRUFBRSxhQUFhO0tBQ3BCO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxLQUFLLEVBQUUsZUFBZTtLQUN0QjtJQUNELE9BQU8sRUFBRTtRQUNSLFNBQVMsRUFBRSxxQkFBcUI7UUFDaEMsS0FBSyxFQUFFLFlBQVk7S0FDbkI7SUFDRCxRQUFRLEVBQUU7UUFDVCxTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLEtBQUssRUFBRSxhQUFhO0tBQ3BCO0lBQ0QsTUFBTSxFQUFFO1FBQ1AsU0FBUyxFQUFFLG9CQUFvQjtRQUMvQixLQUFLLEVBQUUsV0FBVztLQUNsQjtJQUNELFVBQVUsRUFBRTtRQUNYLFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsS0FBSyxFQUFFLGVBQWU7S0FDdEI7Q0FDRDtBQUVEO0lBSUMsdUJBQVksT0FBdUI7UUFGbkMsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUd4Qix5Q0FBeUM7UUFDekMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSx3QkFDVCxZQUFZLEVBQ1osQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUMzQixDQUFDO1NBQ0Y7SUFDRixDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7OztJQVpBLGlDQUF5Qjs7O0FBYzFCLE1BQU0sS0FBTyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQWdCLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDaGVja2JveCB9IGZyb20gJy4uL2NvbnRyb2wvY2hlY2tib3gvY29udHJvbC1jaGVja2JveCc7XG5pbXBvcnQgeyBDb250cm9sQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL2NoZWNrYm94L2NvbnRyb2wtY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xzIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9scyc7XG5pbXBvcnQgeyBDb250cm9sRW1haWwgfSBmcm9tICcuLi9jb250cm9sL2VtYWlsL2NvbnRyb2wtZW1haWwnO1xuaW1wb3J0IHsgQ29udHJvbEVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9lbWFpbC9jb250cm9sLWVtYWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sTWFya2Rvd24gfSBmcm9tICcuLi9jb250cm9sL21hcmtkb3duL2NvbnRyb2wtbWFya2Rvd24nO1xuaW1wb3J0IHsgQ29udHJvbE1hcmtkb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9tYXJrZG93bi9jb250cm9sLW1hcmtkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sTnVtYmVyIH0gZnJvbSAnLi4vY29udHJvbC9udW1iZXIvY29udHJvbC1udW1iZXInO1xuaW1wb3J0IHsgQ29udHJvbE51bWJlckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvbnVtYmVyL2NvbnRyb2wtbnVtYmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sUGFzc3dvcmQgfSBmcm9tICcuLi9jb250cm9sL3Bhc3N3b3JkL2NvbnRyb2wtcGFzc3dvcmQnO1xuaW1wb3J0IHsgQ29udHJvbFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9wYXNzd29yZC9jb250cm9sLXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sUmFkaW8gfSBmcm9tICcuLi9jb250cm9sL3JhZGlvL2NvbnRyb2wtcmFkaW8nO1xuaW1wb3J0IHsgQ29udHJvbFJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC9yYWRpby9jb250cm9sLXJhZGlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sU2VsZWN0IH0gZnJvbSAnLi4vY29udHJvbC9zZWxlY3QvY29udHJvbC1zZWxlY3QnO1xuaW1wb3J0IHsgQ29udHJvbFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2wvc2VsZWN0L2NvbnRyb2wtc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sVGV4dCB9IGZyb20gJy4uL2NvbnRyb2wvdGV4dC9jb250cm9sLXRleHQnO1xuaW1wb3J0IHsgQ29udHJvbFRleHRDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9sL3RleHQvY29udHJvbC10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sVGV4dGFyZWEgfSBmcm9tICcuLi9jb250cm9sL3RleHRhcmVhL2NvbnRyb2wtdGV4dGFyZWEnO1xuaW1wb3J0IHsgQ29udHJvbFRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbC90ZXh0YXJlYS9jb250cm9sLXRleHRhcmVhLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXG5cdENvbnRyb2xDaGVja2JveENvbXBvbmVudCxcblx0Q29udHJvbEVtYWlsQ29tcG9uZW50LFxuXHRDb250cm9sTWFya2Rvd25Db21wb25lbnQsXG5cdENvbnRyb2xOdW1iZXJDb21wb25lbnQsXG5cdENvbnRyb2xQYXNzd29yZENvbXBvbmVudCxcblx0Q29udHJvbFJhZGlvQ29tcG9uZW50LFxuXHRDb250cm9sU2VsZWN0Q29tcG9uZW50LFxuXHRDb250cm9sVGV4dENvbXBvbmVudCxcblx0Q29udHJvbFRleHRhcmVhQ29tcG9uZW50LFxuXTtcblxuZXhwb3J0IGNvbnN0IEJhc2VDb250cm9sczogQ29udHJvbHMgPSB7XG5cdCdjaGVja2JveCc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xDaGVja2JveENvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbENoZWNrYm94XG5cdH0sXG5cdCdlbWFpbCc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xFbWFpbENvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbEVtYWlsXG5cdH0sXG5cdCdtYXJrZG93bic6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xNYXJrZG93bkNvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbE1hcmtkb3duXG5cdH0sXG5cdCdudW1iZXInOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sTnVtYmVyQ29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sTnVtYmVyXG5cdH0sXG5cdCdwYXNzd29yZCc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xQYXNzd29yZENvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbFBhc3N3b3JkXG5cdH0sXG5cdCdyYWRpbyc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xSYWRpb0NvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbFJhZGlvXG5cdH0sXG5cdCdzZWxlY3QnOiB7XG5cdFx0Y29tcG9uZW50OiBDb250cm9sU2VsZWN0Q29tcG9uZW50LFxuXHRcdG1vZGVsOiBDb250cm9sU2VsZWN0XG5cdH0sXG5cdCd0ZXh0Jzoge1xuXHRcdGNvbXBvbmVudDogQ29udHJvbFRleHRDb21wb25lbnQsXG5cdFx0bW9kZWw6IENvbnRyb2xUZXh0XG5cdH0sXG5cdCd0ZXh0YXJlYSc6IHtcblx0XHRjb21wb25lbnQ6IENvbnRyb2xUZXh0YXJlYUNvbXBvbmVudCxcblx0XHRtb2RlbDogQ29udHJvbFRleHRhcmVhXG5cdH0sXG59O1xuXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbmZpZyB7XG5cblx0Y29udHJvbHM/OiBDb250cm9scyA9IHt9O1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBDb250cm9sQ29uZmlnKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xDb25maWcnLCBvcHRpb25zKTtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHRcdHRoaXMuY29udHJvbHMgPSB7XG5cdFx0XHRcdC4uLkJhc2VDb250cm9scyxcblx0XHRcdFx0Li4uKG9wdGlvbnMuY29udHJvbHMgfHwge30pXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY29uc3QgQ09OVFJPTF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29udHJvbENvbmZpZz4oJ2NvbnRyb2wuY29uZmlnJyk7XG4iXX0=