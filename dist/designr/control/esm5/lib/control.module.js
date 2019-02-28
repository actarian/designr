/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var services = [
    ControlService,
    FormService,
];
/** @type {?} */
var components = [
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
var directives = [
    UppercaseDirective,
];
/** @type {?} */
var pipes = [];
/** @type {?} */
var validators = [
    ExistsValidator,
    MatchValidator,
];
/** @type {?} */
var guards = [];
var ControlModule = /** @class */ (function () {
    function ControlModule(parentModule) {
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
    ControlModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ControlModule,
            providers: [{
                    provide: CONTROL_CONFIG, useValue: config
                }]
        };
    };
    ControlModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CoreModule,
                    ],
                    providers: tslib_1.__spread(services, pipes, validators),
                    declarations: tslib_1.__spread(components, directives, pipes, validators),
                    entryComponents: tslib_1.__spread(components),
                    exports: tslib_1.__spread(components, directives, pipes, validators),
                },] }
    ];
    /** @nocollapse */
    ControlModule.ctorParameters = function () { return [
        { type: ControlModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return ControlModule;
}());
export { ControlModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFpQixjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRTVDLFFBQVEsR0FBRztJQUNoQixjQUFjO0lBQ2QsV0FBVztDQUNYOztJQUVLLFVBQVUsR0FBRztJQUNsQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDeEI7O0lBRUssVUFBVSxHQUFHO0lBQ2xCLGtCQUFrQjtDQUNsQjs7SUFFSyxLQUFLLEdBQUcsRUFDYjs7SUFFSyxVQUFVLEdBQUc7SUFDbEIsZUFBZTtJQUNmLGNBQWM7Q0FDZDs7SUFFSyxNQUFNLEdBQUcsRUFDZDtBQUVEO0lBZ0NDLHVCQUN5QixZQUEyQjtRQUVuRDs7OztVQUlFO0lBQ0gsQ0FBQzs7Ozs7SUFFYSxxQkFBTzs7OztJQUFyQixVQUNDLE1BQXNCO1FBRXRCLE9BQU87WUFDTixRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNO2lCQUN6QyxDQUFDO1NBQ0YsQ0FBQztJQUNILENBQUM7O2dCQW5ERCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsVUFBVTtxQkFDVjtvQkFDRCxTQUFTLG1CQUNMLFFBQVEsRUFDUixLQUFLLEVBQ0wsVUFBVSxDQUNiO29CQUNELFlBQVksbUJBQ1IsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsVUFBVSxDQUNiO29CQUNELGVBQWUsbUJBQ1gsVUFBVSxDQUNiO29CQUNELE9BQU8sbUJBQ0gsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsVUFBVSxDQUNiO2lCQUNEOzs7O2dCQUt1QyxhQUFhLHVCQUFsRCxRQUFRLFlBQUksUUFBUTs7SUFvQnZCLG9CQUFDO0NBQUEsQUFyREQsSUFxREM7U0F2QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbENvbmZpZywgQ09OVFJPTF9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9jb250cm9sLmNvbmZpZyc7XHJcbmltcG9ydCB7IENvbnRyb2xNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wtbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sL2Jhc2UvY29udHJvbC1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC9jaGVja2JveC9jb250cm9sLWNoZWNrYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wvY29udHJvbC1vdXRsZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2NvbnRyb2wvY29udHJvbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29udHJvbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wvY29udHJvbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbEVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sL2VtYWlsL2NvbnRyb2wtZW1haWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbE1hcmtkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sL21hcmtkb3duL2NvbnRyb2wtbWFya2Rvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbE51bWJlckNvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC9udW1iZXIvY29udHJvbC1udW1iZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sL3Bhc3N3b3JkL2NvbnRyb2wtcGFzc3dvcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sL3JhZGlvL2NvbnRyb2wtcmFkaW8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC9zZWxlY3QvY29udHJvbC1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFRleHRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wvdGV4dC9jb250cm9sLXRleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sL3RleHRhcmVhL2NvbnRyb2wtdGV4dGFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXhpc3RzVmFsaWRhdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2V4aXN0cy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYXRjaFZhbGlkYXRvciB9IGZyb20gJy4vZGlyZWN0aXZlcy9tYXRjaC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBVcHBlcmNhc2VEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdXBwZXJjYXNlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi9mb3JtL2Zvcm0uc2VydmljZSc7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuXHRDb250cm9sU2VydmljZSxcclxuXHRGb3JtU2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0Q29udHJvbHNDb21wb25lbnQsXHJcblx0Q29udHJvbE1vZHVsZUNvbXBvbmVudCxcclxuXHRDb250cm9sT3V0bGV0Q29tcG9uZW50LFxyXG5cdENvbnRyb2xCYXNlQ29tcG9uZW50LFxyXG5cdENvbnRyb2xDaGVja2JveENvbXBvbmVudCxcclxuXHRDb250cm9sRW1haWxDb21wb25lbnQsXHJcblx0Q29udHJvbE1hcmtkb3duQ29tcG9uZW50LFxyXG5cdENvbnRyb2xOdW1iZXJDb21wb25lbnQsXHJcblx0Q29udHJvbFBhc3N3b3JkQ29tcG9uZW50LFxyXG5cdENvbnRyb2xSYWRpb0NvbXBvbmVudCxcclxuXHRDb250cm9sU2VsZWN0Q29tcG9uZW50LFxyXG5cdENvbnRyb2xUZXh0Q29tcG9uZW50LFxyXG5cdENvbnRyb2xUZXh0YXJlYUNvbXBvbmVudCxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcblx0VXBwZXJjYXNlRGlyZWN0aXZlLFxyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5cdEV4aXN0c1ZhbGlkYXRvcixcclxuXHRNYXRjaFZhbGlkYXRvcixcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdC4uLnNlcnZpY2VzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbE1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb250cm9sTW9kdWxlXHJcblx0KSB7XHJcblx0XHQvKlxyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvbnRyb2xNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHRcdCovXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBDb250cm9sQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IENvbnRyb2xNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW3tcclxuXHRcdFx0XHRwcm92aWRlOiBDT05UUk9MX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ1xyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==