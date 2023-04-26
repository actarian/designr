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
    const backend = new BackendService(dataService, config, factory);
    return backend;
}
export class MemoryModule {
    /**
     * @param {?} dataService
     * @param {?=} config
     * @return {?}
     */
    static forRoot(dataService, config) {
        return {
            ngModule: MemoryModule,
            providers: [
                { provide: MemoryDataService, useClass: dataService },
                { provide: MemoryBackendConfig, useValue: config },
                { provide: HttpBackend, useFactory: BackendServiceFactory, deps: [MemoryDataService, MemoryBackendConfig, XhrFactory] }
            ]
        };
    }
    /**
     * @param {?} dataService
     * @param {?=} config
     * @return {?}
     */
    static forFeature(dataService, config) {
        return MemoryModule.forRoot(dataService, config);
    }
}
MemoryModule.decorators = [
    { type: NgModule, args: [{},] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2RhdGEvIiwic291cmNlcyI6WyJsaWIvbWVtb3J5L21lbW9yeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBdUIsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7OztBQUlsRSxNQUFNLFVBQVUscUJBQXFCLENBQ3BDLFdBQThCLEVBQzlCLE1BQTJCLEVBQzNCLE9BQW1COztVQUViLE9BQU8sR0FBUSxJQUFJLGNBQWMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztJQUNyRSxPQUFPLE9BQU8sQ0FBQztBQUNoQixDQUFDO0FBR0QsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQUV4QixNQUFNLENBQUMsT0FBTyxDQUNiLFdBQW9DLEVBQ3BDLE1BQTRCO1FBRTVCLE9BQU87WUFDTixRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTtnQkFDckQsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDbEQsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLENBQUMsRUFBRTthQUN2SDtTQUNELENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUNoQixXQUFvQyxFQUNwQyxNQUE0QjtRQUU1QixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQXRCRCxRQUFRLFNBQUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLyBIdHRwQ2xpZW50LU9ubHkgdmVyc2lvbiAvLy8vXHJcblxyXG5pbXBvcnQgeyBIdHRwQmFja2VuZCwgWGhyRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL2JhY2tlbmQuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lbW9yeUJhY2tlbmRDb25maWcsIE1lbW9yeURhdGFTZXJ2aWNlIH0gZnJvbSAnLi9tZW1vcnknO1xyXG5cclxuLy8gSW50ZXJuYWwgLSBDcmVhdGVzIHRoZSBpbi1tZW0gYmFja2VuZCBmb3IgdGhlIEh0dHBDbGllbnQgbW9kdWxlXHJcbi8vIEFvVCByZXF1aXJlcyBmYWN0b3J5IHRvIGJlIGV4cG9ydGVkXHJcbmV4cG9ydCBmdW5jdGlvbiBCYWNrZW5kU2VydmljZUZhY3RvcnkoXHJcblx0ZGF0YVNlcnZpY2U6IE1lbW9yeURhdGFTZXJ2aWNlLFxyXG5cdGNvbmZpZzogTWVtb3J5QmFja2VuZENvbmZpZyxcclxuXHRmYWN0b3J5OiBYaHJGYWN0b3J5LFxyXG4pOiBIdHRwQmFja2VuZCB7XHJcblx0Y29uc3QgYmFja2VuZDogYW55ID0gbmV3IEJhY2tlbmRTZXJ2aWNlKGRhdGFTZXJ2aWNlLCBjb25maWcsIGZhY3RvcnkpO1xyXG5cdHJldHVybiBiYWNrZW5kO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe30pXHJcbmV4cG9ydCBjbGFzcyBNZW1vcnlNb2R1bGUge1xyXG5cclxuXHRzdGF0aWMgZm9yUm9vdChcclxuXHRcdGRhdGFTZXJ2aWNlOiBUeXBlPE1lbW9yeURhdGFTZXJ2aWNlPixcclxuXHRcdGNvbmZpZz86IE1lbW9yeUJhY2tlbmRDb25maWdcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBNZW1vcnlNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTWVtb3J5RGF0YVNlcnZpY2UsIHVzZUNsYXNzOiBkYXRhU2VydmljZSB9LFxyXG5cdFx0XHRcdHsgcHJvdmlkZTogTWVtb3J5QmFja2VuZENvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRcdHsgcHJvdmlkZTogSHR0cEJhY2tlbmQsIHVzZUZhY3Rvcnk6IEJhY2tlbmRTZXJ2aWNlRmFjdG9yeSwgZGVwczogW01lbW9yeURhdGFTZXJ2aWNlLCBNZW1vcnlCYWNrZW5kQ29uZmlnLCBYaHJGYWN0b3J5XSB9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZm9yRmVhdHVyZShcclxuXHRcdGRhdGFTZXJ2aWNlOiBUeXBlPE1lbW9yeURhdGFTZXJ2aWNlPixcclxuXHRcdGNvbmZpZz86IE1lbW9yeUJhY2tlbmRDb25maWdcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiBNZW1vcnlNb2R1bGUuZm9yUm9vdChkYXRhU2VydmljZSwgY29uZmlnKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==