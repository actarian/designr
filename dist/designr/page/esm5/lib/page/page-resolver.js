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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLXJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFJQyxzQkFDUyxhQUE0QixFQUM3QixJQUFVO1FBRFQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDN0IsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUpYLGNBQVMsR0FBd0IsYUFBYSxDQUFDO1FBTXJELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1NBQzVHO2FBQU07WUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxxQkFBcUIsQ0FBQztTQUNsRjtJQUNGLENBQUM7SUFFRixtQkFBQztBQUFELENBQUMsQUFmRCxJQWVDOzs7O0lBYkEsaUNBQXNEOzs7OztJQUdyRCxxQ0FBb0M7O0lBQ3BDLDRCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xyXG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlUmVzb2x2ZXIge1xyXG5cclxuXHRwdWJsaWMgY29tcG9uZW50OiBUeXBlPFBhZ2VDb21wb25lbnQ+ID0gUGFnZUNvbXBvbmVudDtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXHJcblx0XHRwdWJsaWMgcGFnZTogUGFnZSxcclxuXHQpIHtcclxuXHRcdGlmIChwYWdlICYmIHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBhZ2VzKSB7XHJcblx0XHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGFnZXNbcGFnZS5jb21wb25lbnRdIHx8IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLmRlZmF1bHRQYWdlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5ub3RGb3VuZFBhZ2UgfHwgUGFnZU5vdEZvdW5kQ29tcG9uZW50O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19