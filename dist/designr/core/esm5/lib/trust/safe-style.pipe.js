/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1zdHlsZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi90cnVzdC9zYWZlLXN0eWxlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUV6RDtJQVNDLHVCQUNTLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDNUIsQ0FBQzs7Ozs7SUFFTCxpQ0FBUzs7OztJQUFULFVBQVUsS0FBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBZkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxXQUFXO2lCQUNqQjtnQkFFQSxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVJRLFlBQVk7Ozt3QkFEckI7Q0FtQkMsQUFoQkQsSUFnQkM7U0FUWSxhQUFhOzs7Ozs7SUFHeEIsa0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHtcblx0bmFtZTogJ3NhZmVTdHlsZSdcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNhZmVTdHlsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG5cdCkgeyB9XG5cblx0dHJhbnNmb3JtKHN0eWxlOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcblx0fVxufVxuIl19