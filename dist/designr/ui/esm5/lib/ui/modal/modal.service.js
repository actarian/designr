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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBZ0IsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBRXJFO0lBT0Msc0JBQzhCLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFIaEQsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFVLEVBQUUsQ0FBQyxDQUFDO0lBSXZDLENBQUM7Ozs7SUFFTCwrQkFBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN2QixHQUFHLENBQUMsVUFBQyxNQUFlO1lBQ25CLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwrQkFBUTs7OztJQUFSLFVBQVMsSUFBWTtRQUNwQixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7Z0JBQ2pDLElBQUksR0FBRyxtQkFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFlO1lBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxD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LEVBQUU7UUFDdEMsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUN6RCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNqQztZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDOzs7OztJQUVPLGdDQUFTOzs7O0lBQWpCOztZQUNPLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7O2dCQUNaLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEIsT0FBTyxLQUFLLENBQUM7U0FDYjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUM7U0FDWjtJQUNGLENBQUM7O2dCQXRHRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7OzZDQU1FLE1BQU0sU0FBQyxXQUFXOzs7dUJBZHJCO0NBNkhDLEFBdkhELElBdUhDO1NBcEhZLFlBQVk7OztJQUV4QiwrQkFBMkM7Ozs7O0lBRzFDLGtDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxDbG9zZUV2ZW50LCBNb2RhbENvbXBsZXRlRXZlbnQgfSBmcm9tICcuL21vZGFsJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcblxuXHRtb2RhbHMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNb2RhbFtdPihbXSk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmdcblx0KSB7IH1cblxuXHRnZXRJbmZvcygpOiBPYnNlcnZhYmxlPE1vZGFsPiB7XG5cdFx0cmV0dXJuIHRoaXMubW9kYWxzJC5waXBlKFxuXHRcdFx0bWFwKChtb2RhbHM6IE1vZGFsW10pID0+IHtcblx0XHRcdFx0cmV0dXJuIG1vZGFscy5sZW5ndGggPyBtb2RhbHNbbW9kYWxzLmxlbmd0aCAtIDFdIDogbnVsbDtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGFkZENsYXNzKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0Ym9keS5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXHRcdH1cblx0fVxuXG5cdHJlbW92ZUNsYXNzKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xuXHRcdH1cblx0fVxuXG5cdG9wZW4obW9kYWw6IE1vZGFsKTogRXZlbnRFbWl0dGVyPE1vZGFsQ29tcGxldGVFdmVudCB8IE1vZGFsQ2xvc2VFdmVudD4ge1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xuXHRcdG1vZGFsID0gbmV3IE1vZGFsKG1vZGFsKTtcblx0XHRjb25zdCBtb2RhbHMgPSB0aGlzLm1vZGFscyQuZ2V0VmFsdWUoKTtcblx0XHRtb2RhbHMucHVzaChtb2RhbCk7XG5cdFx0dGhpcy5tb2RhbHMkLm5leHQobW9kYWxzKTtcblx0XHRyZXR1cm4gbW9kYWwuZW1pdHRlcjtcblx0XHQvLyBldmVudCBlbWl0dGVyIGJvdW5kIHRvIG1vZGFscyRcblx0fVxuXG5cdGNvbXBsZXRlKG1vZGFsPzogTW9kYWwsIGRhdGE/OiBhbnkpOiB2b2lkIHtcblx0XHRtb2RhbCA9IG1vZGFsID8gdGhpcy5yZW1vdmUobW9kYWwpIDogdGhpcy5wb3AoKTtcblx0XHRpZiAobW9kYWwpIHtcblx0XHRcdG1vZGFsLmVtaXR0ZXIuZW1pdChuZXcgTW9kYWxDb21wbGV0ZUV2ZW50KHsgbW9kYWw6IG1vZGFsLCBkYXRhOiBkYXRhIH0pKTtcblx0XHR9XG5cdH1cblxuXHRjbG9zZShtb2RhbD86IE1vZGFsLCBkYXRhPzogYW55KTogdm9pZCB7XG5cdFx0bW9kYWwgPSB0aGlzLnJlbW92ZUFsbCgpO1xuXHRcdGlmIChtb2RhbCkge1xuXHRcdFx0bW9kYWwuZW1pdHRlci5lbWl0KG5ldyBNb2RhbENsb3NlRXZlbnQoeyBtb2RhbDogbW9kYWwsIGRhdGE6IGRhdGEgfSkpO1xuXHRcdH1cblx0fVxuXG5cdHByZXYobW9kYWw/OiBNb2RhbCwgZGF0YT86IGFueSk6IHZvaWQge1xuXHRcdG1vZGFsID0gbW9kYWwgPyB0aGlzLnJlbW92ZShtb2RhbCkgOiB0aGlzLnBvcCgpO1xuXHRcdGlmIChtb2RhbCkge1xuXHRcdFx0bW9kYWwuZW1pdHRlci5lbWl0KG5ldyBNb2RhbENsb3NlRXZlbnQoeyBtb2RhbDogbW9kYWwsIGRhdGE6IGRhdGEgfSkpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcG9wKCk6IE1vZGFsIHtcblx0XHRjb25zdCBtb2RhbHMgPSB0aGlzLm1vZGFscyQuZ2V0VmFsdWUoKTtcblx0XHRpZiAobW9kYWxzLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgbW9kYWwgPSBtb2RhbHMucG9wKCk7XG5cdFx0XHRpZiAoIW1vZGFscy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbW9kYWwtYWN0aXZlJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm1vZGFscyQubmV4dChtb2RhbHMpO1xuXHRcdFx0cmV0dXJuIG1vZGFsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZShtb2RhbDogTW9kYWwpOiBNb2RhbCB7XG5cdFx0Y29uc3QgbW9kYWxzID0gdGhpcy5tb2RhbHMkLmdldFZhbHVlKCk7XG5cdFx0aWYgKG1vZGFscy5sZW5ndGggJiYgbW9kYWxzW21vZGFscy5sZW5ndGggLSAxXSA9PT0gbW9kYWwpIHtcblx0XHRcdG1vZGFscy5wb3AoKTtcblx0XHRcdGlmICghbW9kYWxzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdtb2RhbC1hY3RpdmUnKTtcblx0XHRcdH1cblx0XHRcdHRoaXMubW9kYWxzJC5uZXh0KG1vZGFscyk7XG5cdFx0XHRyZXR1cm4gbW9kYWw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQWxsKCk6IE1vZGFsIHtcblx0XHRjb25zdCBtb2RhbHMgPSB0aGlzLm1vZGFscyQuZ2V0VmFsdWUoKTtcblx0XHRpZiAobW9kYWxzLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgbW9kYWwgPSBtb2RhbHMucG9wKCk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdtb2RhbC1hY3RpdmUnKTtcblx0XHRcdHRoaXMubW9kYWxzJC5uZXh0KFtdKTtcblx0XHRcdHJldHVybiBtb2RhbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0Lypcblx0aW5pdChjb21wb25lbnQ6IGFueSwgcHJvdmlkZXJzOiBvYmplY3QsIG91dHB1dHM6IG9iamVjdCkge1xuXHRcdGNvbnN0IGNvbmZpZyA9IHsgaW5wdXRzOiBwcm92aWRlcnMsIG91dHB1dHMgfTtcblx0XHR0aGlzLmRvbVNlcnZpY2UuYXBwZW5kQ29tcG9uZW50VG8odGhpcy5tb2RhbEVsZW1lbnRJZCwgY29tcG9uZW50LCBjb25maWcpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxFbGVtZW50SWQpLmNsYXNzTmFtZSA9ICdzaG93Jztcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm92ZXJsYXlFbGVtZW50SWQpLmNsYXNzTmFtZSA9ICdzaG93Jztcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5kb21TZXJ2aWNlLnJlbW92ZUNvbXBvbmVudCgpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxFbGVtZW50SWQpLmNsYXNzTmFtZSA9ICdoaWRkZW4nO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3ZlcmxheUVsZW1lbnRJZCkuY2xhc3NOYW1lID0gJ2hpZGRlbic7XG5cdH1cblx0Ki9cblxufVxuIl19