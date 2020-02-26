import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
var TrustPipe = /** @class */ (function () {
    function TrustPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    TrustPipe.prototype.transform = function (text) {
        return this.sanitizer.bypassSecurityTrustHtml(text);
        // return this.sanitizer.bypassSecurityTrustStyle(text);
        // return this.sanitizer.bypassSecurityTrustXxx(text); - see docs
    };
    TrustPipe.ɵfac = function TrustPipe_Factory(t) { return new (t || TrustPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
    TrustPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "safeHtml", type: TrustPipe, pure: true });
    return TrustPipe;
}());
export { TrustPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TrustPipe, [{
        type: Pipe,
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJ1c3QvdHJ1c3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUV6RDtJQUtDLG1CQUNTLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDNUIsQ0FBQztJQUVMLDZCQUFTLEdBQVQsVUFBVSxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCx3REFBd0Q7UUFDeEQsaUVBQWlFO0lBQ2xFLENBQUM7c0VBVlcsU0FBUztnRUFBVCxTQUFTO29CQU50QjtDQWlCQyxBQWRELElBY0M7U0FYWSxTQUFTO2tEQUFULFNBQVM7Y0FIckIsSUFBSTtlQUFDO2dCQUNMLElBQUksRUFBRSxVQUFVO2FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHtcblx0bmFtZTogJ3NhZmVIdG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUcnVzdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG5cdCkgeyB9XG5cblx0dHJhbnNmb3JtKHRleHQ6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0ZXh0KTtcblx0XHQvLyByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHRleHQpO1xuXHRcdC8vIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0WHh4KHRleHQpOyAtIHNlZSBkb2NzXG5cdH1cbn1cbiJdfQ==