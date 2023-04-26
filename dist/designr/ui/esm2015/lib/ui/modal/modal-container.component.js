/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { map, takeUntil } from 'rxjs/operators';
import { ModalService } from './modal.service';
export class ModalContainerComponent extends DisposableComponent {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        super();
        this.modalService = modalService;
        this.modalCount = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.modalService.modals$.pipe(takeUntil(this.unsubscribe), map((/**
         * @param {?} modals
         * @return {?}
         */
        (modals) => {
            this.modalCount = modals.length;
            /** @type {?} */
            const modal = modals.length ? modals[modals.length - 1] : null;
            return modal;
        }))).subscribe((/**
         * @param {?} modal
         * @return {?}
         */
        (modal) => {
            this.className = modal ? modal.className : null;
        }));
    }
    /**
     * @return {?}
     */
    doClose() {
        this.modalService.close();
    }
    /**
     * @return {?}
     */
    doPrev() {
        this.modalService.prev();
    }
}
ModalContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-modal-container-component',
                template: "<div class=\"modal\" [ngClass]=\"{ active: modalCount > 0 }\">\r\n\t<div class=\"modal__background\" (click)=\"doClose()\"></div>\r\n\t<div class=\"modal__page\" [ngClass]=\"className\">\r\n\t\t<div class=\"modal__header\">\r\n\t\t\t<button type=\"button\" class=\"btn btn--prev\" (click)=\"doPrev()\" *ngIf=\"modalCount > 1\" [title]=\"'modal.back' | label : 'back'\">\r\n\t\t\t\t<svg><use xlink:href=\"#prev\" /></svg> <span>{{'modal.back' | label : 'back'}}</span>\r\n\t\t\t</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn--close\" (click)=\"doClose()\" title=\"'modal.close' | label : 'close'\">\r\n\t\t\t\t<svg><use xlink:href=\"#close\" /></svg> <span>{{'modal.close' | label : 'close'}}</span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal__content\">\r\n\t\t\t<ng-container *ngFor=\"let modal of (modalService.modals$ | async); let last = last;\">\r\n\t\t\t\t<core-modal-view-component [modal]=\"modal\" [hidden]=\"!last\"></core-modal-view-component>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.Emulated
            }] }
];
/** @nocollapse */
ModalContainerComponent.ctorParameters = () => [
    { type: ModalService }
];
if (false) {
    /** @type {?} */
    ModalContainerComponent.prototype.modalCount;
    /** @type {?} */
    ModalContainerComponent.prototype.className;
    /** @type {?} */
    ModalContainerComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUS9DLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxtQkFBbUI7Ozs7SUFLL0QsWUFDUSxZQUEwQjtRQUVqQyxLQUFLLEVBQUUsQ0FBQztRQUZELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSmxDLGVBQVUsR0FBVyxDQUFDLENBQUM7SUFPdkIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzdCLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzNCLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWUsRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7a0JBQzFCLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUM5RCxPQUFPLEtBQUssQ0FBQztRQUNkLENBQUMsRUFBQyxDQUNGLENBQUMsU0FBUzs7OztRQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBcENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxtaUNBQStDO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTthQUN6Qzs7OztZQU5RLFlBQVk7Ozs7SUFVcEIsNkNBQXVCOztJQUN2Qiw0Q0FBbUI7O0lBR2xCLCtDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjb3JlLW1vZGFsLWNvbnRhaW5lci1jb21wb25lbnQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdG1vZGFsQ291bnQ6IG51bWJlciA9IDA7XHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZVxyXG5cdCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5tb2RhbFNlcnZpY2UubW9kYWxzJC5waXBlKFxyXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXHJcblx0XHRcdG1hcCgobW9kYWxzOiBNb2RhbFtdKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5tb2RhbENvdW50ID0gbW9kYWxzLmxlbmd0aDtcclxuXHRcdFx0XHRjb25zdCBtb2RhbCA9IG1vZGFscy5sZW5ndGggPyBtb2RhbHNbbW9kYWxzLmxlbmd0aCAtIDFdIDogbnVsbDtcclxuXHRcdFx0XHRyZXR1cm4gbW9kYWw7XHJcblx0XHRcdH0pXHJcblx0XHQpLnN1YnNjcmliZSgobW9kYWw6IE1vZGFsKSA9PiB7XHJcblx0XHRcdHRoaXMuY2xhc3NOYW1lID0gbW9kYWwgPyBtb2RhbC5jbGFzc05hbWUgOiBudWxsO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRkb0Nsb3NlKCkge1xyXG5cdFx0dGhpcy5tb2RhbFNlcnZpY2UuY2xvc2UoKTtcclxuXHR9XHJcblxyXG5cdGRvUHJldigpIHtcclxuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLnByZXYoKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==