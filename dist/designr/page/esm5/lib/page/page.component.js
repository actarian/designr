import { __extends } from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, Injector, Input, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DisposableComponent, RouteService } from '@designr/core';
import { Observable } from 'rxjs';
import { Page } from './page';
import * as i0 from "@angular/core";
var PageComponent = /** @class */ (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.scrollToTop();
        return _this;
    }
    Object.defineProperty(PageComponent.prototype, "platformId", {
        get: function () {
            return this.injector.get(PLATFORM_ID);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "routeService", {
        get: function () {
            return this.injector.get(RouteService);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "router", {
        get: function () {
            return this.injector.get(Router);
        },
        enumerable: true,
        configurable: true
    });
    // !!! Scroll to top on page change
    PageComponent.prototype.scrollToTop = function () {
        // !!! PLATFORM_ID dependancy manually activated
        // const platformId: string = RouteService.injector.get(PLATFORM_ID) as string;
        if (isPlatformBrowser(this.platformId)) {
            // !!! Router dependancy manually activated
            // const router = RouteService.injector.get(Router);
            this.router.events.subscribe(function (e) {
                if (!(e instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
        }
    };
    PageComponent.prototype.getId = function () {
        return this.routeService.getId() || (this.page ? this.page.id : 0);
    };
    PageComponent.prototype.getSlug = function () {
        return this.routeService.getSlug() || (this.page ? this.page.slug : '');
    };
    PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
    PageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageComponent, selectors: [["core-page"]], inputs: { page: "page", params: "params", queryParams: "queryParams" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [[1, "page"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtext(1, "Page not found!");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
    return PageComponent;
}(DisposableComponent));
export { PageComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageComponent, [{
        type: Component,
        args: [{
                selector: 'core-page',
                template: "<div class=\"page\">Page not found!</div>",
            }]
    }], function () { return [{ type: i0.Injector }]; }, { page: [{
            type: Input
        }], params: [{
            type: Input
        }], queryParams: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL3BhZ2UvcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBVSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQzs7QUFNOUI7SUFJbUMsaUNBQW1CO0lBa0JyRCx1QkFDVyxRQUFrQjtRQUQ3QixZQUdDLGlCQUFPLFNBRVA7UUFKVSxjQUFRLEdBQVIsUUFBUSxDQUFVO1FBRzVCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7SUFDcEIsQ0FBQztJQWpCRCxzQkFBSSxxQ0FBVTthQUFkO1lBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQVcsQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFZO2FBQWhCO1lBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFNO2FBQVY7WUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBU0QsbUNBQW1DO0lBQzNCLG1DQUFXLEdBQW5CO1FBQ0MsZ0RBQWdEO1FBQ2hELCtFQUErRTtRQUMvRSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QywyQ0FBMkM7WUFDM0Msb0RBQW9EO1lBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxhQUFhLENBQUMsRUFBRTtvQkFDbEMsT0FBTztpQkFDUDtnQkFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs4RUEvQ1csYUFBYTtzREFBYixhQUFhO1lBRmQsOEJBQWtCO1lBQUEsK0JBQWU7WUFBQSxpQkFBTTs7d0JBZG5EO0NBaUVDLEFBckRELENBSW1DLG1CQUFtQixHQWlEckQ7U0FqRFksYUFBYTtrREFBYixhQUFhO2NBSnpCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLDJDQUF5QzthQUNuRDs7a0JBR0MsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5wdXQsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50LCBSb3V0ZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VJbml0IHtcblx0UGFnZUluaXQoKTogdm9pZDtcbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29yZS1wYWdlJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicGFnZVwiPlBhZ2Ugbm90IGZvdW5kITwvZGl2PmAsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBwYWdlOiBQYWdlO1xuXHRASW5wdXQoKSBwYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPjtcblx0QElucHV0KCkgcXVlcnlQYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPjtcblxuXHRnZXQgcGxhdGZvcm1JZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmluamVjdG9yLmdldChQTEFURk9STV9JRCkgYXMgc3RyaW5nO1xuXHR9XG5cblx0Z2V0IHJvdXRlU2VydmljZSgpOiBSb3V0ZVNlcnZpY2Uge1xuXHRcdHJldHVybiB0aGlzLmluamVjdG9yLmdldChSb3V0ZVNlcnZpY2UpO1xuXHR9XG5cblx0Z2V0IHJvdXRlcigpOiBSb3V0ZXIge1xuXHRcdHJldHVybiB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcixcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnNjcm9sbFRvVG9wKCk7XG5cdH1cblxuXHQvLyAhISEgU2Nyb2xsIHRvIHRvcCBvbiBwYWdlIGNoYW5nZVxuXHRwcml2YXRlIHNjcm9sbFRvVG9wKCk6IHZvaWQge1xuXHRcdC8vICEhISBQTEFURk9STV9JRCBkZXBlbmRhbmN5IG1hbnVhbGx5IGFjdGl2YXRlZFxuXHRcdC8vIGNvbnN0IHBsYXRmb3JtSWQ6IHN0cmluZyA9IFJvdXRlU2VydmljZS5pbmplY3Rvci5nZXQoUExBVEZPUk1fSUQpIGFzIHN0cmluZztcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0Ly8gISEhIFJvdXRlciBkZXBlbmRhbmN5IG1hbnVhbGx5IGFjdGl2YXRlZFxuXHRcdFx0Ly8gY29uc3Qgcm91dGVyID0gUm91dGVTZXJ2aWNlLmluamVjdG9yLmdldChSb3V0ZXIpO1xuXHRcdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZSkgPT4ge1xuXHRcdFx0XHRpZiAoIShlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0SWQoKTogbnVtYmVyIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZVNlcnZpY2UuZ2V0SWQoKSB8fCAodGhpcy5wYWdlID8gdGhpcy5wYWdlLmlkIDogMCk7XG5cdH1cblxuXHRnZXRTbHVnKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucm91dGVTZXJ2aWNlLmdldFNsdWcoKSB8fCAodGhpcy5wYWdlID8gdGhpcy5wYWdlLnNsdWcgOiAnJyk7XG5cdH1cblxufVxuIl19