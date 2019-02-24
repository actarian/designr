/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.modalService.modals$.pipe(takeUntil(this.unsubscribe), map((modals) => {
            this.modalCount = modals.length;
            /** @type {?} */
            const modal = modals.length ? modals[modals.length - 1] : null;
            return modal;
        })).subscribe((modal) => {
            this.className = modal ? modal.className : null;
        });
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
                template: "<div class=\"modal\" [ngClass]=\"{ active: modalCount > 0 }\">\r\n\t<div class=\"modal-bg\" (click)=\"doClose()\"></div>\r\n\t<div class=\"modal-page\" [ngClass]=\"className\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<button type=\"button\" class=\"modal-prev\" (click)=\"doPrev()\" title=\"Indietro\" *ngIf=\"modalCount > 1\">\r\n\t\t\t\t<svg class=\"ico\">\r\n\t\t\t\t\t<use xlink:href=\"#ico-prev\"></use>\r\n\t\t\t\t</svg>\r\n\t\t\t\tindietro\r\n\t\t\t</button>\r\n\t\t\t<button type=\"button\" class=\"modal-close\" (click)=\"doClose()\" title=\"Chiudi finestra\">\r\n\t\t\t\t<svg class=\"ico\">\r\n\t\t\t\t\t<use xlink:href=\"#ico-close\"></use>\r\n\t\t\t\t</svg>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<ng-container *ngFor=\"let modal of (modalService.modals$ | async); let last = last;\">\r\n\t\t\t\t<core-modal-view-component [modal]=\"modal\" [hidden]=\"!last\"></core-modal-view-component>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
                // styleUrls: ['./modal-container.component.scss'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUy9DLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxtQkFBbUI7Ozs7SUFLL0QsWUFDUSxZQUEwQjtRQUVqQyxLQUFLLEVBQUUsQ0FBQztRQUZELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSmxDLGVBQVUsR0FBVyxDQUFDLENBQUM7SUFPdkIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzdCLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzNCLEdBQUcsQ0FBQyxDQUFDLE1BQWUsRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7a0JBQzFCLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUM5RCxPQUFPLEtBQUssQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUNGLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBckNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyw4L0JBQStDOztnQkFFL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7YUFDekM7Ozs7WUFQUSxZQUFZOzs7O0lBV3BCLDZDQUF1Qjs7SUFDdkIsNENBQW1COztJQUdsQiwrQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtbW9kYWwtY29udGFpbmVyLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuXHQvLyBzdHlsZVVybHM6IFsnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuXG5leHBvcnQgY2xhc3MgTW9kYWxDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRtb2RhbENvdW50OiBudW1iZXIgPSAwO1xuXHRjbGFzc05hbWU/OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm1vZGFsU2VydmljZS5tb2RhbHMkLnBpcGUoXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXG5cdFx0XHRtYXAoKG1vZGFsczogTW9kYWxbXSkgPT4ge1xuXHRcdFx0XHR0aGlzLm1vZGFsQ291bnQgPSBtb2RhbHMubGVuZ3RoO1xuXHRcdFx0XHRjb25zdCBtb2RhbCA9IG1vZGFscy5sZW5ndGggPyBtb2RhbHNbbW9kYWxzLmxlbmd0aCAtIDFdIDogbnVsbDtcblx0XHRcdFx0cmV0dXJuIG1vZGFsO1xuXHRcdFx0fSlcblx0XHQpLnN1YnNjcmliZSgobW9kYWw6IE1vZGFsKSA9PiB7XG5cdFx0XHR0aGlzLmNsYXNzTmFtZSA9IG1vZGFsID8gbW9kYWwuY2xhc3NOYW1lIDogbnVsbDtcblx0XHR9KTtcblx0fVxuXG5cdGRvQ2xvc2UoKSB7XG5cdFx0dGhpcy5tb2RhbFNlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdGRvUHJldigpIHtcblx0XHR0aGlzLm1vZGFsU2VydmljZS5wcmV2KCk7XG5cdH1cblxufVxuIl19