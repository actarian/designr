/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9zdGF0aWMuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsTUFBTSxPQUFPLFdBQVc7Ozs7OztJQUVmLEtBQUssQ0FBQyxLQUE2Qjs7Y0FDcEMsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSTs7O2NBRS9DLE9BQU8sR0FBRywyQkFBMkI7O2NBQ3JDLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDdkMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ1o7YUFBTTtZQUNOLE9BQU8sS0FBSyxDQUFDO1NBQ2I7SUFDRixDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQ1YsS0FBNkIsRUFDN0IsS0FBMEI7UUFFMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7Ozs7O0lBRUQsYUFBYSxDQUNaLFNBQWMsRUFDZCxZQUFvQyxFQUNwQyxZQUFpQyxFQUNqQyxTQUErQjtRQUUvQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBN0JELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgQ2FuRGVhY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0aWNHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5EZWFjdGl2YXRlPGFueT4ge1xuXG5cdHByaXZhdGUgbWF0Y2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcblx0XHRjb25zdCBsYXN0UGF0aCA9IHJvdXRlLnVybFtyb3V0ZS51cmwubGVuZ3RoIC0gMV0ucGF0aDtcblx0XHQvLyBjb25zb2xlLmxvZygnU3RhdGljR3VhcmQuQ2FuQWN0aXZhdGUnLCBlLCBsYXN0UGF0aCk7XG5cdFx0Y29uc3QgcGF0dGVybiA9IC9cXC4oWzAtOWEtel0rKSg/OltcXD8jXXwkKS9pO1xuXHRcdGNvbnN0IG1hdGNoID0gKGxhc3RQYXRoKS5tYXRjaChwYXR0ZXJuKTtcblx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Y2FuQWN0aXZhdGUoXG5cdFx0cm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG5cdFx0c3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3Rcblx0KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5tYXRjaChyb3V0ZSk7XG5cdH1cblxuXHRjYW5EZWFjdGl2YXRlKFxuXHRcdGNvbXBvbmVudDogYW55LFxuXHRcdGN1cnJlbnRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcblx0XHRjdXJyZW50U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsXG5cdFx0bmV4dFN0YXRlPzogUm91dGVyU3RhdGVTbmFwc2hvdFxuXHQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1hdGNoKGN1cnJlbnRSb3V0ZSk7XG5cdH1cblxufVxuIl19