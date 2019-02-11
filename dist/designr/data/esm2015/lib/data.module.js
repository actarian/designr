/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DATA_CONFIG } from './config/data.config';
import { DataModuleComponent } from './data-module.component';
import { MemoryService } from './memory/memory.service';
export class DataModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('DataModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: DataModule,
            providers: [
                { provide: DATA_CONFIG, useValue: config },
                ...HttpClientInMemoryWebApiModule.forRoot(MemoryService, config.memory).providers
            ]
        };
    }
}
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
DataModule.ctorParameters = () => [
    { type: DataModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL2RhdGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNFLE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFpQnhELE1BQU0sT0FBTyxVQUFVOzs7O0lBRXRCLFlBQ3lCLFlBQXdCO1FBRWhELElBQUksWUFBWSxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQztTQUNqRjtJQUNGLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FDcEIsTUFBbUI7UUFFbkIsT0FBTztZQUNOLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDMUMsR0FBRyw4QkFBOEIsQ0FBQyxPQUFPLENBQ3hDLGFBQWEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUM1QixDQUFDLFNBQVM7YUFDWDtTQUNELENBQUM7SUFDSCxDQUFDOzs7WUFyQ0QsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixnQkFBZ0I7b0JBQ2hCLDhCQUE4QjtpQkFDOUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLG1CQUFtQjtvQkFDbkIsOEJBQThCO2lCQUM5QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsbUJBQW1CO2lCQUNuQjtnQkFDRCxTQUFTLEVBQUUsRUFBRTthQUNiOzs7O1lBS3VDLFVBQVUsdUJBQS9DLFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcclxuaW1wb3J0IHsgRGF0YUNvbmZpZywgREFUQV9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9kYXRhLmNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGFNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lbW9yeVNlcnZpY2UgfSBmcm9tICcuL21lbW9yeS9tZW1vcnkuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHREYXRhTW9kdWxlQ29tcG9uZW50LFxyXG5cdFx0SHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHREYXRhTW9kdWxlQ29tcG9uZW50LFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IERhdGFNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdEYXRhTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBEYXRhQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IERhdGFNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogREFUQV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuXHRcdFx0XHQuLi5IdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChcclxuXHRcdFx0XHRcdE1lbW9yeVNlcnZpY2UsIGNvbmZpZy5tZW1vcnlcclxuXHRcdFx0XHQpLnByb3ZpZGVyc1xyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19