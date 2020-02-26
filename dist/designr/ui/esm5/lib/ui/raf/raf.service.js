import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { of, range } from 'rxjs';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
var RafService = /** @class */ (function () {
    function RafService(platformId, zone) {
        this.platformId = platformId;
        this.zone = zone;
    }
    RafService.prototype.raf$ = function () {
        var _this = this;
        return this.zone.runOutsideAngular(function () {
            if (isPlatformBrowser(_this.platformId)) {
                return range(0, Number.POSITIVE_INFINITY, animationFrame).pipe(shareReplay());
            }
            else {
                return of(null);
            }
        });
    };
    RafService.ɵfac = function RafService_Factory(t) { return new (t || RafService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i0.NgZone)); };
    RafService.ɵprov = i0.ɵɵdefineInjectable({ token: RafService, factory: RafService.ɵfac, providedIn: 'root' });
    return RafService;
}());
export { RafService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RafService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.NgZone }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFmLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9yYWYvcmFmLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUU3QztJQUtDLG9CQUM4QixVQUFrQixFQUN2QyxJQUFZO1FBRFMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQ2pCLENBQUM7SUFFTCx5QkFBSSxHQUFKO1FBQUEsaUJBVUM7UUFUQSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbEMsSUFBSSxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3ZDLE9BQU8sS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUM3RCxXQUFXLEVBQUUsQ0FDYixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEI7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7d0VBakJXLFVBQVUsY0FHYixXQUFXO3NEQUhSLFVBQVUsV0FBVixVQUFVLG1CQUZWLE1BQU07cUJBUG5CO0NBNEJDLEFBdEJELElBc0JDO1NBbkJZLFVBQVU7a0RBQVYsVUFBVTtjQUh0QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O3NCQUlFLE1BQU07dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHJhbmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhbmltYXRpb25GcmFtZSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvc2NoZWR1bGVyL2FuaW1hdGlvbkZyYW1lJztcbmltcG9ydCB7IHNoYXJlUmVwbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSYWZTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcblx0KSB7IH1cblxuXHRyYWYkKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0XHRyZXR1cm4gcmFuZ2UoMCwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCBhbmltYXRpb25GcmFtZSkucGlwZShcblx0XHRcdFx0XHRzaGFyZVJlcGxheSgpLFxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==