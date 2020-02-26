import { __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { SECTION_CONFIG } from './config/section.config';
import { SectionModuleComponent } from './section-module.component';
import { SectionOutletComponent } from './section/section-outlet.component';
import { SectionComponent } from './section/section.component';
import { SectionService } from './section/section.service';
import { SectionsComponent } from './section/sections.component';
import * as i0 from "@angular/core";
var services = [
    SectionService,
];
var components = [
    SectionModuleComponent,
    SectionOutletComponent,
    SectionComponent,
    SectionsComponent,
];
var directives = [];
var pipes = [];
var validators = [];
var guards = [];
var SectionModule = /** @class */ (function () {
    function SectionModule(parentModule) {
        if (parentModule) {
            throw new Error('SectionModule is already loaded. Import it in the AppModule only');
        }
    }
    SectionModule.forRoot = function (config) {
        return {
            ngModule: SectionModule,
            providers: [{
                    provide: SECTION_CONFIG, useValue: config
                }]
        };
    };
    SectionModule.ɵmod = i0.ɵɵdefineNgModule({ type: SectionModule });
    SectionModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SectionModule_Factory(t) { return new (t || SectionModule)(i0.ɵɵinject(SectionModule, 12)); }, providers: __spread(services), imports: [[
                CommonModule,
                CoreModule,
            ],
            CoreModule] });
    return SectionModule;
}());
export { SectionModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SectionModule, { declarations: [SectionModuleComponent,
        SectionOutletComponent,
        SectionComponent,
        SectionsComponent], imports: [CommonModule,
        CoreModule], exports: [CoreModule,
        SectionModuleComponent,
        SectionOutletComponent,
        SectionComponent,
        SectionsComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SectionModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                ],
                providers: __spread(services),
                declarations: __spread(components),
                entryComponents: __spread(components),
                exports: __spread([
                    CoreModule
                ], components),
            }]
    }], function () { return [{ type: SectionModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9zZWN0aW9uLyIsInNvdXJjZXMiOlsibGliL3NlY3Rpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBaUIsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUVqRSxJQUFNLFFBQVEsR0FBRztJQUNoQixjQUFjO0NBQ2QsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHO0lBQ2xCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNqQixDQUFDO0FBRUYsSUFBTSxVQUFVLEdBQUcsRUFDbEIsQ0FBQztBQUVGLElBQU0sS0FBSyxHQUFHLEVBQ2IsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHLEVBQ2xCLENBQUM7QUFFRixJQUFNLE1BQU0sR0FBRyxFQUNkLENBQUM7QUFFRjtJQXNCQyx1QkFDeUIsWUFBMkI7UUFFbkQsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1NBQ3BGO0lBQ0YsQ0FBQztJQUVhLHFCQUFPLEdBQXJCLFVBQ0MsTUFBc0I7UUFFdEIsT0FBTztZQUNOLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDO29CQUNYLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU07aUJBQ3pDLENBQUM7U0FDRixDQUFDO0lBQ0gsQ0FBQztxREFuQlcsYUFBYTs2R0FBYixhQUFhLGNBR2MsYUFBYSwrQkFqQmhELFFBQVEsYUFMSDtnQkFDUixZQUFZO2dCQUNaLFVBQVU7YUFDVjtZQVdBLFVBQVU7d0JBaERaO0NBMEVDLEFBekNELElBeUNDO1NBckJZLGFBQWE7d0ZBQWIsYUFBYSxtQkF0Q3pCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQixhQWlCaEIsWUFBWTtRQUNaLFVBQVUsYUFZVixVQUFVO1FBakNYLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtrREFtQ0wsYUFBYTtjQXBCekIsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFVBQVU7aUJBQ1Y7Z0JBQ0QsU0FBUyxXQUNMLFFBQVEsQ0FDWDtnQkFDRCxZQUFZLFdBQ1IsVUFBVSxDQUNiO2dCQUNELGVBQWUsV0FDWCxVQUFVLENBQ2I7Z0JBQ0QsT0FBTztvQkFDTixVQUFVO21CQUNQLFVBQVUsQ0FDYjthQUNEO3NDQUt1QyxhQUFhO3NCQUFsRCxRQUFROztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IFNlY3Rpb25Db25maWcsIFNFQ1RJT05fQ09ORklHIH0gZnJvbSAnLi9jb25maWcvc2VjdGlvbi5jb25maWcnO1xyXG5pbXBvcnQgeyBTZWN0aW9uTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWN0aW9uT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uL3NlY3Rpb24tb3V0bGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL3NlY3Rpb24vc2VjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWN0aW9uU2VydmljZSB9IGZyb20gJy4vc2VjdGlvbi9zZWN0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi9zZWN0aW9ucy5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0U2VjdGlvblNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdFNlY3Rpb25Nb2R1bGVDb21wb25lbnQsXHJcblx0U2VjdGlvbk91dGxldENvbXBvbmVudCxcclxuXHRTZWN0aW9uQ29tcG9uZW50LFxyXG5cdFNlY3Rpb25zQ29tcG9uZW50LFxyXG5dO1xyXG5cclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0Li4uc2VydmljZXMsXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3Rpb25Nb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogU2VjdGlvbk1vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1NlY3Rpb25Nb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IFNlY3Rpb25Db25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogU2VjdGlvbk1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbe1xyXG5cdFx0XHRcdHByb3ZpZGU6IFNFQ1RJT05fQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnXHJcblx0XHRcdH1dXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19