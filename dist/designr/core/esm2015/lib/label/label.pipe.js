/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Injectable, NgZone, Pipe } from '@angular/core';
import { first } from 'rxjs/operators';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
import * as i1 from "./label.service";
export class LabelPipe {
    /**
     * @param {?} zone
     * @param {?} changeDetector
     * @param {?} labelService
     */
    constructor(zone, changeDetector, labelService) {
        this.zone = zone;
        this.changeDetector = changeDetector;
        this.labelService = labelService;
        // this.asyncPipe = new CustomAsyncPipe(this.changeDetector);
    }
    /**
     * @param {?} key
     * @param {?} text
     * @param {?} params
     * @return {?}
     */
    getKey(key, text, params) {
        if (this.key$) {
            return;
        }
        this.key$ = this.labelService.getKey(key, text, params);
        this.key$.pipe(first()).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.value = value;
            // this.changeDetector.markForCheck();
        }));
    }
    /**
     * @param {?} key
     * @param {?=} text
     * @param {?=} params
     * @return {?}
     */
    transform(key, text, params) {
        if (this.value) {
            return this.value;
        }
        this.getKey(key, text, params); // this.asyncPipe.transform(this.labelService.getKey(key, text, params));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // this.asyncPipe.dispose();
    }
}
LabelPipe.decorators = [
    { type: Pipe, args: [{
                name: 'label',
                pure: false
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LabelPipe.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: LabelService }
];
/** @nocollapse */ LabelPipe.ngInjectableDef = i0.defineInjectable({ factory: function LabelPipe_Factory() { return new LabelPipe(i0.inject(i0.NgZone), i0.inject(i0.ChangeDetectorRef), i0.inject(i1.LabelService)); }, token: LabelPipe, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.asyncPipe;
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.value;
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.key$;
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.labelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQWEsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUV0RyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFVL0MsTUFBTSxPQUFPLFNBQVM7Ozs7OztJQUtyQixZQUNTLElBQVksRUFDWixjQUFpQyxFQUNqQyxZQUFpQztRQUZqQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUV6Qyw2REFBNkQ7SUFDOUQsQ0FBQzs7Ozs7OztJQUlELE1BQU0sQ0FBQyxHQUFXLEVBQUUsSUFBWSxFQUFFLE1BQVc7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNiLEtBQUssRUFBRSxDQUNQLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLHNDQUFzQztRQUN2QyxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBVyxFQUFFLElBQWEsRUFBRSxNQUFZO1FBQ2pELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLHlFQUF5RTtJQUMxRyxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLDRCQUE0QjtJQUM3QixDQUFDOzs7WUE3Q0QsSUFBSSxTQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1g7WUFFQSxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFkdUMsTUFBTTtZQUFyQyxpQkFBaUI7WUFLakIsWUFBWTs7Ozs7Ozs7SUFZcEIsOEJBQW1DOzs7OztJQUNuQywwQkFBc0I7Ozs7O0lBVXRCLHlCQUFpQzs7Ozs7SUFQaEMseUJBQW9COzs7OztJQUNwQixtQ0FBeUM7Ozs7O0lBQ3pDLGlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBJbmplY3RhYmxlLCBOZ1pvbmUsIE9uRGVzdHJveSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXN0b21Bc3luY1BpcGUgfSBmcm9tICcuLi9waXBlcy9jdXN0b20tYXN5bmMucGlwZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi9sYWJlbC5zZXJ2aWNlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnbGFiZWwnLFxuXHRwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGFiZWxQaXBlIGltcGxlbWVudHMgT25EZXN0cm95LCBQaXBlVHJhbnNmb3JtIHtcblxuXHRwcml2YXRlIGFzeW5jUGlwZTogQ3VzdG9tQXN5bmNQaXBlO1xuXHRwcml2YXRlIHZhbHVlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0cHJpdmF0ZSBsYWJlbFNlcnZpY2U6IExhYmVsU2VydmljZTxMYWJlbD4sXG5cdCkge1xuXHRcdC8vIHRoaXMuYXN5bmNQaXBlID0gbmV3IEN1c3RvbUFzeW5jUGlwZSh0aGlzLmNoYW5nZURldGVjdG9yKTtcblx0fVxuXG5cdHByaXZhdGUga2V5JDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG5cdGdldEtleShrZXk6IHN0cmluZywgdGV4dDogc3RyaW5nLCBwYXJhbXM6IGFueSkge1xuXHRcdGlmICh0aGlzLmtleSQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5rZXkkID0gdGhpcy5sYWJlbFNlcnZpY2UuZ2V0S2V5KGtleSwgdGV4dCwgcGFyYW1zKTtcblx0XHR0aGlzLmtleSQucGlwZShcblx0XHRcdGZpcnN0KCksXG5cdFx0KS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0Ly8gdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcblx0XHR9KTtcblx0fVxuXG5cdHRyYW5zZm9ybShrZXk6IHN0cmluZywgdGV4dD86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHRpZiAodGhpcy52YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0fVxuXHRcdHRoaXMuZ2V0S2V5KGtleSwgdGV4dCwgcGFyYW1zKTsgLy8gdGhpcy5hc3luY1BpcGUudHJhbnNmb3JtKHRoaXMubGFiZWxTZXJ2aWNlLmdldEtleShrZXksIHRleHQsIHBhcmFtcykpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0Ly8gdGhpcy5hc3luY1BpcGUuZGlzcG9zZSgpO1xuXHR9XG5cbn1cbiJdfQ==