/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.router.events.subscribe((/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                if (!(e instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            }));
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
                template: `<div class="page">Page not found!</div>`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL3BhZ2UvcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBVSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQzs7OztBQUU5Qiw4QkFFQzs7Ozs7SUFEQSw4Q0FBaUI7O0FBT2xCLE1BQU0sT0FBTyxhQUFjLFNBQVEsbUJBQW1COzs7O0lBa0JyRCxZQUNXLFFBQWtCO1FBRTVCLEtBQUssRUFBRSxDQUFDO1FBRkUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUc1QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQWpCRCxJQUFJLFVBQVU7UUFDYixPQUFPLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFVLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBVU8sV0FBVztRQUNsQixnREFBZ0Q7UUFDaEQsK0VBQStFO1FBQy9FLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLDJDQUEyQztZQUMzQyxvREFBb0Q7WUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxhQUFhLENBQUMsRUFBRTtvQkFDbEMsT0FBTztpQkFDUDtnQkFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDLEVBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7O1lBbkRELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLHlDQUF5QzthQUNuRDs7OztZQWJtQixRQUFROzs7bUJBZ0IxQixLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7OztJQUZOLDZCQUFvQjs7SUFDcEIsK0JBQW9DOztJQUNwQyxvQ0FBeUM7Ozs7O0lBZXhDLGlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIElucHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQsIFJvdXRlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWdlSW5pdCB7XHJcblx0UGFnZUluaXQoKTogdm9pZDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjb3JlLXBhZ2UnLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBhZ2VcIj5QYWdlIG5vdCBmb3VuZCE8L2Rpdj5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xyXG5cclxuXHRASW5wdXQoKSBwYWdlOiBQYWdlO1xyXG5cdEBJbnB1dCgpIHBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xyXG5cdEBJbnB1dCgpIHF1ZXJ5UGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz47XHJcblxyXG5cdGdldCBwbGF0Zm9ybUlkKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoUExBVEZPUk1fSUQpIGFzIHN0cmluZztcclxuXHR9XHJcblxyXG5cdGdldCByb3V0ZVNlcnZpY2UoKTogUm91dGVTZXJ2aWNlIHtcclxuXHRcdHJldHVybiB0aGlzLmluamVjdG9yLmdldChSb3V0ZVNlcnZpY2UpO1xyXG5cdH1cclxuXHJcblx0Z2V0IHJvdXRlcigpOiBSb3V0ZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5zY3JvbGxUb1RvcCgpO1xyXG5cdH1cclxuXHJcblx0Ly8gISEhIFNjcm9sbCB0byB0b3Agb24gcGFnZSBjaGFuZ2VcclxuXHRwcml2YXRlIHNjcm9sbFRvVG9wKCk6IHZvaWQge1xyXG5cdFx0Ly8gISEhIFBMQVRGT1JNX0lEIGRlcGVuZGFuY3kgbWFudWFsbHkgYWN0aXZhdGVkXHJcblx0XHQvLyBjb25zdCBwbGF0Zm9ybUlkOiBzdHJpbmcgPSBSb3V0ZVNlcnZpY2UuaW5qZWN0b3IuZ2V0KFBMQVRGT1JNX0lEKSBhcyBzdHJpbmc7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHQvLyAhISEgUm91dGVyIGRlcGVuZGFuY3kgbWFudWFsbHkgYWN0aXZhdGVkXHJcblx0XHRcdC8vIGNvbnN0IHJvdXRlciA9IFJvdXRlU2VydmljZS5pbmplY3Rvci5nZXQoUm91dGVyKTtcclxuXHRcdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZSkgPT4ge1xyXG5cdFx0XHRcdGlmICghKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0SWQoKTogbnVtYmVyIHwgc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLnJvdXRlU2VydmljZS5nZXRJZCgpIHx8ICh0aGlzLnBhZ2UgPyB0aGlzLnBhZ2UuaWQgOiAwKTtcclxuXHR9XHJcblxyXG5cdGdldFNsdWcoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLnJvdXRlU2VydmljZS5nZXRTbHVnKCkgfHwgKHRoaXMucGFnZSA/IHRoaXMucGFnZS5zbHVnIDogJycpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19