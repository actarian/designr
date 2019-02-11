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
        return this.modals$.pipe(map((modals) => {
            return modals.length ? modals[modals.length - 1] : null;
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdWkvbW9kYWwvbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFnQixNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFLckUsTUFBTSxPQUFPLFlBQVk7Ozs7SUFJeEIsWUFDOEIsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUhoRCxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQVUsRUFBRSxDQUFDLENBQUM7SUFJdkMsQ0FBQzs7OztJQUVMLFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN2QixHQUFHLENBQUMsQ0FBQyxNQUFlLEVBQUUsRUFBRTtZQUN2QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQVk7UUFDcEIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7O2tCQUNqQyxJQUFJLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBZTtZQUMxRCxJQUFJLENBQUMsU0FB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QUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUN6RCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNqQztZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDOzs7OztJQUVPLFNBQVM7O2NBQ1YsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1FBQ3RDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTs7a0JBQ1osS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QixPQUFPLEtBQUssQ0FBQztTQUNiO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQzs7O1lBdEdELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7Ozt5Q0FNRSxNQUFNLFNBQUMsV0FBVzs7Ozs7SUFIcEIsK0JBQTJDOzs7OztJQUcxQyxrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTW9kYWwsIE1vZGFsQ2xvc2VFdmVudCwgTW9kYWxDb21wbGV0ZUV2ZW50IH0gZnJvbSAnLi9tb2RhbCc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZSB7XG5cblx0bW9kYWxzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TW9kYWxbXT4oW10pO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nXG5cdCkgeyB9XG5cblx0Z2V0SW5mb3MoKTogT2JzZXJ2YWJsZTxNb2RhbD4ge1xuXHRcdHJldHVybiB0aGlzLm1vZGFscyQucGlwZShcblx0XHRcdG1hcCgobW9kYWxzOiBNb2RhbFtdKSA9PiB7XG5cdFx0XHRcdHJldHVybiBtb2RhbHMubGVuZ3RoID8gbW9kYWxzW21vZGFscy5sZW5ndGggLSAxXSA6IG51bGw7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRhZGRDbGFzcyhuYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0Y29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSBhcyBIVE1MRWxlbWVudDtcblx0XHRcdGJvZHkuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVDbGFzcyhuYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0Y29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSBhcyBIVE1MRWxlbWVudDtcblx0XHRcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcblx0XHR9XG5cdH1cblxuXHRvcGVuKG1vZGFsOiBNb2RhbCk6IEV2ZW50RW1pdHRlcjxNb2RhbENvbXBsZXRlRXZlbnQgfCBNb2RhbENsb3NlRXZlbnQ+IHtcblx0XHR0aGlzLmFkZENsYXNzKCdtb2RhbC1hY3RpdmUnKTtcblx0XHRtb2RhbCA9IG5ldyBNb2RhbChtb2RhbCk7XG5cdFx0Y29uc3QgbW9kYWxzID0gdGhpcy5tb2RhbHMkLmdldFZhbHVlKCk7XG5cdFx0bW9kYWxzLnB1c2gobW9kYWwpO1xuXHRcdHRoaXMubW9kYWxzJC5uZXh0KG1vZGFscyk7XG5cdFx0cmV0dXJuIG1vZGFsLmVtaXR0ZXI7XG5cdFx0Ly8gZXZlbnQgZW1pdHRlciBib3VuZCB0byBtb2RhbHMkXG5cdH1cblxuXHRjb21wbGV0ZShtb2RhbD86IE1vZGFsLCBkYXRhPzogYW55KTogdm9pZCB7XG5cdFx0bW9kYWwgPSBtb2RhbCA/IHRoaXMucmVtb3ZlKG1vZGFsKSA6IHRoaXMucG9wKCk7XG5cdFx0aWYgKG1vZGFsKSB7XG5cdFx0XHRtb2RhbC5lbWl0dGVyLmVtaXQobmV3IE1vZGFsQ29tcGxldGVFdmVudCh7IG1vZGFsOiBtb2RhbCwgZGF0YTogZGF0YSB9KSk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UobW9kYWw/OiBNb2RhbCwgZGF0YT86IGFueSk6IHZvaWQge1xuXHRcdG1vZGFsID0gdGhpcy5yZW1vdmVBbGwoKTtcblx0XHRpZiAobW9kYWwpIHtcblx0XHRcdG1vZGFsLmVtaXR0ZXIuZW1pdChuZXcgTW9kYWxDbG9zZUV2ZW50KHsgbW9kYWw6IG1vZGFsLCBkYXRhOiBkYXRhIH0pKTtcblx0XHR9XG5cdH1cblxuXHRwcmV2KG1vZGFsPzogTW9kYWwsIGRhdGE/OiBhbnkpOiB2b2lkIHtcblx0XHRtb2RhbCA9IG1vZGFsID8gdGhpcy5yZW1vdmUobW9kYWwpIDogdGhpcy5wb3AoKTtcblx0XHRpZiAobW9kYWwpIHtcblx0XHRcdG1vZGFsLmVtaXR0ZXIuZW1pdChuZXcgTW9kYWxDbG9zZUV2ZW50KHsgbW9kYWw6IG1vZGFsLCBkYXRhOiBkYXRhIH0pKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHBvcCgpOiBNb2RhbCB7XG5cdFx0Y29uc3QgbW9kYWxzID0gdGhpcy5tb2RhbHMkLmdldFZhbHVlKCk7XG5cdFx0aWYgKG1vZGFscy5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IG1vZGFsID0gbW9kYWxzLnBvcCgpO1xuXHRcdFx0aWYgKCFtb2RhbHMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5tb2RhbHMkLm5leHQobW9kYWxzKTtcblx0XHRcdHJldHVybiBtb2RhbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmUobW9kYWw6IE1vZGFsKTogTW9kYWwge1xuXHRcdGNvbnN0IG1vZGFscyA9IHRoaXMubW9kYWxzJC5nZXRWYWx1ZSgpO1xuXHRcdGlmIChtb2RhbHMubGVuZ3RoICYmIG1vZGFsc1ttb2RhbHMubGVuZ3RoIC0gMV0gPT09IG1vZGFsKSB7XG5cdFx0XHRtb2RhbHMucG9wKCk7XG5cdFx0XHRpZiAoIW1vZGFscy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbW9kYWwtYWN0aXZlJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm1vZGFscyQubmV4dChtb2RhbHMpO1xuXHRcdFx0cmV0dXJuIG1vZGFsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUFsbCgpOiBNb2RhbCB7XG5cdFx0Y29uc3QgbW9kYWxzID0gdGhpcy5tb2RhbHMkLmdldFZhbHVlKCk7XG5cdFx0aWYgKG1vZGFscy5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IG1vZGFsID0gbW9kYWxzLnBvcCgpO1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbW9kYWwtYWN0aXZlJyk7XG5cdFx0XHR0aGlzLm1vZGFscyQubmV4dChbXSk7XG5cdFx0XHRyZXR1cm4gbW9kYWw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdC8qXG5cdGluaXQoY29tcG9uZW50OiBhbnksIHByb3ZpZGVyczogb2JqZWN0LCBvdXRwdXRzOiBvYmplY3QpIHtcblx0XHRjb25zdCBjb25maWcgPSB7IGlucHV0czogcHJvdmlkZXJzLCBvdXRwdXRzIH07XG5cdFx0dGhpcy5kb21TZXJ2aWNlLmFwcGVuZENvbXBvbmVudFRvKHRoaXMubW9kYWxFbGVtZW50SWQsIGNvbXBvbmVudCwgY29uZmlnKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsRWxlbWVudElkKS5jbGFzc05hbWUgPSAnc2hvdyc7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vdmVybGF5RWxlbWVudElkKS5jbGFzc05hbWUgPSAnc2hvdyc7XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuZG9tU2VydmljZS5yZW1vdmVDb21wb25lbnQoKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsRWxlbWVudElkKS5jbGFzc05hbWUgPSAnaGlkZGVuJztcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm92ZXJsYXlFbGVtZW50SWQpLmNsYXNzTmFtZSA9ICdoaWRkZW4nO1xuXHR9XG5cdCovXG5cbn1cbiJdfQ==