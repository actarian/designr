import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { PageComponent } from './page.component';
import * as i0 from "@angular/core";
export class PageNotFoundComponent extends PageComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.url = this.router.url;
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
PageNotFoundComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageNotFoundComponent, selectors: [["page-not-found-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 1, consts: [[1, "page"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1, "Page ");
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(4, " not found");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.url);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageNotFoundComponent, [{
        type: Component,
        args: [{
                selector: 'page-not-found-component',
                template: `<div class="page">Page <span>{{url}}</span> not found</div>`,
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBUWpELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxhQUFhO0lBSXZELFlBQ1csUUFBa0I7UUFFNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRk4sYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUc1QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7OzBGQVRXLHFCQUFxQjswREFBckIscUJBQXFCO1FBSnRCLDhCQUFrQjtRQUFBLHFCQUFLO1FBQUEsNEJBQU07UUFBQSxZQUFPO1FBQUEsaUJBQU87UUFBQywwQkFBUztRQUFBLGlCQUFNOztRQUE5QixlQUFPO1FBQVAsNkJBQU87O2tEQUluQyxxQkFBcUI7Y0FOakMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRSw2REFBNkQ7Z0JBQ3ZFLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFRO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncGFnZS1ub3QtZm91bmQtY29tcG9uZW50Jyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicGFnZVwiPlBhZ2UgPHNwYW4+e3t1cmx9fTwvc3Bhbj4gbm90IGZvdW5kPC9kaXY+YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnZU5vdEZvdW5kQ29tcG9uZW50IGV4dGVuZHMgUGFnZUNvbXBvbmVudCB7XG5cblx0cHVibGljIHVybDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3Jcblx0KSB7XG5cdFx0c3VwZXIoaW5qZWN0b3IpO1xuXHRcdHRoaXMudXJsID0gdGhpcy5yb3V0ZXIudXJsO1xuXHR9XG5cbn1cbiJdfQ==