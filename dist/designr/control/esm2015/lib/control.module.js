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
import * as i0 from "@angular/core";
import * as i1 from "./control/checkbox/control-checkbox.component";
import * as i2 from "./control/email/control-email.component";
import * as i3 from "./control/group/control-group.component";
import * as i4 from "./control/info/control-info.component";
import * as i5 from "./control/markdown/control-markdown.component";
import * as i6 from "./control/number/control-number.component";
import * as i7 from "./control/password/control-password.component";
import * as i8 from "./control/radio/control-radio.component";
import * as i9 from "./control/select/control-select.component";
import * as i10 from "./control/text/control-text.component";
import * as i11 from "./control/textarea/control-textarea.component";
import * as i12 from "@angular/common";
import * as i13 from "@angular/forms";
import * as i14 from "@designr/core";
const services = [
    ControlService,
    FormService,
];
const components = [
    ControlsComponent,
    ControlModuleComponent,
    ControlOutletComponent,
    ControlComponent,
    ...entryComponents,
];
const directives = [
    UppercaseDirective,
    ControlAccessor,
];
const pipes = [];
const validators = [
    ExistsValidator,
    MatchValidator,
];
const guards = [];
export class ControlModule {
    constructor(parentModule) {
        /*
        if (parentModule) {
            throw new Error('ControlModule is already loaded. Import it in the AppModule only');
        }
        */
    }
    static forRoot(config) {
        return {
            ngModule: ControlModule,
            providers: [{
                    provide: CONTROL_CONFIG, useValue: config
                }]
        };
    }
}
ControlModule.ɵmod = i0.ɵɵdefineNgModule({ type: ControlModule });
ControlModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ControlModule_Factory(t) { return new (t || ControlModule)(i0.ɵɵinject(ControlModule, 12)); }, providers: [
        ...services,
        ...pipes,
        ...validators,
    ], imports: [[
            CommonModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            CoreModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ControlModule, { declarations: [ControlsComponent,
        ControlModuleComponent,
        ControlOutletComponent,
        ControlComponent, i1.ControlCheckboxComponent, i2.ControlEmailComponent, i3.ControlGroupComponent, i4.ControlInfoComponent, i5.ControlMarkdownComponent, i6.ControlNumberComponent, i7.ControlPasswordComponent, i8.ControlRadioComponent, i9.ControlSelectComponent, i10.ControlTextComponent, i11.ControlTextareaComponent, UppercaseDirective,
        ControlAccessor,
        ExistsValidator,
        MatchValidator], imports: [CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule], exports: [ControlsComponent,
        ControlModuleComponent,
        ControlOutletComponent,
        ControlComponent, i1.ControlCheckboxComponent, i2.ControlEmailComponent, i3.ControlGroupComponent, i4.ControlInfoComponent, i5.ControlMarkdownComponent, i6.ControlNumberComponent, i7.ControlPasswordComponent, i8.ControlRadioComponent, i9.ControlSelectComponent, i10.ControlTextComponent, i11.ControlTextareaComponent, UppercaseDirective,
        ControlAccessor,
        ExistsValidator,
        MatchValidator] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], function () { return [{ type: ControlModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
i0.ɵɵsetComponentScope(i3.ControlGroupComponent, [ControlsComponent,
    ControlModuleComponent,
    ControlOutletComponent,
    ControlComponent, i1.ControlCheckboxComponent, i2.ControlEmailComponent, i3.ControlGroupComponent, i4.ControlInfoComponent, i5.ControlMarkdownComponent, i6.ControlNumberComponent, i7.ControlPasswordComponent, i8.ControlRadioComponent, i9.ControlSelectComponent, i10.ControlTextComponent, i11.ControlTextareaComponent, UppercaseDirective,
    ControlAccessor,
    ExistsValidator,
    MatchValidator, i12.NgClass, i12.NgComponentOutlet, i12.NgForOf, i12.NgIf, i12.NgTemplateOutlet, i12.NgStyle, i12.NgSwitch, i12.NgSwitchCase, i12.NgSwitchDefault, i12.NgPlural, i12.NgPluralCase, i13.ɵangular_packages_forms_forms_y, i13.NgSelectOption, i13.ɵangular_packages_forms_forms_x, i13.DefaultValueAccessor, i13.NumberValueAccessor, i13.RangeValueAccessor, i13.CheckboxControlValueAccessor, i13.SelectControlValueAccessor, i13.SelectMultipleControlValueAccessor, i13.RadioControlValueAccessor, i13.NgControlStatus, i13.NgControlStatusGroup, i13.RequiredValidator, i13.MinLengthValidator, i13.MaxLengthValidator, i13.PatternValidator, i13.CheckboxRequiredValidator, i13.EmailValidator, i13.NgModel, i13.NgModelGroup, i13.NgForm, i13.FormControlDirective, i13.FormGroupDirective, i13.FormControlName, i13.FormGroupName, i13.FormArrayName, i14.CoreModuleComponent, i14.DisposableComponent, i14.DisposableDirective, i14.JsonFormatterComponent, i14.LoggerComponent, i14.OutletComponent, i14.OutletDefaultComponent, i14.OutletRepeaterComponent, i14.BundleDirective, i14.DefaultContentDirective, i14.LabelDirective, i14.TranslateDirective], [i12.AsyncPipe, i12.UpperCasePipe, i12.LowerCasePipe, i12.JsonPipe, i12.SlicePipe, i12.DecimalPipe, i12.PercentPipe, i12.TitleCasePipe, i12.CurrencyPipe, i12.DatePipe, i12.I18nPluralPipe, i12.I18nSelectPipe, i12.KeyValuePipe, i14.AssetPipe, i14.CustomAsyncPipe, i14.HighlightPipe, i14.ImagePipe, i14.ImageUrlPipe, i14.LabelPipe, i14.PublicPipe, i14.RoutePipe, i14.SafeStylePipe, i14.SafeUrlPipe, i14.SegmentPipe, i14.SlugPipe, i14.TranslatePipe, i14.TrustPipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBaUIsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEQsTUFBTSxRQUFRLEdBQUc7SUFDaEIsY0FBYztJQUNkLFdBQVc7Q0FDWCxDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUc7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLEdBQUcsZUFBZTtDQUNsQixDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUc7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDZixDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQUcsRUFDYixDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUc7SUFDbEIsZUFBZTtJQUNmLGNBQWM7Q0FDZCxDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsRUFDZCxDQUFDO0FBZ0NGLE1BQU0sT0FBTyxhQUFhO0lBRXpCLFlBQ3lCLFlBQTJCO1FBRW5EOzs7O1VBSUU7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FDcEIsTUFBc0I7UUFFdEIsT0FBTztZQUNOLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDO29CQUNYLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU07aUJBQ3pDLENBQUM7U0FDRixDQUFDO0lBQ0gsQ0FBQzs7aURBckJXLGFBQWE7eUdBQWIsYUFBYSxjQUdjLGFBQWEsc0JBekJ6QztRQUNWLEdBQUcsUUFBUTtRQUNYLEdBQUcsS0FBSztRQUNSLEdBQUcsVUFBVTtLQUNiLFlBWFE7WUFDUixZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsVUFBVTtTQUNWO3dGQXVCVyxhQUFhLG1CQXJEekIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsZ0JBQWdCLDhTQUtoQixrQkFBa0I7UUFDbEIsZUFBZTtRQU9mLGVBQWU7UUFDZixjQUFjLGFBUWIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLFVBQVUsYUE3QlgsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsZ0JBQWdCLDhTQUtoQixrQkFBa0I7UUFDbEIsZUFBZTtRQU9mLGVBQWU7UUFDZixjQUFjO2tEQW9DRixhQUFhO2NBOUJ6QixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsVUFBVTtpQkFDVjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsR0FBRyxRQUFRO29CQUNYLEdBQUcsS0FBSztvQkFDUixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLEdBQUcsVUFBVTtvQkFDYixHQUFHLFVBQVU7b0JBQ2IsR0FBRyxLQUFLO29CQUNSLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2hCLEdBQUcsZUFBZTtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLEdBQUcsVUFBVTtvQkFDYixHQUFHLFVBQVU7b0JBQ2IsR0FBRyxLQUFLO29CQUNSLEdBQUcsVUFBVTtpQkFDYjthQUNEO3NDQUt1QyxhQUFhO3NCQUFsRCxRQUFROztzQkFBSSxRQUFROztrREF4RHRCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGdCQUFnQiw4U0FLaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFPZixlQUFlO0lBQ2YsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbENvbmZpZywgQ09OVFJPTF9DT05GSUcsIGVudHJ5Q29tcG9uZW50cyB9IGZyb20gJy4vY29uZmlnL2NvbnRyb2wuY29uZmlnJztcclxuaW1wb3J0IHsgQ29udHJvbE1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC1tb2R1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbE91dGxldENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC9jb250cm9sLW91dGxldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sQWNjZXNzb3IgfSBmcm9tICcuL2NvbnRyb2wvY29udHJvbC5hY2Nlc3Nvcic7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4vY29udHJvbC9jb250cm9sLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb250cm9sc0NvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC9jb250cm9scy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFeGlzdHNWYWxpZGF0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZXhpc3RzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1hdGNoVmFsaWRhdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21hdGNoLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFVwcGVyY2FzZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy91cHBlcmNhc2UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuL2Zvcm0vZm9ybS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdENvbnRyb2xTZXJ2aWNlLFxyXG5cdEZvcm1TZXJ2aWNlLFxyXG5dO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuXHRDb250cm9sc0NvbXBvbmVudCxcclxuXHRDb250cm9sTW9kdWxlQ29tcG9uZW50LFxyXG5cdENvbnRyb2xPdXRsZXRDb21wb25lbnQsXHJcblx0Q29udHJvbENvbXBvbmVudCxcclxuXHQuLi5lbnRyeUNvbXBvbmVudHMsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5cdFVwcGVyY2FzZURpcmVjdGl2ZSxcclxuXHRDb250cm9sQWNjZXNzb3IsXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcblx0RXhpc3RzVmFsaWRhdG9yLFxyXG5cdE1hdGNoVmFsaWRhdG9yLFxyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0Li4uc2VydmljZXMsXHJcblx0XHQuLi5waXBlcyxcclxuXHRcdC4uLnZhbGlkYXRvcnMsXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHQuLi5lbnRyeUNvbXBvbmVudHMsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29udHJvbE1vZHVsZVxyXG5cdCkge1xyXG5cdFx0LypcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb250cm9sTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0XHQqL1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogQ29udHJvbENvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBDb250cm9sTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFt7XHJcblx0XHRcdFx0cHJvdmlkZTogQ09OVFJPTF9DT05GSUcsIHVzZVZhbHVlOiBjb25maWdcclxuXHRcdFx0fV1cclxuXHRcdH07XHJcblx0fVxyXG5cclxufVxyXG4iXX0=