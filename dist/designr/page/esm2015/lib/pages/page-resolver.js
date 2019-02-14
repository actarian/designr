/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PageNotFoundComponent } from './page-not-found.component';
import { PageComponent } from './page.component';
export class PageResolver {
    /**
     * @param {?} pageService
     * @param {?} page
     */
    constructor(pageService, page) {
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvcGFnZS1yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR2pELE1BQU0sT0FBTyxZQUFZOzs7OztJQUl4QixZQUNTLFdBQXdCLEVBQ3pCLElBQVU7UUFEVCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN6QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSlgsY0FBUyxHQUF3QixhQUFhLENBQUM7UUFNckQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDeEc7YUFBTTtZQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLHFCQUFxQixDQUFDO1NBQ2hGO0lBQ0YsQ0FBQztDQUNEOzs7SUFaQSxpQ0FBc0Q7Ozs7O0lBR3JELG1DQUFnQzs7SUFDaEMsNEJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZSc7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gJy4vcGFnZS5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFBhZ2VSZXNvbHZlciB7XG5cblx0cHVibGljIGNvbXBvbmVudDogVHlwZTxQYWdlQ29tcG9uZW50PiA9IFBhZ2VDb21wb25lbnQ7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UsXG5cdFx0cHVibGljIHBhZ2U6IFBhZ2UsXG5cdCkge1xuXHRcdGlmIChwYWdlICYmIHRoaXMucGFnZVNlcnZpY2Uub3B0aW9ucy5wYWdlcykge1xuXHRcdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLnBhZ2VTZXJ2aWNlLm9wdGlvbnMucGFnZXNbcGFnZS5jb21wb25lbnRdIHx8IHRoaXMucGFnZVNlcnZpY2Uub3B0aW9ucy5kZWZhdWx0UGFnZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLnBhZ2VTZXJ2aWNlLm9wdGlvbnMubm90Rm91bmRQYWdlIHx8IFBhZ2VOb3RGb3VuZENvbXBvbmVudDtcblx0XHR9XG5cdH1cbn1cbiJdfQ==