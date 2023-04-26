/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.modalService.modals$.pipe(takeUntil(this.unsubscribe), map((/**
         * @param {?} modals
         * @return {?}
         */
        function (modals) {
            _this.modalCount = modals.length;
            /** @type {?} */
            var modal = modals.length ? modals[modals.length - 1] : null;
            return modal;
        }))).subscribe((/**
         * @param {?} modal
         * @return {?}
         */
        function (modal) {
            _this.className = modal ? modal.className : null;
        }));
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
                    template: "<div class=\"modal\" [ngClass]=\"{ active: modalCount > 0 }\">\r\n\t<div class=\"modal__background\" (click)=\"doClose()\"></div>\r\n\t<div class=\"modal__page\" [ngClass]=\"className\">\r\n\t\t<div class=\"modal__header\">\r\n\t\t\t<button type=\"button\" class=\"btn btn--prev\" (click)=\"doPrev()\" *ngIf=\"modalCount > 1\" [title]=\"'modal.back' | label : 'back'\">\r\n\t\t\t\t<svg><use xlink:href=\"#prev\" /></svg> <span>{{'modal.back' | label : 'back'}}</span>\r\n\t\t\t</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn--close\" (click)=\"doClose()\" title=\"'modal.close' | label : 'close'\">\r\n\t\t\t\t<svg><use xlink:href=\"#close\" /></svg> <span>{{'modal.close' | label : 'close'}}</span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal__content\">\r\n\t\t\t<ng-container *ngFor=\"let modal of (modalService.modals$ | async); let last = last;\">\r\n\t\t\t\t<core-modal-view-component [modal]=\"modal\" [hidden]=\"!last\"></core-modal-view-component>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQztJQU02QyxtREFBbUI7SUFLL0QsaUNBQ1EsWUFBMEI7UUFEbEMsWUFHQyxpQkFBTyxTQUNQO1FBSE8sa0JBQVksR0FBWixZQUFZLENBQWM7UUFKbEMsZ0JBQVUsR0FBVyxDQUFDLENBQUM7O0lBT3ZCLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFXQztRQVZBLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDN0IsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDM0IsR0FBRzs7OztRQUFDLFVBQUMsTUFBZTtZQUNuQixLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7O2dCQUMxQixLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDOUQsT0FBTyxLQUFLLENBQUM7UUFDZCxDQUFDLEVBQUMsQ0FDRixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQVk7WUFDeEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx5Q0FBTzs7O0lBQVA7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx3Q0FBTTs7O0lBQU47UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQXBDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsbWlDQUErQztvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7aUJBQ3pDOzs7O2dCQU5RLFlBQVk7O0lBd0NyQiw4QkFBQztDQUFBLEFBdENELENBTTZDLG1CQUFtQixHQWdDL0Q7U0FoQ1ksdUJBQXVCOzs7SUFFbkMsNkNBQXVCOztJQUN2Qiw0Q0FBbUI7O0lBR2xCLCtDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjb3JlLW1vZGFsLWNvbnRhaW5lci1jb21wb25lbnQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdG1vZGFsQ291bnQ6IG51bWJlciA9IDA7XHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZVxyXG5cdCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5tb2RhbFNlcnZpY2UubW9kYWxzJC5waXBlKFxyXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXHJcblx0XHRcdG1hcCgobW9kYWxzOiBNb2RhbFtdKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5tb2RhbENvdW50ID0gbW9kYWxzLmxlbmd0aDtcclxuXHRcdFx0XHRjb25zdCBtb2RhbCA9IG1vZGFscy5sZW5ndGggPyBtb2RhbHNbbW9kYWxzLmxlbmd0aCAtIDFdIDogbnVsbDtcclxuXHRcdFx0XHRyZXR1cm4gbW9kYWw7XHJcblx0XHRcdH0pXHJcblx0XHQpLnN1YnNjcmliZSgobW9kYWw6IE1vZGFsKSA9PiB7XHJcblx0XHRcdHRoaXMuY2xhc3NOYW1lID0gbW9kYWwgPyBtb2RhbC5jbGFzc05hbWUgOiBudWxsO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRkb0Nsb3NlKCkge1xyXG5cdFx0dGhpcy5tb2RhbFNlcnZpY2UuY2xvc2UoKTtcclxuXHR9XHJcblxyXG5cdGRvUHJldigpIHtcclxuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLnByZXYoKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==