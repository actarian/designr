/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { PageComponent } from './page.component';
export class PageNotFoundComponent extends PageComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.url = this.router.url;
    }
}
PageNotFoundComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-not-found-component',
                template: "<div class=\"container\">\n\t<h3>il file <span>{{url}}</span> non \u00E8 stato trovato</h3>\n</div>\n",
                encapsulation: ViewEncapsulation.Emulated,
                styles: [""]
            }] }
];
/** @nocollapse */
PageNotFoundComponent.ctorParameters = () => [
    { type: Injector }
];
if (false) {
    /** @type {?} */
    PageNotFoundComponent.prototype.url;
    /**
     * @type {?}
     * @protected
     */
    PageNotFoundComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVNqRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsYUFBYTs7OztJQUl2RCxZQUNXLFFBQWtCO1FBRTVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUZOLGFBQVEsR0FBUixRQUFRLENBQVU7UUFHNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUM1QixDQUFDOzs7WUFoQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLGlIQUE4QztnQkFFOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7O2FBQ3pDOzs7O1lBUm1CLFFBQVE7Ozs7SUFZM0Isb0NBQW1COzs7OztJQUdsQix5Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdwYWdlLW5vdC1mb3VuZC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnZS1ub3QtZm91bmQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQYWdlTm90Rm91bmRDb21wb25lbnQgZXh0ZW5kcyBQYWdlQ29tcG9uZW50IHtcblxuXHRwdWJsaWMgdXJsOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuXHQpIHtcblx0XHRzdXBlcihpbmplY3Rvcik7XG5cdFx0dGhpcy51cmwgPSB0aGlzLnJvdXRlci51cmw7XG5cdH1cblxufVxuIl19