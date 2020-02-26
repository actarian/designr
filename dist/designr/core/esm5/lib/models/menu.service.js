import { __extends } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { EntityService } from './entity.service';
import * as i0 from "@angular/core";
var MenuService = /** @class */ (function (_super) {
    __extends(MenuService, _super);
    function MenuService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        return _this;
    }
    Object.defineProperty(MenuService.prototype, "collection", {
        get: function () {
            return '/api/menu';
        },
        enumerable: true,
        configurable: true
    });
    MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(i0.ɵɵinject(i0.Injector)); };
    MenuService.ɵprov = i0.ɵɵdefineInjectable({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });
    return MenuService;
}(EntityService));
export { MenuService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBR2pEO0lBR2lDLCtCQUF1QjtJQU12RCxxQkFDVyxRQUFrQjtRQUQ3QixZQUdDLGtCQUFNLFFBQVEsQ0FBQyxTQUNmO1FBSFUsY0FBUSxHQUFSLFFBQVEsQ0FBVTs7SUFHN0IsQ0FBQztJQVJELHNCQUFJLG1DQUFVO2FBQWQ7WUFDQyxPQUFPLFdBQVcsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTswRUFKVyxXQUFXO3VEQUFYLFdBQVcsV0FBWCxXQUFXLG1CQUZYLE1BQU07c0JBTG5CO0NBbUJDLEFBZkQsQ0FHaUMsYUFBYSxHQVk3QztTQVpZLFdBQVc7a0RBQVgsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW50aXR5U2VydmljZSB9IGZyb20gJy4vZW50aXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICcuL21lbnUtaXRlbSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVTZXJ2aWNlIGV4dGVuZHMgRW50aXR5U2VydmljZTxNZW51SXRlbT4ge1xuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcvYXBpL21lbnUnO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcixcblx0KSB7XG5cdFx0c3VwZXIoaW5qZWN0b3IpO1xuXHR9XG5cbn1cbiJdfQ==