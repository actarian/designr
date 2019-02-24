/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, Input, ReflectiveInjector, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
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
    ModalViewComponent.prototype.component;
    /** @type {?} */
    ModalViewComponent.prototype.modalContainer;
    /**
     * @type {?}
     * @private
     */
    ModalViewComponent.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9tb2RhbC9tb2RhbC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx3QkFBd0IsRUFBZ0IsS0FBSyxFQUF1QixrQkFBa0IsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEwsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBUTNDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxtQkFBbUI7Ozs7SUE2QjFELFlBQ1MsUUFBa0M7UUFFMUMsS0FBSyxFQUFFLENBQUM7UUFGQSxhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUczQyxDQUFDOzs7OztJQTNCRCxJQUFhLEtBQUssQ0FBQyxLQUFZO1FBQzlCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLE9BQU87U0FDUDs7Y0FDSyxTQUFTLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDekQsQ0FBQyxDQUFDO1FBQ0YsU0FBUyxDQUFDLElBQUksQ0FDYixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFDNUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FDbkMsQ0FBQzs7Y0FDSSxjQUFjLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzs7Y0FDdEQsUUFBUSxHQUFHLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQzs7Y0FDdkcsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7Y0FDaEUsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDOzs7O0lBUUQsV0FBVztRQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzs7O1lBOUNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyw2REFBMEM7O2dCQUUxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTthQUN6Qzs7OztZQVRtQix3QkFBd0I7Ozs2QkFjMUMsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO29CQUV0RCxLQUFLOzs7O0lBSk4sdUNBQTZCOztJQUU3Qiw0Q0FBMEY7Ozs7O0lBMEJ6RixzQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBQcm92aWRlciwgUmVmbGVjdGl2ZUluamVjdG9yLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxEYXRhIH0gZnJvbSAnLi9tb2RhbCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtbW9kYWwtdmlldy1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vbW9kYWwtdmlldy5jb21wb25lbnQuaHRtbCcsXG5cdC8vIHN0eWxlVXJsczogWycuL21vZGFsLXZpZXcuY29tcG9uZW50LnNjc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsVmlld0NvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnbW9kYWxDb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgbW9kYWxDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cblx0QElucHV0KCkgc2V0IG1vZGFsKG1vZGFsOiBNb2RhbCkge1xuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuZGVzdHJveSgpO1xuXHRcdH1cblx0XHRpZiAoIW1vZGFsKSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudCA9IG51bGw7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHByb3ZpZGVyczogUHJvdmlkZXIgPSBPYmplY3Qua2V5cyhtb2RhbC5wcm92aWRlcnMpLm1hcChrZXkgPT4ge1xuXHRcdFx0cmV0dXJuIHsgcHJvdmlkZToga2V5LCB1c2VWYWx1ZTogbW9kYWwucHJvdmlkZXJzW2tleV0gfTtcblx0XHR9KTtcblx0XHRwcm92aWRlcnMucHVzaChcblx0XHRcdHsgcHJvdmlkZTogTW9kYWxEYXRhLCB1c2VWYWx1ZTogbW9kYWwuZGF0YSB9LFxuXHRcdFx0eyBwcm92aWRlOiBNb2RhbCwgdXNlVmFsdWU6IG1vZGFsIH0sXG5cdFx0KTtcblx0XHRjb25zdCByZXNvbHZlZElucHV0cyA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlKHByb3ZpZGVycyk7XG5cdFx0Y29uc3QgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKHJlc29sdmVkSW5wdXRzLCB0aGlzLm1vZGFsQ29udGFpbmVyLnBhcmVudEluamVjdG9yKTtcblx0XHRjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShtb2RhbC5jb21wb25lbnQpO1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcblx0XHR0aGlzLm1vZGFsQ29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xuXHRcdHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmRlc3Ryb3koKTtcblx0XHRcdHRoaXMuY29tcG9uZW50ID0gbnVsbDtcblx0XHR9XG5cdH1cblxufVxuIl19