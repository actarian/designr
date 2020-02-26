import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var PageGuard = /** @class */ (function () {
    function PageGuard() {
    }
    PageGuard.prototype.match = function (route) {
        var lastPath = route.url.length ? route.url[route.url.length - 1].path : '';
        var pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        var match = (lastPath).match(pattern);
        if (match !== null) {
            return false;
        }
        else {
            return true;
        }
    };
    PageGuard.prototype.canActivate = function (route, state) {
        return this.match(route);
    };
    PageGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        return this.match(currentRoute);
    };
    PageGuard.ɵfac = function PageGuard_Factory(t) { return new (t || PageGuard)(); };
    PageGuard.ɵprov = i0.ɵɵdefineInjectable({ token: PageGuard, factory: PageGuard.ɵfac });
    return PageGuard;
}());
export { PageGuard };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageGuard, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDO0lBQUE7S0E4QkM7SUEzQlEseUJBQUssR0FBYixVQUFjLEtBQTZCO1FBQzFDLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzlFLElBQU0sT0FBTyxHQUFHLDJCQUEyQixDQUFDO1FBQzVDLElBQU0sS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNiO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQztJQUVELCtCQUFXLEdBQVgsVUFDQyxLQUE2QixFQUM3QixLQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGlDQUFhLEdBQWIsVUFDQyxTQUFjLEVBQ2QsWUFBb0MsRUFDcEMsWUFBaUMsRUFDakMsU0FBK0I7UUFFL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7c0VBM0JXLFNBQVM7cURBQVQsU0FBUyxXQUFULFNBQVM7b0JBTHRCO0NBa0NDLEFBOUJELElBOEJDO1NBN0JZLFNBQVM7a0RBQVQsU0FBUztjQURyQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIENhbkRlYWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkRlYWN0aXZhdGU8YW55PiB7XG5cblx0cHJpdmF0ZSBtYXRjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGxhc3RQYXRoID0gcm91dGUudXJsLmxlbmd0aCA/IHJvdXRlLnVybFtyb3V0ZS51cmwubGVuZ3RoIC0gMV0ucGF0aCA6ICcnO1xuXHRcdGNvbnN0IHBhdHRlcm4gPSAvXFwuKFswLTlhLXpdKykoPzpbXFw/I118JCkvaTtcblx0XHRjb25zdCBtYXRjaCA9IChsYXN0UGF0aCkubWF0Y2gocGF0dGVybik7XG5cdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGNhbkFjdGl2YXRlKFxuXHRcdHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuXHRcdHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG5cdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubWF0Y2gocm91dGUpO1xuXHR9XG5cblx0Y2FuRGVhY3RpdmF0ZShcblx0XHRjb21wb25lbnQ6IGFueSxcblx0XHRjdXJyZW50Um91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG5cdFx0Y3VycmVudFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuXHRcdG5leHRTdGF0ZT86IFJvdXRlclN0YXRlU25hcHNob3Rcblx0KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5tYXRjaChjdXJyZW50Um91dGUpO1xuXHR9XG5cbn1cbiJdfQ==