/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@designr/core';
import { CONTROL_CONFIG, entryComponents } from './config/control.config';
import { ControlModuleComponent } from './control-module.component';
import { ControlOutletComponent } from './control/control-outlet.component';
import { ControlAccessor } from './control/control.accessor';
import { ControlComponent } from './control/control.component';
import { ControlService } from './control/control.service';
import { ControlsComponent } from './control/controls.component';
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
    ControlComponent,
    ...entryComponents,
];
/** @type {?} */
const directives = [
    UppercaseDirective,
    ControlAccessor,
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
                    ...entryComponents,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWlCLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztNQUU1QyxRQUFRLEdBQUc7SUFDaEIsY0FBYztJQUNkLFdBQVc7Q0FDWDs7TUFFSyxVQUFVLEdBQUc7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLEdBQUcsZUFBZTtDQUNsQjs7TUFFSyxVQUFVLEdBQUc7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDZjs7TUFFSyxLQUFLLEdBQUcsRUFDYjs7TUFFSyxVQUFVLEdBQUc7SUFDbEIsZUFBZTtJQUNmLGNBQWM7Q0FDZDs7TUFFSyxNQUFNLEdBQUcsRUFDZDtBQWdDRCxNQUFNLE9BQU8sYUFBYTs7OztJQUV6QixZQUN5QixZQUEyQjtRQUVuRDs7OztVQUlFO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUNwQixNQUFzQjtRQUV0QixPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLENBQUM7b0JBQ1gsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTTtpQkFDekMsQ0FBQztTQUNGLENBQUM7SUFDSCxDQUFDOzs7WUFuREQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFVBQVU7aUJBQ1Y7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLEdBQUcsUUFBUTtvQkFDWCxHQUFHLEtBQUs7b0JBQ1IsR0FBRyxVQUFVO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDYixHQUFHLFVBQVU7b0JBQ2IsR0FBRyxVQUFVO29CQUNiLEdBQUcsS0FBSztvQkFDUixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsZUFBZSxFQUFFO29CQUNoQixHQUFHLGVBQWU7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRTtvQkFDUixHQUFHLFVBQVU7b0JBQ2IsR0FBRyxVQUFVO29CQUNiLEdBQUcsS0FBSztvQkFDUixHQUFHLFVBQVU7aUJBQ2I7YUFDRDs7OztZQUt1QyxhQUFhLHVCQUFsRCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbENvbmZpZywgQ09OVFJPTF9DT05GSUcsIGVudHJ5Q29tcG9uZW50cyB9IGZyb20gJy4vY29uZmlnL2NvbnRyb2wuY29uZmlnJztcclxuaW1wb3J0IHsgQ29udHJvbE1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC1tb2R1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbE91dGxldENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC9jb250cm9sLW91dGxldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sQWNjZXNzb3IgfSBmcm9tICcuL2NvbnRyb2wvY29udHJvbC5hY2Nlc3Nvcic7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4vY29udHJvbC9jb250cm9sLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb250cm9sc0NvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC9jb250cm9scy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFeGlzdHNWYWxpZGF0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZXhpc3RzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1hdGNoVmFsaWRhdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21hdGNoLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFVwcGVyY2FzZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy91cHBlcmNhc2UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuL2Zvcm0vZm9ybS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdENvbnRyb2xTZXJ2aWNlLFxyXG5cdEZvcm1TZXJ2aWNlLFxyXG5dO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuXHRDb250cm9sc0NvbXBvbmVudCxcclxuXHRDb250cm9sTW9kdWxlQ29tcG9uZW50LFxyXG5cdENvbnRyb2xPdXRsZXRDb21wb25lbnQsXHJcblx0Q29udHJvbENvbXBvbmVudCxcclxuXHQuLi5lbnRyeUNvbXBvbmVudHMsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5cdFVwcGVyY2FzZURpcmVjdGl2ZSxcclxuXHRDb250cm9sQWNjZXNzb3IsXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcblx0RXhpc3RzVmFsaWRhdG9yLFxyXG5cdE1hdGNoVmFsaWRhdG9yLFxyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0Li4uc2VydmljZXMsXHJcblx0XHQuLi5waXBlcyxcclxuXHRcdC4uLnZhbGlkYXRvcnMsXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHQuLi5lbnRyeUNvbXBvbmVudHMsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29udHJvbE1vZHVsZVxyXG5cdCkge1xyXG5cdFx0LypcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb250cm9sTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0XHQqL1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogQ29udHJvbENvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBDb250cm9sTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFt7XHJcblx0XHRcdFx0cHJvdmlkZTogQ09OVFJPTF9DT05GSUcsIHVzZVZhbHVlOiBjb25maWdcclxuXHRcdFx0fV1cclxuXHRcdH07XHJcblx0fVxyXG5cclxufVxyXG4iXX0=