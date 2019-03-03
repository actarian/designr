/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { map, takeUntil } from 'rxjs/operators';
import { ModalService } from './modal.service';
var ModalContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ModalContainerComponent, _super);
    function ModalContainerComponent(modalService) {
        var _this = _super.call(this) || this;
        _this.modalService = modalService;
        _this.modalCount = 0;
        return _this;
    }
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.modalService.modals$.pipe(takeUntil(this.unsubscribe), map(function (modals) {
            _this.modalCount = modals.length;
            /** @type {?} */
            var modal = modals.length ? modals[modals.length - 1] : null;
            return modal;
        })).subscribe(function (modal) {
            _this.className = modal ? modal.className : null;
        });
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.doClose = /**
     * @return {?}
     */
    function () {
        this.modalService.close();
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.doPrev = /**
     * @return {?}
     */
    function () {
        this.modalService.prev();
    };
    ModalContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'core-modal-container-component',
                    template: "<div class=\"modal\" [ngClass]=\"{ active: modalCount > 0 }\">\r\n\t<div class=\"modal__background\" (click)=\"doClose()\"></div>\r\n\t<div class=\"modal__page\" [ngClass]=\"className\">\r\n\t\t<div class=\"modal__header\">\r\n\t\t\t<button type=\"button\" class=\"btn btn--prev\" (click)=\"doPrev()\" *ngIf=\"modalCount > 1\" [title]=\"'modal.back' | label : 'back'\">\r\n\t\t\t\t<span sprite=\"ico-prev\"></span>\r\n\t\t\t\t<span>{{'modal.back' | label : 'back'}}</span>\r\n\t\t\t</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn--close\" (click)=\"doClose()\" title=\"'modal.close' | label : 'close'\">\r\n\t\t\t\t<span sprite=\"ico-close\"></span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal__content\">\r\n\t\t\t<ng-container *ngFor=\"let modal of (modalService.modals$ | async); let last = last;\">\r\n\t\t\t\t<core-modal-view-component [modal]=\"modal\" [hidden]=\"!last\"></core-modal-view-component>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
                    encapsulation: ViewEncapsulation.Emulated
                }] }
    ];
    /** @nocollapse */
    ModalContainerComponent.ctorParameters = function () { return [
        { type: ModalService }
    ]; };
    return ModalContainerComponent;
}(DisposableComponent));
export { ModalContainerComponent };
if (false) {
    /** @type {?} */
    ModalContainerComponent.prototype.modalCount;
    /** @type {?} */
    ModalContainerComponent.prototype.className;
    /** @type {?} */
    ModalContainerComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQztJQU02QyxtREFBbUI7SUFLL0QsaUNBQ1EsWUFBMEI7UUFEbEMsWUFHQyxpQkFBTyxTQUNQO1FBSE8sa0JBQVksR0FBWixZQUFZLENBQWM7UUFKbEMsZ0JBQVUsR0FBVyxDQUFDLENBQUM7O0lBT3ZCLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFXQztRQVZBLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDN0IsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDM0IsR0FBRyxDQUFDLFVBQUMsTUFBZTtZQUNuQixLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7O2dCQUMxQixLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDOUQsT0FBTyxLQUFLLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FDRixDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVk7WUFDeEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx5Q0FBTzs7O0lBQVA7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx3Q0FBTTs7O0lBQU47UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQXBDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsaS9CQUErQztvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7aUJBQ3pDOzs7O2dCQU5RLFlBQVk7O0lBd0NyQiw4QkFBQztDQUFBLEFBdENELENBTTZDLG1CQUFtQixHQWdDL0Q7U0FoQ1ksdUJBQXVCOzs7SUFFbkMsNkNBQXVCOztJQUN2Qiw0Q0FBbUI7O0lBR2xCLCtDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29yZS1tb2RhbC1jb250YWluZXItY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICcuL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcblxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0bW9kYWxDb3VudDogbnVtYmVyID0gMDtcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZVxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5tb2RhbFNlcnZpY2UubW9kYWxzJC5waXBlKFxuXHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLFxuXHRcdFx0bWFwKChtb2RhbHM6IE1vZGFsW10pID0+IHtcblx0XHRcdFx0dGhpcy5tb2RhbENvdW50ID0gbW9kYWxzLmxlbmd0aDtcblx0XHRcdFx0Y29uc3QgbW9kYWwgPSBtb2RhbHMubGVuZ3RoID8gbW9kYWxzW21vZGFscy5sZW5ndGggLSAxXSA6IG51bGw7XG5cdFx0XHRcdHJldHVybiBtb2RhbDtcblx0XHRcdH0pXG5cdFx0KS5zdWJzY3JpYmUoKG1vZGFsOiBNb2RhbCkgPT4ge1xuXHRcdFx0dGhpcy5jbGFzc05hbWUgPSBtb2RhbCA/IG1vZGFsLmNsYXNzTmFtZSA6IG51bGw7XG5cdFx0fSk7XG5cdH1cblxuXHRkb0Nsb3NlKCkge1xuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRkb1ByZXYoKSB7XG5cdFx0dGhpcy5tb2RhbFNlcnZpY2UucHJldigpO1xuXHR9XG5cbn1cbiJdfQ==