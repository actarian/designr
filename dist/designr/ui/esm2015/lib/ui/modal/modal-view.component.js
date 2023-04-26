/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, Injector, Input, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
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
     * @return {?}
     */
    ngOnInit() {
        this.setModal(this.modal);
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
    /**
     * @param {?} modal
     * @return {?}
     */
    setModal(modal) {
        if (this.component) {
            this.component.destroy();
        }
        if (!modal) {
            this.component = null;
            return;
        }
        /** @type {?} */
        const providers = Object.keys(modal.providers).map((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            return { provide: key, useValue: modal.providers[key] };
        }));
        providers.push({ provide: ModalData, useValue: modal.data }, { provide: Modal, useValue: modal });
        /** @type {?} */
        const injector = Injector.create({ providers });
        // const resolvedInputs = ReflectiveInjector.resolve(providers);
        // const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.modalContainer.parentInjector);
        /** @type {?} */
        const factory = this.resolver.resolveComponentFactory(modal.component);
        /** @type {?} */
        const component = factory.create(injector);
        this.modalContainer.insert(component.hostView);
        this.component = component;
        // this.changeDetector.markForCheck();
    }
}
ModalViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-modal-view-component',
                template: "<ng-container #modalContainer></ng-container>\r\n",
                // styleUrls: ['./modal-view.component.scss'],
                encapsulation: ViewEncapsulation.Emulated
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
    ModalViewComponent.prototype.modalContainer;
    /** @type {?} */
    ModalViewComponent.prototype.modal;
    /** @type {?} */
    ModalViewComponent.prototype.component;
    /**
     * @type {?}
     * @private
     */
    ModalViewComponent.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9tb2RhbC9tb2RhbC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx3QkFBd0IsRUFBZ0IsUUFBUSxFQUFFLEtBQUssRUFBK0IsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hMLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQVMzQyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsbUJBQW1COzs7O0lBVzFELFlBQ1MsUUFBa0M7UUFHMUMsS0FBSyxFQUFFLENBQUM7UUFIQSxhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUkzQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDRixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFZO1FBQ3BCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLE9BQU87U0FDUDs7Y0FDSyxTQUFTLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDekQsQ0FBQyxFQUFDO1FBQ0YsU0FBUyxDQUFDLElBQUksQ0FDYixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFDNUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FDbkMsQ0FBQzs7Y0FDSSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDOzs7O2NBR3pDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7O2NBQ2hFLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0Isc0NBQXNDO0lBQ3ZDLENBQUM7OztZQTNERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsNkRBQTBDOztnQkFFMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7YUFFekM7Ozs7WUFWbUIsd0JBQXdCOzs7NkJBYTFDLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtvQkFNdEQsS0FBSzs7OztJQU5OLDRDQUEwRjs7SUFNMUYsbUNBQXNCOztJQUN0Qix1Q0FBNkI7Ozs7O0lBRzVCLHNDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEluamVjdG9yLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFByb3ZpZGVyLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWwsIE1vZGFsRGF0YSB9IGZyb20gJy4vbW9kYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjb3JlLW1vZGFsLXZpZXctY29tcG9uZW50JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vbW9kYWwtdmlldy5jb21wb25lbnQuaHRtbCcsXHJcblx0Ly8gc3R5bGVVcmxzOiBbJy4vbW9kYWwtdmlldy5jb21wb25lbnQuc2NzcyddLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxyXG5cdC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxWaWV3Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcblx0QFZpZXdDaGlsZCgnbW9kYWxDb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgbW9kYWxDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcblx0LypcclxuXHRASW5wdXQoKSBzZXQgbW9kYWwobW9kYWw6IE1vZGFsKSB7XHJcblx0XHR0aGlzLnNldE1vZGFsKG1vZGFsKTtcclxuXHR9XHJcblx0Ki9cclxuXHRASW5wdXQoKSBtb2RhbDogTW9kYWw7XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHQvLyBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc2V0TW9kYWwodGhpcy5tb2RhbCk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmNvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHRcdHRoaXMuY29tcG9uZW50ID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldE1vZGFsKG1vZGFsOiBNb2RhbCkge1xyXG5cdFx0aWYgKHRoaXMuY29tcG9uZW50KSB7XHJcblx0XHRcdHRoaXMuY29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHRcdGlmICghbW9kYWwpIHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnQgPSBudWxsO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBwcm92aWRlcnM6IFByb3ZpZGVyID0gT2JqZWN0LmtleXMobW9kYWwucHJvdmlkZXJzKS5tYXAoa2V5ID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvdmlkZToga2V5LCB1c2VWYWx1ZTogbW9kYWwucHJvdmlkZXJzW2tleV0gfTtcclxuXHRcdH0pO1xyXG5cdFx0cHJvdmlkZXJzLnB1c2goXHJcblx0XHRcdHsgcHJvdmlkZTogTW9kYWxEYXRhLCB1c2VWYWx1ZTogbW9kYWwuZGF0YSB9LFxyXG5cdFx0XHR7IHByb3ZpZGU6IE1vZGFsLCB1c2VWYWx1ZTogbW9kYWwgfSxcclxuXHRcdCk7XHJcblx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7IHByb3ZpZGVycyB9KTtcclxuXHRcdC8vIGNvbnN0IHJlc29sdmVkSW5wdXRzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUocHJvdmlkZXJzKTtcclxuXHRcdC8vIGNvbnN0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhyZXNvbHZlZElucHV0cywgdGhpcy5tb2RhbENvbnRhaW5lci5wYXJlbnRJbmplY3Rvcik7XHJcblx0XHRjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShtb2RhbC5jb21wb25lbnQpO1xyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cdFx0dGhpcy5tb2RhbENvbnRhaW5lci5pbnNlcnQoY29tcG9uZW50Lmhvc3RWaWV3KTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG5cdFx0Ly8gdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==