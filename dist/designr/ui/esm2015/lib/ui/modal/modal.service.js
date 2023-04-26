/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Modal, ModalCloseEvent, ModalCompleteEvent } from './modal';
import * as i0 from "@angular/core";
export class ModalService {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        this.modals$ = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    getInfos() {
        return this.modals$.pipe(map((/**
         * @param {?} modals
         * @return {?}
         */
        (modals) => {
            return modals.length ? modals[modals.length - 1] : null;
        })));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    addClass(name) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const body = (/** @type {?} */ (document.querySelector('body')));
            body.classList.add(name);
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    removeClass(name) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const body = (/** @type {?} */ (document.querySelector('body')));
            body.classList.remove(name);
        }
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    open(modal) {
        this.addClass('modal-active');
        modal = new Modal(modal);
        /** @type {?} */
        const modals = this.modals$.getValue();
        modals.push(modal);
        this.modals$.next(modals);
        return modal.emitter;
        // event emitter bound to modals$
    }
    /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    complete(modal, data) {
        modal = modal ? this.remove(modal) : this.pop();
        if (modal) {
            modal.emitter.emit(new ModalCompleteEvent({ modal: modal, data: data }));
        }
    }
    /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    close(modal, data) {
        modal = this.removeAll();
        if (modal) {
            modal.emitter.emit(new ModalCloseEvent({ modal: modal, data: data }));
        }
    }
    /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    prev(modal, data) {
        modal = modal ? this.remove(modal) : this.pop();
        if (modal) {
            modal.emitter.emit(new ModalCloseEvent({ modal: modal, data: data }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    pop() {
        /** @type {?} */
        const modals = this.modals$.getValue();
        if (modals.length) {
            /** @type {?} */
            const modal = modals.pop();
            if (!modals.length) {
                this.removeClass('modal-active');
            }
            this.modals$.next(modals);
            return modal;
        }
        else {
            return null;
        }
    }
    /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    remove(modal) {
        /** @type {?} */
        const modals = this.modals$.getValue();
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
    }
    /**
     * @private
     * @return {?}
     */
    removeAll() {
        /** @type {?} */
        const modals = this.modals$.getValue();
        if (modals.length) {
            /** @type {?} */
            const modal = modals.pop();
            this.removeClass('modal-active');
            this.modals$.next([]);
            return modal;
        }
        else {
            return null;
        }
    }
}
ModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ ModalService.ngInjectableDef = i0.defineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.inject(i0.PLATFORM_ID)); }, token: ModalService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ModalService.prototype.modals$;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBZ0IsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBS3JFLE1BQU0sT0FBTyxZQUFZOzs7O0lBSXhCLFlBQzhCLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFIaEQsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFVLEVBQUUsQ0FBQyxDQUFDO0lBSXZDLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDdkIsR0FBRzs7OztRQUFDLENBQUMsTUFBZSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxJQUFZO1FBQ3BCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztrQkFDakMsSUFBSSxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQWU7WUFDMUQsSUFBSSxDQUFDLFNB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QUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDekQsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDakM7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixPQUFPLEtBQUssQ0FBQztTQUNiO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxTQUFTOztjQUNWLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7O2tCQUNaLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEIsT0FBTyxLQUFLLENBQUM7U0FDYjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUM7U0FDWjtJQUNGLENBQUM7OztZQXRHRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7eUNBTUUsTUFBTSxTQUFDLFdBQVc7Ozs7O0lBSHBCLCtCQUEyQzs7Ozs7SUFHMUMsa0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTW9kYWwsIE1vZGFsQ2xvc2VFdmVudCwgTW9kYWxDb21wbGV0ZUV2ZW50IH0gZnJvbSAnLi9tb2RhbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xyXG5cclxuXHRtb2RhbHMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNb2RhbFtdPihbXSk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmdcclxuXHQpIHsgfVxyXG5cclxuXHRnZXRJbmZvcygpOiBPYnNlcnZhYmxlPE1vZGFsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RhbHMkLnBpcGUoXHJcblx0XHRcdG1hcCgobW9kYWxzOiBNb2RhbFtdKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZGFscy5sZW5ndGggPyBtb2RhbHNbbW9kYWxzLmxlbmd0aCAtIDFdIDogbnVsbDtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRhZGRDbGFzcyhuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHRcdGJvZHkuY2xhc3NMaXN0LmFkZChuYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbW92ZUNsYXNzKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0Y29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSBhcyBIVE1MRWxlbWVudDtcclxuXHRcdFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b3Blbihtb2RhbDogTW9kYWwpOiBFdmVudEVtaXR0ZXI8TW9kYWxDb21wbGV0ZUV2ZW50IHwgTW9kYWxDbG9zZUV2ZW50PiB7XHJcblx0XHR0aGlzLmFkZENsYXNzKCdtb2RhbC1hY3RpdmUnKTtcclxuXHRcdG1vZGFsID0gbmV3IE1vZGFsKG1vZGFsKTtcclxuXHRcdGNvbnN0IG1vZGFscyA9IHRoaXMubW9kYWxzJC5nZXRWYWx1ZSgpO1xyXG5cdFx0bW9kYWxzLnB1c2gobW9kYWwpO1xyXG5cdFx0dGhpcy5tb2RhbHMkLm5leHQobW9kYWxzKTtcclxuXHRcdHJldHVybiBtb2RhbC5lbWl0dGVyO1xyXG5cdFx0Ly8gZXZlbnQgZW1pdHRlciBib3VuZCB0byBtb2RhbHMkXHJcblx0fVxyXG5cclxuXHRjb21wbGV0ZShtb2RhbD86IE1vZGFsLCBkYXRhPzogYW55KTogdm9pZCB7XHJcblx0XHRtb2RhbCA9IG1vZGFsID8gdGhpcy5yZW1vdmUobW9kYWwpIDogdGhpcy5wb3AoKTtcclxuXHRcdGlmIChtb2RhbCkge1xyXG5cdFx0XHRtb2RhbC5lbWl0dGVyLmVtaXQobmV3IE1vZGFsQ29tcGxldGVFdmVudCh7IG1vZGFsOiBtb2RhbCwgZGF0YTogZGF0YSB9KSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjbG9zZShtb2RhbD86IE1vZGFsLCBkYXRhPzogYW55KTogdm9pZCB7XHJcblx0XHRtb2RhbCA9IHRoaXMucmVtb3ZlQWxsKCk7XHJcblx0XHRpZiAobW9kYWwpIHtcclxuXHRcdFx0bW9kYWwuZW1pdHRlci5lbWl0KG5ldyBNb2RhbENsb3NlRXZlbnQoeyBtb2RhbDogbW9kYWwsIGRhdGE6IGRhdGEgfSkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJldihtb2RhbD86IE1vZGFsLCBkYXRhPzogYW55KTogdm9pZCB7XHJcblx0XHRtb2RhbCA9IG1vZGFsID8gdGhpcy5yZW1vdmUobW9kYWwpIDogdGhpcy5wb3AoKTtcclxuXHRcdGlmIChtb2RhbCkge1xyXG5cdFx0XHRtb2RhbC5lbWl0dGVyLmVtaXQobmV3IE1vZGFsQ2xvc2VFdmVudCh7IG1vZGFsOiBtb2RhbCwgZGF0YTogZGF0YSB9KSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBvcCgpOiBNb2RhbCB7XHJcblx0XHRjb25zdCBtb2RhbHMgPSB0aGlzLm1vZGFscyQuZ2V0VmFsdWUoKTtcclxuXHRcdGlmIChtb2RhbHMubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IG1vZGFsID0gbW9kYWxzLnBvcCgpO1xyXG5cdFx0XHRpZiAoIW1vZGFscy5sZW5ndGgpIHtcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdtb2RhbC1hY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm1vZGFscyQubmV4dChtb2RhbHMpO1xyXG5cdFx0XHRyZXR1cm4gbW9kYWw7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlKG1vZGFsOiBNb2RhbCk6IE1vZGFsIHtcclxuXHRcdGNvbnN0IG1vZGFscyA9IHRoaXMubW9kYWxzJC5nZXRWYWx1ZSgpO1xyXG5cdFx0aWYgKG1vZGFscy5sZW5ndGggJiYgbW9kYWxzW21vZGFscy5sZW5ndGggLSAxXSA9PT0gbW9kYWwpIHtcclxuXHRcdFx0bW9kYWxzLnBvcCgpO1xyXG5cdFx0XHRpZiAoIW1vZGFscy5sZW5ndGgpIHtcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdtb2RhbC1hY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm1vZGFscyQubmV4dChtb2RhbHMpO1xyXG5cdFx0XHRyZXR1cm4gbW9kYWw7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlQWxsKCk6IE1vZGFsIHtcclxuXHRcdGNvbnN0IG1vZGFscyA9IHRoaXMubW9kYWxzJC5nZXRWYWx1ZSgpO1xyXG5cdFx0aWYgKG1vZGFscy5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3QgbW9kYWwgPSBtb2RhbHMucG9wKCk7XHJcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xyXG5cdFx0XHR0aGlzLm1vZGFscyQubmV4dChbXSk7XHJcblx0XHRcdHJldHVybiBtb2RhbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LypcclxuXHRpbml0KGNvbXBvbmVudDogYW55LCBwcm92aWRlcnM6IG9iamVjdCwgb3V0cHV0czogb2JqZWN0KSB7XHJcblx0XHRjb25zdCBjb25maWcgPSB7IGlucHV0czogcHJvdmlkZXJzLCBvdXRwdXRzIH07XHJcblx0XHR0aGlzLmRvbVNlcnZpY2UuYXBwZW5kQ29tcG9uZW50VG8odGhpcy5tb2RhbEVsZW1lbnRJZCwgY29tcG9uZW50LCBjb25maWcpO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbEVsZW1lbnRJZCkuY2xhc3NOYW1lID0gJ3Nob3cnO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vdmVybGF5RWxlbWVudElkKS5jbGFzc05hbWUgPSAnc2hvdyc7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KCkge1xyXG5cdFx0dGhpcy5kb21TZXJ2aWNlLnJlbW92ZUNvbXBvbmVudCgpO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbEVsZW1lbnRJZCkuY2xhc3NOYW1lID0gJ2hpZGRlbic7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm92ZXJsYXlFbGVtZW50SWQpLmNsYXNzTmFtZSA9ICdoaWRkZW4nO1xyXG5cdH1cclxuXHQqL1xyXG5cclxufVxyXG4iXX0=