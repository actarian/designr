/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
var SafeStylePipe = /** @class */ (function () {
    function SafeStylePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} style
     * @return {?}
     */
    SafeStylePipe.prototype.transform = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    SafeStylePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'safeStyle'
                },] },
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SafeStylePipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    /** @nocollapse */ SafeStylePipe.ngInjectableDef = i0.defineInjectable({ factory: function SafeStylePipe_Factory() { return new SafeStylePipe(i0.inject(i1.DomSanitizer)); }, token: SafeStylePipe, providedIn: "root" });
    return SafeStylePipe;
}());
export { SafeStylePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SafeStylePipe.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1zdHlsZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi90cnVzdC9zYWZlLXN0eWxlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUV6RDtJQVNDLHVCQUNTLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDNUIsQ0FBQzs7Ozs7SUFFTCxpQ0FBUzs7OztJQUFULFVBQVUsS0FBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBZkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxXQUFXO2lCQUNqQjtnQkFFQSxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVJRLFlBQVk7Ozt3QkFEckI7Q0FtQkMsQUFoQkQsSUFnQkM7U0FUWSxhQUFhOzs7Ozs7SUFHeEIsa0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBQaXBlKHtcclxuXHRuYW1lOiAnc2FmZVN0eWxlJ1xyXG59KVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FmZVN0eWxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcclxuXHQpIHsgfVxyXG5cclxuXHR0cmFuc2Zvcm0oc3R5bGU6IHN0cmluZykge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShzdHlsZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==