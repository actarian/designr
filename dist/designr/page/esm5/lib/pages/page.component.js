/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, Injector, Input, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DisposableComponent, RouteService } from '@designr/core';
import { Observable } from 'rxjs';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL3BhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFVLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7O0FBRTlCLDhCQUVDOzs7OztJQURBLDhDQUFpQjs7QUFHbEI7SUFLbUMseUNBQW1CO0lBa0JyRCx1QkFDVyxRQUFrQjtRQUQ3QixZQUdDLGlCQUFPLFNBRVA7UUFKVSxjQUFRLEdBQVIsUUFBUSxDQUFVO1FBRzVCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7SUFDcEIsQ0FBQztJQWpCRCxzQkFBSSxxQ0FBVTs7OztRQUFkO1lBQ0MsT0FBTyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBVSxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVk7Ozs7UUFBaEI7WUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQU07Ozs7UUFBVjtZQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFTRCxtQ0FBbUM7Ozs7OztJQUMzQixtQ0FBVzs7Ozs7O0lBQW5CO1FBQ0MsZ0RBQWdEO1FBQ2hELCtFQUErRTtRQUMvRSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QywyQ0FBMkM7WUFDM0Msb0RBQW9EO1lBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxhQUFhLENBQUMsRUFBRTtvQkFDbEMsT0FBTztpQkFDUDtnQkFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQzs7OztJQUVELDZCQUFLOzs7SUFBTDtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7O0lBRUQsK0JBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7O2dCQXBERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSw4QkFBOEI7aUJBQ3hDOzs7O2dCQWJtQixRQUFROzs7dUJBaUIxQixLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUE2Q1Asb0JBQUM7Q0FBQSxBQXRERCxDQUttQyxtQkFBbUIsR0FpRHJEO1NBakRZLGFBQWE7OztJQUV6Qiw2QkFBb0I7O0lBQ3BCLCtCQUFvQzs7SUFDcEMsb0NBQXlDOzs7OztJQWV4QyxpQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIElucHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCwgUm91dGVTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdlSW5pdCB7XG5cdFBhZ2VJbml0KCk6IHZvaWQ7XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtcGFnZScsXG5cdHRlbXBsYXRlOiBgPGgxPkknbSBhIGRlZmF1bHQgdmlldyE8L2gxPmAsXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIHBhZ2U6IFBhZ2U7XG5cdEBJbnB1dCgpIHBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuXHRASW5wdXQoKSBxdWVyeVBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuXG5cdGdldCBwbGF0Zm9ybUlkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFBMQVRGT1JNX0lEKSBhcyBzdHJpbmc7XG5cdH1cblxuXHRnZXQgcm91dGVTZXJ2aWNlKCk6IFJvdXRlU2VydmljZSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlU2VydmljZSk7XG5cdH1cblxuXHRnZXQgcm91dGVyKCk6IFJvdXRlciB7XG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblx0fVxuXG5cdC8vICEhISBTY3JvbGwgdG8gdG9wIG9uIHBhZ2UgY2hhbmdlXG5cdHByaXZhdGUgc2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG5cdFx0Ly8gISEhIFBMQVRGT1JNX0lEIGRlcGVuZGFuY3kgbWFudWFsbHkgYWN0aXZhdGVkXG5cdFx0Ly8gY29uc3QgcGxhdGZvcm1JZDogc3RyaW5nID0gUm91dGVTZXJ2aWNlLmluamVjdG9yLmdldChQTEFURk9STV9JRCkgYXMgc3RyaW5nO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHQvLyAhISEgUm91dGVyIGRlcGVuZGFuY3kgbWFudWFsbHkgYWN0aXZhdGVkXG5cdFx0XHQvLyBjb25zdCByb3V0ZXIgPSBSb3V0ZVNlcnZpY2UuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG5cdFx0XHR0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChlKSA9PiB7XG5cdFx0XHRcdGlmICghKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRnZXRJZCgpOiBudW1iZXIgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnJvdXRlU2VydmljZS5nZXRJZCgpIHx8ICh0aGlzLnBhZ2UgPyB0aGlzLnBhZ2UuaWQgOiAwKTtcblx0fVxuXG5cdGdldFNsdWcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZVNlcnZpY2UuZ2V0U2x1ZygpIHx8ICh0aGlzLnBhZ2UgPyB0aGlzLnBhZ2Uuc2x1ZyA6ICcnKTtcblx0fVxuXG59XG4iXX0=