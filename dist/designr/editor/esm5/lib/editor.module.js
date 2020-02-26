import { __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { EDITOR_CONFIG } from './config/editor.config';
import { EditorService } from './config/editor.service';
import { EditorModuleComponent } from './editor-module.component';
import { PanelComponent } from './panel/panel.component';
import * as i0 from "@angular/core";
var services = [
    EditorService,
];
var components = [
    EditorModuleComponent,
    PanelComponent,
];
var directives = [];
var pipes = [];
var validators = [];
var guards = [];
var EditorModule = /** @class */ (function () {
    function EditorModule(parentModule) {
        if (parentModule) {
            throw new Error('EditorModule is already loaded. Import it in the AppModule only');
        }
    }
    EditorModule.forRoot = function (config) {
        return {
            ngModule: EditorModule,
            providers: [
                { provide: EDITOR_CONFIG, useValue: config },
            ]
        };
    };
    EditorModule.ɵmod = i0.ɵɵdefineNgModule({ type: EditorModule });
    EditorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EditorModule_Factory(t) { return new (t || EditorModule)(i0.ɵɵinject(EditorModule, 12)); }, providers: __spread(services), imports: [[
                CommonModule,
                CoreModule,
            ],
            CoreModule] });
    return EditorModule;
}());
export { EditorModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EditorModule, { declarations: [EditorModuleComponent,
        PanelComponent], imports: [CommonModule,
        CoreModule], exports: [CoreModule,
        EditorModuleComponent,
        PanelComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EditorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                ],
                providers: __spread(services),
                declarations: __spread(components, directives),
                exports: __spread([
                    CoreModule
                ], components),
            }]
    }], function () { return [{ type: EditorModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBZ0IsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFekQsSUFBTSxRQUFRLEdBQUc7SUFDaEIsYUFBYTtDQUNiLENBQUM7QUFFRixJQUFNLFVBQVUsR0FBRztJQUNsQixxQkFBcUI7SUFDckIsY0FBYztDQUNkLENBQUM7QUFFRixJQUFNLFVBQVUsR0FBRyxFQUNsQixDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQUcsRUFDYixDQUFDO0FBRUYsSUFBTSxVQUFVLEdBQUcsRUFDbEIsQ0FBQztBQUVGLElBQU0sTUFBTSxHQUFHLEVBQ2QsQ0FBQztBQUVGO0lBb0JDLHNCQUN5QixZQUEwQjtRQUVsRCxJQUFJLFlBQVksRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7U0FDbkY7SUFDRixDQUFDO0lBRWEsb0JBQU8sR0FBckIsVUFDQyxNQUFxQjtRQUVyQixPQUFPO1lBQ04sUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQzVDO1NBQ0QsQ0FBQztJQUNILENBQUM7b0RBbkJXLFlBQVk7MkdBQVosWUFBWSxjQUdlLFlBQVksK0JBZi9DLFFBQVEsYUFMSDtnQkFDUixZQUFZO2dCQUNaLFVBQVU7YUFDVjtZQVNBLFVBQVU7dUJBMUNaO0NBb0VDLEFBdkNELElBdUNDO1NBckJZLFlBQVk7d0ZBQVosWUFBWSxtQkFsQ3hCLHFCQUFxQjtRQUNyQixjQUFjLGFBaUJiLFlBQVk7UUFDWixVQUFVLGFBVVYsVUFBVTtRQTdCWCxxQkFBcUI7UUFDckIsY0FBYztrREFpQ0YsWUFBWTtjQWxCeEIsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFVBQVU7aUJBQ1Y7Z0JBQ0QsU0FBUyxXQUNMLFFBQVEsQ0FDWDtnQkFDRCxZQUFZLFdBQ1IsVUFBVSxFQUNWLFVBQVUsQ0FDYjtnQkFDRCxPQUFPO29CQUNOLFVBQVU7bUJBQ1AsVUFBVSxDQUNiO2FBQ0Q7c0NBS3VDLFlBQVk7c0JBQWpELFFBQVE7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgRWRpdG9yQ29uZmlnLCBFRElUT1JfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvZWRpdG9yLmNvbmZpZyc7XHJcbmltcG9ydCB7IEVkaXRvclNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9lZGl0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEVkaXRvck1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vZWRpdG9yLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vcGFuZWwvcGFuZWwuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdEVkaXRvclNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdEVkaXRvck1vZHVsZUNvbXBvbmVudCxcclxuXHRQYW5lbENvbXBvbmVudCxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdC4uLnNlcnZpY2VzLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEVkaXRvck1vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VkaXRvck1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogRWRpdG9yQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IEVkaXRvck1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0eyBwcm92aWRlOiBFRElUT1JfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG5cclxufVxyXG4iXX0=