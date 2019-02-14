/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class PageComponent extends DisposableComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super();
        this.injector = injector;
        this.scrollToTop();
    }
    /**
     * @return {?}
     */
    get platformId() {
        return (/** @type {?} */ (this.injector.get(PLATFORM_ID)));
    }
    /**
     * @return {?}
     */
    get routeService() {
        return this.injector.get(RouteService);
    }
    /**
     * @return {?}
     */
    get router() {
        return this.injector.get(Router);
    }
    // !!! Scroll to top on page change
    /**
     * @private
     * @return {?}
     */
    scrollToTop() {
        // !!! PLATFORM_ID dependancy manually activated
        // const platformId: string = RouteService.injector.get(PLATFORM_ID) as string;
        if (isPlatformBrowser(this.platformId)) {
            // !!! Router dependancy manually activated
            // const router = RouteService.injector.get(Router);
            this.router.events.subscribe((e) => {
                if (!(e instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
        }
    }
    /**
     * @return {?}
     */
    getId() {
        return this.routeService.getId() || (this.page ? this.page.id : 0);
    }
    /**
     * @return {?}
     */
    getSlug() {
        return this.routeService.getSlug() || (this.page ? this.page.slug : '');
    }
}
PageComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-page',
                template: `<h1>I'm a default view!</h1>`
            }] }
];
/** @nocollapse */
PageComponent.ctorParameters = () => [
    { type: Injector }
];
PageComponent.propDecorators = {
    page: [{ type: Input }],
    params: [{ type: Input }],
    queryParams: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL3BhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQVUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7QUFFOUIsOEJBRUM7Ozs7O0lBREEsOENBQWlCOztBQVFsQixNQUFNLE9BQU8sYUFBYyxTQUFRLG1CQUFtQjs7OztJQWtCckQsWUFDVyxRQUFrQjtRQUU1QixLQUFLLEVBQUUsQ0FBQztRQUZFLGFBQVEsR0FBUixRQUFRLENBQVU7UUFHNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFqQkQsSUFBSSxVQUFVO1FBQ2IsT0FBTyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBVSxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQVVPLFdBQVc7UUFDbEIsZ0RBQWdEO1FBQ2hELCtFQUErRTtRQUMvRSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QywyQ0FBMkM7WUFDM0Msb0RBQW9EO1lBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksYUFBYSxDQUFDLEVBQUU7b0JBQ2xDLE9BQU87aUJBQ1A7Z0JBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7OztZQXBERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSw4QkFBOEI7YUFDeEM7Ozs7WUFibUIsUUFBUTs7O21CQWlCMUIsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFGTiw2QkFBb0I7O0lBQ3BCLCtCQUFvQzs7SUFDcEMsb0NBQXlDOzs7OztJQWV4QyxpQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIElucHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCwgUm91dGVTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdlSW5pdCB7XG5cdFBhZ2VJbml0KCk6IHZvaWQ7XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtcGFnZScsXG5cdHRlbXBsYXRlOiBgPGgxPkknbSBhIGRlZmF1bHQgdmlldyE8L2gxPmAsXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIHBhZ2U6IFBhZ2U7XG5cdEBJbnB1dCgpIHBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuXHRASW5wdXQoKSBxdWVyeVBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuXG5cdGdldCBwbGF0Zm9ybUlkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFBMQVRGT1JNX0lEKSBhcyBzdHJpbmc7XG5cdH1cblxuXHRnZXQgcm91dGVTZXJ2aWNlKCk6IFJvdXRlU2VydmljZSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlU2VydmljZSk7XG5cdH1cblxuXHRnZXQgcm91dGVyKCk6IFJvdXRlciB7XG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblx0fVxuXG5cdC8vICEhISBTY3JvbGwgdG8gdG9wIG9uIHBhZ2UgY2hhbmdlXG5cdHByaXZhdGUgc2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG5cdFx0Ly8gISEhIFBMQVRGT1JNX0lEIGRlcGVuZGFuY3kgbWFudWFsbHkgYWN0aXZhdGVkXG5cdFx0Ly8gY29uc3QgcGxhdGZvcm1JZDogc3RyaW5nID0gUm91dGVTZXJ2aWNlLmluamVjdG9yLmdldChQTEFURk9STV9JRCkgYXMgc3RyaW5nO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHQvLyAhISEgUm91dGVyIGRlcGVuZGFuY3kgbWFudWFsbHkgYWN0aXZhdGVkXG5cdFx0XHQvLyBjb25zdCByb3V0ZXIgPSBSb3V0ZVNlcnZpY2UuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG5cdFx0XHR0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChlKSA9PiB7XG5cdFx0XHRcdGlmICghKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRnZXRJZCgpOiBudW1iZXIgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnJvdXRlU2VydmljZS5nZXRJZCgpIHx8ICh0aGlzLnBhZ2UgPyB0aGlzLnBhZ2UuaWQgOiAwKTtcblx0fVxuXG5cdGdldFNsdWcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZVNlcnZpY2UuZ2V0U2x1ZygpIHx8ICh0aGlzLnBhZ2UgPyB0aGlzLnBhZ2Uuc2x1ZyA6ICcnKTtcblx0fVxuXG59XG4iXX0=