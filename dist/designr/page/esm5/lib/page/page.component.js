/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.router.events.subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                if (!(e instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            }));
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
                    template: "<div class=\"page\">Page not found!</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL3BhZ2UvcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQVUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7QUFFOUIsOEJBRUM7Ozs7O0lBREEsOENBQWlCOztBQUdsQjtJQUltQyx5Q0FBbUI7SUFrQnJELHVCQUNXLFFBQWtCO1FBRDdCLFlBR0MsaUJBQU8sU0FFUDtRQUpVLGNBQVEsR0FBUixRQUFRLENBQVU7UUFHNUIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztJQUNwQixDQUFDO0lBakJELHNCQUFJLHFDQUFVOzs7O1FBQWQ7WUFDQyxPQUFPLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFVLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBWTs7OztRQUFoQjtZQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBTTs7OztRQUFWO1lBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQVNELG1DQUFtQzs7Ozs7O0lBQzNCLG1DQUFXOzs7Ozs7SUFBbkI7UUFDQyxnREFBZ0Q7UUFDaEQsK0VBQStFO1FBQy9FLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLDJDQUEyQztZQUMzQyxvREFBb0Q7WUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGFBQWEsQ0FBQyxFQUFFO29CQUNsQyxPQUFPO2lCQUNQO2dCQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsRUFBQyxDQUFDO1NBQ0g7SUFDRixDQUFDOzs7O0lBRUQsNkJBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCwrQkFBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Z0JBbkRELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDJDQUF5QztpQkFDbkQ7Ozs7Z0JBYm1CLFFBQVE7Ozt1QkFnQjFCLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLOztJQTZDUCxvQkFBQztDQUFBLEFBckRELENBSW1DLG1CQUFtQixHQWlEckQ7U0FqRFksYUFBYTs7O0lBRXpCLDZCQUFvQjs7SUFDcEIsK0JBQW9DOztJQUNwQyxvQ0FBeUM7Ozs7O0lBZXhDLGlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIElucHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQsIFJvdXRlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWdlSW5pdCB7XHJcblx0UGFnZUluaXQoKTogdm9pZDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjb3JlLXBhZ2UnLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBhZ2VcIj5QYWdlIG5vdCBmb3VuZCE8L2Rpdj5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xyXG5cclxuXHRASW5wdXQoKSBwYWdlOiBQYWdlO1xyXG5cdEBJbnB1dCgpIHBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xyXG5cdEBJbnB1dCgpIHF1ZXJ5UGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz47XHJcblxyXG5cdGdldCBwbGF0Zm9ybUlkKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoUExBVEZPUk1fSUQpIGFzIHN0cmluZztcclxuXHR9XHJcblxyXG5cdGdldCByb3V0ZVNlcnZpY2UoKTogUm91dGVTZXJ2aWNlIHtcclxuXHRcdHJldHVybiB0aGlzLmluamVjdG9yLmdldChSb3V0ZVNlcnZpY2UpO1xyXG5cdH1cclxuXHJcblx0Z2V0IHJvdXRlcigpOiBSb3V0ZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5zY3JvbGxUb1RvcCgpO1xyXG5cdH1cclxuXHJcblx0Ly8gISEhIFNjcm9sbCB0byB0b3Agb24gcGFnZSBjaGFuZ2VcclxuXHRwcml2YXRlIHNjcm9sbFRvVG9wKCk6IHZvaWQge1xyXG5cdFx0Ly8gISEhIFBMQVRGT1JNX0lEIGRlcGVuZGFuY3kgbWFudWFsbHkgYWN0aXZhdGVkXHJcblx0XHQvLyBjb25zdCBwbGF0Zm9ybUlkOiBzdHJpbmcgPSBSb3V0ZVNlcnZpY2UuaW5qZWN0b3IuZ2V0KFBMQVRGT1JNX0lEKSBhcyBzdHJpbmc7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHQvLyAhISEgUm91dGVyIGRlcGVuZGFuY3kgbWFudWFsbHkgYWN0aXZhdGVkXHJcblx0XHRcdC8vIGNvbnN0IHJvdXRlciA9IFJvdXRlU2VydmljZS5pbmplY3Rvci5nZXQoUm91dGVyKTtcclxuXHRcdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZSkgPT4ge1xyXG5cdFx0XHRcdGlmICghKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0SWQoKTogbnVtYmVyIHwgc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLnJvdXRlU2VydmljZS5nZXRJZCgpIHx8ICh0aGlzLnBhZ2UgPyB0aGlzLnBhZ2UuaWQgOiAwKTtcclxuXHR9XHJcblxyXG5cdGdldFNsdWcoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLnJvdXRlU2VydmljZS5nZXRTbHVnKCkgfHwgKHRoaXMucGFnZSA/IHRoaXMucGFnZS5zbHVnIDogJycpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19