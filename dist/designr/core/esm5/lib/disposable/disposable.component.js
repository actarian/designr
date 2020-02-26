import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var DisposableComponent = /** @class */ (function () {
    function DisposableComponent() {
        this.unsubscribe = new Subject();
    }
    DisposableComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        // console.log('DisposableComponent.ngOnDestroy', this);
    };
    DisposableComponent.ɵfac = function DisposableComponent_Factory(t) { return new (t || DisposableComponent)(); };
    DisposableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DisposableComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function DisposableComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DisposableComponent;
}());
export { DisposableComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DisposableComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcG9zYWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUUvQjtJQUFBO1FBS1csZ0JBQVcsR0FBUSxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBUTNDO0lBTkEseUNBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1Qix3REFBd0Q7SUFDekQsQ0FBQzswRkFSVyxtQkFBbUI7NERBQW5CLG1CQUFtQjs4QkFQaEM7Q0FpQkMsQUFiRCxJQWFDO1NBVlksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FIL0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxFQUFFO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJvdGVjdGVkIHVuc3Vic2NyaWJlOiBhbnkgPSBuZXcgU3ViamVjdCgpO1xuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcblx0XHQvLyBjb25zb2xlLmxvZygnRGlzcG9zYWJsZUNvbXBvbmVudC5uZ09uRGVzdHJveScsIHRoaXMpO1xuXHR9XG5cbn1cbiJdfQ==