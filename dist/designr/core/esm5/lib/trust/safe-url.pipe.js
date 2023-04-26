/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    SafeUrlPipe.prototype.transform = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeUrlPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'safeUrl'
                },] },
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SafeUrlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    /** @nocollapse */ SafeUrlPipe.ngInjectableDef = i0.defineInjectable({ factory: function SafeUrlPipe_Factory() { return new SafeUrlPipe(i0.inject(i1.DomSanitizer)); }, token: SafeUrlPipe, providedIn: "root" });
    return SafeUrlPipe;
}());
export { SafeUrlPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SafeUrlPipe.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS11cmwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJ1c3Qvc2FmZS11cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRXpEO0lBU0MscUJBQ1MsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUM1QixDQUFDOzs7OztJQUVMLCtCQUFTOzs7O0lBQVQsVUFBVSxHQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkFmRCxJQUFJLFNBQUM7b0JBQ0wsSUFBSSxFQUFFLFNBQVM7aUJBQ2Y7Z0JBRUEsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFSUSxZQUFZOzs7c0JBRHJCO0NBbUJDLEFBaEJELElBZ0JDO1NBVFksV0FBVzs7Ozs7O0lBR3RCLGdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ3NhZmVVcmwnXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYWZlVXJsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcclxuXHQpIHsgfVxyXG5cclxuXHR0cmFuc2Zvcm0odXJsOiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodXJsKTtcclxuXHR9XHJcbn1cclxuIl19