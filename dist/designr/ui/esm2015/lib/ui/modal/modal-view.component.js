import { Component, ComponentFactoryResolver, Injector, Input, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Modal, ModalData } from './modal';
import * as i0 from "@angular/core";
const _c0 = ["modalContainer"];
export class ModalViewComponent extends DisposableComponent {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnInit() {
        this.setModal(this.modal);
    }
    ngOnDestroy() {
        if (this.component) {
            this.component.destroy();
            this.component = null;
        }
    }
    setModal(modal) {
        if (this.component) {
            this.component.destroy();
        }
        if (!modal) {
            this.component = null;
            return;
        }
        const providers = Object.keys(modal.providers).map(key => {
            return { provide: key, useValue: modal.providers[key] };
        });
        providers.push({ provide: ModalData, useValue: modal.data }, { provide: Modal, useValue: modal });
        const injector = Injector.create({ providers });
        // const resolvedInputs = ReflectiveInjector.resolve(providers);
        // const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.modalContainer.parentInjector);
        const factory = this.resolver.resolveComponentFactory(modal.component);
        const component = factory.create(injector);
        this.modalContainer.insert(component.hostView);
        this.component = component;
        // this.changeDetector.markForCheck();
    }
}
ModalViewComponent.ɵfac = function ModalViewComponent_Factory(t) { return new (t || ModalViewComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
ModalViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModalViewComponent, selectors: [["core-modal-view-component"]], viewQuery: function ModalViewComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContainer = _t.first);
    } }, inputs: { modal: "modal" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [["modalContainer", ""]], template: function ModalViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, null, 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModalViewComponent, [{
        type: Component,
        args: [{
                selector: 'core-modal-view-component',
                templateUrl: './modal-view.component.html',
                // styleUrls: ['./modal-view.component.scss'],
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, { modalContainer: [{
            type: ViewChild,
            args: ['modalContainer', { read: ViewContainerRef, static: true }]
        }], modal: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9tb2RhbC9tb2RhbC12aWV3LmNvbXBvbmVudC50cyIsImxpYi91aS9tb2RhbC9tb2RhbC12aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsd0JBQXdCLEVBQWdCLFFBQVEsRUFBRSxLQUFLLEVBQStCLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoTCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7OztBQVMzQyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsbUJBQW1CO0lBVzFELFlBQ1MsUUFBa0M7UUFHMUMsS0FBSyxFQUFFLENBQUM7UUFIQSxhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUkzQyxDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDRixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVk7UUFDcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsT0FBTztTQUNQO1FBQ0QsTUFBTSxTQUFTLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsSUFBSSxDQUNiLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxFQUM1QyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUNuQyxDQUFDO1FBQ0YsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDaEQsZ0VBQWdFO1FBQ2hFLGlIQUFpSDtRQUNqSCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RSxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixzQ0FBc0M7SUFDdkMsQ0FBQzs7b0ZBcERXLGtCQUFrQjt1REFBbEIsa0JBQWtCO3dDQUVPLGdCQUFnQjs7Ozs7UUNidEQsaUNBQTZDOztrRERXaEMsa0JBQWtCO2NBUDlCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyw4Q0FBOEM7Z0JBQzlDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFRO2FBRXpDOztrQkFHQyxTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQU1wRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5qZWN0b3IsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUHJvdmlkZXIsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IE1vZGFsLCBNb2RhbERhdGEgfSBmcm9tICcuL21vZGFsJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29yZS1tb2RhbC12aWV3LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9tb2RhbC12aWV3LmNvbXBvbmVudC5odG1sJyxcblx0Ly8gc3R5bGVVcmxzOiBbJy4vbW9kYWwtdmlldy5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcblx0Ly8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsVmlld0NvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnbW9kYWxDb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBtb2RhbENvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblx0Lypcblx0QElucHV0KCkgc2V0IG1vZGFsKG1vZGFsOiBNb2RhbCkge1xuXHRcdHRoaXMuc2V0TW9kYWwobW9kYWwpO1xuXHR9XG5cdCovXG5cdEBJbnB1dCgpIG1vZGFsOiBNb2RhbDtcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0Ly8gcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNldE1vZGFsKHRoaXMubW9kYWwpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50KSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmNvbXBvbmVudCA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0c2V0TW9kYWwobW9kYWw6IE1vZGFsKSB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50KSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5kZXN0cm95KCk7XG5cdFx0fVxuXHRcdGlmICghbW9kYWwpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50ID0gbnVsbDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcHJvdmlkZXJzOiBQcm92aWRlciA9IE9iamVjdC5rZXlzKG1vZGFsLnByb3ZpZGVycykubWFwKGtleSA9PiB7XG5cdFx0XHRyZXR1cm4geyBwcm92aWRlOiBrZXksIHVzZVZhbHVlOiBtb2RhbC5wcm92aWRlcnNba2V5XSB9O1xuXHRcdH0pO1xuXHRcdHByb3ZpZGVycy5wdXNoKFxuXHRcdFx0eyBwcm92aWRlOiBNb2RhbERhdGEsIHVzZVZhbHVlOiBtb2RhbC5kYXRhIH0sXG5cdFx0XHR7IHByb3ZpZGU6IE1vZGFsLCB1c2VWYWx1ZTogbW9kYWwgfSxcblx0XHQpO1xuXHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHsgcHJvdmlkZXJzIH0pO1xuXHRcdC8vIGNvbnN0IHJlc29sdmVkSW5wdXRzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUocHJvdmlkZXJzKTtcblx0XHQvLyBjb25zdCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMocmVzb2x2ZWRJbnB1dHMsIHRoaXMubW9kYWxDb250YWluZXIucGFyZW50SW5qZWN0b3IpO1xuXHRcdGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KG1vZGFsLmNvbXBvbmVudCk7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuXHRcdHRoaXMubW9kYWxDb250YWluZXIuaW5zZXJ0KGNvbXBvbmVudC5ob3N0Vmlldyk7XG5cdFx0dGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cdFx0Ly8gdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcblx0fVxuXG59XG4iLCI8bmctY29udGFpbmVyICNtb2RhbENvbnRhaW5lcj48L25nLWNvbnRhaW5lcj5cclxuIl19