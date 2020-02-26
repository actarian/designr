import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IdentityService } from './identity.service';
import * as i0 from "@angular/core";
var EntityService = /** @class */ (function (_super) {
    __extends(EntityService, _super);
    function EntityService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EntityService.prototype, "collection", {
        get: function () {
            return '/api/entity';
        },
        enumerable: true,
        configurable: true
    });
    EntityService.prototype.getDetailByName = function (name) {
        if (!name.trim()) {
            return of([]);
        }
        return this.get({ name: name });
    };
    EntityService.ɵfac = function EntityService_Factory(t) { return ɵEntityService_BaseFactory(t || EntityService); };
    EntityService.ɵprov = i0.ɵɵdefineInjectable({ token: EntityService, factory: EntityService.ɵfac, providedIn: 'root' });
    return EntityService;
}(IdentityService));
export { EntityService };
var ɵEntityService_BaseFactory = i0.ɵɵgetInheritedFactory(EntityService);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EntityService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9lbnRpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFckQ7SUFHcUQsaUNBQWtCO0lBSHZFOztLQWdCQztJQVhBLHNCQUFJLHFDQUFVO2FBQWQ7WUFDQyxPQUFPLGFBQWEsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHVDQUFlLEdBQWYsVUFBZ0IsSUFBWTtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQztvR0FYVyxhQUFhO3lEQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZiLE1BQU07d0JBTm5CO0NBcUJDLEFBaEJELENBR3FELGVBQWUsR0FhbkU7U0FiWSxhQUFhOzBEQUFiLGFBQWE7a0RBQWIsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi9lbnRpdHknO1xuaW1wb3J0IHsgSWRlbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi9pZGVudGl0eS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5U2VydmljZTxUIGV4dGVuZHMgRW50aXR5PiBleHRlbmRzIElkZW50aXR5U2VydmljZTxUPiB7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGkvZW50aXR5Jztcblx0fVxuXG5cdGdldERldGFpbEJ5TmFtZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGlmICghbmFtZS50cmltKCkpIHtcblx0XHRcdHJldHVybiBvZihbXSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmdldCh7IG5hbWUgfSk7XG5cdH1cblxufVxuIl19