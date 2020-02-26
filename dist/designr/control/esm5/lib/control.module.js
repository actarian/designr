import { __read, __spread } from "tslib";
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
var services = [
    ControlService,
    FormService,
];
var components = __spread([
    ControlsComponent,
    ControlModuleComponent,
    ControlOutletComponent,
    ControlComponent
], entryComponents);
var directives = [
    UppercaseDirective,
    ControlAccessor,
];
var pipes = [];
var validators = [
    ExistsValidator,
    MatchValidator,
];
var guards = [];
var ControlModule = /** @class */ (function () {
    function ControlModule(parentModule) {
        /*
        if (parentModule) {
            throw new Error('ControlModule is already loaded. Import it in the AppModule only');
        }
        */
    }
    ControlModule.forRoot = function (config) {
        return {
            ngModule: ControlModule,
            providers: [{
                    provide: CONTROL_CONFIG, useValue: config
                }]
        };
    };
    ControlModule.ɵmod = i0.ɵɵdefineNgModule({ type: ControlModule });
    ControlModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ControlModule_Factory(t) { return new (t || ControlModule)(i0.ɵɵinject(ControlModule, 12)); }, providers: __spread(services, pipes, validators), imports: [[
                CommonModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
                CoreModule,
            ]] });
    return ControlModule;
}());
export { ControlModule };
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
                providers: __spread(services, pipes, validators),
                declarations: __spread(components, directives, pipes, validators),
                entryComponents: __spread(entryComponents),
                exports: __spread(components, directives, pipes, validators),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWlCLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWxELElBQU0sUUFBUSxHQUFHO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0NBQ1gsQ0FBQztBQUVGLElBQU0sVUFBVTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtHQUNiLGVBQWUsQ0FDbEIsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2YsQ0FBQztBQUVGLElBQU0sS0FBSyxHQUFHLEVBQ2IsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0NBQ2QsQ0FBQztBQUVGLElBQU0sTUFBTSxHQUFHLEVBQ2QsQ0FBQztBQUVGO0lBZ0NDLHVCQUN5QixZQUEyQjtRQUVuRDs7OztVQUlFO0lBQ0gsQ0FBQztJQUVhLHFCQUFPLEdBQXJCLFVBQ0MsTUFBc0I7UUFFdEIsT0FBTztZQUNOLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDO29CQUNYLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU07aUJBQ3pDLENBQUM7U0FDRixDQUFDO0lBQ0gsQ0FBQztxREFyQlcsYUFBYTs2R0FBYixhQUFhLGNBR2MsYUFBYSwrQkF4QmhELFFBQVEsRUFDUixLQUFLLEVBQ0wsVUFBVSxhQVZMO2dCQUNSLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixXQUFXO2dCQUNYLG1CQUFtQjtnQkFDbkIsVUFBVTthQUNWO3dCQXJERjtDQW1HQyxBQXJERCxJQXFEQztTQXZCWSxhQUFhO3dGQUFiLGFBQWEsbUJBckR6QixpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixnQkFBZ0IsOFNBS2hCLGtCQUFrQjtRQUNsQixlQUFlO1FBT2YsZUFBZTtRQUNmLGNBQWMsYUFRYixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsVUFBVSxhQTdCWCxpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixnQkFBZ0IsOFNBS2hCLGtCQUFrQjtRQUNsQixlQUFlO1FBT2YsZUFBZTtRQUNmLGNBQWM7a0RBb0NGLGFBQWE7Y0E5QnpCLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixVQUFVO2lCQUNWO2dCQUNELFNBQVMsV0FDTCxRQUFRLEVBQ1IsS0FBSyxFQUNMLFVBQVUsQ0FDYjtnQkFDRCxZQUFZLFdBQ1IsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsVUFBVSxDQUNiO2dCQUNELGVBQWUsV0FDWCxlQUFlLENBQ2xCO2dCQUNELE9BQU8sV0FDSCxVQUFVLEVBQ1YsVUFBVSxFQUNWLEtBQUssRUFDTCxVQUFVLENBQ2I7YUFDRDtzQ0FLdUMsYUFBYTtzQkFBbEQsUUFBUTs7c0JBQUksUUFBUTs7a0RBeER0QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixnQkFBZ0IsOFNBS2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBT2YsZUFBZTtJQUNmLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xDb25maWcsIENPTlRST0xfQ09ORklHLCBlbnRyeUNvbXBvbmVudHMgfSBmcm9tICcuL2NvbmZpZy9jb250cm9sLmNvbmZpZyc7XHJcbmltcG9ydCB7IENvbnRyb2xNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wtbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wvY29udHJvbC1vdXRsZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbEFjY2Vzc29yIH0gZnJvbSAnLi9jb250cm9sL2NvbnRyb2wuYWNjZXNzb3InO1xyXG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2NvbnRyb2wvY29udHJvbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29udHJvbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wvY29udHJvbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXhpc3RzVmFsaWRhdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2V4aXN0cy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYXRjaFZhbGlkYXRvciB9IGZyb20gJy4vZGlyZWN0aXZlcy9tYXRjaC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBVcHBlcmNhc2VEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdXBwZXJjYXNlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi9mb3JtL2Zvcm0uc2VydmljZSc7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuXHRDb250cm9sU2VydmljZSxcclxuXHRGb3JtU2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0Q29udHJvbHNDb21wb25lbnQsXHJcblx0Q29udHJvbE1vZHVsZUNvbXBvbmVudCxcclxuXHRDb250cm9sT3V0bGV0Q29tcG9uZW50LFxyXG5cdENvbnRyb2xDb21wb25lbnQsXHJcblx0Li4uZW50cnlDb21wb25lbnRzLFxyXG5dO1xyXG5cclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuXHRVcHBlcmNhc2VEaXJlY3RpdmUsXHJcblx0Q29udHJvbEFjY2Vzc29yLFxyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5cdEV4aXN0c1ZhbGlkYXRvcixcclxuXHRNYXRjaFZhbGlkYXRvcixcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdC4uLnNlcnZpY2VzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0Li4uZW50cnlDb21wb25lbnRzLFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XHQuLi5waXBlcyxcclxuXHRcdC4uLnZhbGlkYXRvcnMsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvbnRyb2xNb2R1bGVcclxuXHQpIHtcclxuXHRcdC8qXHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignQ29udHJvbE1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdFx0Ki9cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IENvbnRyb2xDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogQ29udHJvbE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbe1xyXG5cdFx0XHRcdHByb3ZpZGU6IENPTlRST0xfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnXHJcblx0XHRcdH1dXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19