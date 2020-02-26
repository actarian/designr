import { __extends } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../api/api.service';
import * as i0 from "@angular/core";
var IdentityService = /** @class */ (function (_super) {
    __extends(IdentityService, _super);
    function IdentityService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        return _this;
    }
    Object.defineProperty(IdentityService.prototype, "collection", {
        get: function () {
            return '/api/identity';
        },
        enumerable: true,
        configurable: true
    });
    IdentityService.prototype.getDetailById = function (id) {
        return this.get({ id: id });
    };
    IdentityService.ɵfac = function IdentityService_Factory(t) { return new (t || IdentityService)(i0.ɵɵinject(i0.Injector)); };
    IdentityService.ɵprov = i0.ɵɵdefineInjectable({ token: IdentityService, factory: IdentityService.ɵfac, providedIn: 'root' });
    return IdentityService;
}(ApiService));
export { IdentityService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IdentityService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2lkZW50aXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHaEQ7SUFHeUQsbUNBQWE7SUFFckUseUJBQ1csUUFBa0I7UUFEN0IsWUFHQyxrQkFBTSxRQUFRLENBQUMsU0FDZjtRQUhVLGNBQVEsR0FBUixRQUFRLENBQVU7O0lBRzdCLENBQUM7SUFFRCxzQkFBSSx1Q0FBVTthQUFkO1lBQ0MsT0FBTyxlQUFlLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBYSxHQUFiLFVBQWMsRUFBbUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7a0ZBZFcsZUFBZTsyREFBZixlQUFlLFdBQWYsZUFBZSxtQkFGZixNQUFNOzBCQU5uQjtDQXdCQyxBQW5CRCxDQUd5RCxVQUFVLEdBZ0JsRTtTQWhCWSxlQUFlO2tEQUFmLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWRlbnRpdHkgfSBmcm9tICcuL2lkZW50aXR5JztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSWRlbnRpdHlTZXJ2aWNlPFQgZXh0ZW5kcyBJZGVudGl0eT4gZXh0ZW5kcyBBcGlTZXJ2aWNlPFQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0fVxuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcvYXBpL2lkZW50aXR5Jztcblx0fVxuXG5cdGdldERldGFpbEJ5SWQoaWQ6IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLmdldCh7IGlkIH0pO1xuXHR9XG5cbn1cbiJdfQ==