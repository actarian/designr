import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class DisposableComponent {
    constructor() {
        this.unsubscribe = new Subject();
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        // console.log('DisposableComponent.ngOnDestroy', this);
    }
}
DisposableComponent.ɵfac = function DisposableComponent_Factory(t) { return new (t || DisposableComponent)(); };
DisposableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DisposableComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function DisposableComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DisposableComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcG9zYWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUsvQixNQUFNLE9BQU8sbUJBQW1CO0lBSGhDO1FBS1csZ0JBQVcsR0FBUSxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBUTNDO0lBTkEsV0FBVztRQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1Qix3REFBd0Q7SUFDekQsQ0FBQzs7c0ZBUlcsbUJBQW1CO3dEQUFuQixtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUgvQixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLEVBQUU7YUFDWiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcm90ZWN0ZWQgdW5zdWJzY3JpYmU6IGFueSA9IG5ldyBTdWJqZWN0KCk7XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdEaXNwb3NhYmxlQ29tcG9uZW50Lm5nT25EZXN0cm95JywgdGhpcyk7XG5cdH1cblxufVxuIl19