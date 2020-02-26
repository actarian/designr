import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class StaticGuard {
    match(route) {
        const lastPath = route.url[route.url.length - 1].path;
        // console.log('StaticGuard.CanActivate', e, lastPath);
        const pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        const match = (lastPath).match(pattern);
        if (match !== null) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivate(route, state) {
        return this.match(route);
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        return this.match(currentRoute);
    }
}
StaticGuard.ɵfac = function StaticGuard_Factory(t) { return new (t || StaticGuard)(); };
StaticGuard.ɵprov = i0.ɵɵdefineInjectable({ token: StaticGuard, factory: StaticGuard.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StaticGuard, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3N0YXRpYy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sV0FBVztJQUVmLEtBQUssQ0FBQyxLQUE2QjtRQUMxQyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN0RCx1REFBdUQ7UUFDdkQsTUFBTSxPQUFPLEdBQUcsMkJBQTJCLENBQUM7UUFDNUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ1o7YUFBTTtZQUNOLE9BQU8sS0FBSyxDQUFDO1NBQ2I7SUFDRixDQUFDO0lBRUQsV0FBVyxDQUNWLEtBQTZCLEVBQzdCLEtBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsYUFBYSxDQUNaLFNBQWMsRUFDZCxZQUFvQyxFQUNwQyxZQUFpQyxFQUNqQyxTQUErQjtRQUUvQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7c0VBNUJXLFdBQVc7bURBQVgsV0FBVyxXQUFYLFdBQVc7a0RBQVgsV0FBVztjQUR2QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIENhbkRlYWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhdGljR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuRGVhY3RpdmF0ZTxhbnk+IHtcblxuXHRwcml2YXRlIG1hdGNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgbGFzdFBhdGggPSByb3V0ZS51cmxbcm91dGUudXJsLmxlbmd0aCAtIDFdLnBhdGg7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1N0YXRpY0d1YXJkLkNhbkFjdGl2YXRlJywgZSwgbGFzdFBhdGgpO1xuXHRcdGNvbnN0IHBhdHRlcm4gPSAvXFwuKFswLTlhLXpdKykoPzpbXFw/I118JCkvaTtcblx0XHRjb25zdCBtYXRjaCA9IChsYXN0UGF0aCkubWF0Y2gocGF0dGVybik7XG5cdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGNhbkFjdGl2YXRlKFxuXHRcdHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuXHRcdHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG5cdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubWF0Y2gocm91dGUpO1xuXHR9XG5cblx0Y2FuRGVhY3RpdmF0ZShcblx0XHRjb21wb25lbnQ6IGFueSxcblx0XHRjdXJyZW50Um91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG5cdFx0Y3VycmVudFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuXHRcdG5leHRTdGF0ZT86IFJvdXRlclN0YXRlU25hcHNob3Rcblx0KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5tYXRjaChjdXJyZW50Um91dGUpO1xuXHR9XG5cbn1cbiJdfQ==