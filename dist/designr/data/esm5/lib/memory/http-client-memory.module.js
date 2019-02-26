/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
////// HttpClient-Only version ////
import { HttpBackend, XhrFactory } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClientBackendService } from './http-client-backend.service';
import { MemoryBackendConfig, MemoryDataService } from './memory';
// Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported
/**
 * @param {?} dataService
 * @param {?} config
 * @param {?} factory
 * @return {?}
 */
export function httpClientBackendServiceFactory(dataService, config, factory) {
    /** @type {?} */
    var backend = new HttpClientBackendService(dataService, config, factory);
    return backend;
}
var HttpClientMemoryModule = /** @class */ (function () {
    function HttpClientMemoryModule() {
    }
    /**
     * @param {?} dataService
     * @param {?=} config
     * @return {?}
     */
    HttpClientMemoryModule.forRoot = /**
     * @param {?} dataService
     * @param {?=} config
     * @return {?}
     */
    function (dataService, config) {
        return {
            ngModule: HttpClientMemoryModule,
            providers: [
                { provide: MemoryDataService, useClass: dataService },
                { provide: MemoryBackendConfig, useValue: config },
                { provide: HttpBackend, useFactory: httpClientBackendServiceFactory, deps: [MemoryDataService, MemoryBackendConfig, XhrFactory] }
            ]
        };
    };
    /**
     * @param {?} dataService
     * @param {?=} config
     * @return {?}
     */
    HttpClientMemoryModule.forFeature = /**
     * @param {?} dataService
     * @param {?=} config
     * @return {?}
     */
    function (dataService, config) {
        return HttpClientMemoryModule.forRoot(dataService, config);
    };
    HttpClientMemoryModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return HttpClientMemoryModule;
}());
export { HttpClientMemoryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1jbGllbnQtbWVtb3J5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2RhdGEvIiwic291cmNlcyI6WyJsaWIvbWVtb3J5L2h0dHAtY2xpZW50LW1lbW9yeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBdUIsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7O0FBSWxFLE1BQU0sVUFBVSwrQkFBK0IsQ0FDOUMsV0FBOEIsRUFDOUIsTUFBMkIsRUFDM0IsT0FBbUI7O1FBRWIsT0FBTyxHQUFRLElBQUksd0JBQXdCLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7SUFDL0UsT0FBTyxPQUFPLENBQUM7QUFDaEIsQ0FBQztBQUVEO0lBQUE7SUF1QkEsQ0FBQzs7Ozs7O0lBcEJPLDhCQUFPOzs7OztJQUFkLFVBQ0MsV0FBb0MsRUFDcEMsTUFBNEI7UUFFNUIsT0FBTztZQUNOLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7Z0JBQ3JELEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ2xELEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsK0JBQStCLEVBQUUsSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLEVBQUU7YUFDakk7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0saUNBQVU7Ozs7O0lBQWpCLFVBQ0MsV0FBb0MsRUFDcEMsTUFBNEI7UUFFNUIsT0FBTyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzVELENBQUM7O2dCQXRCRCxRQUFRLFNBQUMsRUFBRTs7SUF1QlosNkJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXRCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vLy8gSHR0cENsaWVudC1Pbmx5IHZlcnNpb24gLy8vL1xuXG5pbXBvcnQgeyBIdHRwQmFja2VuZCwgWGhyRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL2h0dHAtY2xpZW50LWJhY2tlbmQuc2VydmljZSc7XG5pbXBvcnQgeyBNZW1vcnlCYWNrZW5kQ29uZmlnLCBNZW1vcnlEYXRhU2VydmljZSB9IGZyb20gJy4vbWVtb3J5JztcblxuLy8gSW50ZXJuYWwgLSBDcmVhdGVzIHRoZSBpbi1tZW0gYmFja2VuZCBmb3IgdGhlIEh0dHBDbGllbnQgbW9kdWxlXG4vLyBBb1QgcmVxdWlyZXMgZmFjdG9yeSB0byBiZSBleHBvcnRlZFxuZXhwb3J0IGZ1bmN0aW9uIGh0dHBDbGllbnRCYWNrZW5kU2VydmljZUZhY3RvcnkoXG5cdGRhdGFTZXJ2aWNlOiBNZW1vcnlEYXRhU2VydmljZSxcblx0Y29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnLFxuXHRmYWN0b3J5OiBYaHJGYWN0b3J5LFxuKTogSHR0cEJhY2tlbmQge1xuXHRjb25zdCBiYWNrZW5kOiBhbnkgPSBuZXcgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlKGRhdGFTZXJ2aWNlLCBjb25maWcsIGZhY3RvcnkpO1xuXHRyZXR1cm4gYmFja2VuZDtcbn1cblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIEh0dHBDbGllbnRNZW1vcnlNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JSb290KFxuXHRcdGRhdGFTZXJ2aWNlOiBUeXBlPE1lbW9yeURhdGFTZXJ2aWNlPixcblx0XHRjb25maWc/OiBNZW1vcnlCYWNrZW5kQ29uZmlnXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogSHR0cENsaWVudE1lbW9yeU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IE1lbW9yeURhdGFTZXJ2aWNlLCB1c2VDbGFzczogZGF0YVNlcnZpY2UgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBNZW1vcnlCYWNrZW5kQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogSHR0cEJhY2tlbmQsIHVzZUZhY3Rvcnk6IGh0dHBDbGllbnRCYWNrZW5kU2VydmljZUZhY3RvcnksIGRlcHM6IFtNZW1vcnlEYXRhU2VydmljZSwgTWVtb3J5QmFja2VuZENvbmZpZywgWGhyRmFjdG9yeV0gfVxuXHRcdFx0XVxuXHRcdH07XG5cdH1cblxuXHRzdGF0aWMgZm9yRmVhdHVyZShcblx0XHRkYXRhU2VydmljZTogVHlwZTxNZW1vcnlEYXRhU2VydmljZT4sXG5cdFx0Y29uZmlnPzogTWVtb3J5QmFja2VuZENvbmZpZ1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4gSHR0cENsaWVudE1lbW9yeU1vZHVsZS5mb3JSb290KGRhdGFTZXJ2aWNlLCBjb25maWcpO1xuXHR9XG59XG4iXX0=