/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class PageGuard {
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    match(route) {
        /** @type {?} */
        const lastPath = route.url.length ? route.url[route.url.length - 1].path : '';
        /** @type {?} */
        const pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        /** @type {?} */
        const match = (lastPath).match(pattern);
        if (match !== null) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        return this.match(route);
    }
    /**
     * @param {?} component
     * @param {?} currentRoute
     * @param {?} currentState
     * @param {?=} nextState
     * @return {?}
     */
    canDeactivate(component, currentRoute, currentState, nextState) {
        return this.match(currentRoute);
    }
}
PageGuard.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE1BQU0sT0FBTyxTQUFTOzs7Ozs7SUFFYixLQUFLLENBQUMsS0FBNkI7O2NBQ3BDLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7O2NBQ3ZFLE9BQU8sR0FBRywyQkFBMkI7O2NBQ3JDLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDdkMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2I7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQ1YsS0FBNkIsRUFDN0IsS0FBMEI7UUFFMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7Ozs7O0lBRUQsYUFBYSxDQUNaLFNBQWMsRUFDZCxZQUFvQyxFQUNwQyxZQUFpQyxFQUNqQyxTQUErQjtRQUUvQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBNUJELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBDYW5EZWFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGFnZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkRlYWN0aXZhdGU8YW55PiB7XHJcblxyXG5cdHByaXZhdGUgbWF0Y2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IGxhc3RQYXRoID0gcm91dGUudXJsLmxlbmd0aCA/IHJvdXRlLnVybFtyb3V0ZS51cmwubGVuZ3RoIC0gMV0ucGF0aCA6ICcnO1xyXG5cdFx0Y29uc3QgcGF0dGVybiA9IC9cXC4oWzAtOWEtel0rKSg/OltcXD8jXXwkKS9pO1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSAobGFzdFBhdGgpLm1hdGNoKHBhdHRlcm4pO1xyXG5cdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2FuQWN0aXZhdGUoXHJcblx0XHRyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuXHRcdHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XHJcblx0KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLm1hdGNoKHJvdXRlKTtcclxuXHR9XHJcblxyXG5cdGNhbkRlYWN0aXZhdGUoXHJcblx0XHRjb21wb25lbnQ6IGFueSxcclxuXHRcdGN1cnJlbnRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuXHRcdGN1cnJlbnRTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCxcclxuXHRcdG5leHRTdGF0ZT86IFJvdXRlclN0YXRlU25hcHNob3RcclxuXHQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMubWF0Y2goY3VycmVudFJvdXRlKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==