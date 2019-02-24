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
import { ControlComponent } from './control/control.component';
import { ControlService } from './control/control.service';
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
    ControlComponent,
    ControlModuleComponent,
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
        if (parentModule) {
            throw new Error('ControlModule is already loaded. Import it in the AppModule only');
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFpQixjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRTVDLFFBQVEsR0FBRztJQUNoQixjQUFjO0lBQ2QsV0FBVztDQUNYOztJQUVLLFVBQVUsR0FBRztJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0NBQ3RCOztJQUVLLFVBQVUsR0FBRztJQUNsQixrQkFBa0I7Q0FDbEI7O0lBRUssS0FBSyxHQUFHLEVBQ2I7O0lBRUssVUFBVSxHQUFHO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0NBQ2Q7O0lBRUssTUFBTSxHQUFHLEVBQ2Q7QUFFRDtJQTZCQyx1QkFDeUIsWUFBMkI7UUFFbkQsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1NBQ3BGO0lBQ0YsQ0FBQzs7Ozs7SUFFYSxxQkFBTzs7OztJQUFyQixVQUNDLE1BQXNCO1FBRXRCLE9BQU87WUFDTixRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNO2lCQUN6QyxDQUFDO1NBQ0YsQ0FBQztJQUNILENBQUM7O2dCQTlDRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsVUFBVTtxQkFDVjtvQkFDRCxTQUFTLG1CQUNMLFFBQVEsRUFDUixLQUFLLEVBQ0wsVUFBVSxDQUNiO29CQUNELFlBQVksbUJBQ1IsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsVUFBVSxDQUNiO29CQUNELE9BQU8sbUJBQ0gsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsVUFBVSxDQUNiO2lCQUNEOzs7O2dCQUt1QyxhQUFhLHVCQUFsRCxRQUFRLFlBQUksUUFBUTs7SUFrQnZCLG9CQUFDO0NBQUEsQUFoREQsSUFnREM7U0FyQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbENvbmZpZywgQ09OVFJPTF9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9jb250cm9sLmNvbmZpZyc7XHJcbmltcG9ydCB7IENvbnRyb2xNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wtbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4vY29udHJvbC9jb250cm9sLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeGlzdHNWYWxpZGF0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZXhpc3RzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1hdGNoVmFsaWRhdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21hdGNoLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFVwcGVyY2FzZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy91cHBlcmNhc2UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuL2Zvcm0vZm9ybS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdENvbnRyb2xTZXJ2aWNlLFxyXG5cdEZvcm1TZXJ2aWNlLFxyXG5dO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuXHRDb250cm9sQ29tcG9uZW50LFxyXG5cdENvbnRyb2xNb2R1bGVDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5cdFVwcGVyY2FzZURpcmVjdGl2ZSxcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXHRFeGlzdHNWYWxpZGF0b3IsXHJcblx0TWF0Y2hWYWxpZGF0b3IsXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XHQuLi5waXBlcyxcclxuXHRcdC4uLnZhbGlkYXRvcnMsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29udHJvbE1vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvbnRyb2xNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IENvbnRyb2xDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogQ29udHJvbE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbe1xyXG5cdFx0XHRcdHByb3ZpZGU6IENPTlRST0xfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnXHJcblx0XHRcdH1dXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19