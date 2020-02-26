import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var StaticGuard = /** @class */ (function () {
    function StaticGuard() {
    }
    StaticGuard.prototype.match = function (route) {
        var lastPath = route.url[route.url.length - 1].path;
        // console.log('StaticGuard.CanActivate', e, lastPath);
        var pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        var match = (lastPath).match(pattern);
        if (match !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    StaticGuard.prototype.canActivate = function (route, state) {
        return this.match(route);
    };
    StaticGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        return this.match(currentRoute);
    };
    StaticGuard.ɵfac = function StaticGuard_Factory(t) { return new (t || StaticGuard)(); };
    StaticGuard.ɵprov = i0.ɵɵdefineInjectable({ token: StaticGuard, factory: StaticGuard.ɵfac });
    return StaticGuard;
}());
export { StaticGuard };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StaticGuard, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3N0YXRpYy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUkzQztJQUFBO0tBK0JDO0lBNUJRLDJCQUFLLEdBQWIsVUFBYyxLQUE2QjtRQUMxQyxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN0RCx1REFBdUQ7UUFDdkQsSUFBTSxPQUFPLEdBQUcsMkJBQTJCLENBQUM7UUFDNUMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ1o7YUFBTTtZQUNOLE9BQU8sS0FBSyxDQUFDO1NBQ2I7SUFDRixDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUNDLEtBQTZCLEVBQzdCLEtBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUNDLFNBQWMsRUFDZCxZQUFvQyxFQUNwQyxZQUFpQyxFQUNqQyxTQUErQjtRQUUvQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQzswRUE1QlcsV0FBVzt1REFBWCxXQUFXLFdBQVgsV0FBVztzQkFMeEI7Q0FtQ0MsQUEvQkQsSUErQkM7U0E5QlksV0FBVztrREFBWCxXQUFXO2NBRHZCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgQ2FuRGVhY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0aWNHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5EZWFjdGl2YXRlPGFueT4ge1xuXG5cdHByaXZhdGUgbWF0Y2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcblx0XHRjb25zdCBsYXN0UGF0aCA9IHJvdXRlLnVybFtyb3V0ZS51cmwubGVuZ3RoIC0gMV0ucGF0aDtcblx0XHQvLyBjb25zb2xlLmxvZygnU3RhdGljR3VhcmQuQ2FuQWN0aXZhdGUnLCBlLCBsYXN0UGF0aCk7XG5cdFx0Y29uc3QgcGF0dGVybiA9IC9cXC4oWzAtOWEtel0rKSg/OltcXD8jXXwkKS9pO1xuXHRcdGNvbnN0IG1hdGNoID0gKGxhc3RQYXRoKS5tYXRjaChwYXR0ZXJuKTtcblx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Y2FuQWN0aXZhdGUoXG5cdFx0cm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG5cdFx0c3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3Rcblx0KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5tYXRjaChyb3V0ZSk7XG5cdH1cblxuXHRjYW5EZWFjdGl2YXRlKFxuXHRcdGNvbXBvbmVudDogYW55LFxuXHRcdGN1cnJlbnRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcblx0XHRjdXJyZW50U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsXG5cdFx0bmV4dFN0YXRlPzogUm91dGVyU3RhdGVTbmFwc2hvdFxuXHQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1hdGNoKGN1cnJlbnRSb3V0ZSk7XG5cdH1cblxufVxuIl19