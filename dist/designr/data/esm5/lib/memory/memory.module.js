/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
////// HttpClient-Only version ////
import { HttpBackend, XhrFactory } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BackendService } from './backend.service';
import { MemoryBackendConfig, MemoryDataService } from './memory';
// Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported
/**
 * @param {?} dataService
 * @param {?} config
 * @param {?} factory
 * @return {?}
 */
export function BackendServiceFactory(dataService, config, factory) {
    /** @type {?} */
    var backend = new BackendService(dataService, config, factory);
    return backend;
}
var MemoryModule = /** @class */ (function () {
    function MemoryModule() {
    }
    /**
     * @param {?} dataService
     * @param {?=} config
     * @return {?}
     */
    MemoryModule.forRoot = /**
     * @param {?} dataService
     * @param {?=} config
     * @return {?}
     */
    function (dataService, config) {
        return {
            ngModule: MemoryModule,
            providers: [
                { provide: MemoryDataService, useClass: dataService },
                { provide: MemoryBackendConfig, useValue: config },
                { provide: HttpBackend, useFactory: BackendServiceFactory, deps: [MemoryDataService, MemoryBackendConfig, XhrFactory] }
            ]
        };
    };
    /**
     * @param {?} dataService
     * @param {?=} config
     * @return {?}
     */
    MemoryModule.forFeature = /**
     * @param {?} dataService
     * @param {?=} config
     * @return {?}
     */
    function (dataService, config) {
        return MemoryModule.forRoot(dataService, config);
    };
    MemoryModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return MemoryModule;
}());
export { MemoryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2RhdGEvIiwic291cmNlcyI6WyJsaWIvbWVtb3J5L21lbW9yeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBdUIsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7OztBQUlsRSxNQUFNLFVBQVUscUJBQXFCLENBQ3BDLFdBQThCLEVBQzlCLE1BQTJCLEVBQzNCLE9BQW1COztRQUViLE9BQU8sR0FBUSxJQUFJLGNBQWMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztJQUNyRSxPQUFPLE9BQU8sQ0FBQztBQUNoQixDQUFDO0FBRUQ7SUFBQTtJQXdCQSxDQUFDOzs7Ozs7SUFyQk8sb0JBQU87Ozs7O0lBQWQsVUFDQyxXQUFvQyxFQUNwQyxNQUE0QjtRQUU1QixPQUFPO1lBQ04sUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7Z0JBQ3JELEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ2xELEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLEVBQUU7YUFDdkg7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sdUJBQVU7Ozs7O0lBQWpCLFVBQ0MsV0FBb0MsRUFDcEMsTUFBNEI7UUFFNUIsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkF0QkQsUUFBUSxTQUFDLEVBQUU7O0lBd0JaLG1CQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2QlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLyBIdHRwQ2xpZW50LU9ubHkgdmVyc2lvbiAvLy8vXHJcblxyXG5pbXBvcnQgeyBIdHRwQmFja2VuZCwgWGhyRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL2JhY2tlbmQuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lbW9yeUJhY2tlbmRDb25maWcsIE1lbW9yeURhdGFTZXJ2aWNlIH0gZnJvbSAnLi9tZW1vcnknO1xyXG5cclxuLy8gSW50ZXJuYWwgLSBDcmVhdGVzIHRoZSBpbi1tZW0gYmFja2VuZCBmb3IgdGhlIEh0dHBDbGllbnQgbW9kdWxlXHJcbi8vIEFvVCByZXF1aXJlcyBmYWN0b3J5IHRvIGJlIGV4cG9ydGVkXHJcbmV4cG9ydCBmdW5jdGlvbiBCYWNrZW5kU2VydmljZUZhY3RvcnkoXHJcblx0ZGF0YVNlcnZpY2U6IE1lbW9yeURhdGFTZXJ2aWNlLFxyXG5cdGNvbmZpZzogTWVtb3J5QmFja2VuZENvbmZpZyxcclxuXHRmYWN0b3J5OiBYaHJGYWN0b3J5LFxyXG4pOiBIdHRwQmFja2VuZCB7XHJcblx0Y29uc3QgYmFja2VuZDogYW55ID0gbmV3IEJhY2tlbmRTZXJ2aWNlKGRhdGFTZXJ2aWNlLCBjb25maWcsIGZhY3RvcnkpO1xyXG5cdHJldHVybiBiYWNrZW5kO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe30pXHJcbmV4cG9ydCBjbGFzcyBNZW1vcnlNb2R1bGUge1xyXG5cclxuXHRzdGF0aWMgZm9yUm9vdChcclxuXHRcdGRhdGFTZXJ2aWNlOiBUeXBlPE1lbW9yeURhdGFTZXJ2aWNlPixcclxuXHRcdGNvbmZpZz86IE1lbW9yeUJhY2tlbmRDb25maWdcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBNZW1vcnlNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTWVtb3J5RGF0YVNlcnZpY2UsIHVzZUNsYXNzOiBkYXRhU2VydmljZSB9LFxyXG5cdFx0XHRcdHsgcHJvdmlkZTogTWVtb3J5QmFja2VuZENvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRcdHsgcHJvdmlkZTogSHR0cEJhY2tlbmQsIHVzZUZhY3Rvcnk6IEJhY2tlbmRTZXJ2aWNlRmFjdG9yeSwgZGVwczogW01lbW9yeURhdGFTZXJ2aWNlLCBNZW1vcnlCYWNrZW5kQ29uZmlnLCBYaHJGYWN0b3J5XSB9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZm9yRmVhdHVyZShcclxuXHRcdGRhdGFTZXJ2aWNlOiBUeXBlPE1lbW9yeURhdGFTZXJ2aWNlPixcclxuXHRcdGNvbmZpZz86IE1lbW9yeUJhY2tlbmRDb25maWdcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiBNZW1vcnlNb2R1bGUuZm9yUm9vdChkYXRhU2VydmljZSwgY29uZmlnKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==