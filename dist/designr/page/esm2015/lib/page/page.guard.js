import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PageGuard {
    match(route) {
        const lastPath = route.url.length ? route.url[route.url.length - 1].path : '';
        const pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
        const match = (lastPath).match(pattern);
        if (match !== null) {
            return false;
        }
        else {
            return true;
        }
    }
    canActivate(route, state) {
        return this.match(route);
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        return this.match(currentRoute);
    }
}
PageGuard.ɵfac = function PageGuard_Factory(t) { return new (t || PageGuard)(); };
PageGuard.ɵprov = i0.ɵɵdefineInjectable({ token: PageGuard, factory: PageGuard.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageGuard, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxTQUFTO0lBRWIsS0FBSyxDQUFDLEtBQTZCO1FBQzFDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzlFLE1BQU0sT0FBTyxHQUFHLDJCQUEyQixDQUFDO1FBQzVDLE1BQU0sS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNiO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQztJQUVELFdBQVcsQ0FDVixLQUE2QixFQUM3QixLQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGFBQWEsQ0FDWixTQUFjLEVBQ2QsWUFBb0MsRUFDcEMsWUFBaUMsRUFDakMsU0FBK0I7UUFFL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2tFQTNCVyxTQUFTO2lEQUFULFNBQVMsV0FBVCxTQUFTO2tEQUFULFNBQVM7Y0FEckIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBDYW5EZWFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2VHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5EZWFjdGl2YXRlPGFueT4ge1xuXG5cdHByaXZhdGUgbWF0Y2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcblx0XHRjb25zdCBsYXN0UGF0aCA9IHJvdXRlLnVybC5sZW5ndGggPyByb3V0ZS51cmxbcm91dGUudXJsLmxlbmd0aCAtIDFdLnBhdGggOiAnJztcblx0XHRjb25zdCBwYXR0ZXJuID0gL1xcLihbMC05YS16XSspKD86W1xcPyNdfCQpL2k7XG5cdFx0Y29uc3QgbWF0Y2ggPSAobGFzdFBhdGgpLm1hdGNoKHBhdHRlcm4pO1xuXHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRjYW5BY3RpdmF0ZShcblx0XHRyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcblx0XHRzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuXHQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1hdGNoKHJvdXRlKTtcblx0fVxuXG5cdGNhbkRlYWN0aXZhdGUoXG5cdFx0Y29tcG9uZW50OiBhbnksXG5cdFx0Y3VycmVudFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuXHRcdGN1cnJlbnRTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCxcblx0XHRuZXh0U3RhdGU/OiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG5cdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubWF0Y2goY3VycmVudFJvdXRlKTtcblx0fVxuXG59XG4iXX0=