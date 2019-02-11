/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Injectable, Pipe } from '@angular/core';
import { CustomAsyncPipe } from '../pipes/custom-async.pipe';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
import * as i1 from "./label.service";
export class LabelAsyncPipe {
    /**
     * @param {?} changeDetector
     * @param {?} labelService
     */
    constructor(changeDetector, labelService) {
        this.changeDetector = changeDetector;
        this.labelService = labelService;
        this.asyncPipe = new CustomAsyncPipe(this.changeDetector);
    }
    /**
     * @param {?} key
     * @param {?=} text
     * @param {?=} params
     * @return {?}
     */
    transform(key, text, params) {
        return this.asyncPipe.transform(this.labelService.getKey(key, text, params));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.asyncPipe.dispose();
    }
}
LabelAsyncPipe.decorators = [
    { type: Pipe, args: [{
                name: 'labelAsync',
                pure: false
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LabelAsyncPipe.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: LabelService }
];
/** @nocollapse */ LabelAsyncPipe.ngInjectableDef = i0.defineInjectable({ factory: function LabelAsyncPipe_Factory() { return new LabelAsyncPipe(i0.inject(i0.ChangeDetectorRef), i0.inject(i1.LabelService)); }, token: LabelAsyncPipe, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LabelAsyncPipe.prototype.asyncPipe;
    /**
     * @type {?}
     * @private
     */
    LabelAsyncPipe.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    LabelAsyncPipe.prototype.labelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwtYXN5bmMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWxzL2xhYmVsLWFzeW5jLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQWEsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFVL0MsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBSTFCLFlBQ1MsY0FBaUMsRUFDakMsWUFBaUM7UUFEakMsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUV6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQVcsRUFBRSxJQUFhLEVBQUUsTUFBWTtRQUNqRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBekJELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLEtBQUs7YUFDWDtZQUVBLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVpRLGlCQUFpQjtZQUdqQixZQUFZOzs7Ozs7OztJQVlwQixtQ0FBbUM7Ozs7O0lBR2xDLHdDQUF5Qzs7Ozs7SUFDekMsc0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdGFibGUsIE9uRGVzdHJveSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tQXN5bmNQaXBlIH0gZnJvbSAnLi4vcGlwZXMvY3VzdG9tLWFzeW5jLnBpcGUnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IExhYmVsU2VydmljZSB9IGZyb20gJy4vbGFiZWwuc2VydmljZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2xhYmVsQXN5bmMnLFxuXHRwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGFiZWxBc3luY1BpcGUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdHByaXZhdGUgYXN5bmNQaXBlOiBDdXN0b21Bc3luY1BpcGU7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0cHJpdmF0ZSBsYWJlbFNlcnZpY2U6IExhYmVsU2VydmljZTxMYWJlbD4sXG5cdCkge1xuXHRcdHRoaXMuYXN5bmNQaXBlID0gbmV3IEN1c3RvbUFzeW5jUGlwZSh0aGlzLmNoYW5nZURldGVjdG9yKTtcblx0fVxuXG5cdHRyYW5zZm9ybShrZXk6IHN0cmluZywgdGV4dD86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5hc3luY1BpcGUudHJhbnNmb3JtKHRoaXMubGFiZWxTZXJ2aWNlLmdldEtleShrZXksIHRleHQsIHBhcmFtcykpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5hc3luY1BpcGUuZGlzcG9zZSgpO1xuXHR9XG5cbn1cbiJdfQ==