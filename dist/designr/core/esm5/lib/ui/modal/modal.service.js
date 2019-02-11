/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Modal, ModalCloseEvent, ModalCompleteEvent } from './modal';
import * as i0 from "@angular/core";
var ModalService = /** @class */ (function () {
    function ModalService(platformId) {
        this.platformId = platformId;
        this.modals$ = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    ModalService.prototype.getInfos = /**
     * @return {?}
     */
    function () {
        return this.modals$.pipe(map(function (modals) {
            return modals.length ? modals[modals.length - 1] : null;
        }));
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ModalService.prototype.addClass = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var body = (/** @type {?} */ (document.querySelector('body')));
            body.classList.add(name);
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ModalService.prototype.removeClass = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var body = (/** @type {?} */ (document.querySelector('body')));
            body.classList.remove(name);
        }
    };
    /**
     * @param {?} modal
     * @return {?}
     */
    ModalService.prototype.open = /**
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        this.addClass('modal-active');
        modal = new Modal(modal);
        /** @type {?} */
        var modals = this.modals$.getValue();
        modals.push(modal);
        this.modals$.next(modals);
        return modal.emitter;
        // event emitter bound to modals$
    };
    /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    ModalService.prototype.complete = /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    function (modal, data) {
        modal = modal ? this.remove(modal) : this.pop();
        if (modal) {
            modal.emitter.emit(new ModalCompleteEvent({ modal: modal, data: data }));
        }
    };
    /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    ModalService.prototype.close = /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    function (modal, data) {
        modal = this.removeAll();
        if (modal) {
            modal.emitter.emit(new ModalCloseEvent({ modal: modal, data: data }));
        }
    };
    /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    ModalService.prototype.prev = /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    function (modal, data) {
        modal = modal ? this.remove(modal) : this.pop();
        if (modal) {
            modal.emitter.emit(new ModalCloseEvent({ modal: modal, data: data }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    ModalService.prototype.pop = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modals = this.modals$.getValue();
        if (modals.length) {
            /** @type {?} */
            var modal = modals.pop();
            if (!modals.length) {
                this.removeClass('modal-active');
            }
            this.modals$.next(modals);
            return modal;
        }
        else {
            return null;
        }
    };
    /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    ModalService.prototype.remove = /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        /** @type {?} */
        var modals = this.modals$.getValue();
        if (modals.length && modals[modals.length - 1] === modal) {
            modals.pop();
            if (!modals.length) {
                this.removeClass('modal-active');
            }
            this.modals$.next(modals);
            return modal;
        }
        else {
            return null;
        }
    };
    /**
     * @private
     * @return {?}
     */
    ModalService.prototype.removeAll = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modals = this.modals$.getValue();
        if (modals.length) {
            /** @type {?} */
            var modal = modals.pop();
            this.removeClass('modal-active');
            this.modals$.next([]);
            return modal;
        }
        else {
            return null;
        }
    };
    ModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    /** @nocollapse */ ModalService.ngInjectableDef = i0.defineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.inject(i0.PLATFORM_ID)); }, token: ModalService, providedIn: "root" });
    return ModalService;
}());
export { ModalService };
if (false) {
    /** @type {?} */
    ModalService.prototype.modals$;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdWkvbW9kYWwvbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFnQixNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFFckU7SUFPQyxzQkFDOEIsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUhoRCxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQVUsRUFBRSxDQUFDLENBQUM7SUFJdkMsQ0FBQzs7OztJQUVMLCtCQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3ZCLEdBQUcsQ0FBQyxVQUFDLE1BQWU7WUFDbkIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELCtCQUFROzs7O0lBQVIsVUFBUyxJQUFZO1FBQ3BCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztnQkFDakMsSUFBSSxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQWU7WUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFH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QVEsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ3pELE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUM7U0FDYjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUM7U0FDWjtJQUNGLENBQUM7Ozs7O0lBRU8sZ0NBQVM7Ozs7SUFBakI7O1lBQ08sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1FBQ3RDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTs7Z0JBQ1osS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QixPQUFPLEtBQUssQ0FBQztTQUNiO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQzs7Z0JBdEdELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7NkNBTUUsTUFBTSxTQUFDLFdBQVc7Ozt1QkFkckI7Q0E2SEMsQUF2SEQsSUF1SEM7U0FwSFksWUFBWTs7O0lBRXhCLCtCQUEyQzs7Ozs7SUFHMUMsa0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1vZGFsLCBNb2RhbENsb3NlRXZlbnQsIE1vZGFsQ29tcGxldGVFdmVudCB9IGZyb20gJy4vbW9kYWwnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuXG5cdG1vZGFscyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE1vZGFsW10+KFtdKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZ1xuXHQpIHsgfVxuXG5cdGdldEluZm9zKCk6IE9ic2VydmFibGU8TW9kYWw+IHtcblx0XHRyZXR1cm4gdGhpcy5tb2RhbHMkLnBpcGUoXG5cdFx0XHRtYXAoKG1vZGFsczogTW9kYWxbXSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbW9kYWxzLmxlbmd0aCA/IG1vZGFsc1ttb2RhbHMubGVuZ3RoIC0gMV0gOiBudWxsO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0YWRkQ2xhc3MobmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRib2R5LmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlQ2xhc3MobmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRib2R5LmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0b3Blbihtb2RhbDogTW9kYWwpOiBFdmVudEVtaXR0ZXI8TW9kYWxDb21wbGV0ZUV2ZW50IHwgTW9kYWxDbG9zZUV2ZW50PiB7XG5cdFx0dGhpcy5hZGRDbGFzcygnbW9kYWwtYWN0aXZlJyk7XG5cdFx0bW9kYWwgPSBuZXcgTW9kYWwobW9kYWwpO1xuXHRcdGNvbnN0IG1vZGFscyA9IHRoaXMubW9kYWxzJC5nZXRWYWx1ZSgpO1xuXHRcdG1vZGFscy5wdXNoKG1vZGFsKTtcblx0XHR0aGlzLm1vZGFscyQubmV4dChtb2RhbHMpO1xuXHRcdHJldHVybiBtb2RhbC5lbWl0dGVyO1xuXHRcdC8vIGV2ZW50IGVtaXR0ZXIgYm91bmQgdG8gbW9kYWxzJFxuXHR9XG5cblx0Y29tcGxldGUobW9kYWw/OiBNb2RhbCwgZGF0YT86IGFueSk6IHZvaWQge1xuXHRcdG1vZGFsID0gbW9kYWwgPyB0aGlzLnJlbW92ZShtb2RhbCkgOiB0aGlzLnBvcCgpO1xuXHRcdGlmIChtb2RhbCkge1xuXHRcdFx0bW9kYWwuZW1pdHRlci5lbWl0KG5ldyBNb2RhbENvbXBsZXRlRXZlbnQoeyBtb2RhbDogbW9kYWwsIGRhdGE6IGRhdGEgfSkpO1xuXHRcdH1cblx0fVxuXG5cdGNsb3NlKG1vZGFsPzogTW9kYWwsIGRhdGE/OiBhbnkpOiB2b2lkIHtcblx0XHRtb2RhbCA9IHRoaXMucmVtb3ZlQWxsKCk7XG5cdFx0aWYgKG1vZGFsKSB7XG5cdFx0XHRtb2RhbC5lbWl0dGVyLmVtaXQobmV3IE1vZGFsQ2xvc2VFdmVudCh7IG1vZGFsOiBtb2RhbCwgZGF0YTogZGF0YSB9KSk7XG5cdFx0fVxuXHR9XG5cblx0cHJldihtb2RhbD86IE1vZGFsLCBkYXRhPzogYW55KTogdm9pZCB7XG5cdFx0bW9kYWwgPSBtb2RhbCA/IHRoaXMucmVtb3ZlKG1vZGFsKSA6IHRoaXMucG9wKCk7XG5cdFx0aWYgKG1vZGFsKSB7XG5cdFx0XHRtb2RhbC5lbWl0dGVyLmVtaXQobmV3IE1vZGFsQ2xvc2VFdmVudCh7IG1vZGFsOiBtb2RhbCwgZGF0YTogZGF0YSB9KSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwb3AoKTogTW9kYWwge1xuXHRcdGNvbnN0IG1vZGFscyA9IHRoaXMubW9kYWxzJC5nZXRWYWx1ZSgpO1xuXHRcdGlmIChtb2RhbHMubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBtb2RhbCA9IG1vZGFscy5wb3AoKTtcblx0XHRcdGlmICghbW9kYWxzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdtb2RhbC1hY3RpdmUnKTtcblx0XHRcdH1cblx0XHRcdHRoaXMubW9kYWxzJC5uZXh0KG1vZGFscyk7XG5cdFx0XHRyZXR1cm4gbW9kYWw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlKG1vZGFsOiBNb2RhbCk6IE1vZGFsIHtcblx0XHRjb25zdCBtb2RhbHMgPSB0aGlzLm1vZGFscyQuZ2V0VmFsdWUoKTtcblx0XHRpZiAobW9kYWxzLmxlbmd0aCAmJiBtb2RhbHNbbW9kYWxzLmxlbmd0aCAtIDFdID09PSBtb2RhbCkge1xuXHRcdFx0bW9kYWxzLnBvcCgpO1xuXHRcdFx0aWYgKCFtb2RhbHMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5tb2RhbHMkLm5leHQobW9kYWxzKTtcblx0XHRcdHJldHVybiBtb2RhbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVBbGwoKTogTW9kYWwge1xuXHRcdGNvbnN0IG1vZGFscyA9IHRoaXMubW9kYWxzJC5nZXRWYWx1ZSgpO1xuXHRcdGlmIChtb2RhbHMubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBtb2RhbCA9IG1vZGFscy5wb3AoKTtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xuXHRcdFx0dGhpcy5tb2RhbHMkLm5leHQoW10pO1xuXHRcdFx0cmV0dXJuIG1vZGFsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHQvKlxuXHRpbml0KGNvbXBvbmVudDogYW55LCBwcm92aWRlcnM6IG9iamVjdCwgb3V0cHV0czogb2JqZWN0KSB7XG5cdFx0Y29uc3QgY29uZmlnID0geyBpbnB1dHM6IHByb3ZpZGVycywgb3V0cHV0cyB9O1xuXHRcdHRoaXMuZG9tU2VydmljZS5hcHBlbmRDb21wb25lbnRUbyh0aGlzLm1vZGFsRWxlbWVudElkLCBjb21wb25lbnQsIGNvbmZpZyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbEVsZW1lbnRJZCkuY2xhc3NOYW1lID0gJ3Nob3cnO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3ZlcmxheUVsZW1lbnRJZCkuY2xhc3NOYW1lID0gJ3Nob3cnO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLmRvbVNlcnZpY2UucmVtb3ZlQ29tcG9uZW50KCk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbEVsZW1lbnRJZCkuY2xhc3NOYW1lID0gJ2hpZGRlbic7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vdmVybGF5RWxlbWVudElkKS5jbGFzc05hbWUgPSAnaGlkZGVuJztcblx0fVxuXHQqL1xuXG59XG4iXX0=