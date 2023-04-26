/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var TrustPipe = /** @class */ (function () {
    function TrustPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    TrustPipe.prototype.transform = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return this.sanitizer.bypassSecurityTrustHtml(text);
        // return this.sanitizer.bypassSecurityTrustStyle(text);
        // return this.sanitizer.bypassSecurityTrustXxx(text); - see docs
    };
    TrustPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'safeHtml'
                },] }
    ];
    /** @nocollapse */
    TrustPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return TrustPipe;
}());
export { TrustPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TrustPipe.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJ1c3QvdHJ1c3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpEO0lBS0MsbUJBQ1MsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUM1QixDQUFDOzs7OztJQUVMLDZCQUFTOzs7O0lBQVQsVUFBVSxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCx3REFBd0Q7UUFDeEQsaUVBQWlFO0lBQ2xFLENBQUM7O2dCQWJELElBQUksU0FBQztvQkFDTCxJQUFJLEVBQUUsVUFBVTtpQkFDaEI7Ozs7Z0JBSlEsWUFBWTs7SUFnQnJCLGdCQUFDO0NBQUEsQUFkRCxJQWNDO1NBWFksU0FBUzs7Ozs7O0lBR3BCLDhCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ3NhZmVIdG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJ1c3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxyXG5cdCkgeyB9XHJcblxyXG5cdHRyYW5zZm9ybSh0ZXh0OiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0ZXh0KTtcclxuXHRcdC8vIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodGV4dCk7XHJcblx0XHQvLyByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFh4eCh0ZXh0KTsgLSBzZWUgZG9jc1xyXG5cdH1cclxufVxyXG4iXX0=