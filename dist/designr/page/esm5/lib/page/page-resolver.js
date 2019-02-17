/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PageNotFoundComponent } from './page-not-found.component';
import { PageComponent } from './page.component';
var PageResolver = /** @class */ (function () {
    function PageResolver(pageService, page) {
        this.pageService = pageService;
        this.page = page;
        this.component = PageComponent;
        if (page && this.pageService.options.pages) {
            this.component = this.pageService.options.pages[page.component] || this.pageService.options.defaultPage;
        }
        else {
            this.component = this.pageService.options.notFoundPage || PageNotFoundComponent;
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
    PageResolver.prototype.pageService;
    /** @type {?} */
    PageResolver.prototype.page;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLXJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQ7SUFJQyxzQkFDUyxXQUF3QixFQUN6QixJQUFVO1FBRFQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUpYLGNBQVMsR0FBd0IsYUFBYSxDQUFDO1FBTXJELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1NBQ3hHO2FBQU07WUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxxQkFBcUIsQ0FBQztTQUNoRjtJQUNGLENBQUM7SUFFRixtQkFBQztBQUFELENBQUMsQUFmRCxJQWVDOzs7O0lBYkEsaUNBQXNEOzs7OztJQUdyRCxtQ0FBZ0M7O0lBQ2hDLDRCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tICcuL3BhZ2Uuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBQYWdlUmVzb2x2ZXIge1xuXG5cdHB1YmxpYyBjb21wb25lbnQ6IFR5cGU8UGFnZUNvbXBvbmVudD4gPSBQYWdlQ29tcG9uZW50O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcGFnZVNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxuXHRcdHB1YmxpYyBwYWdlOiBQYWdlLFxuXHQpIHtcblx0XHRpZiAocGFnZSAmJiB0aGlzLnBhZ2VTZXJ2aWNlLm9wdGlvbnMucGFnZXMpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5wYWdlU2VydmljZS5vcHRpb25zLnBhZ2VzW3BhZ2UuY29tcG9uZW50XSB8fCB0aGlzLnBhZ2VTZXJ2aWNlLm9wdGlvbnMuZGVmYXVsdFBhZ2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5wYWdlU2VydmljZS5vcHRpb25zLm5vdEZvdW5kUGFnZSB8fCBQYWdlTm90Rm91bmRDb21wb25lbnQ7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==