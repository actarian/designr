/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
////// HttpClient-Only version ////
import { HttpBackend, XhrFactory } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClientBackendService } from './http-client-backend.service';
import { MemoryBackendConfig, MemoryDataService } from './interfaces';
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
    const backend = new HttpClientBackendService(dataService, config, factory);
    return backend;
}
export class HttpClientMemoryModule {
    /**
     * @param {?} dataService
     * @param {?=} config
     * @return {?}
     */
    static forRoot(dataService, config) {
        return {
            ngModule: HttpClientMemoryModule,
            providers: [
                { provide: MemoryDataService, useClass: dataService },
                { provide: MemoryBackendConfig, useValue: config },
                { provide: HttpBackend, useFactory: httpClientBackendServiceFactory, deps: [MemoryDataService, MemoryBackendConfig, XhrFactory] }
            ]
        };
    }
    /**
     * @param {?} dataService
     * @param {?=} config
     * @return {?}
     */
    static forFeature(dataService, config) {
        return HttpClientMemoryModule.forRoot(dataService, config);
    }
}
HttpClientMemoryModule.decorators = [
    { type: NgModule, args: [{},] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1jbGllbnQtbWVtb3J5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2RhdGEvIiwic291cmNlcyI6WyJsaWIvbWVtb3J5Xy9odHRwLWNsaWVudC1tZW1vcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQXVCLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7OztBQUl0RSxNQUFNLFVBQVUsK0JBQStCLENBQzlDLFdBQThCLEVBQzlCLE1BQTJCLEVBQzNCLE9BQW1COztVQUViLE9BQU8sR0FBUSxJQUFJLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDO0lBQy9FLE9BQU8sT0FBTyxDQUFDO0FBQ2hCLENBQUM7QUFHRCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFFbEMsTUFBTSxDQUFDLE9BQU8sQ0FDYixXQUFvQyxFQUNwQyxNQUE0QjtRQUU1QixPQUFPO1lBQ04sUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTtnQkFDckQsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDbEQsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSwrQkFBK0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLENBQUMsRUFBRTthQUNqSTtTQUNELENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUNoQixXQUFvQyxFQUNwQyxNQUE0QjtRQUU1QixPQUFPLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7O1lBdEJELFFBQVEsU0FBQyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vIEh0dHBDbGllbnQtT25seSB2ZXJzaW9uIC8vLy9cblxuaW1wb3J0IHsgSHR0cEJhY2tlbmQsIFhockZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLWNsaWVudC1iYWNrZW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVtb3J5QmFja2VuZENvbmZpZywgTWVtb3J5RGF0YVNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG4vLyBJbnRlcm5hbCAtIENyZWF0ZXMgdGhlIGluLW1lbSBiYWNrZW5kIGZvciB0aGUgSHR0cENsaWVudCBtb2R1bGVcbi8vIEFvVCByZXF1aXJlcyBmYWN0b3J5IHRvIGJlIGV4cG9ydGVkXG5leHBvcnQgZnVuY3Rpb24gaHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlRmFjdG9yeShcblx0ZGF0YVNlcnZpY2U6IE1lbW9yeURhdGFTZXJ2aWNlLFxuXHRjb25maWc6IE1lbW9yeUJhY2tlbmRDb25maWcsXG5cdGZhY3Rvcnk6IFhockZhY3RvcnksXG4pOiBIdHRwQmFja2VuZCB7XG5cdGNvbnN0IGJhY2tlbmQ6IGFueSA9IG5ldyBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UoZGF0YVNlcnZpY2UsIGNvbmZpZywgZmFjdG9yeSk7XG5cdHJldHVybiBiYWNrZW5kO1xufVxuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudE1lbW9yeU1vZHVsZSB7XG5cblx0c3RhdGljIGZvclJvb3QoXG5cdFx0ZGF0YVNlcnZpY2U6IFR5cGU8TWVtb3J5RGF0YVNlcnZpY2U+LFxuXHRcdGNvbmZpZz86IE1lbW9yeUJhY2tlbmRDb25maWdcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBIdHRwQ2xpZW50TWVtb3J5TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogTWVtb3J5RGF0YVNlcnZpY2UsIHVzZUNsYXNzOiBkYXRhU2VydmljZSB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IE1lbW9yeUJhY2tlbmRDb25maWcsIHVzZVZhbHVlOiBjb25maWcgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBIdHRwQmFja2VuZCwgdXNlRmFjdG9yeTogaHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlRmFjdG9yeSwgZGVwczogW01lbW9yeURhdGFTZXJ2aWNlLCBNZW1vcnlCYWNrZW5kQ29uZmlnLCBYaHJGYWN0b3J5XSB9XG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyBmb3JGZWF0dXJlKFxuXHRcdGRhdGFTZXJ2aWNlOiBUeXBlPE1lbW9yeURhdGFTZXJ2aWNlPixcblx0XHRjb25maWc/OiBNZW1vcnlCYWNrZW5kQ29uZmlnXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiBIdHRwQ2xpZW50TWVtb3J5TW9kdWxlLmZvclJvb3QoZGF0YVNlcnZpY2UsIGNvbmZpZyk7XG5cdH1cbn1cbiJdfQ==