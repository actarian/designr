import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '../disposable/disposable.component';
import { Outlet } from './outlet';
import { OutletResolverService } from './outlet-resolver.service';
import * as i0 from "@angular/core";
import * as i1 from "./outlet-resolver.service";
const _c0 = ["outlet"];
export class OutletComponent extends DisposableComponent {
    constructor(componentFactoryResolver, outletResolverService) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.outletResolverService = outletResolverService;
    }
    ngOnInit() {
        const component = this.outletResolverService.resolve(this.outlet);
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        const componentRef = this.viewContainerRef.createComponent(factory);
        const instance = componentRef.instance;
        instance.outlet = this.outlet;
        if (typeof instance['OutletInit'] === 'function') {
            instance['OutletInit']();
        }
        this.componentRef = componentRef;
    }
    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
OutletComponent.ɵfac = function OutletComponent_Factory(t) { return new (t || OutletComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i1.OutletResolverService)); };
OutletComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OutletComponent, selectors: [["outlet-component"]], viewQuery: function OutletComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
    } }, inputs: { outlet: "outlet" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function OutletComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OutletComponent, [{
        type: Component,
        args: [{
                selector: 'outlet-component',
                template: '',
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i1.OutletResolverService }]; }, { outlet: [{
            type: Input
        }], viewContainerRef: [{
            type: ViewChild,
            args: ['outlet', { read: ViewContainerRef, static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvb3V0bGV0L291dGxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0Isd0JBQXdCLEVBQWdCLEtBQUssRUFBMkIsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pLLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFNbEUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsbUJBQW1CO0lBT3ZELFlBQ1Msd0JBQWtELEVBQ2xELHFCQUE0QztRQUVwRCxLQUFLLEVBQUUsQ0FBQztRQUhBLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUdyRCxDQUFDO0lBRUQsUUFBUTtRQUNQLE1BQU0sU0FBUyxHQUFpQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRyxNQUFNLE9BQU8sR0FBNkMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDdkMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksT0FBTyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssVUFBVSxFQUFFO1lBQ2pELFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7OzhFQTdCVyxlQUFlO29EQUFmLGVBQWU7a0NBSUUsZ0JBQWdCOzs7OztrREFKakMsZUFBZTtjQUozQixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLEVBQUU7YUFDWjs7a0JBR0MsS0FBSzs7a0JBRUwsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVHlwZSwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICcuL291dGxldCc7XG5pbXBvcnQgeyBPdXRsZXREZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9vdXRsZXQtZGVmYXVsdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3V0bGV0UmVzb2x2ZXJTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQtcmVzb2x2ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ291dGxldC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KCkgb3V0bGV0OiBPdXRsZXQ7XG5cblx0QFZpZXdDaGlsZCgnb3V0bGV0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IGZhbHNlIH0pIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cdHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8RGlzcG9zYWJsZUNvbXBvbmVudD47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRwcml2YXRlIG91dGxldFJlc29sdmVyU2VydmljZTogT3V0bGV0UmVzb2x2ZXJTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3QgY29tcG9uZW50OiBUeXBlPE91dGxldERlZmF1bHRDb21wb25lbnQ+ID0gdGhpcy5vdXRsZXRSZXNvbHZlclNlcnZpY2UucmVzb2x2ZSh0aGlzLm91dGxldCk7XG5cdFx0Y29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxPdXRsZXREZWZhdWx0Q29tcG9uZW50PiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblx0XHRjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcblx0XHRpbnN0YW5jZS5vdXRsZXQgPSB0aGlzLm91dGxldDtcblx0XHRpZiAodHlwZW9mIGluc3RhbmNlWydPdXRsZXRJbml0J10gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGluc3RhbmNlWydPdXRsZXRJbml0J10oKTtcblx0XHR9XG5cdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG5cdH1cblxufVxuIl19