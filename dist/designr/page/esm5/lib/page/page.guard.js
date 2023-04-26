/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDO0lBQUE7SUE4QkEsQ0FBQzs7Ozs7O0lBM0JRLHlCQUFLOzs7OztJQUFiLFVBQWMsS0FBNkI7O1lBQ3BDLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7O1lBQ3ZFLE9BQU8sR0FBRywyQkFBMkI7O1lBQ3JDLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDdkMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2I7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDOzs7Ozs7SUFFRCwrQkFBVzs7Ozs7SUFBWCxVQUNDLEtBQTZCLEVBQzdCLEtBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7Ozs7OztJQUVELGlDQUFhOzs7Ozs7O0lBQWIsVUFDQyxTQUFjLEVBQ2QsWUFBb0MsRUFDcEMsWUFBaUMsRUFDakMsU0FBK0I7UUFFL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQTVCRCxVQUFVOztJQThCWCxnQkFBQztDQUFBLEFBOUJELElBOEJDO1NBN0JZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBDYW5EZWFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGFnZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkRlYWN0aXZhdGU8YW55PiB7XHJcblxyXG5cdHByaXZhdGUgbWF0Y2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IGxhc3RQYXRoID0gcm91dGUudXJsLmxlbmd0aCA/IHJvdXRlLnVybFtyb3V0ZS51cmwubGVuZ3RoIC0gMV0ucGF0aCA6ICcnO1xyXG5cdFx0Y29uc3QgcGF0dGVybiA9IC9cXC4oWzAtOWEtel0rKSg/OltcXD8jXXwkKS9pO1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSAobGFzdFBhdGgpLm1hdGNoKHBhdHRlcm4pO1xyXG5cdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2FuQWN0aXZhdGUoXHJcblx0XHRyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuXHRcdHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XHJcblx0KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLm1hdGNoKHJvdXRlKTtcclxuXHR9XHJcblxyXG5cdGNhbkRlYWN0aXZhdGUoXHJcblx0XHRjb21wb25lbnQ6IGFueSxcclxuXHRcdGN1cnJlbnRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuXHRcdGN1cnJlbnRTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCxcclxuXHRcdG5leHRTdGF0ZT86IFJvdXRlclN0YXRlU25hcHNob3RcclxuXHQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMubWF0Y2goY3VycmVudFJvdXRlKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==