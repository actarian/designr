/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, Input, ReflectiveInjector, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Modal, ModalData } from './modal';
var ModalViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ModalViewComponent, _super);
    function ModalViewComponent(resolver) {
        var _this = _super.call(this) || this;
        _this.resolver = resolver;
        return _this;
    }
    Object.defineProperty(ModalViewComponent.prototype, "modal", {
        set: /**
         * @param {?} modal
         * @return {?}
         */
        function (modal) {
            if (this.component) {
                this.component.destroy();
            }
            if (!modal) {
                this.component = null;
                return;
            }
            /** @type {?} */
            var providers = Object.keys(modal.providers).map(function (key) {
                return { provide: key, useValue: modal.providers[key] };
            });
            providers.push({ provide: ModalData, useValue: modal.data }, { provide: Modal, useValue: modal });
            /** @type {?} */
            var resolvedInputs = ReflectiveInjector.resolve(providers);
            /** @type {?} */
            var injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.modalContainer.parentInjector);
            /** @type {?} */
            var factory = this.resolver.resolveComponentFactory(modal.component);
            /** @type {?} */
            var component = factory.create(injector);
            this.modalContainer.insert(component.hostView);
            this.component = component;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalViewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.component) {
            this.component.destroy();
            this.component = null;
        }
    };
    ModalViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'core-modal-view-component',
                    template: "<ng-container #modalContainer></ng-container>\r\n",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ModalViewComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    ModalViewComponent.propDecorators = {
        modalContainer: [{ type: ViewChild, args: ['modalContainer', { read: ViewContainerRef },] }],
        modal: [{ type: Input }]
    };
    return ModalViewComponent;
}(DisposableComponent));
export { ModalViewComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9tb2RhbC9tb2RhbC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsd0JBQXdCLEVBQWdCLEtBQUssRUFBdUIsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xMLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUUzQztJQU13Qyw4Q0FBbUI7SUE2QjFELDRCQUNTLFFBQWtDO1FBRDNDLFlBR0MsaUJBQU8sU0FDUDtRQUhRLGNBQVEsR0FBUixRQUFRLENBQTBCOztJQUczQyxDQUFDO0lBM0JELHNCQUFhLHFDQUFLOzs7OztRQUFsQixVQUFtQixLQUFZO1lBQzlCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN6QjtZQUNELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLE9BQU87YUFDUDs7Z0JBQ0ssU0FBUyxHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7Z0JBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDekQsQ0FBQyxDQUFDO1lBQ0YsU0FBUyxDQUFDLElBQUksQ0FDYixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFDNUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FDbkMsQ0FBQzs7Z0JBQ0ksY0FBYyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7O2dCQUN0RCxRQUFRLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDOztnQkFDdkcsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7Z0JBQ2hFLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7SUFRRCx3Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNGLENBQUM7O2dCQTlDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsNkRBQTBDO29CQUUxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7aUJBQ3pDOzs7O2dCQVRtQix3QkFBd0I7OztpQ0FjMUMsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3dCQUV0RCxLQUFLOztJQW9DUCx5QkFBQztDQUFBLEFBaERELENBTXdDLG1CQUFtQixHQTBDMUQ7U0ExQ1ksa0JBQWtCOzs7SUFFOUIsdUNBQTZCOztJQUU3Qiw0Q0FBMEY7Ozs7O0lBMEJ6RixzQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBQcm92aWRlciwgUmVmbGVjdGl2ZUluamVjdG9yLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxEYXRhIH0gZnJvbSAnLi9tb2RhbCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtbW9kYWwtdmlldy1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vbW9kYWwtdmlldy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL21vZGFsLXZpZXcuY29tcG9uZW50LnNjc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsVmlld0NvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnbW9kYWxDb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgbW9kYWxDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cblx0QElucHV0KCkgc2V0IG1vZGFsKG1vZGFsOiBNb2RhbCkge1xuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuZGVzdHJveSgpO1xuXHRcdH1cblx0XHRpZiAoIW1vZGFsKSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudCA9IG51bGw7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHByb3ZpZGVyczogUHJvdmlkZXIgPSBPYmplY3Qua2V5cyhtb2RhbC5wcm92aWRlcnMpLm1hcChrZXkgPT4ge1xuXHRcdFx0cmV0dXJuIHsgcHJvdmlkZToga2V5LCB1c2VWYWx1ZTogbW9kYWwucHJvdmlkZXJzW2tleV0gfTtcblx0XHR9KTtcblx0XHRwcm92aWRlcnMucHVzaChcblx0XHRcdHsgcHJvdmlkZTogTW9kYWxEYXRhLCB1c2VWYWx1ZTogbW9kYWwuZGF0YSB9LFxuXHRcdFx0eyBwcm92aWRlOiBNb2RhbCwgdXNlVmFsdWU6IG1vZGFsIH0sXG5cdFx0KTtcblx0XHRjb25zdCByZXNvbHZlZElucHV0cyA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlKHByb3ZpZGVycyk7XG5cdFx0Y29uc3QgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKHJlc29sdmVkSW5wdXRzLCB0aGlzLm1vZGFsQ29udGFpbmVyLnBhcmVudEluamVjdG9yKTtcblx0XHRjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShtb2RhbC5jb21wb25lbnQpO1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcblx0XHR0aGlzLm1vZGFsQ29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xuXHRcdHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmRlc3Ryb3koKTtcblx0XHRcdHRoaXMuY29tcG9uZW50ID0gbnVsbDtcblx0XHR9XG5cdH1cblxufVxuIl19