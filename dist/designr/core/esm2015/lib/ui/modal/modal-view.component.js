/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, Input, ReflectiveInjector, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '../../disposable/disposable.component';
import { Modal, ModalData } from './modal';
export class ModalViewComponent extends DisposableComponent {
    /**
     * @param {?} resolver
     */
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    set modal(modal) {
        if (this.component) {
            this.component.destroy();
        }
        if (!modal) {
            this.component = null;
            return;
        }
        /** @type {?} */
        const providers = Object.keys(modal.providers).map(key => {
            return { provide: key, useValue: modal.providers[key] };
        });
        providers.push({ provide: ModalData, useValue: modal.data }, { provide: Modal, useValue: modal });
        /** @type {?} */
        const resolvedInputs = ReflectiveInjector.resolve(providers);
        /** @type {?} */
        const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.modalContainer.parentInjector);
        /** @type {?} */
        const factory = this.resolver.resolveComponentFactory(modal.component);
        /** @type {?} */
        const component = factory.create(injector);
        this.modalContainer.insert(component.hostView);
        this.component = component;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.component) {
            this.component.destroy();
            this.component = null;
        }
    }
}
ModalViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-modal-view-component',
                template: "<ng-container #modalContainer></ng-container>\r\n",
                encapsulation: ViewEncapsulation.Emulated,
                styles: [""]
            }] }
];
/** @nocollapse */
ModalViewComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
ModalViewComponent.propDecorators = {
    modalContainer: [{ type: ViewChild, args: ['modalContainer', { read: ViewContainerRef },] }],
    modal: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ModalViewComponent.prototype.component;
    /** @type {?} */
    ModalViewComponent.prototype.modalContainer;
    /**
     * @type {?}
     * @private
     */
    ModalViewComponent.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixFQUFnQixLQUFLLEVBQXVCLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsTCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQVEzQyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsbUJBQW1COzs7O0lBNkIxRCxZQUNTLFFBQWtDO1FBRTFDLEtBQUssRUFBRSxDQUFDO1FBRkEsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7SUFHM0MsQ0FBQzs7Ozs7SUEzQkQsSUFBYSxLQUFLLENBQUMsS0FBWTtRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixPQUFPO1NBQ1A7O2NBQ0ssU0FBUyxHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3pELENBQUMsQ0FBQztRQUNGLFNBQVMsQ0FBQyxJQUFJLENBQ2IsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQzVDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQ25DLENBQUM7O2NBQ0ksY0FBYyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7O2NBQ3RELFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7O2NBQ3ZHLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7O2NBQ2hFLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQzs7OztJQVFELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNGLENBQUM7OztZQTlDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsNkRBQTBDO2dCQUUxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7YUFDekM7Ozs7WUFUbUIsd0JBQXdCOzs7NkJBYzFDLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtvQkFFdEQsS0FBSzs7OztJQUpOLHVDQUE2Qjs7SUFFN0IsNENBQTBGOzs7OztJQTBCekYsc0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgUHJvdmlkZXIsIFJlZmxlY3RpdmVJbmplY3RvciwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWwsIE1vZGFsRGF0YSB9IGZyb20gJy4vbW9kYWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb3JlLW1vZGFsLXZpZXctY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICcuL21vZGFsLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9tb2RhbC12aWV3LmNvbXBvbmVudC5zY3NzJ10sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFZpZXdDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ21vZGFsQ29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIG1vZGFsQ29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG5cdEBJbnB1dCgpIHNldCBtb2RhbChtb2RhbDogTW9kYWwpIHtcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0aWYgKCFtb2RhbCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnQgPSBudWxsO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBwcm92aWRlcnM6IFByb3ZpZGVyID0gT2JqZWN0LmtleXMobW9kYWwucHJvdmlkZXJzKS5tYXAoa2V5ID0+IHtcblx0XHRcdHJldHVybiB7IHByb3ZpZGU6IGtleSwgdXNlVmFsdWU6IG1vZGFsLnByb3ZpZGVyc1trZXldIH07XG5cdFx0fSk7XG5cdFx0cHJvdmlkZXJzLnB1c2goXG5cdFx0XHR7IHByb3ZpZGU6IE1vZGFsRGF0YSwgdXNlVmFsdWU6IG1vZGFsLmRhdGEgfSxcblx0XHRcdHsgcHJvdmlkZTogTW9kYWwsIHVzZVZhbHVlOiBtb2RhbCB9LFxuXHRcdCk7XG5cdFx0Y29uc3QgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShwcm92aWRlcnMpO1xuXHRcdGNvbnN0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhyZXNvbHZlZElucHV0cywgdGhpcy5tb2RhbENvbnRhaW5lci5wYXJlbnRJbmplY3Rvcik7XG5cdFx0Y29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkobW9kYWwuY29tcG9uZW50KTtcblx0XHRjb25zdCBjb21wb25lbnQgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG5cdFx0dGhpcy5tb2RhbENvbnRhaW5lci5pbnNlcnQoY29tcG9uZW50Lmhvc3RWaWV3KTtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50KSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmNvbXBvbmVudCA9IG51bGw7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==