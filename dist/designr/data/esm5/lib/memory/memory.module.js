////// HttpClient-Only version ////
import { HttpBackend, XhrFactory } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BackendService } from './backend.service';
import { MemoryBackendConfig, MemoryDataService } from './memory';
import * as i0 from "@angular/core";
// Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported
export function BackendServiceFactory(dataService, config, factory) {
    var backend = new BackendService(dataService, config, factory);
    return backend;
}
var MemoryModule = /** @class */ (function () {
    function MemoryModule() {
    }
    MemoryModule.forRoot = function (dataService, config) {
        return {
            ngModule: MemoryModule,
            providers: [
                { provide: MemoryDataService, useClass: dataService },
                { provide: MemoryBackendConfig, useValue: config },
                { provide: HttpBackend, useFactory: BackendServiceFactory, deps: [MemoryDataService, MemoryBackendConfig, XhrFactory] }
            ]
        };
    };
    MemoryModule.forFeature = function (dataService, config) {
        return MemoryModule.forRoot(dataService, config);
    };
    MemoryModule.ɵmod = i0.ɵɵdefineNgModule({ type: MemoryModule });
    MemoryModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MemoryModule_Factory(t) { return new (t || MemoryModule)(); } });
    return MemoryModule;
}());
export { MemoryModule };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MemoryModule, [{
        type: NgModule,
        args: [{}]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2RhdGEvIiwic291cmNlcyI6WyJsaWIvbWVtb3J5L21lbW9yeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQW1DO0FBRW5DLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUF1QixRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFFbEUsa0VBQWtFO0FBQ2xFLHNDQUFzQztBQUN0QyxNQUFNLFVBQVUscUJBQXFCLENBQ3BDLFdBQThCLEVBQzlCLE1BQTJCLEVBQzNCLE9BQW1CO0lBRW5CLElBQU0sT0FBTyxHQUFRLElBQUksY0FBYyxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEUsT0FBTyxPQUFPLENBQUM7QUFDaEIsQ0FBQztBQUVEO0lBQUE7S0F3QkM7SUFyQk8sb0JBQU8sR0FBZCxVQUNDLFdBQW9DLEVBQ3BDLE1BQTRCO1FBRTVCLE9BQU87WUFDTixRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTtnQkFDckQsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDbEQsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLENBQUMsRUFBRTthQUN2SDtTQUNELENBQUM7SUFDSCxDQUFDO0lBRU0sdUJBQVUsR0FBakIsVUFDQyxXQUFvQyxFQUNwQyxNQUE0QjtRQUU1QixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7b0RBckJXLFlBQVk7MkdBQVosWUFBWTt1QkFuQnpCO0NBMENDLEFBeEJELElBd0JDO1NBdkJZLFlBQVk7a0RBQVosWUFBWTtjQUR4QixRQUFRO2VBQUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLyBIdHRwQ2xpZW50LU9ubHkgdmVyc2lvbiAvLy8vXG5cbmltcG9ydCB7IEh0dHBCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9iYWNrZW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVtb3J5QmFja2VuZENvbmZpZywgTWVtb3J5RGF0YVNlcnZpY2UgfSBmcm9tICcuL21lbW9yeSc7XG5cbi8vIEludGVybmFsIC0gQ3JlYXRlcyB0aGUgaW4tbWVtIGJhY2tlbmQgZm9yIHRoZSBIdHRwQ2xpZW50IG1vZHVsZVxuLy8gQW9UIHJlcXVpcmVzIGZhY3RvcnkgdG8gYmUgZXhwb3J0ZWRcbmV4cG9ydCBmdW5jdGlvbiBCYWNrZW5kU2VydmljZUZhY3RvcnkoXG5cdGRhdGFTZXJ2aWNlOiBNZW1vcnlEYXRhU2VydmljZSxcblx0Y29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnLFxuXHRmYWN0b3J5OiBYaHJGYWN0b3J5LFxuKTogSHR0cEJhY2tlbmQge1xuXHRjb25zdCBiYWNrZW5kOiBhbnkgPSBuZXcgQmFja2VuZFNlcnZpY2UoZGF0YVNlcnZpY2UsIGNvbmZpZywgZmFjdG9yeSk7XG5cdHJldHVybiBiYWNrZW5kO1xufVxuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgTWVtb3J5TW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yUm9vdChcblx0XHRkYXRhU2VydmljZTogVHlwZTxNZW1vcnlEYXRhU2VydmljZT4sXG5cdFx0Y29uZmlnPzogTWVtb3J5QmFja2VuZENvbmZpZ1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IE1lbW9yeU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IE1lbW9yeURhdGFTZXJ2aWNlLCB1c2VDbGFzczogZGF0YVNlcnZpY2UgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBNZW1vcnlCYWNrZW5kQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogSHR0cEJhY2tlbmQsIHVzZUZhY3Rvcnk6IEJhY2tlbmRTZXJ2aWNlRmFjdG9yeSwgZGVwczogW01lbW9yeURhdGFTZXJ2aWNlLCBNZW1vcnlCYWNrZW5kQ29uZmlnLCBYaHJGYWN0b3J5XSB9XG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyBmb3JGZWF0dXJlKFxuXHRcdGRhdGFTZXJ2aWNlOiBUeXBlPE1lbW9yeURhdGFTZXJ2aWNlPixcblx0XHRjb25maWc/OiBNZW1vcnlCYWNrZW5kQ29uZmlnXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiBNZW1vcnlNb2R1bGUuZm9yUm9vdChkYXRhU2VydmljZSwgY29uZmlnKTtcblx0fVxuXG59XG4iXX0=