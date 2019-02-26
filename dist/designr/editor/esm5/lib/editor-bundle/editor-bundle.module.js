/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlModule } from '@designr/control';
import { CoreModule } from '@designr/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { EditorRootComponent } from './editor-root.component';
/** @type {?} */
var services = [];
/** @type {?} */
var components = [
    EditorRootComponent,
];
/** @type {?} */
var directives = [];
/** @type {?} */
var pipes = [];
/** @type {?} */
var validators = [];
/** @type {?} */
var guards = [];
var ɵ0 = {
// gfm: true,
// tables: true,
// breaks: true,
// pedantic: true,
// sanitize: true,
// smartLists: true,
// smartypants: true,
}, ɵ1 = EditorRootComponent;
var EditorBundleModule = /** @class */ (function () {
    function EditorBundleModule(parentModule) {
        if (parentModule) {
            throw new Error('EditorBundleModule is already loaded. Import it in the AppModule only');
        }
    }
    EditorBundleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MarkdownModule.forRoot({
                            markedOptions: {
                                provide: MarkedOptions,
                                useValue: ɵ0,
                            },
                        }),
                        CoreModule,
                        ControlModule,
                    ],
                    providers: tslib_1.__spread([
                        { provide: 'LAZY_ROOT_COMPONENT', useValue: ɵ1 }
                    ], services),
                    declarations: tslib_1.__spread([
                        EditorRootComponent
                    ], components),
                    entryComponents: [
                        EditorRootComponent,
                    ],
                    exports: tslib_1.__spread(components),
                },] }
    ];
    /** @nocollapse */
    EditorBundleModule.ctorParameters = function () { return [
        { type: EditorBundleModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return EditorBundleModule;
}());
export { EditorBundleModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLWJ1bmRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvZWRpdG9yLWJ1bmRsZS9lZGl0b3ItYnVuZGxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQUV4RCxRQUFRLEdBQUcsRUFDaEI7O0lBRUssVUFBVSxHQUFHO0lBQ2xCLG1CQUFtQjtDQUNuQjs7SUFFSyxVQUFVLEdBQUcsRUFDbEI7O0lBRUssS0FBSyxHQUFHLEVBQ2I7O0lBRUssVUFBVSxHQUFHLEVBQ2xCOztJQUVLLE1BQU0sR0FBRyxFQUNkO1NBVWE7QUFDVCxhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixxQkFBcUI7Q0FDckIsT0FPeUMsbUJBQW1CO0FBdkJqRTtJQXdDQyw0QkFDeUIsWUFBZ0M7UUFFeEQsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO1NBQ3pGO0lBQ0YsQ0FBQzs7Z0JBOUNELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsY0FBYyxDQUFDLE9BQU8sQ0FBQzs0QkFDdEIsYUFBYSxFQUFFO2dDQUNkLE9BQU8sRUFBRSxhQUFhO2dDQUN0QixRQUFRLElBUVA7NkJBQ0Q7eUJBQ0QsQ0FBQzt3QkFDRixVQUFVO3dCQUNWLGFBQWE7cUJBQ2I7b0JBQ0QsU0FBUzt3QkFDUixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLElBQXFCLEVBQUU7dUJBQzlELFFBQVEsQ0FDWDtvQkFDRCxZQUFZO3dCQUNYLG1CQUFtQjt1QkFDaEIsVUFBVSxDQUNiO29CQUNELGVBQWUsRUFBRTt3QkFDaEIsbUJBQW1CO3FCQUNuQjtvQkFDRCxPQUFPLG1CQUNILFVBQVUsQ0FDYjtpQkFDRDs7OztnQkFLdUMsa0JBQWtCLHVCQUF2RCxRQUFRLFlBQUksUUFBUTs7SUFPdkIseUJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQVZZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbnRyb2xNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb250cm9sJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXJrZG93bk1vZHVsZSwgTWFya2VkT3B0aW9ucyB9IGZyb20gJ25neC1tYXJrZG93bic7XHJcbmltcG9ydCB7IEVkaXRvclJvb3RDb21wb25lbnQgfSBmcm9tICcuL2VkaXRvci1yb290LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0RWRpdG9yUm9vdENvbXBvbmVudCxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdE1hcmtkb3duTW9kdWxlLmZvclJvb3Qoe1xyXG5cdFx0XHRtYXJrZWRPcHRpb25zOiB7XHJcblx0XHRcdFx0cHJvdmlkZTogTWFya2VkT3B0aW9ucyxcclxuXHRcdFx0XHR1c2VWYWx1ZToge1xyXG5cdFx0XHRcdFx0Ly8gZ2ZtOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gdGFibGVzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gYnJlYWtzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gcGVkYW50aWM6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBzYW5pdGl6ZTogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHNtYXJ0TGlzdHM6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBzbWFydHlwYW50czogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSksXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0Q29udHJvbE1vZHVsZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0eyBwcm92aWRlOiAnTEFaWV9ST09UX0NPTVBPTkVOVCcsIHVzZVZhbHVlOiBFZGl0b3JSb290Q29tcG9uZW50IH0sXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0RWRpdG9yUm9vdENvbXBvbmVudCxcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdEVkaXRvclJvb3RDb21wb25lbnQsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yQnVuZGxlTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEVkaXRvckJ1bmRsZU1vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VkaXRvckJ1bmRsZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19