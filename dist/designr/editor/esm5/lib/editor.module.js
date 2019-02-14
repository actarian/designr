/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { EDITOR_CONFIG } from './config/editor.config';
import { EditorService } from './config/editor.service';
import { EditorModuleComponent } from './editor-module.component';
import { EditorComponent } from './editor/editor.component';
/** @type {?} */
var modules = [
    MarkdownModule,
    CoreModule,
];
/** @type {?} */
var services = [
    EditorService,
];
/** @type {?} */
var components = [
    EditorModuleComponent,
    EditorComponent,
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
};
var EditorModule = /** @class */ (function () {
    function EditorModule(parentModule) {
        if (parentModule) {
            throw new Error('EditorModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    EditorModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: EditorModule,
            providers: [
                { provide: EDITOR_CONFIG, useValue: config || {} },
            ]
        };
    };
    EditorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MarkdownModule.forRoot({
                            markedOptions: {
                                provide: MarkedOptions,
                                useValue: ɵ0,
                            },
                        }),
                        CoreModule,
                    ],
                    providers: tslib_1.__spread(services),
                    declarations: tslib_1.__spread(components),
                    exports: tslib_1.__spread(modules, components),
                },] }
    ];
    /** @nocollapse */
    EditorModule.ctorParameters = function () { return [
        { type: EditorModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return EditorModule;
}());
export { EditorModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFBZ0IsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUFFdEQsT0FBTyxHQUFHO0lBQ2YsY0FBYztJQUNkLFVBQVU7Q0FDVjs7SUFFSyxRQUFRLEdBQUc7SUFDaEIsYUFBYTtDQUNiOztJQUVLLFVBQVUsR0FBRztJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtDQUNmOztJQUVLLFVBQVUsR0FBRyxFQUNsQjs7SUFFSyxLQUFLLEdBQUcsRUFDYjs7SUFFSyxVQUFVLEdBQUcsRUFDbEI7O0lBRUssTUFBTSxHQUFHLEVBQ2Q7U0FPYTtBQUNULGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtDQUNyQjtBQWJMO0lBZ0NDLHNCQUN5QixZQUEwQjtRQUVsRCxJQUFJLFlBQVksRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7U0FDbkY7SUFDRixDQUFDOzs7OztJQUVhLG9CQUFPOzs7O0lBQXJCLFVBQ0MsTUFBcUI7UUFFckIsT0FBTztZQUNOLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sSUFBSSxFQUFFLEVBQUU7YUFDbEQ7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7Z0JBakRELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsY0FBYyxDQUFDLE9BQU8sQ0FBQzs0QkFDdEIsYUFBYSxFQUFFO2dDQUNkLE9BQU8sRUFBRSxhQUFhO2dDQUN0QixRQUFRLElBUVA7NkJBQ0Q7eUJBQ0QsQ0FBQzt3QkFDRixVQUFVO3FCQUNWO29CQUNELFNBQVMsbUJBQ0wsUUFBUSxDQUNYO29CQUNELFlBQVksbUJBQ1IsVUFBVSxDQUNiO29CQUNELE9BQU8sbUJBQ0gsT0FBTyxFQUNQLFVBQVUsQ0FDYjtpQkFDRDs7OztnQkFLdUMsWUFBWSx1QkFBakQsUUFBUSxZQUFJLFFBQVE7O0lBa0J2QixtQkFBQztDQUFBLEFBbkRELElBbURDO1NBckJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgTWFya2Rvd25Nb2R1bGUsIE1hcmtlZE9wdGlvbnMgfSBmcm9tICduZ3gtbWFya2Rvd24nO1xyXG5pbXBvcnQgeyBFZGl0b3JDb25maWcsIEVESVRPUl9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9lZGl0b3IuY29uZmlnJztcclxuaW1wb3J0IHsgRWRpdG9yU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2VkaXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRWRpdG9yTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0b3ItbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdG9yL2VkaXRvci5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgbW9kdWxlcyA9IFtcclxuXHRNYXJrZG93bk1vZHVsZSxcclxuXHRDb3JlTW9kdWxlLFxyXG5dO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0RWRpdG9yU2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0RWRpdG9yTW9kdWxlQ29tcG9uZW50LFxyXG5cdEVkaXRvckNvbXBvbmVudCxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE1hcmtkb3duTW9kdWxlLmZvclJvb3Qoe1xyXG5cdFx0XHRtYXJrZWRPcHRpb25zOiB7XHJcblx0XHRcdFx0cHJvdmlkZTogTWFya2VkT3B0aW9ucyxcclxuXHRcdFx0XHR1c2VWYWx1ZToge1xyXG5cdFx0XHRcdFx0Ly8gZ2ZtOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gdGFibGVzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gYnJlYWtzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gcGVkYW50aWM6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBzYW5pdGl6ZTogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHNtYXJ0TGlzdHM6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBzbWFydHlwYW50czogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSksXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdC4uLm1vZHVsZXMsXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEVkaXRvck1vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VkaXRvck1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogRWRpdG9yQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IEVkaXRvck1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0eyBwcm92aWRlOiBFRElUT1JfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIHx8IHt9IH0sXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG5cclxufVxyXG4iXX0=