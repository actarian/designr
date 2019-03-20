/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PageNotFoundComponent } from './page-not-found.component';
import { PageComponent } from './page.component';
var PageResolver = /** @class */ (function () {
    function PageResolver(configService, page) {
        this.configService = configService;
        this.page = page;
        this.component = PageComponent;
        if (page && this.configService.options.pages) {
            this.component = this.configService.options.pages[page.component] || this.configService.options.defaultPage;
        }
        else {
            this.component = this.configService.options.notFoundPage || PageNotFoundComponent;
        }
    }
    return PageResolver;
}());
export { PageResolver };
if (false) {
    /** @type {?} */
    PageResolver.prototype.component;
    /**
     * @type {?}
     * @private
     */
    PageResolver.prototype.configService;
    /** @type {?} */
    PageResolver.prototype.page;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLXJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFJQyxzQkFDUyxhQUE0QixFQUM3QixJQUFVO1FBRFQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDN0IsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUpYLGNBQVMsR0FBd0IsYUFBYSxDQUFDO1FBTXJELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1NBQzVHO2FBQU07WUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxxQkFBcUIsQ0FBQztTQUNsRjtJQUNGLENBQUM7SUFFRixtQkFBQztBQUFELENBQUMsQUFmRCxJQWVDOzs7O0lBYkEsaUNBQXNEOzs7OztJQUdyRCxxQ0FBb0M7O0lBQ3BDLDRCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZSc7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBQYWdlUmVzb2x2ZXIge1xuXG5cdHB1YmxpYyBjb21wb25lbnQ6IFR5cGU8UGFnZUNvbXBvbmVudD4gPSBQYWdlQ29tcG9uZW50O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcblx0XHRwdWJsaWMgcGFnZTogUGFnZSxcblx0KSB7XG5cdFx0aWYgKHBhZ2UgJiYgdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGFnZXMpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGFnZXNbcGFnZS5jb21wb25lbnRdIHx8IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLmRlZmF1bHRQYWdlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLm5vdEZvdW5kUGFnZSB8fCBQYWdlTm90Rm91bmRDb21wb25lbnQ7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==