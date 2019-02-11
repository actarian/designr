/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var PageGuard = /** @class */ (function () {
    function PageGuard() {
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    PageGuard.prototype.match = /**
     * @private
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var lastPath = route.url.length ? route.url[route.url.length - 1].path : '';
        /** @type {?} */
        var pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        /** @type {?} */
        var match = (lastPath).match(pattern);
        if (match !== null) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    PageGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        return this.match(route);
    };
    /**
     * @param {?} component
     * @param {?} currentRoute
     * @param {?} currentState
     * @param {?=} nextState
     * @return {?}
     */
    PageGuard.prototype.canDeactivate = /**
     * @param {?} component
     * @param {?} currentRoute
     * @param {?} currentState
     * @param {?=} nextState
     * @return {?}
     */
    function (component, currentRoute, currentState, nextState) {
        return this.match(currentRoute);
    };
    PageGuard.decorators = [
        { type: Injectable }
    ];
    return PageGuard;
}());
export { PageGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQztJQUFBO0lBOEJBLENBQUM7Ozs7OztJQTNCUSx5QkFBSzs7Ozs7SUFBYixVQUFjLEtBQTZCOztZQUNwQyxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFOztZQUN2RSxPQUFPLEdBQUcsMkJBQTJCOztZQUNyQyxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNiO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsK0JBQVc7Ozs7O0lBQVgsVUFDQyxLQUE2QixFQUM3QixLQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7Ozs7SUFFRCxpQ0FBYTs7Ozs7OztJQUFiLFVBQ0MsU0FBYyxFQUNkLFlBQW9DLEVBQ3BDLFlBQWlDLEVBQ2pDLFNBQStCO1FBRS9CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkE1QkQsVUFBVTs7SUE4QlgsZ0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTdCWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIENhbkRlYWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkRlYWN0aXZhdGU8YW55PiB7XG5cblx0cHJpdmF0ZSBtYXRjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGxhc3RQYXRoID0gcm91dGUudXJsLmxlbmd0aCA/IHJvdXRlLnVybFtyb3V0ZS51cmwubGVuZ3RoIC0gMV0ucGF0aCA6ICcnO1xuXHRcdGNvbnN0IHBhdHRlcm4gPSAvXFwuKFswLTlhLXpdKykoPzpbXFw/I118JCkvaTtcblx0XHRjb25zdCBtYXRjaCA9IChsYXN0UGF0aCkubWF0Y2gocGF0dGVybik7XG5cdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGNhbkFjdGl2YXRlKFxuXHRcdHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuXHRcdHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG5cdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubWF0Y2gocm91dGUpO1xuXHR9XG5cblx0Y2FuRGVhY3RpdmF0ZShcblx0XHRjb21wb25lbnQ6IGFueSxcblx0XHRjdXJyZW50Um91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG5cdFx0Y3VycmVudFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuXHRcdG5leHRTdGF0ZT86IFJvdXRlclN0YXRlU25hcHNob3Rcblx0KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5tYXRjaChjdXJyZW50Um91dGUpO1xuXHR9XG5cbn1cbiJdfQ==