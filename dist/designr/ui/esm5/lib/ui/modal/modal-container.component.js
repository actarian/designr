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
                    template: "<div class=\"modal\" [ngClass]=\"{ active: modalCount > 0 }\">\r\n\t<div class=\"modal-bg\" (click)=\"doClose()\"></div>\r\n\t<div class=\"modal-page\" [ngClass]=\"className\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<button type=\"button\" class=\"modal-prev\" (click)=\"doPrev()\" title=\"Indietro\" *ngIf=\"modalCount > 1\">\r\n\t\t\t\t<svg class=\"ico\">\r\n\t\t\t\t\t<use xlink:href=\"#ico-prev\"></use>\r\n\t\t\t\t</svg>\r\n\t\t\t\tindietro\r\n\t\t\t</button>\r\n\t\t\t<button type=\"button\" class=\"modal-close\" (click)=\"doClose()\" title=\"Chiudi finestra\">\r\n\t\t\t\t<svg class=\"ico\">\r\n\t\t\t\t\t<use xlink:href=\"#ico-close\"></use>\r\n\t\t\t\t</svg>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<ng-container *ngFor=\"let modal of (modalService.modals$ | async); let last = last;\">\r\n\t\t\t\t<core-modal-view-component [modal]=\"modal\" [hidden]=\"!last\"></core-modal-view-component>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
                    // styleUrls: ['./modal-container.component.scss'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQztJQU82QyxtREFBbUI7SUFLL0QsaUNBQ1EsWUFBMEI7UUFEbEMsWUFHQyxpQkFBTyxTQUNQO1FBSE8sa0JBQVksR0FBWixZQUFZLENBQWM7UUFKbEMsZ0JBQVUsR0FBVyxDQUFDLENBQUM7O0lBT3ZCLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFXQztRQVZBLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDN0IsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDM0IsR0FBRyxDQUFDLFVBQUMsTUFBZTtZQUNuQixLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7O2dCQUMxQixLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDOUQsT0FBTyxLQUFLLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FDRixDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVk7WUFDeEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx5Q0FBTzs7O0lBQVA7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx3Q0FBTTs7O0lBQU47UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQXJDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsOC9CQUErQzs7b0JBRS9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFRO2lCQUN6Qzs7OztnQkFQUSxZQUFZOztJQXlDckIsOEJBQUM7Q0FBQSxBQXZDRCxDQU82QyxtQkFBbUIsR0FnQy9EO1NBaENZLHVCQUF1Qjs7O0lBRW5DLDZDQUF1Qjs7SUFDdkIsNENBQW1COztJQUdsQiwrQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtbW9kYWwtY29udGFpbmVyLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuXHQvLyBzdHlsZVVybHM6IFsnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuXG5leHBvcnQgY2xhc3MgTW9kYWxDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRtb2RhbENvdW50OiBudW1iZXIgPSAwO1xuXHRjbGFzc05hbWU/OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm1vZGFsU2VydmljZS5tb2RhbHMkLnBpcGUoXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXG5cdFx0XHRtYXAoKG1vZGFsczogTW9kYWxbXSkgPT4ge1xuXHRcdFx0XHR0aGlzLm1vZGFsQ291bnQgPSBtb2RhbHMubGVuZ3RoO1xuXHRcdFx0XHRjb25zdCBtb2RhbCA9IG1vZGFscy5sZW5ndGggPyBtb2RhbHNbbW9kYWxzLmxlbmd0aCAtIDFdIDogbnVsbDtcblx0XHRcdFx0cmV0dXJuIG1vZGFsO1xuXHRcdFx0fSlcblx0XHQpLnN1YnNjcmliZSgobW9kYWw6IE1vZGFsKSA9PiB7XG5cdFx0XHR0aGlzLmNsYXNzTmFtZSA9IG1vZGFsID8gbW9kYWwuY2xhc3NOYW1lIDogbnVsbDtcblx0XHR9KTtcblx0fVxuXG5cdGRvQ2xvc2UoKSB7XG5cdFx0dGhpcy5tb2RhbFNlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdGRvUHJldigpIHtcblx0XHR0aGlzLm1vZGFsU2VydmljZS5wcmV2KCk7XG5cdH1cblxufVxuIl19