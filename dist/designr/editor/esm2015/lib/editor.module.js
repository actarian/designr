import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { EDITOR_CONFIG } from './config/editor.config';
import { EditorService } from './config/editor.service';
import { EditorModuleComponent } from './editor-module.component';
import { PanelComponent } from './panel/panel.component';
import * as i0 from "@angular/core";
const services = [
    EditorService,
];
const components = [
    EditorModuleComponent,
    PanelComponent,
];
const directives = [];
const pipes = [];
const validators = [];
const guards = [];
export class EditorModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('EditorModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: EditorModule,
            providers: [
                { provide: EDITOR_CONFIG, useValue: config },
            ]
        };
    }
}
EditorModule.ɵmod = i0.ɵɵdefineNgModule({ type: EditorModule });
EditorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EditorModule_Factory(t) { return new (t || EditorModule)(i0.ɵɵinject(EditorModule, 12)); }, providers: [
        ...services,
    ], imports: [[
            CommonModule,
            CoreModule,
        ],
        CoreModule] });
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
                providers: [
                    ...services,
                ],
                declarations: [
                    ...components,
                    ...directives,
                ],
                exports: [
                    CoreModule,
                    ...components,
                ],
            }]
    }], function () { return [{ type: EditorModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUV6RCxNQUFNLFFBQVEsR0FBRztJQUNoQixhQUFhO0NBQ2IsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0NBQ2QsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHLEVBQ2xCLENBQUM7QUFFRixNQUFNLEtBQUssR0FBRyxFQUNiLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxFQUNsQixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsRUFDZCxDQUFDO0FBb0JGLE1BQU0sT0FBTyxZQUFZO0lBRXhCLFlBQ3lCLFlBQTBCO1FBRWxELElBQUksWUFBWSxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUVBQWlFLENBQUMsQ0FBQztTQUNuRjtJQUNGLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUNwQixNQUFxQjtRQUVyQixPQUFPO1lBQ04sUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQzVDO1NBQ0QsQ0FBQztJQUNILENBQUM7O2dEQW5CVyxZQUFZO3VHQUFaLFlBQVksY0FHZSxZQUFZLHNCQWhCeEM7UUFDVixHQUFHLFFBQVE7S0FDWCxZQU5RO1lBQ1IsWUFBWTtZQUNaLFVBQVU7U0FDVjtRQVNBLFVBQVU7d0ZBS0MsWUFBWSxtQkFsQ3hCLHFCQUFxQjtRQUNyQixjQUFjLGFBaUJiLFlBQVk7UUFDWixVQUFVLGFBVVYsVUFBVTtRQTdCWCxxQkFBcUI7UUFDckIsY0FBYztrREFpQ0YsWUFBWTtjQWxCeEIsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFVBQVU7aUJBQ1Y7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLEdBQUcsUUFBUTtpQkFDWDtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsR0FBRyxVQUFVO29CQUNiLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsVUFBVTtvQkFDVixHQUFHLFVBQVU7aUJBQ2I7YUFDRDtzQ0FLdUMsWUFBWTtzQkFBakQsUUFBUTs7c0JBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBFZGl0b3JDb25maWcsIEVESVRPUl9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9lZGl0b3IuY29uZmlnJztcclxuaW1wb3J0IHsgRWRpdG9yU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2VkaXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRWRpdG9yTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0b3ItbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9wYW5lbC9wYW5lbC5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0RWRpdG9yU2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0RWRpdG9yTW9kdWxlQ29tcG9uZW50LFxyXG5cdFBhbmVsQ29tcG9uZW50LFxyXG5dO1xyXG5cclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0Li4uc2VydmljZXMsXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogRWRpdG9yTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignRWRpdG9yTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBFZGl0b3JDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogRWRpdG9yTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IEVESVRPUl9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==