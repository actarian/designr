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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvcGFnZS1yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR2pEO0lBSUMsc0JBQ1MsV0FBd0IsRUFDekIsSUFBVTtRQURULGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQU07UUFKWCxjQUFTLEdBQXdCLGFBQWEsQ0FBQztRQU1yRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztTQUN4RzthQUFNO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUkscUJBQXFCLENBQUM7U0FDaEY7SUFDRixDQUFDO0lBQ0YsbUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7OztJQVpBLGlDQUFzRDs7Ozs7SUFHckQsbUNBQWdDOztJQUNoQyw0QkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgUGFnZVJlc29sdmVyIHtcblxuXHRwdWJsaWMgY29tcG9uZW50OiBUeXBlPFBhZ2VDb21wb25lbnQ+ID0gUGFnZUNvbXBvbmVudDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcblx0XHRwdWJsaWMgcGFnZTogUGFnZSxcblx0KSB7XG5cdFx0aWYgKHBhZ2UgJiYgdGhpcy5wYWdlU2VydmljZS5vcHRpb25zLnBhZ2VzKSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMucGFnZVNlcnZpY2Uub3B0aW9ucy5wYWdlc1twYWdlLmNvbXBvbmVudF0gfHwgdGhpcy5wYWdlU2VydmljZS5vcHRpb25zLmRlZmF1bHRQYWdlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMucGFnZVNlcnZpY2Uub3B0aW9ucy5ub3RGb3VuZFBhZ2UgfHwgUGFnZU5vdEZvdW5kQ29tcG9uZW50O1xuXHRcdH1cblx0fVxufVxuIl19