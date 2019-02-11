/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvcGFnZS1yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpEO0lBSUMsc0JBQ1MsYUFBNEIsRUFDN0IsSUFBVTtRQURULGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzdCLFNBQUksR0FBSixJQUFJLENBQU07UUFKWCxjQUFTLEdBQXdCLGFBQWEsQ0FBQztRQU1yRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztTQUM1RzthQUFNO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUkscUJBQXFCLENBQUM7U0FDbEY7SUFDRixDQUFDO0lBQ0YsbUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7OztJQVpBLGlDQUFzRDs7Ozs7SUFHckQscUNBQW9DOztJQUNwQyw0QkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgUGFnZVJlc29sdmVyIHtcblxuXHRwdWJsaWMgY29tcG9uZW50OiBUeXBlPFBhZ2VDb21wb25lbnQ+ID0gUGFnZUNvbXBvbmVudDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG5cdFx0cHVibGljIHBhZ2U6IFBhZ2UsXG5cdCkge1xuXHRcdGlmIChwYWdlICYmIHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBhZ2VzKSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBhZ2VzW3BhZ2UuY29tcG9uZW50XSB8fCB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5kZWZhdWx0UGFnZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5ub3RGb3VuZFBhZ2UgfHwgUGFnZU5vdEZvdW5kQ29tcG9uZW50O1xuXHRcdH1cblx0fVxufVxuIl19