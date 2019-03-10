/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var services = [
    ControlService,
    FormService,
];
/** @type {?} */
var components = tslib_1.__spread([
    ControlsComponent,
    ControlModuleComponent,
    ControlOutletComponent,
    ControlComponent
], entryComponents);
/** @type {?} */
var directives = [
    UppercaseDirective,
    ControlAccessor,
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
                    entryComponents: tslib_1.__spread(entryComponents),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFpQixjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFFNUMsUUFBUSxHQUFHO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0NBQ1g7O0lBRUssVUFBVTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtHQUNiLGVBQWUsQ0FDbEI7O0lBRUssVUFBVSxHQUFHO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2Y7O0lBRUssS0FBSyxHQUFHLEVBQ2I7O0lBRUssVUFBVSxHQUFHO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0NBQ2Q7O0lBRUssTUFBTSxHQUFHLEVBQ2Q7QUFFRDtJQWdDQyx1QkFDeUIsWUFBMkI7UUFFbkQ7Ozs7VUFJRTtJQUNILENBQUM7Ozs7O0lBRWEscUJBQU87Ozs7SUFBckIsVUFDQyxNQUFzQjtRQUV0QixPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLENBQUM7b0JBQ1gsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTTtpQkFDekMsQ0FBQztTQUNGLENBQUM7SUFDSCxDQUFDOztnQkFuREQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFVBQVU7cUJBQ1Y7b0JBQ0QsU0FBUyxtQkFDTCxRQUFRLEVBQ1IsS0FBSyxFQUNMLFVBQVUsQ0FDYjtvQkFDRCxZQUFZLG1CQUNSLFVBQVUsRUFDVixVQUFVLEVBQ1YsS0FBSyxFQUNMLFVBQVUsQ0FDYjtvQkFDRCxlQUFlLG1CQUNYLGVBQWUsQ0FDbEI7b0JBQ0QsT0FBTyxtQkFDSCxVQUFVLEVBQ1YsVUFBVSxFQUNWLEtBQUssRUFDTCxVQUFVLENBQ2I7aUJBQ0Q7Ozs7Z0JBS3VDLGFBQWEsdUJBQWxELFFBQVEsWUFBSSxRQUFROztJQW9CdkIsb0JBQUM7Q0FBQSxBQXJERCxJQXFEQztTQXZCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29uZmlnLCBDT05UUk9MX0NPTkZJRywgZW50cnlDb21wb25lbnRzIH0gZnJvbSAnLi9jb25maWcvY29udHJvbC5jb25maWcnO1xyXG5pbXBvcnQgeyBDb250cm9sTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sL2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xBY2Nlc3NvciB9IGZyb20gJy4vY29udHJvbC9jb250cm9sLmFjY2Vzc29yJztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9jb250cm9sL2NvbnRyb2wuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbnRyb2xzQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sL2NvbnRyb2xzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4aXN0c1ZhbGlkYXRvciB9IGZyb20gJy4vZGlyZWN0aXZlcy9leGlzdHMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWF0Y2hWYWxpZGF0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWF0Y2guZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVXBwZXJjYXNlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3VwcGVyY2FzZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4vZm9ybS9mb3JtLnNlcnZpY2UnO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0Q29udHJvbFNlcnZpY2UsXHJcblx0Rm9ybVNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdENvbnRyb2xzQ29tcG9uZW50LFxyXG5cdENvbnRyb2xNb2R1bGVDb21wb25lbnQsXHJcblx0Q29udHJvbE91dGxldENvbXBvbmVudCxcclxuXHRDb250cm9sQ29tcG9uZW50LFxyXG5cdC4uLmVudHJ5Q29tcG9uZW50cyxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcblx0VXBwZXJjYXNlRGlyZWN0aXZlLFxyXG5cdENvbnRyb2xBY2Nlc3NvcixcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXHRFeGlzdHNWYWxpZGF0b3IsXHJcblx0TWF0Y2hWYWxpZGF0b3IsXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XHQuLi5waXBlcyxcclxuXHRcdC4uLnZhbGlkYXRvcnMsXHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdC4uLmVudHJ5Q29tcG9uZW50cyxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbE1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb250cm9sTW9kdWxlXHJcblx0KSB7XHJcblx0XHQvKlxyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvbnRyb2xNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHRcdCovXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBDb250cm9sQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IENvbnRyb2xNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW3tcclxuXHRcdFx0XHRwcm92aWRlOiBDT05UUk9MX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ1xyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==