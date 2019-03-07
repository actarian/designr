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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBZ0IsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBS3JFLE1BQU0sT0FBTyxZQUFZOzs7O0lBSXhCLFlBQzhCLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFIaEQsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFVLEVBQUUsQ0FBQyxDQUFDO0lBSXZDLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDdkIsR0FBRzs7OztRQUFDLENBQUMsTUFBZSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxJQUFZO1FBQ3BCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztrQkFDakMsSUFBSSxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQWU7WUFDMUQsSUFBSSxDQUFDLFNB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QUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDekQsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDakM7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixPQUFPLEtBQUssQ0FBQztTQUNiO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxTQUFTOztjQUNWLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7O2tCQUNaLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEIsT0FBTyxLQUFLLENBQUM7U0FDYjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUM7U0FDWjtJQUNGLENBQUM7OztZQXRHRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7eUNBTUUsTUFBTSxTQUFDLFdBQVc7Ozs7O0lBSHBCLCtCQUEyQzs7Ozs7SUFHMUMsa0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1vZGFsLCBNb2RhbENsb3NlRXZlbnQsIE1vZGFsQ29tcGxldGVFdmVudCB9IGZyb20gJy4vbW9kYWwnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuXG5cdG1vZGFscyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE1vZGFsW10+KFtdKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZ1xuXHQpIHsgfVxuXG5cdGdldEluZm9zKCk6IE9ic2VydmFibGU8TW9kYWw+IHtcblx0XHRyZXR1cm4gdGhpcy5tb2RhbHMkLnBpcGUoXG5cdFx0XHRtYXAoKG1vZGFsczogTW9kYWxbXSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbW9kYWxzLmxlbmd0aCA/IG1vZGFsc1ttb2RhbHMubGVuZ3RoIC0gMV0gOiBudWxsO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0YWRkQ2xhc3MobmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRib2R5LmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlQ2xhc3MobmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRib2R5LmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0b3Blbihtb2RhbDogTW9kYWwpOiBFdmVudEVtaXR0ZXI8TW9kYWxDb21wbGV0ZUV2ZW50IHwgTW9kYWxDbG9zZUV2ZW50PiB7XG5cdFx0dGhpcy5hZGRDbGFzcygnbW9kYWwtYWN0aXZlJyk7XG5cdFx0bW9kYWwgPSBuZXcgTW9kYWwobW9kYWwpO1xuXHRcdGNvbnN0IG1vZGFscyA9IHRoaXMubW9kYWxzJC5nZXRWYWx1ZSgpO1xuXHRcdG1vZGFscy5wdXNoKG1vZGFsKTtcblx0XHR0aGlzLm1vZGFscyQubmV4dChtb2RhbHMpO1xuXHRcdHJldHVybiBtb2RhbC5lbWl0dGVyO1xuXHRcdC8vIGV2ZW50IGVtaXR0ZXIgYm91bmQgdG8gbW9kYWxzJFxuXHR9XG5cblx0Y29tcGxldGUobW9kYWw/OiBNb2RhbCwgZGF0YT86IGFueSk6IHZvaWQge1xuXHRcdG1vZGFsID0gbW9kYWwgPyB0aGlzLnJlbW92ZShtb2RhbCkgOiB0aGlzLnBvcCgpO1xuXHRcdGlmIChtb2RhbCkge1xuXHRcdFx0bW9kYWwuZW1pdHRlci5lbWl0KG5ldyBNb2RhbENvbXBsZXRlRXZlbnQoeyBtb2RhbDogbW9kYWwsIGRhdGE6IGRhdGEgfSkpO1xuXHRcdH1cblx0fVxuXG5cdGNsb3NlKG1vZGFsPzogTW9kYWwsIGRhdGE/OiBhbnkpOiB2b2lkIHtcblx0XHRtb2RhbCA9IHRoaXMucmVtb3ZlQWxsKCk7XG5cdFx0aWYgKG1vZGFsKSB7XG5cdFx0XHRtb2RhbC5lbWl0dGVyLmVtaXQobmV3IE1vZGFsQ2xvc2VFdmVudCh7IG1vZGFsOiBtb2RhbCwgZGF0YTogZGF0YSB9KSk7XG5cdFx0fVxuXHR9XG5cblx0cHJldihtb2RhbD86IE1vZGFsLCBkYXRhPzogYW55KTogdm9pZCB7XG5cdFx0bW9kYWwgPSBtb2RhbCA/IHRoaXMucmVtb3ZlKG1vZGFsKSA6IHRoaXMucG9wKCk7XG5cdFx0aWYgKG1vZGFsKSB7XG5cdFx0XHRtb2RhbC5lbWl0dGVyLmVtaXQobmV3IE1vZGFsQ2xvc2VFdmVudCh7IG1vZGFsOiBtb2RhbCwgZGF0YTogZGF0YSB9KSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwb3AoKTogTW9kYWwge1xuXHRcdGNvbnN0IG1vZGFscyA9IHRoaXMubW9kYWxzJC5nZXRWYWx1ZSgpO1xuXHRcdGlmIChtb2RhbHMubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBtb2RhbCA9IG1vZGFscy5wb3AoKTtcblx0XHRcdGlmICghbW9kYWxzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdtb2RhbC1hY3RpdmUnKTtcblx0XHRcdH1cblx0XHRcdHRoaXMubW9kYWxzJC5uZXh0KG1vZGFscyk7XG5cdFx0XHRyZXR1cm4gbW9kYWw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlKG1vZGFsOiBNb2RhbCk6IE1vZGFsIHtcblx0XHRjb25zdCBtb2RhbHMgPSB0aGlzLm1vZGFscyQuZ2V0VmFsdWUoKTtcblx0XHRpZiAobW9kYWxzLmxlbmd0aCAmJiBtb2RhbHNbbW9kYWxzLmxlbmd0aCAtIDFdID09PSBtb2RhbCkge1xuXHRcdFx0bW9kYWxzLnBvcCgpO1xuXHRcdFx0aWYgKCFtb2RhbHMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5tb2RhbHMkLm5leHQobW9kYWxzKTtcblx0XHRcdHJldHVybiBtb2RhbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVBbGwoKTogTW9kYWwge1xuXHRcdGNvbnN0IG1vZGFscyA9IHRoaXMubW9kYWxzJC5nZXRWYWx1ZSgpO1xuXHRcdGlmIChtb2RhbHMubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBtb2RhbCA9IG1vZGFscy5wb3AoKTtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xuXHRcdFx0dGhpcy5tb2RhbHMkLm5leHQoW10pO1xuXHRcdFx0cmV0dXJuIG1vZGFsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHQvKlxuXHRpbml0KGNvbXBvbmVudDogYW55LCBwcm92aWRlcnM6IG9iamVjdCwgb3V0cHV0czogb2JqZWN0KSB7XG5cdFx0Y29uc3QgY29uZmlnID0geyBpbnB1dHM6IHByb3ZpZGVycywgb3V0cHV0cyB9O1xuXHRcdHRoaXMuZG9tU2VydmljZS5hcHBlbmRDb21wb25lbnRUbyh0aGlzLm1vZGFsRWxlbWVudElkLCBjb21wb25lbnQsIGNvbmZpZyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbEVsZW1lbnRJZCkuY2xhc3NOYW1lID0gJ3Nob3cnO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3ZlcmxheUVsZW1lbnRJZCkuY2xhc3NOYW1lID0gJ3Nob3cnO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLmRvbVNlcnZpY2UucmVtb3ZlQ29tcG9uZW50KCk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbEVsZW1lbnRJZCkuY2xhc3NOYW1lID0gJ2hpZGRlbic7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vdmVybGF5RWxlbWVudElkKS5jbGFzc05hbWUgPSAnaGlkZGVuJztcblx0fVxuXHQqL1xuXG59XG4iXX0=