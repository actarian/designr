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
        return this.modals$.pipe(map((/**
         * @param {?} modals
         * @return {?}
         */
        function (modals) {
            return modals.length ? modals[modals.length - 1] : null;
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBZ0IsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBRXJFO0lBT0Msc0JBQzhCLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFIaEQsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFVLEVBQUUsQ0FBQyxDQUFDO0lBSXZDLENBQUM7Ozs7SUFFTCwrQkFBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN2QixHQUFHOzs7O1FBQUMsVUFBQyxNQUFlO1lBQ25CLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN6RCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwrQkFBUTs7OztJQUFSLFVBQVMsSUFBWTtRQUNwQixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7Z0JBQ2pDLElBQUksR0FBRyxtQkFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFlO1lBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsR0FB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QUFRLEVBQUU7UUFDdEMsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUN6RCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNqQztZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDOzs7OztJQUVPLGdDQUFTOzs7O0lBQWpCOztZQUNPLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7O2dCQUNaLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEIsT0FBTyxLQUFLLENBQUM7U0FDYjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUM7U0FDWjtJQUNGLENBQUM7O2dCQXRHRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7OzZDQU1FLE1BQU0sU0FBQyxXQUFXOzs7dUJBZHJCO0NBNkhDLEFBdkhELElBdUhDO1NBcEhZLFlBQVk7OztJQUV4QiwrQkFBMkM7Ozs7O0lBRzFDLGtDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE1vZGFsLCBNb2RhbENsb3NlRXZlbnQsIE1vZGFsQ29tcGxldGVFdmVudCB9IGZyb20gJy4vbW9kYWwnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcclxuXHJcblx0bW9kYWxzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TW9kYWxbXT4oW10pO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nXHJcblx0KSB7IH1cclxuXHJcblx0Z2V0SW5mb3MoKTogT2JzZXJ2YWJsZTxNb2RhbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kYWxzJC5waXBlKFxyXG5cdFx0XHRtYXAoKG1vZGFsczogTW9kYWxbXSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBtb2RhbHMubGVuZ3RoID8gbW9kYWxzW21vZGFscy5sZW5ndGggLSAxXSA6IG51bGw7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0YWRkQ2xhc3MobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIGFzIEhUTUxFbGVtZW50O1xyXG5cdFx0XHRib2R5LmNsYXNzTGlzdC5hZGQobmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZW1vdmVDbGFzcyhuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHRcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9wZW4obW9kYWw6IE1vZGFsKTogRXZlbnRFbWl0dGVyPE1vZGFsQ29tcGxldGVFdmVudCB8IE1vZGFsQ2xvc2VFdmVudD4ge1xyXG5cdFx0dGhpcy5hZGRDbGFzcygnbW9kYWwtYWN0aXZlJyk7XHJcblx0XHRtb2RhbCA9IG5ldyBNb2RhbChtb2RhbCk7XHJcblx0XHRjb25zdCBtb2RhbHMgPSB0aGlzLm1vZGFscyQuZ2V0VmFsdWUoKTtcclxuXHRcdG1vZGFscy5wdXNoKG1vZGFsKTtcclxuXHRcdHRoaXMubW9kYWxzJC5uZXh0KG1vZGFscyk7XHJcblx0XHRyZXR1cm4gbW9kYWwuZW1pdHRlcjtcclxuXHRcdC8vIGV2ZW50IGVtaXR0ZXIgYm91bmQgdG8gbW9kYWxzJFxyXG5cdH1cclxuXHJcblx0Y29tcGxldGUobW9kYWw/OiBNb2RhbCwgZGF0YT86IGFueSk6IHZvaWQge1xyXG5cdFx0bW9kYWwgPSBtb2RhbCA/IHRoaXMucmVtb3ZlKG1vZGFsKSA6IHRoaXMucG9wKCk7XHJcblx0XHRpZiAobW9kYWwpIHtcclxuXHRcdFx0bW9kYWwuZW1pdHRlci5lbWl0KG5ldyBNb2RhbENvbXBsZXRlRXZlbnQoeyBtb2RhbDogbW9kYWwsIGRhdGE6IGRhdGEgfSkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xvc2UobW9kYWw/OiBNb2RhbCwgZGF0YT86IGFueSk6IHZvaWQge1xyXG5cdFx0bW9kYWwgPSB0aGlzLnJlbW92ZUFsbCgpO1xyXG5cdFx0aWYgKG1vZGFsKSB7XHJcblx0XHRcdG1vZGFsLmVtaXR0ZXIuZW1pdChuZXcgTW9kYWxDbG9zZUV2ZW50KHsgbW9kYWw6IG1vZGFsLCBkYXRhOiBkYXRhIH0pKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByZXYobW9kYWw/OiBNb2RhbCwgZGF0YT86IGFueSk6IHZvaWQge1xyXG5cdFx0bW9kYWwgPSBtb2RhbCA/IHRoaXMucmVtb3ZlKG1vZGFsKSA6IHRoaXMucG9wKCk7XHJcblx0XHRpZiAobW9kYWwpIHtcclxuXHRcdFx0bW9kYWwuZW1pdHRlci5lbWl0KG5ldyBNb2RhbENsb3NlRXZlbnQoeyBtb2RhbDogbW9kYWwsIGRhdGE6IGRhdGEgfSkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwb3AoKTogTW9kYWwge1xyXG5cdFx0Y29uc3QgbW9kYWxzID0gdGhpcy5tb2RhbHMkLmdldFZhbHVlKCk7XHJcblx0XHRpZiAobW9kYWxzLmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCBtb2RhbCA9IG1vZGFscy5wb3AoKTtcclxuXHRcdFx0aWYgKCFtb2RhbHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbW9kYWwtYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5tb2RhbHMkLm5leHQobW9kYWxzKTtcclxuXHRcdFx0cmV0dXJuIG1vZGFsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbW92ZShtb2RhbDogTW9kYWwpOiBNb2RhbCB7XHJcblx0XHRjb25zdCBtb2RhbHMgPSB0aGlzLm1vZGFscyQuZ2V0VmFsdWUoKTtcclxuXHRcdGlmIChtb2RhbHMubGVuZ3RoICYmIG1vZGFsc1ttb2RhbHMubGVuZ3RoIC0gMV0gPT09IG1vZGFsKSB7XHJcblx0XHRcdG1vZGFscy5wb3AoKTtcclxuXHRcdFx0aWYgKCFtb2RhbHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbW9kYWwtYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5tb2RhbHMkLm5leHQobW9kYWxzKTtcclxuXHRcdFx0cmV0dXJuIG1vZGFsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbW92ZUFsbCgpOiBNb2RhbCB7XHJcblx0XHRjb25zdCBtb2RhbHMgPSB0aGlzLm1vZGFscyQuZ2V0VmFsdWUoKTtcclxuXHRcdGlmIChtb2RhbHMubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IG1vZGFsID0gbW9kYWxzLnBvcCgpO1xyXG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdtb2RhbC1hY3RpdmUnKTtcclxuXHRcdFx0dGhpcy5tb2RhbHMkLm5leHQoW10pO1xyXG5cdFx0XHRyZXR1cm4gbW9kYWw7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qXHJcblx0aW5pdChjb21wb25lbnQ6IGFueSwgcHJvdmlkZXJzOiBvYmplY3QsIG91dHB1dHM6IG9iamVjdCkge1xyXG5cdFx0Y29uc3QgY29uZmlnID0geyBpbnB1dHM6IHByb3ZpZGVycywgb3V0cHV0cyB9O1xyXG5cdFx0dGhpcy5kb21TZXJ2aWNlLmFwcGVuZENvbXBvbmVudFRvKHRoaXMubW9kYWxFbGVtZW50SWQsIGNvbXBvbmVudCwgY29uZmlnKTtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxFbGVtZW50SWQpLmNsYXNzTmFtZSA9ICdzaG93JztcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3ZlcmxheUVsZW1lbnRJZCkuY2xhc3NOYW1lID0gJ3Nob3cnO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdHRoaXMuZG9tU2VydmljZS5yZW1vdmVDb21wb25lbnQoKTtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxFbGVtZW50SWQpLmNsYXNzTmFtZSA9ICdoaWRkZW4nO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vdmVybGF5RWxlbWVudElkKS5jbGFzc05hbWUgPSAnaGlkZGVuJztcclxuXHR9XHJcblx0Ki9cclxuXHJcbn1cclxuIl19