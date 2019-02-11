/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { DisposableComponent } from '../../disposable/disposable.component';
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
                encapsulation: ViewEncapsulation.Emulated,
                styles: [".modal{position:fixed;display:flex;justify-content:center;align-items:center;top:0;left:0;width:100%;height:100%;z-index:10000;margin:0;padding:0;overflow:hidden;pointer-events:none;opacity:0;transition:opacity 250ms ease-in-out}.modal.active{opacity:1;pointer-events:all}.modal-bg{position:fixed;z-index:0;background:#1e1e1e;opacity:.87;top:0;left:0;bottom:0;right:0}.modal-page{position:relative;z-index:1;background:#fff;max-height:90vh;max-width:90vw;box-shadow:0 10px 40px -5px rgba(0,0,0,.5);overflow-y:auto}@media (max-width:500px){.modal-page{max-height:calc(100% - 80px);margin-top:40px;width:90%;max-width:none}}.modal-page .modal-header .modal-prev{padding:10px;z-index:1;color:#5f5d63;display:flex;font-size:11px;align-items:center;text-transform:uppercase;margin-left:4px}.modal-page .modal-header .modal-prev .ico{width:12px;height:12px;fill:#5f5d63;margin-right:4px}.modal-page .modal-header .modal-close{position:fixed;z-index:1;right:10px;top:10px}.modal-page .modal-header .modal-close .ico{fill:#fff;width:32px;height:32px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdWkvbW9kYWwvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVMvQyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsbUJBQW1COzs7O0lBSy9ELFlBQ1EsWUFBMEI7UUFFakMsS0FBSyxFQUFFLENBQUM7UUFGRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUpsQyxlQUFVLEdBQVcsQ0FBQyxDQUFDO0lBT3ZCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM3QixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUMzQixHQUFHLENBQUMsQ0FBQyxNQUFlLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7O2tCQUMxQixLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDOUQsT0FBTyxLQUFLLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FDRixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQXJDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsOC9CQUErQztnQkFFL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7O2FBQ3pDOzs7O1lBUFEsWUFBWTs7OztJQVdwQiw2Q0FBdUI7O0lBQ3ZCLDRDQUFtQjs7SUFHbEIsK0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb3JlLW1vZGFsLWNvbnRhaW5lci1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcblxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0bW9kYWxDb3VudDogbnVtYmVyID0gMDtcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZVxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5tb2RhbFNlcnZpY2UubW9kYWxzJC5waXBlKFxuXHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLFxuXHRcdFx0bWFwKChtb2RhbHM6IE1vZGFsW10pID0+IHtcblx0XHRcdFx0dGhpcy5tb2RhbENvdW50ID0gbW9kYWxzLmxlbmd0aDtcblx0XHRcdFx0Y29uc3QgbW9kYWwgPSBtb2RhbHMubGVuZ3RoID8gbW9kYWxzW21vZGFscy5sZW5ndGggLSAxXSA6IG51bGw7XG5cdFx0XHRcdHJldHVybiBtb2RhbDtcblx0XHRcdH0pXG5cdFx0KS5zdWJzY3JpYmUoKG1vZGFsOiBNb2RhbCkgPT4ge1xuXHRcdFx0dGhpcy5jbGFzc05hbWUgPSBtb2RhbCA/IG1vZGFsLmNsYXNzTmFtZSA6IG51bGw7XG5cdFx0fSk7XG5cdH1cblxuXHRkb0Nsb3NlKCkge1xuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRkb1ByZXYoKSB7XG5cdFx0dGhpcy5tb2RhbFNlcnZpY2UucHJldigpO1xuXHR9XG5cbn1cbiJdfQ==