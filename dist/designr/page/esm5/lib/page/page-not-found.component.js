/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { PageComponent } from './page.component';
var PageNotFoundComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PageNotFoundComponent, _super);
    function PageNotFoundComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.url = _this.router.url;
        return _this;
    }
    PageNotFoundComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-not-found-component',
                    template: "<div class=\"page\">Page <span>{{url}}</span> not found</div>",
                    encapsulation: ViewEncapsulation.Emulated
                }] }
    ];
    /** @nocollapse */
    PageNotFoundComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return PageNotFoundComponent;
}(PageComponent));
export { PageNotFoundComponent };
if (false) {
    /** @type {?} */
    PageNotFoundComponent.prototype.url;
    /**
     * @type {?}
     * @protected
     */
    PageNotFoundComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRDtJQU0yQyxpREFBYTtJQUl2RCwrQkFDVyxRQUFrQjtRQUQ3QixZQUdDLGtCQUFNLFFBQVEsQ0FBQyxTQUVmO1FBSlUsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUc1QixLQUFJLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDOztJQUM1QixDQUFDOztnQkFmRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLCtEQUE2RDtvQkFDdkUsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7aUJBQ3pDOzs7O2dCQVBtQixRQUFROztJQW9CNUIsNEJBQUM7Q0FBQSxBQWpCRCxDQU0yQyxhQUFhLEdBV3ZEO1NBWFkscUJBQXFCOzs7SUFFakMsb0NBQW1COzs7OztJQUdsQix5Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3BhZ2Utbm90LWZvdW5kLWNvbXBvbmVudCcsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicGFnZVwiPlBhZ2UgPHNwYW4+e3t1cmx9fTwvc3Bhbj4gbm90IGZvdW5kPC9kaXY+YCxcclxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlTm90Rm91bmRDb21wb25lbnQgZXh0ZW5kcyBQYWdlQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIHVybDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3JcclxuXHQpIHtcclxuXHRcdHN1cGVyKGluamVjdG9yKTtcclxuXHRcdHRoaXMudXJsID0gdGhpcy5yb3V0ZXIudXJsO1xyXG5cdH1cclxuXHJcbn1cclxuIl19