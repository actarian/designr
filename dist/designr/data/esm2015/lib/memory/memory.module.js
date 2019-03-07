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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2RhdGEvIiwic291cmNlcyI6WyJsaWIvbWVtb3J5L21lbW9yeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBdUIsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7OztBQUlsRSxNQUFNLFVBQVUscUJBQXFCLENBQ3BDLFdBQThCLEVBQzlCLE1BQTJCLEVBQzNCLE9BQW1COztVQUViLE9BQU8sR0FBUSxJQUFJLGNBQWMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztJQUNyRSxPQUFPLE9BQU8sQ0FBQztBQUNoQixDQUFDO0FBR0QsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQUV4QixNQUFNLENBQUMsT0FBTyxDQUNiLFdBQW9DLEVBQ3BDLE1BQTRCO1FBRTVCLE9BQU87WUFDTixRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTtnQkFDckQsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDbEQsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLENBQUMsRUFBRTthQUN2SDtTQUNELENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUNoQixXQUFvQyxFQUNwQyxNQUE0QjtRQUU1QixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQXRCRCxRQUFRLFNBQUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLyBIdHRwQ2xpZW50LU9ubHkgdmVyc2lvbiAvLy8vXG5cbmltcG9ydCB7IEh0dHBCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9iYWNrZW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVtb3J5QmFja2VuZENvbmZpZywgTWVtb3J5RGF0YVNlcnZpY2UgfSBmcm9tICcuL21lbW9yeSc7XG5cbi8vIEludGVybmFsIC0gQ3JlYXRlcyB0aGUgaW4tbWVtIGJhY2tlbmQgZm9yIHRoZSBIdHRwQ2xpZW50IG1vZHVsZVxuLy8gQW9UIHJlcXVpcmVzIGZhY3RvcnkgdG8gYmUgZXhwb3J0ZWRcbmV4cG9ydCBmdW5jdGlvbiBCYWNrZW5kU2VydmljZUZhY3RvcnkoXG5cdGRhdGFTZXJ2aWNlOiBNZW1vcnlEYXRhU2VydmljZSxcblx0Y29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnLFxuXHRmYWN0b3J5OiBYaHJGYWN0b3J5LFxuKTogSHR0cEJhY2tlbmQge1xuXHRjb25zdCBiYWNrZW5kOiBhbnkgPSBuZXcgQmFja2VuZFNlcnZpY2UoZGF0YVNlcnZpY2UsIGNvbmZpZywgZmFjdG9yeSk7XG5cdHJldHVybiBiYWNrZW5kO1xufVxuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgTWVtb3J5TW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yUm9vdChcblx0XHRkYXRhU2VydmljZTogVHlwZTxNZW1vcnlEYXRhU2VydmljZT4sXG5cdFx0Y29uZmlnPzogTWVtb3J5QmFja2VuZENvbmZpZ1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IE1lbW9yeU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IE1lbW9yeURhdGFTZXJ2aWNlLCB1c2VDbGFzczogZGF0YVNlcnZpY2UgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBNZW1vcnlCYWNrZW5kQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogSHR0cEJhY2tlbmQsIHVzZUZhY3Rvcnk6IEJhY2tlbmRTZXJ2aWNlRmFjdG9yeSwgZGVwczogW01lbW9yeURhdGFTZXJ2aWNlLCBNZW1vcnlCYWNrZW5kQ29uZmlnLCBYaHJGYWN0b3J5XSB9XG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyBmb3JGZWF0dXJlKFxuXHRcdGRhdGFTZXJ2aWNlOiBUeXBlPE1lbW9yeURhdGFTZXJ2aWNlPixcblx0XHRjb25maWc/OiBNZW1vcnlCYWNrZW5kQ29uZmlnXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiBNZW1vcnlNb2R1bGUuZm9yUm9vdChkYXRhU2VydmljZSwgY29uZmlnKTtcblx0fVxuXG59XG4iXX0=