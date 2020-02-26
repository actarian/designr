import { __extends } from "tslib";
import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '../disposable/disposable.component';
import { Outlet } from './outlet';
import { OutletResolverService } from './outlet-resolver.service';
import * as i0 from "@angular/core";
import * as i1 from "./outlet-resolver.service";
var _c0 = ["outlet"];
var OutletComponent = /** @class */ (function (_super) {
    __extends(OutletComponent, _super);
    function OutletComponent(componentFactoryResolver, outletResolverService) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.outletResolverService = outletResolverService;
        return _this;
    }
    OutletComponent.prototype.ngOnInit = function () {
        var component = this.outletResolverService.resolve(this.outlet);
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        var componentRef = this.viewContainerRef.createComponent(factory);
        var instance = componentRef.instance;
        instance.outlet = this.outlet;
        if (typeof instance['OutletInit'] === 'function') {
            instance['OutletInit']();
        }
        this.componentRef = componentRef;
    };
    OutletComponent.prototype.ngOnDestroy = function () {
        this.componentRef.destroy();
    };
    OutletComponent.ɵfac = function OutletComponent_Factory(t) { return new (t || OutletComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i1.OutletResolverService)); };
    OutletComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OutletComponent, selectors: [["outlet-component"]], viewQuery: function OutletComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
        } }, inputs: { outlet: "outlet" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function OutletComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return OutletComponent;
}(DisposableComponent));
export { OutletComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvb3V0bGV0L291dGxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLHdCQUF3QixFQUFnQixLQUFLLEVBQTJCLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBRWxFO0lBSXFDLG1DQUFtQjtJQU92RCx5QkFDUyx3QkFBa0QsRUFDbEQscUJBQTRDO1FBRnJELFlBSUMsaUJBQU8sU0FDUDtRQUpRLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUF1Qjs7SUFHckQsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDQyxJQUFNLFNBQVMsR0FBaUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEcsSUFBTSxPQUFPLEdBQTZDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRSxJQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUNqRCxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO2tGQTdCVyxlQUFlO3dEQUFmLGVBQWU7c0NBSUUsZ0JBQWdCOzs7OzswQkFkOUM7Q0F5Q0MsQUFuQ0QsQ0FJcUMsbUJBQW1CLEdBK0J2RDtTQS9CWSxlQUFlO2tEQUFmLGVBQWU7Y0FKM0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxFQUFFO2FBQ1o7O2tCQUdDLEtBQUs7O2tCQUVMLFNBQVM7bUJBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFR5cGUsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAnLi9vdXRsZXQnO1xuaW1wb3J0IHsgT3V0bGV0RGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vb3V0bGV0LWRlZmF1bHQuY29tcG9uZW50JztcbmltcG9ydCB7IE91dGxldFJlc29sdmVyU2VydmljZSB9IGZyb20gJy4vb3V0bGV0LXJlc29sdmVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdvdXRsZXQtY29tcG9uZW50Jyxcblx0dGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXRDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpIG91dGxldDogT3V0bGV0O1xuXG5cdEBWaWV3Q2hpbGQoJ291dGxldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiBmYWxzZSB9KSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXHRwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPERpc3Bvc2FibGVDb21wb25lbnQ+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0cHJpdmF0ZSBvdXRsZXRSZXNvbHZlclNlcnZpY2U6IE91dGxldFJlc29sdmVyU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnN0IGNvbXBvbmVudDogVHlwZTxPdXRsZXREZWZhdWx0Q29tcG9uZW50PiA9IHRoaXMub3V0bGV0UmVzb2x2ZXJTZXJ2aWNlLnJlc29sdmUodGhpcy5vdXRsZXQpO1xuXHRcdGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8T3V0bGV0RGVmYXVsdENvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG5cdFx0Y29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cdFx0aW5zdGFuY2Uub3V0bGV0ID0gdGhpcy5vdXRsZXQ7XG5cdFx0aWYgKHR5cGVvZiBpbnN0YW5jZVsnT3V0bGV0SW5pdCddID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpbnN0YW5jZVsnT3V0bGV0SW5pdCddKCk7XG5cdFx0fVxuXHRcdHRoaXMuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuXHR9XG5cbn1cbiJdfQ==