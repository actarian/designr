/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
/** @type {?} */
var services = [
    ConfigService,
    PageService,
];
/** @type {?} */
var components = [
    PageModuleComponent,
    PageComponent,
    PageNotFoundComponent,
    PageOutletComponent,
    LayoutComponent,
];
/** @type {?} */
var directives = [
    UseLayoutDirective
];
/** @type {?} */
var pipes = [];
/** @type {?} */
var validators = [];
/** @type {?} */
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
    /**
     * @param {?=} config
     * @return {?}
     */
    PageModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: PageModule,
            providers: [{
                    provide: PAGE_CONFIG, useValue: config
                }]
        };
    };
    PageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CoreModule,
                        PageRouting,
                    ],
                    providers: tslib_1.__spread(services, guards),
                    declarations: tslib_1.__spread(components, directives),
                    entryComponents: tslib_1.__spread(components),
                    exports: tslib_1.__spread([
                        CoreModule,
                        PageRouting
                    ], components, directives),
                },] }
    ];
    /** @nocollapse */
    PageModule.ctorParameters = function () { return [
        { type: PageModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return PageModule;
}());
export { PageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL3BhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQUU1QyxRQUFRLEdBQUc7SUFDaEIsYUFBYTtJQUNiLFdBQVc7Q0FDWDs7SUFFSyxVQUFVLEdBQUc7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDZjs7SUFFSyxVQUFVLEdBQUc7SUFDbEIsa0JBQWtCO0NBQ2xCOztJQUVLLEtBQUssR0FBRyxFQUNiOztJQUVLLFVBQVUsR0FBRyxFQUNsQjs7SUFFSyxNQUFNLEdBQUc7SUFDZCxTQUFTO0lBQ1QsV0FBVztDQUNYO0FBRUQ7SUEyQkMsb0JBQ3lCLFlBQXdCO1FBRWhELElBQUksWUFBWSxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQztTQUNqRjtJQUNGLENBQUM7Ozs7O0lBRWEsa0JBQU87Ozs7SUFBckIsVUFDQyxNQUFtQjtRQUVuQixPQUFPO1lBQ04sUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUM7b0JBQ1gsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTTtpQkFDdEMsQ0FBQztTQUNGLENBQUM7SUFDSCxDQUFDOztnQkE1Q0QsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFVBQVU7d0JBQ1YsV0FBVztxQkFDWDtvQkFDRCxTQUFTLG1CQUNMLFFBQVEsRUFDUixNQUFNLENBQ1Q7b0JBQ0QsWUFBWSxtQkFDUixVQUFVLEVBQ1YsVUFBVSxDQUNiO29CQUNELGVBQWUsbUJBQ1gsVUFBVSxDQUNiO29CQUNELE9BQU87d0JBQ04sVUFBVTt3QkFDVixXQUFXO3VCQUNSLFVBQVUsRUFDVixVQUFVLENBQ2I7aUJBQ0Q7Ozs7Z0JBS3VDLFVBQVUsdUJBQS9DLFFBQVEsWUFBSSxRQUFROztJQWtCdkIsaUJBQUM7Q0FBQSxBQTlDRCxJQThDQztTQXJCWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9jb25maWcuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VDb25maWcsIFBBR0VfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvcGFnZS5jb25maWcnO1xyXG5pbXBvcnQgeyBMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXNlTGF5b3V0RGlyZWN0aXZlIH0gZnJvbSAnLi9sYXlvdXQvdXNlLWxheW91dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBQYWdlTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlUm91dGluZyB9IGZyb20gJy4vcGFnZS5yb3V0aW5nJztcclxuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1vdXRsZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS9wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VHdWFyZCB9IGZyb20gJy4vcGFnZS9wYWdlLmd1YXJkJztcclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tICcuL3BhZ2UvcGFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RhdGljR3VhcmQgfSBmcm9tICcuL3BhZ2Uvc3RhdGljLmd1YXJkJztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdENvbmZpZ1NlcnZpY2UsXHJcblx0UGFnZVNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdFBhZ2VNb2R1bGVDb21wb25lbnQsXHJcblx0UGFnZUNvbXBvbmVudCxcclxuXHRQYWdlTm90Rm91bmRDb21wb25lbnQsXHJcblx0UGFnZU91dGxldENvbXBvbmVudCxcclxuXHRMYXlvdXRDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5cdFVzZUxheW91dERpcmVjdGl2ZVxyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5cdFBhZ2VHdWFyZCxcclxuXHRTdGF0aWNHdWFyZCxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdFBhZ2VSb3V0aW5nLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRcdC4uLmd1YXJkcyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0UGFnZVJvdXRpbmcsXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogUGFnZU1vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1BhZ2VNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IFBhZ2VDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUGFnZU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbe1xyXG5cdFx0XHRcdHByb3ZpZGU6IFBBR0VfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnXHJcblx0XHRcdH1dXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19