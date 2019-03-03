/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@designr/core';
import { CONTROL_CONFIG, entryComponents } from './config/control.config';
import { ControlModuleComponent } from './control-module.component';
import { ControlBaseComponent } from './control/base/control-base.component';
import { ControlOutletComponent } from './control/control-outlet.component';
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
    ControlBaseComponent,
    ...entryComponents,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWlCLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O01BRTVDLFFBQVEsR0FBRztJQUNoQixjQUFjO0lBQ2QsV0FBVztDQUNYOztNQUVLLFVBQVUsR0FBRztJQUNsQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsR0FBRyxlQUFlO0NBQ2xCOztNQUVLLFVBQVUsR0FBRztJQUNsQixrQkFBa0I7Q0FDbEI7O01BRUssS0FBSyxHQUFHLEVBQ2I7O01BRUssVUFBVSxHQUFHO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0NBQ2Q7O01BRUssTUFBTSxHQUFHLEVBQ2Q7QUFnQ0QsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFekIsWUFDeUIsWUFBMkI7UUFFbkQ7Ozs7VUFJRTtJQUNILENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FDcEIsTUFBc0I7UUFFdEIsT0FBTztZQUNOLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDO29CQUNYLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU07aUJBQ3pDLENBQUM7U0FDRixDQUFDO0lBQ0gsQ0FBQzs7O1lBbkRELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixVQUFVO2lCQUNWO2dCQUNELFNBQVMsRUFBRTtvQkFDVixHQUFHLFFBQVE7b0JBQ1gsR0FBRyxLQUFLO29CQUNSLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsR0FBRyxVQUFVO29CQUNiLEdBQUcsVUFBVTtvQkFDYixHQUFHLEtBQUs7b0JBQ1IsR0FBRyxVQUFVO2lCQUNiO2dCQUNELGVBQWUsRUFBRTtvQkFDaEIsR0FBRyxlQUFlO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsR0FBRyxVQUFVO29CQUNiLEdBQUcsVUFBVTtvQkFDYixHQUFHLEtBQUs7b0JBQ1IsR0FBRyxVQUFVO2lCQUNiO2FBQ0Q7Ozs7WUFLdUMsYUFBYSx1QkFBbEQsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xDb25maWcsIENPTlRST0xfQ09ORklHLCBlbnRyeUNvbXBvbmVudHMgfSBmcm9tICcuL2NvbmZpZy9jb250cm9sLmNvbmZpZyc7XHJcbmltcG9ydCB7IENvbnRyb2xNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wtbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sL2Jhc2UvY29udHJvbC1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wvY29udHJvbC1vdXRsZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2NvbnRyb2wvY29udHJvbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29udHJvbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wvY29udHJvbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXhpc3RzVmFsaWRhdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2V4aXN0cy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYXRjaFZhbGlkYXRvciB9IGZyb20gJy4vZGlyZWN0aXZlcy9tYXRjaC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBVcHBlcmNhc2VEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdXBwZXJjYXNlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi9mb3JtL2Zvcm0uc2VydmljZSc7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuXHRDb250cm9sU2VydmljZSxcclxuXHRGb3JtU2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0Q29udHJvbHNDb21wb25lbnQsXHJcblx0Q29udHJvbE1vZHVsZUNvbXBvbmVudCxcclxuXHRDb250cm9sT3V0bGV0Q29tcG9uZW50LFxyXG5cdENvbnRyb2xCYXNlQ29tcG9uZW50LFxyXG5cdC4uLmVudHJ5Q29tcG9uZW50cyxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcblx0VXBwZXJjYXNlRGlyZWN0aXZlLFxyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5cdEV4aXN0c1ZhbGlkYXRvcixcclxuXHRNYXRjaFZhbGlkYXRvcixcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdC4uLnNlcnZpY2VzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0Li4uZW50cnlDb21wb25lbnRzLFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XHQuLi5waXBlcyxcclxuXHRcdC4uLnZhbGlkYXRvcnMsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvbnRyb2xNb2R1bGVcclxuXHQpIHtcclxuXHRcdC8qXHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignQ29udHJvbE1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdFx0Ki9cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IENvbnRyb2xDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogQ29udHJvbE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbe1xyXG5cdFx0XHRcdHByb3ZpZGU6IENPTlRST0xfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnXHJcblx0XHRcdH1dXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19