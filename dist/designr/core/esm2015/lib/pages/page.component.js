/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL3BhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQVUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQzs7OztBQUU5Qiw4QkFFQzs7Ozs7SUFEQSw4Q0FBaUI7O0FBUWxCLE1BQU0sT0FBTyxhQUFjLFNBQVEsbUJBQW1COzs7O0lBa0JyRCxZQUNXLFFBQWtCO1FBRTVCLEtBQUssRUFBRSxDQUFDO1FBRkUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUc1QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQWpCRCxJQUFJLFVBQVU7UUFDYixPQUFPLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFVLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBVU8sV0FBVztRQUNsQixnREFBZ0Q7UUFDaEQsK0VBQStFO1FBQy9FLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLDJDQUEyQztZQUMzQyxvREFBb0Q7WUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxhQUFhLENBQUMsRUFBRTtvQkFDbEMsT0FBTztpQkFDUDtnQkFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7O1lBcERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLDhCQUE4QjthQUN4Qzs7OztZQWRtQixRQUFROzs7bUJBa0IxQixLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7OztJQUZOLDZCQUFvQjs7SUFDcEIsK0JBQW9DOztJQUNwQyxvQ0FBeUM7Ozs7O0lBZXhDLGlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5wdXQsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZVNlcnZpY2UgfSBmcm9tICcuLi9yb3V0ZXMvcm91dGUuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdlSW5pdCB7XG5cdFBhZ2VJbml0KCk6IHZvaWQ7XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtcGFnZScsXG5cdHRlbXBsYXRlOiBgPGgxPkknbSBhIGRlZmF1bHQgdmlldyE8L2gxPmAsXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIHBhZ2U6IFBhZ2U7XG5cdEBJbnB1dCgpIHBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuXHRASW5wdXQoKSBxdWVyeVBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuXG5cdGdldCBwbGF0Zm9ybUlkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFBMQVRGT1JNX0lEKSBhcyBzdHJpbmc7XG5cdH1cblxuXHRnZXQgcm91dGVTZXJ2aWNlKCk6IFJvdXRlU2VydmljZSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlU2VydmljZSk7XG5cdH1cblxuXHRnZXQgcm91dGVyKCk6IFJvdXRlciB7XG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblx0fVxuXG5cdC8vICEhISBTY3JvbGwgdG8gdG9wIG9uIHBhZ2UgY2hhbmdlXG5cdHByaXZhdGUgc2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG5cdFx0Ly8gISEhIFBMQVRGT1JNX0lEIGRlcGVuZGFuY3kgbWFudWFsbHkgYWN0aXZhdGVkXG5cdFx0Ly8gY29uc3QgcGxhdGZvcm1JZDogc3RyaW5nID0gUm91dGVTZXJ2aWNlLmluamVjdG9yLmdldChQTEFURk9STV9JRCkgYXMgc3RyaW5nO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHQvLyAhISEgUm91dGVyIGRlcGVuZGFuY3kgbWFudWFsbHkgYWN0aXZhdGVkXG5cdFx0XHQvLyBjb25zdCByb3V0ZXIgPSBSb3V0ZVNlcnZpY2UuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG5cdFx0XHR0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChlKSA9PiB7XG5cdFx0XHRcdGlmICghKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRnZXRJZCgpOiBudW1iZXIgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnJvdXRlU2VydmljZS5nZXRJZCgpIHx8ICh0aGlzLnBhZ2UgPyB0aGlzLnBhZ2UuaWQgOiAwKTtcblx0fVxuXG5cdGdldFNsdWcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZVNlcnZpY2UuZ2V0U2x1ZygpIHx8ICh0aGlzLnBhZ2UgPyB0aGlzLnBhZ2Uuc2x1ZyA6ICcnKTtcblx0fVxuXG59XG4iXX0=