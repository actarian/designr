/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DATA_CONFIG } from './config/data.config';
import { DataService } from './config/data.service';
import { DataModuleComponent } from './data-module.component';
import { MemoryService } from './memory/memory.service';
/** @type {?} */
var modules = [
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    CoreModule,
];
/** @type {?} */
var services = [
    DataService,
];
/** @type {?} */
var components = [
    DataModuleComponent,
];
/** @type {?} */
var directives = [];
/** @type {?} */
var pipes = [];
/** @type {?} */
var validators = [];
/** @type {?} */
var guards = [];
var DataModule = /** @class */ (function () {
    function DataModule(parentModule) {
        if (parentModule) {
            throw new Error('DataModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    DataModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: DataModule,
            providers: tslib_1.__spread([
                { provide: DATA_CONFIG, useValue: config }
            ], HttpClientInMemoryWebApiModule.forRoot(MemoryService, config.memory).providers)
        };
    };
    DataModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread(modules),
                    providers: tslib_1.__spread(services),
                    declarations: tslib_1.__spread(components),
                    exports: tslib_1.__spread(modules, components),
                },] }
    ];
    /** @nocollapse */
    DataModule.ctorParameters = function () { return [
        { type: DataModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return DataModule;
}());
export { DataModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL2RhdGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNFLE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQUVsRCxPQUFPLEdBQUc7SUFDZixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLFVBQVU7Q0FDVjs7SUFFSyxRQUFRLEdBQUc7SUFDaEIsV0FBVztDQUNYOztJQUVLLFVBQVUsR0FBRztJQUNsQixtQkFBbUI7Q0FDbkI7O0lBRUssVUFBVSxHQUFHLEVBQ2xCOztJQUVLLEtBQUssR0FBRyxFQUNiOztJQUVLLFVBQVUsR0FBRyxFQUNsQjs7SUFFSyxNQUFNLEdBQUcsRUFDZDtBQUVEO0lBa0JDLG9CQUN5QixZQUF3QjtRQUVoRCxJQUFJLFlBQVksRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUM7U0FDakY7SUFDRixDQUFDOzs7OztJQUVhLGtCQUFPOzs7O0lBQXJCLFVBQ0MsTUFBbUI7UUFFbkIsT0FBTztZQUNOLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVM7Z0JBQ1IsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7ZUFDdkMsOEJBQThCLENBQUMsT0FBTyxDQUN4QyxhQUFhLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FDNUIsQ0FBQyxTQUFTLENBQ1g7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7Z0JBdENELFFBQVEsU0FBQztvQkFDVCxPQUFPLG1CQUNILE9BQU8sQ0FDVjtvQkFDRCxTQUFTLG1CQUNMLFFBQVEsQ0FDWDtvQkFDRCxZQUFZLG1CQUNSLFVBQVUsQ0FDYjtvQkFDRCxPQUFPLG1CQUNILE9BQU8sRUFDUCxVQUFVLENBQ2I7aUJBQ0Q7Ozs7Z0JBS3VDLFVBQVUsdUJBQS9DLFFBQVEsWUFBSSxRQUFROztJQXFCdkIsaUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXhCWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xyXG5pbXBvcnQgeyBEYXRhQ29uZmlnLCBEQVRBX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnL2RhdGEuY29uZmlnJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZW1vcnlTZXJ2aWNlIH0gZnJvbSAnLi9tZW1vcnkvbWVtb3J5LnNlcnZpY2UnO1xyXG5cclxuY29uc3QgbW9kdWxlcyA9IFtcclxuXHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSxcclxuXHRDb3JlTW9kdWxlLFxyXG5dO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0RGF0YVNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdERhdGFNb2R1bGVDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHQuLi5tb2R1bGVzLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdC4uLm1vZHVsZXMsXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBEYXRhTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignRGF0YU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogRGF0YUNvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBEYXRhTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IERBVEFfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXHJcblx0XHRcdFx0Li4uSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoXHJcblx0XHRcdFx0XHRNZW1vcnlTZXJ2aWNlLCBjb25maWcubWVtb3J5XHJcblx0XHRcdFx0KS5wcm92aWRlcnNcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==