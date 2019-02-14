/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { PAGE_CONFIG } from './config/page.config';
import { PageModuleComponent } from './page-module.component';
import { PageRouting } from './page.routing';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { PageOutletComponent } from './pages/page-outlet.component';
import { PageComponent } from './pages/page.component';
import { PageGuard } from './pages/page.guard';
import { PageService } from './pages/page.service';
import { StaticGuard } from './pages/static.guard';
/** @type {?} */
var modules = [
    CoreModule,
    PageRouting,
];
/** @type {?} */
var services = [
    PageService,
];
/** @type {?} */
var components = [
    PageModuleComponent,
    PageComponent,
    PageNotFoundComponent,
    PageOutletComponent,
];
/** @type {?} */
var directives = [];
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
                    imports: tslib_1.__spread(modules),
                    providers: tslib_1.__spread(services, guards),
                    declarations: tslib_1.__spread(components),
                    exports: tslib_1.__spread(modules, components),
                },] }
    ];
    /** @nocollapse */
    PageModule.ctorParameters = function () { return [
        { type: PageModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return PageModule;
}());
export { PageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL3BhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQUU3QyxPQUFPLEdBQUc7SUFDZixVQUFVO0lBQ1YsV0FBVztDQUNYOztJQUVLLFFBQVEsR0FBRztJQUNoQixXQUFXO0NBQ1g7O0lBRUssVUFBVSxHQUFHO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtDQUNuQjs7SUFFSyxVQUFVLEdBQUcsRUFDbEI7O0lBRUssS0FBSyxHQUFHLEVBQ2I7O0lBRUssVUFBVSxHQUFHLEVBQ2xCOztJQUVLLE1BQU0sR0FBRztJQUNkLFNBQVM7SUFDVCxXQUFXO0NBQ1g7QUFFRDtJQW1CQyxvQkFDeUIsWUFBd0I7UUFFaEQsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0YsQ0FBQzs7Ozs7SUFFYSxrQkFBTzs7OztJQUFyQixVQUNDLE1BQW1CO1FBRW5CLE9BQU87WUFDTixRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNO2lCQUN0QyxDQUFDO1NBQ0YsQ0FBQztJQUNILENBQUM7O2dCQXBDRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxtQkFDSCxPQUFPLENBQ1Y7b0JBQ0QsU0FBUyxtQkFDTCxRQUFRLEVBQ1IsTUFBTSxDQUNUO29CQUNELFlBQVksbUJBQ1IsVUFBVSxDQUNiO29CQUNELE9BQU8sbUJBQ0gsT0FBTyxFQUNQLFVBQVUsQ0FDYjtpQkFDRDs7OztnQkFLdUMsVUFBVSx1QkFBL0MsUUFBUSxZQUFJLFFBQVE7O0lBa0J2QixpQkFBQztDQUFBLEFBdENELElBc0NDO1NBckJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZUNvbmZpZywgUEFHRV9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9wYWdlLmNvbmZpZyc7XHJcbmltcG9ydCB7IFBhZ2VNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UtbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VSb3V0aW5nIH0gZnJvbSAnLi9wYWdlLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3BhZ2Utb3V0bGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3BhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUd1YXJkIH0gZnJvbSAnLi9wYWdlcy9wYWdlLmd1YXJkJztcclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tICcuL3BhZ2VzL3BhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFN0YXRpY0d1YXJkIH0gZnJvbSAnLi9wYWdlcy9zdGF0aWMuZ3VhcmQnO1xyXG5cclxuY29uc3QgbW9kdWxlcyA9IFtcclxuXHRDb3JlTW9kdWxlLFxyXG5cdFBhZ2VSb3V0aW5nLFxyXG5dO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0UGFnZVNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdFBhZ2VNb2R1bGVDb21wb25lbnQsXHJcblx0UGFnZUNvbXBvbmVudCxcclxuXHRQYWdlTm90Rm91bmRDb21wb25lbnQsXHJcblx0UGFnZU91dGxldENvbXBvbmVudCxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcblx0UGFnZUd1YXJkLFxyXG5cdFN0YXRpY0d1YXJkLFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHQuLi5tb2R1bGVzLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRcdC4uLmd1YXJkcyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdC4uLm1vZHVsZXMsXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBQYWdlTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignUGFnZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogUGFnZUNvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBQYWdlTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFt7XHJcblx0XHRcdFx0cHJvdmlkZTogUEFHRV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWdcclxuXHRcdFx0fV1cclxuXHRcdH07XHJcblx0fVxyXG5cclxufVxyXG4iXX0=