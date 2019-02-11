/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, Injector, Input, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DisposableComponent } from '../disposable/disposable.component';
import { RouteService } from '../routes/route.service';
import { Page } from './page';
/**
 * @record
 */
export function PageInit() { }
if (false) {
    /**
     * @return {?}
     */
    PageInit.prototype.PageInit = function () { };
}
var PageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PageComponent, _super);
    function PageComponent(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.scrollToTop();
        return _this;
    }
    Object.defineProperty(PageComponent.prototype, "platformId", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.injector.get(PLATFORM_ID)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "routeService", {
        get: /**
         * @return {?}
         */
        function () {
            return this.injector.get(RouteService);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "router", {
        get: /**
         * @return {?}
         */
        function () {
            return this.injector.get(Router);
        },
        enumerable: true,
        configurable: true
    });
    // !!! Scroll to top on page change
    // !!! Scroll to top on page change
    /**
     * @private
     * @return {?}
     */
    PageComponent.prototype.scrollToTop = 
    // !!! Scroll to top on page change
    /**
     * @private
     * @return {?}
     */
    function () {
        // !!! PLATFORM_ID dependancy manually activated
        // const platformId: string = RouteService.injector.get(PLATFORM_ID) as string;
        if (isPlatformBrowser(this.platformId)) {
            // !!! Router dependancy manually activated
            // const router = RouteService.injector.get(Router);
            this.router.events.subscribe(function (e) {
                if (!(e instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
        }
    };
    /**
     * @return {?}
     */
    PageComponent.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.routeService.getId() || (this.page ? this.page.id : 0);
    };
    /**
     * @return {?}
     */
    PageComponent.prototype.getSlug = /**
     * @return {?}
     */
    function () {
        return this.routeService.getSlug() || (this.page ? this.page.slug : '');
    };
    PageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'core-page',
                    template: "<h1>I'm a default view!</h1>"
                }] }
    ];
    /** @nocollapse */
    PageComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    PageComponent.propDecorators = {
        page: [{ type: Input }],
        params: [{ type: Input }],
        queryParams: [{ type: Input }]
    };
    return PageComponent;
}(DisposableComponent));
export { PageComponent };
if (false) {
    /** @type {?} */
    PageComponent.prototype.page;
    /** @type {?} */
    PageComponent.prototype.params;
    /** @type {?} */
    PageComponent.prototype.queryParams;
    /**
     * @type {?}
     * @protected
     */
    PageComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL3BhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFVLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7QUFFOUIsOEJBRUM7Ozs7O0lBREEsOENBQWlCOztBQUdsQjtJQUttQyx5Q0FBbUI7SUFrQnJELHVCQUNXLFFBQWtCO1FBRDdCLFlBR0MsaUJBQU8sU0FFUDtRQUpVLGNBQVEsR0FBUixRQUFRLENBQVU7UUFHNUIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztJQUNwQixDQUFDO0lBakJELHNCQUFJLHFDQUFVOzs7O1FBQWQ7WUFDQyxPQUFPLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFVLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBWTs7OztRQUFoQjtZQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBTTs7OztRQUFWO1lBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQVNELG1DQUFtQzs7Ozs7O0lBQzNCLG1DQUFXOzs7Ozs7SUFBbkI7UUFDQyxnREFBZ0Q7UUFDaEQsK0VBQStFO1FBQy9FLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLDJDQUEyQztZQUMzQyxvREFBb0Q7WUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGFBQWEsQ0FBQyxFQUFFO29CQUNsQyxPQUFPO2lCQUNQO2dCQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDOzs7O0lBRUQsNkJBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCwrQkFBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Z0JBcERELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDhCQUE4QjtpQkFDeEM7Ozs7Z0JBZG1CLFFBQVE7Ozt1QkFrQjFCLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLOztJQTZDUCxvQkFBQztDQUFBLEFBdERELENBS21DLG1CQUFtQixHQWlEckQ7U0FqRFksYUFBYTs7O0lBRXpCLDZCQUFvQjs7SUFDcEIsK0JBQW9DOztJQUNwQyxvQ0FBeUM7Ozs7O0lBZXhDLGlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5wdXQsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZVNlcnZpY2UgfSBmcm9tICcuLi9yb3V0ZXMvcm91dGUuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdlSW5pdCB7XG5cdFBhZ2VJbml0KCk6IHZvaWQ7XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtcGFnZScsXG5cdHRlbXBsYXRlOiBgPGgxPkknbSBhIGRlZmF1bHQgdmlldyE8L2gxPmAsXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIHBhZ2U6IFBhZ2U7XG5cdEBJbnB1dCgpIHBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuXHRASW5wdXQoKSBxdWVyeVBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuXG5cdGdldCBwbGF0Zm9ybUlkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFBMQVRGT1JNX0lEKSBhcyBzdHJpbmc7XG5cdH1cblxuXHRnZXQgcm91dGVTZXJ2aWNlKCk6IFJvdXRlU2VydmljZSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlU2VydmljZSk7XG5cdH1cblxuXHRnZXQgcm91dGVyKCk6IFJvdXRlciB7XG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblx0fVxuXG5cdC8vICEhISBTY3JvbGwgdG8gdG9wIG9uIHBhZ2UgY2hhbmdlXG5cdHByaXZhdGUgc2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG5cdFx0Ly8gISEhIFBMQVRGT1JNX0lEIGRlcGVuZGFuY3kgbWFudWFsbHkgYWN0aXZhdGVkXG5cdFx0Ly8gY29uc3QgcGxhdGZvcm1JZDogc3RyaW5nID0gUm91dGVTZXJ2aWNlLmluamVjdG9yLmdldChQTEFURk9STV9JRCkgYXMgc3RyaW5nO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHQvLyAhISEgUm91dGVyIGRlcGVuZGFuY3kgbWFudWFsbHkgYWN0aXZhdGVkXG5cdFx0XHQvLyBjb25zdCByb3V0ZXIgPSBSb3V0ZVNlcnZpY2UuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG5cdFx0XHR0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChlKSA9PiB7XG5cdFx0XHRcdGlmICghKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRnZXRJZCgpOiBudW1iZXIgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnJvdXRlU2VydmljZS5nZXRJZCgpIHx8ICh0aGlzLnBhZ2UgPyB0aGlzLnBhZ2UuaWQgOiAwKTtcblx0fVxuXG5cdGdldFNsdWcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZVNlcnZpY2UuZ2V0U2x1ZygpIHx8ICh0aGlzLnBhZ2UgPyB0aGlzLnBhZ2Uuc2x1ZyA6ICcnKTtcblx0fVxuXG59XG4iXX0=