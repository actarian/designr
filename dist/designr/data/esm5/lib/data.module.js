/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DATA_CONFIG } from './config/data.config';
import { DataModuleComponent } from './data-module.component';
import { MemoryService } from './memory/memory.service';
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
                    imports: [
                        HttpClientModule,
                        HttpClientInMemoryWebApiModule,
                    ],
                    exports: [
                        DataModuleComponent,
                        HttpClientInMemoryWebApiModule,
                    ],
                    declarations: [
                        DataModuleComponent,
                    ],
                    providers: [],
                },] }
    ];
    /** @nocollapse */
    DataModule.ctorParameters = function () { return [
        { type: DataModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return DataModule;
}());
export { DataModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL2RhdGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRSxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhEO0lBaUJDLG9CQUN5QixZQUF3QjtRQUVoRCxJQUFJLFlBQVksRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUM7U0FDakY7SUFDRixDQUFDOzs7OztJQUVhLGtCQUFPOzs7O0lBQXJCLFVBQ0MsTUFBbUI7UUFFbkIsT0FBTztZQUNOLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVM7Z0JBQ1IsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7ZUFDdkMsOEJBQThCLENBQUMsT0FBTyxDQUN4QyxhQUFhLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FDNUIsQ0FBQyxTQUFTLENBQ1g7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7Z0JBckNELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsZ0JBQWdCO3dCQUNoQiw4QkFBOEI7cUJBQzlCO29CQUNELE9BQU8sRUFBRTt3QkFDUixtQkFBbUI7d0JBQ25CLDhCQUE4QjtxQkFDOUI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLG1CQUFtQjtxQkFDbkI7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBS3VDLFVBQVUsdUJBQS9DLFFBQVEsWUFBSSxRQUFROztJQXFCdkIsaUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQXhCWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcclxuaW1wb3J0IHsgRGF0YUNvbmZpZywgREFUQV9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9kYXRhLmNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGFNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lbW9yeVNlcnZpY2UgfSBmcm9tICcuL21lbW9yeS9tZW1vcnkuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHREYXRhTW9kdWxlQ29tcG9uZW50LFxyXG5cdFx0SHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHREYXRhTW9kdWxlQ29tcG9uZW50LFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IERhdGFNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdEYXRhTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBEYXRhQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IERhdGFNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogREFUQV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuXHRcdFx0XHQuLi5IdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChcclxuXHRcdFx0XHRcdE1lbW9yeVNlcnZpY2UsIGNvbmZpZy5tZW1vcnlcclxuXHRcdFx0XHQpLnByb3ZpZGVyc1xyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19