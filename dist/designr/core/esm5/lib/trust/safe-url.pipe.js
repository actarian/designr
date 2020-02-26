import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
    SafeUrlPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "safeUrl", type: SafeUrlPipe, pure: true });
    SafeUrlPipe.ɵprov = i0.ɵɵdefineInjectable({ token: SafeUrlPipe, factory: SafeUrlPipe.ɵfac, providedIn: 'root' });
    return SafeUrlPipe;
}());
export { SafeUrlPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SafeUrlPipe, [{
        type: Pipe,
        args: [{
                name: 'safeUrl'
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS11cmwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJ1c3Qvc2FmZS11cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFFekQ7SUFTQyxxQkFDUyxTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzVCLENBQUM7SUFFTCwrQkFBUyxHQUFULFVBQVUsR0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQzswRUFSVyxXQUFXO2lFQUFYLFdBQVc7dURBQVgsV0FBVyxXQUFYLFdBQVcsbUJBRlgsTUFBTTtzQkFSbkI7Q0FtQkMsQUFoQkQsSUFnQkM7U0FUWSxXQUFXO2tEQUFYLFdBQVc7Y0FQdkIsSUFBSTtlQUFDO2dCQUNMLElBQUksRUFBRSxTQUFTO2FBQ2Y7O2NBRUEsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHtcblx0bmFtZTogJ3NhZmVVcmwnXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTYWZlVXJsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcblx0KSB7IH1cblxuXHR0cmFuc2Zvcm0odXJsOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVybCk7XG5cdH1cbn1cbiJdfQ==