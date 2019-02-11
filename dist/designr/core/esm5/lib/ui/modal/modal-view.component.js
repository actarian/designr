/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, Input, ReflectiveInjector, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '../../disposable/disposable.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx3QkFBd0IsRUFBZ0IsS0FBSyxFQUF1QixrQkFBa0IsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEwsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFM0M7SUFNd0MsOENBQW1CO0lBNkIxRCw0QkFDUyxRQUFrQztRQUQzQyxZQUdDLGlCQUFPLFNBQ1A7UUFIUSxjQUFRLEdBQVIsUUFBUSxDQUEwQjs7SUFHM0MsQ0FBQztJQTNCRCxzQkFBYSxxQ0FBSzs7Ozs7UUFBbEIsVUFBbUIsS0FBWTtZQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDekI7WUFDRCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixPQUFPO2FBQ1A7O2dCQUNLLFNBQVMsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO2dCQUMvRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3pELENBQUMsQ0FBQztZQUNGLFNBQVMsQ0FBQyxJQUFJLENBQ2IsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQzVDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQ25DLENBQUM7O2dCQUNJLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDOztnQkFDdEQsUUFBUSxHQUFHLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQzs7Z0JBQ3ZHLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7O2dCQUNoRSxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzVCLENBQUM7OztPQUFBOzs7O0lBUUQsd0NBQVc7OztJQUFYO1FBQ0MsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDRixDQUFDOztnQkE5Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLDZEQUEwQztvQkFFMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7O2lCQUN6Qzs7OztnQkFUbUIsd0JBQXdCOzs7aUNBYzFDLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt3QkFFdEQsS0FBSzs7SUFvQ1AseUJBQUM7Q0FBQSxBQWhERCxDQU13QyxtQkFBbUIsR0EwQzFEO1NBMUNZLGtCQUFrQjs7O0lBRTlCLHVDQUE2Qjs7SUFFN0IsNENBQTBGOzs7OztJQTBCekYsc0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgUHJvdmlkZXIsIFJlZmxlY3RpdmVJbmplY3RvciwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWwsIE1vZGFsRGF0YSB9IGZyb20gJy4vbW9kYWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb3JlLW1vZGFsLXZpZXctY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICcuL21vZGFsLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9tb2RhbC12aWV3LmNvbXBvbmVudC5zY3NzJ10sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFZpZXdDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ21vZGFsQ29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIG1vZGFsQ29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG5cdEBJbnB1dCgpIHNldCBtb2RhbChtb2RhbDogTW9kYWwpIHtcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0aWYgKCFtb2RhbCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnQgPSBudWxsO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBwcm92aWRlcnM6IFByb3ZpZGVyID0gT2JqZWN0LmtleXMobW9kYWwucHJvdmlkZXJzKS5tYXAoa2V5ID0+IHtcblx0XHRcdHJldHVybiB7IHByb3ZpZGU6IGtleSwgdXNlVmFsdWU6IG1vZGFsLnByb3ZpZGVyc1trZXldIH07XG5cdFx0fSk7XG5cdFx0cHJvdmlkZXJzLnB1c2goXG5cdFx0XHR7IHByb3ZpZGU6IE1vZGFsRGF0YSwgdXNlVmFsdWU6IG1vZGFsLmRhdGEgfSxcblx0XHRcdHsgcHJvdmlkZTogTW9kYWwsIHVzZVZhbHVlOiBtb2RhbCB9LFxuXHRcdCk7XG5cdFx0Y29uc3QgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShwcm92aWRlcnMpO1xuXHRcdGNvbnN0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhyZXNvbHZlZElucHV0cywgdGhpcy5tb2RhbENvbnRhaW5lci5wYXJlbnRJbmplY3Rvcik7XG5cdFx0Y29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkobW9kYWwuY29tcG9uZW50KTtcblx0XHRjb25zdCBjb21wb25lbnQgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG5cdFx0dGhpcy5tb2RhbENvbnRhaW5lci5pbnNlcnQoY29tcG9uZW50Lmhvc3RWaWV3KTtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50KSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmNvbXBvbmVudCA9IG51bGw7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==