/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class StaticGuard {
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    match(route) {
        /** @type {?} */
        const lastPath = route.url[route.url.length - 1].path;
        // console.log('StaticGuard.CanActivate', e, lastPath);
        /** @type {?} */
        const pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        /** @type {?} */
        const match = (lastPath).match(pattern);
        if (match !== null) {
            return true;
        }
        else {
            return false;
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
StaticGuard.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3N0YXRpYy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBRWYsS0FBSyxDQUFDLEtBQTZCOztjQUNwQyxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJOzs7Y0FFL0MsT0FBTyxHQUFHLDJCQUEyQjs7Y0FDckMsS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN2QyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUM7U0FDWjthQUFNO1lBQ04sT0FBTyxLQUFLLENBQUM7U0FDYjtJQUNGLENBQUM7Ozs7OztJQUVELFdBQVcsQ0FDVixLQUE2QixFQUM3QixLQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7Ozs7SUFFRCxhQUFhLENBQ1osU0FBYyxFQUNkLFlBQW9DLEVBQ3BDLFlBQWlDLEVBQ2pDLFNBQStCO1FBRS9CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUE3QkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIENhbkRlYWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGF0aWNHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5EZWFjdGl2YXRlPGFueT4ge1xyXG5cclxuXHRwcml2YXRlIG1hdGNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBsYXN0UGF0aCA9IHJvdXRlLnVybFtyb3V0ZS51cmwubGVuZ3RoIC0gMV0ucGF0aDtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdTdGF0aWNHdWFyZC5DYW5BY3RpdmF0ZScsIGUsIGxhc3RQYXRoKTtcclxuXHRcdGNvbnN0IHBhdHRlcm4gPSAvXFwuKFswLTlhLXpdKykoPzpbXFw/I118JCkvaTtcclxuXHRcdGNvbnN0IG1hdGNoID0gKGxhc3RQYXRoKS5tYXRjaChwYXR0ZXJuKTtcclxuXHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNhbkFjdGl2YXRlKFxyXG5cdFx0cm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcblx0XHRzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxyXG5cdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5tYXRjaChyb3V0ZSk7XHJcblx0fVxyXG5cclxuXHRjYW5EZWFjdGl2YXRlKFxyXG5cdFx0Y29tcG9uZW50OiBhbnksXHJcblx0XHRjdXJyZW50Um91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcblx0XHRjdXJyZW50U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsXHJcblx0XHRuZXh0U3RhdGU/OiBSb3V0ZXJTdGF0ZVNuYXBzaG90XHJcblx0KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLm1hdGNoKGN1cnJlbnRSb3V0ZSk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=