/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@designr/core';
import { CONTROL_CONFIG } from './config/control.config';
import { ControlModuleComponent } from './control-module.component';
import { ControlBaseComponent } from './control/base/control-base.component';
import { ControlCheckboxComponent } from './control/checkbox/control-checkbox.component';
import { ControlOutletComponent } from './control/control-outlet.component';
import { ControlService } from './control/control.service';
import { ControlsComponent } from './control/controls.component';
import { ControlEmailComponent } from './control/email/control-email.component';
import { ControlMarkdownComponent } from './control/markdown/control-markdown.component';
import { ControlNumberComponent } from './control/number/control-number.component';
import { ControlPasswordComponent } from './control/password/control-password.component';
import { ControlRadioComponent } from './control/radio/control-radio.component';
import { ControlSelectComponent } from './control/select/control-select.component';
import { ControlTextComponent } from './control/text/control-text.component';
import { ControlTextareaComponent } from './control/textarea/control-textarea.component';
import { ExistsValidator } from './directives/exists.directive';
import { MatchValidator } from './directives/match.directive';
import { UppercaseDirective } from './directives/uppercase.directive';
import { FormService } from './form/form.service';
/** @type {?} */
const services = [
    ControlService,
    FormService,
];
/** @type {?} */
const components = [
    ControlsComponent,
    ControlModuleComponent,
    ControlOutletComponent,
    ControlBaseComponent,
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
const directives = [
    UppercaseDirective,
];
/** @type {?} */
const pipes = [];
/** @type {?} */
const validators = [
    ExistsValidator,
    MatchValidator,
];
/** @type {?} */
const guards = [];
export class ControlModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        /*
        if (parentModule) {
            throw new Error('ControlModule is already loaded. Import it in the AppModule only');
        }
        */
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: ControlModule,
            providers: [{
                    provide: CONTROL_CONFIG, useValue: config
                }]
        };
    }
}
ControlModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CoreModule,
                ],
                providers: [
                    ...services,
                    ...pipes,
                    ...validators,
                ],
                declarations: [
                    ...components,
                    ...directives,
                    ...pipes,
                    ...validators,
                ],
                entryComponents: [
                    ...components,
                ],
                exports: [
                    ...components,
                    ...directives,
                    ...pipes,
                    ...validators,
                ],
            },] }
];
/** @nocollapse */
ControlModule.ctorParameters = () => [
    { type: ControlModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWlCLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7TUFFNUMsUUFBUSxHQUFHO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0NBQ1g7O01BRUssVUFBVSxHQUFHO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtDQUN4Qjs7TUFFSyxVQUFVLEdBQUc7SUFDbEIsa0JBQWtCO0NBQ2xCOztNQUVLLEtBQUssR0FBRyxFQUNiOztNQUVLLFVBQVUsR0FBRztJQUNsQixlQUFlO0lBQ2YsY0FBYztDQUNkOztNQUVLLE1BQU0sR0FBRyxFQUNkO0FBZ0NELE1BQU0sT0FBTyxhQUFhOzs7O0lBRXpCLFlBQ3lCLFlBQTJCO1FBRW5EOzs7O1VBSUU7SUFDSCxDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQ3BCLE1BQXNCO1FBRXRCLE9BQU87WUFDTixRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNO2lCQUN6QyxDQUFDO1NBQ0YsQ0FBQztJQUNILENBQUM7OztZQW5ERCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsVUFBVTtpQkFDVjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsR0FBRyxRQUFRO29CQUNYLEdBQUcsS0FBSztvQkFDUixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLEdBQUcsVUFBVTtvQkFDYixHQUFHLFVBQVU7b0JBQ2IsR0FBRyxLQUFLO29CQUNSLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2hCLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsR0FBRyxVQUFVO29CQUNiLEdBQUcsVUFBVTtvQkFDYixHQUFHLEtBQUs7b0JBQ1IsR0FBRyxVQUFVO2lCQUNiO2FBQ0Q7Ozs7WUFLdUMsYUFBYSx1QkFBbEQsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xDb25maWcsIENPTlRST0xfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvY29udHJvbC5jb25maWcnO1xyXG5pbXBvcnQgeyBDb250cm9sTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC9iYXNlL2NvbnRyb2wtYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wvY2hlY2tib3gvY29udHJvbC1jaGVja2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sL2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9jb250cm9sL2NvbnRyb2wuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbnRyb2xzQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sL2NvbnRyb2xzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xFbWFpbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC9lbWFpbC9jb250cm9sLWVtYWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xNYXJrZG93bkNvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC9tYXJrZG93bi9jb250cm9sLW1hcmtkb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wvbnVtYmVyL2NvbnRyb2wtbnVtYmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC9wYXNzd29yZC9jb250cm9sLXBhc3N3b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC9yYWRpby9jb250cm9sLXJhZGlvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wvc2VsZWN0L2NvbnRyb2wtc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sL3RleHQvY29udHJvbC10ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC90ZXh0YXJlYS9jb250cm9sLXRleHRhcmVhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4aXN0c1ZhbGlkYXRvciB9IGZyb20gJy4vZGlyZWN0aXZlcy9leGlzdHMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWF0Y2hWYWxpZGF0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWF0Y2guZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVXBwZXJjYXNlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3VwcGVyY2FzZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4vZm9ybS9mb3JtLnNlcnZpY2UnO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0Q29udHJvbFNlcnZpY2UsXHJcblx0Rm9ybVNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdENvbnRyb2xzQ29tcG9uZW50LFxyXG5cdENvbnRyb2xNb2R1bGVDb21wb25lbnQsXHJcblx0Q29udHJvbE91dGxldENvbXBvbmVudCxcclxuXHRDb250cm9sQmFzZUNvbXBvbmVudCxcclxuXHRDb250cm9sQ2hlY2tib3hDb21wb25lbnQsXHJcblx0Q29udHJvbEVtYWlsQ29tcG9uZW50LFxyXG5cdENvbnRyb2xNYXJrZG93bkNvbXBvbmVudCxcclxuXHRDb250cm9sTnVtYmVyQ29tcG9uZW50LFxyXG5cdENvbnRyb2xQYXNzd29yZENvbXBvbmVudCxcclxuXHRDb250cm9sUmFkaW9Db21wb25lbnQsXHJcblx0Q29udHJvbFNlbGVjdENvbXBvbmVudCxcclxuXHRDb250cm9sVGV4dENvbXBvbmVudCxcclxuXHRDb250cm9sVGV4dGFyZWFDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5cdFVwcGVyY2FzZURpcmVjdGl2ZSxcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXHRFeGlzdHNWYWxpZGF0b3IsXHJcblx0TWF0Y2hWYWxpZGF0b3IsXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XHQuLi5waXBlcyxcclxuXHRcdC4uLnZhbGlkYXRvcnMsXHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29udHJvbE1vZHVsZVxyXG5cdCkge1xyXG5cdFx0LypcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb250cm9sTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0XHQqL1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogQ29udHJvbENvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBDb250cm9sTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFt7XHJcblx0XHRcdFx0cHJvdmlkZTogQ09OVFJPTF9DT05GSUcsIHVzZVZhbHVlOiBjb25maWdcclxuXHRcdFx0fV1cclxuXHRcdH07XHJcblx0fVxyXG5cclxufVxyXG4iXX0=