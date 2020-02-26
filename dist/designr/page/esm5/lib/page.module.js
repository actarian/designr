import { __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { ConfigService } from './config/config.service';
import { PAGE_CONFIG } from './config/page.config';
import { LayoutComponent } from './layout/layout.component';
import { UseLayoutDirective } from './layout/use-layout.directive';
import { PageModuleComponent } from './page-module.component';
import { PageRouting } from './page.routing';
import { PageNotFoundComponent } from './page/page-not-found.component';
import { PageOutletComponent } from './page/page-outlet.component';
import { PageComponent } from './page/page.component';
import { PageGuard } from './page/page.guard';
import { PageService } from './page/page.service';
import { StaticGuard } from './page/static.guard';
import * as i0 from "@angular/core";
var services = [
    ConfigService,
    PageService,
];
var components = [
    PageModuleComponent,
    PageComponent,
    PageNotFoundComponent,
    PageOutletComponent,
    LayoutComponent,
];
var directives = [
    UseLayoutDirective
];
var pipes = [];
var validators = [];
var guards = [
    PageGuard,
    StaticGuard,
];
var PageModule = /** @class */ (function () {
    function PageModule(parentModule) {
        if (parentModule) {
            throw new Error('PageModule is already loaded. Import it in the AppModule only');
        }
    }
    PageModule.forRoot = function (config) {
        return {
            ngModule: PageModule,
            providers: [{
                    provide: PAGE_CONFIG, useValue: config
                }]
        };
    };
    PageModule.ɵmod = i0.ɵɵdefineNgModule({ type: PageModule });
    PageModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PageModule_Factory(t) { return new (t || PageModule)(i0.ɵɵinject(PageModule, 12)); }, providers: __spread(services, guards), imports: [[
                CommonModule,
                CoreModule,
                PageRouting,
            ],
            CoreModule,
            PageRouting] });
    return PageModule;
}());
export { PageModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PageModule, { declarations: [PageModuleComponent,
        PageComponent,
        PageNotFoundComponent,
        PageOutletComponent,
        LayoutComponent,
        UseLayoutDirective], imports: [CommonModule,
        CoreModule,
        PageRouting], exports: [CoreModule,
        PageRouting,
        PageModuleComponent,
        PageComponent,
        PageNotFoundComponent,
        PageOutletComponent,
        LayoutComponent,
        UseLayoutDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                    PageRouting,
                ],
                providers: __spread(services, guards),
                declarations: __spread(components, directives),
                entryComponents: __spread(components),
                exports: __spread([
                    CoreModule,
                    PageRouting
                ], components, directives),
            }]
    }], function () { return [{ type: PageModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL3BhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWxELElBQU0sUUFBUSxHQUFHO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0NBQ1gsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2YsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHO0lBQ2xCLGtCQUFrQjtDQUNsQixDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQUcsRUFDYixDQUFDO0FBRUYsSUFBTSxVQUFVLEdBQUcsRUFDbEIsQ0FBQztBQUVGLElBQU0sTUFBTSxHQUFHO0lBQ2QsU0FBUztJQUNULFdBQVc7Q0FDWCxDQUFDO0FBRUY7SUEyQkMsb0JBQ3lCLFlBQXdCO1FBRWhELElBQUksWUFBWSxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQztTQUNqRjtJQUNGLENBQUM7SUFFYSxrQkFBTyxHQUFyQixVQUNDLE1BQW1CO1FBRW5CLE9BQU87WUFDTixRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNO2lCQUN0QyxDQUFDO1NBQ0YsQ0FBQztJQUNILENBQUM7a0RBbkJXLFVBQVU7dUdBQVYsVUFBVSxjQUdpQixVQUFVLCtCQXJCN0MsUUFBUSxFQUNSLE1BQU0sYUFQRDtnQkFDUixZQUFZO2dCQUNaLFVBQVU7Z0JBQ1YsV0FBVzthQUNYO1lBYUEsVUFBVTtZQUNWLFdBQVc7cUJBL0RiO0NBMEZDLEFBOUNELElBOENDO1NBckJZLFVBQVU7d0ZBQVYsVUFBVSxtQkEvQ3RCLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixlQUFlO1FBSWYsa0JBQWtCLGFBZ0JqQixZQUFZO1FBQ1osVUFBVTtRQUNWLFdBQVcsYUFjWCxVQUFVO1FBQ1YsV0FBVztRQXpDWixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsZUFBZTtRQUlmLGtCQUFrQjtrREF1Q04sVUFBVTtjQXpCdEIsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFVBQVU7b0JBQ1YsV0FBVztpQkFDWDtnQkFDRCxTQUFTLFdBQ0wsUUFBUSxFQUNSLE1BQU0sQ0FDVDtnQkFDRCxZQUFZLFdBQ1IsVUFBVSxFQUNWLFVBQVUsQ0FDYjtnQkFDRCxlQUFlLFdBQ1gsVUFBVSxDQUNiO2dCQUNELE9BQU87b0JBQ04sVUFBVTtvQkFDVixXQUFXO21CQUNSLFVBQVUsRUFDVixVQUFVLENBQ2I7YUFDRDtzQ0FLdUMsVUFBVTtzQkFBL0MsUUFBUTs7c0JBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlQ29uZmlnLCBQQUdFX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnL3BhZ2UuY29uZmlnJztcclxuaW1wb3J0IHsgTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZUxheW91dERpcmVjdGl2ZSB9IGZyb20gJy4vbGF5b3V0L3VzZS1sYXlvdXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUGFnZU1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1tb2R1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZVJvdXRpbmcgfSBmcm9tICcuL3BhZ2Uucm91dGluZyc7XHJcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlL3BhZ2Utb3V0bGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlR3VhcmQgfSBmcm9tICcuL3BhZ2UvcGFnZS5ndWFyZCc7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlL3BhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFN0YXRpY0d1YXJkIH0gZnJvbSAnLi9wYWdlL3N0YXRpYy5ndWFyZCc7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuXHRDb25maWdTZXJ2aWNlLFxyXG5cdFBhZ2VTZXJ2aWNlLFxyXG5dO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuXHRQYWdlTW9kdWxlQ29tcG9uZW50LFxyXG5cdFBhZ2VDb21wb25lbnQsXHJcblx0UGFnZU5vdEZvdW5kQ29tcG9uZW50LFxyXG5cdFBhZ2VPdXRsZXRDb21wb25lbnQsXHJcblx0TGF5b3V0Q29tcG9uZW50LFxyXG5dO1xyXG5cclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuXHRVc2VMYXlvdXREaXJlY3RpdmVcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXHRQYWdlR3VhcmQsXHJcblx0U3RhdGljR3VhcmQsXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHRQYWdlUm91dGluZyxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0Li4uc2VydmljZXMsXHJcblx0XHQuLi5ndWFyZHMsXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdFBhZ2VSb3V0aW5nLFxyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFBhZ2VNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdQYWdlTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBQYWdlQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFBhZ2VNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW3tcclxuXHRcdFx0XHRwcm92aWRlOiBQQUdFX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ1xyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==